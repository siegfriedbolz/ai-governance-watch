---
name: "ISO/IEC 42001:2023 (AI Management System)"
description: "The world's first AI management system standard (AIMS), its certification model, the surrounding ISO/IEC 42000-series, and its relationship to EN 18286:2026 — the AI Act's first harmonised standard, which layers on 42001 without making 42001 itself harmonised."
keywords: "ISO/IEC 42001, AI management system, AIMS, EN 18286, ISO/IEC 42003, ISO 42001 certification, Annex A controls, Statement of Applicability, ISO/IEC 42006, EN ISO/IEC 42001:2026, harmonised standard AI Act, AI governance certification"
type: reference
source_id: iso_42001
source_url: "https://www.iso.org/standard/42001"
about_type: CreativeWork
about_identifier: "ISO/IEC 42001:2023"
about_jurisdiction: "International"
last_observed_at: "2026-10-30T00:00:00Z"
last_observed_commit_or_version: "ISO/IEC 42001:2023 (1st edition, published 2023-12); ISO/IEC 42006:2025 published; EN ISO/IEC 42001:2026 (CEN/CLC/JTC 21 identical adoption, published 2026-03-18); ISO catalogue re-read 2026-10-30: still edition 1, stage 60.60, no amendment; SC 42 work programme lists ISO/IEC AWI 42003 (implementation guidance for 42001, stage 20.00) and ISO/IEC 42105 (human oversight, 60.00); EN 18286:2026 (AI QMS for the AI Act, layered on 42001) cited as the first harmonised standard by Commission Implementing Decision (EU) 2026/2274 (OJ 2026-10-14) — ISO/IEC 42001 itself not harmonised"
provenance_chain:
  - timestamp: "2026-10-30T00:00:00Z"
    pr: "manual re-observation (October 2026): catalogue and SC 42 work programme re-read in the browser, EN 18286 harmonised-standard citation cross-referenced"
    change: substantive
  - timestamp: "2026-09-05T00:00:00Z"
    pr: "manual refresh (September 2026)"
    change: version_bump
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# ISO/IEC 42001:2023 (AI Management System)

