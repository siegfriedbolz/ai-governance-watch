---
name: "NIST AI Risk Management Framework (AI RMF)"
description: "NIST's voluntary AI RMF 1.0, its Generative AI Profile, and the AI RMF Playbook — the GOVERN/MAP/MEASURE/MANAGE backbone for AI risk governance."
type: reference
source_id: nist_ai_rmf
source_url: "https://www.nist.gov/itl/ai-risk-management-framework"
last_observed_at: "2026-09-05T00:00:00Z"
last_observed_commit_or_version: "AI RMF 1.0 (Jan 2023) — under revision (White House AI Action Plan, no date); GenAI Profile AI 600-1 (Jul 2024); Adversarial ML AI 100-2e2025; Synthetic Content AI 100-4 (Nov 2024); Cyber AI Profile IR 8596 iprd (draft, Dec 2025); CI Profile concept note (Apr 2026)"
provenance_chain:
  - timestamp: "2026-09-05T00:00:00Z"
    pr: "manual refresh (September 2026)"
    change: substantive
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# NIST AI Risk Management Framework (AI RMF)

!!! info "Provenance & licence"
    **Source:** [nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework) ·
    **Last observed:** `2026-09-05` ·
    **Version:** AI RMF 1.0 (2023, **revision in progress**) + GenAI Profile 600-1 (2024) + companions 100-4 / IR 8596 (draft) ·
    **Status:** pilot ·
    **Licence:** U.S. Government work — public domain (`public-domain`)

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

## In plain language

!!! note "Our explanation, not the official text"
    Plain-language summary in our own words — not the normative text. Follow the
    source for the authoritative wording. This is general information, not legal advice.

The AI RMF is a voluntary playbook for managing the risks of building and using
AI. It doesn't mandate a specific tool; it gives you four things to do
continuously — set up accountability (**GOVERN**), understand your system and
its context (**MAP**), test how trustworthy it is (**MEASURE**), and act on the
risks you find (**MANAGE**). The GenAI Profile adds a checklist of risks specific
to generative AI. It's the shared vocabulary most other AI-risk frameworks borrow.

## Key terms

- **Trustworthy AI** — AI that is valid, safe, secure, transparent, explainable, privacy-respecting and fair.
- **Profile** — a tailored selection of the framework for a specific context (e.g. the GenAI Profile).
- **GOVERN / MAP / MEASURE / MANAGE** — the four continuous functions of the framework.

## In depth: the four functions — the source's words and ours

> **Reading guide:** boxed **“Source text”** quotes are NIST's own wording
> (verbatim; NIST publications are U.S. Government works in the public domain).
> Text marked **“In our words”** is our explanation, written to make the
> framework easier to grasp.

!!! quote "Source text — NIST AI RMF 1.0 (public domain)"
    The GOVERN function: cultivates and implements a culture of risk management
    within organizations designing, developing, deploying, evaluating, or
    acquiring AI systems; outlines processes, documents, and organizational
    schemes that anticipate, identify, and manage the risks a system can pose …

**In our words —** GOVERN is the backbone. It sets the culture, roles, policies
and accountability that make the other three functions actually happen, and it
is the only *cross-cutting* function: without it, mapping, measuring and managing
are ad-hoc and won't survive an audit.

!!! quote "Source text — NIST AI RMF 1.0 (public domain)"
    The MAP function establishes the context to frame risks related to an AI system.

**In our words —** MAP is the "know what you're dealing with" step: intended
purpose, context of use, data, stakeholders and foreseeable misuse. You can't
meaningfully assess a system you haven't framed.

!!! quote "Source text — NIST AI RMF 1.0 (public domain)"
    The MEASURE function employs quantitative, qualitative, or mixed-method tools,
    techniques, and methodologies to analyze, assess, benchmark, and monitor AI
    risk and related impacts.

**In our words —** MEASURE is the evidence function: it turns "we think it's
risky" into tested, benchmarked, monitored metrics for trustworthiness
(accuracy, robustness, bias, security, and so on).

!!! quote "Source text — NIST AI RMF 1.0 (public domain)"
    The MANAGE function entails allocating risk resources to mapped and measured
    risks on a regular basis and as defined by the GOVERN function.

