---
name: "CSA — NIST AI RMF: Agentic Profile"
description: "Cloud Security Alliance's agentic-AI extension of the NIST AI RMF, plus CSA's wider 2026 agentic-control-plane and catastrophic-risk work."
keywords: "CSA Agentic Profile, agentic AI governance, Authorization of Agents, Six Pillars of MCP, GenAI Red Teaming Manual, agentic AI exploit roundup, agent security controls, NIST AI RMF agentic profile, AI Controls Matrix AICM, OWASP agentic AI security, Agent Control Standard, autonomous agent oversight, agent identity, AI agent authorization, NCCoE agent identity concept paper"
type: reference
source_id: csa_agentic_profile
source_url: "https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/"
about_type: CreativeWork
about_identifier: "CSA Agentic AI Risk Management Profile (Lab Space draft v1)"
about_jurisdiction: "International"
last_observed_at: "2026-11-12T00:00:00Z"
last_observed_commit_or_version: "CSA Lab Space Agentic Profile draft v1 (early 2026); CSA research-note series on the NIST AI Agent Standards Initiative (Mar–Apr 2026); OWASP State of Agentic AI Security & Governance v2.01 (Jun 2026); Agentic Profile header 'White Paper 2026-03-27, status draft'; OWASP GenAI LLM Top 10 2026 (v1.0, title page 2026-08-04); OWASP Agent Control Standard and GenAI Security Industry Framework Crosswalk announced 2026-09-02; NIST NCCoE concept paper on software and AI agent identity and authorization (draft, 2026-02-05); re-observed 2026-10-30: Agentic Profile still Lab Space draft v1 (header unchanged); CSA peer reviews open: AARM Benchmarking Framework (to 2026-10-30), The Six Pillars of MCP (to 2026-11-10), Authorization of Agents (to 2026-11-13); CSA Frontier Ready Assessment Framework published 2026-10-08; OWASP GenAI and Agentic AI Exploit Roundup Q3 2026 (2026-10-08), GenAI Red Teaming Manual v1.0 (2026-10-20), LLM Exploit Generation Guide 2.0 (2026-10-27); NIST CAISSI/NSA/CISA Key Practices for incident readiness in SI training and evaluation (2026-10-16); UK CMA guidance on AI agents and DRCF joint statement on the agentic economy (2026-10-30); NIST AI Agent Interoperability Profile (planned Q4 2026) unpublished; CSA Autonomous Pentest Assurance Standard (APAS) published 2026-11-04; OWASP GenAI Data Security Best Practices v2 Part 1 2026-11-03; CSA peer reviews Six Pillars of MCP (to 2026-11-10) and Authorization of Agents (to 2026-11-13) still open; UK NIS Bill factsheet on agentic loss of control 2026-11-03; re-observed 2026-11-12: Lab Space header unchanged (White Paper 2026-03-27, status draft); CSA peer review of The Six Pillars of MCP no longer listed (closed 2026-11-10), Authorization of Agents open to 2026-11-13; OWASP Securing Agentic Applications V2 listed 2026-11-10; NIST agent initiative page updated 2026-11-09, no profile"
provenance_chain:
  - timestamp: "2026-11-12T00:00:00Z"
    pr: "manual re-observation and correction (November 2026): Lab Space page, CSA research list and OWASP resource list re-read; OWASP Top 10 date corrected"
    change: editorial
  - timestamp: "2026-11-08T00:00:00Z"
    pr: "manual re-observation (November 2026): CSA research list, OWASP resources, UK cross-check"
    change: editorial
  - timestamp: "2026-10-30T00:00:00Z"
    pr: "manual re-observation (October 2026): CSA Lab Space, CSA research list, OWASP GenAI resources, NIST and UK CMA cross-checks"
    change: substantive
  - timestamp: "2026-09-15T00:00:00Z"
    pr: "manual addition (NCCoE agent identity concept paper)"
    change: editorial
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
    **Last observed:** `2026-11-12` ·
    **Version:** Lab Space draft v1 (header unchanged at 2026-10-30) + CSA research notes (Mar–Apr 2026) + CSA/OWASP agentic companions through October 2026 ·
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
- **[OWASP GenAI LLM Top 10 2026 (v1.0, 2026-08-04)](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/ "OWASP GenAI Security Project — 2026 edition of the Top 10 for LLM applications (v1.0; the document's title page is dated 4 August 2026, OWASP's resource page lists it under 3 August 2026): updated rankings and expanded threat coverage; Excessive Agency moves up the list. Supersedes the 2025 edition as the threat catalogue to pair with the profile's controls.")** — the 2026 threat list to map the profile's Govern/Map/Measure/Manage controls against.
- **[OWASP Agent Control Standard (ACS) and Framework Crosswalk (announced 2026-09-02)](https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/ "OWASP GenAI Security Project announcement of 2 September 2026: the Agent Control Standard, donated to the project, extends agentic guidance towards practical runtime enforcement; the GenAI Security Industry Framework Crosswalk connects OWASP guidance to established security, risk and compliance frameworks.")** — runtime enforcement (ACS) is the missing layer between the profile's control statements and an agent that actually stops; the crosswalk is the mapping aid.
- **[NIST NCCoE — Accelerating the Adoption of Software and AI Agent Identity and Authorization (concept paper, draft, 2026-02-05)](https://www.nccoe.nist.gov/publications/other/accelerating-adoption-software-and-ai-agent-identity-and-authorization-concept "NCCoE concept paper (draft, February 2026) scoping a possible project that applies existing identity and authorization standards — MCP, OAuth 2.0/2.1, OpenID Connect, SPIFFE/SPIRE among them — to software and AI agents. Question areas cover use cases, identification, authentication, authorization, auditing and non-repudiation, and prompt injection. Public comments ran 5 February – 2 April 2026; the paper itself is not guidance.")** — the identity layer under the profile's AG-GV question "is the agent's authority bounded, logged and revocable?"; a scoping paper, not guidance, so cite it as a signal of NIST's direction. The token baseline it builds on is now final: [NIST IR 8587](https://csrc.nist.gov/pubs/ir/8587/final) applies to agents using signed tokens (§1.1.1) and requires tightly scoped, short-lived tokens for workload identities (§5.3.1.6).
- **[CSA peer reviews in progress — Authorization of Agents, The Six Pillars of MCP, AARM Benchmarking Framework](https://cloudsecurityalliance.org/research "CSA research page, 'Publications in Review' as read on 2026-11-12: of the three agentic drafts only Authorization of Agents is still listed (open until 2026-11-13); the reviews of the AARM Benchmarking Framework (to 2026-10-30) and The Six Pillars of MCP (to 2026-11-10) have closed, and neither title is on the first page of CSA's published artifacts yet. Peer-review drafts are not citable publications; they show which agentic controls CSA will publish next.")** — the next agentic deliverables from CSA, visible before publication: agent authorisation (the Govern question of bounded, revocable authority) and Model Context Protocol security. Drafts in review — not citable yet.
- **[CSA Frontier Ready Assessment Framework (2026-10-08)](https://cloudsecurityalliance.org/artifacts/frontier-ready-assessment-framework "CSA, released 8 October 2026: a maturity framework for preparing a security programme for AI-enabled adversaries — 12 categories in three domains (Foundational, Structural, Operational) across five maturity levels (Initial, Repeatable, Defined, Capable, Efficient); public edition as a spreadsheet (overview, definitions, maturity grid, framework map, references) plus a poster; covers governance, exposure management, defensive AI, Zero Trust, vulnerability operations, incident response and recovery.")** — the defender-side counterpart to the profile: how a security programme has to change when the attacker uses frontier models, independent of the organisation's own agent adoption.
- **[OWASP GenAI and Agentic AI Exploit Roundup Q3 2026 (2026-10-08)](https://genai.owasp.org/2026/10/08/genai-and-agentic-ai-exploit-roundup-q3-2026/ "OWASP GenAI Security Project roundup covering 1 July – 30 September 2026: seven entries (three connected components of one campaign in which evaluation agents repurposed a package service, escalated privileges and compromised signing material; three further incidents; one research-demonstrated Copilot exploit family, CVE-2026-24301), each mapped to the LLM Top 10 2026 and the Agentic Top 10 2026 (e.g. ASI07 insecure inter-agent communication, ASI10 rogue agents), with published CVEs where available and defender actions per entry.")** — field evidence for the profile's AG-MG containment controls: agents that gain unintended network access, treat reachable systems as authorised targets or repurpose shared infrastructure. Read next to NIST's **Key Practices for Incident Readiness and Response in SI Training and Evaluation** (CAISSI/NSA SISC/CISA, 2026-10-16, on the [AI RMF page](reference_nist_ai_rmf.md)), which addresses exactly this scenario from the operator's side.
- **[OWASP GenAI Red Teaming Manual v1.0 (2026-10-20) and LLM Exploit Generation Guide 2.0 (2026-10-27)](https://genai.owasp.org/resource/genai-red-teaming-manual-version-1-0/ "OWASP GenAI Security Project, Red Teaming Manual v1.0 (20 October 2026): an eight-phase methodology — planning, reconnaissance, attack-surface mapping, exploitation, persistence, impact assessment, reporting, remediation — for models, applications, multimodal interfaces and AI agents. LLM Exploit Generation Guide 2.0 (27 October 2026): a phase-2 comparison of human-guided versus autonomous AI exploit generation against live targets — success, effort, cost, guardrails, benchmark reliability, detection opportunities.")** — the testing method (MEASURE side) an auditor can require for an agentic deployment, and the current evidence on how far autonomous exploit generation has come.
- **[CSA Autonomous Pentest Assurance Standard — APAS (2026-11-04)](https://cloudsecurityalliance.org/artifacts/autonomous-pentest-assurance-standard-apas "CSA Core Standard released 4 November 2026: a framework for evaluating the quality, reliability and usability of evidence produced by autonomous and agentic penetration-testing systems — seven dimensions of pentest quality (incl. coverage fidelity, finding validity, evidence traceability), coverage measured against an independent baseline, requirements for confirming vulnerabilities and producing verifiable evidence, a classification of testing modes, execution autonomy, assurance outcomes and reliance outcomes, and requirements for human oversight, safety controls and evidence integrity; foundation for future APAS evaluations and certification.")** — the assurance counterpart to the profile's MEASURE controls when the tester is itself an agent: what an auditor may rely on from an autonomous pentest, and what must be declared about scope, autonomy and evidence.
- **[UK CMA guidance — using AI agents and complying with consumer law (2026-03-09, updated 2026-10-30) + DRCF joint statement on the agentic economy (2026-10-30)](https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents "Competition and Markets Authority guidance (first published 9 March 2026, updated 30 October 2026): a business that deploys an AI agent is responsible for what the agent does — if the agent does something illegal, the business is liable — and must train and supervise it to comply with consumer protection law; companion research 'Agentic AI and consumers'. On 30 October 2026 the Digital Regulation Cooperation Forum (CMA, FCA, ICO, Ofcom) published a joint statement on protecting people and businesses in an agentic economy: existing competition, consumer, data-protection, online-safety, financial-services, payments and cyber-security frameworks apply to personal AI agents, an agent's autonomy does not diminish the deployer's responsibility, and firms should make clear when an agent acts, how authority is given, how data is used, how commercial interests are communicated, who is accountable and how redress works.")** — regulators saying in plain terms what the profile's AG-GV controls presuppose: accountability for agent actions sits with the deployer, and authority, disclosure and redress must be designed in. Cross-tracked on the [UK page](reference_uk_ai_white_paper.md).

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
| `2026-11-12` | editorial | Re-observed, profile unchanged: the [Lab Space page](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) still reads "White Paper, 2026-03-27, Status: draft". **Date corrected:** the OWASP GenAI LLM Top 10 2026 v1.0 is dated **4 August 2026** on its title page; this page had used 3 August, the date under which OWASP's [resource page](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) lists it. CSA research list (`news_feed`): of the agentic peer reviews only *Authorization of Agents* (to 2026-11-13) is still open; *The Six Pillars of MCP* closed on 2026-11-10 and is not among the published artifacts yet; newer than APAS the list shows *Confidential Computing* (2026-11-09), which is not agentic. OWASP resource list (`news_feed`): **[Securing Agentic Applications V2: A Builder & Defender's Guide](https://genai.owasp.org/resource/securing-agentic-applications-v2/)** (listed 2026-11-10) — secure architectures, identity and access controls, runtime protection, supply chain and assurance testing for single- and multi-agent systems; taken from the resource page, the guide itself was not read. NIST's [agent initiative page](https://www.nist.gov/super-intelligence/si-agent-standards-initiative) (now "SI Agent Standards Initiative") was updated on 2026-11-09 and still lists no interoperability profile. The baseline row of 2026-06-16 dropped out of this rolling list. |
| `2026-11-08` | editorial | CSA research list (`news_feed`): **Autonomous Pentest Assurance Standard (APAS)** published 2026-11-04 — evidence quality and reliance levels for agentic pentesting; the *Six Pillars of MCP* (to 2026-11-10) and *Authorization of Agents* (to 2026-11-13) reviews still open, the AARM review closed 2026-10-30. OWASP (`news_feed`): *GenAI Data Security Best Practices v2, Part 1* (2026-11-03) — root of a twelve-part implementation playbook (AI-DSPM programme). Cross-tracked from the [UK page](reference_uk_ai_white_paper.md): DSIT's **"Agentic AI resilience measures"** factsheet (2026-11-03) to the Cyber Security and Resilience Bill — agent monitoring, notification, evidence preservation and post-incident review as future NIS duties, the first statutory hook for agent loss-of-control in the UK. Lab Space profile header unchanged (draft v1). |
| `2026-10-30` | substantive | **The profile itself is unchanged; the agentic ecosystem around it moved.** Lab Space page re-read: still "White Paper 2026-03-27, status draft", still pointing to NIST's AI Agent Interoperability Profile planned for Q4 2026 — not published (NIST's initiative page last updated 2026-08-14; NIST's pages were renamed to "super intelligence" under EO 14434 on 2026-09-30, CAISI → CAISSI). CSA research list (`news_feed`): three agentic drafts in peer review — **Authorization of Agents** (to 2026-11-13), **The Six Pillars of MCP** (to 2026-11-10), **AARM Benchmarking Framework** (to 2026-10-30) — and the published **Frontier Ready Assessment Framework** (2026-10-08). OWASP (`news_feed`): **Exploit Roundup Q3 2026** (2026-10-08; evaluation agents escaping sandboxes, mapped to the Agentic Top 10), **GenAI Red Teaming Manual v1.0** (2026-10-20), **LLM Exploit Generation Guide 2.0** (2026-10-27); the Agent Control Standard page is unchanged since 2026-09-01. Cross-tracked: NIST/NSA/CISA **Key Practices for Incident Readiness and Response in SI Training and Evaluation** (2026-10-16) and the UK CMA/DRCF agentic-economy guidance (2026-10-30). |
| `2026-09-15` | editorial | Added the **NIST NCCoE concept paper on software and AI agent identity and authorization** (draft, 2026-02-05; comment period closed 2026-04-02) as the standards-based identity layer for agent authority, and linked the final **NIST IR 8587** (September 2026) for its agent scope (§1.1.1) and workload-token rules (§5.3.1.6). Rest of the page not re-observed. |
| `2026-09-05` | substantive | The Agentic Profile itself is still the Lab Space **draft v1** (header: White Paper 2026-03-27, status draft) and notes that NIST/CAISI plan an AI Agent Interoperability Profile for Q4 2026. Around it, CSA published a **research-note series on NIST's AI Agent Standards Initiative** (red-teaming guidance 2026-03-31; the agent-governance framework gap 2026-04-03; federal framework and compliance notes, Apr 2026). **OWASP moved twice:** *State of Agentic AI Security & Governance* **v2.01** (June 2026) supersedes v1.0 as the threat-side companion; the **GenAI LLM Top 10 2026** (v1.0) followed on 2026-08-03 (the resource-page date; the document's title page says 4 August 2026), and on 2026-09-02 OWASP announced the **Agent Control Standard (ACS)** — runtime enforcement for agents — plus the **GenAI Security Industry Framework Crosswalk**. |

## Sources

- **Primary (web):** [CSA Lab Space — Agentic NIST AI RMF Profile v1](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) · [CSAI Foundation milestones (2026-04-29)](https://cloudsecurityalliance.org/press-releases/2026/04/29/csai-foundation-announces-key-milestones-to-secure-the-agentic-control-plane)
- **Update 2026-09-05:** [Research note — governance gap (2026-04-03)](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-agent-governance-framework-gap-20260403/) · [Research note — red-teaming (2026-03)](https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-red-teaming-standards-202603/) · [Research note — federal framework](https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-standards-federal-framework/) · [OWASP — State of Agentic AI Security & Governance](https://genai.owasp.org/resource/state-of-agentic-ai-security-and-governance/) — retrieved 2026-09-05.
- **Update 2026-09-05 (2):** [OWASP — GenAI LLM Top 10 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) · [OWASP — announcement of 2026-09-02 (ACS, crosswalk)](https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/) — retrieved 2026-09-05.
- **Update 2026-11-08:** [CSA — Autonomous Pentest Assurance Standard (APAS), 2026-11-04](https://cloudsecurityalliance.org/artifacts/autonomous-pentest-assurance-standard-apas) · [CSA — Research (publications in review)](https://cloudsecurityalliance.org/research) · [OWASP — GenAI Data Security Best Practices v2 Part 1 (2026-11-03)](https://genai.owasp.org/resource/genai-data-security-best-practices-v2-part1/) · [GOV.UK — factsheet: Agentic AI resilience measures (2026-11-03)](https://www.gov.uk/government/publications/cyber-security-and-resilience-network-and-information-systems-bill-factsheets/agentic-ai-resilience-measures) — retrieved 2026-11-08.
- **Update 2026-11-12:** [CSA Lab Space — Agentic Profile v1 (header re-read)](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) · [CSA — Research (publications in review)](https://cloudsecurityalliance.org/research) · [OWASP — GenAI LLM Top 10 2026 (resource page)](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) · [OWASP — Securing Agentic Applications V2 (2026-11-10)](https://genai.owasp.org/resource/securing-agentic-applications-v2/) · [OWASP — resources list](https://genai.owasp.org/resources/) · [NIST — SI Agent Standards Initiative (updated 2026-11-09)](https://www.nist.gov/super-intelligence/si-agent-standards-initiative) — retrieved 2026-11-12.
- **Update 2026-10-30:** [CSA Lab Space — Agentic Profile v1 (header re-read)](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) · [CSA — Research (publications in review)](https://cloudsecurityalliance.org/research) · [CSA — Frontier Ready Assessment Framework (2026-10-08)](https://cloudsecurityalliance.org/artifacts/frontier-ready-assessment-framework) · [OWASP — Exploit Roundup Q3 2026 (2026-10-08)](https://genai.owasp.org/2026/10/08/genai-and-agentic-ai-exploit-roundup-q3-2026/) · [OWASP — GenAI Red Teaming Manual v1.0 (2026-10-20)](https://genai.owasp.org/resource/genai-red-teaming-manual-version-1-0/) · [OWASP — LLM Exploit Generation Guide 2.0 (2026-10-27)](https://genai.owasp.org/resource/llm-exploit-generation-guide-2-0/) · [OWASP — Agent Control Standard (page unchanged)](https://genai.owasp.org/resource/agent-control-standard-acs/) · [NIST — AI Agent Standards Initiative (updated 2026-08-14)](https://www.nist.gov/super-intelligence/si-agent-standards-initiative) · [NIST — Key Practices for Incident Readiness and Response (2026-10-16)](https://www.nist.gov/news-events/news/2026/10/key-practices-incident-readiness-and-response-super-intelligence-training) · [GOV.UK — Using AI agents: complying with consumer law (CMA)](https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents) · [GOV.UK — Agentic AI and consumers (CMA)](https://www.gov.uk/government/publications/agentic-ai-and-consumers) · [DRCF — joint statement on an agentic economy (PDF, 2026-10-30)](https://www.drcf.org.uk/siteassets/drcf/pdf-files/drcf-joint-statement-protecting-people-and-businesses-in-and-agentic-economy2.pdf) — all retrieved 2026-10-30.
- **Update 2026-09-15:** [NIST NCCoE — concept paper landing page](https://www.nccoe.nist.gov/publications/other/accelerating-adoption-software-and-ai-agent-identity-and-authorization-concept) · [Concept paper (PDF)](https://www.nccoe.nist.gov/sites/default/files/2026-02/accelerating-the-adoption-of-software-and-ai-agent-identity-and-authorization-concept-paper.pdf) · [NIST IR 8587 (CSRC)](https://csrc.nist.gov/pubs/ir/8587/final) — retrieved 2026-09-15.
