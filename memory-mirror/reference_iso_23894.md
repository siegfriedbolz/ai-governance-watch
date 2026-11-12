---
name: "ISO/IEC 23894:2023 (AI Risk Management Guidance)"
description: "ISO's guidance standard for managing AI-specific risk across the lifecycle, the companion to ISO 31000 and to the ISO/IEC 42001 management system."
keywords: "ISO/IEC 23894, AI risk management guidance, ISO 31000 for AI, AI risk sources, Annex B risk sources, risk treatment, AI risk process, ISO AI standards"
type: reference
source_id: iso_23894
source_url: "https://www.iso.org/standard/77304.html"
about_type: CreativeWork
about_identifier: "ISO/IEC 23894:2023"
about_jurisdiction: "International"
last_observed_at: "2026-11-12T00:00:00Z"
last_observed_commit_or_version: "ISO/IEC 23894:2023 (1st edition, published 2023-02); ISO catalogue re-read 2026-11-12: stage 60.60, no amendment or revision on the SC 42 work programme (54 items under development on 2026-11-12, 51 on 2026-10-30); related SC 42 items under development: ISO/IEC DTS 25568 (risks in generative AI systems, 50.00), ISO/IEC CD 25870 (data elements for reporting AI system incidents, 30.20)"
provenance_chain:
  - timestamp: "2026-11-12T00:00:00Z"
    pr: "manual re-observation (November 2026): ISO catalogue entry and SC 42 work programme read in the browser"
    change: editorial
  - timestamp: "2026-10-30T00:00:00Z"
    pr: "manual re-observation (October 2026): catalogue and SC 42 work programme re-read in the browser"
    change: editorial
  - timestamp: "2026-09-05T00:00:00Z"
    pr: "manual refresh (September 2026)"
    change: editorial
  - timestamp: "2026-06-16T00:00:00Z"
    pr: "baseline (manual)"
    change: baseline
---

# ISO/IEC 23894:2023 (AI Risk Management Guidance)

