// Contenu textuel (FR) de la home. Doit garder exactement la meme forme que home.ts.
import type { Testimonial, PhilosophyCell, FeatureCopy } from "@/types";

export const heroHome = {
  badge: "Actuellement en bêta",
  title: "Juste Courir.",
  subtitle:
    "Web, mobile et montre connectée — une plateforme running complète, sans tracking, sans pub, sans compromis.",
  ctaPrimary: "Explorer la plateforme",
  ctaSecondary: "Notre philosophie",
};

export const webCopy: FeatureCopy = {
  title: "Plateforme Web",
  description:
    "Un tableau de bord complet pour coachs, clubs et entreprises. Gérez vos coureurs, créez des plans d'entraînement et suivez les performances — tout en garantissant une confidentialité totale.",
  features: [
    "Analytique sans profilage",
    "Codes d'accès",
    "Gestion multi-rôles",
    "Plans d'entraînement",
  ],
  pills: ["Conforme RGPD", "Hébergement UE"],
};

export const mobileCopy: FeatureCopy = {
  title: "Application Mobile",
  description:
    "Enregistrez vos séances simplement, courez librement. L'application mobile NoTrackRun est conçue pour vous donner des outils — pas pour vous surveiller.",
  features: [
    "Mode No Track",
    "Objectifs personnalisés",
    "Mode hors-ligne",
    "Import des séances du coach",
  ],
  pills: ["iOS & Android", "Sans compte", "Gratuit à vie"],
};

export const watchCopy: FeatureCopy = {
  title: "Application Montre",
  description:
    "Gardez l'œil sur vos métriques — pas sur un algorithme. L'application montre NoTrackRun est ultra-légère, autonome, et ne transmet rien sans votre consentement explicite.",
  features: ["Apple Watch", "Design léger", "Wear OS", "Garmin"],
  pills: ["Apple Watch", "Wear OS", "Autonomie plusieurs jours"],
};

export const reviewsCopy = {
  tag: "Bêta-testeurs",
  heading: "Ce que disent les premiers coureurs",
  intro:
    "NoTrackRun est actuellement en bêta fermée. Voici quelques retours honnêtes de personnes qui la testent déjà sur le terrain.",
};

export const philosophyCopy = {
  tag: "Notre philosophie",
  headingLine1: "Une technologie pensée",
  headingLine2: "pour les humains.",
  intro:
    "Le sport connecté ne devrait pas se faire au prix de votre vie privée. Voici ce que ça signifie concrètement.",
  quote:
    "Aucun compte requis, pas de pub, pas d'algorithme de recommandation caché. Juste une application souveraine, simple et efficace.",
  quoteAuthor: "NoTrackRun",
};

export const testimonials: Testimonial[] = [
  {
    name: "Emma R.",
    role: "Coureuse amatrice, bêta mobile",
    initials: "ER",
    quote:
      "Première appli de running depuis des années où je n'ai pas eu à décocher cinq cases juste pour l'empêcher de vendre mes données.",
  },
  {
    name: "Marc D.",
    role: "Coach de course indépendant",
    initials: "MD",
    quote:
      "Le tableau de bord web me permet de créer des plans pour tout mon club sans exporter le moindre tableur. Les codes d'accès rendent l'intégration indolore.",
  },
  {
    name: "Sophie L.",
    role: "Forces de l'ordre, bêta mobile",
    initials: "SL",
    quote:
      "Le Mode Fantôme est exactement ce qu'il me fallait. Je peux enfin enregistrer mes entraînements sans que mon itinéraire soit reconstituable par qui que ce soit.",
  },
  {
    stars: "★★★★☆",
    name: "Julie K.",
    role: "Trail runneuse, bêta mobile",
    initials: "JK",
    quote:
      "Le mode hors-ligne a sauvé toute une sortie trail sans réseau. Synchronisation propre dès que j'ai retrouvé du signal.",
  },
  {
    name: "Alex P.",
    role: "Bêta-testeur Wear OS",
    initials: "AP",
    quote:
      "L'appli montre démarre directement sur l'écran de séance. Pas de demande de compte, pas de synchronisation avec cinq services différents avant.",
  },
  {
    name: "Thomas B.",
    role: "Responsable de club de course",
    initials: "TB",
    quote:
      "Déployée auprès des 40 membres de notre club en un après-midi. La gestion multi-rôles permet enfin à nos coachs adjoints d'avoir leur propre accès.",
  },
];

export const philosophyCells: PhilosophyCell[] = [
  {
    title: "Souveraineté numérique",
    description:
      "Un projet 100% européen. Hébergé exclusivement en Europe, avec conformité RGPD native. Vos données ne quittent jamais le continent.",
  },
  {
    title: "Zéro tracking caché",
    description:
      "Pas de publicité, pas d'algorithme de recommandation, pas de profil commercial. Ce que vous faites ne regarde personne d'autre.",
  },
  {
    title: "Pour les métiers sensibles",
    description:
      "Militaires, forces de l'ordre et autres statuts sensibles — courir ne devrait jamais signifier une exposition involontaire. Le Mode Fantôme a été conçu pour eux.",
  },
  {
    title: "Aucun compte requis",
    description:
      "Ouvrez l'appli et courez. Aucune inscription requise, aucun email collecté sans consentement explicite, aucune donnée personnelle exigée.",
  },
];
