if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-75e203ad"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/colorworker.827120bc.js",revision:"ac5e8fc3f2224c1812e8cede554483fc"},{url:"assets/de.58feef74.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/directory-open.1e94465d.js",revision:"dae87d4c77fc76836bc8776282078dd0"},{url:"assets/directory-open.2fe4b6a5.js",revision:"0904e4f1f707b16981dda0785811a716"},{url:"assets/directory-open.91239a8f.js",revision:"3704c8033407dacd2f83782fd94d61e8"},{url:"assets/en-US.94f890ac.js",revision:"f6d70ff925a87d856a9557135705598c"},{url:"assets/file-open.05d00c00.js",revision:"4131ab234075af3fd1c9306cd6c7a017"},{url:"assets/file-open.1fe7b44c.js",revision:"d51b4be21a22ab437492eb0a4ad3620b"},{url:"assets/file-open.c1794569.js",revision:"3082c21e08091af37671a706aca8146f"},{url:"assets/file-save.72f7afaf.js",revision:"6284d014eb4142c9a049882c953521e7"},{url:"assets/file-save.f4966a97.js",revision:"646357c9f2a1aa5d8e4ac873e9b4a4cb"},{url:"assets/file-save.fb4972a3.js",revision:"c1d532eea8195b06c0d5fb70d420e0a4"},{url:"assets/index.aa6bd2ee.css",revision:"28935ecb1fcbda243e2f7e3ffe0bbeaf"},{url:"assets/index.c0a098aa.js",revision:"6203a6285d7dd26a204199ba052d833f"},{url:"assets/monochromeworker.2398586a.js",revision:"2a432ea8823b5fea6c83d087df323308"},{url:"assets/svgoworker.0bdd8685.js",revision:"b392e1518ebcd59985a8a95c46944fc9"},{url:"assets/vendor.4693f76e.js",revision:"d36930691848d00c11e6b21516c11d36"},{url:"index.html",revision:"8e76e686f6b7d47deacefaeed79fd78b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map