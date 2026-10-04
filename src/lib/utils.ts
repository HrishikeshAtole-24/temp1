import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, letting later Tailwind utilities win. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** "Priya Sharma" -> "PS". Used for avatar fallbacks so no image is needed. */
export function initials(name: string) {
  return name
    .replace(/(Dr\.|Adv\.|CA|Mr\.|Ms\.|Mrs\.)\s*/gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * wa.me deep link. Strips formatting from the number and pre-fills the
 * first message, so an enquiry arrives with context instead of "hi".
 */
export function waLink(phone: string, message?: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}
