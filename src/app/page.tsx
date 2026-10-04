import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Method,
  Nutrition,
  Packages,
  Programs,
  Research,
  ServiceAreas,
  Sessions,
  Testimonials,
  WhatsAppBand,
  WhoFor,
} from "@/templates/fitness-fitiminded/sections";
import { studio } from "@/templates/fitness-fitiminded/content";

export const metadata: Metadata = {
  title: `${studio.brand} — ${studio.tagline}, Mumbai`,
  description:
    "Private at-home personal training across Worli, Lower Parel, Bandra, Juhu and South Mumbai. One assigned coach, equipment brought to you, published session pricing, nutrition included.",
  openGraph: {
    title: `${studio.brand} — Elite personal training at your address`,
    description:
      "At-home personal training in Mumbai. Same coach every session, equipment carried in, packages priced by session.",
    type: "website",
  },
};

export default function FitiMindedTemplate() {
  return (
    <TemplateShell theme="theme-fitiminded">
      <Header />
      <main>
        <Hero />
        <Method />
        <WhoFor />
        <Programs />
        <Sessions />
        <Packages />
        <About />
        <Nutrition />
        <Research />
        <Testimonials />
        <ServiceAreas />
        <WhatsAppBand />
        <Contact />
      </main>
      <Footer />
    </TemplateShell>
  );
}
