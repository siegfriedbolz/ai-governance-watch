# Contributing to `ai-governance-watch`

This is currently a single-owner project. The contribution rules below still
apply — *to the owner himself*. The point of writing them down is that the PR
mechanics here **are the methodology statement** of the project: every change
to a tracked standard goes through a documented, audited workflow, with no
back doors. That is the same discipline an external AI risk auditor must be
able to demonstrate to a client.

## The two kinds of pull request

### 1. Routine-generated PRs (the watch pipeline)

Produced automatically by the `ai-governance-watch` skill when it detects a
change in a tracked source. They land on the `delta/<source_id>/<timestamp>`
branch and target `main`.

Required PR body fields (enforced by the
`.github/PULL_REQUEST_TEMPLATE/literature_delta.md` template):

- `Source ID` — must exist in `sources/literature-watch.yaml`.
- `Source URL` — the canonical URL the change was observed against.
- `Snapshot hashes` — SHA-256 before and after, plus the relative path of
  the new raw snapshot under `memory-mirror/_raw_snapshots/`.
- `Severity` — one of `editorial`, `substantive`, `version_bump`. See the
  severity rubric in the implementation plan (Appendix D).
- `Quoted diff snippets` — Markdown excerpts of the actual change, never raw
  HTML dumps.
- `Proposed memory-mirror update` — the new state of the relevant
  `reference_*.md`, included as the PR's primary diff.
- `Auditor note` — one paragraph: in operational terms, what does this
  change mean for an audit engagement that currently cites this standard?

PR title format:

    [<severity>] <source_id>: <human-readable change summary>

Labels are applied automatically by the skill: `severity:<level>`,
`source:<id>`, `auto-generated`.

#### Merging routine PRs

- **No squash.** Routine PR commit history is the audit trail and must
  remain intact after merge.
- **No auto-merge.** Even `editorial`-classified PRs require explicit human
  review and merge. (`editorial` changes are normally suppressed entirely
  per the plan — when they do reach a PR, that itself is a signal worth
  looking at.)
- **Always merge into `main`.** No long-lived feature branches.

### 2. Human-authored PRs (everything else)

Schema changes, new adapter types, skill refactors, documentation, etc. Use
the default PR template (`.github/PULL_REQUEST_TEMPLATE/default.md`).

- **Squash is allowed** for human PRs (cleaner history).
- **Pre-commit must be green.** Run `pre-commit run --all-files` locally
  first; the same hooks run in CI.
- **Update `docs/` when you change behaviour.** The methodology document is
  part of the contract this repo makes with downstream auditors.

## Source-of-truth rules

- `sources/literature-watch.yaml` is the only legitimate place to add or
  remove a watched source. A change there fires the routine's native GitHub
  source-change trigger, which baselines the newly added source (see
  `docs/routine-setup.md`).
- `memory-mirror/reference_*.md` is **never** edited directly. It only
  changes via a routine PR or, in rare manual-baselining cases, via a PR
  using the `default.md` template with severity explicitly noted.
- `_raw_snapshots/` are append-only. Do not rewrite or compress past
  snapshots — they are the integrity anchor for the diff chain.

## Severity classification rubric (summary)

| Severity        | Triggers                                                                 | PR? |
| --------------- | ------------------------------------------------------------------------ | --- |
| `editorial`     | Whitespace, punctuation, link-text rename (target unchanged), navigation | No (silent log) |
| `substantive`   | New paragraph (>50 words), changed definition, new recommendation, new control mapping, changed numeric threshold | Yes |
| `version_bump`  | File-level version metadata change, new repo tag, new standard revision | Yes (priority) |

Full rubric and per-source overrides live in
`skills/ai-governance-watch/lib/severity_rules.yaml` (added in Phase 3).

## Commit-message convention

Routine PRs use the format produced by the skill — do not edit. Human
commits follow:

    <type>(<scope>): <one-line summary>

    <optional body, wrapped at 80 columns>

`<type>` is one of: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`,
`schema`, `adapter`, `skill`. `<scope>` is usually a directory name
(`adapters/eurlex_celex`, `lib/diff_engine`, `docs/methodology`).

## Local development setup

```bash
# Clone (already done in this workspace).
cd ai-governance-watch

# Set up Python + pre-commit.
python3 -m venv .venv
source .venv/bin/activate
pip install pre-commit
pre-commit install

# Run all checks against the current tree.
pre-commit run --all-files

# Run the local trigger in dry-run mode (no PRs). This is a DEV-ONLY helper,
# not a production trigger — production is the single Claude Code Routine
# (see docs/routine-setup.md). Available from Phase 5 onward — placeholder today.
python scripts/local_trigger.py --mode dry_run
```

## Reporting a problem

- Security issues — see `SECURITY.md`.
- Source you'd like added — open an Issue describing the source, the
  jurisdiction it covers, and whether it's stable enough to be worth a
  weekly check.
- Suspected false-positive diff — open an Issue with the PR number and the
  reason you believe the change is not actually substantive. The severity
  rubric is meant to evolve.
