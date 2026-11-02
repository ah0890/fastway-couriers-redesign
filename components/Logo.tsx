// Text-only wordmark — deliberately not the official Fastway logo.
export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-baseline gap-1.5 text-xl font-bold tracking-tight">
      {/* Brand red is too dark on charcoal, so the inverted logo uses the lighter tint. */}
      <span className={inverted ? "text-brand-ring" : "text-brand"}>Fastway</span>{" "}
      <span className={inverted ? "text-white" : "text-ink"}>Couriers</span>
    </span>
  );
}
