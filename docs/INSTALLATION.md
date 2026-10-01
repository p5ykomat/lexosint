# Installer dans Codex ou Claude Code

## Préparer les fichiers

1. Téléchargez ce dépôt avec **Code → Download ZIP**, puis décompressez-le dans un dossier durable.
2. Installez [Node.js 24 LTS](https://nodejs.org/) si nécessaire. `npm`, fourni avec Node.js, sert ici uniquement à lancer les scripts du projet. Aucune bibliothèque externe n'est téléchargée par l'installation.
3. Ouvrez un terminal dans le dossier qui contient `package.json` et lancez :

```sh
npm run setup
npm run doctor
```

Sous PowerShell, si `npm.ps1` est bloqué, utilisez `npm.cmd run setup` puis `npm.cmd run doctor`.

L'installation génère trois rôles dans `.codex/agents/` et `.claude/agents/`. Elle ne touche pas aux réglages globaux, ne crée aucun compte et ne demande aucune clé. Si un fichier a été personnalisé, elle s'arrête avant de le remplacer.

Avec Git, vous pouvez récupérer le projet ainsi :

```sh
git clone https://github.com/p5ykomat/lexosint.git
cd lexosint
npm run setup
```

## Codex

Ouvrez le dossier comme projet local et accordez-lui votre confiance après lecture des fichiers. Le coordinateur lit `AGENTS.md` et la skill. Les fichiers `.codex/agents/*.toml` définissent les rôles pour les versions qui prennent en charge les agents personnalisés. Aucun modèle n'est imposé : le choix du client est conservé.

Ouvrez une nouvelle session après l'installation et demandez :

> Lis AGENTS.md. Vérifie que les trois rôles LexOSINT sont disponibles et inventorie les outils connectés. N'effectue pas encore de recherche. Signale les rôles ou accès qui manquent.

Si votre version ne découvre pas ces rôles, mettez Codex à jour ou utilisez le mode séquentiel décrit dans `AGENTS.md`. Ne prétendez pas avoir plusieurs sous-agents si le client ne les a pas chargés. [Référence Codex sur les sous-agents](https://developers.openai.com/codex/multi-agent/).

## Claude Code

Ouvrez un terminal dans le dossier et lancez `claude`. Le fichier `CLAUDE.md` oriente vers la méthode. Les rôles sont dans `.claude/agents/` ; `/agents` permet d'inspecter ceux que Claude Code charge. Le réglage `model: inherit` conserve le modèle de la conversation.

Demandez le même diagnostic initial. Les permissions restent celles de votre installation. Les consignes des rôles ne constituent pas des barrières techniques empêchant l'accès aux autres fichiers du projet. [Référence Claude Code sur les sous-agents](https://code.claude.com/docs/en/sub-agents).

## Connecter les sources

Suivez [CONNEXIONS.md](CONNEXIONS.md). Les rôles et les sources sont deux choses différentes : créer trois rôles ne crée aucun compte ni base de données. Sans MCP, le kit peut utiliser les outils web de votre client sur les sites officiels. Sans aucun accès au web, il peut seulement cadrer la question et préparer les recherches.

## Première recherche

Utilisez un cas fictif dans [les exemples](../examples/questions.md), puis votre question avec les seuls faits nécessaires. Les pièces privées vont dans `private/`, les résultats dans `output/`, tous deux ignorés par Git. Votre modèle peut traiter les textes lus sur les serveurs de son fournisseur : exécution locale ne signifie pas confidentialité hors ligne.

## Vérifier et mettre à jour

`npm test` contrôle l'installation, notamment le refus d'écraser un fichier personnalisé. `npm run doctor` contrôle la présence des rôles ; il ne valide pas vos comptes distants ni le raisonnement d'un modèle.

Pour mettre à jour avec Git : `git pull --ff-only`, puis `npm run setup`. En cas de conflit avec un rôle personnalisé, comparez-le au fichier produit par la nouvelle version dans une copie séparée du projet. Conservez vos modifications utiles avant de remplacer manuellement le fichier. Aucun effacement automatique n'est prévu.
