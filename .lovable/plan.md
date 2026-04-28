## Portfolio site for Khalid Abughazaleh

A single-page, recruiter-friendly portfolio positioning Khalid as a technically deep, customer-aware engineer who connects complex pieces into complete solutions. Editorial tone — quietly creative, never flashy.

### Design direction

- **Palette (Paper & Ink):** background `#f5f3ee`, soft divider `#e8e4dd`, body ink `#2d2d2d`, headline ink `#0d0d0d`. No accent color — typography and contrast do the work.
- **Typography:** Outfit for headings (tight tracking, large display sizes), Figtree for body. Small-caps eyebrow labels number each section (01 — About, 02 — Core Skills, etc.).
- **Layout:** Asymmetric 12-column grid. Narrow left column for section labels and meta; wider right column for content. Generous whitespace, hairline dividers between sections, no cards or shadows.
- **Motion:** Subtle fade/translate-in on scroll and a quiet underline hover on links. No parallax or gradients.
- **Mobile:** Columns collapse to a single column; meta labels move above content. Type scales down gracefully.

### Page structure

```text
┌─────────────────────────────────────────────────────────┐
│  KA              About · Skills · Work · Notes · Contact│
├─────────────────────────────────────────────────────────┤
│  Portfolio · 2026                                       │
│                                                         │
│  Khalid Abughazaleh                                     │
│  Technical Customer Interface                           │
│  & Product Development Engineer                         │
│                                                         │
│  A short tagline about seeing systems as a canvas       │
│  and connecting the pieces into something complete.     │
│                                                         │
│  Hillsboro, OR  ·  LinkedIn →                           │
└─────────────────────────────────────────────────────────┘
```

**1. Hero** — Eyebrow ("Portfolio · 2026"), name in large display type, role on two lines, one-sentence tagline, then `Hillsboro, OR · LinkedIn`. No photo, no buttons.

**2. About (01)** — Resume summary rewritten in first person, warmer and more human. Introduces the "systems as a canvas" idea without using the phrase literally. ~3 short paragraphs.

**3. Core Skills (02)** — Three grouped columns (stack on mobile), label + plain-text list. No icons or progress bars.
- *Engineering & Test* — Post-silicon verification, DOE, ATE & bench, mixed-signal/digital/RF debug, fab corner analysis
- *Tools & Platforms* — IQfact+, LabVIEW, LTX, Litepoint, Teradyne; Spotfire, JMP, MATLAB, AWR Microwave Office
- *Languages & Communication* — Python, C++, Unix/Linux shell; technical writing, customer engagement, mentoring

**4. Selected Accomplishments (03)** — One short paragraph per role, taken verbatim (lightly trimmed for flow) from the italicized summary line under each job in the resume — no bullet points. Each entry shows company + role in the meta column and the italicized summary as the accomplishment text. Treated as the editorial centerpiece of the page.

Order follows resume: Teradyne LitePoint → Qorvo → Dongbu HiTek → Apolent/TI → Texas Instruments → Teradyne. (Final wording will be pulled directly from the resume PDF — point me at any line you want rephrased.)

**5. Experience Highlights (04)** — Compact timeline, one line per role: company · role · years, with a short tag (e.g. "RF · Test · Customer") in the meta column. No descriptions here — the storytelling lives in section 03, this is the at-a-glance career arc.
- Teradyne (LitePoint) — Field Application Engineer · 2022–2024
- Qorvo (formerly TriQuint) — Product Development Engineer · 2013–2022
- Dongbu HiTek USA — RF Applications & Bench Verification · 2011–2012
- Apolent / Texas Instruments contract — Principal Engineer · 2010–2011
- Texas Instruments — Product Engineer · 2003–2009
- Teradyne — Test Applications · 2000–2003

Education line at the bottom: MSEE, UT Dallas · BSEE, UT Austin.

**6. Testimonials (05)** — Editorial pull-quote treatment: large quote mark, italic quote, attribution in small caps below (name · title · relationship). All 8 LinkedIn recommendations included, lightly trimmed for length where needed:

- **Jwalin Dholakia** — RF Product Development Engineer, Qorvo (same team)
- **Darrell Lupo** — Principal Product Engineer, Qorvo (internal customer)
- **Jennifer Smith Poyaoan** — Field Application Manager, LitePoint (manager)
- **Brian Kleven** — Colleague, 9+ years
- **Chi-cheng Lin** — Sr. Applications Engineer, LitePoint (same team)
- **Benny Bologna** — RF/Wireless HW Design & Validation (client)
- **Roshmi James** — Technical Program Manager, LitePoint (manager)
- **Mike Meyers** — Applications Engineer, Texas Instruments (same team)

Layout: quotes one per row in the wide column, separated by hairline dividers — no cards, no carousel.

**7. Contact (06)** — Minimal footer block: "Hillsboro, OR" and "LinkedIn →" as a single underlined link to `https://www.linkedin.com/in/kabughazaleh/`. Tiny copyright line below.

### Navigation

Thin sticky top bar with initials (KA) on the left and section anchors on the right (About · Skills · Work · Notes · Contact). On mobile, anchors collapse into a simple text "Menu" toggle — no hamburger icon.

### Technical notes

- Built with the existing React + Vite + Tailwind + shadcn stack.
- Paper & Ink HSL tokens added to `index.css`; Outfit + Figtree loaded via Google Fonts in `index.html` and wired into `tailwind.config.ts`.
- Single page rendered in `src/pages/Index.tsx`, broken into section components under `src/components/portfolio/` (Hero, About, Skills, Accomplishments, Experience, Testimonials, Contact, Nav).
- Italicized role summaries will be parsed directly from the uploaded resume PDF during implementation.
- Smooth in-page anchor scrolling; semantic HTML and proper heading hierarchy for accessibility and ATS friendliness.
- No backend. Fully static, fast, mobile responsive.
