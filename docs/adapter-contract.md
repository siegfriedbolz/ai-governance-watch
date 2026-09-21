# Adapter contract — what a watch target is, and what "unchanged" may mean

Status: contract fixed on 2026-09-21 (backlog item 3 of the September 2026 refresh). It binds
`sources/literature-watch.yaml` today through `sources/schema/sources.schema.json`, and it binds
every adapter written in Phase 3 and later. It exists because two refreshes showed the same gap
from two sides:

- **2026-09-05** — the first pass re-observed every source's landing page and found nothing; the
  second pass against the supervisors' and governments' *news pages* found six July–September
  developments (an ESAs statement, a Commission release, a King's Speech, an OWASP release, three
  CLTC papers). Landing pages announce; news lists record.
- **2026-09-21** — Commission Implementing Regulation (EU) 2026/1755 (procedures for Art. 92
  evaluations and Art. 101 fines under the AI Act) had been in the Official Journal since
  21 July 2026. No landing page mentioned it. A delegated or implementing act carries its own
  number and its own ELI; a fingerprint on the base act's URL never fires.

The library's online-source register solved the same problem on 2026-09-04 with a `quelle_hinweis`
field ("which page to look at by hand"); this contract adopts that mechanic rather than inventing
a second one.

## 1. Target kinds

Every target declares a `kind`. The kind decides what a change means and how the adapter compares.

| `kind` | What it is | What a change means | How the adapter compares |
| --- | --- | --- | --- |
| `document` | The source text itself — an OJ PDF, a NIST publication, a treaty text | A new version, corrigendum or edition (`version_bump`) | Whole-content fingerprint, then semantic diff |
| `landing_page` | The publisher's page *about* the source | An announcement to read: revision notice, new guidance, changed status line | Fingerprint of the extracted main content; on change, the diff is read, not classified blindly |
| `news_feed` | A dated list of new items — press releases, publications, news | New entries newer than the page's `last_observed_at` | **Item-level**: extract entries (date, title, link), keep the ones newer than the last observation, and hold each against the page's *Recent Changes* table. The list as a whole is never fingerprinted — it changes every week for reasons that have nothing to do with the source |
| `legal_search` | A registry view that lists acts based on or amending the source (EUR-Lex "all documents", Fedlex consolidation, a treaty office chart) | A new act under its own number: delegated act, implementing act, RTS/ITS, corrigendum, amendment | Item-level, like `news_feed`; every new entry is a candidate `substantive` change until read |

Rules that follow:

1. **Every source has at least one `news_feed` or `legal_search` target.** A source watched through
   its landing page alone is the configuration that missed 2026-09-05 and 2026-09-21.
2. A `news_feed` or `legal_search` target never produces "unchanged" on its own. It produces a
   (possibly empty) list of new items, and the routine reports the count. Zero new items is a
   statement about the list, not about the source.
3. `document` and `landing_page` targets report "unchanged" only together with the date of the
   observation and, for sources with successor risk, the hand-check named in `watch_hint`.

## 2. Successor risk and `watch_hint`

A fingerprint answers one question: *is the content at this URL the same as last time?* It cannot
answer *has this source been replaced?* — a revised framework gets a new document number, a new
edition a new catalogue page, a moving project a new URL, and the old URL keeps returning the old
content forever. Sources where this is the expected way of changing declare:

```yaml
successor_risk: true
```

and **every target of such a source carries a `watch_hint`** (the schema enforces it). The hint says,
in one or two sentences, what the fingerprint cannot see and which page a human reads when the target
has been silent for a full cadence. It is written for the person doing the re-observation, not for
the adapter — the adapter's only duty is to print it next to every "unchanged" verdict for that
source. Examples in the current list:

- `nist_ai_rmf` — the landing page says the framework is under revision without a date; the successor
  will carry a new publication number and a new nvlpubs URL.
- `csa_agentic_profile` — the URL contains `v1`; a v2 lives under a new path while this page keeps
  its draft header.
- `coe_ai_convention` — the treaty chart is a browser-only application; nothing to fingerprint, the
  "status as of" date and the counts are read in the browser pane.
- `ch_ai_data_protection` — admin.ch refuses automated clients; the consultation draft will appear
  under a new Fedlex URL.

`watch_hint` is also the right place for **retrieval constraints** that would otherwise be
rediscovered every time: EUR-Lex answers automated clients with an AWS WAF challenge (HTTP 202 and an
empty body) and the challenge is never bypassed — read in the browser pane or resolve the act through
the Publications Office Cellar; rm.coe.int and admin.ch return 403; the CoE chart and Fedlex are
single-page applications.

## 3. Cadence and `check_interval_days`

`cadence` stays a property of the source. A target may shorten its own interval with
`check_interval_days` (minimum 7): use it for a target with successor risk during an announced
revision, for a treaty chart when a ratification is expected, for a consultation page once the
consultation has opened. The routine treats a target as due when that many days have passed since its
last observation, whatever the source cadence says.

## 4. What the adapter returns

Every adapter implements `fetch(source_config, target_config) -> ContentEnvelope` and
`describe() -> AdapterMetadata` (the skeleton is in `skills/ai-governance-watch/README.md`). The
envelope carries, in addition to the content and its hash:

| Field | Meaning |
| --- | --- |
| `kind` | The target kind, copied from the configuration |
| `observed_at` | UTC timestamp of the fetch |
| `items` | For `news_feed` and `legal_search`: the extracted entries `(date, title, url)` newer than the page's `last_observed_at`; empty list allowed |
| `verdict` | `changed`, `unchanged`, `new_items` (with count) or `unreadable` (blocked host, challenge page, SPA) — `unreadable` is a verdict, never silently mapped to `unchanged` |
| `watch_hint` | Copied from the configuration; printed with every `unchanged` and `unreadable` verdict of a source with `successor_risk` |

The PR builder writes deltas *under* the existing H2 headings of the page (`Recent Changes`,
`Audit-Relevant Anchors`, `Sources`) and never regenerates a heading: the H2 anchors are a public
API that client deliverables deep-link.

## 5. Checklist for adding a source

- [ ] One `document` or `landing_page` target for the thing itself.
- [ ] At least one `news_feed` or `legal_search` target for the channel where changes are announced.
- [ ] `successor_risk` decided; if true, a `watch_hint` on every target.
- [ ] Every host on the schema allowlist — adding a host is a reviewed schema change, and the
  allowlist entry names why the host is needed (in the commit message).
- [ ] `python3 -c "import json,yaml,jsonschema; jsonschema.validate(yaml.safe_load(open('sources/literature-watch.yaml')), json.load(open('sources/schema/sources.schema.json')))"` passes.
- [ ] The README source-coverage table has the row.
