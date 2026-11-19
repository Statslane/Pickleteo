import fs from 'node:fs/promises';
import {createServer} from 'vite';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {pages,siteUrl,business} from '../src/search-config.mjs';
const template=await fs.readFile('dist/index.html','utf8');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
try {
 const home=await server.ssrLoadModule('/src/components/Home.jsx');
 const components={'/':home.Home};
 for(const [path,name] of Object.entries({'/policies':'Policies','/membership':'Membership','/learn-improve':'LearnImprove','/about':'AboutUs','/contact':'ContactUs','/the-club':'TheClub','/open-play':'OpenPlay','/sponsor':'Sponsor'}))components[path]=(await server.ssrLoadModule('/src/components/'+name+'.jsx')).default;
 for(const [path,page] of Object.entries(pages)){
  const url=siteUrl+(path==='/'?'/':path);
  const tags='<meta name="description" content="'+escape(page.description)+'"/><link rel="canonical" href="'+url+'"/>'+Object.entries({'og:title':page.title,'og:description':page.description,'og:url':url,'og:type':'website','og:site_name':'Pickleteo Paddle Club','og:image':siteUrl+'/optimized/pickleteo-community.jpg'}).map(([key,value])=>'<meta property="'+key+'" content="'+escape(value)+'"/>').join('')+'<meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="'+escape(page.title)+'"/><meta name="twitter:description" content="'+escape(page.description)+'"/><meta name="twitter:image" content="'+siteUrl+'/court.jpg"/><script id="club-structured-data" type="application/ld+json">'+JSON.stringify(business).replaceAll('<','\\u003c')+'</script>';
  const markup=renderToStaticMarkup(React.createElement(components[path]));
  const html=template.replace(/<title>.*?<\/title>/,'<title>'+escape(page.title)+'</title>').replace('</head>',tags+'<noscript><style>main [style*="opacity"]{opacity:1!important;transform:none!important}</style></noscript></head>').replace('<div id="root"></div>','<div id="root">'+markup+'</div>');
  const folder=path==='/'?'dist':'dist'+path;
  await fs.mkdir(folder,{recursive:true});await fs.writeFile(folder+'/index.html',html);
 }
 await fs.writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(pages).map(path=>'<url><loc>'+siteUrl+(path==='/'?'/':path)+'</loc></url>').join('')+'</urlset>');
 await fs.writeFile('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: '+siteUrl+'/sitemap.xml\n');
 console.log('Search-ready HTML generated for '+Object.keys(pages).length+' pages; sitemap and robots.txt created.');
} finally {await server.close();}
