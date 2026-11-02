# Changelog

Only verified work is recorded here.

## Milestone 2 — Navigation and hero

- Responsive navbar driven by `data/navigation.ts`: desktop dropdowns (click, Escape, outside click and focus-out close; `aria-expanded`/`aria-haspopup`/`aria-controls`), Scam Alert link, Become a Customer CTA, skip link.
- Mobile hamburger menu with accessible label, expandable groups, Escape/link-click close and body scroll lock.
- Hero with Track/Contact tabs (WAI-ARIA tabs, arrow-key navigation).
- Mock tracking demo: empty and format validation (announced, `aria-invalid`), loading microinteraction, labelled demo result, "Track another parcel" reset. Purely local state; no network requests.
- Contact tab is presentation-only (links, no inputs).
- Verified: lint, typecheck; scripted browser checks in Microsoft Edge (dropdown keyboard/Escape/outside click, mobile menu, tracking states, no network request on track, no horizontal overflow at 320–1536px, no console errors); screenshots inspected.

## Milestone 1 — Foundation

- Scaffolded Next.js 16.4 (App Router, TypeScript, Tailwind CSS v4, ESLint) into the existing repository.
- Added `lucide-react` and `framer-motion`.
- Central design tokens in `app/globals.css`; base focus-visible and reduced-motion styles.
- Practice-redesign metadata (`noindex`), viewport and self-hosted Geist font.
- Added `npm run typecheck`.
- Verified: `npm run lint`, `npm run typecheck`, `npm run build` pass; dev server serves the page.
