(()=>{"use strict";var e,n,r,i,c,x={},d={};function s(e){var n=d[e];if(void 0!==n)return n.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return x[e](r,r.exports,s),r.loaded=!0,r.exports}s.m=x,e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r=o=>{o&&(o.forEach(t=>t.r--),o.forEach(t=>t.r--?t.r++:t()))},i=o=>!--o.r&&o(),c=(o,t)=>o?o.push(t):i(t),s.a=(o,t,f)=>{var u,b,g,l=f&&[],p=o.exports,_=!0,k=!1,O=(h,v,w)=>{k||(k=!0,v.r+=h.length,h.map((y,E)=>y[e](v,w)),k=!1)},m=new Promise((h,v)=>{g=v,b=()=>(h(p),r(l),l=0)});m[n]=p,m[e]=(h,v)=>{if(_)return i(h);u&&O(u,h,v),c(l,h),m.catch(v)},o.exports=m,t(h=>{if(!h)return b();u=(o=>o.map(t=>{if(null!==t&&"object"==typeof t){if(t[e])return t;if(t.then){var f=[];t.then(u=>{l[n]=u,r(f),f=0});var l={};return l[e]=(u,b)=>(c(f,u),t.catch(b)),l}}var p={};return p[e]=u=>i(u),p[n]=t,p}))(h);var v,w,y=new Promise((E,S)=>{(v=()=>E(w=u.map(M=>M[n]))).r=0,O(u,v,S)});return v.r?y:w}).then(b,g),_=!1},(()=>{var e=[];s.O=(n,r,i,c)=>{if(!r){var o=1/0;for(a=0;a<e.length;a++){for(var[r,i,c]=e[a],t=!0,f=0;f<r.length;f++)(!1&c||o>=c)&&Object.keys(s.O).every(_=>s.O[_](r[f]))?r.splice(f--,1):(t=!1,c<o&&(o=c));if(t){e.splice(a--,1);var l=i();void 0!==l&&(n=l)}}return n}c=c||0;for(var a=e.length;a>0&&e[a-1][2]>c;a--)e[a]=e[a-1];e[a]=[r,i,c]}})(),s.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return s.d(n,{a:n}),n},s.d=(e,n)=>{for(var r in n)s.o(n,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),s.v=(e,n,r,i)=>{var c=fetch(s.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(c,i).then(a=>Object.assign(e,a.instance.exports)):c.then(a=>a.arrayBuffer()).then(a=>WebAssembly.instantiate(a,i)).then(a=>Object.assign(e,a.instance.exports))},s.p="",(()=>{var e={666:0};s.O.j=i=>0===e[i];var n=(i,c)=>{var f,l,[a,o,t]=c,p=0;if(a.some(b=>0!==e[b])){for(f in o)s.o(o,f)&&(s.m[f]=o[f]);if(t)var u=t(s)}for(i&&i(c);p<a.length;p++)s.o(e,l=a[p])&&e[l]&&e[l][0](),e[a[p]]=0;return s.O(u)},r=self.webpackChunkcoa=self.webpackChunkcoa||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})()})();