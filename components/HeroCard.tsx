"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CircleCheck,
  LoaderCircle,
  PackageSearch,
  RotateCcw,
  TriangleAlert,
} from "lucide-react";
import { contactOptions, mockTrackingEvents } from "@/data/hero";

const tabs = [
  { id: "track", label: "Track" },
  { id: "contact", label: "Contact" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function HeroCard() {
  const [activeTab, setActiveTab] = useState<TabId>("track");
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ track: null, contact: null });

  // Arrow keys move between tabs (WAI-ARIA tabs pattern, automatic activation).
  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const index = tabs.findIndex((tab) => tab.id === activeTab);
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    setActiveTab(tabs[next].id);
    tabRefs.current[tabs[next].id]?.focus();
  };

  return (
    <motion.div
      id="track"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      className="w-full"
    >
      <div role="tablist" aria-label="Track or contact" className="on-dark flex gap-1">
        {tabs.map((tab) => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[tab.id] = node;
              }}
              id={`hero-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`hero-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={onTabKeyDown}
              className={`min-w-28 rounded-t-xl px-6 py-3 text-base font-semibold transition-colors sm:min-w-36 ${
                selected ? "bg-surface text-ink" : "bg-navy/85 text-white hover:bg-navy"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={`hero-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`hero-tab-${activeTab}`}
        className="on-light rounded-b-2xl rounded-tr-2xl border border-line bg-surface p-4 shadow-lift sm:p-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {activeTab === "track" ? <TrackPanel /> : <ContactPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

type TrackState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "loading" }
  | { status: "result"; parcelNumber: string };

const PARCEL_PATTERN = /^[A-Z0-9]{6,20}$/;

function TrackPanel() {
  const [value, setValue] = useState("");
  const [state, setState] = useState<TrackState>({ status: "idle" });
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parcelNumber = value.replace(/\s+/g, "").toUpperCase();

    if (!parcelNumber) {
      setState({ status: "error", message: "Please enter a parcel number." });
      inputRef.current?.focus();
      return;
    }
    if (!PARCEL_PATTERN.test(parcelNumber)) {
      setState({ status: "error", message: "Parcel numbers use 6–20 letters or digits, e.g. FW123456789." });
      inputRef.current?.focus();
      return;
    }

    // Purely local: nothing is sent anywhere, the delay only simulates a lookup.
    setState({ status: "loading" });
    timerRef.current = setTimeout(() => setState({ status: "result", parcelNumber }), 800);
  };

  const reset = () => {
    setValue("");
    setState({ status: "idle" });
    // Wait for the form to re-render before focusing.
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  if (state.status === "result") {
    return <MockResult parcelNumber={state.parcelNumber} onReset={reset} />;
  }

  const hasError = state.status === "error";
  const isLoading = state.status === "loading";

  return (
    <form onSubmit={onSubmit} noValidate>
      <h2 className="sr-only">Track your parcel</h2>
      <label htmlFor="parcel-number" className="sr-only">
        Parcel number
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <PackageSearch aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-6 -translate-y-1/2 text-subtle" />
          <input
            ref={inputRef}
            id="parcel-number"
            name="parcel-number"
            type="text"
            inputMode="text"
            autoComplete="off"
            spellCheck={false}
            placeholder="Enter tracking number"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              if (hasError) setState({ status: "idle" });
            }}
            disabled={isLoading}
            aria-invalid={hasError}
            aria-describedby={hasError ? "parcel-error" : "parcel-hint"}
            className={`h-14 w-full rounded-xl border bg-surface pl-13 pr-4 text-lg text-ink placeholder:text-subtle transition-colors focus:outline-none focus:ring-4 disabled:opacity-60 ${
              hasError
                ? "border-brand focus:ring-brand/20"
                : "border-line focus:border-navy focus:ring-navy/15"
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-brand px-10 text-base font-semibold text-white transition-colors hover:bg-brand-hover disabled:cursor-wait disabled:opacity-80 sm:min-w-44"
        >
          {isLoading ? (
            <>
              <LoaderCircle aria-hidden className="size-4 animate-spin" />
              Tracking…
            </>
          ) : (
            <>
              Track
              <ArrowRight aria-hidden className="size-4" />
            </>
          )}
        </button>
      </div>

      <div aria-live="polite" className="mt-3 min-h-5 text-sm">
        {hasError ? (
          <p id="parcel-error" className="flex items-start gap-1.5 font-medium text-brand-bright">
            <TriangleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
            {state.message}
          </p>
        ) : isLoading ? (
          <p className="text-muted">Looking up demo data…</p>
        ) : (
          <p id="parcel-hint" className="text-subtle">
            Demo only — try any 6–20 letters or digits, e.g. FW123456789. Nothing you type is stored or sent anywhere.
          </p>
        )}
      </div>
    </form>
  );
}

function MockResult({ parcelNumber, onReset }: { parcelNumber: string; onReset: () => void }) {
  const [latest, ...history] = mockTrackingEvents;

  return (
    <div role="status" aria-live="polite">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-ink">Tracking result</h2>
        <span className="rounded-full border border-dashed border-ink-soft/40 bg-canvas px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Demo data
        </span>
      </div>
      <p className="mt-1 break-all text-sm text-muted">
        Demo tracking number: <span className="font-mono font-medium text-ink">{parcelNumber}</span>
      </p>

      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-success-soft p-4">
        <CircleCheck aria-hidden className="size-6 shrink-0 text-success" />
        <div>
          <p className="text-sm font-semibold text-ink">Status: {latest.status}</p>
          <p className="text-sm text-muted">
            Last update: {latest.location} · {latest.time}
          </p>
        </div>
      </div>

      <ol className="mt-4 space-y-3 border-l-2 border-line pl-4">
        {history.map((event) => (
          <li key={`${event.status}-${event.time}`} className="text-sm">
            <p className="font-medium text-ink-soft">{event.status}</p>
            <p className="text-subtle">
              {event.location} · {event.time}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-xs text-subtle">
        This is sample data for a practice redesign. It does not represent a real parcel.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-elevated"
      >
        <RotateCcw aria-hidden className="size-4" />
        Track another parcel
      </button>
    </div>
  );
}

function ContactPanel() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink">How can we help?</h2>
      <p className="mt-1 text-sm text-muted">Choose the quickest route to the right team.</p>
      <ul className="mt-5 grid gap-3 md:grid-cols-3">
        {contactOptions.map(({ title, description, href, icon: Icon }) => (
          <li key={title}>
            <a
              href={href}
              className="group flex h-full items-start gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-brand/40 hover:bg-brand-soft/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-bright">
                <Icon aria-hidden className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-ink">{title}</span>
                <span className="mt-0.5 block text-sm text-muted">{description}</span>
              </span>
              <ArrowRight aria-hidden className="mt-1 size-4 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-brand-bright" />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-subtle">Demo panel — no contact details are collected.</p>
    </div>
  );
}
