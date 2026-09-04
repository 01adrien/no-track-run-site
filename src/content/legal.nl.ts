// Contenu legal (NL). Doit garder exactement la meme forme que legal.ts.
import type { LegalDoc } from "@/types";

const LAST_UPDATED = "Laatst bijgewerkt: 4 september 2026";

export const privacyPolicy: LegalDoc = {
  title: "Privacybeleid",
  lastUpdated: LAST_UPDATED,
  intro:
    "NoTrackRun is ontworpen om zo weinig mogelijk persoonsgegevens te verzamelen. Deze pagina legt precies uit wat we verzamelen, waarom, en hoe je dat kunt beheren. Voor de technische details van het tokensysteem, zie Hoe het werkt.",
  sections: [
    {
      heading: "Wie we zijn",
      body: [
        "Deze dienst wordt geëxploiteerd door [rechtsvorm en naam], geregistreerd in [land] onder nummer [registratienummer], met maatschappelijke zetel te [adres]. Voor vragen over dit beleid of je gegevens: info@notrackrun.eu.",
      ],
    },
    {
      heading: "Kort samengevat",
      body: [
        "Lopers maken nooit rechtstreeks een account bij ons aan. Je GPS-route verlaat nooit je telefoon of horloge. Alleen de totale afstand en duur van een training, en de naam of het pseudoniem gekoppeld aan je toegangstoken, bereiken onze servers — en zelfs die informatie is alleen zichtbaar voor de organisatie die je token heeft uitgegeven, nooit voor ons voor advertentiedoeleinden, nooit doorverkocht aan wie dan ook.",
      ],
    },
    {
      heading: "Gegevens die we verzamelen",
      body: [
        "Van abonnerende organisaties (coaches, clubs, bedrijven): het e-mailadres en de organisatienaam gebruikt om het abonnement aan te maken, en de facturatiegegevens nodig voor betaling.",
        "Van lopers die een token gebruiken: de naam of het pseudoniem gekoppeld aan dat token, en geaggregeerde trainingstotalen (afstand en duur) gesynchroniseerd na elke training. We verzamelen geen e-mailadres, telefoonnummer of GPS-routegegevens van een loper.",
        "Van iedereen die contact met ons opneemt: naam, e-mail, rol, optionele organisatienaam en het bericht ingediend via het contactformulier.",
      ],
    },
    {
      heading: "Wat we niet verzamelen",
      body: [
        "We gebruiken geen advertentietrackers of analytics-SDK's van derden in de mobiele of horloge-app. We bouwen geen gedragsprofielen op. We verzamelen of bewaren geen GPS-routes op onze servers — die gegevens blijven op je apparaat.",
      ],
    },
    {
      heading: "Hoe we deze gegevens gebruiken",
      body: [
        "Om de dienst te leveren: het webdashboard laten draaien, trainingssamenvattingen synchroniseren naar de juiste organisatie, trainingsschema's genereren.",
        "Om te reageren op berichten via het contactformulier.",
        "Om abonnerende organisaties te factureren en de boekhouding bij te houden die wettelijk vereist is.",
      ],
    },
    {
      heading: "Rechtsgrond voor verwerking",
      body: [
        "We verwerken gegevens van abonnerende organisaties om onze overeenkomst met hen uit te voeren (art. 6(1)(b) AVG). We verwerken trainingsgegevens van lopers op dezelfde grond, als onderdeel van de dienst waarop de organisatie namens hen heeft geabonneerd. Inzendingen via het contactformulier worden verwerkt op basis van jouw toestemming door ze te versturen, en ons gerechtvaardigd belang om te reageren (art. 6(1)(f) AVG).",
      ],
    },
    {
      heading: "Cookies en lokale opslag",
      body: [
        "Deze website gebruikt geen tracking- of advertentiecookies. Er wordt precies één voorkeur opgeslagen — licht of donker thema — in de lokale opslag van je browser. Die voorkeur verlaat nooit je apparaat en identificeert je op geen enkele manier.",
      ],
    },
    {
      heading: "Waar je gegevens worden gehost",
      body: [
        "Onze servers bevinden zich binnen de Europese Unie. Verwerkers die we gebruiken zijn onder meer onze hostingprovider ([naam hostingprovider]) en, voor de verzending van contactformulieren, [naam e-mailprovider]. We werken niet met verwerkers buiten de EU/EER voor persoonsgegevens die onder dit beleid vallen.",
      ],
    },
    {
      heading: "Bewaartermijn",
      body: [
        "Contact- en facturatiegegevens van abonnerende organisaties worden bewaard voor de duur van het abonnement, plus de termijn vereist door de boekhoudwetgeving van [land] daarna.",
        "Trainingstotalen van lopers worden bewaard zolang een token actief is, en verwijderd van onze servers zodra het abonnement van de uitgevende organisatie — en de bijbehorende bewaartermijn — is beëindigd.",
        "Inzendingen via het contactformulier worden tot 12 maanden bewaard om opvolging mogelijk te maken, en daarna verwijderd.",
      ],
    },
    {
      heading: "Jouw rechten",
      body: [
        "Onder de AVG heb je recht op inzage, correctie en verwijdering van je gegevens, recht op beperking en bezwaar tegen de verwerking ervan, en recht op overdraagbaarheid. Om een van deze rechten uit te oefenen, mail je naar info@notrackrun.eu of gebruik je het contactformulier. Je hebt ook het recht om een klacht in te dienen bij je nationale gegevensbeschermingsautoriteit — in Nederland de Autoriteit Persoonsgegevens.",
      ],
    },
    {
      heading: "Kinderen",
      body: [
        "Deze dienst is niet gericht op kinderen jonger dan 16 jaar. Als je denkt dat een kind ons persoonsgegevens heeft verstrekt zonder passende toestemming, neem dan contact met ons op zodat we deze kunnen verwijderen.",
      ],
    },
    {
      heading: "Beveiliging",
      body: [
        "We nemen redelijke technische en organisatorische maatregelen om de hierboven beschreven gegevens te beschermen. Geen enkele methode van verzending of opslag is volledig veilig, en we kunnen absolute veiligheid niet garanderen.",
      ],
    },
    {
      heading: "Wijzigingen aan dit beleid",
      body: [
        "We kunnen dit beleid van tijd tot tijd bijwerken. Materiële wijzigingen worden weergegeven door een bijgewerkte datum \"laatst bijgewerkt\" bovenaan deze pagina.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Vragen over dit beleid of je gegevens: info@notrackrun.eu, of via het contactformulier.",
      ],
    },
  ],
};

