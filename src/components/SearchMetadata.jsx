import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {pages,siteUrl,business} from '../search-config.mjs';
export default function SearchMetadata(){
const {pathname}=useLocation();
useEffect(()=>{
 const p=pages[pathname];
 if(!p)return;
 document.title=p.title;
 const set=(selector,attrs)=>{let el=document.head.querySelector(selector);if(!el){el=document.createElement(selector.startsWith('link')?'link':'meta');document.head.append(el);}Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));};
 set('meta[name="description"]',{name:'description',content:p.description});
 set('link[rel="canonical"]',{rel:'canonical',href:siteUrl+(pathname==='/'?'/':pathname)});
 for(const [key,value] of Object.entries({'og:title':p.title,'og:description':p.description,'og:url':siteUrl+(pathname==='/'?'/':pathname),'og:type':'website','og:site_name':'Pickleteo Paddle Club','og:image':siteUrl+'/optimized/pickleteo-community.jpg'}))set('meta[property="'+key+'"]',{property:key,content:value});
 for(const [name,content]of Object.entries({'twitter:card':'summary_large_image','twitter:title':p.title,'twitter:description':p.description,'twitter:image':siteUrl+'/optimized/pickleteo-community.jpg'}))set('meta[name="'+name+'"]',{name,content});
 let script=document.head.querySelector('#club-structured-data');if(!script){script=document.createElement('script');script.id='club-structured-data';script.type='application/ld+json';document.head.append(script);}script.textContent=JSON.stringify(business);
},[pathname]);
return null;
}
