import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { franchiseBenefits, franchiseOptions } from "@/data/franchise";

export default function FranchiseSection() {
  return (
    <section id="franchise" aria-labelledby="franchise-heading" className="py-4 sm:py-8">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/30 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
            <Reveal>
              <SectionHeading
                id="franchise-heading"
                tone="dark"
                eyebrow="Own your business"
                title="Franchise opportunities"
                description="Join an award-winning franchise network and build a courier business of your own, backed by a recognised brand and a team that wants you to succeed."
              />
              <ul aria-label="Franchise types" className="mt-6 flex flex-wrap gap-2">
                {franchiseOptions.map((option) => (
                  <li key={option} className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/85">
                    {option}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Franchise opportunities
                <ArrowRight aria-hidden className="size-4" />
              </a>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2">
              {franchiseBenefits.map(({ title, description, icon: Icon }, index) => (
                <li key={title}>
                  <Reveal delay={0.08 * index} className="h-full">
                    <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-white">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <h3 className="mt-4 font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
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
