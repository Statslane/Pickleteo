import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pages,siteUrl} from '../src/search-config.mjs';
const previewUrl=process.env.PREVIEW_URL||'http://127.0.0.1:4173';
const vercel=JSON.parse(await fs.readFile('vercel.json','utf8'));
const checkedFiles=new Set();
for(const [path,page]of Object.entries(pages)){
 if(path!=='/')assert(vercel.rewrites.some(r=>r.source===path&&r.destination===path+'/index.html'),path+' Vercel rewrite');
 const file=path==='/'?'dist/index.html':'dist'+path+'/index.html';
 const html=await fs.readFile(file,'utf8');
 assert(html.includes(page.title.replaceAll('&','&amp;')),path+' title');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,path+' single h1');
 assert(html.includes('rel="canonical" href="'+siteUrl+(path==='/'?'/':path)+'"'),path+' canonical');
 const structured=html.match(/<script id="club-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/);
 assert.equal(JSON.parse(structured[1]).address.addressLocality,'Everett');
 assert(html.includes('Mukilteo and Everett area'),path+' service area');
 for(const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)){if(match[1].startsWith('/'))await fs.access('dist'+match[1]);}
 for(const match of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){
  const dest=match[1];if(dest==='/')continue;
  if(dest.includes('.')){
   await fs.access('dist'+dest);
   if(dest.endsWith('.pdf')&&!checkedFiles.has(dest)){
    const document=await fetch(previewUrl+dest);assert.equal(document.status,200,dest+' HTTP status');
    const bytes=new Uint8Array(await document.arrayBuffer());assert.equal(new TextDecoder().decode(bytes.slice(0,5)),'%PDF-',dest+' original PDF delivery');checkedFiles.add(dest);
   }
   continue;
  }
  assert(pages[dest],path+' invalid internal link '+dest);
 }
 const response=await fetch(previewUrl+path);assert.equal(response.status,200);
 const served=await response.text();assert(served.includes(page.title.replaceAll('&','&amp;')),path+' served metadata');console.log(path+' | static content '+html.length+' bytes | HTTP '+response.status+' | served title '+served.match(/<title>(.*?)<\/title>/)?.[1]);
}
assert.equal((await fs.readFile('dist/sitemap.xml','utf8')).match(/<loc>/g).length,Object.keys(pages).length);
console.log('Static SEO, address schema, image files, internal links, Vercel rewrites, policy PDFs, sitemap, and HTTP checks passed.');
