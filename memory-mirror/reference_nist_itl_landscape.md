---
name: "NIST ITL — International AI Standards Landscape"
description: "NIST Information Technology Laboratory's tracking of the global AI standards landscape — an inventory/meta-source, not a standard itself."
type: reference
source_id: nist_itl_landscape
source_url: "https://www.nist.gov/artificial-intelligence/nist-information-technology-laboratory-itl-ai-program"
last_observed_at: "2026-06-16T00:00:00Z"
last_observed_commit_or_version: "ITL AI Program; latest landscape briefing: AI Standards Landscape webinar 2026-03-06"
provenance_chain:
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# NIST ITL — International AI Standards Landscape

!!! info "Provenance & licence"
    **Source:** [NIST ITL AI Program](https://www.nist.gov/artificial-intelligence/nist-information-technology-laboratory-itl-ai-program) ·
    **Last observed:** `2026-06-16` ·
    **Version:** latest briefing — ITL AI Standards Landscape webinar (2026-03-06) ·
    **Status:** planned ·
    **Licence:** U.S. Government work — public domain (`public-domain`)

## Summary

This entry tracks the **NIST Information Technology Laboratory (ITL) AI
Program**'s view of the **international AI standards landscape** — its role,
priorities, and progress. Unlike the other pages here, it is not a single
standard but a **meta-source / inventory**: it maps how the major
standards bodies (ISO/IEC JTC 1/SC 42, IEEE, CEN-CENELEC, and others) and
frameworks fit together, and where the gaps and emerging work are. NIST ITL
summarised the current state in its **AI Standards Landscape webinar on
6 March 2026**. Watching this source is how the library notices *new* standards
worth adding before they are widely known.

## In plain language

!!! note "Our explanation, not the official text"
    Plain-language summary in our own words. NIST material is U.S. Government work
    (public domain). Not legal advice.

This isn't a standard — it's NIST's map of *all* the AI standards and where the
gaps are. We track it as an early-warning radar: when a new standard or
evaluation method appears, this is usually where it surfaces first, telling us
what to add to the library next.

## Key terms

- **Standards landscape** — the overall inventory of who is publishing what across AI standards bodies.
- **ISO/IEC SC 42** — the subcommittee that writes the AI standards (42001, 23894, etc.).
- **Meta-source** — a source *about* other sources, used here to spot what to watch next.

## In depth (in our own words)

!!! note "Our explanation"
    Our own-words explanation. NIST material is a U.S. Government work (public
    domain). Not legal advice.

**It's a map, not a standard.** Every other page in this library is a standard,
framework or regulation you can be measured against. This one is different: it is
NIST's *view of the whole field* — which bodies are writing which AI standards,
how they relate, where they overlap, and where the gaps are. You don't "comply"
with a landscape; you use it to navigate.

**Who is on the map.** The international AI-standards ecosystem is crowded:
**ISO/IEC JTC 1/SC 42** (the home of ISO/IEC 42001, 23894, 42005, 42006 and more),
**IEEE**, **CEN-CENELEC** (which underpins the harmonised standards the EU AI Act
will lean on), plus NIST's own measurement, evaluation and testing work and its
AI-agent standards activity. NIST ITL tracks how these pieces fit and where the
priorities are heading — currently evaluation/testing, generative AI and agentic
systems.

**Why we watch it.** For a "watch" library this is the early-warning radar. New
standards, profiles and evaluation methods tend to surface in this landscape view
before they're widely known. Tracking it is how we decide *what to add next* and
how we make sure the standards already in the library haven't been superseded.

**How to use it in an engagement.** Practically, it answers two auditor questions:
"Is there a recognised standard for *this* AI concern?" and "Are the standards my
client relies on still the current ones?" Use it as the index that points you to
the right standard — then audit against that standard, not against the landscape
itself.

## Key Sections

- **[ITL's role](https://www.nist.gov/artificial-intelligence/itl-ai-engagement "How NIST's Information Technology Laboratory contributes to and coordinates international AI standards work.")** — NIST ITL's contribution to and coordination of AI standards.
- **[The landscape](https://www.nist.gov/artificial-intelligence/nist-information-technology-laboratory-itl-ai-program "The inventory of active and emerging AI standards across the major bodies — ISO/IEC SC 42, IEEE, CEN-CENELEC and others — and how they relate.")** — the inventory of active and emerging AI standards across bodies.
- **Priorities**{ title="The areas NIST ITL is currently focusing its AI-standards effort on — evaluation and testing methods, generative AI and agentic systems." } — where NIST is focusing (evaluation, testing, agentic AI, GenAI).
- **Progress**{ title="The current status of in-flight AI standards and profiles NIST ITL is tracking or contributing to." } — status of in-flight standards and profiles.

## Audit-Relevant Anchors

- **Standards inventory**{ title="The government-maintained NIST ITL map of which AI standard applies to which concern — a defensible reference for scoping an audit." } — a defensible, government-maintained map of which standard applies to which AI concern.
- **Gap signals**{ title="Early warning, surfaced in the landscape view, of emerging AI standards and evaluation methods an auditor should start tracking." } — early warning of emerging standards an auditor should start tracking.
- **Cross-references**{ title="Pointers from the landscape into the specific standards an auditor then assesses against — NIST AI RMF, ISO/IEC 42001/23894 and agentic-AI work." } — pointers from the landscape into [NIST AI RMF](reference_nist_ai_rmf.md), [ISO/IEC 42001](reference_iso_42001.md)/[23894](reference_iso_23894.md), and [agentic-AI work](reference_csa_agentic_profile.md).

## Auditor Checklist

This is a meta-source; the checks are about keeping the *rest* of the library current:

- [ ] The organisation tracks an authoritative standards inventory, not an ad-hoc list.
- [ ] The standards it relies on are still current (no superseded editions in use).
- [ ] Emerging standards (agentic, GenAI evaluation) are on a watch list.
- [ ] Each material AI-risk concern maps to an applicable standard.

## Cross-Framework Mapping

A landscape "where it points" map (not a control crosswalk):

| Landscape area | Points to |
| -------------- | --------- |
| AI management systems | [ISO/IEC 42001](reference_iso_42001.md), [ISO/IEC 23894](reference_iso_23894.md) |
| Risk framework | [NIST AI RMF](reference_nist_ai_rmf.md), [GenAI Profile (600-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) |
| Evaluation / testing | [NIST evaluation work](https://airc.nist.gov/), ISO/IEC TR 24029 |
| Agentic / GenAI security | [CSA Agentic Profile](reference_csa_agentic_profile.md), [OWASP GenAI/Agentic](https://genai.owasp.org/) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-06-16` | baseline | Initial baseline: ITL AI program landscape, anchored to the 2026-03-06 AI Standards Landscape webinar. |

## Sources

Public web sources only — local/private provenance is kept in a private mirror.

- **Primary (web):** [NIST ITL AI Program](https://www.nist.gov/artificial-intelligence/nist-information-technology-laboratory-itl-ai-program) · [ITL AI engagement](https://www.nist.gov/artificial-intelligence/itl-ai-engagement)