export const terms: LegalDoc = {
  title: "Algemene voorwaarden",
  lastUpdated: LAST_UPDATED,
  intro:
    "Deze voorwaarden regelen het gebruik van NoTrackRun's webdashboard, mobiele app en horloge-app (zodra beschikbaar) door organisaties die zich abonneren op de dienst (\"jij\", \"de organisatie\") en door de lopers aan wie zij toegang verlenen via tokens. Door je te abonneren, ga je akkoord met deze voorwaarden.",
  sections: [
    {
      heading: "Voor wie deze voorwaarden gelden",
      body: [
        "De abonnerende organisatie — een coach, club of bedrijf — sluit deze overeenkomst en wordt gefactureerd voor de dienst. Individuele lopers gebruiken de mobiele en horloge-app gratis onder een vereenvoudigde acceptatie die wordt getoond wanneer ze voor het eerst een token invoeren; zij worden niet gefactureerd en zijn geen directe partij bij de commerciële voorwaarden hieronder.",
      ],
    },
    {
      heading: "De dienst",
      body: [
        "NoTrackRun biedt een webdashboard voor het bouwen van trainingsschema's en het beheren van lopertoegang, een mobiele app voor het loggen van trainingen, en een horloge-app (momenteel in ontwikkeling). De dienst bevindt zich momenteel in gesloten bèta: functionaliteiten kunnen worden toegevoegd, gewijzigd of verwijderd, en beschikbaarheid wordt niet gegarandeerd.",
      ],
    },
    {
      heading: "Bètastatus",
      body: [
        "Je erkent dat de dienst als bèta wordt geleverd. We kunnen functionaliteit zonder kennisgeving wijzigen, en we garanderen geen bepaald niveau van beschikbaarheid tijdens deze periode. We kunnen bèta-organisaties om feedback vragen om de dienst te verbeteren.",
      ],
    },
    {
      heading: "Formules en tarieven",
      body: [
        "De dienst wordt aangeboden onder de formules Starter, Club en Pro, beschreven op onze prijzenpagina, elk met een vast aantal coachplekken en lopertokens, maandelijks gefactureerd in euro. We kunnen tarieven wijzigen met een opzegtermijn van minstens 30 dagen vóór je volgende factureringscyclus; voortgezet gebruik na het ingaan van een tariefwijziging geldt als aanvaarding.",
      ],
    },
    {
      heading: "Betaling en facturatie",
      body: [
        "Abonnementen worden maandelijks vooraf gefactureerd via [naam betalingsprovider]. Bij een mislukte betaling kunnen we de toegang tot het dashboard en het vermogen van tokens om nieuwe trainingen te synchroniseren opschorten totdat het account is bijgewerkt.",
      ],
    },
    {
      heading: "Tokens en lopertoegang",
      body: [
        "Elke formule bevat een vast aantal lopertokens. Jij bent verantwoordelijk voor hoe je tokens verdeelt en welke naam of pseudoniem je aan elk token koppelt. Een token geeft een loper gratis gebruik van de mobiele en horloge-app, beperkt tot jouw organisatie. Tokens zijn geen persoonlijke accounts en dragen geen garantie van ononderbroken toegang.",
      ],
    },
    {
      heading: "Opzegging",
      body: [
        "Je kunt op elk moment opzeggen; opzegging gaat in aan het einde van je huidige factureringsperiode. Na opzegging stoppen tokens met het synchroniseren van nieuwe trainingsgegevens, en worden historische gegevens verwijderd volgens de bewaartermijnen in ons Privacybeleid.",
      ],
    },
    {
      heading: "Aanvaardbaar gebruik",
      body: [
        "Je gaat ermee akkoord de dienst niet te reverse-engineeren, te scrapen of de toegang ertoe door te verkopen, en de dienst niet te gebruiken om lopers zonder hun medeweten te volgen of te monitoren. Je bent verantwoordelijk om ervoor te zorgen dat de lopers aan wie je een token verleent, akkoord gaan met de naam of het pseudoniem dat je namens hen weergeeft.",
      ],
    },
    {
      heading: "Intellectueel eigendom",
      body: [
        "NoTrackRun, het logo en het onderliggende platform en de software blijven eigendom van [rechtsvorm en naam]. Jij behoudt de volledige eigendom van de trainingsschema's en content die je aanmaakt of uploadt naar het dashboard.",
      ],
    },
    {
      heading: "Gegevensbescherming",
      body: [
        "De verwerking van persoonsgegevens onder deze overeenkomst wordt geregeld door ons Privacybeleid, dat integraal onderdeel uitmaakt van deze voorwaarden.",
      ],
    },
    {
      heading: "Beschikbaarheid van de dienst en support",
      body: [
        "We bieden best-effort support via info@notrackrun.eu. We garanderen geen reactietijd tijdens de bètaperiode, en we communiceren geplande onderhoudswerkzaamheden waar redelijkerwijs mogelijk.",
      ],
    },
    {
      heading: "Aansprakelijkheid",
      body: [
        "Voor zover wettelijk toegestaan, is onze aansprakelijkheid onder deze voorwaarden beperkt tot de vergoedingen die je ons hebt betaald in de 3 maanden voorafgaand aan de claim. We zijn niet aansprakelijk voor indirecte of gevolgschade, of voor trainingsbeslissingen genomen op basis van het platform.",
      ],
    },
    {
      heading: "Beëindiging",
      body: [
        "Elke partij kan deze overeenkomst beëindigen bij een wezenlijke tekortkoming die niet binnen 30 dagen na schriftelijke kennisgeving is verholpen. We kunnen de toegang onmiddellijk opschorten of beëindigen bij veiligheidsrisico's of onrechtmatig gebruik.",
      ],
    },
    {
      heading: "Wijzigingen aan deze voorwaarden",
      body: [
        "We kunnen deze voorwaarden van tijd tot tijd bijwerken. We informeren abonnerende organisaties over materiële wijzigingen per e-mail, met een redelijke termijn voordat ze ingaan.",
      ],
    },
    {
      heading: "Toepasselijk recht en bevoegde rechter",
      body: [
        "Deze voorwaarden worden beheerst door het recht van [land]. Elk geschil dat eruit voortvloeit, wordt voorgelegd aan de exclusieve bevoegdheid van de rechtbanken van [stad], onverminderd eventuele dwingende consumentenbeschermingsregels die op jou van toepassing kunnen zijn.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Vragen over deze voorwaarden: info@notrackrun.eu, of via het contactformulier.",
      ],
    },
  ],
};

