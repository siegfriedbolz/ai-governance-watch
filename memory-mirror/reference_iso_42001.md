---
name: "ISO/IEC 42001:2023 (AI Management System)"
description: "The world's first AI management system standard (AIMS), its certification model, and the surrounding ISO/IEC 42000-series."
type: reference
source_id: iso_42001
source_url: "https://www.iso.org/standard/42001"
last_observed_at: "2026-06-16T00:00:00Z"
last_observed_commit_or_version: "ISO/IEC 42001:2023 (1st edition, published 2023-12); ISO/IEC 42006:2025 published (2025)"
provenance_chain:
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# ISO/IEC 42001:2023 (AI Management System)

!!! info "Provenance & licence"
    **Source:** [iso.org/standard/42001](https://www.iso.org/standard/42001) ·
    **Last observed:** `2026-06-16` ·
    **Version:** ISO/IEC 42001:2023, 1st edition ·
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
system impact assessment).

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
| `2026-06-16` | baseline | Initial baseline: ISO/IEC 42001:2023 (1st ed.) is current and un-amended; ISO/IEC 42006:2025 (cert-body requirements) published in 2025. |

## Sources

- **Primary (web):** [ISO catalogue — 42001](https://www.iso.org/standard/42001) · [ISO — "42001 explained"](https://www.iso.org/home/insights-news/resources/iso-42001-explained-what-it-is.html)
- **Note:** Full normative text is paywalled — this reference tracks **catalogue metadata only** (edition, stage, status). No full-text fetch.
