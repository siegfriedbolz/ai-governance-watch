# Skill: `ai-governance-watch`

> Placeholder. The Skill itself (`SKILL.md` + adapters + lib + tests) lands
> in Phase 3–4 of the implementation plan. This README exists so the
> directory has an entry point even before any code is committed.

## What lives here when fully built

```text
skills/ai-governance-watch/
├── README.md              <- this file
├── SKILL.md               <- the declarative skill contract (Phase 4)
├── adapters/              <- source-type-specific fetchers (Phase 3+)
│   ├── github_repo.py
│   ├── eurlex_celex.py
│   ├── iso_metadata.py
│   ├── html_extractor.py
│   └── rss_feed.py
├── lib/                   <- shared logic
│   ├── content_extractor.py
│   ├── severity_classifier.py
│   ├── diff_engine.py
│   └── pr_builder.py
└── tests/
    ├── fixtures/
    └── test_*.py
```

## Pipeline (summary, full version in `SKILL.md`)

1. Load `sources/literature-watch.yaml`.
2. Dispatch each enabled source to the matching adapter.
3. Adapter returns a `ContentEnvelope`.
4. Hash + compare against `state.json` for the source.
5. On change: semantic diff → severity classification → PR builder.
6. Editorial diffs log silently; substantive and version-bump diffs open a
   PR against `inbox/`.

Adapters must implement the `fetch(source_config, target_config) -> ContentEnvelope`
and `describe() -> AdapterMetadata` contract. Target kinds, successor risk,
`watch_hint` and the envelope fields are fixed in `docs/adapter-contract.md`
(2026-09-21); `SKILL.md` will restate them when it lands.
