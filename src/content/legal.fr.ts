import type { LegalDoc } from "@/types";

const LAST_UPDATED = "Dernière mise à jour : 4 septembre 2026";

export const privacyPolicy: LegalDoc = {
  title: "Politique de confidentialité",
  lastUpdated: LAST_UPDATED,
  intro:
    "NoTrackRun est conçu pour collecter le moins de données personnelles possible. Cette page explique précisément ce que nous collectons, pourquoi, et comment vous pouvez le contrôler. Pour le détail technique du fonctionnement par tokens, voir [comment ça marche](/fr/about) .",
  sections: [
    {
      heading: "Qui nous sommes",
      body: [
        "Ce service est exploité par [raison sociale], immatriculée en [pays] sous le numéro [numéro d'immatriculation], dont le siège social est situé [adresse du siège]. Pour toute question sur cette politique ou sur vos données, contactez-nous à info@notrackrun.eu.",
      ],
    },
    {
      heading: "L'essentiel en bref",
      body: [
        "Les coureurs ne créent jamais de compte directement chez nous. Votre trace GPS ne quitte jamais votre téléphone ou votre montre. Seuls la distance et la durée totales d'une séance, ainsi que le nom ou pseudonyme associé à votre token d'accès, parviennent à nos serveurs — et même ces informations ne sont visibles que par l'organisation qui vous a délivré ce token, jamais par nous à des fins publicitaires, jamais revendues à qui que ce soit.",
      ],
    },
    {
      heading: "Les données que nous collectons",
      body: [
        "Des organisations abonnées (coachs, clubs, entreprises) : l'adresse email et le nom d'organisation utilisés pour créer l'abonnement, ainsi que les informations de facturation nécessaires au paiement.",
        "Des coureurs utilisant un token : le nom ou pseudonyme associé à ce token, et les totaux agrégés de séance (distance et durée) synchronisés après chaque séance. Nous ne collectons ni l'email, ni le téléphone, ni aucune trace GPS d'un coureur.",
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
        "Nos serveurs sont situés au sein de l'Union européenne. Les sous-traitants que nous utilisons incluent notre hébergeur ([nom de l'hébergeur]) et, pour l'envoi des messages du formulaire de contact, [nom du prestataire d'envoi d'emails]. Nous ne travaillons avec aucun sous-traitant hors UE/EEE pour les données personnelles couvertes par cette politique.",
      ],
    },
    {
      heading: "Durée de conservation",
      body: [
        "Les informations de contact et de facturation des organisations abonnées sont conservées pendant la durée de l'abonnement, plus la durée exigée par la législation comptable [du pays] ensuite.",
        "Les totaux de séance des coureurs sont conservés tant qu'un token est actif, et supprimés de nos serveurs une fois l'abonnement de l'organisation émettrice — et sa période de rétention — terminés.",
        "Les soumissions du formulaire de contact sont conservées jusqu'à 12 mois pour permettre un suivi, puis supprimées.",
      ],
    },
    {
      heading: "Vos droits",
      body: [
        "En vertu du RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données, d'un droit de limitation et d'opposition à leur traitement, ainsi que d'un droit à la portabilité. Pour exercer l'un de ces droits, écrivez à info@notrackrun.eu ou utilisez le formulaire de contact. Vous disposez également du droit d'introduire une réclamation auprès de votre autorité de protection des données — en France, la CNIL (cnil.fr).",
      ],
    },
    {
      heading: "Mineurs",
      body: [
        "Ce service ne s'adresse pas aux enfants de moins de 16 ans. Si vous pensez qu'un enfant nous a communiqué des données personnelles sans le consentement approprié, contactez-nous et nous les supprimerons.",
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
    "Ces conditions régissent l'utilisation du tableau de bord web, de l'application mobile et de l'application montre (une fois disponible) de NoTrackRun par les organisations abonnées au service (\"vous\", \"l'organisation\") et par les coureurs auxquels vous accordez l'accès via des tokens. En vous abonnant, vous acceptez ces conditions.",
  sections: [
    {
      heading: "À qui s'appliquent ces conditions",
      body: [
        "L'organisation abonnée — un coach, un club ou une entreprise — conclut cet accord et est facturée pour le service. Les coureurs individuels utilisent les applications mobile et montre gratuitement, sous une acceptation simplifiée affichée lors de la première saisie de leur token ; ils ne sont pas facturés et ne sont pas directement partie aux conditions commerciales ci-dessous.",
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
        "Les abonnements sont facturés mensuellement à l'avance via [nom du prestataire de paiement]. En cas d'échec de paiement, nous pouvons suspendre l'accès au tableau de bord et la capacité des tokens à synchroniser de nouvelles séances jusqu'à régularisation.",
      ],
    },
    {
      heading: "Tokens et accès coureur",
      body: [
        "Chaque formule inclut un nombre défini de tokens coureur. Vous êtes responsable de la manière dont vous distribuez les tokens et du nom ou pseudonyme que vous associez à chacun. Un token accorde à un coureur l'usage gratuit des applications mobile et montre, limité à votre organisation. Les tokens ne sont pas des comptes personnels et ne comportent aucune garantie d'accès ininterrompu.",
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
        "NoTrackRun, son logo, ainsi que la plateforme et le logiciel sous-jacents restent la propriété de [raison sociale]. Vous conservez l'entière propriété des plans d'entraînement et du contenu que vous créez ou téléversez sur le tableau de bord.",
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
        "Nous fournissons un support au mieux via info@notrackrun.eu. Nous ne garantissons pas de délai de réponse durant la période bêta, et nous communiquerons les maintenances planifiées dans la mesure du raisonnablement possible.",
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
        "Ces conditions sont régies par le droit [du pays]. Tout litige en découlant sera soumis à la compétence exclusive des tribunaux de [ville], sous réserve des règles impératives de protection des consommateurs qui pourraient vous être applicables.",
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
    "Ces conditions s'appliquent à vous si vous êtes un coureur utilisant l'application mobile ou montre NoTrackRun avec un token délivré par votre coach, votre club ou votre entreprise. Elles sont distinctes de nos Conditions générales de vente, qui régissent la relation commerciale entre NoTrackRun et l'organisation abonnée — vous n'êtes pas facturé et n'êtes pas partie à cet accord.",
  sections: [
    {
      heading: "Acceptation de ces conditions",
      body: [
        "En saisissant un token et en utilisant l'application, vous acceptez ces conditions générales d'utilisation. Si vous n'êtes pas d'accord, n'utilisez pas l'application — demandez plutôt à votre organisation de retirer votre token.",
      ],
    },
    {
      heading: "Le service que vous utilisez",
      body: [
        "Les applications mobile et montre vous permettent d'enregistrer vos séances d'entraînement, de consulter le plan que votre organisation a mis en place pour vous, et de synchroniser les résumés de séance vers votre organisation. Aucun compte, email ou mot de passe n'est requis — voir notre Politique de confidentialité pour savoir exactement ce que nous savons de vous.",
      ],
    },
    {
      heading: "Votre token",
      body: [
        "Votre token vous est délivré par votre organisation et est lié à celle-ci uniquement. Ne le partagez avec personne d'autre que prévu. Si vous perdez l'accès à votre token, demandez à votre organisation de vous en délivrer un nouveau — nous ne pouvons pas le faire à votre place, puisque nous ne détenons pas vos coordonnées.",
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
        "L'application et son contenu appartiennent à [raison sociale]. Vous pouvez l'utiliser pour votre propre entraînement personnel et non commercial — rien ici ne vous confère de droits sur le logiciel ou le design sous-jacents.",
      ],
    },
    {
      heading: "Mettre fin à votre accès",
      body: [
        "Vous pouvez arrêter d'utiliser l'application à tout moment, et votre organisation peut révoquer votre token à tout moment. Comme il n'existe pas de compte personnel à supprimer, vos données sont traitées selon les règles de conservation de notre Politique de confidentialité une fois votre token désactivé.",
      ],
    },
    {
      heading: "Modifications de ces conditions",
      body: [
        'Nous pouvons mettre à jour ces conditions de temps à autre. Les changements significatifs seront reflétés par une date de "dernière mise à jour" actualisée, et communiqués dans l\'application dans la mesure du raisonnablement possible.',
      ],
    },
    {
      heading: "Droit applicable et juridiction",
      body: [
        "Ces conditions sont régies par le droit [du pays]. Tout litige en découlant sera soumis à la compétence exclusive des tribunaux de [ville], sous réserve des règles impératives de protection des consommateurs qui pourraient vous être applicables.",
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
