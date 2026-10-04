import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn, waLink } from "@/lib/utils";
import {
  about,
  certifications,
  enquiryGoals,
  faqs,
  hero,
  method,
  navLinks,
  nutrition,
  packageNotes,
  packages,
  programs,
  research,
  serviceAreas,
  session,
  stats,
  studio,
  testimonials,
  vetting,
  whoFor,
} from "./content";

const telHref = `tel:${studio.phone.replace(/[^\d+]/g, "")}`;
const wa = waLink(studio.whatsapp, hero.whatsappMessage);

/** Stagger helper — `.pk-stagger` reads --i to finish each child later. */
const stagger = (index: number) => ({ "--i": index }) as React.CSSProperties;

/** Load-in delay for above-the-fold copy. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="leading-none">
      <span className="block text-[17px] font-semibold tracking-[-0.02em]">
        Fiti<span className="text-accent">Minded</span>
      </span>
      <span
        className={cn(
          "mt-1 block text-[8.5px] uppercase tracking-[0.3em]",
          inverted ? "text-brand-fg/50" : "text-muted",
        )}
      >
        Mumbai
      </span>
    </span>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Book a consultation", href: "#contact" }} />;
}

/* ── Hero ──────────────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* soft bronze wash, sitting behind everything */}
      <div
        className="pointer-events-none absolute -right-40 -top-56 h-[720px] w-[720px] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #7A5E34, transparent)" }}
        aria-hidden
      />

      <Container className="relative py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p
              className="pk-fade flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-muted"
              style={delay(0)}
            >
              <span aria-hidden className="h-px w-7 bg-accent" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-8 text-[2.6rem] font-semibold leading-[0.96] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]">
              {hero.titleLines.map((line, index) => (
                <span
                  key={line}
                  className="pk-clip block"
                  style={delay(140 + index * 130)}
                >
                  {index === hero.titleLines.length - 1 ? (
                    <span className="text-accent">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p
              className="pk-fade mt-8 max-w-xl text-[17px] leading-[1.7] text-muted"
              style={delay(560)}
            >
              {hero.subtitle}
            </p>

            <ul className="pk-fade mt-9 space-y-3" style={delay(660)}>
              {hero.markers.map((marker) => (
                <li key={marker} className="flex items-start gap-3 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {marker}
                </li>
              ))}
            </ul>

            <div className="pk-fade mt-10 flex flex-wrap items-center gap-3" style={delay(760)}>
              <Link
                href="#contact"
                className="pk-sheen group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-card bg-brand px-6 text-sm font-medium text-brand-fg transition-opacity hover:opacity-95"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-card border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Portrait plate — swap the inner span for a photograph */}
          <div className="pk-fade pk-zoom relative overflow-hidden rounded-card border border-line bg-subtle" style={delay(420)}>
            <span className="block aspect-[4/5] w-full bg-brand-soft" aria-hidden />
            <div className="absolute inset-x-5 bottom-5 rounded-card border border-line bg-bg/90 p-5 backdrop-blur-sm">
              <p className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{studio.founder}</p>
              <p className="mt-0.5 text-sm text-accent">{studio.role}</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                Police-verified, insured, NDA on request
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-line bg-surface">
        <Container>
          <dl className="pk-stagger grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
            {stats.map((stat, index) => (
              <div key={stat.label} style={stagger(index)} className="flex flex-col-reverse px-2 py-7 sm:px-6">
                <dt className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </dt>
                <dd className="text-[1.75rem] font-semibold tabular-nums tracking-[-0.03em] text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}

/* ── The method + who it is for ────────────────────────────────────── */
export function Method() {
  return (
    <Section id="method">
      <div className="grid gap-12 lg:grid-cols-[21rem_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading eyebrow="The method" title={method.title} description={method.body} />
        </div>

        <ol className="pk-stagger -mt-6">
          {method.pillars.map((pillar, index) => (
            <li
              key={pillar.index}
              style={stagger(index)}
              className="grid grid-cols-[2.75rem_1fr] gap-x-5 border-b border-line py-7 last:border-0 sm:gap-x-8"
            >
              <span className="pt-1 text-sm tabular-nums text-accent">{pillar.index}</span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">{pillar.title}</h3>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{pillar.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function WhoFor() {
  return (
    <Section id="who" tone="surface" space="compact">
      <SectionHeading eyebrow="Who it is for" title="Six situations this suits" />
      <div className="pk-stagger mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {whoFor.map((item, index) => (
          <div key={item.who} style={stagger(index)} className="border-t border-ink/20 pt-5">
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{item.who}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Training Programs ─────────────────────────────────────────────── */
export function Programs() {
  return (
    <Section id="programs">
      <SectionHeading
        eyebrow="Training programs"
        title="Eight ways we work"
        description="Every one begins with the same complimentary consultation at your home, and every one is coached one to one unless you ask otherwise."
      />

      <div className="pk-stagger mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, index) => (
          <article
            key={program.name}
            style={stagger(index)}
            className={cn(
              "group relative bg-bg p-7 transition-colors duration-300 hover:bg-surface",
              program.featured && "bg-brand-soft",
            )}
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent">{program.mode}</p>
            <h3 className="mt-4 text-lg font-semibold tracking-[-0.015em] text-ink">
              {program.name}
            </h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{program.detail}</p>
            <ArrowUpRight
              className="mt-5 h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              aria-hidden
            />
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── How a session runs ────────────────────────────────────────────── */
export function Sessions() {
  return (
    <Section id="sessions" tone="surface">
      <SectionHeading
        eyebrow="How it runs"
        title="From first call to the fourth block"
        description="Written down so you know what happens before you commit to anything, and so we can be held to it afterwards."
      />

      <ol className="relative mt-12 pl-10 sm:pl-14">
        {/* the rail draws itself as the section scrolls past */}
        <span
          aria-hidden
          className="pk-rail absolute left-[0.6875rem] top-2 h-[calc(100%-1rem)] w-px bg-accent/45 sm:left-[1.1875rem]"
        />
        <div className="pk-stagger">
          {session.map((item, index) => (
            <li key={item.step} style={stagger(index)} className="relative list-none pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-10 top-1 grid h-6 w-6 place-items-center rounded-full border border-accent/50 bg-bg text-[10px] font-semibold tabular-nums text-accent sm:-left-14 sm:h-8 sm:w-8 sm:text-xs"
              >
                {item.step}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">{item.title}</h3>
                <span className="text-[11px] uppercase tracking-[0.16em] text-accent">
                  {item.duration}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </div>
      </ol>
    </Section>
  );
}

/* ── Packages ──────────────────────────────────────────────────────── */
export function Packages() {
  return (
    <Section id="packages">
      <SectionHeading
        eyebrow="Packages"
        title="Priced by sessions, published in full"
        description="Session frequency is the only variable. Nutrition, travel within our areas, re-tests and reporting are included in every tier."
      />

      <div className="pk-stagger mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-start">
        {packages.map((pack, index) => (
          <article
            key={pack.name}
            style={stagger(index)}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-7 transition-transform duration-300 hover:-translate-y-1",
              pack.featured ? "border-accent shadow-lift" : "border-line",
            )}
          >
            {pack.featured ? (
              <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-fg">
                Most chosen
              </span>
            ) : null}

            <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">{pack.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-accent">{pack.sessions}</p>

            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-[2rem] font-semibold tabular-nums tracking-[-0.03em] text-ink">
                {pack.price}
              </span>
              <span className="text-sm text-muted">{pack.cadence}</span>
            </p>
            <p className="mt-1 text-xs tabular-nums text-muted">{pack.per}</p>

            <p className="mt-5 text-sm leading-relaxed text-muted">{pack.suits}</p>

            <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5">
              {pack.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className={cn(
                "mt-7 inline-flex h-11 w-full items-center justify-center rounded-card text-sm font-medium transition",
                pack.featured
                  ? "pk-sheen relative overflow-hidden bg-brand text-brand-fg hover:opacity-95"
                  : "border border-line text-ink hover:border-accent hover:text-accent",
              )}
            >
              Enquire
            </Link>
          </article>
        ))}
      </div>

      <ul className="mt-8 grid gap-2.5 rounded-card border border-line bg-surface p-6 sm:grid-cols-2">
        {packageNotes.map((note) => (
          <li key={note} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {note}
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ── About Me + Certifications ─────────────────────────────────────── */
export function About() {
  return (
    <Section id="about" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="About me" title={about.title} />
          <div className="mt-7 space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 22)} className="text-[15px] leading-[1.8] text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="pk-stagger mt-9 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {about.principles.map((principle, index) => (
              <div key={principle.label} style={stagger(index)} className="bg-bg p-5">
                <dt className="text-sm font-semibold text-ink">{principle.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{principle.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="certifications">
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted">
            <span aria-hidden className="h-px w-6 bg-accent" />
            Certifications
          </p>

          <ul className="mt-6 divide-y divide-line border-y border-line">
            {certifications.map((certification) => (
              <li key={certification.title} className="py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[15px] font-medium tracking-[-0.01em] text-ink">
                    {certification.title}
                  </p>
                  <span className="shrink-0 text-xs tabular-nums text-muted">
                    {certification.year}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">
                  {certification.body}
                </p>
                <p className="mt-1 text-sm text-muted">{certification.holder}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-9 text-sm font-semibold text-ink">Vetting and cover</h3>
          <ul className="mt-4 space-y-2.5">
            {vetting.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ── Nutrition & Diet ──────────────────────────────────────────────── */
export function Nutrition() {
  return (
    <Section id="nutrition" tone="brand">
      <div className="grid gap-12 lg:grid-cols-[21rem_1fr] lg:gap-20">
        <SectionHeading inverted eyebrow="Nutrition & diet" title={nutrition.title} description={nutrition.body} />

        <div>
          <dl className="pk-stagger divide-y divide-brand-fg/15 border-y border-brand-fg/15">
            {nutrition.points.map((point, index) => (
              <div key={point.title} style={stagger(index)} className="grid gap-2 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8">
                <dt className="text-[15px] font-medium text-brand-fg">{point.title}</dt>
                <dd className="text-[15px] leading-relaxed text-brand-fg/70">{point.body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-7 text-sm leading-relaxed text-brand-fg/60">{nutrition.note}</p>
        </div>
      </div>
    </Section>
  );
}

/* ── Research & Knowledge ──────────────────────────────────────────── */
export function Research() {
  return (
    <Section id="research">
      <SectionHeading eyebrow="Research & knowledge" title={research.title} description={research.body} />

      <div className="pk-stagger mt-10 grid gap-x-16 gap-y-8 lg:grid-cols-2">
        {research.entries.map((entry, index) => (
          <article key={entry.q} style={stagger(index)} className="border-t border-line pt-5">
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{entry.q}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{entry.a}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── Client Testimonials ───────────────────────────────────────────── */
export function Testimonials() {
  return (
    <Section id="testimonials" tone="surface">
      <SectionHeading
        eyebrow="Client testimonials"
        title="Attributed by role, never by name"
        description="A discretion policy is only worth something if it survives the marketing page. Ours does."
      />

      <div className="pk-stagger mt-10 grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <figure
            key={testimonial.role}
            style={stagger(index)}
            className="flex flex-col rounded-card border border-line bg-bg p-7"
          >
            <span aria-hidden className="text-3xl leading-none text-accent">
              &ldquo;
            </span>
            <blockquote className="mt-3 flex-1 text-[15px] leading-[1.75] text-ink">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-4">
              <span className="block text-sm font-medium text-ink">{testimonial.author}</span>
              <span className="block text-xs text-muted">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Location & service areas ──────────────────────────────────────── */
export function ServiceAreas() {
  return (
    <Section id="location" containerClassName="relative">
      <SectionHeading eyebrow="Location" title={serviceAreas.title} description={serviceAreas.body} />

      {/* Ticker of neighbourhoods. The list is duplicated so the loop is seamless. */}
      <div className="pk-marquee relative mt-10 overflow-hidden border-y border-line py-5">
        <div className="pk-marquee-track flex w-max items-center gap-10">
          {[...serviceAreas.areas, ...serviceAreas.areas].map((area, index) => (
            <span
              key={`${area}-${index}`}
              aria-hidden={index >= serviceAreas.areas.length}
              className="flex shrink-0 items-center gap-10 text-lg font-medium tracking-[-0.01em] text-ink"
            >
              {area}
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
            </span>
          ))}
        </div>
        {/* fades so the ticker dissolves at both edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24"
          style={{ background: "linear-gradient(90deg, rgb(var(--pk-bg)), transparent)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          style={{ background: "linear-gradient(270deg, rgb(var(--pk-bg)), transparent)" }}
          aria-hidden
        />
      </div>

      <dl className="pk-stagger mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {serviceAreas.tiers.map((tier, index) => (
          <div key={tier.tier} style={stagger(index)} className="bg-bg p-6">
            <dt className="flex items-center gap-2 text-sm font-semibold text-ink">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {tier.tier}
            </dt>
            <dd>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{tier.detail}</p>
              <p className="mt-3 text-xs text-accent">{tier.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/* ── WhatsApp ──────────────────────────────────────────────────────── */
export function WhatsAppBand() {
  return (
    <Section id="whatsapp" space="compact">
      <div className="flex flex-col items-start gap-7 rounded-card border border-accent/35 bg-accent-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink">
            Message the concierge
          </h2>
          <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-muted">
            Tell us your address, your goal and the hours you can train. You will have a reply,
            an honest view on whether we can help, and a consultation slot — usually the same day.
          </p>
        </div>
        <Link
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="pk-sheen group relative inline-flex h-12 shrink-0 items-center gap-2.5 overflow-hidden rounded-card bg-brand px-6 text-sm font-medium text-brand-fg transition-opacity hover:opacity-95"
        >
          <MessageCircle className="h-4 w-4" />
          {studio.whatsapp}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Section>
  );
}

/* ── Contact Me ────────────────────────────────────────────────────── */
export function Contact() {
  return (
    <Section id="contact" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Questions" title="Before you enquire" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">WhatsApp</dt>
                <dd className="mt-0.5">
                  <a href={wa} target="_blank" rel="noreferrer" className="pk-link text-ink">
                    {studio.whatsapp}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Concierge</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="pk-link text-ink">
                    {studio.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Studio office</dt>
                <dd className="mt-0.5 text-ink">
                  {studio.office.line1}, {studio.office.line2}
                  <br />
                  {studio.office.city}
                  <br />
                  <span className="text-muted">{studio.hours}</span>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-bg p-8 sm:p-10"
          action={`mailto:${studio.email}`}
          method="post"
          encType="text/plain"
          aria-label="Consultation enquiry"
        >
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink">Contact me</h2>
          <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
            The consultation is sixty minutes at your home and costs nothing. If the space or the
            goal is not a fit, we will tell you then rather than take a booking.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="fm-name">
              <Input id="fm-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Phone / WhatsApp" htmlFor="fm-phone">
              <Input id="fm-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98204 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="fm-email" className="mt-5">
            <Input id="fm-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Goal" htmlFor="fm-goal">
              <Select id="fm-goal" name="goal" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {enquiryGoals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Area" htmlFor="fm-area">
              <Input id="fm-area" name="area" placeholder="Worli, Bandra West…" />
            </Field>
          </div>

          <Field
            label="When can you train, and what should we know?"
            htmlFor="fm-notes"
            hint="Preferred hours, the space you have, and any injury or medical condition."
            className="mt-5"
          >
            <Textarea
              id="fm-notes"
              name="notes"
              rows={4}
              placeholder="Free before 07:30 on weekdays, small living room, recovering from a knee arthroscopy…"
            />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="pk-sheen relative mt-8 w-full overflow-hidden">
            Request a consultation
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            Prefer WhatsApp? Message {studio.whatsapp} instead.
          </p>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${studio.tagline}. A private at-home personal training practice in Mumbai since ${studio.since}. Twelve salaried coaches, capped at fourteen clients each.`}
      columns={[
        {
          title: "Programs",
          links: [
            { label: "Personal training", href: "#programs" },
            { label: "Online training", href: "#programs" },
            { label: "Weight loss", href: "#programs" },
            { label: "Female fitness", href: "#programs" },
            { label: "Couple & family", href: "#programs" },
            { label: "Corporate wellness", href: "#programs" },
          ],
        },
        {
          title: "Practice",
          links: [
            { label: "The method", href: "#method" },
            { label: "Packages", href: "#packages" },
            { label: "About me", href: "#about" },
            { label: "Certifications", href: "#certifications" },
            { label: "Nutrition & diet", href: "#nutrition" },
            { label: "Research & knowledge", href: "#research" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: `WhatsApp ${studio.whatsapp}`, href: wa },
            { label: studio.phone, href: telHref },
            { label: studio.email, href: `mailto:${studio.email}` },
            { label: studio.office.city, href: "#location" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${studio.brand}. Coaching is not medical advice. Clients with a managed condition train only with written clearance from their treating doctor.`}
    />
  );
}
