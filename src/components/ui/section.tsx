import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  size?: "default" | "wide" | "narrow";
  tone?: "default" | "surface" | "subtle" | "brand";
  /** Vertical rhythm. "compact" for short sections that do not need air. */
  space?: "default" | "compact" | "loose";
  /** Hairline above the section — use between two sections of the same tone. */
  divider?: boolean;
  /** Opt out of the scroll-driven entrance (heroes handle their own). */
  noReveal?: boolean;
}

export function Section({
  className,
  containerClassName,
  size,
  tone = "default",
  space = "default",
  divider = false,
  noReveal = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-16",
        space === "compact" && "py-10 sm:py-14",
        space === "default" && "py-14 sm:py-20",
        space === "loose" && "py-16 sm:py-24",
        tone === "surface" && "bg-surface",
        tone === "subtle" && "bg-subtle",
        tone === "brand" && "bg-brand text-brand-fg",
        divider && "border-t border-line",
        !noReveal && "reveal",
        className,
      )}
      {...props}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-2.5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em]",
            align === "center" && "justify-center",
            inverted ? "text-brand-fg/70" : "text-accent",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "h-px w-6 shrink-0",
              inverted ? "bg-brand-fg/40" : "bg-accent/50",
            )}
          />
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "text-[1.75rem] font-semibold leading-[1.15] tracking-tight sm:text-4xl",
          inverted ? "text-brand-fg" : "text-ink",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-3.5 text-base leading-relaxed",
            inverted ? "text-brand-fg/75" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
