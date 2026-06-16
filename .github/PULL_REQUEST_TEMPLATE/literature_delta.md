<!--
  Routine-generated pull request — produced by the ai-governance-watch
  Claude Skill on detection of a change in a tracked source.

  All fields below are MANDATORY. Empty fields are a CI failure. Severity
  must match the rubric in CONTRIBUTING.md (and the canonical YAML rubric
  in skills/ai-governance-watch/lib/severity_rules.yaml).

  Do NOT delete sections. If a section is not applicable, write "n/a" with
  a one-line justification.
-->

## Source

- **Source ID:** `<id from sources/literature-watch.yaml>`
- **Source URL:** <canonical URL>
- **Domain:** `<domain tag, e.g. NIST AI RMF / EU AI Act / ISO 42001>`
- **Adapter:** `<github_repo | eurlex_celex | iso_metadata | html_extraction | rss_feed>`

## Observation

- **Observed at (UTC):** `<ISO-8601 timestamp>`
- **Previous commit / version:** `<SHA / version tag / amendment ID>`
- **New commit / version:** `<SHA / version tag / amendment ID>`
- **Previous snapshot hash:** `sha256:<hex>`
- **New snapshot hash:** `sha256:<hex>`
- **New snapshot path:** `memory-mirror/_raw_snapshots/<source_id>/<timestamp>__<sha7>.<ext>`

## Severity

`<editorial | substantive | version_bump>`

**Rationale:** <one sentence — which rubric clause triggered this severity>

## What changed (quoted diff snippets)

> Quoted Markdown excerpts of the actual change, anchored to section
> headers. Never raw HTML dumps. Bot-friendly format:
>
>     ### <section heading>
>     - `removed:` "<quoted text>"
>     - `added:`   "<quoted text>"

<!-- routine-generated diff snippets go here -->

## Proposed memory-mirror change

The full proposed state of `memory-mirror/reference_<source_id>.md` is
included as the primary file diff of this PR. Highlights:

- Updated `last_observed_at`, `last_observed_commit_or_version`,
  `snapshot_path`.
- Appended entry to `provenance_chain` with this PR's commit + URL.
- Added entry to `## Recent Changes (rolling, last 5)` with severity tag.

## Auditor note

> In operational terms: what does this change mean for an audit engagement
> that currently cites this standard? Which controls / sections / tests
> would need to be re-considered? If "no operational impact", say so
> explicitly — that itself is an audit-worthy observation.

<!-- routine-generated 1–3 sentence auditor lens -->

## Linked memory files (downstream impact)

> Files in the maintainer's *private* memory mirror that currently consume
> this reference. Listed for human review — sync happens manually after merge
> per Phase 9 of the plan.

- `<file>.md` — <why this might need an edit>
- `<file>.md` — <why this might need an edit>

## Checklist (review gate)

- [ ] Severity classification matches rubric.
- [ ] Snapshot hashes verify against the binary file under
      `_raw_snapshots/`.
- [ ] Quoted diff snippets actually appear in the new snapshot.
- [ ] `reference_*.md` frontmatter validates against the schema.
- [ ] No secret values leaked into snippets or auditor note.
- [ ] Auditor note is specific (not "this changed; please review").

<!-- After merge: do NOT squash. Routine PR history is the audit trail. -->
