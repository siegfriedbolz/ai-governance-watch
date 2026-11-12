---
title: Glossary
description: "Plain-language glossary of AI governance and AI risk-audit terms — AIMS, GPAI, FRIA, HITL, AI-SBOM, model cards, Three Lines of Defence, TLPT, risk thresholds and more."
keywords: "AI governance glossary, AI risk auditing terms, AIMS, GPAI, FRIA, HITL, AI-SBOM, SBOM, CRA, GDPR, DPIA, special categories, MDAI, model card, Three Lines of Defence, TLPT, ISO 31000, NIST AI RMF terms"
---

# Glossary

Key terms used across the library, in plain language (our own words, not
normative definitions). Each links back to the standard that uses it.

- **Actively exploited vulnerability** — a vulnerability with reliable evidence that a malicious actor has used it against a real system; the trigger for the CRA's 24-hour reporting clock, distinct from a merely discovered or published flaw. See [EU Cyber Resilience Act](reference_eu_cra.md).
- **Agentic AI** — AI that plans, calls tools, holds memory and takes autonomous, multi-step actions — not just text replies. See [CSA Agentic Profile](reference_csa_agentic_profile.md).
- **AIMS (AI Management System)** — the organisation-wide framework that [ISO/IEC 42001](reference_iso_42001.md) certifies.
- **AI-SBOM** — an "AI bill of materials": the inventory of models, datasets and components an AI system is built from.
- **Annex III (EU AI Act)** — the list of use cases that make a system *high-risk*. See [EU AI Act](reference_eu_ai_act.md).
- **CETS 225** — the Council of Europe Framework Convention on AI (2024), the first binding international AI treaty; binds states, not companies, and is not yet in force. See [Council of Europe AI Convention](reference_coe_ai_convention.md).
- **CRA (Cyber Resilience Act)** — Regulation (EU) 2024/2847, the EU's product-cybersecurity law for hardware and software with digital elements; vulnerability and incident reporting since 11 Sep 2026, full application 11 Dec 2027. See [EU Cyber Resilience Act](reference_eu_cra.md).
- **Conformity assessment** — the check (internal or by a notified body) that a high-risk system meets the EU AI Act before it goes to market.
- **Cyber uplift** — how much an AI model increases an attacker's capability. See [Berkeley CLTC](reference_berkeley_cltc.md).
- **DPIA (Data Protection Impact Assessment)** — the written risk assessment the GDPR requires before processing likely to result in a high risk (Art. 35); in German *Datenschutz-Folgenabschätzung* (DSFA). Often due when AI is used on personal data, and designed to be joined with the FRIA. See [GDPR](reference_gdpr.md).
- **FRIA** — Fundamental Rights Impact Assessment, required of certain deployers of high-risk systems (EU AI Act, Art. 27).
- **GDPR (General Data Protection Regulation)** — Regulation (EU) 2016/679, the EU's binding data-protection law; applies to every AI system that processes personal data, alongside the AI Act. See [GDPR](reference_gdpr.md).
- **GOVERN · MAP · MEASURE · MANAGE** — the four functions of the [NIST AI RMF](reference_nist_ai_rmf.md).
- **GPAI** — a general-purpose AI model, with its own EU AI Act duties (transparency, copyright, training-data summary).
- **HITL (Human-in-the-Loop)** — keeping a human in (or on) the loop of an AI decision; only effective if it can actually change the outcome.
- **ICT third-party risk** — risk from outside tech / AI / cloud providers a financial firm depends on. Central to [DORA](reference_dora.md).
- **Intolerable risk** — a level of risk that should be prevented outright, not merely managed. See [Berkeley CLTC](reference_berkeley_cltc.md).
- **ISO 31000** — the general (non-AI) risk-management standard that [ISO/IEC 23894](reference_iso_23894.md) builds on.
- **MDAI (medical device AI)** — an AI system that is a medical device or a safety component of one; high-risk under the EU AI Act when the device needs a notified body under the MDR or IVDR. See [EU AI Act](reference_eu_ai_act.md#health-and-medical-devices).
- **Model card** — short structured documentation of a model's purpose, data, performance and limitations.
- **Oversight theatre** — human oversight that exists on paper but cannot actually stop the system. See [CSA Agentic Profile](reference_csa_agentic_profile.md).
- **Product with digital elements** — the CRA's scope term: software or hardware whose intended use includes a direct or indirect data connection; AI software shipped as a product is covered. See [EU Cyber Resilience Act](reference_eu_cra.md).
- **Profile (NIST)** — a tailored selection of a framework for a specific context (e.g. the GenAI Profile).
- **Residual risk** — the risk that remains after treatment, which someone must formally accept.
- **Risk source** — the origin of a risk (e.g. training data, model opacity); [ISO/IEC 23894](reference_iso_23894.md) Annex B lists AI-specific ones.
- **Risk threshold** — a defined trigger point that, once crossed, demands a specific response.
- **SC 42 (ISO/IEC JTC 1/SC 42)** — the subcommittee that writes the international AI standards (42001, 23894, 42005, 42006 …).
- **SBOM (Software Bill of Materials)** — the machine-readable inventory of a product's software components; required by the CRA's Annex I and the software counterpart of an AI-SBOM. See [EU Cyber Resilience Act](reference_eu_cra.md).
- **Special categories of personal data** — the data the GDPR forbids processing unless a listed exception applies (Art. 9): health, genetic and biometric data, among others. See [GDPR](reference_gdpr.md).
- **Statement of Applicability (SoA)** — the documented list of which controls an organisation applies, and why (ISO/IEC 42001).
- **Three Lines of Defence** — a governance model: the business owns risk (1st line), risk & compliance oversee it (2nd), internal audit assures it (3rd).
- **TLPT (Threat-Led Penetration Testing)** — advanced, intelligence-led resilience testing required of significant entities under [DORA](reference_dora.md).
- **Trustworthy AI** — NIST's set of characteristics: valid & reliable, safe, secure & resilient, accountable & transparent, explainable & interpretable, privacy-enhanced, and fair (with harmful bias managed).
