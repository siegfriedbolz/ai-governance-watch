---
name: "EU AI Act (Regulation (EU) 2024/1689)"
description: "The EU's risk-tiered AI regulation, its phased application timeline, GPAI obligations, and the 2026 Digital Omnibus that postponed high-risk deadlines."
type: reference
source_id: eu_ai_act
source_url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
last_observed_at: "2026-06-16T00:00:00Z"
last_observed_commit_or_version: "Reg. (EU) 2024/1689 in force 2024-08-01; Digital Omnibus provisional agreement 2026-05-07 (not yet published in OJ as of observation)"
provenance_chain:
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# EU AI Act (Regulation (EU) 2024/1689)

!!! info "Provenance"
    **Source:** [EUR-Lex ELI permalink](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng) ·
    **Last observed:** `2026-06-16` ·
    **Version:** Base regulation in force 2024-08-01; **Digital Omnibus** provisional agreement 2026-05-07 ·
    **Status:** planned

!!! warning "Moving target — Digital Omnibus (2026)"
    On **7 May 2026** Council and Parliament reached a provisional agreement on
    the *Digital Omnibus on AI*, **postponing high-risk obligations**: stand-alone
    Annex III systems move from 2 Aug 2026 to **2 December 2027**; AI embedded in
    Annex I regulated products to **2 August 2028**. It also adds an Article 5
    prohibition on AI generating CSAM / non-consensual intimate imagery. These
    take legal effect only on **publication in the Official Journal** (expected
    before 2 Aug 2026). Until then the original deadlines remain the law.

## Summary

The EU AI Act (Regulation (EU) 2024/1689) is the first comprehensive,
horizontal AI law. It classifies AI systems by risk — **unacceptable
(prohibited), high-risk, limited-risk (transparency), and minimal** — and
imposes obligations scaled to that tier, with separate rules for
**general-purpose AI (GPAI) models**. It entered into force on 1 August 2024
and applies in phases. As of mid-2026, prohibitions and GPAI model rules are
already in force; the high-risk regime is being deferred by the Digital
Omnibus (see warning above).

## Key Sections

- **Art. 5 — Prohibited practices** — manipulative, exploitative, social-scoring, untargeted scraping, and (per the Omnibus) CSAM/NCII generation.
- **Art. 6 + Annex III — High-risk classification** — the test for whether a system is high-risk; Art. 6(1) treated separately in the timeline.
- **Art. 16 — Provider obligations** — risk management, data governance, technical documentation, logging, transparency, human oversight, accuracy/robustness/cybersecurity.
- **Art. 27 — Fundamental Rights Impact Assessment (FRIA)** — required of certain deployers of high-risk systems.
- **Art. 43 — Conformity assessment** — internal control vs notified-body routes.
- **GPAI (Art. 51 ff.)** — model documentation, copyright policy, training-data summary; systemic-risk models carry added duties.

## Audit-Relevant Anchors

- **Annex III** — the high-risk use-case list that scopes most conformity work.
- **Art. 16 + Annex IV** — the technical documentation an auditor inspects.
- **Art. 27 (FRIA)** — directly relevant to the external-auditor engagement model.
- **Art. 43 + Annex VI/VII** — which conformity route applies, and the evidence each requires.
- **Implementation timeline** — which obligations are actually in force at engagement date (now itself a moving anchor due to the Omnibus).

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-06-16` | baseline | Initial baseline. Captured base regulation plus the **2026-05-07 Digital Omnibus provisional agreement** (high-risk deferral to 2027/2028, new Art. 5 prohibition) — pending OJ publication. |

## Sources

- **Primary (web):** [EUR-Lex ELI permalink](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng) · [EC policy hub](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) · [AI Act Service Desk + Compliance Checker](https://ai-act-service-desk.ec.europa.eu/en) · [Article-by-article (FLI, curated)](https://artificialintelligenceact.eu/)
- **Digital Omnibus (web):** [Gibson Dunn analysis](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) · [Bird & Bird — May trilogue agreement](https://www.twobirds.com/en/insights/2026/digital-omnibus-on-ai-provisional-agreement-reached-at-the-may-trilogue)
