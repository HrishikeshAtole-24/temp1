"use client";

import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  Instagram,
  Lock,
  MapPin,
  MessageCircle,
  Sparkles,
  Target,
  User,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import { cn, waLink } from "@/lib/utils";

const icons = {
  user: User,
  briefcase: Briefcase,
  map: MapPin,
  instagram: Instagram,
  award: Award,
  calendar: Calendar,
  target: Target,
  sparkles: Sparkles,
  join: UserPlus,
} satisfies Record<string, LucideIcon>;

type IconName = keyof typeof icons;

export interface FormField {
  name: string;
  label: string;
  type?: "text" | "tel" | "number" | "url";
  placeholder?: string;
  /** Two or three options render as pill toggles, more as a dropdown. */
  options?: string[];
  icon?: IconName;
  required?: boolean;
  /** Spans both columns on wide screens. */
  wide?: boolean;
}

interface WhatsAppFormProps {
  id: string;
  phone: string;
  title: string;
  subtitle: string;
  icon: IconName;
  /** First line of the WhatsApp message, before the field values. */
  heading: string;
  fields: FormField[];
  submitLabel: string;
  className?: string;
}

const control =
  "h-12 w-full rounded-xl border border-line bg-surface text-[15px] text-ink placeholder:text-muted/60 transition focus:border-accent focus:bg-bg focus:outline-none focus:ring-4 focus:ring-accent/15";

/**
 * Collects the fields and opens WhatsApp with them pre-filled, so the
 * enquiry arrives in the format the trainer already asks for.
 */
export function WhatsAppForm({
  id,
  phone,
  title,
  subtitle,
  icon,
  heading,
  fields,
  submitLabel,
  className,
}: WhatsAppFormProps) {
  const HeaderIcon = icons[icon];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = fields.map((field) => `${field.label}: ${String(data.get(field.name) ?? "").trim() || "-"}`);
    window.open(waLink(phone, [heading, "", ...lines].join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cn("relative overflow-hidden rounded-2xl border border-line bg-bg shadow-lift", className)}
    >
      {/* warm header band */}
      <div className="relative overflow-hidden border-b border-line bg-gradient-to-br from-accent-soft via-accent-soft/60 to-bg px-7 py-7 sm:px-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-2xl"
        />
        <div className="relative flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-fg shadow-soft">
            <HeaderIcon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">{title}</h3>
            <p className="mt-0.5 text-sm text-muted">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 px-7 py-8 sm:grid-cols-2 sm:px-9">
        {fields.map((field) => {
          const fieldId = `${id}-${field.name}`;
          const Icon = field.icon ? icons[field.icon] : null;
          const label = (
            <>
              {field.label}
              {field.required ? <span className="text-accent"> *</span> : null}
            </>
          );

          if (field.options && field.options.length <= 3) {
            return (
              <fieldset key={field.name} className={cn(field.wide && "sm:col-span-2")}>
                <legend className="mb-2 text-sm font-medium text-ink">{label}</legend>
                <div className="flex gap-2">
                  {field.options.map((option, index) => (
                    <label
                      key={option}
                      className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-xl border border-line bg-surface text-[15px] font-medium text-muted transition hover:border-accent/50 has-[:checked]:border-accent has-[:checked]:bg-accent-soft has-[:checked]:text-accent has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent/15"
                    >
                      <input
                        type="radio"
                        name={field.name}
                        value={option}
                        required={field.required && index === 0}
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
            );
          }

          return (
            <div key={field.name} className={cn(field.wide && "sm:col-span-2")}>
              <label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-ink">
                {label}
              </label>
              <div className="group relative">
                {Icon ? (
                  <Icon
                    aria-hidden
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted/70 transition-colors group-focus-within:text-accent"
                  />
                ) : null}
                {field.options ? (
                  <select
                    id={fieldId}
                    name={field.name}
                    defaultValue=""
                    required={field.required}
                    className={cn(control, "appearance-none pr-10", Icon ? "pl-10" : "pl-4")}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={fieldId}
                    name={field.name}
                    type={field.type ?? "text"}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={cn(control, "pr-4", Icon ? "pl-10" : "pl-4")}
                  />
                )}
                {field.options ? (
                  <svg
                    aria-hidden
                    viewBox="0 0 20 20"
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                ) : null}
              </div>
            </div>
          );
        })}

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="pk-sheen group relative mt-2 inline-flex h-14 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-accent text-base font-semibold text-accent-fg shadow-soft transition hover:bg-accent/90 active:translate-y-px"
          >
            <MessageCircle className="h-5 w-5" />
            {submitLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
            <Lock className="h-3 w-3" />
            Opens WhatsApp with your details filled in — nothing is stored.
          </p>
        </div>
      </div>
    </form>
  );
}
