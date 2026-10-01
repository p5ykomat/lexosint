---
name: lexosint
description: Collecter, lire et organiser des sources ouvertes en droit français du travail, des sociétés et en jurisprudence, avec un orchestrateur et trois sous-agents documentaires, sans avis juridique professionnel.
---

# Collecte documentaire en sources ouvertes

## Limite de la mission

Ce kit aide à découvrir et comprendre des publications. Il ne fournit pas de conseil juridique personnalisé et ne remplace ni avocat ni juriste. Ne pas déterminer les droits de l'utilisateur, valider un acte ou un délai, recommander une stratégie ou prescrire une démarche. Transformer ces demandes en collecte de sources et questions à soumettre à un professionnel. Signaler une urgence éventuelle sans inventer une date butoir.

Lire `references/travail.md`, `references/societes.md` et `references/couverture.md` selon la collecte. Ne supposer aucun dossier préexistant. Ne demander que les éléments utiles pour sélectionner les sources, sous forme minimisée.

## Orchestrer

L'agent principal précise thème, juridiction, période de recherche et livrable documentaire. Pour une collecte substantielle, sélectionner `sources_travail`, `sources_societes` ou `sources_jurisprudence` selon le besoin. Ne pas lancer tous les rôles systématiquement. Chaque tâche précise question documentaire, période, sources déjà lues, lacunes et format attendu.

Partager uniquement les paramètres nécessaires. Attendre les retours puis dédupliquer les sources, conserver les divergences et indiquer la couverture. Les sous-agents ne délèguent pas à leur tour. Sans délégation disponible, effectuer la collecte séquentiellement et le signaler. Ne jamais prétendre à une consultation professionnelle ou à une relecture contradictoire.

## Consulter les outils disponibles

Découvrir les noms et schémas des outils effectivement accessibles, y compris les outils différés. Facultatif à installer ne signifie pas facultatif à utiliser lorsqu'un complément est autorisé, disponible et pertinent. L'orchestrateur du client gère les appels entre MCP ; le kit ne fournit pas de base juridique ni d'accès partagé.

| Besoin documentaire | Source à mobiliser |
|---|---|
| Codes, lois, règlements, JORF, conventions et accords | OpenLégi Légifrance pour les fonds réellement exposés, puis texte officiel décisif. Relever IDCC, dates et champ lorsque disponibles. |
| Décisions judiciaires | OpenLégi, Judilibre si connecté ou recherche officielle Cour de cassation / Légifrance. Ouvrir la décision, pas seulement l'extrait de recherche. |
| Publication fiscale ou européenne pertinente | OpenLégi BOFiP ou EUR-Lex si autorisé, sinon site officiel. Distinguer textes, doctrine et décisions. |
| Jeux de données français | MCP data.gouv.fr, puis ressource : producteur, date et couverture. La notice seule ne vaut pas consultation des données. |
| Information ou pièce d'entreprise nécessaire à la question | Publications officielles accessibles ou pièce fournie. OSINT Business déjà connecté peut servir de complément ponctuel, sans installation obligatoire. Confirmer le SIREN et distinguer inventaire et lecture des pièces. |
| PDF et scans | Lecteur local disponible, notamment Docling. Convertir et lire dans la même session, conserver les pages et vérifier les passages décisifs. |

OpenLégi est un intermédiaire : citer la publication sous-jacente. Si un MCP est absent ou refuse l'accès, utiliser les outils web du client sur les sites officiels. Respecter quotas et protections, sans répéter des essais inchangés. Ne créer ni compte ni abonnement automatiquement. Sans accès à des sources actuelles, produire uniquement un plan documentaire et signaler la limite.

### Limiter la recherche d'entreprise au besoin documentaire

Ne pas demander l'installation d'OSINT Business pour poursuivre une recherche LexOSINT. S'il est déjà connecté, utiliser seulement les appels ciblés nécessaires à une fiche, une annonce ou une pièce. Ne pas lancer par défaut de graphe de mandats, de recherche sur les dirigeants ou de rapport d'enquête complet. Une question générale sur un texte ou une convention ne nécessite aucune enquête d'entreprise. Un approfondissement distinct exige une demande explicite de l'utilisateur. Une référence issue d'un site secondaire peut orienter la recherche ; recouper les éléments décisifs avec les publications officielles.

## Documenter sans rendre un avis

Pour chaque source utile : URL, titre, référence, producteur ou juridiction, date, version, passage et contexte. Vérifier si la version trouvée correspond à la période recherchée. Séparer citations, résumés et éléments non vérifiés. Ne jamais inventer une référence, une consultation ou un extrait.

Les simulateurs officiels peuvent être recensés avec leurs usages et limites. Ne pas transformer un résultat indicatif en validation de droits ou d'indemnités. Une décision publiée ne suffit pas à conclure au résultat d'un autre litige.

## Livrer

Utiliser `templates/dossier-sources.md` si un rapport est demandé. Indiquer les collectes réellement effectuées, sources indisponibles, périodes couvertes et questions documentaires restantes. Garder les résultats dans `output/`.

Afficher : « Recherche documentaire en sources ouvertes. Ne remplace pas l'avis d'un avocat ou d'un juriste. » Ajouter, lorsqu'une décision personnelle est envisagée, qu'un professionnel compétent doit examiner la situation. Aucun envoi, démarche ou publication implicite.
