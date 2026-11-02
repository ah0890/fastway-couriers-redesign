# Changelog

Only verified work is recorded here.

## Navy & red visual redesign

Restyled to follow the reference site's look (navy, red and white; photo-style hero; tracking bar on the hero edge) without using any Fastway assets. An intermediate dark-theme experiment was superseded and never committed.

- New tokens in `app/globals.css`: `navy`, `navy-deep`, `navy-soft`, `elevated`, `brand-bright` and `shadow-glow`; crimson brand red `#c8102e`.
- Focus outlines follow the background (navy on light areas, white inside `.on-dark` areas).
- Navy sticky header with white navigation, a Scam Alert link and a red "Become a Customer" pill. Dropdowns and the mobile menu are white panels.
- Hero: navy backdrop with a free-licence stock photo of an unbranded white truck (`public/images/hero-truck.jpg`, Pexels) in a band that fades into the navy; centred headline, large red uppercase CTA and a two-column bullet list of positioning points from the brief. Served through `next/image` (resized, modern formats, blur placeholder) from the site itself.
- Track/Contact as folder tabs on a full-width white bar that overlaps the bottom of the hero. Large single-row tracking input with the red Track button; the Contact options sit in three columns.
- Navy accents: the featured quick-link card, the About CTA, the selected depot chip, the franchise panel (navy gradient with red icon tiles) and the footer (navy-deep).
- `suppressHydrationWarning` on `<body>` so browser extensions (e.g. ColorZilla) that add attributes don't trigger a hydration error.
- Verified on the production build: lint, typecheck, `npm test` 8/8; axe-core 0 violations at 1280px and 375px; 43/43 browser checks pass; only same-origin requests and no storage after using the demo; hero, full-page and tracking screenshots inspected at 375px and 1280px. axe cannot measure text contrast over the hero image, so that was judged visually: white text with a navy overlay and text shadow.

## Milestone 5 — Verification and documentation

- Added unit tests for depot filtering (`tests/depots.test.ts`, Node's built-in runner, no new dependencies) and `npm test`.
- Completed README (features, setup, checks, mock tracking behaviour, limitations, deployment) and context.md.
- Final verification: lint, typecheck, `npm test` (8/8) and production build pass; full browser and accessibility checks re-run on the production build.

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
