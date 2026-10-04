import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Packages,
  Requirements,
  Reviews,
  Team,
  WhoFor,
} from "@/templates/fitness-fitiminded/sections";
import { studio } from "@/templates/fitness-fitiminded/content";

export const metadata: Metadata = {
  title: `${studio.brand} — ${studio.tagline}`,
  description:
    "One-on-one online and home personal training by Saurabh Waghmare, a certified trainer with 9+ years of experience. Evidence-based workouts, diet guidance and progress tracking.",
  openGraph: {
    title: `${studio.brand} — ${studio.tagline}`,
    description: "Certified one-on-one personal training, online and at home. Packages from ₹7,500.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <TemplateShell theme="theme-fitiminded">
      <Header />
      <main>
        <Hero />
        <About />
        <Packages />
        <WhoFor />
        <Requirements />
        <Reviews />
        <Team />
        <Contact />
      </main>
      <Footer />
    </TemplateShell>
  );
}
