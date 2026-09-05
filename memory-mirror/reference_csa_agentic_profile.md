---
name: "CSA — NIST AI RMF: Agentic Profile"
description: "Cloud Security Alliance's agentic-AI extension of the NIST AI RMF, plus CSA's wider 2026 agentic-control-plane and catastrophic-risk work."
type: reference
source_id: csa_agentic_profile
source_url: "https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/"
last_observed_at: "2026-09-05T00:00:00Z"
last_observed_commit_or_version: "CSA Lab Space Agentic Profile draft v1 (early 2026); CSA research-note series on the NIST AI Agent Standards Initiative (Mar–Apr 2026); OWASP State of Agentic AI Security & Governance v2.01 (Jun 2026); Agentic Profile header "White Paper 2026-03-27, status draft"; OWASP GenAI LLM Top 10 2026 (v1.0, 2026-08-03); OWASP Agent Control Standard and GenAI Security Industry Framework Crosswalk announced 2026-09-02"
provenance_chain:
  - timestamp: "2026-09-05T00:00:00Z"
    pr: "manual refresh (September 2026)"
    change: substantive
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# CSA — NIST AI RMF: Agentic Profile

!!! info "Provenance & licence"
    **Source:** [CSA Lab Space — Agentic NIST AI RMF Profile v1](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) ·
    **Last observed:** `2026-09-05` ·
    **Version:** Lab Space draft v1 (early 2026) + CSA research notes (Mar–Apr 2026) ·
    **Status:** planned ·
    **Licence:** no licence stated on the CSA Lab Space draft; CSA's published agentic work uses CC BY / CC BY-SA — treated here as facts & short attributed quotation (`facts-and-quotation`)

## Summary

The Cloud Security Alliance's **Agentic Profile** maps the NIST AI RMF's four
functions onto the qualitatively different risks of **agentic AI** — systems
that plan, use tools, hold memory, and act with autonomy, which sit outside the
original frame of RMF 1.0 and the GenAI Profile. It is a **draft (v1)** in CSA's
Lab Space. Around it, CSA's 2026 programme is expanding fast: the **CSAI
Foundation** announced milestones to "secure the agentic control plane"
(April 2026), a **Catastrophic Risk Annex** extending the **AI Controls Matrix
(AICM)** and the **STAR for AI** assurance programme, and a four-phase rollout
(June 2026 → December 2027) explicitly aligned with NIST AI RMF, the EU AI Act,
and ISO/IEC 42001.

## In plain language

!!! note "Our explanation, not the official text"
    Plain-language summary in our own words — not the official text. The CSA Lab
    Space draft states no explicit licence, so we paraphrase the concepts and
    attribute CSA. Not legal advice.

This CSA profile takes the NIST AI RMF and adapts it to *agentic* AI — systems
that plan, call tools, hold memory, and act on their own. The core question it
forces: is the agent's authority bounded, logged, and reversible, and is the
human oversight real rather than cosmetic? It's still a draft and plugs into
CSA's wider AI controls catalogue.

## Key terms

- **Agentic AI** — AI that takes autonomous, multi-step actions using tools, not just text replies.
- **AG-GV / MP / MS / MG** — the agentic versions of NIST's govern / map / measure / manage.
- **Oversight theatre** — human oversight that exists on paper but can't actually stop the agent.

## In depth (in our own words)

!!! note "Our explanation — not the official text"
    Our own-words explanation of the concepts. The CSA Lab Space draft states no
    explicit licence, so we paraphrase the concepts and attribute CSA. Not legal advice.

**Why agentic AI needed its own profile.** The NIST AI RMF and the GenAI Profile
were written for models that answer questions. *Agentic* systems are different:
they pursue goals over many steps, call external tools and APIs, hold memory, and
act with real autonomy. That introduces failure modes the original frameworks
barely touch — an agent drifting from its intended goal, misusing a tool,
escalating its own privileges, having its memory or context poisoned, or several
agents triggering a cascade of actions no single human approved. CSA's Agentic
Profile exists to extend the familiar NIST functions to exactly these risks.

