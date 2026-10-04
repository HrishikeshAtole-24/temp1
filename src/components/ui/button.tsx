import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "inverted";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-card font-semibold transition-[transform,background-color,color,box-shadow] duration-200 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-brand-fg hover:bg-brand/90 shadow-soft",
  accent: "bg-accent text-accent-fg hover:bg-accent/90 shadow-soft",
  outline: "border border-line bg-bg text-ink hover:border-brand hover:text-brand",
  ghost: "text-ink hover:bg-subtle",
  inverted: "bg-brand-fg text-brand hover:bg-brand-fg/90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
  variant?: Variant;
  size?: Size;
}

export function ButtonLink({ className, variant = "primary", size = "md", ...props }: ButtonLinkProps) {
  return <Link className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
