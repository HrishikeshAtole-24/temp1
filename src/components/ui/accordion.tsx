import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/template";

/**
 * Native <details> accordion — no client JS, works without hydration and
 * stays accessible/printable by default.
 */
export function Accordion({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-base font-medium text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus
              aria-hidden
              className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
            />
          </summary>
          <p className="max-w-prose pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
