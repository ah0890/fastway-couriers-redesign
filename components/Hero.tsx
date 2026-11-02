import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import HeroCard from "@/components/HeroCard";
import heroTruck from "@/public/images/hero-truck.jpg";
import { heroHighlights } from "@/data/hero";
import { primaryCta } from "@/data/navigation";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      {/* Navy backdrop with a photo band along the bottom that fades into it. The backdrop
          stops short of the section bottom so the tracking bar overlaps its edge. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 bottom-64 -z-10 overflow-hidden bg-navy-deep sm:bottom-20"
      >
        <div className="absolute inset-x-0 bottom-0 h-56 sm:h-80 lg:h-[26rem]">
          {/* Stock photo (Pexels licence) of an unbranded truck — see README credits. */}
          <Image
            src={heroTruck}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[center_70%]"
          />
          <div className="absolute inset-0 bg-navy/15 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep to-transparent to-55%" />
        </div>
      </div>

      <div className="on-dark container-page pt-12 text-center text-white [text-shadow:0_1px_12px_rgb(6_29_92_/_0.55)] sm:pt-16 lg:pt-20">
        <h1
          id="hero-heading"
          className="mx-auto max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          Discover a better parcel service with Fastway
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90 sm:text-xl">
          Cost-effective, reliable courier services for small and medium-sized businesses.
        </p>

        <div className="mx-auto mt-9 flex max-w-5xl flex-col items-center gap-7 lg:flex-row lg:justify-center lg:gap-12">
          <a
            href={primaryCta.href}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-glow ring-4 ring-white/15 transition-colors [text-shadow:none] hover:bg-brand-hover sm:px-10 sm:text-lg"
          >
            {primaryCta.label}
            <ArrowRight aria-hidden className="size-5" />
          </a>
          <ul className="grid gap-x-10 gap-y-2.5 text-left text-base text-white sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Play aria-hidden className="mt-1.5 size-3 shrink-0 fill-current" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page relative mt-28 sm:mt-24 lg:mt-48">
        <HeroCard />
      </div>
    </section>
  );
}
