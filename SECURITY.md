# Security Policy

## Reporting a vulnerability

If you find a security issue — a way to forge a PR, a way to bypass the
PR-gate, a path traversal in an adapter, a leaked secret, an SSRF in the
HTML extractor, a malicious-source injection through `sources.yaml`, or
anything else that looks like it could compromise the integrity of the
watch pipeline — please **do not** open a public GitHub issue.

Report it privately through GitHub's
**[Security Advisory form](https://github.com/siegfriedbolz/ai-governance-watch/security/advisories/new)**
("Report a vulnerability") — it is visible only to the maintainer. Include:

- A short description of the issue.
- Steps to reproduce, or a proof-of-concept.
- The commit SHA / release tag where you observed it.

You will get an acknowledgement within **5 business days**. Fixes will be
prioritised by impact:

| Impact                                                                | Target fix window |
| --------------------------------------------------------------------- | ----------------- |
| Pipeline integrity (forged PR, gate bypass, snapshot tampering)       | 7 days            |
| Confidentiality (leaked secret, exposed PAT scope)                    | 24 hours          |
| Availability (DoS against the routine, rate-limit exhaustion)         | 14 days           |
| Hardening / defence-in-depth (no exploit, but weakens posture)        | 30 days           |

If a fix requires a security advisory, it will be coordinated via a GitHub
Security Advisory and credited to the reporter unless they request
anonymity.

## Threat model (v0.1, will evolve with the plan phases)

The asset the project protects is **the integrity of the memory mirror**:
the claim that every line in `memory-mirror/reference_*.md` traces back to
a verifiable observation of a public standard at a documented point in
time.

### In scope

- Forged or malicious pull requests pretending to be routine output.
- Adapter input validation: SSRF, path traversal, command injection via
  source-configuration values.
- Snapshot tampering: any rewrite, deletion, or unsigned modification of
  files under `memory-mirror/_raw_snapshots/`.
- Secret leakage from the routine, the GitHub Actions, or commits to the
  repo.
- Webhook spoofing: requests to the routine that did not originate from a
  legitimate GitHub webhook delivery. (Signature verification is handled by
  the Anthropic ↔ GitHub integration; this repo runs no webhook endpoint.)
- Secret exfiltration via a malicious contributor pull request.
- Source-list poisoning: an attacker convinces the maintainer to add a
  malicious URL to `sources/literature-watch.yaml`.

### Out of scope (for v0.1)

- Compromise of the maintainer's GitHub account or Anthropic account
  itself. (Covered by GitHub / Anthropic platform security.)
- Compromise of upstream sources (e.g. NIST GitHub repo). Handled by:
  hash-pinning of each observation, plus a planned cross-source
  cross-check in v0.4.
- Attacks on consumers of the public memory mirror (e.g. malicious data
  injected into a downstream fork). Out of scope as the mirror is intended
  as a starting point, not a sealed artifact.

## Defensive controls already in this repo

These were not added after the fact — they are part of the Phase 0 / Phase
1 deliverables on purpose.

- **Pre-commit `gitleaks`** scans every staged change for secret tokens
  before they reach `git history`. Bypassing it with `--no-verify` is a
  policy violation.
- **`.gitignore`** excludes `.env*`, `*.pem`, `*.key`, `*.p12`, `*.pfx`,
  `secrets/` — see the file for the full list.
- **`docs/secrets-inventory.md`** enumerates the exhaustive list of secrets
  the system needs; anything not on that list does not belong in the repo.
- **Domain allowlist (planned, Phase 2)** in `sources/schema/sources.schema.json`
  restricts which hosts adapters may fetch from.
- **Single-trigger isolation** — the watch pipeline runs only in one Claude
  Code Routine, triggered by schedule and the native GitHub source-change
  hook. The secret-bearing routine never executes contributor code.
- **Fork-PR secret isolation** — contributor PRs run on the `pull_request`
  event; for forks GitHub provides a read-only token and no repository
  secrets. `pull_request_target` is never used. A contributor PR therefore
  cannot reach the production PAT.
- **Least-privilege PAT** — the production token `GH_PAT` (deliberately *not*
  named `GITHUB_TOKEN`, to avoid confusion with the Actions built-in) is a
  fine-grained PAT scoped to this single repository with `contents:write`,
  `pull_requests:write`, `issues:write` only. It lives in the routine
  env/vault, never in the repo or in GitHub Actions secrets.
- **TLS verification** is mandatory in every adapter; `verify=False` is not
  permitted anywhere in the code base.

## Coordinated disclosure

This project is single-owner. Coordinated disclosure means: report
privately, give the maintainer the windows above, then it is fine to write
about the issue publicly. A patched version with a fix will reference the
advisory ID.
