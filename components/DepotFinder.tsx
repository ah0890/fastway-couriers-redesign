"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, MapPin, Search, SearchX, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { filterProvinces, provinces, totalDepots } from "@/data/depots";

export default function DepotFinder() {
  const [query, setQuery] = useState("");
  const [province, setProvince] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => filterProvinces(query, province), [query, province]);
  const matchCount = results.reduce((sum, p) => sum + p.depots.length, 0);
  const isFiltered = query.trim() !== "" || province !== null;

  const clearAll = () => {
    setQuery("");
    setProvince(null);
    inputRef.current?.focus();
  };

  return (
    <section id="depots" aria-labelledby="depots-heading" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          id="depots-heading"
          eyebrow="Courier locator"
          title="Your local Fastway depot"
          description="Search by city or browse by province to find the depot that serves your area."
        />

        <div className="mt-10 rounded-3xl border border-line bg-canvas p-4 sm:p-6">
          <label htmlFor="depot-search" className="block text-sm font-medium text-ink">
            Search depots by city
          </label>
          <div className="relative mt-2">
            <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-subtle" />
            <input
              ref={inputRef}
              id="depot-search"
              type="search"
              autoComplete="off"
              placeholder="e.g. Durban"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-describedby="depot-count"
              className="h-12 w-full rounded-xl border border-line bg-surface pl-12 pr-12 text-base text-ink placeholder:text-subtle focus:border-ink-soft focus:outline-none focus:ring-4 focus:ring-line [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-muted hover:bg-canvas hover:text-ink"
              >
                <X aria-hidden className="size-4" />
              </button>
            )}
          </div>

          <div role="group" aria-label="Filter by province" className="mt-4 flex flex-wrap gap-2">
            <FilterChip label="All provinces" pressed={province === null} onClick={() => setProvince(null)} />
            {provinces.map((p) => (
              <FilterChip
                key={p.name}
                label={p.name}
                pressed={province === p.name}
                onClick={() => setProvince(province === p.name ? null : p.name)}
              />
            ))}
          </div>
        </div>

        <p id="depot-count" aria-live="polite" className="mt-6 text-sm text-muted">
          {isFiltered
            ? `${matchCount} of ${totalDepots} depots shown`
            : `${totalDepots} depots across ${provinces.length} provinces`}
        </p>

        {results.length === 0 ? (
          <div className="mt-4 flex flex-col items-center rounded-3xl border border-dashed border-line px-6 py-12 text-center">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-canvas text-muted">
              <SearchX aria-hidden className="size-6" />
            </span>
            <p className="mt-4 font-semibold text-ink">
              No depots match “{query.trim()}”{province ? ` in ${province}` : ""}
            </p>
            <p className="mt-1 text-sm text-muted">Check the spelling or try a nearby city.</p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:bg-canvas"
            >
              Clear search and filters
            </button>
          </div>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence initial={false} mode="popLayout">
              {results.map((p) => (
                <motion.li
                  key={p.name}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl border border-line bg-surface p-5 shadow-card"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-ink">{p.name}</h3>
                    <span className="rounded-full bg-canvas px-2.5 py-0.5 text-xs font-medium text-muted">
                      {p.depots.length} {p.depots.length === 1 ? "depot" : "depots"}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1">
                    {p.depots.map((depot) => (
                      <li key={depot.city} data-depot>
                        <a
                          href={depot.href}
                          className="group -mx-2 flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm text-ink-soft transition-colors hover:bg-brand-soft hover:text-brand"
                        >
                          <MapPin aria-hidden className="size-4 shrink-0 text-brand" />
                          <span className="flex-1">{depot.city}</span>
                          <ChevronRight aria-hidden className="size-4 text-subtle opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </section>
  );
}

function FilterChip({ label, pressed, onClick }: { label: string; pressed: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        pressed ? "border-ink bg-ink text-white" : "border-line bg-surface text-ink-soft hover:border-ink-soft/40"
      }`}
    >
      {label}
    </button>
  );
}
