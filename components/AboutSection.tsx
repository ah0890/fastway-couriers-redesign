import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { aboutParagraphs, aboutPoints } from "@/data/about";
import { primaryCta } from "@/data/navigation";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-canvas py-16 sm:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Why Fastway</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-bold tracking-tight text-ink text-balance sm:text-4xl">
            At Fastway, our approach to courier services is unique
          </h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <a
            href={primaryCta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Get started with Fastway
            <ArrowRight aria-hidden className="size-4" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {aboutPoints.map(({ title, description, icon: Icon }, index) => (
              <li
                key={title}
                className={`flex gap-4 rounded-3xl border border-line bg-surface p-5 shadow-card ${
                  index === aboutPoints.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon aria-hidden className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
