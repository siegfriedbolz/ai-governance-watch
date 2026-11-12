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

## 2026-11-12 — New page: GDPR for AI systems; EU AI Act: education and health sector sections, Art. 2(8) research-and-testing exclusion {#2026-11-12-eu-ai-act-art-28-research-and-testing-exclusion-celex-for-the-digital-omnibus}

**`baseline`** for the new page · **`substantive`** for the EU AI Act page (enriched, then
re-observed 2026-11-12) · **`substantive`** for the CRA, DORA and UK pages, **`editorial`** for the other eight (all eleven re-observed 2026-11-12)

- **[GDPR](reference_gdpr.md)** — thirteenth watched source, added as a baseline. Regulation
  (EU) 2016/679 as it applies to AI systems: how it and the AI Act fit together (AI Act
  Arts. 2(7), 4a, 26(9), 27(4), 59, 86), health data and other special categories (Art. 9),
  automated decisions (Art. 22), the DPIA (Art. 35), fines (Art. 83); EDPB Opinion 28/2024 and
  the consultation versions of Guidelines 02/2026 (anonymisation) and 03/2026 (web scraping for
  generative AI); CJEU C-634/21 and C-203/22; for Germany §§ 22 and 38 BDSG and the three DSK
  orientation aids on AI, including the one on RAG. Register pass via the Publications Office
  Cellar: the GDPR is unamended; the Digital Omnibus data part (COM(2025) 837) is a proposal —
  the Council's negotiating mandate of 21 October 2026 (document 14756/26) is set beside it
  point by point (definition of personal data, pseudonymisation, special categories in AI,
  legitimate interest for AI, Art. 22, breach notification, DPIA lists); 'awaiting committee
  decision' in Parliament; EDPB-EDPS Joint Opinion 2/2026 on it. Also: EDPB Guidelines 1/2024
  on legitimate interest, final as version 2.0 since 10 November 2026; the EDPB's consultation
  templates for DPIAs and for breach notification; the EDPB's 2027 coordinated enforcement
  topic, automated decision-making in recruitment; on the AI Act side EDPB-EDPS Joint Opinion
  1/2026 and EDPB Statement 3/2024, the ChatGPT taskforce report and the consultation version of
  Guidelines 1/2026 on scientific research. For Germany also the DSK list of
  processing operations requiring a DPIA (No. 11: AI that steers the interaction with data
  subjects or evaluates their personal aspects).
