---
title: Changelog
description: Running history of every change to the watched-standards library, newest first.
keywords: "AI standards changelog, AI governance updates, EU AI Act updates 2026, NIST AI RMF updates, ISO 42001 updates, DORA updates, CETS 225 status, AI regulation timeline"
---

# Changelog

Every change to a watched standard lands here, newest first. Entries are
generated from the merged pull requests that update the
[reference pages](index.md), so this log doubles as the library's audit trail.

Severity follows the project rubric: **`version_bump`** (new edition/revision),
**`substantive`** (changed definition, new control, changed threshold), and
**`editorial`** (normally suppressed; surfaced only when notable).

---

## 2026-09-21 — EU Cyber Resilience Act added as the twelfth watched instrument

**`substantive` — new page**

- **[EU Cyber Resilience Act (CRA)](reference_eu_cra.md)** — Regulation (EU)
  2024/2847, the EU's binding product-cybersecurity law for hardware and
  software with digital elements, added ten days after its first operational
  obligation went live: since **11 September 2026** manufacturers must report
  actively exploited vulnerabilities and severe incidents under Art. 14
  (24-hour early warning, 72-hour notification, final report) through ENISA's
  **Single Reporting Platform**, launched the same day. Full application —
  essential requirements, conformity assessment, CE marking, the five-year
  support period, penalties up to EUR 15 million or 2.5 % of worldwide turnover —
  follows on **11 December 2027**, when the reporting duty also extends to
  open-source software stewards (Art. 24(3)). The page is tracked here for
  **Art. 12**: a high-risk AI system that is also a product with digital
  elements meets the AI Act's Art. 15(1) cybersecurity duty by meeting the CRA's
  Annex I, assessed once under the AI Act's Art. 43 procedure. Sources: EUR-Lex,
  the Commission's CRA and CRA-reporting pages, ENISA.

**`editorial` — cross-references on existing pages** (the EU AI Act page and
the CETS 225 treaty chart were fully re-observed and carry `last_observed_at`
2026-09-21; all other pages keep 2026-09-05)

- **[EU AI Act](reference_eu_ai_act.md)** — **`substantive`**: Commission
  Implementing Regulation (EU) 2026/1755 (2026-07-20) added — the procedures
  for Art. 92 GPAI evaluations and Art. 101 fining proceedings, with interim
  measures; the press-reported first Art. 91 requests for information
  (2026-09-01) are noted as reported, not primary-verified. Plus the new anchor
  for the CRA Art. 12 bridge to Art. 15/43 and the parallel Art. 73 / CRA
  Art. 14 reporting clocks; Art. 15 row of the cross-framework mapping
  annotated.
- **[DORA](reference_dora.md)** — new anchor on the parallel CRA Art. 14 duty
  for financial entities that ship their own software products, and the EBA's
  final **Guidelines on third-party risk management** (2026-09-18, aligned with
  DORA, ICT and non-ICT arrangements for critical or important functions,
  two-year transition) as the governance layer around DORA's ICT third-party
  rules.
- **[Berkeley CLTC](reference_berkeley_cltc.md)** — new AI Security Initiative
  report *Closing Gaps Across the Ecosystem* (2026-09-15) on AI-powered
  nonconsensual intimate images and CSAM, with a four-layer ecosystem model and
  regulatory recommendations.
- Re-checked on 2026-09-21 with no change found: NIST AI RMF and companions
  (IR 8596 still a draft, no AI RMF 2.0 announcement), NIST ITL landscape, CSA
  Agentic Profile (still draft v1 of 2026-03-27), ISO/IEC 42001 and 23894
  catalogue entries, UK (Regulating for Growth Bill not yet introduced),
  Switzerland (consultation draft still due end of 2026), the EU AI Act's
  Commission pages (latest dated items 2026-08-31), and the CETS 225 treaty
  chart (status as of 2026-09-21: 21 signatures, one ratification, not in
  force — unchanged).
