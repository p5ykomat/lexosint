# Capacités et couverture

## Trois couches distinctes

| Couche | Fourni dans le dépôt | Exécution |
|---|---|---|
| Orchestration | AGENTS.md, CLAUDE.md et skill avec déclencheurs | Agent principal de votre client |
| Collectes | Trois profils génériques et générateur Codex / Claude Code | Sous-agents du client, si disponibles |
| Sources | Guides et adresses des services publics ou tiers | MCP et outils web que vous connectez |

Le projet ne prétend pas héberger les bases juridiques ni fournir un serveur MCP juridique propriétaire. Il organise l'utilisation des outils réellement disponibles. Une liste de capacités n'est pas une preuve qu'un compte a accès à toutes les sources.

## Cartographie de recherche

| Besoin | Voie structurée à privilégier | Repli ou complément |
|---|---|---|
| Code du travail et Code de commerce | OpenLégi Légifrance | Légifrance direct |
| Convention, IDCC, avenant et extension | Fonds KALI exposé par le MCP | Légifrance, Code du travail numérique |
| Accords d'entreprise | Outils du fonds correspondant s'ils sont exposés | Recherche officielle et pièce fournie |
| Jurisprudence judiciaire | OpenLégi si connecté, ou publications officielles | Cour de cassation, Légifrance, Judilibre via un connecteur déjà disponible |
| Évolution d'un texte | Versions consolidées et JORF disponibles | Publication officielle datée |
| Documentation sur un calcul social | Textes et barèmes publiés | Présentation des simulateurs officiels et de leurs limites, sans validation individuelle |
| Identité et statut d'entreprise, si utile | Annuaire des entreprises | Vérification ponctuelle avec OSINT Business déjà connecté |
| Acte ou statuts précis | INPI selon les droits, pièce publique obtenue légalement ou fournie | OSINT Business déjà connecté, selon les droits |
| Annonce ou procédure publiée | BODACC direct | Recherche ponctuelle avec OSINT Business déjà connecté |
| Source complémentaire française | MCP data.gouv.fr | Ressource officielle du producteur |

La méthode est détaillée dans les grilles [travail](../.agents/skills/lexosint/references/travail.md), [sociétés](../.agents/skills/lexosint/references/societes.md) et [contrôle final](../.agents/skills/lexosint/references/couverture.md).

OSINT Business est un complément ponctuel, jamais un prérequis. LexOSINT ne lance pas d'enquête approfondie sur les entreprises ou leurs ramifications par défaut. Une publication officielle directe ou une pièce fournie peut suffire ; il n'est pas nécessaire d'installer un autre dépôt.

## Ce qui n'est pas automatisé

Pas de représentation juridique, dépôt de procédure, envoi de courrier, signature, achat de pièce, surveillance permanente ni calcul universel des délais. Pas d'accès aux bases privées du créateur. Les outils de recherche et les sous-agents ne garantissent ni exhaustivité ni exactitude juridique.

## Références techniques

- [Fonds KALI et consultation des articles](https://www.openlegi.fr/documentation/fonds-disponibles/fonds-kali-conventions-collectives/).
- [Catalogue des outils OpenLégi](https://auth.openlegi.fr/documentation/outils/liste-des-outils/).
- [API officielle Légifrance via PISTE](https://www.data.gouv.fr/dataservices/legifrance). Cette API directe est une autre voie d'intégration, elle n'est pas implémentée par les scripts de ce dépôt.
- [Code du travail numérique](https://code.travail.gouv.fr/).

Consulter les conditions et la documentation des fournisseurs lors de l'installation. Le nombre d'outils exposés et leur disponibilité peuvent évoluer.
