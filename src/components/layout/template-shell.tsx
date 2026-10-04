import { ReadingProgress } from "./reading-progress";
import { cn } from "@/lib/utils";

interface TemplateShellProps {
  /** Theme class from globals.css, e.g. "theme-ca". */
  theme: string;
  /** Not rendered outside the ProWebKit gallery. */
  preview?: string;
  children: React.ReactNode;
}

/**
 * Common wrapper for every template route: applies the palette, mounts the
 * long-page orientation aids.
 */
export function TemplateShell({ theme, children }: TemplateShellProps) {
  return (
    <div className={cn(theme, "bg-bg text-ink")}>
      <ReadingProgress />
      {children}
    </div>
  );
}
