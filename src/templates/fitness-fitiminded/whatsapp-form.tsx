"use client";

import { useState } from "react";
import {
  AlertCircle,
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
  minLength?: number;
  /** Number fields only. */
  min?: number;
  max?: number;
  /** Whole-value regex source, e.g. "[A-Za-z ]+". */
  pattern?: string;
  patternMessage?: string;
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

/** Returns an error message, or null when the value is fine. */
function validate(field: FormField, raw: string): string | null {
  const value = raw.trim();
  if (!value) {
    if (!field.required) return null;
    return field.options ? `Please select ${field.label.toLowerCase()}` : `${field.label} is required`;
  }
  if (field.minLength && value.length < field.minLength) {
    return `${field.label} must be at least ${field.minLength} characters`;
  }
  if (field.type === "number") {
    const number = Number(value);
    if (!Number.isInteger(number)) return `Enter a valid ${field.label.toLowerCase()}`;
    if ((field.min !== undefined && number < field.min) || (field.max !== undefined && number > field.max)) {
      return `${field.label} must be between ${field.min ?? 0} and ${field.max ?? "any"}`;
    }
  }
  if (field.pattern && !new RegExp(`^(?:${field.pattern})$`).test(value)) {
    return field.patternMessage ?? `Enter a valid ${field.label.toLowerCase()}`;
  }
  return null;
}

const control =
  "h-12 w-full rounded-xl border border-line bg-surface text-[15px] text-ink placeholder:text-muted/60 transition focus:border-accent focus:bg-bg focus:outline-none focus:ring-4 focus:ring-accent/15";

const invalidControl = "border-red-500 focus:border-red-500 focus:ring-red-500/15";

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found: Record<string, string> = {};
    for (const field of fields) {
      const message = validate(field, String(data.get(field.name) ?? ""));
      if (message) found[field.name] = message;
    }
    setErrors(found);

    const firstInvalid = fields.find((field) => found[field.name]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid.name}"]`)?.focus();
      return;
    }

    const lines = fields.map((field) => `${field.label}: ${String(data.get(field.name) ?? "").trim() || "-"}`);
    window.open(waLink(phone, [heading, "", ...lines].join("\n")), "_blank", "noopener,noreferrer");
  };

  /** Re-check one field and update just its error. */
  const checkField = (form: HTMLFormElement, name: string) => {
    const field = fields.find((item) => item.name === name);
    if (!field) return;
    const message = validate(field, String(new FormData(form).get(name) ?? ""));
    setErrors((current) => {
      const next = { ...current };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  };

  // Check a field when the visitor leaves it (only if they typed something),
  // and keep re-checking while they fix a field that already shows an error.
  const onBlur = (event: React.FocusEvent<HTMLFormElement>) => {
    const target = event.target as unknown as HTMLInputElement;
    if (target.type !== "radio" && target.value?.trim()) checkField(event.currentTarget, target.name);
  };

  const onChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    if (errors[target.name] || target.type === "radio" || target.tagName === "SELECT") {
      checkField(event.currentTarget, target.name);
    }
  };

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onChange={onChange}
      onBlur={onBlur}
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
          const error = errors[field.name];
          const errorId = `${fieldId}-error`;
          const label = (
            <>
              {field.label}
              {field.required ? <span className="text-accent"> *</span> : null}
            </>
          );
          const errorText = error ? (
            <p id={errorId} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {error}
            </p>
          ) : null;

          if (field.options && field.options.length <= 3) {
            return (
              <fieldset
                key={field.name}
                aria-describedby={error ? errorId : undefined}
                className={cn(field.wide && "sm:col-span-2")}
              >
                <legend className="mb-2 text-sm font-medium text-ink">{label}</legend>
                <div className="flex gap-2">
                  {field.options.map((option) => (
                    <label
                      key={option}
                      className={cn(
                        "flex min-h-12 flex-1 cursor-pointer flex-col items-center justify-center rounded-xl border bg-surface px-2 py-1.5 text-center text-[15px] font-medium leading-tight text-muted transition hover:border-accent/50 has-[:checked]:border-accent has-[:checked]:bg-accent-soft has-[:checked]:text-accent has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent/15",
                        error ? "border-red-500" : "border-line",
                      )}
                    >
                      <input type="radio" name={field.name} value={option} className="sr-only" />
                      {/* "Offline (Mumbai only)" shows the bracket as a small second line */}
                      {option.split(" (")[0]}
                      {option.includes(" (") ? (
                        <span className="mt-0.5 text-[11px] font-normal opacity-80">
                          {option.slice(option.indexOf(" (") + 2, -1)}
                        </span>
                      ) : null}
                    </label>
                  ))}
                </div>
                {errorText}
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
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? errorId : undefined}
                    className={cn(control, "appearance-none pr-10", Icon ? "pl-10" : "pl-4", error && invalidControl)}
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
                    min={field.min}
                    max={field.max}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? errorId : undefined}
                    className={cn(control, "pr-4", Icon ? "pl-10" : "pl-4", error && invalidControl)}
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
              {errorText}
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