**In our words —** MANAGE is "act, and keep acting": prioritise, treat, respond,
recover, and keep monitoring after deployment — recording the decisions and
trade-offs an auditor will later inspect.

!!! success "From my training — University of Oxford · *Managing Enterprise AI Risks* (2026)"
    In my Oxford certification I worked NIST's four functions as an operational
    control set — cross-mapped across ~24 standards (NIST · ISO/IEC 42001 ·
    EU AI Act · DORA) and split into *risk **of** AI* vs *risk **due to** AI*.
    In an audit I anchor GOVERN / MAP / MEASURE / MANAGE to that cross-map and the
    **Three Lines of Defence**, with **Model Cards**, an **AI-SBOM** and a
    **living risk register** as the evidence base.
    [Verify certificate ↗](https://certificates.conted.ox.ac.uk/5d483a65-dba2-47a2-92b0-8acfe0dcfd3a)

## Key Sections

- **[GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/)** — cross-cutting culture, policies, accountability, and roles for AI risk.
- **[MAP](https://airc.nist.gov/airmf-resources/playbook/map/)** — establish context; frame the system, its purpose, and its impacts.
- **[MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/)** — analyse, benchmark, and monitor AI risks with quantitative and qualitative methods.
- **[MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/)** — prioritise, respond to, and recover from risks; allocate resources.
- **Trustworthy AI characteristics** — valid & reliable, safe, secure & resilient, accountable & transparent, explainable & interpretable, privacy-enhanced, and fair (with harmful bias managed).
- **[GenAI Profile (600-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)** — 12 risks incl. confabulation, dangerous/CBRN information, data privacy, harmful bias, information integrity, information security, IP, and value-chain/component integration.
- **[AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/)** — actionable, suggested-action companion to the four functions (maintained as a living web resource on the AI Resource Center).
- **[AI RMF revision (in progress)](https://www.nist.gov/itl/ai-risk-management-framework "NIST's landing page states that AI RMF 1.0 is being revised as part of the White House AI Action Plan; no publication date is given. A successor may appear under a new document number — watch the landing page, not the PDF.")** — NIST says RMF 1.0 is being revised under the White House AI Action Plan; no date yet. A revision may ship under a **new number**, so a fingerprint of the 100-1 PDF will not notice it.
- **[Synthetic content — NIST AI 100-4](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf "NIST AI 100-4 'Reducing Risks Posed by Synthetic Content' (Nov 2024) — watermarking, metadata/provenance (C2PA-style), detection and their limits; the technical counterpart to EU AI Act Art. 50(2).")** — provenance, watermarking, detection and their limits; the technical counterpart to EU AI Act Art. 50(2).
- **[Cyber AI Profile — NIST IR 8596 (draft)](https://csrc.nist.gov/pubs/ir/8596/iprd "NIST IR 8596 initial public draft (Dec 2025) — a Cybersecurity Framework 2.0 Community Profile for AI with three focus areas: securing AI systems, defending against AI-enabled attacks, and using AI for cyber defence. Draft — cite with date.")** — CSF 2.0 profile for AI (secure / defend / thwart), **draft** — cite with its date.
- **[Critical-infrastructure profile — concept note](https://www.nist.gov/programs-projects/concept-note-ai-rmf-profile-trustworthy-ai-critical-infrastructure "NIST concept note (2026-04-07) for an AI RMF Profile on Trustworthy AI in Critical Infrastructure — not yet a profile; signals the next sector profile after GenAI.")** — the next sector profile in preparation (concept note, 2026-04-07).

## Audit-Relevant Anchors

- **[GOVERN 1.1 / 1.2](https://airc.nist.gov/airmf-resources/playbook/govern/ "NIST AI RMF GOVERN subcategories 1.1/1.2 — legal/regulatory requirements are understood and managed, and trustworthy-AI characteristics are reflected in organisational policy.")** — legal and regulatory requirements are understood, documented, and managed; trustworthy-AI characteristics are reflected in policy.
- **[MAP 1.x](https://airc.nist.gov/airmf-resources/playbook/map/ "NIST AI RMF MAP category 1 — documenting intended purpose, context of use and foreseeable misuse; this framing sets the scope of an audit.")** — intended purpose, context of use, and foreseeable misuse are documented (the basis of an audit scope).
- **[MEASURE 2.x](https://airc.nist.gov/airmf-resources/playbook/measure/ "NIST AI RMF MEASURE category 2 — evaluating system performance and trustworthiness with named metrics and test sets.")** — system performance and trustworthiness are evaluated with named metrics and test sets.
- **[MANAGE 2.x / 4.x](https://airc.nist.gov/airmf-resources/playbook/manage/ "NIST AI RMF MANAGE categories 2/4 — documenting and maintaining risk responses and post-deployment monitoring; the audit trail an assessor inspects.")** — risk responses and post-deployment monitoring are documented and maintained — the audit trail an assessor inspects.

## Auditor Checklist

Evidence-oriented checks for an engagement that relies on the AI RMF:

- [ ] A documented AI governance structure with named accountability exists (GOVERN 1.x–2.x).
- [ ] Each AI system's intended purpose, context of use, and foreseeable misuse is documented (MAP 1.x).
- [ ] Trustworthiness characteristics are evaluated with named metrics and test sets (MEASURE 2.x).
- [ ] Risk-response and prioritisation decisions are recorded (MANAGE 1.x–2.x).
- [ ] Post-deployment monitoring is operating and producing records (MANAGE 4.x).
- [ ] For generative systems, the twelve GenAI-Profile risks (600-1) are assessed.
- [ ] Third-party / component (supply-chain) risks are mapped (MAP 4.x).

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences — confirm against
the official [NIST AIRC crosswalks](https://airc.nist.gov/) before relying on them.

| NIST AI RMF | ISO/IEC 42001 | EU AI Act | ISO/IEC 23894 |
| ----------- | ------------- | --------- | ------------- |
| [GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/) | Cl. 5 (leadership & policy) | [Art. 17](https://artificialintelligenceact.eu/article/17/) (QMS) | Cl. 5 (framework) |
| [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) | Cl. 6.1 + Cl. 8 (risk ID, impact) | [Art. 9](https://artificialintelligenceact.eu/article/9/) + [Annex III](https://artificialintelligenceact.eu/annex/3/) (risk, scope) | Cl. 6.2–6.4 |
| [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | Cl. 9 (performance evaluation) | [Art. 15](https://artificialintelligenceact.eu/article/15/) (accuracy, robustness) | Cl. 6.4 (analysis) |
| [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) | Cl. 8 + Cl. 10 (operation, improvement) | [Art. 9](https://artificialintelligenceact.eu/article/9/) (risk treatment) | Cl. 6.5 (treatment) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-09-05` | substantive | **AI RMF 1.0 is under revision** — NIST states the framework is being revised as part of the White House AI Action Plan (no target date on the landing page). New companions captured: **NIST AI 100-4** (synthetic-content risks, Nov 2024), **NIST IR 8596 iprd** (Cyber AI Profile — CSF 2.0 profile for AI, initial public draft, Dec 2025), and the **concept note for an AI RMF Profile on Trustworthy AI in Critical Infrastructure** (2026-04-07). Agentic Profile still unpublished. |
| `2026-06-16` | baseline | Initial baseline: AI RMF 1.0, GenAI Profile 600-1, Adversarial ML 100-2e2025 captured. Agentic Profile noted as forthcoming (NIST, ~Q4 2026). |

## Sources

- **Primary (web):** [AI RMF landing](https://www.nist.gov/itl/ai-risk-management-framework) · [AI Resource Center (AIRC)](https://airc.nist.gov/) · [AI 100-1 (DOI)](https://doi.org/10.6028/NIST.AI.100-1) · [GenAI Profile 600-1 (PDF)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) · [Playbook (interactive)](https://airc.nist.gov/airmf-resources/playbook/)
- **Update 2026-09-05:** [AI RMF landing — revision notice](https://www.nist.gov/itl/ai-risk-management-framework) · [AI 100-4 (PDF)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf) · [IR 8596 iprd](https://csrc.nist.gov/pubs/ir/8596/iprd) · [CI-profile concept note](https://www.nist.gov/programs-projects/concept-note-ai-rmf-profile-trustworthy-ai-critical-infrastructure) — all retrieved 2026-09-05.
