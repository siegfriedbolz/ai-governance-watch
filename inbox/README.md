# `inbox/` — PR landing zone for proposed updates

When the watch routine detects a change in a tracked source, the
`pr_builder` creates a branch named `delta/<source_id>/<iso_timestamp>` and
opens a pull request that targets `main`. The proposed update to
`memory-mirror/reference_<source_id>.md` is the PR's primary diff. The
`inbox/` directory exists so routine-generated PRs always have a valid
landing zone on `main`, even before any change has been merged.

This directory is not where you write or store anything by hand. Treat it
as the "letter slot" for the PR builder. After a PR is merged into
`memory-mirror/`, nothing remains in `inbox/` — it's a transit point, not
an archive.

The audit-trail rationale is in `CONTRIBUTING.md`. Severity rules are in
`.../lib/severity_rules.yaml` (added in Phase 3).
