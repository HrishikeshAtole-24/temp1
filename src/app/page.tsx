import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  About,
  Contact,
  Expertise,
  Footer,
  Header,
  Hero,
  Packages,
  Requirements,
  Research,
  Reviews,
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
        <Expertise />
        <Packages />
        <WhoFor />
        <Requirements />
        <Research />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </TemplateShell>
  );
}
