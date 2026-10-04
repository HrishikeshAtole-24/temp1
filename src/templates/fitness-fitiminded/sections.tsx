import Link from "next/link";
import { ArrowRight, Award, Check, Dumbbell, Mail, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn, waLink } from "@/lib/utils";
import {
  about,
  enquiryGoals,
  hero,
  navLinks,
  packages,
  requirements,
  reviews,
  stats,
  studio,
  team,
  whoFor,
} from "./content";
import { WhatsAppForm } from "./whatsapp-form";

const wa = waLink(studio.whatsapp, hero.whatsappMessage);

/** Stagger helper — `.pk-stagger` reads --i to finish each child later. */
const stagger = (index: number) => ({ "--i": index }) as React.CSSProperties;

/** Load-in delay for above-the-fold copy. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="leading-none">
      <span className="block text-[17px] font-semibold tracking-[-0.02em]">
        Saurabh <span className="text-accent">Waghmare</span>
      </span>
      <span
        className={cn(
          "mt-1 block text-[8.5px] uppercase tracking-[0.3em]",
          inverted ? "text-brand-fg/50" : "text-muted",
        )}
      >
        Personal training
      </span>
    </span>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Enquire now", href: "#contact" }} />;
}

/* ── Hero ──────────────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* soft warm wash, sitting behind everything */}
      <div
        className="pointer-events-none absolute -right-40 -top-56 h-[720px] w-[720px] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(var(--pk-accent)), transparent)" }}
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
                <span key={line} className="pk-clip block" style={delay(140 + index * 130)}>
                  {index === hero.titleLines.length - 1 ? <span className="text-accent">{line}</span> : line}
                </span>
              ))}
            </h1>

            <p className="pk-fade mt-8 max-w-xl text-[17px] leading-[1.7] text-muted" style={delay(560)}>
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
                href="#packages"
                className="pk-sheen group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-card bg-brand px-6 text-sm font-medium text-brand-fg transition-opacity hover:opacity-95"
              >
                View packages
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
          <div
            className="pk-fade pk-zoom relative overflow-hidden rounded-card border border-line bg-subtle"
            style={delay(420)}
          >
            <span className="block aspect-[4/5] w-full bg-brand-soft" aria-hidden />
            <div className="absolute inset-x-5 bottom-5 rounded-card border border-line bg-bg/90 p-5 backdrop-blur-sm">
              <p className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{studio.founder}</p>
              <p className="mt-0.5 text-sm text-accent">{studio.role}</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                {studio.experience} years · {studio.clients} clients trained
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
                <dt className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted">{stat.label}</dt>
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

