# T-Goda

Next.js 16 app (App Router) + Tailwind CSS v4 + React 19. A travel booking UI.

## Structure

- `src/app/` — App Router pages (`page.tsx`, `page2/`, `page3/`). Add new pages by creating `src/app/<name>/page.tsx`.
- `src/components/` — All React components. Every file in this directory is a component.
- `src/hooks/` — Client-side hooks. Currently `useScrollReveal` for scroll animations.

## Conventions

- **Client components get `"use client"` at the top** — only add it when using hooks, `useState`, `useEffect`, event handlers, or browser APIs. Server components are the default.
- **`@/*` imports resolve to `src/*`** — use `import X from "@/components/X"` not relative paths within `src/`.
- **Components are default exports** — every component file in `src/components/` uses `export default function`.
- **Tailwind v4, no config file** — add custom themes/colors via CSS `@theme` in `globals.css`, not a `tailwind.config`. PostCSS uses the `@tailwindcss/postcss` plugin, not the classic `tailwindcss` plugin.
- **Font is Plus Jakarta Sans** — loaded via `next/font/google` in layout, available as `font-[family-name:var(--font-plus-jakarta-sans)]`. Do not add other font families.
- **Pages are wrapped in a max-width container** — the `<main>` in each page uses `max-w-[1280px] mx-auto`. Follow this pattern for new pages.

## Common tasks

- **Add a new route**: create `src/app/<route-name>/page.tsx` with a default-exported component.
- **Add a component**: create `src/components/<ComponentName>.tsx`, default export, colocate CSS via Tailwind classes or `globals.css` additions.
- **Make something scroll-animate**: add the CSS class `reveal` or `reveal-scale` to an element. `ScrollRevealProvider` in the root layout handles intersection observation.

## Commands

- **Dev server**: `npm run dev` (Next.js dev, default port 3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (ESLint with `eslint-config-next` core-web-vitals + TypeScript rules)

## Gotchas

- **`@next/font` is pinned at `^14.2.15`** — do not upgrade to Next 15+ font API without verifying compatibility.
- **`page2` and `page3` are existing routes** — do not delete or rename them without confirming.
- **`.gitignore` actively blocks CLAUDE.md and `.claude/`** — any agent config files you create will be ignored by git. This is intentional per the latest commit.
