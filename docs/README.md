# `docs/`

Long-form documentation that doesn't belong at the repo root.

| File                        | Phase | Purpose |
| --------------------------- | ----- | ------- |
| `secrets-inventory.md`      | 0     | Exhaustive list of secrets the system needs, with scope and rotation cadence. No actual secret values. |
| `adapter-contract.md`       | 3     | The watch contract every adapter and every source entry follows: target kinds (document, landing page, news feed, legal search), successor risk with `watch_hint`, per-target intervals, the envelope an adapter returns. Fixed 2026-09-21. |
| `routine-setup.md`          | 5     | How the single `literature-watch-weekly` Claude Code Routine is configured: schedule, triggers, the one PAT, and the fork-PR isolation that protects it. |
| `implementation-plan.md`    | 10    | Mirror of the approved implementation plan, with public-friendly wording. Authoritative copy lives in the private memory mirror; this file is generated from it. |
| `methodology.md`            | 10    | The audit-trail and provenance methodology described in plain English, with diagrams. Linkable from external talks and proposals. |
| `source-catalog.md`         | 10    | Generated from `sources/literature-watch.yaml` at every merge. Lists every watched source, adapter type, cadence, last observed change. |

Files marked Phase 10 are placeholders today; they fill in as the source
coverage expands. The Phase 0 file is here from day one because secret
hygiene is non-negotiable.
