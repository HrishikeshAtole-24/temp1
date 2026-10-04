import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import type { NavLink } from "@/types/template";

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

interface SiteFooterProps {
  brand: React.ReactNode;
  blurb: string;
  columns: FooterColumn[];
  legal: string;
  note?: string;
  className?: string;
}

export function SiteFooter({ brand, blurb, columns, legal, note, className }: SiteFooterProps) {
  return (
    <footer className={cn("bg-brand text-brand-fg", className)}>
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">{brand}</div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-fg/70">{blurb}</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-fg/50">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-fg/75 transition-colors hover:text-brand-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-fg/15 pt-6 text-xs text-brand-fg/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{legal}</p>
          {note ? <p>{note}</p> : null}
        </div>
      </Container>
    </footer>
  );
}
