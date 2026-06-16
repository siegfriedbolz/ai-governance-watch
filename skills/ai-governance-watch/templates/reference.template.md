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

!!! info "Provenance & licence"
    **Source:** [<canonical-url>](<canonical-url>) ·
    **Last observed:** `<YYYY-MM-DD>` ·
    **Version/commit:** `<...>` ·
    **Status:** <planned | pilot | live> ·
    **Licence:** <license string> (<reproduction tier>)

## Summary

<3–5 extractive sentences, each anchored to a specific section of the source.
No interpretation beyond what the source states.>

## In plain language

!!! note "Our explanation, not the official text"
    Plain-language summary in our own words — **not** the official or normative
    text of the standard. For the authoritative wording, follow the source link.
    This is general information, not legal advice.

<2–4 short sentences: what this standard is and what it asks for, in your own
words. For proprietary/paywalled sources (e.g. ISO) explain the concepts only —
never reproduce the normative wording.>

## Key terms

- **<Term>** — <plain-language definition in your own words>.
- **<Term>** — <…>

<!-- OPTIONAL "## In depth" — ONLY for public-domain / open-attribution sources
     (NIST, EU/EUR-Lex, UK OGL). Show the boundary clearly: put verbatim source
     wording in `!!! quote "Source text — <provider> (<licence>)"` blocks, each
     followed by an "**In our words —**" explanation. NEVER add verbatim quotes
     for proprietary/metadata-only sources (e.g. ISO). -->

## Key Sections

- **<Section / clause>** — <one line>
- **<Section / clause>** — <one line>

## Audit-Relevant Anchors

Clauses an external auditor would cite directly in an engagement:

- <clause / control id> — <what it obliges, in operational terms>

## Auditor Checklist

Concrete checks an assessor runs against this standard (evidence-oriented):

- [ ] <check point — what to ask for / verify>
- [ ] <check point>

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences — confirm
against the official crosswalks before relying on them in an engagement.

| This standard | NIST AI RMF | ISO/IEC 42001 | EU AI Act |
| ------------- | ----------- | ------------- | --------- |
| <element>     | <function>  | <clause>      | <article> |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `<YYYY-MM-DD>` | baseline | Initial baseline snapshot. |

## Sources

Public web sources only — this file is published. Keep any local/private
provenance (eBooks, course notes, private indexes) in your own private mirror,
never in this file.

- **Primary (web):** [<title>](<url>)
