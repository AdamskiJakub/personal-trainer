"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blokada scrolla, gdy menu mobile jest otwarte
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "border-b border-transparent bg-ink"
          : scrolled
            ? "border-b border-line bg-ink/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo / nazwa */}
        <a
          href="/"
          className="min-w-0 truncate font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper"
        >
          {site.name}
        </a>

        {/* Nawigacja desktop */}
        <nav
          aria-label="Nawigacja główna"
          className="hidden items-center md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 text-sm text-muted transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink
            href="#kontakt"
            variant="primary"
            size="md"
            className="ml-4"
          >
            Umów konsultację
          </ButtonLink>
        </nav>

        {/* Przycisk menu mobile */}
        <button
          type="button"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-paper transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Pełnoekranowe menu mobile */}
      <div
        className={`fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto bg-ink transition-all duration-300 ease-out md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Menu mobilne"
          className="flex flex-1 flex-col justify-center gap-1 px-6 py-6"
        >
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`cursor-pointer border-b border-line py-5 font-display text-3xl font-medium tracking-tight text-paper transition-all duration-300 hover:text-muted ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="px-6 pb-10">
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className={`flex h-14 cursor-pointer items-center justify-center rounded-full bg-paper text-base font-medium text-ink transition-all duration-300 hover:bg-white ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${nav.length * 40}ms` : "0ms" }}
          >
            Umów konsultację
          </a>
        </div>
      </div>
    </header>
  );
}
