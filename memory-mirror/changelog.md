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

## 2026-09-05 (2) — Council of Europe AI Convention (CETS 225) gets its own page

**`substantive`** — **[Council of Europe AI Convention (CETS 225)](reference_coe_ai_convention.md)**
is the **eleventh watched instrument** and the first international treaty in
the library: the Framework Convention on AI and Human Rights, Democracy and
the Rule of Law (adopted 17 May 2024, opened for signature 5 September 2024).
The page reads the Convention article by article from the text published in
OJ L 2026/1081 (scope and the Art. 3(1)(b) private-actor declaration, the
Chapter III principles, remedies, the Art. 16 risk and impact management
framework, Art. 26 oversight, Art. 30 entry into force), records the treaty
chart **as of 5 September 2026 — 21 signatures, one ratification (the EU,
15 May 2026), not in force** — and sets out how the EU (Council Decision (EU)
2026/1080: exclusively through the AI Act), Switzerland (sector laws, draft due
end of 2026) and the UK (signed only) implement it.

**`editorial`** — From now on the Convention's status is stated **only on that
page**; the [Switzerland](reference_ch_ai_data_protection.md),
[EU AI Act](reference_eu_ai_act.md) and
[UK AI White Paper](reference_uk_ai_white_paper.md) pages link there instead
of restating ratification counts (new key terms, source lines and one
Key-Sections bullet on the EU page for Council Decision (EU) 2026/1080).
Glossary, home, at-a-glance, `llms.txt`, navigation and the source
manifest (`coe_ai_convention`, four targets) updated.

---

## 2026-09-05 — September refresh across all standards; Switzerland added

**`version_bump`** — **ISO/IEC 42001** now also exists as **EN ISO/IEC 42001:2026**
(CEN/CENELEC JTC 21, published 18 March 2026, identical adoption) — the vehicle
for any future harmonised-standard citation under the AI Act; not cited as such
yet.

**`substantive`** — Every page re-observed on 5 September 2026:

- **[Switzerland — AI regulation and data protection](reference_ch_ai_data_protection.md)**
  is the **tenth watched instrument** and the first Swiss one: the technology-neutral DSG applied
  directly to AI by the EDÖB (notice of 9 November 2023, updated 8 May 2025),
  the Federal Council's sectoral decision of 12 February 2025, the signature of
  the Council of Europe AI Convention (CETS 225) on 27 March 2025 — **not in
  force** (one ratification, the EU on 15 May 2026) — the soft-law track of
  February 2026, the EDÖB activity report 2025/26, and the consultation draft
  due by the end of 2026. Sources: Fedlex, EDÖB, Federal Chancellery, BAKOM,
  the CoE treaty chart and the EU Official Journal (L 2026/1080–1081).
- **[EU AI Act](reference_eu_ai_act.md)** — Commission soft law caught up with
  Art. 50: final transparency guidelines (20 July 2026), the opinion on the Code
  of Practice on AI-generated content (9 July 2026), and **draft** high-risk
  classification guidelines (19 May 2026, still under consultation).
- **[NIST AI RMF](reference_nist_ai_rmf.md)** — NIST states that **AI RMF 1.0 is
  being revised** under the White House AI Action Plan (no date); companions
  captured: AI 100-4 (synthetic content), IR 8596 iprd (Cyber AI Profile,
  draft), and the concept note for a critical-infrastructure profile
  (7 April 2026).
- **[DORA](reference_dora.md)** — the ESAs designated the first **critical ICT
  third-party providers** on 18 November 2025; Art. 31 added as an anchor.
- **[UK AI White Paper](reference_uk_ai_white_paper.md)** — the AI Growth Lab
  went live as the **Advisory AI Growth Lab for legal services** (8 June 2026;
  LSB, SRA, CLC, ICO).
- **[CSA Agentic Profile](reference_csa_agentic_profile.md)** — CSA's research-note
  series on NIST's AI Agent Standards Initiative (March–April 2026); OWASP
  *State of Agentic AI Security & Governance* **v2.01** (June 2026) supersedes v1.0.
- **[Berkeley CLTC](reference_berkeley_cltc.md)** — *Evaluation of Frontier AI
  Company Practices Using the GPAI Risk-Management Standards Profile v1.2*
  (April 2026); direct links to the agentic profile and the arXiv version of the
  cyber-thresholds paper.

**`editorial`** — ISO/IEC 23894 and the NIST ITL landscape re-observed without
change; two NIST watch items without a citable document noted (COSAiS overlays,
critical-infrastructure profile). Sources allow-list extended to `admin.ch`
sub-domains and `coe.int`; the NIST Playbook target corrected to the AI
Resource Center (the ARIA repository is a different NIST programme).

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
