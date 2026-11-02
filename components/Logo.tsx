// Text-only wordmark for navy backgrounds — deliberately not the official Fastway logo.
export default function Logo() {
  return (
    <span className="inline-flex items-baseline gap-1.5 text-xl font-bold tracking-tight text-white">
      <span>Fastway</span>{" "}
      <span className="font-medium text-white/80">Couriers</span>
    </span>
  );
}
