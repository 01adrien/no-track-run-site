// Contenu textuel (NL) de la page about. Doit garder exactement la meme forme que about.ts.
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
  titleLines: ["Geen accounts.", "Geen profielen.", "Alleen tokens."],
  subtitle:
    "Dit is de precieze, ongepolijste waarheid over wat NoTrackRun opslaat, wat het nooit ziet, en hoe coaches en lopers verbinden zonder ook maar één registratieformulier.",
};

export const howItWorks = {
  tag: "Het model",
  heading: "Toegang werkt met tokens",
  intro:
    "Geen enkele loper maakt ooit rechtstreeks een account aan bij NoTrackRun. Toegang wordt verleend door de organisatie die zich abonneert, één token per keer.",
};

export const steps: FlowStepData[] = [
  {
    title: "Een organisatie abonneert zich",
    description:
      "Een coach, club of bedrijf kiest een formule en deelt alleen hun e-mail en organisatienaam met NoTrackRun. Dat is het enige directe contact dat we op bedrijfsniveau bewaren.",
  },
  {
    title: "Het platform genereert tokens",
    description:
      "Elke formule bevat een vast aantal loperplekken. Per plek wordt één toegangstoken gegenereerd, klaar om te worden uitgedeeld.",
  },
  {
    title: "Een token wordt aan een loper toegewezen",
    description:
      "De organisatie koppelt het token aan een naam of pseudoniem — waar de loper zich prettig bij voelt om mee geïdentificeerd te worden.",
  },
  {
    title: "De loper voert het token in",
    description:
      "Geen registratiescherm, geen e-mailadres van de loper, geen wachtwoord. Het token is het enige dat de app aan een trainingsschema koppelt.",
  },
  {
    title: "Trainingen synchroniseren terug naar de organisatie",
    description:
      "Trainingsgegevens stromen naar het dashboard van de coach of club, beperkt tot die organisatie alleen. NoTrackRun koppelt nooit lopers tussen organisaties, en gebruikt deze gegevens nooit voor advertenties.",
  },
];

export const dataSection = {
  tag: "Gegevens, precies",
  heading: "Wat op je telefoon blijft, wat ons bereikt",
  intro: "Geen vage beloftes — hier is precies waar elk stukje data leeft.",
};

export const dataOnDevice: DataColumn = {
  label: "Blijft op je telefoon",
  items: [
    "Je volledige GPS-route, punt voor punt",
    "Tempo, tussentijden en hoogtedetails",
    "Alles wat de app tijdens de training vastlegt",
  ],
};

export const dataOnServer: DataColumn = {
  label: "Bereikt de servers van NoTrackRun",
  items: [
    "Totale afstand en duur per training",
    "De naam of het pseudoniem gekoppeld aan je token",
    "Verder niets — geen route, geen kaart, geen locatiegeschiedenis",
  ],
};

export const dataNote =
  "Wat onze servers bereikt is beperkt tot alleen jouw organisatie — je coach of club kan het zien, andere organisaties niet, en het wordt nooit gebruikt voor advertenties of doorverkocht aan wie dan ook. Op bedrijfsniveau is de enige contactinformatie die NoTrackRun bewaart het e-mailadres en de naam van de abonnerende organisatie — nooit die van een loper.";

export const formulasSection = {
  tag: "Prijzen",
  heading: "Formules",
  intro:
    "Elke formule bevat een vast aantal coachplekken en lopertokens. Lopers gebruiken het platform altijd gratis — organisaties betalen voor het dashboard en de plekken.",
  ctaLabel: "Stel een vraag",
};

export const formulas: FormulaPlan[] = [
  { name: "Starter", price: "49", seats: "2", tokens: "30" },
  { name: "Club", price: "129", seats: "5", tokens: "100" },
  { name: "Pro", price: "299", seats: "15", tokens: "300" },
];

export const faqSection = {
  tag: "Vragen",
  heading: "Veelgestelde vragen",
};

export const faqs: FaqEntry[] = [
  {
    question: "Ziet mijn coach mijn echte naam als ik een pseudoniem gebruik?",
    answer:
      "Nee. Welke naam of pseudoniem ook aan je token is gekoppeld, dat is wat je organisatie ziet — niets meer. NoTrackRun verifieert of vereist nergens in het proces een wettelijke identiteit.",
  },
  {
    question: "Wat gebeurt er met mijn gegevens als mijn organisatie opzegt?",
    answer:
      "Tokens gekoppeld aan een opgezegd abonnement stoppen met het synchroniseren van nieuwe trainingen. Historische afstand- en duurgegevens worden van onze servers verwijderd zodra de bewaartermijn van de organisatie is verstreken.",
  },
  {
    question: "Verlaat de GPS-track ooit mijn telefoon?",
    answer:
      "Nee. Je GPS-route wordt alleen op je apparaat vastgelegd en opgeslagen. Onze servers ontvangen deze nooit — alleen de totale afstand en duur van een training bereiken NoTrackRun.",
  },
  {
    question: "Kan ik één token met meerdere coaches gebruiken?",
    answer:
      "Een token is gekoppeld aan één organisatie. Train je met meerdere coaches, dan geeft elke coach je een apart token.",
  },
  {
    question: "Wat weet NoTrackRun, het bedrijf, precies over mij?",
    answer:
      "Als je loper bent: niets verder dan de naam of het pseudoniem op je token en je totale trainingsgegevens — en zelfs die zijn beperkt tot jouw organisatie. We bewaren alleen directe contactgegevens (e-mail, organisatienaam) van de abonnerende coach, club of onderneming, nooit van individuele lopers.",
  },
];

export const teamSection = {
  tag: "Wie dit bouwt",
  heading: "Het team",
  intro:
    "Een klein Europees team dat NoTrackRun in het openbaar bouwt, momenteel in gesloten bèta.",
};

export const team: TeamMember[] = [
  {
    name: "Adrien Gaucher",
    role: "Backend & platform",
    photo: photoAdrien,
    bio: "",
  },
  {
    name: "Henin Alexandre",
    role: "Mobiel & horloge",
    photo: photoAlex,
    bio: "",
  },
];
