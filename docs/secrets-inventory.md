# Secrets Inventory

This document enumerates every secret the `ai-governance-watch` system needs
to operate. It is intentionally a plain document, not a config file: no real
values live in this repository.

The system is **single-trigger**: one Claude Code Routine
(`literature-watch-weekly`) on Anthropic's cloud is the only thing that runs
the pipeline in production. There is no parallel local production runner, so
the secret surface is correspondingly small — exactly **one** long-lived
secret.

**Storage rules:**

- The one production secret lives in the **Claude Code Routine environment /
  credential vault** (Anthropic-hosted, decrypted only into the routine run,
  never written to disk in this repo). Rotation dates are tracked in a private
  note, not here.
- Local development uses a `.env` file that is excluded from version control
  (`.gitignore` covers `.env*`, except `.env.example` if and when added).
- GitHub Actions in this repo (`lint`, `test-skill`) require **no** repository
  secrets — see "Secrets explicitly NOT required" below.
- Every secret listed below has the smallest viable scope (least privilege).

---

## Secrets used by the watch pipeline

| Name     | Purpose                                                     | Scope / Permissions                                                                                                                                                  | Where it lives                                                                 | Rotation cadence |
| -------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------- |
| `GH_PAT` | Open PRs, post issue comments, read commits via GitHub API. | Fine-grained Personal Access Token, **write access only to `siegfriedbolz/ai-governance-watch`**. Permissions: `contents: write`, `pull_requests: write`, `issues: write`. No org-wide rights, no other repos. | Claude Code Routine env / credential vault. Local dev fallback: `.env`. | 90 days |

> **Naming note (deliberate, for auditability):** this PAT is called `GH_PAT`,
> **not** `GITHUB_TOKEN`. `GITHUB_TOKEN` is the *automatic, ephemeral* token
> GitHub Actions mints per workflow run — see below. Keeping the names distinct
> means a reader always knows which token a piece of code is using.

> **Why no `WEBHOOK_SECRET`:** the GitHub → routine trigger is a native
> Anthropic ↔ GitHub integration. Webhook signature verification happens on the
> Anthropic platform side; this repository neither runs its own webhook
> endpoint nor stores an HMAC secret for one. One fewer secret to guard.

---

## Secrets explicitly NOT required

These are listed so the surface stays auditable: nobody can claim a secret
"must have been added later" if it's not on this exhaustive list.

| Service / context             | Why no secret is needed                                                                                                                                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GitHub Actions** (`lint`, `test-skill`) | Both run with the automatic, per-run `GITHUB_TOKEN`, declared read-only (`permissions: contents: read`). It is minted at job start, expires at job end, and is never stored. No repo secret is wired into either workflow. |
| **Fork pull requests**        | A `pull_request` from a fork receives a **read-only** `GITHUB_TOKEN` and **no** repository secrets — this is GitHub's design, not configuration. A contributor PR therefore cannot reach `GH_PAT`. We never use `pull_request_target`. |
| NIST AI RMF Playbook          | Public GitHub repo (`usnistgov/AI-RMF-Playbook`). Read access via unauthenticated API is rate-limited but sufficient for weekly cadence. The routine's `GH_PAT` raises the limit to 5000 req/h — used for throughput, not for access. |
| EUR-Lex CELLAR                | Public SPARQL + REST endpoint. No auth.                                                                                                                                                                                                      |
| ISO catalog metadata          | Public web page; only metadata (title, version, date) is fetched. No auth.                                                                                                                                                                   |
| CSA Agentic Profile           | Public PDFs / web pages. No auth.                                                                                                                                                                                                            |
| Berkeley CLTC                 | Public PDFs / web pages. No auth.                                                                                                                                                                                                            |
| Anthropic API                 | The routine runs *inside* the Anthropic platform; the model identity is implicit. No external API key is stored in this repo.                                                                                                               |

---

## How a contributor PR cannot steal the secret

This is the linchpin of the single-owner, PR-gated model:

1. The **only** place `GH_PAT` exists is the routine env/vault — never in the
   repo, never in GitHub Actions secrets.
2. The watch run that uses `GH_PAT` is triggered **only** by the routine
   (schedule + the native GitHub source-change hook) — never by a contributor's
   `pull_request`.
3. The repo's own workflows (`lint`, `test-skill`) run contributor code, but on
   the `pull_request` event, which for forks is sandboxed: read-only token, no
   secrets. We deliberately avoid `pull_request_target`, which would expose
   secrets to fork code.

So the secret-bearing layer and the untrusted-input layer never touch.

---

## Pre-commit secret-leak protection

`gitleaks` runs as a pre-commit hook (see `.pre-commit-config.yaml`) **and** in
CI (`.github/workflows/lint.yml`). It scans every staged change for tokens that
match known patterns (GitHub PATs, AWS keys, generic high-entropy strings).

**False positives policy:** if `gitleaks` flags a string that is not actually
a secret (e.g. an example hash, a fixture commit SHA), add an allowlist entry
to `.gitleaks.toml` at the repo root and link the rationale back to this
document. Never bypass gitleaks with `--no-verify` on a real commit.

---

## Hardening notes for the routine

- Prefer a **GitHub App installation token or OIDC short-lived token** over a
  long-lived PAT once the routine integration supports it — then `GH_PAT`
  disappears entirely and this table has zero long-lived secrets. Tracked as a
  v0.3 hardening item.
- Pin any third-party GitHub Action to a commit SHA (not a moving tag) to
  prevent a compromised action from reading the run's token.

---

## In a real audit, this document would also include

These are deferred until v0.3 (third source live), because they only matter
once the system is actually operating:

- Provenance of how the secret was generated (which UI, which user, which
  timestamp).
- A pointer to the immutable rotation log (out of band — not in this repo).
- A "what to do if leaked" runbook with concrete first-30-minutes actions.
- Contact for the secret owner (Siegfried, single-owner project today).

Tracked under Phase 10 in the implementation plan.
