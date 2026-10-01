import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,writeFileSync,mkdirSync,existsSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {generateFiles,installFiles,root} from '../scripts/setup.mjs';
const roles=JSON.parse(readFileSync(resolve(root,'roles/catalogue.json'),'utf8'));
test('installation des deux clients et réexécution sans modification',()=>{
 const dir=mkdtempSync(join(tmpdir(),'lexosint-test-'));
 try{const files=generateFiles(roles);assert.equal(Object.keys(files).length,6);installFiles(dir,files);installFiles(dir,files);for(const [file,text] of Object.entries(files))assert.equal(readFileSync(join(dir,file),'utf8'),text);}finally{rmSync(dir,{recursive:true,force:true});}
});
test('un conflit conserve les personnalisations et bloque avant toute écriture',()=>{
 const dir=mkdtempSync(join(tmpdir(),'lexosint-test-'));
 try{mkdirSync(join(dir,'.codex/agents'),{recursive:true});writeFileSync(join(dir,'.codex/agents/sources_societes.toml'),'personnalisation');assert.throws(()=>installFiles(dir,generateFiles(roles)),/conservé/);assert.equal(readFileSync(join(dir,'.codex/agents/sources_societes.toml'),'utf8'),'personnalisation');assert(!existsSync(join(dir,'.claude')));}finally{rmSync(dir,{recursive:true,force:true});}
});
test('un identifiant de rôle ne peut sortir du dossier prévu',()=>{assert.throws(()=>generateFiles([{id:'../bad'}]),/invalide/);});
