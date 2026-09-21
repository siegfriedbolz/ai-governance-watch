---
name: "EU Cyber Resilience Act — CRA (Reg. (EU) 2024/2847)"
description: "The EU's binding product-cybersecurity law for hardware and software with digital elements — reporting of actively exploited vulnerabilities and severe incidents live since 11 September 2026, full application 11 December 2027; the cybersecurity bridge to the AI Act's high-risk regime."
keywords: "Cyber Resilience Act, CRA, Regulation (EU) 2024/2847, products with digital elements, vulnerability reporting, actively exploited vulnerability, severe incident, Single Reporting Platform, ENISA SRP, CSIRT, CE marking, SBOM, secure by design, support period, open-source software steward, high-risk AI systems Article 12, AI Act Article 15"
type: reference
source_id: eu_cra
source_url: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng"
about_type: Legislation
about_identifier: "Regulation (EU) 2024/2847"
about_jurisdiction: "European Union"
last_observed_at: "2026-09-21T00:00:00Z"
last_observed_commit_or_version: "Reg. (EU) 2024/2847; OJ L 2024/2847 of 2024-11-20; in force 2024-12-10; Art. 14 reporting obligations apply since 2026-09-11 (ENISA Single Reporting Platform launched the same day); Chapter IV (notified bodies) since 2026-06-11; full application 2027-12-11 (incl. open-source steward reporting, Art. 24(3))"
provenance_chain:
  - timestamp: "2026-09-21T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# EU Cyber Resilience Act — CRA (Reg. (EU) 2024/2847)

!!! info "Provenance & licence"
    **Source:** [EUR-Lex ELI permalink](https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng) ·
    **Last observed:** `2026-09-21` ·
    **Version:** Reg. (EU) 2024/2847 — in force 2024-12-10; **Art. 14 reporting applies since 2026-09-11**; full application **2027-12-11** ·
    **Status:** planned ·
    **Licence:** © European Union (EUR-Lex), Decision 2011/833/EU (`open-attribution`)

## Summary

The Cyber Resilience Act (Regulation (EU) 2024/2847) is a **binding EU
regulation** that makes cybersecurity a condition of market access for
**products with digital elements** — hardware and software whose intended or
reasonably foreseeable use includes a direct or indirect data connection. It
entered into force on 10 December 2024 and applies in stages: the
**reporting obligations of manufacturers (Art. 14) since 11 September 2026**,
the notified-body chapter since 11 June 2026, and everything else — essential
cybersecurity requirements, conformity assessment, CE marking, the support
period — from **11 December 2027**. For an AI risk auditor it matters twice:
AI software shipped as a product is in scope like any other software, and
**Art. 12 ties the CRA directly to the AI Act** — a high-risk AI system that
is also a product with digital elements meets the AI Act's cybersecurity duty
(Art. 15(1)) by meeting the CRA's essential requirements, assessed in one
procedure. It is the one instrument in this library whose evidence lives in the
code, the build pipeline and the release process rather than in policy
documents.

## In plain language

!!! note "Our explanation, not the official text"
    Plain-language summary in our own words. EU legal text is reusable with
    attribution (EUR-Lex, Decision 2011/833/EU). Not legal advice.

The CRA is the EU's product-safety law for anything with software in it. If
you sell software or connected hardware in the EU — an app, a CMS, a model
served as a product, a router, an industrial controller — you must build it
securely, keep fixing it for years, and, **since 11 September 2026**, tell the
authorities within 24 hours when you learn that a flaw is being actively
exploited or that a serious security incident has hit the product. Reports go
through one ENISA-run platform to the national CSIRT where your main EU
establishment sits. From December 2027 the product also needs a CE mark that
attests to its cybersecurity. Open-source software given away outside a
commercial activity is largely out of scope; open-source *stewards* have their
own, lighter duties from December 2027.

## Key terms

- **Product with digital elements** — software or hardware (incl. remote data-processing solutions) with a direct or indirect data connection to a device or network (Art. 3(1)).
- **Actively exploited vulnerability** — a vulnerability for which there is reliable evidence that a malicious actor has exploited it in a system without the owner's permission (Art. 3(42)); the reporting trigger, not CVE assignment.
- **Severe incident** — an incident that affects, or could affect, the product's ability to protect the availability, authenticity, integrity or confidentiality of sensitive data or functions, or that leads to malicious code being introduced or executed (Art. 14(5)).
- **Single Reporting Platform (SRP)** — the ENISA-operated platform with national CSIRT endpoints through which Art. 14 notifications are submitted (Art. 16).
- **Support period** — the time during which the manufacturer must handle vulnerabilities; at least five years unless the product's expected use is shorter (Art. 13(8)).
- **Important / critical products** — the Annex III (Class I and II) and Annex IV product categories with stricter conformity-assessment routes.
- **Open-source software steward** — a legal person that supports the development of free and open-source software intended for commercial use, with a light-touch regime (Art. 24).

