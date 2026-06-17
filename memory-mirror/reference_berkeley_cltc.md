---
name: "UC Berkeley CLTC — AI Risk Thresholds"
description: "Berkeley Center for Long-Term Cybersecurity work on intolerable-risk thresholds and AI-enabled cyber-threat thresholds, incl. the Bayesian-network approach."
type: reference
source_id: berkeley_cltc
source_url: "https://cltc.berkeley.edu/program/ai-security-initiative/"
last_observed_at: "2026-06-16T00:00:00Z"
last_observed_commit_or_version: "Toward Risk Thresholds for AI-Enabled Cyber Threats (white paper, 2026-01-22); Intolerable Risk Threshold Recommendations (2025-02-03); Agentic AI Risk Management Standards Profile (2026-02-11)"
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
Threshold Recommendations for Artificial Intelligence"** (3 February 2025) and a
new **Agentic AI Risk Management Standards Profile** (11 February 2026). The work
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

## In depth (in our own words)

!!! note "Our explanation — not the official text"
    Our own-words explanation of the ideas. CLTC papers carry no explicit open
    licence, so we paraphrase and quote only short, attributed passages. Follow
    the source for the full text. Not legal advice.

**The core idea: turn "be safe" into red lines.** Most AI policy says systems
should be "safe" or "not pose unacceptable risk" — but without a defined line,
that is unenforceable. CLTC's work is about making the line *concrete*: defining
**intolerable-risk thresholds** — points beyond which a risk must be prevented
outright, not merely managed — and the evidence that tells you a system is
approaching one.

**Why a Bayesian method.** Frontier-AI risk is full of uncertainty: you rarely
have clean statistics, only partial evidence about a model's capabilities and
about the world it acts in. CLTC's cyber-threat work proposes using **Bayesian
networks** — a way to combine those uncertain pieces of evidence into a structured
estimate of when a threshold is likely crossed. The point isn't the maths; it's
replacing gut-feel "this seems risky" with a documented, reviewable line of
reasoning that a developer or regulator can act on and others can scrutinise.

**The cyber angle.** A recurring focus is **cyber uplift** — how much an AI model
lowers the cost or skill needed to mount an attack. Tying thresholds to observed
capability evaluations (e.g., can the model meaningfully help with offensive
cyber, or with bio?) lets you decide *in advance* what capability level triggers
which response.

**Where it fits.** This is policy- and research-facing work, not a compliance
standard. It complements the others: NIST AI RMF and the EU AI Act tell you to
manage risk and (for systemic-risk GPAI) to evaluate dangerous capabilities, but
they don't hand you the hard numeric "red lines" — CLTC is one of the most
serious attempts to define them.

**Why it matters for you.** For an auditor it provides *externally-sourced*,
defensible "intolerable" lines to test a deployer's risk appetite and acceptance
decisions against, plus a documented method to challenge ad-hoc risk acceptance.
Treat it as evolving research — cite the specific paper and date, since the field
is moving quickly.

## Key Sections

- **[Intolerable-risk thresholds](https://cltc.berkeley.edu/publication/intolerable-ai-risk-thresholds/ "CLTC's categories of AI risk — e.g. CBRN, cyber, loss of control — that warrant hard 'red lines' rather than voluntary commitments.")** — categories of risk (e.g. CBRN, cyber, loss of control) that warrant hard limits, not just voluntary commitments.
- **[AI-enabled cyber-threat thresholds](https://cltc.berkeley.edu/2026/01/22/cltc-white-paper-proposes-new-approach-to-risk-thresholds-for-ai-enabled-cyber-threats/ "CLTC's structured, Bayesian-network method (Jan 2026) for setting thresholds on how much a model lowers the cost/skill of offensive cyber-attacks.")** — a structured, Bayesian-network method for setting thresholds on offensive-cyber uplift from AI.
- **[Agentic AI Risk Management Profile](https://cltc.berkeley.edu/program/ai-security-initiative/ "CLTC's controls for the unique risks of agentic AI systems, complementing the CSA Agentic Profile.")** — controls for the unique risks of agentic systems (complements the CSA Agentic Profile).
- **[Capability evaluations](https://cltc.berkeley.edu/program/ai-security-initiative/ "Tests of what a model can actually do — e.g. cyber or biosecurity uplift — used to tie risk thresholds to observed capability rather than speculation.")** — thresholds tied to observed model capabilities (cyber, biosecurity).

## Audit-Relevant Anchors

- **[Threshold definitions](https://cltc.berkeley.edu/publication/intolerable-ai-risk-thresholds/ "CLTC's defined 'intolerable' risk lines — externally-sourced reference points an auditor can test a deployer's risk appetite against.")** — give an auditor defensible, externally-sourced "intolerable" lines to test a deployer's risk appetite against.
- **[Bayesian threshold method](https://cltc.berkeley.edu/2026/01/22/cltc-white-paper-proposes-new-approach-to-risk-thresholds-for-ai-enabled-cyber-threats/ "CLTC's documented Bayesian-network methodology (Jan 2026) for setting cyber-threat thresholds — citable when challenging ad-hoc risk acceptance.")** — a documented methodology an assessor can cite when challenging ad-hoc risk acceptance.
- **[Cyber-uplift framing](https://cltc.berkeley.edu/2026/01/22/cltc-white-paper-proposes-new-approach-to-risk-thresholds-for-ai-enabled-cyber-threats/ "Framing risk around how much a model lowers the cost/skill of cyber-attacks — directly relevant to security assessments of frontier-model deployments.")** — directly relevant to security assessments of frontier-model deployments.

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
| [Intolerable-risk thresholds](https://cltc.berkeley.edu/publication/intolerable-ai-risk-thresholds/) | [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) (risk tolerance) | [Art. 5](https://artificialintelligenceact.eu/article/5/) (prohibitions) / GPAI systemic risk |
| [Cyber-uplift method](https://cltc.berkeley.edu/2026/01/22/cltc-white-paper-proposes-new-approach-to-risk-thresholds-for-ai-enabled-cyber-threats/) | [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | [Art. 15](https://artificialintelligenceact.eu/article/15/) (cybersecurity) |
| [Capability evaluations](https://cltc.berkeley.edu/program/ai-security-initiative/) | [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | [Art. 55](https://artificialintelligenceact.eu/article/55/) (GPAI systemic-risk evals) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-06-16` | baseline | Initial baseline: cyber-threat thresholds white paper (2026-01-22), intolerable-risk recommendations (2025-02), and the Feb-2026 Agentic Profile captured. |

## Sources

- **Primary (web):** [CLTC AI Security Initiative](https://cltc.berkeley.edu/program/ai-security-initiative/) · [White paper announcement (2026-01-22)](https://cltc.berkeley.edu/2026/01/22/cltc-white-paper-proposes-new-approach-to-risk-thresholds-for-ai-enabled-cyber-threats/) · [Intolerable Risk Thresholds](https://cltc.berkeley.edu/publication/intolerable-ai-risk-thresholds/)
