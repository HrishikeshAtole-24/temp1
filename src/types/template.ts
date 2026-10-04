import type { LucideIcon } from "lucide-react";

export type TemplateCategory =
  | "ca"
  | "doctor"
  | "lawyer"
  | "architect"
  | "real-estate"
  | "education"
  | "fashion"
  | "fitness"
  | "photography"
  | "talent";

export interface TemplateMeta {
  /** Unique id, also the folder name under src/templates. */
  slug: string;
  category: TemplateCategory;
  /** Display name of the template itself, e.g. "Corporate CA". */
  name: string;
  /** The fictional business the demo is built around. */
  demoBrand: string;
  description: string;
  /** Route the live preview is served from. */
  href: string;
  /** Theme class from globals.css applied to the template root. */
  themeClass: string;
  /** Two hex stops used to render the gallery card preview. */
  swatch: [string, string];
  sections: string[];
  status: "stable" | "beta";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  points?: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}
