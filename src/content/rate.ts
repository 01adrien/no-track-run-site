import type { AddOn, FormulaPlan } from "@/types";

export const heroRate = {
  title: "Pricing",
  subtitle: "Pick a formula, add coaches or runners as you grow.",
};

export const formulasSection = {
  tag: "Pricing",
  heading: "Formulas",
  intro: "Every formula includes a set number of coaches and runners.",
  addOnsNote:
    "Need more room? Add coaches one at a time, or runners in packs of 5.",
  ctaLabel: "Ask a question",
};

export const formulas: FormulaPlan[] = [
  { name: "Starter", price: "49", seats: "2", tokens: "30" },
  { name: "Club", price: "129", seats: "5", tokens: "100" },
  { name: "Pro", price: "299", seats: "15", tokens: "300" },
];

export const addOns: AddOn[] = [
  {
    title: "Extra coach seat",
    description:
      "Add one more coach to your organization, billed alongside your formula.",
  },
  {
    title: "Extra runners (+5)",
    description:
      "Add five more runner tokens to your organization, in packs of 5.",
  },
];
