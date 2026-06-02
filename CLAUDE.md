# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Portfolio maintenance rules

This repository hosts an existing portfolio site published via GitHub Pages.

## Role
Act as a maintainer for this site. Prefer minimal, targeted edits over refactors.

## Do not change without asking first
- Fundamental site structure or information architecture
- Navigation structure, page/file naming, or folder layout
- Reusable layout primitives or overall visual framework
- Build/publish/deploy behavior
- Anything under `.github/workflows/`
- GitHub Pages configuration, CNAME, robots, sitemap, or deployment scripts

## Safe changes
- Copy/content updates
- Small CSS or styling improvements
- Accessibility fixes
- Broken link fixes
- Image replacements
- Metadata/SEO improvements that do not affect publishing

## Editing rules
- Preserve the existing site structure unless I explicitly approve a restructure
- Before any structural change, explain what will change and why
- Keep diffs small and localized
- Do not introduce new frameworks, package managers, or build steps without approval
- Do not modify publishing workflow files
- When unsure whether something is structural, ask first

## Git identity / privacy
- Never write any email address into commits, files, `.md` docs, or config. Git does not require an email — commit with an empty email (`kabughazaleh <>`).
- The repo git config is set to `user.name = kabughazaleh` and an empty `user.email`. Keep it that way; do not set a personal or noreply email.
- When making commits, do not add a `Co-Authored-By` trailer or any other line containing an email address.
- If a tool or step would introduce an email, omit it instead and flag it.

---

## What this is

A single-page personal portfolio site for Khalid Abughazaleh, built with Vite + React + TypeScript and deployed to GitHub Pages. Despite the `react-router-dom` setup, there is effectively one real page (`Index`) plus a catch-all `NotFound`. The site was scaffolded by Lovable (note `lovable-tagger` in dev deps and `.lovable/plan.md`).

## Commands

```sh
npm run dev         # Vite dev server on http://localhost:8080
npm run build       # Production build to dist/
npm run build:dev   # Build with development mode (keeps componentTagger)
npm run lint        # ESLint over the repo
npm test            # Vitest, single run
npm run test:watch  # Vitest in watch mode
```

Run a single test file: `npx vitest run src/test/example.test.ts`. Tests live in `src/**/*.{test,spec}.{ts,tsx}` and run in jsdom with globals enabled (`vitest.config.ts`, setup in `src/test/setup.ts`). There is currently only a placeholder test.

### `npm install` on this machine — use the system CA

This Windows machine runs a TLS-inspecting network filter (`nllMonFltProxy`), so Node's bundled CA bundle rejects the registry's intercepted certificate. A plain `npm install` fails with the misleading error `Exit handler never called!` (the real cause, visible in the npm debug log, is `UNABLE_TO_VERIFY_LEAF_SIGNATURE`). Fix by telling Node to trust the Windows system certificate store:

```powershell
$env:NODE_OPTIONS="--use-system-ca"; npm install
```

Do **not** "fix" this by setting `strict-ssl false` or a custom registry — the registry config is already correct; only the CA trust source is the issue.

## Architecture

- **Entry flow**: `src/main.tsx` → `src/App.tsx` (providers: React Query, Tooltip, two Toasters, BrowserRouter) → `src/pages/Index.tsx`.
- **The page is composed in `Index.tsx`** as a fixed sequence of section components from `src/components/portfolio/`: `Nav`, `Hero`, `About`, `Skills`, `Accomplishments`, `Experience`, `Testimonials`, `Contact`. To add/reorder content sections, edit this list. `Index.tsx` also injects JSON-LD `Person` structured data into `<head>` via `useEffect`.
- **Content is hardcoded** inside each portfolio component — there is no CMS, data layer, or API. React Query is provided but unused for real data. Editing the site means editing JSX/copy in these components.
- **`src/components/ui/`** is the full shadcn/ui component library (Radix-based). Most of it is unused by the portfolio; treat it as a vendored library and prefer reusing these primitives over adding new dependencies.
- **`@/` aliases `src/`** (configured in `vite.config.ts`, `vitest.config.ts`, `tsconfig`).

## Design system (important)

The visual identity is a custom "Bone & Rust" editorial palette. All design tokens are CSS variables in `src/index.css` (`@layer base :root`) and **must be HSL**. Tailwind colors in `tailwind.config.ts` map to these variables (e.g. `bg-background`, `text-ink`, `text-primary` = rust accent, `bg-paper`).

- The shipped site only uses the light `:root` palette. A `.dark` block exists but is the default shadcn dark theme (blue-gray) — it is **not** styled to match Bone & Rust, so do not assume dark mode works.
- Reusable visual utilities live in `@layer utilities` in `index.css`: `.eyebrow`, `.rule`, `.section-card`, `.section-rule`, `.section-divider`, `.link-underline`, `.reveal`. Prefer these over ad-hoc styling.
- **Scroll-reveal animation**: wrap content in `<Reveal>` (`src/components/portfolio/Reveal.tsx`), which toggles `.is-visible` on the `.reveal` class via IntersectionObserver. `SectionHeader` provides the consistent numbered eyebrow + heading used across sections.
- `.lovable/plan.md` describes a planned (not-yet-applied) per-section background-tone feature — reference it for intended direction, but the current sections all share `bg-background`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` (GitHub Pages). The build sets `VITE_BASE_PATH=/` and copies `dist/index.html` to `dist/404.html` for SPA fallback routing. `vite.config.ts` `base` defaults to `/` (correct for a `<user>.github.io` user site); change `VITE_BASE_PATH` only if deploying under a repo subpath.

Active development happens on the `Draft` branch; merge to `main` to publish.