!!! info "Provenance & licence"
    **Source:** [iso.org/standard/42001](https://www.iso.org/standard/42001) ·
    **Last observed:** `2026-10-30` ·
    **Version:** ISO/IEC 42001:2023, 1st edition — adopted as **EN ISO/IEC 42001:2026** (CEN, 2026-03-18); companion harmonised standard **EN 18286:2026** cited in the OJ 2026-10-14 ·
    **Status:** planned (metadata-only watch — full text is paywalled) ·
    **Licence:** ISO/IEC copyright — proprietary (`proprietary-metadata-only`)

## Summary

ISO/IEC 42001:2023 is the world's first certifiable **AI Management System
(AIMS)** standard, published in December 2023. It follows the ISO
management-system structure (Annex SL — like ISO 27001/9001) and specifies
requirements to establish, implement, maintain, and continually improve an
AIMS, with AI-specific controls in its annexes. Certification is **voluntary**,
typically valid for three years with annual surveillance audits.
The standard itself has not been amended since 2023; the surrounding
**42000-series** is expanding — notably **ISO/IEC 42006:2025** (requirements
for bodies that audit and certify AIMS), published in 2025, plus
**ISO/IEC 23894** (AI risk management guidance) and **ISO/IEC 42005** (AI
system impact assessment). In the EU, the standard now has a regulatory
neighbour: **EN 18286:2026** — *Artificial intelligence — Quality management
system for EU AI Act regulatory purposes* — became the AI Act's first
harmonised standard on 14 October 2026 (Implementing Decision (EU) 2026/2274).
It is designed to be layered on an ISO/IEC 42001 AIMS; ISO/IEC 42001 itself
carries **no** presumption of conformity.

## In plain language

!!! note "Our explanation, not the official text"
    ISO text is copyrighted and paywalled — we explain the **concepts only**, in
    our own words, and never reproduce the normative wording. Buy the standard
    from ISO for the authoritative text. Not legal advice.

ISO/IEC 42001 is a management-system standard — it's about how your *organisation*
runs AI responsibly, not about a single model. Like ISO 27001 for security, it
asks you to set a policy, assess risks, choose controls, run impact assessments,
and keep improving — so you can be independently certified.

## Key terms

- **AIMS** — AI Management System: the organisational framework the standard certifies.
- **Statement of Applicability** — the documented list of which controls you apply, and why.
- **Annex A controls** — the reference set of AI controls an organisation selects from.

## In depth (in our own words)

!!! note "Our explanation — not the official text"
    ISO's text is copyrighted and paywalled, so everything below is our own-words
    explanation of the *concepts*. We never reproduce the normative wording. Buy
    the standard from ISO for the authoritative text. Not legal advice.

**What "management system" really means here.** ISO/IEC 42001 does not certify a
model, a dataset or an algorithm. It certifies how your *organisation* governs AI
— the policies, roles, processes, records and improvement loops around it. If you
know ISO 27001 (information security) or ISO 9001 (quality), the shape is
identical: a repeatable system that you can run, audit and improve, applied to AI.
That is deliberate — it lets AI governance plug into the management systems most
enterprises already run.

**The spine: Plan–Do–Check–Act.** Like every modern ISO management standard, 42001
uses the common "Annex SL" structure, which is really a continuous improvement
loop. *Plan* — understand your context and interested parties, get leadership to
own an AI policy, and plan how you'll handle AI risks and opportunities. *Do* —
operate: run AI system impact assessments and apply your chosen controls. *Check*
— monitor, measure, run internal audits and hold a management review. *Act* — fix
nonconformities and improve. The point is that responsible AI is never "done"; the
loop keeps turning as models, data and regulations change.

**Risk-based, with a documented rationale.** The heart of an AIMS is the
risk-and-controls logic: you assess AI-related risks, decide which controls apply,
and record *why* in a Statement of Applicability (SoA). The standard's annex
provides a reference set of AI controls to choose from — covering things like an
AI policy, clear accountability, impact assessment, data quality for AI, lifecycle
management, transparency to users, and oversight of third-party AI. You don't have
to adopt every control, but you do have to justify what you include and exclude.

**How certification works, and what an auditor checks.** Certification is
voluntary; a certificate is typically valid for three years with regular
surveillance audits. An auditor (internal or external) looks for evidence the
system is *real and operating*: a risk assessment with a defensible SoA, completed
AI system impact assessments, competence and awareness records, internal-audit and
management-review minutes, and a working nonconformity/improvement process. Thin
or "paper-only" systems — an SoA with no real risk basis, or impact assessments
that were never actually performed — are the classic findings.

**Why it matters for you.** ISO/IEC 42001 is the most concrete way to *demonstrate*
responsible AI to a buyer, partner or regulator, because it is independently
certifiable. It also maps cleanly onto the EU AI Act's quality-management
expectation (Art. 17), so a single AIMS can serve both voluntary assurance and
regulatory readiness — which is exactly how I position it in an engagement.

## Key Sections

- **Clauses 4–10**{ title="The Annex SL management-system spine shared with ISO 27001/9001 — context, leadership, planning, support, operation, performance evaluation, improvement." } — the Annex SL management-system spine: context, leadership, planning, support, operation, performance evaluation, improvement.
- **Annex A**{ title="ISO/IEC 42001's reference set of AI-specific controls; you select and justify which apply in the Statement of Applicability." } — reference set of AI-specific controls (objectives an organisation selects from).
- **Annex B**{ title="ISO/IEC 42001's implementation guidance for the Annex A controls." } — implementation guidance for those controls.
- **Annex C**{ title="ISO/IEC 42001's list of potential AI-related organisational objectives and risk sources to consider." } — potential AI-related organisational objectives and risk sources.
- **Annex D**{ title="ISO/IEC 42001 guidance on applying the AI management system across domains and sectors." } — applying the AIMS across domains/sectors.
- **EN ISO/IEC 42001:2026**{ title="The European adoption of ISO/IEC 42001:2023 by CEN/CENELEC JTC 21 (published 2026-03-18; identical text). Relevant because harmonised standards under the AI Act are European standards — this is the vehicle through which 42001 could be cited in the Official Journal. As of the observation date it has not been cited as harmonised." } — the European (CEN) edition of the same text, published 2026-03-18; the vehicle for any future harmonised-standard citation under the AI Act — **not** cited as such at the observation date (2026-10-30).
- **[EN 18286:2026 — the AI Act's first harmonised standard, layered on 42001](reference_eu_ai_act.md#audit-relevant-anchors "EN 18286:2026 'Artificial intelligence — Quality management system for EU AI Act regulatory purposes' (CEN/CENELEC, standardisation request C(2025) 3871, point 9 of Annex I): reference published in the OJ by Commission Implementing Decision (EU) 2026/2274 of 12 October 2026 (OJ L 2026/2274, 14 October 2026) — presumption of conformity with the AI Act's Art. 17 QMS requirements it covers. Per the Commission it is mapped to Art. 17, built around the AI-system lifecycle rather than the organisation, and designed to sit on top of ISO/IEC 42001, ISO 9001 or a sectoral QMS such as ISO 13485. Text paywalled by CEN/CENELEC.")** — what a provider of a high-risk AI system in the EU adds on top of (or instead of) a 42001 AIMS to obtain the Art. 17 presumption of conformity; an existing 42001 certificate is the natural substrate, not a substitute. Tracked on the [EU AI Act page](reference_eu_ai_act.md).
- **ISO/IEC AWI 42003 (under development)**{ title="ISO/IEC AWI 42003 — Information technology — Artificial intelligence — Guidance on the implementation of ISO/IEC 42001; new work item at stage 20.00 on the ISO/IEC JTC 1/SC 42 work programme as read on 2026-10-30. No publication date; ISO promises none. Will not change the 42001 requirements, only explain them." } — the coming implementation guide for this standard, registered as a new work item; nothing to cite yet.

## Audit-Relevant Anchors

- **Clause 6.1 + Annex A**{ title="ISO/IEC 42001 Clause 6.1 (risk assessment & treatment) combined with the Annex A controls and the Statement of Applicability — the spine of an AIMS audit." } — risk assessment/treatment and the Statement of Applicability — the spine of an AIMS audit.
- **Clause 8**{ title="ISO/IEC 42001 Clause 8 — operational planning and control, including the AI system impact assessment that links to ISO/IEC 42005." } — operational planning and control, incl. AI system impact assessment (links to ISO/IEC 42005).
- **Clause 9**{ title="ISO/IEC 42001 Clause 9 — monitoring, measurement, internal audit and management review; the recurring evidence base an auditor traces." } — monitoring, internal audit, management review — the recurring evidence base.
- **ISO/IEC 42006**{ title="The 2025 standard defining requirements for bodies that audit and certify AI management systems — it governs the credibility of any ISO/IEC 42001 certificate an auditor relies on." } — defines how certification bodies themselves are accredited; relevant to the credibility of any certificate an auditor relies on.

## Auditor Checklist

Evidence-oriented checks for an AIMS certification or readiness audit:

- [ ] AIMS scope is defined (Cl. 4.3); context and interested parties documented (Cl. 4.1–4.2).
- [ ] AI policy and leadership commitment are in place (Cl. 5).
- [ ] Risk assessment & treatment plus a Statement of Applicability exist (Cl. 6.1 + Annex A).
- [ ] AI system impact assessments are performed (Cl. 8; links to ISO/IEC 42005).
- [ ] Competence, awareness, and documented information are maintained (Cl. 7).
- [ ] Internal audit and management-review records exist (Cl. 9).
- [ ] Nonconformity handling and continual improvement are evidenced (Cl. 10).
- [ ] If certified, the certification body is accredited (per ISO/IEC 42006).

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences. ISO clauses are
**paywalled** (no public per-clause page) — see the [ISO catalogue entry](https://www.iso.org/standard/42001);
the NIST and EU AI Act cells link to readable sources.

| ISO/IEC 42001 | NIST AI RMF | EU AI Act |
| ------------- | ----------- | --------- |
| Cl. 5 (leadership & policy) | [GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/) | [Art. 17](https://artificialintelligenceact.eu/article/17/) (QMS) |
| Cl. 6.1 + Annex A (risk + SoA) | [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) / [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) | [Art. 9](https://artificialintelligenceact.eu/article/9/) |
| Cl. 8 (impact assessment) | [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) | [Art. 27](https://artificialintelligenceact.eu/article/27/) (FRIA) / [Art. 9](https://artificialintelligenceact.eu/article/9/) |
| Cl. 9 (monitoring & internal audit) | [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | [Art. 15](https://artificialintelligenceact.eu/article/15/) / [Art. 72](https://artificialintelligenceact.eu/article/72/) (post-market monitoring) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-10-30` | substantive | **The ISO text is unchanged, but its EU regulatory status moved.** ISO catalogue re-read in the browser (iso.org refuses automated clients): still edition 1, stage 60.60, no amendment or revision; the SC 42 work programme (51 items under development) carries no revision of 42001 but a new **ISO/IEC AWI 42003** (implementation guidance for 42001, stage 20.00) and **ISO/IEC 42105** (human oversight of AI systems) at stage 60.00, i.e. about to publish. **EN 18286:2026** — the CEN/CENELEC AI quality-management standard written for the AI Act and designed to layer on a 42001 AIMS — was cited as the Act's **first harmonised standard** by Commission Implementing Decision (EU) 2026/2274 (OJ 2026-10-14); ISO/IEC 42001 and EN ISO/IEC 42001:2026 remain **not** harmonised. ISO/IEC 42006:2025 was not re-read. |
| `2026-09-05` | version_bump | **European adoption:** CEN/CENELEC JTC 21 published **EN ISO/IEC 42001:2026** on 2026-03-18 — an identical adoption of ISO/IEC 42001:2023 as a European Standard (definitive text available, DAV). The international text is unchanged; what changes is its status in the European standardisation system. Not (yet) cited in the OJ as a harmonised standard under the AI Act. |
| `2026-06-16` | baseline | Initial baseline: ISO/IEC 42001:2023 (1st ed.) is current and un-amended; ISO/IEC 42006:2025 (cert-body requirements) published in 2025. |

## Sources

- **Primary (web):** [ISO catalogue — 42001](https://www.iso.org/standard/42001) · [ISO — "42001 explained"](https://www.iso.org/home/insights-news/resources/iso-42001-explained-what-it-is.html)
- **Note:** Full normative text is paywalled — this reference tracks **catalogue metadata only** (edition, stage, status). No full-text fetch.
- **Update 2026-10-30:** [ISO catalogue — 42001 (re-read in the browser)](https://www.iso.org/standard/42001) · [ISO/IEC JTC 1/SC 42 — standards under development](https://www.iso.org/committee/6794475/x/catalogue/p/0/u/1/w/0/d/0) · [EUR-Lex — Commission Implementing Decision (EU) 2026/2274](https://eur-lex.europa.eu/eli/dec_impl/2026/2274/oj/eng) · [EC — First harmonised standard supporting the AI Act published in the Official Journal (2026-10-19)](https://digital-strategy.ec.europa.eu/en/library/first-harmonised-standard-supporting-ai-act-published-official-journal) — retrieved 2026-10-30.
- **Update 2026-09-05:** [CEN catalogue entry — EN ISO/IEC 42001:2026 (iTeh mirror)](https://standards.iteh.ai/catalog/standards/cen/adc675e8-4669-4965-b4c1-c8f724832217/en-iso-iec-42001-2026) — publication 2026-03-18, status *Published*, committee CEN/CLC/JTC 21; retrieved 2026-09-05. Catalogue metadata only; CEN-CENELEC's own catalogue is an interactive application without a stable per-standard permalink, so the entry is corroborated through a CEN member body: [UNI — UNI CEI EN ISO/IEC 42001:2026](https://store.uni.com/en/uni-cei-en-iso-iec-42001-2026) (national adoption, entry into force 2026-07-30; retrieved 2026-09-05).
