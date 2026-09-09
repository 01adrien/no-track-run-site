import type { AddOn, FormulaPlan } from "@/types";

export const formulas: FormulaPlan[] = [
  { name: "Starter", price: "49", seats: "2", tokens: "30" },
  { name: "Club", price: "129", seats: "5", tokens: "100" },
  { name: "Pro", price: "299", seats: "15", tokens: "300" },
];

export const heroRate = {
  title: "Prijzen",
  subtitle: "Kies een formule, voeg coaches of lopers toe naarmate je groeit.",
};

export const formulasSection = {
  tag: "Prijzen",
  heading: "Formules",
  intro: "Elke formule bevat een vast aantal coaches en lopers.",
  addOnsNote:
    "Meer plek nodig? Voeg coaches één voor één toe, of lopers per 5.",
  ctaLabel: "Stel een vraag",
};

export const addOns: AddOn[] = [
  {
    title: "Extra coachplek",
    description:
      "Voeg nog een coach toe aan je organisatie, gefactureerd bovenop je formule.",
  },
  {
    title: "Extra lopers (+5)",
    description:
      "Voeg vijf extra lopertokens toe aan je organisatie, per pakket van 5.",
  },
];
