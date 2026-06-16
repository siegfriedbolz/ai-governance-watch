---
title: AI Governance Watch
description: A PR-gated, continuously-watched reference library of the AI governance standards an external AI risk auditor must keep current.
hide:
  - navigation
---

# AI Governance Watch

A continuously-watched, **PR-gated reference library** of the AI governance
standards an external AI risk auditor has to keep current. Each standard has
its own page with a short, audit-oriented summary, the clauses you would cite,
and a rolling log of what changed. Every page traces back to a verifiable
observation of a public source at a documented point in time.

!!! tip "How to use this library"
    Use the **search** (top of the page, or press `/`) to look across every
    standard at once. Open a standard to read its summary and audit anchors.
    Check the [changelog](changelog.md) to see what changed recently.

## Watched standards

### Frameworks & management systems

<div class="grid cards" markdown>

-   **[NIST AI RMF](reference_nist_ai_rmf.md)**

    ---

    The GOVERN / MAP / MEASURE / MANAGE framework, the GenAI Profile (600-1),
    and the Playbook. Voluntary, widely adopted, the common backbone.

-   **[ISO/IEC 42001](reference_iso_42001.md)**

    ---

    The first certifiable AI Management System (AIMS) standard, plus the
    surrounding 42000-series (incl. 42006 for certification bodies).

-   **[ISO/IEC 23894](reference_iso_23894.md)**

    ---

    Guidance on AI risk management — the "how" companion to ISO/IEC 42001 and
    ISO 31000.

</div>

### Regulation & law

<div class="grid cards" markdown>

-   **[EU AI Act](reference_eu_ai_act.md)**

    ---

    Regulation (EU) 2024/1689 — risk tiers, high-risk obligations, GPAI rules,
    and the 2026 Digital Omnibus that moved the deadlines.

-   **[UK AI White Paper](reference_uk_ai_white_paper.md)**

    ---

    The UK's principles-based, sector-led "pro-innovation" approach (2023 White
    Paper + 2024 response), now evolving toward regulatory sandboxes.

-   **[DORA](reference_dora.md)**

    ---

    The EU Digital Operational Resilience Act — ICT and third-party resilience
    for finance; relevant to AI vendor and outage risk.

</div>

### Agentic, thresholds & landscape

<div class="grid cards" markdown>

-   **[CSA Agentic Profile](reference_csa_agentic_profile.md)**

    ---

    Cloud Security Alliance's agentic extension of the NIST AI RMF, plus the
    AI Controls Matrix and catastrophic-risk work.

-   **[Berkeley CLTC](reference_berkeley_cltc.md)**

    ---

    UC Berkeley's intolerable-risk and AI-enabled cyber-threat thresholds —
    the "red lines" layer of AI governance.

-   **[NIST ITL Standards Landscape](reference_nist_itl_landscape.md)**

    ---

    NIST ITL's map of the global AI standards landscape — the meta-source that
    flags new standards worth tracking.

</div>

## How this library stays current

A single scheduled watch routine checks each source on its cadence. When it
detects a substantive change, it opens a **pull request** with the proposed
update, the before/after snapshot hashes, and an auditor note. **Nothing lands
on a page without a human reviewing that diff** — the same provenance
discipline an external auditor must demonstrate to a client. See the
[changelog](changelog.md) for the running history.

!!! note "Scope of these pages"
    These pages track **metadata, structure, and short quoted anchors** of each
    standard — not their full text. The standards keep their publishers'
    licences; this library only extracts what fair-use quotation allows and
    links back to every primary source.
