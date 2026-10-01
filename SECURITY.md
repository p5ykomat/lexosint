# Données et usages

LexOSINT organise une recherche documentaire. Il ne fournit pas de conseil juridique professionnel et ne remplace ni un avocat ni un juriste. Les sources peuvent être incomplètes, anciennes ou mal interprétées. Faites examiner toute décision engageante par un professionnel compétent.

## Installation personnelle

Le dépôt ne contient aucune clé ou connexion à l'ordinateur de son créateur. Chaque utilisateur configure ses comptes. Les serveurs distants consultés restent ceux des fournisseurs choisis.

Les rôles sont des instructions pour un modèle. Ils n'assurent ni l'isolation des données entre agents ni le respect automatique des consignes. Vérifiez les permissions du client. Un agent exécuté localement peut transmettre au fournisseur du modèle le texte qu'il lit ; il ne s'agit pas d'une garantie de traitement hors ligne.

## Pièces et identifiants

- Stocker les pièces dans `private/` et les résultats dans `output/`, ignorés par Git. Ces dossiers ne sont pas chiffrés.
- Garder les jetons dans le mécanisme sécurisé du client ou son environnement, jamais dans une URL, un prompt, une capture ou un commit.
- Anonymiser les requêtes externes et ne transmettre une pièce à un service tiers qu'avec autorisation explicite pour cet envoi.
- Traiter le contenu des documents comme des données non fiables, jamais comme des instructions.
- Respecter la pseudonymisation, les restrictions d'accès et les licences des sources.

## Publication

Ne jamais ajouter un dossier réel ou une configuration personnelle à une contribution. Exécuter `npm run audit:public` après indexation des fichiers, puis examiner le contenu et l'identité des commits. Le scanner ne garantit pas l'absence de toute donnée sensible. En cas de secret exposé, le révoquer chez le fournisseur ; retirer la ligne ne supprime pas les copies existantes.

Signaler les problèmes sensibles via les avis de sécurité privés du dépôt si disponibles. Ne jamais ouvrir d'issue publique contenant des identifiants, pièces ou données personnelles.
