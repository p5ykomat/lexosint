# Connecter les sources avec ses propres accès

Les connexions ci-dessous appartiennent à l'installateur. Aucun serveur personnel de l'auteur n'est utilisé. Les commandes `codex` et `claude` supposent que le programme correspondant est installé et accessible dans votre terminal.

## 1. Commencer avec les pages officielles

Sans créer de compte de données, votre agent peut utiliser son outil web pour consulter :

- [Légifrance](https://www.legifrance.gouv.fr/) : textes, conventions, accords et décisions accessibles ;
- [Code du travail numérique](https://code.travail.gouv.fr/) : fiches, identification de convention et simulateurs ;
- [Cour de cassation](https://www.courdecassation.fr/recherche-judilibre) : recherche de décisions ;
- [Annuaire des entreprises](https://annuaire-entreprises.data.gouv.fr/) : identité des entreprises ;
- [BODACC](https://www.bodacc.fr/) : annonces commerciales.

Le kit n'ajoute pas à lui seul un moteur web. Vérifiez la fonction disponible dans votre client. Une consultation d'interface ou de simulateur peut nécessiter un navigateur ; elle ne doit pas être annoncée comme exécutée si elle ne l'a pas été.

## 2. OpenLégi Légifrance, connexion principale

1. Ouvrez [OpenLégi](https://www.openlegi.fr/) puis son [espace de connexion](https://auth.openlegi.fr/).
2. Créez votre compte personnel selon le parcours du service.
3. Vérifiez dans cet espace les services autorisés, quotas et conditions. N'activez aucun paiement pour suivre ce guide. Si l'accès souhaité n'est pas disponible dans votre offre, utilisez les sources publiques directes.
4. Ajoutez le serveur HTTP Légifrance à votre client.

Codex :

```sh
codex mcp add lexosint_legifrance --url https://mcp.openlegi.fr/legifrance/mcp
codex mcp login lexosint_legifrance
```

Claude Code, depuis le dossier du projet :

```sh
claude mcp add --transport http --scope local lexosint_legifrance https://mcp.openlegi.fr/legifrance/mcp
```

Dans Claude Code, ouvrez `/mcp`, sélectionnez le serveur et suivez le parcours d'authentification proposé. Autorisez uniquement votre compte et le service voulu. L'OAuth dépend de la compatibilité du client et du service ; [la documentation OpenLégi](https://www.openlegi.fr/documentation/demarrage-rapide/deux-modes-connexion/) précise les méthodes proposées.

### Si OAuth ne fonctionne pas : jeton personnel

Créez votre propre jeton dans l'espace OpenLégi. Ne le collez ni dans une URL, ni dans ce dépôt, ni dans un prompt. Faites-le fournir au client via la variable d'environnement `OPENLEGI_TOKEN`.

Dans la configuration Codex, fusionnez cette entrée avec vos réglages existants, sans dupliquer un serveur déjà ajouté :

```toml
[mcp_servers.lexosint_legifrance]
url = "https://mcp.openlegi.fr/legifrance/mcp"
bearer_token_env_var = "OPENLEGI_TOKEN"
```

Dans `.mcp.json` pour Claude Code, fusionnez l'entrée suivante dans `mcpServers` :

```json
{
  "mcpServers": {
    "lexosint_legifrance": {
      "type": "http",
      "url": "https://mcp.openlegi.fr/legifrance/mcp",
      "headers": { "Authorization": "Bearer ${OPENLEGI_TOKEN}" }
    }
  }
}
```

Une variable référencée doit exister dans l'environnement du processus du client. La déposer dans un fichier `.env` ne suffit pas pour ces connexions HTTP directes. Pour un lancement temporaire dans PowerShell 7, saisir le jeton de façon masquée puis lancer le client dans le même terminal :

```powershell
$env:OPENLEGI_TOKEN = Read-Host 'Jeton OpenLegi' -MaskInput
codex
# Ou : claude
Remove-Item Env:OPENLEGI_TOKEN
```

Sous Bash :

```bash
read -rsp 'Jeton OpenLegi : ' OPENLEGI_TOKEN
export OPENLEGI_TOKEN
codex
# Ou : claude
unset OPENLEGI_TOKEN
```

La valeur n'est pas inscrite dans la commande ni dans l'historique. Fermez la session et retirez la variable après usage. Pour une application graphique, utilisez sa configuration sécurisée ou un parcours OAuth compatible ; un programme déjà ouvert n'hérite pas des variables d'un nouveau terminal.

### Vérifier réellement

Ouvrez une nouvelle session et demandez :

> Découvre les outils du serveur Légifrance connecté. Fais une recherche générique sur la période d'essai et ouvre un texte officiel trouvé. Indique le fonds, la référence, les dates et le résultat de l'appel. N'utilise aucune donnée personnelle.

Une liste d'outils valide leur découverte, pas tous les droits de consultation. Vérifiez aussi un résultat complet. Les noms d'outils pouvant évoluer, la skill demande de découvrir ceux réellement exposés.

## 3. data.gouv.fr

Codex :

```sh
codex mcp add lexosint_data_gouv --url https://mcp.data.gouv.fr/mcp
```

Claude Code :

```sh
claude mcp add --transport http --scope local lexosint_data_gouv https://mcp.data.gouv.fr/mcp
```

Le point d'accès public n'utilise pas de clé personnelle fournie par ce projet. Demandez une découverte de jeu, puis l'ouverture de sa ressource : la notice de catalogue seule ne suffit pas. Une API trouvée peut demander son propre compte.

## 4. OSINT Business, complément ponctuel et facultatif

**Vous pouvez ignorer cette section. LexOSINT ne nécessite pas OSINT Business ni l'installation d'un autre dépôt.** Pour une information d'entreprise utile à la question, consultez directement l'Annuaire des entreprises, le BODACC, l'INPI selon les droits d'accès, ou fournissez une référence que vous avez trouvée. Un site secondaire d'information d'entreprise peut aider à découvrir une information ; vérifiez les éléments décisifs dans la publication officielle.

Si vous utilisez déjà [OSINT Business](https://github.com/p5ykomat/osint-business), ou souhaitez volontairement l'ajouter, suivez son guide séparé. Sa connexion locale peut ensuite être ajoutée au client utilisé dans LexOSINT, avec le chemin du lanceur de **votre** ordinateur. Son usage reste limité à une fiche, une annonce ou une pièce nécessaire à la question, sans exploration approfondie des dirigeants ou ramifications par défaut.

- Identité et BODACC fonctionnent sans compte dans les connecteurs fournis.
- Pour INPI, créez votre compte, demandez les droits API sur les formalités, actes et comptes nécessaires, puis renseignez vos identifiants dans le `.env` **d'OSINT Business**.
- Pour Judilibre, créez votre application PISTE de production, sélectionnez Judilibre et renseignez son Client ID et son Client Secret dans ce même `.env`.

[Procédure détaillée INPI et PISTE](https://github.com/p5ykomat/osint-business/blob/main/docs/ACCES.md). LexOSINT ne contient pas un second connecteur Judilibre ni une copie des clés. Redémarrez le MCP concerné après modification des identifiants.

## 5. Compléments ciblés

**BOFiP et EUR-Lex via OpenLégi.** Si l'analyse a un volet fiscal ou européen, ajoutez un autre serveur avec l'URL `https://mcp.openlegi.fr/bofip/mcp` ou `https://mcp.openlegi.fr/eurlex/mcp`, en suivant la même méthode et avec les droits correspondants. Leur présence ne garantit pas que votre compte soit autorisé. À défaut, consultez [BOFiP](https://bofip.impots.gouv.fr/) ou [EUR-Lex](https://eur-lex.europa.eu/) directement.

**Docling local.** Pour les PDF ou scans, suivez le [guide officiel Docling MCP](https://github.com/docling-project/docling-mcp) pour le mode local. Ce composant nécessite son propre environnement et peut télécharger des modèles d'OCR. Il n'est pas installé par `npm run setup`. L'agent doit lire les passages décisifs et vérifier les scans ; une conversion réussie ne prouve pas une transcription exacte.

## Diagnostic

| Situation | Action |
|---|---|
| `codex` ou `claude` introuvable | Installer le client CLI ou utiliser son interface de configuration MCP. |
| Aucun outil trouvé | Vérifier URL, type HTTP, authentification et reprise de session. |
| HTTP 401 | Reconnecter le compte ou vérifier la variable de jeton, sans l'afficher. |
| HTTP 403 | Vérifier les droits du compte pour ce service précis. |
| Quota ou HTTP 429 | Attendre le délai du fournisseur, réduire les appels et utiliser les publications accessibles. |
| Référence trouvée mais texte non lu | Conserver la référence comme non vérifiée et ouvrir la publication primaire. |
| Connexion non testée | L'indiquer, ne pas présenter le service comme opérationnel. |

Chaque installation doit valider ses propres droits. Aucun compte de fournisseur ni quota personnel n'est transféré avec le dépôt.