!!! info "Provenance & licence"
    **Source:** [iso.org/standard/77304.html](https://www.iso.org/standard/77304.html) ·
    **Last observed:** `2026-11-12` ·
    **Version:** ISO/IEC 23894:2023, 1st edition ·
    **Status:** planned (metadata-only watch — full text is paywalled) ·
    **Licence:** ISO/IEC copyright — proprietary (`proprietary-metadata-only`)

## Summary

ISO/IEC 23894:2023 is the first dedicated international standard giving
**guidance on managing AI-specific risk**. Published in February 2023, it
explains how organisations that develop, produce, deploy, or use AI can
integrate risk management into their AI activities across the whole lifecycle.
It is built as a **companion to ISO 31000:2018** (the general risk-management
guideline) and pairs naturally with **ISO/IEC 42001** (the AI management
*system* standard): 42001 says you must manage AI risk; 23894 shows *how*. It
is guidance, not certifiable requirements.

## In plain language

!!! note "Our explanation, not the official text"
    ISO text is copyrighted and paywalled — we explain the **concepts only**, in
    our own words. Buy the standard from ISO for the authoritative text. Not legal advice.

ISO/IEC 23894 is the "how-to" companion for managing AI risk. Where ISO 42001
says you *must* manage AI risk, 23894 explains *how* — following the general
ISO 31000 risk process but adding AI-specific risk sources like bias, opacity
and autonomy across the AI lifecycle.

## Key terms

- **ISO 31000** — the general risk-management standard that 23894 builds on.
- **Risk source** — the origin of a risk (e.g. training data, model opacity); Annex B lists AI-specific ones.
- **Residual risk** — the risk left after treatment, which someone must formally accept.

## In depth (in our own words)

!!! note "Our explanation — not the official text"
    ISO's text is paywalled, so everything below is our own-words explanation of
    the *concepts* — never the normative wording. Buy the standard from ISO for
    the authoritative text. Not legal advice.

**Guidance, not a checklist to certify against.** Where ISO/IEC 42001 is a
certifiable management *system*, 23894 is **guidance** — it tells you *how* to do
AI risk management well. You can't get "certified to 23894"; you use it to make
your risk process credible. In practice the two go together: 42001 says you must
manage AI risk; 23894 shows you a defensible way to do it.

**It rides on ISO 31000.** 23894 deliberately reuses the general risk-management
process from ISO 31000 (the standard most enterprises already use for enterprise
risk) and adapts it to AI. The process, in plain terms: agree the *scope, context
and risk criteria*; *identify* risks; *analyse* them (likelihood and impact);
*evaluate* them against your criteria; *treat* them (mitigate, transfer, avoid or
accept); then *monitor, review, record and communicate* — continuously. The value
of using the same backbone is that AI risk stops being a separate island and feeds
your existing enterprise-risk reporting.

**What's genuinely AI-specific.** The reason a general risk standard isn't enough
is that AI introduces *new sources of risk*. 23894 draws attention to things like:
data quality and representativeness, harmful bias, model opacity (hard-to-explain
decisions), performance drift after deployment, autonomy and unexpected behaviour,
security and adversarial attacks, the human–AI interaction (over-trust, automation
bias), transparency obligations, and environmental impact. An auditor uses this as
a coverage checklist: did the organisation actually consider these, or just the
obvious ones?

**Across the whole lifecycle.** A core idea is that risk isn't assessed once. It's
revisited at each stage of the AI lifecycle — from inception and data sourcing
through development, validation, deployment, operation and retirement — because the
risk profile changes as the system meets real data and real users.

**Why it matters for you.** 23894 gives an auditor an internationally recognised,
method-based answer to "how should AI risk be managed?" — useful both to *run* a
sound process and to *challenge* an organisation that is managing AI risk ad hoc.
It also connects upward to NIST AI RMF's MAP/MEASURE/MANAGE and is complemented by
the later ISO/IEC 42005:2025 (AI system impact assessment).

## Key Sections

- **Clause 4 — Principles**{ title="ISO/IEC 23894's AI risk-management principles, deliberately aligned to the ISO 31000 principles so AI risk fits an organisation's existing enterprise-risk approach." } — AI risk-management principles, aligned to ISO 31000.
- **Clause 5 — Framework**{ title="ISO/IEC 23894 guidance on embedding AI risk management into the organisation's governance — leadership, integration, design, implementation, evaluation and improvement." } — integrating AI risk management into governance.
- **Clause 6 — Process**{ title="ISO/IEC 23894's operational risk process for AI — identification, analysis, evaluation, treatment, monitoring and communication — adapted from ISO 31000." } — risk identification, analysis, evaluation, treatment, monitoring for AI.
- **Annex A**{ title="ISO/IEC 23894's set of AI-specific objectives an organisation may pursue when managing AI risk." } — AI-specific objectives an organisation may pursue.
- **Annex B**{ title="ISO/IEC 23894's catalogue of AI-specific risk sources — data quality, model opacity, autonomy, transparency, bias, robustness and human-AI interaction — used as a coverage checklist." } — AI-specific risk sources (data, model, autonomy, transparency, bias, robustness, human-AI interaction).
- **Annex C**{ title="ISO/IEC 23894 guidance on mapping risk-management activities across the stages of the AI lifecycle." } — mapping risk management across the AI lifecycle.

## Audit-Relevant Anchors

- **Clause 6 process**{ title="ISO/IEC 23894 Clause 6 — the documented AI risk process (identify, analyse, evaluate, treat, monitor) an auditor traces against ISO/IEC 42001 Clause 6.1." } — the documented AI risk process an auditor traces against ISO/IEC 42001 Clause 6.1.
- **Annex B risk sources**{ title="ISO/IEC 23894 Annex B — the catalogue of AI-specific risk sources used as a defensible coverage checklist in an audit." } — a defensible checklist of AI-specific risks to test coverage of.
- **ISO 31000 alignment**{ title="The deliberate reuse of the general ISO 31000 risk process, letting an auditor connect AI risk to the organisation's existing enterprise-risk framework." } — lets an auditor connect AI risk to the organisation's enterprise risk framework.
- **SC 42 risk-adjacent work items (not yet published)**{ title="On the ISO/IEC JTC 1/SC 42 work programme as read on 2026-10-30: ISO/IEC DTS 25568 — Guidance on addressing risks in generative AI systems (stage 50.00, approval), ISO/IEC CD 25870 — Data elements for reporting AI system incidents (stage 30.20), ISO/IEC 42105 — Guidance for human oversight of AI systems (stage 60.00, about to publish). None of them amends 23894; they are the specialised companions an auditor will be asked to map to Clause 6 and Annex B once published." } — the generative-AI risk guidance, the incident-reporting data elements and the human-oversight guidance are the next companions to this standard; nothing citable until ISO publishes them.

## Auditor Checklist

Evidence-oriented checks for an AI risk-management review:

- [ ] AI risk management is integrated with the organisation's ISO 31000 enterprise process.
- [ ] AI-specific risk sources (Annex B) are systematically considered.
- [ ] Risk criteria capture AI-specific harms (bias, opacity, robustness, autonomy).
- [ ] Risk is revisited at each AI lifecycle stage (Annex C coverage).
- [ ] Risk treatment and residual-risk acceptance are documented (Cl. 6).
- [ ] AI risks are monitored and reviewed on a defined cadence.

## Cross-Framework Mapping

Indicative cross-references, **not** authoritative equivalences. ISO clauses are
**paywalled** (no public per-clause page) — see the [ISO catalogue entry](https://www.iso.org/standard/77304.html);
the NIST AI RMF cells link to readable sources.

| ISO/IEC 23894 | ISO/IEC 42001 | NIST AI RMF | ISO 31000 |
| ------------- | ------------- | ----------- | --------- |
| Cl. 6 (process) | Cl. 6.1 + Cl. 8 | [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) / [MEASURE](https://airc.nist.gov/airmf-resources/playbook/measure/) / [MANAGE](https://airc.nist.gov/airmf-resources/playbook/manage/) | Cl. 6 (process) |
| Annex B (risk sources) | Annex A (controls) | [MAP](https://airc.nist.gov/airmf-resources/playbook/map/) 1–5 | — |
| Cl. 5 (framework) | Cl. 4–5 | GOVERN | Cl. 5 (framework) |

## Recent Changes (rolling, last 5)

| Date | Severity | What changed |
| ---- | -------- | ------------ |
| `2026-11-12` | editorial | Re-observed in the browser, standard unchanged: the [ISO catalogue entry](https://www.iso.org/standard/77304.html) still shows ISO/IEC 23894:2023 at edition 1, stage 60.60, no amendment. The [SC 42 work programme](https://www.iso.org/committee/6794475/x/catalogue/p/0/u/1/w/0/d/0) now lists **54** items under development (51 on 2026-10-30; that list was not captured item by item, so the three additions cannot be named) and none of them revises 23894. The risk-adjacent items keep their stages: **ISO/IEC DTS 25568** (risks in generative AI systems) 50.00, **ISO/IEC CD 25870** (data elements for reporting AI system incidents) 30.20, **ISO/IEC 42105** (human oversight) 60.00. Listed there and not read: conformity assessment (ISO/IEC DIS 42007, AWI 26582, AWI 26741), AI system logging (ISO/IEC 24970, stage 60.00), resilience assessment (AWI TS 25864), red teaming (AWI TS 42119-7) and misuse patterns (AWI TR 27259). |
| `2026-10-30` | editorial | Re-observed in the browser (iso.org refuses automated clients): ISO/IEC 23894:2023 unchanged — edition 1, stage 60.60, no amendment, no revision work item on the SC 42 programme (51 items under development, none touching 23894). Noted the risk-adjacent items in the pipeline: **ISO/IEC DTS 25568** (risks in generative AI systems, 50.00), **ISO/IEC CD 25870** (data elements for reporting AI system incidents, 30.20) and **ISO/IEC 42105** (human oversight, 60.00). Companion note: the AI Act's first harmonised standard, EN 18286:2026 (Art. 17 QMS), was cited in the OJ on 2026-10-14 — see the [42001 page](reference_iso_42001.md); it does not touch risk-management guidance. |
| `2026-09-05` | editorial | Re-observed; no change to ISO/IEC 23894:2023 (1st edition) in the ISO catalogue. Companion note: ISO/IEC 42001 now also exists as EN ISO/IEC 42001:2026 (see the 42001 page). |
| `2026-06-16` | baseline | Initial baseline: ISO/IEC 23894:2023 (1st ed.) is current; positioned as the "how" companion to ISO/IEC 42001 and ISO 31000. |

## Sources

Public web sources only — local/private provenance is kept in a private mirror.

- **Primary (web):** [ISO catalogue — 23894](https://www.iso.org/standard/77304.html)
- **Note:** Full normative text is paywalled — this reference tracks **catalogue metadata only** (edition, stage, status). No full-text fetch.
- **Update 2026-10-30:** [ISO catalogue — 23894 (re-read in the browser)](https://www.iso.org/standard/77304.html) · [ISO/IEC JTC 1/SC 42 — standards under development](https://www.iso.org/committee/6794475/x/catalogue/p/0/u/1/w/0/d/0) — retrieved 2026-10-30.
- **Update 2026-11-12:** [ISO catalogue — 23894 (re-read)](https://www.iso.org/standard/77304.html) · [ISO/IEC JTC 1/SC 42 — standards under development (54 items)](https://www.iso.org/committee/6794475/x/catalogue/p/0/u/1/w/0/d/0) — read in the browser, retrieved 2026-11-12.
