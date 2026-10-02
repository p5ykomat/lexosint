![LexOSINT, recherche documentaire en sources ouvertes](docs/assets/lexosint.svg)

# Agent IA - LexOSINT

> [!WARNING]
> **Recherche documentaire uniquement. Aucun conseil juridique professionnel.**
>
> LexOSINT aide à trouver, lire et organiser des sources ouvertes liées au droit du travail et au droit des sociétés. Les résultats peuvent être incomplets, inexacts ou ne pas correspondre à votre situation. Ils ne constituent ni une consultation juridique, ni une validation de vos droits ou de vos démarches.
>
> **Cet outil ne remplace pas le travail d'un avocat ou d'un juriste.** Utilisez-le comme point de départ documentaire. En cas de doute, de délai à respecter ou avant une décision engageante, consultez un professionnel compétent dans le domaine concerné.

**Un agent IA à installer dans Codex ou Claude Code, avec un orchestrateur et trois sous-agents documentaires.**

Les publications juridiques sont dispersées et parfois difficiles à consulter. LexOSINT organise leur recherche dans les sources accessibles : textes, conventions collectives, décisions publiées, registres et actes publics. Il rassemble les références, leurs dates, les extraits utiles et les limites de la collecte.

## Comment cela fonctionne

```mermaid
flowchart TD
    Q[Question documentaire] --> O[Orchestrateur : cadrer et organiser]
    O --> T[Sources ouvertes : droit du travail]
    O --> S[Sources ouvertes : droit des sociétés]
    O --> J[Sources ouvertes : jurisprudence]
    T --> R[Orchestrateur : réunir les références]
    S --> R
    J --> R
    R --> D[Dossier de sources, dates et limites]
    D --> P[Point de départ pour échanger avec un professionnel]
    T -. consulte .-> M[MCP et outils web disponibles]
    S -. consulte .-> M
    J -. consulte .-> M
```

L'orchestrateur sélectionne les recherches utiles. Une question simple ne lance pas trois sous-agents. Si la délégation est indisponible, il applique les grilles successivement et le signale. Les sous-agents ne portent aucun titre professionnel et ne rendent pas d'avis juridique.

## Trois domaines de collecte

| Sous-agent | Sources recherchées |
|---|---|
| **Sources ouvertes, droit du travail** | Code du travail, conventions collectives, accords accessibles, fiches et outils officiels |
| **Sources ouvertes, droit des sociétés** | Textes, identité d'entreprises, registres, annonces et actes publics accessibles |
| **Sources ouvertes, jurisprudence** | Décisions publiées, références, juridictions, dates et passages pertinents |

Le résultat est une **synthèse documentaire** : sources lues, éléments non vérifiés, versions trouvées et questions à approfondir. L'outil ne détermine pas vos droits, ne prescrit pas de stratégie et ne vous représente pas.

## Quelles sources pour quelle recherche ?

LexOSINT peut consulter les publications officielles avec les outils web de votre client. Les MCP facilitent certaines recherches, mais **installer OSINT Business n'est pas nécessaire pour utiliser LexOSINT**.

| Besoin documentaire | Source à privilégier | Repli ou complément |
|---|---|---|
| Code du travail et Code de commerce | Légifrance, directement ou via OpenLégi | Publications officielles datées |
| Convention collective, IDCC et avenants | Légifrance et fonds KALI si connecté | Code du travail numérique |
| Accords d'entreprise | Recherche officielle dans les accords publiés | Texte fourni et outils du fonds s'ils sont disponibles |
| Jurisprudence | Cour de cassation et Légifrance, directement ou via OpenLégi | Judilibre via un connecteur déjà disponible |
| Fiches pratiques et simulateurs | Code du travail numérique | Textes et barèmes publiés, sans validation d'un montant individuel |
| Identité ou forme d'une entreprise, si utile | Annuaire des entreprises | OSINT Business déjà connecté, pour une vérification ponctuelle |
| Annonce ou acte public précis | BODACC, INPI ou pièce obtenue légalement | OSINT Business déjà connecté, selon les droits d'accès |
| Jeu de données complémentaire | data.gouv.fr et ressource du producteur | MCP data.gouv.fr si connecté |

