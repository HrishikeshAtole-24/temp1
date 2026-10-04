import type { NavLink, StatItem } from "@/types/template";

/** All copy for the site. Edit here and the page updates. */
export const studio = {
  brand: "Saurabh Waghmare",
  tagline: "Personal training, online and at home",
  founder: "Saurabh Waghmare",
  role: "Certified Personal Fitness Trainer",
  experience: "9+",
  clients: "100+",
  // TODO: replace with the client's real WhatsApp number and email.
  whatsapp: "+91 98765 43210",
  email: "hello@example.com",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Who can join", href: "#who" },
  { label: "Reviews", href: "#reviews" },
  { label: "Join the team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Online & home personal training",
  /** Rendered line by line so each can reveal on its own delay. */
  titleLines: ["Rational training.", "Scientific results.", "Built around you."],
  subtitle:
    "One-on-one coaching that combines structured exercise, strength training, nutrition guidance and individual attention — for fitness and health results that last.",
  whatsappMessage: "Hi! I would like to know more about personal training.",
  markers: [
    "Evidence-based, scientific training methods",
    "Personalized workout program and diet guidance",
    "Train online or at your home",
  ],
};

export const stats: StatItem[] = [
  { value: `${studio.experience}`, label: "Years of experience" },
  { value: `${studio.clients}`, label: "Clients trained" },
  { value: "8", label: "Certifications" },
  { value: "1:1", label: "Every session" },
];

/* ── About Me ──────────────────────────────────────────────────────── */
export const about = {
  title: "Hi, I’m Saurabh",
  paragraphs: [
    `I’m a certified personal fitness trainer with ${studio.experience} years of experience in the fitness industry, and I have trained ${studio.clients} clients with a focus on rational, evidence-based and scientific training methods.`,
    "My approach combines structured exercise, strength training, nutrition guidance and individualized coaching to help clients achieve sustainable fitness and health results.",
  ],
  certifications: [
    "Certified by Gold’s Gym Fitness Institute",
    "Certified Female Fitness Specialist",
    "Certified Special Populations Trainer",
    "Certified Knee Injury Yoga Specialist",
    "Certified Back Injury Yoga Specialist",
    "Certified PCOS/PCOD Management Trainer",
    "Certified Weight Loss Kick-Starter Specialist",
    "Certified Thyroid Management Specialist",
  ],
};

/* ── Packages ──────────────────────────────────────────────────────── */
export interface Package {
  name: string;
  sessions: string;
  prices: { label: string; price: string }[];
  includes: string[];
  footnote?: string;
  featured: boolean;
}

export const packages: Package[] = [
  {
    name: "Personal Training Package",
    sessions: "12 one-on-one sessions",
    prices: [
      { label: "Offline personal training", price: "₹12,000" },
      { label: "Online personal training", price: "₹7,500" },
    ],
    includes: ["Personalized workout program", "Diet & nutrition guidance", "Progress tracking"],
    featured: false,
  },
  {
    name: "Premium Wellness Package",
    sessions: "12 one-on-one sessions",
    prices: [{ label: "Complete package", price: "₹24,999" }],
    includes: [
      "12 one-on-one personal training sessions",
      "Scientific diet & nutrition guidance",
      "4 online yoga & breathing sessions",
      "1 full-body massage + cupping therapy session*",
      "Full-body blood work / health check-up",
      "1 psychologist consultation",
      "2 Zumba sessions",
    ],
    footnote: "*Massage & cupping currently available for male clients.",
    featured: true,
  },
];

/* ── Training requirements ─────────────────────────────────────────── */
export const requirements = {
  title: "What you need to train",
  body: "For online and home personal training, we recommend having:",
  items: ["A pair of dumbbells or resistance bands", "An exercise mat"],
  noEquipment: {
    title: "Don’t have equipment? No problem!",
    body: "We also specialize in bodyweight training, so you can get an effective workout with little or no equipment.",
  },
};

/* ── Who can join ──────────────────────────────────────────────────── */
export const whoFor = {
  title: "Who can join?",
  body: "Our training programs are suitable for people of different ages, fitness levels and backgrounds.",
  groups: [
    "Men & women",
    "Beginners & experienced individuals",
    "Senior citizens",
    "Sports persons & athletes",
    "Models & celebrities",
    "Corporate employees & working professionals",
    "Individuals looking for weight loss or muscle building",
    "People looking to improve strength, mobility & overall fitness",
    "Individuals with medical conditions or special fitness requirements",
  ],
  note: "Every program is adapted to the individual’s goals, fitness level and specific requirements.",
};

/* ── Reviews ───────────────────────────────────────────────────────── */
export const reviews = {
  title: "What our clients say",
  body: "Hear from our clients about their training experience, progress and results.",
  ask: "Your feedback matters to us. If you have trained with us, we would love to hear about your experience.",
  whatsappMessage: "Hi! I have trained with Saurabh and would like to share my review:",
};

/* ── Join the team ─────────────────────────────────────────────────── */
export const team = {
  title: "Work with us",
  body: "We are building a team of wellness professionals. If you are one of the following, share your details and we will be in touch.",
  roles: [
    "Certified Personal Trainers",
    "Female Fitness Specialists",
    "Yoga & Mobility Specialists",
    "Nutrition Professionals",
    "Physiotherapists",
    "Psychologists",
    "Other Wellness Specialists",
  ],
};

/* ── Enquiry ───────────────────────────────────────────────────────── */
export const enquiryGoals = [
  "Weight loss",
  "Muscle building",
  "Strength & mobility",
  "Overall fitness",
  "Female fitness / PCOS / thyroid",
  "Injury or medical condition",
  "Sports performance",
  "Not sure yet",
];