- Glossary: *CRA*, *actively exploited vulnerability*, *product with digital
  elements*, *SBOM*. Watch list: `eu_cra` with four targets (EUR-Lex ELI,
  Commission CRA and CRA-reporting pages, ENISA SRP hub); `enisa.europa.eu`
  added to the source-domain allowlist.
- Site plumbing: the watch contract now distinguishes target kinds (document,
  landing page, news feed, legal search), marks sources whose successor would
  appear under a new identifier and requires a `watch_hint` on their targets;
  every source gained a news-feed or legal-search target (`docs/adapter-contract.md`,
  schema and watch list updated; allowlist extended by the EBA, ESMA, EIOPA and
  OWASP GenAI hosts). The home page's "Last updated" line and its `dateModified`
  now show the newest `last_observed_at` of any watched page instead of the
  commit date of the home page itself. New social-preview card (`assets/og-image.png`)
  in the visual family of the Auditable Modular RAG card: the library as the subject, the
  author bottom right; source in `docs/og-card.html`.

---

## 2026-09-15 — NIST token guidance final; NCCoE agent-identity paper tracked

**`editorial`** — two additive source entries, no page fully re-observed
(`last_observed_at` stays 2026-09-05):

- **[NIST ITL landscape](reference_nist_itl_landscape.md)** — NIST and CISA
  published the final **NIST IR 8587**, *Protecting Tokens and Assertions from
  Forgery, Theft, and Misuse* (15 September 2026). It is identity-and-access
  guidance, not an AI standard; it is tracked because §1.1.1 brings AI agents
  that use signed tokens into scope and names agent-specific access risks as a
  gap for further guidance.
- **[CSA Agentic Profile](reference_csa_agentic_profile.md)** — added the NIST
  NCCoE concept paper *Accelerating the Adoption of Software and AI Agent Identity
  and Authorization* (draft, 5 February 2026; comments closed 2 April 2026) as the
  standards-based identity layer beneath the profile's agent-authority controls,
  with IR 8587 as the token baseline.

---

## 2026-09-05 — September refresh: every standard re-observed, Switzerland and the Council of Europe Convention added

The library grew from nine watched instruments to eleven and every existing
page was re-observed twice: first against the primary sources, then against the
supervisors' and governments' news pages, which is where most of the
July–September developments had appeared. All pages now carry
`last_observed_at` **2026-09-05**.

**`version_bump`** — **ISO/IEC 42001** now also exists as **EN ISO/IEC 42001:2026**
(CEN/CENELEC JTC 21, published 18 March 2026, identical adoption; corroborated
through the UNI national adoption, in force 30 July 2026) — the vehicle for any
future harmonised-standard citation under the AI Act; not cited as such yet, and
no JTC 21 deliverable has been cited in the Official Journal.

**`substantive` — two new pages**

- **[Switzerland — AI regulation and data protection](reference_ch_ai_data_protection.md)**
  is the **tenth watched instrument** and the first Swiss one: the
  technology-neutral DSG applied directly to AI by the EDÖB (notice of
  9 November 2023, updated 8 May 2025), the Federal Council's sectoral decision
  of 12 February 2025, the signature of the Council of Europe AI Convention on
  27 March 2025, the soft-law track of February 2026, the EDÖB activity report
  2025/26, and the consultation draft due by the end of 2026 (prepared by the
  Federal Office of Justice within the EJPD). Sources: Fedlex, EDÖB, Federal
  Chancellery, BAKOM, the CoE treaty chart and the EU Official Journal.
- **[Council of Europe AI Convention (CETS 225)](reference_coe_ai_convention.md)**
  is the **eleventh** and the first international treaty here: adopted
  17 May 2024, opened for signature 5 September 2024, read article by article
  from the text published in OJ L 2026/1081 (scope and the Art. 3(1)(b)
  private-actor declaration, the Chapter III principles, remedies, the Art. 16
  risk and impact management framework, Art. 26 oversight, Art. 30 entry into
  force). The treaty chart **as of 5 September 2026 shows 21 signatures and one
  ratification — the EU on 15 May 2026 — so the Convention is not in force**.
  Implementation paths: the EU exclusively through the AI Act (Council Decision
  (EU) 2026/1080), Switzerland through sector laws, the UK signature only.

