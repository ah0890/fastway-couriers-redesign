export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`text-sm font-semibold uppercase tracking-wider ${dark ? "text-brand-ring" : "text-brand"}`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>{description}</p>
      )}
    </div>
  );
}
