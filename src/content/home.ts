import type { Testimonial, PhilosophyCell, FeatureCopy } from "@/types";

export const heroHome = {
  badge: "Currently in beta testing",
  title: "Just Run.",
  subtitle:
    "Web, mobile, and connected watch — a complete running platform, built with no tracking, no ads, no compromises.",
  ctaPrimary: "Explore the platform",
  ctaSecondary: "Our philosophy",
};

export const webCopy: FeatureCopy = {
  title: "Web Platform",
  description:
    "A complete dashboard for coaches, clubs, and businesses. Manage your runners, build training plans, and track performance — all while guaranteeing complete privacy.",
  features: [
    "Profiling-free analytics",
    "Access codes",
    "Multi-role management",
    "Training plans",
  ],
  pills: ["GDPR compliant", "EU hosting"],
};

export const mobileCopy: FeatureCopy = {
  title: "Mobile App",
  description:
    "Log your sessions simply, run freely. The NoTrackRun mobile app is designed to give you the tools — not to watch you.",
  features: [
    "No Track Mode",
    "Custom goals",
    "Offline mode",
    "Coach workout import",
  ],
  pills: ["iOS & Android", "No account required", "Free forever"],
};

export const watchCopy: FeatureCopy = {
  title: "Watch App",
  description:
    "Run eye to eye with your metrics — not with an algorithm. The NoTrackRun watch app is ultra-lightweight, self-contained.",
  features: ["Apple Watch", "Lightweight design", "Wear OS", "Garmin"],
  pills: ["Apple Watch", "Wear OS", "Multi-day battery"],
};

export const reviewsCopy = {
  tag: "Beta testers",
  heading: "What early runners say",
  intro:
    "NoTrackRun is currently in closed beta. Here's some honest feedback from the people already testing it on the road.",
};

export const philosophyCopy = {
  tag: "Our philosophy",
  headingLine1: "Technology built",
  headingLine2: "for humans.",
  intro:
    "Connected sport shouldn't come at the cost of your privacy. Here's what that means in practice.",
  quote:
    "No account required, no ads, no hidden recommendation algorithm. Just a sovereign, simple, effective app.",
  quoteAuthor: "NoTrackRun",
};

export const testimonials: Testimonial[] = [
  {
    name: "Emma R.",
    role: "Amateur runner, mobile beta",
    initials: "ER",
    quote:
      "First running app in years where I didn't have to untick five boxes just to stop it selling my data.",
  },
  {
    name: "Marc D.",
    role: "Independent running coach",
    initials: "MD",
    quote:
      "The web dashboard lets me build plans for my whole club without exporting a single spreadsheet. Access codes make onboarding painless.",
  },
  {
    name: "Sophie L.",
    role: "Law enforcement, mobile beta",
    initials: "SL",
    quote:
      "Ghost Mode is exactly what I needed. I can finally log my training without my route being reconstructable by anyone.",
  },
  {
    stars: "★★★★☆",
    name: "Julie K.",
    role: "Trail runner, mobile beta",
    initials: "JK",
    quote:
      "Offline mode saved a whole trail session with zero signal. Synced cleanly the moment I got reception again.",
  },
  {
    name: "Alex P.",
    role: "Wear OS beta tester",
    initials: "AP",
    quote:
      "Watch app boots straight into the session screen. No account prompts, no syncing to five different services first.",
  },
  {
    name: "Thomas B.",
    role: "Running club manager",
    initials: "TB",
    quote:
      "Rolled it out to our running club's 40 members in an afternoon. Multi-role management means our assistant coaches finally have their own access.",
  },
];

export const philosophyCells: PhilosophyCell[] = [
  {
    title: "Digital sovereignty",
    description:
      "A 100% European project. Hosted exclusively in Europe, with native GDPR compliance. Your data never leaves the continent.",
  },
  {
    title: "Zero hidden tracking",
    description:
      "No advertising, no recommendation algorithm, no commercial profile. What you do is nobody else's business.",
  },
  {
    title: "For sensitive professionals",
    description:
      "Military personnel, law enforcement, and other sensitive-status individuals — running should never mean unintentional exposure. No Track Mode was designed for them.",
  },
  {
    title: "No account required",
    description:
      "Open the app and run. No sign-up required, no email collected without explicit consent, no personal data demanded.",
  },
];
