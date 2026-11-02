# Changelog

Only verified work is recorded here.

## Milestone 4 — Footer, accessibility and polish

- Responsive five-column footer from `data/footer.ts` (Depots, Why Fastway, Our services, Franchise, Terms), social links (Facebook, Instagram, LinkedIn as inline outline SVGs), copyright and the disclaimer "Practice redesign project – not affiliated with Fastway Couriers."
- Accessibility fixes from an axe-core scan: darker `subtle` text token (≥ 4.5:1), solid white text on the featured red card, lighter brand tint for the logo on charcoal, logo link name now matches its visible text.
- Desktop navigation now starts at 1280px (hamburger below) so nav labels never wrap; hero badge fits at 320px.
- Verified on the production build (`next start`): axe-core WCAG 2.1 A/AA + best-practice scan reports 0 violations at 1280px and 375px; 43/43 scripted browser checks pass; only same-origin requests and no browser storage/cookies after using the tracking demo; `npm audit --omit=dev` reports 0 vulnerabilities; screenshots inspected at 320, 375, 768, 1024, 1280 and 1536px.

## Milestone 3 — Homepage content

- Quick links: five lucide-icon cards from `data/quickLinks.ts` (featured "Become a customer" card, hover lift, focus ring, 3 + 2 desktop grid).
- About section ("At Fastway, our approach to courier services is unique") with five value points from `data/about.ts` and a "Get started with Fastway" CTA. No invented metrics.
- Depot finder from `data/depots.ts`: 16 depots in 8 provinces, case-insensitive partial city search, province filter chips (`aria-pressed`), live result count, empty state, clear/reset.
- Franchise section with the four benefits from `data/franchise.ts` and a "Franchise opportunities" CTA.
- Social proof: "150,000+ customers" and clearly labelled neutral logo placeholders.
- Shared `Reveal` (scroll fade-in, reduced-motion aware) and `SectionHeading` components.
- Verified: lint, typecheck; browser checks for depot search (city, partial "port", case-insensitive, no results, clear, province filter), no overflow at 320–1536px, single h1 and ordered headings; section screenshots inspected at 375/768/1280px.

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
