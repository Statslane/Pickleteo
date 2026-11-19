import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {pages} from './src/search-config.mjs';
export default defineConfig({
 plugins:[react(),{
  name:'preview-static-search-pages',
  configurePreviewServer(server){
   server.middlewares.use((req,res,next)=>{
    const url=new URL(req.url,'http://localhost');
    if(url.pathname!=='/' && pages[url.pathname])req.url=url.pathname+'/index.html'+url.search;
    next();
   });
  }
 }]
});
