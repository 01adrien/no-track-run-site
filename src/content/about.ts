// Contenu textuel (EN) de la page about. Voir about.fr.ts pour l'equivalent
// francais — les deux fichiers doivent garder exactement la meme forme.
import type {
  FlowStepData,
  DataColumn,
  FormulaPlan,
  FaqEntry,
  TeamMember,
} from "@/types";

import photoAdrien from "@/assets/img/team/adrien.jpg";
import photoAlex from "@/assets/img/team/alex.png";

export const heroAbout = {
  titleLines: ["No accounts.", "No profiles.", "Just tokens."],
  subtitle:
    "Here's the precise, unglamorous truth about what NoTrackRun stores, what it never sees, and how coaches and runners connect without a single sign-up form.",
};

export const howItWorks = {
  tag: "The model",
  heading: "Access runs on tokens",
  intro:
    "No runner ever creates an account with NoTrackRun directly. Access is granted by the organization that subscribes, one token at a time.",
};

export const steps: FlowStepData[] = [
  {
    title: "An organization subscribes",
    description:
      "A coach, club, or company picks a formula and shares only their email and organization name with NoTrackRun. That's the only direct contact we hold at the company level.",
  },
  {
    title: "The platform generates tokens",
    description:
      "Each formula includes a set number of runner slots. One access token is generated per slot, ready to be handed out.",
  },
  {
    title: "A token is assigned to a runner",
    description:
      "The organization tags the token with a name or a pseudonym — whatever the runner is comfortable being identified by.",
  },
  {
    title: "The runner enters the token",
    description:
      "No sign-up screen, no runner email, no password. The token is the only thing that links the app to a training plan.",
  },
  {
    title: "Sessions sync back to the organization",
    description:
      "Training data flows to the coach or club dashboard, scoped to that organization only. NoTrackRun doesn't cross-reference runners between organizations, and never uses this data for advertising.",
  },
];

export const dataSection = {
  tag: "Data, precisely",
  heading: "What stays on your phone, what reaches us",
  intro: "No vague promises — here's exactly where each piece of data lives.",
};

export const dataOnDevice: DataColumn = {
  label: "Stays on your phone",
  items: [
    "Your full GPS route, point by point",
    "Pace, splits, and elevation detail",
    "Anything the app records mid-session",
  ],
};

export const dataOnServer: DataColumn = {
  label: "Reaches NoTrackRun servers",
  items: [
    "Total distance and duration per session",
    "The name or pseudonym tied to your token",
    "Nothing else — no route, no map, no location history",
  ],
};

export const dataNote =
  "What reaches our servers is scoped to your organization only — your coach or club can see it, other organizations can't, and it's never used for advertising or resold to anyone. At the company level, the only contact information NoTrackRun holds is the subscribing organization's email and name — never a runner's.";

export const formulasSection = {
  tag: "Pricing",
  heading: "Formulas",
  intro:
    "Every formula includes a set number of coach seats and runner tokens. Runners are always free to use — organizations pay for the dashboard and the slots.",
  ctaLabel: "Ask a question",
};

export const formulas: FormulaPlan[] = [
  { name: "Starter", price: "49", seats: "2", tokens: "30" },
  { name: "Club", price: "129", seats: "5", tokens: "100" },
  { name: "Pro", price: "299", seats: "15", tokens: "300" },
];

export const faqSection = {
  tag: "Questions",
  heading: "Frequently asked",
};

export const faqs: FaqEntry[] = [
  {
    question: "Does my coach see my real name if I use a pseudonym?",
    answer:
      "No. Whatever name or pseudonym is attached to your token is what your organization sees — nothing more. NoTrackRun doesn't verify or require a legal identity anywhere in the flow.",
  },
  {
    question: "What happens to my data if my organization cancels?",
    answer:
      "Tokens tied to a cancelled subscription stop syncing new sessions. Historical distance and duration data is deleted from our servers after the organization's retention window closes.",
  },
  {
    question: "Does the GPS track ever leave my phone?",
    answer:
      "No. Your GPS route is recorded and stored only on your device. Our servers never receive it — only the total distance and duration of a session ever reach NoTrackRun.",
  },
  {
    question: "Can I use one token with multiple coaches?",
    answer:
      "A token is tied to a single organization. If you train with more than one coach, each one issues you a separate token.",
  },
  {
    question: "What exactly does NoTrackRun, the company, know about me?",
    answer:
      "If you're a runner, nothing beyond the name or pseudonym on your token and your aggregate session totals — and even those are scoped to your organization. We only hold direct contact details (email, organization name) for the subscribing coach, club, or company, never for individual runners.",
  },
];

export const teamSection = {
  tag: "Who's building this",
  heading: "The team",
  intro:
    "A small European team building NoTrackRun in the open, currently in closed beta.",
};

export const team: TeamMember[] = [
  {
    name: "Adrien Gaucher",
    role: "Backend & platform",
    bio: "",
    photo: photoAdrien,
  },
  {
    name: "Alexandre Henin",
    role: "Mobile & watch",
    bio: "",
    photo: photoAlex,
  },
];