**The four agentic functions, in plain terms.** The profile mirrors NIST's
GOVERN/MAP/MEASURE/MANAGE with agent-specific codes. **AG-GV (Govern)** is about
the agent's *mandate*: who authorised it, what it is allowed to do, and who is
accountable. **AG-MP (Map)** is about its *reach*: the tools, data and actions it
can take — the attack and blast-radius surface. **AG-MS (Measure)** is about
*evidence*: is the oversight actually effective, or just decorative? **AG-MG
(Manage)** is about *control under stress*: containment, kill-switches, rollback
and recovery when an agent behaves unexpectedly.

**The questions an agentic audit really turns on.** In our practice the decisive
checks are: Is the agent's authority *bounded* and least-privilege, or can it do
far more than its task needs? Is every action *logged, attributable and
reversible*? Is the human oversight *real* — can a person actually stop or undo the
agent in time — or is it "oversight theatre"? Has the kill-switch ever been
*tested*? Are memory-poisoning and inter-agent communication risks considered?

**Where it sits in the ecosystem.** The profile plugs into CSA's wider control
work — the AI Controls Matrix (AICM) and the catastrophic-risk programme — and
lines up with the OWASP Top 10 for Agentic Applications and the EU AI Act's
oversight duties. So it's both a risk lens and a crosswalk back to obligations you
already have.

**A caveat worth stating.** It is a **draft (v1)**. The structure is stable enough
to use as an audit lens today, but specific clause numbers and controls may change
— so cite it as evolving guidance, and re-check the current version before relying
on exact references.

## Key Sections

- **[AG-GV (Govern)](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/)** — governance of agent objectives, authority, and accountability.
- **[AG-MP (Map)](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/)** — context, tools, and the agent's action surface.
- **[AG-MS (Measure)](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/)** — evaluation of agent behaviour, reliability, and oversight effectiveness.
- **[AG-MG (Manage)](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/)** — response, containment, and recovery for autonomous behaviour.
- **AI Controls Matrix (AICM) + Catastrophic Risk Annex** — control set for loss of human oversight and large-scale, irreversible outcomes.
- **[CSA research notes — NIST AI Agent Standards Initiative (2026)](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-agent-governance-framework-gap-20260403/ "CSA Lab Space research-note series (March–April 2026) reading NIST's emerging AI-agent standards work: red-teaming guidance, the governance-framework gap CISOs face, and the federal compliance angle. Interpretive notes, not NIST documents.")** — how CSA reads NIST's emerging agent-standards work (red-teaming, governance gap, federal compliance); interpretive, not normative.
- **OWASP State of Agentic AI Security & Governance v2.01**{ title="OWASP GenAI Security Project's agentic threat-and-governance report, version 2.01 (June 2026), which supersedes v1.0 (2025). The threat-side companion to the CSA profile's control functions." } — the threat-side companion; **v2.01 (June 2026) supersedes v1.0**.
- **[OWASP GenAI LLM Top 10 2026 (v1.0, 2026-08-03)](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/ "OWASP GenAI Security Project — 2026 edition of the Top 10 for LLM applications (v1.0, 3 August 2026): updated rankings and expanded threat coverage; Excessive Agency moves up the list. Supersedes the 2025 edition as the threat catalogue to pair with the profile's controls.")** — the 2026 threat list to map the profile's Govern/Map/Measure/Manage controls against.
- **[OWASP Agent Control Standard (ACS) and Framework Crosswalk (announced 2026-09-02)](https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/ "OWASP GenAI Security Project announcement of 2 September 2026: the Agent Control Standard, donated to the project, extends agentic guidance towards practical runtime enforcement; the GenAI Security Industry Framework Crosswalk connects OWASP guidance to established security, risk and compliance frameworks.")** — runtime enforcement (ACS) is the missing layer between the profile's control statements and an agent that actually stops; the crosswalk is the mapping aid.

## Audit-Relevant Anchors

- **AG-GV controls**{ title="The CSA Agentic Profile's Govern controls — the core agentic-audit question of whether the agent's authority is bounded, logged and revocable." } — is the agent's authority bounded, logged, and revocable? (Core agentic-audit question.)
- **AG-MS controls**{ title="The CSA Agentic Profile's Measure controls — evidence that human oversight of the agent is real and effective, not oversight theatre." } — evidence that oversight is real, not "oversight theatre".
- **AICM mapping**{ title="A crosswalk from the CSA AI Controls Matrix that lets an auditor tie agentic controls back to NIST, ISO and EU AI Act obligations." } — crosswalk an auditor can use to tie agentic controls back to NIST/ISO/EU obligations.
- **Draft status**{ title="The Agentic Profile is a draft (v1, not final), so cited function/control identifiers may shift — anchors must be re-checked against the current version." } — anchors must be re-checked: v1 is not final, so cited clause numbers may shift.

