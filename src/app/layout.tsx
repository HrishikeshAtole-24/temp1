import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--pk-font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prowebkit.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export const viewport: Viewport = {
  themeColor: "#fcf8f2",
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
      className={sans.variable}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
