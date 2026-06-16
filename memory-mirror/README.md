# `memory-mirror/` — public reference snapshots (PR-gated)

This directory holds the *canonical* state of every tracked standard, as
this project observes it. One `reference_<source_id>.md` file per source,
plus a `_raw_snapshots/` archive of the original content each observation
was based on.

## Rules

- **Never edit a file in this directory by hand on `main`.** Every change
  arrives via a PR — usually from the routine, occasionally from a manual
  baseline PR using the `default.md` PR template with the severity
  explicitly noted in the body.
- **`_raw_snapshots/` is append-only.** Do not rewrite or compress past
  snapshots. They are the integrity anchor for the diff chain.
- **The frontmatter schema is mandatory.** Every `reference_*.md` validates
  against `memory-mirror/schema/reference.schema.json` (added in Phase 2).
- **Licence:** content in this directory is CC-BY-4.0. See `LICENSE-CONTENT`
  at the repo root.

## What a `reference_*.md` contains

Frontmatter:

- `name`, `description`, `type: reference`
- `source_id` — must match an entry in `sources/literature-watch.yaml`
- `source_url` — canonical URL
- `last_observed_at` — ISO-8601 timestamp
- `last_observed_commit_or_version` — commit SHA or version tag
- `snapshot_path` — relative path under `_raw_snapshots/`
- `provenance_chain` — list of `{timestamp, commit, pr}` triples

Body:

- `## Summary` — 3–5 extractive sentences anchored to specific sections
- `## Key Sections` — short bullets per major heading
- `## Audit-Relevant Anchors` — clauses an auditor would cite directly
- `## Recent Changes (rolling, last 5)` — severity-tagged delta log
- `## Cross-references` — memory files that consume this reference

Full template lives at `memory-mirror/reference_template.md` (added in
Phase 2).
