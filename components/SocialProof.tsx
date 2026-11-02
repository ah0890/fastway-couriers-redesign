import Reveal from "@/components/Reveal";
import { customerStat, logoPlaceholders, type PlaceholderShape } from "@/data/socialProof";

const shapeClasses: Record<PlaceholderShape, string> = {
  circle: "size-6 rounded-full bg-subtle/50",
  square: "size-6 rounded-md bg-subtle/50",
  diamond: "size-5 rotate-45 rounded-sm bg-subtle/50",
  pill: "h-4 w-8 rounded-full bg-subtle/50",
  ring: "size-6 rounded-full border-4 border-subtle/50",
  bars: "h-6 w-6 bg-[repeating-linear-gradient(90deg,var(--color-subtle)_0_4px,transparent_4px_7px)] opacity-50",
};

export default function SocialProof() {
  return (
    <section id="customers" aria-labelledby="customers-heading" className="py-16 sm:py-24">
      <div className="container-page">
        <Reveal className="text-center">
          <h2 id="customers-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            You&apos;re in great company
          </h2>
          <p className="mt-4 text-lg text-muted">
            Trusted by{" "}
            <strong className="text-2xl font-bold text-brand-bright sm:text-3xl">{customerStat.value}</strong>{" "}
            {customerStat.label}
          </p>
        </Reveal>

        <ul aria-label="Customer logo placeholders" className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {logoPlaceholders.map(({ id, shape }, index) => (
            <li key={id}>
              <Reveal delay={index * 0.05}>
                <div className="flex h-20 items-center justify-center gap-2.5 rounded-2xl border border-dashed border-line bg-surface text-subtle">
                  <span aria-hidden className={shapeClasses[shape]} />
                  <span className="text-left text-[0.7rem] font-semibold uppercase leading-tight tracking-wider">
                    Customer
                    <br />
                    Logo
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-subtle">
          Placeholder logos — real customer brands are not shown in this practice redesign.
        </p>
      </div>
    </section>
  );
}
