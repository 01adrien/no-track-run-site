import type { LegalDoc } from "@/types";

const LAST_UPDATED = "Dernière mise à jour : 4 septembre 2026";

export const privacyPolicy: LegalDoc = {
  title: "Politique de confidentialité",
  lastUpdated: LAST_UPDATED,
  intro:
    "NoTrackRun est conçu pour collecter le moins de données personnelles possible. Cette page explique précisément ce que nous collectons, pourquoi, et comment vous pouvez le contrôler. Pour le détail technique du fonctionnement par tokens, voir [comment ça marche](/fr/about).",
  sections: [
    {
      heading: "L'essentiel en bref",
      body: [
        "Utilisée en solo, sans token, l'application ne transmet absolument rien à nos serveurs — aucune donnée, aucune trace GPS, rien : tout reste sur votre téléphone ou votre montre. Si vous utilisez un token délivré par une organisation, seules la distance et la durée totales d'une séance, ainsi que le token qui vous est associé, parviennent à nos serveurs — et même ces informations ne sont visibles que par l'organisation qui vous a délivré ce token, jamais par nous à des fins publicitaires, jamais revendues à qui que ce soit.",
      ],
    },
    {
      heading: "Les données que nous collectons",
      body: [
        "Des coureurs utilisant l'application en solo, sans token : rien. L'application fonctionne entièrement sur votre appareil — aucune donnée n'est collectée, transmise ou stockée sur nos serveurs.",
        "Des coureurs utilisant un token délivré par une organisation : le nom ou pseudonyme associé à ce token, et les totaux agrégés de séance (distance et durée) synchronisés après chaque séance. Nous ne collectons ni l'email, ni le téléphone, ni aucune trace GPS d'un coureur, avec ou sans token.",
        "Des organisations abonnées (coachs, clubs, entreprises) : l'adresse email et le nom d'organisation utilisés pour créer l'abonnement, ainsi que les informations de facturation nécessaires au paiement.",
        "De toute personne qui nous contacte : le nom, l'email, le rôle, le nom d'organisation (optionnel) et le message soumis via le formulaire de contact.",
      ],
    },
    {
      heading: "Ce que nous ne collectons pas",
      body: [
        "Nous n'utilisons aucun traqueur publicitaire ni SDK d'analyse tiers dans les applications mobile ou montre. Nous ne construisons aucun profil comportemental. Nous ne collectons ni ne stockons de trace GPS sur nos serveurs — ces données restent sur votre appareil.",
      ],
    },
    {
      heading: "Comment nous utilisons ces données",
      body: [
        "Pour fournir le service : faire fonctionner le tableau de bord web, synchroniser les résumés de séance vers la bonne organisation, générer les plans d'entraînement.",
        "Pour répondre aux messages envoyés via le formulaire de contact.",
        "Pour facturer les organisations abonnées et tenir la comptabilité que la loi nous impose de conserver.",
      ],
    },
    {
      heading: "Base légale du traitement",
      body: [
        "Nous traitons les données des organisations abonnées pour exécuter notre contrat avec elles (art. 6(1)(b) RGPD). Nous traitons les données de séance des coureurs sur la même base, dans le cadre de la fourniture du service que l'organisation a souscrit pour leur compte. Les soumissions du formulaire de contact sont traitées sur la base de votre consentement à les envoyer, et de notre intérêt légitime à y répondre (art. 6(1)(f) RGPD).",
      ],
    },
    {
      heading: "Cookies et stockage local",
      body: [
        "Ce site n'utilise aucun cookie de tracking ou publicitaire. Il stocke exactement une préférence — thème clair ou sombre — dans le stockage local de votre navigateur. Cette préférence ne quitte jamais votre appareil et ne permet de vous identifier en rien.",
      ],
    },
    {
      heading: "Où vos données sont hébergées",
      body: [
        "Nos serveurs sont situés au sein de l'Union européenne. Les sous-traitants que nous utilisons incluent notre hébergeur IONOS et, pour l'envoi des messages du formulaire de contact, IONOS. Nous ne travaillons avec aucun sous-traitant hors UE/EEE pour les données personnelles couvertes par cette politique.",
      ],
    },
    {
      heading: "Durée de conservation",
      body: [
        "Les informations de contact et de facturation des organisations abonnées sont conservées pendant la durée de l'abonnement, plus la durée exigée par la législation comptable Belge ensuite.",
        "Les totaux de séance des coureurs utilisant un token sont conservés tant que ce token est actif, et supprimés de nos serveurs une fois l'abonnement de l'organisation émettrice — et sa période de rétention — terminés. Pour un usage en solo, cette question ne se pose pas : aucune donnée n'étant jamais transmise, rien n'est conservé de notre côté.",
        "Les soumissions du formulaire de contact sont conservées jusqu'à 12 mois pour permettre un suivi, puis supprimées.",
      ],
    },
    {
      heading: "Vos droits",
      body: [
        "En vertu du RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données, d'un droit de limitation et d'opposition à leur traitement, ainsi que d'un droit à la portabilité. Pour exercer l'un de ces droits, écrivez à info@notrackrun.eu ou utilisez le formulaire de contact. Vous disposez également du droit d'introduire une réclamation auprès de votre autorité de protection des données.",
      ],
    },
    {
      heading: "Sécurité",
      body: [
        "Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger les données décrites ci-dessus. Aucune méthode de transmission ou de stockage n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.",
      ],
    },
    {
      heading: "Modifications de cette politique",
      body: [
        'Nous pouvons mettre à jour cette politique de temps à autre. Les changements significatifs seront reflétés par une date de "dernière mise à jour" actualisée en haut de cette page.',
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions sur cette politique ou sur vos données : info@notrackrun.eu, ou via le formulaire de contact.",
      ],
    },
  ],
};

