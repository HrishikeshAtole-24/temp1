"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/template";

interface NavbarProps {
  brand: React.ReactNode;
  links: NavLink[];
  cta?: { label: string; href: string };
  /** "solid" sits on a background; "overlay" starts transparent over a dark hero. */
  variant?: "solid" | "overlay";
  className?: string;
}

export function Navbar({ brand, links, cta, variant = "solid", className }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sectionIds = useMemo(
    () => links.filter((link) => link.href.startsWith("#")).map((link) => link.href.slice(1)),
    [links],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Highlight the section currently under the header. With eight or nine
   * sections on a page, knowing where you are matters more than the
   * navigation looking tidy.
   */
  useEffect(() => {
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // A band just below the header: whatever crosses it is "current".
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [sectionIds]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const floating = variant === "overlay" && !scrolled && !open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        floating
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="#top"
          className={cn("flex items-center gap-2.5", floating && "text-brand-fg")}
          onClick={() => setOpen(false)}
        >
          {brand}
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const isActive = link.href === `#${activeId}`;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-card px-3 py-2 text-sm font-medium transition-colors",
                  floating
                    ? "text-brand-fg/80 hover:text-brand-fg"
                    : isActive
                      ? "text-ink"
                      : "text-muted hover:bg-subtle hover:text-ink",
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent transition-transform duration-300",
                    isActive && !floating ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {cta ? (
            <Link
              href={cta.href}
              className="hidden h-10 items-center rounded-card bg-accent px-4 text-sm font-semibold text-accent-fg transition hover:bg-accent/90 sm:inline-flex"
            >
              {cta.label}
            </Link>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-card border transition lg:hidden",
              floating ? "border-brand-fg/25 text-brand-fg" : "border-line text-ink hover:bg-subtle",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-bg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8" aria-label="Mobile">
            <p className="pb-2 text-[11px] uppercase tracking-[0.18em] text-muted">
              {links.length} sections on this page
            </p>
            {links.map((link, index) => {
              const isActive = link.href === `#${activeId}`;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex items-center gap-3 border-b border-line/70 py-3 text-base font-medium last:border-0",
                    isActive ? "text-accent" : "text-ink",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "w-5 shrink-0 text-xs tabular-nums",
                      isActive ? "text-accent" : "text-muted",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              );
            })}
            {cta ? (
              <Link
                href={cta.href}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-card bg-accent text-sm font-semibold text-accent-fg"
              >
                {cta.label}
              </Link>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
