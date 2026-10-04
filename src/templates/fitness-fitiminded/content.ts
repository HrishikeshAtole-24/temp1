import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the FitiMinded at-home personal training template. */
export const studio = {
  brand: "FitiMinded",
  tagline: "Personal training at your address",
  founder: "Naina Shroff",
  role: "Founder & Head Coach",
  since: 2016,
  phone: "+91 22 6914 0880",
  whatsapp: "+91 98204 11880",
  email: "concierge@fitiminded.in",
  office: { line1: "Unit 9, Raghuvanshi Mills", line2: "Lower Parel", city: "Mumbai 400013" },
  hours: "Sessions 05:30–21:30 · Concierge 08:00–20:00, seven days",
};

export const navLinks: NavLink[] = [
  { label: "The method", href: "#method" },
  { label: "Programs", href: "#programs" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Knowledge", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: `Mumbai · since ${studio.since}`,
  /** Rendered line by line so each can reveal on its own delay. */
  titleLines: ["Elite coaching.", "Your address.", "No compromise."],
  subtitle:
    "A private personal training practice that comes to you. One assigned coach, equipment carried in, and a programme built for the room you actually have — whether that is a Worli high-rise or a Juhu garden.",
  whatsappMessage:
    "Hello FitiMinded, I would like to arrange a home training consultation.",
  markers: [
    "Same coach every session — never a substitute",
    "Equipment brought to you, nothing to buy",
    "Background-checked, insured, NDA on request",
  ],
};

export const stats: StatItem[] = [
  { value: "10", label: "Years in practice" },
  { value: "1,400+", label: "Sessions a year" },
  { value: "94%", label: "Client retention" },
  { value: "12", label: "Coaches, all salaried" },
];

/* ── The method: why at home ───────────────────────────────────────── */
export const method = {
  title: "The gym was never the point",
  body: "For most people the commute is what ends the habit, not the training. Removing it changes adherence more than any programme design ever will.",
  pillars: [
    {
      index: "01",
      title: "Nothing to travel to",
      body: "Forty minutes of Mumbai traffic is the single most common reason a programme dies in week six. We remove it entirely.",
    },
    {
      index: "02",
      title: "Equipment arrives with the coach",
      body: "Adjustable dumbbells, bands, a mat and whatever the block calls for. You buy nothing, and nothing has to live in your hallway.",
    },
    {
      index: "03",
      title: "One coach, start to finish",
      body: "You are assigned a coach, not a rota. They learn how you move, how you sleep and when you are lying about your step count.",
    },
    {
      index: "04",
      title: "Programmed for your room",
      body: "A ten-foot living room and a terrace are different constraints. The programme is written after we have stood in the space.",
    },
  ],
};

/* ── Who it is for ─────────────────────────────────────────────────── */
export const whoFor = [
  { who: "Senior professionals", detail: "Early calls, late meetings, and a diary that moves. Sessions are scheduled weekly, not fixed forever." },
  { who: "Parents", detail: "Train while the house is asleep or the children are at school, without arranging cover to leave the building." },
  { who: "Members 55 and over", detail: "Balance, bone density and strength, coached in the environment you actually have to move through." },
  { who: "Returning from injury", detail: "Staged return after physiotherapy discharge, run in writing with your physiotherapist." },
  { who: "Public-facing clients", detail: "Discretion as standard. NDAs signed on request, no photography, no client names published." },
  { who: "Couples & families", detail: "Two to four people in one session, priced per household rather than per person." },
];

/* ── Training Programs ─────────────────────────────────────────────── */
export const programs = [
  {
    name: "Personal Training",
    mode: "At your home",
    detail: "The core service. One-to-one, in your space, with your assigned coach and equipment carried in.",
    featured: true,
  },
  {
    name: "Online Training",
    mode: "Remote",
    detail: "For travel weeks and relocations. The same coach, same block, delivered by app with video form review.",
    featured: false,
  },
  {
    name: "Weight Loss",
    mode: "16-week block",
    detail: "A deficit you can actually hold, resistance training to protect muscle, and fortnightly measurement.",
    featured: false,
  },
  {
    name: "Muscle Building",
    mode: "20-week block",
    detail: "Periodised hypertrophy with load tracking, for clients who have plateaued on their own.",
    featured: false,
  },
  {
    name: "Female Fitness",
    mode: "Cycle & trimester aware",
    detail: "Strength-led coaching for women, including pre and post-natal blocks and perimenopause programming.",
    featured: false,
  },
  {
    name: "Special Populations",
    mode: "By assessment",
    detail: "Diabetes, hypertension, osteoporosis and post-surgical return, coordinated with your treating doctor.",
    featured: false,
  },
  {
    name: "Couple & Family",
    mode: "2–4 people",
    detail: "One session, one household rate. Programmes still written individually for each person in the room.",
    featured: false,
  },
  {
    name: "Corporate Wellness",
    mode: "On site",
    detail: "Leadership one-to-ones and small-group sessions delivered at your office, invoiced to the company.",
    featured: false,
  },
];

/* ── How a session runs ────────────────────────────────────────────── */
export const session = [
  { step: "01", title: "Consultation", duration: "Day 1 · complimentary", body: "Sixty minutes at your home. Health history, movement screen, and we measure the space we will be working in." },
  { step: "02", title: "Written programme", duration: "Within 5 days", body: "A block plan with the progression mapped out, the equipment we will bring, and what we expect week by week." },
  { step: "03", title: "Sessions begin", duration: "Ongoing", body: "Your coach arrives ten minutes early, sets up, coaches, resets the room and leaves it as they found it." },
  { step: "04", title: "Review & re-test", duration: "Every 6 weeks", body: "Strength, measurements and adherence reviewed against the plan. The block is rewritten, not repeated." },
  { step: "05", title: "Progression", duration: "Quarterly", body: "A written report of what changed, what did not, and an honest recommendation on whether to continue." },
];

/* ── Packages ──────────────────────────────────────────────────────── */
export const packages = [
  {
    name: "Foundation",
    sessions: "8 sessions",
    cadence: "per month",
    price: "₹28,000",
    per: "₹3,500 a session",
    suits: "Two sessions a week. Beginners and members 55+.",
    includes: ["Assigned coach", "Equipment brought in", "Programme updated monthly", "Nutrition targets", "WhatsApp support"],
    featured: false,
  },
  {
    name: "Signature",
    sessions: "12 sessions",
    cadence: "per month",
    price: "₹39,000",
    per: "₹3,250 a session",
    suits: "Three a week. Where most clients sit and where the results are.",
    includes: [
      "Everything in Foundation",
      "Programme updated weekly",
      "Six-weekly re-test",
      "Nutrition reviewed fortnightly",
      "Priority scheduling",
      "Two online sessions for travel weeks",
    ],
    featured: true,
  },
  {
    name: "Intensive",
    sessions: "20 sessions",
    cadence: "per month",
    price: "₹60,000",
    per: "₹3,000 a session",
    suits: "Five a week. Event preparation and fast-track blocks.",
    includes: [
      "Everything in Signature",
      "Five sessions a week",
      "Weekly nutrition review",
      "Quarterly written progress report",
      "Coordination with your physician",
    ],
    featured: false,
  },
  {
    name: "Household",
    sessions: "2–4 people",
    cadence: "per household",
    price: "On request",
    per: "Shared session rate",
    suits: "Couples and families training together.",
    includes: ["One session, one rate", "Individual programmes per person", "Scheduled around the household", "Corporate terms available"],
    featured: false,
  },
];

export const packageNotes = [
  "Rates exclude GST. There is no joining fee and no annual contract.",
  "Unused sessions roll over for one month. Cancel a session free with 12 hours notice.",
  "Travel is included within our service areas; beyond them it is quoted before you commit.",
  "Every package begins with the same complimentary consultation, and you may stop after it.",
];

/* ── About Me ──────────────────────────────────────────────────────── */
export const about = {
  title: "Built after watching good clients quit for bad reasons",
  paragraphs: [
    "I spent six years as a floor coach in two of Mumbai's better-known gyms. The clients who stopped were almost never the ones who lacked discipline — they were the ones whose commute, childcare or travel schedule made the habit impossible to hold.",
    "FitiMinded opened in 2016 with one coach and a car boot of equipment. It is now twelve coaches, all salaried rather than commission-paid, because a coach earning per session sells sessions rather than outcomes.",
    "We are deliberately capped. Each coach carries a maximum of fourteen clients, which is the number at which they can still remember what happened in your last session without reading it back.",
  ],
  principles: [
    { label: "Salaried coaches", detail: "Nobody here is paid to upsell you a package you do not need" },
    { label: "No supplements", detail: "We do not sell, stock or take commission on any product" },
    { label: "Fourteen clients", detail: "The cap per coach, so the coaching stays personal" },
    { label: "Written honesty", detail: "Quarterly reports say what did not work, in writing" },
  ],
};

/* ── Certifications ────────────────────────────────────────────────── */
export const certifications = [
  { body: "NSCA", title: "Certified Strength & Conditioning Specialist", holder: "Head coach & 4 coaches", year: "2014" },
  { body: "ACSM", title: "Certified Exercise Physiologist", holder: "Head coach", year: "2017" },
  { body: "GGS", title: "Pre & Post-Natal Coaching Specialist", holder: "6 coaches", year: "2019" },
  { body: "ISSN", title: "Sports Nutrition Specialist", holder: "Head coach & 3 coaches", year: "2020" },
  { body: "NASM", title: "Corrective Exercise Specialist", holder: "All coaches", year: "2021" },
  { body: "Red Cross", title: "First Aid, CPR & AED", holder: "All coaches, current", year: "2025" },
];

export const vetting = [
  "Police verification on every coach before their first session",
  "Professional indemnity and public liability insurance carried by the practice",
  "First aid and CPR current for every coach, renewed every two years",
  "NDAs signed on request, and no client is ever named or photographed",
];

/* ── Nutrition & Diet ──────────────────────────────────────────────── */
export const nutrition = {
  title: "Nutrition written for your kitchen, not a stock photo",
  body: "Included with every package. We work from what your household already cooks, because a plan that requires a separate menu for one person does not survive a monsoon week.",
  points: [
    { title: "Targets, not a menu", body: "Calories and protein, built around your existing meals — dal, roti, rice, eggs, fish, paneer." },
    { title: "Household aware", body: "If one cook feeds four people, the plan works inside that. We have yet to meet a kitchen that runs two menus for long." },
    { title: "Reviewed on data", body: "Weight trend, waist measurement and session performance drive each fortnightly change." },
    { title: "Referred when clinical", body: "Anything needing a therapeutic diet goes to a registered dietitian and we programme around theirs." },
  ],
  note: "Our coaches hold sports nutrition certifications. They are not registered dietitians, and the practice sells no supplements and takes no product commissions.",
};

/* ── Research & Knowledge ──────────────────────────────────────────── */
export const research = {
  title: "What we coach from, and why",
  body: "Positions we hold because of the evidence, not because they are fashionable. Each is one we would change if the evidence moved.",
  entries: [
    { q: "Do I need a gym to build real strength?", a: "No. Progressive overload needs resistance that increases, not a specific building. Adjustable dumbbells and bands cover the first two to three years for almost everyone." },
    { q: "Is training to failure necessary?", a: "Rarely. Stopping one to three repetitions short produces close to the same hypertrophy with markedly less fatigue, which means you train the muscle again sooner." },
    { q: "Can I target fat loss in one area?", a: "No. Spot reduction does not hold up in the literature. Abdominal work builds the muscle; the calorie deficit is what makes it visible." },
    { q: "Should women lift heavy?", a: "Yes, and it matters more after 35, not less. Resistance training is the strongest available intervention for bone density and body composition." },
    { q: "Is soreness a sign of a good session?", a: "No. Soreness tracks novelty. A well-programmed week often leaves you barely sore while the numbers keep moving." },
    { q: "Do fat burners or detox programmes work?", a: "No. They act through appetite suppression or fluid loss. We neither sell nor recommend them." },
  ],
};

/* ── Client Testimonials ───────────────────────────────────────────── */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I had cancelled three gym memberships in five years. Two years with FitiMinded and I have missed eleven sessions total, because the only thing I have to do is open the door.",
    author: "Managing Partner",
    role: "Worli · Signature, 2 years",
  },
  {
    quote:
      "My mother is 71. Her coach has not changed once in eighteen months, knows her knee, knows her flat, and knows which days she will try to talk her way out of it.",
    author: "Client's daughter",
    role: "Malabar Hill · Foundation",
  },
  {
    quote:
      "We train as a couple at 06:00 before the children are up. Two separate programmes, one session, one bill. Nobody else we spoke to would structure it that way.",
    author: "Household client",
    role: "Bandra West · Household",
  },
  {
    quote:
      "The quarterly report told me plainly that my progress had stalled and that the reason was my sleep, not the programme. I have not had a coach be that direct before.",
    author: "Founder, technology",
    role: "Powai · Intensive",
  },
];