## In depth: what the CRA is actually for

> **Reading guide:** the boxed **“Source text”** is the CRA's own wording
> (verbatim; EU law, reusable under EUR-Lex Decision 2011/833/EU with source
> acknowledgement). Text marked **“In our words”** is our explanation.

!!! quote "Source text — CRA, Art. 12(1) (© European Union, EUR-Lex)"
    Without prejudice to the requirements relating to accuracy and robustness
    set out in Article 15 of Regulation (EU) 2024/1689, products with digital
    elements which fall within the scope of this Regulation and which are
    classified as high-risk AI systems pursuant to Article 6 of that Regulation
    shall be deemed to comply with the cybersecurity requirements set out in
    Article 15 of that Regulation where: (a) those products fulfil the essential
    cybersecurity requirements set out in Part I of Annex I; (b) the processes
    put in place by the manufacturer comply with the essential cybersecurity
    requirements set out in Part II of Annex I; and (c) the achievement of the
    level of cybersecurity protection required under Article 15 of Regulation
    (EU) 2024/1689 is demonstrated in the EU declaration of conformity issued
    under this Regulation.

**In our words —** the CRA does two jobs. First, it is a horizontal
product-security law: every product with digital elements must be designed,
developed and maintained under the essential requirements of Annex I —
secure-by-default configuration, no known exploitable vulnerabilities at
release, a software bill of materials, coordinated vulnerability disclosure,
security updates for the whole support period. Second, and this is the part an
AI auditor needs, **Art. 12 is the missing definition of “cybersecurity” in the
AI Act**: the AI Act's Art. 15 says a high-risk system must be resilient to
attacks but never says what that means in engineering terms; the CRA's Annex I
does. For a high-risk AI system that is also a product with digital elements,
meeting Annex I — Part I for the product, Part II for the manufacturer's
processes — and saying so in the EU declaration of conformity means meeting
Art. 15(1) AI Act, and the conformity assessment runs **once**, under the AI
Act's Art. 43 procedure, with the notified body checking the CRA requirements
alongside (Art. 12(2)). The
exception: important and critical products listed in CRA Annexes III and IV
keep the CRA's own conformity routes for the cybersecurity part (Art. 12(3)).
Accuracy and robustness stay with the AI Act.

The reporting regime that went live on 11 September 2026 is deliberately
narrow: it is triggered by **active exploitation** or a **severe incident**, not
by every discovered weakness. A finding from an internal code review, a
researcher's report or a lab proof-of-concept does not by itself start the
24-hour clock; reliable evidence of malicious use does — and that evidence may
come from telemetry, customers, incident responders or a national authority.
Supply-chain compromises count: the regulation's own example of a severe
incident is malicious code injected into the channel a manufacturer uses to
distribute security updates.

!!! success "Why this page exists in an AI-governance library"
    Of all the instruments tracked here, the CRA is the one whose evidence an
    auditor cannot obtain from documentation alone. Whether a product has a
    current SBOM, whether known vulnerabilities were fixed before release,
    whether the build and update channel are protected, whether affected
    versions and EU distribution can be identified inside 24 hours — these are
    facts of the code base and the release pipeline. That is exactly the
    *audit performed on the source code, not only on the documentation*
    discipline this library supports.

## Application timeline (as it stands)

