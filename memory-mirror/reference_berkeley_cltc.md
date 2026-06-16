---
name: "UC Berkeley CLTC — AI Risk Thresholds"
description: "Berkeley Center for Long-Term Cybersecurity work on intolerable-risk thresholds and AI-enabled cyber-threat thresholds, incl. the Bayesian-network approach."
type: reference
source_id: berkeley_cltc
source_url: "https://cltc.berkeley.edu/program/ai-security-initiative/"
last_observed_at: "2026-06-16T00:00:00Z"
last_observed_commit_or_version: "Toward Risk Thresholds for AI-Enabled Cyber Threats (white paper, 2026-01-22); Intolerable Risk Threshold Recommendations (2025-02)"
provenance_chain:
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# UC Berkeley CLTC — AI Risk Thresholds

!!! info "Provenance & licence"
    **Source:** [CLTC AI Security Initiative](https://cltc.berkeley.edu/program/ai-security-initiative/) ·
    **Last observed:** `2026-06-16` ·
    **Version:** Cyber-threat thresholds white paper (2026-01-22) ·
    **Status:** planned ·
    **Licence:** © UC Regents (CLTC), no explicit open licence (`facts-and-quotation`)

## Summary

The UC Berkeley **Center for Long-Term Cybersecurity (CLTC)**, through its **AI
Security Initiative**, produces the threshold-setting work this project tracks
as the "red lines" layer of AI governance. Its **"Toward Risk Thresholds for
AI-Enabled Cyber Threats"** white paper (22 January 2026) proposes using
**Bayesian networks** to derive and evaluate thresholds by combining evidence
about both AI systems and the world. This builds on **"Intolerable Risk
Threshold Recommendations for Artificial Intelligence"** (February 2025) and a
new **Agentic AI Risk Management Standards Profile** (February 2026). The work
is policy-facing — it informs how developers and regulators set concrete limits
before intolerable risks materialise.

## In plain language

!!! note "Our explanation, not the official text"
    Plain-language summary in our own words. CLTC papers carry no explicit open
    licence, so we paraphrase the ideas and quote only short, attributed passages.
    Follow the source for the full text. Not legal advice.

Berkeley's CLTC works on the "red lines" of AI — defining thresholds beyond which
a risk becomes intolerable, especially for AI that could amplify cyber-attacks.
Their method uses structured / Bayesian reasoning to turn fuzzy worries into
concrete trigger points a developer or regulator can act on.

## Key terms

- **Intolerable risk** — a level of risk that should be prevented outright, not merely managed.
- **Risk threshold** — a defined trigger point that, once crossed, demands a specific response.
- **Cyber uplift** — how much an AI model increases an attacker's capability.

## Key Sections

- **Intolerable-risk thresholds** — categories of risk (e.g. CBRN, cyber, loss of control) that warrant hard limits, not just voluntary commitments.
- **AI-enabled cyber-threat thresholds** — a structured, Bayesian-network method for setting thresholds on offensive-cyber uplift from AI.
- **Agentic AI Risk Management Profile** — controls for the unique risks of agentic systems (complements the CSA Agentic Profile).
- **Capability evaluations** — thresholds tied to observed model capabilities (cyber, biosecurity).

## Audit-Relevant Anchors

- **Threshold definitions** — give an auditor defensible, externally-sourced "intolerable" lines to test a deployer's risk appetite against.
- **Bayesian threshold method** — a documented methodology an assessor can cite when challenging ad-hoc risk acceptance.
- **Cyber-uplift framing** — directly relevant to security assessments of frontier-model deployments.

## Auditor Checklist

Evidence-oriented checks for a frontier / high-capability deployment:

- [ ] The deployer defines explicit intolerable-risk thresholds, not just voluntary commitments.
- [ ] AI-enabled cyber-uplift risk is assessed with a documented method (Bayesian / structured).
- [ ] Capability evaluations (cyber, bio) are tied to defined threshold triggers.
- [ ] There is a documented response when a threshold is approached or crossed.
- [ ] Thresholds are reviewed as model capabilities change.

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences.

| Berkeley CLTC | NIST AI RMF | EU AI Act |
| ------------- | ----------- | --------- |
| Intolerable-risk thresholds | MANAGE (risk tolerance) | Art. 5 (prohibitions) / GPAI systemic risk |
| Cyber-uplift method | MEASURE 2 | Art. 15 (cybersecurity) |
| Capability evaluations | MEASURE | Art. 55 (GPAI systemic-risk evals) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-06-16` | baseline | Initial baseline: cyber-threat thresholds white paper (2026-01-22), intolerable-risk recommendations (2025-02), and the Feb-2026 Agentic Profile captured. |

## Sources

- **Primary (web):** [CLTC AI Security Initiative](https://cltc.berkeley.edu/program/ai-security-initiative/) · [White paper announcement (2026-01-22)](https://cltc.berkeley.edu/2026/01/22/cltc-white-paper-proposes-new-approach-to-risk-thresholds-for-ai-enabled-cyber-threats/) · [Intolerable Risk Thresholds](https://cltc.berkeley.edu/publication/intolerable-ai-risk-thresholds/)