/* ── Location & service areas ──────────────────────────────────────── */
export const serviceAreas = {
  title: "Where we train",
  body: "Travel is included within these areas. Anywhere else in the Mumbai Metropolitan Region is quoted before you commit to anything.",
  areas: [
    "Worli",
    "Lower Parel",
    "Malabar Hill",
    "Colaba",
    "Bandra West",
    "Khar",
    "Juhu",
    "Santacruz",
    "Andheri West",
    "Powai",
    "Prabhadevi",
    "Dadar",
  ],
  tiers: [
    { tier: "Core areas", detail: "Worli, Lower Parel, Prabhadevi, Dadar, Bandra West, Khar", note: "Most slots, travel included" },
    { tier: "South Mumbai", detail: "Malabar Hill, Colaba, Altamount Road, Nepean Sea Road", note: "Morning slots, travel included" },
    { tier: "Western suburbs", detail: "Juhu, Santacruz, Andheri West, Versova", note: "Limited evening slots" },
    { tier: "Central & beyond", detail: "Powai, Chembur, Thane, Navi Mumbai", note: "Quoted before you commit" },
  ],
};

export const faqs: FaqItem[] = [
  {
    question: "What do I actually need at home?",
    answer:
      "Roughly two metres by two metres of clear floor, and somewhere to plug in a fan. Your coach brings everything else. If the space genuinely will not work, we will say so at the consultation rather than take the booking.",
  },
  {
    question: "Will I get the same coach every time?",
    answer:
      "Yes. You are assigned one coach and that does not rotate. If they are unwell or on leave you are told in advance, and you choose between a cover coach who has read your file or moving the session.",
  },
  {
    question: "How much does it cost, in total?",
    answer:
      "Between ₹28,000 and ₹60,000 a month depending on session frequency, plus GST. Travel within our service areas is included, nutrition is included, and there is no joining fee or annual contract. Nothing else is added later.",
  },
  {
    question: "What happens if I travel or fall ill?",
    answer:
      "Cancel free with twelve hours notice and the session returns to your balance. Unused sessions roll over for one month. Extended travel moves you to online delivery with the same coach rather than pausing your progress.",
  },
  {
    question: "Can you work with my doctor or physiotherapist?",
    answer:
      "For any managed condition or post-surgical return we require it. We ask for written clearance before the first session and send a quarterly summary back to them. That is not optional, and it is not negotiable.",
  },
  {
    question: "How discreet is this?",
    answer:
      "Coaches arrive in plain clothing with equipment in an unmarked bag. We sign NDAs on request, we never publish a client name or photograph, and the testimonials on this page are attributed by role and area only for that reason.",
  },
];

export const enquiryGoals = [
  "Personal training at home",
  "Weight loss",
  "Muscle building",
  "Female fitness / pre or post-natal",
  "Training with a medical condition",
  "Couple or family sessions",
  "Corporate wellness",
  "Not sure yet",
];