export const terms: LegalDoc = {
  title: "Conditions générales de vente",
  lastUpdated: LAST_UPDATED,
  intro:
    "Ces conditions régissent l'abonnement et l'utilisation du tableau de bord web et de l'application de NoTrackRun par l'organisation qui souscrit au service. En vous abonnant, vous acceptez ces conditions.",
  sections: [
    {
      heading: "À qui s'appliquent ces conditions",
      body: [
        "L'organisation abonnée — un club ou une entreprise — conclut cet accord et est seule facturée pour le service. Les coureurs individuels auxquels vous accordez un token utilisent les applications mobile et montre gratuitement et ne sont pas facturés ; leur usage de l'application relève de nos Conditions générales d'utilisation, pas du présent document.",
      ],
    },
    {
      heading: "Le service",
      body: [
        "NoTrackRun fournit un tableau de bord web pour construire des plans d'entraînement et gérer l'accès des coureurs, une application mobile pour enregistrer les séances, et une application montre (actuellement en développement). Le service est actuellement en bêta fermée : les fonctionnalités peuvent être ajoutées, modifiées ou retirées, et la disponibilité n'est pas garantie.",
      ],
    },
    {
      heading: "Statut bêta",
      body: [
        "Vous reconnaissez que le service est fourni en version bêta. Nous pouvons modifier les fonctionnalités sans préavis, et nous ne garantissons aucun niveau de disponibilité durant cette période. Nous pouvons solliciter les retours des organisations bêta-testeuses pour améliorer le service.",
      ],
    },
    {
      heading: "Formules et tarifs",
      body: [
        "Le service est proposé selon les formules Starter, Club et Pro décrites sur notre page tarifs, incluant chacune un nombre défini de places coach et de tokens coureur, facturées mensuellement en euros. Nous pouvons modifier les tarifs avec un préavis d'au moins 30 jours avant votre prochain cycle de facturation ; la poursuite de l'utilisation après l'entrée en vigueur d'un changement de tarif vaut acceptation.",
      ],
    },
    {
      heading: "Paiement et facturation",
      body: [
        "Les abonnements sont facturés mensuellement à l'avance. En cas d'échec de paiement, nous pouvons suspendre l'accès au tableau de bord et la capacité des tokens à synchroniser de nouvelles séances jusqu'à régularisation.",
      ],
    },
    {
      heading: "Tokens et accès coureur",
      body: [
        "Chaque formule inclut un nombre défini de tokens coureur. Vous êtes responsable de la manière dont vous distribuez les tokens et du nom ou pseudonyme que vous associez à chacun. Un token accorde à un coureur l'usage gratuit des applications mobile et montre, limité à votre organisation.",
      ],
    },
    {
      heading: "Résiliation",
      body: [
        "Vous pouvez résilier à tout moment ; la résiliation prend effet à la fin de votre période de facturation en cours. Une fois résiliés, les tokens cessent de synchroniser de nouvelles données de séance, et les données historiques sont supprimées selon les conditions de conservation de notre Politique de confidentialité.",
      ],
    },
    {
      heading: "Utilisation autorisée",
      body: [
        "Vous vous engagez à ne pas décompiler, extraire (scraper) ou revendre l'accès au service, et à ne pas l'utiliser pour surveiller ou suivre des coureurs à leur insu. Vous êtes responsable de vous assurer que les coureurs auxquels vous accordez un token sont à l'aise avec le nom ou pseudonyme que vous affichez en leur nom.",
      ],
    },
    {
      heading: "Propriété intellectuelle",
      body: [
        "NoTrackRun, son logo, ainsi que la plateforme et le logiciel sous-jacents restent la propriété de NoTrackRun. Vous conservez l'entière propriété des plans d'entraînement et du contenu que vous créez ou téléversez sur le tableau de bord.",
      ],
    },
    {
      heading: "Protection des données",
      body: [
        "Le traitement des données personnelles dans le cadre de cet accord est régi par notre Politique de confidentialité, qui fait partie intégrante de ces conditions.",
      ],
    },
    {
      heading: "Disponibilité du service et support",
      body: [
        "Nous fournissons un support au mieux via info@notrackrun.eu. Nous ne garantissons pas de délai de réponse durant la période bêta.",
      ],
    },
    {
      heading: "Responsabilité",
      body: [
        "Dans la limite permise par la loi, notre responsabilité au titre de ces conditions est limitée aux sommes que vous nous avez versées au cours des 3 mois précédant la réclamation. Nous ne sommes pas responsables des dommages indirects ou consécutifs, ni des décisions d'entraînement prises à partir de la plateforme.",
      ],
    },
    {
      heading: "Résiliation pour manquement",
      body: [
        "Chaque partie peut résilier cet accord en cas de manquement substantiel non corrigé dans les 30 jours suivant une notification écrite. Nous pouvons suspendre ou résilier l'accès immédiatement en cas de risque de sécurité ou d'utilisation illicite.",
      ],
    },
    {
      heading: "Modifications de ces conditions",
      body: [
        "Nous pouvons mettre à jour ces conditions de temps à autre. Nous informerons les organisations abonnées de tout changement significatif par email, avec un préavis raisonnable avant son entrée en vigueur.",
      ],
    },
    {
      heading: "Droit applicable et juridiction",
      body: [
        "Ces conditions sont régies par le droit Belge. Tout litige en découlant sera soumis à la compétence exclusive des tribunaux de Bruxelles, sous réserve des règles impératives de protection des consommateurs qui pourraient vous être applicables.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions sur ces conditions : info@notrackrun.eu, ou via le formulaire de contact.",
      ],
    },
  ],
};

