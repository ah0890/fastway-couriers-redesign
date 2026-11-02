# fastway-couriers-redesign

A modern, responsive redesign of the Fastway Couriers (South Africa) homepage, built with Next.js and Tailwind CSS. Includes a parcel tracking UI, depot finder, franchise section and mobile-friendly navigation.

> **Practice redesign project – not affiliated with Fastway Couriers.**
> This is a learning/portfolio project. It is not the official Fastway website, uses no Fastway logos or imagery, and connects to no Fastway systems. The official site is <https://www.fastway.co.za/>.

## Features

_See [CHANGELOG.md](CHANGELOG.md) for what has been implemented and verified so far._

## Technology stack

- [Next.js](https://nextjs.org/) 16 (App Router, Server Components by default)
- TypeScript (strict)
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- [lucide-react](https://lucide.dev/) icons
- [Framer Motion](https://motion.dev/) for subtle, reduced-motion-aware animation

No backend, database, analytics or paid services.

## Prerequisites

- Node.js 20.9+ (developed on Node 22)
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
npm run build        # production build
npm run start        # serve the production build
```

## Project structure

```text
app/          layout, metadata, global styles / design tokens, page
components/   one component per homepage section (+ small shared pieces)
data/         all structured content (navigation, depots, franchise, ...)
```
