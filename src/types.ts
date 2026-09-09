import type { ImageMetadata } from "astro";

export interface Cta {
  label: string;
  href: string;
  variant: "primary" | "ghost";
}

export interface Screenshot {
  src: ImageMetadata;
  alt: string;
}

export interface Testimonial {
  stars?: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
}

export interface PhilosophyCell {
  title: string;
  description: string;
}

export interface FlowStepData {
  title: string;
  description: string;
}

export interface DataColumn {
  label: string;
  items: string[];
}

export interface FormulaPlan {
  name: string;
  price: string;
  seats: string;
  tokens: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials?: string;
  photo?: ImageMetadata;
}

export interface FeatureCopy {
  title: string;
  description: string;
  features: string[];
  pills: string[];
}

export interface WatchMockupData {
  label: string;
  variant: "line" | "ring";
  value?: string;
  sub?: string;
  linePath?: string;
  ringPercent?: number;
}

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export interface AddOn {
  title: string;
  description: string;
  price?: string; // optionnel, tant que le prix n'est pas fixé
}
