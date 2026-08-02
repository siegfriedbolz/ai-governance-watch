---
title: Changelog
description: Running history of every change to the watched-standards library, newest first.
---

# Changelog

Every change to a watched standard lands here, newest first. Entries are
generated from the merged pull requests that update the
[reference pages](index.md), so this log doubles as the library's audit trail.

Severity follows the project rubric: **`version_bump`** (new edition/revision),
**`substantive`** (changed definition, new control, changed threshold), and
**`editorial`** (normally suppressed; surfaced only when notable).

---

## 2026-08-02 — EU AI Act: Digital Omnibus in force; page expanded

**`version_bump`** — The *Digital Omnibus on AI* was adopted on 8 July 2026,
published in the Official Journal on 24 July 2026 as
**[Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj)**
and **entered into force on 27 July 2026**. The
[EU AI Act](reference_eu_ai_act.md) page now reflects the amended law instead
of the May provisional agreement: stand-alone **Annex III** high-risk
obligations move to **2 December 2027**, **Annex I** product-embedded AI to
**2 August 2028**, the Art. 50(2) machine-readable marking of synthetic content
gets a grace period until 2 December 2026 for systems already on the market,
the new Art. 5 CSAM/NCII prohibition applies after a transition ending
2 December 2026, and the national sandbox deadline moves to 2 August 2027.
Art. 50 transparency duties themselves apply from 2 August 2026 as originally
scheduled; GPAI rules are unchanged.

With the timeline now settled, the page was expanded in the same update: an
**application-timeline table** (Art. 113 as amended, from the 2025
prohibitions through the Art. 111 legacy transitions — GPAI models by 2027,
public-authority systems by 2030, large-scale IT systems by end-2030), an "In
depth" section on **machine-readable transparency** (Art. 50(2) + the
Recital 133 technique families — watermarks, metadata identification,
cryptographic provenance proofs, logging, fingerprints), a **Penalties**
section (Art. 99 fine bands + Art. 101 GPAI fines), a **soft-law section**
(GPAI Code of Practice, Commission guidelines on prohibited practices and the
AI-system definition), **Art. 26 deployer duties**, **Art. 40 harmonised
standards** (presumption of conformity — the standards delay behind the
deferral), **Art. 72/73** post-market monitoring and serious-incident
reporting, a **governance anchor** (AI Office · AI Board · national
market-surveillance authorities, Arts. 64/65/70), and an **ISO/IEC 23894
column** plus Art. 11/12/72 rows in the Cross-Framework Mapping — all terms
and links with tooltips per the site convention. Also updated:
[Standards at a glance](at-a-glance.md), the home page and `llms.txt`.

## 2026-06-17 — Tooltips on every Key Section term & link

Completed tooltip coverage on the remaining pages. ISO/IEC 42001 (Clauses 4–10,
Annex A–D) and ISO/IEC 23894 (Clauses 4–6, Annex A–C) now carry per-page hover
definitions (kept page-local to avoid the "Annex B" cross-standard collision).
Every linked Key Section entry — EU AI Act articles, DORA articles, UK principles,
Berkeley CLTC papers and NIST ITL pages — now shows an explanatory tooltip on
mouseover of the link itself, in addition to the existing term glossary.

## 2026-06-16 — Key-term tooltips + source links

Added hover/focus **tooltips** for ~27 key terms (defined once in a shared
glossary, shown wherever a term appears) and expanded each definition. **Linked**
the Key Sections, Audit-Relevant Anchors and Cross-Framework Mapping entries to
their direct sources: EU AI Act articles/annexes (artificialintelligenceact.eu),
DORA articles, NIST functions (AIRC Playbook), UK principles (gov.uk) and the
CSA/Berkeley pages. ISO clauses are paywalled, so those cells point to the ISO
catalogue rather than fabricated deep links.

## 2026-06-16 — Deeper own-words explainers

Expanded the five lighter pages — [ISO/IEC 42001](reference_iso_42001.md),
[ISO/IEC 23894](reference_iso_23894.md), [CSA Agentic Profile](reference_csa_agentic_profile.md),
[Berkeley CLTC](reference_berkeley_cltc.md) and [NIST ITL Landscape](reference_nist_itl_landscape.md)
— with an "In depth (in our own words)" section. These explain the concepts in
our own words (no verbatim text), so the paywalled/licence-restricted standards
gain depth without reproducing any provider wording.