**`substantive` — every existing page re-observed**

- **[EU AI Act](reference_eu_ai_act.md)** — Commission soft law caught up with
  Art. 50: final transparency guidelines (20 July 2026), the opinion on the Code
  of Practice on AI-generated content (9 July 2026), **draft** high-risk
  classification guidelines (19 May 2026, still under consultation). Enforcement
  by the AI Office and national authorities began **2 August 2026**, with a first
  list of more than 180 signatories of the AI-generated-content code and the
  complaints, whistleblower and GPAI downstream-provider channels live.
- **[NIST AI RMF](reference_nist_ai_rmf.md)** — NIST states that **AI RMF 1.0 is
  being revised** under the White House AI Action Plan (no date). Companions
  captured: AI 100-4 (synthetic content), IR 8596 iprd (Cyber AI Profile, draft),
  the concept note for a critical-infrastructure profile (7 April 2026), the
  **CAISI AI Agent Standards Initiative** (17 February 2026) and the zero draft
  NIST AI 300-1 ipd on public-facing AI documentation (July 2026).
- **[DORA](reference_dora.md)** — the ESAs designated the first **critical ICT
  third-party providers** on 18 November 2025 (Art. 31 added as an anchor), then
  addressed AI directly in joint statement **JC 2026 25** (31 July 2026) and
  published their **first annual major-incident report** (3 June 2026).
- **[UK AI White Paper](reference_uk_ai_white_paper.md)** — the **Advisory AI
  Growth Lab for legal services** was announced on 8 June 2026 and has been open
  for applications since 3 August 2026; the King's Speech of 13 May 2026 brought
  the **Regulating for Growth Bill** with statutory sandboxing powers and
  cross-cutting AI sandboxes — but **no AI bill**.
- **[CSA Agentic Profile](reference_csa_agentic_profile.md)** — CSA's
  research-note series on NIST's AI Agent Standards Initiative (March–April 2026)
  around a profile that is still a draft; OWASP *State of Agentic AI Security &
  Governance* **v2.01** (June 2026) supersedes v1.0, the **GenAI LLM Top 10 2026**
  followed on 3 August 2026, and the **Agent Control Standard** and framework
  crosswalk were announced on 2 September 2026.
- **[Berkeley CLTC](reference_berkeley_cltc.md)** — *Evaluation of Frontier AI
  Company Practices* using the GPAI profile v1.2 (April 2026), AIxCyber Threat
  Scenarios 2027–2029 (May), AgentWatch (June) and AI Risk Governance for
  Investors and Corporate Boards (August 2026).
- **[NIST ITL landscape](reference_nist_itl_landscape.md)** — the CAISI
  initiative, the AI 300-1 zero draft and the January 2026 report on measuring
  standards effectiveness; no newer landscape briefing than 6 March 2026.
- **[ISO/IEC 23894](reference_iso_23894.md)** — re-observed, unchanged
  (1st edition, 2023).

**`editorial`** — The Convention's ratification status is from now on stated
**only** on its own page; Switzerland, the EU AI Act and the UK pages link there
instead of repeating counts. Sources allow-list extended to `admin.ch`
sub-domains, `coe.int` and `rm.coe.int`; the NIST Playbook target corrected to
the AI Resource Center (the ARIA repository is a different NIST programme);
glossary, home, at-a-glance, `llms.txt`, navigation and the source manifest
updated for both new pages. Site plumbing, no content change: the discovery
metadata was rebuilt — per-page JSON-LD with a typed `about` node and the
observation date as `dateModified`, an `ItemList` of every page on the home
page, Dublin Core tags, and machine-readable alternates (Markdown source,
`llms.txt`, sitemap) so AI answer engines can read the library directly.

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
