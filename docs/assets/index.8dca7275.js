import{d as he,o as G,c as Q,w as q,r as be,a as re,s as At,u as oe,b as B,e as Ae,n as Ve,i as F,h as qe,p as ke,f as Ce,g as ze,L as kt,j as Ke,C as Ct,k as Ot,l as Ue,m as de,q as De,t as pe,v as Fe,x as xt,y as Lt,z as It,A as jt}from"./antdv.afb98907.js";const $t=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};$t();const Nt=he({setup(e){return console.log("my config env: ",{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}),(t,n)=>{const r=be("router-view"),o=be("ConfigProvider");return G(),Q(o,null,{default:q(()=>[re(r)]),_:1})}}});/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ge=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",W=e=>Ge?Symbol(e):"_vr_"+e,Bt=W("rvlm"),Qe=W("rvd"),me=W("r"),We=W("rl"),Oe=W("rvl"),Y=typeof window!="undefined";function Mt(e){return e.__esModule||Ge&&e[Symbol.toStringTag]==="Module"}const b=Object.assign;function xe(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const se=()=>{},Ht=/\/$/,Tt=e=>e.replace(Ht,"");function Le(e,t,n="/"){let r,o={},s="",f="";const d=t.indexOf("?"),c=t.indexOf("#",d>-1?d:0);return d>-1&&(r=t.slice(0,d),s=t.slice(d+1,c>-1?c:t.length),o=e(s)),c>-1&&(r=r||t.slice(0,c),f=t.slice(c,t.length)),r=Kt(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+f,path:r,query:o,hash:f}}function Vt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ye(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&X(t.matched[r],n.matched[o])&&Xe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function X(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Xe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!zt(e[n],t[n]))return!1;return!0}function zt(e,t){return Array.isArray(e)?Ze(e,t):Array.isArray(t)?Ze(t,e):e===t}function Ze(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Kt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,s,f;for(s=0;s<r.length;s++)if(f=r[s],!(o===1||f==="."))if(f==="..")o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var ce;(function(e){e.pop="pop",e.push="push"})(ce||(ce={}));var ae;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ae||(ae={}));function Ut(e){if(!e)if(Y){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tt(e)}const Dt=/^[^#]+#/;function Ft(e,t){return e.replace(Dt,"#")+t}function Gt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ge=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Gt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Je(e,t){return(history.state?history.state.position-t:-1)+e}const Ie=new Map;function Wt(e,t){Ie.set(e,t)}function Yt(e){const t=Ie.get(e);return Ie.delete(e),t}let Xt=()=>location.protocol+"//"+location.host;function et(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let d=o.includes(e.slice(s))?e.slice(s).length:1,c=o.slice(d);return c[0]!=="/"&&(c="/"+c),Ye(c,"")}return Ye(n,e)+r+o}function Zt(e,t,n,r){let o=[],s=[],f=null;const d=({state:u})=>{const g=et(e,location),v=n.value,C=t.value;let A=0;if(u){if(n.value=g,t.value=u,f&&f===v){f=null;return}A=C?u.position-C.position:0}else r(g);o.forEach(S=>{S(n.value,v,{delta:A,type:ce.pop,direction:A?A>0?ae.forward:ae.back:ae.unknown})})};function c(){f=n.value}function l(u){o.push(u);const g=()=>{const v=o.indexOf(u);v>-1&&o.splice(v,1)};return s.push(g),g}function a(){const{history:u}=window;!u.state||u.replaceState(b({},u.state,{scroll:ge()}),"")}function h(){for(const u of s)u();s=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",a)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",a),{pauseListeners:c,listen:l,destroy:h}}function tt(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?ge():null}}function Jt(e){const{history:t,location:n}=window,r={value:et(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,a){const h=e.indexOf("#"),u=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:Xt()+e+c;try{t[a?"replaceState":"pushState"](l,"",u),o.value=l}catch(g){console.error(g),n[a?"replace":"assign"](u)}}function f(c,l){const a=b({},t.state,tt(o.value.back,c,o.value.forward,!0),l,{position:o.value.position});s(c,a,!0),r.value=c}function d(c,l){const a=b({},o.value,t.state,{forward:c,scroll:ge()});s(a.current,a,!0);const h=b({},tt(r.value,c,null),{position:a.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:o,push:d,replace:f}}function en(e){e=Ut(e);const t=Jt(e),n=Zt(e,t.state,t.location,t.replace);function r(s,f=!0){f||n.pauseListeners(),history.go(s)}const o=b({location:"",base:e,go:r,createHref:Ft.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function tn(e){return typeof e=="string"||e&&typeof e=="object"}function nt(e){return typeof e=="string"||typeof e=="symbol"}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rt=W("nf");var ot;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ot||(ot={}));function Z(e,t){return b(new Error,{type:e,[rt]:!0},t)}function K(e,t){return e instanceof Error&&rt in e&&(t==null||!!(e.type&t))}const st="[^/]+?",nn={sensitive:!1,strict:!1,start:!0,end:!0},rn=/[.+*?^${}()[\]/\\]/g;function on(e,t){const n=b({},nn,t),r=[];let o=n.start?"^":"";const s=[];for(const l of e){const a=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let h=0;h<l.length;h++){const u=l[h];let g=40+(n.sensitive?.25:0);if(u.type===0)h||(o+="/"),o+=u.value.replace(rn,"\\$&"),g+=40;else if(u.type===1){const{value:v,repeatable:C,optional:A,regexp:S}=u;s.push({name:v,repeatable:C,optional:A});const R=S||st;if(R!==st){g+=10;try{new RegExp(`(${R})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${v}" (${R}): `+O.message)}}let I=C?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(I=A&&l.length<2?`(?:/${I})`:"/"+I),A&&(I+="?"),o+=I,g+=20,A&&(g+=-8),C&&(g+=-20),R===".*"&&(g+=-50)}a.push(g)}r.push(a)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const f=new RegExp(o,n.sensitive?"":"i");function d(l){const a=l.match(f),h={};if(!a)return null;for(let u=1;u<a.length;u++){const g=a[u]||"",v=s[u-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let a="",h=!1;for(const u of e){(!h||!a.endsWith("/"))&&(a+="/"),h=!1;for(const g of u)if(g.type===0)a+=g.value;else if(g.type===1){const{value:v,repeatable:C,optional:A}=g,S=v in l?l[v]:"";if(Array.isArray(S)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const R=Array.isArray(S)?S.join("/"):S;if(!R)if(A)u.length<2&&(a.endsWith("/")?a=a.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);a+=R}}return a}return{re:f,score:r,keys:s,parse:d,stringify:c}}function sn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function cn(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=sn(r[n],o[n]);if(s)return s;n++}return o.length-r.length}const an={type:0,value:""},un=/[a-zA-Z0-9_]/;function ln(e){if(!e)return[[]];if(e==="/")return[[an]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const o=[];let s;function f(){s&&o.push(s),s=[]}let d=0,c,l="",a="";function h(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:a,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function u(){l+=c}for(;d<e.length;){if(c=e[d++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),f()):c===":"?(h(),n=1):u();break;case 4:u(),n=r;break;case 1:c==="("?n=2:un.test(c)?u():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&d--);break;case 2:c===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+c:n=3:a+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&d--,a="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),f(),o}function fn(e,t,n){const r=on(ln(e.path),n),o=b(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function hn(e,t){const n=[],r=new Map;t=at({strict:!1,end:!0,sensitive:!1},t);function o(a){return r.get(a)}function s(a,h,u){const g=!u,v=pn(a);v.aliasOf=u&&u.record;const C=at(t,a),A=[v];if("alias"in a){const I=typeof a.alias=="string"?[a.alias]:a.alias;for(const O of I)A.push(b({},v,{components:u?u.record.components:v.components,path:O,aliasOf:u?u.record:v}))}let S,R;for(const I of A){const{path:O}=I;if(h&&O[0]!=="/"){const $=h.record.path,P=$[$.length-1]==="/"?"":"/";I.path=h.record.path+(O&&P+O)}if(S=fn(I,h,C),u?u.alias.push(S):(R=R||S,R!==S&&R.alias.push(S),g&&a.name&&!ct(S)&&f(a.name)),"children"in v){const $=v.children;for(let P=0;P<$.length;P++)s($[P],S,u&&u.children[P])}u=u||S,c(S)}return R?()=>{f(R)}:se}function f(a){if(nt(a)){const h=r.get(a);h&&(r.delete(a),n.splice(n.indexOf(h),1),h.children.forEach(f),h.alias.forEach(f))}else{const h=n.indexOf(a);h>-1&&(n.splice(h,1),a.record.name&&r.delete(a.record.name),a.children.forEach(f),a.alias.forEach(f))}}function d(){return n}function c(a){let h=0;for(;h<n.length&&cn(a,n[h])>=0&&(a.record.path!==n[h].record.path||!it(a,n[h]));)h++;n.splice(h,0,a),a.record.name&&!ct(a)&&r.set(a.record.name,a)}function l(a,h){let u,g={},v,C;if("name"in a&&a.name){if(u=r.get(a.name),!u)throw Z(1,{location:a});C=u.record.name,g=b(dn(h.params,u.keys.filter(R=>!R.optional).map(R=>R.name)),a.params),v=u.stringify(g)}else if("path"in a)v=a.path,u=n.find(R=>R.re.test(v)),u&&(g=u.parse(v),C=u.record.name);else{if(u=h.name?r.get(h.name):n.find(R=>R.re.test(h.path)),!u)throw Z(1,{location:a,currentLocation:h});C=u.record.name,g=b({},h.params,a.params),v=u.stringify(g)}const A=[];let S=u;for(;S;)A.unshift(S.record),S=S.parent;return{name:C,path:v,params:g,matched:A,meta:gn(A)}}return e.forEach(a=>s(a)),{addRoute:s,resolve:l,removeRoute:f,getRoutes:d,getRecordMatcher:o}}function dn(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function pn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:mn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function mn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function ct(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function gn(e){return e.reduce((t,n)=>b(t,n.meta),{})}function at(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function it(e,t){return t.children.some(n=>n===e||it(e,n))}const ut=/#/g,yn=/&/g,vn=/\//g,_n=/=/g,En=/\?/g,lt=/\+/g,Rn=/%5B/g,Pn=/%5D/g,ft=/%5E/g,Sn=/%60/g,ht=/%7B/g,wn=/%7C/g,dt=/%7D/g,bn=/%20/g;function je(e){return encodeURI(""+e).replace(wn,"|").replace(Rn,"[").replace(Pn,"]")}function An(e){return je(e).replace(ht,"{").replace(dt,"}").replace(ft,"^")}function $e(e){return je(e).replace(lt,"%2B").replace(bn,"+").replace(ut,"%23").replace(yn,"%26").replace(Sn,"`").replace(ht,"{").replace(dt,"}").replace(ft,"^")}function kn(e){return $e(e).replace(_n,"%3D")}function Cn(e){return je(e).replace(ut,"%23").replace(En,"%3F")}function On(e){return e==null?"":Cn(e).replace(vn,"%2F")}function ye(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function xn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(lt," "),f=s.indexOf("="),d=ye(f<0?s:s.slice(0,f)),c=f<0?null:ye(s.slice(f+1));if(d in t){let l=t[d];Array.isArray(l)||(l=t[d]=[l]),l.push(c)}else t[d]=c}return t}function pt(e){let t="";for(let n in e){const r=e[n];if(n=kn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&$e(s)):[r&&$e(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Ln(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}function ie(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function U(e,t,n,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((f,d)=>{const c=h=>{h===!1?d(Z(4,{from:n,to:t})):h instanceof Error?d(h):tn(h)?d(Z(2,{from:t,to:h})):(s&&r.enterCallbacks[o]===s&&typeof h=="function"&&s.push(h),f())},l=e.call(r&&r.instances[o],t,n,c);let a=Promise.resolve(l);e.length<3&&(a=a.then(c)),a.catch(h=>d(h))})}function Ne(e,t,n,r){const o=[];for(const s of e)for(const f in s.components){let d=s.components[f];if(!(t!=="beforeRouteEnter"&&!s.instances[f]))if(In(d)){const l=(d.__vccOpts||d)[t];l&&o.push(U(l,n,r,s,f))}else{let c=d();o.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${f}" at "${s.path}"`));const a=Mt(l)?l.default:l;s.components[f]=a;const u=(a.__vccOpts||a)[t];return u&&U(u,n,r,s,f)()}))}}return o}function In(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function mt(e){const t=F(me),n=F(We),r=B(()=>t.resolve(oe(e.to))),o=B(()=>{const{matched:c}=r.value,{length:l}=c,a=c[l-1],h=n.matched;if(!a||!h.length)return-1;const u=h.findIndex(X.bind(null,a));if(u>-1)return u;const g=gt(c[l-2]);return l>1&&gt(a)===g&&h[h.length-1].path!==g?h.findIndex(X.bind(null,c[l-2])):u}),s=B(()=>o.value>-1&&Bn(n.params,r.value.params)),f=B(()=>o.value>-1&&o.value===n.matched.length-1&&Xe(n.params,r.value.params));function d(c={}){return Nn(c)?t[oe(e.replace)?"replace":"push"](oe(e.to)).catch(se):Promise.resolve()}return{route:r,href:B(()=>r.value.href),isActive:s,isExactActive:f,navigate:d}}const jn=he({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mt,setup(e,{slots:t}){const n=Ae(mt(e)),{options:r}=F(me),o=B(()=>({[yt(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yt(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),$n=jn;function Nn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Bn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((s,f)=>s!==o[f]))return!1}return!0}function gt(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yt=(e,t,n)=>e!=null?e:t!=null?t:n,Mn=he({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=F(Oe),o=B(()=>e.route||r.value),s=F(Qe,0),f=B(()=>o.value.matched[s]);ke(Qe,s+1),ke(Bt,f),ke(Oe,o);const d=Ce();return ze(()=>[d.value,f.value,e.name],([c,l,a],[h,u,g])=>{l&&(l.instances[a]=c,u&&u!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=u.leaveGuards),l.updateGuards.size||(l.updateGuards=u.updateGuards))),c&&l&&(!u||!X(l,u)||!h)&&(l.enterCallbacks[a]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=o.value,l=f.value,a=l&&l.components[e.name],h=e.name;if(!a)return vt(n.default,{Component:a,route:c});const u=l.props[e.name],g=u?u===!0?c.params:typeof u=="function"?u(c):u:null,C=qe(a,b({},g,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[h]=null)},ref:d}));return vt(n.default,{Component:C,route:c})||C}}});function vt(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Hn=Mn;function Tn(e){const t=hn(e.routes,e),n=e.parseQuery||xn,r=e.stringifyQuery||pt,o=e.history,s=ie(),f=ie(),d=ie(),c=At(z);let l=z;Y&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=xe.bind(null,i=>""+i),h=xe.bind(null,On),u=xe.bind(null,ye);function g(i,m){let p,y;return nt(i)?(p=t.getRecordMatcher(i),y=m):y=i,t.addRoute(y,p)}function v(i){const m=t.getRecordMatcher(i);m&&t.removeRoute(m)}function C(){return t.getRoutes().map(i=>i.record)}function A(i){return!!t.getRecordMatcher(i)}function S(i,m){if(m=b({},m||c.value),typeof i=="string"){const _=Le(n,i,m.path),L=t.resolve({path:_.path},m),ne=o.createHref(_.fullPath);return b(_,L,{params:u(L.params),hash:ye(_.hash),redirectedFrom:void 0,href:ne})}let p;if("path"in i)p=b({},i,{path:Le(n,i.path,m.path).path});else{const _=b({},i.params);for(const L in _)_[L]==null&&delete _[L];p=b({},i,{params:h(i.params)}),m.params=h(m.params)}const y=t.resolve(p,m),k=i.hash||"";y.params=a(u(y.params));const x=Vt(r,b({},i,{hash:An(k),path:y.path})),E=o.createHref(x);return b({fullPath:x,hash:k,query:r===pt?Ln(i.query):i.query||{}},y,{redirectedFrom:void 0,href:E})}function R(i){return typeof i=="string"?Le(n,i,c.value.path):b({},i)}function I(i,m){if(l!==i)return Z(8,{from:m,to:i})}function O(i){return w(i)}function $(i){return O(b(R(i),{replace:!0}))}function P(i){const m=i.matched[i.matched.length-1];if(m&&m.redirect){const{redirect:p}=m;let y=typeof p=="function"?p(i):p;return typeof y=="string"&&(y=y.includes("?")||y.includes("#")?y=R(y):{path:y},y.params={}),b({query:i.query,hash:i.hash,params:i.params},y)}}function w(i,m){const p=l=S(i),y=c.value,k=i.state,x=i.force,E=i.replace===!0,_=P(p);if(_)return w(b(R(_),{state:k,force:x,replace:E}),m||p);const L=p;L.redirectedFrom=m;let ne;return!x&&qt(r,y,p)&&(ne=Z(16,{to:L,from:y}),Te(y,y,!0,!1)),(ne?Promise.resolve(ne):T(L,y)).catch(N=>K(N)?K(N,2)?N:Re(N):Ee(N,L,y)).then(N=>{if(N){if(K(N,2))return w(b(R(N.to),{state:k,force:x,replace:E}),m||L)}else N=le(L,y,!0,E,k);return V(L,y,N),N})}function H(i,m){const p=I(i,m);return p?Promise.reject(p):Promise.resolve()}function T(i,m){let p;const[y,k,x]=Vn(i,m);p=Ne(y.reverse(),"beforeRouteLeave",i,m);for(const _ of y)_.leaveGuards.forEach(L=>{p.push(U(L,i,m))});const E=H.bind(null,i,m);return p.push(E),J(p).then(()=>{p=[];for(const _ of s.list())p.push(U(_,i,m));return p.push(E),J(p)}).then(()=>{p=Ne(k,"beforeRouteUpdate",i,m);for(const _ of k)_.updateGuards.forEach(L=>{p.push(U(L,i,m))});return p.push(E),J(p)}).then(()=>{p=[];for(const _ of i.matched)if(_.beforeEnter&&!m.matched.includes(_))if(Array.isArray(_.beforeEnter))for(const L of _.beforeEnter)p.push(U(L,i,m));else p.push(U(_.beforeEnter,i,m));return p.push(E),J(p)}).then(()=>(i.matched.forEach(_=>_.enterCallbacks={}),p=Ne(x,"beforeRouteEnter",i,m),p.push(E),J(p))).then(()=>{p=[];for(const _ of f.list())p.push(U(_,i,m));return p.push(E),J(p)}).catch(_=>K(_,8)?_:Promise.reject(_))}function V(i,m,p){for(const y of d.list())y(i,m,p)}function le(i,m,p,y,k){const x=I(i,m);if(x)return x;const E=m===z,_=Y?history.state:{};p&&(y||E?o.replace(i.fullPath,b({scroll:E&&_&&_.scroll},k)):o.push(i.fullPath,k)),c.value=i,Te(i,m,p,E),Re()}let te;function D(){te=o.listen((i,m,p)=>{const y=S(i),k=P(y);if(k){w(b(k,{replace:!0}),y).catch(se);return}l=y;const x=c.value;Y&&Wt(Je(x.fullPath,p.delta),ge()),T(y,x).catch(E=>K(E,4|8)?E:K(E,2)?(w(E.to,y).then(_=>{K(_,4|16)&&!p.delta&&p.type===ce.pop&&o.go(-1,!1)}).catch(se),Promise.reject()):(p.delta&&o.go(-p.delta,!1),Ee(E,y,x))).then(E=>{E=E||le(y,x,!1),E&&(p.delta?o.go(-p.delta,!1):p.type===ce.pop&&K(E,4|16)&&o.go(-1,!1)),V(y,x,E)}).catch(se)})}let j=ie(),He=ie(),fe;function Ee(i,m,p){Re(i);const y=He.list();return y.length?y.forEach(k=>k(i,m,p)):console.error(i),Promise.reject(i)}function bt(){return fe&&c.value!==z?Promise.resolve():new Promise((i,m)=>{j.add([i,m])})}function Re(i){return fe||(fe=!i,D(),j.list().forEach(([m,p])=>i?p(i):m()),j.reset()),i}function Te(i,m,p,y){const{scrollBehavior:k}=e;if(!Y||!k)return Promise.resolve();const x=!p&&Yt(Je(i.fullPath,0))||(y||!p)&&history.state&&history.state.scroll||null;return Ve().then(()=>k(i,m,x)).then(E=>E&&Qt(E)).catch(E=>Ee(E,i,m))}const Pe=i=>o.go(i);let Se;const we=new Set;return{currentRoute:c,addRoute:g,removeRoute:v,hasRoute:A,getRoutes:C,resolve:S,options:e,push:O,replace:$,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:s.add,beforeResolve:f.add,afterEach:d.add,onError:He.add,isReady:bt,install(i){const m=this;i.component("RouterLink",$n),i.component("RouterView",Hn),i.config.globalProperties.$router=m,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>oe(c)}),Y&&!Se&&c.value===z&&(Se=!0,O(o.location).catch(k=>{}));const p={};for(const k in z)p[k]=B(()=>c.value[k]);i.provide(me,m),i.provide(We,Ae(p)),i.provide(Oe,c);const y=i.unmount;we.add(i),i.unmount=function(){we.delete(i),we.size<1&&(l=z,te&&te(),c.value=z,Se=!1,fe=!1),y()}}}}function J(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Vn(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let f=0;f<s;f++){const d=t.matched[f];d&&(e.matched.find(l=>X(l,d))?r.push(d):n.push(d));const c=e.matched[f];c&&(t.matched.find(l=>X(l,c))||o.push(c))}return[n,r,o]}function qn(){return F(me)}const zn="modulepreload",_t={},Kn="/",Un=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Kn}${r}`,r in _t)return;_t[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":zn,o||(f.as="script",f.crossOrigin=""),f.href=r,document.head.appendChild(f),o)return new Promise((d,c)=>{f.addEventListener("load",d),f.addEventListener("error",c)})})).then(()=>t())};var Dn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const Fn=he({setup(e){const t=qn(),n=B(()=>t.currentRoute.value.meta);return(r,o)=>{const s=be("router-view"),f=Ct,d=Ot,c=kt;return G(),Q(c,{class:"basicLayout-wrap"},{default:q(()=>[re(c,null,{default:q(()=>[re(c,{class:"basicLayout-content"},{default:q(()=>[re(d,null,{default:q(()=>[oe(n).hiddenWrap?(G(),Q(s,{key:0},{default:q(({Component:l})=>[(G(),Q(Ke(l)))]),_:1})):(G(),Q(f,{key:1},{default:q(()=>[re(s,null,{default:q(({Component:l})=>[(G(),Q(Ke(l)))]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})}}});var Gn=Dn(Fn,[["__scopeId","data-v-20f89caf"]]);const Qn=[{path:"/lowcode",name:"lowcode",component:Gn,meta:{title:"\u4F4E\u4EE3\u7801"},children:[{path:"/lowcode/worksheet",name:"worksheet",component:()=>Un(()=>import("./index.535ba4ff.js"),["assets/index.535ba4ff.js","assets/index.9ef5e04b.css","assets/antdv.afb98907.js","assets/antdv.fbc9a337.css"]),meta:{title:"\u5DE5\u4F5C\u53F0"}}]}],Wn=Tn({history:en(),routes:Qn,strict:!0,scrollBehavior:()=>({left:0,top:0})});var Yn=!1;/*!
  * pinia v2.0.12
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Et;const ve=e=>Et=e,Rt=Symbol();function Be(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ue;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ue||(ue={}));function Xn(){const e=Ue(!0),t=e.run(()=>Ce({}));let n=[],r=[];const o=de({install(s){ve(o),o._a=s,s.provide(Rt,o),s.config.globalProperties.$pinia=o,r.forEach(f=>n.push(f)),r=[]},use(s){return!this._a&&!Yn?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const Pt=()=>{};function St(e,t,n,r=Pt){e.push(t);const o=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&De()&&Lt(o),o}function ee(e,...t){e.slice().forEach(n=>{n(...t)})}function Me(e,t){for(const n in t){const r=t[n],o=e[n];Be(o)&&Be(r)&&!pe(r)&&!Fe(r)?e[n]=Me(o,r):e[n]=r}return e}const Zn=Symbol();function Jn(e){return!Be(e)||!e.hasOwnProperty(Zn)}const{assign:M}=Object;function er(e){return!!(pe(e)&&e.effect)}function tr(e,t,n,r){const{state:o,actions:s,getters:f}=t,d=n.state.value[e];let c;function l(){d||(n.state.value[e]=o?o():{});const a=It(n.state.value[e]);return M(a,s,Object.keys(f||{}).reduce((h,u)=>(h[u]=de(B(()=>{ve(n);const g=n._s.get(e);return f[u].call(g,g)})),h),{}))}return c=wt(e,l,t,n),c.$reset=function(){const h=o?o():{};this.$patch(u=>{M(u,h)})},c}function wt(e,t,n={},r,o){let s;const f=n.state,d=M({actions:{}},n),c={deep:!0};let l,a,h=de([]),u=de([]),g;const v=r.state.value[e];!f&&!v&&(r.state.value[e]={}),Ce({});function C(P){let w;l=a=!1,typeof P=="function"?(P(r.state.value[e]),w={type:ue.patchFunction,storeId:e,events:g}):(Me(r.state.value[e],P),w={type:ue.patchObject,payload:P,storeId:e,events:g}),Ve().then(()=>{l=!0}),a=!0,ee(h,w,r.state.value[e])}const A=Pt;function S(){s.stop(),h=[],u=[],r._s.delete(e)}function R(P,w){return function(){ve(r);const H=Array.from(arguments),T=[],V=[];function le(j){T.push(j)}function te(j){V.push(j)}ee(u,{args:H,name:P,store:O,after:le,onError:te});let D;try{D=w.apply(this&&this.$id===e?this:O,H)}catch(j){throw ee(V,j),j}return D instanceof Promise?D.then(j=>(ee(T,j),j)).catch(j=>(ee(V,j),Promise.reject(j))):(ee(T,D),D)}}const I={_p:r,$id:e,$onAction:St.bind(null,u),$patch:C,$reset:A,$subscribe(P,w={}){const H=St(h,P,w.detached,()=>T()),T=s.run(()=>ze(()=>r.state.value[e],V=>{(w.flush==="sync"?a:l)&&P({storeId:e,type:ue.direct,events:g},V)},M({},c,w)));return H},$dispose:S},O=Ae(M({},I));r._s.set(e,O);const $=r._e.run(()=>(s=Ue(),s.run(()=>t())));for(const P in $){const w=$[P];if(pe(w)&&!er(w)||Fe(w))f||(v&&Jn(w)&&(pe(w)?w.value=v[P]:Me(w,v[P])),r.state.value[e][P]=w);else if(typeof w=="function"){const H=R(P,w);$[P]=H,d.actions[P]=w}}return M(O,$),M(xt(O),$),Object.defineProperty(O,"$state",{get:()=>r.state.value[e],set:P=>{C(w=>{M(w,P)})}}),r._p.forEach(P=>{M(O,s.run(()=>P({store:O,app:r._a,pinia:r,options:d})))}),v&&f&&n.hydrate&&n.hydrate(O.$state,v),l=!0,a=!0,O}function sr(e,t,n){let r,o;const s=typeof t=="function";typeof e=="string"?(r=e,o=s?n:t):(o=e,r=e.id);function f(d,c){const l=De();return d=d||l&&F(Rt),d&&ve(d),d=Et,d._s.has(r)||(s?wt(r,t,o,d):tr(r,o,d)),d._s.get(r)}return f.$id=r,f}const nr=Xn();const _e=jt(Nt);console.log(_e);_e.use(Wn);_e.use(nr);_e.mount("#app");export{Dn as _,sr as d};