export const termsOfUse: LegalDoc = {
  title: "Conditions générales d'utilisation",
  lastUpdated: LAST_UPDATED,
  intro:
    "Ces conditions s'appliquent à vous si vous utilisez l'application mobile ou montre NoTrackRun — que ce soit en solo, en la téléchargeant simplement, ou avec un token délivré par votre coach, votre club ou votre entreprise. Elles sont distinctes de nos Conditions générales de vente, qui régissent uniquement la relation commerciale entre NoTrackRun et l'organisation abonnée — si vous utilisez l'application en solo ou via un token, vous n'êtes pas facturé et n'êtes pas partie à cet accord.",
  sections: [
    {
      heading: "Acceptation de ces conditions",
      body: [
        "En téléchargeant et en utilisant l'application — avec ou sans token — vous acceptez ces conditions générales d'utilisation. Si vous n'êtes pas d'accord, n'utilisez pas l'application.",
      ],
    },
    {
      heading: "Le service que vous utilisez",
      body: [
        "Utilisée en solo, l'application vous permet d'enregistrer vos séances d'entraînement et de suivre vos statistiques, sans compte ni token — tout reste sur votre appareil, rien n'est transmis à nos serveurs. Si vous utilisez un token délivré par une organisation, l'application vous permet en plus de consulter le plan que votre organisation a mis en place pour vous, et de synchroniser vos résumés de séance vers cette organisation. Aucun compte, email ou mot de passe n'est requis dans un cas comme dans l'autre — voir notre Politique de confidentialité pour le détail exact de ce que nous savons de vous.",
      ],
    },
    {
      heading: "Si vous utilisez un token",
      body: [
        "Cette section ne concerne que les coureurs rattachés à une organisation — si vous utilisez l'application en solo, elle ne s'applique pas à vous. Votre token vous est délivré par votre organisation et est lié à celle-ci uniquement. Ne le partagez avec personne d'autre que prévu. Si vous perdez l'accès à votre token, demandez à votre organisation de vous en délivrer un nouveau — nous ne pouvons pas le faire à votre place, puisque nous ne détenons pas vos coordonnées.",
      ],
    },
    {
      heading: "Ce que nous vous demandons",
      body: [
        "Utilisez l'application pour votre propre entraînement personnel. N'essayez pas d'accéder aux données d'autres coureurs ou d'autres organisations, ne décompilez pas l'application et n'interférez pas avec son fonctionnement, et ne l'utilisez pas à des fins illicites.",
      ],
    },
    {
      heading: "Votre santé et vos décisions d'entraînement",
      body: [
        "NoTrackRun est un outil d'enregistrement et de planification, pas un avis médical ni un substitut à un encadrement professionnel ou à un avis médical. Les plans d'entraînement reflètent ce que votre coach ou organisation a mis en place, et toute décision de les suivre — intensité, distance ou fréquence — vous appartient. Si vous avez un problème de santé ou revenez d'une blessure, consultez un médecin avant de commencer ou de modifier un programme d'entraînement.",
      ],
    },
    {
      heading: "Disponibilité et évolutions",
      body: [
        "Le service est actuellement en bêta et fourni tel quel : nous ne garantissons pas une disponibilité ininterrompue, et les fonctionnalités peuvent être ajoutées, modifiées ou retirées à mesure que le produit évolue.",
      ],
    },
    {
      heading: "Responsabilité",
      body: [
        "Dans la limite permise par la loi, NoTrackRun n'est pas responsable des blessures, dommages ou pertes résultant de votre activité d'entraînement ou du fait de vous être fié aux informations de l'application. L'application accompagne votre entraînement ; elle ne remplace pas votre propre jugement ni un avis professionnel.",
      ],
    },
    {
      heading: "Propriété intellectuelle",
      body: [
        "L'application et son contenu appartiennent à NoTrackRun. Vous pouvez l'utiliser pour votre propre entraînement personnel et non commercial — rien ici ne vous confère de droits sur le logiciel ou le design sous-jacents.",
      ],
    },
    {
      heading: "Mettre fin à votre accès",
      body: [
        "Vous pouvez arrêter d'utiliser l'application à tout moment. Si vous êtes rattaché à une organisation, celle-ci peut aussi révoquer votre token à tout moment. Comme il n'existe pas de compte personnel à supprimer : en solo, vos données restent uniquement sur votre appareil et disparaissent avec l'application ; avec un token, elles sont traitées selon les règles de conservation de notre Politique de confidentialité une fois celui-ci désactivé.",
      ],
    },
    {
      heading: "Modifications de ces conditions",
      body: [
        'Nous pouvons mettre à jour ces conditions de temps à autre. Les changements significatifs seront reflétés par une date de "dernière mise à jour" actualisée.',
      ],
    },
    {
      heading: "Droit applicable et juridiction",
      body: [
        "Ces conditions sont régies par le droit Belge. Tout litige en découlant sera soumis à la compétence exclusive des tribunaux de Bruxelles, sous réserve des règles impératives de protection des consommateurs qui pourraient vous être applicables.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions sur ces conditions : info@notrackrun.eu, ou via le formulaire de contact.",
      ],
    },
  ],
};
