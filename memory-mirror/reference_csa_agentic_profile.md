---
name: "CSA — NIST AI RMF: Agentic Profile"
description: "Cloud Security Alliance's agentic-AI extension of the NIST AI RMF, plus CSA's wider 2026 agentic-control-plane and catastrophic-risk work."
type: reference
source_id: csa_agentic_profile
source_url: "https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/"
last_observed_at: "2026-06-16T00:00:00Z"
last_observed_commit_or_version: "CSA Lab Space draft v1 (2026-03-27)"
provenance_chain:
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# CSA — NIST AI RMF: Agentic Profile

!!! info "Provenance"
    **Source:** [CSA Lab Space — Agentic NIST AI RMF Profile v1](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) ·
    **Last observed:** `2026-06-16` ·
    **Version:** Lab Space draft v1 (2026-03-27) ·
    **Status:** planned

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

## Key Sections

- **AG-GV (Govern)** — governance of agent objectives, authority, and accountability.
- **AG-MP (Map)** — context, tools, and the agent's action surface.
- **AG-MS (Measure)** — evaluation of agent behaviour, reliability, and oversight effectiveness.
- **AG-MG (Manage)** — response, containment, and recovery for autonomous behaviour.
- **AI Controls Matrix (AICM) + Catastrophic Risk Annex** — control set for loss of human oversight and large-scale, irreversible outcomes.

## Audit-Relevant Anchors

- **AG-GV controls** — is the agent's authority bounded, logged, and revocable? (Core agentic-audit question.)
- **AG-MS controls** — evidence that oversight is real, not "oversight theatre".
- **AICM mapping** — crosswalk an auditor can use to tie agentic controls back to NIST/ISO/EU obligations.
- **Draft status** — anchors must be re-checked: v1 is not final, so cited clause numbers may shift.

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-06-16` | baseline | Initial baseline: CSA Agentic Profile draft v1 (2026-03-27) plus CSA 2026 catastrophic-risk / AICM / STAR-for-AI programme captured. |

## Sources

- **Primary (web):** [CSA Lab Space — Agentic NIST AI RMF Profile v1](https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/) · [CSAI Foundation milestones (2026-04-29)](https://cloudsecurityalliance.org/press-releases/2026/04/29/csai-foundation-announces-key-milestones-to-secure-the-agentic-control-plane)
