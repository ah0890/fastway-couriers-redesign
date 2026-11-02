"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, ShieldAlert, X } from "lucide-react";
import Logo from "@/components/Logo";
import { navGroups, primaryCta, scamAlertLink, type NavGroup } from "@/data/navigation";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const desktopNavRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Close desktop dropdowns on outside click.
  useEffect(() => {
    if (!openDropdown) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openDropdown]);

  // Mobile menu: Escape closes, body scroll locks, and widening to desktop resets it.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 80rem)");
    const onChange = () => desktop.matches && setMobileOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4 xl:h-[4.5rem]">
        <a href="#top" className="shrink-0 rounded-md">
          <Logo />
        </a>

        <ul ref={desktopNavRef} className="hidden items-center gap-1 xl:flex">
          {navGroups.map((group) => (
            <DesktopDropdown
              key={group.id}
              group={group}
              isOpen={openDropdown === group.id}
              onOpenChange={(open) => setOpenDropdown(open ? group.id : null)}
            />
          ))}
        </ul>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={scamAlertLink.href}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand-soft"
          >
            <ShieldAlert aria-hidden className="size-4" />
            {scamAlertLink.label}
          </a>
          <a
            href={primaryCta.href}
            className="inline-flex items-center whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover"
          >
            {primaryCta.label}
          </a>
        </div>

        <button
          ref={hamburgerRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-canvas xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onNavigate={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

function DesktopDropdown({
  group,
  isOpen,
  onOpenChange,
}: {
  group: NavGroup;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = `nav-menu-${group.id}`;

  return (
    <li
      className="relative"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          onOpenChange(false);
          triggerRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        // Close when keyboard focus moves outside this item.
        if (isOpen && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onOpenChange(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => onOpenChange(!isOpen)}
        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-canvas hover:text-ink ${
          isOpen ? "bg-canvas text-ink" : "text-ink-soft"
        }`}
      >
        {group.label}
        <ChevronDown
          aria-hidden
          className={`size-4 text-subtle transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 pt-2"
          >
            <ul className="min-w-56 rounded-2xl border border-line bg-surface p-2 shadow-lift">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => onOpenChange(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-ink-soft transition-colors hover:bg-canvas hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      id="mobile-nav"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="overflow-hidden border-t border-line bg-surface xl:hidden"
    >
      <div className="container-page h-[calc(100dvh-4rem)] overflow-y-auto pb-6 pt-2">
        <ul className="divide-y divide-line">
          {navGroups.map((group) => {
            const isOpen = expanded === group.id;
            const panelId = `mobile-group-${group.id}`;
            return (
              <li key={group.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setExpanded(isOpen ? null : group.id)}
                  className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-ink"
                >
                  {group.label}
                  <ChevronDown
                    aria-hidden
                    className={`size-5 text-subtle transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      id={panelId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden"
                    >
                      {group.links.map((link) => (
                        <li key={link.label} className="last:mb-3">
                          <a
                            href={link.href}
                            onClick={onNavigate}
                            className="block rounded-lg py-2.5 pl-4 text-sm text-muted hover:text-brand"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href={scamAlertLink.href}
            onClick={onNavigate}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/30 px-5 py-3 text-sm font-medium text-brand"
          >
            <ShieldAlert aria-hidden className="size-4" />
            {scamAlertLink.label}
          </a>
          <a
            href={primaryCta.href}
            onClick={onNavigate}
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
          >
            {primaryCta.label}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
