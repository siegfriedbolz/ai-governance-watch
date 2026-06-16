<!--
  Default template for HUMAN-AUTHORED pull requests.
  For routine-generated literature-delta PRs, use literature_delta.md.
-->

## Summary

<!-- One paragraph: what does this PR change, and why? -->

## Type of change

- [ ] `feat` — new capability (new adapter, new skill mode, new source)
- [ ] `fix` — bug fix (incorrect diff, broken severity rule, etc.)
- [ ] `docs` — documentation only
- [ ] `chore` — repo hygiene, dependency bumps, CI tweaks
- [ ] `refactor` — internal restructuring, no behavioural change
- [ ] `schema` — change to a JSON Schema or YAML schema
- [ ] `test` — test-only change

## Scope of impact

- [ ] Adapters (`skills/ai-governance-watch/adapters/`)
- [ ] Shared lib (`skills/ai-governance-watch/lib/`)
- [ ] Sources (`sources/literature-watch.yaml` or schema)
- [ ] Memory mirror layer (`memory-mirror/`)
- [ ] Scripts (`scripts/`)
- [ ] CI / workflows (`.github/`)
- [ ] Documentation (`docs/`, `*.md` at repo root)

## How was this verified locally?

<!-- Required. Even "ran pre-commit and manually inspected the diff" is
     acceptable, but it has to be written down. -->

- [ ] `pre-commit run --all-files` is green.
- [ ] If adapter changed: relevant fixtures in `tests/fixtures/` updated.
- [ ] If schema changed: all existing files still validate.
- [ ] If severity rubric changed: rationale documented in PR body.
- [ ] No secrets added.

## Related issues / plan phase

- Plan phase: `<e.g. Phase 3 — NIST pilot adapter>`
- Related issue: `<#nnn or n/a>`

## Reviewer checklist

- [ ] Change is scoped and reversible.
- [ ] Public-facing wording (README, docs) is consistent with v0.x status.
- [ ] No live secrets, no real PAT values, no leaked snapshot URLs to
      private resources.
- [ ] Severity rubric semantics preserved (if touched).
