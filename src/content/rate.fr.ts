import type { AddOn, FormulaPlan } from "@/types";

export const heroRate = {
  title: "Tarifs",
  subtitle:
    "Choisissez une formule, ajoutez des coachs ou des coureurs au fur et à mesure.",
};

export const formulasSection = {
  tag: "Tarifs",
  heading: "Formules",
  intro: "Chaque formule inclut un nombre défini de coachs et de coureurs.",
  addOnsNote:
    "Besoin de plus de place ? Ajoutez des coachs à l'unité, ou des coureurs par lots de 5.",
  ctaLabel: "Poser une question",
};

export const formulas: FormulaPlan[] = [
  { name: "Starter", price: "49", seats: "2", tokens: "30" },
  { name: "Club", price: "129", seats: "5", tokens: "100" },
  { name: "Pro", price: "299", seats: "15", tokens: "300" },
];

export const addOns: AddOn[] = [
  {
    title: "Coach supplémentaire",
    description:
      "Ajoutez un coach de plus à votre organisation, facturé en plus de votre formule.",
  },
  {
    title: "Coureurs supplémentaires (+5)",
    description:
      "Ajoutez cinq tokens coureur de plus à votre organisation, par lots de 5.",
  },
];
