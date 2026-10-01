import {existsSync,readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {root} from './setup.mjs';
const roles=JSON.parse(readFileSync(resolve(root,'roles/catalogue.json'),'utf8'));
for(const [client,ext] of [['codex','toml'],['claude','md']]){
 const count=roles.filter(r=>existsSync(resolve(root,`.${client}/agents/${client==='claude'?r.id.replaceAll('_','-'):r.id}.${ext}`))).length;
 console.log(`${client} : ${count}/${roles.length} rôles présents`);
 if(count!==roles.length)process.exitCode=1;
}
console.log('Ce diagnostic ne valide ni les accès distants ni le chargement effectif des rôles par votre client.');
