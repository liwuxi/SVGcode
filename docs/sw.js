if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const t=s=>r(s,i),u={module:{uri:i},exports:o,require:t};e[i]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(n(...s),o)))}}define(["./workbox-6cd28afd"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/colorworker.3bb51423.js",revision:null},{url:"assets/de-DE.0c064cfc.js",revision:null},{url:"assets/el-GR.b0c8940a.js",revision:null},{url:"assets/en-US.ca3bb092.js",revision:null},{url:"assets/filehandling.e0113b47.js",revision:null},{url:"assets/index.a946ba0b.css",revision:null},{url:"assets/index.e23f4db2.js",revision:null},{url:"assets/install.931fc869.js",revision:null},{url:"assets/monochromeworker.3e780118.js",revision:null},{url:"assets/preprocessworker.88ffa3ad.js",revision:null},{url:"assets/preprocessworker.c921728e.js",revision:null},{url:"assets/svgoworker.bb79c476.js",revision:null},{url:"assets/vendor.219e5f4d.js",revision:null},{url:"assets/windowcontrols.0d580a3f.js",revision:null},{url:"index.html",revision:"9da4ddf440656d80a0186f927fa9f295"},{url:"manifest.webmanifest",revision:"2afab6fb30fbe179b8f55c3404813f7f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
