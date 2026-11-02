# fastway-couriers-redesign

A modern, responsive redesign of the Fastway Couriers (South Africa) homepage, built with Next.js and Tailwind CSS. Includes a parcel tracking UI, depot finder, franchise section and mobile-friendly navigation.

> **Practice redesign project – not affiliated with Fastway Couriers.**
> This is a learning/portfolio project. It is not the official Fastway website, uses no Fastway logos or imagery, and connects to no Fastway systems. The official site is <https://www.fastway.co.za/>.

## Features

- **Responsive navigation:** desktop dropdowns (≥ 1280px) that work with the keyboard, close on Escape, an outside click or focus leaving them, and set `aria-expanded`/`aria-haspopup`. Below 1280px a hamburger menu with expandable groups, Escape to close and body scroll lock.
- **Hero with Track / Contact tabs:** accessible tabs with arrow-key navigation.
- **Mock parcel tracking:** validation, a loading state, a clearly labelled demo result and a "Track another parcel" reset (see below).
- **Quick links:** five icon cards for freight analysis, becoming a customer, eCommerce, franchising and labels.
- **About section:** Fastway's courier approach, without invented metrics.
- **Depot finder:** 16 depots in 8 provinces. Case-insensitive partial city search, province filter chips, a live result count, an empty state and reset.
- **Franchise opportunities:** benefit cards and a CTA.
- **Social proof:** "150,000+ customers" with clearly labelled, brand-neutral logo placeholders.
- **Footer:** five link columns, social links, copyright and the non-affiliation disclaimer.
- **Motion:** subtle Framer Motion animation that respects `prefers-reduced-motion`.
- **Metadata:** practice-redesign title and description, Open Graph and Twitter tags, and `noindex` so the site never competes with the official one.

## Technology stack

- [Next.js](https://nextjs.org/) 16 (App Router; the page is statically prerendered, with Server Components by default)
- TypeScript (strict)
- Tailwind CSS v4. Design tokens live in `app/globals.css`.
- [lucide-react](https://lucide.dev/) icons
- [Framer Motion](https://motion.dev/)

No backend, database, analytics, third-party scripts or paid services.

## Prerequisites

- Node.js **22.18+** (needed for `npm test`, which uses Node's native TypeScript support; the app itself needs Node 20.9+)
- npm 10+

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

## Checks

```bash
npm run lint         # ESLint (next/core-web-vitals + TypeScript rules)
npm run typecheck    # generates Next route types, then tsc --noEmit
npm test             # unit tests for depot filtering (node:test, no extra deps)
npm run build        # production build
npm run start        # serve the production build
```

Browser-level checks (navigation, tracking states, depot filtering, overflow at 320–1536px, axe-core accessibility scan) were run during development with ad-hoc Playwright scripts against Microsoft Edge. Those scripts are not committed, to keep the project's dependencies minimal.

## Project structure

```text
app/
  globals.css        design tokens (@theme), base styles, container utility
  layout.tsx         metadata, viewport, font, MotionConfig provider
  page.tsx           composes the homepage sections
components/          one component per section, plus Logo, Reveal, SectionHeading, SocialIcon
  Navbar.tsx         client: dropdowns + mobile menu
  HeroCard.tsx       client: tabs + mock tracking
  DepotFinder.tsx    client: search + province filters
data/                all structured content (navigation, hero, quick links, about,
                     depots + filter function, franchise, social proof, footer)
tests/               node:test unit tests
```

To change content, edit the files in `data/`. To change brand colours, edit the tokens in `app/globals.css`.

## Mock tracking behaviour

The tracking form is a demonstration only.

- Input is validated locally: empty input, then 6–20 letters or digits. Spaces are removed and letters upper-cased.
- A short artificial delay simulates a lookup, then a fixed sample timeline from `data/hero.ts` is shown. It is labelled **Demo data** and states that it does not represent a real parcel.
- Nothing is sent over the network or written to cookies or storage. The value lives only in React state and disappears on reload.
- The Contact tab only contains links. It has no form and collects nothing.

## Limitations

- All links other than in-page anchors are placeholders (`#`). There are no sub-pages.
- Depot data contains city names only: no addresses, phone numbers or maps.
- Customer logos are placeholders by design.
- Fastway facts used (the 150,000+ customer figure, the depot list, the franchise benefits) come from the public reference site as given in the brief. They are not independently verified.
- The copyright year is a constant in `data/footer.ts`, because `cacheComponents` disallows reading the clock while prerendering.
- `npm audit` reports moderate advisories in dev-only ESLint tooling (transitive `minimatch`). Production dependencies report 0 vulnerabilities.

## Deployment

The homepage prerenders as static content, so it can be deployed to any Node host (`npm run build && npm run start`) or a platform such as Vercel. No environment variables or secrets are required. If you deploy publicly, keep the disclaimer and `noindex` metadata in place.
