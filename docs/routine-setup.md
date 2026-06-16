# Routine Setup — `literature-watch-weekly`

The watch pipeline runs as **one** Claude Code Routine on Anthropic's cloud.
This is the only production trigger. It runs when your laptop is off, opens a
PR when it finds a change, and otherwise stays quiet. There is no parallel
local runner in production, so there are no lock files and no two-writer race
to coordinate.

## Routine configuration

| Field             | Value                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| Name              | `literature-watch-weekly`                                                                       |
| Schedule          | Weekly, Monday 06:00 UTC (07:00/08:00 BST/CEST — before the workday, so reviews arrive in the morning) |
| Second trigger    | GitHub webhook on changes to `sources/literature-watch.yaml` → baseline a newly added source    |
| Run mode          | One run batches **all** sources (`mode: crawl_all`) — never one routine per source (that would blow the daily-run cap) |
| Output channel    | A pull request against `inbox/` **plus** a GitHub issue summary, so changes are reviewable from mobile |
| Repo write access | Fine-grained PAT `GH_PAT` (see `secrets-inventory.md`)                                          |

### Prompt template (kept short and declarative)

> Run the `ai-governance-watch` skill in `crawl_all` mode. For every source in
> `sources/literature-watch.yaml`, fetch, diff against the last snapshot,
> classify severity, and — only for `substantive` or `version_bump` changes —
> open a pull request against `inbox/` using the
> `literature_delta` template. Do not write to `memory-mirror/` directly. Do
> not merge anything.

## One-time setup steps

1. **Create the fine-grained PAT** in GitHub: scope it to
   `siegfriedbolz/ai-governance-watch` only, with `contents: write`,
   `pull_requests: write`, `issues: write`. Nothing else.
2. **Store it in the routine environment / credential vault** as `GH_PAT`.
   Never paste it into the repo, a workflow file, or a PR.
3. **Create the routine** from the Claude Code session that invokes the skill,
   save it as `literature-watch-weekly`, and set the weekly schedule.
4. **Connect the GitHub trigger** (native Anthropic ↔ GitHub integration) and
   point it at `sources/literature-watch.yaml`. Signature verification is
   handled on the platform side — no `WEBHOOK_SECRET` is stored in this repo.
5. **Dry-run once** before enabling the schedule: run the skill in `dry_run`
   mode and confirm it produces a sensible delta report without opening a PR.

## Security model in one paragraph

The secret-bearing layer (the routine, which holds `GH_PAT`) and the
untrusted-input layer (contributor pull requests, which run in this repo's
`lint`/`test-skill` workflows) never touch. Contributor PRs run on the
`pull_request` event, which for forks gets a read-only token and **no**
secrets — GitHub's design. We never use `pull_request_target`. The routine is
triggered only by schedule and the source-change webhook, never by a
contributor PR. Therefore no external contributor can reach `GH_PAT`. Full
detail in `secrets-inventory.md`.

## Operational guards

- **Maintenance mode:** set `paused: true` in `sources/literature-watch.yaml`
  during holidays; the routine then runs in `dry_run` and logs only, no PRs.
- **Daily-run cap:** one routine, one run, all sources batched internally.
- **Rate limiting:** per-domain token bucket inside the skill, independent of
  Anthropic's run cap (see Appendix E of the implementation plan).
- **Hardening roadmap:** migrate `GH_PAT` → GitHub App installation token or
  OIDC short-lived token (v0.3), which removes the last long-lived secret.

## Local development (not a production trigger)

`scripts/local_trigger.py` runs the **same** adapters and lib modules as the
skill, for development and dry-runs only:

```bash
python scripts/local_trigger.py --mode dry_run --source nist_playbook
```

It does not run the LLM summarisation step and is never scheduled in
production. Use it to iterate on an adapter, then let the routine do the real
weekly run.