**OSINT Business est un complément ponctuel.** Il peut aider à récupérer une fiche, une annonce ou une pièce qui manque à la recherche. Il ne déclenche pas d'enquête approfondie sur les sociétés, les dirigeants ou leurs ramifications. Vous pouvez aussi consulter vous-même un site d'information d'entreprise et fournir la référence utile ; les informations décisives sont à rapprocher des publications officielles.

### Les connexions possibles

| Connexion | Usage | Accès à prévoir |
|---|---|---|
| Web du client | Consultation des sites officiels et publications accessibles | Fonction web de votre client |
| OpenLégi Légifrance | Recherche dans les fonds exposés : codes, conventions et décisions notamment | Votre compte et ses autorisations |
| MCP data.gouv.fr | Découverte de jeux, API et ressources publiques | Point d'accès public |
| OSINT Business, facultatif | Vérification ou document ponctuel si nécessaire | Seulement si vous souhaitez ce complément ; aucun autre dépôt requis pour démarrer LexOSINT |
| Lecteur documentaire local | Lecture de PDF et scans | Outil du client ou Docling local |
| BOFiP et EUR-Lex | Complément documentaire fiscal ou européen pertinent | Site officiel ou accès MCP correspondant |

Sources ouvertes ne signifie pas que toutes les API sont anonymes, gratuites ou sans quota. Les données, droits d'accès et conditions de réutilisation dépendent de leurs producteurs. Aucun accès réservé professionnel ni compte partagé n'est fourni.

**[Configurer les connexions](docs/CONNEXIONS.md)** · **[Capacités et limites](docs/CAPACITES.md)**

Les connexions sont facultatives à installer. Une fois disponibles et autorisées, les agents les consultent selon les déclencheurs de la skill. Ils doivent distinguer les consultations effectives des accès indisponibles. Le nombre d'outils distants dépend des services et des comptes.

## Installer

Téléchargez **Code → Download ZIP** et décompressez. Avec [Node.js 24 LTS](https://nodejs.org/) installé, ouvrez un terminal dans le dossier :

```sh
npm run setup
npm run doctor
```

Pas de dépendance à télécharger ni de clé demandée par l'installation. Le script prépare les trois rôles pour chacun des deux clients et conserve les personnalisations existantes. **[Guide pas à pas](docs/INSTALLATION.md)**.

## Exemple de demande

> Recherche les sources officielles sur le renouvellement d'une période d'essai. Liste les textes et les informations nécessaires pour identifier une convention collective. Ouvre les sources utiles, indique leurs dates et les limites de la collecte. Ne conclus pas sur la validité d'une situation personnelle.

[Autres exemples](examples/questions.md) · [Méthode documentaire](.agents/skills/lexosint/SKILL.md)

## Confidentialité

Aucun dossier personnel, compte, clé ou secret n'est fourni. Les pièces restent dans `private/`, les livrables dans `output/`, exclus de Git. Ces dossiers ne sont pas chiffrés. Les consignes ne remplacent pas les permissions du client et le fournisseur du modèle peut traiter les textes que vous lui faites lire. Les recherches externes doivent être minimisées. [Sécurité](SECURITY.md).

## Vérifications techniques

`npm test` contrôle la génération des rôles, la réexécution et le refus d'écraser une personnalisation. Aucun appel IA n'est nécessaire. Ces tests ne valident ni la qualité des réponses ni les comptes des fournisseurs. Le diagnostic dans votre client doit confirmer les agents et outils effectivement chargés.

## Licences

Code sous [MIT](LICENSE). Méthode, rôles, documentation et visuels sous [CC BY-SA 4.0](LICENSE-DOCS.md), attribution **LexOSINT**. Les sources externes conservent leurs propres conditions. Le modèle et l'abonnement IA sont ceux de l'utilisateur.
