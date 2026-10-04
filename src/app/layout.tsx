import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--pk-font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--pk-font-serif",
});

/**
 * Neutral grotesk for the gallery chrome only. `.theme-kit` repoints
 * --pk-font-sans at it; templates keep Plus Jakarta Sans. preload is off
 * so the 21 template routes do not pay for a face they never render.
 */
const ui = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--pk-font-ui",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prowebkit.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export const viewport: Viewport = {
  themeColor: "#09090e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
     * suppressHydrationWarning is scoped to <html> and <body> on purpose.
     * Extensions such as Grammarly, password managers and theme add-ons
     * inject attributes (data-gr-ext-installed, extra classnames) into these
     * two elements before React hydrates, which React reports as a mismatch.
     * The suppression only applies one level deep, so genuine mismatches
     * anywhere inside the app are still reported.
     */
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${ui.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
