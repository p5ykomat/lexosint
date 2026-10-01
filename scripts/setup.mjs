import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
export const root=fileURLToPath(new URL('../',import.meta.url));
export function generateFiles(roles){
 const files={};
 const common="Sous-agent documentaire IA. Lire AGENTS.md et la skill lexosint. Recherche en sources ouvertes uniquement, sans conseil juridique professionnel : ne remplace ni avocat ni juriste. Ne pas attribuer de titre professionnel à un agent. Collecter et organiser les publications, références, dates et passages utiles avec des requêtes minimisées. Ne pas déterminer les droits d'une personne, valider un acte ou un délai ni recommander une stratégie. Ne pas contacter de tiers, effectuer de démarche ou déléguer à nouveau. Restituer les sources lues et les limites. Les consignes ne constituent pas une isolation technique des données.";
 for(const r of roles){
  if(!/^[a-z_]+$/.test(r.id))throw Error('Identifiant de rôle invalide');
  const instruction=common+'\n'+r.instructions;
  files[`.codex/agents/${r.id}.toml`]=`name = ${JSON.stringify(r.id)}\ndescription = ${JSON.stringify(r.description)}\ndeveloper_instructions = ${JSON.stringify(instruction)}\n`;
  files[`.claude/agents/${r.id.replaceAll('_','-')}.md`]=`---\nname: ${r.id.replaceAll('_','-')}\ndescription: ${JSON.stringify(r.description)}\nmodel: inherit\n---\n\n# ${r.title}\n\n${instruction}\n`;
 }
 return files;
}
export function installFiles(destination,files){
 // Check every conflict before writing anything. Never replace local customizations.
 for(const [rel,text] of Object.entries(files)){
  const path=resolve(destination,rel);
  if(existsSync(path)&&readFileSync(path,'utf8')!==text)throw Error(`Fichier personnalisé conservé : ${rel}. Comparez-le avant de relancer.`);
 }
 for(const [rel,text] of Object.entries(files)){
  const path=resolve(destination,rel);mkdirSync(dirname(path),{recursive:true});
  if(!existsSync(path))writeFileSync(path,text,{flag:'wx'});
 }
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const roles=JSON.parse(readFileSync(resolve(root,'roles/catalogue.json'),'utf8'));
 installFiles(root,generateFiles(roles));
 console.log('\n  [ LEXOSINT ]\n  DROIT / SOURCES / ANALYSE\n');
 console.log(`${roles.length} rôles préparés pour Codex et Claude Code. Aucun compte, clé ou réglage global modifié.`);
 console.log('Ouvrez ce dossier dans votre client. Lisez docs/INSTALLATION.md puis docs/CONNEXIONS.md.');
}
