/*! Wiki.js - wiki.js.org - Licensed under AGPL */!function(e){function t(t){for(var o,n,c=t[0],s=t[1],u=t[2],l=t[3]||[],f=0,p=[];f<c.length;f++)n=c[f],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(m&&m(t),d.push.apply(d,l);p.length;)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,n=1;n<r.length;n++){var u=r[n];0!==i[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=r[0]))}return 0===a.length&&(d.forEach((function(e){if(void 0===i[e]){i[e]=null;var t=document.createElement("link");t.crossOrigin="use-credentials",s.nc&&t.setAttribute("nonce",s.nc),t.rel="prefetch",t.as="script",t.href=c(e),document.head.appendChild(t)}})),d.length=0),e}var o={},n={runtime:0},i={runtime:0},a=[],d=[];function c(e){return s.p+"js/"+({mdi:"mdi",tags:"tags",vendor:"vendor",admin:"admin",comments:"comments",editor:"editor",history:"history",login:"login",profile:"profile",source:"source",theme0:"theme0","ui-extra":"ui-extra","editor-api":"editor-api","editor-ckeditor":"editor-ckeditor","editor-conflict":"editor-conflict","editor-markdown":"editor-markdown"}[e]||e)+".js?1622288162"}function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[];n[e]?t.push(n[e]):0!==n[e]&&{mdi:1,tags:1,vendor:1,admin:1,comments:1,editor:1,history:1,login:1,profile:1,source:1,theme0:1,"ui-extra":1,"editor-api":1,"editor-ckeditor":1,"editor-conflict":1,"editor-markdown":1}[e]&&t.push(n[e]=new Promise((function(t,r){for(var o="css/"+({mdi:"mdi",tags:"tags",vendor:"vendor",admin:"admin",comments:"comments",editor:"editor",history:"history",login:"login",profile:"profile",source:"source",theme0:"theme0","ui-extra":"ui-extra","editor-api":"editor-api","editor-ckeditor":"editor-ckeditor","editor-conflict":"editor-conflict","editor-markdown":"editor-markdown"}[e]||e)+"."+{mdi:"92bb751a31abe8eb29fb",tags:"9c71b956c2d861e3dd5e",vendor:"ddf2a421e96cf7b9963b",admin:"825a806e43cd08f4217d",comments:"517b64b9256ae137992c",editor:"e74d5fc6067fa5355fb4",history:"d6fd2506ac7b53837bc1",login:"7249203596a5d3933fb7",profile:"2c6ebebda7bbcbf264bf",source:"6abd8565e631c906f29e",theme0:"21bfaab977ae841b80a7","ui-extra":"a4b4b3b2c4b850502e80","editor-api":"d2062fd786003fcada9b","editor-ckeditor":"15418f12ba92b79a2609","editor-conflict":"440e5f4904866c7e3701","editor-markdown":"264a8d9f43e397e2e5db"}[e]+".css",i=s.p+o,a=document.getElementsByTagName("link"),d=0;d<a.length;d++){var c=(l=a[d]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===i))return t()}var u=document.getElementsByTagName("style");for(d=0;d<u.length;d++){var l;if((c=(l=u[d]).getAttribute("data-href"))===o||c===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete n[e],f.parentNode.removeChild(f),r(a)},f.href=i,0!==f.href.indexOf(window.location.origin+"/")&&(f.crossOrigin="use-credentials"),document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){n[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=i[e]=[t,o]}));t.push(r[2]=o);var a,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e),0!==d.src.indexOf(window.location.origin+"/")&&(d.crossOrigin="use-credentials");var u=new Error;a=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=i[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",u.name="ChunkLoadError",u.type=o,u.request=n,r[1](u)}i[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:d})}),12e4);d.onerror=d.onload=a,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/_assets/",s.oe=function(e){throw console.error(e),e};var u=this.webpackJsonp=this.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=l;r()}([]);