## 2026-06-16 — New pages + SEO/GEO

Added three pages: **[Standards at a glance](at-a-glance.md)** (comparison of all
nine), a consolidated **[Glossary](glossary.md)**, and an applied
**[AI audit for enterprise CMS](ai-audit-for-cms.md)** guide. SEO/GEO:
`robots.txt` (search + AI crawlers, sitemap) and JSON-LD structured data
(Person · WebSite · ProfessionalService) on the home page.

## 2026-06-16 — Fact-check pass & corrections

Intensive accuracy review of all nine pages (dates, versions, article/clause
numbers, verbatim quotes, licences), cross-checked via web sources and an
independent verifier. Corrections made: **ISO/IEC 42006** is **published
(42006:2025)**, not a draft; the CLTC **"Intolerable Risk Threshold
Recommendations"** is **February 2025**, not January 2025; the **CSA Agentic
Profile** draft date softened to "early 2026" (public page dated April 2026).
All four verbatim "Source text" quotes (NIST, EU AI Act, DORA, UK) confirmed
against their primary sources.

## 2026-06-16 — Plain-language explainer + licence layer

Each page gained an **"In plain language"** explainer (our own words, not the
normative text), a **Key terms** glossary, and a **"Provenance & licence"** box.
Per-source `license` + `reproduction` tiers were added to the schema and seed
(public-domain / open-attribution / share-alike-noncommercial / facts-and-quotation
/ proprietary-metadata-only) so reproduction stays within each provider's licence.
No change to any underlying standard.

## 2026-06-16 — Library depth enrichment

All nine reference pages gained an **Auditor Checklist** (evidence-oriented
checks) and a **Cross-Framework Mapping** (indicative cross-references to NIST /
ISO / EU AI Act / OWASP). No change to any underlying standard — an editorial
depth pass on the baseline. Future entries here track *standard* changes only.

## 2026-06-16 — Initial baseline

First baseline snapshot of all five watched standards. Each reference page was
hand-authored from current primary sources and the local research library,
pending the first automated routine run.

| Standard | Severity | Note |
| -------- | -------- | ---- |
| [NIST AI RMF](reference_nist_ai_rmf.md) | baseline | AI RMF 1.0, GenAI Profile 600-1, Adversarial ML 100-2e2025. Agentic Profile noted as forthcoming (~Q4 2026). |
| [EU AI Act](reference_eu_ai_act.md) | baseline | Base regulation + **2026-05-07 Digital Omnibus** provisional agreement (high-risk deferral to 2027/2028), pending OJ publication. |
| [ISO/IEC 42001](reference_iso_42001.md) | baseline | 2023 1st edition current; ISO/IEC 42006:2025 (cert-body requirements) at DIS stage. |
| [CSA Agentic Profile](reference_csa_agentic_profile.md) | baseline | Lab Space draft v1 (2026-03-27) + CSA 2026 catastrophic-risk / AICM / STAR-for-AI programme. |
| [Berkeley CLTC](reference_berkeley_cltc.md) | baseline | Cyber-threat thresholds white paper (2026-01-22) + intolerable-risk recommendations (2025-01). |
| [ISO/IEC 23894](reference_iso_23894.md) | baseline | 2023 1st edition; AI risk-management guidance, companion to ISO/IEC 42001 and ISO 31000. |
| [UK AI White Paper](reference_uk_ai_white_paper.md) | baseline | 2023 pro-innovation White Paper (CP 815) + 2024 response; AI Growth Lab consultation (Oct 2025 → Jan 2026). |
| [DORA](reference_dora.md) | baseline | Reg. (EU) 2022/2554, applies since 2025-01-17; five pillars + ICT third-party oversight (AI vendor resilience). |
| [NIST ITL Standards Landscape](reference_nist_itl_landscape.md) | baseline | ITL AI program landscape, anchored to the 2026-03-06 AI Standards Landscape webinar. |