export const termsOfUse: LegalDoc = {
  title: "Gebruiksvoorwaarden",
  lastUpdated: LAST_UPDATED,
  intro:
    "Deze voorwaarden gelden voor jou als je als loper de NoTrackRun mobiele of horloge-app gebruikt met een token uitgegeven door je coach, club of bedrijf. Ze staan los van onze Algemene voorwaarden, die de commerciële relatie regelen tussen NoTrackRun en de abonnerende organisatie — jij wordt niet gefactureerd en bent geen partij bij die overeenkomst.",
  sections: [
    {
      heading: "Deze voorwaarden aanvaarden",
      body: [
        "Door een token in te voeren en de app te gebruiken, aanvaard je deze gebruiksvoorwaarden. Ga je niet akkoord, gebruik de app dan niet — vraag je organisatie in plaats daarvan om je token te verwijderen.",
      ],
    },
    {
      heading: "De dienst die je gebruikt",
      body: [
        "Met de mobiele en horloge-app kun je trainingen loggen, het trainingsschema bekijken dat je organisatie voor je heeft ingesteld, en trainingssamenvattingen terugsturen naar je organisatie. Er is geen account, e-mail of wachtwoord nodig — zie ons Privacybeleid voor precies wat we van je weten.",
      ],
    },
    {
      heading: "Jouw token",
      body: [
        "Je token wordt aan je uitgegeven door je organisatie en is uitsluitend aan die organisatie gekoppeld. Deel het niet met iemand voor wie het niet bedoeld is. Verlies je de toegang tot je token, vraag dan je organisatie om een nieuwe uit te geven — wij kunnen dit niet namens jou doen, omdat we je contactgegevens niet bewaren.",
      ],
    },
    {
      heading: "Wat we van je vragen",
      body: [
        "Gebruik de app voor je eigen persoonlijke training. Probeer geen toegang te krijgen tot gegevens van andere lopers of andere organisaties, reverse-engineer de app niet en verstoor de werking ervan niet, en gebruik hem niet voor onwettige doeleinden.",
      ],
    },
    {
      heading: "Jouw gezondheid en trainingsbeslissingen",
      body: [
        "NoTrackRun is een logboek- en planningstool, geen medisch advies en geen vervanging voor professionele coaching of medisch oordeel. Trainingsschema's weerspiegelen wat je coach of organisatie heeft ingesteld, en elke beslissing om ze te volgen — intensiteit, afstand of frequentie — is aan jou. Heb je een gezondheidsprobleem of kom je terug van een blessure, raadpleeg dan een arts voordat je een trainingsprogramma start of wijzigt.",
      ],
    },
    {
      heading: "Beschikbaarheid en wijzigingen",
      body: [
        "De dienst bevindt zich momenteel in bèta en wordt as-is geleverd: we garanderen geen ononderbroken beschikbaarheid, en functionaliteiten kunnen worden toegevoegd, gewijzigd of verwijderd naarmate het product evolueert.",
      ],
    },
    {
      heading: "Aansprakelijkheid",
      body: [
        "Voor zover wettelijk toegestaan, is NoTrackRun niet aansprakelijk voor letsel, schade of verlies voortvloeiend uit je trainingsactiviteit of uit het vertrouwen op informatie in de app. De app ondersteunt je training; hij vervangt niet je eigen oordeel of professioneel advies.",
      ],
    },
    {
      heading: "Intellectueel eigendom",
      body: [
        "De app en de inhoud ervan zijn eigendom van [rechtsvorm en naam]. Je mag de app gebruiken voor je eigen persoonlijke, niet-commerciële training — niets hierin geeft je rechten op de onderliggende software of het ontwerp.",
      ],
    },
    {
      heading: "Je toegang beëindigen",
      body: [
        "Je kunt op elk moment stoppen met het gebruik van de app, en je organisatie kan je token op elk moment intrekken. Omdat er geen persoonlijk account is om te verwijderen, worden je gegevens behandeld volgens de bewaartermijnen in ons Privacybeleid zodra je token niet meer actief is.",
      ],
    },
    {
      heading: "Wijzigingen aan deze voorwaarden",
      body: [
        "We kunnen deze voorwaarden van tijd tot tijd bijwerken. Materiële wijzigingen worden weergegeven door een bijgewerkte datum \"laatst bijgewerkt\", en waar redelijkerwijs mogelijk in de app gecommuniceerd.",
      ],
    },
    {
      heading: "Toepasselijk recht en bevoegde rechter",
      body: [
        "Deze voorwaarden worden beheerst door het recht van [land]. Elk geschil dat eruit voortvloeit, wordt voorgelegd aan de exclusieve bevoegdheid van de rechtbanken van [stad], onverminderd eventuele dwingende consumentenbeschermingsregels die op jou van toepassing kunnen zijn.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Vragen over deze voorwaarden: info@notrackrun.eu, of via het contactformulier.",
      ],
    },
  ],
};