- **[EU AI Act](reference_eu_ai_act.md)** — re-observed. New law: **Commission Implementing
  Regulation (EU) 2026/2487** on AI regulatory sandboxes (OJ 11 November 2026, in force from
  1 December 2026) — common rules for application, the sandbox plan, the written proof and the
  exit report, which are not declarations of conformity but must be recognised across the
  Union. The Art. 50 guidelines now exist as Communication C(2026) 7702 final of 5 November
  2026 and are in the Official Journal since 12 November (C/2026/6005). Added late — older than the
  last re-observation and not on the page before: the Commission's first **Art. 112 report**
  (COM(2026) 234, May 2026 — no proposal to amend Art. 5 or Annex III); the **EU KIDS Act
  proposal** (COM(2026) 681, September 2026 — obligations for AI companions and conversational
  chatbots that minors may access, enforced under the AI Act); a **German-language corrigendum
  to the Digital Omnibus** (29 September 2026, Art. 6(1b)) and the language-version corrigenda
  to the Act (none English; German: 9 October 2025, incl. Art. 3(40)); Implementing Regulation
  (EU) 2025/454 on the scientific panel (read in full: qualified alerts, requests for
  documentation, independence rules). Read and summarised: the seven Parliament resolutions the
  register lists as based on the Act, and the corrigenda of the other language versions —
  among them Art. 51(2) in Slovak and Swedish, where the 10²⁵ threshold had been printed as
  “1025”. No further harmonised standard; high-risk guidelines
  still a draft. Also three new in-depth sections.
  **[Education and vocational training](reference_eu_ai_act.md#education-and-vocational-training)**:
  Annex III point 3 as source text; the line between a tutor and a system that evaluates
  learning outcomes, drawn with the Commission's **draft** guidelines on high-risk
  classification (summative vs formative evaluation); the Art. 6(3) derogation and its
  profiling limit; the Art. 5(1)(f) emotion-inference ban with the examples of the
  Commission's guidelines on prohibited practices. **[Health and medical devices](reference_eu_ai_act.md#health-and-medical-devices)**:
  Art. 6(1) as source text, MDR and IVDR in Annex I Section A with the class table of
  MDCG 2025-6 / AIB 2025-1, the Omnibus changes (Arts. 2(13), 6(1a)–(1c), 43(3), 113), Annex III
  point 5(a), (c), (d), and the pending MDR/IVDR revision COM(2025) 1023 marked as a proposal
  ('awaiting committee decision' in Parliament; no Council general approach — progress report
  of 5 June 2026). **[Art. 2(8)](reference_eu_ai_act.md#research-and-testing-exclusion)**: research, testing and development
  before placing on the market or putting into service are outside the Act; the exclusion ends
  with putting into service, and testing in real-world conditions (Art. 3(57)) is not covered
  and follows Art. 60. The Digital Omnibus now carries its CELEX number **32026R1744**; its text
  confirms Art. 2(8) unchanged (it replaced Art. 2(2), 2(7), the first subparagraph of
  Art. 60(1) and Art. 60(2), and added Art. 2(13) and Art. 60a). Texts read in the Publications Office Cellar on 2026-11-12.
  Three checklist items added. **Correction:** the bias-detection ground for special-category
  data is the new **Art. 4a** — the Omnibus deleted Art. 10(5), which this page still named.
- **Corrections after a review of both pages against the sources, same day.** The AI Act opens
  **two** grounds for processing personal data, not one: Art. 4a and **Art. 59** (further
  processing inside a regulatory sandbox; Recital 140) — the two articles its Art. 2(7)
  reserves. Since the Omnibus, **Art. 60** on testing in real-world conditions also covers
  systems under Annex I Section A, and a new Art. 60a covers Section B products; the
  Art. 2(8) section had named Annex III only. In the Council mandate on the Digital Omnibus,
  recital 38 **keeps** the sentence on the less intrusive automated solution — it is already
  in the Commission's recital — and does not add it. Also: ISO/IEC 42001 Annex A.8 is
  information for interested parties; para. 63 of the DSK orientation aid is an example from
  medical diagnostics — for an approved medical device that meets the professional standard
  it names Art. 9(2)(h) with the treatment contract, consent only otherwise — and its wider
  application is marked as our reading; the glossary gives
  the MDCG's own expansion of *MDAI*; the draft high-risk guidelines link is labelled as
  part 3 (Annex III); Joint Opinion 1/2026 says the EDPB and the Commission *are working on*
  joint guidelines on the GDPR and the AI Act, where the page had said *announced*; the Art. 3(1)
  quotation ends with the semicolon of the legal text; five links point to their current addresses.
- **The other eleven pages reviewed against their sources and re-observed, same day.**
  **[CRA](reference_eu_cra.md):** the October register pass was incomplete. The CRA has been
  amended — Regulation (EU) 2025/327 (EHDS), Art. 104, replaces Art. 13(4) and Art. 31(3) and
  inserts Art. 32(5a); Commission Delegated Regulation (EU) 2025/1535 (exclusion for
  L-category vehicles, Art. 2(5)) predates Delegated Regulation 2026/881, which the page had
  called the first delegated act; Commission Implementing Regulation (EU) 2025/2392 gives the
  technical description of the Annex III and IV categories (Art. 7(4)); the register holds
  eight corrigenda, the one of 2 July 2025 correcting Art. 64(10); the proposal COM(2026) 590
  would delete Art. 5. ENISA's joint statements of 21 October and 4 November 2026 both point
  manufacturers to the Art. 14 reporting duty.
  **[DORA](reference_dora.md):** the ESAs' annual incident report rests on Art. 22(2), not
  Art. 19; JC 2026 25 speaks of the 2027 Oversight Plan and of embedding AI-related risks into
  the Oversight Examination Methodology; four corrigenda are dated 2025, not three; added the
  Digital Omnibus proposal COM(2025) 837, Art. 8, which would route Art. 19 incident reporting
  through a single entry point (Council mandate: a national entry point).
  **[UK](reference_uk_ai_white_paper.md):** applications to the Advisory AI Growth Lab for
  legal services **closed on 23 October 2026** — the page had still called it open; the Cyber
  Security and Resilience Bill is listed for Commons consideration of Lords amendments on
  24 November 2026.
  **[NIST AI RMF](reference_nist_ai_rmf.md):** the Q4 2026 date for an AI Agent
  Interoperability Profile is reported by the CSA draft, not stated by NIST; IR 8596 is an
  Initial Preliminary Draft. **[Switzerland](reference_ch_ai_data_protection.md):** the
  Summary now counts two ratifications of CETS 225, as the rest of the page already did.
  **[CSA Agentic Profile](reference_csa_agentic_profile.md):** the OWASP GenAI LLM Top 10 2026
  is dated 4 August 2026 on its title page; OWASP's *Securing Agentic Applications V2*
  (10 November 2026) added; the CSA review of *The Six Pillars of MCP* has closed.
  Unchanged on re-observation: [ISO/IEC 42001](reference_iso_42001.md) and
  [ISO/IEC 23894](reference_iso_23894.md) (SC 42 now lists 54 items under development),
  [NIST ITL](reference_nist_itl_landscape.md), [Berkeley CLTC](reference_berkeley_cltc.md) and
  [CETS 225](reference_coe_ai_convention.md) (treaty chart as of 12 November 2026: two
  ratifications, not in force). Links that redirected now point to their current addresses, and so do the source register's watch targets for NIST (news list, ITL programme, standards page) and CLTC (research library); the ARIA target moved from a GitHub repository address that returns 404 to NIST's ARIA programme page, and `ai-challenges.nist.gov` was added to the source-domain allowlist.
- Overview pages, glossary (four terms), navigation and source register updated for the new page;
  the source register now watches the EDPB documents, news and consultation lists and the DSK list
  of orientation aids — `edpb.europa.eu` and `datenschutzkonferenz-online.de` added to the
  source-domain allowlist.

---

## 2026-11-08 — UK: first statutory hook for AI agents (Cyber Security and Resilience Bill); CSA APAS

**`substantive`** — two pages re-observed (`last_observed_at` 2026-11-08 on the UK and CSA
pages; all other pages keep 2026-10-30)

- **[UK AI White Paper](reference_uk_ai_white_paper.md)** — **`substantive`**: DSIT added the
  factsheet *Agentic AI resilience measures* (2026-11-03) to the Cyber Security and Resilience
  (Network and Information Systems) Bill: after Royal Assent and consultation, secondary
  legislation is to introduce four measures on agentic loss of control for NIS-regulated
  entities — security and resilience requirements (agent monitoring, agent risk assessments),
  affected-party notification, evidence preservation, ministerial post-incident review powers.
  The Bill passed Lords third reading on 2026-11-02 and is at Commons consideration of Lords
  amendments. Still no Regulating for Growth bill in the register.
- **[CSA Agentic Profile](reference_csa_agentic_profile.md)** — `editorial`: CSA *Autonomous
  Pentest Assurance Standard (APAS)* (2026-11-04); OWASP *GenAI Data Security Best Practices v2,
  Part 1* (2026-11-03); peer reviews on MCP and agent authorisation still open; cross-reference to
  the UK factsheet.

Registers checked for the other ten pages on 2026-11-08 without change: Cellar views of the AI
Act, DORA and CRA; Commission AI pages (last updates unchanged); CETS 225 treaty chart (status as
of 2026-11-08: 2 ratifications, 19 signatures); NIST news list and AI RMF landing page; ISO
catalogue and SC 42 programme; Bundeskanzlei regulation page; EBA and ENISA news; CLTC library.

---

## 2026-10-30 — October re-observation of all twelve pages: first AI Act harmonised standard, second CETS 225 ratification, NIST renamed to "super intelligence"

**`substantive`** — every page re-observed against at least one register
(news list, legal register or treaty chart; EUR-Lex views resolved through the
Publications Office Cellar, `admin.ch`, `iso.org` and `coe.int` read in the
browser); all twelve pages carry `last_observed_at` 2026-10-30.

- **[EU AI Act](reference_eu_ai_act.md)** — **`substantive`**: Commission
  Implementing Decision (EU) 2026/2274 (2026-10-12, OJ 2026-10-14) publishes the
  reference of **EN 18286:2026** — *Artificial intelligence — Quality management
  system for EU AI Act regulatory purposes* — the **first harmonised standard**
  under Art. 40, giving a presumption of conformity with the Art. 17 QMS
  requirements it covers; it layers on ISO/IEC 42001, which itself stays
  un-harmonised. Governance trail added: AI Board ninth meeting (2026-09-17),
  AI Scientific Panel special meeting on loss-of-control incidents (2026-10-09;
  the AI Office has requested serious-incident reports and sent requests for
  information on security practices), AI Office report on external-evaluator
  requirements (2026-10-21). High-risk classification guidelines still a draft.
  Register note: the harmonised-standard decision is *based on* Reg. (EU)
  No 1025/2012 and only *cites* the AI Act, so EUR-Lex's "all documents based
  on this act" view does not list it — the Commission news list did.
- **[ISO/IEC 42001](reference_iso_42001.md)** — **`substantive`**: ISO text
  unchanged (edition 1, stage 60.60); SC 42 work programme shows a new
  ISO/IEC AWI 42003 (implementation guidance for 42001) and ISO/IEC 42105
  (human oversight) at stage 60.00; the EN 18286 relationship recorded.
  **[ISO/IEC 23894](reference_iso_23894.md)** — `editorial`: unchanged; risk-
  adjacent items in the pipeline (DTS 25568 generative-AI risks, CD 25870
  incident-reporting data elements) noted.
- **[Council of Europe AI Convention (CETS 225)](reference_coe_ai_convention.md)**
  — **`substantive`**: **Bosnia and Herzegovina ratified on 2026-10-28**, the
  first Council of Europe member state — the chart (status as of 2026-10-30)
  now shows 21 signatories and two ratifications; still not in force (three
  more needed, two of them by member states). CDNET's second plenary
  (2026-10-21/23) adopted two HUDERIA Model components. The Swiss and UK pages,
  the at-a-glance table and `llms.txt` follow the new count.
- **[NIST AI RMF](reference_nist_ai_rmf.md)** and
  **[NIST ITL landscape](reference_nist_itl_landscape.md)** — **`substantive`**:
  the framework is unchanged (RMF 1.0 still under revision, no draft, no new
  number), but under **Executive Order 14434** (2026-09-29, 91 FR 63129) NIST
  renamed its AI pages to "super intelligence (SI)": `nist.gov/artificial-intelligence`
  redirects to `/super-intelligence`, CAISI is now CAISSI, the ITL AI Program
  and AI Standards pages moved to new URLs (updated 2026-09-30). New
  companions: **Key Practices for Incident Readiness and Response in SI
  Training and Evaluation** (CAISSI/NSA SISC/CISA, 2026-10-16), the
  **TEVV-Athlon Framework NIST AI 200-2 ipd** (comments closed 2026-10-06),
  SP 1353 ipd on AI for CSF 2.0 analysis, the ITL webinar on an agentic NVD
  enrichment workflow (2026-09-17). IR 8596 and AI 300-1 remain drafts.
- **[CSA Agentic Profile](reference_csa_agentic_profile.md)** —
  **`substantive`**: profile still draft v1; CSA peer reviews on
  *Authorization of Agents*, *The Six Pillars of MCP* and the *AARM
  Benchmarking Framework*, the published *Frontier Ready Assessment Framework*
  (2026-10-08); OWASP *Exploit Roundup Q3 2026* (2026-10-08), *GenAI Red
  Teaming Manual v1.0* (2026-10-20), *LLM Exploit Generation Guide 2.0*
  (2026-10-27); cross-tracked NIST incident-readiness practices and the UK
  CMA/DRCF agentic-economy guidance.
- **[UK AI White Paper](reference_uk_ai_white_paper.md)** — **`substantive`**:
  Parliament's bills register shows no Regulating for Growth Bill as of
  2026-10-30 (private member's *Artificial Intelligence (Consent and Misuse)
  Bill*, 1st reading 2026-10-20); CMA guidance on using AI agents under
  consumer law updated 2026-10-30 with the DRCF joint statement on an agentic
  economy (CMA, FCA, ICO, Ofcom: existing frameworks apply to personal AI
  agents; autonomy does not diminish the deployer's responsibility).
- **[EU Cyber Resilience Act](reference_eu_cra.md)** — **`substantive`**:
  register pass added Commission Delegated Regulation (EU) 2026/881 (grounds
  for delaying dissemination of notifications, Art. 16; in force 2026-05-10),
  the Commission's implementation guidance of 2026-07-27 and two
  language-version corrigenda (DE 2026-08-06, SL 2026-10-09); no amendment.
- **[DORA](reference_dora.md)** — `editorial`: no new act in the register;
  ESAs Autumn 2026 risk update (2026-09-23: non-EEA ICT dependencies,
  AI-enabled attacks) and Joint Committee work programme 2027 (2026-10-13).
- **[Switzerland](reference_ch_ai_data_protection.md)** — `editorial`:
  consultation draft still due end of 2026; EDÖB/BACS Cyber Security Month
  notice on generative AI at work (2026-10-16); DSG consolidation unchanged.
- **[Berkeley CLTC](reference_berkeley_cltc.md)** — `editorial`: blog post on
  three tabletop exercises about AI-enabled cybercrime (2026-10-20); the
  publications list now lives at `/research/research-library/`.

Watch configuration: `sources/literature-watch.yaml` gains watch-hints for the
NIST URL moves, the CLTC redirect and the harmonised-standard register gap; no
source added or removed.

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
