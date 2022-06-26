var plugin_countdown;(()=>{"use strict";var e,r,t,n,o,i,a,u,s,l,f,c,p,d,h,v,g={572:(e,r,t)=>{var n={"./info":()=>t.e(232).then((()=>()=>t(232))),"./package.json":()=>t.e(147).then((()=>()=>t(147)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},m={};function b(e){var r=m[e];if(void 0!==r)return r.exports;var t=m[e]={exports:{}};return g[e](t,t.exports,b),t.exports}b.m=g,b.c=m,b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+".bundle.js",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="countdown:",b.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){a=f;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,b.nc&&a.setAttribute("nonce",b.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var c=(r,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),u&&document.head.appendChild(a)}},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];b.o(b.S,t)||(b.S[t]={}),b.S[t];var i=[];return e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var r=b.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],u=(typeof a)[0];if(i!=u)return"o"==i&&"n"==u||"s"==u||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(u=e[i]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var a=[];for(i=1;i<e.length;i++){var u=e[i];a.push(0===u?"not("+s()+")":1===u?"("+s()+" || "+s()+")":2===u?a.pop()+" "+a.pop():o(u))}return s();function s(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,u=1,s=!0;;u++,a++){var l,f,c=u<e.length?(typeof e[u])[0]:"";if(a>=r.length||"o"==(f=(typeof(l=r[a]))[0]))return!s||("u"==c?u>n&&!o:""==c!=o);if("u"==f){if(!s||"u"!=c)return!1}else if(s)if(c==f)if(u<=n){if(l!=e[u])return!1}else{if(o?l>e[u]:l<e[u])return!1;l!=e[u]&&(s=!1)}else if("s"!=c&&"n"!=c){if(o||u<=n)return!1;s=!1,u--}else{if(u<=n||f<c!=o)return!1;s=!1}else"s"!=c&&"n"!=c&&(s=!1,u--)}}var p=[],d=p.pop.bind(p);for(a=1;a<e.length;a++){var h=e[a];p.push(1==h?d()|d():2==h?d()&d():h?i(h,r):!d())}return!!d()},a=(e,r)=>{var t=b.S[e];if(!t||!b.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},s=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!i(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},l=(e,r,t,n)=>{var i=e[t];return"No satisfying version ("+o(n)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(i).map((e=>e+" from "+i[e].from)).join(", ")},f=(e,r,t,n)=>{"undefined"!=typeof console&&console.warn&&console.warn(l(e,r,t,n))},c=e=>(e.loaded=1,e.get()),p=(e=>function(r,t,n,o){var i=b.I(r);return i&&i.then?i.then(e.bind(e,r,b.S[r],t,n,o)):e(r,b.S[r],t,n)})(((e,r,t,n)=>(a(e,t),c(s(r,t,n)||f(r,e,t,n)||u(r,t))))),d={},h={419:()=>p("default","@clusterio/lib",[1,2,0,0,,"alpha",12])},v={232:[419]},b.f.consumes=(e,r)=>{b.o(v,e)&&v[e].forEach((e=>{if(b.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete d[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var o=h[e]();o.then?r.push(d[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={804:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=b.p+b.u(r),a=new Error;b.l(i,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[i,a,u]=t,s=0;if(i.some((r=>0!==e[r]))){for(n in a)b.o(a,n)&&(b.m[n]=a[n]);u&&u(b)}for(r&&r(t);s<i.length;s++)o=i[s],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkcountdown=self.webpackChunkcountdown||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var w=b(572);plugin_countdown=w})();
//# sourceMappingURL=remoteEntry.js.map