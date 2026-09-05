---
name: "UC Berkeley CLTC — AI Risk Thresholds"
description: "Berkeley Center for Long-Term Cybersecurity work on intolerable-risk thresholds and AI-enabled cyber-threat thresholds, incl. the Bayesian-network approach."
keywords: "Berkeley CLTC, intolerable AI risk thresholds, AI cyber risk thresholds, cyber uplift, frontier AI evaluation, GPAI risk-management standards profile, AIxCyber threat scenarios, AI risk governance for boards"
type: reference
source_id: berkeley_cltc
source_url: "https://cltc.berkeley.edu/program/ai-security-initiative/"
about_type: CreativeWork
about_identifier: "CLTC AI risk-threshold and profile publications"
about_jurisdiction: "International"
last_observed_at: "2026-09-05T00:00:00Z"
last_observed_commit_or_version: "Toward Risk Thresholds for AI-Enabled Cyber Threats (white paper, 2026-01-22; arXiv 2601.17225); Intolerable Risk Threshold Recommendations (2025-02-03); Agentic AI Risk-Management Standards Profile (2026-02); Evaluation of Frontier AI Company Practices Using the GPAI Profile v1.2 (Apr 2026); AIxCyber Threat Scenarios 2027–2029 (2026-05-18); AgentWatch (2026-06-30); AI Risk Governance for Investors and Corporate Boards (2026-08-12)"
provenance_chain:
  - timestamp: "2026-09-05T00:00:00Z"
    pr: "manual refresh (September 2026)"
    change: substantive
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# UC Berkeley CLTC — AI Risk Thresholds

!!! info "Provenance & licence"
    **Source:** [CLTC AI Security Initiative](https://cltc.berkeley.edu/program/ai-security-initiative/) ·
    **Last observed:** `2026-09-05` ·
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
- **[Agentic AI Risk-Management Standards Profile (PDF)](https://cltc.berkeley.edu/wp-content/uploads/2026/02/Agentic-AI-Risk-Management-Standards-Profile.pdf "CLTC's Agentic AI Risk-Management Standards Profile (February 2026) — recommendations for autonomous systems organised along the NIST AI RMF functions GOVERN/MAP/MEASURE/MANAGE; companion to CLTC's General-Purpose AI Profile.")** — the agentic profile itself, organised along the four NIST RMF functions.
- **[Evaluation of Frontier AI Company Practices (Apr 2026)](https://cltc.berkeley.edu/wp-content/uploads/2026/04/Berkeley-Evaluation-of-Frontier-AI-v1-2.pdf "CLTC (Madkour, Newman, Raman, Jackson, Murphy, Yuan), April 2026 — an assessment of frontier AI developers' published practices against the General-Purpose AI Risk-Management Standards Profile v1.2. Useful as a worked example of profile-based assessment.")** — CLTC's own profile used as an assessment instrument on frontier developers; a worked example for profile-based audits.
- **[AIxCyber Threat Scenarios 2027–2029 (2026-05-18)](https://cltc.berkeley.edu/2026/05/18/aixcyber-threat-scenarios-2027-2029/ "CLTC (Madkour, Cleaveland), May 2026 — three scenarios of AI-changed cyber threat landscapes: AI-driven social engineering at scale (2027), cheap machine-speed vulnerability discovery and exploitation (2028), indirect prompt injection against autonomous agents in supply chains (2029). The narrative companion to the cyber risk-thresholds white paper.")** — turns the threshold paper into concrete scenarios an auditor can test a client's assumptions against.
- **[AI Risk Governance for Investors and Corporate Boards (2026-08-12)](https://cltc.berkeley.edu/2026/08/12/ai-risk-governance-a-structured-approach-for-investors-and-corporate-boards/ "CLTC white paper (Oumou Ly, 12 August 2026, updated 26 August): a structured approach to AI risk across the investment lifecycle — deal sourcing, due diligence, post-investment, growth, exit — with observable risk signals, screening questions and an AI Risk and Investor Oversight Matrix; aimed at fund managers, boards and oversight designers.")** — board- and investor-level oversight questions; directly reusable in due-diligence and takeover reviews.
- **[AgentWatch — privacy and security evaluation of browser-based AI agents (2026-06-30)](https://cltc.berkeley.edu/publications/ "CLTC white paper, June 2026: comparative privacy and security analysis of browser-based agentic assistants.")** — evidence of how agentic products behave in practice.

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
| `2026-09-05` | substantive | Four newer CLTC publications captured: **Evaluation of Frontier AI Company Practices Using the General-Purpose AI Risk-Management Standards Profile v1.2** (April 2026) — CLTC's own profile applied as an assessment instrument to frontier developers; **AIxCyber Threat Scenarios 2027–2029** (2026-05-18), the scenario companion to the cyber-thresholds paper; **AgentWatch** (2026-06-30), a privacy/security evaluation of browser-based agents; and **AI Risk Governance for Investors and Corporate Boards** (2026-08-12, updated 2026-08-26). The Agentic AI Risk-Management Standards Profile (Feb 2026) now has a direct PDF link, and the cyber-thresholds white paper is also on arXiv (2601.17225). |
| `2026-06-16` | baseline | Initial baseline: cyber-threat thresholds white paper (2026-01-22), intolerable-risk recommendations (2025-02), and the Feb-2026 Agentic Profile captured. |

## Sources

- **Primary (web):** [CLTC AI Security Initiative](https://cltc.berkeley.edu/program/ai-security-initiative/) · [White paper announcement (2026-01-22)](https://cltc.berkeley.edu/2026/01/22/cltc-white-paper-proposes-new-approach-to-risk-thresholds-for-ai-enabled-cyber-threats/) · [Intolerable Risk Thresholds](https://cltc.berkeley.edu/publication/intolerable-ai-risk-thresholds/)
- **Update 2026-09-05:** [Agentic profile (PDF)](https://cltc.berkeley.edu/wp-content/uploads/2026/02/Agentic-AI-Risk-Management-Standards-Profile.pdf) · [Frontier-AI evaluation v1.2 (PDF)](https://cltc.berkeley.edu/wp-content/uploads/2026/04/Berkeley-Evaluation-of-Frontier-AI-v1-2.pdf) · [Cyber-thresholds paper on arXiv](https://arxiv.org/abs/2601.17225) — retrieved 2026-09-05.
- **Update 2026-09-05 (2):** [CLTC — AIxCyber Threat Scenarios 2027–2029](https://cltc.berkeley.edu/2026/05/18/aixcyber-threat-scenarios-2027-2029/) · [CLTC — AI Risk Governance for Investors and Corporate Boards](https://cltc.berkeley.edu/2026/08/12/ai-risk-governance-a-structured-approach-for-investors-and-corporate-boards/) · [CLTC — AI Risk Governance (PDF)](https://cltc.berkeley.edu/wp-content/uploads/2026/08/AI_Risk_Governance.pdf) · [CLTC — publications list](https://cltc.berkeley.edu/publications/) — retrieved 2026-09-05.
