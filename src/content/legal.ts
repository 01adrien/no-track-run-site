import type { LegalDoc } from "@/types";

const LAST_UPDATED = "Last updated: 4 September 2026";

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  lastUpdated: LAST_UPDATED,
  intro:
    "NoTrackRun is built around collecting as little personal data as possible. This page explains exactly what we collect, why, and how you can control it. For the technical detail of how the token system works, see [how it works](/about).",
  sections: [
    {
      heading: "The short version",
      body: [
        "Used solo, without a token, the app transmits absolutely nothing to our servers — no data, no GPS track, nothing: everything stays on your phone or watch. If you use a token issued by an organization, only the total distance and duration of a session, along with the token associated with you, reach our servers — and even that information is only visible to the organization that issued your token, never used by us for advertising, never sold to anyone.",
      ],
    },
    {
      heading: "Data we collect",
      body: [
        "From runners using the app solo, without a token: nothing. The app runs entirely on your device — no data is collected, transmitted, or stored on our servers.",
        "From runners using a token issued by an organization: the name or pseudonym attached to that token, and aggregate session totals (distance and duration) synced after each session. We don't collect a runner's email, phone number, or any GPS route data, with or without a token.",
        "From subscribing organizations (coaches, clubs, or companies): the email address and organization name used to set up the subscription, and billing information needed to process payment.",
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
        "Our servers are located within the European Union. Subprocessors we use include our hosting provider, IONOS, and, for contact form delivery, IONOS. We don't work with subprocessors outside the EU/EEA for personal data covered by this policy.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "Subscribing organization contact and billing information is kept for the duration of the subscription, plus the period required by Belgian accounting law afterward.",
        "Runner session totals for token users are kept while that token is active, and deleted from our servers once the issuing organization's subscription — and its data retention window — ends. For solo use, this doesn't apply: since no data is ever transmitted, nothing is kept on our end.",
        "Contact form submissions are kept for up to 12 months to allow us to follow up, then deleted.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Under the GDPR, you have the right to access, correct, or delete your data, to restrict or object to its processing, and to receive a copy of it in a portable format. To exercise any of these rights, email info@notrackrun.eu or use the contact form. You also have the right to lodge a complaint with your data protection authority.",
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
        'We may update this policy from time to time. Material changes will be reflected in an updated "last updated" date at the top of this page.',
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
    "These terms govern the subscription to and use of NoTrackRun's web dashboard and application by the organization that subscribes to the service. By subscribing, you agree to these terms.",
  sections: [
    {
      heading: "Who these terms apply to",
      body: [
        "The subscribing organization — a club or a company — enters into this agreement and is solely billed for the service. Individual runners you grant a token to use the mobile and watch apps for free and are not billed; their use of the app is governed by our Terms of Use, not by this document.",
      ],
    },
    {
      heading: "The service",
      body: [
        "NoTrackRun provides a web dashboard for building training plans and managing runner access, a mobile app for logging sessions, and a watch app (currently in development). The service is currently in closed beta: features may be added, changed, or removed, and availability is not guaranteed.",
      ],
    },
    {
      heading: "Beta status",
      body: [
        "You acknowledge that the service is provided as a beta. We may change functionality without notice, and we don't guarantee any level of availability during this period. We may ask beta organizations for feedback to help improve the service.",
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
        "Subscriptions are billed monthly in advance. If payment fails, we may suspend dashboard access and the ability for tokens to sync new sessions until the account is brought current.",
      ],
    },
    {
      heading: "Tokens and runner access",
      body: [
        "Each formula includes a set number of runner tokens. You are responsible for how you distribute tokens and what name or pseudonym you attach to each one. A token grants a runner free use of the mobile and watch apps, scoped to your organization.",
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
        "NoTrackRun, its logo, and the underlying platform and software remain the property of NoTrackRun. You retain full ownership of the training plans and content you create or upload to the dashboard.",
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
        "We provide best-effort support at info@notrackrun.eu. We don't guarantee a response time during the beta period.",
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
        "These terms are governed by Belgian law. Any dispute arising from them will be submitted to the exclusive jurisdiction of the courts of Brussels, subject to any mandatory consumer-protection rules that may apply to you.",
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
    "These terms apply to you if you use the NoTrackRun mobile or watch app — whether solo, by simply downloading it, or with a token issued by your coach, club, or company. They're separate from our Terms & Conditions, which govern only the commercial relationship between NoTrackRun and the subscribing organization — whether you use the app solo or via a token, you are not billed and are not party to that agreement.",
  sections: [
    {
      heading: "Accepting these terms",
      body: [
        "By downloading and using the app — with or without a token — you accept these Terms of Use. If you don't agree, don't use the app.",
      ],
    },
    {
      heading: "The service you're using",
      body: [
        "Used solo, the app lets you log your training sessions and track your stats, with no account or token — everything stays on your device, nothing is transmitted to our servers. If you use a token issued by an organization, the app additionally lets you view the training plan your organization has set up for you, and sync your session summaries to that organization. No account, email, or password is required either way — see our Privacy Policy for the exact detail of what we know about you.",
      ],
    },
    {
      heading: "If you use a token",
      body: [
        "This section only applies to runners linked to an organization — if you use the app solo, it doesn't apply to you. Your token is issued to you by your organization and is tied to that organization only. Don't share it with anyone it wasn't intended for. If you lose access to your token, ask your organization to issue you a new one — we can't do this on your behalf, since we don't hold your contact details.",
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
        "The app and its content belong to NoTrackRun. You may use it for your own personal, non-commercial training — nothing here gives you rights to the underlying software or design.",
      ],
    },
    {
      heading: "Ending your access",
      body: [
        "You can stop using the app at any time. If you're linked to an organization, it can also revoke your token at any time. Since there's no personal account to delete: in solo use, your data stays only on your device and disappears with the app; with a token, it's handled according to the retention rules in our Privacy Policy once that token is deactivated.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        'We may update these terms from time to time. Material changes will be reflected in an updated "last updated" date.',
      ],
    },
    {
      heading: "Governing law and jurisdiction",
      body: [
        "These terms are governed by Belgian law. Any dispute arising from them will be submitted to the exclusive jurisdiction of the courts of Brussels, subject to any mandatory consumer-protection rules that may apply to you.",
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
