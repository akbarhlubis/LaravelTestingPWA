if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const l=e=>i(e,o),u={module:{uri:o},exports:r,require:l};s[o]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(t(...e),r)))}}define(["./workbox-8f82f6f2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"build/assets/app-cddcf48a.js",revision:null},{url:"build/assets/app-d1dbb6be.css",revision:null},{url:"build/assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"manifest.webmanifest",revision:"378b0b1ea18507c499de92c61cd4851b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute("/^\\/app\\/$/",new e.NetworkFirst({cacheName:"app",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));