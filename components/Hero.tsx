import { ArrowRight, Check, MapPin } from "lucide-react";
import HeroCard from "@/components/HeroCard";
import { heroHighlights } from "@/data/hero";
import { primaryCta } from "@/data/navigation";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-canvas">
      {/* Decorative brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-32 size-[28rem] rounded-full bg-ink/5 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-brand sm:text-xs sm:tracking-wider">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            Courier services across South Africa
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl xl:text-6xl"
          >
            Discover a better parcel service with <span className="text-brand">Fastway</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Cost-effective, reliable courier services designed around the needs of small and
            medium-sized businesses — with simple online tracking and a local depot near you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover"
            >
              {primaryCta.label}
              <ArrowRight aria-hidden className="size-4" />
            </a>
            <a
              href="#depots"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink-soft/40"
            >
              <MapPin aria-hidden className="size-4 text-brand" />
              Find a local depot
            </a>
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-ink-soft sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Check aria-hidden className="size-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-lg lg:max-w-none">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}
