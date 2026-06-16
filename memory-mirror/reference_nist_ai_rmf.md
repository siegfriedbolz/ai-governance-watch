---
name: "NIST AI Risk Management Framework (AI RMF)"
description: "NIST's voluntary AI RMF 1.0, its Generative AI Profile, and the AI RMF Playbook — the GOVERN/MAP/MEASURE/MANAGE backbone for AI risk governance."
type: reference
source_id: nist_ai_rmf
source_url: "https://www.nist.gov/itl/ai-risk-management-framework"
last_observed_at: "2026-06-16T00:00:00Z"
last_observed_commit_or_version: "AI RMF 1.0 (Jan 2023); GenAI Profile AI 600-1 (Jul 2024); Adversarial ML Taxonomy AI 100-2e2025"
provenance_chain:
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# NIST AI Risk Management Framework (AI RMF)

!!! info "Provenance"
    **Source:** [nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework) ·
    **Last observed:** `2026-06-16` ·
    **Version:** AI RMF 1.0 (2023) + GenAI Profile 600-1 (2024) ·
    **Status:** pilot

## Summary

The NIST AI Risk Management Framework (AI RMF 1.0, NIST AI 100-1) is a
voluntary framework published in January 2023 to help organisations manage
risks across the AI lifecycle. It is organised around four core functions —
**GOVERN, MAP, MEASURE, MANAGE** — and a set of characteristics of
trustworthy AI. The **Generative AI Profile** (NIST AI 600-1, July 2024) is a
companion that enumerates twelve GenAI-specific risks and suggested actions.
The **Adversarial Machine Learning** taxonomy (NIST AI 100-2e2025) supplies the
attack/mitigation vocabulary. NIST has signalled an **AI Agent / Agentic
Profile** for late 2026, since agentic systems sit outside the original frame
of RMF 1.0 and 600-1.

## Key Sections

- **GOVERN** — cross-cutting culture, policies, accountability, and roles for AI risk.
- **MAP** — establish context; frame the system, its purpose, and its impacts.
- **MEASURE** — analyse, benchmark, and monitor AI risks with quantitative and qualitative methods.
- **MANAGE** — prioritise, respond to, and recover from risks; allocate resources.
- **Trustworthy AI characteristics** — valid & reliable, safe, secure & resilient, accountable & transparent, explainable & interpretable, privacy-enhanced, and fair (with harmful bias managed).
- **GenAI Profile (600-1)** — 12 risks incl. confabulation, dangerous/CBRN information, data privacy, harmful bias, information integrity, information security, IP, and value-chain/component integration.
- **AI RMF Playbook** — actionable, suggested-action companion to the four functions (maintained as a living web resource on the AI Resource Center).

## Audit-Relevant Anchors

- **GOVERN 1.1 / 1.2** — legal and regulatory requirements are understood, documented, and managed; trustworthy-AI characteristics are reflected in policy.
- **MAP 1.x** — intended purpose, context of use, and foreseeable misuse are documented (the basis of an audit scope).
- **MEASURE 2.x** — system performance and trustworthiness are evaluated with named metrics and test sets.
- **MANAGE 2.x / 4.x** — risk responses and post-deployment monitoring are documented and maintained — the audit trail an assessor inspects.

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-06-16` | baseline | Initial baseline: AI RMF 1.0, GenAI Profile 600-1, Adversarial ML 100-2e2025 captured. Agentic Profile noted as forthcoming (NIST, ~Q4 2026). |

## Sources

- **Primary (web):** [AI RMF landing](https://www.nist.gov/itl/ai-risk-management-framework) · [AI Resource Center (AIRC)](https://airc.nist.gov/) · [AI 100-1 (DOI)](https://doi.org/10.6028/NIST.AI.100-1) · [GenAI Profile 600-1 (PDF)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) · [Playbook (interactive)](https://airc.nist.gov/airmf-resources/playbook/)
