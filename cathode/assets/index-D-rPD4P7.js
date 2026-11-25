var wm=Object.defineProperty;var Em=(n,e,t)=>e in n?wm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Fe=(n,e,t)=>Em(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},wr=[],Mi=()=>{},od=()=>!1,qa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ka=n=>n.startsWith("onUpdate:"),Vt=Object.assign,_u=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Tm=Object.prototype.hasOwnProperty,mt=(n,e)=>Tm.call(n,e),Ze=Array.isArray,Er=n=>Io(n)==="[object Map]",Wr=n=>Io(n)==="[object Set]",ef=n=>Io(n)==="[object Date]",it=n=>typeof n=="function",Ut=n=>typeof n=="string",ii=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",ad=n=>(vt(n)||it(n))&&it(n.then)&&it(n.catch),ld=Object.prototype.toString,Io=n=>ld.call(n),Am=n=>Io(n).slice(8,-1),cd=n=>Io(n)==="[object Object]",xu=n=>Ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fo=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ja=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Cm=/-\w/g,ei=ja(n=>n.replace(Cm,e=>e.slice(1).toUpperCase())),Rm=/\B([A-Z])/g,Ss=ja(n=>n.replace(Rm,"-$1").toLowerCase()),ud=ja(n=>n.charAt(0).toUpperCase()+n.slice(1)),hl=ja(n=>n?`on${ud(n)}`:""),xi=(n,e)=>!Object.is(n,e),Ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},fd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Za=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Pm=n=>{const e=Ut(n)?Number(n):NaN;return isNaN(e)?n:e};let tf;const Ja=()=>tf||(tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vn(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ut(i)?Um(i):Vn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ut(n)||vt(n))return n}const Dm=/;(?![^(]*\))/g,Lm=/:([^]+)/,Im=/\/\*[^]*?\*\//g;function Um(n){const e={};return n.replace(Im,"").split(Dm).forEach(t=>{if(t){const i=t.split(Lm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ot(n){let e="";if(Ut(n))e=n;else if(Ze(n))for(let t=0;t<n.length;t++){const i=Ot(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Fm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nm=vu(Fm);function hd(n){return!!n||n===""}function Om(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Xr(n[i],e[i]);return t}function Xr(n,e){if(n===e)return!0;let t=ef(n),i=ef(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ii(n),i=ii(e),t||i)return n===e;if(t=Ze(n),i=Ze(e),t||i)return t&&i?Om(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Xr(n[o],e[o]))return!1}}return String(n)===String(e)}function yu(n,e){return n.findIndex(t=>Xr(t,e))}const dd=n=>!!(n&&n.__v_isRef===!0),vn=n=>Ut(n)?n:n==null?"":Ze(n)||vt(n)&&(n.toString===ld||!it(n.toString))?dd(n)?vn(n.value):JSON.stringify(n,pd,2):String(n),pd=(n,e)=>dd(e)?pd(n,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[dl(i,r)+" =>"]=s,t),{})}:Wr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>dl(t))}:ii(e)?dl(e):vt(e)&&!Ze(e)&&!cd(e)?String(e):e,dl=(n,e="")=>{var t;return ii(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let En;class md{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=En,!e&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=En;try{return En=this,e()}finally{En=t}}}on(){++this._on===1&&(this.prevScope=En,En=this)}off(){this._on>0&&--this._on===0&&(En=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qa(n){return new md(n)}function Bm(){return En}let wt;const pl=new WeakSet;class gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,En&&En.active&&En.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pl.has(this)&&(pl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_d(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nf(this),xd(this);const e=wt,t=ti;wt=this,ti=!0;try{return this.fn()}finally{yd(this),wt=e,ti=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bu(e);this.deps=this.depsTail=void 0,nf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cc(this)&&this.run()}get dirty(){return cc(this)}}let vd=0,ho,po;function _d(n,e=!1){if(n.flags|=8,e){n.next=po,po=n;return}n.next=ho,ho=n}function Mu(){vd++}function Su(){if(--vd>0)return;if(po){let e=po;for(po=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ho;){let e=ho;for(ho=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function xd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),bu(i),km(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function cc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Md(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Md(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Mo)||(n.globalVersion=Mo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!cc(n))))return;n.flags|=2;const e=n.dep,t=wt,i=ti;wt=n,ti=!0;try{xd(n);const s=n.fn(n._value);(e.version===0||xi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{wt=t,ti=i,yd(n),n.flags&=-3}}function bu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)bu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function km(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ti=!0;const Sd=[];function Wi(){Sd.push(ti),ti=!1}function Xi(){const n=Sd.pop();ti=n===void 0?!0:n}function nf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=wt;wt=void 0;try{e()}finally{wt=t}}}let Mo=0;class zm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!wt||!ti||wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==wt)t=this.activeLink=new zm(wt,this),wt.deps?(t.prevDep=wt.depsTail,wt.depsTail.nextDep=t,wt.depsTail=t):wt.deps=wt.depsTail=t,bd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=wt.depsTail,t.nextDep=void 0,wt.depsTail.nextDep=t,wt.depsTail=t,wt.deps===t&&(wt.deps=i)}return t}trigger(e){this.version++,Mo++,this.notify(e)}notify(e){Mu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Su()}}}function bd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)bd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const uc=new WeakMap,Gs=Symbol(""),fc=Symbol(""),So=Symbol("");function on(n,e,t){if(ti&&wt){let i=uc.get(n);i||uc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new wu),s.map=i,s.key=t),s.track()}}function Oi(n,e,t,i,s,r){const o=uc.get(n);if(!o){Mo++;return}const a=l=>{l&&l.trigger()};if(Mu(),e==="clear")o.forEach(a);else{const l=Ze(n),c=l&&xu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===So||!ii(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(So)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Gs)),Er(n)&&a(o.get(fc)));break;case"delete":l||(a(o.get(Gs)),Er(n)&&a(o.get(fc)));break;case"set":Er(n)&&a(o.get(Gs));break}}Su()}function ir(n){const e=ht(n);return e===n?e:(on(e,"iterate",So),Gn(n)?e:e.map(si))}function el(n){return on(n=ht(n),"iterate",So),n}function mi(n,e){return Yi(n)?Ur(Ws(n)?si(e):e):si(e)}const Hm={__proto__:null,[Symbol.iterator](){return ml(this,Symbol.iterator,n=>mi(this,n))},concat(...n){return ir(this).concat(...n.map(e=>Ze(e)?ir(e):e))},entries(){return ml(this,"entries",n=>(n[1]=mi(this,n[1]),n))},every(n,e){return Ei(this,"every",n,e,void 0,arguments)},filter(n,e){return Ei(this,"filter",n,e,t=>t.map(i=>mi(this,i)),arguments)},find(n,e){return Ei(this,"find",n,e,t=>mi(this,t),arguments)},findIndex(n,e){return Ei(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ei(this,"findLast",n,e,t=>mi(this,t),arguments)},findLastIndex(n,e){return Ei(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ei(this,"forEach",n,e,void 0,arguments)},includes(...n){return gl(this,"includes",n)},indexOf(...n){return gl(this,"indexOf",n)},join(n){return ir(this).join(n)},lastIndexOf(...n){return gl(this,"lastIndexOf",n)},map(n,e){return Ei(this,"map",n,e,void 0,arguments)},pop(){return Zr(this,"pop")},push(...n){return Zr(this,"push",n)},reduce(n,...e){return sf(this,"reduce",n,e)},reduceRight(n,...e){return sf(this,"reduceRight",n,e)},shift(){return Zr(this,"shift")},some(n,e){return Ei(this,"some",n,e,void 0,arguments)},splice(...n){return Zr(this,"splice",n)},toReversed(){return ir(this).toReversed()},toSorted(n){return ir(this).toSorted(n)},toSpliced(...n){return ir(this).toSpliced(...n)},unshift(...n){return Zr(this,"unshift",n)},values(){return ml(this,"values",n=>mi(this,n))}};function ml(n,e,t){const i=el(n),s=i[e]();return i!==n&&!Gn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Vm=Array.prototype;function Ei(n,e,t,i,s,r){const o=el(n),a=o!==n&&!Gn(n),l=o[e];if(l!==Vm[e]){const f=l.apply(n,r);return a?si(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,mi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function sf(n,e,t,i){const s=el(n),r=s!==n&&!Gn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=mi(n,c)),t.call(this,c,mi(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?mi(n,l):l}function gl(n,e,t){const i=ht(n);on(i,"iterate",So);const s=i[e](...t);return(s===-1||s===!1)&&Au(t[0])?(t[0]=ht(t[0]),i[e](...t)):s}function Zr(n,e,t=[]){Wi(),Mu();const i=ht(n)[e].apply(n,t);return Su(),Xi(),i}const Gm=vu("__proto__,__v_isRef,__isVue"),wd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ii));function Wm(n){ii(n)||(n=String(n));const e=ht(this);return on(e,"has",n),e.hasOwnProperty(n)}class Ed{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?eg:Rd:r?Cd:Ad).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=Hm[t]))return l;if(t==="hasOwnProperty")return Wm}const a=Reflect.get(e,t,hn(e)?e:i);if((ii(t)?wd.has(t):Gm(t))||(s||on(e,"get",t),r))return a;if(hn(a)){const l=o&&xu(t)?a:a.value;return s&&vt(l)?dc(l):l}return vt(a)?s?dc(a):Tr(a):a}}class Td extends Ed{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ze(e)&&xu(t);if(!this._isShallow){const c=Yi(r);if(!Gn(i)&&!Yi(i)&&(r=ht(r),i=ht(i)),!o&&hn(r)&&!hn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:mt(e,t),l=Reflect.set(e,t,i,hn(e)?e:s);return e===ht(s)&&(a?xi(i,r)&&Oi(e,"set",t,i):Oi(e,"add",t,i)),l}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Oi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ii(t)||!wd.has(t))&&on(e,"has",t),i}ownKeys(e){return on(e,"iterate",Ze(e)?"length":Gs),Reflect.ownKeys(e)}}class Xm extends Ed{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ym=new Td,$m=new Xm,qm=new Td(!0);const hc=n=>n,zo=n=>Reflect.getPrototypeOf(n);function Km(n,e,t){return function(...i){const s=this.__v_raw,r=ht(s),o=Er(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?hc:e?Ur:si;return!e&&on(r,"iterate",l?fc:Gs),Vt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Ho(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function jm(n,e){const t={get(s){const r=this.__v_raw,o=ht(r),a=ht(s);n||(xi(s,a)&&on(o,"get",s),on(o,"get",a));const{has:l}=zo(o),c=e?hc:n?Ur:si;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&on(ht(s),"iterate",Gs),s.size},has(s){const r=this.__v_raw,o=ht(r),a=ht(s);return n||(xi(s,a)&&on(o,"has",s),on(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ht(a),c=e?hc:n?Ur:si;return!n&&on(l,"iterate",Gs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Vt(t,n?{add:Ho("add"),set:Ho("set"),delete:Ho("delete"),clear:Ho("clear")}:{add(s){const r=ht(this),o=zo(r),a=ht(s),l=!e&&!Gn(s)&&!Yi(s)?a:s;return o.has.call(r,l)||xi(s,l)&&o.has.call(r,s)||xi(a,l)&&o.has.call(r,a)||(r.add(l),Oi(r,"add",l,l)),this},set(s,r){!e&&!Gn(r)&&!Yi(r)&&(r=ht(r));const o=ht(this),{has:a,get:l}=zo(o);let c=a.call(o,s);c||(s=ht(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?xi(r,u)&&Oi(o,"set",s,r):Oi(o,"add",s,r),this},delete(s){const r=ht(this),{has:o,get:a}=zo(r);let l=o.call(r,s);l||(s=ht(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Oi(r,"delete",s,void 0),c},clear(){const s=ht(this),r=s.size!==0,o=s.clear();return r&&Oi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Km(s,n,e)}),t}function Eu(n,e){const t=jm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const Zm={get:Eu(!1,!1)},Jm={get:Eu(!1,!0)},Qm={get:Eu(!0,!1)};const Ad=new WeakMap,Cd=new WeakMap,Rd=new WeakMap,eg=new WeakMap;function tg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ng(n){return n.__v_skip||!Object.isExtensible(n)?0:tg(Am(n))}function Tr(n){return Yi(n)?n:Tu(n,!1,Ym,Zm,Ad)}function tl(n){return Tu(n,!1,qm,Jm,Cd)}function dc(n){return Tu(n,!0,$m,Qm,Rd)}function Tu(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=ng(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Ws(n){return Yi(n)?Ws(n.__v_raw):!!(n&&n.__v_isReactive)}function Yi(n){return!!(n&&n.__v_isReadonly)}function Gn(n){return!!(n&&n.__v_isShallow)}function Au(n){return n?!!n.__v_raw:!1}function ht(n){const e=n&&n.__v_raw;return e?ht(e):n}function ig(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&fd(n,"__v_skip",!0),n}const si=n=>vt(n)?Tr(n):n,Ur=n=>vt(n)?dc(n):n;function hn(n){return n?n.__v_isRef===!0:!1}function be(n){return sg(n,!1)}function sg(n,e){return hn(n)?n:new rg(n,e)}class rg{constructor(e,t){this.dep=new wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:si(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Gn(e)||Yi(e);e=i?e:ht(e),xi(e,t)&&(this._rawValue=e,this._value=i?e:si(e),this.dep.trigger())}}function xt(n){return hn(n)?n.value:n}const og={get:(n,e,t)=>e==="__v_raw"?n:xt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return hn(s)&&!hn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Pd(n){return Ws(n)?n:new Proxy(n,og)}class ag{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return _d(this,!0),!0}get value(){const e=this.dep.track();return Md(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lg(n,e,t=!1){let i,s;return it(n)?i=n:(i=n.get,s=n.set),new ag(i,s,t)}const Vo={},La=new WeakMap;let Us;function cg(n,e=!1,t=Us){if(t){let i=La.get(t);i||La.set(t,i=[]),i.push(n)}}function ug(n,e,t=St){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=_=>s?_:Gn(_)||s===!1||s===0?Bi(_,1):Bi(_);let u,f,h,m,g=!1,v=!1;if(hn(n)?(f=()=>n.value,g=Gn(n)):Ws(n)?(f=()=>c(n),g=!0):Ze(n)?(v=!0,g=n.some(_=>Ws(_)||Gn(_)),f=()=>n.map(_=>{if(hn(_))return _.value;if(Ws(_))return c(_);if(it(_))return l?l(_,2):_()})):it(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Wi();try{h()}finally{Xi()}}const _=Us;Us=u;try{return l?l(n,3,[m]):n(m)}finally{Us=_}}:f=Mi,e&&s){const _=f,P=s===!0?1/0:s;f=()=>Bi(_(),P)}const p=Bm(),d=()=>{u.stop(),p&&p.active&&_u(p.effects,u)};if(r&&e){const _=e;e=(...P)=>{_(...P),d()}}let b=v?new Array(n.length).fill(Vo):Vo;const y=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(e){const P=u.run();if(s||g||(v?P.some((T,E)=>xi(T,b[E])):xi(P,b))){h&&h();const T=Us;Us=u;try{const E=[P,b===Vo?void 0:v&&b[0]===Vo?[]:b,m];b=P,l?l(e,3,E):e(...E)}finally{Us=T}}}else u.run()};return a&&a(y),u=new gd(f),u.scheduler=o?()=>o(y,!1):y,m=_=>cg(_,!1,u),h=u.onStop=()=>{const _=La.get(u);if(_){if(l)l(_,4);else for(const P of _)P();La.delete(u)}},e?i?y(!0):b=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Bi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,hn(n))Bi(n.value,e,t);else if(Ze(n))for(let i=0;i<n.length;i++)Bi(n[i],e,t);else if(Wr(n)||Er(n))n.forEach(i=>{Bi(i,e,t)});else if(cd(n)){for(const i in n)Bi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Bi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uo(n,e,t,i){try{return i?n(...i):n()}catch(s){nl(s,e,t)}}function ri(n,e,t,i){if(it(n)){const s=Uo(n,e,t,i);return s&&ad(s)&&s.catch(r=>{nl(r,e,t)}),s}if(Ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ri(n[r],e,t,i));return s}}function nl(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||St;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Wi(),Uo(r,null,10,[n,l,c]),Xi();return}}fg(n,t,s,i,o)}function fg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const _n=[];let di=-1;const Ar=[];let us=null,xr=0;const Dd=Promise.resolve();let Ia=null;function dn(n){const e=Ia||Dd;return n?e.then(this?n.bind(this):n):e}function hg(n){let e=di+1,t=_n.length;for(;e<t;){const i=e+t>>>1,s=_n[i],r=bo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Cu(n){if(!(n.flags&1)){const e=bo(n),t=_n[_n.length-1];!t||!(n.flags&2)&&e>=bo(t)?_n.push(n):_n.splice(hg(e),0,n),n.flags|=1,Ld()}}function Ld(){Ia||(Ia=Dd.then(Ud))}function dg(n){Ze(n)?Ar.push(...n):us&&n.id===-1?us.splice(xr+1,0,n):n.flags&1||(Ar.push(n),n.flags|=1),Ld()}function rf(n,e,t=di+1){for(;t<_n.length;t++){const i=_n[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;_n.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Id(n){if(Ar.length){const e=[...new Set(Ar)].sort((t,i)=>bo(t)-bo(i));if(Ar.length=0,us){us.push(...e);return}for(us=e,xr=0;xr<us.length;xr++){const t=us[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}us=null,xr=0}}const bo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ud(n){try{for(di=0;di<_n.length;di++){const e=_n[di];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Uo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;di<_n.length;di++){const e=_n[di];e&&(e.flags&=-2)}di=-1,_n.length=0,Id(),Ia=null,(_n.length||Ar.length)&&Ud()}}let fn=null,Fd=null;function Ua(n){const e=fn;return fn=n,Fd=n&&n.type.__scopeId||null,e}function Ns(n,e=fn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Oa(-1);const r=Ua(e);let o;try{o=n(...s)}finally{Ua(r),i._d&&Oa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zt(n,e){if(fn===null)return n;const t=al(fn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=St]=e[s];r&&(it(r)&&(r={mounted:r,updated:r}),r.deep&&Bi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ws(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Wi(),ri(l,t,8,[n.el,a,n,e]),Xi())}}function pc(n,e){if(xn){let t=xn.provides;const i=xn.parent&&xn.parent.provides;i===t&&(t=xn.provides=Object.create(i)),t[n]=e}}function Hi(n,e,t=!1){const i=hp();if(i||Rr){let s=Rr?Rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&it(e)?e.call(i&&i.proxy):e}}const pg=Symbol.for("v-scx"),mg=()=>Hi(pg);function je(n,e,t){return Nd(n,e,t)}function Nd(n,e,t=St){const{immediate:i,deep:s,flush:r,once:o}=t,a=Vt({},t),l=e&&i||!e&&r!=="post";let c;if(Ao){if(r==="sync"){const m=mg();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Mi,m.resume=Mi,m.pause=Mi,m}}const u=xn;a.call=(m,g,v)=>ri(m,u,g,v);let f=!1;r==="post"?a.scheduler=m=>{wn(m,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Cu(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=ug(n,e,a);return Ao&&(c?c.push(h):l&&h()),h}function gg(n,e,t){const i=this.proxy,s=Ut(n)?n.includes(".")?Od(i,n):()=>i[n]:n.bind(i,i);let r;it(e)?r=e:(r=e.handler,t=e);const o=Fo(this),a=Nd(s,r.bind(i),t);return o(),a}function Od(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const vg=Symbol("_vte"),Bd=n=>n.__isTeleport,pi=Symbol("_leaveCb"),Jr=Symbol("_enterCb");function _g(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rn(()=>{n.isMounted=!0}),Ru(()=>{n.isUnmounting=!0}),n}const kn=[Function,Array],kd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kn,onEnter:kn,onAfterEnter:kn,onEnterCancelled:kn,onBeforeLeave:kn,onLeave:kn,onAfterLeave:kn,onLeaveCancelled:kn,onBeforeAppear:kn,onAppear:kn,onAfterAppear:kn,onAppearCancelled:kn},zd=n=>{const e=n.subTree;return e.component?zd(e.component):e},xg={name:"BaseTransition",props:kd,setup(n,{slots:e}){const t=hp(),i=_g();return()=>{const s=e.default&&Gd(e.default(),!0);if(!s||!s.length)return;const r=Hd(s),o=ht(n),{mode:a}=o;if(i.isLeaving)return vl(r);const l=of(r);if(!l)return vl(r);let c=mc(l,o,i,t,f=>c=f);l.type!==cn&&wo(l,c);let u=t.subTree&&of(t.subTree);if(u&&u.type!==cn&&!Os(u,l)&&zd(t).type!==cn){let f=mc(u,o,i,t);if(wo(u,f),a==="out-in"&&l.type!==cn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},vl(r);a==="in-out"&&l.type!==cn?f.delayLeave=(h,m,g)=>{const v=Vd(i,u);v[String(u.key)]=u,h[pi]=()=>{m(),h[pi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Hd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==cn){e=t;break}}return e}const yg=xg;function Vd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function mc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:p,onAppear:d,onAfterAppear:b,onAppearCancelled:y}=e,_=String(n.key),P=Vd(t,n),T=(x,M)=>{x&&ri(x,i,9,M)},E=(x,M)=>{const D=M[1];T(x,M),Ze(x)?x.every(U=>U.length<=1)&&D():x.length<=1&&D()},L={mode:o,persisted:a,beforeEnter(x){let M=l;if(!t.isMounted)if(r)M=p||l;else return;x[pi]&&x[pi](!0);const D=P[_];D&&Os(n,D)&&D.el[pi]&&D.el[pi](),T(M,[x])},enter(x){if(P[_]===n)return;let M=c,D=u,U=f;if(!t.isMounted)if(r)M=d||c,D=b||u,U=y||f;else return;let O=!1;x[Jr]=j=>{O||(O=!0,j?T(U,[x]):T(D,[x]),L.delayedLeave&&L.delayedLeave(),x[Jr]=void 0)};const X=x[Jr].bind(null,!1);M?E(M,[x,X]):X()},leave(x,M){const D=String(n.key);if(x[Jr]&&x[Jr](!0),t.isUnmounting)return M();T(h,[x]);let U=!1;x[pi]=X=>{U||(U=!0,M(),X?T(v,[x]):T(g,[x]),x[pi]=void 0,P[D]===n&&delete P[D])};const O=x[pi].bind(null,!1);P[D]=n,m?E(m,[x,O]):O()},clone(x){const M=mc(x,e,t,i,s);return s&&s(M),M}};return L}function vl(n){if(il(n))return n=ys(n),n.children=null,n}function of(n){if(!il(n))return Bd(n.type)&&n.children?Hd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&it(t.default))return t.default()}}function wo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,wo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Gd(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===an?(o.patchFlag&128&&s++,i=i.concat(Gd(o.children,e,a))):(e||o.type!==cn)&&i.push(a!=null?ys(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function li(n,e){return it(n)?Vt({name:n.name},e,{setup:n}):n}function Wd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function af(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Fa=new WeakMap;function mo(n,e,t,i,s=!1){if(Ze(n)){n.forEach((v,p)=>mo(v,e&&(Ze(e)?e[p]:e),t,i,s));return}if(Cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&mo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?al(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===St?a.refs={}:a.refs,f=a.setupState,h=ht(f),m=f===St?od:v=>af(u,v)?!1:mt(h,v),g=(v,p)=>!(p&&af(u,p));if(c!=null&&c!==l){if(lf(e),Ut(c))u[c]=null,m(c)&&(f[c]=null);else if(hn(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(it(l))Uo(l,a,12,[o,u]);else{const v=Ut(l),p=hn(l);if(v||p){const d=()=>{if(n.f){const b=v?m(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ze(b)&&_u(b,r);else if(Ze(b))b.includes(r)||b.push(r);else if(v)u[l]=[r],m(l)&&(f[l]=u[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else v?(u[l]=o,m(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const b=()=>{d(),Fa.delete(n)};b.id=-1,Fa.set(n,b),wn(b,t)}else lf(n),d()}}}function lf(n){const e=Fa.get(n);e&&(e.flags|=8,Fa.delete(n))}Ja().requestIdleCallback;Ja().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,il=n=>n.type.__isKeepAlive;function Mg(n,e){Xd(n,"a",e)}function Sg(n,e){Xd(n,"da",e)}function Xd(n,e,t=xn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(sl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)il(s.parent.vnode)&&bg(i,e,t,s),s=s.parent}}function bg(n,e,t,i){const s=sl(e,n,i,!0);Wn(()=>{_u(i[e],s)},t)}function sl(n,e,t=xn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Wi();const a=Fo(t),l=ri(e,t,n,o);return a(),Xi(),l});return i?s.unshift(r):s.push(r),r}}const Zi=n=>(e,t=xn)=>{(!Ao||n==="sp")&&sl(n,(...i)=>e(...i),t)},wg=Zi("bm"),Rn=Zi("m"),Eg=Zi("bu"),Tg=Zi("u"),Ru=Zi("bum"),Wn=Zi("um"),Ag=Zi("sp"),Cg=Zi("rtg"),Rg=Zi("rtc");function Pg(n,e=xn){sl("ec",n,e)}const Dg=Symbol.for("v-ndc");function Lg(n,e,t,i){let s;const r=t,o=Ze(n);if(o||Ut(n)){const a=o&&Ws(n);let l=!1,c=!1;a&&(l=!Gn(n),c=Yi(n),n=el(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Ur(si(n[u])):si(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function gc(n,e,t={},i,s){if(fn.ce||fn.parent&&Cr(fn.parent)&&fn.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Je(),Dt(an,null,[Ct("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Je();const o=r&&Yd(r(t)),a=t.key||o&&o.key,l=Dt(an,{key:(a&&!ii(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function Yd(n){return n.some(e=>To(e)?!(e.type===cn||e.type===an&&!Yd(e.children)):!0)?n:null}const vc=n=>n?dp(n)?al(n):vc(n.parent):null,go=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vc(n.parent),$root:n=>vc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>qd(n),$forceUpdate:n=>n.f||(n.f=()=>{Cu(n.update)}),$nextTick:n=>n.n||(n.n=dn.bind(n.proxy)),$watch:n=>gg.bind(n)}),_l=(n,e)=>n!==St&&!n.__isScriptSetup&&mt(n,e),Ig={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(_l(i,e))return o[e]=1,i[e];if(s!==St&&mt(s,e))return o[e]=2,s[e];if(mt(r,e))return o[e]=3,r[e];if(t!==St&&mt(t,e))return o[e]=4,t[e];_c&&(o[e]=0)}}const c=go[e];let u,f;if(c)return e==="$attrs"&&on(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==St&&mt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return _l(s,e)?(s[e]=t,!0):i!==St&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==St&&a[0]!=="$"&&mt(n,a)||_l(e,a)||mt(r,a)||mt(i,a)||mt(go,a)||mt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cf(n){return Ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _c=!0;function Ug(n){const e=qd(n),t=n.proxy,i=n.ctx;_c=!1,e.beforeCreate&&uf(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:b,destroyed:y,unmounted:_,render:P,renderTracked:T,renderTriggered:E,errorCaptured:L,serverPrefetch:x,expose:M,inheritAttrs:D,components:U,directives:O,filters:X}=e;if(c&&Fg(c,i,null),o)for(const J in o){const k=o[J];it(k)&&(i[J]=k.bind(t))}if(s){const J=s.call(t,t);vt(J)&&(n.data=Tr(J))}if(_c=!0,r)for(const J in r){const k=r[J],ne=it(k)?k.bind(t,t):it(k.get)?k.get.bind(t,t):Mi,F=!it(k)&&it(k.set)?k.set.bind(t):Mi,H=nt({get:ne,set:F});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>H.value,set:Y=>H.value=Y})}if(a)for(const J in a)$d(a[J],i,t,J);if(l){const J=it(l)?l.call(t):l;Reflect.ownKeys(J).forEach(k=>{pc(k,J[k])})}u&&uf(u,n,"c");function $(J,k){Ze(k)?k.forEach(ne=>J(ne.bind(t))):k&&J(k.bind(t))}if($(wg,f),$(Rn,h),$(Eg,m),$(Tg,g),$(Mg,v),$(Sg,p),$(Pg,L),$(Rg,T),$(Cg,E),$(Ru,b),$(Wn,_),$(Ag,x),Ze(M))if(M.length){const J=n.exposed||(n.exposed={});M.forEach(k=>{Object.defineProperty(J,k,{get:()=>t[k],set:ne=>t[k]=ne,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===Mi&&(n.render=P),D!=null&&(n.inheritAttrs=D),U&&(n.components=U),O&&(n.directives=O),x&&Wd(n)}function Fg(n,e,t=Mi){Ze(n)&&(n=xc(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=Hi(s.from||i,s.default,!0):r=Hi(s.from||i):r=Hi(s),hn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function uf(n,e,t){ri(Ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function $d(n,e,t,i){let s=i.includes(".")?Od(t,i):()=>t[i];if(Ut(n)){const r=e[n];it(r)&&je(s,r)}else if(it(n))je(s,n.bind(t));else if(vt(n))if(Ze(n))n.forEach(r=>$d(r,e,t,i));else{const r=it(n.handler)?n.handler.bind(t):e[n.handler];it(r)&&je(s,r,n)}}function qd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Na(l,c,o,!0)),Na(l,e,o)),vt(e)&&r.set(e,l),l}function Na(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Na(n,r,t,!0),s&&s.forEach(o=>Na(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ng[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Ng={data:ff,props:hf,emits:hf,methods:ao,computed:ao,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:ao,directives:ao,watch:Bg,provide:ff,inject:Og};function ff(n,e){return e?n?function(){return Vt(it(n)?n.call(this,this):n,it(e)?e.call(this,this):e)}:e:n}function Og(n,e){return ao(xc(n),xc(e))}function xc(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pn(n,e){return n?[...new Set([].concat(n,e))]:e}function ao(n,e){return n?Vt(Object.create(null),n,e):e}function hf(n,e){return n?Ze(n)&&Ze(e)?[...new Set([...n,...e])]:Vt(Object.create(null),cf(n),cf(e??{})):e}function Bg(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=pn(n[i],e[i]);return t}function Kd(){return{app:null,config:{isNativeTag:od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kg=0;function zg(n,e){return function(i,s=null){it(i)||(i=Vt({},i)),s!=null&&!vt(s)&&(s=null);const r=Kd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:kg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:_v,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&it(u.install)?(o.add(u),u.install(c,...f)):it(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||Ct(i,s);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,al(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ri(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Rr;Rr=c;try{return u()}finally{Rr=f}}};return c}}let Rr=null;const Hg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ei(e)}Modifiers`]||n[`${Ss(e)}Modifiers`];function Vg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let s=t;const r=e.startsWith("update:"),o=r&&Hg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ut(u)?u.trim():u)),o.number&&(s=t.map(Za)));let a,l=i[a=hl(e)]||i[a=hl(ei(e))];!l&&r&&(l=i[a=hl(Ss(e))]),l&&ri(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ri(c,n,6,s)}}const Gg=new WeakMap;function jd(n,e,t=!1){const i=t?Gg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!it(n)){const l=c=>{const u=jd(c,e,!0);u&&(a=!0,Vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Ze(r)?r.forEach(l=>o[l]=null):Vt(o,r),vt(n)&&i.set(n,o),o)}function rl(n,e){return!n||!qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,Ss(e))||mt(n,e))}function df(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:g,inheritAttrs:v}=n,p=Ua(n);let d,b;try{if(t.shapeFlag&4){const _=s||i,P=_;d=gi(c.call(P,_,u,f,m,h,g)),b=a}else{const _=e;d=gi(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),b=e.props?a:Wg(a)}}catch(_){vo.length=0,nl(_,n,1),d=Ct(cn)}let y=d;if(b&&v!==!1){const _=Object.keys(b),{shapeFlag:P}=y;_.length&&P&7&&(r&&_.some(Ka)&&(b=Xg(b,r)),y=ys(y,b,!1,!0))}return t.dirs&&(y=ys(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&wo(y,t.transition),d=y,Ua(p),d}const Wg=n=>{let e;for(const t in n)(t==="class"||t==="style"||qa(t))&&((e||(e={}))[t]=n[t]);return e},Xg=(n,e)=>{const t={};for(const i in n)(!Ka(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Yg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Zd(o,i,h)&&!rl(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?pf(i,o,c):!0:!!o;return!1}function pf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Zd(e,n,r)&&!rl(t,r))return!0}return!1}function Zd(n,e,t){const i=n[t],s=e[t];return t==="style"&&vt(i)&&vt(s)?!Xr(i,s):i!==s}function $g({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Jd={},Qd=()=>Object.create(Jd),ep=n=>Object.getPrototypeOf(n)===Jd;function qg(n,e,t,i=!1){const s={},r=Qd();n.propsDefaults=Object.create(null),tp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:tl(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Kg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ht(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(rl(n.emitsOptions,h))continue;const m=e[h];if(l)if(mt(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const g=ei(h);s[g]=yc(l,a,g,m,n,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{tp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!mt(e,f)&&((u=Ss(f))===f||!mt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=yc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!mt(e,f))&&(delete r[f],c=!0)}c&&Oi(n.attrs,"set","")}function tp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(fo(l))continue;const c=e[l];let u;s&&mt(s,u=ei(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:rl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ht(t),c=a||St;for(let u=0;u<r.length;u++){const f=r[u];t[f]=yc(s,l,f,c[f],n,!mt(c,f))}}return o}function yc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&it(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Fo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ss(t))&&(i=!0))}return i}const jg=new WeakMap;function np(n,e,t=!1){const i=t?jg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!it(n)){const u=f=>{l=!0;const[h,m]=np(f,e,!0);Vt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,wr),wr;if(Ze(r))for(let u=0;u<r.length;u++){const f=ei(r[u]);mf(f)&&(o[f]=St)}else if(r)for(const u in r){const f=ei(u);if(mf(f)){const h=r[u],m=o[f]=Ze(h)||it(h)?{type:h}:Vt({},h),g=m.type;let v=!1,p=!0;if(Ze(g))for(let d=0;d<g.length;++d){const b=g[d],y=it(b)&&b.name;if(y==="Boolean"){v=!0;break}else y==="String"&&(p=!1)}else v=it(g)&&g.name==="Boolean";m[0]=v,m[1]=p,(v||mt(m,"default"))&&a.push(f)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function mf(n){return n[0]!=="$"&&!fo(n)}const Pu=n=>n==="_"||n==="_ctx"||n==="$stable",Du=n=>Ze(n)?n.map(gi):[gi(n)],Zg=(n,e,t)=>{if(e._n)return e;const i=Ns((...s)=>Du(e(...s)),t);return i._c=!1,i},ip=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Pu(s))continue;const r=n[s];if(it(r))e[s]=Zg(s,r,i);else if(r!=null){const o=Du(r);e[s]=()=>o}}},sp=(n,e)=>{const t=Du(e);n.slots.default=()=>t},rp=(n,e,t)=>{for(const i in e)(t||!Pu(i))&&(n[i]=e[i])},Jg=(n,e,t)=>{const i=n.slots=Qd();if(n.vnode.shapeFlag&32){const s=e._;s?(rp(i,e,t),t&&fd(i,"_",s,!0)):ip(e,i)}else e&&sp(n,e)},Qg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=St;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:rp(s,e,t):(r=!e.$stable,ip(e,s)),o=e}else e&&(sp(n,e),o={default:1});if(r)for(const a in s)!Pu(a)&&o[a]==null&&delete s[a]},wn=sv;function ev(n){return tv(n)}function tv(n,e){const t=Ja();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Mi,insertStaticContent:g}=n,v=(C,N,A,pe=null,se=null,re=null,he=void 0,_e=null,fe=!!N.dynamicChildren)=>{if(C===N)return;C&&!Os(C,N)&&(pe=ve(C),Y(C,se,re,!0),C=null),N.patchFlag===-2&&(fe=!1,N.dynamicChildren=null);const{type:w,ref:S,shapeFlag:I}=N;switch(w){case ol:p(C,N,A,pe);break;case cn:d(C,N,A,pe);break;case yl:C==null&&b(N,A,pe,he);break;case an:U(C,N,A,pe,se,re,he,_e,fe);break;default:I&1?P(C,N,A,pe,se,re,he,_e,fe):I&6?O(C,N,A,pe,se,re,he,_e,fe):(I&64||I&128)&&w.process(C,N,A,pe,se,re,he,_e,fe,Ve)}S!=null&&se?mo(S,C&&C.ref,re,N||C,!N):S==null&&C&&C.ref!=null&&mo(C.ref,null,re,C,!0)},p=(C,N,A,pe)=>{if(C==null)i(N.el=a(N.children),A,pe);else{const se=N.el=C.el;N.children!==C.children&&c(se,N.children)}},d=(C,N,A,pe)=>{C==null?i(N.el=l(N.children||""),A,pe):N.el=C.el},b=(C,N,A,pe)=>{[C.el,C.anchor]=g(C.children,N,A,pe,C.el,C.anchor)},y=({el:C,anchor:N},A,pe)=>{let se;for(;C&&C!==N;)se=h(C),i(C,A,pe),C=se;i(N,A,pe)},_=({el:C,anchor:N})=>{let A;for(;C&&C!==N;)A=h(C),s(C),C=A;s(N)},P=(C,N,A,pe,se,re,he,_e,fe)=>{if(N.type==="svg"?he="svg":N.type==="math"&&(he="mathml"),C==null)T(N,A,pe,se,re,he,_e,fe);else{const w=C.el&&C.el._isVueCE?C.el:null;try{w&&w._beginPatch(),x(C,N,se,re,he,_e,fe)}finally{w&&w._endPatch()}}},T=(C,N,A,pe,se,re,he,_e)=>{let fe,w;const{props:S,shapeFlag:I,transition:G,dirs:Q}=C;if(fe=C.el=o(C.type,re,S&&S.is,S),I&8?u(fe,C.children):I&16&&L(C.children,fe,null,pe,se,xl(C,re),he,_e),Q&&ws(C,null,pe,"created"),E(fe,C,C.scopeId,he,pe),S){for(const Ee in S)Ee!=="value"&&!fo(Ee)&&r(fe,Ee,null,S[Ee],re,pe);"value"in S&&r(fe,"value",null,S.value,re),(w=S.onVnodeBeforeMount)&&fi(w,pe,C)}Q&&ws(C,null,pe,"beforeMount");const ie=nv(se,G);ie&&G.beforeEnter(fe),i(fe,N,A),((w=S&&S.onVnodeMounted)||ie||Q)&&wn(()=>{try{w&&fi(w,pe,C),ie&&G.enter(fe),Q&&ws(C,null,pe,"mounted")}finally{}},se)},E=(C,N,A,pe,se)=>{if(A&&m(C,A),pe)for(let re=0;re<pe.length;re++)m(C,pe[re]);if(se){let re=se.subTree;if(N===re||cp(re.type)&&(re.ssContent===N||re.ssFallback===N)){const he=se.vnode;E(C,he,he.scopeId,he.slotScopeIds,se.parent)}}},L=(C,N,A,pe,se,re,he,_e,fe=0)=>{for(let w=fe;w<C.length;w++){const S=C[w]=_e?Ni(C[w]):gi(C[w]);v(null,S,N,A,pe,se,re,he,_e)}},x=(C,N,A,pe,se,re,he)=>{const _e=N.el=C.el;let{patchFlag:fe,dynamicChildren:w,dirs:S}=N;fe|=C.patchFlag&16;const I=C.props||St,G=N.props||St;let Q;if(A&&Es(A,!1),(Q=G.onVnodeBeforeUpdate)&&fi(Q,A,N,C),S&&ws(N,C,A,"beforeUpdate"),A&&Es(A,!0),(I.innerHTML&&G.innerHTML==null||I.textContent&&G.textContent==null)&&u(_e,""),w?M(C.dynamicChildren,w,_e,A,pe,xl(N,se),re):he||k(C,N,_e,null,A,pe,xl(N,se),re,!1),fe>0){if(fe&16)D(_e,I,G,A,se);else if(fe&2&&I.class!==G.class&&r(_e,"class",null,G.class,se),fe&4&&r(_e,"style",I.style,G.style,se),fe&8){const ie=N.dynamicProps;for(let Ee=0;Ee<ie.length;Ee++){const Me=ie[Ee],Ae=I[Me],Ge=G[Me];(Ge!==Ae||Me==="value")&&r(_e,Me,Ae,Ge,se,A)}}fe&1&&C.children!==N.children&&u(_e,N.children)}else!he&&w==null&&D(_e,I,G,A,se);((Q=G.onVnodeUpdated)||S)&&wn(()=>{Q&&fi(Q,A,N,C),S&&ws(N,C,A,"updated")},pe)},M=(C,N,A,pe,se,re,he)=>{for(let _e=0;_e<N.length;_e++){const fe=C[_e],w=N[_e],S=fe.el&&(fe.type===an||!Os(fe,w)||fe.shapeFlag&198)?f(fe.el):A;v(fe,w,S,null,pe,se,re,he,!0)}},D=(C,N,A,pe,se)=>{if(N!==A){if(N!==St)for(const re in N)!fo(re)&&!(re in A)&&r(C,re,N[re],null,se,pe);for(const re in A){if(fo(re))continue;const he=A[re],_e=N[re];he!==_e&&re!=="value"&&r(C,re,_e,he,se,pe)}"value"in A&&r(C,"value",N.value,A.value,se)}},U=(C,N,A,pe,se,re,he,_e,fe)=>{const w=N.el=C?C.el:a(""),S=N.anchor=C?C.anchor:a("");let{patchFlag:I,dynamicChildren:G,slotScopeIds:Q}=N;Q&&(_e=_e?_e.concat(Q):Q),C==null?(i(w,A,pe),i(S,A,pe),L(N.children||[],A,S,se,re,he,_e,fe)):I>0&&I&64&&G&&C.dynamicChildren&&C.dynamicChildren.length===G.length?(M(C.dynamicChildren,G,A,se,re,he,_e),(N.key!=null||se&&N===se.subTree)&&op(C,N,!0)):k(C,N,A,S,se,re,he,_e,fe)},O=(C,N,A,pe,se,re,he,_e,fe)=>{N.slotScopeIds=_e,C==null?N.shapeFlag&512?se.ctx.activate(N,A,pe,he,fe):X(N,A,pe,se,re,he,fe):j(C,N,fe)},X=(C,N,A,pe,se,re,he)=>{const _e=C.component=fv(C,pe,se);if(il(C)&&(_e.ctx.renderer=Ve),hv(_e,!1,he),_e.asyncDep){if(se&&se.registerDep(_e,$,he),!C.el){const fe=_e.subTree=Ct(cn);d(null,fe,N,A),C.placeholder=fe.el}}else $(_e,C,N,A,se,re,he)},j=(C,N,A)=>{const pe=N.component=C.component;if(Yg(C,N,A))if(pe.asyncDep&&!pe.asyncResolved){J(pe,N,A);return}else pe.next=N,pe.update();else N.el=C.el,pe.vnode=N},$=(C,N,A,pe,se,re,he)=>{const _e=()=>{if(C.isMounted){let{next:I,bu:G,u:Q,parent:ie,vnode:Ee}=C;{const Le=ap(C);if(Le){I&&(I.el=Ee.el,J(C,I,he)),Le.asyncDep.then(()=>{wn(()=>{C.isUnmounted||w()},se)});return}}let Me=I,Ae;Es(C,!1),I?(I.el=Ee.el,J(C,I,he)):I=Ee,G&&Ma(G),(Ae=I.props&&I.props.onVnodeBeforeUpdate)&&fi(Ae,ie,I,Ee),Es(C,!0);const Ge=df(C),Se=C.subTree;C.subTree=Ge,v(Se,Ge,f(Se.el),ve(Se),C,se,re),I.el=Ge.el,Me===null&&$g(C,Ge.el),Q&&wn(Q,se),(Ae=I.props&&I.props.onVnodeUpdated)&&wn(()=>fi(Ae,ie,I,Ee),se)}else{let I;const{el:G,props:Q}=N,{bm:ie,m:Ee,parent:Me,root:Ae,type:Ge}=C,Se=Cr(N);Es(C,!1),ie&&Ma(ie),!Se&&(I=Q&&Q.onVnodeBeforeMount)&&fi(I,Me,N),Es(C,!0);{Ae.ce&&Ae.ce._hasShadowRoot()&&Ae.ce._injectChildStyle(Ge,C.parent?C.parent.type:void 0);const Le=C.subTree=df(C);v(null,Le,A,pe,C,se,re),N.el=Le.el}if(Ee&&wn(Ee,se),!Se&&(I=Q&&Q.onVnodeMounted)){const Le=N;wn(()=>fi(I,Me,Le),se)}(N.shapeFlag&256||Me&&Cr(Me.vnode)&&Me.vnode.shapeFlag&256)&&C.a&&wn(C.a,se),C.isMounted=!0,N=A=pe=null}};C.scope.on();const fe=C.effect=new gd(_e);C.scope.off();const w=C.update=fe.run.bind(fe),S=C.job=fe.runIfDirty.bind(fe);S.i=C,S.id=C.uid,fe.scheduler=()=>Cu(S),Es(C,!0),w()},J=(C,N,A)=>{N.component=C;const pe=C.vnode.props;C.vnode=N,C.next=null,Kg(C,N.props,pe,A),Qg(C,N.children,A),Wi(),rf(C),Xi()},k=(C,N,A,pe,se,re,he,_e,fe=!1)=>{const w=C&&C.children,S=C?C.shapeFlag:0,I=N.children,{patchFlag:G,shapeFlag:Q}=N;if(G>0){if(G&128){F(w,I,A,pe,se,re,he,_e,fe);return}else if(G&256){ne(w,I,A,pe,se,re,he,_e,fe);return}}Q&8?(S&16&&ye(w,se,re),I!==w&&u(A,I)):S&16?Q&16?F(w,I,A,pe,se,re,he,_e,fe):ye(w,se,re,!0):(S&8&&u(A,""),Q&16&&L(I,A,pe,se,re,he,_e,fe))},ne=(C,N,A,pe,se,re,he,_e,fe)=>{C=C||wr,N=N||wr;const w=C.length,S=N.length,I=Math.min(w,S);let G;for(G=0;G<I;G++){const Q=N[G]=fe?Ni(N[G]):gi(N[G]);v(C[G],Q,A,null,se,re,he,_e,fe)}w>S?ye(C,se,re,!0,!1,I):L(N,A,pe,se,re,he,_e,fe,I)},F=(C,N,A,pe,se,re,he,_e,fe)=>{let w=0;const S=N.length;let I=C.length-1,G=S-1;for(;w<=I&&w<=G;){const Q=C[w],ie=N[w]=fe?Ni(N[w]):gi(N[w]);if(Os(Q,ie))v(Q,ie,A,null,se,re,he,_e,fe);else break;w++}for(;w<=I&&w<=G;){const Q=C[I],ie=N[G]=fe?Ni(N[G]):gi(N[G]);if(Os(Q,ie))v(Q,ie,A,null,se,re,he,_e,fe);else break;I--,G--}if(w>I){if(w<=G){const Q=G+1,ie=Q<S?N[Q].el:pe;for(;w<=G;)v(null,N[w]=fe?Ni(N[w]):gi(N[w]),A,ie,se,re,he,_e,fe),w++}}else if(w>G)for(;w<=I;)Y(C[w],se,re,!0),w++;else{const Q=w,ie=w,Ee=new Map;for(w=ie;w<=G;w++){const K=N[w]=fe?Ni(N[w]):gi(N[w]);K.key!=null&&Ee.set(K.key,w)}let Me,Ae=0;const Ge=G-ie+1;let Se=!1,Le=0;const z=new Array(Ge);for(w=0;w<Ge;w++)z[w]=0;for(w=Q;w<=I;w++){const K=C[w];if(Ae>=Ge){Y(K,se,re,!0);continue}let Te;if(K.key!=null)Te=Ee.get(K.key);else for(Me=ie;Me<=G;Me++)if(z[Me-ie]===0&&Os(K,N[Me])){Te=Me;break}Te===void 0?Y(K,se,re,!0):(z[Te-ie]=w+1,Te>=Le?Le=Te:Se=!0,v(K,N[Te],A,null,se,re,he,_e,fe),Ae++)}const W=Se?iv(z):wr;for(Me=W.length-1,w=Ge-1;w>=0;w--){const K=ie+w,Te=N[K],Ie=N[K+1],We=K+1<S?Ie.el||lp(Ie):pe;z[w]===0?v(null,Te,A,We,se,re,he,_e,fe):Se&&(Me<0||w!==W[Me]?H(Te,A,We,2):Me--)}}},H=(C,N,A,pe,se=null)=>{const{el:re,type:he,transition:_e,children:fe,shapeFlag:w}=C;if(w&6){H(C.component.subTree,N,A,pe);return}if(w&128){C.suspense.move(N,A,pe);return}if(w&64){he.move(C,N,A,Ve);return}if(he===an){i(re,N,A);for(let I=0;I<fe.length;I++)H(fe[I],N,A,pe);i(C.anchor,N,A);return}if(he===yl){y(C,N,A);return}if(pe!==2&&w&1&&_e)if(pe===0)_e.beforeEnter(re),i(re,N,A),wn(()=>_e.enter(re),se);else{const{leave:I,delayLeave:G,afterLeave:Q}=_e,ie=()=>{C.ctx.isUnmounted?s(re):i(re,N,A)},Ee=()=>{re._isLeaving&&re[pi](!0),I(re,()=>{ie(),Q&&Q()})};G?G(re,ie,Ee):Ee()}else i(re,N,A)},Y=(C,N,A,pe=!1,se=!1)=>{const{type:re,props:he,ref:_e,children:fe,dynamicChildren:w,shapeFlag:S,patchFlag:I,dirs:G,cacheIndex:Q,memo:ie}=C;if(I===-2&&(se=!1),_e!=null&&(Wi(),mo(_e,null,A,C,!0),Xi()),Q!=null&&(N.renderCache[Q]=void 0),S&256){N.ctx.deactivate(C);return}const Ee=S&1&&G,Me=!Cr(C);let Ae;if(Me&&(Ae=he&&he.onVnodeBeforeUnmount)&&fi(Ae,N,C),S&6)de(C.component,A,pe);else{if(S&128){C.suspense.unmount(A,pe);return}Ee&&ws(C,null,N,"beforeUnmount"),S&64?C.type.remove(C,N,A,Ve,pe):w&&!w.hasOnce&&(re!==an||I>0&&I&64)?ye(w,N,A,!1,!0):(re===an&&I&384||!se&&S&16)&&ye(fe,N,A),pe&&ae(C)}const Ge=ie!=null&&Q==null;(Me&&(Ae=he&&he.onVnodeUnmounted)||Ee||Ge)&&wn(()=>{Ae&&fi(Ae,N,C),Ee&&ws(C,null,N,"unmounted"),Ge&&(C.el=null)},A)},ae=C=>{const{type:N,el:A,anchor:pe,transition:se}=C;if(N===an){ee(A,pe);return}if(N===yl){_(C);return}const re=()=>{s(A),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(C.shapeFlag&1&&se&&!se.persisted){const{leave:he,delayLeave:_e}=se,fe=()=>he(A,re);_e?_e(C.el,re,fe):fe()}else re()},ee=(C,N)=>{let A;for(;C!==N;)A=h(C),s(C),C=A;s(N)},de=(C,N,A)=>{const{bum:pe,scope:se,job:re,subTree:he,um:_e,m:fe,a:w}=C;gf(fe),gf(w),pe&&Ma(pe),se.stop(),re&&(re.flags|=8,Y(he,C,N,A)),_e&&wn(_e,N),wn(()=>{C.isUnmounted=!0},N)},ye=(C,N,A,pe=!1,se=!1,re=0)=>{for(let he=re;he<C.length;he++)Y(C[he],N,A,pe,se)},ve=C=>{if(C.shapeFlag&6)return ve(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const N=h(C.anchor||C.el),A=N&&N[vg];return A?h(A):N};let Be=!1;const ke=(C,N,A)=>{let pe;C==null?N._vnode&&(Y(N._vnode,null,null,!0),pe=N._vnode.component):v(N._vnode||null,C,N,null,null,null,A),N._vnode=C,Be||(Be=!0,rf(pe),Id(),Be=!1)},Ve={p:v,um:Y,m:H,r:ae,mt:X,mc:L,pc:k,pbc:M,n:ve,o:n};return{render:ke,hydrate:void 0,createApp:zg(ke)}}function xl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Es({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function nv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function op(n,e,t=!1){const i=n.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ni(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&op(o,a)),a.type===ol&&(a.patchFlag===-1&&(a=s[r]=Ni(a)),a.el=o.el),a.type===cn&&!a.el&&(a.el=o.el)}}function iv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function ap(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ap(e)}function gf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function lp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?lp(e.subTree):null}const cp=n=>n.__isSuspense;function sv(n,e){e&&e.pendingBranch?Ze(n)?e.effects.push(...n):e.effects.push(n):dg(n)}const an=Symbol.for("v-fgt"),ol=Symbol.for("v-txt"),cn=Symbol.for("v-cmt"),yl=Symbol.for("v-stc"),vo=[];let Fn=null;function Je(n=!1){vo.push(Fn=n?null:[])}function rv(){vo.pop(),Fn=vo[vo.length-1]||null}let Eo=1;function Oa(n,e=!1){Eo+=n,n<0&&Fn&&e&&(Fn.hasOnce=!0)}function up(n){return n.dynamicChildren=Eo>0?Fn||wr:null,rv(),Eo>0&&Fn&&Fn.push(n),n}function gt(n,e,t,i,s,r){return up(Pe(n,e,t,i,s,r,!0))}function Dt(n,e,t,i,s){return up(Ct(n,e,t,i,s,!0))}function To(n){return n?n.__v_isVNode===!0:!1}function Os(n,e){return n.type===e.type&&n.key===e.key}const fp=({key:n})=>n??null,Sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ut(n)||hn(n)||it(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function Pe(n,e=null,t=null,i=0,s=null,r=n===an?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&fp(e),ref:e&&Sa(e),scopeId:Fd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return a?(Lu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ut(t)?8:16),Eo>0&&!o&&Fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fn.push(l),l}const Ct=ov;function ov(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Dg)&&(n=cn),To(n)){const a=ys(n,e,!0);return t&&Lu(a,t),Eo>0&&!r&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(n)]=a:Fn.push(a)),a.patchFlag=-2,a}if(gv(n)&&(n=n.__vccOpts),e){e=av(e);let{class:a,style:l}=e;a&&!Ut(a)&&(e.class=Ot(a)),vt(l)&&(Au(l)&&!Ze(l)&&(l=Vt({},l)),e.style=Vn(l))}const o=Ut(n)?1:cp(n)?128:Bd(n)?64:vt(n)?4:it(n)?2:0;return Pe(n,e,t,i,s,o,r,!0)}function av(n){return n?Au(n)||ep(n)?Vt({},n):n:null}function ys(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?lv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&fp(c),ref:e&&e.ref?t&&r?Ze(r)?r.concat(Sa(e)):[r,Sa(e)]:Sa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==an?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ys(n.ssContent),ssFallback:n.ssFallback&&ys(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&wo(u,l.clone(u)),u}function Tn(n=" ",e=0){return Ct(ol,null,n,e)}function qt(n="",e=!1){return e?(Je(),Dt(cn,null,n)):Ct(cn,null,n)}function gi(n){return n==null||typeof n=="boolean"?Ct(cn):Ze(n)?Ct(an,null,n.slice()):To(n)?Ni(n):Ct(ol,null,String(n))}function Ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ys(n)}function Lu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Lu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ep(e)?e._ctx=fn:s===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else it(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[Tn(e)]):t=8);n.children=e,n.shapeFlag|=t}function lv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ot([e.class,i.class]));else if(s==="style")e.style=Vn([e.style,i.style]);else if(qa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ka(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function fi(n,e,t,i=null){ri(n,e,7,[t,i])}const cv=Kd();let uv=0;function fv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||cv,r={uid:uv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(i,s),emitsOptions:jd(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Vg.bind(null,r),n.ce&&n.ce(r),r}let xn=null;const hp=()=>xn||fn;let Ba,Mc;{const n=Ja(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ba=e("__VUE_INSTANCE_SETTERS__",t=>xn=t),Mc=e("__VUE_SSR_SETTERS__",t=>Ao=t)}const Fo=n=>{const e=xn;return Ba(n),n.scope.on(),()=>{n.scope.off(),Ba(e)}},vf=()=>{xn&&xn.scope.off(),Ba(null)};function dp(n){return n.vnode.shapeFlag&4}let Ao=!1;function hv(n,e=!1,t=!1){e&&Mc(e);const{props:i,children:s}=n.vnode,r=dp(n);qg(n,i,r,e),Jg(n,s,t||e);const o=r?dv(n,e):void 0;return e&&Mc(!1),o}function dv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ig);const{setup:i}=t;if(i){Wi();const s=n.setupContext=i.length>1?mv(n):null,r=Fo(n),o=Uo(i,n,0,[n.props,s]),a=ad(o);if(Xi(),r(),(a||n.sp)&&!Cr(n)&&Wd(n),a){if(o.then(vf,vf),e)return o.then(l=>{_f(n,l)}).catch(l=>{nl(l,n,0)});n.asyncDep=o}else _f(n,o)}else pp(n)}function _f(n,e,t){it(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Pd(e)),pp(n)}function pp(n,e,t){const i=n.type;n.render||(n.render=i.render||Mi);{const s=Fo(n);Wi();try{Ug(n)}finally{Xi(),s()}}}const pv={get(n,e){return on(n,"get",""),n[e]}};function mv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,pv),slots:n.slots,emit:n.emit,expose:e}}function al(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Pd(ig(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in go)return go[t](n)},has(e,t){return t in e||t in go}})):n.proxy}function gv(n){return it(n)&&"__vccOpts"in n}const nt=(n,e)=>lg(n,e,Ao);function vv(n,e,t){try{Oa(-1);const i=arguments.length;return i===2?vt(e)&&!Ze(e)?To(e)?Ct(n,null,[e]):Ct(n,e):Ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&To(t)&&(t=[t]),Ct(n,e,t))}finally{Oa(1)}}const _v="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sc;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{Sc=xf.createPolicy("vue",{createHTML:n=>n})}catch{}const mp=Sc?n=>Sc.createHTML(n):n=>n,xv="http://www.w3.org/2000/svg",yv="http://www.w3.org/1998/Math/MathML",Fi=typeof document<"u"?document:null,yf=Fi&&Fi.createElement("template"),Mv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Fi.createElementNS(xv,n):e==="mathml"?Fi.createElementNS(yv,n):t?Fi.createElement(n,{is:t}):Fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Fi.createTextNode(n),createComment:n=>Fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{yf.innerHTML=mp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=yf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ts="transition",Qr="animation",Co=Symbol("_vtc"),gp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Sv=Vt({},kd,gp),bv=n=>(n.displayName="Transition",n.props=Sv,n),wv=bv((n,{slots:e})=>vv(yg,Ev(n),e)),Ts=(n,e=[])=>{Ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},Mf=n=>n?Ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Ev(n){const e={};for(const U in n)U in gp||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=Tv(s),v=g&&g[0],p=g&&g[1],{onBeforeEnter:d,onEnter:b,onEnterCancelled:y,onLeave:_,onLeaveCancelled:P,onBeforeAppear:T=d,onAppear:E=b,onAppearCancelled:L=y}=e,x=(U,O,X,j)=>{U._enterCancelled=j,As(U,O?u:a),As(U,O?c:o),X&&X()},M=(U,O)=>{U._isLeaving=!1,As(U,f),As(U,m),As(U,h),O&&O()},D=U=>(O,X)=>{const j=U?E:b,$=()=>x(O,U,X);Ts(j,[O,$]),Sf(()=>{As(O,U?l:r),Ti(O,U?u:a),Mf(j)||bf(O,i,v,$)})};return Vt(e,{onBeforeEnter(U){Ts(d,[U]),Ti(U,r),Ti(U,o)},onBeforeAppear(U){Ts(T,[U]),Ti(U,l),Ti(U,c)},onEnter:D(!1),onAppear:D(!0),onLeave(U,O){U._isLeaving=!0;const X=()=>M(U,O);Ti(U,f),U._enterCancelled?(Ti(U,h),Tf(U)):(Tf(U),Ti(U,h)),Sf(()=>{U._isLeaving&&(As(U,f),Ti(U,m),Mf(_)||bf(U,i,p,X))}),Ts(_,[U,X])},onEnterCancelled(U){x(U,!1,void 0,!0),Ts(y,[U])},onAppearCancelled(U){x(U,!0,void 0,!0),Ts(L,[U])},onLeaveCancelled(U){M(U),Ts(P,[U])}})}function Tv(n){if(n==null)return null;if(vt(n))return[Ml(n.enter),Ml(n.leave)];{const e=Ml(n);return[e,e]}}function Ml(n){return Pm(n)}function Ti(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Co]||(n[Co]=new Set)).add(e)}function As(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Co];t&&(t.delete(e),t.size||(n[Co]=void 0))}function Sf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Av=0;function bf(n,e,t,i){const s=n._endId=++Av,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Cv(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Cv(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${ts}Delay`),r=i(`${ts}Duration`),o=wf(s,r),a=i(`${Qr}Delay`),l=i(`${Qr}Duration`),c=wf(a,l);let u=null,f=0,h=0;e===ts?o>0&&(u=ts,f=o,h=r.length):e===Qr?c>0&&(u=Qr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ts:Qr:null,h=u?u===ts?r.length:l.length:0);const m=u===ts&&/\b(?:transform|all)(?:,|$)/.test(i(`${ts}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function wf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ef(t)+Ef(n[i])))}function Ef(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Tf(n){return(n?n.ownerDocument:document).body.offsetHeight}function Rv(n,e,t){const i=n[Co];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ka=Symbol("_vod"),vp=Symbol("_vsh"),cs={name:"show",beforeMount(n,{value:e},{transition:t}){n[ka]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):eo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),eo(n,!0),i.enter(n)):i.leave(n,()=>{eo(n,!1)}):eo(n,e))},beforeUnmount(n,{value:e}){eo(n,e)}};function eo(n,e){n.style.display=e?n[ka]:"none",n[vp]=!e}const Pv=Symbol(""),Dv=/(?:^|;)\s*display\s*:/;function Lv(n,e,t){const i=n.style,s=Ut(t);let r=!1;if(t&&!s){if(e)if(Ut(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ba(i,a,"")}else for(const o in e)t[o]==null&&ba(i,o,"");for(const o in t)o==="display"&&(r=!0),ba(i,o,t[o])}else if(s){if(e!==t){const o=i[Pv];o&&(t+=";"+o),i.cssText=t,r=Dv.test(t)}}else e&&n.removeAttribute("style");ka in n&&(n[ka]=r?i.display:"",n[vp]&&(i.display="none"))}const Af=/\s*!important$/;function ba(n,e,t){if(Ze(t))t.forEach(i=>ba(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Iv(n,e);Af.test(t)?n.setProperty(Ss(i),t.replace(Af,""),"important"):n[i]=t}}const Cf=["Webkit","Moz","ms"],Sl={};function Iv(n,e){const t=Sl[e];if(t)return t;let i=ei(e);if(i!=="filter"&&i in n)return Sl[e]=i;i=ud(i);for(let s=0;s<Cf.length;s++){const r=Cf[s]+i;if(r in n)return Sl[e]=r}return e}const Rf="http://www.w3.org/1999/xlink";function Pf(n,e,t,i,s,r=Nm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Rf,e.slice(6,e.length)):n.setAttributeNS(Rf,e,t):t==null||r&&!hd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ii(t)?String(t):t)}function Df(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?mp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=hd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function hs(n,e,t,i){n.addEventListener(e,t,i)}function Uv(n,e,t,i){n.removeEventListener(e,t,i)}const Lf=Symbol("_vei");function Fv(n,e,t,i,s=null){const r=n[Lf]||(n[Lf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Nv(e);if(i){const c=r[e]=kv(i,s);hs(n,a,c,l)}else o&&(Uv(n,a,o,l),r[e]=void 0)}}const If=/(?:Once|Passive|Capture)$/;function Nv(n){let e;if(If.test(n)){e={};let i;for(;i=n.match(If);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ss(n.slice(2)),e]}let bl=0;const Ov=Promise.resolve(),Bv=()=>bl||(Ov.then(()=>bl=0),bl=Date.now());function kv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ri(zv(i,t.value),e,5,[i])};return t.value=n,t.attached=Bv(),t}function zv(n,e){if(Ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Uf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hv=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Rv(n,i,o):e==="style"?Lv(n,t,i):qa(e)?Ka(e)||Fv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vv(n,e,i,o))?(Df(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pf(n,e,i,o,r,e!=="value")):n._isVueCE&&(Gv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ut(i)))?Df(n,ei(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Pf(n,e,i,o))};function Vv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uf(e)&&it(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uf(e)&&Ut(t)?!1:e in n}function Gv(n,e){const t=n._def.props;if(!t)return!1;const i=ei(e);return Array.isArray(t)?t.some(s=>ei(s)===i):Object.keys(t).some(s=>ei(s)===i)}const Fr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ze(e)?t=>Ma(e,t):e};function Wv(n){n.target.composing=!0}function Ff(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vi=Symbol("_assign");function Nf(n,e,t){return e&&(n=n.trim()),t&&(n=Za(n)),n}const _p={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Vi]=Fr(s);const r=i||s.props&&s.props.type==="number";hs(n,e?"change":"input",o=>{o.target.composing||n[Vi](Nf(n.value,t,r))}),(t||r)&&hs(n,"change",()=>{n.value=Nf(n.value,t,r)}),e||(hs(n,"compositionstart",Wv),hs(n,"compositionend",Ff),hs(n,"change",Ff))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Vi]=Fr(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Za(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ns={deep:!0,created(n,e,t){n[Vi]=Fr(t),hs(n,"change",()=>{const i=n._modelValue,s=Ro(n),r=n.checked,o=n[Vi];if(Ze(i)){const a=yu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Wr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(xp(n,r))})},mounted:Of,beforeUpdate(n,e,t){n[Vi]=Fr(t),Of(n,e,t)}};function Of(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ze(e))s=yu(e,i.props.value)>-1;else if(Wr(e))s=e.has(i.props.value);else{if(e===t)return;s=Xr(e,xp(n,!0))}n.checked!==s&&(n.checked=s)}const Xv={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Wr(e);hs(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Za(Ro(o)):Ro(o));n[Vi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,dn(()=>{n._assigning=!1})}),n[Vi]=Fr(i)},mounted(n,{value:e}){Bf(n,e)},beforeUpdate(n,e,t){n[Vi]=Fr(t)},updated(n,{value:e}){n._assigning||Bf(n,e)}};function Bf(n,e){const t=n.multiple,i=Ze(e);if(!(t&&!i&&!Wr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Ro(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=yu(e,a)>-1}else o.selected=e.has(a);else if(Xr(Ro(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ro(n){return"_value"in n?n._value:n.value}function xp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Yv=["ctrl","shift","alt","meta"],$v={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Yv.some(t=>n[`${t}Key`]&&!e.includes(t))},zs=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=$v[e[o]];if(a&&a(s,e))return}return n(s,...r)})},qv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Ss(s.key);if(e.some(o=>o===r||qv[o]===r))return n(s)})},Kv=Vt({patchProp:Hv},Mv);let zf;function jv(){return zf||(zf=ev(Kv))}const Zv=(...n)=>{const e=jv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Qv(i);if(!s)return;const r=e._component;!it(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Jv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Jv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qv(n){return Ut(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Iu="170",Pr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},e_=0,Hf=1,t_=2,yp=1,n_=2,Ui=3,$i=0,Cn=1,yi=2,gs=0,Dr=1,Vf=2,Gf=3,Wf=4,i_=5,Bs=100,s_=101,r_=102,o_=103,a_=104,l_=200,c_=201,u_=202,f_=203,bc=204,wc=205,h_=206,d_=207,p_=208,m_=209,g_=210,v_=211,__=212,x_=213,y_=214,Ec=0,Tc=1,Ac=2,Nr=3,Cc=4,Rc=5,Pc=6,Dc=7,Mp=0,M_=1,S_=2,vs=0,b_=1,w_=2,E_=3,T_=4,A_=5,C_=6,R_=7,Sp=300,Or=301,Br=302,Lc=303,Ic=304,ll=306,Uc=1e3,Hs=1001,Fc=1002,ni=1003,P_=1004,Go=1005,jt=1006,wl=1007,ps=1008,qi=1009,bp=1010,wp=1011,Po=1012,Uu=1013,$s=1014,ki=1015,No=1016,Fu=1017,Nu=1018,kr=1020,Ep=35902,Tp=1021,Ap=1022,Jn=1023,Cp=1024,Rp=1025,Lr=1026,zr=1027,Pp=1028,Ou=1029,Dp=1030,Bu=1031,ku=1033,wa=33776,Ea=33777,Ta=33778,Aa=33779,Nc=35840,Oc=35841,Bc=35842,kc=35843,zc=36196,Hc=37492,Vc=37496,Gc=37808,Wc=37809,Xc=37810,Yc=37811,$c=37812,qc=37813,Kc=37814,jc=37815,Zc=37816,Jc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,Ca=36492,iu=36494,su=36495,Lp=36283,ru=36284,ou=36285,au=36286,D_=3200,L_=3201,I_=0,U_=1,ds="",rn="srgb",Yr="srgb-linear",cl="linear",yt="srgb",sr=7680,Xf=519,F_=512,N_=513,O_=514,Ip=515,B_=516,k_=517,z_=518,H_=519,Yf=35044,$f="300 es",zi=2e3,za=2001;class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qf=1234567;const _o=Math.PI/180,Do=180/Math.PI;function $r(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function ln(n,e,t){return Math.max(e,Math.min(t,n))}function zu(n,e){return(n%e+e)%e}function V_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function G_(n,e,t){return n!==e?(t-n)/(e-n):0}function xo(n,e,t){return(1-t)*n+t*e}function W_(n,e,t,i){return xo(n,e,1-Math.exp(-t*i))}function X_(n,e=1){return e-Math.abs(zu(n,e*2)-e)}function Y_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function q_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function K_(n,e){return n+Math.random()*(e-n)}function j_(n){return n*(.5-Math.random())}function Z_(n){n!==void 0&&(qf=n);let e=qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J_(n){return n*_o}function Q_(n){return n*Do}function e0(n){return(n&n-1)===0&&n!==0}function t0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function n0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lu={DEG2RAD:_o,RAD2DEG:Do,generateUUID:$r,clamp:ln,euclideanModulo:zu,mapLinear:V_,inverseLerp:G_,lerp:xo,damp:W_,pingpong:X_,smoothstep:Y_,smootherstep:$_,randInt:q_,randFloat:K_,randFloatSpread:j_,seededRandom:Z_,degToRad:J_,radToDeg:Q_,isPowerOfTwo:e0,ceilPowerOfTwo:t0,floorPowerOfTwo:n0,setQuaternionFromProperEuler:i0,normalize:mn,denormalize:yr};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,s,r,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],v=s[0],p=s[3],d=s[6],b=s[1],y=s[4],_=s[7],P=s[2],T=s[5],E=s[8];return r[0]=o*v+a*b+l*P,r[3]=o*p+a*y+l*T,r[6]=o*d+a*_+l*E,r[1]=c*v+u*b+f*P,r[4]=c*p+u*y+f*T,r[7]=c*d+u*_+f*E,r[2]=h*v+m*b+g*P,r[5]=h*p+m*y+g*T,r[8]=h*d+m*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,m=c*r-o*l,g=t*f+i*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new rt;function Up(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function s0(){const n=Ha("canvas");return n.style.display="block",n}const Kf={};function lo(n){n in Kf||(Kf[n]=!0,console.warn(n))}function r0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function o0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ct={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(n.r=Gi(n.r),n.g=Gi(n.g),n.b=Gi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(n.r=Ir(n.r),n.g=Ir(n.g),n.b=Ir(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ds?cl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jf=[.64,.33,.3,.6,.15,.06],Zf=[.2126,.7152,.0722],Jf=[.3127,.329],Qf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[Yr]:{primaries:jf,whitePoint:Jf,transfer:cl,toXYZ:Qf,fromXYZ:eh,luminanceCoefficients:Zf,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:jf,whitePoint:Jf,transfer:yt,toXYZ:Qf,fromXYZ:eh,luminanceCoefficients:Zf,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let rr;class l0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Ha("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ha("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c0=0;class Fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tl(s[o].image)):r.push(Tl(s[o]))}else r=Tl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?l0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u0=0;class yn extends js{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=Hs,s=Hs,r=jt,o=ps,a=Jn,l=qi,c=yn.DEFAULT_ANISOTROPY,u=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=$r(),this.name="",this.source=new Fp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uc:e.x=e.x-Math.floor(e.x);break;case Hs:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uc:e.y=e.y-Math.floor(e.y);break;case Hs:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Sp;yn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(m+1)/2,P=(d+1)/2,T=(u+h)/4,E=(f+v)/4,L=(g+p)/4;return y>_&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=E/i):_>P?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=L/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=E/r,s=L/r),this.set(i,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f0 extends js{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qs extends f0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Np extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h0 extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==m||u!==g){let p=1-a;const d=l*h+c*m+u*g+f*v,b=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),T=Math.atan2(P,d*b);p=Math.sin(p*T)/P,a=Math.sin(a*T)/P}const _=a*b;if(l=l*p+h*_,c=c*p+m*_,u=u*p+g*_,f=f*p+v*_,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new te,th=new Si;class Oo{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Xo.subVectors(this.max,to),or.subVectors(e.a,to),ar.subVectors(e.b,to),lr.subVectors(e.c,to),is.subVectors(ar,or),ss.subVectors(lr,ar),Cs.subVectors(or,lr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Cs.z,Cs.y,is.z,0,-is.x,ss.z,0,-ss.x,Cs.z,0,-Cs.x,-is.y,is.x,0,-ss.y,ss.x,0,-Cs.y,Cs.x,0];return!Cl(t,or,ar,lr,Xo)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,or,ar,lr,Xo))?!1:(Yo.crossVectors(is,ss),t=[Yo.x,Yo.y,Yo.z],Cl(t,or,ar,lr,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new te,new te,new te,new te,new te,new te,new te,new te],$n=new te,Wo=new Oo,or=new te,ar=new te,lr=new te,is=new te,ss=new te,Cs=new te,to=new te,Xo=new te,Yo=new te,Rs=new te;function Cl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Rs.fromArray(n,r);const a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),l=e.dot(Rs),c=t.dot(Rs),u=i.dot(Rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const d0=new Oo,no=new te,Rl=new te;class Hu{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):d0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Rl)),this.expandByPoint(no.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new te,Pl=new te,$o=new te,rs=new te,Dl=new te,qo=new te,Ll=new te;class Vu{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pl.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Pl);const r=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=rs.dot(this.direction),l=-rs.dot($o),c=rs.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pl).addScaledVector($o,h),m}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,s,r){Dl.subVectors(t,e),qo.subVectors(i,e),Ll.crossVectors(Dl,qo);let o=this.direction.dot(Ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(qo.crossVectors(rs,qo));if(l<0)return null;const c=a*this.direction.dot(Dl.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(Ll);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,s,r,o,a,l,c,u,f,h,m,g,v,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,m,g,v,p)}set(e,t,i,s,r,o,a,l,c,u,f,h,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p0,e,m0)}lookAt(e,t,i){const s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),os.crossVectors(i,Ln),os.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),os.crossVectors(i,Ln)),os.normalize(),Ko.crossVectors(Ln,os),s[0]=os.x,s[4]=Ko.x,s[8]=Ln.x,s[1]=os.y,s[5]=Ko.y,s[9]=Ln.y,s[2]=os.z,s[6]=Ko.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],b=i[3],y=i[7],_=i[11],P=i[15],T=s[0],E=s[4],L=s[8],x=s[12],M=s[1],D=s[5],U=s[9],O=s[13],X=s[2],j=s[6],$=s[10],J=s[14],k=s[3],ne=s[7],F=s[11],H=s[15];return r[0]=o*T+a*M+l*X+c*k,r[4]=o*E+a*D+l*j+c*ne,r[8]=o*L+a*U+l*$+c*F,r[12]=o*x+a*O+l*J+c*H,r[1]=u*T+f*M+h*X+m*k,r[5]=u*E+f*D+h*j+m*ne,r[9]=u*L+f*U+h*$+m*F,r[13]=u*x+f*O+h*J+m*H,r[2]=g*T+v*M+p*X+d*k,r[6]=g*E+v*D+p*j+d*ne,r[10]=g*L+v*U+p*$+d*F,r[14]=g*x+v*O+p*J+d*H,r[3]=b*T+y*M+_*X+P*k,r[7]=b*E+y*D+_*j+P*ne,r[11]=b*L+y*U+_*$+P*F,r[15]=b*x+y*O+_*J+P*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*m-i*l*m)+v*(+t*l*m-t*c*h+r*o*h-s*o*m+s*c*u-r*l*u)+p*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],b=f*p*c-v*h*c+v*l*m-a*p*m-f*l*d+a*h*d,y=g*h*c-u*p*c-g*l*m+o*p*m+u*l*d-o*h*d,_=u*v*c-g*f*c+g*a*m-o*v*m-u*a*d+o*f*d,P=g*f*l-u*v*l-g*a*h+o*v*h+u*a*p-o*f*p,T=t*b+i*y+s*_+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=b*E,e[1]=(v*h*r-f*p*r-v*s*m+i*p*m+f*s*d-i*h*d)*E,e[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*d+i*l*d)*E,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*m-i*l*m)*E,e[4]=y*E,e[5]=(u*p*r-g*h*r+g*s*m-t*p*m-u*s*d+t*h*d)*E,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*d-t*l*d)*E,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*m+t*l*m)*E,e[8]=_*E,e[9]=(g*f*r-u*v*r-g*i*m+t*v*m+u*i*d-t*f*d)*E,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*d+t*a*d)*E,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*m-t*a*m)*E,e[12]=P*E,e[13]=(u*v*s-g*f*s+g*i*h-t*v*h-u*i*p+t*f*p)*E,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*p-t*a*p)*E,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,m=r*u,g=r*f,v=o*u,p=o*f,d=a*f,b=l*c,y=l*u,_=l*f,P=i.x,T=i.y,E=i.z;return s[0]=(1-(v+d))*P,s[1]=(m+_)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(m-_)*T,s[5]=(1-(h+d))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+y)*E,s[9]=(p-b)*E,s[10]=(1-(h+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=cr.set(s[0],s[1],s[2]).length();const o=cr.set(s[4],s[5],s[6]).length(),a=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);const c=1/r,u=1/o,f=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,t.setFromRotationMatrix(qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=zi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let m,g;if(a===zi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===za)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=zi){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,m=(i+s)*u;let g,v;if(a===zi)g=(o+r)*f,v=-2*f;else if(a===za)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cr=new te,qn=new It,p0=new te(0,0,0),m0=new te(1,1,1),os=new te,Ko=new te,Ln=new te,nh=new It,ih=new Si;class Ki{constructor(e=0,t=0,i=0,s=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g0=0;const sh=new te,ur=new Si,Ri=new It,jo=new te,io=new te,v0=new te,_0=new Si,rh=new te(1,0,0),oh=new te(0,1,0),ah=new te(0,0,1),lh={type:"added"},x0={type:"removed"},fr={type:"childadded",child:null},Il={type:"childremoved",child:null};class Nn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new te,t=new Ki,i=new Si,s=new te(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new rt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jo.copy(e):jo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(io,jo,this.up):Ri.lookAt(jo,io,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Ri),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x0),Il.child=e,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,_0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nn.DEFAULT_UP=new te(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new te,Pi=new te,Ul=new te,Di=new te,hr=new te,dr=new te,ch=new te,Fl=new te,Nl=new te,Ol=new te,Bl=new Lt,kl=new Lt,zl=new Lt;class Zn{constructor(e=new te,t=new te,i=new te){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),Pi.subVectors(i,t),Ul.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Pi),l=Kn.dot(Ul),c=Pi.dot(Pi),u=Pi.dot(Ul),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bl.setScalar(0),kl.setScalar(0),zl.setScalar(0),Bl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,i),zl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(kl,r.y),o.addScaledVector(zl,r.z),o}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),Pi.subVectors(e,t),Kn.cross(Pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Kn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;hr.subVectors(s,i),dr.subVectors(r,i),Fl.subVectors(e,i);const l=hr.dot(Fl),c=dr.dot(Fl);if(l<=0&&c<=0)return t.copy(i);Nl.subVectors(e,s);const u=hr.dot(Nl),f=dr.dot(Nl);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hr,o);Ol.subVectors(e,r);const m=hr.dot(Ol),g=dr.dot(Ol);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(dr,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return ch.subVectors(r,s),a=(f-u)/(f-u+(m-g)),t.copy(s).addScaledVector(ch,a);const d=1/(p+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class _t{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=zu(e,1),t=ln(t,0,1),i=ln(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Hl(o,r,e+1/3),this.g=Hl(o,r,e),this.b=Hl(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=Op[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return ct.fromWorkingColorSpace(sn.copy(this),e),Math.round(ln(sn.r*255,0,255))*65536+Math.round(ln(sn.g*255,0,255))*256+Math.round(ln(sn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(sn.copy(this),t);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=rn){ct.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,s=sn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Zo);const i=xo(as.h,Zo.h,t),s=xo(as.s,Zo.s,t),r=xo(as.l,Zo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new _t;_t.NAMES=Op;let y0=0;class ul extends js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=$r(),this.name="",this.blending=Dr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=wc,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lo extends ul{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new te,Jo=new at;class bi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yf,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yf&&(e.usage=this.usage),e}}class Bp extends bi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kp extends bi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xs extends bi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let M0=0;const zn=new It,Vl=new Nn,pr=new te,In=new Oo,so=new Oo,Yt=new te;class Zs extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?kp:Bp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xs(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(In.min,so.min),In.expandByPoint(Yt),Yt.addVectors(In.max,so.max),In.expandByPoint(Yt)):(In.expandByPoint(so.min),In.expandByPoint(so.max))}In.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),Yt.add(pr)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new te,l[L]=new te;const c=new te,u=new te,f=new te,h=new at,m=new at,g=new at,v=new te,p=new te;function d(L,x,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,M),h.fromBufferAttribute(r,L),m.fromBufferAttribute(r,x),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),m.sub(h),g.sub(h);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(v),a[x].add(v),a[M].add(v),l[L].add(p),l[x].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,x=b.length;L<x;++L){const M=b[L],D=M.start,U=M.count;for(let O=D,X=D+U;O<X;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new te,_=new te,P=new te,T=new te;function E(L){P.fromBufferAttribute(s,L),T.copy(P);const x=a[L];y.copy(x),y.sub(P.multiplyScalar(P.dot(x))).normalize(),_.crossVectors(T,x);const D=_.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,x=b.length;L<x;++L){const M=b[L],D=M.start,U=M.count;for(let O=D,X=D+U;O<X;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new te,r=new te,o=new te,a=new te,l=new te,c=new te,u=new te,f=new te;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new bi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zs,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new It,Ps=new Vu,Qo=new Hu,fh=new te,ea=new te,ta=new te,na=new te,Gl=new te,ia=new te,hh=new te,sa=new te;class Ht extends Nn{constructor(e=new Zs,t=new Lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Gl.fromBufferAttribute(f,e),o?ia.addScaledVector(Gl,u):ia.addScaledVector(Gl.sub(t),u))}t.add(ia)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Ps.copy(e.ray).recast(e.near),!(Qo.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Qo,fh)===null||Ps.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(uh.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(uh),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=b,P=y;_<P;_+=3){const T=a.getX(_),E=a.getX(_+1),L=a.getX(_+2);s=ra(this,d,e,i,c,u,f,T,E,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const b=a.getX(p),y=a.getX(p+1),_=a.getX(p+2);s=ra(this,o,e,i,c,u,f,b,y,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=b,P=y;_<P;_+=3){const T=_,E=_+1,L=_+2;s=ra(this,d,e,i,c,u,f,T,E,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const b=p,y=p+1,_=p+2;s=ra(this,o,e,i,c,u,f,b,y,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function S0(n,e,t,i,s,r,o,a){let l;if(e.side===Cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$i,a),l===null)return null;sa.copy(a),sa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:n}}function ra(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ea),n.getVertexPosition(l,ta),n.getVertexPosition(c,na);const u=S0(n,e,t,i,ea,ta,na,hh);if(u){const f=new te;Zn.getBarycoord(hh,ea,ta,na,f),s&&(u.uv=Zn.getInterpolatedAttribute(s,a,l,c,f,new at)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,a,l,c,f,new at)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,f,new te),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new te,materialIndex:0};Zn.getNormal(ea,ta,na,h.normal),u.face=h,u.barycoord=f}return u}class Bo extends Zs{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xs(c,3)),this.setAttribute("normal",new Xs(u,3)),this.setAttribute("uv",new Xs(f,2));function g(v,p,d,b,y,_,P,T,E,L,x){const M=_/E,D=P/L,U=_/2,O=P/2,X=T/2,j=E+1,$=L+1;let J=0,k=0;const ne=new te;for(let F=0;F<$;F++){const H=F*D-O;for(let Y=0;Y<j;Y++){const ae=Y*M-U;ne[v]=ae*b,ne[p]=H*y,ne[d]=X,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[p]=0,ne[d]=T>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(Y/E),f.push(1-F/L),J+=1}}for(let F=0;F<L;F++)for(let H=0;H<E;H++){const Y=h+H+j*F,ae=h+H+j*(F+1),ee=h+(H+1)+j*(F+1),de=h+(H+1)+j*F;l.push(Y,ae,de),l.push(ae,ee,de),k+=6}a.addGroup(m,k,x),m+=k,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=Hr(n[t]);for(const s in i)e[s]=i[s]}return e}function b0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const w0={clone:Hr,merge:gn};var E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends ul{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=b0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hp extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new te,dh=new at,ph=new at;class Hn extends Hp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,dh,ph),t.subVectors(ph,dh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class A0 extends Nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Hn(mr,gr,e,t);s.layers=this.layers,this.add(s);const r=new Hn(mr,gr,e,t);r.layers=this.layers,this.add(r);const o=new Hn(mr,gr,e,t);o.layers=this.layers,this.add(o);const a=new Hn(mr,gr,e,t);a.layers=this.layers,this.add(a);const l=new Hn(mr,gr,e,t);l.layers=this.layers,this.add(l);const c=new Hn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vp extends yn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C0 extends qs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Bo(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:gs});r.uniforms.tEquirect.value=t;const o=new Ht(s,r),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=jt),new A0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Wl=new te,R0=new te,P0=new rt;class vi{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wl.subVectors(i,t).cross(R0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||P0.getNormalMatrix(e),s=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Hu,oa=new te;class Gp{constructor(e=new vi,t=new vi,i=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],m=s[8],g=s[9],v=s[10],p=s[11],d=s[12],b=s[13],y=s[14],_=s[15];if(i[0].setComponents(l-r,h-c,p-m,_-d).normalize(),i[1].setComponents(l+r,h+c,p+m,_+d).normalize(),i[2].setComponents(l+o,h+u,p+g,_+b).normalize(),i[3].setComponents(l-o,h-u,p-g,_-b).normalize(),i[4].setComponents(l-a,h-f,p-v,_-y).normalize(),t===zi)i[5].setComponents(l+a,h+f,p+v,_+y).normalize();else if(t===za)i[5].setComponents(a,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function D0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class un extends Zs{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<u;d++){const b=d*h-o;for(let y=0;y<c;y++){const _=y*f-r;g.push(_,-b,0),v.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const y=b+c*d,_=b+c*(d+1),P=b+1+c*(d+1),T=b+1+c*d;m.push(y,_,T),m.push(_,P,T)}this.setIndex(m),this.setAttribute("position",new Xs(g,3)),this.setAttribute("normal",new Xs(v,3)),this.setAttribute("uv",new Xs(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.widthSegments,e.heightSegments)}}var L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,H0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,X0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Px=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ey=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,my=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_y=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,My=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,by=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ey=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ty=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,By=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:L0,alphahash_pars_fragment:I0,alphamap_fragment:U0,alphamap_pars_fragment:F0,alphatest_fragment:N0,alphatest_pars_fragment:O0,aomap_fragment:B0,aomap_pars_fragment:k0,batching_pars_vertex:z0,batching_vertex:H0,begin_vertex:V0,beginnormal_vertex:G0,bsdfs:W0,iridescence_fragment:X0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:$0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:j0,color_fragment:Z0,color_pars_fragment:J0,color_pars_vertex:Q0,color_vertex:ex,common:tx,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:sx,displacementmap_vertex:rx,emissivemap_fragment:ox,emissivemap_pars_fragment:ax,colorspace_fragment:lx,colorspace_pars_fragment:cx,envmap_fragment:ux,envmap_common_pars_fragment:fx,envmap_pars_fragment:hx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:wx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:gx,fog_fragment:vx,fog_pars_fragment:_x,gradientmap_pars_fragment:xx,lightmap_pars_fragment:yx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:Sx,lights_pars_begin:bx,lights_toon_fragment:Ex,lights_toon_pars_fragment:Tx,lights_phong_fragment:Ax,lights_phong_pars_fragment:Cx,lights_physical_fragment:Rx,lights_physical_pars_fragment:Px,lights_fragment_begin:Dx,lights_fragment_maps:Lx,lights_fragment_end:Ix,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Ox,map_fragment:Bx,map_pars_fragment:kx,map_particle_fragment:zx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:Yx,morphtarget_pars_vertex:$x,morphtarget_vertex:qx,normal_fragment_begin:Kx,normal_fragment_maps:jx,normal_pars_fragment:Zx,normal_pars_vertex:Jx,normal_vertex:Qx,normalmap_pars_fragment:ey,clearcoat_normal_fragment_begin:ty,clearcoat_normal_fragment_maps:ny,clearcoat_pars_fragment:iy,iridescence_pars_fragment:sy,opaque_fragment:ry,packing:oy,premultiplied_alpha_fragment:ay,project_vertex:ly,dithering_fragment:cy,dithering_pars_fragment:uy,roughnessmap_fragment:fy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:dy,shadowmap_pars_vertex:py,shadowmap_vertex:my,shadowmask_pars_fragment:gy,skinbase_vertex:vy,skinning_pars_vertex:_y,skinning_vertex:xy,skinnormal_vertex:yy,specularmap_fragment:My,specularmap_pars_fragment:Sy,tonemapping_fragment:by,tonemapping_pars_fragment:wy,transmission_fragment:Ey,transmission_pars_fragment:Ty,uv_pars_fragment:Ay,uv_pars_vertex:Cy,uv_vertex:Ry,worldpos_vertex:Py,background_vert:Dy,background_frag:Ly,backgroundCube_vert:Iy,backgroundCube_frag:Uy,cube_vert:Fy,cube_frag:Ny,depth_vert:Oy,depth_frag:By,distanceRGBA_vert:ky,distanceRGBA_frag:zy,equirect_vert:Hy,equirect_frag:Vy,linedashed_vert:Gy,linedashed_frag:Wy,meshbasic_vert:Xy,meshbasic_frag:Yy,meshlambert_vert:$y,meshlambert_frag:qy,meshmatcap_vert:Ky,meshmatcap_frag:jy,meshnormal_vert:Zy,meshnormal_frag:Jy,meshphong_vert:Qy,meshphong_frag:eM,meshphysical_vert:tM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:sM,points_vert:rM,points_frag:oM,shadow_vert:aM,shadow_frag:lM,sprite_vert:cM,sprite_frag:uM},Oe={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},_i={basic:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new _t(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:gn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:gn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new _t(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:gn([Oe.points,Oe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:gn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:gn([Oe.common,Oe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:gn([Oe.sprite,Oe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:gn([Oe.common,Oe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:gn([Oe.lights,Oe.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};_i.physical={uniforms:gn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const aa={r:0,b:0,g:0},Ls=new Ki,fM=new It;function hM(n,e,t,i,s,r,o){const a=new _t(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1;const _=g(b);_===null?d(a,l):_&&_.isColor&&(d(_,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===ll)?(u===void 0&&(u=new Ht(new Bo(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Hr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ls.copy(y.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(Ls)),u.material.toneMapped=ct.getTransfer(_.colorSpace)!==yt,(f!==_||h!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ht(new un(2,2),new oi({name:"BackgroundMaterial",uniforms:Hr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ct.getTransfer(_.colorSpace)!==yt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,y){b.getRGB(aa,zp(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:v,addToRenderList:p}}function dM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(M,D,U,O,X){let j=!1;const $=f(O,U,D);r!==$&&(r=$,c(r.object)),j=m(M,O,U,X),j&&g(M,O,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(M,D,U,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,D,U){const O=U.wireframe===!0;let X=i[M.id];X===void 0&&(X={},i[M.id]=X);let j=X[D.id];j===void 0&&(j={},X[D.id]=j);let $=j[O];return $===void 0&&($=h(l()),j[O]=$),$}function h(M){const D=[],U=[],O=[];for(let X=0;X<t;X++)D[X]=0,U[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,D,U,O){const X=r.attributes,j=D.attributes;let $=0;const J=U.getAttributes();for(const k in J)if(J[k].location>=0){const F=X[k];let H=j[k];if(H===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),F===void 0||F.attribute!==H||H&&F.data!==H.data)return!0;$++}return r.attributesNum!==$||r.index!==O}function g(M,D,U,O){const X={},j=D.attributes;let $=0;const J=U.getAttributes();for(const k in J)if(J[k].location>=0){let F=j[k];F===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(F=M.instanceColor));const H={};H.attribute=F,F&&F.data&&(H.data=F.data),X[k]=H,$++}r.attributes=X,r.attributesNum=$,r.index=O}function v(){const M=r.newAttributes;for(let D=0,U=M.length;D<U;D++)M[D]=0}function p(M){d(M,0)}function d(M,D){const U=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;U[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),X[M]!==D&&(n.vertexAttribDivisor(M,D),X[M]=D)}function b(){const M=r.newAttributes,D=r.enabledAttributes;for(let U=0,O=D.length;U<O;U++)D[U]!==M[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function y(M,D,U,O,X,j,$){$===!0?n.vertexAttribIPointer(M,D,U,X,j):n.vertexAttribPointer(M,D,U,O,X,j)}function _(M,D,U,O){v();const X=O.attributes,j=U.getAttributes(),$=D.defaultAttributeValues;for(const J in j){const k=j[J];if(k.location>=0){let ne=X[J];if(ne===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const F=ne.normalized,H=ne.itemSize,Y=e.get(ne);if(Y===void 0)continue;const ae=Y.buffer,ee=Y.type,de=Y.bytesPerElement,ye=ee===n.INT||ee===n.UNSIGNED_INT||ne.gpuType===Uu;if(ne.isInterleavedBufferAttribute){const ve=ne.data,Be=ve.stride,ke=ne.offset;if(ve.isInstancedInterleavedBuffer){for(let Ve=0;Ve<k.locationSize;Ve++)d(k.location+Ve,ve.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)p(k.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let Ve=0;Ve<k.locationSize;Ve++)y(k.location+Ve,H/k.locationSize,ee,F,Be*de,(ke+H/k.locationSize*Ve)*de,ye)}else{if(ne.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)d(k.location+ve,ne.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<k.locationSize;ve++)p(k.location+ve);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let ve=0;ve<k.locationSize;ve++)y(k.location+ve,H/k.locationSize,ee,F,H*de,H/k.locationSize*ve*de,ye)}}else if($!==void 0){const F=$[J];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(k.location,F);break;case 3:n.vertexAttrib3fv(k.location,F);break;case 4:n.vertexAttrib4fv(k.location,F);break;default:n.vertexAttrib1fv(k.location,F)}}}}b()}function P(){L();for(const M in i){const D=i[M];for(const U in D){const O=D[U];for(const X in O)u(O[X].object),delete O[X];delete D[U]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const U in D){const O=D[U];for(const X in O)u(O[X].object),delete O[X];delete D[U]}delete i[M.id]}function E(M){for(const D in i){const U=i[D];if(U[M.id]===void 0)continue;const O=U[M.id];for(const X in O)u(O[X].object),delete O[X];delete U[M.id]}}function L(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function pM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Jn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==qi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ki&&!L)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:T}}function gM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new vi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:i,y=b*4;let _=d.clippingState||null;l.value=_,_=u(g,h,y,m);for(let P=0;P!==y;++P)_[P]=t[P];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=m+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,_=m;y!==v;++y,_+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function vM(n){let e=new WeakMap;function t(o,a){return a===Lc?o.mapping=Or:a===Ic&&(o.mapping=Br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Js extends Hp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,mh=[.125,.215,.35,.446,.526,.582],ks=20,Xl=new Js,gh=new _t;let Yl=null,$l=0,ql=0,Kl=!1;const Fs=(1+Math.sqrt(5))/2,vr=1/Fs,vh=[new te(-Fs,vr,0),new te(Fs,vr,0),new te(-vr,0,Fs),new te(vr,0,Fs),new te(0,Fs,-vr),new te(0,Fs,vr),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class _h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,$l,ql),this._renderer.xr.enabled=Kl,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:No,format:Jn,colorSpace:Yr,depthBuffer:!1},s=xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_M(r)),this._blurMaterial=xM(r,e,t)}return s}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,i,s){const a=new Hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(gh),u.toneMapping=vs,u.autoClear=!1;const m=new Lo({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new Ht(new Bo,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(gh),v=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;la(s,b*y,d>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Or||e.mapping===Br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vh[(s-r-1)%vh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ht(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ks-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):ks;p>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ks}`);const d=[];let b=0;for(let E=0;E<ks;++E){const L=E/v,x=Math.exp(-L*L/2);d.push(x),E===0?b+=x:E<p&&(b+=2*x)}for(let E=0;E<d.length;E++)d[E]=d[E]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const _=this._sizeLods[s],P=3*_*(s>y-Sr?s-y+Sr:0),T=4*(this._cubeSize-_);la(t,P,T,3*_,2*_),l.setRenderTarget(t),l.render(f,Xl)}}function _M(n){const e=[],t=[],i=[];let s=n;const r=n-Sr+1+mh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Sr?l=mh[o-n+Sr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,v=3,p=2,d=1,b=new Float32Array(v*g*m),y=new Float32Array(p*g*m),_=new Float32Array(d*g*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,L=T>2?0:-1,x=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];b.set(x,v*g*T),y.set(h,p*g*T);const M=[T,T,T,T,T,T];_.set(M,d*g*T)}const P=new Zs;P.setAttribute("position",new bi(b,v)),P.setAttribute("uv",new bi(y,p)),P.setAttribute("faceIndex",new bi(_,d)),e.push(P),s>Sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xh(n,e,t){const i=new qs(n,e,t);return i.texture.mapping=ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xM(n,e,t){const i=new Float32Array(ks),s=new te(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function yh(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Mh(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Wu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lc||l===Ic,u=l===Or||l===Br;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new _h(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new _h(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function MM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function SM(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let y=0,_=b.length;y<_;y+=3){const P=b[y+0],T=b[y+1],E=b[y+2];h.push(P,T,T,E,E,P)}}else if(g!==void 0){const b=g.array;v=g.version;for(let y=0,_=b.length/3-1;y<_;y+=3){const P=y+0,T=y+1,E=y+2;h.push(P,T,T,E,E,P)}}else return;const p=new(Up(h)?kp:Bp)(h,1);p.version=v;const d=r.get(f);d&&e.remove(d),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function bM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,r,h*o),t.update(m,i,1)}function c(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,h*o,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,h,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}function f(h,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,h,0,v,0,g);let d=0;for(let b=0;b<g;b++)d+=m[b]*v[b];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function EM(n,e,t){const i=new WeakMap,s=new Lt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let P=a.attributes.position.count*_,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*T*4*f),L=new Np(E,P,T,f);L.type=ki,L.needsUpdate=!0;const x=_*4;for(let D=0;D<f;D++){const U=d[D],O=b[D],X=y[D],j=P*T*4*D;for(let $=0;$<U.count;$++){const J=$*x;g===!0&&(s.fromBufferAttribute(U,$),E[j+J+0]=s.x,E[j+J+1]=s.y,E[j+J+2]=s.z,E[j+J+3]=0),v===!0&&(s.fromBufferAttribute(O,$),E[j+J+4]=s.x,E[j+J+5]=s.y,E[j+J+6]=s.z,E[j+J+7]=0),p===!0&&(s.fromBufferAttribute(X,$),E[j+J+8]=s.x,E[j+J+9]=s.y,E[j+J+10]=s.z,E[j+J+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new at(P,T)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function TM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Xp extends yn{constructor(e,t,i,s,r,o,a,l,c,u=Lr){if(u!==Lr&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Lr&&(i=$s),i===void 0&&u===zr&&(i=kr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yp=new yn,Sh=new Xp(1,1),$p=new Np,qp=new h0,Kp=new Vp,bh=[],wh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fl(n,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function DM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Ah.set(i),n.uniformMatrix2fv(this.addr,!1,Ah),Wt(t,i)}}function LM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),Wt(t,i)}}function IM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Eh.set(i),n.uniformMatrix4fv(this.addr,!1,Eh),Wt(t,i)}}function UM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function BM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function VM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Sh.compareFunction=Ip,r=Sh):r=Yp,t.setTexture2D(e||r,s)}function GM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||qp,s)}function WM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Kp,s)}function XM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$p,s)}function YM(n){switch(n){case 5126:return AM;case 35664:return CM;case 35665:return RM;case 35666:return PM;case 35674:return DM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return NM;case 35669:case 35673:return OM;case 5125:return BM;case 36294:return kM;case 36295:return zM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}function $M(n,e){n.uniform1fv(this.addr,e)}function qM(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function KM(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function jM(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function ZM(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function JM(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QM(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eS(n,e){n.uniform1iv(this.addr,e)}function tS(n,e){n.uniform2iv(this.addr,e)}function nS(n,e){n.uniform3iv(this.addr,e)}function iS(n,e){n.uniform4iv(this.addr,e)}function sS(n,e){n.uniform1uiv(this.addr,e)}function rS(n,e){n.uniform2uiv(this.addr,e)}function oS(n,e){n.uniform3uiv(this.addr,e)}function aS(n,e){n.uniform4uiv(this.addr,e)}function lS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yp,r[o])}function cS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||qp,r[o])}function uS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kp,r[o])}function fS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$p,r[o])}function hS(n){switch(n){case 5126:return $M;case 35664:return qM;case 35665:return KM;case 35666:return jM;case 35674:return ZM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return rS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}class dS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YM(t.type)}}class pS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hS(t.type)}}class mS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function Ch(n,e){n.seq.push(e),n.map[e.id]=e}function gS(n,e,t){const i=n.name,s=i.length;for(jl.lastIndex=0;;){const r=jl.exec(i),o=jl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ch(t,c===void 0?new dS(a,n,e):new pS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new mS(a),Ch(t,f)),t=f}}}class Ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);gS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Rh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vS=37297;let _S=0;function xS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ph=new rt;function yS(n){ct._getMatrix(Ph,ct.workingColorSpace,n);const e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case cl:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+xS(n.getShaderSource(e),o)}else return s}function MS(n,e){const t=yS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function SS(n,e){let t;switch(e){case b_:t="Linear";break;case w_:t="Reinhard";break;case E_:t="Cineon";break;case T_:t="ACESFilmic";break;case C_:t="AgX";break;case R_:t="Neutral";break;case A_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ca=new te;function bS(){ct.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function ES(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function co(n){return n!==""}function Lh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AS=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(n){return n.replace(AS,RS)}const CS=new Map;function RS(n,e){let t=ot[e];if(t===void 0){const i=CS.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cu(t)}const PS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(n){return n.replace(PS,DS)}function DS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function IS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Or:case Br:e="ENVMAP_TYPE_CUBE";break;case ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function US(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function FS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mp:e="ENVMAP_BLENDING_MULTIPLY";break;case M_:e="ENVMAP_BLENDING_MIX";break;case S_:e="ENVMAP_BLENDING_ADD";break}return e}function NS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LS(t),c=IS(t),u=US(t),f=FS(t),h=NS(t),m=wS(t),g=ES(r),v=s.createProgram();let p,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),d.length>0&&(d+=`
`)):(p=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),d=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vs?"#define TONE_MAPPING":"",t.toneMapping!==vs?ot.tonemapping_pars_fragment:"",t.toneMapping!==vs?SS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),bS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=cu(o),o=Lh(o,t),o=Ih(o,t),a=cu(a),a=Lh(a,t),a=Ih(a,t),o=Uh(o),a=Uh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=b+p+o,_=b+d+a,P=Rh(s,s.VERTEX_SHADER,y),T=Rh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,P),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(D){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(T).trim();let j=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,T);else{const J=Dh(s,P,"vertex"),k=Dh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+J+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||X==="")&&($=!1);$&&(D.diagnostics={runnable:j,programLog:U,vertexShader:{log:O,prefix:p},fragmentShader:{log:X,prefix:d}})}s.deleteShader(P),s.deleteShader(T),L=new Ra(s,v),x=TS(s,v)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,vS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_S++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let BS=0;class kS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zS(e),t.set(e,i)),i}}class zS{constructor(e){this.id=BS++,this.code=e,this.usedTimes=0}}function HS(n,e,t,i,s,r,o){const a=new Gu,l=new kS,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,M,D,U,O){const X=U.fog,j=O.geometry,$=x.isMeshStandardMaterial?U.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),k=J&&J.mapping===ll?J.image.height:null,ne=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const F=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,H=F!==void 0?F.length:0;let Y=0;j.morphAttributes.position!==void 0&&(Y=1),j.morphAttributes.normal!==void 0&&(Y=2),j.morphAttributes.color!==void 0&&(Y=3);let ae,ee,de,ye;if(ne){const lt=_i[ne];ae=lt.vertexShader,ee=lt.fragmentShader}else ae=x.vertexShader,ee=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),ye=l.getFragmentShaderID(x);const ve=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,Ve=O.isBatchedMesh===!0,ce=!!x.map,C=!!x.matcap,N=!!J,A=!!x.aoMap,pe=!!x.lightMap,se=!!x.bumpMap,re=!!x.normalMap,he=!!x.displacementMap,_e=!!x.emissiveMap,fe=!!x.metalnessMap,w=!!x.roughnessMap,S=x.anisotropy>0,I=x.clearcoat>0,G=x.dispersion>0,Q=x.iridescence>0,ie=x.sheen>0,Ee=x.transmission>0,Me=S&&!!x.anisotropyMap,Ae=I&&!!x.clearcoatMap,Ge=I&&!!x.clearcoatNormalMap,Se=I&&!!x.clearcoatRoughnessMap,Le=Q&&!!x.iridescenceMap,z=Q&&!!x.iridescenceThicknessMap,W=ie&&!!x.sheenColorMap,K=ie&&!!x.sheenRoughnessMap,Te=!!x.specularMap,Ie=!!x.specularColorMap,We=!!x.specularIntensityMap,V=Ee&&!!x.transmissionMap,we=Ee&&!!x.thicknessMap,ue=!!x.gradientMap,xe=!!x.alphaMap,Ue=x.alphaTest>0,Ne=!!x.alphaHash,Qe=!!x.extensions;let ut=vs;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ut=n.toneMapping);const At={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:ee,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Yr,alphaToCoverage:!!x.alphaToCoverage,map:ce,matcap:C,envMap:N,envMapMode:N&&J.mapping,envMapCubeUVHeight:k,aoMap:A,lightMap:pe,bumpMap:se,normalMap:re,displacementMap:h&&he,emissiveMap:_e,normalMapObjectSpace:re&&x.normalMapType===U_,normalMapTangentSpace:re&&x.normalMapType===I_,metalnessMap:fe,roughnessMap:w,anisotropy:S,anisotropyMap:Me,clearcoat:I,clearcoatMap:Ae,clearcoatNormalMap:Ge,clearcoatRoughnessMap:Se,dispersion:G,iridescence:Q,iridescenceMap:Le,iridescenceThicknessMap:z,sheen:ie,sheenColorMap:W,sheenRoughnessMap:K,specularMap:Te,specularColorMap:Ie,specularIntensityMap:We,transmission:Ee,transmissionMap:V,thicknessMap:we,gradientMap:ue,opaque:x.transparent===!1&&x.blending===Dr&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ue,alphaHash:Ne,combine:x.combine,mapUv:ce&&v(x.map.channel),aoMapUv:A&&v(x.aoMap.channel),lightMapUv:pe&&v(x.lightMap.channel),bumpMapUv:se&&v(x.bumpMap.channel),normalMapUv:re&&v(x.normalMap.channel),displacementMapUv:he&&v(x.displacementMap.channel),emissiveMapUv:_e&&v(x.emissiveMap.channel),metalnessMapUv:fe&&v(x.metalnessMap.channel),roughnessMapUv:w&&v(x.roughnessMap.channel),anisotropyMapUv:Me&&v(x.anisotropyMap.channel),clearcoatMapUv:Ae&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:z&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:W&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&v(x.sheenRoughnessMap.channel),specularMapUv:Te&&v(x.specularMap.channel),specularColorMapUv:Ie&&v(x.specularColorMap.channel),specularIntensityMapUv:We&&v(x.specularIntensityMap.channel),transmissionMapUv:V&&v(x.transmissionMap.channel),thicknessMapUv:we&&v(x.thicknessMap.channel),alphaMapUv:xe&&v(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(re||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(ce||xe),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Be,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Y,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:ce&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:_e&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yi,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&x.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function d(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(b(M,x),y(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function b(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){const M=g[x.type];let D;if(M){const U=_i[M];D=w0.clone(U.uniforms)}else D=x.uniforms;return D}function P(x,M){let D;for(let U=0,O=u.length;U<O;U++){const X=u[U];if(X.cacheKey===M){D=X,++D.usedTimes;break}}return D===void 0&&(D=new OS(n,M,x,r),u.push(D)),D}function T(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function E(x){l.remove(x)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:_,acquireProgram:P,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:L}}function VS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function GS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,m,g,v,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=p),e++,d}function a(f,h,m,g,v,p){const d=o(f,h,m,g,v,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(f,h,m,g,v,p){const d=o(f,h,m,g,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||GS),i.length>1&&i.sort(h||Nh),s.length>1&&s.sort(h||Nh)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function WS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Oh,n.set(i,[o])):s>=r.length?(o=new Oh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new _t};break;case"SpotLight":t={position:new te,direction:new te,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new te,halfWidth:new te,halfHeight:new te};break}return n[e.id]=t,t}}}function YS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $S=0;function qS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KS(n){const e=new XS,t=YS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new te);const s=new te,r=new It,o=new It;function a(c){let u=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,g=0,v=0,p=0,d=0,b=0,y=0,_=0,P=0,T=0,E=0;c.sort(qS);for(let x=0,M=c.length;x<M;x++){const D=c[x],U=D.color,O=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*O,f+=U.g*O,h+=U.b*O;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],O);E++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,k=t.get(D);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=D.shadow.matrix,b++}i.directional[m]=$,m++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(U).multiplyScalar(O),$.distance=X,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[v]=$;const J=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,J.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=J.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=j,_++}v++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(U).multiplyScalar(O),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=$,p++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const J=D.shadow,k=t.get(D);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=$,g++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(O),$.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[d]=$,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==_||L.numSpotMaps!==P||L.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=_,L.numSpotMaps=P,L.numLightProbes=E,i.version=$S++)}function l(c,u){let f=0,h=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const y=c[d];if(y.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(y.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Bh(n){const e=new KS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function jS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Bh(n),e.set(s,[a])):r>=o.length?(a=new Bh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class ZS extends ul{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=D_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JS extends ul{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tb(n,e,t){let i=new Gp;const s=new at,r=new at,o=new Lt,a=new ZS({depthPacking:L_}),l=new JS,c={},u=t.maxTextureSize,f={[$i]:Cn,[Cn]:$i,[yi]:yi},h=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:QS,fragmentShader:eb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Zs;g.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yp;let d=this.type;this.render=function(T,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const x=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(gs),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=d!==Ui&&this.type===Ui,X=d===Ui&&this.type!==Ui;for(let j=0,$=T.length;j<$;j++){const J=T[j],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();if(s.multiply(ne),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,k.mapSize.y=r.y)),k.map===null||O===!0||X===!0){const H=this.type!==Ui?{minFilter:ni,magFilter:ni}:{};k.map!==null&&k.map.dispose(),k.map=new qs(s.x,s.y,H),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const F=k.getViewportCount();for(let H=0;H<F;H++){const Y=k.getViewport(H);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),U.viewport(o),k.updateMatrices(J,H),i=k.getFrustum(),_(E,L,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Ui&&b(k,L),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(x,M,D)};function b(T,E){const L=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qs(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,L,h,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,L,m,v,null)}function y(T,E,L,x){let M=null;const D=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=M.uuid,O=E.uuid;let X=c[U];X===void 0&&(X={},c[U]=X);let j=X[O];j===void 0&&(j=M.clone(),X[O]=j,E.addEventListener("dispose",P)),M=j}if(M.visible=E.visible,M.wireframe=E.wireframe,x===Ui?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:f[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=L}return M}function _(T,E,L,x,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ui)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const O=e.update(T),X=T.material;if(Array.isArray(X)){const j=O.groups;for(let $=0,J=j.length;$<J;$++){const k=j[$],ne=X[k.materialIndex];if(ne&&ne.visible){const F=y(T,ne,x,M);T.onBeforeShadow(n,T,E,L,O,F,k),n.renderBufferDirect(L,null,O,F,T,k),T.onAfterShadow(n,T,E,L,O,F,k)}}}else if(X.visible){const j=y(T,X,x,M);T.onBeforeShadow(n,T,E,L,O,j,null),n.renderBufferDirect(L,null,O,j,T,null),T.onAfterShadow(n,T,E,L,O,j,null)}}const U=T.children;for(let O=0,X=U.length;O<X;O++)_(U[O],E,L,x,M)}function P(T){T.target.removeEventListener("dispose",P);for(const L in c){const x=c[L],M=T.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const nb={[Ec]:Tc,[Ac]:Pc,[Cc]:Dc,[Nr]:Rc,[Tc]:Ec,[Pc]:Ac,[Dc]:Cc,[Rc]:Nr};function ib(n,e){function t(){let V=!1;const we=new Lt;let ue=null;const xe=new Lt(0,0,0,0);return{setMask:function(Ue){ue!==Ue&&!V&&(n.colorMask(Ue,Ue,Ue,Ue),ue=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,Ne,Qe,ut,At){At===!0&&(Ue*=ut,Ne*=ut,Qe*=ut),we.set(Ue,Ne,Qe,ut),xe.equals(we)===!1&&(n.clearColor(Ue,Ne,Qe,ut),xe.copy(we))},reset:function(){V=!1,ue=null,xe.set(-1,0,0,0)}}}function i(){let V=!1,we=!1,ue=null,xe=null,Ue=null;return{setReversed:function(Ne){if(we!==Ne){const Qe=e.get("EXT_clip_control");we?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const ut=Ue;Ue=null,this.setClear(ut)}we=Ne},getReversed:function(){return we},setTest:function(Ne){Ne?ve(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Ne){ue!==Ne&&!V&&(n.depthMask(Ne),ue=Ne)},setFunc:function(Ne){if(we&&(Ne=nb[Ne]),xe!==Ne){switch(Ne){case Ec:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case Ac:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case Cc:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Pc:n.depthFunc(n.GREATER);break;case Dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=Ne}},setLocked:function(Ne){V=Ne},setClear:function(Ne){Ue!==Ne&&(we&&(Ne=1-Ne),n.clearDepth(Ne),Ue=Ne)},reset:function(){V=!1,ue=null,xe=null,Ue=null,we=!1}}}function s(){let V=!1,we=null,ue=null,xe=null,Ue=null,Ne=null,Qe=null,ut=null,At=null;return{setTest:function(lt){V||(lt?ve(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(lt){we!==lt&&!V&&(n.stencilMask(lt),we=lt)},setFunc:function(lt,en,Pn){(ue!==lt||xe!==en||Ue!==Pn)&&(n.stencilFunc(lt,en,Pn),ue=lt,xe=en,Ue=Pn)},setOp:function(lt,en,Pn){(Ne!==lt||Qe!==en||ut!==Pn)&&(n.stencilOp(lt,en,Pn),Ne=lt,Qe=en,ut=Pn)},setLocked:function(lt){V=lt},setClear:function(lt){At!==lt&&(n.clearStencil(lt),At=lt)},reset:function(){V=!1,we=null,ue=null,xe=null,Ue=null,Ne=null,Qe=null,ut=null,At=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],g=null,v=!1,p=null,d=null,b=null,y=null,_=null,P=null,T=null,E=new _t(0,0,0),L=0,x=!1,M=null,D=null,U=null,O=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),$=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),$=J>=2);let ne=null,F={};const H=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ae=new Lt().fromArray(H),ee=new Lt().fromArray(Y);function de(V,we,ue,xe){const Ue=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(V,Ne),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<ue;Qe++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(we+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Ne}const ye={};ye[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(Nr),se(!1),re(Hf),ve(n.CULL_FACE),A(gs);function ve(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function Be(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function ke(V,we){return f[V]!==we?(n.bindFramebuffer(V,we),f[V]=we,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=we),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=we),!0):!1}function Ve(V,we){let ue=m,xe=!1;if(V){ue=h.get(we),ue===void 0&&(ue=[],h.set(we,ue));const Ue=V.textures;if(ue.length!==Ue.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,Qe=Ue.length;Ne<Qe;Ne++)ue[Ne]=n.COLOR_ATTACHMENT0+Ne;ue.length=Ue.length,xe=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ue)}function ce(V){return g!==V?(n.useProgram(V),g=V,!0):!1}const C={[Bs]:n.FUNC_ADD,[s_]:n.FUNC_SUBTRACT,[r_]:n.FUNC_REVERSE_SUBTRACT};C[o_]=n.MIN,C[a_]=n.MAX;const N={[l_]:n.ZERO,[c_]:n.ONE,[u_]:n.SRC_COLOR,[bc]:n.SRC_ALPHA,[g_]:n.SRC_ALPHA_SATURATE,[p_]:n.DST_COLOR,[h_]:n.DST_ALPHA,[f_]:n.ONE_MINUS_SRC_COLOR,[wc]:n.ONE_MINUS_SRC_ALPHA,[m_]:n.ONE_MINUS_DST_COLOR,[d_]:n.ONE_MINUS_DST_ALPHA,[v_]:n.CONSTANT_COLOR,[__]:n.ONE_MINUS_CONSTANT_COLOR,[x_]:n.CONSTANT_ALPHA,[y_]:n.ONE_MINUS_CONSTANT_ALPHA};function A(V,we,ue,xe,Ue,Ne,Qe,ut,At,lt){if(V===gs){v===!0&&(Be(n.BLEND),v=!1);return}if(v===!1&&(ve(n.BLEND),v=!0),V!==i_){if(V!==p||lt!==x){if((d!==Bs||_!==Bs)&&(n.blendEquation(n.FUNC_ADD),d=Bs,_=Bs),lt)switch(V){case Dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.ONE,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,y=null,P=null,T=null,E.set(0,0,0),L=0,p=V,x=lt}return}Ue=Ue||we,Ne=Ne||ue,Qe=Qe||xe,(we!==d||Ue!==_)&&(n.blendEquationSeparate(C[we],C[Ue]),d=we,_=Ue),(ue!==b||xe!==y||Ne!==P||Qe!==T)&&(n.blendFuncSeparate(N[ue],N[xe],N[Ne],N[Qe]),b=ue,y=xe,P=Ne,T=Qe),(ut.equals(E)===!1||At!==L)&&(n.blendColor(ut.r,ut.g,ut.b,At),E.copy(ut),L=At),p=V,x=!1}function pe(V,we){V.side===yi?Be(n.CULL_FACE):ve(n.CULL_FACE);let ue=V.side===Cn;we&&(ue=!ue),se(ue),V.blending===Dr&&V.transparent===!1?A(gs):A(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const xe=V.stencilWrite;a.setTest(xe),xe&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),_e(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(V){M!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),M=V)}function re(V){V!==e_?(ve(n.CULL_FACE),V!==D&&(V===Hf?n.cullFace(n.BACK):V===t_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),D=V}function he(V){V!==U&&($&&n.lineWidth(V),U=V)}function _e(V,we,ue){V?(ve(n.POLYGON_OFFSET_FILL),(O!==we||X!==ue)&&(n.polygonOffset(we,ue),O=we,X=ue)):Be(n.POLYGON_OFFSET_FILL)}function fe(V){V?ve(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function w(V){V===void 0&&(V=n.TEXTURE0+j-1),ne!==V&&(n.activeTexture(V),ne=V)}function S(V,we,ue){ue===void 0&&(ne===null?ue=n.TEXTURE0+j-1:ue=ne);let xe=F[ue];xe===void 0&&(xe={type:void 0,texture:void 0},F[ue]=xe),(xe.type!==V||xe.texture!==we)&&(ne!==ue&&(n.activeTexture(ue),ne=ue),n.bindTexture(V,we||ye[V]),xe.type=V,xe.texture=we)}function I(){const V=F[ne];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(V){ae.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ae.copy(V))}function K(V){ee.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ee.copy(V))}function Te(V,we){let ue=c.get(we);ue===void 0&&(ue=new WeakMap,c.set(we,ue));let xe=ue.get(V);xe===void 0&&(xe=n.getUniformBlockIndex(we,V.name),ue.set(V,xe))}function Ie(V,we){const xe=c.get(we).get(V);l.get(we)!==xe&&(n.uniformBlockBinding(we,xe,V.__bindingPointIndex),l.set(we,xe))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,F={},f={},h=new WeakMap,m=[],g=null,v=!1,p=null,d=null,b=null,y=null,_=null,P=null,T=null,E=new _t(0,0,0),L=0,x=!1,M=null,D=null,U=null,O=null,X=null,ae.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Be,bindFramebuffer:ke,drawBuffers:Ve,useProgram:ce,setBlending:A,setMaterial:pe,setFlipSided:se,setCullFace:re,setLineWidth:he,setPolygonOffset:_e,setScissorTest:fe,activeTexture:w,bindTexture:S,unbindTexture:I,compressedTexImage2D:G,compressedTexImage3D:Q,texImage2D:Le,texImage3D:z,updateUBOMapping:Te,uniformBlockBinding:Ie,texStorage2D:Ge,texStorage3D:Se,texSubImage2D:ie,texSubImage3D:Ee,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ae,scissor:W,viewport:K,reset:We}}function kh(n,e,t,i){const s=sb(i);switch(t){case Tp:return n*e;case Cp:return n*e;case Rp:return n*e*2;case Pp:return n*e/s.components*s.byteLength;case Ou:return n*e/s.components*s.byteLength;case Dp:return n*e*2/s.components*s.byteLength;case Bu:return n*e*2/s.components*s.byteLength;case Ap:return n*e*3/s.components*s.byteLength;case Jn:return n*e*4/s.components*s.byteLength;case ku:return n*e*4/s.components*s.byteLength;case wa:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:case kc:return Math.max(n,16)*Math.max(e,8)/4;case Nc:case Bc:return Math.max(n,8)*Math.max(e,8)/2;case zc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ca:case iu:case su:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lp:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ou:case au:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sb(n){switch(n){case qi:case bp:return{byteLength:1,components:1};case Po:case wp:case No:return{byteLength:2,components:1};case Fu:case Nu:return{byteLength:2,components:4};case $s:case Uu:case ki:return{byteLength:4,components:1};case Ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function rb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return m?new OffscreenCanvas(w,S):Ha("canvas")}function v(w,S,I){let G=1;const Q=fe(w);if((Q.width>I||Q.height>I)&&(G=I/Math.max(Q.width,Q.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ie=Math.floor(G*Q.width),Ee=Math.floor(G*Q.height);f===void 0&&(f=g(ie,Ee));const Me=S?g(ie,Ee):f;return Me.width=ie,Me.height=Ee,Me.getContext("2d").drawImage(w,0,0,ie,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ie+"x"+Ee+")."),Me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function p(w){return w.generateMipmaps}function d(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(w,S,I,G,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=S;if(S===n.RED&&(I===n.FLOAT&&(ie=n.R32F),I===n.HALF_FLOAT&&(ie=n.R16F),I===n.UNSIGNED_BYTE&&(ie=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(ie=n.R8UI),I===n.UNSIGNED_SHORT&&(ie=n.R16UI),I===n.UNSIGNED_INT&&(ie=n.R32UI),I===n.BYTE&&(ie=n.R8I),I===n.SHORT&&(ie=n.R16I),I===n.INT&&(ie=n.R32I)),S===n.RG&&(I===n.FLOAT&&(ie=n.RG32F),I===n.HALF_FLOAT&&(ie=n.RG16F),I===n.UNSIGNED_BYTE&&(ie=n.RG8)),S===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(ie=n.RG8UI),I===n.UNSIGNED_SHORT&&(ie=n.RG16UI),I===n.UNSIGNED_INT&&(ie=n.RG32UI),I===n.BYTE&&(ie=n.RG8I),I===n.SHORT&&(ie=n.RG16I),I===n.INT&&(ie=n.RG32I)),S===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),I===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),I===n.UNSIGNED_INT&&(ie=n.RGB32UI),I===n.BYTE&&(ie=n.RGB8I),I===n.SHORT&&(ie=n.RGB16I),I===n.INT&&(ie=n.RGB32I)),S===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),I===n.UNSIGNED_INT&&(ie=n.RGBA32UI),I===n.BYTE&&(ie=n.RGBA8I),I===n.SHORT&&(ie=n.RGBA16I),I===n.INT&&(ie=n.RGBA32I)),S===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),S===n.RGBA){const Ee=Q?cl:ct.getTransfer(G);I===n.FLOAT&&(ie=n.RGBA32F),I===n.HALF_FLOAT&&(ie=n.RGBA16F),I===n.UNSIGNED_BYTE&&(ie=Ee===yt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(w,S){let I;return w?S===null||S===$s||S===kr?I=n.DEPTH24_STENCIL8:S===ki?I=n.DEPTH32F_STENCIL8:S===Po&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$s||S===kr?I=n.DEPTH_COMPONENT24:S===ki?I=n.DEPTH_COMPONENT32F:S===Po&&(I=n.DEPTH_COMPONENT16),I}function P(w,S){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==ni&&w.minFilter!==jt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){const S=w.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&u.delete(S)}function E(w){const S=w.target;S.removeEventListener("dispose",E),M(S)}function L(w){const S=i.get(w);if(S.__webglInit===void 0)return;const I=w.source,G=h.get(I);if(G){const Q=G[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(w),Object.keys(G).length===0&&h.delete(I)}i.remove(w)}function x(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const I=w.source,G=h.get(I);delete G[S.__cacheKey],o.memory.textures--}function M(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let Q=0;Q<S.__webglFramebuffer[G].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[G][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)n.deleteFramebuffer(S.__webglFramebuffer[G]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=w.textures;for(let G=0,Q=I.length;G<Q;G++){const ie=i.get(I[G]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(I[G])}i.remove(w)}let D=0;function U(){D=0}function O(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function X(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function j(w,S){const I=i.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){const G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(I,w,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function $(w,S){const I=i.get(w);if(w.version>0&&I.__version!==w.version){ee(I,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function J(w,S){const I=i.get(w);if(w.version>0&&I.__version!==w.version){ee(I,w,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function k(w,S){const I=i.get(w);if(w.version>0&&I.__version!==w.version){de(I,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const ne={[Uc]:n.REPEAT,[Hs]:n.CLAMP_TO_EDGE,[Fc]:n.MIRRORED_REPEAT},F={[ni]:n.NEAREST,[P_]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[wl]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},H={[F_]:n.NEVER,[H_]:n.ALWAYS,[N_]:n.LESS,[Ip]:n.LEQUAL,[O_]:n.EQUAL,[z_]:n.GEQUAL,[B_]:n.GREATER,[k_]:n.NOTEQUAL};function Y(w,S){if(S.type===ki&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===jt||S.magFilter===wl||S.magFilter===Go||S.magFilter===ps||S.minFilter===jt||S.minFilter===wl||S.minFilter===Go||S.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ne[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ne[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ne[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,F[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,F[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ni||S.minFilter!==Go&&S.minFilter!==ps||S.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ae(w,S){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",T));const G=S.source;let Q=h.get(G);Q===void 0&&(Q={},h.set(G,Q));const ie=X(S);if(ie!==w.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Q[ie].usedTimes++;const Ee=Q[w.__cacheKey];Ee!==void 0&&(Q[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&x(S)),w.__cacheKey=ie,w.__webglTexture=Q[ie].texture}return I}function ee(w,S,I){let G=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=n.TEXTURE_3D);const Q=ae(w,S),ie=S.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+I);const Ee=i.get(ie);if(ie.version!==Ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+I);const Me=ct.getPrimaries(ct.workingColorSpace),Ae=S.colorSpace===ds?null:ct.getPrimaries(S.colorSpace),Ge=S.colorSpace===ds||Me===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let Se=v(S.image,!1,s.maxTextureSize);Se=_e(S,Se);const Le=r.convert(S.format,S.colorSpace),z=r.convert(S.type);let W=y(S.internalFormat,Le,z,S.colorSpace,S.isVideoTexture);Y(G,S);let K;const Te=S.mipmaps,Ie=S.isVideoTexture!==!0,We=Ee.__version===void 0||Q===!0,V=ie.dataReady,we=P(S,Se);if(S.isDepthTexture)W=_(S.format===zr,S.type),We&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,W,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,W,Se.width,Se.height,0,Le,z,null));else if(S.isDataTexture)if(Te.length>0){Ie&&We&&t.texStorage2D(n.TEXTURE_2D,we,W,Te[0].width,Te[0].height);for(let ue=0,xe=Te.length;ue<xe;ue++)K=Te[ue],Ie?V&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,K.width,K.height,Le,z,K.data):t.texImage2D(n.TEXTURE_2D,ue,W,K.width,K.height,0,Le,z,K.data);S.generateMipmaps=!1}else Ie?(We&&t.texStorage2D(n.TEXTURE_2D,we,W,Se.width,Se.height),V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se.width,Se.height,Le,z,Se.data)):t.texImage2D(n.TEXTURE_2D,0,W,Se.width,Se.height,0,Le,z,Se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ie&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,W,Te[0].width,Te[0].height,Se.depth);for(let ue=0,xe=Te.length;ue<xe;ue++)if(K=Te[ue],S.format!==Jn)if(Le!==null)if(Ie){if(V)if(S.layerUpdates.size>0){const Ue=kh(K.width,K.height,S.format,S.type);for(const Ne of S.layerUpdates){const Qe=K.data.subarray(Ne*Ue/K.data.BYTES_PER_ELEMENT,(Ne+1)*Ue/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Ne,K.width,K.height,1,Le,Qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,K.width,K.height,Se.depth,Le,K.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,W,K.width,K.height,Se.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,K.width,K.height,Se.depth,Le,z,K.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,W,K.width,K.height,Se.depth,0,Le,z,K.data)}else{Ie&&We&&t.texStorage2D(n.TEXTURE_2D,we,W,Te[0].width,Te[0].height);for(let ue=0,xe=Te.length;ue<xe;ue++)K=Te[ue],S.format!==Jn?Le!==null?Ie?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,K.width,K.height,Le,K.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,W,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?V&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,K.width,K.height,Le,z,K.data):t.texImage2D(n.TEXTURE_2D,ue,W,K.width,K.height,0,Le,z,K.data)}else if(S.isDataArrayTexture)if(Ie){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,W,Se.width,Se.height,Se.depth),V)if(S.layerUpdates.size>0){const ue=kh(Se.width,Se.height,S.format,S.type);for(const xe of S.layerUpdates){const Ue=Se.data.subarray(xe*ue/Se.data.BYTES_PER_ELEMENT,(xe+1)*ue/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,Se.width,Se.height,1,Le,z,Ue)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Le,z,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,W,Se.width,Se.height,Se.depth,0,Le,z,Se.data);else if(S.isData3DTexture)Ie?(We&&t.texStorage3D(n.TEXTURE_3D,we,W,Se.width,Se.height,Se.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Le,z,Se.data)):t.texImage3D(n.TEXTURE_3D,0,W,Se.width,Se.height,Se.depth,0,Le,z,Se.data);else if(S.isFramebufferTexture){if(We)if(Ie)t.texStorage2D(n.TEXTURE_2D,we,W,Se.width,Se.height);else{let ue=Se.width,xe=Se.height;for(let Ue=0;Ue<we;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,W,ue,xe,0,Le,z,null),ue>>=1,xe>>=1}}else if(Te.length>0){if(Ie&&We){const ue=fe(Te[0]);t.texStorage2D(n.TEXTURE_2D,we,W,ue.width,ue.height)}for(let ue=0,xe=Te.length;ue<xe;ue++)K=Te[ue],Ie?V&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Le,z,K):t.texImage2D(n.TEXTURE_2D,ue,W,Le,z,K);S.generateMipmaps=!1}else if(Ie){if(We){const ue=fe(Se);t.texStorage2D(n.TEXTURE_2D,we,W,ue.width,ue.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,z,Se)}else t.texImage2D(n.TEXTURE_2D,0,W,Le,z,Se);p(S)&&d(G),Ee.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function de(w,S,I){if(S.image.length!==6)return;const G=ae(w,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+I);const ie=i.get(Q);if(Q.version!==ie.__version||G===!0){t.activeTexture(n.TEXTURE0+I);const Ee=ct.getPrimaries(ct.workingColorSpace),Me=S.colorSpace===ds?null:ct.getPrimaries(S.colorSpace),Ae=S.colorSpace===ds||Ee===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ge=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,Le=[];for(let xe=0;xe<6;xe++)!Ge&&!Se?Le[xe]=v(S.image[xe],!0,s.maxCubemapSize):Le[xe]=Se?S.image[xe].image:S.image[xe],Le[xe]=_e(S,Le[xe]);const z=Le[0],W=r.convert(S.format,S.colorSpace),K=r.convert(S.type),Te=y(S.internalFormat,W,K,S.colorSpace),Ie=S.isVideoTexture!==!0,We=ie.__version===void 0||G===!0,V=Q.dataReady;let we=P(S,z);Y(n.TEXTURE_CUBE_MAP,S);let ue;if(Ge){Ie&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Te,z.width,z.height);for(let xe=0;xe<6;xe++){ue=Le[xe].mipmaps;for(let Ue=0;Ue<ue.length;Ue++){const Ne=ue[Ue];S.format!==Jn?W!==null?Ie?V&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,0,0,Ne.width,Ne.height,W,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,Te,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,0,0,Ne.width,Ne.height,W,K,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,Te,Ne.width,Ne.height,0,W,K,Ne.data)}}}else{if(ue=S.mipmaps,Ie&&We){ue.length>0&&we++;const xe=fe(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Te,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Se){Ie?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Le[xe].width,Le[xe].height,W,K,Le[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Te,Le[xe].width,Le[xe].height,0,W,K,Le[xe].data);for(let Ue=0;Ue<ue.length;Ue++){const Qe=ue[Ue].image[xe].image;Ie?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,0,0,Qe.width,Qe.height,W,K,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,Te,Qe.width,Qe.height,0,W,K,Qe.data)}}else{Ie?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,W,K,Le[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Te,W,K,Le[xe]);for(let Ue=0;Ue<ue.length;Ue++){const Ne=ue[Ue];Ie?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,0,0,W,K,Ne.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,Te,W,K,Ne.image[xe])}}}p(S)&&d(n.TEXTURE_CUBE_MAP),ie.__version=Q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ye(w,S,I,G,Q,ie){const Ee=r.convert(I.format,I.colorSpace),Me=r.convert(I.type),Ae=y(I.internalFormat,Ee,Me,I.colorSpace),Ge=i.get(S),Se=i.get(I);if(Se.__renderTarget=S,!Ge.__hasExternalTextures){const Le=Math.max(1,S.width>>ie),z=Math.max(1,S.height>>ie);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,Ae,Le,z,S.depth,0,Ee,Me,null):t.texImage2D(Q,ie,Ae,Le,z,0,Ee,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),re(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Q,Se.__webglTexture,0,se(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Q,Se.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(w,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const G=S.depthTexture,Q=G&&G.isDepthTexture?G.type:null,ie=_(S.stencilBuffer,Q),Ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=se(S);re(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,ie,S.width,S.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ie,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ie,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,w)}else{const G=S.textures;for(let Q=0;Q<G.length;Q++){const ie=G[Q],Ee=r.convert(ie.format,ie.colorSpace),Me=r.convert(ie.type),Ae=y(ie.internalFormat,Ee,Me,ie.colorSpace),Ge=se(S);I&&re(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ae,S.width,S.height):re(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Ae,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(S.depthTexture);G.__renderTarget=S,(!G.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const Q=G.__webglTexture,ie=se(S);if(S.depthTexture.format===Lr)re(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===zr)re(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(w){const S=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",Q)};G.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=G}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Be(S.__webglFramebuffer,w)}else if(I){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[G],w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,w,!1);else{const G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(w,S,I){const G=i.get(w);S!==void 0&&ye(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ke(w)}function ce(w){const S=w.texture,I=i.get(w),G=i.get(S);w.addEventListener("dispose",E);const Q=w.textures,ie=w.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=S.version,o.memory.textures++),ie){I.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[Me]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)I.__webglFramebuffer[Me][Ae]=n.createFramebuffer()}else I.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)I.__webglFramebuffer[Me]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let Me=0,Ae=Q.length;Me<Ae;Me++){const Ge=i.get(Q[Me]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&re(w)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Me=0;Me<Q.length;Me++){const Ae=Q[Me];I.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[Me]);const Ge=r.convert(Ae.format,Ae.colorSpace),Se=r.convert(Ae.type),Le=y(Ae.internalFormat,Ge,Se,Ae.colorSpace,w.isXRRenderTarget===!0),z=se(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,z,Le,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,I.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(I.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Y(n.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)ye(I.__webglFramebuffer[Me][Ae],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ae);else ye(I.__webglFramebuffer[Me],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);p(S)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let Me=0,Ae=Q.length;Me<Ae;Me++){const Ge=Q[Me],Se=i.get(Ge);t.bindTexture(n.TEXTURE_2D,Se.__webglTexture),Y(n.TEXTURE_2D,Ge),ye(I.__webglFramebuffer,w,Ge,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),p(Ge)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Me=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,G.__webglTexture),Y(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)ye(I.__webglFramebuffer[Ae],w,S,n.COLOR_ATTACHMENT0,Me,Ae);else ye(I.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,Me,0);p(S)&&d(Me),t.unbindTexture()}w.depthBuffer&&ke(w)}function C(w){const S=w.textures;for(let I=0,G=S.length;I<G;I++){const Q=S[I];if(p(Q)){const ie=b(w),Ee=i.get(Q).__webglTexture;t.bindTexture(ie,Ee),d(ie),t.unbindTexture()}}}const N=[],A=[];function pe(w){if(w.samples>0){if(re(w)===!1){const S=w.textures,I=w.width,G=w.height;let Q=n.COLOR_BUFFER_BIT;const ie=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(w),Me=S.length>1;if(Me)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);const Ge=i.get(S[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,I,G,0,0,I,G,Q,n.NEAREST),l===!0&&(N.length=0,A.length=0,N.push(n.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(N.push(ie),A.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);const Ge=i.get(S[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function se(w){return Math.min(s.maxSamples,w.samples)}function re(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function _e(w,S){const I=w.colorSpace,G=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==Yr&&I!==ds&&(ct.getTransfer(I)===yt?(G!==Jn||Q!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function fe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Ve,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=re}function ob(n,e){function t(i,s=ds){let r;const o=ct.getTransfer(s);if(i===qi)return n.UNSIGNED_BYTE;if(i===Fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ep)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bp)return n.BYTE;if(i===wp)return n.SHORT;if(i===Po)return n.UNSIGNED_SHORT;if(i===Uu)return n.INT;if(i===$s)return n.UNSIGNED_INT;if(i===ki)return n.FLOAT;if(i===No)return n.HALF_FLOAT;if(i===Tp)return n.ALPHA;if(i===Ap)return n.RGB;if(i===Jn)return n.RGBA;if(i===Cp)return n.LUMINANCE;if(i===Rp)return n.LUMINANCE_ALPHA;if(i===Lr)return n.DEPTH_COMPONENT;if(i===zr)return n.DEPTH_STENCIL;if(i===Pp)return n.RED;if(i===Ou)return n.RED_INTEGER;if(i===Dp)return n.RG;if(i===Bu)return n.RG_INTEGER;if(i===ku)return n.RGBA_INTEGER;if(i===wa||i===Ea||i===Ta||i===Aa)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===Oc||i===Bc||i===kc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Hc||i===Vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Hc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gc||i===Wc||i===Xc||i===Yc||i===$c||i===qc||i===Kc||i===jc||i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ca||i===iu||i===su)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ca)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lp||i===ru||i===ou||i===au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ab extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class uo extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ub=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new yn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new oi({vertexShader:cb,fragmentShader:ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hb extends js{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const v=new fb,p=t.getContextAttributes();let d=null,b=null;const y=[],_=[],P=new at;let T=null;const E=new Hn;E.viewport=new Lt;const L=new Hn;L.viewport=new Lt;const x=[E,L],M=new ab;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=y[ee];return de===void 0&&(de=new Zl,y[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=y[ee];return de===void 0&&(de=new Zl,y[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=y[ee];return de===void 0&&(de=new Zl,y[ee]=de),de.getHandSpace()};function O(ee){const de=_.indexOf(ee.inputSource);if(de===-1)return;const ye=y[de];ye!==void 0&&(ye.update(ee.inputSource,ee.frame,c||o),ye.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let ee=0;ee<y.length;ee++){const de=_[ee];de!==null&&(_[ee]=null,y[ee].disconnect(de))}D=null,U=null,v.reset(),e.setRenderTarget(d),m=null,h=null,f=null,s=null,b=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new qs(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,ye=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?zr:Lr,ye=p.stencil?kr:$s);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new qs(h.textureWidth,h.textureHeight,{format:Jn,type:qi,depthTexture:new Xp(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(ee){for(let de=0;de<ee.removed.length;de++){const ye=ee.removed[de],ve=_.indexOf(ye);ve>=0&&(_[ve]=null,y[ve].disconnect(ye))}for(let de=0;de<ee.added.length;de++){const ye=ee.added[de];let ve=_.indexOf(ye);if(ve===-1){for(let ke=0;ke<y.length;ke++)if(ke>=_.length){_.push(ye),ve=ke;break}else if(_[ke]===null){_[ke]=ye,ve=ke;break}if(ve===-1)break}const Be=y[ve];Be&&Be.connect(ye)}}const $=new te,J=new te;function k(ee,de,ye){$.setFromMatrixPosition(de.matrixWorld),J.setFromMatrixPosition(ye.matrixWorld);const ve=$.distanceTo(J),Be=de.projectionMatrix.elements,ke=ye.projectionMatrix.elements,Ve=Be[14]/(Be[10]-1),ce=Be[14]/(Be[10]+1),C=(Be[9]+1)/Be[5],N=(Be[9]-1)/Be[5],A=(Be[8]-1)/Be[0],pe=(ke[8]+1)/ke[0],se=Ve*A,re=Ve*pe,he=ve/(-A+pe),_e=he*-A;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(_e),ee.translateZ(he),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Be[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const fe=Ve+he,w=ce+he,S=se-_e,I=re+(ve-_e),G=C*ce/w*fe,Q=N*ce/w*fe;ee.projectionMatrix.makePerspective(S,I,G,Q,fe,w),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ne(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let de=ee.near,ye=ee.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),M.near=L.near=E.near=de,M.far=L.far=E.far=ye,(D!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,U=M.far),E.layers.mask=ee.layers.mask|2,L.layers.mask=ee.layers.mask|4,M.layers.mask=E.layers.mask|L.layers.mask;const ve=ee.parent,Be=M.cameras;ne(M,ve);for(let ke=0;ke<Be.length;ke++)ne(Be[ke],ve);Be.length===2?k(M,E,L):M.projectionMatrix.copy(E.projectionMatrix),F(ee,M,ve)};function F(ee,de,ye){ye===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(ye.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Do*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let H=null;function Y(ee,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const ye=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ve=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let ke=0;ke<ye.length;ke++){const Ve=ye[ke];let ce=null;if(m!==null)ce=m.getViewport(Ve);else{const N=f.getViewSubImage(h,Ve);ce=N.viewport,ke===0&&(e.setRenderTargetTextures(b,N.colorTexture,h.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(b))}let C=x[ke];C===void 0&&(C=new Hn,C.layers.enable(ke),C.viewport=new Lt,x[ke]=C),C.matrix.fromArray(Ve.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ve.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(ce.x,ce.y,ce.width,ce.height),ke===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(C)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const ke=f.getDepthInformation(ye[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,s.renderState)}}for(let ye=0;ye<y.length;ye++){const ve=_[ye],Be=y[ye];ve!==null&&Be!==void 0&&Be.update(ve,de,c||o)}H&&H(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const ae=new Wp;ae.setAnimationLoop(Y),this.setAnimationLoop=function(ee){H=ee},this.dispose=function(){}}}const Is=new Ki,db=new It;function pb(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,zp(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,b,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,_)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,b,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Cn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Cn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d),y=b.envMap,_=b.envMapRotation;y&&(p.envMap.value=y,Is.copy(_),Is.x*=-1,Is.y*=-1,Is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),p.envMapRotation.value.setFromMatrix4(db.makeRotationFromEuler(Is)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Cn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function mb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const _=y.program;i.uniformBlockBinding(b,_)}function c(b,y){let _=s[b.id];_===void 0&&(g(b),_=u(b),s[b.id]=_,b.addEventListener("dispose",p));const P=y.program;i.updateUBOMapping(b,P);const T=e.render.frame;r[b.id]!==T&&(h(b),r[b.id]=T)}function u(b){const y=f();b.__bindingPointIndex=y;const _=n.createBuffer(),P=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=s[b.id],_=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,E=_.length;T<E;T++){const L=Array.isArray(_[T])?_[T]:[_[T]];for(let x=0,M=L.length;x<M;x++){const D=L[x];if(m(D,T,x,P)===!0){const U=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let j=0;j<O.length;j++){const $=O[j],J=v($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,U+X,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,y,_,P){const T=b.value,E=y+"_"+_;if(P[E]===void 0)return typeof T=="number"||typeof T=="boolean"?P[E]=T:P[E]=T.clone(),!0;{const L=P[E];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return P[E]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(b){const y=b.uniforms;let _=0;const P=16;for(let E=0,L=y.length;E<L;E++){const x=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,D=x.length;M<D;M++){const U=x[M],O=Array.isArray(U.value)?U.value:[U.value];for(let X=0,j=O.length;X<j;X++){const $=O[X],J=v($),k=_%P,ne=k%J.boundary,F=k+ne;_+=ne,F!==0&&P-F<J.storage&&(_+=P-F),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=J.storage}}}const T=_%P;return T>0&&(_+=P-T),b.__size=_,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Qs{constructor(e={}){const{canvas:t=s0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,d=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=vs,this.toneMappingExposure=1;const _=this;let P=!1,T=0,E=0,L=null,x=-1,M=null;const D=new Lt,U=new Lt;let O=null;const X=new _t(0);let j=0,$=t.width,J=t.height,k=1,ne=null,F=null;const H=new Lt(0,0,$,J),Y=new Lt(0,0,$,J);let ae=!1;const ee=new Gp;let de=!1,ye=!1;const ve=new It,Be=new It,ke=new te,Ve=new Lt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function N(){return L===null?k:1}let A=i;function pe(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Iu}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),A===null){const q="webgl2";if(A=pe(q,R),A===null)throw pe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,re,he,_e,fe,w,S,I,G,Q,ie,Ee,Me,Ae,Ge,Se,Le,z,W,K,Te,Ie,We,V;function we(){se=new MM(A),se.init(),Ie=new ob(A,se),re=new mM(A,se,e,Ie),he=new ib(A,se),re.reverseDepthBuffer&&h&&he.buffers.depth.setReversed(!0),_e=new wM(A),fe=new VS,w=new rb(A,se,he,fe,re,Ie,_e),S=new vM(_),I=new yM(_),G=new D0(A),We=new dM(A,G),Q=new SM(A,G,_e,We),ie=new TM(A,Q,G,_e),W=new EM(A,re,w),Se=new gM(fe),Ee=new HS(_,S,I,se,re,We,Se),Me=new pb(_,fe),Ae=new WS,Ge=new jS(se),z=new hM(_,S,I,he,ie,m,l),Le=new tb(_,ie,re),V=new mb(A,_e,re,he),K=new pM(A,se,_e),Te=new bM(A,se,_e),_e.programs=Ee.programs,_.capabilities=re,_.extensions=se,_.properties=fe,_.renderLists=Ae,_.shadowMap=Le,_.state=he,_.info=_e}we();const ue=new hb(_,A);this.xr=ue,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize($,J,!1))},this.getSize=function(R){return R.set($,J)},this.setSize=function(R,q,oe=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,J=q,t.width=Math.floor(R*k),t.height=Math.floor(q*k),oe===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set($*k,J*k).floor()},this.setDrawingBufferSize=function(R,q,oe){$=R,J=q,k=oe,t.width=Math.floor(R*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,q,oe,le){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,q,oe,le),he.viewport(D.copy(H).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(Y)},this.setScissor=function(R,q,oe,le){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,q,oe,le),he.scissor(U.copy(Y).multiplyScalar(k).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(R){he.setScissorTest(ae=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){F=R},this.getClearColor=function(R){return R.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor.apply(z,arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha.apply(z,arguments)},this.clear=function(R=!0,q=!0,oe=!0){let le=0;if(R){let Z=!1;if(L!==null){const Re=L.texture.format;Z=Re===ku||Re===Bu||Re===Ou}if(Z){const Re=L.texture.type,ze=Re===qi||Re===$s||Re===Po||Re===kr||Re===Fu||Re===Nu,Ye=z.getClearColor(),$e=z.getClearAlpha(),tt=Ye.r,st=Ye.g,qe=Ye.b;ze?(g[0]=tt,g[1]=st,g[2]=qe,g[3]=$e,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=tt,v[1]=st,v[2]=qe,v[3]=$e,A.clearBufferiv(A.COLOR,0,v))}else le|=A.COLOR_BUFFER_BIT}q&&(le|=A.DEPTH_BUFFER_BIT),oe&&(le|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ae.dispose(),Ge.dispose(),fe.dispose(),S.dispose(),I.dispose(),ie.dispose(),We.dispose(),V.dispose(),Ee.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",bs),ue.removeEventListener("sessionend",tn),On.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=_e.autoReset,q=Le.enabled,oe=Le.autoUpdate,le=Le.needsUpdate,Z=Le.type;we(),_e.autoReset=R,Le.enabled=q,Le.autoUpdate=oe,Le.needsUpdate=le,Le.type=Z}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Qe(R){const q=R.target;q.removeEventListener("dispose",Qe),ut(q)}function ut(R){At(R),fe.remove(R)}function At(R){const q=fe.get(R).programs;q!==void 0&&(q.forEach(function(oe){Ee.releaseProgram(oe)}),R.isShaderMaterial&&Ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,oe,le,Z,Re){q===null&&(q=ce);const ze=Z.isMesh&&Z.matrixWorld.determinant()<0,Ye=et(R,q,oe,le,Z);he.setMaterial(le,ze);let $e=oe.index,tt=1;if(le.wireframe===!0){if($e=Q.getWireframeAttribute(oe),$e===void 0)return;tt=2}const st=oe.drawRange,qe=oe.attributes.position;let ft=st.start*tt,bt=(st.start+st.count)*tt;Re!==null&&(ft=Math.max(ft,Re.start*tt),bt=Math.min(bt,(Re.start+Re.count)*tt)),$e!==null?(ft=Math.max(ft,0),bt=Math.min(bt,$e.count)):qe!=null&&(ft=Math.max(ft,0),bt=Math.min(bt,qe.count));const Et=bt-ft;if(Et<0||Et===1/0)return;We.setup(Z,le,Ye,oe,$e);let Mn,dt=K;if($e!==null&&(Mn=G.get($e),dt=Te,dt.setIndex(Mn)),Z.isMesh)le.wireframe===!0?(he.setLineWidth(le.wireframeLinewidth*N()),dt.setMode(A.LINES)):dt.setMode(A.TRIANGLES);else if(Z.isLine){let Ke=le.linewidth;Ke===void 0&&(Ke=1),he.setLineWidth(Ke*N()),Z.isLineSegments?dt.setMode(A.LINES):Z.isLineLoop?dt.setMode(A.LINE_LOOP):dt.setMode(A.LINE_STRIP)}else Z.isPoints?dt.setMode(A.POINTS):Z.isSprite&&dt.setMode(A.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)dt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))dt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,wi=Z._multiDrawCounts,pt=Z._multiDrawCount,Yn=$e?G.get($e).bytesPerElement:1,nr=fe.get(le).currentProgram.getUniforms();for(let Dn=0;Dn<pt;Dn++)nr.setValue(A,"_gl_DrawID",Dn),dt.render(Ke[Dn]/Yn,wi[Dn])}else if(Z.isInstancedMesh)dt.renderInstances(ft,Et,Z.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,wi=Math.min(oe.instanceCount,Ke);dt.renderInstances(ft,Et,wi)}else dt.render(ft,Et)};function lt(R,q,oe){R.transparent===!0&&R.side===yi&&R.forceSinglePass===!1?(R.side=Cn,R.needsUpdate=!0,De(R,q,oe),R.side=$i,R.needsUpdate=!0,De(R,q,oe),R.side=yi):De(R,q,oe)}this.compile=function(R,q,oe=null){oe===null&&(oe=R),d=Ge.get(oe),d.init(q),y.push(d),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(d.pushLight(Z),Z.castShadow&&d.pushShadow(Z))}),R!==oe&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(d.pushLight(Z),Z.castShadow&&d.pushShadow(Z))}),d.setupLights();const le=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Re=Z.material;if(Re)if(Array.isArray(Re))for(let ze=0;ze<Re.length;ze++){const Ye=Re[ze];lt(Ye,oe,Z),le.add(Ye)}else lt(Re,oe,Z),le.add(Re)}),y.pop(),d=null,le},this.compileAsync=function(R,q,oe=null){const le=this.compile(R,q,oe);return new Promise(Z=>{function Re(){if(le.forEach(function(ze){fe.get(ze).currentProgram.isReady()&&le.delete(ze)}),le.size===0){Z(R);return}setTimeout(Re,10)}se.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let en=null;function Pn(R){en&&en(R)}function bs(){On.stop()}function tn(){On.start()}const On=new Wp;On.setAnimationLoop(Pn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(R){en=R,ue.setAnimationLoop(R),R===null?On.stop():On.start()},ue.addEventListener("sessionstart",bs),ue.addEventListener("sessionend",tn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(q),q=ue.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,q,L),d=Ge.get(R,y.length),d.init(q),y.push(d),Be.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ee.setFromProjectionMatrix(Be),ye=this.localClippingEnabled,de=Se.init(this.clippingPlanes,ye),p=Ae.get(R,b.length),p.init(),b.push(p),ue.enabled===!0&&ue.isPresenting===!0){const Re=_.xr.getDepthSensingMesh();Re!==null&&Xn(Re,q,-1/0,_.sortObjects)}Xn(R,q,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(ne,F),C=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,C&&z.addToRenderList(p,R),this.info.render.frame++,de===!0&&Se.beginShadows();const oe=d.state.shadowsArray;Le.render(oe,R,q),de===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=p.opaque,Z=p.transmissive;if(d.setupLights(),q.isArrayCamera){const Re=q.cameras;if(Z.length>0)for(let ze=0,Ye=Re.length;ze<Ye;ze++){const $e=Re[ze];me(le,Z,R,$e)}C&&z.render(R);for(let ze=0,Ye=Re.length;ze<Ye;ze++){const $e=Re[ze];B(p,R,$e,$e.viewport)}}else Z.length>0&&me(le,Z,R,q),C&&z.render(R),B(p,R,q);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(_,R,q),We.resetDefaultState(),x=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],de===!0&&Se.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Xn(R,q,oe,le){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){le&&Ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Be);const ze=ie.update(R),Ye=R.material;Ye.visible&&p.push(R,ze,Ye,oe,Ve.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const ze=ie.update(R),Ye=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ve.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ve.copy(ze.boundingSphere.center)),Ve.applyMatrix4(R.matrixWorld).applyMatrix4(Be)),Array.isArray(Ye)){const $e=ze.groups;for(let tt=0,st=$e.length;tt<st;tt++){const qe=$e[tt],ft=Ye[qe.materialIndex];ft&&ft.visible&&p.push(R,ze,ft,oe,Ve.z,qe)}}else Ye.visible&&p.push(R,ze,Ye,oe,Ve.z,null)}}const Re=R.children;for(let ze=0,Ye=Re.length;ze<Ye;ze++)Xn(Re[ze],q,oe,le)}function B(R,q,oe,le){const Z=R.opaque,Re=R.transmissive,ze=R.transparent;d.setupLightsView(oe),de===!0&&Se.setGlobalState(_.clippingPlanes,oe),le&&he.viewport(D.copy(le)),Z.length>0&&ge(Z,q,oe),Re.length>0&&ge(Re,q,oe),ze.length>0&&ge(ze,q,oe),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function me(R,q,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[le.id]===void 0&&(d.state.transmissionRenderTarget[le.id]=new qs(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?No:qi,minFilter:ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const Re=d.state.transmissionRenderTarget[le.id],ze=le.viewport||D;Re.setSize(ze.z,ze.w);const Ye=_.getRenderTarget();_.setRenderTarget(Re),_.getClearColor(X),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),C&&z.render(oe);const $e=_.toneMapping;_.toneMapping=vs;const tt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),d.setupLightsView(le),de===!0&&Se.setGlobalState(_.clippingPlanes,le),ge(R,oe,le),w.updateMultisampleRenderTarget(Re),w.updateRenderTargetMipmap(Re),se.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let qe=0,ft=q.length;qe<ft;qe++){const bt=q[qe],Et=bt.object,Mn=bt.geometry,dt=bt.material,Ke=bt.group;if(dt.side===yi&&Et.layers.test(le.layers)){const wi=dt.side;dt.side=Cn,dt.needsUpdate=!0,Ce(Et,oe,le,Mn,dt,Ke),dt.side=wi,dt.needsUpdate=!0,st=!0}}st===!0&&(w.updateMultisampleRenderTarget(Re),w.updateRenderTargetMipmap(Re))}_.setRenderTarget(Ye),_.setClearColor(X,j),tt!==void 0&&(le.viewport=tt),_.toneMapping=$e}function ge(R,q,oe){const le=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Re=R.length;Z<Re;Z++){const ze=R[Z],Ye=ze.object,$e=ze.geometry,tt=le===null?ze.material:le,st=ze.group;Ye.layers.test(oe.layers)&&Ce(Ye,q,oe,$e,tt,st)}}function Ce(R,q,oe,le,Z,Re){R.onBeforeRender(_,q,oe,le,Z,Re),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(_,q,oe,le,R,Re),Z.transparent===!0&&Z.side===yi&&Z.forceSinglePass===!1?(Z.side=Cn,Z.needsUpdate=!0,_.renderBufferDirect(oe,q,le,Z,R,Re),Z.side=$i,Z.needsUpdate=!0,_.renderBufferDirect(oe,q,le,Z,R,Re),Z.side=yi):_.renderBufferDirect(oe,q,le,Z,R,Re),R.onAfterRender(_,q,oe,le,Z,Re)}function De(R,q,oe){q.isScene!==!0&&(q=ce);const le=fe.get(R),Z=d.state.lights,Re=d.state.shadowsArray,ze=Z.state.version,Ye=Ee.getParameters(R,Z.state,Re,q,oe),$e=Ee.getProgramCacheKey(Ye);let tt=le.programs;le.environment=R.isMeshStandardMaterial?q.environment:null,le.fog=q.fog,le.envMap=(R.isMeshStandardMaterial?I:S).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",Qe),tt=new Map,le.programs=tt);let st=tt.get($e);if(st!==void 0){if(le.currentProgram===st&&le.lightsStateVersion===ze)return Xe(R,Ye),st}else Ye.uniforms=Ee.getUniforms(R),R.onBeforeCompile(Ye,_),st=Ee.acquireProgram(Ye,$e),tt.set($e,st),le.uniforms=Ye.uniforms;const qe=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Se.uniform),Xe(R,Ye),le.needsLights=Xt(R),le.lightsStateVersion=ze,le.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),le.currentProgram=st,le.uniformsList=null,st}function He(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Ra.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Xe(R,q){const oe=fe.get(R);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function et(R,q,oe,le,Z){q.isScene!==!0&&(q=ce),w.resetTextureUnits();const Re=q.fog,ze=le.isMeshStandardMaterial?q.environment:null,Ye=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Yr,$e=(le.isMeshStandardMaterial?I:S).get(le.envMap||ze),tt=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,st=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),qe=!!oe.morphAttributes.position,ft=!!oe.morphAttributes.normal,bt=!!oe.morphAttributes.color;let Et=vs;le.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=_.toneMapping);const Mn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,dt=Mn!==void 0?Mn.length:0,Ke=fe.get(le),wi=d.state.lights;if(de===!0&&(ye===!0||R!==M)){const Bn=R===M&&le.id===x;Se.setState(le,R,Bn)}let pt=!1;le.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==wi.state.version||Ke.outputColorSpace!==Ye||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==$e||le.fog===!0&&Ke.fog!==Re||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Se.numPlanes||Ke.numIntersection!==Se.numIntersection)||Ke.vertexAlphas!==tt||Ke.vertexTangents!==st||Ke.morphTargets!==qe||Ke.morphNormals!==ft||Ke.morphColors!==bt||Ke.toneMapping!==Et||Ke.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,Ke.__version=le.version);let Yn=Ke.currentProgram;pt===!0&&(Yn=De(le,q,Z));let nr=!1,Dn=!1,Kr=!1;const Tt=Yn.getUniforms(),ui=Ke.uniforms;if(he.useProgram(Yn.program)&&(nr=!0,Dn=!0,Kr=!0),le.id!==x&&(x=le.id,Dn=!0),nr||M!==R){he.buffers.depth.getReversed()?(ve.copy(R.projectionMatrix),o0(ve),a0(ve),Tt.setValue(A,"projectionMatrix",ve)):Tt.setValue(A,"projectionMatrix",R.projectionMatrix),Tt.setValue(A,"viewMatrix",R.matrixWorldInverse);const Qi=Tt.map.cameraPosition;Qi!==void 0&&Qi.setValue(A,ke.setFromMatrixPosition(R.matrixWorld)),re.logarithmicDepthBuffer&&Tt.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Tt.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Dn=!0,Kr=!0)}if(Z.isSkinnedMesh){Tt.setOptional(A,Z,"bindMatrix"),Tt.setOptional(A,Z,"bindMatrixInverse");const Bn=Z.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Tt.setValue(A,"boneTexture",Bn.boneTexture,w))}Z.isBatchedMesh&&(Tt.setOptional(A,Z,"batchingTexture"),Tt.setValue(A,"batchingTexture",Z._matricesTexture,w),Tt.setOptional(A,Z,"batchingIdTexture"),Tt.setValue(A,"batchingIdTexture",Z._indirectTexture,w),Tt.setOptional(A,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Tt.setValue(A,"batchingColorTexture",Z._colorsTexture,w));const jr=oe.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&W.update(Z,oe,Yn),(Dn||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Tt.setValue(A,"receiveShadow",Z.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(ui.envMap.value=$e,ui.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&q.environment!==null&&(ui.envMapIntensity.value=q.environmentIntensity),Dn&&(Tt.setValue(A,"toneMappingExposure",_.toneMappingExposure),Ke.needsLights&&Zt(ui,Kr),Re&&le.fog===!0&&Me.refreshFogUniforms(ui,Re),Me.refreshMaterialUniforms(ui,le,k,J,d.state.transmissionRenderTarget[R.id]),Ra.upload(A,He(Ke),ui,w)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Ra.upload(A,He(Ke),ui,w),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Tt.setValue(A,"center",Z.center),Tt.setValue(A,"modelViewMatrix",Z.modelViewMatrix),Tt.setValue(A,"normalMatrix",Z.normalMatrix),Tt.setValue(A,"modelMatrix",Z.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Bn=le.uniformsGroups;for(let Qi=0,es=Bn.length;Qi<es;Qi++){const Qu=Bn[Qi];V.update(Qu,Yn),V.bind(Qu,Yn)}}return Yn}function Zt(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Xt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,q,oe){fe.get(R.texture).__webglTexture=q,fe.get(R.depthTexture).__webglTexture=oe;const le=fe.get(R);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=oe===void 0,le.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const oe=fe.get(R);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,oe=0){L=R,T=q,E=oe;let le=!0,Z=null,Re=!1,ze=!1;if(R){const $e=fe.get(R);if($e.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(A.FRAMEBUFFER,null),le=!1;else if($e.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if($e.__hasExternalTextures)w.rebindTextures(R,fe.get(R.texture).__webglTexture,fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qe=R.depthTexture;if($e.__boundDepthTexture!==qe){if(qe!==null&&fe.has(qe)&&(R.width!==qe.image.width||R.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(ze=!0);const st=fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[q])?Z=st[q][oe]:Z=st[q],Re=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?Z=fe.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?Z=st[oe]:Z=st,D.copy(R.viewport),U.copy(R.scissor),O=R.scissorTest}else D.copy(H).multiplyScalar(k).floor(),U.copy(Y).multiplyScalar(k).floor(),O=ae;if(he.bindFramebuffer(A.FRAMEBUFFER,Z)&&le&&he.drawBuffers(R,Z),he.viewport(D),he.scissor(U),he.setScissorTest(O),Re){const $e=fe.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+q,$e.__webglTexture,oe)}else if(ze){const $e=fe.get(R.texture),tt=q||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,$e.__webglTexture,oe||0,tt)}x=-1},this.readRenderTargetPixels=function(R,q,oe,le,Z,Re,ze){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){he.bindFramebuffer(A.FRAMEBUFFER,Ye);try{const $e=R.texture,tt=$e.format,st=$e.type;if(!re.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-le&&oe>=0&&oe<=R.height-Z&&A.readPixels(q,oe,le,Z,Ie.convert(tt),Ie.convert(st),Re)}finally{const $e=L!==null?fe.get(L).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,q,oe,le,Z,Re,ze){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){const $e=R.texture,tt=$e.format,st=$e.type;if(!re.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-le&&oe>=0&&oe<=R.height-Z){he.bindFramebuffer(A.FRAMEBUFFER,Ye);const qe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,qe),A.bufferData(A.PIXEL_PACK_BUFFER,Re.byteLength,A.STREAM_READ),A.readPixels(q,oe,le,Z,Ie.convert(tt),Ie.convert(st),0);const ft=L!==null?fe.get(L).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,ft);const bt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await r0(A,bt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,qe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Re),A.deleteBuffer(qe),A.deleteSync(bt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,oe=0){R.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const le=Math.pow(2,-oe),Z=Math.floor(R.image.width*le),Re=Math.floor(R.image.height*le),ze=q!==null?q.x:0,Ye=q!==null?q.y:0;w.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,oe,0,0,ze,Ye,Z,Re),he.unbindTexture()},this.copyTextureToTexture=function(R,q,oe=null,le=null,Z=0){R.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,R=arguments[1],q=arguments[2],Z=arguments[3]||0,oe=null);let Re,ze,Ye,$e,tt,st,qe,ft,bt;const Et=R.isCompressedTexture?R.mipmaps[Z]:R.image;oe!==null?(Re=oe.max.x-oe.min.x,ze=oe.max.y-oe.min.y,Ye=oe.isBox3?oe.max.z-oe.min.z:1,$e=oe.min.x,tt=oe.min.y,st=oe.isBox3?oe.min.z:0):(Re=Et.width,ze=Et.height,Ye=Et.depth||1,$e=0,tt=0,st=0),le!==null?(qe=le.x,ft=le.y,bt=le.z):(qe=0,ft=0,bt=0);const Mn=Ie.convert(q.format),dt=Ie.convert(q.type);let Ke;q.isData3DTexture?(w.setTexture3D(q,0),Ke=A.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(w.setTexture2DArray(q,0),Ke=A.TEXTURE_2D_ARRAY):(w.setTexture2D(q,0),Ke=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,q.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,q.unpackAlignment);const wi=A.getParameter(A.UNPACK_ROW_LENGTH),pt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Yn=A.getParameter(A.UNPACK_SKIP_PIXELS),nr=A.getParameter(A.UNPACK_SKIP_ROWS),Dn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Et.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Et.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,$e),A.pixelStorei(A.UNPACK_SKIP_ROWS,tt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,st);const Kr=R.isDataArrayTexture||R.isData3DTexture,Tt=q.isDataArrayTexture||q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const ui=fe.get(R),jr=fe.get(q),Bn=fe.get(ui.__renderTarget),Qi=fe.get(jr.__renderTarget);he.bindFramebuffer(A.READ_FRAMEBUFFER,Bn.__webglFramebuffer),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let es=0;es<Ye;es++)Kr&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(R).__webglTexture,Z,st+es),R.isDepthTexture?(Tt&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(q).__webglTexture,Z,bt+es),A.blitFramebuffer($e,tt,Re,ze,qe,ft,Re,ze,A.DEPTH_BUFFER_BIT,A.NEAREST)):Tt?A.copyTexSubImage3D(Ke,Z,qe,ft,bt+es,$e,tt,Re,ze):A.copyTexSubImage2D(Ke,Z,qe,ft,bt+es,$e,tt,Re,ze);he.bindFramebuffer(A.READ_FRAMEBUFFER,null),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Tt?R.isDataTexture||R.isData3DTexture?A.texSubImage3D(Ke,Z,qe,ft,bt,Re,ze,Ye,Mn,dt,Et.data):q.isCompressedArrayTexture?A.compressedTexSubImage3D(Ke,Z,qe,ft,bt,Re,ze,Ye,Mn,Et.data):A.texSubImage3D(Ke,Z,qe,ft,bt,Re,ze,Ye,Mn,dt,Et):R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Z,qe,ft,Re,ze,Mn,dt,Et.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Z,qe,ft,Et.width,Et.height,Mn,Et.data):A.texSubImage2D(A.TEXTURE_2D,Z,qe,ft,Re,ze,Mn,dt,Et);A.pixelStorei(A.UNPACK_ROW_LENGTH,wi),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,pt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Yn),A.pixelStorei(A.UNPACK_SKIP_ROWS,nr),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Dn),Z===0&&q.generateMipmaps&&A.generateMipmap(Ke),he.unbindTexture()},this.copyTextureToTexture3D=function(R,q,oe=null,le=null,Z=0){return R.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,le=arguments[1]||null,R=arguments[2],q=arguments[3],Z=arguments[4]||0),lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,oe,le,Z)},this.initRenderTarget=function(R){fe.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),he.unbindTexture()},this.resetState=function(){T=0,E=0,L=null,he.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class er extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _s extends yn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const zh=new It;class gb{constructor(e,t,i=0,s=1/0){this.ray=new Vu(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(e,t=!0,i=[]){return uu(e,this,i,t),i.sort(Hh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)uu(e[s],this,i,t);return i.sort(Hh),i}}function Hh(n,e){return n.distance-e.distance}function uu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)uu(r[o],e,t,!0)}}class Vh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vb extends js{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);const Vr={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},$t=30,fu=12,_b=10,Pa=14,jp=5;function Va(){return`${fu}px system-ui, -apple-system, sans-serif`}function Zp(n,e,t){const i=String(e??"");if(!i)return[""];const s=i.split(/\s+/).filter(Boolean);if(s.length===0)return[""];const r=[];let o="";for(const a of s){const l=o?o+" "+a:a;!o||n.measureText(l).width<=t?o=l:(r.push(o),o=a)}return o&&r.push(o),r.length?r:[""]}function xb(n,e){return Math.max(e,n*Pa+jp*2)}function Xu(n,e){const t=new Array(e+1);t[0]=0;for(let i=0;i<e;i++)t[i+1]=t[i]+(n[i]??0);return t}function Ga(n,e){if(e<=0)return 0;let t=0,i=n.length-1;for(;t<i;){const s=t+i+1>>1;n[s]<=e?t=s:i=s-1}return t}const Jp=28;function yb(n,e){if(typeof e=="function")return e(n);const t=n.filter(s=>s!=null&&s!=="");if(e==="count")return t.length;const i=t.map(s=>Number(s)).filter(s=>!Number.isNaN(s));if(i.length===0)return null;switch(e){case"sum":return i.reduce((s,r)=>s+r,0);case"avg":return i.reduce((s,r)=>s+r,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Mb(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=Vr[e.theme]??Vr.none,{cols:a,rows:l,pinnedRows:c,rowHeight:u,scrollY:f,scrollX:h,glow:m}=e;t.clearRect(0,0,s,r),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const g=c.length*u,v=e.aggregateRow?Jp:0,p=r-$t-g-v;t.fillStyle=o.headerBg,t.fillRect(0,0,s,$t),t.textBaseline="middle",t.textAlign="left";let d=-h;for(let F=0;F<a.length;F++){const H=a[F];if(d+H.width<=0){d+=H.width;continue}if(d>=s)break;const Y=!!e.colFilters[H.colId],ae=e.sorts.findIndex(ye=>ye.colId===H.colId),ee=ae>=0,de=(H.colDef.headerName??H.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(d,0,H.width,$t),t.clip(),t.font=`bold ${_b}px system-ui, -apple-system, sans-serif`,t.fillStyle=Y?o.accent:o.textHeader,m?(t.shadowColor=o.textHeader,t.shadowBlur=10,t.fillText(de,d+8,$t/2),t.shadowBlur=4,t.fillText(de,d+8,$t/2),t.shadowBlur=0):t.fillText(de,d+8,$t/2),ee){const ye=t.measureText(de).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=o.accent;const ve=e.sorts[ae].dir==="asc"?"▲":"▼";t.fillText(e.sorts.length>1?`${ve}${ae+1}`:ve,d+8+ye+4,$t/2)}H.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=Y?o.accent:o.textHeader,t.globalAlpha=Y?1:.38,t.fillText("⌕",d+H.width-20,$t/2),t.globalAlpha=1),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(d+H.width-.5,0),t.lineTo(d+H.width-.5,$t),t.stroke(),d+=H.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,$t-.5),t.lineTo(s,$t-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,$t,s,p),t.clip();const b=e.rowHeights&&e.rowHeights.length===l.length?e.rowHeights:null,y=b?Xu(b,l.length):null,_=F=>y?y[F]:F*u,P=F=>b?b[F]:u,T=y?Ga(y,f):Math.max(0,Math.floor(f/u));let E;if(y)for(E=T;E<l.length&&_(E)<f+p;)E++;else E=Math.min(l.length,Math.ceil((f+p)/u));const L=e.selectionAnchorRow??e.selectedRow,x=e.selectionAnchorCol??e.selectedCol,M=e.selectedRow>=0&&L>=0?Math.min(e.selectedRow,L):-1,D=e.selectedRow>=0&&L>=0?Math.max(e.selectedRow,L):-1,U=e.selectedCol>=0&&x>=0?Math.min(e.selectedCol,x):-1,O=e.selectedCol>=0&&x>=0?Math.max(e.selectedCol,x):-1,X=D>M||O>U;let j=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,J=Number.POSITIVE_INFINITY,k=Number.NEGATIVE_INFINITY;const ne=(F,H,Y,ae)=>{m?(t.shadowColor=ae,t.shadowBlur=12,t.fillText(F,H,Y),t.shadowBlur=6,t.fillText(F,H,Y),t.shadowBlur=2,t.fillText(F,H,Y),t.shadowBlur=0):t.fillText(F,H,Y)};for(let F=T;F<E;F++){const H=l[F],Y=P(F),ae=$t+_(F)-f;F%2===1&&(t.fillStyle=o.rowAlt,t.fillRect(0,ae,s,Y));const ee=F>=M&&F<=D;F===e.hoveredRow&&!ee&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,ae,s,Y)),ee&&!X&&(t.fillStyle=Jl(o.accent,.1),t.fillRect(0,ae,s,Y)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,ae+Y-.5),t.lineTo(s,ae+Y-.5),t.stroke();let de=-h;for(let ye=0;ye<a.length;ye++){const ve=a[ye];if(de+ve.width<=0){de+=ve.width;continue}if(de>=s)break;const Be=ee&&ye>=U&&ye<=O;Be&&X&&(t.fillStyle=Jl(o.accent,.14),t.fillRect(de,ae,ve.width,Y)),Be&&(de<j&&(j=de),de+ve.width>$&&($=de+ve.width),ae<J&&(J=ae),ae+Y>k&&(k=ae+Y));const ke=e.getCellStyle(ve,H),Ve=ke.color??o.text,ce=ke.textAlign??"left",C=e.formatCell(ve,H);if(t.save(),t.beginPath(),t.rect(de+1,ae,ve.width-2,Y),t.clip(),t.font=Va(),t.fillStyle=Ve,t.textBaseline="middle",ve.colDef.wrap){t.textAlign="left";const N=Zp(t,C,Math.max(20,ve.width-16));let A=ae+jp+Pa/2;for(const pe of N){if(A-Pa/2>=ae+Y)break;ne(pe,de+8,A,Ve),A+=Pa}}else{const N=ce==="right"?de+ve.width-8:de+8;t.textAlign=ce==="right"?"right":"left",ne(C,N,ae+Y/2,Ve)}t.restore(),F===e.selectedRow&&ye===e.selectedCol&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(de+1.5,ae+1.5,ve.width-3,Y-3)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(de+ve.width-.5,ae),t.lineTo(de+ve.width-.5,ae+Y),t.stroke(),de+=ve.width}}if(X&&j<$&&J<k&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(j+.5,J+.5,$-j-1,k-J-1)),t.restore(),c.length>0){const F=r-g-v;t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,F-.5),t.lineTo(s,F-.5),t.stroke();for(let H=0;H<c.length;H++){const Y=c[H],ae=F+H*u;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,ae,s,u);let ee=-h;for(let de=0;de<a.length;de++){const ye=a[de];if(ee+ye.width<=0){ee+=ye.width;continue}if(ee>=s)break;const ve=e.getCellStyle(ye,Y),Be=ve.color??o.text,ke=ve.textAlign??"left",Ve=e.formatCell(ye,Y);t.save(),t.beginPath(),t.rect(ee+1,ae,ye.width-2,u),t.clip(),t.font=`bold ${fu}px system-ui, -apple-system, sans-serif`,t.fillStyle=Be,t.textBaseline="middle",ke==="right"?(t.textAlign="right",t.fillText(Ve,ee+ye.width-8,ae+u/2)):(t.textAlign="left",t.fillText(Ve,ee+8,ae+u/2)),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(ee+ye.width-.5,ae),t.lineTo(ee+ye.width-.5,ae+u),t.stroke(),ee+=ye.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,ae+u-.5),t.lineTo(s,ae+u-.5),t.stroke()}}if(e.aggregateRow){const F=r-v;t.fillStyle=Jl(o.accent,.1),t.fillRect(0,F,s,v),t.strokeStyle=o.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,F-.5),t.lineTo(s,F-.5),t.stroke();let H=-h;for(let Y=0;Y<a.length;Y++){const ae=a[Y];if(H+ae.width<=0){H+=ae.width;continue}if(H>=s)break;const de=e.getCellStyle(ae,e.aggregateRow).textAlign??"left",ye=e.aggregateRow[ae.colId]??"";t.save(),t.beginPath(),t.rect(H+1,F,ae.width-2,v),t.clip(),t.font=`bold ${fu}px system-ui, -apple-system, sans-serif`,t.fillStyle=o.accent,t.textBaseline="middle",m&&(t.shadowColor=o.accent,t.shadowBlur=8),de==="right"?(t.textAlign="right",t.fillText(ye,H+ae.width-8,F+v/2)):(t.textAlign="left",t.fillText(ye,H+8,F+v/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.beginPath(),t.moveTo(H+ae.width-.5,F),t.lineTo(H+ae.width-.5,F+v),t.stroke(),H+=ae.width}}t.restore()}function Jl(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${s},${e})`}const ua=190,Ql=34;function Sb(n,e,t){const i=Math.max(4,Math.min(e,n-ua-4)),s=$t+6,r=t?26:0;return{box:{x:i,y:s,w:ua,h:Ql},input:{x:i+9,y:s+5,w:ua-18-r,h:Ql-10},clear:t?{x:i+ua-28,y:s,w:28,h:Ql}:null}}const ec=(n,e,t,i=0)=>n>=t.x-i&&n<=t.x+t.w+i&&e>=t.y&&e<=t.y+t.h;function fa(n,e,t,i=1){return t.clear&&ec(n,e,t.clear,4*(i-1))?"clear":ec(n,e,t.input)?"input":ec(n,e,t.box)?"inside":"outside"}function bb(n,e,t,i,s){const{box:r,input:o,clear:a}=e;n.save(),n.fillStyle="rgba(8,12,22,0.94)",n.strokeStyle=s.accent,n.lineWidth=1,n.beginPath(),n.roundRect(r.x+.5,r.y+.5,r.w-1,r.h-1,4),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.05)",n.beginPath(),n.roundRect(o.x,o.y,o.w,o.h,3),n.fill(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.font=Va(),n.textBaseline="middle";const l=o.y+o.h/2+1,c=5;if(t){n.fillStyle=s.text;const u=n.measureText(t).width,f=u>o.w-2*c-2?o.x+o.w-c-2-u:o.x+c;n.fillText(t,f,l),i&&(n.fillStyle=s.accent,n.fillRect(Math.min(f+u+1,o.x+o.w-c),o.y+4,1.5,o.h-8))}else n.fillStyle=s.textHeader,n.fillText("Filter…",o.x+c,l),i&&(n.fillStyle=s.accent,n.fillRect(o.x+c,o.y+4,1.5,o.h-8));n.restore(),a&&(n.save(),n.font=Va(),n.textBaseline="middle",n.textAlign="center",n.fillStyle=s.textHeader,n.fillText("✕",a.x+a.w/2,a.y+a.h/2+1),n.restore())}function wb(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r;if(t<0){const c=.5*r,f=1/(1-2*(.5*(1+c)*c)),h=(i+i*(1+o)*o*-1)*f,m=(s+s*(1+o)*o*-1)*f;return[.5+h,.5+m]}const a=i*(1+o)*o,l=s*(1+o)*o;return[n+a,e+l]}function Qp(n,e,t,i,s,r=t,o=i){const a=n/t,l=1-e/i,[c,u]=wb(a,l,s);return c<0||c>1||u<0||u>1?[-1,-1]:[c*r,(1-u)*o]}function tc(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function Eb(n,e,t,i=1){return n>=e+t-24*i&&n<e+t}function Gh(n,e,t,i=1){const s=e+t;return n>=s-6*i&&n<=s+1*i}function Tb(n,e,t,i,s,r,o,a,l,c=!1,u){const f=n+l;let h=-1,m=0;for(let b=0;b<t.length;b++){if(f>=m&&f<m+t[b].width){h=b;break}m+=t[b].width}if(e<$t)return{area:"header",colIdx:h,rowIdx:-1};const g=c?Jp:0;if(g>0&&e>=o-g)return{area:"agg",colIdx:h,rowIdx:-1};const v=a*s;if(v>0&&e>=o-v-g){const b=Math.floor((e-(o-v-g))/s);return{area:"pinned",colIdx:h,rowIdx:b}}const p=e-$t+r,d=u&&u.length===i?Ga(Xu(u,i),p):Math.floor(p/s);return d>=0&&d<i?{area:"body",colIdx:h,rowIdx:d}:{area:"none",colIdx:-1,rowIdx:-1}}function Ks(n){return n/45*.55}function em(n){const e=Math.abs(Ks(n));if(e===0)return 1;if(n<0){const i=.5*e;return 1/(1-2*(.5*(1+i)*i))}const t=.25*e;return 1+2*(.5*(1+t)*t)}const Ab=500,tm=Ab/2,hu=1.6,nm=`
  uniform vec2  uMouseUV;    // mouse position in UV space; (-999,-999) = lens off
  uniform float uLensR;      // lens radius in aspect-corrected units (0 = disabled)
  uniform float uLensZoom;   // lens magnification factor (~1.6)
  uniform vec3  uLensTint;   // ring tint (phosphor accent)
  uniform float uAspect;     // canvas W / H — needed to draw a circular lens
`,im=`
  // Pull sample position toward mouse when within lens radius — compresses
  // the sampled region so it displays magnified. Distance is computed in
  // aspect-corrected space (x scaled by W/H) so the lens is circular in
  // pixels regardless of canvas proportions; the inverse aspect scale is
  // applied when reconstructing the sample UV.
  //
  // Magnification is FLAT across the inner ~88% of the lens, then tapers
  // through the outer rim — just enough taper to read as a real glass curl
  // at the edge without becoming a fish-eye orb. The inner-flat percentage
  // (smoothstep first arg) controls how much "magnifier" vs "convex" the
  // lens reads as: smaller number = more orb-like.
  vec2 applyLens(vec2 uv) {
    if (uLensR <= 0.0) return uv;
    vec2  d    = (uv - uMouseUV) * vec2(uAspect, 1.0);
    float dist = length(d);
    if (dist >= uLensR) return uv;
    float t    = dist / uLensR;
    float zoom = mix(uLensZoom, 1.0, smoothstep(0.88, 1.0, t));
    vec2  newD = (d / zoom) * vec2(1.0 / uAspect, 1.0);
    return uMouseUV + newD;
  }
`,sm=`
    // Lens ring — visually masks the magnification seam at the rim.
    if (uLensR > 0.0) {
      vec2  rd       = (vUv - uMouseUV) * vec2(uAspect, 1.0);
      float ringDist = abs(length(rd) - uLensR);
      float ring     = 1.0 - smoothstep(0.002, 0.012, ringDist);
      color.rgb     += uLensTint * ring * 0.32;
    }
`;function rm(){return{uMouseUV:{value:new at(-999,-999)},uLensR:{value:0},uLensZoom:{value:hu},uLensTint:{value:new _t(7268263)},uAspect:{value:1}}}const Kt={x:-999,y:-999};function om(n,e,t,i,s){const r=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=r&&s>0?tm/s:0,n.uniforms.uAspect.value=s>0?i/s:1}function ko(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const Cb=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Rb=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Pb=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${nm}

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    vec2  cc   = uv - 0.5;
    float as   = abs(uStrength);
    float dist = dot(cc, cc) * as;
    vec2  m    = cc + cc * (1.0 + dist) * dist * sign(uStrength);
    if (uStrength < 0.0) {
      float cd = 0.5 * as;
      float cp = 0.5 * (1.0 + cd) * cd;
      m /= (1.0 - 2.0 * cp);
    }
    return vec2(0.5) + m;
  }

  ${im}

  void main() {
    vec2 lensUV = applyLens(vUv);
    vec2 uv     = barrel(lensUV);
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      return;
    }
    vec4 color = texture2D(uTex, uv);
    if (uScanlines > 0.5 && mod(gl_FragCoord.y, 2.0) < 1.0) color.rgb *= 0.87;
    if (uVignette > 0.5) {
      vec2  vc   = uv - 0.5;
      float vign = 1.0 - dot(vc, vc) * 0.6;
      color.rgb  *= clamp(vign, 0.0, 1.0);
    }
    ${sm}
    gl_FragColor = color;
  }
`;function Db(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r,a=(1+o)*o*Math.sign(t);let l=i+i*a,c=s+s*a;if(t<0){const u=.5*r,f=.5*(1+u)*u;l/=1-2*f,c/=1-2*f}return{x:.5+l,y:.5+c}}function Lb(n,e,t,i,s,r){if(!i||t.x===Kt.x||r<=0)return{x:n,y:e};const o=s/r,a=tm/r,l=(n-t.x)*o,c=e-t.y,u=Math.hypot(l,c);if(u>=a)return{x:n,y:e};const f=u/a,h=Math.min(Math.max((f-.88)/(1-.88),0),1),m=h*h*(3-2*h),g=hu+(1-hu)*m;return{x:t.x+l/g/o,y:t.y+c/g}}class Ji{constructor(e){Fe(this,"canvas");Fe(this,"material");Fe(this,"mode");Fe(this,"dpr",1);Fe(this,"logicalW",0);Fe(this,"logicalH",0);Fe(this,"screenW",0);Fe(this,"screenH",0);Fe(this,"texture");Fe(this,"painter");Fe(this,"maxDpr");Fe(this,"look",{curvature:0,scanlines:!0,vignette:!0,magnify:!1});Fe(this,"mouse",{x:Kt.x,y:Kt.y});Fe(this,"anisotropy",1);this.painter=e.paint,this.mode=e.mode??"screen",this.maxDpr=e.maxDpr??2,this.canvas=document.createElement("canvas"),this.texture=this.makeTexture(),this.material=new oi({uniforms:{uTex:{value:this.texture},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...rm()},vertexShader:this.mode==="world"?Rb:Cb,fragmentShader:Pb,transparent:!0,side:this.mode==="world"?yi:$i})}setAnisotropy(e){this.anisotropy=Math.max(1,e),this.texture.anisotropy=this.anisotropy,this.texture.needsUpdate=!0}makeTexture(){const e=new _s(this.canvas);return e.magFilter=jt,this.mode==="world"?(e.generateMipmaps=!0,e.minFilter=ps,e.anisotropy=this.anisotropy):e.minFilter=jt,e}resize(e,t,i=window.devicePixelRatio||1){if(!e||!t)return!1;const s=Math.min(i,this.maxDpr),r=Math.round(e*s),o=Math.round(t*s);return this.canvas.width===r&&this.canvas.height===o&&this.dpr===s?!1:(this.dpr=s,this.logicalW=e,this.logicalH=t,this.canvas.width=r,this.canvas.height=o,this.texture.dispose(),this.texture=this.makeTexture(),this.material.uniforms.uTex.value=this.texture,!0)}setLook(e){this.look={...this.look,...e}}setScreenSize(e,t){this.screenW=e,this.screenH=t}setLens(e){this.mouse.x=e?e.x:Kt.x,this.mouse.y=e?e.y:Kt.y}syncUniforms(){const e=this.material.uniforms;e.uStrength.value=Ks(this.look.curvature),e.uScanlines.value=this.look.scanlines?1:0,e.uVignette.value=this.look.vignette?1:0,om(this.material,this.look.magnify,this.mouse,this.screenW||this.logicalW||this.canvas.width,this.screenH||this.logicalH||this.canvas.height)}paint(e){this.canvas.width&&(this.painter(this.canvas,{dpr:this.dpr,glow:e}),this.texture.needsUpdate=!0)}paintOnly(e){this.canvas.width&&this.painter(this.canvas,{dpr:this.dpr,glow:e})}contentPoint(e,t){const i=Lb(e,t,this.mouse,this.look.magnify,this.screenW||this.logicalW,this.screenH||this.logicalH),s=Db(i.x,i.y,Ks(this.look.curvature));return s.x<0||s.x>1||s.y<0||s.y>1?null:{x:s.x*this.logicalW,y:(1-s.y)*this.logicalH}}dispose(){this.texture.dispose(),this.material.dispose()}}const Ib=600;function am(n){const e=Qa(!0);return e.run(()=>Ub(n,e))}function Ub(n,e){var On,Xn;const{emit:t,host:i}=n,s=be(((On=n.rowData)==null?void 0:On.call(n))??[]),r=be(((Xn=n.pinnedBottomRowData)==null?void 0:Xn.call(n))??[]),o=be(""),a=be([]),l=Tr({}),c=Tr({}),u=Tr(new Set),f=be(0),h=be(0),m=be(0),g=be(0),v=be(0),p=be(0),d=be(0),b=be(-1),y=be(null),_=be(null),P=be(null),T=be(""),E=be(0);let L=null;const x=be(!0);let M=null;je(P,B=>{var me;M&&(clearInterval(M),M=null),B?(x.value=!0,M=setInterval(()=>{x.value=!x.value,i.redraw()},530),dn(()=>{var ge;return(ge=i.focusFilterInput)==null?void 0:ge.call(i)})):(L=null,(me=i.blurFilterInput)==null||me.call(i)),i.redraw()});function D(B){return B.colId??B.field??(B.headerName?B.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const U=nt(()=>{var me;const B=((me=n.defaultColDef)==null?void 0:me.call(n))??{};return n.columnDefs().filter(ge=>!u.has(D(ge))).map(ge=>{const Ce=D(ge),De={...B,...ge};return{colId:Ce,colDef:De,width:c[Ce]??De.width??100}})}),O=nt(()=>{const B=h.value;if(!B)return U.value;const me=U.value.reduce((De,He)=>De+He.width,0);if(!me||me>=B)return U.value;const ge=B/me;let Ce=0;return U.value.map((De,He)=>{const et=He===U.value.length-1?B-Ce:Math.max(8,Math.round(De.width*ge));return Ce+=et,{...De,width:et}})}),X=nt(()=>{const B=O.value.reduce((me,ge)=>me+ge.width,0);return Math.max(0,B-h.value)});function j(B,me){if(me.colDef.valueGetter)return me.colDef.valueGetter({data:B,colDef:me.colDef});if(me.colDef.field)return B[me.colDef.field]}function $(B,me){const ge=j(me,B);return B.colDef.valueFormatter?B.colDef.valueFormatter({value:ge,data:me,colDef:B.colDef})??"":B.colDef.cellRenderer?(B.colDef.cellRenderer({value:ge,data:me,colDef:B.colDef})??"").replace(/<[^>]+>/g,""):ge==null?"":String(ge)}function J(B,me){return B.colDef.cellStyle?typeof B.colDef.cellStyle=="function"?B.colDef.cellStyle({value:j(me,B),data:me,colDef:B.colDef})??{}:B.colDef.cellStyle:{}}function k(){return n.columnDefs().map((B,me)=>({d:B,i:me})).filter(({d:B})=>B.sort).sort((B,me)=>(B.d.sortIndex??B.i)-(me.d.sortIndex??me.i)).map(({d:B})=>({colId:D(B),dir:B.sort}))}const ne=nt(()=>{f.value;let B=s.value;const me=o.value.trim().toLowerCase();me&&(B=B.filter(Ce=>U.value.some(De=>String(j(Ce,De)??"").toLowerCase().includes(me))));for(const[Ce,De]of Object.entries(l)){if(!De)continue;const He=U.value.find(Xe=>Xe.colId===Ce);if(He)if(De.startsWith("__eq__")){const Xe=De.slice(6).toLowerCase();B=B.filter(et=>String(j(et,He)??"").toLowerCase()===Xe)}else{const Xe=De.toLowerCase();B=B.filter(et=>String(j(et,He)??"").toLowerCase().includes(Xe))}}const ge=a.value.map(({colId:Ce,dir:De})=>({col:U.value.find(He=>He.colId===Ce),dir:De})).filter(Ce=>!!Ce.col);return ge.length&&(B=[...B].sort((Ce,De)=>{for(const{col:He,dir:Xe}of ge){const et=j(Ce,He),Zt=j(De,He);let Xt=0;if(He.colDef.comparator?Xt=He.colDef.comparator(et,Zt):typeof et=="number"&&typeof Zt=="number"?Xt=et-Zt:Xt=String(et??"").localeCompare(String(Zt??""),void 0,{numeric:!0}),Xt)return Xe==="asc"?Xt:-Xt}return 0})),B});let F=null;function H(){if(typeof document>"u")return null;F||(F=document.createElement("canvas"));const B=F.getContext("2d");return B&&(B.font=Va()),B}const Y=nt(()=>O.value.some(B=>B.colDef.wrap)),ae=nt(()=>{if(!Y.value)return null;const B=H();if(!B)return null;const me=O.value.filter(Ce=>Ce.colDef.wrap),ge=n.rowHeight();return ne.value.map(Ce=>{let De=1;for(const He of me){const Xe=Zp(B,$(He,Ce),Math.max(20,He.width-16));Xe.length>De&&(De=Xe.length)}return xb(De,ge)})}),ee=nt(()=>ae.value?Xu(ae.value,ne.value.length):null),de=nt(()=>ee.value?ee.value[ne.value.length]:ne.value.length*n.rowHeight()),ye=nt(()=>{const B=r.value.length*n.rowHeight();return Math.max(0,m.value-$t-B)}),ve=nt(()=>Math.max(0,de.value-ye.value)),Be=nt(()=>Math.max(1,Math.floor(ye.value/n.rowHeight()))),ke=nt(()=>{const B=ne.value.length;if(B===0)return 0;const me=ee.value?Ga(ee.value,p.value):Math.floor(p.value/n.rowHeight());return Math.min(B-1,me)}),Ve=nt(()=>{const B=ne.value.length;return B===0?0:ee.value?Math.min(B-1,Ga(ee.value,p.value+ye.value-1)):Math.min(B-1,ke.value+Be.value-1)}),ce=nt(()=>{const B=U.value.filter(De=>De.colDef.aggFunc!=null);if(B.length===0)return null;const me=ne.value,ge={};for(const De of B){const He=me.map(et=>j(et,De)),Xe=yb(He,De.colDef.aggFunc);if(Xe==null){ge[De.colId]="";continue}ge[De.colId]=De.colDef.aggValueFormatter?De.colDef.aggValueFormatter(Xe):String(Xe)}const Ce=B[0].colId;return ge[Ce]===""&&(ge[Ce]="Σ"),ge});je(ne,()=>{p.value=0,y.value=null}),je(X,()=>{d.value=Math.min(d.value,X.value)}),je(ve,()=>{p.value=Math.min(p.value,ve.value)}),je([ne,()=>r.value,O,p,b,y],()=>dn(()=>i.redraw())),je(y,B=>{if(!B)return;const me=ne.value[B.row],ge=O.value[B.col];me&&ge&&t("cell-selected",{data:me,row:B.row,col:B.col,colId:ge.colId})});function C(B,me,ge,Ce){g.value=ge,v.value=Ce,h.value=B,m.value=me,d.value=Math.max(0,Math.min(X.value,d.value)),p.value=Math.max(0,Math.min(ve.value,p.value))}function N(B){const me=ee.value,ge=me?me[B]:B*n.rowHeight(),Ce=me?me[B+1]:ge+n.rowHeight();ge<p.value?p.value=ge:Ce>p.value+ye.value&&(p.value=Math.min(ve.value,Ce-ye.value))}function A(B){var De;if(!h.value)return;let me=0;for(let He=0;He<B;He++)me+=O.value[He].width;const ge=((De=O.value[B])==null?void 0:De.width)??0,Ce=me-d.value;Ce<0?d.value=Math.max(0,me):Ce+ge>h.value&&(d.value=Math.min(X.value,me+ge-h.value))}function pe(){p.value=Math.max(0,p.value-ye.value),i.redraw()}function se(){p.value=Math.min(ve.value,p.value+ye.value),i.redraw()}let re=!1,he="",_e=0,fe=0,w=1,S=!1,I=!1,G=0,Q=0,ie=0,Ee=0,Me=!1;function Ae(B,me,ge=1){var Ce;re=!0,he=B,_e=me,w=ge,fe=((Ce=O.value.find(De=>De.colId===B))==null?void 0:Ce.width)??100,S=!1}function Ge(B,me){I=!0,Me=!1,G=B,Q=me,ie=d.value,Ee=p.value}function Se(B,me){const ge=G-B,Ce=Q-me;(Math.abs(ge)>4||Math.abs(Ce)>4)&&(Me=!0),d.value=Math.max(0,Math.min(X.value,ie+ge)),p.value=Math.max(0,Math.min(ve.value,Ee+Ce)),i.redraw()}function Le(){I&&(Me&&(S=!0),I=!1)}function z(B,me){if(I){Se(B,me);return}if(!re)return;const ge=h.value,Ce=Math.max(30,fe+(B-_e)*w),De=U.value.filter(Xe=>Xe.colId!==he).reduce((Xe,et)=>Xe+et.width,0),He=ge-Ce;He>10&&(c[he]=Math.max(10,Math.round(Ce*De/He))),i.redraw()}function W(){Le(),re&&(re=!1,S=!0,t("column-resized"))}function K(B,me){return Tb(B,me,O.value,ne.value.length,n.rowHeight(),p.value,m.value,r.value.length,d.value,ce.value!==null,ae.value??void 0)}let Te=0;function Ie(B,me,ge){P.value=null;const Ce=Date.now();if(B!==0){Te=Ce,d.value=Math.max(0,Math.min(X.value,d.value+B)),i.redraw();return}if(ge&&me!==0){Te=Ce,d.value=Math.max(0,Math.min(X.value,d.value+me)),i.redraw();return}Ce-Te<Ib||(p.value=Math.max(0,Math.min(ve.value,p.value+me)),i.redraw())}function We(B){if(B.cx<0)return b.value=-1,i.redraw(),null;if(P.value&&L){const Ce=fa(B.cx,B.cy,L,B.hitScale);if(Ce!=="outside")return b.value=-1,i.redraw(),Ce==="clear"?"pointer":"text"}const me=K(B.cx,B.cy);b.value=me.area==="body"?me.rowIdx:-1;let ge;if(me.area==="header"&&me.colIdx>=0){const Ce=O.value[me.colIdx],De=tc(me.colIdx,O.value),He=B.cx+d.value;ge=Ce&&Gh(He,De,Ce.width,B.hitScale)?"col-resize":"pointer"}else me.area==="body"?ge="pointer":ge="default";return i.redraw(),ge}function V(){b.value=-1,i.redraw()}function we(B,me,ge){if(B.cx<0||P.value&&L&&fa(B.cx,B.cy,L,B.hitScale)!=="outside")return;if(B.cy>=$t){Ge(me,ge);return}const Ce=B.cx+d.value;for(let De=0;De<O.value.length;De++){const He=O.value[De],Xe=tc(De,O.value);if(He.colDef.resizable!==!1&&Gh(Ce,Xe,He.width,B.hitScale)){Ae(He.colId,me,B.hitScale);return}}}function ue(B,me){var De,He,Xe;const ge={stopPropagation:!1};if(S)return S=!1,ge;if(re)return ge;if(B.cx<0)return P.value=null,ge;if(P.value&&L){const et=fa(B.cx,B.cy,L,B.hitScale);if(et==="clear")return ut(),ge;if(et!=="outside")return(De=i.focusFilterInput)==null||De.call(i),ge;P.value=null}const Ce=K(B.cx,B.cy);if(Ce.area==="header"&&Ce.colIdx>=0){const et=O.value[Ce.colIdx],Zt=tc(Ce.colIdx,O.value),Xt=B.cx+d.value;if(et.colDef.filter&&Eb(Xt,Zt,et.width,B.hitScale))ge.stopPropagation=!0,P.value===et.colId?P.value=null:(P.value=et.colId,T.value=(He=l[et.colId])!=null&&He.startsWith("__eq__")?l[et.colId].slice(6):l[et.colId]??"",E.value=Math.max(0,Zt-d.value));else if(et.colDef.sortable!==!1){P.value=null;const R=a.value.find(oe=>oe.colId===et.colId),q=R?R.dir==="asc"?"desc":null:"asc";me.shiftKey?a.value=R?q?a.value.map(oe=>oe.colId===et.colId?{colId:oe.colId,dir:q}:oe):a.value.filter(oe=>oe.colId!==et.colId):[...a.value,{colId:et.colId,dir:"asc"}]:a.value=q?[{colId:et.colId,dir:q}]:[],t("sort-changed")}return ge}if(P.value=null,Ce.area==="body"&&Ce.rowIdx>=0&&Ce.colIdx>=0){const et=Ce.rowIdx;me.shiftKey&&y.value?(_.value||(_.value={...y.value}),y.value={row:et,col:Ce.colIdx}):(y.value={row:et,col:Ce.colIdx},_.value={row:et,col:Ce.colIdx}),(Xe=i.focusCanvas)==null||Xe.call(i);const Zt=ne.value[et],Xt=O.value[Ce.colIdx];Zt&&Xt&&(t("row-clicked",{data:Zt,event:me}),t("cell-selected",{data:Zt,row:et,col:Ce.colIdx,colId:Xt.colId}))}return ge}function xe(B){P.value&&(B&&L&&B.cx>=0&&fa(B.cx,B.cy,L,B.hitScale)!=="outside"||(P.value=null))}function Ue(B){const ge=O.value.length-1,Ce=ne.value.length-1;if(!y.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(B.key)&&(B.preventDefault(),y.value={row:ke.value,col:0},_.value={row:ke.value,col:0});return}let{row:De,col:He}=y.value;const Xe=(et,Zt,Xt=!1)=>{De=Math.max(0,Math.min(Ce,et)),He=Math.max(0,Math.min(ge,Zt)),y.value={row:De,col:He},Xt||(_.value={row:De,col:He}),N(De),A(He)};switch(B.key){case"ArrowDown":B.preventDefault(),Xe(De+1,He,B.shiftKey);break;case"ArrowUp":B.preventDefault(),Xe(De-1,He,B.shiftKey);break;case"ArrowRight":B.preventDefault(),B.shiftKey?Xe(De,He+1,!0):He<ge?Xe(De,He+1):Xe(De+1,0);break;case"ArrowLeft":B.preventDefault(),B.shiftKey?Xe(De,He-1,!0):He>0?Xe(De,He-1):Xe(De-1,ge);break;case"Tab":B.preventDefault(),B.shiftKey?He>0?Xe(De,He-1):Xe(De-1,ge):He<ge?Xe(De,He+1):Xe(De+1,0);break;case"Enter":B.preventDefault(),B.shiftKey?Xe(De-1,He):Xe(De+1,He);break;case"Home":B.preventDefault(),B.ctrlKey||B.metaKey?Xe(0,0,B.shiftKey):Xe(De,0,B.shiftKey);break;case"End":B.preventDefault(),B.ctrlKey||B.metaKey?Xe(Ce,ge,B.shiftKey):Xe(De,ge,B.shiftKey);break;case"PageDown":B.preventDefault(),Xe(Math.min(Ce,De+Be.value),He,B.shiftKey);break;case"PageUp":B.preventDefault(),Xe(Math.max(0,De-Be.value),He,B.shiftKey);break;case"Escape":y.value=null,_.value=null;break;case"c":case"C":(B.ctrlKey||B.metaKey)&&(B.preventDefault(),Ne());break}}function Ne(){var Xt;if(!y.value)return;const B=O.value,me=ne.value,ge=_.value??y.value,Ce=Math.min(ge.row,y.value.row),De=Math.max(ge.row,y.value.row),He=Math.min(ge.col,y.value.col),Xe=Math.max(ge.col,y.value.col),et=[];for(let R=Ce;R<=De;R++){const q=me[R];if(!q)continue;const oe=[];for(let le=He;le<=Xe;le++){const Z=B[le];Z&&oe.push($(Z,q).replace(/[\t\r\n]+/g," "))}et.push(oe.join("	"))}const Zt=et.join(`
`);(Xt=navigator.clipboard)==null||Xt.writeText(Zt).catch(()=>{})}function Qe(B){T.value=B,B?l[P.value]=B:delete l[P.value],t("filter-changed")}function ut(){P.value&&delete l[P.value],T.value="",P.value=null,t("filter-changed")}function At(){P.value=null}function lt(B,me){if(!P.value||!B.width)return;const ge=B.getContext("2d");if(!ge)return;ge.setTransform(me,0,0,me,0,0),L=Sb(B.width/me,E.value,!!T.value);const Ce=Vr[n.theme()]??Vr.none;bb(ge,L,T.value,x.value,Ce)}function en(B,{dpr:me,glow:ge}){var Ce,De,He,Xe;Mb(B,{cols:O.value,rows:ne.value,pinnedRows:r.value,rowHeight:n.rowHeight(),rowHeights:ae.value??void 0,scrollY:p.value,scrollX:d.value,theme:n.theme(),glow:ge,sorts:a.value,colFilters:l,hoveredRow:b.value,selectedRow:((Ce=y.value)==null?void 0:Ce.row)??-1,selectedCol:((De=y.value)==null?void 0:De.col)??-1,selectionAnchorRow:((He=_.value)==null?void 0:He.row)??-1,selectionAnchorCol:((Xe=_.value)==null?void 0:Xe.col)??-1,formatCell:$,getCellStyle:J,aggregateRow:ce.value,dpr:me}),lt(B,me)}const Pn={setGridOption(B,me){B==="rowData"?s.value=me:B==="pinnedBottomRowData"?r.value=me:B==="quickFilterText"&&(o.value=me)},getColumnState(){return n.columnDefs().map(B=>{var ge;const me=D(B);return{colId:me,hide:u.has(me),sort:((ge=a.value.find(Ce=>Ce.colId===me))==null?void 0:ge.dir)??null,sortIndex:a.value.some(Ce=>Ce.colId===me)?a.value.findIndex(Ce=>Ce.colId===me):null,width:c[me]??B.width}})},applyColumnState({state:B}){const me=B.filter(ge=>ge.sort).sort((ge,Ce)=>(ge.sortIndex??0)-(Ce.sortIndex??0));me.length&&(a.value=me.map(ge=>({colId:ge.colId,dir:ge.sort})));for(const ge of B)ge.hide===!0&&u.add(ge.colId),ge.hide===!1&&u.delete(ge.colId),ge.width&&(c[ge.colId]=ge.width)},setFilterModel(B){for(const me of Object.keys(l))delete l[me];if(B)for(const[me,ge]of Object.entries(B))(ge==null?void 0:ge.type)==="equals"?l[me]=`__eq__${ge.filter}`:ge!=null&&ge.filter&&(l[me]=ge.filter)},getFilterModel(){const B={};for(const[me,ge]of Object.entries(l))ge&&(B[me]=ge.startsWith("__eq__")?{type:"equals",filter:ge.slice(6)}:{type:"contains",filter:ge});return B},async setColumnFilterModel(B,me){me?me.type==="equals"?l[B]=`__eq__${me.filter}`:l[B]=me.filter??"":delete l[B]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:B="export.csv"}={}){const me=U.value,ge=me.map(Xe=>Xe.colDef.headerName??Xe.colId).join(","),Ce=ne.value.map(Xe=>me.map(et=>`"${String($(et,Xe)).replace(/"/g,'""')}"`).join(",")),De=new Blob([[ge,...Ce].join(`
`)],{type:"text/csv"}),He=URL.createObjectURL(De);Object.assign(document.createElement("a"),{href:He,download:B}).click(),URL.revokeObjectURL(He)},resize(){var B;(B=i.resize)==null||B.call(i)},getSortModel(){return a.value.map(B=>({colId:B.colId,sort:B.dir}))},setSortModel(B){a.value=B.map(me=>({colId:me.colId,dir:me.sort}))},getScrollY(){return p.value},setScrollY(B){dn(()=>{p.value=Math.max(0,Math.min(ve.value,B))})},resetColumnState(){u.clear();for(const B of n.columnDefs())B.hide&&u.add(D(B));a.value=k();for(const B of Object.keys(c))delete c[B];for(const B of Object.keys(l))delete l[B];o.value="",p.value=0,y.value=null,P.value=null}};function bs(){var B,me;for(const ge of n.columnDefs())ge.hide&&u.add(D(ge));a.value.length||(a.value=k()),s.value=((B=n.rowData)==null?void 0:B.call(n))??[],r.value=((me=n.pinnedBottomRowData)==null?void 0:me.call(n))??[]}function tn(){M&&(clearInterval(M),M=null),e.stop()}return{scrollX:d,scrollY:p,maxScrollX:X,maxScrollY:ve,filteredRows:ne,displayCols:O,resolvedCols:U,aggregateRow:ce,rowHeights:ae,firstVisibleRow:ke,lastVisibleRow:Ve,visibleRowCount:Be,selectedCell:y,selectionAnchor:_,hoveredRow:b,activeFilter:P,filterPopupValue:T,caretOn:x,canvasW:h,canvasH:m,screenW:g,screenH:v,sortState:a,colFilters:l,formatCell:$,getCellValue:j,hit:K,get resizing(){return re},get panning(){return I},setViewport:C,pageUp:pe,pageDown:se,ensureRowVisible:N,ensureColVisible:A,wheel:Ie,hover:We,leave:V,pointerDown:we,click:ue,docClick:xe,keyDown:Ue,panStart:Ge,panMove:Se,panEnd:Le,globalMove:z,globalUp:W,setFilterText:Qe,clearFilter:ut,closeFilter:At,paint:en,api:Pn,init:bs,dispose:tn}}const Fb=["value"],Nb=["disabled"],Ob=["disabled"],Bb=28,kb=li({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},bendField:{type:Boolean,default:!0}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,s=be(null),r=am({columnDefs:()=>t.columnDefs,defaultColDef:()=>t.defaultColDef,rowData:()=>t.rowData,pinnedBottomRowData:()=>t.pinnedBottomRowData,rowHeight:()=>t.rowHeight,theme:()=>t.theme,emit:i,host:{redraw:()=>j(),resize:()=>X(),focusCanvas:()=>{var I;return(I=_.value)==null?void 0:I.focus()},focusFilterInput:()=>{var I;return(I=s.value)==null?void 0:I.focus()},blurFilterInput:()=>{var I;return(I=s.value)==null?void 0:I.blur()}}}),{scrollY:o,maxScrollY:a,filteredRows:l,displayCols:c,selectedCell:u,firstVisibleRow:f,lastVisibleRow:h,activeFilter:m,filterPopupValue:g,formatCell:v,pageUp:p,pageDown:d,clearFilter:b}=r,y=be(null),_=be(null),P=Hi("cathodeResetTick",be(0));je(P,()=>se());let T=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),E=null,L=!1;function x(){if(E){try{E.forceContextLoss()}catch{}try{E.dispose()}catch{}E=null}}let M,D;const U=new Ji({paint:(I,{dpr:G,glow:Q})=>r.paint(I,{dpr:G,glow:Q})});function O(){if(!(!_.value||!y.value)){try{E=new Qs({canvas:_.value,antialias:!1,alpha:!0})}catch{L=!0}if(!L&&!E.getContext()&&(E.dispose(),E=null,L=!0),L){X();return}E.setPixelRatio(1),E.setClearColor(0,0),M=new er,D=new Js(-1,1,1,-1,0,1),M.add(new Ht(new un(2,2),U.material)),X()}}function X(){if(!y.value||!E&&!L)return;const I=y.value.clientWidth,G=y.value.clientHeight-(t.pagination?Bb:0);if(!I||!G)return;const Q=t.bendField?Math.round(I*em(t.curvature)):I;U.resize(Q,G),U.setScreenSize(I,G),T=U.dpr,r.setViewport(Q,G,I,G),E?(E.setPixelRatio(T),E.setSize(I,G)):_.value&&(_.value.width=Math.round(I*T),_.value.height=Math.round(G*T),_.value.style.width=I+"px",_.value.style.height=G+"px"),j()}function j(){if(!U.canvas.width)return;if(L){if(!_.value)return;U.paintOnly(!1);const G=U.canvas,Q=_.value.getContext("2d");Q&&Q.drawImage(G,0,0,G.width,G.height,0,0,_.value.width,_.value.height);return}if(!E)return;const I=t.theme==="paper";U.setLook({curvature:t.curvature,scanlines:t.scanlines&&!I,vignette:!I,magnify:t.magnify}),U.syncUniforms(),U.paint(t.glow),E.render(M,D)}function $(I,G){if(!_.value)return[-1,-1];const Q=_.value.getBoundingClientRect(),ie=I-Q.left,Ee=G-Q.top,Me=Q.width,Ae=Q.height,Ge=Ks(t.curvature),[Se,Le]=Qp(ie,Ee,Me,Ae,Ge,U.canvas.width/T||Me,U.canvas.height/T||Ae);return Se<0?[-1,-1]:[Se,Le]}function J(I){return $(I.clientX,I.clientY)}function k(I){if(!_.value)return 1;const[G]=$(I.clientX-4,I.clientY),[Q]=$(I.clientX+4,I.clientY);return G<0||Q<0?1:Math.max(1,Math.abs(Q-G)/8)}function ne(I){const[G,Q]=J(I);return{cx:G,cy:Q,hitScale:k(I)}}function F(I){r.wheel(I.deltaX,I.deltaY,I.shiftKey)}function H(I){if(r.resizing)return;t.magnify&&_.value&&U.setLens(ko(I,_.value));const G=r.hover(ne(I));G&&_.value&&(_.value.style.cursor=G)}function Y(){U.setLens(null),r.leave()}function ae(I){r.pointerDown(ne(I),I.clientX,I.clientY)}function ee(I){r.click(ne(I),I).stopPropagation&&I.stopPropagation()}function de(I){m.value&&r.docClick(I.target===_.value?ne(I):null)}function ye(I){r.globalMove(I.clientX,I.clientY)}function ve(){r.globalUp()}function Be(I){I.touches.length===1&&r.panStart(I.touches[0].clientX,I.touches[0].clientY)}function ke(I){!r.panning||I.touches.length!==1||(I.preventDefault(),r.panMove(I.touches[0].clientX,I.touches[0].clientY))}function Ve(){r.panEnd()}function ce(I){r.keyDown(I)}function C(I){r.setFilterText(I.target.value)}je(()=>t.theme,()=>j()),je(()=>[t.curvature,t.bendField],()=>dn(X)),je(()=>t.scanlines,()=>j()),je(()=>t.glow,()=>j()),je(()=>t.magnify,I=>{I||U.setLens(null),j()});let N=null,A=null,pe=0;function se(){cancelAnimationFrame(pe),pe=requestAnimationFrame(X)}function re(I){I.preventDefault()}function he(){E==null||E.dispose(),E=null,L=!1,O()}Rn(()=>{r.init(),document.addEventListener("click",de),document.addEventListener("mousemove",ye),document.addEventListener("mouseup",ve),dn(()=>{var I;O(),_.value&&(_.value.addEventListener("webglcontextlost",re),_.value.addEventListener("webglcontextrestored",he)),y.value&&(N=new ResizeObserver(()=>X()),N.observe(y.value),A=new IntersectionObserver(G=>{G.some(Q=>Q.isIntersecting)&&se()}),A.observe(y.value)),window.addEventListener("resize",se),(I=window.visualViewport)==null||I.addEventListener("resize",se),i("grid-ready",{api:r.api})})}),Wn(()=>{var I,G,Q;document.removeEventListener("click",de),document.removeEventListener("mousemove",ye),document.removeEventListener("mouseup",ve),(I=_.value)==null||I.removeEventListener("webglcontextlost",re),(G=_.value)==null||G.removeEventListener("webglcontextrestored",he),N==null||N.disconnect(),A==null||A.disconnect(),window.removeEventListener("resize",se),(Q=window.visualViewport)==null||Q.removeEventListener("resize",se),cancelAnimationFrame(pe),x(),U.dispose(),r.dispose()});const _e=nt(()=>Vr[t.theme]??Vr.none),fe=nt(()=>({background:_e.value.headerBg,borderTop:`1px solid ${_e.value.border}`,color:_e.value.text})),w=nt(()=>({background:_e.value.bg})),S=nt(()=>_e.value.accent);return(I,G)=>{var Q,ie;return Je(),gt("div",{ref_key:"wrapEl",ref:y,class:"cathode-wrap",style:Vn(w.value)},[Pe("canvas",{ref_key:"canvasEl",ref:_,class:"cathode-canvas",tabindex:"0",onWheel:zs(F,["prevent"]),onMousemove:H,onMouseleave:Y,onMousedown:ae,onClick:ee,onKeydown:ce,onTouchstartPassive:Be,onTouchmove:ke,onTouchend:Ve,onTouchcancel:Ve},null,544),xt(m)?(Je(),gt("input",{key:0,ref_key:"filterGhostEl",ref:s,class:"cathode-filter-ghost","aria-label":"Filter column",value:xt(g),autofocus:"",onInput:C,onKeydown:[G[0]||(G[0]=kf((...Ee)=>xt(b)&&xt(b)(...Ee),["escape"])),G[1]||(G[1]=kf(Ee=>xt(r).closeFilter(),["enter"]))]},null,40,Fb)):qt("",!0),n.pagination?(Je(),gt("div",{key:1,class:"cathode-pagination",style:Vn(fe.value)},[Pe("button",{disabled:xt(o)<=0,onClick:G[2]||(G[2]=Ee=>xt(p)())},"◀",8,Nb),Pe("span",null,vn((xt(f)+1).toLocaleString())+"–"+vn(Math.min(xt(l).length,xt(h)+1).toLocaleString())+" / "+vn(xt(l).length.toLocaleString()),1),Pe("button",{disabled:xt(o)>=xt(a),onClick:G[3]||(G[3]=Ee=>xt(d)())},"▶",8,Ob),Pe("span",{class:"cathode-page-info",style:Vn({color:S.value})},vn(xt(l).length.toLocaleString())+" rows ",5),xt(u)?(Je(),gt("span",{key:0,class:"cathode-sel-readout",style:Vn({color:S.value})},vn(((Q=xt(c)[xt(u).col])==null?void 0:Q.colDef.headerName)??((ie=xt(c)[xt(u).col])==null?void 0:ie.colId))+" : "+vn(xt(v)(xt(c)[xt(u).col],xt(l)[xt(u).row])),5)):qt("",!0)],4)):qt("",!0)],4)}}}),ci=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Wh=ci(kb,[["__scopeId","data-v-3f5baab2"]]),Wa={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function zb(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const Hb=12,Jt=18,yo=10,Ys=6,Yu=`${Hb}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function Vb(n,e,t){if(t<=0||!e)return[e];const i=[];for(const s of e.split(`
`)){if(!s){i.push("");continue}if(n.measureText(s).width<=t){i.push(s);continue}const r=s.split(/(\s+)/);let o="";for(const a of r){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function lm(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${s}`}return n}function Gb(n,e){return Math.ceil(n.measureText(e).width)+12}function Wb(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:s,wordWrap:r}=n,o=n.formatTs??lm;t.font=Yu;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=s&&c.ts!=null?o(c.ts):"",h=r?Vb(t,c.text,i):c.text.split(`
`);for(let m=0;m<h.length;m++)a.push({entryIdx:l,text:h[m],level:u,timestamp:m===0?f:"",isFirstFrag:m===0,widthPx:t.measureText(h[m]).width})}return a}function Xb(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr??1,s=n.width/i,r=n.height/i,o=Wa[e.theme]??Wa.none;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip(),t.font=Yu,t.textBaseline="middle";const a=e.visualLines,l=yo-e.scrollX,c=(e.showTimestamps?yo+e.timestampWidth:yo)-e.scrollX,u=Math.max(0,Math.floor((e.scrollY-Ys)/Jt)),f=Math.min(a.length,Math.ceil((e.scrollY+r-Ys)/Jt)+1);for(let h=u;h<f;h++){const m=a[h],g=Ys+h*Jt-e.scrollY+Jt/2;if(m.entryIdx%2===1&&m.isFirstFrag){t.fillStyle=o.rowAlt;let p=1;for(;h+p<f&&a[h+p].entryIdx===m.entryIdx;)p++;t.fillRect(0,g-Jt/2,s,Jt*p)}e.selectionStart>=0&&h>=e.selectionStart&&h<=e.selectionEnd&&(t.fillStyle=o.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,g-Jt/2,s,Jt)),h===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,g-Jt/2,s,Jt)),e.showTimestamps&&m.timestamp&&(t.fillStyle=o.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=o.timestamp),t.fillText(m.timestamp,l,g),t.shadowBlur=0);const v=zb(o,m.level);t.fillStyle=v,t.textAlign="left",e.glow?(t.shadowColor=v,t.shadowBlur=14,t.fillText(m.text,c,g),t.shadowBlur=7,t.fillText(m.text,c,g),t.shadowBlur=3,t.fillText(m.text,c,g),t.shadowBlur=0):t.fillText(m.text,c,g)}t.restore()}function Xh(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-Ys)/Jt);return i<0||i>=t?-1:i}function Yb(n){return Ys*2+n*Jt}function cm(n){const e=Qa();return e.run(()=>{const t=()=>{var ce;return((ce=n.showTimestamps)==null?void 0:ce.call(n))??!0},i=()=>{var ce;return((ce=n.wordWrap)==null?void 0:ce.call(n))??!0},s=be(0),r=be(0),o=be(0),a=be(0),l=be(-1),c=be(!0),u=be(-1),f=be(-1),h=document.createElement("canvas"),m=nt(()=>{var N;const ce=n.entries()??[],C=((N=n.maxLines)==null?void 0:N.call(n))??0;return C>0&&ce.length>C?ce.slice(ce.length-C):ce}),g=nt(()=>{var N;if(!t())return"";const ce=((N=n.formatTs)==null?void 0:N.call(n))??lm;let C="00:00:00";for(const A of m.value){if(A.ts==null)continue;const pe=ce(A.ts);pe.length>C.length&&(C=pe)}return C}),v=be(0),p=be([]);function d(){var N;const ce=h.getContext("2d");if(!ce)return;ce.font=Yu;const C=t()?Gb(ce,g.value):0;v.value=C,p.value=Wb({entries:m.value,ctx:ce,textMaxWidth:Math.max(1,s.value-yo*2-C),showTimestamps:t(),formatTs:(N=n.formatTs)==null?void 0:N.call(n),wordWrap:i()})}const b=nt(()=>Yb(p.value.length)),y=nt(()=>Math.max(0,b.value-r.value)),_=nt(()=>{let ce=0;for(const C of p.value)C.widthPx>ce&&(ce=C.widthPx);return yo*2+v.value+ce}),P=nt(()=>Math.max(0,_.value-s.value));je(y,()=>{c.value?o.value=y.value:o.value=Math.min(o.value,y.value)}),je(P,()=>{a.value=Math.min(a.value,P.value)}),je([m,s,t,i,g],()=>{d(),dn(()=>n.host.redraw())},{deep:!1}),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw()),je(l,()=>n.host.redraw()),je([u,f],()=>n.host.redraw());function T(ce,C){s.value=ce,r.value=C,d(),c.value&&(o.value=Math.max(0,b.value-r.value))}function E(ce){o.value=Math.max(0,Math.min(y.value,ce)),c.value=o.value>=y.value-4}function L(ce){a.value=Math.max(0,Math.min(P.value,ce))}function x(ce,C,N){N?L(a.value+C):Math.abs(ce)>Math.abs(C)?L(a.value+ce):E(o.value+C)}function M(){c.value=!0,o.value=y.value}function D(ce){E(Ys+ce*Jt)}let U=!1,O=!1,X=0,j=0,$=0,J=0;function k(ce,C){U=!0,O=!1,X=ce,j=C,$=a.value,J=o.value}function ne(ce,C){if(!U)return!1;const N=X-ce,A=j-C;return(Math.abs(N)>4||Math.abs(A)>4)&&(O=!0),L($+N),E(J+A),!0}function F(){U&&(U=!1,O&&(O=!1))}const H=()=>U;function Y(ce){l.value=ce<0?-1:Xh(ce,o.value,p.value.length)}function ae(){l.value=-1}function ee(ce,C){if(O){O=!1;return}const N=ce<0?-1:Xh(ce,o.value,p.value.length);if(N<0){u.value=-1,f.value=-1;return}C&&u.value>=0||(u.value=N),f.value=N}function de(ce,C){const N=p.value.length;if(N===0)return;const A=f.value<0?0:f.value,pe=Math.max(0,Math.min(N-1,A+ce));f.value=pe,(!C||u.value<0)&&(u.value=pe),l.value=pe;const se=Ys+pe*Jt,re=se+Jt;se<o.value?E(se):re>o.value+r.value&&E(re-r.value)}function ye(){const ce=Math.min(u.value,f.value),C=Math.max(u.value,f.value);if(ce<0)return"";const N=p.value,A=new Set,pe=[];for(let se=ce;se<=C&&se<N.length;se++){const re=N[se];if(A.has(re.entryIdx))continue;A.add(re.entryIdx);let he="";for(let _e=0;_e<N.length;_e++)N[_e].entryIdx===re.entryIdx&&(he+=(he&&!N[_e].isFirstFrag?" ":"")+N[_e].text);pe.push(re.timestamp?`${re.timestamp}  ${he}`:he)}return pe.join(`
`)}async function ve(){const ce=ye();if(ce)try{await navigator.clipboard.writeText(ce)}catch{const C=document.createElement("textarea");C.value=ce,C.style.position="fixed",C.style.opacity="0",document.body.appendChild(C),C.select();try{document.execCommand("copy")}catch{}document.body.removeChild(C)}}function Be(ce){if((ce.metaKey||ce.ctrlKey)&&(ce.key==="c"||ce.key==="C")){u.value>=0&&(ce.preventDefault(),ve());return}if((ce.metaKey||ce.ctrlKey)&&(ce.key==="a"||ce.key==="A")){ce.preventDefault(),u.value=0,f.value=p.value.length-1;return}switch(ce.key){case"ArrowDown":ce.preventDefault(),de(1,ce.shiftKey);break;case"ArrowUp":ce.preventDefault(),de(-1,ce.shiftKey);break;case"ArrowRight":ce.preventDefault(),L(a.value+Jt*2);break;case"ArrowLeft":ce.preventDefault(),L(a.value-Jt*2);break;case"PageDown":ce.preventDefault(),E(o.value+r.value);break;case"PageUp":ce.preventDefault(),E(o.value-r.value);break;case"Home":ce.preventDefault(),E(0),L(0);break;case"End":ce.preventDefault(),E(y.value);break;case"Escape":u.value=-1,f.value=-1;break}}function ke(ce,{dpr:C,glow:N}){Xb(ce,{visualLines:p.value,scrollY:o.value,scrollX:a.value,theme:n.theme(),glow:N,showTimestamps:t(),timestampWidth:v.value,hoveredLine:l.value,selectionStart:Math.min(u.value,f.value),selectionEnd:Math.max(u.value,f.value),dpr:C})}function Ve(){e.stop()}return{canvasW:s,canvasH:r,scrollY:o,scrollX:a,hoveredLine:l,stuckToBottom:c,selectionAnchor:u,selectionActive:f,visualLines:p,tsWidth:v,contentH:b,maxScrollY:y,maxScrollX:P,setViewport:T,setScroll:E,setScrollX:L,wheel:x,scrollToBottom:M,scrollToLine:D,panStart:k,panMove:ne,panEnd:F,panning:H,hover:Y,leave:ae,click:ee,keyDown:Be,moveSelection:de,selectionAsText:ye,copySelection:ve,paint:ke,dispose:Ve}})}const $b=li({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=be(null),s=be(null),r={...Kt},o=cm({entries:()=>t.entries,theme:()=>t.theme,showTimestamps:()=>t.showTimestamps,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap,maxLines:()=>t.maxLines,host:{redraw:()=>p()}});let a=null,l=!1;function c(){if(a){try{a.forceContextLoss()}catch{}try{a.dispose()}catch{}a=null}}let u,f,h=1;const m=new Ji({paint:(Y,{dpr:ae,glow:ee})=>o.paint(Y,{dpr:ae,glow:ee})});function g(){if(!(!s.value||!i.value)){try{a=new Qs({canvas:s.value,antialias:!1,alpha:!0})}catch{l=!0}if(!l&&!a.getContext()&&(a.dispose(),a=null,l=!0),l){v();return}a.setPixelRatio(1),a.setClearColor(0,0),u=new er,f=new Js(-1,1,1,-1,0,1),u.add(new Ht(new un(2,2),m.material)),v()}}function v(){if(!i.value||!a&&!l)return;const Y=i.value.clientWidth,ae=i.value.clientHeight;!Y||!ae||m.resize(Y,ae)&&(m.setScreenSize(Y,ae),h=m.dpr,o.setViewport(Y,ae),a?(a.setPixelRatio(h),a.setSize(Y,ae)):s.value&&(s.value.width=Math.round(Y*h),s.value.height=Math.round(ae*h),s.value.style.width=Y+"px",s.value.style.height=ae+"px"),p())}function p(){if(!m.canvas.width)return;if(l){if(!s.value)return;m.paintOnly(!1);const ae=s.value.getContext("2d");ae&&ae.drawImage(m.canvas,0,0,m.canvas.width,m.canvas.height,0,0,s.value.width,s.value.height);return}if(!a)return;const Y=t.theme==="paper";m.setLook({curvature:t.curvature,scanlines:t.scanlines&&!Y,vignette:!Y,magnify:t.magnify}),m.setLens(t.magnify?r:null),m.syncUniforms(),m.paint(t.glow),a.render(u,f)}je(()=>t.theme,()=>p()),je(()=>t.curvature,()=>p()),je(()=>t.scanlines,()=>p()),je(()=>t.glow,()=>p()),je(()=>t.magnify,Y=>{Y||(r.x=Kt.x,r.y=Kt.y),p()});function d(Y){if(!s.value)return[-1,-1];const ae=s.value.getBoundingClientRect();return[Y.clientX-ae.left,Y.clientY-ae.top]}function b(Y){o.wheel(Y.deltaX,Y.deltaY,Y.shiftKey)}function y(Y){o.panStart(Y.clientX,Y.clientY),i.value&&i.value.focus()}function _(Y){o.panMove(Y.clientX,Y.clientY)}function P(){o.panEnd()}function T(Y){if(Y.touches.length!==1)return;const ae=Y.touches[0];o.panStart(ae.clientX,ae.clientY),i.value&&i.value.focus()}function E(Y){if(!o.panning()||Y.touches.length!==1)return;Y.preventDefault();const ae=Y.touches[0];o.panMove(ae.clientX,ae.clientY)}function L(){o.panEnd()}function x(Y){const[,ae]=d(Y);o.click(ae,Y.shiftKey)}function M(Y){o.keyDown(Y)}function D(Y){if(t.magnify&&s.value){const ee=ko(Y,s.value);r.x=ee.x,r.y=ee.y,p()}const[,ae]=d(Y);o.hover(ae)}function U(){o.leave(),r.x=Kt.x,r.y=Kt.y,p()}e({scrollToBottom(){o.scrollToBottom()},scrollToLine(Y){o.scrollToLine(Y)}});let O=null,X=null,j=0;const $=Hi("cathodeResetTick",be(0));je($,()=>J());function J(){cancelAnimationFrame(j),j=requestAnimationFrame(v)}function k(Y){Y.preventDefault()}function ne(){a==null||a.dispose(),a=null,l=!1,g()}Rn(()=>{document.addEventListener("mousemove",_),document.addEventListener("mouseup",P),dn(()=>{var Y;g(),s.value&&(s.value.addEventListener("webglcontextlost",k),s.value.addEventListener("webglcontextrestored",ne)),i.value&&(O=new ResizeObserver(()=>v()),O.observe(i.value),X=new IntersectionObserver(ae=>{ae.some(ee=>ee.isIntersecting)&&J()}),X.observe(i.value)),window.addEventListener("resize",J),(Y=window.visualViewport)==null||Y.addEventListener("resize",J),o.scrollY.value=o.maxScrollY.value})}),Wn(()=>{var Y,ae,ee;document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",P),(Y=s.value)==null||Y.removeEventListener("webglcontextlost",k),(ae=s.value)==null||ae.removeEventListener("webglcontextrestored",ne),O==null||O.disconnect(),X==null||X.disconnect(),window.removeEventListener("resize",J),(ee=window.visualViewport)==null||ee.removeEventListener("resize",J),cancelAnimationFrame(j),c(),o.dispose(),m.dispose()});const F=nt(()=>Wa[t.theme]??Wa.none),H=nt(()=>({background:F.value.bg}));return(Y,ae)=>(Je(),gt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:Vn(H.value),tabindex:"0",onKeydown:M},[Pe("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-log-canvas",onWheel:zs(b,["prevent"]),onMousemove:D,onMouseleave:U,onMousedown:y,onClick:x,onTouchstartPassive:T,onTouchmove:E,onTouchend:L,onTouchcancel:L},null,544)],36))}}),du=ci($b,[["__scopeId","data-v-328a73e4"]]),Gr={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},um=.18,ro=8,$u=22,qb=4,ai=8,xs=56,qu=42,ji="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Kb="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",nc=4,jb=1,Zb=1;function Jb(n,e,t,i=0,s=!1){const r=s?qu:xs,o=Math.max(0,e-ai-r),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function Qb(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,s=-1/0,r=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>s&&(s=c.high),c.volume>r&&(r=c.volume))}if(!isFinite(i)||!isFinite(s)||i===s){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,r)}}const a=(s-i)*.04;return{min:i-a,max:s+a,maxVol:Math.max(1,r)}}function ew(n,e,t=!1){const i=t?qb:$u,s=Math.max(1,n-ro-i-nc),r=Math.max(0,Math.round(s*e)),o=s-r;return{priceY0:ro,priceY1:ro+o,volumeY0:ro+o+nc,volumeY1:ro+o+nc+r}}function Qn(n,e,t,i){const s=e.max-e.min;return s<=0?(t+i)/2:t+(1-(n-e.min)/s)*(i-t)}function Ms(n,e,t){return ai+(n-e+.5)*t}function ms(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function Ku(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),s=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${s}:${r}`}function tw(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),s=t/i;let r;return s<1.5?r=1:s<3?r=2:s<7?r=5:r=10,r*i}function fm(n,e){var g,v,p,d,b;const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=Gr[e.theme]??Gr.none,a=e.colors?{...o,...e.colors}:o,l=!!e.compact;if(t.clearRect(0,0,s,r),t.fillStyle=a.bg,t.fillRect(0,0,s,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const c=Jb(e.candles.length,s,e.slotW,e.scrollX,l),u=Qb(e.candles,c.firstIdx,c.count),f=ew(r,e.showVolume?e.volumeFraction:0,l),h=Math.max(jb,Math.floor(e.slotW*.7)),m=Math.min(e.candles.length,c.firstIdx+c.count);for(let y=c.firstIdx;y<m;y++){const _=e.candles[y];if(!_)continue;const P=Ms(y,c.firstIdx,e.slotW),T=Qn(_.open,u,f.priceY0,f.priceY1),E=Qn(_.close,u,f.priceY0,f.priceY1),L=Qn(_.high,u,f.priceY0,f.priceY1),x=Qn(_.low,u,f.priceY0,f.priceY1),M=_.close>=_.open,D=M?a.wickBull:a.wickBear,U=M?a.candleBull:a.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=U),t.strokeStyle=D,t.lineWidth=Zb,t.beginPath(),t.moveTo(Math.round(P)+.5,L),t.lineTo(Math.round(P)+.5,x),t.stroke(),t.fillStyle=U;const O=Math.min(T,E),X=Math.max(1,Math.abs(E-T)),j=Math.round(P-h/2),$=Math.round(O),J=Math.round(X);if(t.fillRect(j,$,h,J),e.glow&&(t.shadowBlur=4,t.fillRect(j,$,h,J)),t.shadowBlur=0,e.showVolume&&u.maxVol>0){const k=Math.round(_.volume/u.maxVol*(f.volumeY1-f.volumeY0));k>0&&(t.fillStyle=M?a.volumeBull:a.volumeBear,t.fillRect(Math.round(P-h/2),f.volumeY1-k,h,k))}}if((g=e.overlays)!=null&&g.length){const y={above:0,below:0},_=e.overlays.filter(T=>T.kind!=="hline"&&!!T.label).length,P=_?14+14*_+12:8;for(const T of e.overlays)T.kind==="hline"?iw(t,T,s,u,f,a,l,y,P):nw(t,T,c,u,f,e.slotW)}(v=e.markers)!=null&&v.length&&fw(t,a,e.markers,e.candles,c,u,f,e.slotW),hw(t,a,u,f,s,l),l||(dw(t,a,e.candles,c,e.slotW,r),cw(t,a,e.candles,s,r)),(p=e.overlays)!=null&&p.length&&rw(t,a,e.overlays,f),e.hover&&(pw(t,a,e.candles,c,u,f,e.slotW,e.hover,s),ow(t,a,e.candles,c,e.slotW,e.hover,f,((d=e.overlays)==null?void 0:d.length)??0),(b=e.markers)!=null&&b.length&&lw(t,a,e.markers,e.candles,c,u,f,e.slotW,e.hover,s)),t.restore()}function nw(n,e,t,i,s,r){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(ai,s.priceY0,999999,s.priceY1-s.priceY0),n.clip(),e.kind==="line")ha(n,e.data,t.firstIdx,o,r,i,s,e.color,e.lineWidth??1,e.dashed===!0);else if(e.kind==="band"){const l=hm(e.color,e.fillAlpha??.08);sw(n,e.upper,e.lower,t.firstIdx,o,r,i,s,l),ha(n,e.upper,t.firstIdx,o,r,i,s,e.color,1,!1),ha(n,e.lower,t.firstIdx,o,r,i,s,e.color,1,!1),(a=e.middle)!=null&&a.length&&ha(n,e.middle,t.firstIdx,o,r,i,s,e.color,1,e.middleDashed!==!1)}n.restore()}function iw(n,e,t,i,s,r,o,a={above:0,below:0},l=8){const c=Qn(e.price,i,s.priceY0,s.priceY1),u=c<s.priceY0-.5,f=c>s.priceY1+.5,h=u||f,m=h?u?a.above++:a.below++:0,g=h?u?s.priceY0+l+m*20:s.priceY1-8-m*20:c,v=o?qu:xs,p=Math.round(g)+.5;n.save(),h||(n.strokeStyle=e.color,n.lineWidth=e.lineWidth??1,n.setLineDash(e.dashed===!1?[]:[4,3]),n.beginPath(),n.moveTo(ai,p),n.lineTo(t-v,p),n.stroke(),n.setLineDash([]));let d=e.label??ms(e.price);if(h&&d!==""&&(d=(u?"↑ ":"↓ ")+d),d!==""){n.font=ji,n.textBaseline="middle",n.textAlign="left";const b=n.measureText(d).width,y=4,_=2,P=ai+2;n.fillStyle=e.color,h&&(n.globalAlpha=.85),n.fillRect(P,g-7-_,b+y*2,14+_*2),n.globalAlpha=1,n.fillStyle=r.bg&&!r.bg.startsWith("rgba(0,0,0,0)")?r.bg:"#0d1520",n.fillText(d,P+y,g)}n.restore()}function ha(n,e,t,i,s,r,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const h=e[f];if(typeof h!="number"||!isFinite(h)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const m=Ms(f,t,s),g=Qn(h,r,o.priceY0,o.priceY1);u?n.lineTo(m,g):(n.moveTo(m,g),u=!0)}u&&n.stroke(),n.setLineDash([])}function sw(n,e,t,i,s,r,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=s;f++){const h=e[f],m=t[f],g=f<s&&typeof h=="number"&&typeof m=="number"&&isFinite(h)&&isFinite(m);if(g&&!c&&(u=f,c=!0),!g&&c||f===s&&c){const v=g?f+1:f;n.beginPath();for(let p=u;p<v;p++){const d=Ms(p,i,r),b=Qn(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(d,b):n.lineTo(d,b)}for(let p=v-1;p>=u;p--){const d=Ms(p,i,r),b=Qn(t[p],o,a.priceY0,a.priceY1);n.lineTo(d,b)}n.closePath(),n.fill(),c=!1}}}function hm(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),s=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${i},${s},${r},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function rw(n,e,t,i){const s=t.filter(v=>v.kind!=="hline"&&!!v.label);if(!s.length)return;n.save(),n.font=ji;const r=8,o=5,a=12,l=6,c=14;let u=0;for(const v of s){const p=n.measureText(v.label).width;p>u&&(u=p)}const f=r*2+a+l+u,h=o*2+c*s.length,m=ai+4,g=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(m,g,f,h),n.textBaseline="middle",n.textAlign="left";for(let v=0;v<s.length;v++){const p=s[v],d=g+o+c*(v+.5),b=m+r;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(b,d),n.lineTo(b+a,d),n.stroke(),n.setLineDash([])):p.kind==="band"&&(n.fillStyle=hm(p.color,p.fillAlpha??.2),n.fillRect(b,d-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(b+.5,d-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,b+a+l,d)}n.restore()}function ow(n,e,t,i,s,r,o,a){const l=Math.floor((r.x-ai)/s),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,h=u.open!==0?f/u.open*100:0,m=f>=0?"+":"",g=[["O",ms(u.open),void 0],["H",ms(u.high),void 0],["L",ms(u.low),void 0],["C",ms(u.close),void 0],["V",aw(u.volume),void 0],["",`${m}${h.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=ji,n.textBaseline="middle",n.textAlign="left";const v=8,p=4,d=14;let b=v;for(const[T,E]of g){const L=T?`${T} ${E}`:E,x=n.measureText(L).width+12;b+=x}b+=v-12;const y=o.priceY0+4+(a>0?p*2+14*a+4:0),_=ai+4;n.fillStyle=e.panelBg,n.fillRect(_,y,b,d+p*2);let P=_+v;for(let T=0;T<g.length;T++){const[E,L,x]=g[T];n.fillStyle=e.text,E&&(n.globalAlpha=.6,n.fillText(E+" ",P,y+p+d/2),n.globalAlpha=1,P+=n.measureText(E+" ").width),x&&(n.fillStyle=x),n.fillText(L,P,y+p+d/2),P+=n.measureText(L).width+12}n.restore()}function aw(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function lw(n,e,t,i,s,r,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),h=Math.min(i.length,s.firstIdx+s.count),m=9;let g=null;for(const L of t){let x=0,M=i.length-1,D=-1;for(;x<=M;){const X=x+M>>1,j=i[X].start-L.timestamp;if(Math.abs(j)<=f){D=X;break}j<0?x=X+1:M=X-1}if(D<0||D<s.firstIdx||D>=h)continue;const U=Ms(D,s.firstIdx,a),O=Qn(L.price,r,o.priceY0,o.priceY1);if(Math.abs(l.x-U)<=m&&Math.abs(l.y-O)<=m){g={m:L,x:U,y:O};break}}if(!g)return;const v=Ku(g.m.timestamp),p=[`${g.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${v}`,`@ ${ms(g.m.price)}`];g.m.label&&p.push(g.m.label),n.save(),n.font=ji,n.textBaseline="top",n.textAlign="left";const d=6,b=14;let y=0;for(const L of p){const x=n.measureText(L).width;x>y&&(y=x)}const _=y+d*2,P=p.length*b+d*2;let T=g.x+12;T+_>c-xs&&(T=g.x-12-_);let E=g.y-P/2;E<o.priceY0&&(E=o.priceY0),E+P>o.priceY1&&(E=o.priceY1-P),n.fillStyle=e.panelBgSolid,n.strokeStyle=g.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(T,E,_,P),n.strokeRect(T+.5,E+.5,_-1,P-1);for(let L=0;L<p.length;L++){const x=p[L];n.fillStyle=L===0?g.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(x,T+d,E+d+L*b)}n.restore()}function cw(n,e,t,i,s){if(t.length<2)return;const r=t[1].start-t[0].start,o=uw(r);if(!o)return;n.save(),n.font=ji,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-xs-a,f=s-$u+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function uw(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,s=24*i,r=7*s;return n>=r&&n%r===0?n/r+"W":n>=s&&n%s===0?n/s+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function fw(n,e,t,i,s,r,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,s.firstIdx+s.count),f=m=>{let g=0,v=i.length-1;for(;g<=v;){const p=g+v>>1,d=i[p].start-m;if(Math.abs(d)<=c)return p;d<0?g=p+1:v=p-1}return-1},h=7;for(const m of t){const g=f(m.timestamp);if(g<0||g<s.firstIdx||g>=u)continue;const v=Ms(g,s.firstIdx,a),p=Qn(m.price,r,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const d=m.color??(m.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=d,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),m.kind==="entry"?(n.moveTo(v,p-h),n.lineTo(v-h,p+h-1),n.lineTo(v+h,p+h-1)):(n.moveTo(v,p+h),n.lineTo(v-h,p-h+1),n.lineTo(v+h,p-h+1)),n.closePath(),n.fill(),n.stroke()}}function hw(n,e,t,i,s,r=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=r?Math.max(2,Math.min(4,Math.round(a/36))):6,c=tw(o,l),u=Math.ceil(t.min/c)*c,f=r?qu:xs;n.font=r?Kb:ji,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let h=u;h<=t.max;h+=c){const m=Qn(h,t,i.priceY0,i.priceY1);m<i.priceY0||m>i.priceY1||(n.beginPath(),n.moveTo(ai,Math.round(m)+.5),n.lineTo(s-f,Math.round(m)+.5),n.stroke(),n.fillText(ms(h),s-f+3,m))}n.globalAlpha=1}function dw(n,e,t,i,s,r){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=ji,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=Ms(c,i.firstIdx,s);n.fillText(Ku(u.start),f,r-$u+4)}n.globalAlpha=1}function pw(n,e,t,i,s,r,o,a,l){const c=Math.floor((a.x-ai)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const h=Ms(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(h)+.5,r.priceY0),n.lineTo(Math.round(h)+.5,r.volumeY1||r.priceY1),n.stroke();const m=Math.max(r.priceY0,Math.min(r.priceY1,a.y));n.beginPath(),n.moveTo(ai,Math.round(m)+.5),n.lineTo(l-xs,Math.round(m)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const g=s.max-s.min;if(g>0){const d=s.max-(m-r.priceY0)/(r.priceY1-r.priceY0)*g,b=ms(d);n.font=ji,n.textBaseline="middle",n.textAlign="left";const y=n.measureText(b).width,_=4,P=2;n.fillStyle=e.accent,n.fillRect(l-xs+2,m-7-P,y+_*2,14+P*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(b,l-xs+2+_,m)}n.font=ji,n.textBaseline="top",n.textAlign="center";const v=Ku(f.start),p=n.measureText(v).width;n.fillStyle=e.accent,n.fillRect(h-p/2-4,r.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(v,h,r.volumeY1+4),n.restore()}const ic=.25,sc=6,Yh=8;function dm(n){const e=Qa();return e.run(()=>{const t=be(0),i=be(0),s=be(0),r=be(1),o=be(null),a=nt(()=>Math.max(1,n.slotW()*r.value));je([n.theme,n.slotW,n.showVolume,n.volumeFraction,()=>{var L;return(L=n.compact)==null?void 0:L.call(n)},()=>n.candles(),()=>{var L;return(L=n.overlays)==null?void 0:L.call(n)},()=>{var L;return(L=n.markers)==null?void 0:L.call(n)}],()=>n.host.redraw(),{deep:!1}),je(()=>{var L;return(L=n.colors)==null?void 0:L.call(n)},()=>n.host.redraw(),{deep:!0}),je(s,()=>n.host.redraw()),je(r,()=>n.host.redraw()),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw());function l(L,x){t.value=L,i.value=x}function c(L){var O;const x=a.value;if(x<=0)return 0;const M=((O=n.candles())==null?void 0:O.length)??0,D=Math.max(1,Math.floor((t.value||1)/x)),U=Math.max(0,M-D);return Math.max(0,Math.min(L,U*x))}function u(L,x,M,D){if(L!==0||M&&x!==0){const j=L!==0?L:x;s.value=c(s.value+j);return}if(x===0)return;const U=n.candles(),O=a.value,X=Math.exp(-x*.0015);if(D>=0&&O>0&&(U!=null&&U.length)){const j=Math.max(1,Math.floor((t.value||1)/O)),J=Math.max(0,U.length-j-Math.floor(s.value/O))+(D-Yh)/O,k=Math.max(ic,Math.min(sc,r.value*X));r.value=k;const ne=n.slotW()*k,F=Math.max(1,Math.floor((t.value||1)/ne)),H=J-(D-Yh)/ne,Y=Math.max(0,U.length-F-H);s.value=c(Y*ne)}else r.value=Math.max(ic,Math.min(sc,r.value*X))}let f=!1,h=0,m=0;function g(L){f=!0,h=L,m=s.value,o.value=null}function v(L){return f?(s.value=c(m+(L-h)),!0):!1}function p(){f=!1}const d=()=>f;function b(L,x){f||(o.value=L<0||x<0?null:{x:L,y:x})}function y(){o.value=null}function _(L){r.value=Math.max(ic,Math.min(sc,r.value*Math.exp(L*.18))),s.value=c(s.value)}function P(L){const x=a.value,M=L.shiftKey?20:3;switch(L.key){case"ArrowLeft":L.preventDefault(),s.value=c(s.value+x*M);break;case"ArrowRight":L.preventDefault(),s.value=c(s.value-x*M);break;case"ArrowUp":L.preventDefault(),_(1);break;case"ArrowDown":L.preventDefault(),_(-1);break;case"Home":L.preventDefault(),s.value=c(Number.MAX_SAFE_INTEGER);break;case"End":L.preventDefault(),s.value=0;break}}function T(L,{dpr:x,glow:M}){var D,U,O,X;fm(L,{candles:n.candles(),slotW:a.value,scrollX:s.value,theme:n.theme(),glow:M,showVolume:n.showVolume(),volumeFraction:n.volumeFraction(),hover:o.value,overlays:(D=n.overlays)==null?void 0:D.call(n),markers:(U=n.markers)==null?void 0:U.call(n),compact:(O=n.compact)==null?void 0:O.call(n),colors:(X=n.colors)==null?void 0:X.call(n),dpr:x})}function E(){e.stop()}return{canvasW:t,canvasH:i,scrollX:s,zoomLevel:r,hover:o,effectiveSlotW:a,setViewport:l,clampScroll:c,wheel:u,panStart:g,panMove:v,panEnd:p,panning:d,hoverAt:b,leave:y,keyDown:P,applyZoom:_,paint:T,dispose:E}})}const mw=li({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:um},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=be(null),i=be(null),s={...Kt},r=dm({candles:()=>e.candles,theme:()=>e.theme,slotW:()=>e.slotW,showVolume:()=>e.showVolume,volumeFraction:()=>e.volumeFraction,overlays:()=>e.overlays,markers:()=>e.markers,compact:()=>e.compact,colors:()=>e.colors,host:{redraw:()=>v()}});let o=null,a=!1;function l(){if(o){try{o.forceContextLoss()}catch{}try{o.dispose()}catch{}o=null}}let c,u,f=1;const h=new Ji({paint:(F,{dpr:H,glow:Y})=>r.paint(F,{dpr:H,glow:Y})});function m(){if(!(!i.value||!t.value)){if(e.flat){a=!0,g();return}try{o=new Qs({canvas:i.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{a=!0}if(!a&&!o.getContext()&&(o.dispose(),o=null,a=!0),a){g();return}o.setPixelRatio(1),o.setClearColor(0,0),c=new er,u=new Js(-1,1,1,-1,0,1),c.add(new Ht(new un(2,2),h.material)),g()}}function g(){if(!t.value||!o&&!a)return;const F=t.value.clientWidth,H=t.value.clientHeight;!F||!H||h.resize(F,H)&&(h.setScreenSize(F,H),f=h.dpr,r.setViewport(F,H),o?(o.setPixelRatio(f),o.setSize(F,H)):i.value&&(i.value.width=Math.round(F*f),i.value.height=Math.round(H*f),i.value.style.width=F+"px",i.value.style.height=H+"px"),v())}function v(){if(!h.canvas.width)return;if(a){if(!i.value)return;h.paintOnly(!1);const H=i.value.getContext("2d");H&&(H.clearRect(0,0,i.value.width,i.value.height),H.drawImage(h.canvas,0,0));return}if(!o)return;const F=e.theme==="paper";h.setLook({curvature:e.curvature,scanlines:e.scanlines&&!F,vignette:!F,magnify:e.magnify}),h.setLens(e.magnify?s:null),h.syncUniforms(),h.paint(e.glow),o.render(c,u)}je(()=>e.curvature,()=>v()),je(()=>e.scanlines,()=>v()),je(()=>e.glow,()=>v()),je(()=>e.magnify,F=>{F||(s.x=Kt.x,s.y=Kt.y),v()}),je(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")});let p=null,d=null,b=0;const y=Hi("cathodeResetTick",be(0));je(y,()=>_());function _(){cancelAnimationFrame(b),b=requestAnimationFrame(g)}function P(F){F.preventDefault()}function T(){o==null||o.dispose(),o=null,a=!1,m()}function E(F){if(!i.value)return[-1,-1];const H=i.value.getBoundingClientRect();return[F.clientX-H.left,F.clientY-H.top]}function L(F){const[H]=E(F);r.wheel(F.deltaX,F.deltaY,F.shiftKey,H)}function x(F){F.button===0&&(r.panStart(F.clientX),t.value&&t.value.focus())}function M(F){r.keyDown(F)}function D(F){r.panMove(F.clientX)}function U(){r.panEnd()}function O(F){F.touches.length===1&&r.panStart(F.touches[0].clientX)}function X(F){!r.panning()||F.touches.length!==1||(F.preventDefault(),r.panMove(F.touches[0].clientX))}function j(){r.panEnd()}function $(F){if(e.magnify&&i.value){const ae=ko(F,i.value);s.x=ae.x,s.y=ae.y,v()}const[H,Y]=E(F);r.hoverAt(H,Y)}function J(){r.leave(),s.x=Kt.x,s.y=Kt.y,v()}Rn(()=>{document.addEventListener("mousemove",D),document.addEventListener("mouseup",U),dn(()=>{var F;m(),i.value&&(i.value.addEventListener("webglcontextlost",P),i.value.addEventListener("webglcontextrestored",T)),t.value&&(p=new ResizeObserver(()=>g()),p.observe(t.value),d=new IntersectionObserver(H=>{H.some(Y=>Y.isIntersecting)&&_()}),d.observe(t.value)),window.addEventListener("resize",_),(F=window.visualViewport)==null||F.addEventListener("resize",_)})}),Wn(()=>{var F,H,Y;document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",U),(F=i.value)==null||F.removeEventListener("webglcontextlost",P),(H=i.value)==null||H.removeEventListener("webglcontextrestored",T),p==null||p.disconnect(),d==null||d.disconnect(),window.removeEventListener("resize",_),(Y=window.visualViewport)==null||Y.removeEventListener("resize",_),cancelAnimationFrame(b),l(),r.dispose(),h.dispose()});const k=nt(()=>Gr[e.theme]??Gr.none),ne=nt(()=>({background:k.value.bg}));return(F,H)=>(Je(),gt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:Vn(ne.value),tabindex:"0",onKeydown:M},[Pe("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:zs(L,["prevent"]),onMousedown:x,onMousemove:$,onMouseleave:J,onTouchstartPassive:O,onTouchmove:X,onTouchend:j,onTouchcancel:j},null,544)],36))}}),$h=ci(mw,[["__scopeId","data-v-f2099684"]]),gw=["disabled"],vw=li({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100},magnify:{type:Boolean,default:!1}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=be(null),o=be(null),a=be(""),l=be([]),c=be(-1);let u="";function f(P){P.trim()&&(l.value.length&&l.value[l.value.length-1]===P||(l.value.push(P),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function h(P){if(!i.disabled){if(P.key==="Enter"){P.preventDefault();const T=a.value;T.trim()&&f(T),c.value=-1,a.value="",s("submit",T);return}if(P.key==="ArrowUp"){if(!l.value.length)return;P.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(P.key==="ArrowDown"){if(c.value===-1)return;P.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const m=be(!0);let g=null;function v(){g||(g=setInterval(()=>{m.value=!m.value},530))}function p(){g&&(clearInterval(g),g=null),m.value=!0}const d=nt(()=>{let P;return i.disabled?P=" ":i.busy?P="█":P=m.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${P}`}}),b=nt(()=>[...i.entries,d.value]);function y(){var P;i.disabled||(P=o.value)==null||P.focus()}je(()=>i.busy,(P,T)=>{T&&!P&&!i.disabled&&dn(()=>{var E;return(E=o.value)==null?void 0:E.focus()})});function _(){var P;(P=o.value)==null||P.focus()}return e({focus:_}),Rn(()=>{v(),i.disabled||requestAnimationFrame(()=>{var P;return(P=o.value)==null?void 0:P.focus()})}),Wn(()=>{p()}),(P,T)=>(Je(),gt("div",{ref_key:"wrapEl",ref:r,class:"cathode-terminal-wrap",onClick:y},[Ct(du,{entries:b.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,magnify:n.magnify,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","magnify","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),zt(Pe("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":T[0]||(T[0]=E=>a.value=E),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:h},null,40,gw),[[_p,a.value]])],512))}}),qh=ci(vw,[["__scopeId","data-v-a2b39934"]]),ju=be(0),pu=28;let mu=10,Xa="cathode.layout",Ya=!1;const Qt=be({});function _w(n,e="cathode.layout"){if(!Ya){Ya=!0,Xa=e;try{const t=localStorage.getItem(Xa);if(t){Qt.value=JSON.parse(t),Kh();return}}catch{}Qt.value={...n},Kh()}}function Kh(){let n=10;for(const e of Object.values(Qt.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);mu=n}function tr(){localStorage.setItem(Xa,JSON.stringify(Qt.value))}function xw(n){Ya=!1,localStorage.removeItem(Xa),Qt.value={...n},tr(),Ya=!0,ju.value++}function pm(n){mu++,Qt.value[n]&&(Qt.value[n].zIndex=mu)}function yw(n,e){Qt.value[n].visible=e,tr()}function Mw(n,e){Qt.value[n].minimized=e,e&&(Qt.value[n].maximized=!1),tr()}function Sw(n,e){Qt.value[n].maximized=e,e&&(Qt.value[n].minimized=!1,pm(n)),tr()}function bw(n,e,t){Qt.value[n].x=Math.round(e),Qt.value[n].y=Math.round(t),tr()}function ww(n,e,t){Qt.value[n].w=Math.round(e),Qt.value[n].h=Math.round(t),tr()}function mm(){return{containers:Qt,TITLEBAR_H:pu,load:_w,save:tr,reset:xw,bringToFront:pm,setVisible:yw,setMinimized:Mw,setMaximized:Sw,updatePos:bw,updateSize:ww}}const Ew={class:"ws-toolbar"},Tw={key:0,class:"ws-restore-menu"},Aw={key:0,class:"ws-restore-empty"},Cw=["onClick"],Rw=li({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:s,setVisible:r}=mm(),o=be(null);pc("cathodeWorkspace",o),pc("cathodeResetTick",ju),Rn(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:d}=o.value,b=e.initialLayout??{};i(b,e.storageKey??"cathode.layout");const y=Object.keys(t.value)[0];y&&a(y)});function a(p){var b;document.querySelectorAll(".cc").forEach(y=>y.classList.remove("cc-focused"));const d=(b=o.value)==null?void 0:b.querySelector(`#cc-${p}`);d&&d.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||s(e.initialLayout)}function c(p){const d=p.target.closest(".cc");d&&(document.querySelectorAll(".cc").forEach(b=>b.classList.remove("cc-focused")),d.classList.add("cc-focused"))}const u=be(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function h(p){r(p,!0),u.value=!1}function m(p){if(!u.value)return;const d=p.target;!d.closest(".ws-restore-menu")&&!d.closest(".ws-btn-restore")&&(u.value=!1)}function g(p){p.key==="Escape"&&(u.value=!1)}Rn(()=>{document.addEventListener("click",m),document.addEventListener("keydown",g)}),Wn(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",g)});function v(p){var d;return((d=e.containerTitles)==null?void 0:d[p])??p}return(p,d)=>(Je(),gt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[gc(p.$slots,"default",{},void 0),gc(p.$slots,"overlay",{},void 0),Pe("div",Ew,[n.initialLayout?(Je(),gt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):qt("",!0),d[1]||(d[1]=Pe("div",{class:"ws-sep"},null,-1)),Pe("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:d[0]||(d[0]=b=>u.value=!u.value)}," ⊞ Restore Panel ")]),Ct(wv,{name:"menu"},{default:Ns(()=>[u.value?(Je(),gt("div",Tw,[d[3]||(d[3]=Pe("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?qt("",!0):(Je(),gt("div",Aw," No closed panels ")),(Je(!0),gt(an,null,Lg(f(),b=>(Je(),gt("div",{key:b,class:"ws-restore-item",onClick:y=>h(b)},[d[2]||(d[2]=Pe("span",{class:"ws-restore-icon"},"⊞",-1)),Tn(" "+vn(v(b)),1)],8,Cw))),128))])):qt("",!0)]),_:1})],544))}}),Pw=ci(Rw,[["__scopeId","data-v-5838d04b"]]),Dw=["id"],Lw={class:"cc-title"},Iw={key:0,class:"cc-size-badge"},Uw={class:"cc-controls"},Fw=["title"],Nw={class:"cc-body"},Ow=200,Bw=80,jh=60,kw=li({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:s,setMinimized:r,setMaximized:o,updatePos:a,updateSize:l}=mm(),c=Hi("cathodeWorkspace",be(null)),u=nt(()=>t.value[e.id]),f=nt(()=>{const F=u.value,H=e.curvature??0;if(!F)return{};const Y={"--curvature":Math.abs(H)};return F.maximized?{...Y,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:F.zIndex}:{...Y,left:F.x+"px",top:F.y+"px",width:F.w+"px",height:F.minimized?pu+"px":F.h+"px",zIndex:F.zIndex,display:F.visible?"flex":"none"}});let h=!1,m=0,g=0;function v(F){var ae;if(F.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),h=!0;const H=(ae=c.value)==null?void 0:ae.querySelector(`#cc-${e.id}`);if(!H)return;const Y=H.getBoundingClientRect();m=F.clientX-Y.left,g=F.clientY-Y.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),F.preventDefault()}function p(F){var de;if(!h||!c.value)return;const H=c.value.getBoundingClientRect(),Y=((de=u.value)==null?void 0:de.w)??300;let ae=F.clientX-H.left-m,ee=F.clientY-H.top-g;ae=Math.max(jh-Y,Math.min(H.width-jh,ae)),ee=Math.max(0,Math.min(H.height-pu,ee)),a(e.id,ae,ee)}function d(){h=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d)}let b=!1,y=0,_=0,P=0,T=0;const E=be("");function L(F){u.value.maximized||(i(e.id),b=!0,y=F.clientX,_=F.clientY,P=u.value.w,T=u.value.h,document.addEventListener("mousemove",x),document.addEventListener("mouseup",M),F.preventDefault(),F.stopPropagation())}function x(F){if(!b)return;const H=Math.max(Ow,P+(F.clientX-y)),Y=Math.max(Bw,T+(F.clientY-_));l(e.id,H,Y),E.value=`${Math.round(H)}×${Math.round(Y)}`}function M(){b=!1,E.value="",document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",M),D.value++}const D=be(0);je(ju,()=>{D.value++}),Wn(()=>{var F;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",M),(F=U.value)==null||F.removeEventListener("scroll",X),j()});const U=be(null);function O(F){if(e.canvas)return[];const H=F.children[0];return H?Array.from(H.children):[]}function X(){const F=U.value,H=e.curvature??0;if(!F)return;const Y=O(F);if(!Y.length)return;const ae=F.clientHeight,ee=ae/2,de=H*.0038;Y.forEach(ye=>{if(!ye.dataset.origFs){const pe=getComputedStyle(ye);ye.dataset.origFs=pe.fontSize,ye.dataset.origLh=pe.lineHeight}if(H===0){ye.style.fontSize="",ye.style.lineHeight="";return}const ve=ye.getBoundingClientRect(),Be=F.getBoundingClientRect(),ke=ve.top-Be.top+ve.height/2,Ve=Math.min(1,Math.abs(ke-ee)/(ae/2)),ce=1+de*Math.cos(Ve*Math.PI/2),C=parseFloat(ye.dataset.origFs),N=ye.dataset.origLh,A=N==="normal"?C*1.4:parseFloat(N);isNaN(C)||(ye.style.fontSize=`${(C*ce).toFixed(2)}px`),isNaN(A)||(ye.style.lineHeight=`${(A*ce).toFixed(2)}px`)})}function j(){const F=U.value;F&&O(F).forEach(H=>{H.style.fontSize="",H.style.lineHeight="",delete H.dataset.origFs,delete H.dataset.origLh})}je(()=>e.curvature,F=>{(F??0)===0?j():X()}),Rn(()=>{var F;(F=U.value)==null||F.addEventListener("scroll",X,{passive:!0}),dn(X)});function $(){r(e.id,!u.value.minimized),dn(()=>{D.value++})}function J(){o(e.id,!u.value.maximized),dn(()=>{D.value++})}function k(){s(e.id,!1)}function ne(){i(e.id)}return(F,H)=>u.value&&u.value.visible?(Je(),gt("div",{key:0,id:`cc-${n.id}`,class:Ot(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:Vn(f.value),onMousedown:ne},[Pe("div",{class:"cc-titlebar",onMousedown:v},[H[0]||(H[0]=Pe("span",{class:"cc-status-dot"},null,-1)),Pe("span",Lw,vn(n.title),1),E.value?(Je(),gt("span",Iw,vn(E.value),1)):qt("",!0),Pe("div",Uw,[Pe("button",{class:"cc-btn",title:"Minimize",onClick:zs($,["stop"])},"─"),Pe("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:zs(J,["stop"])},vn(u.value.maximized?"⤡":"⤢"),9,Fw),Pe("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:zs(k,["stop"])},"✕")])],32),zt(Pe("div",Nw,[Pe("div",{ref_key:"bodyEl",ref:U,class:"cc-screen",onScroll:X},[gc(F.$slots,"default",{resizeKey:D.value},void 0),H[1]||(H[1]=Pe("div",{class:"cc-shine"},null,-1))],544)],512),[[cs,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(Je(),gt("div",{key:0,class:"cc-resize",onMousedown:zs(L,["stop"])},null,32)):qt("",!0)],46,Dw)):qt("",!0)}}),da=ci(kw,[["__scopeId","data-v-ca0af4ca"]]),zw=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Hw=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    // Signed bend: magnitude from |strength|, direction applied after.
    // CONVEX (+): classic barrel — corners sample past the texture → bezel.
    // CONCAVE (−): the full 0.5.0 dish, plus a fit-to-content rescale. The
    // raw inward map samples a shrunken region, so the texture's outer
    // margin (headers, edge columns) was never displayed at high strength.
    // Scaling the sampled field so the screen CORNERS land exactly on the
    // texture corners guarantees every content pixel is drawn; the sampled
    // range then overshoots [0,1] at the edge MIDPOINTS, which renders as
    // the classic pincushion silhouette — content pinching inward on each
    // side, corners touching, the header riding the bowed top edge.
    vec2  cc   = uv - 0.5;
    float as   = abs(uStrength);
    float dist = dot(cc, cc) * as;
    vec2  m    = cc + cc * (1.0 + dist) * dist * sign(uStrength);
    if (uStrength < 0.0) {
      float cd = 0.5 * as;                        // corner dist = |cc|²·as at (.5,.5)
      float cp = 0.5 * (1.0 + cd) * cd;           // corner inward pull
      m /= (1.0 - 2.0 * cp);                      // corners → exactly ±0.5
    }
    return vec2(0.5) + m;
  }

  void main() {
    vec2 uv = barrel(vUv);
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      return;
    }
    vec4 color = texture2D(uTex, uv);
    if (uScanlines > 0.5 && mod(gl_FragCoord.y, 2.0) < 1.0) color.rgb *= 0.87;
    if (uVignette > 0.5) {
      vec2  vc   = uv - 0.5;
      float vign = 1.0 - dot(vc, vc) * 0.6;
      color.rgb  *= clamp(vign, 0.0, 1.0);
    }
    gl_FragColor = color;
  }
`,Vw=100,Gw=li({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=be(null),s=be(null);let r=null,o=!1;function a(){if(r){try{r.forceContextLoss()}catch{}try{r.dispose()}catch{}r=null}}let l,c,u,f,h,m=null,g=0;function v(T){T-g>=Vw&&(b(),g=T),m=requestAnimationFrame(v)}function p(){if(!i.value||!h)return;const T=i.value.clientWidth,E=i.value.clientHeight;T<=0||E<=0||h.width===T&&h.height===E||(h.width=T,h.height=E,r&&r.setSize(T,E,!1),s.value&&(s.value.width=T,s.value.height=E,s.value.style.width=T+"px",s.value.style.height=E+"px"))}function d(){if(!(h!=null&&h.width))return;const T=h.getContext("2d");if(!T)return;const E=h.width,L=h.height,x=t[e.theme]??t.none;T.clearRect(0,0,E,L),T.fillStyle=x.bg,T.fillRect(0,0,E,L);const M=Date.now(),D=(M/500|0)%2===0,U=(M/400|0)%4;T.font=`bold ${Math.max(14,Math.min(E,L)*.06)}px monospace`,T.textAlign="center",T.textBaseline="middle",T.fillStyle=x.text,e.glow&&(T.shadowColor=x.text,T.shadowBlur=14);const O=".".repeat(U).padEnd(3," "),X=`${e.label}${O}`;if(T.fillText(X,E/2,L/2),T.shadowBlur=0,D){const j=T.measureText(X),$=T.measureText("M").width,J=parseFloat(T.font),k=E/2+j.width/2+4,ne=L/2-J/2+2;T.fillStyle=x.cursor,e.glow&&(T.shadowColor=x.cursor,T.shadowBlur=12),T.fillRect(k,ne,$*.7,J*.95),T.shadowBlur=0}}function b(){if(!h)return;if(d(),o){if(!s.value)return;const E=s.value.getContext("2d");E&&E.drawImage(h,0,0);return}if(!r||!u||!f)return;const T=e.theme==="paper";u.uniforms.uStrength.value=Ks(e.curvature),u.uniforms.uScanlines.value=e.scanlines&&!T?1:0,u.uniforms.uVignette.value=T?0:1,f.needsUpdate=!0,r.render(l,c)}function y(){if(!(!s.value||!i.value)){h=document.createElement("canvas");try{r=new Qs({canvas:s.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!r.getContext()&&(r.dispose(),r=null,o=!0),o){p();return}r.setPixelRatio(1),r.setClearColor(0,0),l=new er,c=new Js(-1,1,1,-1,0,1),f=new _s(h),f.minFilter=jt,f.magFilter=jt,u=new oi({uniforms:{uTex:{value:f},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:zw,fragmentShader:Hw,transparent:!0}),l.add(new Ht(new un(2,2),u)),p()}}let _=null;Rn(()=>{y(),b(),m=requestAnimationFrame(v),i.value&&(_=new ResizeObserver(()=>p()),_.observe(i.value))}),Wn(()=>{m!==null&&cancelAnimationFrame(m),_==null||_.disconnect(),a(),f==null||f.dispose(),u==null||u.dispose()}),je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>b());const P=nt(()=>({background:(t[e.theme]??t.none).bg}));return(T,E)=>(Je(),gt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:Vn(P.value)},[Pe("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-loader-canvas"},null,512)],4))}}),Li=ci(Gw,[["__scopeId","data-v-d00e5f47"]]),gm=22,vm=6;function Zu(n){const e=Math.max(1,Math.floor(n.width/n.minCellW)),t=Math.floor(n.width/e),i=Math.round(t*n.cellAspect),s=gm+i+vm;return{rects:Array.from({length:n.count},(o,a)=>({x:a%e*t,y:Math.floor(a/e)*s-n.scrollY,w:t,h:s})),rowH:s,totalH:Math.ceil(n.count/e)*s,cols:e}}function gu(n,e,t){return e<0?-1:n.findIndex(i=>e>=i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h)}const _m=(n,e)=>Math.max(0,n-e);function Ww(n,e,t,i,s){const r=t.candles[t.candles.length-1],o=`${i}x${s}@${e.dpr}|${t.candles.length}|${r?r.start+":"+r.close:0}|${e.theme}|${e.glow}|${e.showVolume}|${e.slotW}`,a=n.get(t.id);if(a&&a.key===o)return a.canvas;const l=(a==null?void 0:a.canvas)??document.createElement("canvas");l.width=Math.round(i*e.dpr),l.height=Math.round(s*e.dpr);const c=Math.max(1.5,Math.min(e.slotW,i/Math.max(1,t.candles.length))),u=i<260&&t.overlays?t.overlays.map(f=>({...f,label:""})):t.overlays;return fm(l,{candles:t.candles,slotW:c,scrollX:Math.max(0,t.candles.length*c-i),theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:null,overlays:u,compact:!0,colors:e.colors,dpr:e.dpr}),n.set(t.id,{canvas:l,key:o}),l}function xm(n,e,t){if(!n.width)return;const i=n.getContext("2d");if(!i)return;const s=e.dpr,r={...Gr[e.theme]??Gr.none,...e.colors??{}};i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,n.width,n.height),r.bg&&r.bg!=="rgba(0,0,0,0)"&&(i.fillStyle=r.bg,i.fillRect(0,0,n.width,n.height)),i.setTransform(s,0,0,s,0,0);const{rects:o}=Zu({count:e.cells.length,width:n.width/s,minCellW:e.minCellW,cellAspect:e.cellAspect,scrollY:e.scrollY}),a=gm,l=vm;i.font="600 11px ui-monospace, SFMono-Regular, monospace",i.textBaseline="middle";for(let c=0;c<e.cells.length;c++){const u=e.cells[c],f=o[c];if(f.y+f.h<0||f.y>n.height/s)continue;const h=f.x+l/2,m=f.w-l;i.strokeStyle=u.open?r.candleBull:r.gridline,i.lineWidth=c===e.hoveredCell?2:1,i.strokeRect(h+.5,f.y+.5,m-1,f.h-l-1),i.save(),i.beginPath(),i.rect(h,f.y,m,a),i.clip();const g=f.y+a/2+1,v=u.note?i.measureText(u.note).width+(u.open?22:12):u.open?16:0,p=u.badge?i.measureText(u.badge).width+6:0,d=m-14-p-v;let b=u.title;if(i.measureText(b).width>d){for(;b.length>1&&i.measureText(b+"…").width>d;)b=b.slice(0,-1);b+="…"}let y=h+7;i.fillStyle=r.text,i.textAlign="left",i.fillText(b,y,g),y+=i.measureText(b).width+6,u.badge&&(i.fillStyle=r.accent,i.fillText(u.badge,y,g)),u.note&&(i.textAlign="right",i.fillStyle=u.noteColor||r.accent,i.fillText(u.note,h+m-(u.open?16:7),g),i.textAlign="left"),i.restore(),u.open&&(i.fillStyle=r.candleBull,i.beginPath(),i.arc(h+m-9,f.y+a/2+1,3,0,Math.PI*2),i.fill());const _=f.y+a,P=f.h-a-l;u.candles.length?i.drawImage(Ww(t,e,u,m-2,P-1),h+1,_,m-2,P-1):(i.fillStyle=r.accent,i.textAlign="center",i.fillText("· · ·",h+m/2,_+P/2),i.textAlign="left")}}const Xw=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Yw=li({__name:"CathodeCandleGrid",props:{cells:{},theme:{default:"none"},curvature:{default:0},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},showVolume:{type:Boolean,default:!0},volumeFraction:{default:.22},slotW:{default:3},colors:{},bendField:{type:Boolean,default:!0},minCellW:{default:210},cellAspect:{default:.6}},emits:["cell-click"],setup(n,{emit:e}){const t=n,i=e,s=be(null),r=be(null),o=be(-1),a=be(0),l={...Kt};let c=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),u=null,f=!1;function h(){if(u){try{u.forceContextLoss()}catch{}try{u.dispose()}catch{}u=null}}let m,g,v,p,d;const b=be(0),y=be(0),_=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${nm}

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    // Signed bend + concave fit-to-content rescale — see CathodeGrid for the
    // full derivation (corners land exactly on texture corners; nothing crops).
    vec2  cc   = uv - 0.5;
    float as   = abs(uStrength);
    float dist = dot(cc, cc) * as;
    vec2  m    = cc + cc * (1.0 + dist) * dist * sign(uStrength);
    if (uStrength < 0.0) {
      float cd = 0.5 * as;
      float cp = 0.5 * (1.0 + cd) * cd;
      m /= (1.0 - 2.0 * cp);
    }
    return vec2(0.5) + m;
  }

  ${im}

  void main() {
    vec2 lensUV = applyLens(vUv);
    vec2 uv     = barrel(lensUV);

    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      return;
    }

    vec4 color = texture2D(uTex, uv);

    if (uScanlines > 0.5) {
      if (mod(gl_FragCoord.y, 2.0) < 1.0) color.rgb *= 0.87;
    }

    if (uVignette > 0.5) {
      vec2  vc   = uv - 0.5;
      float vign = 1.0 - dot(vc, vc) * 0.6;
      color.rgb  *= clamp(vign, 0.0, 1.0);
    }

    ${sm}

    gl_FragColor = color;
  }
`;function P(){if(!(!r.value||!s.value)){d=document.createElement("canvas");try{u=new Qs({canvas:r.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{f=!0}if(!f&&!u.getContext()&&(u.dispose(),u=null,f=!0),f){T();return}u.setPixelRatio(c),u.setClearColor(0,0),m=new er,g=new Js(-1,1,1,-1,0,1),p=new _s(d),p.minFilter=jt,p.magFilter=jt,v=new oi({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...rm()},vertexShader:Xw,fragmentShader:_,transparent:!0}),m.add(new Ht(new un(2,2),v)),T()}}function T(){if(!s.value||!u&&!f)return;const k=s.value.clientWidth,ne=s.value.clientHeight;if(!k||!ne)return;b.value=k,y.value=ne,c=Math.min(window.devicePixelRatio||1,2);const F=t.bendField?Math.round(k*em(t.curvature)):k,H=Math.round(F*c),Y=Math.round(ne*c),ae=d.width!==H||d.height!==Y;d.width=H,d.height=Y,u?(ae&&p&&(p.dispose(),p=new _s(d),p.minFilter=jt,p.magFilter=jt,v.uniforms.uTex.value=p),u.setPixelRatio(c),u.setSize(k,ne)):r.value&&(r.value.width=Math.round(k*c),r.value.height=Math.round(ne*c),r.value.style.width=k+"px",r.value.style.height=ne+"px"),M()}function E(){return Zu({count:t.cells.length,width:((d==null?void 0:d.width)||0)/c,minCellW:t.minCellW,cellAspect:t.cellAspect,scrollY:a.value})}const L=()=>_m(E().totalH,((d==null?void 0:d.height)||0)/c),x=new Map;function M(){var k;if(d!=null&&d.width){if(xm(d,{cells:t.cells,theme:t.theme,glow:t.glow,showVolume:t.showVolume,volumeFraction:t.volumeFraction,slotW:t.slotW,colors:t.colors,hoveredCell:o.value,scrollY:a.value,minCellW:t.minCellW,cellAspect:t.cellAspect,dpr:c},x),f){const ne=(k=r.value)==null?void 0:k.getContext("2d");ne&&r.value&&ne.drawImage(d,0,0,d.width,d.height,0,0,r.value.width,r.value.height);return}!u||!v||!p||(v.uniforms.uStrength.value=Ks(t.curvature),v.uniforms.uScanlines.value=t.scanlines&&t.theme!=="paper"?1:0,v.uniforms.uVignette.value=t.theme==="paper"?0:1,om(v,t.magnify,l,b.value||d.width,y.value||d.height),p.needsUpdate=!0,u.render(m,g))}}function D(k){if(!r.value)return[-1,-1];const ne=r.value.getBoundingClientRect();return Qp(k.clientX-ne.left,k.clientY-ne.top,ne.width,ne.height,Ks(t.curvature),((d==null?void 0:d.width)||ne.width)/c,((d==null?void 0:d.height)||ne.height)/c)}function U(k,ne){return gu(E().rects,k,ne)}function O(k){const[ne,F]=D(k),H=U(ne,F);H>=0&&i("cell-click",t.cells[H].id)}function X(k){if(t.magnify&&r.value){const Y=ko(k,r.value);l.x=Y.x,l.y=Y.y}const[ne,F]=D(k),H=U(ne,F);H!==o.value?(o.value=H,M()):t.magnify&&M(),r.value&&(r.value.style.cursor=H>=0?"pointer":"default")}function j(){o.value=-1,l.x=Kt.x,l.y=Kt.y,M()}function $(k){const ne=L();ne<=0||(k.preventDefault(),a.value=Math.max(0,Math.min(ne,a.value+k.deltaY)),M())}let J=null;return Rn(()=>{P(),J=new ResizeObserver(()=>T()),s.value&&J.observe(s.value)}),Wn(()=>{J==null||J.disconnect(),h(),x.clear()}),je(()=>[t.curvature,t.bendField],()=>dn(T)),je(()=>[t.cells,t.theme,t.glow,t.scanlines,t.showVolume,t.magnify],()=>{a.value=Math.min(a.value,L()),M()},{deep:!1}),(k,ne)=>(Je(),gt("div",{ref_key:"wrapEl",ref:s,class:"cathode-candle-grid-wrap"},[Pe("canvas",{ref_key:"canvasEl",ref:r,onClick:O,onMousemove:X,onMouseleave:j,onWheel:$},null,544)],512))}}),$w=ci(Yw,[["__scopeId","data-v-f4e5e064"]]),$a={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",dim:"#a0b8d0",left:"#ff9a9a",right:"#a0e8c0",neutral:"#a0b8d0",warn:"#ffd890",surface:"rgba(255,255,255,0.05)",border:"#2a3a50"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",dim:"#888888",left:"#c0392b",right:"#1a8038",neutral:"#888888",warn:"#a06000",surface:"rgba(0,0,0,0.035)",border:"#dee2e6"},phosphor:{bg:"#060d06",text:"#80ff80",dim:"#3fbf3f",left:"#ff8080",right:"#a0ffa0",neutral:"#3fbf3f",warn:"#ffe66d",surface:"rgba(51,255,51,0.05)",border:"#0a250a"},amber:{bg:"#0a0700",text:"#ffd060",dim:"#b08020",left:"#ff8a5a",right:"#ffe6a0",neutral:"#b08020",warn:"#ff9f40",surface:"rgba(255,176,0,0.06)",border:"#3a2a00"}},Zh=(n,e)=>e==="left"?n.left:e==="right"?n.right:!e||e==="neutral"?n.dim:e,Bt="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Rt=12;function rc(n,e,t){const i=[];for(const s of e.split(`
`)){let r="";for(const o of s.split(" ")){const a=r?`${r} ${o}`:o;r&&n.measureText(a).width>t?(i.push(r),r=o):r=a}i.push(r)}return i}function oo(n,e,t,i,s,r){const o=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(e+o,t),n.lineTo(e+i-o,t),n.quadraticCurveTo(e+i,t,e+i,t+o),n.lineTo(e+i,t+s-o),n.quadraticCurveTo(e+i,t+s,e+i-o,t+s),n.lineTo(e+o,t+s),n.quadraticCurveTo(e,t+s,e,t+s-o),n.lineTo(e,t+o),n.quadraticCurveTo(e,t,e+o,t),n.closePath()}function ym(n,e){var E,L;const t=n.getContext("2d");if(!t)return 0;const i=e.dpr||1,s=n.width/i,r=n.height/i,o={...$a[e.theme]??$a.none,...e.colors??{}};t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r);const a=x=>x>0?o.right:x<0?o.left:o.neutral,l=a(e.value),c=(x,M=10)=>{e.glow&&(t.shadowColor=x,t.shadowBlur=M)},u=()=>{t.shadowBlur=0,t.shadowColor="transparent"},f=Math.max(40,s-Rt*2);let h=Rt;t.textBaseline="alphabetic",t.textAlign="left";const m=e.readout??`${e.value>0?"+":""}${e.value}`;t.font=`800 34px ${Bt}`;const g=t.measureText(m).width;t.fillStyle=l,c(l,14),t.fillText(m,Rt,h+30),u();const v=Rt+g+14;e.stance&&(t.font=`700 14px ${Bt}`,t.fillStyle=l,c(l,8),t.fillText(e.stance.toUpperCase(),v,h+15),u()),e.sub&&(t.font=`11px ${Bt}`,t.fillStyle=o.dim,t.fillText(e.sub,v,h+31)),h+=48,t.font=`700 9px ${Bt}`;const p=e.leftLabel.toUpperCase(),d=e.rightLabel.toUpperCase(),b=t.measureText(p).width,y=t.measureText(d).width,_=Rt+b+8,P=s-Rt-y-8,T=h+10;if(t.fillStyle=o.left,t.fillText(p,Rt,T+3),t.fillStyle=o.right,t.textAlign="right",t.fillText(d,s-Rt,T+3),t.textAlign="left",P-_>24){const x=t.createLinearGradient(_,0,P,0);x.addColorStop(0,o.left),x.addColorStop(.45,o.surface),x.addColorStop(.55,o.surface),x.addColorStop(1,o.right),oo(t,_,T-4,P-_,8,4),t.save(),t.globalAlpha=.5,t.fillStyle=x,t.fill(),t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke();const M=(_+P)/2;t.strokeStyle=o.border,t.beginPath(),t.moveTo(M,T-8),t.lineTo(M,T+8),t.stroke();for(const j of[.25,.75]){const $=_+j*(P-_);t.beginPath(),t.moveTo($,T-5),t.lineTo($,T+5),t.stroke()}const D=e.max-e.min||1,U=Math.max(0,Math.min(1,(e.shown-e.min)/D)),O=_+U*(P-_),X=a(e.shown);t.beginPath(),t.moveTo(O,T-10),t.lineTo(O-4.5,T-17),t.lineTo(O+4.5,T-17),t.closePath(),t.fillStyle=X,t.fill(),t.beginPath(),t.arc(O,T,6.5,0,Math.PI*2),t.fillStyle=X,c(X,12),t.fill(),u(),t.strokeStyle=o.bg==="rgba(0,0,0,0)"?o.border:o.bg,t.lineWidth=2,t.stroke();for(const j of e.marks??[]){const $=(j.value-e.min)/D;if($<0||$>1)continue;const J=_+$*(P-_),k=Zh(o,j.color);if(t.save(),t.setLineDash([2,2]),t.strokeStyle=k,t.lineWidth=1,t.beginPath(),t.moveTo(J,T-9),t.lineTo(J,T+9),t.stroke(),t.restore(),j.label){t.font=`700 8px ${Bt}`,t.fillStyle=k;const ne=t.measureText(j.label).width;t.fillText(j.label,Math.max(_,Math.min(P-ne,J-ne/2)),T+20)}}}if(h+=(E=e.marks)!=null&&E.some(x=>x.label)?42:30,e.meter){const x=e.meter,M=x.min??0,D=x.max??1,U=D-M||1,O=x.tone==="up"?o.right:x.tone==="down"?o.left:x.tone==="warn"?o.warn:o.neutral;x.label&&(t.font=`700 9px ${Bt}`,t.fillStyle=o.dim,t.fillText(x.label.toUpperCase(),Rt,h+9)),x.hint&&(t.font=`9px ${Bt}`,t.fillStyle=o.dim,t.textAlign="right",t.fillText(x.hint,s-Rt,h+9),t.textAlign="left"),(x.label||x.hint)&&(h+=15),t.font=`700 12px ${Bt}`;const X=x.valueText??(x.value==null?"—":String(x.value)),j=t.measureText(X).width,$=Rt,J=s-Rt-j-10,k=h+6,ne=!!((L=x.thresholds)!=null&&L.some(F=>F.label));if(J-$>24){if(oo(t,$,k-5,J-$,10,5),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),x.value!=null){const F=Math.max(0,Math.min(1,(x.value-M)/U));F>0&&(t.save(),oo(t,$,k-5,J-$,10,5),t.clip(),t.globalAlpha=.7,t.fillStyle=O,c(O,8),t.fillRect($,k-5,(J-$)*F,10),t.restore())}for(const F of x.thresholds??[]){const H=(F.value-M)/U;if(H<0||H>1)continue;const Y=$+H*(J-$),ae=Zh(o,F.color);if(t.strokeStyle=ae,t.lineWidth=1,t.beginPath(),t.moveTo(Y,k-7),t.lineTo(Y,k+7),t.stroke(),F.label){t.font=`700 7.5px ${Bt}`,t.fillStyle=ae;const ee=t.measureText(F.label).width;t.fillText(F.label,Math.max($,Math.min(J-ee,Y-ee/2)),k+17)}}}t.font=`700 12px ${Bt}`,t.fillStyle=O,t.textAlign="right",c(O,8),t.fillText(X,s-Rt,k+4),u(),t.textAlign="left",h+=ne?32:22}if(e.caption){t.font=`600 11.5px ${Bt}`;const x=rc(t,e.caption,f-18),M=x.length*15+12;oo(t,Rt,h,f,M,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=e.value<0?o.left:o.border,t.lineWidth=1,t.stroke(),t.fillStyle=e.value<0?o.left:e.value>0?o.text:o.dim,x.forEach((D,U)=>t.fillText(D,Rt+9,h+17+U*15)),h+=M+10}if(e.note){t.font=`10px ${Bt}`,t.fillStyle=o.dim;const x=rc(t,e.note,f);x.forEach((M,D)=>t.fillText(M,Rt,h+10+D*14)),h+=x.length*14+10}if(e.items.length){let D=Rt;for(const U of e.items){const O=U.side==="left"?o.left:U.side==="right"?o.right:o.neutral,X=U.side==="left"?e.sideLetters[0]:U.side==="right"?e.sideLetters[1]:"";t.font=`700 10px ${Bt}`;const j=t.measureText(U.label).width;t.font=`700 8px ${Bt}`;const $=X?t.measureText(X).width+6:0;t.font=`10px ${Bt}`;const J=U.value?t.measureText(U.value).width:0,k=7+j+(X?4+$:0)+(U.value?4+J:0)+7;D+k>s-Rt&&D>Rt&&(D=Rt,h+=23),oo(t,D,h,k,18,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),t.fillStyle=O,t.fillRect(D,h+1,2,16);let ne=D+7;t.font=`700 10px ${Bt}`,t.fillStyle=o.text,t.fillText(U.label,ne,h+12.5),ne+=j+4,X&&(t.font=`700 8px ${Bt}`,t.fillStyle=O,t.fillText(X,ne+3,h+12),ne+=$+4),U.value&&(t.font=`10px ${Bt}`,t.fillStyle=U.tone==="up"?o.right:U.tone==="down"?o.left:o.dim,t.fillText(U.value,ne,h+12.5)),D+=k+5}h+=18}else if(e.emptyText){t.font=`10px ${Bt}`,t.fillStyle=o.dim;const x=rc(t,e.emptyText,f);x.forEach((M,D)=>t.fillText(M,Rt,h+10+D*14)),h+=x.length*14}return h+Rt}const qw=li({__name:"CathodeGauge",props:{theme:{default:"none"},curvature:{default:10},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},value:{},min:{default:-1},max:{default:1},readout:{},stance:{},sub:{},leftLabel:{default:"−"},rightLabel:{default:"+"},sideLetters:{default:()=>["−","+"]},marks:{default:()=>[]},meter:{default:null},caption:{},note:{},items:{default:()=>[]},emptyText:{},colors:{},animate:{type:Boolean,default:!0}},setup(n){const e=n,t=be(null),i=be(null),s=()=>(e.min+e.max)/2,r=be(e.animate?s():e.value);let o=0;function a(){if(cancelAnimationFrame(o),!e.animate){r.value=e.value,p();return}const D=()=>{const U=e.value-r.value;if(Math.abs(U)<.004){r.value=e.value,p();return}r.value+=U*.18,p(),o=requestAnimationFrame(D)};o=requestAnimationFrame(D)}je(()=>e.value,a);let l=null,c=!1;function u(){if(l){try{l.forceContextLoss()}catch{}try{l.dispose()}catch{}l=null}}let f,h;const m=new Ji({paint:(D,{dpr:U,glow:O})=>ym(D,{dpr:U,theme:e.theme,colors:e.colors,glow:O,shown:r.value,value:e.value,min:e.min,max:e.max,readout:e.readout,stance:e.stance,sub:e.sub,leftLabel:e.leftLabel,rightLabel:e.rightLabel,sideLetters:e.sideLetters,marks:e.marks,meter:e.meter,caption:e.caption,note:e.note,items:e.items,emptyText:e.emptyText})});function g(){if(!(!i.value||!t.value)){try{l=new Qs({canvas:i.value,antialias:!1,alpha:!0})}catch{c=!0}if(!c&&!l.getContext()&&(l.dispose(),l=null,c=!0),c){v();return}l.setPixelRatio(1),l.setClearColor(0,0),f=new er,h=new Js(-1,1,1,-1,0,1),f.add(new Ht(new un(2,2),m.material)),v()}}function v(){if(!t.value||!l&&!c)return;const D=t.value.clientWidth,U=t.value.clientHeight;m.resize(D,U)&&(l?(l.setPixelRatio(m.dpr),l.setSize(D,U)):i.value&&(i.value.width=m.canvas.width,i.value.height=m.canvas.height,i.value.style.width=D+"px",i.value.style.height=U+"px"),p())}function p(){if(!m.canvas.width)return;if(c){if(!i.value)return;m.paintOnly(!1);const U=i.value.getContext("2d");U&&(U.setTransform(1,0,0,1,0,0),U.clearRect(0,0,i.value.width,i.value.height),U.drawImage(m.canvas,0,0));return}if(!l)return;const D=e.theme==="paper";m.setLook({curvature:e.curvature,scanlines:e.scanlines&&!D,vignette:!D,magnify:e.magnify}),m.syncUniforms(),m.paint(e.glow),l.render(f,h)}je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.readout,e.stance,e.sub,e.leftLabel,e.rightLabel,e.sideLetters,e.marks,e.meter,e.caption,e.note,e.items,e.emptyText,e.colors,e.min,e.max],()=>p(),{deep:!0}),je(()=>e.magnify,D=>{D||m.setLens(null),p()});function d(D){!e.magnify||!i.value||(m.setLens(ko(D,i.value)),p())}function b(){m.setLens(null),p()}let y=null,_=null,P=0;const T=Hi("cathodeResetTick",be(0));je(T,()=>E());function E(){cancelAnimationFrame(P),P=requestAnimationFrame(v)}function L(D){D.preventDefault()}function x(){l==null||l.dispose(),l=null,c=!1,g(),p()}Rn(()=>{dn(()=>{var D;g(),i.value&&(i.value.addEventListener("webglcontextlost",L),i.value.addEventListener("webglcontextrestored",x)),t.value&&(y=new ResizeObserver(()=>v()),y.observe(t.value),_=new IntersectionObserver(U=>{U.some(O=>O.isIntersecting)&&E()}),_.observe(t.value)),window.addEventListener("resize",E),(D=window.visualViewport)==null||D.addEventListener("resize",E),a()})}),Wn(()=>{var D,U,O;cancelAnimationFrame(o),cancelAnimationFrame(P),(D=i.value)==null||D.removeEventListener("webglcontextlost",L),(U=i.value)==null||U.removeEventListener("webglcontextrestored",x),y==null||y.disconnect(),_==null||_.disconnect(),window.removeEventListener("resize",E),(O=window.visualViewport)==null||O.removeEventListener("resize",E),u(),m.dispose()});const M=nt(()=>({background:($a[e.theme]??$a.none).bg}));return(D,U)=>(Je(),gt("div",{ref_key:"wrapEl",ref:t,class:"cathode-gauge-wrap",style:Vn(M.value)},[Pe("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-gauge-canvas",onMousemove:d,onMouseleave:b},null,544)],4))}}),Kw=ci(qw,[["__scopeId","data-v-6c2fc3b2"]]),Jh={type:"change"},Ju={type:"start"},Mm={type:"end"},pa=new Vu,Qh=new vi,jw=Math.cos(70*lu.DEG2RAD),kt=new te,Sn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oc=1e-6;class Zw extends vb{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.enabled=!0,this.target=new te,this.cursor=new te,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new te,this._lastQuaternion=new Si,this._lastTargetPosition=new te,this._quat=new Si().setFromUnitVectors(e.up,new te(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vh,this._sphericalDelta=new Vh,this._scale=1,this._panOffset=new te,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new te,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qw.bind(this),this._onPointerDown=Jw.bind(this),this._onPointerUp=eE.bind(this),this._onContextMenu=aE.bind(this),this._onMouseWheel=iE.bind(this),this._onKeyDown=sE.bind(this),this._onTouchStart=rE.bind(this),this._onTouchMove=oE.bind(this),this._onMouseDown=tE.bind(this),this._onMouseMove=nE.bind(this),this._interceptControlDown=lE.bind(this),this._interceptControlUp=cE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jh),this.update(),this.state=Mt.NONE}update(e=null){const t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=kt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new te(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new te(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pa.origin.copy(this.object.position),pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pa.direction))<jw?this.object.lookAt(this.target):(Qh.setFromNormalAndCoplanarPoint(this.object.up,this.target),pa.intersectPlane(Qh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oc||this._lastTargetPosition.distanceToSquared(this.target)>oc?(this.dispatchEvent(Jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;kt.copy(s).sub(this.target);let r=kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Jw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Qw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function eE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mm),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case Pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case Pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ju)}function nE(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function iE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(Ju),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Mm))}function sE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function rE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ju)}function oE(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function aE(n){this.enabled!==!1&&n.preventDefault()}function lE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const uE={bg:"#0d1520",border:"#2a3a50",text:"#c0d0e0",muted:"#6a7f96",accent:"#40a0f0",hover:"rgba(255,255,255,0.07)",divider:"#1e2a3a"},fE=-40,hE=40,ma=2,Nt=188,Un=26,bn=24,hi=30,Sm=24,Ii=Un+bn*3+hi+Sm,ac="11px system-ui, -apple-system, sans-serif",Pt=22,_r=10;class br{constructor(e,t={}){Fe(this,"mesh");Fe(this,"panel",null);Fe(this,"canvas",document.createElement("canvas"));Fe(this,"texture");Fe(this,"colors");Fe(this,"display",{curvature:0,scanlines:!1,glow:!1,magnify:!1});Fe(this,"hover",null);this.ppu=e,this.colors={...uE,...t};const i=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.round(Nt*i),this.canvas.height=Math.round(Ii*i),this.texture=new _s(this.canvas),this.texture.colorSpace=rn,this.mesh=new Ht(new un(Nt/e,Ii/e),new Lo({map:this.texture,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.mesh.renderOrder=1e6,this.mesh.visible=!1}get isOpen(){return!!this.panel}setColors(e){this.colors={...this.colors,...e},this.panel&&this.draw()}open(e,t,i,s){this.close(),this.panel=e,this.display={...s},this.hover=null;const r=e.content.width,o=e.content.height,a=Math.max(4,Math.min(t,r-Nt-4)),l=Math.max(4,Math.min(i,o-Ii-4));this.mesh.position.set((a+Nt/2-r/2)/this.ppu,(o/2-(l+Ii/2))/this.ppu,.02),e.group.add(this.mesh),this.mesh.visible=!0,this.draw()}close(){this.panel&&(this.panel.group.remove(this.mesh),this.mesh.visible=!1,this.panel=null,this.hover=null)}update(e){this.display={...e},this.draw()}setHover(e){e!==this.hover&&(this.hover=e,this.draw())}rowAtUV(e,t){const i=e*Nt,r=(1-t)*Ii-Un;if(r<0)return null;if(r<bn*3)return["scanlines","glow","magnify"][Math.floor(r/bn)];if(r-bn*3<hi){if(i>=Nt-_r-Pt)return"curve+";if(i>=Nt-_r-Pt-54-Pt&&i<Nt-_r-Pt-54)return"curve-"}return null}static rowCentre(e){switch(e){case"scanlines":return{x:90,y:Un+bn*.5};case"glow":return{x:90,y:Un+bn*1.5};case"magnify":return{x:90,y:Un+bn*2.5};case"curve-":return{x:Nt-_r-Pt-54-Pt/2,y:Un+bn*3+hi/2};case"curve+":return{x:Nt-_r-Pt/2,y:Un+bn*3+hi/2}}}draw(){var c;const e=Math.min(window.devicePixelRatio||1,2),t=this.colors,i=this.canvas.getContext("2d");i.setTransform(e,0,0,e,0,0),i.clearRect(0,0,Nt,Ii),i.fillStyle=t.bg,i.fillRect(0,0,Nt,Ii),i.strokeStyle=t.border,i.lineWidth=1,i.strokeRect(.5,.5,Nt-1,Ii-1),i.textBaseline="middle",i.fillStyle=t.muted,i.font="bold 9px system-ui, -apple-system, sans-serif",i.letterSpacing="1px",i.textAlign="left",i.fillText("DISPLAY",10,Un/2),i.letterSpacing="0px",i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="right",i.fillText(`curve: ${this.display.curvature}`,Nt-10,Un/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,Un-.5),i.lineTo(Nt,Un-.5),i.stroke(),[["scanlines","Scan lines",this.display.scanlines],["glow","Glow",this.display.glow],["magnify","Magnify (hover lens)",this.display.magnify]].forEach(([u,f,h],m)=>{const g=Un+m*bn;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(1,g,Nt-2,bn));const v=10,p=g+(bn-12)/2;i.strokeStyle=h?t.accent:t.muted,i.lineWidth=1.2,i.strokeRect(v+.5,p+.5,11,11),h&&(i.lineWidth=1.8,i.lineCap="round",i.beginPath(),i.moveTo(v+3,p+6.5),i.lineTo(v+5.5,p+9),i.lineTo(v+9.5,p+3.5),i.stroke()),i.fillStyle=t.text,i.font=ac,i.textAlign="left",i.fillText(f,30,g+bn/2)});const r=Un+bn*3;i.strokeStyle=t.divider,i.lineWidth=1,i.beginPath(),i.moveTo(0,r+.5),i.lineTo(Nt,r+.5),i.stroke(),i.fillStyle=t.text,i.font=ac,i.textAlign="left",i.fillText("Bend",10,r+hi/2);const o=(u,f,h)=>{const m=r+(hi-Pt)/2;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(f,m,Pt,Pt)),i.strokeStyle=this.hover===u?t.accent:t.border,i.lineWidth=1,i.strokeRect(f+.5,m+.5,Pt-1,Pt-1),i.strokeStyle=t.text,i.lineWidth=1.6,i.lineCap="round",i.beginPath(),i.moveTo(f+6,m+Pt/2),i.lineTo(f+Pt-6,m+Pt/2),h&&(i.moveTo(f+Pt/2,m+6),i.lineTo(f+Pt/2,m+Pt-6)),i.stroke()},a=Nt-_r-Pt,l=a-54-Pt;o("curve-",l,!1),o("curve+",a,!0),i.fillStyle=t.text,i.font=ac,i.textAlign="center",i.fillText(String(this.display.curvature),l+Pt+27,r+hi/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,r+hi+.5),i.lineTo(Nt,r+hi+.5),i.stroke(),i.fillStyle=t.muted,i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="left",i.fillText("Cmd+Shift +/−  bends the hovered panel",10,r+hi+Sm/2),this.texture.needsUpdate=!0,(c=this.panel)==null||c.invalidate()}dispose(){this.close(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}}Fe(br,"width",Nt),Fe(br,"height",Ii);const ed={bg:"#08130e",bgFocused:"#0f2a1d",line:"#2f6b4c",lineFocused:"#6ee7a7",text:"#6fae8f",textFocused:"#b6f5d2",box:"#2f6b4c",boxFocused:"#3f8f6b",accent:"#6ee7a7",accentText:"#d5fbe6"},jn=26,ga=20,va=18,_a=4,xa=8,Vs=16,td="11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",nd=4,dE={w:240,h:160},pE={w:1600,h:1e3};class mE{constructor(e,t){Fe(this,"id");Fe(this,"content");Fe(this,"group",new uo);Fe(this,"body");Fe(this,"bar");Fe(this,"glow");Fe(this,"_display",{curvature:0,scanlines:!0,glow:!0,magnify:!1});Fe(this,"dirty",!0);Fe(this,"barDirty",!0);Fe(this,"_title");Fe(this,"controls");Fe(this,"resizable");Fe(this,"minSize");Fe(this,"maxSize");Fe(this,"_grip",null);Fe(this,"_minimized",!1);Fe(this,"_maximized",!1);Fe(this,"hoverControl",null);Fe(this,"hoverAction",null);Fe(this,"_actions",[]);Fe(this,"barCanvas",document.createElement("canvas"));Fe(this,"barTexture");var l,c,u,f,h;this.stage=e,this.id=t.id,this._title=t.title??t.id,this.controls=t.controls??[],this._actions=(t.actions??[]).map(m=>({...m})),this.content=t.content,this.resizable=!!t.resizable&&typeof t.content.resize=="function",this.minSize=t.minSize??dE,this.maxSize=t.maxSize??pE,this.glow=t.glow??!0;const i=t.content.surface;if(i.mode!=="world")throw new Error("CathodeStage3D panels need a CathodeSurface created with mode: 'world'");const s=e.pxPerUnit,r=t.content.width/s,o=t.content.height/s,a=jn/s;if(this.body=new Ht(new un(r,o),i.material),this.barTexture=new _s(this.barCanvas),this.barTexture.colorSpace=rn,this.bar=new Ht(new un(r,a),new Lo({map:this.barTexture,toneMapped:!1})),this.bar.position.y=o/2+a/2,this.group.add(this.body,this.bar),this.body.userData.panel=this,this.bar.userData.panel=this,this.resizable){const m=Vs/s,g=document.createElement("canvas");g.width=g.height=32;const v=g.getContext("2d");v.strokeStyle="#6ee7a7",v.lineWidth=3,v.lineCap="round",v.beginPath();for(const d of[10,18,26])v.moveTo(30,d),v.lineTo(d,30);v.stroke();const p=new _s(g);p.colorSpace=rn,this._grip=new Ht(new un(m,m),new Lo({map:p,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1})),this.group.add(this._grip),this.placeGrip()}t.visible===!1&&(this.group.visible=!1),t.minimized&&(this._minimized=!0,this.body.visible=!1),t.position&&this.group.position.set(...t.position),this.group.rotation.y=t.rotationY??0,t.look&&i.setLook(t.look),this._display={curvature:((l=t.look)==null?void 0:l.curvature)??0,scanlines:((c=t.look)==null?void 0:c.scanlines)??!0,glow:this.glow,magnify:((u=t.look)==null?void 0:u.magnify)??!1},i.resize(t.content.width,t.content.height,window.devicePixelRatio||1),(h=(f=t.content).attach)==null||h.call(f,()=>this.invalidate())}get grip(){return this._grip}get title(){return this._title}setTitle(e){e!==this._title&&(this._title=e,this.invalidateBar())}placeGrip(){if(!this.grip)return;const e=this.stage.pxPerUnit;this.grip.position.set((this.content.width-Vs)/2/e,-(this.content.height-Vs)/2/e,.003),this.grip.visible=!this._minimized}setHoverGrip(e){this.grip&&(this.grip.material.opacity=e?1:.55,this.stage.invalidate())}resize(e,t){if(!this.resizable||(e=Math.round(Math.min(this.maxSize.w,Math.max(this.minSize.w,e))),t=Math.round(Math.min(this.maxSize.h,Math.max(this.minSize.h,t))),e===this.content.width&&t===this.content.height))return!1;this.content.resize(e,t),this.content.surface.resize(e,t,window.devicePixelRatio||1);const i=this.stage.pxPerUnit,s=jn/i;return this.body.geometry.dispose(),this.body.geometry=new un(e/i,t/i),this.bar.geometry.dispose(),this.bar.geometry=new un(e/i,s),this.bar.position.y=t/i/2+s/2,this.placeGrip(),this.dirty=!0,this.barDirty=!0,this.stage.invalidate(),!0}get minimized(){return this._minimized}get maximized(){return this._maximized}setMinimized(e){this._minimized!==e&&(this._minimized=e,this.body.visible=!e,this.grip&&(this.grip.visible=!e),this.invalidateBar(),e||this.invalidate())}setMaximized(e){this._maximized!==e&&(this._maximized=e,this.invalidateBar())}setHoverControl(e,t=null){this.hoverControl===e&&this.hoverAction===t||(this.hoverControl=e,this.hoverAction=t,this.invalidateBar())}get actions(){return this._actions.map(e=>({...e}))}setActions(e){e.length===this._actions.length&&e.every((i,s)=>i.id===this._actions[s].id&&i.label===this._actions[s].label&&!!i.active==!!this._actions[s].active)||(this._actions=e.map(i=>({...i})),this.invalidateBar())}controlsLeft(){return this.controls.length?this.content.width-xa-this.controls.length*(ga+_a)+_a:this.content.width-xa}actionRects(){if(!this._actions.length)return[];const e=this.barCanvas.getContext("2d");e.font=td;const t=this._actions.map(r=>Math.ceil(e.measureText(r.label).width)+14),i=t.reduce((r,o)=>r+o,0)+(t.length-1)*nd;let s=this.controlsLeft()-10-i;return this._actions.map((r,o)=>{const a={id:r.id,x:s,y:(jn-va)/2-1,w:t[o],h:va};return s+=t[o]+nd,a})}controlRect(e){const t=this.controls.indexOf(e);if(t<0)return null;const i=this.controls.length;return{x:this.content.width-xa-(i-t)*ga-(i-1-t)*_a,y:(jn-va)/2-1,w:ga,h:va}}controlAt(e,t){for(const i of this.controls){const s=this.controlRect(i);if(e>=s.x&&e<=s.x+s.w&&t>=s.y&&t<=s.y+s.h)return i}return null}actionAt(e,t){for(const i of this.actionRects())if(e>=i.x&&e<=i.x+i.w&&t>=i.y&&t<=i.y+i.h)return i.id;return null}get visible(){return this.group.visible}setVisible(e){this.group.visible!==e&&(this.group.visible=e,e?this.invalidate():this.stage.invalidate())}invalidate(){this.dirty=!0,this.stage.invalidate()}invalidateBar(){this.barDirty=!0,this.stage.invalidate()}setLook(e){this.content.surface.setLook(e);const t=this._display;e.curvature!==void 0&&(t.curvature=e.curvature),e.scanlines!==void 0&&(t.scanlines=e.scanlines),e.magnify!==void 0&&(t.magnify=e.magnify),this.invalidate()}get display(){return{...this._display}}setDisplay(e){this._display={...this._display,...e};const t=this._display;this.content.surface.setLook({curvature:t.curvature,scanlines:t.scanlines,magnify:t.magnify}),this.glow=t.glow,t.magnify||this.content.surface.setLens(null),this.invalidate()}setPosition(e,t,i){this.group.position.set(e,t,i),this.stage.invalidate()}setRotationY(e){this.group.rotation.y=e,this.stage.invalidate()}paintIfDirty(){if(!this.group.visible)return;const e=this.content.surface;this.dirty&&(e.syncUniforms(),e.paint(this.glow),this.dirty=!1),this.barDirty&&(this.drawBar(),this.barDirty=!1)}drawBar(){const e=Math.min(window.devicePixelRatio||1,2),t=this.content.width,i=jn,s=this.barCanvas;(s.width!==Math.round(t*e)||s.height!==Math.round(i*e))&&(s.width=Math.round(t*e),s.height=Math.round(i*e),this.barTexture.dispose(),this.barTexture=new _s(s),this.barTexture.colorSpace=rn,this.bar.material.map=this.barTexture,this.bar.material.needsUpdate=!0);const r=s.getContext("2d");r.setTransform(e,0,0,e,0,0);const o=this.stage.focusedId===this.id,a=this.stage.barColors,l=this.stage.barStyle==="cockpit";r.fillStyle=o?a.bgFocused:a.bg,r.fillRect(0,0,t,i),r.fillStyle=o?a.lineFocused:a.line,r.fillRect(0,i-2,t,2),r.textBaseline="middle",r.font="12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";const c=this.actionRects(),u=l?23:10,f=c.length?c[0].x-8-u:this.controls.length?t-10-(xa+this.controls.length*(ga+_a))-(u-10):t-10-u;l?(r.save(),r.fillStyle=a.accent,r.shadowColor=a.accent,r.shadowBlur=4,r.beginPath(),r.arc(12.5,i/2-1,2.5,0,Math.PI*2),r.fill(),r.restore(),r.font="bold 9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",r.letterSpacing="1.26px",r.fillStyle=(o?a.titleFocused:a.title)??(o?a.textFocused:a.text),r.fillText(this._title.toUpperCase(),u,i/2-1,Math.max(20,f)),r.letterSpacing="0px"):(r.fillStyle=o?a.textFocused:a.text,r.fillText(this._title,u,i/2-1,Math.max(20,f))),this.drawActions(r,o,c),this.drawControls(r,o),this.barTexture.needsUpdate=!0}drawActions(e,t,i){const s=this.stage.barColors;e.font=td,e.textAlign="center",e.textBaseline="middle",this._actions.forEach((r,o)=>{const a=i[o];r.active?this.fillAlpha(e,s.accent,.28,a):this.hoverAction===r.id&&this.fillAlpha(e,s.accent,.14,a),e.strokeStyle=r.active?s.accent:t?s.boxFocused:s.box,e.lineWidth=1,e.strokeRect(a.x+.5,a.y+.5,a.w-1,a.h-1),e.fillStyle=r.active?s.accentText:t?s.textFocused:s.text,e.fillText(r.label,a.x+a.w/2,a.y+a.h/2+.5)}),e.textAlign="left"}fillAlpha(e,t,i,s){const r=/^#([0-9a-f]{6})$/i.exec(t);if(r){const o=parseInt(r[1],16);e.fillStyle=`rgba(${o>>16&255},${o>>8&255},${o&255},${i})`,e.fillRect(s.x,s.y,s.w,s.h);return}e.save(),e.globalAlpha=i,e.fillStyle=t,e.fillRect(s.x,s.y,s.w,s.h),e.restore()}drawControls(e,t){const i=this.stage.barColors;for(const s of this.controls){const r=this.controlRect(s);this.hoverControl===s&&this.fillAlpha(e,i.accent,.2,r),e.strokeStyle=t?i.textFocused:i.text,e.lineWidth=1.4;const o=r.x+r.w/2,a=r.y+r.h/2;e.beginPath(),s==="info"?(e.arc(o,a,6,0,Math.PI*2),e.moveTo(o,a-.5),e.lineTo(o,a+3),e.moveTo(o,a-3.2),e.lineTo(o,a-2.6)):s==="close"?(e.moveTo(o-4,a-4),e.lineTo(o+4,a+4),e.moveTo(o+4,a-4),e.lineTo(o-4,a+4)):s==="minimize"?this._minimized?(e.moveTo(o-5,a),e.lineTo(o+5,a),e.moveTo(o,a-5),e.lineTo(o,a+5)):(e.moveTo(o-5,a+3),e.lineTo(o+5,a+3)):this._maximized?(e.rect(o-5,a-2,7,6),e.moveTo(o-2,a-2),e.lineTo(o-2,a-5),e.lineTo(o+5,a-5),e.lineTo(o+5,a+1),e.lineTo(o+2,a+1)):e.rect(o-5,a-4,10,8),e.stroke()}}dispose(){var e,t,i;if(this.body.geometry.dispose(),this.bar.geometry.dispose(),this.bar.material.dispose(),this.barTexture.dispose(),this.grip){this.grip.geometry.dispose();const s=this.grip.material;(e=s.map)==null||e.dispose(),s.dispose()}(i=(t=this.content).dispose)==null||i.call(t)}}class gE{constructor(e){Fe(this,"renderer");Fe(this,"scene",new er);Fe(this,"camera");Fe(this,"canvas");Fe(this,"panels",new Map);Fe(this,"pxPerUnit");Fe(this,"focusedId",null);Fe(this,"barColors",{...ed});Fe(this,"barStyle","plain");Fe(this,"controls",null);Fe(this,"ray",new gb);Fe(this,"ndc",new at);Fe(this,"raf",0);Fe(this,"rendering",!1);Fe(this,"raiseCounter",0);Fe(this,"hovered",null);Fe(this,"pressed",null);Fe(this,"dragging",null);Fe(this,"suppressClick",!1);Fe(this,"menu",null);Fe(this,"lensPanel",null);Fe(this,"resizeObserver");Fe(this,"disposers",[]);Fe(this,"lastCursor","");Fe(this,"passThrough");Fe(this,"swallowClick",!1);Fe(this,"pressedControl",null);Fe(this,"resizing",null);Fe(this,"hoverGrip",null);Fe(this,"hoverBar",null);Fe(this,"cancelFly",null);this.o=e,this.pxPerUnit=e.pxPerUnit??360,this.passThrough=!!e.passThrough,this.renderer=new Qs({antialias:!0,alpha:!!e.transparent}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(e.background??329738,e.transparent?0:1),this.canvas=this.renderer.domElement,this.passThrough||(this.canvas.tabIndex=0),this.canvas.style.cssText="display:block;width:100%;height:100%;outline:none;touch-action:none"+(this.passThrough?";pointer-events:none":""),e.container.appendChild(this.canvas),this.camera=new Hn(e.fov??45,1,e.near??.05,e.far??100);const t=e.cameraPosition??[0,.1,3.4];this.camera.position.set(...t),this.camera.lookAt(0,0,0),e.controls&&(this.controls=e.controls(this.camera,this.canvas),this.controls.addEventListener("change",()=>this.invalidate()));const i=this.passThrough?e.inputTarget??document:this.canvas;this.on(i,"pointerdown",s=>this.onPointerDown(s),{capture:!0}),this.on(i,"pointermove",s=>this.onPointerMove(s)),this.passThrough||this.on(this.canvas,"pointerleave",()=>this.setHover(null)),this.on(window,"pointerup",s=>this.onPointerUp(s)),this.on(window,"pointercancel",s=>this.onPointerUp(s)),this.on(i,"click",s=>this.onClick(s),{capture:this.passThrough}),this.on(i,"wheel",s=>this.onWheel(s),{capture:!0,passive:!1}),this.on(this.passThrough?window:this.canvas,"keydown",s=>this.onKey(s)),e.barColors&&(this.barColors={...ed,...e.barColors}),e.barStyle&&(this.barStyle=e.barStyle),e.displayMenu&&(this.menu=new br(this.pxPerUnit,typeof e.displayMenu=="object"?e.displayMenu.colors:{}),this.on(i,"contextmenu",s=>this.onContextMenu(s),{capture:!0})),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.container),this.resize()}on(e,t,i,s){e.addEventListener(t,i,s),this.disposers.push(()=>e.removeEventListener(t,i,s))}setCameraPose(e){var t,i;this.camera.position.set(...e.position),this.camera.lookAt(...e.target),this.camera.updateMatrixWorld(!0),(i=(t=this.controls)==null?void 0:t.target)==null||i.set(...e.target),this.invalidate()}facingPose(e,t={}){const i=this.panels.get(e);if(!i)return null;i.group.updateWorldMatrix(!0,!0);const s=this.pxPerUnit,r=i.content.height/s,o=jn/s,a=i.content.width/s,l=r/2+o,c=i.minimized?r/2:-r/2,u=l-c,f=i.body.localToWorld(new te(0,(l+c)/2,0)),h=new te(0,0,1).applyQuaternion(i.group.getWorldQuaternion(new Si)),m=Math.tan(lu.degToRad(this.camera.fov/2)),g=Math.max(u/2/m,a/2/(m*this.camera.aspect))*(1+(t.margin??.12)),v=f.clone().addScaledVector(h,g);return{position:[v.x,v.y,v.z],target:[f.x,f.y,f.z]}}framePose(e,t={}){const i=(e??[...this.panels.keys()]).map(T=>this.panels.get(T)).filter(T=>!!T);if(!i.length)return null;const s=this.pxPerUnit,r=jn/s,o=new te;for(const T of i)T.group.updateWorldMatrix(!0,!0),o.add(new te(0,0,1).applyQuaternion(T.group.getWorldQuaternion(new Si)));o.normalize(),isFinite(o.x)||o.set(0,0,1);const a=new te().crossVectors(new te(0,1,0),o);a.lengthSq()<1e-6&&a.set(1,0,0),a.normalize();const l=new te().crossVectors(o,a).normalize();let c=1/0,u=-1/0,f=1/0,h=-1/0,m=0,g=0;for(const T of i){const E=T.content.width/s,L=T.content.height/s,x=L/2+r,M=T.minimized?L/2:-L/2;for(const[D,U]of[[-E/2,M],[E/2,M],[-E/2,x],[E/2,x]]){const O=T.body.localToWorld(new te(D,U,0)),X=O.dot(a),j=O.dot(l);c=Math.min(c,X),u=Math.max(u,X),f=Math.min(f,j),h=Math.max(h,j),m+=O.dot(o),g++}}const v=1+(t.margin??.08),p=(u-c)*v,d=(h-f)*v,b=Math.tan(lu.degToRad(this.camera.fov/2)),y=Math.max(d/2/b,p/2/(b*this.camera.aspect),t.minDistance??0),_=a.clone().multiplyScalar((c+u)/2).addScaledVector(l,(f+h)/2).addScaledVector(o,m/g),P=_.clone().addScaledVector(o,y);return{position:[P.x,P.y,P.z],target:[_.x,_.y,_.z]}}flyTo(e,t=550){var s;if((s=this.cancelFly)==null||s.call(this),t<=0)return this.setCameraPose(e),Promise.resolve();const i=this.getCameraPose();return new Promise(r=>{const o=performance.now();let a=0;this.cancelFly=()=>{cancelAnimationFrame(a),this.cancelFly=null,r()};const l=c=>{const u=Math.min(1,(c-o)/t),f=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,h=(m,g)=>[m[0]+(g[0]-m[0])*f,m[1]+(g[1]-m[1])*f,m[2]+(g[2]-m[2])*f];this.setCameraPose({position:h(i.position,e.position),target:h(i.target,e.target)}),u<1?a=requestAnimationFrame(l):(this.cancelFly=null,r())};a=requestAnimationFrame(l)})}getCameraPose(){const e=this.camera.position,t=this.camera.getWorldDirection(new te).add(e);return{position:[e.x,e.y,e.z],target:[t.x,t.y,t.z]}}addPanel(e){if(this.panels.has(e.id))throw new Error(`CathodeStage3D: duplicate panel id "${e.id}"`);const t=new mE(this,e);return t.content.surface.setAnisotropy(this.renderer.capabilities.getMaxAnisotropy()),this.panels.set(e.id,t),this.scene.add(t.group),this.raise(t),this.invalidate(),t}removePanel(e){var i;const t=this.panels.get(e);t&&(this.focusedId===e&&this.setFocus(null),this.hovered===t&&(this.hovered=null),this.pressed===t&&(this.pressed=null),this.lensPanel===t&&(this.lensPanel=null),((i=this.menu)==null?void 0:i.panel)===t&&this.menu.close(),this.scene.remove(t.group),t.dispose(),this.panels.delete(e),this.invalidate())}setPanelVisible(e,t){var s;const i=this.panels.get(e);i&&(i.setVisible(t),t||(this.focusedId===e&&this.setFocus(null),this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null),((s=this.dragging)==null?void 0:s.panel)===i&&(this.dragging=null)),this.invalidate())}setPanelMinimized(e,t){const i=this.panels.get(e);i&&(i.setMinimized(t),t&&(this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null)),this.invalidate())}setFocus(e){var s,r;if(this.focusedId===e){e&&this.raise(this.panels.get(e));return}const t=this.focusedId&&this.panels.get(this.focusedId);this.focusedId=e,t&&t.invalidateBar();const i=e?this.panels.get(e):null;i&&(this.raise(i),i.invalidateBar()),(r=(s=this.o).onFocus)==null||r.call(s,e),this.invalidate()}raise(e){e.body.renderOrder=e.bar.renderOrder=++this.raiseCounter,e.grip&&(e.grip.renderOrder=e.body.renderOrder+.5)}getLayout(){const e={};for(const[t,i]of this.panels)e[t]={x:i.group.position.x,y:i.group.position.y,z:i.group.position.z,rotY:i.group.rotation.y,visible:i.visible,minimized:i.minimized,...i.resizable?{size:{w:i.content.width,h:i.content.height}}:{}};return e}applyLayout(e){for(const[t,i]of Object.entries(e)){const s=this.panels.get(t);s&&(s.group.position.set(i.x??s.group.position.x,i.y??s.group.position.y,i.z??s.group.position.z),i.rotY!==void 0&&(s.group.rotation.y=i.rotY),i.visible!==void 0&&this.setPanelVisible(t,i.visible),i.minimized!==void 0&&this.setPanelMinimized(t,i.minimized),i.size&&s.resize(i.size.w,i.size.h))}this.invalidate()}invalidate(){this.raf||this.rendering||(this.raf=requestAnimationFrame(()=>{this.raf=0,this.frame()}))}frame(){var e;this.rendering=!0;for(const t of this.panels.values())t.paintIfDirty();(e=this.controls)==null||e.update(),this.renderer.render(this.scene,this.camera),this.rendering=!1}resize(){const e=this.o.container.clientWidth,t=this.o.container.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate())}setRay(e,t){const i=this.canvas.getBoundingClientRect();this.ndc.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera)}contentAt(e,t,i){this.setRay(t,i);const s=this.ray.intersectObject(e.body)[0];return s!=null&&s.uv?e.content.surface.contentPoint(s.uv.x,s.uv.y):null}hitScaleAt(e,t,i){const s=this.contentAt(e,t-4,i),r=this.contentAt(e,t+4,i);return!s||!r?1:Math.max(1,Math.abs(r.x-s.x)/8)}pick(e,t){this.setRay(e,t);const i=[];for(const m of this.panels.values())m.visible&&(m.minimized||i.push(m.body),i.push(m.bar));const s=this.ray.intersectObjects(i,!1);if(!s.length)return null;const r=s[0].distance;let o=s[0];for(const m of s)m.distance-r<.001&&m.object.renderOrder>o.object.renderOrder&&(o=m);const a=o.object.userData.panel,l=o.object===a.bar?"bar":"body",c=l==="body"&&o.uv?a.content.surface.contentPoint(o.uv.x,o.uv.y):null,u=l==="bar"&&o.uv?a.controlAt(o.uv.x*a.content.width,(1-o.uv.y)*jn):null,f=l==="bar"&&o.uv&&!u?a.actionAt(o.uv.x*a.content.width,(1-o.uv.y)*jn):null,h=l==="body"&&a.resizable&&!a.minimized&&!!o.uv&&o.uv.x*a.content.width>a.content.width-Vs&&(1-o.uv.y)*a.content.height>a.content.height-Vs;return{panel:a,part:l,content:c,control:u,action:f,handle:h,uv:o.uv?{x:o.uv.x,y:o.uv.y}:null}}clientPointForContent(e,t,i){const s=this.panels.get(e);if(!s)return null;const r=s.content.surface,o=s.content.width,a=s.content.height;let l=t/o,c=1-i/a;const u=(g,v)=>r.contentPoint(g,v);for(let g=0;g<12;g++){const v=u(l,c);if(!v){l=.5+(l-.5)*.8,c=.5+(c-.5)*.8;continue}const p=v.x-t,d=v.y-i;if(Math.hypot(p,d)<.05)break;const b=1e-4,y=u(l+b,c),_=u(l,c+b);if(!y||!_)break;const P=(y.x-v.x)/b,T=(_.x-v.x)/b,E=(y.y-v.y)/b,L=(_.y-v.y)/b,x=P*L-T*E;if(Math.abs(x)<1e-9)break;l-=(L*p-T*d)/x,c-=(-E*p+P*d)/x}const f=u(l,c);if(!f||Math.hypot(f.x-t,f.y-i)>1.5)return null;s.group.updateWorldMatrix(!0,!0);const h=s.body.localToWorld(new te((l-.5)*(o/this.pxPerUnit),(c-.5)*(a/this.pxPerUnit),0));h.project(this.camera);const m=this.canvas.getBoundingClientRect();return{x:m.left+(h.x+1)/2*m.width,y:m.top+(1-h.y)/2*m.height}}clientPointForHandle(e){const t=this.panels.get(e);if(!t||!t.resizable)return null;t.group.updateWorldMatrix(!0,!0);const i=this.pxPerUnit,s=t.body.localToWorld(new te((t.content.width/2-Vs/2)/i,-(t.content.height/2-Vs/2)/i,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}clientPointForAction(e,t){const i=this.panels.get(e),s=i==null?void 0:i.actionRects().find(l=>l.id===t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=i.bar.localToWorld(new te((s.x+s.w/2-i.content.width/2)/r,-(s.y+s.h/2-jn/2)/r,0)).project(this.camera),a=this.canvas.getBoundingClientRect();return{x:a.left+(o.x+1)/2*a.width,y:a.top+(1-o.y)/2*a.height}}clientPointForControl(e,t){const i=this.panels.get(e),s=i==null?void 0:i.controlRect(t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=new te((s.x+s.w/2-i.content.width/2)/r,0,0);o.y=(jn/2-(s.y+s.h/2))/r;const a=i.bar.localToWorld(o).project(this.camera),l=this.canvas.getBoundingClientRect();return{x:l.left+(a.x+1)/2*l.width,y:l.top+(1-a.y)/2*l.height}}clientPointForBar(e){const t=this.panels.get(e);if(!t)return null;t.group.updateWorldMatrix(!0,!0);const i=t.bar.getWorldPosition(new te).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(i.x+1)/2*s.width,y:s.top+(1-i.y)/2*s.height}}send(e,t,i,s={}){var a,l;const r=this.contentAt(e,i.clientX,i.clientY),o={kind:t,x:r?r.x:-1,y:r?r.y:-1,hitScale:r?this.hitScaleAt(e,i.clientX,i.clientY):1,clientX:i.clientX,clientY:i.clientY,deltaX:s.deltaX??0,deltaY:s.deltaY??0,detail:t==="click"?i.detail??0:0,shiftKey:!!i.shiftKey};return((l=(a=e.content).pointer)==null?void 0:l.call(a,o))??null}setCursor(e){e!==this.lastCursor&&(this.lastCursor=e,this.o.onCursor?this.o.onCursor(e):this.canvas.style.cursor=e)}setHover(e,t){this.hovered&&this.hovered!==e&&this.send(this.hovered,"leave",t??{clientX:-1,clientY:-1}),this.hovered=e,e||(this.setCursor(""),this.setLens(null))}accepts(e){return!this.passThrough||!this.o.shouldHandle||this.o.shouldHandle(e.target)}onPointerDown(e){var i;if(e.button!==0||!this.accepts(e))return;if((i=this.menu)!=null&&i.isOpen){const s=this.pickMenu(e.clientX,e.clientY);if(s){e.preventDefault(),e.stopPropagation(),this.suppressClick=!0,this.menuAct(s);return}this.menu.close(),this.invalidate()}this.passThrough||this.canvas.focus({preventScroll:!0});const t=this.pick(e.clientX,e.clientY);if(!t){this.passThrough&&this.setFocus(null);return}this.passThrough&&(e.stopPropagation(),this.swallowClick=!0),this.controls&&(this.controls.enabled=!1),this.setFocus(t.panel.id),this.suppressClick=!1,t.part==="bar"&&(t.control||t.action)?(this.pressedControl={panel:t.panel,control:t.control,action:t.action},this.setCursor("pointer")):t.part==="bar"?(this.startDrag(t.panel),this.setCursor("grabbing")):t.handle?(this.startResize(t.panel),this.setCursor("nwse-resize")):(this.pressed=t.panel,this.send(t.panel,"down",e))}onPointerMove(e){var s;if(this.resizing){this.resizeTo(e);return}if(this.dragging){this.dragTo(e);return}if(this.pressed){this.send(this.pressed,"drag",e);return}if(this.pressedControl)return;if(!this.accepts(e)){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null);return}if((s=this.menu)!=null&&s.isOpen){const r=this.pickMenu(e.clientX,e.clientY);if(this.menu.setHover(r),r){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null),this.setLens(null),this.setCursor("pointer");return}}const t=this.pick(e.clientX,e.clientY);if(this.setLens(t&&t.part==="body"&&!t.handle?t:null),this.setHoverGrip(t!=null&&t.handle?t.panel:null),this.setHover(t&&t.part==="body"&&!t.handle?t.panel:null,e),this.setHoverBar(t&&t.part==="bar"?t.panel:null,(t==null?void 0:t.control)??null,(t==null?void 0:t.action)??null),!t){this.setCursor("");return}if(t.part==="bar"){this.setCursor(t.control||t.action?"pointer":"grab");return}if(t.handle){this.setCursor("nwse-resize");return}const i=this.send(t.panel,"move",e);i&&this.setCursor(i)}setHoverBar(e,t,i=null){this.hoverBar&&this.hoverBar!==e&&this.hoverBar.setHoverControl(null,null),this.hoverBar=e,e==null||e.setHoverControl(t,i)}setHoverGrip(e){this.hoverGrip&&this.hoverGrip!==e&&this.hoverGrip.setHoverGrip(!1),this.hoverGrip=e,e==null||e.setHoverGrip(!0)}onPointerUp(e){var t,i,s,r;if(this.pressedControl=null,this.resizing){const o=this.resizing;if(this.resizing=null,o.moved){this.suppressClick=!0;const a=o.panel.group.position;(i=(t=this.o).onPanelResized)==null||i.call(t,o.panel.id,{w:o.panel.content.width,h:o.panel.content.height},{x:a.x,y:a.y,z:a.z})}this.setCursor("")}if(this.dragging){this.dragging.moved&&(this.suppressClick=!0);const o=this.dragging.panel;this.dragging=null,this.setCursor(""),(r=(s=this.o).onPanelMoved)==null||r.call(s,o.id,{x:o.group.position.x,y:o.group.position.y,z:o.group.position.z})}this.pressed&&(this.send(this.pressed,"up",e),this.pressed=null),this.controls&&(this.controls.enabled=!0)}onClick(e){var i,s,r,o,a,l;if(!this.accepts(e))return;if(this.passThrough&&this.swallowClick&&(this.swallowClick=!1,e.stopPropagation()),this.suppressClick){this.suppressClick=!1;return}const t=this.pick(e.clientX,e.clientY);t&&this.passThrough&&e.stopPropagation(),t&&t.part==="body"&&this.send(t.panel,"click",e),t&&t.part==="bar"&&(t.control?(s=(i=this.o).onPanelControl)==null||s.call(i,t.panel.id,t.control):t.action?(o=(r=this.o).onPanelAction)==null||o.call(r,t.panel.id,t.action):e.detail>=2&&((l=(a=this.o).onPanelActivate)==null||l.call(a,t.panel.id)))}onWheel(e){if(!this.accepts(e))return;const t=this.pick(e.clientX,e.clientY);!t||t.part!=="body"||(e.preventDefault(),e.stopImmediatePropagation(),this.send(t.panel,"wheel",e,{deltaX:e.deltaX,deltaY:e.deltaY}))}onKey(e){if(this.passThrough){const i=e.target;if(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))return}if(this.menu){if(e.key==="Escape"&&this.menu.isOpen){this.menu.close(),this.invalidate();return}if(e.metaKey&&e.shiftKey&&/^[=+\-_]$/.test(e.key)){const i=this.menu.panel??this.hovered;if(i){e.preventDefault(),this.stepBend(i,e.key==="="||e.key==="+"?ma:-ma);return}}}const t=this.focusedId?this.panels.get(this.focusedId):null;t!=null&&t.content.key&&(t.content.key(e),t.invalidate())}onContextMenu(e){if(!this.menu)return;if(!this.accepts(e)){this.menu.close(),this.invalidate();return}if(this.dragging||this.resizing)return;const t=this.pick(e.clientX,e.clientY);if(!t){this.menu.isOpen&&(this.menu.close(),this.invalidate());return}e.preventDefault(),e.stopPropagation(),this.setFocus(t.panel.id);const i=t.panel.content.width,s=t.panel.content.height,r=t.part==="body"&&t.uv||t.uv?t.uv.x*i:0,o=t.part==="body"&&t.uv?(1-t.uv.y)*s:0;this.menu.open(t.panel,r,o,t.panel.display),this.invalidate()}openDisplayMenu(e,t=8,i=8){const s=this.panels.get(e);!this.menu||!s||(this.menu.open(s,t,i,s.display),this.invalidate())}setMenuColors(e){var t;(t=this.menu)==null||t.setColors(e),this.invalidate()}setBarColors(e){this.barColors={...this.barColors,...e};for(const t of this.panels.values())t.invalidateBar();this.invalidate()}setBarStyle(e){if(this.barStyle!==e){this.barStyle=e;for(const t of this.panels.values())t.invalidateBar();this.invalidate()}}closeDisplayMenu(){var e;(e=this.menu)!=null&&e.isOpen&&(this.menu.close(),this.invalidate())}get displayMenuPanel(){var e;return((e=this.menu)==null?void 0:e.panel)??null}pickMenu(e,t){var s;if(!((s=this.menu)!=null&&s.isOpen))return null;this.setRay(e,t);const i=this.ray.intersectObject(this.menu.mesh,!1)[0];return i!=null&&i.uv?this.menu.rowAtUV(i.uv.x,i.uv.y):null}clientPointForMenuRow(e){var o;if(!((o=this.menu)!=null&&o.isOpen))return null;const{x:t,y:i}=br.rowCentre(e);this.menu.mesh.updateWorldMatrix(!0,!1);const s=this.menu.mesh.localToWorld(new te((t-br.width/2)/this.pxPerUnit,(br.height/2-i)/this.pxPerUnit,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}menuAct(e){var s;const t=(s=this.menu)==null?void 0:s.panel;if(!t)return;const i=t.display;if(e==="curve-"||e==="curve+"){this.stepBend(t,e==="curve+"?ma:-ma);return}this.applyDisplay(t,{[e]:!i[e]})}stepBend(e,t){this.applyDisplay(e,{curvature:Math.max(fE,Math.min(hE,e.display.curvature+t))})}applyDisplay(e,t){var i,s,r;e.setDisplay(t),((i=this.menu)==null?void 0:i.panel)===e&&this.menu.update(e.display),(r=(s=this.o).onPanelDisplay)==null||r.call(s,e.id,e.display),this.invalidate()}setLens(e){const t=e&&e.uv&&e.panel.display.magnify?e.panel:null;this.lensPanel&&this.lensPanel!==t&&(this.lensPanel.content.surface.setLens(null),this.lensPanel.invalidate()),this.lensPanel=t,t&&e.uv&&(t.content.surface.setLens({x:e.uv.x,y:e.uv.y}),t.invalidate())}startResize(e){var c;(c=this.menu)==null||c.close(),e.group.updateWorldMatrix(!0,!0);const t=e.group.getWorldQuaternion(new Si),i=new te(1,0,0).applyQuaternion(t),s=new te(0,1,0).applyQuaternion(t),r=new te(0,0,1).applyQuaternion(t),o=this.pxPerUnit,a=e.body.localToWorld(new te(-e.content.width/o/2,e.content.height/o/2,0)),l=new vi().setFromNormalAndCoplanarPoint(r,a);this.resizing={panel:e,tl:a,right:i,up:s,plane:l,moved:!1}}resizeTo(e){const t=this.resizing;this.setRay(e.clientX,e.clientY);const i=new te;if(!this.ray.ray.intersectPlane(t.plane,i))return;const s=this.pxPerUnit,r=i.sub(t.tl),o=Math.round(r.dot(t.right)*s),a=Math.round(-r.dot(t.up)*s),l=t.panel,c=Math.round(Math.min(l.maxSize.w,Math.max(l.minSize.w,o))),u=Math.round(Math.min(l.maxSize.h,Math.max(l.minSize.h,a)));c===l.content.width&&u===l.content.height||(l.group.position.copy(t.tl).addScaledVector(t.right,c/s/2).addScaledVector(t.up,-u/s/2),l.resize(c,u),t.moved=!0)}startDrag(e){var o;(o=this.menu)==null||o.close(),e.group.updateWorldMatrix(!0,!0);const t=new te(0,0,1).applyQuaternion(e.group.quaternion),i=new vi().setFromNormalAndCoplanarPoint(t,e.group.position),s=new te,r=new te;this.ray.ray.intersectPlane(i,s)&&r.copy(e.group.position).sub(s),this.dragging={panel:e,plane:i,offset:r,moved:!1}}dragTo(e){const t=this.dragging;this.setRay(e.clientX,e.clientY);const i=new te;this.ray.ray.intersectPlane(t.plane,i)&&(t.panel.group.position.copy(i.add(t.offset)),t.moved=!0,this.invalidate())}dispose(){var e,t,i;(e=this.cancelFly)==null||e.call(this),cancelAnimationFrame(this.raf),this.resizeObserver.disconnect();for(const s of this.disposers)s();for(const s of[...this.panels.values()])this.removePanel(s.id);(t=this.menu)==null||t.dispose(),(i=this.controls)==null||i.dispose();try{this.renderer.forceContextLoss()}catch{}this.renderer.dispose(),this.canvas.remove()}}function vE(n){const e=Qa();return e.run(()=>{const t=be(0),i=be(0),s=be(0),r=be(-1),o=new Map,a=()=>{var b;return((b=n.minCellW)==null?void 0:b.call(n))??210},l=()=>{var b;return((b=n.cellAspect)==null?void 0:b.call(n))??.6},c=()=>Zu({count:n.cells().length,width:t.value,minCellW:a(),cellAspect:l(),scrollY:s.value}),u=()=>_m(c().totalH,i.value);je([n.cells,n.theme,()=>{var b;return(b=n.showVolume)==null?void 0:b.call(n)},()=>{var b;return(b=n.volumeFraction)==null?void 0:b.call(n)},()=>{var b;return(b=n.slotW)==null?void 0:b.call(n)},()=>{var b;return(b=n.colors)==null?void 0:b.call(n)},a,l],()=>{s.value=Math.min(s.value,u()),n.host.redraw()}),je([s,r],()=>n.host.redraw());function f(b,y){t.value=b,i.value=y,s.value=Math.min(s.value,u()),n.host.redraw()}function h(b){const y=u();return y<=0?!1:(s.value=Math.max(0,Math.min(y,s.value+b)),!0)}function m(b,y){const _=gu(c().rects,b,y);return _>=0?n.cells()[_].id:null}function g(b,y){const _=gu(c().rects,b,y);return r.value=_,_}function v(){r.value=-1}function p(b,{dpr:y,glow:_}){var P,T,E,L;xm(b,{cells:n.cells(),theme:n.theme(),glow:_,showVolume:((P=n.showVolume)==null?void 0:P.call(n))??!0,volumeFraction:((T=n.volumeFraction)==null?void 0:T.call(n))??.22,slotW:((E=n.slotW)==null?void 0:E.call(n))??3,colors:(L=n.colors)==null?void 0:L.call(n),hoveredCell:r.value,scrollY:s.value,minCellW:a(),cellAspect:l(),dpr:y},o)}function d(){o.clear(),e.stop()}return{viewW:t,viewH:i,scrollY:s,hoveredCell:r,layout:c,maxScroll:u,setViewport:f,wheel:h,cellIdAt:m,hover:g,leave:v,paint:p,dispose:d}})}function _E(n){let e=()=>{};const t=n.theme??"phosphor",i=am({columnDefs:()=>n.columnDefs,defaultColDef:()=>n.defaultColDef,rowData:()=>n.rowData,pinnedBottomRowData:()=>n.pinnedBottomRowData,rowHeight:()=>n.rowHeight??28,theme:()=>t,emit:n.emit??(()=>{}),host:{redraw:()=>e()}});i.init(),i.setViewport(n.width,n.height,n.width,n.height);const s=new Ji({mode:"world",paint:(l,c)=>i.paint(l,c)}),r=l=>{const c={cx:l.x,cy:l.y,hitScale:l.hitScale};switch(l.kind){case"move":return i.resizing?null:i.hover(c);case"leave":return i.leave(),null;case"down":return i.pointerDown(c,l.clientX,l.clientY),null;case"drag":return i.globalMove(l.clientX,l.clientY),null;case"up":return i.globalUp(),null;case"click":return i.click(c,{shiftKey:l.shiftKey,detail:l.detail}),null;case"wheel":return i.wheel(l.deltaX,l.deltaY,l.shiftKey),null}},o=l=>{if(i.activeFilter.value){if(l.key==="Escape"){l.preventDefault(),i.clearFilter();return}if(l.key==="Enter"){l.preventDefault(),i.closeFilter();return}if(l.key==="Backspace"){l.preventDefault(),i.setFilterText(i.filterPopupValue.value.slice(0,-1)),e();return}if(l.key.length===1&&!l.ctrlKey&&!l.metaKey){l.preventDefault(),i.setFilterText(i.filterPopupValue.value+l.key),e();return}}i.keyDown(l)},a={model:i,surface:s,width:n.width,height:n.height,attach:l=>{e=l},pointer:r,key:o,resize(l,c){a.width=l,a.height=c,i.setViewport(l,c,l,c),e()},dispose:()=>{i.dispose(),s.dispose()}};return a}function xE(n){let e=()=>{};const t=tl({entries:n.entries,theme:n.theme??"phosphor",showTimestamps:n.showTimestamps,formatTs:n.formatTs,wordWrap:n.wordWrap,maxLines:n.maxLines}),i=cm({entries:()=>t.entries,theme:()=>t.theme??"phosphor",showTimestamps:()=>t.showTimestamps??!0,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap??!0,maxLines:()=>t.maxLines??0,host:{redraw:()=>e()}});i.setViewport(n.width,n.height),i.scrollToBottom();const s=new Ji({mode:"world",paint:(c,u)=>i.paint(c,u)});let r={x:0,y:0},o=!1;const a=c=>{switch(c.kind){case"move":return i.hover(c.x<0?-1:c.y),null;case"leave":return i.leave(),null;case"down":return r={x:c.clientX,y:c.clientY},o=!1,i.panStart(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"drag":return Math.hypot(c.clientX-r.x,c.clientY-r.y)>4&&(o=!0),i.panMove(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"up":return i.panEnd(),null;case"click":return o||i.click(c.x<0?-1:c.y,c.shiftKey),o=!1,null;case"wheel":return i.wheel(c.deltaX,c.deltaY,c.shiftKey),null}},l={model:i,surface:s,width:n.width,height:n.height,attach:c=>{e=c},pointer:a,key:c=>i.keyDown(c),update(c){Object.assign(t,c),e()},resize(c,u){l.width=c,l.height=u,i.setViewport(c,u),e()},dispose:()=>{i.dispose(),s.dispose()}};return l}function yE(n){let e=()=>{};const t=tl({candles:n.candles,theme:n.theme,slotW:n.slotW,showVolume:n.showVolume,volumeFraction:n.volumeFraction,overlays:n.overlays,markers:n.markers,compact:n.compact,colors:n.colors}),i=dm({candles:()=>t.candles,theme:()=>t.theme??"phosphor",slotW:()=>t.slotW??8,showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??um,overlays:()=>t.overlays,markers:()=>t.markers,compact:()=>t.compact??!1,colors:()=>t.colors,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new Ji({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{switch(a.kind){case"move":return i.hoverAt(a.x,a.y),null;case"leave":return i.leave(),null;case"down":return i.panStart(a.clientX*a.hitScale),null;case"drag":return i.panMove(a.clientX*a.hitScale),null;case"up":return i.panEnd(),null;case"wheel":return i.wheel(a.deltaX,a.deltaY,a.shiftKey,a.x),null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,key:a=>i.keyDown(a),update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function ME(n){let e=()=>{};const t=tl({cells:n.cells,theme:n.theme,showVolume:n.showVolume,volumeFraction:n.volumeFraction,slotW:n.slotW,minCellW:n.minCellW,cellAspect:n.cellAspect,colors:n.colors}),i=vE({cells:()=>t.cells,theme:()=>t.theme??"phosphor",showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??.22,slotW:()=>t.slotW??3,colors:()=>t.colors,minCellW:()=>t.minCellW??210,cellAspect:()=>t.cellAspect??.6,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new Ji({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{var l;switch(a.kind){case"move":return i.hover(a.x,a.y)>=0?"pointer":null;case"leave":return i.leave(),null;case"click":{const c=i.cellIdAt(a.x,a.y);return c&&((l=n.onCellClick)==null||l.call(n,c)),null}case"wheel":return i.wheel(a.deltaY),null;default:return null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function SE(n){let e=()=>{},t={...n};const i=()=>((t.min??-1)+(t.max??1))/2;let s=t.animate===!1?t.value:i(),r=0;const o=new Ji({mode:"world",paint:(c,{dpr:u,glow:f})=>{ym(c,{dpr:u,theme:t.theme??"none",colors:t.colors,glow:f,shown:s,value:t.value,min:t.min??-1,max:t.max??1,readout:t.readout,stance:t.stance,sub:t.sub,leftLabel:t.leftLabel??"−",rightLabel:t.rightLabel??"+",sideLetters:t.sideLetters??["−","+"],marks:t.marks??[],meter:t.meter??null,caption:t.caption,note:t.note,items:t.items??[],emptyText:t.emptyText})}}),a=()=>{if(cancelAnimationFrame(r),t.animate===!1){s=t.value,e();return}const c=()=>{const u=t.value-s;if(Math.abs(u)<.004){s=t.value,e();return}s+=u*.18,e(),r=requestAnimationFrame(c)};r=requestAnimationFrame(c)},l={surface:o,width:n.width,height:n.height,attach:c=>{e=c,a()},resize(c,u){l.width=c,l.height=u,e()},update(c){const u=c.value!==void 0&&c.value!==t.value;t={...t,...c},u||c.animate!==void 0?a():e()},get shown(){return s},dispose:()=>{cancelAnimationFrame(r),e=()=>{},o.dispose()}};return l}const fs=300,bE=36e5,wE=Date.UTC(2026,9,1,0,0,0);let lc=20261122;const ya=()=>(lc=lc*1664525+1013904223>>>0,lc/4294967296),An=[];let id=100;for(let n=0;n<fs;n++){const e=id,t=e*(1+(ya()-.48)*.02+Math.sin(n/17)*.002),i=Math.max(e,t)*(1+ya()*.006),s=Math.min(e,t)*(1-ya()*.006);An.push({start:wE+n*bE,open:e,high:i,low:s,close:t,volume:800+Math.round(ya()*2200)}),id=t}const bm=n=>An.map((e,t)=>t<n-1?NaN:An.slice(t-n+1,t+1).reduce((i,s)=>i+s.close,0)/n),Da=bm(20),sd=An.map((n,e)=>e<19?NaN:Math.sqrt(An.slice(e-19,e+1).reduce((t,i)=>t+(i.close-Da[e])**2,0)/20)),EE=[{kind:"band",upper:Da.map((n,e)=>n+2*sd[e]),lower:Da.map((n,e)=>n-2*sd[e]),middle:Da,color:"#6ee7a7"},{kind:"line",data:bm(50),color:"#fbbf24",label:"SMA50"},{kind:"hline",price:An[fs-1].close,color:"#60a5fa",label:"last"}],TE=[{timestamp:An[fs-40].start,price:An[fs-40].low,kind:"entry"},{timestamp:An[fs-12].start,price:An[fs-12].high,kind:"exit"},{timestamp:An[fs-90].start,price:An[fs-90].low,kind:"entry",label:"E"}];function AE(n){return Array.from({length:n},(e,t)=>{const i=An.slice(t*7,t*7+70),s=t%3===0;return{id:`P${t}`,title:t%5===4?`Will the long question number ${t} resolve before the end of the quarter?`:`AAPL${t}`,badge:t%2?"EQ":"₿",note:`${t%2?"-":"+"}${(t*.37+.2).toFixed(2)}%`,noteColor:t%2?"#e74c3c":"#00bc8c",open:s,candles:i,overlays:s?[{kind:"hline",price:i[20].close,color:"#5b8ff9",dashed:!1,label:"entry"}]:[]}})}const CE={class:"ws3d-bar"},RE={key:0,class:"ws3d-caption",role:"status"},rd=26,PE=li({__name:"Workspace3D",emits:["mode"],setup(n,{emit:e}){const t=e,i=be("day"),s=be(null),r=be(""),o=be(!1),a=be("Overview"),l={day:{bg:"#e6edf6",bgFocused:"#f3f7fc",line:"#b9c7da",lineFocused:"#2f6fd0",text:"#5a6b80",textFocused:"#1d2b3d",title:"#2f6fd0",titleFocused:"#1f56ad",box:"#b9c7da",boxFocused:"#8aa0bd",accent:"#1f9d66",accentText:"#0b2a1a"},night:{}},c={day:{bg:"#f8fafd",border:"#b9c7da",text:"#1d2b3d",muted:"#6b7c92",accent:"#2f6fd0",divider:"#d6dfeb",hover:"rgba(47,111,208,0.10)"},night:{}},u=["BTC-USD","ETH-USD","SOL-USD","AVAX-USD","LINK-USD","DOGE-USD","ADA-USD","XRP-USD"],f=Array.from({length:80},(F,H)=>({id:H+1,product:u[H%u.length],side:H%3===0?"short":"long",pnl:Math.round(Math.sin(H*1.7)*480)/10,size:100+H*37%900})),h=Date.UTC(2026,10,22,14,0,0),m=["info","info","success","warn","debug","info"],g=Array.from({length:60},(F,H)=>({ts:h+H*7e3,level:m[H%m.length],text:`scanner cycle ${H*3} complete — ${H%5} candidates passed the filter`})),v=F=>{const H=new Date(F);return`${String(H.getUTCHours()).padStart(2,"0")}:${String(H.getUTCMinutes()).padStart(2,"0")}:${String(H.getUTCSeconds()).padStart(2,"0")}`},p={trades:{x:0,y:0,w:560,h:320,title:"Open positions"},candle:{x:580,y:0,w:600,h:320,title:"BTC-USD · 1h"},tilt:{x:1200,y:0,w:340,h:320,title:"Net tilt"},wall:{x:0,y:370,w:740,h:320,title:"Charts"},log:{x:760,y:370,w:780,h:320,title:"Monitor log"}},d=1540,b=690+rd;let y=null,_=null,P=null;const T=new Map;let E=0;function L(F,H){const Y=s.value,ae=F==="day"?"paper":"phosphor",ee=F==="day";y=new gE({container:Y,transparent:!0,controls:(ce,C)=>{const N=new Zw(ce,C);return N.enableDamping=!0,N.minDistance=.4,N.maxDistance=16,N.zoomSpeed=.9,N},cameraPosition:[0,0,6],displayMenu:{colors:c[F]},barStyle:"cockpit",barColors:l[F],onPanelActivate:ce=>{const C=y.facingPose(ce,{margin:.04});C&&y.flyTo(C,650),a.value="Overview"},onPanelControl:(ce,C)=>{const N=y.panels.get(ce);if(C==="info"){U(M[ce]??"",5e3);return}if(C==="minimize"){y.setPanelMinimized(ce,!N.minimized);return}if(C==="maximize")if(N.maximized){N.setMaximized(!1);const A=T.get(ce);A&&y.flyTo(A,700)}else{T.set(ce,y.getCameraPose()),N.setMaximized(!0);const A=y.facingPose(ce,{margin:.03});A&&y.flyTo(A,700)}}});const de={curvature:ee?5:10,scanlines:!ee,vignette:!1},ye=!ee,ve=y.pxPerUnit,Be=ce=>{const C=p[ce];return[(C.x+C.w/2-d/2)/ve,-(C.y+rd+C.h/2-b/2)/ve,0]},ke=(ce,C,N={})=>y.addPanel({id:ce,title:p[ce].title,content:C,position:Be(ce),look:de,glow:ye,controls:["info","minimize","maximize"],resizable:!0,...N});ke("trades",_E({width:p.trades.w,height:p.trades.h,theme:ae,rowData:f,columnDefs:[{field:"id",headerName:"ID",width:60,sortable:!0},{field:"product",headerName:"Product",width:130,sortable:!0,filter:!0},{field:"side",headerName:"Side",width:90,sortable:!0},{field:"pnl",headerName:"P&L %",width:110,sortable:!0,cellStyle:ce=>({color:ce.value>=0?ee?"#16794f":"#6ee7a7":ee?"#c0392b":"#f87171"})},{field:"size",headerName:"Size",width:100,sortable:!0}],rowHeight:24})),ke("candle",yE({width:p.candle.w,height:p.candle.h,candles:An,overlays:EE,markers:TE,theme:ae})),P=SE({width:p.tilt.w,height:p.tilt.h,theme:ae,value:.62,min:-1,max:1,stance:"net long",sub:"5 long · 3 short · 9 flat",leftLabel:"SHORT",rightLabel:"LONG",sideLetters:["S","L"],caption:"tilt of the book",note:"a gauge, in the same scene",items:[{label:"BTC",side:"right",value:"+2.1%",tone:"up"},{label:"ETH",side:"right",value:"+0.8%",tone:"up"},{label:"XRP",side:"left",value:"−1.4%",tone:"down"}]}),ke("tilt",P),ke("wall",ME({width:p.wall.w,height:p.wall.h,cells:AE(9),theme:ae})),ke("log",xE({width:p.log.w,height:p.log.h,entries:g,theme:ae,formatTs:v}));const Ve=H??y.framePose(void 0,{margin:.06});Ve&&y.setCameraPose(Ve),_=setInterval(()=>{const ce=Math.round(Math.sin(Date.now()/4e3)*90)/100;P==null||P.update({value:ce,stance:ce>=0?"net long":"net short"})},2500),window.__ws3d={stage:y,overview:O,recenter:X,tour:J,stopTour:k,setMode:ne,layout:p,setCaption:ce=>{r.value=ce},setTilt:ce=>{_&&clearInterval(_),_=null,P==null||P.update({value:ce,stance:ce>=0?"net long":"net short"})}}}function x(){_&&clearInterval(_),_=null,y==null||y.dispose(),y=null,P=null,T.clear()}const M={trades:"A sortable, filterable canvas grid — click a header to sort, the funnel to filter",candle:"A three.js candlestick chart — wheel to zoom the series, drag to pan, hover for the crosshair",tilt:"A bipolar gauge — the needle eases to each new reading",wall:"A wall of mini charts drawn into ONE surface — hover a card, scroll the wall",log:"A scrolling console — follow the tail, select and copy lines"};let D=null;function U(F,H){r.value=F,D&&clearTimeout(D),D=setTimeout(()=>{o.value||(r.value="")},H)}function O(){const F=y==null?void 0:y.framePose(void 0,{margin:.06});F&&y.flyTo(F,800),a.value="Overview"}function X(){var F;for(const[H]of T)(F=y==null?void 0:y.panels.get(H))==null||F.setMaximized(!1);T.clear(),O()}async function j(F,H=800){const Y=y==null?void 0:y.facingPose(F,{margin:.05});Y&&await y.flyTo(Y,H)}const $=F=>new Promise(H=>setTimeout(H,F));async function J(){if(o.value){k();return}o.value=!0;const F=++E,H=()=>E===F&&!!y,Y=[{text:"Zoom out — the whole workspace in one view",run:()=>{O()},hold:1600},{text:"Zoom in — a panel fills the screen",run:()=>j("trades"),hold:1500},{text:"Zoom out — and in again on the chart",run:async()=>{O(),await $(900),await j("candle")},hold:1700},{text:"A wall of mini charts — one WebGL surface",run:()=>j("wall"),hold:1500},{text:"Back out to the overview",run:()=>{O()},hold:1500}];for(const ae of Y){if(!H())break;r.value=ae.text,await ae.run(),await $(ae.hold)}E===F&&(r.value="",o.value=!1)}function k(){E++,o.value=!1,r.value="",y==null||y.flyTo(y.getCameraPose(),0)}function ne(F){if(F===i.value||!y)return;const H=y.getCameraPose();k(),x(),i.value=F,L(F,H),t("mode",F)}return Rn(()=>{L(i.value,null),t("mode",i.value)}),Ru(()=>{E++,x(),delete window.__ws3d}),(F,H)=>(Je(),gt("div",{class:Ot(["ws3d",i.value]),"data-testid":"ws3d"},[Pe("div",{ref_key:"host",ref:s,class:"ws3d-stage"},null,512),Pe("div",CE,[H[2]||(H[2]=Pe("span",{class:"ws3d-title"},"3D workspace",-1)),Pe("button",{class:"ws3d-btn",title:"Zoom the whole workspace out until every panel is in frame",onClick:O},"Overview"),Pe("button",{class:"ws3d-btn",title:"Fly back to the start",onClick:X},"Recenter"),Pe("button",{class:Ot(["ws3d-btn",{on:o.value}]),title:"Play a short zoom-in / zoom-out tour",onClick:J},vn(o.value?"■ Stop":"▶ Tour"),3),H[3]||(H[3]=Pe("span",{class:"ws3d-spacer"},null,-1)),Pe("button",{class:Ot(["ws3d-btn",{on:i.value==="day"}]),onClick:H[0]||(H[0]=Y=>ne("day"))},"☀ Day",2),Pe("button",{class:Ot(["ws3d-btn",{on:i.value==="night"}]),onClick:H[1]||(H[1]=Y=>ne("night"))},"☾ Night",2)]),r.value?(Je(),gt("div",RE,vn(r.value),1)):qt("",!0),H[4]||(H[4]=Pe("div",{class:"ws3d-hint"},[Tn("scroll to "),Pe("b",null,"zoom"),Tn(" · drag to "),Pe("b",null,"orbit"),Tn(" · "),Pe("b",null,"□"),Tn(" expands a panel · double-click a title bar to face it · right-click a panel for its display menu")],-1))],2))}}),DE=ci(PE,[["__scopeId","data-v-29439221"]]),LE={class:"demo-bar"},IE={class:"demo-tabs"},UE={key:1,class:"demo-btns"},FE={key:2},NE={key:3},OE={key:4},BE={class:"demo-btns"},kE=["value"],zE={class:"tab-content"},HE={class:"tab-content"},VE={class:"tab-content"},GE={class:"tab-content"},WE={class:"tab-content"},XE={class:"tab-content"},YE={key:0,class:"stage-tab"},$E=720,qE=li({__name:"App",setup(n){const e=be((()=>{const z=new URLSearchParams(location.search).get("tab");return["grid","workspace","stage3d","log","candle","wall","terminal","gauge"].includes(z??"")?z:"stage3d"})()),t=be("none"),i=nt(()=>t.value!=="paper"),s=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],r=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(z,W){return+(Math.random()*(W-z)+z).toFixed(4)}function l(z){return z[Math.floor(Math.random()*z.length)]}function c(z){return z.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],h=["NY","London","Tokyo","AH"],m=Array.from({length:240},(z,W)=>{const K=W%r.length,Te=r[K],Ie=o[K],We=l(s),V=u-Math.floor(Math.random()*30*24*36e5),we=Math.random()<.15,ue=a(10,3e3),xe=a(-8,22),Ue=+(xe-.12).toFixed(4),Ne=+(ue*a(.2,2)).toFixed(2),Qe=we?null:V+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(V)),entry_timestamp:c(new Date(V)),exit_timestamp:Qe?c(new Date(Qe)):"",product:Te,strategy:We,exchange:Ie,status:we?"open":"closed",entry_price:ue.toFixed(4),exit_price:we?"":a(ue*.92,ue*1.25).toFixed(4),pnl_pct:xe.toFixed(4),net_pnl_pct:Ue.toFixed(4),size_base:a(.001,2).toFixed(6),notional:Ne.toFixed(2),reason:we?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(h)}}),g=z=>W=>W.value!==""&&W.value!=null&&!isNaN(Number(W.value))?Number(W.value).toFixed(z):"",v=z=>z.value!==""&&z.value!=null&&!isNaN(Number(z.value))?Number(z.value).toFixed(2)+"%":"—",p={textAlign:"right"};function d(z){var V,we;const W=(V=z.data)==null?void 0:V.entry_timestamp,K=(we=z.data)==null?void 0:we.exit_timestamp;if(!W||!K)return"—";const Te=new Date(K).getTime()-new Date(W).getTime();if(Te<0)return"—";const Ie=Math.floor(Te/36e5),We=Math.floor(Te%36e5/6e4);return Ie>0?`${Ie}h ${We}m`:`${We}m`}const b=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:z=>z.data.entry_timestamp||z.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:z=>z.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:d,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:z=>z.data.status??"closed",cellStyle:z=>({color:z.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:z=>`${z} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:g(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:g(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:g(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:g(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:z=>Number(z).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:v,cellStyle:z=>({...p,color:Number(z.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:z=>`${Number(z).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:v,cellStyle:z=>({...p,color:Number(z.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:z=>`${Number(z).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:v,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:g(1),cellStyle:z=>({...p,color:Number(z.value)>65?"#e74c3c":Number(z.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:z=>Number(z).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:z=>(Number(z.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:z=>Number(z).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:z=>`${Number(z).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:z=>`${Number(z).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:z=>`${Number(z).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:z=>Number(z).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],y={resizable:!0,sortable:!0},_=be(null),P=be(25),T=be(!0),E=be(!0),L=be(!1),x=be(!1),M=be(-1),D=be([{label:"QQQ",side:"left",value:"+1.4%",tone:"up"},{label:"IWM",side:"left",value:"−0.3%",tone:"down"},{label:"TLT",side:"right",value:"+0.8%",tone:"up"}]),U=nt(()=>M.value>0?"net long":M.value<0?"net short":"flat"),O=nt(()=>M.value<=-2?"CRASH-POSITIONED — the short tilt is the insurance paying out.":M.value<0?"tilting short — a downtrend is developing.":M.value===0?"balanced — no clear trend.":"calm tape — riding the up-trends; would flip short as a selloff develops."),X=be(.31),j=nt(()=>{const z=X.value;return{label:"margin guard",hint:"liquidation headroom · reserve +$200.00",value:z,min:0,max:.6,valueText:z.toFixed(2),tone:z<.15?"down":z<.25?"warn":"up",thresholds:[{value:.25,label:"top-up",color:"neutral"},{value:.15,label:"de-risk",color:"left"},{value:.05,label:"halt",color:"left"}]}});function $(){let z=M.value;for(;z===M.value;)z=Math.floor(Math.random()*9)-4;M.value=z,X.value=+(.03+Math.random()*.5).toFixed(2)}const J=be(typeof window<"u"?window.innerWidth:1200),k=nt(()=>J.value<$E);function ne(){J.value=window.innerWidth}Rn(()=>window.addEventListener("resize",ne)),Wn(()=>window.removeEventListener("resize",ne)),je(k,z=>{z&&e.value==="workspace"&&(e.value="grid")},{immediate:!0});const F=be(!1),H=be(""),Y=be("all"),ae=be(0),ee=be(!0),de=be(!1),ye=be(!1);je(e,z=>{z==="grid"&&ae.value++});let ve=null;function Be(z){ve===null&&(ve=t.value),t.value=z==="day"?"paper":"none"}je(e,(z,W)=>{W==="stage3d"&&z!=="stage3d"&&ve!==null&&(t.value=ve,ve=null)});function ke(z){_.value=z.api,window.__cathodeGridApi=z.api,z.api.setGridOption("rowData",m),Y.value!=="all"&&ce(Y.value)}function Ve(z){var K;const W=z.target.value;H.value=W,(K=_.value)==null||K.setGridOption("quickFilterText",W)}function ce(z){var W,K,Te;Y.value=z,z==="all"?(W=_.value)==null||W.setFilterModel(null):(K=_.value)==null||K.setFilterModel({status:{type:"equals",filter:z}}),(Te=_.value)==null||Te.onFilterChanged()}const C={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function N(z,W){const Te=Math.round(z*.62)-12,Ie=Te+12*2,We=z-Ie-12,V=Math.round(W*.62),we=V+12*2,ue=W-we-12;return{trades:{x:12,y:12,w:Te,h:V,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:Ie,y:12,w:We,h:V,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:we,w:Te,h:ue,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:Ie,y:we,w:We,h:ue,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const A=N(window.innerWidth,window.innerHeight-88),pe=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const z=[],W=Date.now()-45e5;for(let K=0;K<140;K++){const Te=pe[K%pe.length];z.push({ts:W+K*32e3,text:Te.text,level:Te.level})}return z})();const se=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],re=be([]),he=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],_e=be([{level:"info",text:"CathodeTerminal demo"},...he]),fe=be(!1),w={help:()=>he,echo:z=>({level:"info",text:z||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:z=>{const W=z.trim();return W?W==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:W==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${W}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:z=>{const W=z.trim()||"localhost",K=[{level:"info",text:`PING ${W}: 56 data bytes`}];for(let Te=0;Te<4;Te++){const Ie=(12+Math.random()*18).toFixed(1);K.push({level:"success",text:`64 bytes from ${W}: icmp_seq=${Te} ttl=64 time=${Ie} ms`})}return K},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:z=>{const W=z.trim()||"moo",K="─".repeat(Math.max(2,W.length+2));return[{level:"info",text:` ╭${K}╮`},{level:"info",text:` │ ${W} │`},{level:"info",text:` ╰${K}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const z=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:z[Math.floor(Math.random()*z.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function S(z){_e.value=[..._e.value,{level:"info",text:`→ ${z}`}];const W=z.trim();if(!W)return;if(W==="clear"){_e.value=[];return}const K=W.indexOf(" "),Te=K===-1?W:W.slice(0,K),Ie=K===-1?"":W.slice(K+1),We=w[Te];let V;We?V=We(Ie):V={level:"warn",text:`unknown command: ${Te} — type 'help' for the demo vocabulary`},fe.value=!0,setTimeout(()=>{if(V!==null){const we=Array.isArray(V)?V:[V];_e.value=[..._e.value,...we]}fe.value=!1},180)}const G=["BTC","ETH","SOL","ARB","UNI","DASH","ZEC","AVAX","DOGE","LINK","TAO","NEAR","SPY","QQQ","NVDA","TSLA"].map((z,W)=>{const K=Q(90+W*7%60),Te=(K[K.length-1].close/K[0].close-1)*100;return{id:z,title:z,badge:W>=12?"EQ":"₿",note:`${Te>=0?"+":""}${Te.toFixed(1)}%`,noteColor:Te>=0?"#00bc8c":"#e74c3c",open:W%5===0,candles:K}});function Q(z){const W=[];let K=6e4;const Te=Date.now()-z*36e5;for(let Ie=0;Ie<z;Ie++){const We=(Math.random()-.495)*K*.012,V=K,we=Math.max(1,K+We),ue=Math.max(V,we)*(1+Math.random()*.005),xe=Math.min(V,we)*(1-Math.random()*.005),Ue=Math.round(20+Math.random()*80);W.push({start:Te+Ie*36e5,open:V,close:we,high:ue,low:xe,volume:Ue}),K=we}return W}const ie=be(Q(300));function Ee(z,W){const K=new Array(z.length).fill(NaN);let Te=0;for(let Ie=0;Ie<z.length;Ie++)Te+=z[Ie],Ie>=W&&(Te-=z[Ie-W]),Ie+1>=W&&(K[Ie]=Te/W);return K}function Me(z,W){const K=new Array(z.length).fill(NaN);if(!z.length)return K;const Te=2/(W+1);let Ie=z[0];K[0]=Ie;for(let We=1;We<z.length;We++)Ie=z[We]*Te+Ie*(1-Te),K[We]=Ie;for(let We=0;We<Math.min(W-1,z.length);We++)K[We]=NaN;return K}function Ae(z,W=20,K=2){const Te=Ee(z,W),Ie=new Array(z.length).fill(NaN),We=new Array(z.length).fill(NaN);for(let V=W-1;V<z.length;V++){let we=0;for(let xe=V-W+1;xe<=V;xe++){const Ue=z[xe]-Te[V];we+=Ue*Ue}const ue=Math.sqrt(we/W);Ie[V]=Te[V]+K*ue,We[V]=Te[V]-K*ue}return{upper:Ie,middle:Te,lower:We}}const Ge=nt(()=>{const z=ie.value.map(K=>K.close),W=Ae(z,20,2);return[{kind:"band",upper:W.upper,middle:W.middle,lower:W.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:Me(z,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:Me(z,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),Se=nt(()=>{const z=ie.value;if(z.length<130)return[];const W=K=>z[K];return[{timestamp:W(z.length-120).start,price:W(z.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:W(z.length-100).start,price:W(z.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:W(z.length-80).start,price:W(z.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:W(z.length-60).start,price:W(z.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:W(z.length-40).start,price:W(z.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:W(z.length-20).start,price:W(z.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const z=ie.value,W=Se.value;if(!z.length||!W.length)return[];const K=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!K)return[];const Te=K.width/(window.devicePixelRatio||1),Ie=K.height/(window.devicePixelRatio||1),We=8,V=56,we=8,ue=22,xe=8,Ue=Te-We-V,Ne=Math.max(1,Math.floor(Ue/xe)),Qe=Math.max(0,z.length-Ne);let ut=1/0,At=-1/0;for(let tn=Qe;tn<z.length;tn++)z[tn].low<ut&&(ut=z[tn].low),z[tn].high>At&&(At=z[tn].high);const lt=(At-ut)*.04;ut-=lt,At+=lt;const en=we,Pn=we+(Ie-we-ue-4)*(1-.18),bs=[];for(const tn of W){const On=z[1].start-z[0].start;let Xn=-1;for(let ge=0;ge<z.length;ge++)if(Math.abs(z[ge].start-tn.timestamp)<=On*.5){Xn=ge;break}if(Xn<Qe||Xn>=z.length)continue;const B=We+(Xn-Qe+.5)*xe,me=en+(1-(tn.price-ut)/(At-ut))*(Pn-en);bs.push({x:B,y:me,kind:tn.kind,label:tn.label||""})}return bs}});function Le(){const z=[],W=Date.now()-54e5;for(let K=0;K<320;K++){const Te=se[K%se.length];z.push({ts:W+K*16e3,text:Te.text,level:Te.level})}re.value=z}return Le(),(z,W)=>(Je(),gt("div",{class:Ot(["demo-shell",{"cathode-light":!i.value,mobile:k.value}])},[Pe("div",LE,[W[31]||(W[31]=Pe("span",{class:"demo-title"},"⬛ CATHODE",-1)),Pe("div",IE,[Pe("button",{class:Ot(["tab-btn",{active:e.value==="stage3d"}]),onClick:W[0]||(W[0]=K=>e.value="stage3d")}," 3D Workspace ",2),k.value?qt("",!0):(Je(),gt("button",{key:0,class:Ot(["tab-btn",{active:e.value==="workspace"}]),onClick:W[1]||(W[1]=K=>e.value="workspace")}," Workspace ",2)),Pe("button",{class:Ot(["tab-btn",{active:e.value==="grid"}]),onClick:W[2]||(W[2]=K=>e.value="grid")}," Grid ",2),Pe("button",{class:Ot(["tab-btn",{active:e.value==="log"}]),onClick:W[3]||(W[3]=K=>e.value="log")}," Log ",2),Pe("button",{class:Ot(["tab-btn",{active:e.value==="wall"}]),onClick:W[4]||(W[4]=K=>e.value="wall")}," WALL ",2),Pe("button",{class:Ot(["tab-btn",{active:e.value==="candle"}]),onClick:W[5]||(W[5]=K=>e.value="candle")}," Candle ",2),Pe("button",{class:Ot(["tab-btn",{active:e.value==="terminal"}]),onClick:W[6]||(W[6]=K=>e.value="terminal")}," Terminal ",2),Pe("button",{class:Ot(["tab-btn",{active:e.value==="gauge"}]),onClick:W[7]||(W[7]=K=>e.value="gauge")}," Gauge ",2)]),W[32]||(W[32]=Pe("label",null,"Theme",-1)),zt(Pe("select",{"onUpdate:modelValue":W[8]||(W[8]=K=>t.value=K)},[...W[22]||(W[22]=[Pe("option",{value:"none"},"Default (dark)",-1),Pe("option",{value:"phosphor"},"Phosphor Green",-1),Pe("option",{value:"amber"},"Amber",-1),Pe("option",{value:"paper"},"Paper (light)",-1)])],512),[[Xv,t.value]]),e.value!=="stage3d"?(Je(),gt(an,{key:0},[Pe("label",null,"Curve "+vn(P.value)+" · "+vn(P.value<0?"concave":P.value>0?"convex":"flat"),1),zt(Pe("input",{type:"range",min:"-45",max:"45",step:"1","onUpdate:modelValue":W[9]||(W[9]=K=>P.value=K),style:{width:"110px"}},null,512),[[_p,P.value,void 0,{number:!0}]]),Pe("label",null,[zt(Pe("input",{type:"checkbox","onUpdate:modelValue":W[10]||(W[10]=K=>T.value=K),"data-testid":"cf-bendfield"},null,512),[[ns,T.value]]),W[23]||(W[23]=Tn(" Field",-1))]),Pe("label",null,[zt(Pe("input",{type:"checkbox","onUpdate:modelValue":W[11]||(W[11]=K=>E.value=K)},null,512),[[ns,E.value]]),W[24]||(W[24]=Tn(" Scanlines",-1))]),Pe("label",null,[zt(Pe("input",{type:"checkbox","onUpdate:modelValue":W[12]||(W[12]=K=>F.value=K)},null,512),[[ns,F.value]]),W[25]||(W[25]=Tn(" Glow",-1))]),Pe("label",null,[zt(Pe("input",{type:"checkbox","onUpdate:modelValue":W[13]||(W[13]=K=>L.value=K),"data-testid":"cf-magnify"},null,512),[[ns,L.value]]),W[26]||(W[26]=Tn(" Magnify ",-1))]),Pe("label",null,[zt(Pe("input",{type:"checkbox","onUpdate:modelValue":W[14]||(W[14]=K=>x.value=K),"data-testid":"cf-show-loaders"},null,512),[[ns,x.value]]),W[27]||(W[27]=Tn(" Show loaders ",-1))])],64)):qt("",!0),e.value==="gauge"?(Je(),gt("div",UE,[Pe("button",{"data-testid":"cf-tilt",onClick:$},"Tilt")])):qt("",!0),e.value==="candle"?(Je(),gt("label",FE,[zt(Pe("input",{type:"checkbox","onUpdate:modelValue":W[15]||(W[15]=K=>ee.value=K),"data-testid":"cf-show-indicators"},null,512),[[ns,ee.value]]),W[28]||(W[28]=Tn(" Indicators ",-1))])):qt("",!0),e.value==="candle"?(Je(),gt("label",NE,[zt(Pe("input",{type:"checkbox","onUpdate:modelValue":W[16]||(W[16]=K=>de.value=K),"data-testid":"cf-flat"},null,512),[[ns,de.value]]),W[29]||(W[29]=Tn(" Flat (no GL) ",-1))])):qt("",!0),e.value==="candle"?(Je(),gt("label",OE,[zt(Pe("input",{type:"checkbox","onUpdate:modelValue":W[17]||(W[17]=K=>ye.value=K),"data-testid":"cf-compact"},null,512),[[ns,ye.value]]),W[30]||(W[30]=Tn(" Compact ",-1))])):qt("",!0),W[33]||(W[33]=Pe("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(Je(),gt(an,{key:5},[Pe("div",BE,[Pe("button",{class:Ot({active:Y.value==="all"}),onClick:W[18]||(W[18]=K=>ce("all"))},"All",2),Pe("button",{class:Ot({active:Y.value==="open"}),onClick:W[19]||(W[19]=K=>ce("open"))},"Open",2),Pe("button",{class:Ot({active:Y.value==="closed"}),onClick:W[20]||(W[20]=K=>ce("closed"))},"Closed",2)]),Pe("input",{class:"demo-filter",placeholder:"Quick filter…",value:H.value,onInput:Ve},null,40,kE)],64)):qt("",!0)]),zt(Pe("div",zE,[x.value?(Je(),Dt(Li,{key:0,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Dt(Wh,{key:ae.value,"column-defs":b,"default-col-def":y,"row-height":28,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,magnify:L.value,pagination:!0,"pagination-page-size":50,onGridReady:ke},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[cs,e.value==="grid"]]),zt(Pe("div",HE,[x.value?(Je(),Dt(Li,{key:0,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Dt(du,{key:1,entries:re.value,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,magnify:L.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[cs,e.value==="log"]]),zt(Pe("div",VE,[x.value?(Je(),Dt(Li,{key:0,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Dt($h,{key:`cf-${de.value}`,candles:ie.value,overlays:ee.value?Ge.value:[],markers:ee.value?Se.value:[],theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,flat:de.value,compact:ye.value,magnify:L.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[cs,e.value==="candle"]]),zt(Pe("div",GE,[Ct($w,{cells:xt(G),theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,magnify:L.value,"bend-field":T.value,onCellClick:W[21]||(W[21]=K=>console.log("wall cell:",K))},null,8,["cells","theme","curvature","scanlines","glow","magnify","bend-field"])],512),[[cs,e.value==="wall"]]),zt(Pe("div",WE,[x.value?(Je(),Dt(Li,{key:0,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"READING THE BOOK"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Dt(Kw,{key:1,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,magnify:L.value,value:M.value,min:-6,max:6,stance:U.value,sub:"1 long · 2 short · 3 flat","left-label":"short","right-label":"long","side-letters":["S","L"],marks:[{value:-2,label:"crash-positioned",color:"left"},{value:3,label:"calm tape",color:"neutral"}],meter:j.value,caption:O.value,note:"Insurance, not alpha — judge it by crash-protection, not a calm-month P&L. It bleeds a small premium in quiet tape and pays off when the long books crash.",items:D.value,"empty-text":"Flat — no positions."},null,8,["theme","curvature","scanlines","glow","magnify","value","stance","meter","caption","items"]))],512),[[cs,e.value==="gauge"]]),zt(Pe("div",XE,[x.value?(Je(),Dt(Li,{key:0,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Dt(qh,{key:1,entries:_e.value,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,magnify:L.value,busy:fe.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:S},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))],512),[[cs,e.value==="terminal"]]),e.value==="stage3d"?(Je(),gt("div",YE,[Ct(DE,{onMode:Be})])):qt("",!0),zt(Ct(Pw,{"storage-key":"cathode.demo.layout","initial-layout":xt(A),"container-titles":C},{default:Ns(()=>[Ct(da,{id:"trades",title:"Trades",curvature:P.value,canvas:""},{default:Ns(({resizeKey:K})=>[x.value?(Je(),Dt(Li,{key:0,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Dt(Wh,{key:K,"column-defs":b,"default-col-def":y,"row-height":26,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,magnify:L.value,pagination:!0,"pagination-page-size":50,onGridReady:ke},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Ct(da,{id:"chart",title:"Chart",curvature:P.value,canvas:""},{default:Ns(({resizeKey:K})=>[x.value?(Je(),Dt(Li,{key:0,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Dt($h,{key:K,candles:ie.value,overlays:Ge.value,markers:Se.value,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,magnify:L.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Ct(da,{id:"log",title:"Log",curvature:P.value,canvas:""},{default:Ns(()=>[x.value?(Je(),Dt(Li,{key:0,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Dt(du,{key:1,entries:re.value,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,magnify:L.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Ct(da,{id:"terminal",title:"Terminal",curvature:P.value,canvas:""},{default:Ns(()=>[x.value?(Je(),Dt(Li,{key:0,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Dt(qh,{key:1,entries:_e.value,theme:t.value,curvature:P.value,scanlines:E.value,glow:F.value,magnify:L.value,busy:fe.value,prompt:"→ ",onSubmit:S},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[cs,e.value==="workspace"]])],2))}}),KE=ci(qE,[["__scopeId","data-v-3b744ca3"]]);Zv(KE).mount("#app");
