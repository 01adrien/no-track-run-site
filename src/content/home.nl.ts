import type { Testimonial, PhilosophyCell, FeatureCopy } from "@/types";

export const heroHome = {
  badge: "Momenteel in bèta",
  title: "Ren vrij.",
  subtitle:
    "Web, mobiel en connected horloge — een compleet hardloopplatform, zonder tracking, zonder advertenties, zonder compromissen.",
  ctaPrimary: "Ontdek het platform",
  ctaSecondary: "Onze filosofie",
};

export const webCopy: FeatureCopy = {
  title: "Webplatform",
  description:
    "Een compleet dashboard voor coaches, clubs en bedrijven. Beheer je lopers, bouw trainingsschema's en volg de prestaties — met volledige privacy gegarandeerd.",
  features: [
    "Analyse zonder profilering",
    "Toegangscodes",
    "Beheer met meerdere rollen",
    "Trainingsschema's",
  ],
  pills: ["AVG-conform", "Hosting in de EU"],
};

export const mobileCopy: FeatureCopy = {
  title: "Mobiele app",
  description:
    "Log je trainingen eenvoudig, ren vrij. De NoTrackRun mobiele app is ontworpen om je tools te geven — niet om je in de gaten te houden.",
  features: [
    "No Track Mode",
    "Persoonlijke doelen",
    "Offline modus",
    "Import van coach-trainingen",
  ],
  pills: ["iOS & Android", "Geen account nodig", "Altijd gratis"],
};

export const watchCopy: FeatureCopy = {
  title: "Horloge-app",
  description:
    "Houd je metrics in de gaten — niet een algoritme. De NoTrackRun horloge-app is ultralicht, zelfstandig, en verzendt niets zonder je uitdrukkelijke toestemming.",
  features: ["Apple Watch", "Licht ontwerp", "Wear OS", "Garmin"],
  pills: ["Apple Watch", "Wear OS", "Meerdaagse batterijduur"],
};

export const reviewsCopy = {
  tag: "Bèta-testers",
  heading: "Wat vroege lopers zeggen",
  intro:
    "NoTrackRun bevindt zich momenteel in gesloten bèta. Hier is eerlijke feedback van mensen die het al testen onderweg.",
};

export const philosophyCopy = {
  tag: "Onze filosofie",
  headingLine1: "Technologie gebouwd",
  headingLine2: "voor mensen.",
  intro:
    "Connected sport zou niet ten koste mogen gaan van je privacy. Dit is wat dat in de praktijk betekent.",
  quote:
    "Geen account nodig, geen advertenties, geen verborgen aanbevelingsalgoritme. Gewoon een soevereine, eenvoudige, effectieve app.",
  quoteAuthor: "NoTrackRun",
};

export const testimonials: Testimonial[] = [
  {
    name: "Emma R.",
    role: "Amateurloper, mobiele bèta",
    initials: "ER",
    quote:
      "De eerste hardloopapp in jaren waarbij ik niet vijf vakjes hoefde uit te vinken om te voorkomen dat mijn gegevens werden verkocht.",
  },
  {
    name: "Marc D.",
    role: "Zelfstandige hardloopcoach",
    initials: "MD",
    quote:
      "Met het webdashboard kan ik schema's voor mijn hele club bouwen zonder één spreadsheet te exporteren. Toegangscodes maken onboarding moeiteloos.",
  },
  {
    name: "Sophie L.",
    role: "Politie/defensie, mobiele bèta",
    initials: "SL",
    quote:
      "Ghost Mode is precies wat ik nodig had. Ik kan eindelijk mijn trainingen loggen zonder dat mijn route door wie dan ook te reconstrueren is.",
  },
  {
    stars: "★★★★☆",
    name: "Julie K.",
    role: "Trailrunner, mobiele bèta",
    initials: "JK",
    quote:
      "Offline modus heeft een hele trailrun zonder bereik gered. Synchroniseerde vlekkeloos zodra ik weer bereik had.",
  },
  {
    name: "Alex P.",
    role: "Wear OS bèta-tester",
    initials: "AP",
    quote:
      "De horloge-app start direct op het trainingsscherm. Geen accountverzoeken, geen synchronisatie met vijf verschillende diensten vooraf.",
  },
  {
    name: "Thomas B.",
    role: "Manager hardloopclub",
    initials: "TB",
    quote:
      "Binnen een middag uitgerold naar de 40 leden van onze club. Met beheer met meerdere rollen hebben onze assistent-coaches eindelijk hun eigen toegang.",
  },
];

export const philosophyCells: PhilosophyCell[] = [
  {
    title: "Digitale soevereiniteit",
    description:
      "Een 100% Europees project. Uitsluitend gehost in Europa, met native AVG-conformiteit. Je gegevens verlaten nooit het continent.",
  },
  {
    title: "Geen verborgen tracking",
    description:
      "Geen advertenties, geen aanbevelingsalgoritme, geen commercieel profiel. Wat je doet is niemands zaak.",
  },
  {
    title: "Voor gevoelige beroepen",
    description:
      "Militairen, politie en andere personen met een gevoelige status — hardlopen zou nooit onbedoelde blootstelling mogen betekenen. Ghost Mode is voor hen ontworpen.",
  },
  {
    title: "Geen account nodig",
    description:
      "Open de app en ren. Geen registratie vereist, geen e-mail verzameld zonder uitdrukkelijke toestemming, geen persoonlijke gegevens vereist.",
  },
];
