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

!!! info "Provenance & licence"
    **Source:** [EUR-Lex ELI permalink](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng) ·
    **Last observed:** `2026-06-16` ·
    **Version:** Base regulation in force 2024-08-01; **Digital Omnibus** provisional agreement 2026-05-07 ·
    **Status:** planned ·
    **Licence:** © European Union (EUR-Lex), Decision 2011/833/EU (`open-attribution`)

!!! warning "Moving target — Digital Omnibus (2026)"
    Following the Commission's **19 November 2025** *Digital Omnibus* proposal, on
    **7 May 2026** Council and Parliament reached a provisional agreement,
    **postponing high-risk obligations**: stand-alone Annex III systems move from
    2 Aug 2026 to **2 December 2027**; AI embedded in Annex I regulated products to
    **2 August 2028** (the May trilogue replaced the proposal's conditional
    "standards-ready" trigger with these fixed dates). It also adds an Article 5
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

## In plain language

!!! note "Our explanation, not the official text"
    Plain-language summary in our own words — not the normative text. Follow the
    source for the authoritative wording. This is general information, not legal advice.

The EU AI Act is a binding law that sorts AI systems by how risky they are and
attaches duties to each level: some uses are banned, "high-risk" uses carry heavy
obligations, and general-purpose models have their own rules. In short — the
riskier the use, the more you must document, test, and supervise it. A 2026
"Digital Omnibus" pushed several high-risk deadlines to 2027/2028, so *when* a
duty applies is itself a moving target.

## Key terms

- **High-risk system** — an AI use listed in Annex III (or a safety component of a regulated product) that triggers the heaviest duties.
- **GPAI** — a general-purpose AI model, with its own transparency and copyright duties.
- **Conformity assessment** — the check (self- or third-party) that a high-risk system meets the rules before market.
- **FRIA** — a fundamental-rights impact assessment some deployers must perform.

## In depth: what counts as an "AI system"

> **Reading guide:** the boxed **“Source text”** is the Act's own wording
> (verbatim; EU law is reusable under EUR-Lex Decision 2011/833/EU with source
> acknowledgement). Text marked **“In our words”** is our explanation.

!!! quote "Source text — EU AI Act, Art. 3(1) (© European Union, EUR-Lex)"
    ‘AI system’ means a machine-based system that is designed to operate with
    varying levels of autonomy and that may exhibit adaptiveness after deployment,
    and that, for explicit or implicit objectives, infers, from the input it
    receives, how to generate outputs such as predictions, content,
    recommendations, or decisions that can influence physical or virtual
    environments.

**In our words —** this single sentence decides whether the whole Act applies to
you. The load-bearing phrases are *“machine-based”*, *“varying levels of
autonomy”*, *“may exhibit adaptiveness”* and especially *“infers … how to
generate outputs”*. A fixed, deterministic script usually falls **outside**; a
model that *infers* its outputs falls **inside**. Once you are in scope, the
risk **tier** — prohibited · high-risk · limited (transparency) · minimal —
decides how heavy your duties are.

