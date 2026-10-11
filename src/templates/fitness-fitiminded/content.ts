import type { NavLink, StatItem } from "@/types/template";

/** All copy for the site. Edit here and the page updates. */
export const studio = {
  brand: "Saurabh Waghmare",
  tagline: "Personal training, online and at home",
  founder: "Saurabh Waghmare",
  role: "Founder & Head Coach",
  experience: "9+",
  clients: "100+",
  // TODO: replace with the client's real WhatsApp number and email.
  whatsapp: "+91 98765 43210",
  email: "hello@example.com",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Expertise", href: "#expertise" },
  { label: "Who can join", href: "#who" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Masterclass Training",
  /** Rendered line by line so each can reveal on its own delay. */
  titleLines: ["Scientific.", "Results-Driven.", "Built Around You."],
  subtitle:
    "Personalized training designed around your goals, fitness level, lifestyle, and individual needs.",
  whatsappMessage: "Hi! I would like to know more about personal training.",
  flexible: {
    eyebrow: "Flexible Training",
    title: "Train your way — online or offline",
    modes: [
      { label: "Online personal training", note: "Anywhere" },
      { label: "Offline training — at your home or gym", note: "Mumbai only" },
    ],
  },
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
  subtitle: "Founder & Head Coach",
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
export interface PackageItem {
  label: string;
  /** Short line under the label. */
  note?: string;
  /** Expandable "click here" details. */
  detail?: { title: string; heading: string; points: string[] };
}

export interface Package {
  name: string;
  sessions: string;
  prices: { label: string; note?: string; price: string }[];
  includes: PackageItem[];
  footnote?: string;
  featured: boolean;
}

const dietItem: PackageItem = {
  label: "Diet & nutrition",
  note: "Customized plan based on your goals & lifestyle",
};

export const packages: Package[] = [
  {
    name: "Personal Training Package",
    sessions: "12 one-on-one sessions",
    prices: [
      { label: "Home & gym personal training", note: "Mumbai only", price: "₹12,000" },
      { label: "Online personal training", price: "₹7,500" },
    ],
    includes: [{ label: "Personalized workout program" }, dietItem, { label: "Progress tracking" }],
    featured: false,
  },
  {
    name: "Premium Wellness Package",
    sessions: "12 one-on-one sessions",
    prices: [{ label: "Complete package", price: "₹24,999" }],
    includes: [
      { label: "12 one-on-one personal training sessions" },
      dietItem,
      {
        label: "4 online yoga & breathing sessions",
        detail: {
          title: "Online Yoga & Breathing Sessions",
          heading: "4 guided online sessions for stress management & mental well-being",
          points: [
            "Guided yoga practices",
            "Breathing & relaxation techniques",
            "Stress-management support",
            "Mind–body wellness",
          ],
        },
      },
      { label: "1 full-body massage + cupping therapy session*" },
      {
        label: "Full-body blood work / health check-up",
        detail: {
          title: "Full-Body Blood Work",
          heading: "Tests included: 88 tests",
          points: [
            "Liver Function Test (12 tests)",
            "Thyroid Profile – Total (T3, T4 & TSH Ultra-sensitive) (3 tests)",
            "Kidney Function Test Advance (11 tests)",
            "HbA1c (2 tests)",
            "Urine Routine & Microscopy Extended (21 tests)",
            "Lipid Profile (9 tests)",
            "Complete Blood Count Advance (26 tests)",
            "Blood Glucose Fasting",
            "Vitamin B12 Cyanocobalamin",
            "Vitamin D Total – 25 Hydroxy",
            "NAFLD Score",
          ],
        },
      },
      {
        label: "1 online psychologist consultation",
        detail: {
          title: "Online Psychologist Consultation",
          heading: "1 one-on-one online session for mindset, motivation & healthy habits",
          points: [
            "Fitness motivation & consistency",
            "Healthy eating habits",
            "Behaviour & lifestyle guidance",
            "Building sustainable fitness habits",
          ],
        },
      },
      { label: "2 Zumba sessions" },
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
    title: "Training at home? No equipment? No problem!",
    body: "I also specialize in bodyweight and minimal-equipment training, so you can get an effective workout with little or no equipment.",
  },
};

/* ── Training expertise ────────────────────────────────────────────── */
export const expertise = [
  "Strength & Conditioning",
  "Flexibility & Mobility",
  "HIIT Training",
  "Functional Training",
  "TRX Training",
  "Core Training",
  "Corrective & Rehabilitation Training",
  "Cardiovascular Endurance",
  "Yoga & Breathing",
  "Bodyweight Training",
  "Children’s Fitness & Height-Supportive Training",
  "Senior Citizens Fitness",
  "Bodybuilding & Muscle Building",
  "Post-Pregnancy Training",
];

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

/* ── Research & articles ───────────────────────────────────────────── */
export const research = {
  title: "The science behind the training",
  body: "Every program is built on published evidence. A few of the findings that shape how we coach:",
  articles: [
    {
      tag: "Strength",
      title: "Strength training is for every adult",
      body: "The WHO recommends muscle-strengthening activity on two or more days a week for all adults, including older adults, for its benefits to muscle, bone and metabolic health.",
      source: "WHO Guidelines on Physical Activity, 2020",
      url: "https://www.who.int/publications/i/item/9789240015128",
    },
    {
      tag: "Cardio",
      title: "150 minutes a week is the baseline",
      body: "Adults should get 150–300 minutes of moderate-intensity aerobic activity a week. Even small amounts improve health — the key is consistency.",
      source: "WHO Guidelines on Physical Activity, 2020",
      url: "https://www.who.int/publications/i/item/9789240015128",
    },
    {
      tag: "Nutrition",
      title: "Protein supports muscle gain",
      body: "A meta-analysis of 49 trials found protein intake up to about 1.6 g per kg of body weight per day increased strength-training gains in muscle mass.",
      source: "Morton et al., British Journal of Sports Medicine, 2018",
      url: "https://doi.org/10.1136/bjsports-2017-097608",
    },
    {
      tag: "Fat loss",
      title: "You can’t spot-reduce belly fat",
      body: "Six weeks of abdominal exercises alone did not reduce belly fat. Fat loss comes from an overall calorie deficit combined with whole-body training.",
      source: "Vispute et al., Journal of Strength & Conditioning Research, 2011",
      url: "https://pubmed.ncbi.nlm.nih.gov/?term=Vispute+effect+of+abdominal+exercise+on+abdominal+fat",
    },
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
