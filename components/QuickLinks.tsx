import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { quickLinks } from "@/data/quickLinks";

// Five cards: 2 columns on tablet (last spans both), then 3 + 2 on desktop.
const spanClasses = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "sm:col-span-2 lg:col-span-3",
];

export default function QuickLinks() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          eyebrow="Get started"
          title="Everything your business needs to send"
          description="Jump straight to the tools and services that matter most."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {quickLinks.map(({ title, description, cta, href, icon: Icon, featured }, index) => (
            <li key={title} className={spanClasses[index]}>
              <Reveal delay={index * 0.06} className="h-full">
                <a
                  href={href}
                  className={`group flex h-full flex-col rounded-3xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift sm:p-7 ${
                    featured
                      ? "border-navy bg-gradient-to-br from-navy to-navy-deep text-white shadow-lift"
                      : "border-line bg-surface text-ink shadow-card hover:border-brand/40"
                  }`}
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl ${
                      featured ? "bg-white/15 text-white" : "bg-brand-soft text-brand-bright"
                    }`}
                  >
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className={`mt-2 flex-1 text-sm leading-relaxed ${featured ? "text-white" : "text-muted"}`}>
                    {description}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                      featured ? "text-white" : "text-brand-bright"
                    }`}
                  >
                    {cta}
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
