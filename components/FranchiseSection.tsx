import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { franchiseBenefits, franchiseOptions } from "@/data/franchise";

export default function FranchiseSection() {
  return (
    <section id="franchise" aria-labelledby="franchise-heading" className="py-4 sm:py-8">
      <div className="container-page">
        <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy to-navy-deep px-6 py-12 text-white shadow-lift sm:px-10 sm:py-16 lg:px-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-brand/30 blur-[100px]" />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                <span aria-hidden className="h-px w-6 bg-white/50" />
                Own your business
              </p>
              <h2 id="franchise-heading" className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Franchise opportunities
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Join an award-winning franchise network and build a courier business of your own, backed by a
                recognised brand and a team that wants you to succeed.
              </p>
              <ul aria-label="Franchise types" className="mt-6 flex flex-wrap gap-2">
                {franchiseOptions.map((option) => (
                  <li key={option} className="rounded-full border border-white/25 px-3.5 py-1.5 text-sm text-white/90">
                    {option}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition-colors hover:bg-brand-hover"
              >
                Franchise opportunities
                <ArrowRight aria-hidden className="size-4" />
              </a>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2">
              {franchiseBenefits.map(({ title, description, icon: Icon }, index) => (
                <li key={title}>
                  <Reveal delay={0.08 * index} className="h-full">
                    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition-colors hover:bg-white/[0.12]">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-white">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <h3 className="mt-4 font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
