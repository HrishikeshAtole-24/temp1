import type { Config } from "tailwindcss";

/**
 * Colors resolve to CSS variables so a single utility (`bg-brand`) renders
 * differently per template. Each template scopes its palette with a
 * `.theme-*` class defined in `src/app/globals.css`.
 */
const withVar = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: withVar("--pk-bg"),
        surface: withVar("--pk-surface"),
        subtle: withVar("--pk-subtle"),
        line: withVar("--pk-line"),
        ink: withVar("--pk-ink"),
        muted: withVar("--pk-muted"),
        brand: {
          DEFAULT: withVar("--pk-brand"),
          soft: withVar("--pk-brand-soft"),
          fg: withVar("--pk-brand-fg"),
        },
        accent: {
          DEFAULT: withVar("--pk-accent"),
          soft: withVar("--pk-accent-soft"),
          fg: withVar("--pk-accent-fg"),
        },
      },
      fontFamily: {
        sans: ["var(--pk-font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--pk-font-serif)", "ui-serif", "Georgia", "serif"],
      },
      borderRadius: {
        card: "var(--pk-radius)",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.16)",
        lift: "0 2px 4px rgb(15 23 42 / 0.05), 0 24px 48px -24px rgb(15 23 42 / 0.28)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
