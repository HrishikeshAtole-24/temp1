"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Two orientation aids for long pages, sharing one rAF-throttled scroll
 * listener: a progress rail at the top of the viewport, and a back-to-top
 * control that appears once you are past the first screen.
 *
 * The rail could be pure CSS via `animation-timeline: scroll()`, but that
 * is still Chromium-only — this works everywhere for a few lines of JS.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const measure = () => {
      frame.current = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min(doc.scrollTop / scrollable, 1) : 0);
      setShowTop(doc.scrollTop > doc.clientHeight * 0.9);
    };

    const onScroll = () => {
      if (frame.current === null) frame.current = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <>
      <div
        className="pk-progress"
        style={{ transform: `scaleX(${progress})` }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      />

      <a
        href="#top"
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
        className={cn(
          "pk-to-top grid h-11 w-11 place-items-center rounded-full border border-line bg-bg text-ink shadow-lift",
          "hover:border-accent hover:text-accent",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </>
  );
}
