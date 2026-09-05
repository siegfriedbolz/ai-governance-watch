---
name: "Switzerland — AI regulation and data protection (DSG, EDÖB practice, CETS 225 path)"
description: "How Switzerland governs AI today: the technology-neutral Federal Act on Data Protection (DSG) applied directly to AI by the EDÖB, the Federal Council's 2025 sectoral decision, and the ratification path for the Council of Europe AI Convention (CETS 225) — with the consultation draft due by end of 2026."
keywords: "Swiss AI regulation, DSG AI, EDÖB artificial intelligence, Switzerland Council of Europe AI Convention, CETS 225 ratification, Swiss data protection AI, Vernehmlassung KI"
type: reference
source_id: ch_ai_data_protection
source_url: "https://www.bk.admin.ch/de/regulierung"
last_observed_at: "2026-09-05T00:00:00Z"
last_observed_commit_or_version: "DSG SR 235.1 consolidated 2025-07-07; EDÖB notice 2023-11-09 updated 2025-05-08; Federal Council decision 2025-02-12; CETS 225 signed 2025-03-27, not in force (1 ratification as of 2026-09-05); consultation draft due end of 2026"
provenance_chain:
  - timestamp: "2026-09-05T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# Switzerland — AI regulation and data protection

!!! info "Provenance & licence"
    **Source:** [bk.admin.ch — Regulierung von KI](https://www.bk.admin.ch/de/regulierung) · [EDÖB — KI und Datenschutz](https://www.edoeb.admin.ch/de/ki-und-datenschutz) · [Fedlex — DSG SR 235.1](https://www.fedlex.admin.ch/eli/cc/2022/491/de) ·
    **Last observed:** `2026-09-05` ·
    **Version:** DSG in force since 2023-09-01 (consolidated 2025-07-07); Federal Council decision 2025-02-12; CETS 225 signed 2025-03-27, **not in force** ·
    **Status:** planned ·
    **Licence:** Swiss federal legal texts and official publications — reuse with source attribution (`open-attribution`); Council of Europe treaty text © CoE, quoted via the EU Official Journal (facts and quotation)

## Summary

Switzerland has **no AI act** and, by the Federal Council's own plan, will not
have a consultation draft before the **end of 2026**. What governs AI today is
three layers. First, the **technology-neutral Federal Act on Data Protection**
(DSG, SR 235.1, in force since 1 September 2023), which the Federal Data
Protection and Information Commissioner (**EDÖB**) declared **directly
applicable to AI-based processing** on 9 November 2023 and re-affirmed on
8 May 2025. Second, the **Federal Council decision of 12 February 2025**: a
sectoral approach, cross-sector rules only for central fundamental-rights areas
such as data protection, ratification of the **Council of Europe Framework
Convention on AI (CETS 225)**, and a consultation draft to be prepared by the
Federal Department of Justice and Police (EJPD, with UVEK and EDA) by the end
of 2026, plus a parallel plan of non-binding measures. Third, **supervisory practice** — dated EDÖB notices, pre-investigations
(X/Grok 2025, Meta 2026) and the annual activity report. Switzerland **signed**
CETS 225 on 27 March 2025; the Convention is **not yet in force** (one
ratification, the EU on 15 May 2026, against five required).

## In plain language

!!! note "Our explanation, not the official text"
    Plain-language summary in our own words — not the normative text. Swiss
    federal law and official communications are quoted with attribution. This is
    general information, not legal advice.

If you build or run AI for Swiss users or a Swiss client, don't look for a Swiss
"AI Act" — there isn't one, and the first draft is a year away. Look at the data
protection law instead: the EDÖB reads the DSG as already covering AI. That means
telling people when they talk to a machine and what your system does with their
data (Art. 19), letting them contest automated decisions and get a human to look
(Art. 21), running a data protection impact assessment when the risk is high
(Art. 22), and building privacy in from the start (Art. 7). Above that sits a
political commitment — Switzerland will implement the Council of Europe's AI
Convention, mostly through sector laws — but that commitment has not become law
yet. For an auditor, the DSG plus the EDÖB's published practice is the checklist;
the Convention is the direction of travel.

## Key terms

- **DSG** — Bundesgesetz über den Datenschutz (Federal Act on Data Protection), SR 235.1, revised, in force since 2023-09-01; supplemented by the ordinance **DSV** (SR 235.11).
- **EDÖB** — Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter, the federal data-protection authority; supervises private and federal processing, no fining power against companies (penalties target natural persons).
- **Vernehmlassung** — the formal consultation procedure that precedes federal legislation; the AI draft is due by the end of 2026.
- **CETS 225** — the Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law (Vilnius, 2024-09-05); the first binding international AI treaty. Full page: [Council of Europe AI Convention (CETS 225)](reference_coe_ai_convention.md) — the status statement ("not in force") is maintained there.
- **Sectoral approach** — the Federal Council's choice to adapt existing sector laws rather than enact a horizontal AI statute.

## In depth: the Federal Council's sectoral approach and the CETS 225 path

> **Reading guide:** boxed **“Source text”** quotes are the authority's own wording
> (German original, quoted with attribution). Text marked **“In our words”** is
> our explanation.

!!! quote "Source text — EDÖB, 9 November 2023 (updated 8 May 2025)"
    Der EDÖB weist deshalb darauf hin, dass das seit dem 1. September 2023 geltende
    Datenschutzgesetz des Bundes auf KI-gestützte Datenbearbeitungen direkt anwendbar ist.

**In our words —** the regulator's position is that no new law is needed for the
DSG to bite: AI processing of personal data is processing, full stop. The notice
names the duties that follow — transparency on purpose, functioning and data
sources; the right to object to, or have a human review, automated individual
decisions; disclosure when someone corresponds with a machine; clear marking of
synthetic media that manipulates identifiable people; a DPIA for high-risk
processing; privacy by design — and calls real-time facial recognition and
social scoring inadmissible.

!!! quote "Source text — Federal Council, media release of 12 February 2025"
    Die KI-Konvention des Europarats wird ins Schweizer Recht übernommen. […] Wo
    Gesetzesanpassungen nötig sind, sollen diese möglichst sektorbezogen ausfallen. Eine
    allgemeine, sektorübergreifende Regulierung beschränkt sich auf zentrale,
    grundrechtsrelevante Bereiche, wie beispielsweise den Datenschutz.

**In our words —** the Federal Council chose the middle of three options laid out
in BAKOM's *Auslegeordnung* (stock-taking report): not the status quo of
sector-by-sector tinkering, not an EU-AI-Act clone, but ratification of CETS 225
with targeted amendments. The regulation is to serve three goals — Switzerland
as an innovation location, protection of fundamental rights including economic
freedom, and public trust. The mandate: the Federal Department of Justice and
Police (EJPD), with UVEK and EDA, prepares a **consultation draft by the end of
2026** covering **transparency, data protection, non-discrimination and
oversight**; UVEK prepares, in parallel, a plan of **non-binding measures**
(industry self-declarations, sector solutions). The Justice Office's legal
analysis behind the decision found that Swiss law already applies to AI in
full, but that ratification requires additions — chiefly on transparency,
fundamental-rights impact assessment and control mechanisms, including a
supervisory body covering the Convention's whole scope, which today no single
Swiss authority does.

!!! quote "Source text — Federal Council, media release of 10 February 2026"
    Der Schwerpunkt lag auf Massnahmen wie Selbstverpflichtungserklärungen einzelner
    Branchen, Ethikkodizes und Standards.

**In our words —** a year after the decision, the visible implementation
work is on the **soft-law track**: the Digital Switzerland advisory board
discussed self-regulation concepts from the media and energy industries, and
the government's own framing is that legislation "usually takes several years",
so short-term measures should run in parallel. No consultation draft had been
published at the observation date.

!!! success "From my training — University of Oxford · *Managing Enterprise AI Risks* (2026)"
    Cross-jurisdiction work in my Oxford certification taught me to separate
    **what binds today** from **what is announced**. For Switzerland that split
    is unusually clean: the DSG binds, the EDÖB's dated notices show how it is
    enforced, and everything about the Convention is direction, not obligation —
    until a Swiss statute says otherwise. In an audit I anchor Swiss findings to
    DSG articles with the consolidation date, and I file the Convention under
    "regulatory horizon" with its ratification status quoted from the treaty chart.
    [Verify certificate ↗](https://certificates.conted.ox.ac.uk/5d483a65-dba2-47a2-92b0-8acfe0dcfd3a)

## Application timeline (as it stands)

| Date | What | Status |
| ---- | ---- | ------ |
| 2023-09-01 | Revised DSG (SR 235.1) and DSV (SR 235.11) in force | **in force**; consolidated version of 2025-07-07 (further amendments pending, see AS 2025 444) |
| 2023-11-09 | EDÖB: DSG directly applicable to AI (updated 2025-05-08) | supervisory position — **current** |
| 2024-09-05 | CETS 225 opened for signature (Vilnius) | signed by 21 parties as of 2026-09-05 |
| 2025-02-12 | Federal Council decision: sectoral approach, ratify CETS 225, consultation draft by end of 2026 | political mandate — **not law** |
| 2025-03-27 | Switzerland signs CETS 225 in Strasbourg | **signature only**, no ratification |
| 2026-02-10 | Digital Switzerland advisory board: self-regulation measures (media, energy) | soft-law track under way |
| 2026-05-15 | EU deposits its approval of CETS 225 (Council Decision (EU) 2026/1080) | first and, at the observation date, only ratification |
| **by end of 2026** | Consultation draft (EJPD/BJ) on transparency, data protection, non-discrimination, oversight; UVEK plan of non-binding measures | **announced**, not published |
| open | Entry into force of CETS 225 — needs 5 ratifications incl. 3 CoE member states (Art. 30(3)) | **not in force** — current status on the [CETS 225 page](reference_coe_ai_convention.md) |

## Key Sections

- **[DSG Art. 19–21 (transparency, automated individual decisions)](https://www.fedlex.admin.ch/eli/cc/2022/491/de "Federal Act on Data Protection, SR 235.1, Articles 19–21 — duty to inform when collecting personal data, information duties and the right to object to or have a human review an automated individual decision. The Swiss counterpart of EU AI Act Art. 50 and GDPR Art. 22, as read by the EDÖB.")** — the transparency and automated-decision duties the EDÖB applies to AI.
- **[DSG Art. 22 (data protection impact assessment)](https://www.fedlex.admin.ch/eli/cc/2022/491/de "SR 235.1 Article 22 — a DPIA is required where processing may entail a high risk to personality or fundamental rights; the EDÖB names it explicitly for high-risk AI processing, e.g. facial recognition.")** — mandatory for high-risk AI processing; the EDÖB's first question in a pre-investigation.
- **[DSG Art. 7 (privacy by design and by default)](https://www.fedlex.admin.ch/eli/cc/2022/491/de "SR 235.1 Article 7 — data protection by design and by default; the EDÖB reads it as an obligation on AI developers to secure the highest feasible degree of digital self-determination.")** — the design-time obligation the EDÖB reads into AI development.
- **[DSG Art. 14 (representative in Switzerland)](https://www.fedlex.admin.ch/eli/cc/2022/491/de "SR 235.1 Article 14 — foreign controllers processing Swiss personal data at scale must designate a representative in Switzerland; enforced against X/Twitter in the Grok pre-investigation (2025).")** — enforced against a foreign platform in the Grok case.
- **[Federal Council decision (2025-02-12)](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen/bundesrat.msg-id-104110.html "Media release of 12 February 2025: ratify CETS 225, sectoral approach, cross-sector rules only for fundamental-rights areas such as data protection, consultation draft by end of 2026, parallel non-binding measures.")** — the political mandate and the three regulatory goals.
- **[BAKOM Auslegeordnung and analyses (2025)](https://www.bakom.admin.ch/de/kuenstliche-intelligenz "BAKOM's stock-taking report to the Federal Council (11 February 2025) with its three base analyses — legal (BJ, 184 pp., article-by-article reading of CETS 225 and the EU AI Act against Swiss law), sectoral, and a 20-country comparison.")** — the evidence base for the decision; the legal analysis maps CETS 225 article by article onto Swiss law.
- **[CETS 225 — treaty text (OJ L 2026/1081)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ%3AL_202601081 "The Council of Europe Framework Convention on AI as published in the EU Official Journal L 2026/1081 (13 May 2026), annexed to Council Decision (EU) 2026/1080. Eight chapters, 36 articles; entry into force needs five ratifications incl. three CoE member states.")** — the Convention Switzerland has committed to implement; seven lifecycle principles (Art. 6–13), risk and impact assessment (Art. 16), oversight (Art. 26). Article-by-article reading and treaty status: [CETS 225 page](reference_coe_ai_convention.md).

## Audit-Relevant Anchors

- **[EDÖB notice — DSG directly applicable to AI (2023-11-09, updated 2025-05-08)](https://www.edoeb.admin.ch/de/update-geltendes-datenschutzgesetz-ist-auf-ki-direkt-anwendbar "The EDÖB's standing position: the technology-neutral DSG applies directly to AI-based processing — transparency, automated individual decisions, DPIA for high risk, privacy by design; real-time facial recognition and social scoring inadmissible. Cite the 2025 update.")** — the regulator's checklist in one page; cite the 2025 update.
- **[EDÖB pre-investigation X/Grok (2025-03-20)](https://www.edoeb.admin.ch/de/abschluss-vorabklaerung-x-grok "Closure of the EDÖB pre-investigation into X's use of user posts to train Grok: X designated a Swiss representative and documented an opt-out, which the EDÖB found DSG-compliant; no formal investigation.")** — the benchmark for what opt-out and representation the EDÖB accepted for training on user data.
- **[EDÖB activity report 2025/2026 — focus chapter AI](https://www.edoeb.admin.ch/de/taetigkeitsbericht-des-edob "33rd activity report (published 2026-06-30), 'Schwerpunkt I: Künstliche Intelligenz': supervisory practice April 2025–March 2026 incl. the Meta 'Name Tag' facial-recognition pre-investigation (DPIA and prior consultation expected), smart glasses, federal AI assistants with local prompt processing, and the joint statement of 61 authorities on AI-generated images (2026-02-23).")** — a year of supervisory practice with the EDÖB's concrete expectations (DPIA before facial recognition, local prompt processing in the administration).
- **[Treaty chart — CETS 225 signatures and ratifications](https://www.coe.int/en/web/conventions/full-list?module=signatures-by-treaty&treatynum=225 "Council of Europe Treaty Office chart for CETS 225 — the only authoritative source for who has signed, who has ratified and whether the Convention is in force. Single-page application: read it in a browser and quote the 'status as of' date.")** — the only authoritative status source; always quote its "status as of" date.
- **[Bundeskanzlei — Regulierung von KI](https://www.bk.admin.ch/de/regulierung "The Federal Chancellery's AI regulation page — where the consultation draft due by the end of 2026 will be announced; links the FAQs 'KI und Recht' and 'KI und Urheberrecht'.")** — where the consultation draft will appear.

## Auditor Checklist

Evidence-oriented checks for an engagement with a Swiss client, Swiss users or Swiss personal data:

- [ ] Personal data in scope? If yes, the DSG applies to the AI processing regardless of any future AI law (EDÖB 2023/2025).
- [ ] Transparency: users are told when they interact with an AI system and how their inputs (prompts) are used (DSG Art. 19; EDÖB Datenschutztag 2026).
- [ ] Automated individual decisions are identified, disclosed, and a human-review/objection path exists (DSG Art. 21).
- [ ] A DPIA exists for high-risk AI processing — always for biometrics/facial recognition and large-scale profiling (DSG Art. 22; EDÖB Meta pre-investigation 2026).
- [ ] Privacy by design and by default is evidenced in the AI system's design records (DSG Art. 7).
- [ ] Training on user data: a documented, functioning opt-out and, for foreign controllers, a Swiss representative (DSG Art. 14; X/Grok 2025).
- [ ] Cross-border disclosure of personal data to model providers is covered by DSG Art. 16–17 (adequacy or safeguards).
- [ ] Synthetic media that manipulates identifiable persons is clearly marked (EDÖB 2023).
- [ ] The report states the DSG consolidation date used and the CETS 225 status "as of" date — and does **not** present the Convention as binding Swiss law.
- [ ] Sector rules checked: financial market (FINMA), health, energy, media — the sectoral analysis names the moving files.

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences — confirm against
the source texts before relying on them.

| Switzerland (DSG / EDÖB / CETS 225) | EU AI Act | GDPR | NIST AI RMF | ISO/IEC 42001 |
| ----------------------------------- | --------- | ---- | ----------- | ------------- |
| DSG Art. 19 + EDÖB disclosure duty (machine interaction, synthetic media) | [Art. 50](https://artificialintelligenceact.eu/article/50/) | Art. 13–14 | [GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/) 1.x, [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) 1.x | Cl. 7.4, Annex A (transparency) |
| DSG Art. 21 (automated individual decision) | [Art. 26](https://artificialintelligenceact.eu/article/26/) (deployer duties, human oversight) | Art. 22 | [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) 2.x | Annex A (human oversight) |
| DSG Art. 22 (DPIA) | [Art. 27](https://artificialintelligenceact.eu/article/27/) (FRIA), [Art. 9](https://artificialintelligenceact.eu/article/9/) | Art. 35 | [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) 5.x, [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | Cl. 6.1.4 (AI system impact assessment) |
| DSG Art. 7 (privacy by design) | [Art. 10](https://artificialintelligenceact.eu/article/10/), [Art. 15](https://artificialintelligenceact.eu/article/15/) | Art. 25 | [GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/) 1.x | Cl. 8, Annex A (data) |
| CETS 225 Art. 16 (risk and impact assessment, incl. moratoria) | [Art. 9](https://artificialintelligenceact.eu/article/9/) + [Art. 27](https://artificialintelligenceact.eu/article/27/) | — | [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) / [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | Cl. 6.1 |
| CETS 225 Art. 26 (effective oversight mechanisms) | [Art. 70](https://artificialintelligenceact.eu/article/70/) (national authorities) | Art. 51 ff. | [GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/) | Cl. 5 |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-09-05` | baseline | Initial baseline: DSG applied to AI (EDÖB 2023/2025), Federal Council decision 2025-02-12, CETS 225 signed 2025-03-27 and not in force (1 ratification, EU 2026-05-15), soft-law track (2026-02-10), consultation draft due end of 2026, EDÖB activity report 2025/26 captured. |
| `2026-09-05` | editorial | CETS 225 content and treaty status now maintained on the dedicated [Council of Europe AI Convention page](reference_coe_ai_convention.md); this page links there instead of restating the ratification count. |

## Sources

- **Primary (web):** [Fedlex — DSG SR 235.1](https://www.fedlex.admin.ch/eli/cc/2022/491/de) · [Fedlex — DSV SR 235.11](https://www.fedlex.admin.ch/eli/cc/2022/568/de) · [EDÖB — KI und Datenschutz](https://www.edoeb.admin.ch/de/ki-und-datenschutz) · [EDÖB — DSG directly applicable to AI (2023-11-09)](https://www.edoeb.admin.ch/de/09112023-geltendes-dsg-ist-auf-ki-anwendbar) · [EDÖB — update (2025-05-08)](https://www.edoeb.admin.ch/de/update-geltendes-datenschutzgesetz-ist-auf-ki-direkt-anwendbar) · [EDÖB — X/Grok (2025-03-20)](https://www.edoeb.admin.ch/de/abschluss-vorabklaerung-x-grok) · [EDÖB — Datenschutztag 2026](https://www.edoeb.admin.ch/de/datenschutztag-2026) · [EDÖB — activity reports](https://www.edoeb.admin.ch/de/taetigkeitsbericht-des-edob) · [Federal Council — decision (2025-02-12)](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen/bundesrat.msg-id-104110.html) · [Federal Council — signature (2025-03-26)](https://www.admin.ch/de/nsb?id=104646) · [Federal Council — advisory board (2026-02-10)](https://www.admin.ch/de/newnsb/5oOec_8ZQEV1X-55waGOg) · [Bundeskanzlei — Regulierung](https://www.bk.admin.ch/de/regulierung) · [BAKOM — Künstliche Intelligenz](https://www.bakom.admin.ch/de/kuenstliche-intelligenz) · [CoE — treaty chart CETS 225](https://www.coe.int/en/web/conventions/full-list?module=signatures-by-treaty&treatynum=225) · [EUR-Lex — Convention text, OJ L 2026/1081](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ%3AL_202601081) · [EUR-Lex — Council Decision (EU) 2026/1080](https://eur-lex.europa.eu/eli/dec/2026/1080/oj/eng) — all retrieved 2026-09-05.
- **Note:** `admin.ch` pages refuse automated clients (HTTP 403) and the CoE treaty chart is a single-page application — both are read in a browser; the watch stores dated text snapshots. Secondary commentary (law-firm alerts, practitioner blogs) is deliberately not cited here.
