# ai-governance-watch

**📖 Live library → <https://siegfriedbolz.github.io/ai-governance-watch/>**

> *You are on the **source repository**. The published, searchable auditor-facing
> site is the link above — it is built from `memory-mirror/` and served via GitHub
> Pages, not rendered here on GitHub.*

> ⚠️ **Work in Progress — Phase 5 of [Ajit Jaokar's 6-phase Second-Brain roadmap][ajit-pulse].**
> Architecture is stable and the implementation plan is approved (v1.1).
> The NIST adapter is in pilot. Other adapters land in waves over the coming
> weeks. **Not production-grade until v0.3.** Pinned issues track each wave.

Continuous, PR-gated watch over the AI governance standards an external AI
risk auditor has to keep current — NIST AI RMF (incl. GenAI Profile), the EU
AI Act and its implementing acts, ISO/IEC 42001, the CSA Agentic Profile, and
the Berkeley CLTC cyber-threshold work. Every detected change is proposed as
a pull request against a versioned Markdown mirror, with snapshot hashes and
provenance metadata attached. Nothing lands in the canonical reference layer
without a human reviewing the diff.

## Who this is for

- **External AI risk auditors / assessors** who need a defensible answer to
  "what changed in this standard since my last engagement?"
- **Compliance leads / AI governance officers** maintaining an internal map of
  the regulatory landscape against a moving target.
- **Standards watchers and researchers** who want a reproducible, forkable
  delta history rather than a curated newsletter.
- **Claude Skill builders** who want a reference implementation of the
  *Skill → Cloud Routine → PR-gated memory mirror* pattern.

## Architecture at a glance

```text
                +-----------------------------+
                |  sources/literature-watch   |
                |          .yaml              |   <-- URL + adapter dispatch
                +--------------+--------------+
                               |
                               v
                +-----------------------------+
                |  Claude Code Routine         |  <-- sole master trigger
                |  literature-watch-weekly     |      (Anthropic cloud):
                |  schedule + GitHub webhook   |      weekly run, plus a hook
                |  on sources/*.yaml change    |      on source-list changes
                +--------------+--------------+
                               |
                               v
   +-------------------------------------------------------+
   |  skill: ai-governance-watch                            |
   |   adapters/  ->  fetch + extract  ->  ContentEnvelope  |
   |   lib/diff_engine        ->  Δ-objects                 |
   |   lib/severity_classifier ->  editorial | substantive  |
   |                              | version_bump            |
   |   lib/pr_builder         ->  draft PR + state.json     |
   +---------------------------+---------------------------+
                               |
                               v
              +----------------+-----------------+
              |   GitHub Pull Request (gated)    |
              |   /inbox/  ---- review ---->     |
              |             memory-mirror/       |
              +----------------+-----------------+
                               |
                               v
            (manual sync to a private memory mirror)
```

Three deliberately separated layers:

- **Skill** — declarative *how*. Lives in `skills/ai-governance-watch/`.
- **Routine** — scheduled *when*. A **single** Claude Code Routine on
  Anthropic's cloud is the only thing that runs the pipeline in production.
  It fires on a weekly schedule and on a GitHub webhook when
  `sources/literature-watch.yaml` changes (to baseline a newly added source).
  `scripts/local_trigger.py` exists only for local development and dry-runs —
  it is **not** a parallel production trigger, so there is no two-writer race
  to coordinate.
- **Pull request** — human-reviewed *whether*. Hard gate, no auto-merge.

## Source coverage

Status follows the rollout plan from `docs/implementation-plan.md`
(see also the [Roadmap pinned issue][roadmap-issue]).

| Source                            | Domain               | Adapter           | Cadence  | State    |
| --------------------------------- | -------------------- | ----------------- | -------- | -------- |
| NIST AI RMF Playbook              | NIST AI RMF          | `github_repo`     | weekly   | pilot    |
| NIST AI RMF Core (100-1) + GenAI Profile (600-1) | NIST AI RMF | `html_extraction` | weekly | planned |
| EU AI Act (Reg. 2024/1689) + amendments | EU AI Act      | `eurlex_celex`    | weekly   | planned  |
| EU AI Office guidance             | EU AI Act            | `html_extraction` | weekly (digest) | planned |
| ISO/IEC 42001                     | ISO/IEC 42001 (AIMS) | `iso_metadata`    | monthly  | planned  |
| ISO/IEC 23894                     | ISO AI Risk Mgmt     | `iso_metadata`    | monthly  | planned  |
| CSA Agentic Profile               | CSA / Agentic AI     | `html_extraction` | weekly   | planned  |
| Berkeley CLTC                     | Cyber Thresholds     | `html_extraction` | monthly  | planned  |
| NIST ITL standards landscape      | Standards inventory  | `html_extraction` | monthly  | planned  |
| UK AI Regulation White Paper      | UK jurisdiction      | `html_extraction` | quarterly| planned  |
| DORA                              | Operational resilience | `eurlex_celex`  | quarterly| planned  |
| EU Cyber Resilience Act (Reg. 2024/2847) | Product cybersecurity | `eurlex_celex` + `html_extraction` | monthly | planned |
| Switzerland (DSG / EDÖB / CETS 225) | Swiss jurisdiction   | `html_extraction` | monthly  | planned  |
| Council of Europe AI Convention (CETS 225) | International treaty | `html_extraction` | monthly  | planned  |

(*"planned"* means scoped in the plan; *"pilot"* means actively iterating;
*"live"* means routinely produces PRs.)

## How to fork and customise

This repo is intentionally forkable. If you want your own watch over a
different domain (financial regulation, privacy law, sector-specific AI
guidance), the minimum changes are:

1. Fork the repository.
2. Edit `sources/literature-watch.yaml` — keep the schema, swap the source
   list.
3. If you need a new source type, add an adapter under
   `skills/ai-governance-watch/adapters/<your_type>.py`. The adapter
   contract is documented in the skill's `SKILL.md`.
4. Update `docs/secrets-inventory.md` if your new sources need credentials.
5. Re-run `pre-commit install` and run `pre-commit run --all-files` before
   your first commit.

The crawl, diff, severity-classification, and PR-building logic stays the
same.

## Repository layout

```text
.
├── README.md                  <- you are here
├── LICENSE                    <- MIT (covers code under skills/, scripts/, .github/)
├── LICENSE-CONTENT            <- CC-BY-4.0 (covers prose under memory-mirror/, docs/)
├── CONTRIBUTING.md            <- PR mechanics, severity rules, audit-trail discipline
├── SECURITY.md                <- disclosure policy, threat model
├── CODE_OF_CONDUCT.md         <- Contributor Covenant 2.1
├── .gitignore / .gitattributes / .pre-commit-config.yaml / .markdownlint.json
│
├── mkdocs.yml                 <- MkDocs Material config for the published library
├── requirements-docs.txt      <- docs-site build deps (Pages job only)
│
├── sources/                   <- the URL-source-of-truth + JSON schema (Phase 2)
├── skills/ai-governance-watch <- the Claude Skill + reference template (Phase 3+)
├── memory-mirror/             <- PUBLISHED library: reference snapshots, index, changelog; PR-gated
├── inbox/                     <- PR landing zone for proposed updates
├── scripts/                   <- local dev CLI + sync helpers
├── docs/                      <- methodology, secrets inventory, routine setup (NOT published)
└── .github/                   <- workflows (lint, test-skill, pages), PR templates
```

## The published library (GitHub Pages)

The auditor-facing site is built with **MkDocs Material** and deployed to
GitHub Pages by `.github/workflows/pages.yml` on every push to `main`. It is a
single, searchable library: a landing `index.md`, one page per watched
standard, and a `changelog.md`.

**Live URL:** <https://siegfriedbolz.github.io/ai-governance-watch/>
(one-time setup: **Settings → Pages → Build and deployment → Source = "GitHub
Actions"**, on a public repo; the URL then also appears under Settings → Pages
after the first successful run).

Only `memory-mirror/` is ever published (`docs_dir: memory-mirror`, plus
`exclude_docs`). The internal `docs/`, this README, `SECURITY.md`, the
implementation plan, and the private memory mirrors are **never** part of the
rendered site. Preview locally with:

```bash
pip install -r requirements-docs.txt
mkdocs serve
```

## Licensing

Dual licence by deliberate design:

- **Code** (`skills/`, `scripts/`, `.github/`, and any other source files):
  [MIT][mit] — see [`LICENSE`](LICENSE).
- **Content** (`memory-mirror/`, `docs/`, the source catalogue, every
  Markdown file under those directories): [Creative Commons Attribution 4.0
  International][cc-by-4] — see [`LICENSE-CONTENT`](LICENSE-CONTENT).

The standards themselves (NIST, ISO, EU regulations, etc.) keep whatever
licence their original publishers apply; this repo only extracts metadata
and short snippets within the bounds of fair use / quotation rights, and
attributes every snippet via the `source_url` and `last_observed_commit_or_version`
fields in each `reference_*.md`.

## Acknowledgement

This project is the operational implementation of **Phase 5 (Active
Monitoring)** from Ajit Jaokar's LinkedIn pulse [*"The Enterprise
(collective) Second Brain using Claude Skills"*][ajit-pulse] (May 2026).
Ajit's framing — that a personal Markdown knowledge base becomes an
executable second brain through Claude Skills — is the intellectual
backbone of this repo. The watch pipeline here is one concrete realisation
of his 6-phase roadmap; the same substrate (plain Markdown, typed
frontmatter) is reused across phases.

---

[ajit-pulse]: https://www.linkedin.com/pulse/enterprise-collective-second-brain-using-claude-skills-ajit-jaokar-ykode/
[roadmap-issue]: https://github.com/siegfriedbolz/ai-governance-watch/issues
[mit]: https://opensource.org/licenses/MIT
[cc-by-4]: https://creativecommons.org/licenses/by/4.0/