/* ── About Me + Certifications ─────────────────────────────────────── */
export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="About me" title={about.title} />
          <div className="mt-7 space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 22)} className="text-[17px] leading-[1.8] text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div id="certifications">
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted">
            <span aria-hidden className="h-px w-6 bg-accent" />
            Certifications & specializations
          </p>
          <ul className="pk-stagger mt-6 divide-y divide-line border-y border-line">
            {about.certifications.map((certification, index) => (
              <li key={certification} style={stagger(index)} className="flex items-start gap-3 py-3.5">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-[15px] text-ink">{certification}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ── Packages ──────────────────────────────────────────────────────── */
export function Packages() {
  return (
    <Section id="packages" tone="surface">
      <SectionHeading
        eyebrow="Packages"
        title="Choose your package"
        description="Both packages are 12 one-on-one sessions, coached personally and adapted to your goals."
      />

      <div className="pk-stagger mt-10 grid gap-6 md:grid-cols-2 md:items-start">
        {packages.map((pack, index) => (
          <article
            key={pack.name}
            style={stagger(index)}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9",
              pack.featured ? "border-accent shadow-lift" : "border-line",
            )}
          >
            {pack.featured ? (
              <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-fg">
                Premium
              </span>
            ) : null}

            <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink">{pack.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-accent">{pack.sessions}</p>

            <div className="mt-6 space-y-3">
              {pack.prices.map((price) => (
                <div key={price.label} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-muted">{price.label}</span>
                  <span className="text-[1.75rem] font-semibold tabular-nums tracking-[-0.03em] text-ink">
                    {price.price}
                  </span>
                </div>
              ))}
            </div>

            <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
              {pack.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-muted">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            {pack.footnote ? <p className="mt-4 text-xs text-muted">{pack.footnote}</p> : null}

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
    </Section>
  );
}

/* ── Who can join ──────────────────────────────────────────────────── */
export function WhoFor() {
  return (
    <Section id="who">
      <SectionHeading eyebrow="Who can join" title={whoFor.title} description={whoFor.body} />
      <ul className="pk-stagger mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {whoFor.groups.map((group, index) => (
          <li key={group} style={stagger(index)} className="flex items-start gap-3 bg-bg p-6">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span className="text-[15px] font-medium text-ink">{group}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[15px] text-muted">{whoFor.note}</p>
    </Section>
  );
}

/* ── Training requirements ─────────────────────────────────────────── */
export function Requirements() {
  return (
    <Section id="requirements" tone="brand">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading inverted eyebrow="Training requirements" title={requirements.title} description={requirements.body} />
          <ul className="mt-7 space-y-3">
            {requirements.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[17px] text-brand-fg">
                <Dumbbell className="h-5 w-5 shrink-0 text-accent-soft" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="self-center rounded-card border border-brand-fg/15 p-8">
          <h3 className="text-xl font-semibold tracking-[-0.015em] text-brand-fg">{requirements.noEquipment.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-fg/75">{requirements.noEquipment.body}</p>
        </div>
      </div>
    </Section>
  );
}

/* ── Reviews ───────────────────────────────────────────────────────── */
export function Reviews() {
  return (
    <Section id="reviews" tone="surface">
      <div className="flex flex-col items-start gap-8 rounded-card border border-accent/35 bg-accent-soft p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex gap-1 text-accent" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            {reviews.title}
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-muted">{reviews.body}</p>
          <p className="mt-3 text-base leading-relaxed text-muted">{reviews.ask}</p>
        </div>
        <Link
          href={waLink(studio.whatsapp, reviews.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="pk-sheen group relative inline-flex h-12 shrink-0 items-center gap-2.5 overflow-hidden rounded-card bg-brand px-6 text-sm font-medium text-brand-fg transition-opacity hover:opacity-95"
        >
          Share your review
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Section>
  );
}

/* ── Join the team ─────────────────────────────────────────────────── */
export function Team() {
  return (
    <Section id="team">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Join the team" title={team.title} description={team.body} />
          <ul className="pk-stagger mt-8 flex flex-wrap gap-2.5">
            {team.roles.map((role, index) => (
              <li
                key={role}
                style={stagger(index)}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>

        <WhatsAppForm
          id="team"
          phone={studio.whatsapp}
          title="Apply to join"
          subtitle="Takes less than a minute."
          icon="join"
          heading="Hi! I would like to join your team."
          submitLabel="Send my details"
          className="h-fit"
          fields={[
            { name: "name", label: "Name", icon: "user", placeholder: "Your full name", required: true },
            { name: "profession", label: "Career / Profession", icon: "briefcase", placeholder: "e.g. Physiotherapist", required: true },
            { name: "location", label: "Location", icon: "map", placeholder: "Your city", required: true },
            { name: "instagram", label: "Instagram Profile", icon: "instagram", placeholder: "@yourhandle" },
            { name: "certification", label: "Certification", icon: "award", placeholder: "Your certifications", wide: true },
          ]}
        />
      </div>
    </Section>
  );
}

/* ── Contact ───────────────────────────────────────────────────────── */
export function Contact() {
  return (
    <Section id="contact" tone="surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start your training"
            description="Share a few details and we will get back to you shortly."
          />
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
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${studio.email}`} className="pk-link text-ink">
                    {studio.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <WhatsAppForm
          id="enquiry"
          phone={studio.whatsapp}
          title="Enquire now"
          subtitle="We will get back to you shortly."
          icon="sparkles"
          heading="Hi! I would like to enquire about personal training."
          submitLabel="Send enquiry"
          className="h-fit"
          fields={[
            { name: "name", label: "Name", icon: "user", placeholder: "Your full name", required: true },
            { name: "age", label: "Age", type: "number", icon: "calendar", placeholder: "e.g. 28", required: true },
            { name: "mode", label: "Online / Offline", options: ["Online", "Offline"], required: true },
            { name: "location", label: "Location", icon: "map", placeholder: "Your city / area", required: true },
            { name: "goal", label: "Fitness Goal", icon: "target", options: enquiryGoals, required: true, wide: true },
          ]}
        />
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${studio.tagline}. One-on-one coaching by ${studio.founder}, with ${studio.experience} years of experience and ${studio.clients} clients trained.`}
      columns={[
        {
          title: "Training",
          links: [
            { label: "Packages", href: "#packages" },
            { label: "Who can join", href: "#who" },
            { label: "Requirements", href: "#requirements" },
          ],
        },
        {
          title: "About",
          links: [
            { label: "About me", href: "#about" },
            { label: "Certifications", href: "#certifications" },
            { label: "Reviews", href: "#reviews" },
            { label: "Join the team", href: "#team" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: `WhatsApp ${studio.whatsapp}`, href: wa },
            { label: studio.email, href: `mailto:${studio.email}` },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${studio.brand}. Coaching is not medical advice.`}
    />
  );
}
