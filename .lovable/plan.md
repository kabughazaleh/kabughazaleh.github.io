## Goal

Let you assign a **distinct background tone** to each section independently, and pick a **separator (rule) treatment** that's clearly visible — instead of the current single-palette mix where everything sits on the same bone background.

Currently every section uses the same `bg-background` (bone) and a faint `border-rule` line between them — that's why it reads as monotonous.

## How the picker will work

I'll ask you in **three rounds** of visual choices so you stay in control instead of getting a preset:

### Round 1 — Pick a tone for each of the 7 sections

For each section, you'll pick one of 5 background tones. The 5 tones share the Bone & Rust family so nothing clashes, but each has a clearly different value:

| Tone | Hex | Feel |
|---|---|---|
| Bone (current) | `#f4f1ea` | Lightest paper |
| Clay | `#e6dfd1` | Warm muted band |
| Stone | `#d8cfbe` | Deeper warm neutral |
| Graphite | `#1c1b18` | Dark inverted (white text) |
| Rust wash | `#f0d9ce` | Soft tinted-rust band |

Sections to assign:
1. Hero
2. About
3. Skills
4. Accomplishments
5. Experience
6. Testimonials
7. Contact

I'll present this as one question per section (7 visual_choice questions, batched 4 + 3) so you can mix freely. A common pattern is alternating Bone / Clay / Bone / Stone… but you decide.

### Round 2 — Pick a separator style

Right now separators are a 1px hairline that nearly disappears against Clay. Options:

| Style | Description |
|---|---|
| Hairline (current) | Thin 1px border in muted tone |
| Bold rule | 2px line in graphite — confident editorial |
| Rust hairline | 1px in burnt rust — colored accent line |
| Double rule | Two 1px lines stacked, classic print |
| No line, tone only | Remove the line; rely purely on background contrast |
| Inset short rule | 64px centered rule (like the existing `.section-divider`) |

### Round 3 — Pick a separator color

Independent of style, pick the color:
- Graphite (`#1c1b18`)
- Rust (`#b04a2c`)
- Stone (`#d8cfbe`)
- Current muted (`#d8d2c4`)

## Technical notes

- Add a `data-tone` (or className like `tone-clay`, `tone-stone`, `tone-graphite`, `tone-rust`) on each `<section>` in `Index.tsx`'s child components.
- Define those tone classes in `src/index.css` under `@layer components`, each setting its own `background-color` and (for `tone-graphite`) inverting `--foreground`, `--ink`, `--ink-soft`, and `--rule` locally so text and eyebrows stay legible.
- Replace `border-t border-rule` on each section with a single shared `.section-rule-*` utility driven by your Round 2 + 3 choice (e.g. `.section-rule-bold-graphite { border-top: 2px solid hsl(var(--ink)); }`).
- No component logic changes — purely class swaps + CSS additions.
- Hero has no top border today; that stays.

## Deliverable after approval

Once you switch to default mode and answer the three rounds, I'll apply the per-section tones and the chosen separator treatment in one pass and you'll see all 7 sections re-skin live.