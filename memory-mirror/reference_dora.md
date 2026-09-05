---
name: "DORA — Digital Operational Resilience Act (Reg. (EU) 2022/2554)"
description: "The EU's binding digital operational resilience framework for the financial sector and its critical ICT third-party providers — relevant to AI vendor/outage risk."
type: reference
source_id: dora
source_url: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng"
last_observed_at: "2026-09-05T00:00:00Z"
last_observed_commit_or_version: "Reg. (EU) 2022/2554; in force 2023-01-16; applies since 2025-01-17; first designation of critical ICT third-party providers by the ESAs 2025-11-18"
provenance_chain:
  - timestamp: "2026-09-05T00:00:00Z"
    pr: "manual refresh (September 2026)"
    change: substantive
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# DORA — Digital Operational Resilience Act (Reg. (EU) 2022/2554)

!!! info "Provenance & licence"
    **Source:** [EUR-Lex ELI permalink](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng) ·
    **Last observed:** `2026-09-05` ·
    **Version:** Reg. (EU) 2022/2554 — **applies since 2025-01-17**; CTPP oversight live since the ESAs' designation of 2025-11-18 ·
    **Status:** planned ·
    **Licence:** © European Union (EUR-Lex), Decision 2011/833/EU (`open-attribution`)

## Summary

DORA (Regulation (EU) 2022/2554) is a **binding EU regulation** creating a
uniform **digital operational resilience** framework for the financial sector.
It entered into force on 16 January 2023 and **applies since 17 January 2025**.
It covers financial entities (banks, insurers, investment firms, payment
institutions, fund managers, and more) and — importantly — extends to their
**ICT third-party providers**, including direct EU oversight of those deemed
*critical*. For an AI risk auditor it is the operational-resilience anchor for
AI vendor concentration, model-provider outages, and third-party ICT
dependency scenarios in regulated finance.

## In plain language

!!! note "Our explanation, not the official text"
    Plain-language summary in our own words. EU legal text is reusable with
    attribution (EUR-Lex, Decision 2011/833/EU). Not legal advice.

DORA is an EU law that makes the financial sector resilient to IT failures and
cyber-attacks — including failures at their tech and AI suppliers. In plain
terms: banks and insurers must manage ICT risk, report incidents, test their
resilience, and keep tight control over critical third-party providers. It's the
operational-resilience angle on AI: what happens when your model provider goes
down or is breached.

## Key terms

- **ICT third-party risk** — risk from outside tech / AI / cloud providers a financial firm depends on.
- **TLPT** — threat-led penetration testing required of significant entities.
- **Critical ICT third-party provider** — a major provider placed under direct EU oversight.

## In depth: what DORA is actually for

> **Reading guide:** the boxed **“Source text”** is DORA's own wording
> (verbatim; EU law, reusable under EUR-Lex Decision 2011/833/EU with source
> acknowledgement). Text marked **“In our words”** is our explanation.

!!! quote "Source text — DORA, Art. 1(1) (© European Union, EUR-Lex)"
    In order to achieve a high common level of digital operational resilience,
    this Regulation lays down uniform requirements concerning the security of
    network and information systems supporting the business processes of
    financial entities.

**In our words —** DORA's whole purpose in one line: keep the financial sector
running through IT failures and cyber-attacks. It delivers this through five
pillars — ICT risk management, incident reporting, resilience testing (incl.
threat-led penetration testing), ICT third-party risk with direct oversight of
*critical* providers, and information-sharing. For AI specifically, the sharp
end is **third-party risk**: your model or cloud provider is an "ICT third
party", so its outages and breaches become *your* regulated problem.