!!! success "From my training — University of Oxford · *Managing Enterprise AI Risks* (2026)"
    For high-risk systems the audit pivot I practise is **evidence over intent**:
    risk classification, **Model Cards**, an **AI-SBOM**, a **living risk
    register** and **Human-in-the-Loop (HITL)** controls mapped to Art. 9 / 14 / 15
    — and I treat the EU AI Act, NIST AI RMF and ISO/IEC 42001 as *one* control
    set, not three.
    [Verify certificate ↗](https://certificates.conted.ox.ac.uk/5d483a65-dba2-47a2-92b0-8acfe0dcfd3a)

## Key Sections

- **[Art. 5 — Prohibited practices](https://artificialintelligenceact.eu/article/5/ "EU AI Act Article 5 — the AI practices banned outright: manipulation, exploitation of vulnerabilities, social scoring, untargeted facial scraping, and (per the Omnibus) CSAM/NCII generation.")** — manipulative, exploitative, social-scoring, untargeted scraping, and (per the Omnibus) CSAM/NCII generation.
- **[Art. 6](https://artificialintelligenceact.eu/article/6/ "EU AI Act Article 6 — the classification test that determines whether an AI system counts as high-risk.") + [Annex III](https://artificialintelligenceact.eu/annex/3/) — High-risk classification** — the test for whether a system is high-risk; Art. 6(1) treated separately in the timeline.
- **[Art. 16 — Provider obligations](https://artificialintelligenceact.eu/article/16/ "EU AI Act Article 16 — the duties a provider of a high-risk AI system owes: risk management, data governance, technical documentation, logging, transparency, human oversight, accuracy, robustness and cybersecurity.")** — risk management, data governance, technical documentation, logging, transparency, human oversight, accuracy/robustness/cybersecurity.
- **[Art. 27 — Fundamental Rights Impact Assessment (FRIA)](https://artificialintelligenceact.eu/article/27/ "EU AI Act Article 27 — the Fundamental Rights Impact Assessment certain deployers of high-risk AI must perform before use.")** — required of certain deployers of high-risk systems.
- **[Art. 43 — Conformity assessment](https://artificialintelligenceact.eu/article/43/ "EU AI Act Article 43 — the conformity-assessment routes (internal control vs notified body) a high-risk system must pass before market entry.")** — internal control vs notified-body routes.
- **GPAI ([Art. 51 ff.](https://artificialintelligenceact.eu/article/51/ "EU AI Act Article 51 onwards — obligations for general-purpose AI models: documentation, copyright policy, training-data summary; systemic-risk models carry added duties."))** — model documentation, copyright policy, training-data summary; systemic-risk models carry added duties.

## Audit-Relevant Anchors

- **[Annex III](https://artificialintelligenceact.eu/annex/3/ "EU AI Act Annex III — the list of high-risk use cases (recruitment, credit, biometrics, critical infrastructure, etc.) that scopes most conformity work.")** — the high-risk use-case list that scopes most conformity work.
- **[Art. 16](https://artificialintelligenceact.eu/article/16/ "EU AI Act Article 16 — the full set of provider obligations for high-risk AI.") + [Annex IV](https://artificialintelligenceact.eu/annex/4/ "EU AI Act Annex IV — the contents of the technical documentation a provider must compile and an auditor inspects.")** — the technical documentation an auditor inspects.
- **[Art. 27 (FRIA)](https://artificialintelligenceact.eu/article/27/ "EU AI Act Article 27 — the Fundamental Rights Impact Assessment; directly relevant to the external-auditor engagement model.")** — directly relevant to the external-auditor engagement model.
- **[Art. 43](https://artificialintelligenceact.eu/article/43/ "EU AI Act Article 43 — the conformity-assessment procedures for high-risk AI.") + Annex [VI](https://artificialintelligenceact.eu/annex/6/ "EU AI Act Annex VI — the internal-control conformity-assessment route.")/[VII](https://artificialintelligenceact.eu/annex/7/ "EU AI Act Annex VII — the notified-body conformity-assessment route based on QMS and technical-documentation assessment.")** — which conformity route applies, and the evidence each requires.
- **Implementation timeline**{ title="Which EU AI Act obligations are actually in force at the engagement date — itself a moving anchor after the 2026 Digital Omnibus deferred several high-risk deadlines." } — which obligations are actually in force at engagement date (now itself a moving anchor due to the Omnibus).

## Auditor Checklist

Evidence-oriented checks for a high-risk AI engagement under the Act:

- [ ] The system is correctly classified (prohibited / high-risk per Art. 6 + Annex III / limited / minimal).
- [ ] A risk-management system is documented and maintained (Art. 9).
- [ ] Data governance — training/validation/test data quality and bias — is examined (Art. 10).
- [ ] Technical documentation per Annex IV is present and current (Art. 11).
- [ ] Logging/record-keeping (Art. 12) and human oversight (Art. 14) are implemented.
- [ ] Accuracy, robustness, and cybersecurity are evidenced (Art. 15).
- [ ] A FRIA is performed where required (Art. 27).
- [ ] The conformity-assessment route is chosen and evidenced; CE marking / registration done (Art. 43).
- [ ] For GPAI: model documentation, copyright policy, training-data summary (Art. 53+).
- [ ] Which obligations are actually in force at the engagement date (Digital Omnibus timeline).

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences.

Cells link to the **direct source** where readable (ISO clauses are paywalled, so
only the ISO catalogue entry is public — see the [ISO/IEC 42001](reference_iso_42001.md) page).

| EU AI Act | NIST AI RMF | ISO/IEC 42001 |
| --------- | ----------- | ------------- |
| [Art. 9](https://artificialintelligenceact.eu/article/9/) (risk management) | [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) + [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) | Cl. 6.1 + Cl. 8 |
| [Art. 10](https://artificialintelligenceact.eu/article/10/) (data governance) | [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) / [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | Annex A (data controls) |
| [Art. 14](https://artificialintelligenceact.eu/article/14/) (human oversight) | [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) | Annex A (oversight controls) |
| [Art. 15](https://artificialintelligenceact.eu/article/15/) (accuracy/robustness/cyber) | [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | Cl. 8 + Annex A |
| [Art. 17](https://artificialintelligenceact.eu/article/17/) (quality management system) | [GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/) | Cl. 4–10 (whole AIMS) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-06-16` | baseline | Initial baseline. Captured base regulation plus the **2026-05-07 Digital Omnibus provisional agreement** (high-risk deferral to 2027/2028, new Art. 5 prohibition) — pending OJ publication. |

## Sources

- **Primary (web):** [EUR-Lex ELI permalink](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng) · [EC policy hub](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) · [AI Act Service Desk + Compliance Checker](https://ai-act-service-desk.ec.europa.eu/en) · [Article-by-article (FLI, curated)](https://artificialintelligenceact.eu/)
- **Digital Omnibus (web):** [Gibson Dunn analysis](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) · [Bird & Bird — May trilogue agreement](https://www.twobirds.com/en/insights/2026/digital-omnibus-on-ai-provisional-agreement-reached-at-the-may-trilogue)
