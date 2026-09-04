// Contenu legal (EN). Voir legal.fr.ts et legal.nl.ts pour les traductions —
// les trois fichiers doivent garder exactement la meme forme (memes cles,
// meme nombre de sections).
//
// TODO avant publication : remplacer tous les [placeholders] par les vraies
// informations (raison sociale, SIRET/numero d'immatriculation, adresse,
// prestataires, juridiction), et faire relire par un juriste — en particulier
// les CGV (facturation, resiliation, responsabilite).
import type { LegalDoc } from "@/types";

const LAST_UPDATED = "Last updated: 4 September 2026";

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  lastUpdated: LAST_UPDATED,
  intro:
    "NoTrackRun is built around collecting as little personal data as possible. This page explains exactly what we collect, why, and how you can control it. For the technical detail of how the token system works, see How it works.",
  sections: [
    {
      heading: "Who we are",
      body: [
        "This service is operated by [legal company name], registered in [country] under number [registration number], with its registered office at [registered address]. For any question about this policy or your data, contact us at info@notrackrun.eu.",
      ],
    },
    {
      heading: "The short version",
      body: [
        "Runners never create an account with us directly. Your GPS route never leaves your phone or watch. The only things that reach our servers are a session's total distance and duration, and the name or pseudonym attached to your access token — and even those are only visible to the organization that issued your token, never to us for advertising, never sold to anyone else.",
      ],
    },
    {
      heading: "Data we collect",
      body: [
        "From subscribing organizations (coaches, clubs, or companies): the email address and organization name used to set up the subscription, and billing information needed to process payment.",
        "From runners using a token: the name or pseudonym attached to that token, and aggregate session totals (distance and duration) synced after each session. We do not collect a runner's email, phone number, or any GPS route data.",
        "From anyone who contacts us: the name, email, role, optional organization name, and message submitted through the contact form.",
      ],
    },
    {
      heading: "What we don't collect",
      body: [
        "We don't run advertising trackers or third-party analytics SDKs inside the mobile or watch apps. We don't build behavioral profiles. We don't collect or store GPS routes on our servers — that data stays on your device.",
      ],
    },
    {
      heading: "How we use this data",
      body: [
        "To provide the service: operating the web dashboard, syncing session summaries to the correct organization, and generating training plans.",
        "To respond to messages sent through the contact form.",
        "To bill subscribing organizations and maintain the accounting records we're legally required to keep.",
      ],
    },
    {
      heading: "Legal basis for processing",
      body: [
        "We process subscribing organizations' data to perform our contract with them (Art. 6(1)(b) GDPR). We process runner session data on the same basis, as part of delivering the service the organization has subscribed to on the runner's behalf. Contact form submissions are processed based on your consent in sending them, and for our legitimate interest in responding (Art. 6(1)(f) GDPR).",
      ],
    },
    {
      heading: "Cookies and local storage",
      body: [
        "This website does not use tracking or advertising cookies. It stores exactly one preference — light or dark theme — in your browser's local storage. That preference never leaves your device and identifies nothing about you.",
      ],
    },
    {
      heading: "Where your data is hosted",
      body: [
        "Our servers are located within the European Union. Subprocessors we use include our hosting provider ([hosting provider name]) and, for contact form delivery, [email delivery provider name]. We don't work with subprocessors outside the EU/EEA for personal data covered by this policy.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "Subscribing organization contact and billing information is kept for the duration of the subscription, plus the period required by [country] accounting law afterward.",
        "Runner session totals are kept while a token is active, and deleted from our servers once the issuing organization's subscription — and its data retention window — ends.",
        "Contact form submissions are kept for up to 12 months to allow us to follow up, then deleted.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Under the GDPR, you have the right to access, correct, or delete your data, to restrict or object to its processing, and to receive a copy of it in a portable format. To exercise any of these rights, email info@notrackrun.eu or use the contact form. You also have the right to lodge a complaint with your national data protection authority — in France, the CNIL (cnil.fr).",
      ],
    },
    {
      heading: "Children",
      body: [
        "This service is not directed at children under 16. If you believe a child has provided us with personal data without appropriate consent, contact us and we will delete it.",
      ],
    },
    {
      heading: "Security",
      body: [
        "We take reasonable technical and organizational measures to protect the data described above. No method of transmission or storage is completely secure, and we can't guarantee absolute security.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this policy from time to time. Material changes will be reflected in an updated \"last updated\" date at the top of this page.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions about this policy or your data: info@notrackrun.eu, or use the contact form.",
      ],
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms & Conditions",
  lastUpdated: LAST_UPDATED,
  intro:
    "These terms govern the use of NoTrackRun's web dashboard, mobile app, and watch app (once available) by organizations that subscribe to the service (\"you\", \"the organization\") and by the runners they grant access to via tokens. By subscribing, you agree to these terms.",
  sections: [
    {
      heading: "Who these terms apply to",
      body: [
        "The subscribing organization — a coach, club, or company — enters into this agreement and is billed for the service. Individual runners use the mobile and watch apps for free under a simplified acceptance shown when they first enter a token; they are not billed and are not directly party to the commercial terms below.",
      ],
    },
    {
      heading: "The service",
      body: [
        "NoTrackRun provides a web dashboard for building training plans and managing runner access, a mobile app for logging training sessions, and a watch app (currently in development). The service is currently in closed beta: features may be added, changed, or removed, and availability is not guaranteed.",
      ],
    },
    {
      heading: "Beta status",
      body: [
        "You acknowledge that the service is provided as a beta. We may change functionality without notice, and we don't guarantee any level of uptime or availability during this period. We may ask beta organizations for feedback to help improve the service.",
      ],
    },
    {
      heading: "Formulas and pricing",
      body: [
        "The service is offered under the Starter, Club, and Pro formulas described on our pricing page, each including a defined number of coach seats and runner tokens, billed monthly in EUR. We may change prices with at least 30 days' notice before your next billing cycle; continued use after a price change takes effect constitutes acceptance.",
      ],
    },
    {
      heading: "Payment and billing",
      body: [
        "Subscriptions are billed monthly in advance via [payment provider name]. If payment fails, we may suspend dashboard access and the ability for tokens to sync new sessions until the account is brought current.",
      ],
    },
    {
      heading: "Tokens and runner access",
      body: [
        "Each formula includes a set number of runner tokens. You are responsible for how you distribute tokens and what name or pseudonym you attach to each one. A token grants a runner free use of the mobile and watch apps, scoped to your organization. Tokens are not personal accounts and don't carry any warranty of uninterrupted access.",
      ],
    },
    {
      heading: "Cancellation",
      body: [
        "You may cancel at any time; cancellation takes effect at the end of your current billing period. Once cancelled, tokens stop syncing new session data, and historical data is deleted according to the retention terms in our Privacy Policy.",
      ],
    },
    {
      heading: "Acceptable use",
      body: [
        "You agree not to reverse engineer, scrape, or resell access to the service, and not to use it to track or monitor runners without their knowledge. You are responsible for making sure the runners you grant tokens to are comfortable with the name or pseudonym you display on their behalf.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "NoTrackRun, its logo, and the underlying platform and software remain the property of [legal company name]. You retain full ownership of the training plans and content you create or upload to the dashboard.",
      ],
    },
    {
      heading: "Data protection",
      body: [
        "Processing of personal data under this agreement is governed by our Privacy Policy, which forms part of these terms.",
      ],
    },
    {
      heading: "Service availability and support",
      body: [
        "We provide best-effort support at info@notrackrun.eu. We don't guarantee a response time during the beta period, and we'll communicate planned maintenance where reasonably possible.",
      ],
    },
    {
      heading: "Liability",
      body: [
        "To the extent permitted by law, our liability under these terms is limited to the fees you paid us in the 3 months preceding the claim. We are not liable for indirect or consequential damages, or for training decisions made using the platform.",
      ],
    },
    {
      heading: "Termination",
      body: [
        "Either party may terminate this agreement for material breach not remedied within 30 days of written notice. We may suspend or terminate access immediately in cases of security risk or unlawful use.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these terms from time to time. We'll notify subscribing organizations of material changes by email with reasonable notice before they take effect.",
      ],
    },
    {
      heading: "Governing law and jurisdiction",
      body: [
        "These terms are governed by the laws of [country]. Any dispute arising from them will be submitted to the exclusive jurisdiction of the courts of [city], subject to any mandatory consumer-protection rules that may apply to you.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions about these terms: info@notrackrun.eu, or use the contact form.",
      ],
    },
  ],
};

export const termsOfUse: LegalDoc = {
  title: "Terms of Use",
  lastUpdated: LAST_UPDATED,
  intro:
    "These terms apply to you if you're a runner using the NoTrackRun mobile or watch app with a token issued by your coach, club, or company. They're separate from our Terms & Conditions, which govern the commercial relationship between NoTrackRun and the organization that subscribes — you are not billed and are not party to that agreement.",
  sections: [
    {
      heading: "Accepting these terms",
      body: [
        "By entering a token and using the app, you accept these Terms of Use. If you don't agree, don't use the app — ask your organization to remove your token instead.",
      ],
    },
    {
      heading: "The service you're using",
      body: [
        "The mobile and watch apps let you log training sessions, view the training plan your organization has set up for you, and sync session summaries back to your organization. No account, email, or password is required — see our Privacy Policy for exactly what we know about you.",
      ],
    },
    {
      heading: "Your token",
      body: [
        "Your token is issued to you by your organization and is tied to that organization only. Don't share it with anyone it wasn't intended for. If you lose access to your token, ask your organization to issue you a new one — we can't do this on your behalf, since we don't hold your contact details.",
      ],
    },
    {
      heading: "What we ask of you",
      body: [
        "Use the app for your own personal training. Don't attempt to access data belonging to other runners or other organizations, don't reverse engineer or interfere with the app, and don't use it for anything unlawful.",
      ],
    },
    {
      heading: "Your health and training decisions",
      body: [
        "NoTrackRun is a logging and planning tool, not medical advice and not a substitute for professional coaching or medical judgment. Training plans reflect what your coach or organization has set up, and any decision to follow them — including intensity, distance, or frequency — is yours. If you have a health condition or you're returning from injury, check with a doctor before starting or changing a training program.",
      ],
    },
    {
      heading: "Availability and changes",
      body: [
        "The service is currently in beta and provided as-is: we don't guarantee uninterrupted availability, and features may be added, changed, or removed as the product evolves.",
      ],
    },
    {
      heading: "Liability",
      body: [
        "To the extent permitted by law, NoTrackRun is not liable for injuries, damages, or losses arising from your training activity or from relying on information in the app. The app supports your training; it doesn't replace your own judgment or professional advice.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The app and its content belong to [legal company name]. You may use it for your own personal, non-commercial training — nothing here gives you rights to the underlying software or design.",
      ],
    },
    {
      heading: "Ending your access",
      body: [
        "You can stop using the app at any time, and your organization can revoke your token at any time. Since there's no personal account to delete, your data is handled according to the retention rules in our Privacy Policy once your token is no longer active.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these terms from time to time. Material changes will be reflected in an updated \"last updated\" date, and where reasonably possible, communicated in the app.",
      ],
    },
    {
      heading: "Governing law and jurisdiction",
      body: [
        "These terms are governed by the laws of [country]. Any dispute arising from them will be submitted to the exclusive jurisdiction of the courts of [city], subject to any mandatory consumer-protection rules that may apply to you.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions about these terms: info@notrackrun.eu, or use the contact form.",
      ],
    },
  ],
};