!!! success "From my training — Packt · *Generative AI & Agentic AI for Finance* (2026, final score 100%) + Oxford finance-sector module"
    My finance-sector training frames DORA's ICT third-party regime for AI:
    LLM / foundation-model providers as **critical ICT third parties**,
    **concentration risk** across a handful of vendors, and **threat-led
    penetration testing (TLPT)** extended to **agentic AI** workflows — where AI
    assurance and operational-resilience auditing meet.
    [Course ↗](https://www.eventbrite.com/e/generative-ai-and-agentic-ai-for-finance-certification-cohort-2-tickets-1977795824552)

## Key Sections (five pillars)

- **ICT risk management** — governance and a documented ICT risk framework ([Arts. 5-16](https://www.digital-operational-resilience-act.com/Article_5.html "DORA Articles 5-16 — the board-owned ICT risk-management framework: identify, protect, detect, respond and recover.")).
- **ICT incident management & reporting** — classify and report major ICT-related incidents ([Arts. 17-23](https://www.digital-operational-resilience-act.com/Article_17.html "DORA Articles 17-23 — detecting, logging, classifying and reporting major ICT-related incidents to regulators on set deadlines.")).
- **Digital operational resilience testing** — incl. threat-led penetration testing (TLPT) for significant entities ([Arts. 24-27](https://www.digital-operational-resilience-act.com/Article_24.html "DORA Articles 24-27 — the resilience-testing programme, from vulnerability assessments up to threat-led penetration testing (TLPT) for significant entities.")).
- **ICT third-party risk** — contractual requirements + the **Critical ICT Third-Party Provider** oversight regime ([Arts. 28-44](https://www.digital-operational-resilience-act.com/Article_28.html "DORA Articles 28-44 — managing ICT third-party dependencies contractually, plus EU oversight of Critical ICT Third-Party Providers.")).
- **Information sharing** — voluntary cyber-threat intelligence exchange ([Art. 45](https://www.digital-operational-resilience-act.com/Article_45.html "DORA Article 45 — voluntary exchange of cyber-threat intelligence and indicators of compromise within trusted communities.")).

## Audit-Relevant Anchors

- **[Art. 28-30 (third-party risk)](https://www.digital-operational-resilience-act.com/Article_28.html "DORA Articles 28-30 — the register of information on ICT third parties plus the mandatory contractual provisions for ICT/AI vendors.")** — the register of information and contractual must-haves for ICT/AI vendors.
- **[Art. 24-27 (testing, incl. TLPT)](https://www.digital-operational-resilience-act.com/Article_24.html "DORA Articles 24-27 — the resilience-testing programme up to threat-led penetration testing (TLPT); the testing evidence an auditor inspects.")** — resilience testing evidence an auditor inspects.
- **Critical ICT third-party oversight**{ title="DORA's EU-level oversight regime for Critical ICT Third-Party Providers — directly relevant where a financial entity depends on a large AI or cloud provider." } — directly relevant where a financial entity depends on a large AI/cloud provider.
- **[Art. 31 (designation of critical ICT third-party providers)](https://www.digital-operational-resilience-act.com/Article_31.html "DORA Article 31 — the criteria and procedure by which the ESAs designate critical ICT third-party providers; the first designation list was published on 2025-11-18.")** — the designation mechanism; **first CTPP list published by the ESAs on 2025-11-18** — check whether a client's AI/cloud providers are on it.

## Auditor Checklist

Evidence-oriented checks for a financial-entity (or critical ICT provider) review:

- [ ] An ICT risk-management framework is documented and board-owned (Art. 5–6).
- [ ] ICT incident classification and reporting processes exist (Art. 17–19).
- [ ] A resilience-testing programme runs, incl. TLPT for significant entities (Art. 24–27).
- [ ] A register of information for ICT third parties is maintained (Art. 28).
- [ ] Contractual must-haves with ICT/AI providers are in place (Art. 30).
- [ ] Exit strategies and concentration risk for critical providers are assessed.
- [ ] Reliance on critical ICT third parties (incl. cloud/AI) is within the oversight scope.

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences.

| DORA | NIST (CSF / AI RMF) | EU AI Act |
| ---- | ------------------- | --------- |
| [Art. 5–16](https://www.digital-operational-resilience-act.com/Article_5.html) (ICT risk management) | [CSF](https://www.nist.gov/cyberframework) Identify/Protect; AI RMF [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) | [Art. 15](https://artificialintelligenceact.eu/article/15/) (robustness/cyber) |
| [Art. 17–23](https://www.digital-operational-resilience-act.com/Article_17.html) (incident reporting) | [CSF](https://www.nist.gov/cyberframework) Respond | [Art. 73](https://artificialintelligenceact.eu/article/73/) (serious-incident reporting) |
| [Art. 28–44](https://www.digital-operational-resilience-act.com/Article_28.html) (ICT third-party) | AI RMF [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) 4 (supply chain) | [Art. 25](https://artificialintelligenceact.eu/article/25/) (value-chain responsibilities) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-09-05` | substantive | **Critical ICT third-party oversight is now operational:** on 2025-11-18 the three ESAs (EBA, EIOPA, ESMA) designated the first **critical ICT third-party providers (CTPPs)** under Art. 31 and announced examination activities. For the AI-vendor-resilience angle this is the concrete list a financial entity's concentration-risk analysis should be checked against. |
| `2026-06-16` | baseline | Initial baseline: DORA applies since 2025-01-17; five pillars and ICT third-party oversight captured for the AI-vendor-resilience angle. |

## Sources

Public web sources only — local/private provenance is kept in a private mirror.

- **Primary (web):** [EUR-Lex — DORA (2022/2554)](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng) · [EIOPA — DORA](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en)
- **Update 2026-09-05:** [EIOPA — ESAs designate critical ICT third-party providers (2025-11-18)](https://www.eiopa.europa.eu/european-supervisory-authorities-designate-critical-ict-third-party-providers-under-digital-2025-11-18_en) — retrieved 2026-09-05.