| Date | What applies |
| ---- | ------------ |
| `2024-12-10` | Entry into force ([Art. 71](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_71.html "CRA Article 71 — entry into force on the twentieth day after publication in OJ L 2024/2847 of 20 November 2024; staged application dates.")). |
| `2026-06-11` | Chapter IV — notification of conformity assessment bodies (Arts. 35–51) — applies, so notified bodies can be designated ahead of full application. |
| `2026-09-11` | **[Art. 14](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_14.html "CRA Article 14 — manufacturers' reporting obligations: 24-hour early warning, 72-hour notification and final report for actively exploited vulnerabilities and severe incidents, submitted via the single reporting platform; users must be informed.") reporting obligations of manufacturers apply**; the ENISA [Single Reporting Platform](https://www.enisa.europa.eu/tools/cra-single-reporting-platform "ENISA's CRA Single Reporting Platform (SRP) — launched with initial operating capability on 11 September 2026; national CSIRT endpoints, FAQ, user manuals, factsheet and help desk.") launched the same day. |
| `2027-12-11` | **Full application**: essential requirements (Annex I), manufacturer obligations (Art. 13), conformity assessment (Art. 32) and CE marking (Art. 30), importer and distributor duties, market surveillance and penalties (Art. 64); open-source steward reporting under [Art. 24(3)](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_24.html "CRA Article 24 — obligations of open-source software stewards: a documented cybersecurity policy, cooperation with market-surveillance authorities and, from 11 December 2027, reporting of actively exploited vulnerabilities and severe incidents they become aware of."). |
| `2028-09-11` | Commission assessment of the single reporting platform's effectiveness, after consulting ENISA and the CSIRTs network (Art. 70). |

## Key Sections

- **Scope and definitions** — what a product with digital elements is, and what is carved out (products already covered by sectoral rules such as medical devices, aviation, vehicles; non-commercial open-source software) ([Arts. 2–3](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_2.html "CRA Articles 2–3 — scope (products with digital elements placed on the EU market) and definitions, including 'actively exploited vulnerability' and 'severe incident'.")).
- **Important and critical products** — the Annex III Class I/II and Annex IV categories with stricter conformity routes: Class I may stay in internal control only when it fully applies harmonised standards or a certification scheme, Class II and critical products need a notified body or a European cybersecurity certificate (Art. 32(2)–(3)) ([Arts. 7–8](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_7.html "CRA Articles 7–8 — important products (Annex III, Class I and II) and critical products (Annex IV) with stricter conformity-assessment routes.")).
- **High-risk AI systems** — the presumption of conformity with AI Act Art. 15(1) and the single conformity procedure ([Art. 12](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_12.html "CRA Article 12 — a high-risk AI system that is also a product with digital elements is deemed to meet the AI Act's Art. 15 cybersecurity requirements when it meets Annex I Part I and Part II and the EU declaration of conformity demonstrates it; the AI Act's Art. 43 conformity procedure applies, except for Annex III/IV products.")).
- **Obligations of manufacturers** — cybersecurity risk assessment, essential requirements, vulnerability handling, SBOM, support period of at least five years, technical documentation, user information ([Art. 13](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_13.html "CRA Article 13 — the manufacturer's core duties: design and develop under Annex I, document a cybersecurity risk assessment, handle vulnerabilities for a support period of at least five years, keep technical documentation, inform users.")).
- **Reporting obligations of manufacturers** — actively exploited vulnerabilities and severe incidents; 24 h / 72 h / final report; the duty to inform users ([Art. 14](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_14.html "CRA Article 14 — the staged notification duties that apply since 11 September 2026, and the duty to inform impacted users, where appropriate in machine-readable form.")).
- **Single reporting platform** — ENISA-run, with national CSIRT endpoints; rules for withholding sensitive details and for onward dissemination ([Art. 16](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_16.html "CRA Article 16 — the single reporting platform established by ENISA with electronic notification endpoints per Member State; sensitivity flags and delayed dissemination on cybersecurity grounds.")).
- **Open-source software stewards** — the light-touch regime ([Art. 24](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_24.html "CRA Article 24 — obligations of open-source software stewards, incl. reporting from 11 December 2027.")).
- **Conformity assessment and CE marking** — self-assessment, notified-body routes, harmonised standards and certification schemes ([Arts. 27–32](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_32.html "CRA Articles 27–32 — presumption of conformity via harmonised standards or European cybersecurity certificates, EU declaration of conformity, CE marking and the conformity-assessment procedures.")).
- **Penalties** — up to EUR 15 million or 2.5 % of worldwide annual turnover for breaches of Annex I and Arts. 13–14 ([Art. 64](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_64.html "CRA Article 64 — administrative fines: up to EUR 15 million or 2.5 % of total worldwide annual turnover for non-compliance with the essential requirements and the obligations in Articles 13 and 14, lower tiers for other obligations.")).
- **Essential cybersecurity requirements** — Part I (product properties) and Part II (vulnerability handling) ([Annex I](https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng#anx_I "CRA Annex I — Part I: security properties of the product (secure by default, no known exploitable vulnerabilities, access control, confidentiality, integrity, availability, minimisation, logging, secure updates); Part II: vulnerability-handling requirements incl. SBOM, coordinated disclosure and timely updates.")).

## Audit-Relevant Anchors

- **[Art. 12 (high-risk AI systems)](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_12.html "CRA Article 12 — presumption of conformity with AI Act Art. 15(1) for high-risk AI systems that are products with digital elements, conditional on Annex I Part I (product) and Part II (processes) and on the EU declaration of conformity; the AI Act's Art. 43 procedure applies, with the notified body checking Annex I; Annex III/IV products keep the CRA routes; sandbox access under AI Act Art. 57.")** — the bridge to the [EU AI Act](reference_eu_ai_act.md): for a high-risk AI product, the CRA's Annex I (Part I product properties, Part II vulnerability-handling processes) is the concrete test behind the AI Act's cybersecurity duty, the EU declaration of conformity must say so, and the two assessments are one.
- **[Art. 14 (reporting obligations)](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_14.html "CRA Article 14 — 24-hour early warning, 72-hour notification, final report within 14 days of a fix (vulnerabilities) or one month after the 72-hour notification (severe incidents); simultaneous notification to the coordinator CSIRT and ENISA; the duty to inform users.")** — the live obligation since 2026-09-11: an auditor checks that the detection-to-submission path works inside 24 hours, not that a policy exists.
- **[Art. 14(8) (informing users)](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_14.html "CRA Article 14(8) — after becoming aware of an actively exploited vulnerability or a severe incident the manufacturer informs impacted users and, where appropriate, all users, incl. risk-mitigating and corrective measures, in a structured, machine-readable format where appropriate; a CSIRT may inform users itself if the manufacturer does not.")** — turns the customer and version inventory into compliance evidence: a manufacturer that cannot say who runs which version cannot meet it.
- **[Art. 16 (single reporting platform)](https://www.enisa.europa.eu/tools/cra-single-reporting-platform "ENISA's CRA Single Reporting Platform — the electronic endpoints per Member State; the coordinator CSIRT of the manufacturer's main establishment receives the notification and disseminates it to the CSIRTs of the other Member States where the product is available; sensitivity flags may delay dissemination.")** — where the notification goes, which CSIRT is competent (main EU establishment, Art. 14(7)), and how sensitive details can be withheld for a limited time.
- **[Art. 13(8) (support period)](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_13.html "CRA Article 13(8) — the manufacturer determines a support period during which vulnerabilities are handled effectively; at least five years unless the product is expected to be used for less; stated in the technical documentation and to users.")** + **[Annex I Part II (vulnerability handling incl. SBOM)](https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng#anx_I "CRA Annex I Part II — identify and document components in a software bill of materials, address vulnerabilities without delay incl. security updates, test regularly, publish fixed vulnerabilities, coordinated vulnerability disclosure, secure update distribution.")** — the lifecycle evidence: SBOM, disclosure policy, update channel integrity, the promised support horizon.
- **[Annexes III and IV (important and critical products)](https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng#anx_III "CRA Annex III (important products, Class I and II — e.g. identity and access management software, browsers, password managers, VPNs, operating systems, firewalls, routers) and Annex IV (critical products — e.g. hardware security modules, smart meter gateways, smartcards) with stricter conformity routes.")** — whether the product's category forces a notified body or a certificate, which also decides the Art. 12(3) exception for AI products.
- **[Art. 64 (penalties)](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_64.html "CRA Article 64 — fines up to EUR 15 million or 2.5 % of worldwide annual turnover for breaches of Annex I and Articles 13–14; market-surveillance authorities may also order corrective action, restriction, withdrawal or recall.")** — the exposure a late or missing Art. 14 notification creates from 2026-09-11, and the full manufacturer-obligation exposure from 2027-12-11.
- **Overlapping reporting regimes**{ title="One security event can trigger CRA Art. 14 (to the CSIRT via the SRP), NIS2 incident notification (essential and important entities), DORA Arts. 17–23 (financial entities, to their competent authority), GDPR Art. 33 (personal-data breaches, to the DPA) and AI Act Art. 73 (serious incidents of high-risk AI systems, to the market-surveillance authority) — with different definitions, recipients and clocks. The CRA platform does not replace the others." } — the auditor's decision matrix: which duty, to whom, on which clock. See also the [DORA](reference_dora.md) and [EU AI Act](reference_eu_ai_act.md) pages.

## Auditor Checklist

Evidence-oriented checks for a manufacturer of software or connected products — including AI software shipped as a product — with EU market presence:

- [ ] The product portfolio is classified: in scope / out of scope, Annex III Class I or II, Annex IV, and whether any product is also a high-risk AI system (Art. 12).
- [ ] The main EU establishment — and therefore the coordinator CSIRT — is determined and documented (Art. 14(7)).
- [ ] An operational Art. 14 path exists: agreed criteria for "actively exploited" and "severe incident", authority to submit an early warning on incomplete evidence, SRP account and endpoint verified, tabletop-tested against the 24-hour window.
- [ ] Product, version and EU-distribution records allow affected users and Member States to be identified quickly; user notifications can be issued in human-readable and machine-readable form (Art. 14(8)).
- [ ] Contracts with cloud providers, component suppliers, managed security and vulnerability-research partners deliver exploitation evidence fast enough to support the statutory clock.
- [ ] Parallel duties are mapped per event type: NIS2, DORA, GDPR Art. 33, AI Act Art. 73 — one decision matrix, not four separate procedures.
- [ ] Ahead of 2027-12-11: a documented cybersecurity risk assessment, an SBOM per product, a coordinated vulnerability-disclosure policy, a protected build and update channel, and a stated support period of at least five years (Art. 13, Annex I).
- [ ] For a high-risk AI product: the AI Act Art. 43 conformity file evidences CRA Annex I Parts I and II and the EU declaration of conformity states the Art. 15 protection level, or the Annex III/IV route is followed instead (Art. 12(1)–(3)).

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences.

| CRA | EU AI Act | NIST (CSF / AI RMF / SSDF) | DORA |
| --- | --------- | -------------------------- | ---- |
| [Art. 12](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_12.html) (high-risk AI systems) | [Art. 15](https://artificialintelligenceact.eu/article/15/) (cybersecurity) + [Art. 43](https://artificialintelligenceact.eu/article/43/) (conformity assessment) | AI RMF [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) | — |
| [Art. 13](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_13.html) + Annex I Part I (secure design) | [Art. 9](https://artificialintelligenceact.eu/article/9/) (risk management) + [Art. 15](https://artificialintelligenceact.eu/article/15/) | [SSDF (SP 800-218)](https://csrc.nist.gov/pubs/sp/800/218/final) · [CSF](https://www.nist.gov/cyberframework) Protect | [Art. 5–16](https://www.digital-operational-resilience-act.com/Article_5.html) (ICT risk management) |
| [Art. 14](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_14.html) (reporting) | [Art. 73](https://artificialintelligenceact.eu/article/73/) (serious-incident reporting) | [CSF](https://www.nist.gov/cyberframework) Respond | [Art. 17–23](https://www.digital-operational-resilience-act.com/Article_17.html) (incident reporting) |
| Annex I Part II (vulnerability handling, SBOM) | [Art. 72](https://artificialintelligenceact.eu/article/72/) (post-market monitoring) | [SSDF](https://csrc.nist.gov/pubs/sp/800/218/final) RV (respond to vulnerabilities) · AI RMF [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) | [Art. 24–27](https://www.digital-operational-resilience-act.com/Article_24.html) (resilience testing) |
| [Art. 13(8)](https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_13.html) (support period) + Art. 24 (OSS stewards) | [Art. 25](https://artificialintelligenceact.eu/article/25/) (value-chain responsibilities) | AI RMF [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) 4 (supply chain) | [Art. 28–30](https://www.digital-operational-resilience-act.com/Article_28.html) (ICT third-party risk) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-09-21` | baseline | Initial baseline, added ten days after the **Art. 14 reporting obligations became applicable on 2026-09-11** and ENISA launched the **Single Reporting Platform** with initial operating capability the same day (FAQ, user manuals, factsheet, help desk). Captured: scope, the Art. 12 bridge to the AI Act's Art. 15/43, the staged timeline to full application on 2027-12-11 (open-source steward reporting from that date under Art. 24(3)), penalties, and the overlap with NIS2, DORA, GDPR and AI Act Art. 73 reporting. Commission review of the platform due by 2028-09-11. |

## Sources

Public web sources only — local/private provenance is kept in a private mirror.

- **Primary (web):** [EUR-Lex — CRA (2024/2847)](https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng) · [European Commission — Cyber Resilience Act (policy page)](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act) · [European Commission — CRA reporting obligations](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting) — retrieved 2026-09-21.
- **ENISA:** [CRA Single Reporting Platform](https://www.enisa.europa.eu/tools/cra-single-reporting-platform) · [The CRA Single Reporting Platform is launched (2026-09-11)](https://www.enisa.europa.eu/news/the-cra-single-reporting-platform-is-launched) · [SRP FAQ](https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp/frequently-asked-questions) — retrieved 2026-09-21.
- **Article-by-article (secondary, mirrors the OJ text):** [european-cyber-resilience-act.com](https://www.european-cyber-resilience-act.com/) — used for deep links only; the authoritative text is the EUR-Lex ELI above.