## Auditor Checklist

Evidence-oriented checks for an agentic-AI deployment:

- [ ] Agent objectives, authority, and scope are explicitly bounded and documented (AG-GV).
- [ ] The agent's tool/action surface is mapped and least-privilege (AG-MP).
- [ ] Agent actions are logged, attributable, and revocable.
- [ ] Oversight effectiveness is measured, not assumed (AG-MS) — no "oversight theatre".
- [ ] Containment / kill-switch and recovery procedures are tested (AG-MG).
- [ ] Memory/context-poisoning and inter-agent communication risks are considered.
- [ ] AICM controls are mapped to NIST / ISO / EU obligations.

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences.

Cells link to the direct source (CSA draft · NIST AIRC · EU AI Act · OWASP GenAI).

| CSA Agentic | NIST AI RMF | EU AI Act | OWASP Agentic 2026 |
| ----------- | ----------- | --------- | ------------------ |
| [AG-GV](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) (govern) | [GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/) | [Art. 14](https://artificialintelligenceact.eu/article/14/) (oversight) | [Identity / privilege abuse](https://genai.owasp.org/) |
| [AG-MP](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) (map) | [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) | [Art. 9](https://artificialintelligenceact.eu/article/9/) | [Tool misuse](https://genai.owasp.org/) |
| [AG-MS](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) (measure) | [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | [Art. 15](https://artificialintelligenceact.eu/article/15/) | [Human-agent trust exploitation](https://genai.owasp.org/) |
| [AG-MG](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) (manage) | [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) | [Art. 9](https://artificialintelligenceact.eu/article/9/) (treatment) | [Rogue agents / cascading failures](https://genai.owasp.org/) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-09-05` (2) | substantive | **OWASP moved.** The **GenAI LLM Top 10 2026** (v1.0) was released 2026-08-03; on 2026-09-02 OWASP announced the **Agent Control Standard (ACS)** — runtime enforcement for agents — and the **GenAI Security Industry Framework Crosswalk**. The CSA profile itself is unchanged (header: White Paper 2026-03-27, status draft); it notes that NIST/CAISI plan an AI Agent Interoperability Profile for Q4 2026. |
| `2026-09-05` | substantive | The Agentic Profile itself is still the Lab Space **draft v1**. Around it, CSA published a **research-note series on NIST's AI Agent Standards Initiative** (red-teaming guidance 2026-03-31; the agent-governance framework gap 2026-04-03; federal framework and compliance notes, Apr 2026). Cross-reference updated: **OWASP State of Agentic AI Security & Governance v2.01** (June 2026) supersedes v1.0 as the threat-side companion. |
| `2026-06-16` | baseline | Initial baseline: CSA Agentic Profile draft v1 (early 2026) plus CSA 2026 catastrophic-risk / AICM / STAR-for-AI programme captured. |

## Sources

- **Primary (web):** [CSA Lab Space — Agentic NIST AI RMF Profile v1](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) · [CSAI Foundation milestones (2026-04-29)](https://cloudsecurityalliance.org/press-releases/2026/04/29/csai-foundation-announces-key-milestones-to-secure-the-agentic-control-plane)
- **Update 2026-09-05:** [Research note — governance gap (2026-04-03)](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-agent-governance-framework-gap-20260403/) · [Research note — red-teaming (2026-03)](https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-red-teaming-standards-202603/) · [Research note — federal framework](https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-standards-federal-framework/) · [OWASP — State of Agentic AI Security & Governance](https://genai.owasp.org/resource/state-of-agentic-ai-security-and-governance/) — retrieved 2026-09-05.
- **Update 2026-09-05 (2):** [OWASP — GenAI LLM Top 10 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) · [OWASP — announcement of 2026-09-02 (ACS, crosswalk)](https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/) — retrieved 2026-09-05.
