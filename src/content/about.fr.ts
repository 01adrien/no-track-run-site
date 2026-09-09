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
  titleLines: ["Pas de comptes.", "Pas de profils.", "Juste des tokens."],
  subtitle: "Ce que NoTrackRun stocke et comment ça marche.",
};

export const howItWorks = {
  tag: "Le modèle",
  heading: "L'accès fonctionne par tokens",
  intro:
    "Aucun coureur ne crée de compte directement. L'accès est accordé par l'organisation abonnée, un token à la fois.",
};

export const steps: FlowStepData[] = [
  {
    title: "Une organisation s'abonne",
    description:
      "Un coach, un club ou une entreprise choisit une formule et ne partage que son email et le nom de son organisation avec NoTrackRun. C'est le seul contact direct que nous détenons au niveau de l'entreprise.",
  },
  {
    title: "Le coach crée un coureur",
    description:
      "Depuis son tableau de bord, le coach crée un coureur et lui associe un nom ou un pseudonyme — c'est à ce moment-là qu'un token d'accès est généré, prêt à être transmis au coureur.",
  },
  {
    title: "Le coureur saisit le token",
    description:
      "Pas d'écran d'inscription, pas d'email coureur, pas de mot de passe. Le token est le seul élément qui relie l'appli à un plan d'entraînement.",
  },
  {
    title: "Les séances se synchronisent vers le tableau de bord du coach",
    description:
      "Les données d'entraînement remontent vers le tableau de bord du coach, limitées à cette organisation uniquement. NoTrackRun ne croise jamais les coureurs entre organisations, et n'utilise jamais ces données à des fins publicitaires.",
  },
];

export const dataSection = {
  tag: "Les données, précisément",
  heading: "Ce qui reste sur votre téléphone, ce qui nous parvient",
  intro: "Pas de promesses vagues — voici exactement où vit chaque donnée.",
};

export const dataOnDevice: DataColumn = {
  label: "Reste sur votre téléphone",
  items: [
    "Votre itinéraire GPS complet, point par point",
    "Allure, fractionnés et détails de dénivelé",
    "Tout ce que l'appli enregistre pendant la séance",
  ],
};

export const dataOnServer: DataColumn = {
  label: "Parvient aux serveurs NoTrackRun",
  items: [
    "Distance et durée totales par séance",
    "Le nom ou pseudonyme lié à votre token",
    "Rien d'autre — pas d'itinéraire, pas de carte, pas d'historique de localisation",
  ],
};

export const dataNote =
  "Ce qui parvient à nos serveurs est limité à votre organisation uniquement — votre coach ou club peut le voir, les autres organisations non, et ce n'est jamais utilisé à des fins publicitaires ni revendu à qui que ce soit. Au niveau de l'entreprise, la seule information de contact que NoTrackRun détient est l'email et le nom de l'organisation abonnée — jamais celle d'un coureur.";

export const formulasSection = {
  tag: "Tarifs",
  heading: "Formules",
  intro: "Chaque formule inclut un nombre défini de coachs et de coureurs.",
  ctaLabel: "Poser une question",
};

export const formulas: FormulaPlan[] = [
  { name: "Starter", price: "49", seats: "2", tokens: "30" },
  { name: "Club", price: "129", seats: "5", tokens: "100" },
  { name: "Pro", price: "299", seats: "15", tokens: "300" },
];

export const faqSection = {
  tag: "Questions",
  heading: "Questions fréquentes",
};

export const faqs: FaqEntry[] = [
  {
    question: "Mon coach voit-il mon vrai nom si j'utilise un pseudonyme ?",
    answer:
      "Non. Le nom ou pseudonyme attaché à votre token est ce que votre organisation voit — rien de plus. NoTrackRun ne vérifie ni n'exige d'identité légale à aucun moment du parcours.",
  },
  {
    question:
      "Que deviennent mes données si mon organisation annule son abonnement ?",
    answer:
      "Les tokens liés à un abonnement annulé cessent de synchroniser de nouvelles séances. Les données historiques de distance et durée sont supprimées de nos serveurs à la fin de la période de rétention de l'organisation.",
  },
  {
    question: "Le tracé GPS quitte-t-il un jour mon téléphone ?",
    answer:
      "Non. Votre itinéraire GPS est enregistré et stocké uniquement sur votre appareil. Nos serveurs ne le reçoivent jamais — seuls la distance et la durée totales d'une séance parviennent à NoTrackRun.",
  },
  {
    question: "Que sait exactement NoTrackRun, l'entreprise, à mon sujet ?",
    answer:
      "Si vous êtes coureur, rien au-delà du nom ou pseudonyme sur votre token et de vos totaux de séances agrégés — et même ceux-là sont limités à votre organisation. Nous ne détenons de coordonnées directes (email, nom d'organisation) que pour le coach, club ou entreprise souscripteur, jamais pour les coureurs individuels.",
  },
];

export const teamSection = {
  tag: "Derrière NoTrackRun",
  heading: "L'équipe",
  intro:
    "Une petite équipe européenne qui construit NoTrackRun, actuellement en bêta fermée.",
};

export const team: TeamMember[] = [
  {
    name: "Adrien Gaucher",
    role: "Backend & plateforme",
    photo: photoAdrien,
    bio: "",
  },
  {
    name: "Alexandre Henin",
    role: "Mobile & montre",
    photo: photoAlex,
    bio: "",
  },
];
