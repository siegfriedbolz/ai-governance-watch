---
name: "<Human title of the standard>"
description: "<One line: what this reference tracks and why it matters>"
type: reference
source_id: <must_match_sources_yaml_id>
source_url: "https://<canonical-url-on-the-allowlist>"
last_observed_at: "<YYYY-MM-DDThh:mm:ssZ>"
last_observed_commit_or_version: "<commit SHA | version tag | edition/date>"
snapshot_path: "_raw_snapshots/<source_id>/<hash>.html.gz"
provenance_chain:
  - timestamp: "<YYYY-MM-DDThh:mm:ssZ>"
    pr: "<#NN or URL>"
    change: baseline
---

# <Human title of the standard>

!!! info "Provenance"
    **Source:** [<canonical-url>](<canonical-url>) ·
    **Last observed:** `<YYYY-MM-DD>` ·
    **Version/commit:** `<...>` ·
    **Status:** <planned | pilot | live>

## Summary

<3–5 extractive sentences, each anchored to a specific section of the source.
No interpretation beyond what the source states.>

## Key Sections

- **<Section / clause>** — <one line>
- **<Section / clause>** — <one line>

## Audit-Relevant Anchors

Clauses an external auditor would cite directly in an engagement:

- <clause / control id> — <what it obliges, in operational terms>

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `<YYYY-MM-DD>` | baseline | Initial baseline snapshot. |

## Sources

Public web sources only — this file is published. Keep any local/private
provenance (eBooks, course notes, private indexes) in your own private mirror,
never in this file.

- **Primary (web):** [<title>](<url>)
