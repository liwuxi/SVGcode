import{f as e,e as t,a as n,o as r,s as a,c as o,p as i,b as s,d as c,g as l,h as u,v as d}from"./vendor.e3820820.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m={},p=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in m)return;m[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},g=document.querySelector("canvas"),h=document.querySelector(".details"),f=document.querySelector(".posterize"),v=document.querySelector("[for=posterize]"),y=document.querySelector(".color"),w=document.querySelector("[for=color]"),b=document.querySelector(".monochrome"),x=document.querySelector("[for=monochrome]"),L=document.querySelector(".consider-dpr"),E=document.querySelector('[for="consider-dpr"]'),S=document.querySelector("img"),O=document.querySelector(".reset-all"),k=document.querySelector(".open"),M=document.querySelector(".save"),j=document.querySelector(".copy"),$=document.querySelector(".paste"),T=document.querySelector("output"),N=document.querySelector(".debug"),P=document.querySelector("progress"),C=document.querySelector(".toast"),R=document.documentElement,q=document.querySelector("details.main"),I=document.querySelector("summary"),z=window.devicePixelRatio;const U=["en","de"],A=["en-US","de-DE"];const _=new class{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=U[0],this.defaultLocale=A[0],this.translations=null}detectLanguageAndLocal(){var e;const t=localStorage.getItem("language");if(t)return JSON.parse(t);let[n,r=null]=null==(e=navigator.language)?void 0:e.split("-");r&&(r=r.toUpperCase()),n&&U.includes(n)||(n=U[0]);const a={language:n,locale:r};return localStorage.setItem("language",JSON.stringify(a)),a}async getTranslations(){const{language:e,locale:t}=this.currentLanguageAndLocale;this.translations=(await function(e){switch(e){case"../i18n/de.js":return p((()=>import("./de.58feef74.js")),[]);case"../i18n/en-US.js":return p((()=>import("./en-US.87805829.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../i18n/${e}${t?`-${t}`:""}.js`).catch((()=>function(e){switch(e){case"../i18n/de.js":return p((()=>import("./de.58feef74.js")),[]);case"../i18n/en-US.js":return p((()=>import("./en-US.87805829.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../i18n/${this.defaultLocale}.js`)))).default}t(e){return this.translations[e]}};let D=0,B=0,H=1,V={};const W=e=>(e.preventDefault(),!1),F=e=>{const t=T.querySelector("svg");if(t){for(let t=0;t<J.length;t++)if(e.pointerId===J[t].pointerId){J[t]=e;break}if(2===J.length){const e=Math.abs(J[0].clientX-J[1].clientX);K>0&&(e>K&&(H*=.995,Y(H)),e<K&&(H*=1.005,Y(H))),K=e}else if(1===J.length){const n=Math.floor(e.offsetX-D),r=Math.floor(e.offsetY-B);t.setAttribute("viewBox",`${-1*n} ${-1*r} ${V.width} ${V.height}`)}}};T.addEventListener("pointerdown",(e=>{T.querySelector("svg")&&(J.push(e),T.addEventListener("dragstart",W),X(),D=Math.floor(e.offsetX+V.x),B=Math.floor(e.offsetY+V.y),T.addEventListener("pointermove",F),T.style.cursor="grabbing")}));const G=e=>{T.removeEventListener("pointermove",F),T.removeEventListener("dragstart",W),Q(e),J.length<2&&(K=-1),X(),T.style.cursor="grab"};T.addEventListener("pointerup",(e=>{G(e)})),T.addEventListener("pointercancel",(e=>{G(e)})),T.addEventListener("pointerleave",(e=>{G(e)}));const X=()=>{const e=T.querySelector("svg");if(!e)return;const t=e.getAttribute("viewBox"),[n,r,a,o]=t.split(" ");V.x=Number(n),V.y=Number(r),V.width=Number(a),V.height=Number(o)},Y=e=>{const t=T.querySelector("svg");if(!t)return;He(`${_.t("zoom")}: ${(1/e).toFixed(1)}×`,2e3),void 0===V.width&&X();const n=Math.ceil(V.width*e),r=Math.ceil(V.height*e);if(n<=0||r<=0)return;const a=Math.floor(V.x+(V.width-n)/2),o=Math.floor(V.y+(V.height-r)/2);t.setAttribute("viewBox",`${a} ${o} ${n} ${r}`)};T.addEventListener("wheel",(e=>{e.preventDefault(),H=Math.max(.1,Math.min(H*(1+.005*e.deltaY),10)),Y(H)}));const J=[];let K=-1;const Q=e=>{for(let t=0;t<J.length;t++)if(J[t].pointerId===e.pointerId){J.splice(t,1);break}},Z=()=>{D=0,B=0,H=1,V={}},ee=(e,t)=>{let n;return function(...r){clearTimeout(n),n=setTimeout((()=>{clearTimeout(n),e(...r)}),t)}};
/*!
 * canvas-size
 * v1.2.5
 * https://github.com/jhildenbiddle/canvas-size
 * (c) 2015-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}(e,t)||se(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||se(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function le(e){var t,n,r=e.sizes.shift(),a=Math.max(Math.ceil(r[0]),1),o=Math.max(Math.ceil(r[1]),1),i=[a-1,o-1,1,1],s=Date.now(),c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;c?(t=new OffscreenCanvas(1,1),n=new OffscreenCanvas(a,o)):((t=document.createElement("canvas")).width=1,t.height=1,(n=document.createElement("canvas")).width=a,n.height=o);var l=t.getContext("2d"),u=n.getContext("2d");u&&(u.fillRect.apply(u,i),l.drawImage(n,a-1,o-1,1,1,0,0,1,1));var d=l&&0!==l.getImageData(0,0,1,1).data[3],m=Date.now()-s;return c?(postMessage({width:a,height:o,benchmark:m,isTestPass:d}),!d&&e.sizes.length&&le(e)):d?e.onSuccess(a,o,m):(e.onError(a,o,m),e.sizes.length&&le(e)),d}var ue=["onError","onSuccess"],de={max:null,min:1,sizes:[],step:1024,usePromise:!1,useWorker:!1,onError:Function.prototype,onSuccess:Function.prototype},me={};function pe(e){var t=window&&"HTMLCanvasElement"in window,n=window&&"OffscreenCanvas"in window,r=Date.now(),a=e.onError,o=e.onSuccess,i=ae(e,ue),s=null;if(!t)return!1;if(e.useWorker&&n){var c="\n            var canvasTest = ".concat(le.toString(),";\n            onmessage = function(e) {\n                canvasTest(e.data);\n            };\n        "),l=new Blob([c],{type:"application/javascript"}),u=URL.createObjectURL(l);s=new Worker(u),URL.revokeObjectURL(u),s.onmessage=function(e){var t=e.data,n=t.width,a=t.height,o=t.benchmark;t.isTestPass?(me[r].onSuccess(n,a,o),delete me[r]):me[r].onError(n,a,o)}}return e.usePromise?new Promise((function(t,n){var c=ne(ne({},e),{},{onError:function(t,r,o){var i;if(0===e.sizes.length)i=!0;else{var s=oe(e.sizes.slice(-1),1),c=oe(s[0],2),l=c[0],u=c[1];i=t===l&&r===u}a(t,r,o),i&&n({width:t,height:r,benchmark:o})},onSuccess:function(e,n,r){o(e,n,r),t({width:e,height:n,benchmark:r})}});if(s){var l=c.onError,u=c.onSuccess;me[r]={onError:l,onSuccess:u},s.postMessage(i)}else le(c)})):s?(me[r]={onError:a,onSuccess:o},void s.postMessage(i)):le(e)}var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ne(ne({},de),e);return t.sizes=ie(t.sizes),t.width&&t.height&&(t.sizes=[[t.width,t.height]]),pe(t)};const he=g.getContext("2d",{desynchronized:!0});he.scale(z,z),he.imageSmoothingEnabled=!0;const fe=()=>{const e=Number(Re[ke.scale].value)/100;return{width:Math.ceil(z*S.naturalWidth*e),height:Math.ceil(z*S.naturalHeight*e)}},ve=()=>{let e=""+(f.checked?`url('${(()=>{const e=e=>{const t=Number(e.value),n=[];for(let r=0;r<=t;r++)n[r]=(1/t*r).toFixed(1);return n.join(",")};return`data:image/svg+xml;utf8,<svg\n      xmlns="http://www.w3.org/2000/svg"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n    >\n      <filter id="posterize">\n        <feComponentTransfer>\n          <feFuncR type="discrete" tableValues="${e(Re[Oe.red])}" />\n          <feFuncG type="discrete" tableValues="${e(Re[Oe.green])}" />\n          <feFuncB type="discrete" tableValues="${e(Re[Oe.blue])}" />\n          <feFuncA type="discrete" tableValues="${e(Re[Oe.alpha])}" />\n        </feComponentTransfer>\n      </filter>\n    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim()})()}#posterize') `:"");for(const[t,n]of Object.entries(je)){const r=Re[t];n.initial!==Number(r.value)&&(e+=`${t}(${r.value}${r.dataset.unit}) `)}return e.trim()||"none"};const ye=new function(){return new Worker("/assets/monochromeworker.a07b995d.js",{type:"module"})};const we=new function(){return new Worker("/assets/colorworker.6b60ebaa.js",{type:"module"})},be={};const xe=(e,t,n)=>{e&&(e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),T.dataset.originalViewBox=/viewBox="([^"]+)"/.exec(e)[1],n.width&&(e=e.replace(/viewBox="([^"]+)"/,`viewBox="${n.x} ${n.y} ${n.width} ${n.height}"`)),T.classList.remove("color"),T.classList.remove("monochrome"),T.classList.add(t),T.innerHTML=e,He(`${_.t("svgSize")}: ${e.length} ${_.t("bytes")}`,3e3))},Le=async(e={})=>{T.innerHTML="",T.classList.remove("color","monochrome"),be.current&&(clearInterval(be.current),be.current=null);let t=T.querySelector("img");t||(t=document.createElement("img"),t.classList.add("spinner"),t.src=URL.createObjectURL(new Blob(['<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>'],{type:"image/svg+xml"})),T.append(t)),t.style.display="block";const n=(()=>{let{width:e,height:t}=fe();const n=L.checked?z:1;let r=1;for(console.log("before",e,t);!ge({width:e,height:t});)e=Math.floor(e/2),t=Math.floor(t/2),r/=2;return console.log("after",e,t),g.width=e,g.height=t,he.clearRect(0,0,e,t),he.filter=ve(),he.drawImage(S,0,0,n*S.naturalWidth*r,n*S.naturalHeight*r,0,0,e,t),he.getImageData(0,0,e,t)})();if(y.checked){const t=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},P.value=0,P.style.visibility="visible";let r="",a="",o="",i=0;be.current&&(clearInterval(be.current),be.current=null),be.current=setInterval((()=>{const e=`${r}${o}${a}`;e.length!==i&&(T.innerHTML=e,i=e.length)}),500);const s=new MessageChannel;s.port1.onmessage=({data:e})=>{const t=Math.floor(e.processed/e.total*100);if(P.value=t,e.svg){r||(r=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1").replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),a=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3"),V.width&&(r=r.replace(/viewBox="([^"]+)"/,`viewBox="${V.x} ${V.y} ${V.width} ${V.height}"`)));const t=e.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2");o+=t}e.processed===e.total&&(clearInterval(be.current),be.current=null,s.port1.close(),P.value=0,P.style.visibility="hidden")};const c={minPathSegments:Number(Re[Me.minPathLenght].value),turdsize:Number(Re[Me.turdsize].value),alphamax:Number(Re[Me.alphamax].value),turnpolicy:Number(Re[Me.turnpolicy].value),opticurve:Number(Re[Me.opticurve].value),opttolerance:Number(Re[Me.opttolerance].value)};we.postMessage({imageData:e,params:c},[n.port2,s.port2])})))(n);xe(t,"color",e)}else{const t=await(async e=>new Promise((async t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)};const r={turdsize:Number(Re[Me.turdsize].value),alphamax:Number(Re[Me.alphamax].value),turnpolicy:Number(Re[Me.turnpolicy].value),opticurve:Number(Re[Me.opticurve].value),opttolerance:Number(Re[Me.opttolerance].value)};ye.postMessage({imageData:e,params:r},[n.port2])})))(n);xe(t,"monochrome",e)}t.style.display="none"};const Ee=new function(){return new Worker("/assets/svgoworker.b2e746cf.js",{type:"module"})},Se=async e=>new Promise((t=>{const n=new MessageChannel;n.port1.onmessage=({data:e})=>{n.port1.close(),t(e.result)},Ee.postMessage({svg:e,originalViewBox:T.dataset.originalViewBox},[n.port2])}));k.addEventListener("click",(async()=>{try{const t=await e({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(t);S.addEventListener("load",(()=>{URL.revokeObjectURL(n)}),{once:!0}),S.src=n}catch(t){console.error(t.name,t.message)}})),document.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("dragenter",(e=>{e.preventDefault(),R.classList.add("dropenter")})),document.addEventListener("dragleave",(e=>{e.preventDefault(),e.target===document.documentElement&&R.classList.remove("dropenter")})),document.addEventListener("drop",(async e=>{e.preventDefault(),e.stopPropagation(),R.classList.remove("dropenter");const n=e.dataTransfer.items[0];if("file"===n.kind){let e;if(S.addEventListener("load",(()=>{URL.revokeObjectURL(e)}),{once:!0}),t){const t=await n.getAsFileSystemHandle();if("directory"===t.kind)return;{const n=await t.getFile();e=URL.createObjectURL(n),S.src=e}}else{const t=n.getAsFile();e=URL.createObjectURL(t),S.src=e}}})),M.addEventListener("click",(async()=>{try{let e=T.innerHTML,r=null;t&&(r=await showSaveFilePicker({types:[{description:"SVG file",accept:{"image/svg+xml":[".svg"]}}]})),e=await Se(e);const a=new Blob([e],{type:"image/svg+xml"});await n(a,{fileName:"",description:"SVG file"},r)}catch(e){console.error(e.name,e.message)}})),$.addEventListener("click",(async()=>{const e=await navigator.clipboard.read();for(const t of e)for(const e of t.types)if(e.startsWith("image/")){const n=await t.getType(e);if(!n)return;const r=URL.createObjectURL(n);return void(S.src=r)}})),j.addEventListener("click",(async()=>{let e=T.innerHTML;try{navigator.clipboard.write([new ClipboardItem({"text/plain":new Promise((async t=>{e=await Se(e),t(new Blob([e],{type:"text/plain"}))})),"image/svg+xml":new Promise((async t=>{e=await Se(e),t(new Blob([e],{type:"image/svg+xml"}))}))})])}catch{e=await Se(e);const t=new Blob([e],{type:"text/plain"}),n=new Blob([e],{type:"image/svg+xml"});navigator.clipboard.write([new ClipboardItem({[n.type]:n,[t.type]:t})])}}));const Oe={red:"red",green:"green",blue:"blue",alpha:"alpha"},ke={scale:"scale"},Me={minPathLenght:"minPathSegments",turdsize:"turdsize",alphamax:"alphamax",turnpolicy:"turnpolicy",opticurve:"opticurve",opttolerance:"opttolerance"},je={["brightness"]:{unit:"%",initial:100,min:0,max:200},["contrast"]:{unit:"%",initial:100,min:0,max:200},["grayscale"]:{unit:"%",initial:0,min:0,max:100},["hue-rotate"]:{unit:"deg",initial:0,min:0,max:360},["invert"]:{unit:"%",initial:0,min:0,max:100},["opacity"]:{unit:"%",initial:100,min:0,max:100},["saturate"]:{unit:"%",initial:100,min:0,max:200},["sepia"]:{unit:"%",initial:0,min:0,max:100}},$e={[Oe.red]:{unit:"steps",initial:5,min:1,max:20},[Oe.green]:{unit:"steps",initial:5,min:1,max:20},[Oe.blue]:{unit:"steps",initial:5,min:1,max:20},[Oe.alpha]:{unit:"steps",initial:1,min:1,max:10}},Te={[ke.scale]:{unit:"%",initial:100,min:1,max:200}},Ne={[Me.turdsize]:{unit:"pixels",initial:2,min:0,max:50},[Me.alphamax]:{unit:"",initial:1,min:0,max:1.3334},[Me.turnpolicy]:{unit:"steps",initial:4,min:0,max:6},[Me.opticurve]:{unit:"steps",initial:1,min:0,max:1},[Me.opttolerance]:{unit:"",initial:.2,min:0,max:1},[Me.minPathLenght]:{unit:"segments",initial:0,min:0,max:30}},Pe=[{name:"svgOptions",icon:s},{name:"colorChannels",icon:c},{name:"imageSize",icon:l},{name:"imagePreprocessing",icon:u}],Ce=[Object.entries(Ne),Object.entries($e),Object.entries(Te),Object.entries(je)],Re={},qe={},Ie={},ze=(e,t)=>{const n=_.t(e);return` (${e?`${t}${1===n.length?n:` ${n}`}`:t})`},Ue=e=>{const t=document.createElement("span");return t.classList.add("icon"),t.innerHTML=e,t},Ae=(e,t,n)=>{const{unit:r,min:a,max:o,initial:i}=t,s=document.createElement("div");s.classList.add("preprocess-input");const c=document.createElement("label");c.textContent=_.t(e)||e,c.for=e;const l=document.createElement("span");qe[e]=l,l.textContent=ze(r,i);const u=document.createElement("input");Re[e]=u,u.id=e,u.type="range",u.class=e,r&&(u.dataset.unit=r),""===r&&(u.step=.01),u.min=a,u.max=o,u.value=i,u.addEventListener("input",(()=>{l.textContent=ze(r,u.value)})),Object.keys(Oe).includes(e)||Object.keys(Me).includes(e),u.addEventListener("change",ee((async()=>{X(),await Le(V)}),250));const d=document.createElement("button");d.type="button",d.textContent=_.t("reset"),d.addEventListener("click",(async()=>{u.value=i,l.textContent=ze(r,i),u.dispatchEvent(new Event("change"))})),c.append(l),s.append(c);const m=document.createElement("div");s.append(m),m.append(u),m.append(d),n.append(s)};f.addEventListener("change",(async()=>{const e=!f.checked;Object.keys(Oe).forEach((t=>{Re[t].disabled=e})),X(),await Le(V)})),y.addEventListener("change",(async()=>{X(),await Le(V)})),b.addEventListener("change",(async()=>{X(),await Le(V)})),L.addEventListener("change",(async()=>{X(),await Le(V)}));const _e=async()=>{await _.getTranslations(),De();const e=window.matchMedia("(max-width: 400px)"),t=()=>{e.matches?q.open=!1:q.open=!0};t(),e.addEventListener("change",t),Ce.forEach(((e,t)=>{const{name:n,icon:r}=Pe[t],a=((e,t)=>{const n=document.createElement("details");Ie[e]=n;const r=document.createElement("summary"),a=Ue(t);return r.append(a),r.append(document.createTextNode(_.t(e))),n.append(r),n})(n,r);t<2&&(a.open=!0),"colorChannels"===n?Ie.colorChannels.append(f.parentNode):"svgOptions"===n?(Ie.svgOptions.append(y.parentNode),Ie.svgOptions.append(b.parentNode)):"imageSize"===n&&Ie.imageSize.append(L.parentNode);for(const[o,i]of e)Ae(o,i,a);h.append(a)})),h.append(O.parentNode),S.addEventListener("load",(()=>{S.width=S.naturalWidth,S.height=S.naturalHeight,setTimeout((async()=>{Z(),await Le()}),200)})),S.complete&&S.dispatchEvent(new Event("load"))},De=()=>{O.textContent=_.t("resetAll"),v.textContent=_.t("posterizeInputImage"),w.textContent=_.t("colorSVG"),x.textContent=_.t("monochromeSVG"),E.textContent=_.t("considerDPR"),k.innerHTML="",k.append(Ue(r)),k.append(document.createTextNode(_.t("openImage"))),M.innerHTML="",M.append(Ue(a)),M.append(document.createTextNode(_.t("saveSVG"))),j.innerHTML="",j.append(Ue(o)),j.append(document.createTextNode(_.t("copySVG"))),$.innerHTML="",$.append(Ue(i)),$.append(document.createTextNode(_.t("pasteImage"))),R.dataset.dropText=_.t("dropFileHere"),I.innerHTML="",I.append(Ue(s)),I.append(document.createTextNode(_.t("tweak")))};O.addEventListener("click",(async()=>{const e=(e,t,n)=>{Re[e].value=n,qe[e].textContent=ze(t,n)};Ce.forEach((t=>{for(const[n,r]of t)e(n,r.unit,r.initial)})),Z(),await Le()})),N.addEventListener("click",(()=>{g.classList.toggle("debug"),P.classList.toggle("debug")}));let Be=null;const He=(e,t=5e3)=>{C.innerHTML=e,C.hidden=!1,Be&&clearTimeout(Be),Be=setTimeout((()=>{C.hidden=!0,C.textContent=""}),t)};document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`),window.addEventListener("resize",ee((()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)}),250)),"launchQueue"in window&&p((()=>import("./filehandling.9e7a06b8.js")),["assets/filehandling.9e7a06b8.js","assets/vendor.e3820820.js"]),(async()=>{_e();(function(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:a,onRegisterError:o}=e;let i;return"serviceWorker"in navigator&&(i=new d("/sw.js",{scope:"/"}),i.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==r||r()})),i.register({immediate:t}).then((e=>{null==a||a(e)})).catch((e=>{null==o||o(e)}))),async(e=!0)=>{}})({onOfflineReady(){He(_.t("readyToWorkOffline"))},onNeedRefresh(){location.reload()}})()})();export{S as i};
