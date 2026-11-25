var wm=Object.defineProperty;var Em=(n,e,t)=>e in n?wm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Oe=(n,e,t)=>Em(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},wr=[],xi=()=>{},od=()=>!1,qa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ka=n=>n.startsWith("onUpdate:"),Vt=Object.assign,_u=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Tm=Object.prototype.hasOwnProperty,pt=(n,e)=>Tm.call(n,e),Ze=Array.isArray,Er=n=>Io(n)==="[object Map]",Wr=n=>Io(n)==="[object Set]",ef=n=>Io(n)==="[object Date]",it=n=>typeof n=="function",Ft=n=>typeof n=="string",ii=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",ad=n=>(vt(n)||it(n))&&it(n.then)&&it(n.catch),ld=Object.prototype.toString,Io=n=>ld.call(n),Am=n=>Io(n).slice(8,-1),cd=n=>Io(n)==="[object Object]",xu=n=>Ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fo=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ja=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Cm=/-\w/g,ei=ja(n=>n.replace(Cm,e=>e.slice(1).toUpperCase())),Rm=/\B([A-Z])/g,Ss=ja(n=>n.replace(Rm,"-$1").toLowerCase()),ud=ja(n=>n.charAt(0).toUpperCase()+n.slice(1)),hl=ja(n=>n?`on${ud(n)}`:""),_i=(n,e)=>!Object.is(n,e),Ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},fd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Za=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Pm=n=>{const e=Ft(n)?Number(n):NaN;return isNaN(e)?n:e};let tf;const Ja=()=>tf||(tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Un(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ft(i)?Um(i):Un(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(n)||vt(n))return n}const Dm=/;(?![^(]*\))/g,Lm=/:([^]+)/,Im=/\/\*[^]*?\*\//g;function Um(n){const e={};return n.replace(Im,"").split(Dm).forEach(t=>{if(t){const i=t.split(Lm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qt(n){let e="";if(Ft(n))e=n;else if(Ze(n))for(let t=0;t<n.length;t++){const i=qt(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Fm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nm=vu(Fm);function hd(n){return!!n||n===""}function Om(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Xr(n[i],e[i]);return t}function Xr(n,e){if(n===e)return!0;let t=ef(n),i=ef(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ii(n),i=ii(e),t||i)return n===e;if(t=Ze(n),i=Ze(e),t||i)return t&&i?Om(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Xr(n[o],e[o]))return!1}}return String(n)===String(e)}function yu(n,e){return n.findIndex(t=>Xr(t,e))}const dd=n=>!!(n&&n.__v_isRef===!0),vn=n=>Ft(n)?n:n==null?"":Ze(n)||vt(n)&&(n.toString===ld||!it(n.toString))?dd(n)?vn(n.value):JSON.stringify(n,pd,2):String(n),pd=(n,e)=>dd(e)?pd(n,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[dl(i,r)+" =>"]=s,t),{})}:Wr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>dl(t))}:ii(e)?dl(e):vt(e)&&!Ze(e)&&!cd(e)?String(e):e,dl=(n,e="")=>{var t;return ii(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let En;class md{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=En,!e&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=En;try{return En=this,e()}finally{En=t}}}on(){++this._on===1&&(this.prevScope=En,En=this)}off(){this._on>0&&--this._on===0&&(En=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qa(n){return new md(n)}function Bm(){return En}let wt;const pl=new WeakSet;class gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,En&&En.active&&En.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pl.has(this)&&(pl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_d(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nf(this),xd(this);const e=wt,t=ti;wt=this,ti=!0;try{return this.fn()}finally{yd(this),wt=e,ti=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bu(e);this.deps=this.depsTail=void 0,nf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cc(this)&&this.run()}get dirty(){return cc(this)}}let vd=0,ho,po;function _d(n,e=!1){if(n.flags|=8,e){n.next=po,po=n;return}n.next=ho,ho=n}function Mu(){vd++}function Su(){if(--vd>0)return;if(po){let e=po;for(po=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ho;){let e=ho;for(ho=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function xd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),bu(i),km(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function cc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Md(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Md(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Mo)||(n.globalVersion=Mo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!cc(n))))return;n.flags|=2;const e=n.dep,t=wt,i=ti;wt=n,ti=!0;try{xd(n);const s=n.fn(n._value);(e.version===0||_i(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{wt=t,ti=i,yd(n),n.flags&=-3}}function bu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)bu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function km(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ti=!0;const Sd=[];function Gi(){Sd.push(ti),ti=!1}function Wi(){const n=Sd.pop();ti=n===void 0?!0:n}function nf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=wt;wt=void 0;try{e()}finally{wt=t}}}let Mo=0;class zm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!wt||!ti||wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==wt)t=this.activeLink=new zm(wt,this),wt.deps?(t.prevDep=wt.depsTail,wt.depsTail.nextDep=t,wt.depsTail=t):wt.deps=wt.depsTail=t,bd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=wt.depsTail,t.nextDep=void 0,wt.depsTail.nextDep=t,wt.depsTail=t,wt.deps===t&&(wt.deps=i)}return t}trigger(e){this.version++,Mo++,this.notify(e)}notify(e){Mu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Su()}}}function bd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)bd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const uc=new WeakMap,Vs=Symbol(""),fc=Symbol(""),So=Symbol("");function an(n,e,t){if(ti&&wt){let i=uc.get(n);i||uc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new wu),s.map=i,s.key=t),s.track()}}function Ni(n,e,t,i,s,r){const o=uc.get(n);if(!o){Mo++;return}const a=l=>{l&&l.trigger()};if(Mu(),e==="clear")o.forEach(a);else{const l=Ze(n),c=l&&xu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===So||!ii(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(So)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Vs)),Er(n)&&a(o.get(fc)));break;case"delete":l||(a(o.get(Vs)),Er(n)&&a(o.get(fc)));break;case"set":Er(n)&&a(o.get(Vs));break}}Su()}function ir(n){const e=ft(n);return e===n?e:(an(e,"iterate",So),Vn(n)?e:e.map(si))}function el(n){return an(n=ft(n),"iterate",So),n}function pi(n,e){return Xi(n)?Ur(Gs(n)?si(e):e):si(e)}const Hm={__proto__:null,[Symbol.iterator](){return ml(this,Symbol.iterator,n=>pi(this,n))},concat(...n){return ir(this).concat(...n.map(e=>Ze(e)?ir(e):e))},entries(){return ml(this,"entries",n=>(n[1]=pi(this,n[1]),n))},every(n,e){return wi(this,"every",n,e,void 0,arguments)},filter(n,e){return wi(this,"filter",n,e,t=>t.map(i=>pi(this,i)),arguments)},find(n,e){return wi(this,"find",n,e,t=>pi(this,t),arguments)},findIndex(n,e){return wi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wi(this,"findLast",n,e,t=>pi(this,t),arguments)},findLastIndex(n,e){return wi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wi(this,"forEach",n,e,void 0,arguments)},includes(...n){return gl(this,"includes",n)},indexOf(...n){return gl(this,"indexOf",n)},join(n){return ir(this).join(n)},lastIndexOf(...n){return gl(this,"lastIndexOf",n)},map(n,e){return wi(this,"map",n,e,void 0,arguments)},pop(){return Zr(this,"pop")},push(...n){return Zr(this,"push",n)},reduce(n,...e){return sf(this,"reduce",n,e)},reduceRight(n,...e){return sf(this,"reduceRight",n,e)},shift(){return Zr(this,"shift")},some(n,e){return wi(this,"some",n,e,void 0,arguments)},splice(...n){return Zr(this,"splice",n)},toReversed(){return ir(this).toReversed()},toSorted(n){return ir(this).toSorted(n)},toSpliced(...n){return ir(this).toSpliced(...n)},unshift(...n){return Zr(this,"unshift",n)},values(){return ml(this,"values",n=>pi(this,n))}};function ml(n,e,t){const i=el(n),s=i[e]();return i!==n&&!Vn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Vm=Array.prototype;function wi(n,e,t,i,s,r){const o=el(n),a=o!==n&&!Vn(n),l=o[e];if(l!==Vm[e]){const f=l.apply(n,r);return a?si(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,pi(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function sf(n,e,t,i){const s=el(n),r=s!==n&&!Vn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=pi(n,c)),t.call(this,c,pi(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?pi(n,l):l}function gl(n,e,t){const i=ft(n);an(i,"iterate",So);const s=i[e](...t);return(s===-1||s===!1)&&Au(t[0])?(t[0]=ft(t[0]),i[e](...t)):s}function Zr(n,e,t=[]){Gi(),Mu();const i=ft(n)[e].apply(n,t);return Su(),Wi(),i}const Gm=vu("__proto__,__v_isRef,__isVue"),wd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ii));function Wm(n){ii(n)||(n=String(n));const e=ft(this);return an(e,"has",n),e.hasOwnProperty(n)}class Ed{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?eg:Rd:r?Cd:Ad).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=Hm[t]))return l;if(t==="hasOwnProperty")return Wm}const a=Reflect.get(e,t,hn(e)?e:i);if((ii(t)?wd.has(t):Gm(t))||(s||an(e,"get",t),r))return a;if(hn(a)){const l=o&&xu(t)?a:a.value;return s&&vt(l)?dc(l):l}return vt(a)?s?dc(a):Tr(a):a}}class Td extends Ed{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ze(e)&&xu(t);if(!this._isShallow){const c=Xi(r);if(!Vn(i)&&!Xi(i)&&(r=ft(r),i=ft(i)),!o&&hn(r)&&!hn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:pt(e,t),l=Reflect.set(e,t,i,hn(e)?e:s);return e===ft(s)&&(a?_i(i,r)&&Ni(e,"set",t,i):Ni(e,"add",t,i)),l}deleteProperty(e,t){const i=pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ni(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ii(t)||!wd.has(t))&&an(e,"has",t),i}ownKeys(e){return an(e,"iterate",Ze(e)?"length":Vs),Reflect.ownKeys(e)}}class Xm extends Ed{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ym=new Td,$m=new Xm,qm=new Td(!0);const hc=n=>n,zo=n=>Reflect.getPrototypeOf(n);function Km(n,e,t){return function(...i){const s=this.__v_raw,r=ft(s),o=Er(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?hc:e?Ur:si;return!e&&an(r,"iterate",l?fc:Vs),Vt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Ho(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function jm(n,e){const t={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);n||(_i(s,a)&&an(o,"get",s),an(o,"get",a));const{has:l}=zo(o),c=e?hc:n?Ur:si;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&an(ft(s),"iterate",Vs),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return n||(_i(s,a)&&an(o,"has",s),an(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?hc:n?Ur:si;return!n&&an(l,"iterate",Vs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Vt(t,n?{add:Ho("add"),set:Ho("set"),delete:Ho("delete"),clear:Ho("clear")}:{add(s){const r=ft(this),o=zo(r),a=ft(s),l=!e&&!Vn(s)&&!Xi(s)?a:s;return o.has.call(r,l)||_i(s,l)&&o.has.call(r,s)||_i(a,l)&&o.has.call(r,a)||(r.add(l),Ni(r,"add",l,l)),this},set(s,r){!e&&!Vn(r)&&!Xi(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=zo(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?_i(r,u)&&Ni(o,"set",s,r):Ni(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=zo(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ni(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&Ni(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Km(s,n,e)}),t}function Eu(n,e){const t=jm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pt(t,s)&&s in i?t:i,s,r)}const Zm={get:Eu(!1,!1)},Jm={get:Eu(!1,!0)},Qm={get:Eu(!0,!1)};const Ad=new WeakMap,Cd=new WeakMap,Rd=new WeakMap,eg=new WeakMap;function tg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ng(n){return n.__v_skip||!Object.isExtensible(n)?0:tg(Am(n))}function Tr(n){return Xi(n)?n:Tu(n,!1,Ym,Zm,Ad)}function tl(n){return Tu(n,!1,qm,Jm,Cd)}function dc(n){return Tu(n,!0,$m,Qm,Rd)}function Tu(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=ng(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Gs(n){return Xi(n)?Gs(n.__v_raw):!!(n&&n.__v_isReactive)}function Xi(n){return!!(n&&n.__v_isReadonly)}function Vn(n){return!!(n&&n.__v_isShallow)}function Au(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function ig(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&fd(n,"__v_skip",!0),n}const si=n=>vt(n)?Tr(n):n,Ur=n=>vt(n)?dc(n):n;function hn(n){return n?n.__v_isRef===!0:!1}function be(n){return sg(n,!1)}function sg(n,e){return hn(n)?n:new rg(n,e)}class rg{constructor(e,t){this.dep=new wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:si(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Vn(e)||Xi(e);e=i?e:ft(e),_i(e,t)&&(this._rawValue=e,this._value=i?e:si(e),this.dep.trigger())}}function xt(n){return hn(n)?n.value:n}const og={get:(n,e,t)=>e==="__v_raw"?n:xt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return hn(s)&&!hn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Pd(n){return Gs(n)?n:new Proxy(n,og)}class ag{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return _d(this,!0),!0}get value(){const e=this.dep.track();return Md(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lg(n,e,t=!1){let i,s;return it(n)?i=n:(i=n.get,s=n.set),new ag(i,s,t)}const Vo={},La=new WeakMap;let Is;function cg(n,e=!1,t=Is){if(t){let i=La.get(t);i||La.set(t,i=[]),i.push(n)}}function ug(n,e,t=St){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=_=>s?_:Vn(_)||s===!1||s===0?Oi(_,1):Oi(_);let u,f,d,m,g=!1,v=!1;if(hn(n)?(f=()=>n.value,g=Vn(n)):Gs(n)?(f=()=>c(n),g=!0):Ze(n)?(v=!0,g=n.some(_=>Gs(_)||Vn(_)),f=()=>n.map(_=>{if(hn(_))return _.value;if(Gs(_))return c(_);if(it(_))return l?l(_,2):_()})):it(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Gi();try{d()}finally{Wi()}}const _=Is;Is=u;try{return l?l(n,3,[m]):n(m)}finally{Is=_}}:f=xi,e&&s){const _=f,P=s===!0?1/0:s;f=()=>Oi(_(),P)}const p=Bm(),h=()=>{u.stop(),p&&p.active&&_u(p.effects,u)};if(r&&e){const _=e;e=(...P)=>{_(...P),h()}}let S=v?new Array(n.length).fill(Vo):Vo;const b=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(e){const P=u.run();if(s||g||(v?P.some((E,T)=>_i(E,S[T])):_i(P,S))){d&&d();const E=Is;Is=u;try{const T=[P,S===Vo?void 0:v&&S[0]===Vo?[]:S,m];S=P,l?l(e,3,T):e(...T)}finally{Is=E}}}else u.run()};return a&&a(b),u=new gd(f),u.scheduler=o?()=>o(b,!1):b,m=_=>cg(_,!1,u),d=u.onStop=()=>{const _=La.get(u);if(_){if(l)l(_,4);else for(const P of _)P();La.delete(u)}},e?i?b(!0):S=u.run():o?o(b.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Oi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,hn(n))Oi(n.value,e,t);else if(Ze(n))for(let i=0;i<n.length;i++)Oi(n[i],e,t);else if(Wr(n)||Er(n))n.forEach(i=>{Oi(i,e,t)});else if(cd(n)){for(const i in n)Oi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Oi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uo(n,e,t,i){try{return i?n(...i):n()}catch(s){nl(s,e,t)}}function ri(n,e,t,i){if(it(n)){const s=Uo(n,e,t,i);return s&&ad(s)&&s.catch(r=>{nl(r,e,t)}),s}if(Ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ri(n[r],e,t,i));return s}}function nl(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||St;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Gi(),Uo(r,null,10,[n,l,c]),Wi();return}}fg(n,t,s,i,o)}function fg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const _n=[];let hi=-1;const Ar=[];let us=null,xr=0;const Dd=Promise.resolve();let Ia=null;function dn(n){const e=Ia||Dd;return n?e.then(this?n.bind(this):n):e}function hg(n){let e=hi+1,t=_n.length;for(;e<t;){const i=e+t>>>1,s=_n[i],r=bo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Cu(n){if(!(n.flags&1)){const e=bo(n),t=_n[_n.length-1];!t||!(n.flags&2)&&e>=bo(t)?_n.push(n):_n.splice(hg(e),0,n),n.flags|=1,Ld()}}function Ld(){Ia||(Ia=Dd.then(Ud))}function dg(n){Ze(n)?Ar.push(...n):us&&n.id===-1?us.splice(xr+1,0,n):n.flags&1||(Ar.push(n),n.flags|=1),Ld()}function rf(n,e,t=hi+1){for(;t<_n.length;t++){const i=_n[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;_n.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Id(n){if(Ar.length){const e=[...new Set(Ar)].sort((t,i)=>bo(t)-bo(i));if(Ar.length=0,us){us.push(...e);return}for(us=e,xr=0;xr<us.length;xr++){const t=us[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}us=null,xr=0}}const bo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ud(n){try{for(hi=0;hi<_n.length;hi++){const e=_n[hi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Uo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hi<_n.length;hi++){const e=_n[hi];e&&(e.flags&=-2)}hi=-1,_n.length=0,Id(),Ia=null,(_n.length||Ar.length)&&Ud()}}let fn=null,Fd=null;function Ua(n){const e=fn;return fn=n,Fd=n&&n.type.__scopeId||null,e}function Fs(n,e=fn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Oa(-1);const r=Ua(e);let o;try{o=n(...s)}finally{Ua(r),i._d&&Oa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ht(n,e){if(fn===null)return n;const t=al(fn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=St]=e[s];r&&(it(r)&&(r={mounted:r,updated:r}),r.deep&&Oi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function bs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Gi(),ri(l,t,8,[n.el,a,n,e]),Wi())}}function pc(n,e){if(xn){let t=xn.provides;const i=xn.parent&&xn.parent.provides;i===t&&(t=xn.provides=Object.create(i)),t[n]=e}}function zi(n,e,t=!1){const i=hp();if(i||Rr){let s=Rr?Rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&it(e)?e.call(i&&i.proxy):e}}const pg=Symbol.for("v-scx"),mg=()=>zi(pg);function je(n,e,t){return Nd(n,e,t)}function Nd(n,e,t=St){const{immediate:i,deep:s,flush:r,once:o}=t,a=Vt({},t),l=e&&i||!e&&r!=="post";let c;if(Ao){if(r==="sync"){const m=mg();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=xi,m.resume=xi,m.pause=xi,m}}const u=xn;a.call=(m,g,v)=>ri(m,u,g,v);let f=!1;r==="post"?a.scheduler=m=>{wn(m,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Cu(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=ug(n,e,a);return Ao&&(c?c.push(d):l&&d()),d}function gg(n,e,t){const i=this.proxy,s=Ft(n)?n.includes(".")?Od(i,n):()=>i[n]:n.bind(i,i);let r;it(e)?r=e:(r=e.handler,t=e);const o=Fo(this),a=Nd(s,r.bind(i),t);return o(),a}function Od(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const vg=Symbol("_vte"),Bd=n=>n.__isTeleport,di=Symbol("_leaveCb"),Jr=Symbol("_enterCb");function _g(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rn(()=>{n.isMounted=!0}),Ru(()=>{n.isUnmounting=!0}),n}const kn=[Function,Array],kd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kn,onEnter:kn,onAfterEnter:kn,onEnterCancelled:kn,onBeforeLeave:kn,onLeave:kn,onAfterLeave:kn,onLeaveCancelled:kn,onBeforeAppear:kn,onAppear:kn,onAfterAppear:kn,onAppearCancelled:kn},zd=n=>{const e=n.subTree;return e.component?zd(e.component):e},xg={name:"BaseTransition",props:kd,setup(n,{slots:e}){const t=hp(),i=_g();return()=>{const s=e.default&&Gd(e.default(),!0);if(!s||!s.length)return;const r=Hd(s),o=ft(n),{mode:a}=o;if(i.isLeaving)return vl(r);const l=of(r);if(!l)return vl(r);let c=mc(l,o,i,t,f=>c=f);l.type!==un&&wo(l,c);let u=t.subTree&&of(t.subTree);if(u&&u.type!==un&&!Ns(u,l)&&zd(t).type!==un){let f=mc(u,o,i,t);if(wo(u,f),a==="out-in"&&l.type!==un)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},vl(r);a==="in-out"&&l.type!==un?f.delayLeave=(d,m,g)=>{const v=Vd(i,u);v[String(u.key)]=u,d[di]=()=>{m(),d[di]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Hd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==un){e=t;break}}return e}const yg=xg;function Vd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function mc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:p,onAppear:h,onAfterAppear:S,onAppearCancelled:b}=e,_=String(n.key),P=Vd(t,n),E=(x,y)=>{x&&ri(x,i,9,y)},T=(x,y)=>{const D=y[1];E(x,y),Ze(x)?x.every(F=>F.length<=1)&&D():x.length<=1&&D()},I={mode:o,persisted:a,beforeEnter(x){let y=l;if(!t.isMounted)if(r)y=p||l;else return;x[di]&&x[di](!0);const D=P[_];D&&Ns(n,D)&&D.el[di]&&D.el[di](),E(y,[x])},enter(x){if(P[_]===n)return;let y=c,D=u,F=f;if(!t.isMounted)if(r)y=h||c,D=S||u,F=b||f;else return;let B=!1;x[Jr]=K=>{B||(B=!0,K?E(F,[x]):E(D,[x]),I.delayedLeave&&I.delayedLeave(),x[Jr]=void 0)};const W=x[Jr].bind(null,!1);y?T(y,[x,W]):W()},leave(x,y){const D=String(n.key);if(x[Jr]&&x[Jr](!0),t.isUnmounting)return y();E(d,[x]);let F=!1;x[di]=W=>{F||(F=!0,y(),W?E(v,[x]):E(g,[x]),x[di]=void 0,P[D]===n&&delete P[D])};const B=x[di].bind(null,!1);P[D]=n,m?T(m,[x,B]):B()},clone(x){const y=mc(x,e,t,i,s);return s&&s(y),y}};return I}function vl(n){if(il(n))return n=ys(n),n.children=null,n}function of(n){if(!il(n))return Bd(n.type)&&n.children?Hd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&it(t.default))return t.default()}}function wo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,wo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Gd(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===ln?(o.patchFlag&128&&s++,i=i.concat(Gd(o.children,e,a))):(e||o.type!==un)&&i.push(a!=null?ys(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function ai(n,e){return it(n)?Vt({name:n.name},e,{setup:n}):n}function Wd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function af(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Fa=new WeakMap;function mo(n,e,t,i,s=!1){if(Ze(n)){n.forEach((v,p)=>mo(v,e&&(Ze(e)?e[p]:e),t,i,s));return}if(Cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&mo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?al(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===St?a.refs={}:a.refs,f=a.setupState,d=ft(f),m=f===St?od:v=>af(u,v)?!1:pt(d,v),g=(v,p)=>!(p&&af(u,p));if(c!=null&&c!==l){if(lf(e),Ft(c))u[c]=null,m(c)&&(f[c]=null);else if(hn(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(it(l))Uo(l,a,12,[o,u]);else{const v=Ft(l),p=hn(l);if(v||p){const h=()=>{if(n.f){const S=v?m(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ze(S)&&_u(S,r);else if(Ze(S))S.includes(r)||S.push(r);else if(v)u[l]=[r],m(l)&&(f[l]=u[l]);else{const b=[r];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else v?(u[l]=o,m(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const S=()=>{h(),Fa.delete(n)};S.id=-1,Fa.set(n,S),wn(S,t)}else lf(n),h()}}}function lf(n){const e=Fa.get(n);e&&(e.flags|=8,Fa.delete(n))}Ja().requestIdleCallback;Ja().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,il=n=>n.type.__isKeepAlive;function Mg(n,e){Xd(n,"a",e)}function Sg(n,e){Xd(n,"da",e)}function Xd(n,e,t=xn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(sl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)il(s.parent.vnode)&&bg(i,e,t,s),s=s.parent}}function bg(n,e,t,i){const s=sl(e,n,i,!0);Wn(()=>{_u(i[e],s)},t)}function sl(n,e,t=xn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Gi();const a=Fo(t),l=ri(e,t,n,o);return a(),Wi(),l});return i?s.unshift(r):s.push(r),r}}const ji=n=>(e,t=xn)=>{(!Ao||n==="sp")&&sl(n,(...i)=>e(...i),t)},wg=ji("bm"),Rn=ji("m"),Eg=ji("bu"),Tg=ji("u"),Ru=ji("bum"),Wn=ji("um"),Ag=ji("sp"),Cg=ji("rtg"),Rg=ji("rtc");function Pg(n,e=xn){sl("ec",n,e)}const Dg=Symbol.for("v-ndc");function Lg(n,e,t,i){let s;const r=t,o=Ze(n);if(o||Ft(n)){const a=o&&Gs(n);let l=!1,c=!1;a&&(l=!Vn(n),c=Xi(n),n=el(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Ur(si(n[u])):si(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function gc(n,e,t={},i,s){if(fn.ce||fn.parent&&Cr(fn.parent)&&fn.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Je(),Lt(ln,null,[Ct("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Je();const o=r&&Yd(r(t)),a=t.key||o&&o.key,l=Lt(ln,{key:(a&&!ii(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function Yd(n){return n.some(e=>To(e)?!(e.type===un||e.type===ln&&!Yd(e.children)):!0)?n:null}const vc=n=>n?dp(n)?al(n):vc(n.parent):null,go=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vc(n.parent),$root:n=>vc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>qd(n),$forceUpdate:n=>n.f||(n.f=()=>{Cu(n.update)}),$nextTick:n=>n.n||(n.n=dn.bind(n.proxy)),$watch:n=>gg.bind(n)}),_l=(n,e)=>n!==St&&!n.__isScriptSetup&&pt(n,e),Ig={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(_l(i,e))return o[e]=1,i[e];if(s!==St&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(t!==St&&pt(t,e))return o[e]=4,t[e];_c&&(o[e]=0)}}const c=go[e];let u,f;if(c)return e==="$attrs"&&an(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==St&&pt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,pt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return _l(s,e)?(s[e]=t,!0):i!==St&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==St&&a[0]!=="$"&&pt(n,a)||_l(e,a)||pt(r,a)||pt(i,a)||pt(go,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cf(n){return Ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _c=!0;function Ug(n){const e=qd(n),t=n.proxy,i=n.ctx;_c=!1,e.beforeCreate&&uf(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:v,deactivated:p,beforeDestroy:h,beforeUnmount:S,destroyed:b,unmounted:_,render:P,renderTracked:E,renderTriggered:T,errorCaptured:I,serverPrefetch:x,expose:y,inheritAttrs:D,components:F,directives:B,filters:W}=e;if(c&&Fg(c,i,null),o)for(const Z in o){const H=o[Z];it(H)&&(i[Z]=H.bind(t))}if(s){const Z=s.call(t,t);vt(Z)&&(n.data=Tr(Z))}if(_c=!0,r)for(const Z in r){const H=r[Z],te=it(H)?H.bind(t,t):it(H.get)?H.get.bind(t,t):xi,U=!it(H)&&it(H.set)?H.set.bind(t):xi,V=nt({get:te,set:U});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>V.value,set:Y=>V.value=Y})}if(a)for(const Z in a)$d(a[Z],i,t,Z);if(l){const Z=it(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(H=>{pc(H,Z[H])})}u&&uf(u,n,"c");function $(Z,H){Ze(H)?H.forEach(te=>Z(te.bind(t))):H&&Z(H.bind(t))}if($(wg,f),$(Rn,d),$(Eg,m),$(Tg,g),$(Mg,v),$(Sg,p),$(Pg,I),$(Rg,E),$(Cg,T),$(Ru,S),$(Wn,_),$(Ag,x),Ze(y))if(y.length){const Z=n.exposed||(n.exposed={});y.forEach(H=>{Object.defineProperty(Z,H,{get:()=>t[H],set:te=>t[H]=te,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===xi&&(n.render=P),D!=null&&(n.inheritAttrs=D),F&&(n.components=F),B&&(n.directives=B),x&&Wd(n)}function Fg(n,e,t=xi){Ze(n)&&(n=xc(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=zi(s.from||i,s.default,!0):r=zi(s.from||i):r=zi(s),hn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function uf(n,e,t){ri(Ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function $d(n,e,t,i){let s=i.includes(".")?Od(t,i):()=>t[i];if(Ft(n)){const r=e[n];it(r)&&je(s,r)}else if(it(n))je(s,n.bind(t));else if(vt(n))if(Ze(n))n.forEach(r=>$d(r,e,t,i));else{const r=it(n.handler)?n.handler.bind(t):e[n.handler];it(r)&&je(s,r,n)}}function qd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Na(l,c,o,!0)),Na(l,e,o)),vt(e)&&r.set(e,l),l}function Na(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Na(n,r,t,!0),s&&s.forEach(o=>Na(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ng[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Ng={data:ff,props:hf,emits:hf,methods:ao,computed:ao,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:ao,directives:ao,watch:Bg,provide:ff,inject:Og};function ff(n,e){return e?n?function(){return Vt(it(n)?n.call(this,this):n,it(e)?e.call(this,this):e)}:e:n}function Og(n,e){return ao(xc(n),xc(e))}function xc(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pn(n,e){return n?[...new Set([].concat(n,e))]:e}function ao(n,e){return n?Vt(Object.create(null),n,e):e}function hf(n,e){return n?Ze(n)&&Ze(e)?[...new Set([...n,...e])]:Vt(Object.create(null),cf(n),cf(e??{})):e}function Bg(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=pn(n[i],e[i]);return t}function Kd(){return{app:null,config:{isNativeTag:od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kg=0;function zg(n,e){return function(i,s=null){it(i)||(i=Vt({},i)),s!=null&&!vt(s)&&(s=null);const r=Kd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:kg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:_v,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&it(u.install)?(o.add(u),u.install(c,...f)):it(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||Ct(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,al(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ri(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Rr;Rr=c;try{return u()}finally{Rr=f}}};return c}}let Rr=null;const Hg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ei(e)}Modifiers`]||n[`${Ss(e)}Modifiers`];function Vg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let s=t;const r=e.startsWith("update:"),o=r&&Hg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ft(u)?u.trim():u)),o.number&&(s=t.map(Za)));let a,l=i[a=hl(e)]||i[a=hl(ei(e))];!l&&r&&(l=i[a=hl(Ss(e))]),l&&ri(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ri(c,n,6,s)}}const Gg=new WeakMap;function jd(n,e,t=!1){const i=t?Gg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!it(n)){const l=c=>{const u=jd(c,e,!0);u&&(a=!0,Vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Ze(r)?r.forEach(l=>o[l]=null):Vt(o,r),vt(n)&&i.set(n,o),o)}function rl(n,e){return!n||!qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,Ss(e))||pt(n,e))}function df(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:g,inheritAttrs:v}=n,p=Ua(n);let h,S;try{if(t.shapeFlag&4){const _=s||i,P=_;h=mi(c.call(P,_,u,f,m,d,g)),S=a}else{const _=e;h=mi(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),S=e.props?a:Wg(a)}}catch(_){vo.length=0,nl(_,n,1),h=Ct(un)}let b=h;if(S&&v!==!1){const _=Object.keys(S),{shapeFlag:P}=b;_.length&&P&7&&(r&&_.some(Ka)&&(S=Xg(S,r)),b=ys(b,S,!1,!0))}return t.dirs&&(b=ys(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&wo(b,t.transition),h=b,Ua(p),h}const Wg=n=>{let e;for(const t in n)(t==="class"||t==="style"||qa(t))&&((e||(e={}))[t]=n[t]);return e},Xg=(n,e)=>{const t={};for(const i in n)(!Ka(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Yg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Zd(o,i,d)&&!rl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?pf(i,o,c):!0:!!o;return!1}function pf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Zd(e,n,r)&&!rl(t,r))return!0}return!1}function Zd(n,e,t){const i=n[t],s=e[t];return t==="style"&&vt(i)&&vt(s)?!Xr(i,s):i!==s}function $g({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Jd={},Qd=()=>Object.create(Jd),ep=n=>Object.getPrototypeOf(n)===Jd;function qg(n,e,t,i=!1){const s={},r=Qd();n.propsDefaults=Object.create(null),tp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:tl(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Kg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ft(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(rl(n.emitsOptions,d))continue;const m=e[d];if(l)if(pt(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const g=ei(d);s[g]=yc(l,a,g,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{tp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=Ss(f))===f||!pt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=yc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!pt(e,f))&&(delete r[f],c=!0)}c&&Ni(n.attrs,"set","")}function tp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(fo(l))continue;const c=e[l];let u;s&&pt(s,u=ei(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:rl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(t),c=a||St;for(let u=0;u<r.length;u++){const f=r[u];t[f]=yc(s,l,f,c[f],n,!pt(c,f))}}return o}function yc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&it(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Fo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ss(t))&&(i=!0))}return i}const jg=new WeakMap;function np(n,e,t=!1){const i=t?jg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!it(n)){const u=f=>{l=!0;const[d,m]=np(f,e,!0);Vt(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,wr),wr;if(Ze(r))for(let u=0;u<r.length;u++){const f=ei(r[u]);mf(f)&&(o[f]=St)}else if(r)for(const u in r){const f=ei(u);if(mf(f)){const d=r[u],m=o[f]=Ze(d)||it(d)?{type:d}:Vt({},d),g=m.type;let v=!1,p=!0;if(Ze(g))for(let h=0;h<g.length;++h){const S=g[h],b=it(S)&&S.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(p=!1)}else v=it(g)&&g.name==="Boolean";m[0]=v,m[1]=p,(v||pt(m,"default"))&&a.push(f)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function mf(n){return n[0]!=="$"&&!fo(n)}const Pu=n=>n==="_"||n==="_ctx"||n==="$stable",Du=n=>Ze(n)?n.map(mi):[mi(n)],Zg=(n,e,t)=>{if(e._n)return e;const i=Fs((...s)=>Du(e(...s)),t);return i._c=!1,i},ip=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Pu(s))continue;const r=n[s];if(it(r))e[s]=Zg(s,r,i);else if(r!=null){const o=Du(r);e[s]=()=>o}}},sp=(n,e)=>{const t=Du(e);n.slots.default=()=>t},rp=(n,e,t)=>{for(const i in e)(t||!Pu(i))&&(n[i]=e[i])},Jg=(n,e,t)=>{const i=n.slots=Qd();if(n.vnode.shapeFlag&32){const s=e._;s?(rp(i,e,t),t&&fd(i,"_",s,!0)):ip(e,i)}else e&&sp(n,e)},Qg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=St;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:rp(s,e,t):(r=!e.$stable,ip(e,s)),o=e}else e&&(sp(n,e),o={default:1});if(r)for(const a in s)!Pu(a)&&o[a]==null&&delete s[a]},wn=sv;function ev(n){return tv(n)}function tv(n,e){const t=Ja();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=xi,insertStaticContent:g}=n,v=(R,O,A,de=null,se=null,ne=null,ce=void 0,xe=null,ue=!!O.dynamicChildren)=>{if(R===O)return;R&&!Ns(R,O)&&(de=ve(R),Y(R,se,ne,!0),R=null),O.patchFlag===-2&&(ue=!1,O.dynamicChildren=null);const{type:w,ref:M,shapeFlag:L}=O;switch(w){case ol:p(R,O,A,de);break;case un:h(R,O,A,de);break;case yl:R==null&&S(O,A,de,ce);break;case ln:F(R,O,A,de,se,ne,ce,xe,ue);break;default:L&1?P(R,O,A,de,se,ne,ce,xe,ue):L&6?B(R,O,A,de,se,ne,ce,xe,ue):(L&64||L&128)&&w.process(R,O,A,de,se,ne,ce,xe,ue,Ce)}M!=null&&se?mo(M,R&&R.ref,ne,O||R,!O):M==null&&R&&R.ref!=null&&mo(R.ref,null,ne,R,!0)},p=(R,O,A,de)=>{if(R==null)i(O.el=a(O.children),A,de);else{const se=O.el=R.el;O.children!==R.children&&c(se,O.children)}},h=(R,O,A,de)=>{R==null?i(O.el=l(O.children||""),A,de):O.el=R.el},S=(R,O,A,de)=>{[R.el,R.anchor]=g(R.children,O,A,de,R.el,R.anchor)},b=({el:R,anchor:O},A,de)=>{let se;for(;R&&R!==O;)se=d(R),i(R,A,de),R=se;i(O,A,de)},_=({el:R,anchor:O})=>{let A;for(;R&&R!==O;)A=d(R),s(R),R=A;s(O)},P=(R,O,A,de,se,ne,ce,xe,ue)=>{if(O.type==="svg"?ce="svg":O.type==="math"&&(ce="mathml"),R==null)E(O,A,de,se,ne,ce,xe,ue);else{const w=R.el&&R.el._isVueCE?R.el:null;try{w&&w._beginPatch(),x(R,O,se,ne,ce,xe,ue)}finally{w&&w._endPatch()}}},E=(R,O,A,de,se,ne,ce,xe)=>{let ue,w;const{props:M,shapeFlag:L,transition:G,dirs:J}=R;if(ue=R.el=o(R.type,ne,M&&M.is,M),L&8?u(ue,R.children):L&16&&I(R.children,ue,null,de,se,xl(R,ne),ce,xe),J&&bs(R,null,de,"created"),T(ue,R,R.scopeId,ce,de),M){for(const we in M)we!=="value"&&!fo(we)&&r(ue,we,null,M[we],ne,de);"value"in M&&r(ue,"value",null,M.value,ne),(w=M.onVnodeBeforeMount)&&ui(w,de,R)}J&&bs(R,null,de,"beforeMount");const re=nv(se,G);re&&G.beforeEnter(ue),i(ue,O,A),((w=M&&M.onVnodeMounted)||re||J)&&wn(()=>{try{w&&ui(w,de,R),re&&G.enter(ue),J&&bs(R,null,de,"mounted")}finally{}},se)},T=(R,O,A,de,se)=>{if(A&&m(R,A),de)for(let ne=0;ne<de.length;ne++)m(R,de[ne]);if(se){let ne=se.subTree;if(O===ne||cp(ne.type)&&(ne.ssContent===O||ne.ssFallback===O)){const ce=se.vnode;T(R,ce,ce.scopeId,ce.slotScopeIds,se.parent)}}},I=(R,O,A,de,se,ne,ce,xe,ue=0)=>{for(let w=ue;w<R.length;w++){const M=R[w]=xe?Fi(R[w]):mi(R[w]);v(null,M,O,A,de,se,ne,ce,xe)}},x=(R,O,A,de,se,ne,ce)=>{const xe=O.el=R.el;let{patchFlag:ue,dynamicChildren:w,dirs:M}=O;ue|=R.patchFlag&16;const L=R.props||St,G=O.props||St;let J;if(A&&ws(A,!1),(J=G.onVnodeBeforeUpdate)&&ui(J,A,O,R),M&&bs(O,R,A,"beforeUpdate"),A&&ws(A,!0),(L.innerHTML&&G.innerHTML==null||L.textContent&&G.textContent==null)&&u(xe,""),w?y(R.dynamicChildren,w,xe,A,de,xl(O,se),ne):ce||H(R,O,xe,null,A,de,xl(O,se),ne,!1),ue>0){if(ue&16)D(xe,L,G,A,se);else if(ue&2&&L.class!==G.class&&r(xe,"class",null,G.class,se),ue&4&&r(xe,"style",L.style,G.style,se),ue&8){const re=O.dynamicProps;for(let we=0;we<re.length;we++){const Se=re[we],Te=L[Se],We=G[Se];(We!==Te||Se==="value")&&r(xe,Se,Te,We,se,A)}}ue&1&&R.children!==O.children&&u(xe,O.children)}else!ce&&w==null&&D(xe,L,G,A,se);((J=G.onVnodeUpdated)||M)&&wn(()=>{J&&ui(J,A,O,R),M&&bs(O,R,A,"updated")},de)},y=(R,O,A,de,se,ne,ce)=>{for(let xe=0;xe<O.length;xe++){const ue=R[xe],w=O[xe],M=ue.el&&(ue.type===ln||!Ns(ue,w)||ue.shapeFlag&198)?f(ue.el):A;v(ue,w,M,null,de,se,ne,ce,!0)}},D=(R,O,A,de,se)=>{if(O!==A){if(O!==St)for(const ne in O)!fo(ne)&&!(ne in A)&&r(R,ne,O[ne],null,se,de);for(const ne in A){if(fo(ne))continue;const ce=A[ne],xe=O[ne];ce!==xe&&ne!=="value"&&r(R,ne,xe,ce,se,de)}"value"in A&&r(R,"value",O.value,A.value,se)}},F=(R,O,A,de,se,ne,ce,xe,ue)=>{const w=O.el=R?R.el:a(""),M=O.anchor=R?R.anchor:a("");let{patchFlag:L,dynamicChildren:G,slotScopeIds:J}=O;J&&(xe=xe?xe.concat(J):J),R==null?(i(w,A,de),i(M,A,de),I(O.children||[],A,M,se,ne,ce,xe,ue)):L>0&&L&64&&G&&R.dynamicChildren&&R.dynamicChildren.length===G.length?(y(R.dynamicChildren,G,A,se,ne,ce,xe),(O.key!=null||se&&O===se.subTree)&&op(R,O,!0)):H(R,O,A,M,se,ne,ce,xe,ue)},B=(R,O,A,de,se,ne,ce,xe,ue)=>{O.slotScopeIds=xe,R==null?O.shapeFlag&512?se.ctx.activate(O,A,de,ce,ue):W(O,A,de,se,ne,ce,ue):K(R,O,ue)},W=(R,O,A,de,se,ne,ce)=>{const xe=R.component=fv(R,de,se);if(il(R)&&(xe.ctx.renderer=Ce),hv(xe,!1,ce),xe.asyncDep){if(se&&se.registerDep(xe,$,ce),!R.el){const ue=xe.subTree=Ct(un);h(null,ue,O,A),R.placeholder=ue.el}}else $(xe,R,O,A,se,ne,ce)},K=(R,O,A)=>{const de=O.component=R.component;if(Yg(R,O,A))if(de.asyncDep&&!de.asyncResolved){Z(de,O,A);return}else de.next=O,de.update();else O.el=R.el,de.vnode=O},$=(R,O,A,de,se,ne,ce)=>{const xe=()=>{if(R.isMounted){let{next:L,bu:G,u:J,parent:re,vnode:we}=R;{const z=ap(R);if(z){L&&(L.el=we.el,Z(R,L,ce)),z.asyncDep.then(()=>{wn(()=>{R.isUnmounted||w()},se)});return}}let Se=L,Te;ws(R,!1),L?(L.el=we.el,Z(R,L,ce)):L=we,G&&Ma(G),(Te=L.props&&L.props.onVnodeBeforeUpdate)&&ui(Te,re,L,we),ws(R,!0);const We=df(R),N=R.subTree;R.subTree=We,v(N,We,f(N.el),ve(N),R,se,ne),L.el=We.el,Se===null&&$g(R,We.el),J&&wn(J,se),(Te=L.props&&L.props.onVnodeUpdated)&&wn(()=>ui(Te,re,L,we),se)}else{let L;const{el:G,props:J}=O,{bm:re,m:we,parent:Se,root:Te,type:We}=R,N=Cr(O);ws(R,!1),re&&Ma(re),!N&&(L=J&&J.onVnodeBeforeMount)&&ui(L,Se,O),ws(R,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(We,R.parent?R.parent.type:void 0);const z=R.subTree=df(R);v(null,z,A,de,R,se,ne),O.el=z.el}if(we&&wn(we,se),!N&&(L=J&&J.onVnodeMounted)){const z=O;wn(()=>ui(L,Se,z),se)}(O.shapeFlag&256||Se&&Cr(Se.vnode)&&Se.vnode.shapeFlag&256)&&R.a&&wn(R.a,se),R.isMounted=!0,O=A=de=null}};R.scope.on();const ue=R.effect=new gd(xe);R.scope.off();const w=R.update=ue.run.bind(ue),M=R.job=ue.runIfDirty.bind(ue);M.i=R,M.id=R.uid,ue.scheduler=()=>Cu(M),ws(R,!0),w()},Z=(R,O,A)=>{O.component=R;const de=R.vnode.props;R.vnode=O,R.next=null,Kg(R,O.props,de,A),Qg(R,O.children,A),Gi(),rf(R),Wi()},H=(R,O,A,de,se,ne,ce,xe,ue=!1)=>{const w=R&&R.children,M=R?R.shapeFlag:0,L=O.children,{patchFlag:G,shapeFlag:J}=O;if(G>0){if(G&128){U(w,L,A,de,se,ne,ce,xe,ue);return}else if(G&256){te(w,L,A,de,se,ne,ce,xe,ue);return}}J&8?(M&16&&_e(w,se,ne),L!==w&&u(A,L)):M&16?J&16?U(w,L,A,de,se,ne,ce,xe,ue):_e(w,se,ne,!0):(M&8&&u(A,""),J&16&&I(L,A,de,se,ne,ce,xe,ue))},te=(R,O,A,de,se,ne,ce,xe,ue)=>{R=R||wr,O=O||wr;const w=R.length,M=O.length,L=Math.min(w,M);let G;for(G=0;G<L;G++){const J=O[G]=ue?Fi(O[G]):mi(O[G]);v(R[G],J,A,null,se,ne,ce,xe,ue)}w>M?_e(R,se,ne,!0,!1,L):I(O,A,de,se,ne,ce,xe,ue,L)},U=(R,O,A,de,se,ne,ce,xe,ue)=>{let w=0;const M=O.length;let L=R.length-1,G=M-1;for(;w<=L&&w<=G;){const J=R[w],re=O[w]=ue?Fi(O[w]):mi(O[w]);if(Ns(J,re))v(J,re,A,null,se,ne,ce,xe,ue);else break;w++}for(;w<=L&&w<=G;){const J=R[L],re=O[G]=ue?Fi(O[G]):mi(O[G]);if(Ns(J,re))v(J,re,A,null,se,ne,ce,xe,ue);else break;L--,G--}if(w>L){if(w<=G){const J=G+1,re=J<M?O[J].el:de;for(;w<=G;)v(null,O[w]=ue?Fi(O[w]):mi(O[w]),A,re,se,ne,ce,xe,ue),w++}}else if(w>G)for(;w<=L;)Y(R[w],se,ne,!0),w++;else{const J=w,re=w,we=new Map;for(w=re;w<=G;w++){const ye=O[w]=ue?Fi(O[w]):mi(O[w]);ye.key!=null&&we.set(ye.key,w)}let Se,Te=0;const We=G-re+1;let N=!1,z=0;const ie=new Array(We);for(w=0;w<We;w++)ie[w]=0;for(w=J;w<=L;w++){const ye=R[w];if(Te>=We){Y(ye,se,ne,!0);continue}let Ne;if(ye.key!=null)Ne=we.get(ye.key);else for(Se=re;Se<=G;Se++)if(ie[Se-re]===0&&Ns(ye,O[Se])){Ne=Se;break}Ne===void 0?Y(ye,se,ne,!0):(ie[Ne-re]=w+1,Ne>=z?z=Ne:N=!0,v(ye,O[Ne],A,null,se,ne,ce,xe,ue),Te++)}const Ee=N?iv(ie):wr;for(Se=Ee.length-1,w=We-1;w>=0;w--){const ye=re+w,Ne=O[ye],Ie=O[ye+1],qe=ye+1<M?Ie.el||lp(Ie):de;ie[w]===0?v(null,Ne,A,qe,se,ne,ce,xe,ue):N&&(Se<0||w!==Ee[Se]?V(Ne,A,qe,2):Se--)}}},V=(R,O,A,de,se=null)=>{const{el:ne,type:ce,transition:xe,children:ue,shapeFlag:w}=R;if(w&6){V(R.component.subTree,O,A,de);return}if(w&128){R.suspense.move(O,A,de);return}if(w&64){ce.move(R,O,A,Ce);return}if(ce===ln){i(ne,O,A);for(let L=0;L<ue.length;L++)V(ue[L],O,A,de);i(R.anchor,O,A);return}if(ce===yl){b(R,O,A);return}if(de!==2&&w&1&&xe)if(de===0)xe.beforeEnter(ne),i(ne,O,A),wn(()=>xe.enter(ne),se);else{const{leave:L,delayLeave:G,afterLeave:J}=xe,re=()=>{R.ctx.isUnmounted?s(ne):i(ne,O,A)},we=()=>{ne._isLeaving&&ne[di](!0),L(ne,()=>{re(),J&&J()})};G?G(ne,re,we):we()}else i(ne,O,A)},Y=(R,O,A,de=!1,se=!1)=>{const{type:ne,props:ce,ref:xe,children:ue,dynamicChildren:w,shapeFlag:M,patchFlag:L,dirs:G,cacheIndex:J,memo:re}=R;if(L===-2&&(se=!1),xe!=null&&(Gi(),mo(xe,null,A,R,!0),Wi()),J!=null&&(O.renderCache[J]=void 0),M&256){O.ctx.deactivate(R);return}const we=M&1&&G,Se=!Cr(R);let Te;if(Se&&(Te=ce&&ce.onVnodeBeforeUnmount)&&ui(Te,O,R),M&6)he(R.component,A,de);else{if(M&128){R.suspense.unmount(A,de);return}we&&bs(R,null,O,"beforeUnmount"),M&64?R.type.remove(R,O,A,Ce,de):w&&!w.hasOnce&&(ne!==ln||L>0&&L&64)?_e(w,O,A,!1,!0):(ne===ln&&L&384||!se&&M&16)&&_e(ue,O,A),de&&ae(R)}const We=re!=null&&J==null;(Se&&(Te=ce&&ce.onVnodeUnmounted)||we||We)&&wn(()=>{Te&&ui(Te,O,R),we&&bs(R,null,O,"unmounted"),We&&(R.el=null)},A)},ae=R=>{const{type:O,el:A,anchor:de,transition:se}=R;if(O===ln){Q(A,de);return}if(O===yl){_(R);return}const ne=()=>{s(A),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(R.shapeFlag&1&&se&&!se.persisted){const{leave:ce,delayLeave:xe}=se,ue=()=>ce(A,ne);xe?xe(R.el,ne,ue):ue()}else ne()},Q=(R,O)=>{let A;for(;R!==O;)A=d(R),s(R),R=A;s(O)},he=(R,O,A)=>{const{bum:de,scope:se,job:ne,subTree:ce,um:xe,m:ue,a:w}=R;gf(ue),gf(w),de&&Ma(de),se.stop(),ne&&(ne.flags|=8,Y(ce,R,O,A)),xe&&wn(xe,O),wn(()=>{R.isUnmounted=!0},O)},_e=(R,O,A,de=!1,se=!1,ne=0)=>{for(let ce=ne;ce<R.length;ce++)Y(R[ce],O,A,de,se)},ve=R=>{if(R.shapeFlag&6)return ve(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const O=d(R.anchor||R.el),A=O&&O[vg];return A?d(A):O};let Be=!1;const He=(R,O,A)=>{let de;R==null?O._vnode&&(Y(O._vnode,null,null,!0),de=O._vnode.component):v(O._vnode||null,R,O,null,null,null,A),O._vnode=R,Be||(Be=!0,rf(de),Id(),Be=!1)},Ce={p:v,um:Y,m:V,r:ae,mt:W,mc:I,pc:H,pbc:y,n:ve,o:n};return{render:He,hydrate:void 0,createApp:zg(He)}}function xl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ws({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function nv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function op(n,e,t=!1){const i=n.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Fi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&op(o,a)),a.type===ol&&(a.patchFlag===-1&&(a=s[r]=Fi(a)),a.el=o.el),a.type===un&&!a.el&&(a.el=o.el)}}function iv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function ap(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ap(e)}function gf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function lp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?lp(e.subTree):null}const cp=n=>n.__isSuspense;function sv(n,e){e&&e.pendingBranch?Ze(n)?e.effects.push(...n):e.effects.push(n):dg(n)}const ln=Symbol.for("v-fgt"),ol=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),yl=Symbol.for("v-stc"),vo=[];let Fn=null;function Je(n=!1){vo.push(Fn=n?null:[])}function rv(){vo.pop(),Fn=vo[vo.length-1]||null}let Eo=1;function Oa(n,e=!1){Eo+=n,n<0&&Fn&&e&&(Fn.hasOnce=!0)}function up(n){return n.dynamicChildren=Eo>0?Fn||wr:null,rv(),Eo>0&&Fn&&Fn.push(n),n}function mt(n,e,t,i,s,r){return up(Le(n,e,t,i,s,r,!0))}function Lt(n,e,t,i,s){return up(Ct(n,e,t,i,s,!0))}function To(n){return n?n.__v_isVNode===!0:!1}function Ns(n,e){return n.type===e.type&&n.key===e.key}const fp=({key:n})=>n??null,Sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ft(n)||hn(n)||it(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function Le(n,e=null,t=null,i=0,s=null,r=n===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&fp(e),ref:e&&Sa(e),scopeId:Fd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return a?(Lu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),Eo>0&&!o&&Fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fn.push(l),l}const Ct=ov;function ov(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Dg)&&(n=un),To(n)){const a=ys(n,e,!0);return t&&Lu(a,t),Eo>0&&!r&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(n)]=a:Fn.push(a)),a.patchFlag=-2,a}if(gv(n)&&(n=n.__vccOpts),e){e=av(e);let{class:a,style:l}=e;a&&!Ft(a)&&(e.class=qt(a)),vt(l)&&(Au(l)&&!Ze(l)&&(l=Vt({},l)),e.style=Un(l))}const o=Ft(n)?1:cp(n)?128:Bd(n)?64:vt(n)?4:it(n)?2:0;return Le(n,e,t,i,s,o,r,!0)}function av(n){return n?Au(n)||ep(n)?Vt({},n):n:null}function ys(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?lv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&fp(c),ref:e&&e.ref?t&&r?Ze(r)?r.concat(Sa(e)):[r,Sa(e)]:Sa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ln?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ys(n.ssContent),ssFallback:n.ssFallback&&ys(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&wo(u,l.clone(u)),u}function Tn(n=" ",e=0){return Ct(ol,null,n,e)}function Kt(n="",e=!1){return e?(Je(),Lt(un,null,n)):Ct(un,null,n)}function mi(n){return n==null||typeof n=="boolean"?Ct(un):Ze(n)?Ct(ln,null,n.slice()):To(n)?Fi(n):Ct(ol,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ys(n)}function Lu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Lu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ep(e)?e._ctx=fn:s===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else it(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[Tn(e)]):t=8);n.children=e,n.shapeFlag|=t}function lv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=qt([e.class,i.class]));else if(s==="style")e.style=Un([e.style,i.style]);else if(qa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ka(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function ui(n,e,t,i=null){ri(n,e,7,[t,i])}const cv=Kd();let uv=0;function fv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||cv,r={uid:uv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(i,s),emitsOptions:jd(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Vg.bind(null,r),n.ce&&n.ce(r),r}let xn=null;const hp=()=>xn||fn;let Ba,Mc;{const n=Ja(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ba=e("__VUE_INSTANCE_SETTERS__",t=>xn=t),Mc=e("__VUE_SSR_SETTERS__",t=>Ao=t)}const Fo=n=>{const e=xn;return Ba(n),n.scope.on(),()=>{n.scope.off(),Ba(e)}},vf=()=>{xn&&xn.scope.off(),Ba(null)};function dp(n){return n.vnode.shapeFlag&4}let Ao=!1;function hv(n,e=!1,t=!1){e&&Mc(e);const{props:i,children:s}=n.vnode,r=dp(n);qg(n,i,r,e),Jg(n,s,t||e);const o=r?dv(n,e):void 0;return e&&Mc(!1),o}function dv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ig);const{setup:i}=t;if(i){Gi();const s=n.setupContext=i.length>1?mv(n):null,r=Fo(n),o=Uo(i,n,0,[n.props,s]),a=ad(o);if(Wi(),r(),(a||n.sp)&&!Cr(n)&&Wd(n),a){if(o.then(vf,vf),e)return o.then(l=>{_f(n,l)}).catch(l=>{nl(l,n,0)});n.asyncDep=o}else _f(n,o)}else pp(n)}function _f(n,e,t){it(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Pd(e)),pp(n)}function pp(n,e,t){const i=n.type;n.render||(n.render=i.render||xi);{const s=Fo(n);Gi();try{Ug(n)}finally{Wi(),s()}}}const pv={get(n,e){return an(n,"get",""),n[e]}};function mv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,pv),slots:n.slots,emit:n.emit,expose:e}}function al(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Pd(ig(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in go)return go[t](n)},has(e,t){return t in e||t in go}})):n.proxy}function gv(n){return it(n)&&"__vccOpts"in n}const nt=(n,e)=>lg(n,e,Ao);function vv(n,e,t){try{Oa(-1);const i=arguments.length;return i===2?vt(e)&&!Ze(e)?To(e)?Ct(n,null,[e]):Ct(n,e):Ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&To(t)&&(t=[t]),Ct(n,e,t))}finally{Oa(1)}}const _v="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sc;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{Sc=xf.createPolicy("vue",{createHTML:n=>n})}catch{}const mp=Sc?n=>Sc.createHTML(n):n=>n,xv="http://www.w3.org/2000/svg",yv="http://www.w3.org/1998/Math/MathML",Ui=typeof document<"u"?document:null,yf=Ui&&Ui.createElement("template"),Mv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ui.createElementNS(xv,n):e==="mathml"?Ui.createElementNS(yv,n):t?Ui.createElement(n,{is:t}):Ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ui.createTextNode(n),createComment:n=>Ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{yf.innerHTML=mp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=yf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ts="transition",Qr="animation",Co=Symbol("_vtc"),gp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Sv=Vt({},kd,gp),bv=n=>(n.displayName="Transition",n.props=Sv,n),wv=bv((n,{slots:e})=>vv(yg,Ev(n),e)),Es=(n,e=[])=>{Ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},Mf=n=>n?Ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Ev(n){const e={};for(const F in n)F in gp||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=Tv(s),v=g&&g[0],p=g&&g[1],{onBeforeEnter:h,onEnter:S,onEnterCancelled:b,onLeave:_,onLeaveCancelled:P,onBeforeAppear:E=h,onAppear:T=S,onAppearCancelled:I=b}=e,x=(F,B,W,K)=>{F._enterCancelled=K,Ts(F,B?u:a),Ts(F,B?c:o),W&&W()},y=(F,B)=>{F._isLeaving=!1,Ts(F,f),Ts(F,m),Ts(F,d),B&&B()},D=F=>(B,W)=>{const K=F?T:S,$=()=>x(B,F,W);Es(K,[B,$]),Sf(()=>{Ts(B,F?l:r),Ei(B,F?u:a),Mf(K)||bf(B,i,v,$)})};return Vt(e,{onBeforeEnter(F){Es(h,[F]),Ei(F,r),Ei(F,o)},onBeforeAppear(F){Es(E,[F]),Ei(F,l),Ei(F,c)},onEnter:D(!1),onAppear:D(!0),onLeave(F,B){F._isLeaving=!0;const W=()=>y(F,B);Ei(F,f),F._enterCancelled?(Ei(F,d),Tf(F)):(Tf(F),Ei(F,d)),Sf(()=>{F._isLeaving&&(Ts(F,f),Ei(F,m),Mf(_)||bf(F,i,p,W))}),Es(_,[F,W])},onEnterCancelled(F){x(F,!1,void 0,!0),Es(b,[F])},onAppearCancelled(F){x(F,!0,void 0,!0),Es(I,[F])},onLeaveCancelled(F){y(F),Es(P,[F])}})}function Tv(n){if(n==null)return null;if(vt(n))return[Ml(n.enter),Ml(n.leave)];{const e=Ml(n);return[e,e]}}function Ml(n){return Pm(n)}function Ei(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Co]||(n[Co]=new Set)).add(e)}function Ts(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Co];t&&(t.delete(e),t.size||(n[Co]=void 0))}function Sf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Av=0;function bf(n,e,t,i){const s=n._endId=++Av,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Cv(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),r()},d=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function Cv(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${ts}Delay`),r=i(`${ts}Duration`),o=wf(s,r),a=i(`${Qr}Delay`),l=i(`${Qr}Duration`),c=wf(a,l);let u=null,f=0,d=0;e===ts?o>0&&(u=ts,f=o,d=r.length):e===Qr?c>0&&(u=Qr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?ts:Qr:null,d=u?u===ts?r.length:l.length:0);const m=u===ts&&/\b(?:transform|all)(?:,|$)/.test(i(`${ts}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function wf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ef(t)+Ef(n[i])))}function Ef(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Tf(n){return(n?n.ownerDocument:document).body.offsetHeight}function Rv(n,e,t){const i=n[Co];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ka=Symbol("_vod"),vp=Symbol("_vsh"),cs={name:"show",beforeMount(n,{value:e},{transition:t}){n[ka]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):eo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),eo(n,!0),i.enter(n)):i.leave(n,()=>{eo(n,!1)}):eo(n,e))},beforeUnmount(n,{value:e}){eo(n,e)}};function eo(n,e){n.style.display=e?n[ka]:"none",n[vp]=!e}const Pv=Symbol(""),Dv=/(?:^|;)\s*display\s*:/;function Lv(n,e,t){const i=n.style,s=Ft(t);let r=!1;if(t&&!s){if(e)if(Ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ba(i,a,"")}else for(const o in e)t[o]==null&&ba(i,o,"");for(const o in t)o==="display"&&(r=!0),ba(i,o,t[o])}else if(s){if(e!==t){const o=i[Pv];o&&(t+=";"+o),i.cssText=t,r=Dv.test(t)}}else e&&n.removeAttribute("style");ka in n&&(n[ka]=r?i.display:"",n[vp]&&(i.display="none"))}const Af=/\s*!important$/;function ba(n,e,t){if(Ze(t))t.forEach(i=>ba(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Iv(n,e);Af.test(t)?n.setProperty(Ss(i),t.replace(Af,""),"important"):n[i]=t}}const Cf=["Webkit","Moz","ms"],Sl={};function Iv(n,e){const t=Sl[e];if(t)return t;let i=ei(e);if(i!=="filter"&&i in n)return Sl[e]=i;i=ud(i);for(let s=0;s<Cf.length;s++){const r=Cf[s]+i;if(r in n)return Sl[e]=r}return e}const Rf="http://www.w3.org/1999/xlink";function Pf(n,e,t,i,s,r=Nm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Rf,e.slice(6,e.length)):n.setAttributeNS(Rf,e,t):t==null||r&&!hd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ii(t)?String(t):t)}function Df(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?mp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=hd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function hs(n,e,t,i){n.addEventListener(e,t,i)}function Uv(n,e,t,i){n.removeEventListener(e,t,i)}const Lf=Symbol("_vei");function Fv(n,e,t,i,s=null){const r=n[Lf]||(n[Lf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Nv(e);if(i){const c=r[e]=kv(i,s);hs(n,a,c,l)}else o&&(Uv(n,a,o,l),r[e]=void 0)}}const If=/(?:Once|Passive|Capture)$/;function Nv(n){let e;if(If.test(n)){e={};let i;for(;i=n.match(If);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ss(n.slice(2)),e]}let bl=0;const Ov=Promise.resolve(),Bv=()=>bl||(Ov.then(()=>bl=0),bl=Date.now());function kv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ri(zv(i,t.value),e,5,[i])};return t.value=n,t.attached=Bv(),t}function zv(n,e){if(Ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Uf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hv=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Rv(n,i,o):e==="style"?Lv(n,t,i):qa(e)?Ka(e)||Fv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vv(n,e,i,o))?(Df(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pf(n,e,i,o,r,e!=="value")):n._isVueCE&&(Gv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ft(i)))?Df(n,ei(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Pf(n,e,i,o))};function Vv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uf(e)&&it(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uf(e)&&Ft(t)?!1:e in n}function Gv(n,e){const t=n._def.props;if(!t)return!1;const i=ei(e);return Array.isArray(t)?t.some(s=>ei(s)===i):Object.keys(t).some(s=>ei(s)===i)}const Fr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ze(e)?t=>Ma(e,t):e};function Wv(n){n.target.composing=!0}function Ff(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hi=Symbol("_assign");function Nf(n,e,t){return e&&(n=n.trim()),t&&(n=Za(n)),n}const _p={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Hi]=Fr(s);const r=i||s.props&&s.props.type==="number";hs(n,e?"change":"input",o=>{o.target.composing||n[Hi](Nf(n.value,t,r))}),(t||r)&&hs(n,"change",()=>{n.value=Nf(n.value,t,r)}),e||(hs(n,"compositionstart",Wv),hs(n,"compositionend",Ff),hs(n,"change",Ff))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Hi]=Fr(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Za(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ns={deep:!0,created(n,e,t){n[Hi]=Fr(t),hs(n,"change",()=>{const i=n._modelValue,s=Ro(n),r=n.checked,o=n[Hi];if(Ze(i)){const a=yu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Wr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(xp(n,r))})},mounted:Of,beforeUpdate(n,e,t){n[Hi]=Fr(t),Of(n,e,t)}};function Of(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ze(e))s=yu(e,i.props.value)>-1;else if(Wr(e))s=e.has(i.props.value);else{if(e===t)return;s=Xr(e,xp(n,!0))}n.checked!==s&&(n.checked=s)}const Xv={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Wr(e);hs(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Za(Ro(o)):Ro(o));n[Hi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,dn(()=>{n._assigning=!1})}),n[Hi]=Fr(i)},mounted(n,{value:e}){Bf(n,e)},beforeUpdate(n,e,t){n[Hi]=Fr(t)},updated(n,{value:e}){n._assigning||Bf(n,e)}};function Bf(n,e){const t=n.multiple,i=Ze(e);if(!(t&&!i&&!Wr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Ro(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=yu(e,a)>-1}else o.selected=e.has(a);else if(Xr(Ro(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ro(n){return"_value"in n?n._value:n.value}function xp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Yv=["ctrl","shift","alt","meta"],$v={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Yv.some(t=>n[`${t}Key`]&&!e.includes(t))},ks=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=$v[e[o]];if(a&&a(s,e))return}return n(s,...r)})},qv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Ss(s.key);if(e.some(o=>o===r||qv[o]===r))return n(s)})},Kv=Vt({patchProp:Hv},Mv);let zf;function jv(){return zf||(zf=ev(Kv))}const Zv=(...n)=>{const e=jv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Qv(i);if(!s)return;const r=e._component;!it(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Jv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Jv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qv(n){return Ft(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Iu="170",Pr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},e0=0,Hf=1,t0=2,yp=1,n0=2,Ii=3,Yi=0,Cn=1,jn=2,gs=0,Dr=1,Vf=2,Gf=3,Wf=4,i0=5,Os=100,s0=101,r0=102,o0=103,a0=104,l0=200,c0=201,u0=202,f0=203,bc=204,wc=205,h0=206,d0=207,p0=208,m0=209,g0=210,v0=211,_0=212,x0=213,y0=214,Ec=0,Tc=1,Ac=2,Nr=3,Cc=4,Rc=5,Pc=6,Dc=7,Mp=0,M0=1,S0=2,vs=0,b0=1,w0=2,E0=3,T0=4,A0=5,C0=6,R0=7,Sp=300,Or=301,Br=302,Lc=303,Ic=304,ll=306,Uc=1e3,zs=1001,Fc=1002,ni=1003,P0=1004,Go=1005,Zt=1006,wl=1007,ps=1008,$i=1009,bp=1010,wp=1011,Po=1012,Uu=1013,Ys=1014,Bi=1015,No=1016,Fu=1017,Nu=1018,kr=1020,Ep=35902,Tp=1021,Ap=1022,Jn=1023,Cp=1024,Rp=1025,Lr=1026,zr=1027,Pp=1028,Ou=1029,Dp=1030,Bu=1031,ku=1033,wa=33776,Ea=33777,Ta=33778,Aa=33779,Nc=35840,Oc=35841,Bc=35842,kc=35843,zc=36196,Hc=37492,Vc=37496,Gc=37808,Wc=37809,Xc=37810,Yc=37811,$c=37812,qc=37813,Kc=37814,jc=37815,Zc=37816,Jc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,Ca=36492,iu=36494,su=36495,Lp=36283,ru=36284,ou=36285,au=36286,D0=3200,L0=3201,I0=0,U0=1,ds="",on="srgb",Yr="srgb-linear",cl="linear",yt="srgb",sr=7680,Xf=519,F0=512,N0=513,O0=514,Ip=515,B0=516,k0=517,z0=518,H0=519,Yf=35044,$f="300 es",ki=2e3,za=2001;class Ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qf=1234567;const _o=Math.PI/180,Do=180/Math.PI;function $r(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function zu(n,e){return(n%e+e)%e}function V0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function G0(n,e,t){return n!==e?(t-n)/(e-n):0}function xo(n,e,t){return(1-t)*n+t*e}function W0(n,e,t,i){return xo(n,e,1-Math.exp(-t*i))}function X0(n,e=1){return e-Math.abs(zu(n,e*2)-e)}function Y0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function q0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function K0(n,e){return n+Math.random()*(e-n)}function j0(n){return n*(.5-Math.random())}function Z0(n){n!==void 0&&(qf=n);let e=qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J0(n){return n*_o}function Q0(n){return n*Do}function e_(n){return(n&n-1)===0&&n!==0}function t_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function n_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lu={DEG2RAD:_o,RAD2DEG:Do,generateUUID:$r,clamp:cn,euclideanModulo:zu,mapLinear:V0,inverseLerp:G0,lerp:xo,damp:W0,pingpong:X0,smoothstep:Y0,smootherstep:$0,randInt:q0,randFloat:K0,randFloatSpread:j0,seededRandom:Z0,degToRad:J0,radToDeg:Q0,isPowerOfTwo:e_,ceilPowerOfTwo:t_,floorPowerOfTwo:n_,setQuaternionFromProperEuler:i_,normalize:mn,denormalize:yr};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,s,r,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],v=s[0],p=s[3],h=s[6],S=s[1],b=s[4],_=s[7],P=s[2],E=s[5],T=s[8];return r[0]=o*v+a*S+l*P,r[3]=o*p+a*b+l*E,r[6]=o*h+a*_+l*T,r[1]=c*v+u*S+f*P,r[4]=c*p+u*b+f*E,r[7]=c*h+u*_+f*T,r[2]=d*v+m*S+g*P,r[5]=d*p+m*b+g*E,r[8]=d*h+m*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,m=c*r-o*l,g=t*f+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new rt;function Up(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function s_(){const n=Ha("canvas");return n.style.display="block",n}const Kf={};function lo(n){n in Kf||(Kf[n]=!0,console.warn(n))}function r_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function o_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ct={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(n.r=Vi(n.r),n.g=Vi(n.g),n.b=Vi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(n.r=Ir(n.r),n.g=Ir(n.g),n.b=Ir(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ds?cl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jf=[.64,.33,.3,.6,.15,.06],Zf=[.2126,.7152,.0722],Jf=[.3127,.329],Qf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[Yr]:{primaries:jf,whitePoint:Jf,transfer:cl,toXYZ:Qf,fromXYZ:eh,luminanceCoefficients:Zf,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:jf,whitePoint:Jf,transfer:yt,toXYZ:Qf,fromXYZ:eh,luminanceCoefficients:Zf,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let rr;class l_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Ha("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ha("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c_=0;class Fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tl(s[o].image)):r.push(Tl(s[o]))}else r=Tl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?l_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u_=0;class yn extends Ks{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=zs,s=zs,r=Zt,o=ps,a=Jn,l=$i,c=yn.DEFAULT_ANISOTROPY,u=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=$r(),this.name="",this.source=new Fp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uc:e.x=e.x-Math.floor(e.x);break;case zs:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uc:e.y=e.y-Math.floor(e.y);break;case zs:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Sp;yn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,_=(m+1)/2,P=(h+1)/2,E=(u+d)/4,T=(f+v)/4,I=(g+p)/4;return b>_&&b>P?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=T/i):_>P?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=I/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=T/r,s=I/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f_ extends Ks{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends f_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Np extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h_ extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==m||u!==g){let p=1-a;const h=l*d+c*m+u*g+f*v,S=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const P=Math.sqrt(b),E=Math.atan2(P,h*S);p=Math.sin(p*E)/P,a=Math.sin(a*E)/P}const _=a*S;if(l=l*p+d*_,c=c*p+m*_,u=u*p+g*_,f=f*p+v*_,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-a*m,e[t+2]=c*g+u*m+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new ee,th=new yi;class Oo{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Xo.subVectors(this.max,to),or.subVectors(e.a,to),ar.subVectors(e.b,to),lr.subVectors(e.c,to),is.subVectors(ar,or),ss.subVectors(lr,ar),As.subVectors(or,lr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-As.z,As.y,is.z,0,-is.x,ss.z,0,-ss.x,As.z,0,-As.x,-is.y,is.x,0,-ss.y,ss.x,0,-As.y,As.x,0];return!Cl(t,or,ar,lr,Xo)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,or,ar,lr,Xo))?!1:(Yo.crossVectors(is,ss),t=[Yo.x,Yo.y,Yo.z],Cl(t,or,ar,lr,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Yn=new ee,Wo=new Oo,or=new ee,ar=new ee,lr=new ee,is=new ee,ss=new ee,As=new ee,to=new ee,Xo=new ee,Yo=new ee,Cs=new ee;function Cl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Cs.fromArray(n,r);const a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),u=i.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const d_=new Oo,no=new ee,Rl=new ee;class Hu{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):d_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Rl)),this.expandByPoint(no.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new ee,Pl=new ee,$o=new ee,rs=new ee,Dl=new ee,qo=new ee,Ll=new ee;class Vu{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pl.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Pl);const r=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=rs.dot(this.direction),l=-rs.dot($o),c=rs.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pl).addScaledVector($o,d),m}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){Dl.subVectors(t,e),qo.subVectors(i,e),Ll.crossVectors(Dl,qo);let o=this.direction.dot(Ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(qo.crossVectors(rs,qo));if(l<0)return null;const c=a*this.direction.dot(Dl.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(Ll);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,i,s,r,o,a,l,c,u,f,d,m,g,v,p){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,m,g,v,p)}set(e,t,i,s,r,o,a,l,c,u,f,d,m,g,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,v=c*f;t[0]=d+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,t,i){const s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),os.crossVectors(i,Dn),os.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),os.crossVectors(i,Dn)),os.normalize(),Ko.crossVectors(Dn,os),s[0]=os.x,s[4]=Ko.x,s[8]=Dn.x,s[1]=os.y,s[5]=Ko.y,s[9]=Dn.y,s[2]=os.z,s[6]=Ko.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],h=i[14],S=i[3],b=i[7],_=i[11],P=i[15],E=s[0],T=s[4],I=s[8],x=s[12],y=s[1],D=s[5],F=s[9],B=s[13],W=s[2],K=s[6],$=s[10],Z=s[14],H=s[3],te=s[7],U=s[11],V=s[15];return r[0]=o*E+a*y+l*W+c*H,r[4]=o*T+a*D+l*K+c*te,r[8]=o*I+a*F+l*$+c*U,r[12]=o*x+a*B+l*Z+c*V,r[1]=u*E+f*y+d*W+m*H,r[5]=u*T+f*D+d*K+m*te,r[9]=u*I+f*F+d*$+m*U,r[13]=u*x+f*B+d*Z+m*V,r[2]=g*E+v*y+p*W+h*H,r[6]=g*T+v*D+p*K+h*te,r[10]=g*I+v*F+p*$+h*U,r[14]=g*x+v*B+p*Z+h*V,r[3]=S*E+b*y+_*W+P*H,r[7]=S*T+b*D+_*K+P*te,r[11]=S*I+b*F+_*$+P*U,r[15]=S*x+b*B+_*Z+P*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*m-i*l*m)+v*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*u-i*c*u)+h*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],S=f*p*c-v*d*c+v*l*m-a*p*m-f*l*h+a*d*h,b=g*d*c-u*p*c-g*l*m+o*p*m+u*l*h-o*d*h,_=u*v*c-g*f*c+g*a*m-o*v*m-u*a*h+o*f*h,P=g*f*l-u*v*l-g*a*d+o*v*d+u*a*p-o*f*p,E=t*S+i*b+s*_+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(v*d*r-f*p*r-v*s*m+i*p*m+f*s*h-i*d*h)*T,e[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*h+i*l*h)*T,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*m-i*l*m)*T,e[4]=b*T,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*h+t*d*h)*T,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*h-t*l*h)*T,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*m+t*l*m)*T,e[8]=_*T,e[9]=(g*f*r-u*v*r-g*i*m+t*v*m+u*i*h-t*f*h)*T,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*h+t*a*h)*T,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*m-t*a*m)*T,e[12]=P*T,e[13]=(u*v*s-g*f*s+g*i*d-t*v*d-u*i*p+t*f*p)*T,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*p-t*a*p)*T,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,m=r*u,g=r*f,v=o*u,p=o*f,h=a*f,S=l*c,b=l*u,_=l*f,P=i.x,E=i.y,T=i.z;return s[0]=(1-(v+h))*P,s[1]=(m+_)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(m-_)*E,s[5]=(1-(d+h))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(g+b)*T,s[9]=(p-S)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=cr.set(s[0],s[1],s[2]).length();const o=cr.set(s[4],s[5],s[6]).length(),a=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$n.copy(this);const c=1/r,u=1/o,f=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ki){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let m,g;if(a===ki)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===za)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ki){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),d=(t+e)*c,m=(i+s)*u;let g,v;if(a===ki)g=(o+r)*f,v=-2*f;else if(a===za)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cr=new ee,$n=new Ut,p_=new ee(0,0,0),m_=new ee(1,1,1),os=new ee,Ko=new ee,Dn=new ee,nh=new Ut,ih=new yi;class qi{constructor(e=0,t=0,i=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g_=0;const sh=new ee,ur=new yi,Ci=new Ut,jo=new ee,io=new ee,v_=new ee,__=new yi,rh=new ee(1,0,0),oh=new ee(0,1,0),ah=new ee(0,0,1),lh={type:"added"},x_={type:"removed"},fr={type:"childadded",child:null},Il={type:"childremoved",child:null};class Nn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new ee,t=new qi,i=new yi,s=new ee(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new rt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jo.copy(e):jo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(io,jo,this.up):Ci.lookAt(jo,io,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Ci),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_),Il.child=e,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,v_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,__,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nn.DEFAULT_UP=new ee(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new ee,Ri=new ee,Ul=new ee,Pi=new ee,hr=new ee,dr=new ee,ch=new ee,Fl=new ee,Nl=new ee,Ol=new ee,Bl=new It,kl=new It,zl=new It;class Zn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),Ri.subVectors(i,t),Ul.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(Ri),l=qn.dot(Ul),c=Ri.dot(Ri),u=Ri.dot(Ul),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bl.setScalar(0),kl.setScalar(0),zl.setScalar(0),Bl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,i),zl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(kl,r.y),o.addScaledVector(zl,r.z),o}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),Ri.subVectors(e,t),qn.cross(Ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),qn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;hr.subVectors(s,i),dr.subVectors(r,i),Fl.subVectors(e,i);const l=hr.dot(Fl),c=dr.dot(Fl);if(l<=0&&c<=0)return t.copy(i);Nl.subVectors(e,s);const u=hr.dot(Nl),f=dr.dot(Nl);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hr,o);Ol.subVectors(e,r);const m=hr.dot(Ol),g=dr.dot(Ol);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(dr,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return ch.subVectors(r,s),a=(f-u)/(f-u+(m-g)),t.copy(s).addScaledVector(ch,a);const h=1/(p+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=zu(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Hl(o,r,e+1/3),this.g=Hl(o,r,e),this.b=Hl(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=Op[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return ct.fromWorkingColorSpace(rn.copy(this),e),Math.round(cn(rn.r*255,0,255))*65536+Math.round(cn(rn.g*255,0,255))*256+Math.round(cn(rn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(rn.copy(this),t);const i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=on){ct.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,s=rn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Zo);const i=xo(as.h,Zo.h,t),s=xo(as.s,Zo.s,t),r=xo(as.l,Zo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new gt;gt.NAMES=Op;let y_=0;class ul extends Ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=$r(),this.name="",this.blending=Dr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=wc,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lo extends ul{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new ee,Jo=new at;class Mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yf,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yf&&(e.usage=this.usage),e}}class Bp extends Mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kp extends Mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ws extends Mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let M_=0;const zn=new Ut,Vl=new Nn,pr=new ee,Ln=new Oo,so=new Oo,Yt=new ee;class js extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?kp:Bp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ws(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Ln.min,so.min),Ln.expandByPoint(Yt),Yt.addVectors(Ln.max,so.max),Ln.expandByPoint(Yt)):(Ln.expandByPoint(so.min),Ln.expandByPoint(so.max))}Ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),Yt.add(pr)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new ee,l[I]=new ee;const c=new ee,u=new ee,f=new ee,d=new at,m=new at,g=new at,v=new ee,p=new ee;function h(I,x,y){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(c),f.sub(c),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(v),a[x].add(v),a[y].add(v),l[I].add(p),l[x].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,x=S.length;I<x;++I){const y=S[I],D=y.start,F=y.count;for(let B=D,W=D+F;B<W;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new ee,_=new ee,P=new ee,E=new ee;function T(I){P.fromBufferAttribute(s,I),E.copy(P);const x=a[I];b.copy(x),b.sub(P.multiplyScalar(P.dot(x))).normalize(),_.crossVectors(E,x);const D=_.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,D)}for(let I=0,x=S.length;I<x;++I){const y=S[I],D=y.start,F=y.count;for(let B=D,W=D+F;B<W;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new ee,r=new ee,o=new ee,a=new ee,l=new ee,c=new ee,u=new ee,f=new ee;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[m++]}return new Mi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new js,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new Ut,Rs=new Vu,Qo=new Hu,fh=new ee,ea=new ee,ta=new ee,na=new ee,Gl=new ee,ia=new ee,hh=new ee,sa=new ee;class Bt extends Nn{constructor(e=new js,t=new Lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Gl.fromBufferAttribute(f,e),o?ia.addScaledVector(Gl,u):ia.addScaledVector(Gl.sub(t),u))}t.add(ia)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Qo.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Qo,fh)===null||Rs.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(uh.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(uh),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],h=o[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=S,P=b;_<P;_+=3){const E=a.getX(_),T=a.getX(_+1),I=a.getX(_+2);s=ra(this,h,e,i,c,u,f,E,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const S=a.getX(p),b=a.getX(p+1),_=a.getX(p+2);s=ra(this,o,e,i,c,u,f,S,b,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],h=o[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=S,P=b;_<P;_+=3){const E=_,T=_+1,I=_+2;s=ra(this,h,e,i,c,u,f,E,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const S=p,b=p+1,_=p+2;s=ra(this,o,e,i,c,u,f,S,b,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function S_(n,e,t,i,s,r,o,a){let l;if(e.side===Cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Yi,a),l===null)return null;sa.copy(a),sa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:n}}function ra(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ea),n.getVertexPosition(l,ta),n.getVertexPosition(c,na);const u=S_(n,e,t,i,ea,ta,na,hh);if(u){const f=new ee;Zn.getBarycoord(hh,ea,ta,na,f),s&&(u.uv=Zn.getInterpolatedAttribute(s,a,l,c,f,new at)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,a,l,c,f,new at)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,f,new ee),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new ee,materialIndex:0};Zn.getNormal(ea,ta,na,d.normal),u.face=d,u.barycoord=f}return u}class Bo extends js{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ws(c,3)),this.setAttribute("normal",new Ws(u,3)),this.setAttribute("uv",new Ws(f,2));function g(v,p,h,S,b,_,P,E,T,I,x){const y=_/T,D=P/I,F=_/2,B=P/2,W=E/2,K=T+1,$=I+1;let Z=0,H=0;const te=new ee;for(let U=0;U<$;U++){const V=U*D-B;for(let Y=0;Y<K;Y++){const ae=Y*y-F;te[v]=ae*S,te[p]=V*b,te[h]=W,c.push(te.x,te.y,te.z),te[v]=0,te[p]=0,te[h]=E>0?1:-1,u.push(te.x,te.y,te.z),f.push(Y/T),f.push(1-U/I),Z+=1}}for(let U=0;U<I;U++)for(let V=0;V<T;V++){const Y=d+V+K*U,ae=d+V+K*(U+1),Q=d+(V+1)+K*(U+1),he=d+(V+1)+K*U;l.push(Y,ae,he),l.push(ae,Q,he),H+=6}a.addGroup(m,H,x),m+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=Hr(n[t]);for(const s in i)e[s]=i[s]}return e}function b_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const w_={clone:Hr,merge:gn};var E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends ul{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=b_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hp extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new ee,dh=new at,ph=new at;class Hn extends Hp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,dh,ph),t.subVectors(ph,dh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class A_ extends Nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Hn(mr,gr,e,t);s.layers=this.layers,this.add(s);const r=new Hn(mr,gr,e,t);r.layers=this.layers,this.add(r);const o=new Hn(mr,gr,e,t);o.layers=this.layers,this.add(o);const a=new Hn(mr,gr,e,t);a.layers=this.layers,this.add(a);const l=new Hn(mr,gr,e,t);l.layers=this.layers,this.add(l);const c=new Hn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vp extends yn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C_ extends $s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bo(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:gs});r.uniforms.tEquirect.value=t;const o=new Bt(s,r),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=Zt),new A_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Wl=new ee,R_=new ee,P_=new rt;class gi{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wl.subVectors(i,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||P_.getNormalMatrix(e),s=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new Hu,oa=new ee;class Gp{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],h=s[12],S=s[13],b=s[14],_=s[15];if(i[0].setComponents(l-r,d-c,p-m,_-h).normalize(),i[1].setComponents(l+r,d+c,p+m,_+h).normalize(),i[2].setComponents(l+o,d+u,p+g,_+S).normalize(),i[3].setComponents(l-o,d-u,p-g,_-S).normalize(),i[4].setComponents(l-a,d-f,p-v,_-b).normalize(),t===ki)i[5].setComponents(l+a,d+f,p+v,_+b).normalize();else if(t===za)i[5].setComponents(a,f,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function D_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class en extends js{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,m=[],g=[],v=[],p=[];for(let h=0;h<u;h++){const S=h*d-o;for(let b=0;b<c;b++){const _=b*f-r;g.push(_,-S,0),v.push(0,0,1),p.push(b/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const b=S+c*h,_=S+c*(h+1),P=S+1+c*(h+1),E=S+1+c*h;m.push(b,_,E),m.push(_,P,E)}this.setIndex(m),this.setAttribute("position",new Ws(g,3)),this.setAttribute("normal",new Ws(v,3)),this.setAttribute("uv",new Ws(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.widthSegments,e.heightSegments)}}var L_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I_=`#ifdef USE_ALPHAHASH
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
#endif`,U_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B_=`#ifdef USE_AOMAP
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
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
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
#endif`,H_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X_=`#ifdef USE_IRIDESCENCE
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
#endif`,Y_=`#ifdef USE_BUMPMAP
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
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
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
}`,ot={alphahash_fragment:L_,alphahash_pars_fragment:I_,alphamap_fragment:U_,alphamap_pars_fragment:F_,alphatest_fragment:N_,alphatest_pars_fragment:O_,aomap_fragment:B_,aomap_pars_fragment:k_,batching_pars_vertex:z_,batching_vertex:H_,begin_vertex:V_,beginnormal_vertex:G_,bsdfs:W_,iridescence_fragment:X_,bumpmap_pars_fragment:Y_,clipping_planes_fragment:$_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:K_,clipping_planes_vertex:j_,color_fragment:Z_,color_pars_fragment:J_,color_pars_vertex:Q_,color_vertex:ex,common:tx,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:sx,displacementmap_vertex:rx,emissivemap_fragment:ox,emissivemap_pars_fragment:ax,colorspace_fragment:lx,colorspace_pars_fragment:cx,envmap_fragment:ux,envmap_common_pars_fragment:fx,envmap_pars_fragment:hx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:wx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:gx,fog_fragment:vx,fog_pars_fragment:_x,gradientmap_pars_fragment:xx,lightmap_pars_fragment:yx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:Sx,lights_pars_begin:bx,lights_toon_fragment:Ex,lights_toon_pars_fragment:Tx,lights_phong_fragment:Ax,lights_phong_pars_fragment:Cx,lights_physical_fragment:Rx,lights_physical_pars_fragment:Px,lights_fragment_begin:Dx,lights_fragment_maps:Lx,lights_fragment_end:Ix,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Ox,map_fragment:Bx,map_pars_fragment:kx,map_particle_fragment:zx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:Yx,morphtarget_pars_vertex:$x,morphtarget_vertex:qx,normal_fragment_begin:Kx,normal_fragment_maps:jx,normal_pars_fragment:Zx,normal_pars_vertex:Jx,normal_vertex:Qx,normalmap_pars_fragment:ey,clearcoat_normal_fragment_begin:ty,clearcoat_normal_fragment_maps:ny,clearcoat_pars_fragment:iy,iridescence_pars_fragment:sy,opaque_fragment:ry,packing:oy,premultiplied_alpha_fragment:ay,project_vertex:ly,dithering_fragment:cy,dithering_pars_fragment:uy,roughnessmap_fragment:fy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:dy,shadowmap_pars_vertex:py,shadowmap_vertex:my,shadowmask_pars_fragment:gy,skinbase_vertex:vy,skinning_pars_vertex:_y,skinning_vertex:xy,skinnormal_vertex:yy,specularmap_fragment:My,specularmap_pars_fragment:Sy,tonemapping_fragment:by,tonemapping_pars_fragment:wy,transmission_fragment:Ey,transmission_pars_fragment:Ty,uv_pars_fragment:Ay,uv_pars_vertex:Cy,uv_vertex:Ry,worldpos_vertex:Py,background_vert:Dy,background_frag:Ly,backgroundCube_vert:Iy,backgroundCube_frag:Uy,cube_vert:Fy,cube_frag:Ny,depth_vert:Oy,depth_frag:By,distanceRGBA_vert:ky,distanceRGBA_frag:zy,equirect_vert:Hy,equirect_frag:Vy,linedashed_vert:Gy,linedashed_frag:Wy,meshbasic_vert:Xy,meshbasic_frag:Yy,meshlambert_vert:$y,meshlambert_frag:qy,meshmatcap_vert:Ky,meshmatcap_frag:jy,meshnormal_vert:Zy,meshnormal_frag:Jy,meshphong_vert:Qy,meshphong_frag:eM,meshphysical_vert:tM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:sM,points_vert:rM,points_frag:oM,shadow_vert:aM,shadow_frag:lM,sprite_vert:cM,sprite_frag:uM},ke={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},vi={basic:{uniforms:gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new gt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:gn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:gn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new gt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:gn([ke.points,ke.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:gn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:gn([ke.common,ke.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:gn([ke.sprite,ke.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:gn([ke.common,ke.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:gn([ke.lights,ke.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};vi.physical={uniforms:gn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const aa={r:0,b:0,g:0},Ds=new qi,fM=new Ut;function hM(n,e,t,i,s,r,o){const a=new gt(0);let l=r===!0?0:1,c,u,f=null,d=0,m=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function v(S){let b=!1;const _=g(S);_===null?h(a,l):_&&_.isColor&&(h(_,1),b=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,b){const _=g(b);_&&(_.isCubeTexture||_.mapping===ll)?(u===void 0&&(u=new Bt(new Bo(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Hr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ds.copy(b.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(Ds)),u.material.toneMapped=ct.getTransfer(_.colorSpace)!==yt,(f!==_||d!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,m=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Bt(new en(2,2),new Gn({name:"BackgroundMaterial",uniforms:Hr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ct.getTransfer(_.colorSpace)!==yt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,b){S.getRGB(aa,zp(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),l=b,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(a,l)},render:v,addToRenderList:p}}function dM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,D,F,B,W){let K=!1;const $=f(B,F,D);r!==$&&(r=$,c(r.object)),K=m(y,B,F,W),K&&g(y,B,F,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(y,D,F,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,D,F){const B=F.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let K=W[D.id];K===void 0&&(K={},W[D.id]=K);let $=K[B];return $===void 0&&($=d(l()),K[B]=$),$}function d(y){const D=[],F=[],B=[];for(let W=0;W<t;W++)D[W]=0,F[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,D,F,B){const W=r.attributes,K=D.attributes;let $=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){const U=W[H];let V=K[H];if(V===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(V=y.instanceColor)),U===void 0||U.attribute!==V||V&&U.data!==V.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function g(y,D,F,B){const W={},K=D.attributes;let $=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){let U=K[H];U===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(U=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(U=y.instanceColor));const V={};V.attribute=U,U&&U.data&&(V.data=U.data),W[H]=V,$++}r.attributes=W,r.attributesNum=$,r.index=B}function v(){const y=r.newAttributes;for(let D=0,F=y.length;D<F;D++)y[D]=0}function p(y){h(y,0)}function h(y,D){const F=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;F[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),W[y]!==D&&(n.vertexAttribDivisor(y,D),W[y]=D)}function S(){const y=r.newAttributes,D=r.enabledAttributes;for(let F=0,B=D.length;F<B;F++)D[F]!==y[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function b(y,D,F,B,W,K,$){$===!0?n.vertexAttribIPointer(y,D,F,W,K):n.vertexAttribPointer(y,D,F,B,W,K)}function _(y,D,F,B){v();const W=B.attributes,K=F.getAttributes(),$=D.defaultAttributeValues;for(const Z in K){const H=K[Z];if(H.location>=0){let te=W[Z];if(te===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){const U=te.normalized,V=te.itemSize,Y=e.get(te);if(Y===void 0)continue;const ae=Y.buffer,Q=Y.type,he=Y.bytesPerElement,_e=Q===n.INT||Q===n.UNSIGNED_INT||te.gpuType===Uu;if(te.isInterleavedBufferAttribute){const ve=te.data,Be=ve.stride,He=te.offset;if(ve.isInstancedInterleavedBuffer){for(let Ce=0;Ce<H.locationSize;Ce++)h(H.location+Ce,ve.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ce=0;Ce<H.locationSize;Ce++)p(H.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let Ce=0;Ce<H.locationSize;Ce++)b(H.location+Ce,V/H.locationSize,Q,U,Be*he,(He+V/H.locationSize*Ce)*he,_e)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)h(H.location+ve,te.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<H.locationSize;ve++)p(H.location+ve);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let ve=0;ve<H.locationSize;ve++)b(H.location+ve,V/H.locationSize,Q,U,V*he,V/H.locationSize*ve*he,_e)}}else if($!==void 0){const U=$[Z];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(H.location,U);break;case 3:n.vertexAttrib3fv(H.location,U);break;case 4:n.vertexAttrib4fv(H.location,U);break;default:n.vertexAttrib1fv(H.location,U)}}}}S()}function P(){I();for(const y in i){const D=i[y];for(const F in D){const B=D[F];for(const W in B)u(B[W].object),delete B[W];delete D[F]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const F in D){const B=D[F];for(const W in B)u(B[W].object),delete B[W];delete D[F]}delete i[y.id]}function T(y){for(const D in i){const F=i[D];if(F[y.id]===void 0)continue;const B=F[y.id];for(const W in B)u(B[W].object),delete B[W];delete F[y.id]}}function I(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function pM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Jn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==$i&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Bi&&!I)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:P,maxSamples:E}}function gM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new gi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,b=S*4;let _=h.clippingState||null;l.value=_,_=u(g,d,b,m);for(let P=0;P!==b;++P)_[P]=t[P];h.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const h=m+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,_=m;b!==v;++b,_+=4)o.copy(f[b]).applyMatrix4(S,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function vM(n){let e=new WeakMap;function t(o,a){return a===Lc?o.mapping=Or:a===Ic&&(o.mapping=Br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Zs extends Hp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,mh=[.125,.215,.35,.446,.526,.582],Bs=20,Xl=new Zs,gh=new gt;let Yl=null,$l=0,ql=0,Kl=!1;const Us=(1+Math.sqrt(5))/2,vr=1/Us,vh=[new ee(-Us,vr,0),new ee(Us,vr,0),new ee(-vr,0,Us),new ee(vr,0,Us),new ee(0,Us,-vr),new ee(0,Us,vr),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class _h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,$l,ql),this._renderer.xr.enabled=Kl,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:No,format:Jn,colorSpace:Yr,depthBuffer:!1},s=xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_M(r)),this._blurMaterial=xM(r,e,t)}return s}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,i,s){const a=new Hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(gh),u.toneMapping=vs,u.autoClear=!1;const m=new Lo({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new Bt(new Bo,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(gh),v=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):S===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const b=this._cubeSize;la(s,S*b,h>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Or||e.mapping===Br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vh[(s-r-1)%vh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Bt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bs-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):Bs;p>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bs}`);const h=[];let S=0;for(let T=0;T<Bs;++T){const I=T/v,x=Math.exp(-I*I/2);h.push(x),T===0?S+=x:T<p&&(S+=2*x)}for(let T=0;T<h.length;T++)h[T]=h[T]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const _=this._sizeLods[s],P=3*_*(s>b-Sr?s-b+Sr:0),E=4*(this._cubeSize-_);la(t,P,E,3*_,2*_),l.setRenderTarget(t),l.render(f,Xl)}}function _M(n){const e=[],t=[],i=[];let s=n;const r=n-Sr+1+mh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Sr?l=mh[o-n+Sr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,v=3,p=2,h=1,S=new Float32Array(v*g*m),b=new Float32Array(p*g*m),_=new Float32Array(h*g*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,I=E>2?0:-1,x=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];S.set(x,v*g*E),b.set(d,p*g*E);const y=[E,E,E,E,E,E];_.set(y,h*g*E)}const P=new js;P.setAttribute("position",new Mi(S,v)),P.setAttribute("uv",new Mi(b,p)),P.setAttribute("faceIndex",new Mi(_,h)),e.push(P),s>Sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xh(n,e,t){const i=new $s(n,e,t);return i.texture.mapping=ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xM(n,e,t){const i=new Float32Array(Bs),s=new ee(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function yh(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Mh(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

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
	`}function yM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lc||l===Ic,u=l===Or||l===Br;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new _h(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new _h(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function MM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function SM(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let b=0,_=S.length;b<_;b+=3){const P=S[b+0],E=S[b+1],T=S[b+2];d.push(P,E,E,T,T,P)}}else if(g!==void 0){const S=g.array;v=g.version;for(let b=0,_=S.length/3-1;b<_;b+=3){const P=b+0,E=b+1,T=b+2;d.push(P,E,E,T,T,P)}}else return;const p=new(Up(d)?kp:Bp)(d,1);p.version=v;const h=r.get(f);h&&e.remove(h),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function bM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*o,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function f(d,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/o,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,v,0,g);let h=0;for(let S=0;S<g;S++)h+=m[S]*v[S];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function EM(n,e,t){const i=new WeakMap,s=new It;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let P=a.attributes.position.count*_,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*E*4*f),I=new Np(T,P,E,f);I.type=Bi,I.needsUpdate=!0;const x=_*4;for(let D=0;D<f;D++){const F=h[D],B=S[D],W=b[D],K=P*E*4*D;for(let $=0;$<F.count;$++){const Z=$*x;g===!0&&(s.fromBufferAttribute(F,$),T[K+Z+0]=s.x,T[K+Z+1]=s.y,T[K+Z+2]=s.z,T[K+Z+3]=0),v===!0&&(s.fromBufferAttribute(B,$),T[K+Z+4]=s.x,T[K+Z+5]=s.y,T[K+Z+6]=s.z,T[K+Z+7]=0),p===!0&&(s.fromBufferAttribute(W,$),T[K+Z+8]=s.x,T[K+Z+9]=s.y,T[K+Z+10]=s.z,T[K+Z+11]=W.itemSize===4?s.w:1)}}d={count:f,texture:I,size:new at(P,E)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function TM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Xp extends yn{constructor(e,t,i,s,r,o,a,l,c,u=Lr){if(u!==Lr&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Lr&&(i=Ys),i===void 0&&u===zr&&(i=kr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yp=new yn,Sh=new Xp(1,1),$p=new Np,qp=new h_,Kp=new Vp,bh=[],wh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fl(n,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function DM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Ah.set(i),n.uniformMatrix2fv(this.addr,!1,Ah),Wt(t,i)}}function LM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),Wt(t,i)}}function IM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Eh.set(i),n.uniformMatrix4fv(this.addr,!1,Eh),Wt(t,i)}}function UM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function BM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function VM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Sh.compareFunction=Ip,r=Sh):r=Yp,t.setTexture2D(e||r,s)}function GM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||qp,s)}function WM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Kp,s)}function XM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$p,s)}function YM(n){switch(n){case 5126:return AM;case 35664:return CM;case 35665:return RM;case 35666:return PM;case 35674:return DM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return NM;case 35669:case 35673:return OM;case 5125:return BM;case 36294:return kM;case 36295:return zM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}function $M(n,e){n.uniform1fv(this.addr,e)}function qM(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function KM(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function jM(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function ZM(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function JM(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QM(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eS(n,e){n.uniform1iv(this.addr,e)}function tS(n,e){n.uniform2iv(this.addr,e)}function nS(n,e){n.uniform3iv(this.addr,e)}function iS(n,e){n.uniform4iv(this.addr,e)}function sS(n,e){n.uniform1uiv(this.addr,e)}function rS(n,e){n.uniform2uiv(this.addr,e)}function oS(n,e){n.uniform3uiv(this.addr,e)}function aS(n,e){n.uniform4uiv(this.addr,e)}function lS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yp,r[o])}function cS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||qp,r[o])}function uS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kp,r[o])}function fS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$p,r[o])}function hS(n){switch(n){case 5126:return $M;case 35664:return qM;case 35665:return KM;case 35666:return jM;case 35674:return ZM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return rS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}class dS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YM(t.type)}}class pS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hS(t.type)}}class mS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function Ch(n,e){n.seq.push(e),n.map[e.id]=e}function gS(n,e,t){const i=n.name,s=i.length;for(jl.lastIndex=0;;){const r=jl.exec(i),o=jl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ch(t,c===void 0?new dS(a,n,e):new pS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new mS(a),Ch(t,f)),t=f}}}class Ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);gS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Rh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vS=37297;let _S=0;function xS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ph=new rt;function yS(n){ct._getMatrix(Ph,ct.workingColorSpace,n);const e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case cl:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+xS(n.getShaderSource(e),o)}else return s}function MS(n,e){const t=yS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function SS(n,e){let t;switch(e){case b0:t="Linear";break;case w0:t="Reinhard";break;case E0:t="Cineon";break;case T0:t="ACESFilmic";break;case C0:t="AgX";break;case R0:t="Neutral";break;case A0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ca=new ee;function bS(){ct.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
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
#define LOW_PRECISION`),e}function LS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function IS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Or:case Br:e="ENVMAP_TYPE_CUBE";break;case ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function US(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function FS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mp:e="ENVMAP_BLENDING_MULTIPLY";break;case M0:e="ENVMAP_BLENDING_MIX";break;case S0:e="ENVMAP_BLENDING_ADD";break}return e}function NS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LS(t),c=IS(t),u=US(t),f=FS(t),d=NS(t),m=wS(t),g=ES(r),v=s.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),h.length>0&&(h+=`
`)):(p=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),h=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vs?"#define TONE_MAPPING":"",t.toneMapping!==vs?ot.tonemapping_pars_fragment:"",t.toneMapping!==vs?SS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),bS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=cu(o),o=Lh(o,t),o=Ih(o,t),a=cu(a),a=Lh(a,t),a=Ih(a,t),o=Uh(o),a=Uh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=S+p+o,_=S+h+a,P=Rh(s,s.VERTEX_SHADER,b),E=Rh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,P),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(D){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(E).trim();let K=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,E);else{const Z=Dh(s,P,"vertex"),H=Dh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+Z+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||W==="")&&($=!1);$&&(D.diagnostics={runnable:K,programLog:F,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:h}})}s.deleteShader(P),s.deleteShader(E),I=new Ra(s,v),x=TS(s,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,vS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_S++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=E,this}let BS=0;class kS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zS(e),t.set(e,i)),i}}class zS{constructor(e){this.id=BS++,this.code=e,this.usedTimes=0}}function HS(n,e,t,i,s,r,o){const a=new Gu,l=new kS,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,y,D,F,B){const W=F.fog,K=B.geometry,$=x.isMeshStandardMaterial?F.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),H=Z&&Z.mapping===ll?Z.image.height:null,te=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const U=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,V=U!==void 0?U.length:0;let Y=0;K.morphAttributes.position!==void 0&&(Y=1),K.morphAttributes.normal!==void 0&&(Y=2),K.morphAttributes.color!==void 0&&(Y=3);let ae,Q,he,_e;if(te){const lt=vi[te];ae=lt.vertexShader,Q=lt.fragmentShader}else ae=x.vertexShader,Q=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const ve=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),He=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,pe=!!x.map,R=!!x.matcap,O=!!Z,A=!!x.aoMap,de=!!x.lightMap,se=!!x.bumpMap,ne=!!x.normalMap,ce=!!x.displacementMap,xe=!!x.emissiveMap,ue=!!x.metalnessMap,w=!!x.roughnessMap,M=x.anisotropy>0,L=x.clearcoat>0,G=x.dispersion>0,J=x.iridescence>0,re=x.sheen>0,we=x.transmission>0,Se=M&&!!x.anisotropyMap,Te=L&&!!x.clearcoatMap,We=L&&!!x.clearcoatNormalMap,N=L&&!!x.clearcoatRoughnessMap,z=J&&!!x.iridescenceMap,ie=J&&!!x.iridescenceThicknessMap,Ee=re&&!!x.sheenColorMap,ye=re&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,Ie=!!x.specularColorMap,qe=!!x.specularIntensityMap,X=we&&!!x.transmissionMap,Re=we&&!!x.thicknessMap,fe=!!x.gradientMap,Me=!!x.alphaMap,Fe=x.alphaTest>0,Ue=!!x.alphaHash,Qe=!!x.extensions;let _t=vs;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Pt={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:Q,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Yr,alphaToCoverage:!!x.alphaToCoverage,map:pe,matcap:R,envMap:O,envMapMode:O&&Z.mapping,envMapCubeUVHeight:H,aoMap:A,lightMap:de,bumpMap:se,normalMap:ne,displacementMap:d&&ce,emissiveMap:xe,normalMapObjectSpace:ne&&x.normalMapType===U0,normalMapTangentSpace:ne&&x.normalMapType===I0,metalnessMap:ue,roughnessMap:w,anisotropy:M,anisotropyMap:Se,clearcoat:L,clearcoatMap:Te,clearcoatNormalMap:We,clearcoatRoughnessMap:N,dispersion:G,iridescence:J,iridescenceMap:z,iridescenceThicknessMap:ie,sheen:re,sheenColorMap:Ee,sheenRoughnessMap:ye,specularMap:Ne,specularColorMap:Ie,specularIntensityMap:qe,transmission:we,transmissionMap:X,thicknessMap:Re,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Dr&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:Fe,alphaHash:Ue,combine:x.combine,mapUv:pe&&v(x.map.channel),aoMapUv:A&&v(x.aoMap.channel),lightMapUv:de&&v(x.lightMap.channel),bumpMapUv:se&&v(x.bumpMap.channel),normalMapUv:ne&&v(x.normalMap.channel),displacementMapUv:ce&&v(x.displacementMap.channel),emissiveMapUv:xe&&v(x.emissiveMap.channel),metalnessMapUv:ue&&v(x.metalnessMap.channel),roughnessMapUv:w&&v(x.roughnessMap.channel),anisotropyMapUv:Se&&v(x.anisotropyMap.channel),clearcoatMapUv:Te&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(x.sheenRoughnessMap.channel),specularMapUv:Ne&&v(x.specularMap.channel),specularColorMapUv:Ie&&v(x.specularColorMap.channel),specularIntensityMapUv:qe&&v(x.specularIntensityMap.channel),transmissionMapUv:X&&v(x.transmissionMap.channel),thicknessMapUv:Re&&v(x.thicknessMap.channel),alphaMapUv:Me&&v(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ne||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(pe||Me),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Be,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Y,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:pe&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:xe&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&x.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function h(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)y.push(D),y.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(S(y,x),b(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function b(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){const y=g[x.type];let D;if(y){const F=vi[y];D=w_.clone(F.uniforms)}else D=x.uniforms;return D}function P(x,y){let D;for(let F=0,B=u.length;F<B;F++){const W=u[F];if(W.cacheKey===y){D=W,++D.usedTimes;break}}return D===void 0&&(D=new OS(n,y,x,r),u.push(D)),D}function E(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function T(x){l.remove(x)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:P,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:I}}function VS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function GS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,m,g,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function a(f,d,m,g,v,p){const h=o(f,d,m,g,v,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(f,d,m,g,v,p){const h=o(f,d,m,g,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||GS),i.length>1&&i.sort(d||Nh),s.length>1&&s.sort(d||Nh)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function WS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Oh,n.set(i,[o])):s>=r.length?(o=new Oh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new gt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function YS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $S=0;function qS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KS(n){const e=new XS,t=YS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const s=new ee,r=new Ut,o=new Ut;function a(c){let u=0,f=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,g=0,v=0,p=0,h=0,S=0,b=0,_=0,P=0,E=0,T=0;c.sort(qS);for(let x=0,y=c.length;x<y;x++){const D=c[x],F=D.color,B=D.intensity,W=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*B,f+=F.g*B,d+=F.b*B;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],B);T++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,H=t.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=D.shadow.matrix,S++}i.directional[m]=$,m++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(F).multiplyScalar(B),$.distance=W,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[v]=$;const Z=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,Z.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[v]=Z.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=K,_++}v++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(F).multiplyScalar(B),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=$,p++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const Z=D.shadow,H=t.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=$,g++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(B),$.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[h]=$,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==h||I.numDirectionalShadows!==S||I.numPointShadows!==b||I.numSpotShadows!==_||I.numSpotMaps!==P||I.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=_+P-E,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=h,I.numDirectionalShadows=S,I.numPointShadows=b,I.numSpotShadows=_,I.numSpotMaps=P,I.numLightProbes=T,i.version=$S++)}function l(c,u){let f=0,d=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const b=c[h];if(b.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(b.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Bh(n){const e=new KS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function jS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Bh(n),e.set(s,[a])):r>=o.length?(a=new Bh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class ZS extends ul{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JS extends ul{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QS=`void main() {
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
}`;function tb(n,e,t){let i=new Gp;const s=new at,r=new at,o=new It,a=new ZS({depthPacking:L0}),l=new JS,c={},u=t.maxTextureSize,f={[Yi]:Cn,[Cn]:Yi,[jn]:jn},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:QS,fragmentShader:eb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new js;g.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yp;let h=this.type;this.render=function(E,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const x=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(gs),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=h!==Ii&&this.type===Ii,W=h===Ii&&this.type!==Ii;for(let K=0,$=E.length;K<$;K++){const Z=E[K],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const te=H.getFrameExtents();if(s.multiply(te),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,H.mapSize.y=r.y)),H.map===null||B===!0||W===!0){const V=this.type!==Ii?{minFilter:ni,magFilter:ni}:{};H.map!==null&&H.map.dispose(),H.map=new $s(s.x,s.y,V),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const U=H.getViewportCount();for(let V=0;V<U;V++){const Y=H.getViewport(V);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(o),H.updateMatrices(Z,V),i=H.getFrustum(),_(T,I,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Ii&&S(H,I),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(x,y,D)};function S(E,T){const I=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $s(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,I,d,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,I,m,v,null)}function b(E,T,I,x){let y=null;const D=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=y.uuid,B=T.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let K=W[B];K===void 0&&(K=y.clone(),W[B]=K,T.addEventListener("dispose",P)),y=K}if(y.visible=T.visible,y.wireframe=T.wireframe,x===Ii?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=n.properties.get(y);F.light=I}return y}function _(E,T,I,x,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Ii)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const B=e.update(E),W=E.material;if(Array.isArray(W)){const K=B.groups;for(let $=0,Z=K.length;$<Z;$++){const H=K[$],te=W[H.materialIndex];if(te&&te.visible){const U=b(E,te,x,y);E.onBeforeShadow(n,E,T,I,B,U,H),n.renderBufferDirect(I,null,B,U,E,H),E.onAfterShadow(n,E,T,I,B,U,H)}}}else if(W.visible){const K=b(E,W,x,y);E.onBeforeShadow(n,E,T,I,B,K,null),n.renderBufferDirect(I,null,B,K,E,null),E.onAfterShadow(n,E,T,I,B,K,null)}}const F=E.children;for(let B=0,W=F.length;B<W;B++)_(F[B],T,I,x,y)}function P(E){E.target.removeEventListener("dispose",P);for(const I in c){const x=c[I],y=E.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const nb={[Ec]:Tc,[Ac]:Pc,[Cc]:Dc,[Nr]:Rc,[Tc]:Ec,[Pc]:Ac,[Dc]:Cc,[Rc]:Nr};function ib(n,e){function t(){let X=!1;const Re=new It;let fe=null;const Me=new It(0,0,0,0);return{setMask:function(Fe){fe!==Fe&&!X&&(n.colorMask(Fe,Fe,Fe,Fe),fe=Fe)},setLocked:function(Fe){X=Fe},setClear:function(Fe,Ue,Qe,_t,Pt){Pt===!0&&(Fe*=_t,Ue*=_t,Qe*=_t),Re.set(Fe,Ue,Qe,_t),Me.equals(Re)===!1&&(n.clearColor(Fe,Ue,Qe,_t),Me.copy(Re))},reset:function(){X=!1,fe=null,Me.set(-1,0,0,0)}}}function i(){let X=!1,Re=!1,fe=null,Me=null,Fe=null;return{setReversed:function(Ue){if(Re!==Ue){const Qe=e.get("EXT_clip_control");Re?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const _t=Fe;Fe=null,this.setClear(_t)}Re=Ue},getReversed:function(){return Re},setTest:function(Ue){Ue?ve(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!X&&(n.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(Re&&(Ue=nb[Ue]),Me!==Ue){switch(Ue){case Ec:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case Ac:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case Cc:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Pc:n.depthFunc(n.GREATER);break;case Dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=Ue}},setLocked:function(Ue){X=Ue},setClear:function(Ue){Fe!==Ue&&(Re&&(Ue=1-Ue),n.clearDepth(Ue),Fe=Ue)},reset:function(){X=!1,fe=null,Me=null,Fe=null,Re=!1}}}function s(){let X=!1,Re=null,fe=null,Me=null,Fe=null,Ue=null,Qe=null,_t=null,Pt=null;return{setTest:function(lt){X||(lt?ve(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(lt){Re!==lt&&!X&&(n.stencilMask(lt),Re=lt)},setFunc:function(lt,nn,At){(fe!==lt||Me!==nn||Fe!==At)&&(n.stencilFunc(lt,nn,At),fe=lt,Me=nn,Fe=At)},setOp:function(lt,nn,At){(Ue!==lt||Qe!==nn||_t!==At)&&(n.stencilOp(lt,nn,At),Ue=lt,Qe=nn,_t=At)},setLocked:function(lt){X=lt},setClear:function(lt){Pt!==lt&&(n.clearStencil(lt),Pt=lt)},reset:function(){X=!1,Re=null,fe=null,Me=null,Fe=null,Ue=null,Qe=null,_t=null,Pt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,h=null,S=null,b=null,_=null,P=null,E=null,T=new gt(0,0,0),I=0,x=!1,y=null,D=null,F=null,B=null,W=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=Z>=2);let te=null,U={};const V=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ae=new It().fromArray(V),Q=new It().fromArray(Y);function he(X,Re,fe,Me){const Fe=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(X,Ue),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<fe;Qe++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Re+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return Ue}const _e={};_e[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(Nr),se(!1),ne(Hf),ve(n.CULL_FACE),A(gs);function ve(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function Be(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function He(X,Re){return f[X]!==Re?(n.bindFramebuffer(X,Re),f[X]=Re,X===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Re),X===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ce(X,Re){let fe=m,Me=!1;if(X){fe=d.get(Re),fe===void 0&&(fe=[],d.set(Re,fe));const Fe=X.textures;if(fe.length!==Fe.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,Qe=Fe.length;Ue<Qe;Ue++)fe[Ue]=n.COLOR_ATTACHMENT0+Ue;fe.length=Fe.length,Me=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Me=!0);Me&&n.drawBuffers(fe)}function pe(X){return g!==X?(n.useProgram(X),g=X,!0):!1}const R={[Os]:n.FUNC_ADD,[s0]:n.FUNC_SUBTRACT,[r0]:n.FUNC_REVERSE_SUBTRACT};R[o0]=n.MIN,R[a0]=n.MAX;const O={[l0]:n.ZERO,[c0]:n.ONE,[u0]:n.SRC_COLOR,[bc]:n.SRC_ALPHA,[g0]:n.SRC_ALPHA_SATURATE,[p0]:n.DST_COLOR,[h0]:n.DST_ALPHA,[f0]:n.ONE_MINUS_SRC_COLOR,[wc]:n.ONE_MINUS_SRC_ALPHA,[m0]:n.ONE_MINUS_DST_COLOR,[d0]:n.ONE_MINUS_DST_ALPHA,[v0]:n.CONSTANT_COLOR,[_0]:n.ONE_MINUS_CONSTANT_COLOR,[x0]:n.CONSTANT_ALPHA,[y0]:n.ONE_MINUS_CONSTANT_ALPHA};function A(X,Re,fe,Me,Fe,Ue,Qe,_t,Pt,lt){if(X===gs){v===!0&&(Be(n.BLEND),v=!1);return}if(v===!1&&(ve(n.BLEND),v=!0),X!==i0){if(X!==p||lt!==x){if((h!==Os||_!==Os)&&(n.blendEquation(n.FUNC_ADD),h=Os,_=Os),lt)switch(X){case Dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.ONE,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}S=null,b=null,P=null,E=null,T.set(0,0,0),I=0,p=X,x=lt}return}Fe=Fe||Re,Ue=Ue||fe,Qe=Qe||Me,(Re!==h||Fe!==_)&&(n.blendEquationSeparate(R[Re],R[Fe]),h=Re,_=Fe),(fe!==S||Me!==b||Ue!==P||Qe!==E)&&(n.blendFuncSeparate(O[fe],O[Me],O[Ue],O[Qe]),S=fe,b=Me,P=Ue,E=Qe),(_t.equals(T)===!1||Pt!==I)&&(n.blendColor(_t.r,_t.g,_t.b,Pt),T.copy(_t),I=Pt),p=X,x=!1}function de(X,Re){X.side===jn?Be(n.CULL_FACE):ve(n.CULL_FACE);let fe=X.side===Cn;Re&&(fe=!fe),se(fe),X.blending===Dr&&X.transparent===!1?A(gs):A(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Me=X.stencilWrite;a.setTest(Me),Me&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),xe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){y!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),y=X)}function ne(X){X!==e0?(ve(n.CULL_FACE),X!==D&&(X===Hf?n.cullFace(n.BACK):X===t0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),D=X}function ce(X){X!==F&&($&&n.lineWidth(X),F=X)}function xe(X,Re,fe){X?(ve(n.POLYGON_OFFSET_FILL),(B!==Re||W!==fe)&&(n.polygonOffset(Re,fe),B=Re,W=fe)):Be(n.POLYGON_OFFSET_FILL)}function ue(X){X?ve(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function w(X){X===void 0&&(X=n.TEXTURE0+K-1),te!==X&&(n.activeTexture(X),te=X)}function M(X,Re,fe){fe===void 0&&(te===null?fe=n.TEXTURE0+K-1:fe=te);let Me=U[fe];Me===void 0&&(Me={type:void 0,texture:void 0},U[fe]=Me),(Me.type!==X||Me.texture!==Re)&&(te!==fe&&(n.activeTexture(fe),te=fe),n.bindTexture(X,Re||_e[X]),Me.type=X,Me.texture=Re)}function L(){const X=U[te];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function N(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function z(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(X){ae.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),ae.copy(X))}function ye(X){Q.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function Ne(X,Re){let fe=c.get(Re);fe===void 0&&(fe=new WeakMap,c.set(Re,fe));let Me=fe.get(X);Me===void 0&&(Me=n.getUniformBlockIndex(Re,X.name),fe.set(X,Me))}function Ie(X,Re){const Me=c.get(Re).get(X);l.get(Re)!==Me&&(n.uniformBlockBinding(Re,Me,X.__bindingPointIndex),l.set(Re,Me))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,U={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,h=null,S=null,b=null,_=null,P=null,E=null,T=new gt(0,0,0),I=0,x=!1,y=null,D=null,F=null,B=null,W=null,ae.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Be,bindFramebuffer:He,drawBuffers:Ce,useProgram:pe,setBlending:A,setMaterial:de,setFlipSided:se,setCullFace:ne,setLineWidth:ce,setPolygonOffset:xe,setScissorTest:ue,activeTexture:w,bindTexture:M,unbindTexture:L,compressedTexImage2D:G,compressedTexImage3D:J,texImage2D:z,texImage3D:ie,updateUBOMapping:Ne,uniformBlockBinding:Ie,texStorage2D:We,texStorage3D:N,texSubImage2D:re,texSubImage3D:we,compressedTexSubImage2D:Se,compressedTexSubImage3D:Te,scissor:Ee,viewport:ye,reset:qe}}function kh(n,e,t,i){const s=sb(i);switch(t){case Tp:return n*e;case Cp:return n*e;case Rp:return n*e*2;case Pp:return n*e/s.components*s.byteLength;case Ou:return n*e/s.components*s.byteLength;case Dp:return n*e*2/s.components*s.byteLength;case Bu:return n*e*2/s.components*s.byteLength;case Ap:return n*e*3/s.components*s.byteLength;case Jn:return n*e*4/s.components*s.byteLength;case ku:return n*e*4/s.components*s.byteLength;case wa:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:case kc:return Math.max(n,16)*Math.max(e,8)/4;case Nc:case Bc:return Math.max(n,8)*Math.max(e,8)/2;case zc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ca:case iu:case su:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lp:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ou:case au:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sb(n){switch(n){case $i:case bp:return{byteLength:1,components:1};case Po:case wp:case No:return{byteLength:2,components:1};case Fu:case Nu:return{byteLength:2,components:4};case Ys:case Uu:case Bi:return{byteLength:4,components:1};case Ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function rb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return m?new OffscreenCanvas(w,M):Ha("canvas")}function v(w,M,L){let G=1;const J=ue(w);if((J.width>L||J.height>L)&&(G=L/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(G*J.width),we=Math.floor(G*J.height);f===void 0&&(f=g(re,we));const Se=M?g(re,we):f;return Se.width=re,Se.height=we,Se.getContext("2d").drawImage(w,0,0,re,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+re+"x"+we+")."),Se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function p(w){return w.generateMipmaps}function h(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,M,L,G,J=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=M;if(M===n.RED&&(L===n.FLOAT&&(re=n.R32F),L===n.HALF_FLOAT&&(re=n.R16F),L===n.UNSIGNED_BYTE&&(re=n.R8)),M===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(re=n.R8UI),L===n.UNSIGNED_SHORT&&(re=n.R16UI),L===n.UNSIGNED_INT&&(re=n.R32UI),L===n.BYTE&&(re=n.R8I),L===n.SHORT&&(re=n.R16I),L===n.INT&&(re=n.R32I)),M===n.RG&&(L===n.FLOAT&&(re=n.RG32F),L===n.HALF_FLOAT&&(re=n.RG16F),L===n.UNSIGNED_BYTE&&(re=n.RG8)),M===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(re=n.RG8UI),L===n.UNSIGNED_SHORT&&(re=n.RG16UI),L===n.UNSIGNED_INT&&(re=n.RG32UI),L===n.BYTE&&(re=n.RG8I),L===n.SHORT&&(re=n.RG16I),L===n.INT&&(re=n.RG32I)),M===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(re=n.RGB8UI),L===n.UNSIGNED_SHORT&&(re=n.RGB16UI),L===n.UNSIGNED_INT&&(re=n.RGB32UI),L===n.BYTE&&(re=n.RGB8I),L===n.SHORT&&(re=n.RGB16I),L===n.INT&&(re=n.RGB32I)),M===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),L===n.UNSIGNED_INT&&(re=n.RGBA32UI),L===n.BYTE&&(re=n.RGBA8I),L===n.SHORT&&(re=n.RGBA16I),L===n.INT&&(re=n.RGBA32I)),M===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),M===n.RGBA){const we=J?cl:ct.getTransfer(G);L===n.FLOAT&&(re=n.RGBA32F),L===n.HALF_FLOAT&&(re=n.RGBA16F),L===n.UNSIGNED_BYTE&&(re=we===yt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(w,M){let L;return w?M===null||M===Ys||M===kr?L=n.DEPTH24_STENCIL8:M===Bi?L=n.DEPTH32F_STENCIL8:M===Po&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ys||M===kr?L=n.DEPTH_COMPONENT24:M===Bi?L=n.DEPTH_COMPONENT32F:M===Po&&(L=n.DEPTH_COMPONENT16),L}function P(w,M){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==ni&&w.minFilter!==Zt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){const M=w.target;M.removeEventListener("dispose",E),I(M),M.isVideoTexture&&u.delete(M)}function T(w){const M=w.target;M.removeEventListener("dispose",T),y(M)}function I(w){const M=i.get(w);if(M.__webglInit===void 0)return;const L=w.source,G=d.get(L);if(G){const J=G[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(w),Object.keys(G).length===0&&d.delete(L)}i.remove(w)}function x(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const L=w.source,G=d.get(L);delete G[M.__cacheKey],o.memory.textures--}function y(w){const M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let J=0;J<M.__webglFramebuffer[G].length;J++)n.deleteFramebuffer(M.__webglFramebuffer[G][J]);else n.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)n.deleteFramebuffer(M.__webglFramebuffer[G]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const L=w.textures;for(let G=0,J=L.length;G<J;G++){const re=i.get(L[G]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(L[G])}i.remove(w)}let D=0;function F(){D=0}function B(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function W(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function K(w,M){const L=i.get(w);if(w.isVideoTexture&&ce(w),w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){const G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(L,w,M);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+M)}function $(w,M){const L=i.get(w);if(w.version>0&&L.__version!==w.version){Q(L,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+M)}function Z(w,M){const L=i.get(w);if(w.version>0&&L.__version!==w.version){Q(L,w,M);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+M)}function H(w,M){const L=i.get(w);if(w.version>0&&L.__version!==w.version){he(L,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+M)}const te={[Uc]:n.REPEAT,[zs]:n.CLAMP_TO_EDGE,[Fc]:n.MIRRORED_REPEAT},U={[ni]:n.NEAREST,[P0]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[wl]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},V={[F0]:n.NEVER,[H0]:n.ALWAYS,[N0]:n.LESS,[Ip]:n.LEQUAL,[O0]:n.EQUAL,[z0]:n.GEQUAL,[B0]:n.GREATER,[k0]:n.NOTEQUAL};function Y(w,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Zt||M.magFilter===wl||M.magFilter===Go||M.magFilter===ps||M.minFilter===Zt||M.minFilter===wl||M.minFilter===Go||M.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,te[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,te[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,te[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,U[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,U[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,V[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ni||M.minFilter!==Go&&M.minFilter!==ps||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ae(w,M){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",E));const G=M.source;let J=d.get(G);J===void 0&&(J={},d.set(G,J));const re=W(M);if(re!==w.__cacheKey){J[re]===void 0&&(J[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[re].usedTimes++;const we=J[w.__cacheKey];we!==void 0&&(J[w.__cacheKey].usedTimes--,we.usedTimes===0&&x(M)),w.__cacheKey=re,w.__webglTexture=J[re].texture}return L}function Q(w,M,L){let G=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=n.TEXTURE_3D);const J=ae(w,M),re=M.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+L);const we=i.get(re);if(re.version!==we.__version||J===!0){t.activeTexture(n.TEXTURE0+L);const Se=ct.getPrimaries(ct.workingColorSpace),Te=M.colorSpace===ds?null:ct.getPrimaries(M.colorSpace),We=M.colorSpace===ds||Se===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let N=v(M.image,!1,s.maxTextureSize);N=xe(M,N);const z=r.convert(M.format,M.colorSpace),ie=r.convert(M.type);let Ee=b(M.internalFormat,z,ie,M.colorSpace,M.isVideoTexture);Y(G,M);let ye;const Ne=M.mipmaps,Ie=M.isVideoTexture!==!0,qe=we.__version===void 0||J===!0,X=re.dataReady,Re=P(M,N);if(M.isDepthTexture)Ee=_(M.format===zr,M.type),qe&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,Ee,N.width,N.height):t.texImage2D(n.TEXTURE_2D,0,Ee,N.width,N.height,0,z,ie,null));else if(M.isDataTexture)if(Ne.length>0){Ie&&qe&&t.texStorage2D(n.TEXTURE_2D,Re,Ee,Ne[0].width,Ne[0].height);for(let fe=0,Me=Ne.length;fe<Me;fe++)ye=Ne[fe],Ie?X&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ye.width,ye.height,z,ie,ye.data):t.texImage2D(n.TEXTURE_2D,fe,Ee,ye.width,ye.height,0,z,ie,ye.data);M.generateMipmaps=!1}else Ie?(qe&&t.texStorage2D(n.TEXTURE_2D,Re,Ee,N.width,N.height),X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,N.width,N.height,z,ie,N.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,N.width,N.height,0,z,ie,N.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ee,Ne[0].width,Ne[0].height,N.depth);for(let fe=0,Me=Ne.length;fe<Me;fe++)if(ye=Ne[fe],M.format!==Jn)if(z!==null)if(Ie){if(X)if(M.layerUpdates.size>0){const Fe=kh(ye.width,ye.height,M.format,M.type);for(const Ue of M.layerUpdates){const Qe=ye.data.subarray(Ue*Fe/ye.data.BYTES_PER_ELEMENT,(Ue+1)*Fe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Ue,ye.width,ye.height,1,z,Qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,ye.width,ye.height,N.depth,z,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ee,ye.width,ye.height,N.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,ye.width,ye.height,N.depth,z,ie,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ee,ye.width,ye.height,N.depth,0,z,ie,ye.data)}else{Ie&&qe&&t.texStorage2D(n.TEXTURE_2D,Re,Ee,Ne[0].width,Ne[0].height);for(let fe=0,Me=Ne.length;fe<Me;fe++)ye=Ne[fe],M.format!==Jn?z!==null?Ie?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,ye.width,ye.height,z,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?X&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ye.width,ye.height,z,ie,ye.data):t.texImage2D(n.TEXTURE_2D,fe,Ee,ye.width,ye.height,0,z,ie,ye.data)}else if(M.isDataArrayTexture)if(Ie){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ee,N.width,N.height,N.depth),X)if(M.layerUpdates.size>0){const fe=kh(N.width,N.height,M.format,M.type);for(const Me of M.layerUpdates){const Fe=N.data.subarray(Me*fe/N.data.BYTES_PER_ELEMENT,(Me+1)*fe/N.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,N.width,N.height,1,z,ie,Fe)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,z,ie,N.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,N.width,N.height,N.depth,0,z,ie,N.data);else if(M.isData3DTexture)Ie?(qe&&t.texStorage3D(n.TEXTURE_3D,Re,Ee,N.width,N.height,N.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,z,ie,N.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,N.width,N.height,N.depth,0,z,ie,N.data);else if(M.isFramebufferTexture){if(qe)if(Ie)t.texStorage2D(n.TEXTURE_2D,Re,Ee,N.width,N.height);else{let fe=N.width,Me=N.height;for(let Fe=0;Fe<Re;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Ee,fe,Me,0,z,ie,null),fe>>=1,Me>>=1}}else if(Ne.length>0){if(Ie&&qe){const fe=ue(Ne[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ee,fe.width,fe.height)}for(let fe=0,Me=Ne.length;fe<Me;fe++)ye=Ne[fe],Ie?X&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,z,ie,ye):t.texImage2D(n.TEXTURE_2D,fe,Ee,z,ie,ye);M.generateMipmaps=!1}else if(Ie){if(qe){const fe=ue(N);t.texStorage2D(n.TEXTURE_2D,Re,Ee,fe.width,fe.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,z,ie,N)}else t.texImage2D(n.TEXTURE_2D,0,Ee,z,ie,N);p(M)&&h(G),we.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function he(w,M,L){if(M.image.length!==6)return;const G=ae(w,M),J=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+L);const re=i.get(J);if(J.version!==re.__version||G===!0){t.activeTexture(n.TEXTURE0+L);const we=ct.getPrimaries(ct.workingColorSpace),Se=M.colorSpace===ds?null:ct.getPrimaries(M.colorSpace),Te=M.colorSpace===ds||we===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,N=M.image[0]&&M.image[0].isDataTexture,z=[];for(let Me=0;Me<6;Me++)!We&&!N?z[Me]=v(M.image[Me],!0,s.maxCubemapSize):z[Me]=N?M.image[Me].image:M.image[Me],z[Me]=xe(M,z[Me]);const ie=z[0],Ee=r.convert(M.format,M.colorSpace),ye=r.convert(M.type),Ne=b(M.internalFormat,Ee,ye,M.colorSpace),Ie=M.isVideoTexture!==!0,qe=re.__version===void 0||G===!0,X=J.dataReady;let Re=P(M,ie);Y(n.TEXTURE_CUBE_MAP,M);let fe;if(We){Ie&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ne,ie.width,ie.height);for(let Me=0;Me<6;Me++){fe=z[Me].mipmaps;for(let Fe=0;Fe<fe.length;Fe++){const Ue=fe[Fe];M.format!==Jn?Ee!==null?Ie?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Fe,0,0,Ue.width,Ue.height,Ee,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Fe,Ne,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Fe,0,0,Ue.width,Ue.height,Ee,ye,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Fe,Ne,Ue.width,Ue.height,0,Ee,ye,Ue.data)}}}else{if(fe=M.mipmaps,Ie&&qe){fe.length>0&&Re++;const Me=ue(z[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ne,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(N){Ie?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,z[Me].width,z[Me].height,Ee,ye,z[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ne,z[Me].width,z[Me].height,0,Ee,ye,z[Me].data);for(let Fe=0;Fe<fe.length;Fe++){const Qe=fe[Fe].image[Me].image;Ie?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Fe+1,0,0,Qe.width,Qe.height,Ee,ye,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Fe+1,Ne,Qe.width,Qe.height,0,Ee,ye,Qe.data)}}else{Ie?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ee,ye,z[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ne,Ee,ye,z[Me]);for(let Fe=0;Fe<fe.length;Fe++){const Ue=fe[Fe];Ie?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Fe+1,0,0,Ee,ye,Ue.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Fe+1,Ne,Ee,ye,Ue.image[Me])}}}p(M)&&h(n.TEXTURE_CUBE_MAP),re.__version=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function _e(w,M,L,G,J,re){const we=r.convert(L.format,L.colorSpace),Se=r.convert(L.type),Te=b(L.internalFormat,we,Se,L.colorSpace),We=i.get(M),N=i.get(L);if(N.__renderTarget=M,!We.__hasExternalTextures){const z=Math.max(1,M.width>>re),ie=Math.max(1,M.height>>re);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,re,Te,z,ie,M.depth,0,we,Se,null):t.texImage2D(J,re,Te,z,ie,0,we,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ne(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,J,N.__webglTexture,0,se(M)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,J,N.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(w,M,L){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){const G=M.depthTexture,J=G&&G.isDepthTexture?G.type:null,re=_(M.stencilBuffer,J),we=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=se(M);ne(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,re,M.width,M.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,re,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,re,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,w)}else{const G=M.textures;for(let J=0;J<G.length;J++){const re=G[J],we=r.convert(re.format,re.colorSpace),Se=r.convert(re.type),Te=b(re.internalFormat,we,Se,re.colorSpace),We=se(M);L&&ne(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Te,M.width,M.height):ne(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,Te,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Te,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(M.depthTexture);G.__renderTarget=M,(!G.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const J=G.__webglTexture,re=se(M);if(M.depthTexture.format===Lr)ne(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(M.depthTexture.format===zr)ne(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function He(w){const M=i.get(w),L=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=G}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Be(M.__webglFramebuffer,w)}else if(L){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=n.createRenderbuffer(),ve(M.__webglDepthbuffer[G],w,!1);else{const J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,re)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ve(M.__webglDepthbuffer,w,!1);else{const G=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(w,M,L){const G=i.get(w);M!==void 0&&_e(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&He(w)}function pe(w){const M=w.texture,L=i.get(w),G=i.get(M);w.addEventListener("dispose",T);const J=w.textures,re=w.isWebGLCubeRenderTarget===!0,we=J.length>1;if(we||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=M.version,o.memory.textures++),re){L.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer[Se]=[];for(let Te=0;Te<M.mipmaps.length;Te++)L.__webglFramebuffer[Se][Te]=n.createFramebuffer()}else L.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer=[];for(let Se=0;Se<M.mipmaps.length;Se++)L.__webglFramebuffer[Se]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(we)for(let Se=0,Te=J.length;Se<Te;Se++){const We=i.get(J[Se]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ne(w)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Se=0;Se<J.length;Se++){const Te=J[Se];L.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[Se]);const We=r.convert(Te.format,Te.colorSpace),N=r.convert(Te.type),z=b(Te.internalFormat,We,N,Te.colorSpace,w.isXRRenderTarget===!0),ie=se(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,z,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,L.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(L.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Y(n.TEXTURE_CUBE_MAP,M);for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)_e(L.__webglFramebuffer[Se][Te],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Te);else _e(L.__webglFramebuffer[Se],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);p(M)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let Se=0,Te=J.length;Se<Te;Se++){const We=J[Se],N=i.get(We);t.bindTexture(n.TEXTURE_2D,N.__webglTexture),Y(n.TEXTURE_2D,We),_e(L.__webglFramebuffer,w,We,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),p(We)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Se=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,G.__webglTexture),Y(Se,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)_e(L.__webglFramebuffer[Te],w,M,n.COLOR_ATTACHMENT0,Se,Te);else _e(L.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,Se,0);p(M)&&h(Se),t.unbindTexture()}w.depthBuffer&&He(w)}function R(w){const M=w.textures;for(let L=0,G=M.length;L<G;L++){const J=M[L];if(p(J)){const re=S(w),we=i.get(J).__webglTexture;t.bindTexture(re,we),h(re),t.unbindTexture()}}}const O=[],A=[];function de(w){if(w.samples>0){if(ne(w)===!1){const M=w.textures,L=w.width,G=w.height;let J=n.COLOR_BUFFER_BIT;const re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(w),Se=M.length>1;if(Se)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Te]);const We=i.get(M[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,L,G,0,0,L,G,J,n.NEAREST),l===!0&&(O.length=0,A.length=0,O.push(n.COLOR_ATTACHMENT0+Te),w.depthBuffer&&w.resolveDepthBuffer===!1&&(O.push(re),A.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,we.__webglColorRenderbuffer[Te]);const We=i.get(M[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function se(w){return Math.min(s.maxSamples,w.samples)}function ne(w){const M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ce(w){const M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function xe(w,M){const L=w.colorSpace,G=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==Yr&&L!==ds&&(ct.getTransfer(L)===yt?(G!==Jn||J!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),M}function ue(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Ce,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ne}function ob(n,e){function t(i,s=ds){let r;const o=ct.getTransfer(s);if(i===$i)return n.UNSIGNED_BYTE;if(i===Fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ep)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bp)return n.BYTE;if(i===wp)return n.SHORT;if(i===Po)return n.UNSIGNED_SHORT;if(i===Uu)return n.INT;if(i===Ys)return n.UNSIGNED_INT;if(i===Bi)return n.FLOAT;if(i===No)return n.HALF_FLOAT;if(i===Tp)return n.ALPHA;if(i===Ap)return n.RGB;if(i===Jn)return n.RGBA;if(i===Cp)return n.LUMINANCE;if(i===Rp)return n.LUMINANCE_ALPHA;if(i===Lr)return n.DEPTH_COMPONENT;if(i===zr)return n.DEPTH_STENCIL;if(i===Pp)return n.RED;if(i===Ou)return n.RED_INTEGER;if(i===Dp)return n.RG;if(i===Bu)return n.RG_INTEGER;if(i===ku)return n.RGBA_INTEGER;if(i===wa||i===Ea||i===Ta||i===Aa)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===Oc||i===Bc||i===kc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Hc||i===Vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Hc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gc||i===Wc||i===Xc||i===Yc||i===$c||i===qc||i===Kc||i===jc||i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ca||i===iu||i===su)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ca)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lp||i===ru||i===ou||i===au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ab extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class uo extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const cb=`
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

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new yn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:cb,fragmentShader:ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new en(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hb extends Ks{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null;const v=new fb,p=t.getContextAttributes();let h=null,S=null;const b=[],_=[],P=new at;let E=null;const T=new Hn;T.viewport=new It;const I=new Hn;I.viewport=new It;const x=[T,I],y=new ab;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=b[Q];return he===void 0&&(he=new Zl,b[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=b[Q];return he===void 0&&(he=new Zl,b[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=b[Q];return he===void 0&&(he=new Zl,b[Q]=he),he.getHandSpace()};function B(Q){const he=_.indexOf(Q.inputSource);if(he===-1)return;const _e=b[he];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,c||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let Q=0;Q<b.length;Q++){const he=_[Q];he!==null&&(_[Q]=null,b[Q].disconnect(he))}D=null,F=null,v.reset(),e.setRenderTarget(h),m=null,d=null,f=null,s=null,S=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new $s(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,_e=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?zr:Lr,_e=p.stencil?kr:Ys);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new $s(d.textureWidth,d.textureHeight,{format:Jn,type:$i,depthTexture:new Xp(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Q){for(let he=0;he<Q.removed.length;he++){const _e=Q.removed[he],ve=_.indexOf(_e);ve>=0&&(_[ve]=null,b[ve].disconnect(_e))}for(let he=0;he<Q.added.length;he++){const _e=Q.added[he];let ve=_.indexOf(_e);if(ve===-1){for(let He=0;He<b.length;He++)if(He>=_.length){_.push(_e),ve=He;break}else if(_[He]===null){_[He]=_e,ve=He;break}if(ve===-1)break}const Be=b[ve];Be&&Be.connect(_e)}}const $=new ee,Z=new ee;function H(Q,he,_e){$.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(_e.matrixWorld);const ve=$.distanceTo(Z),Be=he.projectionMatrix.elements,He=_e.projectionMatrix.elements,Ce=Be[14]/(Be[10]-1),pe=Be[14]/(Be[10]+1),R=(Be[9]+1)/Be[5],O=(Be[9]-1)/Be[5],A=(Be[8]-1)/Be[0],de=(He[8]+1)/He[0],se=Ce*A,ne=Ce*de,ce=ve/(-A+de),xe=ce*-A;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(xe),Q.translateZ(ce),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Be[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const ue=Ce+ce,w=pe+ce,M=se-xe,L=ne+(ve-xe),G=R*pe/w*ue,J=O*pe/w*ue;Q.projectionMatrix.makePerspective(M,L,G,J,ue,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function te(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let he=Q.near,_e=Q.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),y.near=I.near=T.near=he,y.far=I.far=T.far=_e,(D!==y.near||F!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,F=y.far),T.layers.mask=Q.layers.mask|2,I.layers.mask=Q.layers.mask|4,y.layers.mask=T.layers.mask|I.layers.mask;const ve=Q.parent,Be=y.cameras;te(y,ve);for(let He=0;He<Be.length;He++)te(Be[He],ve);Be.length===2?H(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),U(Q,y,ve)};function U(Q,he,_e){_e===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Do*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let V=null;function Y(Q,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const _e=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ve=!1;_e.length!==y.cameras.length&&(y.cameras.length=0,ve=!0);for(let He=0;He<_e.length;He++){const Ce=_e[He];let pe=null;if(m!==null)pe=m.getViewport(Ce);else{const O=f.getViewSubImage(d,Ce);pe=O.viewport,He===0&&(e.setRenderTargetTextures(S,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(S))}let R=x[He];R===void 0&&(R=new Hn,R.layers.enable(He),R.viewport=new It,x[He]=R),R.matrix.fromArray(Ce.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ce.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(pe.x,pe.y,pe.width,pe.height),He===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ve===!0&&y.cameras.push(R)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const He=f.getDepthInformation(_e[0]);He&&He.isValid&&He.texture&&v.init(e,He,s.renderState)}}for(let _e=0;_e<b.length;_e++){const ve=_[_e],Be=b[_e];ve!==null&&Be!==void 0&&Be.update(ve,he,c||o)}V&&V(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const ae=new Wp;ae.setAnimationLoop(Y),this.setAnimationLoop=function(Q){V=Q},this.dispose=function(){}}}const Ls=new qi,db=new Ut;function pb(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,zp(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,S,b,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),v(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,S,b):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Cn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Cn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h),b=S.envMap,_=S.envMapRotation;b&&(p.envMap.value=b,Ls.copy(_),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),p.envMapRotation.value.setFromMatrix4(db.makeRotationFromEuler(Ls)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Cn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function mb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const _=b.program;i.uniformBlockBinding(S,_)}function c(S,b){let _=s[S.id];_===void 0&&(g(S),_=u(S),s[S.id]=_,S.addEventListener("dispose",p));const P=b.program;i.updateUBOMapping(S,P);const E=e.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function u(S){const b=f();S.__bindingPointIndex=b;const _=n.createBuffer(),P=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,P,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=s[S.id],_=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,T=_.length;E<T;E++){const I=Array.isArray(_[E])?_[E]:[_[E]];for(let x=0,y=I.length;x<y;x++){const D=I[x];if(m(D,E,x,P)===!0){const F=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let K=0;K<B.length;K++){const $=B[K],Z=v($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,F+W,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,b,_,P){const E=S.value,T=b+"_"+_;if(P[T]===void 0)return typeof E=="number"||typeof E=="boolean"?P[T]=E:P[T]=E.clone(),!0;{const I=P[T];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return P[T]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(S){const b=S.uniforms;let _=0;const P=16;for(let T=0,I=b.length;T<I;T++){const x=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,D=x.length;y<D;y++){const F=x[y],B=Array.isArray(F.value)?F.value:[F.value];for(let W=0,K=B.length;W<K;W++){const $=B[W],Z=v($),H=_%P,te=H%Z.boundary,U=H+te;_+=te,U!==0&&P-U<Z.storage&&(_+=P-U),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=Z.storage}}}const E=_%P;return E>0&&(_+=P-E),S.__size=_,S.__cache={},this}function v(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function p(S){const b=S.target;b.removeEventListener("dispose",p);const _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Js{constructor(e={}){const{canvas:t=s_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=vs,this.toneMappingExposure=1;const _=this;let P=!1,E=0,T=0,I=null,x=-1,y=null;const D=new It,F=new It;let B=null;const W=new gt(0);let K=0,$=t.width,Z=t.height,H=1,te=null,U=null;const V=new It(0,0,$,Z),Y=new It(0,0,$,Z);let ae=!1;const Q=new Gp;let he=!1,_e=!1;const ve=new Ut,Be=new Ut,He=new ee,Ce=new It,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function O(){return I===null?H:1}let A=i;function de(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Iu}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),A===null){const q="webgl2";if(A=de(q,C),A===null)throw de(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let se,ne,ce,xe,ue,w,M,L,G,J,re,we,Se,Te,We,N,z,ie,Ee,ye,Ne,Ie,qe,X;function Re(){se=new MM(A),se.init(),Ie=new ob(A,se),ne=new mM(A,se,e,Ie),ce=new ib(A,se),ne.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),xe=new wM(A),ue=new VS,w=new rb(A,se,ce,ue,ne,Ie,xe),M=new vM(_),L=new yM(_),G=new D_(A),qe=new dM(A,G),J=new SM(A,G,xe,qe),re=new TM(A,J,G,xe),Ee=new EM(A,ne,w),N=new gM(ue),we=new HS(_,M,L,se,ne,qe,N),Se=new pb(_,ue),Te=new WS,We=new jS(se),ie=new hM(_,M,L,ce,re,m,l),z=new tb(_,re,ne),X=new mb(A,xe,ne,ce),ye=new pM(A,se,xe),Ne=new bM(A,se,xe),xe.programs=we.programs,_.capabilities=ne,_.extensions=se,_.properties=ue,_.renderLists=Te,_.shadowMap=z,_.state=ce,_.info=xe}Re();const fe=new hb(_,A);this.xr=fe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize($,Z,!1))},this.getSize=function(C){return C.set($,Z)},this.setSize=function(C,q,oe=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,Z=q,t.width=Math.floor(C*H),t.height=Math.floor(q*H),oe===!0&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set($*H,Z*H).floor()},this.setDrawingBufferSize=function(C,q,oe){$=C,Z=q,H=oe,t.width=Math.floor(C*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,q,oe,le){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,q,oe,le),ce.viewport(D.copy(V).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(Y)},this.setScissor=function(C,q,oe,le){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,q,oe,le),ce.scissor(F.copy(Y).multiplyScalar(H).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(C){ce.setScissorTest(ae=C)},this.setOpaqueSort=function(C){te=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(C=!0,q=!0,oe=!0){let le=0;if(C){let j=!1;if(I!==null){const Pe=I.texture.format;j=Pe===ku||Pe===Bu||Pe===Ou}if(j){const Pe=I.texture.type,ze=Pe===$i||Pe===Ys||Pe===Po||Pe===kr||Pe===Fu||Pe===Nu,Xe=ie.getClearColor(),Ye=ie.getClearAlpha(),tt=Xe.r,st=Xe.g,$e=Xe.b;ze?(g[0]=tt,g[1]=st,g[2]=$e,g[3]=Ye,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=tt,v[1]=st,v[2]=$e,v[3]=Ye,A.clearBufferiv(A.COLOR,0,v))}else le|=A.COLOR_BUFFER_BIT}q&&(le|=A.DEPTH_BUFFER_BIT),oe&&(le|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Te.dispose(),We.dispose(),ue.dispose(),M.dispose(),L.dispose(),re.dispose(),qe.dispose(),X.dispose(),we.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",tr),fe.removeEventListener("sessionend",Si),On.stop()};function Me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=xe.autoReset,q=z.enabled,oe=z.autoUpdate,le=z.needsUpdate,j=z.type;Re(),xe.autoReset=C,z.enabled=q,z.autoUpdate=oe,z.needsUpdate=le,z.type=j}function Ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qe(C){const q=C.target;q.removeEventListener("dispose",Qe),_t(q)}function _t(C){Pt(C),ue.remove(C)}function Pt(C){const q=ue.get(C).programs;q!==void 0&&(q.forEach(function(oe){we.releaseProgram(oe)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,oe,le,j,Pe){q===null&&(q=pe);const ze=j.isMesh&&j.matrixWorld.determinant()<0,Xe=et(C,q,oe,le,j);ce.setMaterial(le,ze);let Ye=oe.index,tt=1;if(le.wireframe===!0){if(Ye=J.getWireframeAttribute(oe),Ye===void 0)return;tt=2}const st=oe.drawRange,$e=oe.attributes.position;let ut=st.start*tt,bt=(st.start+st.count)*tt;Pe!==null&&(ut=Math.max(ut,Pe.start*tt),bt=Math.min(bt,(Pe.start+Pe.count)*tt)),Ye!==null?(ut=Math.max(ut,0),bt=Math.min(bt,Ye.count)):$e!=null&&(ut=Math.max(ut,0),bt=Math.min(bt,$e.count));const Et=bt-ut;if(Et<0||Et===1/0)return;qe.setup(j,le,Xe,oe,Ye);let Mn,ht=ye;if(Ye!==null&&(Mn=G.get(Ye),ht=Ne,ht.setIndex(Mn)),j.isMesh)le.wireframe===!0?(ce.setLineWidth(le.wireframeLinewidth*O()),ht.setMode(A.LINES)):ht.setMode(A.TRIANGLES);else if(j.isLine){let Ke=le.linewidth;Ke===void 0&&(Ke=1),ce.setLineWidth(Ke*O()),j.isLineSegments?ht.setMode(A.LINES):j.isLineLoop?ht.setMode(A.LINE_LOOP):ht.setMode(A.LINE_STRIP)}else j.isPoints?ht.setMode(A.POINTS):j.isSprite&&ht.setMode(A.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ht.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ht.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ke=j._multiDrawStarts,bi=j._multiDrawCounts,dt=j._multiDrawCount,Xn=Ye?G.get(Ye).bytesPerElement:1,nr=ue.get(le).currentProgram.getUniforms();for(let Pn=0;Pn<dt;Pn++)nr.setValue(A,"_gl_DrawID",Pn),ht.render(Ke[Pn]/Xn,bi[Pn])}else if(j.isInstancedMesh)ht.renderInstances(ut,Et,j.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,bi=Math.min(oe.instanceCount,Ke);ht.renderInstances(ut,Et,bi)}else ht.render(ut,Et)};function lt(C,q,oe){C.transparent===!0&&C.side===jn&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,De(C,q,oe),C.side=Yi,C.needsUpdate=!0,De(C,q,oe),C.side=jn):De(C,q,oe)}this.compile=function(C,q,oe=null){oe===null&&(oe=C),h=We.get(oe),h.init(q),b.push(h),oe.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(h.pushLight(j),j.castShadow&&h.pushShadow(j))}),C!==oe&&C.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(h.pushLight(j),j.castShadow&&h.pushShadow(j))}),h.setupLights();const le=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Pe=j.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){const Xe=Pe[ze];lt(Xe,oe,j),le.add(Xe)}else lt(Pe,oe,j),le.add(Pe)}),b.pop(),h=null,le},this.compileAsync=function(C,q,oe=null){const le=this.compile(C,q,oe);return new Promise(j=>{function Pe(){if(le.forEach(function(ze){ue.get(ze).currentProgram.isReady()&&le.delete(ze)}),le.size===0){j(C);return}setTimeout(Pe,10)}se.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let nn=null;function At(C){nn&&nn(C)}function tr(){On.stop()}function Si(){On.start()}const On=new Wp;On.setAnimationLoop(At),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(C){nn=C,fe.setAnimationLoop(C),C===null?On.stop():On.start()},fe.addEventListener("sessionstart",tr),fe.addEventListener("sessionend",Si),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(q),q=fe.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,q,I),h=We.get(C,b.length),h.init(q),b.push(h),Be.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Be),_e=this.localClippingEnabled,he=N.init(this.clippingPlanes,_e),p=Te.get(C,S.length),p.init(),S.push(p),fe.enabled===!0&&fe.isPresenting===!0){const Pe=_.xr.getDepthSensingMesh();Pe!==null&&Ji(Pe,q,-1/0,_.sortObjects)}Ji(C,q,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(te,U),R=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,R&&ie.addToRenderList(p,C),this.info.render.frame++,he===!0&&N.beginShadows();const oe=h.state.shadowsArray;z.render(oe,C,q),he===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=p.opaque,j=p.transmissive;if(h.setupLights(),q.isArrayCamera){const Pe=q.cameras;if(j.length>0)for(let ze=0,Xe=Pe.length;ze<Xe;ze++){const Ye=Pe[ze];me(le,j,C,Ye)}R&&ie.render(C);for(let ze=0,Xe=Pe.length;ze<Xe;ze++){const Ye=Pe[ze];k(p,C,Ye,Ye.viewport)}}else j.length>0&&me(le,j,C,q),R&&ie.render(C),k(p,C,q);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(_,C,q),qe.resetDefaultState(),x=-1,y=null,b.pop(),b.length>0?(h=b[b.length-1],he===!0&&N.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Ji(C,q,oe,le){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){le&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Be);const ze=re.update(C),Xe=C.material;Xe.visible&&p.push(C,ze,Xe,oe,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const ze=re.update(C),Xe=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ce.copy(ze.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(Be)),Array.isArray(Xe)){const Ye=ze.groups;for(let tt=0,st=Ye.length;tt<st;tt++){const $e=Ye[tt],ut=Xe[$e.materialIndex];ut&&ut.visible&&p.push(C,ze,ut,oe,Ce.z,$e)}}else Xe.visible&&p.push(C,ze,Xe,oe,Ce.z,null)}}const Pe=C.children;for(let ze=0,Xe=Pe.length;ze<Xe;ze++)Ji(Pe[ze],q,oe,le)}function k(C,q,oe,le){const j=C.opaque,Pe=C.transmissive,ze=C.transparent;h.setupLightsView(oe),he===!0&&N.setGlobalState(_.clippingPlanes,oe),le&&ce.viewport(D.copy(le)),j.length>0&&ge(j,q,oe),Pe.length>0&&ge(Pe,q,oe),ze.length>0&&ge(ze,q,oe),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function me(C,q,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[le.id]===void 0&&(h.state.transmissionRenderTarget[le.id]=new $s(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?No:$i,minFilter:ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const Pe=h.state.transmissionRenderTarget[le.id],ze=le.viewport||D;Pe.setSize(ze.z,ze.w);const Xe=_.getRenderTarget();_.setRenderTarget(Pe),_.getClearColor(W),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),R&&ie.render(oe);const Ye=_.toneMapping;_.toneMapping=vs;const tt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),h.setupLightsView(le),he===!0&&N.setGlobalState(_.clippingPlanes,le),ge(C,oe,le),w.updateMultisampleRenderTarget(Pe),w.updateRenderTargetMipmap(Pe),se.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let $e=0,ut=q.length;$e<ut;$e++){const bt=q[$e],Et=bt.object,Mn=bt.geometry,ht=bt.material,Ke=bt.group;if(ht.side===jn&&Et.layers.test(le.layers)){const bi=ht.side;ht.side=Cn,ht.needsUpdate=!0,Ae(Et,oe,le,Mn,ht,Ke),ht.side=bi,ht.needsUpdate=!0,st=!0}}st===!0&&(w.updateMultisampleRenderTarget(Pe),w.updateRenderTargetMipmap(Pe))}_.setRenderTarget(Xe),_.setClearColor(W,K),tt!==void 0&&(le.viewport=tt),_.toneMapping=Ye}function ge(C,q,oe){const le=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Pe=C.length;j<Pe;j++){const ze=C[j],Xe=ze.object,Ye=ze.geometry,tt=le===null?ze.material:le,st=ze.group;Xe.layers.test(oe.layers)&&Ae(Xe,q,oe,Ye,tt,st)}}function Ae(C,q,oe,le,j,Pe){C.onBeforeRender(_,q,oe,le,j,Pe),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(_,q,oe,le,C,Pe),j.transparent===!0&&j.side===jn&&j.forceSinglePass===!1?(j.side=Cn,j.needsUpdate=!0,_.renderBufferDirect(oe,q,le,j,C,Pe),j.side=Yi,j.needsUpdate=!0,_.renderBufferDirect(oe,q,le,j,C,Pe),j.side=jn):_.renderBufferDirect(oe,q,le,j,C,Pe),C.onAfterRender(_,q,oe,le,j,Pe)}function De(C,q,oe){q.isScene!==!0&&(q=pe);const le=ue.get(C),j=h.state.lights,Pe=h.state.shadowsArray,ze=j.state.version,Xe=we.getParameters(C,j.state,Pe,q,oe),Ye=we.getProgramCacheKey(Xe);let tt=le.programs;le.environment=C.isMeshStandardMaterial?q.environment:null,le.fog=q.fog,le.envMap=(C.isMeshStandardMaterial?L:M).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",Qe),tt=new Map,le.programs=tt);let st=tt.get(Ye);if(st!==void 0){if(le.currentProgram===st&&le.lightsStateVersion===ze)return Ge(C,Xe),st}else Xe.uniforms=we.getUniforms(C),C.onBeforeCompile(Xe,_),st=we.acquireProgram(Xe,Ye),tt.set(Ye,st),le.uniforms=Xe.uniforms;const $e=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=N.uniform),Ge(C,Xe),le.needsLights=Xt(C),le.lightsStateVersion=ze,le.needsLights&&($e.ambientLightColor.value=j.state.ambient,$e.lightProbe.value=j.state.probe,$e.directionalLights.value=j.state.directional,$e.directionalLightShadows.value=j.state.directionalShadow,$e.spotLights.value=j.state.spot,$e.spotLightShadows.value=j.state.spotShadow,$e.rectAreaLights.value=j.state.rectArea,$e.ltc_1.value=j.state.rectAreaLTC1,$e.ltc_2.value=j.state.rectAreaLTC2,$e.pointLights.value=j.state.point,$e.pointLightShadows.value=j.state.pointShadow,$e.hemisphereLights.value=j.state.hemi,$e.directionalShadowMap.value=j.state.directionalShadowMap,$e.directionalShadowMatrix.value=j.state.directionalShadowMatrix,$e.spotShadowMap.value=j.state.spotShadowMap,$e.spotLightMatrix.value=j.state.spotLightMatrix,$e.spotLightMap.value=j.state.spotLightMap,$e.pointShadowMap.value=j.state.pointShadowMap,$e.pointShadowMatrix.value=j.state.pointShadowMatrix),le.currentProgram=st,le.uniformsList=null,st}function Ve(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Ra.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Ge(C,q){const oe=ue.get(C);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function et(C,q,oe,le,j){q.isScene!==!0&&(q=pe),w.resetTextureUnits();const Pe=q.fog,ze=le.isMeshStandardMaterial?q.environment:null,Xe=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yr,Ye=(le.isMeshStandardMaterial?L:M).get(le.envMap||ze),tt=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,st=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),$e=!!oe.morphAttributes.position,ut=!!oe.morphAttributes.normal,bt=!!oe.morphAttributes.color;let Et=vs;le.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Et=_.toneMapping);const Mn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ht=Mn!==void 0?Mn.length:0,Ke=ue.get(le),bi=h.state.lights;if(he===!0&&(_e===!0||C!==y)){const Bn=C===y&&le.id===x;N.setState(le,C,Bn)}let dt=!1;le.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==bi.state.version||Ke.outputColorSpace!==Xe||j.isBatchedMesh&&Ke.batching===!1||!j.isBatchedMesh&&Ke.batching===!0||j.isBatchedMesh&&Ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ke.instancing===!1||!j.isInstancedMesh&&Ke.instancing===!0||j.isSkinnedMesh&&Ke.skinning===!1||!j.isSkinnedMesh&&Ke.skinning===!0||j.isInstancedMesh&&Ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ke.instancingMorph===!1&&j.morphTexture!==null||Ke.envMap!==Ye||le.fog===!0&&Ke.fog!==Pe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==N.numPlanes||Ke.numIntersection!==N.numIntersection)||Ke.vertexAlphas!==tt||Ke.vertexTangents!==st||Ke.morphTargets!==$e||Ke.morphNormals!==ut||Ke.morphColors!==bt||Ke.toneMapping!==Et||Ke.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Ke.__version=le.version);let Xn=Ke.currentProgram;dt===!0&&(Xn=De(le,q,j));let nr=!1,Pn=!1,Kr=!1;const Tt=Xn.getUniforms(),ci=Ke.uniforms;if(ce.useProgram(Xn.program)&&(nr=!0,Pn=!0,Kr=!0),le.id!==x&&(x=le.id,Pn=!0),nr||y!==C){ce.buffers.depth.getReversed()?(ve.copy(C.projectionMatrix),o_(ve),a_(ve),Tt.setValue(A,"projectionMatrix",ve)):Tt.setValue(A,"projectionMatrix",C.projectionMatrix),Tt.setValue(A,"viewMatrix",C.matrixWorldInverse);const Qi=Tt.map.cameraPosition;Qi!==void 0&&Qi.setValue(A,He.setFromMatrixPosition(C.matrixWorld)),ne.logarithmicDepthBuffer&&Tt.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Tt.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Pn=!0,Kr=!0)}if(j.isSkinnedMesh){Tt.setOptional(A,j,"bindMatrix"),Tt.setOptional(A,j,"bindMatrixInverse");const Bn=j.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Tt.setValue(A,"boneTexture",Bn.boneTexture,w))}j.isBatchedMesh&&(Tt.setOptional(A,j,"batchingTexture"),Tt.setValue(A,"batchingTexture",j._matricesTexture,w),Tt.setOptional(A,j,"batchingIdTexture"),Tt.setValue(A,"batchingIdTexture",j._indirectTexture,w),Tt.setOptional(A,j,"batchingColorTexture"),j._colorsTexture!==null&&Tt.setValue(A,"batchingColorTexture",j._colorsTexture,w));const jr=oe.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&Ee.update(j,oe,Xn),(Pn||Ke.receiveShadow!==j.receiveShadow)&&(Ke.receiveShadow=j.receiveShadow,Tt.setValue(A,"receiveShadow",j.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(ci.envMap.value=Ye,ci.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&q.environment!==null&&(ci.envMapIntensity.value=q.environmentIntensity),Pn&&(Tt.setValue(A,"toneMappingExposure",_.toneMappingExposure),Ke.needsLights&&Jt(ci,Kr),Pe&&le.fog===!0&&Se.refreshFogUniforms(ci,Pe),Se.refreshMaterialUniforms(ci,le,H,Z,h.state.transmissionRenderTarget[C.id]),Ra.upload(A,Ve(Ke),ci,w)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Ra.upload(A,Ve(Ke),ci,w),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Tt.setValue(A,"center",j.center),Tt.setValue(A,"modelViewMatrix",j.modelViewMatrix),Tt.setValue(A,"normalMatrix",j.normalMatrix),Tt.setValue(A,"modelMatrix",j.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Bn=le.uniformsGroups;for(let Qi=0,es=Bn.length;Qi<es;Qi++){const Qu=Bn[Qi];X.update(Qu,Xn),X.bind(Qu,Xn)}}return Xn}function Jt(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Xt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,q,oe){ue.get(C.texture).__webglTexture=q,ue.get(C.depthTexture).__webglTexture=oe;const le=ue.get(C);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=oe===void 0,le.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const oe=ue.get(C);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,oe=0){I=C,E=q,T=oe;let le=!0,j=null,Pe=!1,ze=!1;if(C){const Ye=ue.get(C);if(Ye.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(A.FRAMEBUFFER,null),le=!1;else if(Ye.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Ye.__hasExternalTextures)w.rebindTextures(C,ue.get(C.texture).__webglTexture,ue.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(Ye.__boundDepthTexture!==$e){if($e!==null&&ue.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(ze=!0);const st=ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[q])?j=st[q][oe]:j=st[q],Pe=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?j=ue.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[oe]:j=st,D.copy(C.viewport),F.copy(C.scissor),B=C.scissorTest}else D.copy(V).multiplyScalar(H).floor(),F.copy(Y).multiplyScalar(H).floor(),B=ae;if(ce.bindFramebuffer(A.FRAMEBUFFER,j)&&le&&ce.drawBuffers(C,j),ce.viewport(D),ce.scissor(F),ce.setScissorTest(B),Pe){const Ye=ue.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ye.__webglTexture,oe)}else if(ze){const Ye=ue.get(C.texture),tt=q||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ye.__webglTexture,oe||0,tt)}x=-1},this.readRenderTargetPixels=function(C,q,oe,le,j,Pe,ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe){ce.bindFramebuffer(A.FRAMEBUFFER,Xe);try{const Ye=C.texture,tt=Ye.format,st=Ye.type;if(!ne.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-le&&oe>=0&&oe<=C.height-j&&A.readPixels(q,oe,le,j,Ie.convert(tt),Ie.convert(st),Pe)}finally{const Ye=I!==null?ue.get(I).__webglFramebuffer:null;ce.bindFramebuffer(A.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,q,oe,le,j,Pe,ze){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe){const Ye=C.texture,tt=Ye.format,st=Ye.type;if(!ne.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=C.width-le&&oe>=0&&oe<=C.height-j){ce.bindFramebuffer(A.FRAMEBUFFER,Xe);const $e=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.bufferData(A.PIXEL_PACK_BUFFER,Pe.byteLength,A.STREAM_READ),A.readPixels(q,oe,le,j,Ie.convert(tt),Ie.convert(st),0);const ut=I!==null?ue.get(I).__webglFramebuffer:null;ce.bindFramebuffer(A.FRAMEBUFFER,ut);const bt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await r_(A,bt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Pe),A.deleteBuffer($e),A.deleteSync(bt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,oe=0){C.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1]);const le=Math.pow(2,-oe),j=Math.floor(C.image.width*le),Pe=Math.floor(C.image.height*le),ze=q!==null?q.x:0,Xe=q!==null?q.y:0;w.setTexture2D(C,0),A.copyTexSubImage2D(A.TEXTURE_2D,oe,0,0,ze,Xe,j,Pe),ce.unbindTexture()},this.copyTextureToTexture=function(C,q,oe=null,le=null,j=0){C.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,C=arguments[1],q=arguments[2],j=arguments[3]||0,oe=null);let Pe,ze,Xe,Ye,tt,st,$e,ut,bt;const Et=C.isCompressedTexture?C.mipmaps[j]:C.image;oe!==null?(Pe=oe.max.x-oe.min.x,ze=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,Ye=oe.min.x,tt=oe.min.y,st=oe.isBox3?oe.min.z:0):(Pe=Et.width,ze=Et.height,Xe=Et.depth||1,Ye=0,tt=0,st=0),le!==null?($e=le.x,ut=le.y,bt=le.z):($e=0,ut=0,bt=0);const Mn=Ie.convert(q.format),ht=Ie.convert(q.type);let Ke;q.isData3DTexture?(w.setTexture3D(q,0),Ke=A.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(w.setTexture2DArray(q,0),Ke=A.TEXTURE_2D_ARRAY):(w.setTexture2D(q,0),Ke=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,q.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,q.unpackAlignment);const bi=A.getParameter(A.UNPACK_ROW_LENGTH),dt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Xn=A.getParameter(A.UNPACK_SKIP_PIXELS),nr=A.getParameter(A.UNPACK_SKIP_ROWS),Pn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Et.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Et.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ye),A.pixelStorei(A.UNPACK_SKIP_ROWS,tt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,st);const Kr=C.isDataArrayTexture||C.isData3DTexture,Tt=q.isDataArrayTexture||q.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const ci=ue.get(C),jr=ue.get(q),Bn=ue.get(ci.__renderTarget),Qi=ue.get(jr.__renderTarget);ce.bindFramebuffer(A.READ_FRAMEBUFFER,Bn.__webglFramebuffer),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let es=0;es<Xe;es++)Kr&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ue.get(C).__webglTexture,j,st+es),C.isDepthTexture?(Tt&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ue.get(q).__webglTexture,j,bt+es),A.blitFramebuffer(Ye,tt,Pe,ze,$e,ut,Pe,ze,A.DEPTH_BUFFER_BIT,A.NEAREST)):Tt?A.copyTexSubImage3D(Ke,j,$e,ut,bt+es,Ye,tt,Pe,ze):A.copyTexSubImage2D(Ke,j,$e,ut,bt+es,Ye,tt,Pe,ze);ce.bindFramebuffer(A.READ_FRAMEBUFFER,null),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Tt?C.isDataTexture||C.isData3DTexture?A.texSubImage3D(Ke,j,$e,ut,bt,Pe,ze,Xe,Mn,ht,Et.data):q.isCompressedArrayTexture?A.compressedTexSubImage3D(Ke,j,$e,ut,bt,Pe,ze,Xe,Mn,Et.data):A.texSubImage3D(Ke,j,$e,ut,bt,Pe,ze,Xe,Mn,ht,Et):C.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,j,$e,ut,Pe,ze,Mn,ht,Et.data):C.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,j,$e,ut,Et.width,Et.height,Mn,Et.data):A.texSubImage2D(A.TEXTURE_2D,j,$e,ut,Pe,ze,Mn,ht,Et);A.pixelStorei(A.UNPACK_ROW_LENGTH,bi),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,dt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Xn),A.pixelStorei(A.UNPACK_SKIP_ROWS,nr),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pn),j===0&&q.generateMipmaps&&A.generateMipmap(Ke),ce.unbindTexture()},this.copyTextureToTexture3D=function(C,q,oe=null,le=null,j=0){return C.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,le=arguments[1]||null,C=arguments[2],q=arguments[3],j=arguments[4]||0),lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,oe,le,j)},this.initRenderTarget=function(C){ue.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),ce.unbindTexture()},this.resetState=function(){E=0,T=0,I=null,ce.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class Qs extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _s extends yn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const zh=new Ut;class gb{constructor(e,t,i=0,s=1/0){this.ray=new Vu(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(e,t=!0,i=[]){return uu(e,this,i,t),i.sort(Hh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)uu(e[s],this,i,t);return i.sort(Hh),i}}function Hh(n,e){return n.distance-e.distance}function uu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)uu(r[o],e,t,!0)}}class Vh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(cn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vb extends Ks{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);const Vr={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},$t=30,fu=12,_b=10,Pa=14,jp=5;function Va(){return`${fu}px system-ui, -apple-system, sans-serif`}function Zp(n,e,t){const i=String(e??"");if(!i)return[""];const s=i.split(/\s+/).filter(Boolean);if(s.length===0)return[""];const r=[];let o="";for(const a of s){const l=o?o+" "+a:a;!o||n.measureText(l).width<=t?o=l:(r.push(o),o=a)}return o&&r.push(o),r.length?r:[""]}function xb(n,e){return Math.max(e,n*Pa+jp*2)}function Xu(n,e){const t=new Array(e+1);t[0]=0;for(let i=0;i<e;i++)t[i+1]=t[i]+(n[i]??0);return t}function Ga(n,e){if(e<=0)return 0;let t=0,i=n.length-1;for(;t<i;){const s=t+i+1>>1;n[s]<=e?t=s:i=s-1}return t}const Jp=28;function yb(n,e){if(typeof e=="function")return e(n);const t=n.filter(s=>s!=null&&s!=="");if(e==="count")return t.length;const i=t.map(s=>Number(s)).filter(s=>!Number.isNaN(s));if(i.length===0)return null;switch(e){case"sum":return i.reduce((s,r)=>s+r,0);case"avg":return i.reduce((s,r)=>s+r,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Mb(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=Vr[e.theme]??Vr.none,{cols:a,rows:l,pinnedRows:c,rowHeight:u,scrollY:f,scrollX:d,glow:m}=e;t.clearRect(0,0,s,r),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const g=c.length*u,v=e.aggregateRow?Jp:0,p=r-$t-g-v;t.fillStyle=o.headerBg,t.fillRect(0,0,s,$t),t.textBaseline="middle",t.textAlign="left";let h=-d;for(let U=0;U<a.length;U++){const V=a[U];if(h+V.width<=0){h+=V.width;continue}if(h>=s)break;const Y=!!e.colFilters[V.colId],ae=e.sorts.findIndex(_e=>_e.colId===V.colId),Q=ae>=0,he=(V.colDef.headerName??V.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(h,0,V.width,$t),t.clip(),t.font=`bold ${_b}px system-ui, -apple-system, sans-serif`,t.fillStyle=Y?o.accent:o.textHeader,m?(t.shadowColor=o.textHeader,t.shadowBlur=10,t.fillText(he,h+8,$t/2),t.shadowBlur=4,t.fillText(he,h+8,$t/2),t.shadowBlur=0):t.fillText(he,h+8,$t/2),Q){const _e=t.measureText(he).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=o.accent;const ve=e.sorts[ae].dir==="asc"?"▲":"▼";t.fillText(e.sorts.length>1?`${ve}${ae+1}`:ve,h+8+_e+4,$t/2)}V.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=Y?o.accent:o.textHeader,t.globalAlpha=Y?1:.38,t.fillText("⌕",h+V.width-20,$t/2),t.globalAlpha=1),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(h+V.width-.5,0),t.lineTo(h+V.width-.5,$t),t.stroke(),h+=V.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,$t-.5),t.lineTo(s,$t-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,$t,s,p),t.clip();const S=e.rowHeights&&e.rowHeights.length===l.length?e.rowHeights:null,b=S?Xu(S,l.length):null,_=U=>b?b[U]:U*u,P=U=>S?S[U]:u,E=b?Ga(b,f):Math.max(0,Math.floor(f/u));let T;if(b)for(T=E;T<l.length&&_(T)<f+p;)T++;else T=Math.min(l.length,Math.ceil((f+p)/u));const I=e.selectionAnchorRow??e.selectedRow,x=e.selectionAnchorCol??e.selectedCol,y=e.selectedRow>=0&&I>=0?Math.min(e.selectedRow,I):-1,D=e.selectedRow>=0&&I>=0?Math.max(e.selectedRow,I):-1,F=e.selectedCol>=0&&x>=0?Math.min(e.selectedCol,x):-1,B=e.selectedCol>=0&&x>=0?Math.max(e.selectedCol,x):-1,W=D>y||B>F;let K=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,H=Number.NEGATIVE_INFINITY;const te=(U,V,Y,ae)=>{m?(t.shadowColor=ae,t.shadowBlur=12,t.fillText(U,V,Y),t.shadowBlur=6,t.fillText(U,V,Y),t.shadowBlur=2,t.fillText(U,V,Y),t.shadowBlur=0):t.fillText(U,V,Y)};for(let U=E;U<T;U++){const V=l[U],Y=P(U),ae=$t+_(U)-f;U%2===1&&(t.fillStyle=o.rowAlt,t.fillRect(0,ae,s,Y));const Q=U>=y&&U<=D;U===e.hoveredRow&&!Q&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,ae,s,Y)),Q&&!W&&(t.fillStyle=Jl(o.accent,.1),t.fillRect(0,ae,s,Y)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,ae+Y-.5),t.lineTo(s,ae+Y-.5),t.stroke();let he=-d;for(let _e=0;_e<a.length;_e++){const ve=a[_e];if(he+ve.width<=0){he+=ve.width;continue}if(he>=s)break;const Be=Q&&_e>=F&&_e<=B;Be&&W&&(t.fillStyle=Jl(o.accent,.14),t.fillRect(he,ae,ve.width,Y)),Be&&(he<K&&(K=he),he+ve.width>$&&($=he+ve.width),ae<Z&&(Z=ae),ae+Y>H&&(H=ae+Y));const He=e.getCellStyle(ve,V),Ce=He.color??o.text,pe=He.textAlign??"left",R=e.formatCell(ve,V);if(t.save(),t.beginPath(),t.rect(he+1,ae,ve.width-2,Y),t.clip(),t.font=Va(),t.fillStyle=Ce,t.textBaseline="middle",ve.colDef.wrap){t.textAlign="left";const O=Zp(t,R,Math.max(20,ve.width-16));let A=ae+jp+Pa/2;for(const de of O){if(A-Pa/2>=ae+Y)break;te(de,he+8,A,Ce),A+=Pa}}else{const O=pe==="right"?he+ve.width-8:he+8;t.textAlign=pe==="right"?"right":"left",te(R,O,ae+Y/2,Ce)}t.restore(),U===e.selectedRow&&_e===e.selectedCol&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(he+1.5,ae+1.5,ve.width-3,Y-3)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(he+ve.width-.5,ae),t.lineTo(he+ve.width-.5,ae+Y),t.stroke(),he+=ve.width}}if(W&&K<$&&Z<H&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(K+.5,Z+.5,$-K-1,H-Z-1)),t.restore(),c.length>0){const U=r-g-v;t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,U-.5),t.lineTo(s,U-.5),t.stroke();for(let V=0;V<c.length;V++){const Y=c[V],ae=U+V*u;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,ae,s,u);let Q=-d;for(let he=0;he<a.length;he++){const _e=a[he];if(Q+_e.width<=0){Q+=_e.width;continue}if(Q>=s)break;const ve=e.getCellStyle(_e,Y),Be=ve.color??o.text,He=ve.textAlign??"left",Ce=e.formatCell(_e,Y);t.save(),t.beginPath(),t.rect(Q+1,ae,_e.width-2,u),t.clip(),t.font=`bold ${fu}px system-ui, -apple-system, sans-serif`,t.fillStyle=Be,t.textBaseline="middle",He==="right"?(t.textAlign="right",t.fillText(Ce,Q+_e.width-8,ae+u/2)):(t.textAlign="left",t.fillText(Ce,Q+8,ae+u/2)),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(Q+_e.width-.5,ae),t.lineTo(Q+_e.width-.5,ae+u),t.stroke(),Q+=_e.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,ae+u-.5),t.lineTo(s,ae+u-.5),t.stroke()}}if(e.aggregateRow){const U=r-v;t.fillStyle=Jl(o.accent,.1),t.fillRect(0,U,s,v),t.strokeStyle=o.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,U-.5),t.lineTo(s,U-.5),t.stroke();let V=-d;for(let Y=0;Y<a.length;Y++){const ae=a[Y];if(V+ae.width<=0){V+=ae.width;continue}if(V>=s)break;const he=e.getCellStyle(ae,e.aggregateRow).textAlign??"left",_e=e.aggregateRow[ae.colId]??"";t.save(),t.beginPath(),t.rect(V+1,U,ae.width-2,v),t.clip(),t.font=`bold ${fu}px system-ui, -apple-system, sans-serif`,t.fillStyle=o.accent,t.textBaseline="middle",m&&(t.shadowColor=o.accent,t.shadowBlur=8),he==="right"?(t.textAlign="right",t.fillText(_e,V+ae.width-8,U+v/2)):(t.textAlign="left",t.fillText(_e,V+8,U+v/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.beginPath(),t.moveTo(V+ae.width-.5,U),t.lineTo(V+ae.width-.5,U+v),t.stroke(),V+=ae.width}}t.restore()}function Jl(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${s},${e})`}const ua=190,Ql=34;function Sb(n,e,t){const i=Math.max(4,Math.min(e,n-ua-4)),s=$t+6,r=t?26:0;return{box:{x:i,y:s,w:ua,h:Ql},input:{x:i+9,y:s+5,w:ua-18-r,h:Ql-10},clear:t?{x:i+ua-28,y:s,w:28,h:Ql}:null}}const ec=(n,e,t,i=0)=>n>=t.x-i&&n<=t.x+t.w+i&&e>=t.y&&e<=t.y+t.h;function fa(n,e,t,i=1){return t.clear&&ec(n,e,t.clear,4*(i-1))?"clear":ec(n,e,t.input)?"input":ec(n,e,t.box)?"inside":"outside"}function bb(n,e,t,i,s){const{box:r,input:o,clear:a}=e;n.save(),n.fillStyle="rgba(8,12,22,0.94)",n.strokeStyle=s.accent,n.lineWidth=1,n.beginPath(),n.roundRect(r.x+.5,r.y+.5,r.w-1,r.h-1,4),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.05)",n.beginPath(),n.roundRect(o.x,o.y,o.w,o.h,3),n.fill(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.font=Va(),n.textBaseline="middle";const l=o.y+o.h/2+1,c=5;if(t){n.fillStyle=s.text;const u=n.measureText(t).width,f=u>o.w-2*c-2?o.x+o.w-c-2-u:o.x+c;n.fillText(t,f,l),i&&(n.fillStyle=s.accent,n.fillRect(Math.min(f+u+1,o.x+o.w-c),o.y+4,1.5,o.h-8))}else n.fillStyle=s.textHeader,n.fillText("Filter…",o.x+c,l),i&&(n.fillStyle=s.accent,n.fillRect(o.x+c,o.y+4,1.5,o.h-8));n.restore(),a&&(n.save(),n.font=Va(),n.textBaseline="middle",n.textAlign="center",n.fillStyle=s.textHeader,n.fillText("✕",a.x+a.w/2,a.y+a.h/2+1),n.restore())}function wb(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r;if(t<0){const c=.5*r,f=1/(1-2*(.5*(1+c)*c)),d=(i+i*(1+o)*o*-1)*f,m=(s+s*(1+o)*o*-1)*f;return[.5+d,.5+m]}const a=i*(1+o)*o,l=s*(1+o)*o;return[n+a,e+l]}function Qp(n,e,t,i,s,r=t,o=i){const a=n/t,l=1-e/i,[c,u]=wb(a,l,s);return c<0||c>1||u<0||u>1?[-1,-1]:[c*r,(1-u)*o]}function tc(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function Eb(n,e,t,i=1){return n>=e+t-24*i&&n<e+t}function Gh(n,e,t,i=1){const s=e+t;return n>=s-6*i&&n<=s+1*i}function Tb(n,e,t,i,s,r,o,a,l,c=!1,u){const f=n+l;let d=-1,m=0;for(let S=0;S<t.length;S++){if(f>=m&&f<m+t[S].width){d=S;break}m+=t[S].width}if(e<$t)return{area:"header",colIdx:d,rowIdx:-1};const g=c?Jp:0;if(g>0&&e>=o-g)return{area:"agg",colIdx:d,rowIdx:-1};const v=a*s;if(v>0&&e>=o-v-g){const S=Math.floor((e-(o-v-g))/s);return{area:"pinned",colIdx:d,rowIdx:S}}const p=e-$t+r,h=u&&u.length===i?Ga(Xu(u,i),p):Math.floor(p/s);return h>=0&&h<i?{area:"body",colIdx:d,rowIdx:h}:{area:"none",colIdx:-1,rowIdx:-1}}function qs(n){return n/45*.55}function em(n){const e=Math.abs(qs(n));if(e===0)return 1;if(n<0){const i=.5*e;return 1/(1-2*(.5*(1+i)*i))}const t=.25*e;return 1+2*(.5*(1+t)*t)}const Ab=500,tm=Ab/2,hu=1.6,nm=`
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
`;function rm(){return{uMouseUV:{value:new at(-999,-999)},uLensR:{value:0},uLensZoom:{value:hu},uLensTint:{value:new gt(7268263)},uAspect:{value:1}}}const jt={x:-999,y:-999};function om(n,e,t,i,s){const r=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=r&&s>0?tm/s:0,n.uniforms.uAspect.value=s>0?i/s:1}function ko(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const Cb=`
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
`;function Db(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r,a=(1+o)*o*Math.sign(t);let l=i+i*a,c=s+s*a;if(t<0){const u=.5*r,f=.5*(1+u)*u;l/=1-2*f,c/=1-2*f}return{x:.5+l,y:.5+c}}function Lb(n,e,t,i,s,r){if(!i||t.x===jt.x||r<=0)return{x:n,y:e};const o=s/r,a=tm/r,l=(n-t.x)*o,c=e-t.y,u=Math.hypot(l,c);if(u>=a)return{x:n,y:e};const f=u/a,d=Math.min(Math.max((f-.88)/(1-.88),0),1),m=d*d*(3-2*d),g=hu+(1-hu)*m;return{x:t.x+l/g/o,y:t.y+c/g}}class Zi{constructor(e){Oe(this,"canvas");Oe(this,"material");Oe(this,"mode");Oe(this,"dpr",1);Oe(this,"logicalW",0);Oe(this,"logicalH",0);Oe(this,"screenW",0);Oe(this,"screenH",0);Oe(this,"texture");Oe(this,"painter");Oe(this,"maxDpr");Oe(this,"look",{curvature:0,scanlines:!0,vignette:!0,magnify:!1});Oe(this,"mouse",{x:jt.x,y:jt.y});Oe(this,"anisotropy",1);this.painter=e.paint,this.mode=e.mode??"screen",this.maxDpr=e.maxDpr??2,this.canvas=document.createElement("canvas"),this.texture=this.makeTexture(),this.material=new Gn({uniforms:{uTex:{value:this.texture},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...rm()},vertexShader:this.mode==="world"?Rb:Cb,fragmentShader:Pb,transparent:!0,side:this.mode==="world"?jn:Yi})}setAnisotropy(e){this.anisotropy=Math.max(1,e),this.texture.anisotropy=this.anisotropy,this.texture.needsUpdate=!0}makeTexture(){const e=new _s(this.canvas);return e.magFilter=Zt,this.mode==="world"?(e.generateMipmaps=!0,e.minFilter=ps,e.anisotropy=this.anisotropy):e.minFilter=Zt,e}resize(e,t,i=window.devicePixelRatio||1){if(!e||!t)return!1;const s=Math.min(i,this.maxDpr),r=Math.round(e*s),o=Math.round(t*s);return this.canvas.width===r&&this.canvas.height===o&&this.dpr===s?!1:(this.dpr=s,this.logicalW=e,this.logicalH=t,this.canvas.width=r,this.canvas.height=o,this.texture.dispose(),this.texture=this.makeTexture(),this.material.uniforms.uTex.value=this.texture,!0)}setLook(e){this.look={...this.look,...e}}setScreenSize(e,t){this.screenW=e,this.screenH=t}setLens(e){this.mouse.x=e?e.x:jt.x,this.mouse.y=e?e.y:jt.y}syncUniforms(){const e=this.material.uniforms;e.uStrength.value=qs(this.look.curvature),e.uScanlines.value=this.look.scanlines?1:0,e.uVignette.value=this.look.vignette?1:0,om(this.material,this.look.magnify,this.mouse,this.screenW||this.logicalW||this.canvas.width,this.screenH||this.logicalH||this.canvas.height)}paint(e){this.canvas.width&&(this.painter(this.canvas,{dpr:this.dpr,glow:e}),this.texture.needsUpdate=!0)}paintOnly(e){this.canvas.width&&this.painter(this.canvas,{dpr:this.dpr,glow:e})}contentPoint(e,t){const i=Lb(e,t,this.mouse,this.look.magnify,this.screenW||this.logicalW,this.screenH||this.logicalH),s=Db(i.x,i.y,qs(this.look.curvature));return s.x<0||s.x>1||s.y<0||s.y>1?null:{x:s.x*this.logicalW,y:(1-s.y)*this.logicalH}}dispose(){this.texture.dispose(),this.material.dispose()}}const Ib=600;function am(n){const e=Qa(!0);return e.run(()=>Ub(n,e))}function Ub(n,e){var On,Ji;const{emit:t,host:i}=n,s=be(((On=n.rowData)==null?void 0:On.call(n))??[]),r=be(((Ji=n.pinnedBottomRowData)==null?void 0:Ji.call(n))??[]),o=be(""),a=be([]),l=Tr({}),c=Tr({}),u=Tr(new Set),f=be(0),d=be(0),m=be(0),g=be(0),v=be(0),p=be(0),h=be(0),S=be(-1),b=be(null),_=be(null),P=be(null),E=be(""),T=be(0);let I=null;const x=be(!0);let y=null;je(P,k=>{var me;y&&(clearInterval(y),y=null),k?(x.value=!0,y=setInterval(()=>{x.value=!x.value,i.redraw()},530),dn(()=>{var ge;return(ge=i.focusFilterInput)==null?void 0:ge.call(i)})):(I=null,(me=i.blurFilterInput)==null||me.call(i)),i.redraw()});function D(k){return k.colId??k.field??(k.headerName?k.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const F=nt(()=>{var me;const k=((me=n.defaultColDef)==null?void 0:me.call(n))??{};return n.columnDefs().filter(ge=>!u.has(D(ge))).map(ge=>{const Ae=D(ge),De={...k,...ge};return{colId:Ae,colDef:De,width:c[Ae]??De.width??100}})}),B=nt(()=>{const k=d.value;if(!k)return F.value;const me=F.value.reduce((De,Ve)=>De+Ve.width,0);if(!me||me>=k)return F.value;const ge=k/me;let Ae=0;return F.value.map((De,Ve)=>{const et=Ve===F.value.length-1?k-Ae:Math.max(8,Math.round(De.width*ge));return Ae+=et,{...De,width:et}})}),W=nt(()=>{const k=B.value.reduce((me,ge)=>me+ge.width,0);return Math.max(0,k-d.value)});function K(k,me){if(me.colDef.valueGetter)return me.colDef.valueGetter({data:k,colDef:me.colDef});if(me.colDef.field)return k[me.colDef.field]}function $(k,me){const ge=K(me,k);return k.colDef.valueFormatter?k.colDef.valueFormatter({value:ge,data:me,colDef:k.colDef})??"":k.colDef.cellRenderer?(k.colDef.cellRenderer({value:ge,data:me,colDef:k.colDef})??"").replace(/<[^>]+>/g,""):ge==null?"":String(ge)}function Z(k,me){return k.colDef.cellStyle?typeof k.colDef.cellStyle=="function"?k.colDef.cellStyle({value:K(me,k),data:me,colDef:k.colDef})??{}:k.colDef.cellStyle:{}}function H(){return n.columnDefs().map((k,me)=>({d:k,i:me})).filter(({d:k})=>k.sort).sort((k,me)=>(k.d.sortIndex??k.i)-(me.d.sortIndex??me.i)).map(({d:k})=>({colId:D(k),dir:k.sort}))}const te=nt(()=>{f.value;let k=s.value;const me=o.value.trim().toLowerCase();me&&(k=k.filter(Ae=>F.value.some(De=>String(K(Ae,De)??"").toLowerCase().includes(me))));for(const[Ae,De]of Object.entries(l)){if(!De)continue;const Ve=F.value.find(Ge=>Ge.colId===Ae);if(Ve)if(De.startsWith("__eq__")){const Ge=De.slice(6).toLowerCase();k=k.filter(et=>String(K(et,Ve)??"").toLowerCase()===Ge)}else{const Ge=De.toLowerCase();k=k.filter(et=>String(K(et,Ve)??"").toLowerCase().includes(Ge))}}const ge=a.value.map(({colId:Ae,dir:De})=>({col:F.value.find(Ve=>Ve.colId===Ae),dir:De})).filter(Ae=>!!Ae.col);return ge.length&&(k=[...k].sort((Ae,De)=>{for(const{col:Ve,dir:Ge}of ge){const et=K(Ae,Ve),Jt=K(De,Ve);let Xt=0;if(Ve.colDef.comparator?Xt=Ve.colDef.comparator(et,Jt):typeof et=="number"&&typeof Jt=="number"?Xt=et-Jt:Xt=String(et??"").localeCompare(String(Jt??""),void 0,{numeric:!0}),Xt)return Ge==="asc"?Xt:-Xt}return 0})),k});let U=null;function V(){if(typeof document>"u")return null;U||(U=document.createElement("canvas"));const k=U.getContext("2d");return k&&(k.font=Va()),k}const Y=nt(()=>B.value.some(k=>k.colDef.wrap)),ae=nt(()=>{if(!Y.value)return null;const k=V();if(!k)return null;const me=B.value.filter(Ae=>Ae.colDef.wrap),ge=n.rowHeight();return te.value.map(Ae=>{let De=1;for(const Ve of me){const Ge=Zp(k,$(Ve,Ae),Math.max(20,Ve.width-16));Ge.length>De&&(De=Ge.length)}return xb(De,ge)})}),Q=nt(()=>ae.value?Xu(ae.value,te.value.length):null),he=nt(()=>Q.value?Q.value[te.value.length]:te.value.length*n.rowHeight()),_e=nt(()=>{const k=r.value.length*n.rowHeight();return Math.max(0,m.value-$t-k)}),ve=nt(()=>Math.max(0,he.value-_e.value)),Be=nt(()=>Math.max(1,Math.floor(_e.value/n.rowHeight()))),He=nt(()=>{const k=te.value.length;if(k===0)return 0;const me=Q.value?Ga(Q.value,p.value):Math.floor(p.value/n.rowHeight());return Math.min(k-1,me)}),Ce=nt(()=>{const k=te.value.length;return k===0?0:Q.value?Math.min(k-1,Ga(Q.value,p.value+_e.value-1)):Math.min(k-1,He.value+Be.value-1)}),pe=nt(()=>{const k=F.value.filter(De=>De.colDef.aggFunc!=null);if(k.length===0)return null;const me=te.value,ge={};for(const De of k){const Ve=me.map(et=>K(et,De)),Ge=yb(Ve,De.colDef.aggFunc);if(Ge==null){ge[De.colId]="";continue}ge[De.colId]=De.colDef.aggValueFormatter?De.colDef.aggValueFormatter(Ge):String(Ge)}const Ae=k[0].colId;return ge[Ae]===""&&(ge[Ae]="Σ"),ge});je(te,()=>{p.value=0,b.value=null}),je(W,()=>{h.value=Math.min(h.value,W.value)}),je(ve,()=>{p.value=Math.min(p.value,ve.value)}),je([te,()=>r.value,B,p,S,b],()=>dn(()=>i.redraw())),je(b,k=>{if(!k)return;const me=te.value[k.row],ge=B.value[k.col];me&&ge&&t("cell-selected",{data:me,row:k.row,col:k.col,colId:ge.colId})});function R(k,me,ge,Ae){g.value=ge,v.value=Ae,d.value=k,m.value=me,h.value=Math.max(0,Math.min(W.value,h.value)),p.value=Math.max(0,Math.min(ve.value,p.value))}function O(k){const me=Q.value,ge=me?me[k]:k*n.rowHeight(),Ae=me?me[k+1]:ge+n.rowHeight();ge<p.value?p.value=ge:Ae>p.value+_e.value&&(p.value=Math.min(ve.value,Ae-_e.value))}function A(k){var De;if(!d.value)return;let me=0;for(let Ve=0;Ve<k;Ve++)me+=B.value[Ve].width;const ge=((De=B.value[k])==null?void 0:De.width)??0,Ae=me-h.value;Ae<0?h.value=Math.max(0,me):Ae+ge>d.value&&(h.value=Math.min(W.value,me+ge-d.value))}function de(){p.value=Math.max(0,p.value-_e.value),i.redraw()}function se(){p.value=Math.min(ve.value,p.value+_e.value),i.redraw()}let ne=!1,ce="",xe=0,ue=0,w=1,M=!1,L=!1,G=0,J=0,re=0,we=0,Se=!1;function Te(k,me,ge=1){var Ae;ne=!0,ce=k,xe=me,w=ge,ue=((Ae=B.value.find(De=>De.colId===k))==null?void 0:Ae.width)??100,M=!1}function We(k,me){L=!0,Se=!1,G=k,J=me,re=h.value,we=p.value}function N(k,me){const ge=G-k,Ae=J-me;(Math.abs(ge)>4||Math.abs(Ae)>4)&&(Se=!0),h.value=Math.max(0,Math.min(W.value,re+ge)),p.value=Math.max(0,Math.min(ve.value,we+Ae)),i.redraw()}function z(){L&&(Se&&(M=!0),L=!1)}function ie(k,me){if(L){N(k,me);return}if(!ne)return;const ge=d.value,Ae=Math.max(30,ue+(k-xe)*w),De=F.value.filter(Ge=>Ge.colId!==ce).reduce((Ge,et)=>Ge+et.width,0),Ve=ge-Ae;Ve>10&&(c[ce]=Math.max(10,Math.round(Ae*De/Ve))),i.redraw()}function Ee(){z(),ne&&(ne=!1,M=!0,t("column-resized"))}function ye(k,me){return Tb(k,me,B.value,te.value.length,n.rowHeight(),p.value,m.value,r.value.length,h.value,pe.value!==null,ae.value??void 0)}let Ne=0;function Ie(k,me,ge){P.value=null;const Ae=Date.now();if(k!==0){Ne=Ae,h.value=Math.max(0,Math.min(W.value,h.value+k)),i.redraw();return}if(ge&&me!==0){Ne=Ae,h.value=Math.max(0,Math.min(W.value,h.value+me)),i.redraw();return}Ae-Ne<Ib||(p.value=Math.max(0,Math.min(ve.value,p.value+me)),i.redraw())}function qe(k){if(k.cx<0)return S.value=-1,i.redraw(),null;if(P.value&&I){const Ae=fa(k.cx,k.cy,I,k.hitScale);if(Ae!=="outside")return S.value=-1,i.redraw(),Ae==="clear"?"pointer":"text"}const me=ye(k.cx,k.cy);S.value=me.area==="body"?me.rowIdx:-1;let ge;if(me.area==="header"&&me.colIdx>=0){const Ae=B.value[me.colIdx],De=tc(me.colIdx,B.value),Ve=k.cx+h.value;ge=Ae&&Gh(Ve,De,Ae.width,k.hitScale)?"col-resize":"pointer"}else me.area==="body"?ge="pointer":ge="default";return i.redraw(),ge}function X(){S.value=-1,i.redraw()}function Re(k,me,ge){if(k.cx<0||P.value&&I&&fa(k.cx,k.cy,I,k.hitScale)!=="outside")return;if(k.cy>=$t){We(me,ge);return}const Ae=k.cx+h.value;for(let De=0;De<B.value.length;De++){const Ve=B.value[De],Ge=tc(De,B.value);if(Ve.colDef.resizable!==!1&&Gh(Ae,Ge,Ve.width,k.hitScale)){Te(Ve.colId,me,k.hitScale);return}}}function fe(k,me){var De,Ve,Ge;const ge={stopPropagation:!1};if(M)return M=!1,ge;if(ne)return ge;if(k.cx<0)return P.value=null,ge;if(P.value&&I){const et=fa(k.cx,k.cy,I,k.hitScale);if(et==="clear")return _t(),ge;if(et!=="outside")return(De=i.focusFilterInput)==null||De.call(i),ge;P.value=null}const Ae=ye(k.cx,k.cy);if(Ae.area==="header"&&Ae.colIdx>=0){const et=B.value[Ae.colIdx],Jt=tc(Ae.colIdx,B.value),Xt=k.cx+h.value;if(et.colDef.filter&&Eb(Xt,Jt,et.width,k.hitScale))ge.stopPropagation=!0,P.value===et.colId?P.value=null:(P.value=et.colId,E.value=(Ve=l[et.colId])!=null&&Ve.startsWith("__eq__")?l[et.colId].slice(6):l[et.colId]??"",T.value=Math.max(0,Jt-h.value));else if(et.colDef.sortable!==!1){P.value=null;const C=a.value.find(oe=>oe.colId===et.colId),q=C?C.dir==="asc"?"desc":null:"asc";me.shiftKey?a.value=C?q?a.value.map(oe=>oe.colId===et.colId?{colId:oe.colId,dir:q}:oe):a.value.filter(oe=>oe.colId!==et.colId):[...a.value,{colId:et.colId,dir:"asc"}]:a.value=q?[{colId:et.colId,dir:q}]:[],t("sort-changed")}return ge}if(P.value=null,Ae.area==="body"&&Ae.rowIdx>=0&&Ae.colIdx>=0){const et=Ae.rowIdx;me.shiftKey&&b.value?(_.value||(_.value={...b.value}),b.value={row:et,col:Ae.colIdx}):(b.value={row:et,col:Ae.colIdx},_.value={row:et,col:Ae.colIdx}),(Ge=i.focusCanvas)==null||Ge.call(i);const Jt=te.value[et],Xt=B.value[Ae.colIdx];Jt&&Xt&&(t("row-clicked",{data:Jt,event:me}),t("cell-selected",{data:Jt,row:et,col:Ae.colIdx,colId:Xt.colId}))}return ge}function Me(k){P.value&&(k&&I&&k.cx>=0&&fa(k.cx,k.cy,I,k.hitScale)!=="outside"||(P.value=null))}function Fe(k){const ge=B.value.length-1,Ae=te.value.length-1;if(!b.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(k.key)&&(k.preventDefault(),b.value={row:He.value,col:0},_.value={row:He.value,col:0});return}let{row:De,col:Ve}=b.value;const Ge=(et,Jt,Xt=!1)=>{De=Math.max(0,Math.min(Ae,et)),Ve=Math.max(0,Math.min(ge,Jt)),b.value={row:De,col:Ve},Xt||(_.value={row:De,col:Ve}),O(De),A(Ve)};switch(k.key){case"ArrowDown":k.preventDefault(),Ge(De+1,Ve,k.shiftKey);break;case"ArrowUp":k.preventDefault(),Ge(De-1,Ve,k.shiftKey);break;case"ArrowRight":k.preventDefault(),k.shiftKey?Ge(De,Ve+1,!0):Ve<ge?Ge(De,Ve+1):Ge(De+1,0);break;case"ArrowLeft":k.preventDefault(),k.shiftKey?Ge(De,Ve-1,!0):Ve>0?Ge(De,Ve-1):Ge(De-1,ge);break;case"Tab":k.preventDefault(),k.shiftKey?Ve>0?Ge(De,Ve-1):Ge(De-1,ge):Ve<ge?Ge(De,Ve+1):Ge(De+1,0);break;case"Enter":k.preventDefault(),k.shiftKey?Ge(De-1,Ve):Ge(De+1,Ve);break;case"Home":k.preventDefault(),k.ctrlKey||k.metaKey?Ge(0,0,k.shiftKey):Ge(De,0,k.shiftKey);break;case"End":k.preventDefault(),k.ctrlKey||k.metaKey?Ge(Ae,ge,k.shiftKey):Ge(De,ge,k.shiftKey);break;case"PageDown":k.preventDefault(),Ge(Math.min(Ae,De+Be.value),Ve,k.shiftKey);break;case"PageUp":k.preventDefault(),Ge(Math.max(0,De-Be.value),Ve,k.shiftKey);break;case"Escape":b.value=null,_.value=null;break;case"c":case"C":(k.ctrlKey||k.metaKey)&&(k.preventDefault(),Ue());break}}function Ue(){var Xt;if(!b.value)return;const k=B.value,me=te.value,ge=_.value??b.value,Ae=Math.min(ge.row,b.value.row),De=Math.max(ge.row,b.value.row),Ve=Math.min(ge.col,b.value.col),Ge=Math.max(ge.col,b.value.col),et=[];for(let C=Ae;C<=De;C++){const q=me[C];if(!q)continue;const oe=[];for(let le=Ve;le<=Ge;le++){const j=k[le];j&&oe.push($(j,q).replace(/[\t\r\n]+/g," "))}et.push(oe.join("	"))}const Jt=et.join(`
`);(Xt=navigator.clipboard)==null||Xt.writeText(Jt).catch(()=>{})}function Qe(k){E.value=k,k?l[P.value]=k:delete l[P.value],t("filter-changed")}function _t(){P.value&&delete l[P.value],E.value="",P.value=null,t("filter-changed")}function Pt(){P.value=null}function lt(k,me){if(!P.value||!k.width)return;const ge=k.getContext("2d");if(!ge)return;ge.setTransform(me,0,0,me,0,0),I=Sb(k.width/me,T.value,!!E.value);const Ae=Vr[n.theme()]??Vr.none;bb(ge,I,E.value,x.value,Ae)}function nn(k,{dpr:me,glow:ge}){var Ae,De,Ve,Ge;Mb(k,{cols:B.value,rows:te.value,pinnedRows:r.value,rowHeight:n.rowHeight(),rowHeights:ae.value??void 0,scrollY:p.value,scrollX:h.value,theme:n.theme(),glow:ge,sorts:a.value,colFilters:l,hoveredRow:S.value,selectedRow:((Ae=b.value)==null?void 0:Ae.row)??-1,selectedCol:((De=b.value)==null?void 0:De.col)??-1,selectionAnchorRow:((Ve=_.value)==null?void 0:Ve.row)??-1,selectionAnchorCol:((Ge=_.value)==null?void 0:Ge.col)??-1,formatCell:$,getCellStyle:Z,aggregateRow:pe.value,dpr:me}),lt(k,me)}const At={setGridOption(k,me){k==="rowData"?s.value=me:k==="pinnedBottomRowData"?r.value=me:k==="quickFilterText"&&(o.value=me)},getColumnState(){return n.columnDefs().map(k=>{var ge;const me=D(k);return{colId:me,hide:u.has(me),sort:((ge=a.value.find(Ae=>Ae.colId===me))==null?void 0:ge.dir)??null,sortIndex:a.value.some(Ae=>Ae.colId===me)?a.value.findIndex(Ae=>Ae.colId===me):null,width:c[me]??k.width}})},applyColumnState({state:k}){const me=k.filter(ge=>ge.sort).sort((ge,Ae)=>(ge.sortIndex??0)-(Ae.sortIndex??0));me.length&&(a.value=me.map(ge=>({colId:ge.colId,dir:ge.sort})));for(const ge of k)ge.hide===!0&&u.add(ge.colId),ge.hide===!1&&u.delete(ge.colId),ge.width&&(c[ge.colId]=ge.width)},setFilterModel(k){for(const me of Object.keys(l))delete l[me];if(k)for(const[me,ge]of Object.entries(k))(ge==null?void 0:ge.type)==="equals"?l[me]=`__eq__${ge.filter}`:ge!=null&&ge.filter&&(l[me]=ge.filter)},getFilterModel(){const k={};for(const[me,ge]of Object.entries(l))ge&&(k[me]=ge.startsWith("__eq__")?{type:"equals",filter:ge.slice(6)}:{type:"contains",filter:ge});return k},async setColumnFilterModel(k,me){me?me.type==="equals"?l[k]=`__eq__${me.filter}`:l[k]=me.filter??"":delete l[k]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:k="export.csv"}={}){const me=F.value,ge=me.map(Ge=>Ge.colDef.headerName??Ge.colId).join(","),Ae=te.value.map(Ge=>me.map(et=>`"${String($(et,Ge)).replace(/"/g,'""')}"`).join(",")),De=new Blob([[ge,...Ae].join(`
`)],{type:"text/csv"}),Ve=URL.createObjectURL(De);Object.assign(document.createElement("a"),{href:Ve,download:k}).click(),URL.revokeObjectURL(Ve)},resize(){var k;(k=i.resize)==null||k.call(i)},getSortModel(){return a.value.map(k=>({colId:k.colId,sort:k.dir}))},setSortModel(k){a.value=k.map(me=>({colId:me.colId,dir:me.sort}))},getScrollY(){return p.value},setScrollY(k){dn(()=>{p.value=Math.max(0,Math.min(ve.value,k))})},resetColumnState(){u.clear();for(const k of n.columnDefs())k.hide&&u.add(D(k));a.value=H();for(const k of Object.keys(c))delete c[k];for(const k of Object.keys(l))delete l[k];o.value="",p.value=0,b.value=null,P.value=null}};function tr(){var k,me;for(const ge of n.columnDefs())ge.hide&&u.add(D(ge));a.value.length||(a.value=H()),s.value=((k=n.rowData)==null?void 0:k.call(n))??[],r.value=((me=n.pinnedBottomRowData)==null?void 0:me.call(n))??[]}function Si(){y&&(clearInterval(y),y=null),e.stop()}return{scrollX:h,scrollY:p,maxScrollX:W,maxScrollY:ve,filteredRows:te,displayCols:B,resolvedCols:F,aggregateRow:pe,rowHeights:ae,firstVisibleRow:He,lastVisibleRow:Ce,visibleRowCount:Be,selectedCell:b,selectionAnchor:_,hoveredRow:S,activeFilter:P,filterPopupValue:E,caretOn:x,canvasW:d,canvasH:m,screenW:g,screenH:v,sortState:a,colFilters:l,formatCell:$,getCellValue:K,hit:ye,get resizing(){return ne},get panning(){return L},setViewport:R,pageUp:de,pageDown:se,ensureRowVisible:O,ensureColVisible:A,wheel:Ie,hover:qe,leave:X,pointerDown:Re,click:fe,docClick:Me,keyDown:Fe,panStart:We,panMove:N,panEnd:z,globalMove:ie,globalUp:Ee,setFilterText:Qe,clearFilter:_t,closeFilter:Pt,paint:nn,api:At,init:tr,dispose:Si}}const Fb=["value"],Nb=["disabled"],Ob=["disabled"],Bb=28,kb=ai({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},bendField:{type:Boolean,default:!0}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,s=be(null),r=am({columnDefs:()=>t.columnDefs,defaultColDef:()=>t.defaultColDef,rowData:()=>t.rowData,pinnedBottomRowData:()=>t.pinnedBottomRowData,rowHeight:()=>t.rowHeight,theme:()=>t.theme,emit:i,host:{redraw:()=>K(),resize:()=>W(),focusCanvas:()=>{var L;return(L=_.value)==null?void 0:L.focus()},focusFilterInput:()=>{var L;return(L=s.value)==null?void 0:L.focus()},blurFilterInput:()=>{var L;return(L=s.value)==null?void 0:L.blur()}}}),{scrollY:o,maxScrollY:a,filteredRows:l,displayCols:c,selectedCell:u,firstVisibleRow:f,lastVisibleRow:d,activeFilter:m,filterPopupValue:g,formatCell:v,pageUp:p,pageDown:h,clearFilter:S}=r,b=be(null),_=be(null),P=zi("cathodeResetTick",be(0));je(P,()=>se());let E=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),T=null,I=!1;function x(){if(T){try{T.forceContextLoss()}catch{}try{T.dispose()}catch{}T=null}}let y,D;const F=new Zi({paint:(L,{dpr:G,glow:J})=>r.paint(L,{dpr:G,glow:J})});function B(){if(!(!_.value||!b.value)){try{T=new Js({canvas:_.value,antialias:!1,alpha:!0})}catch{I=!0}if(!I&&!T.getContext()&&(T.dispose(),T=null,I=!0),I){W();return}T.setPixelRatio(1),T.setClearColor(0,0),y=new Qs,D=new Zs(-1,1,1,-1,0,1),y.add(new Bt(new en(2,2),F.material)),W()}}function W(){if(!b.value||!T&&!I)return;const L=b.value.clientWidth,G=b.value.clientHeight-(t.pagination?Bb:0);if(!L||!G)return;const J=t.bendField?Math.round(L*em(t.curvature)):L;F.resize(J,G),F.setScreenSize(L,G),E=F.dpr,r.setViewport(J,G,L,G),T?(T.setPixelRatio(E),T.setSize(L,G)):_.value&&(_.value.width=Math.round(L*E),_.value.height=Math.round(G*E),_.value.style.width=L+"px",_.value.style.height=G+"px"),K()}function K(){if(!F.canvas.width)return;if(I){if(!_.value)return;F.paintOnly(!1);const G=F.canvas,J=_.value.getContext("2d");J&&J.drawImage(G,0,0,G.width,G.height,0,0,_.value.width,_.value.height);return}if(!T)return;const L=t.theme==="paper";F.setLook({curvature:t.curvature,scanlines:t.scanlines&&!L,vignette:!L,magnify:t.magnify}),F.syncUniforms(),F.paint(t.glow),T.render(y,D)}function $(L,G){if(!_.value)return[-1,-1];const J=_.value.getBoundingClientRect(),re=L-J.left,we=G-J.top,Se=J.width,Te=J.height,We=qs(t.curvature),[N,z]=Qp(re,we,Se,Te,We,F.canvas.width/E||Se,F.canvas.height/E||Te);return N<0?[-1,-1]:[N,z]}function Z(L){return $(L.clientX,L.clientY)}function H(L){if(!_.value)return 1;const[G]=$(L.clientX-4,L.clientY),[J]=$(L.clientX+4,L.clientY);return G<0||J<0?1:Math.max(1,Math.abs(J-G)/8)}function te(L){const[G,J]=Z(L);return{cx:G,cy:J,hitScale:H(L)}}function U(L){r.wheel(L.deltaX,L.deltaY,L.shiftKey)}function V(L){if(r.resizing)return;t.magnify&&_.value&&F.setLens(ko(L,_.value));const G=r.hover(te(L));G&&_.value&&(_.value.style.cursor=G)}function Y(){F.setLens(null),r.leave()}function ae(L){r.pointerDown(te(L),L.clientX,L.clientY)}function Q(L){r.click(te(L),L).stopPropagation&&L.stopPropagation()}function he(L){m.value&&r.docClick(L.target===_.value?te(L):null)}function _e(L){r.globalMove(L.clientX,L.clientY)}function ve(){r.globalUp()}function Be(L){L.touches.length===1&&r.panStart(L.touches[0].clientX,L.touches[0].clientY)}function He(L){!r.panning||L.touches.length!==1||(L.preventDefault(),r.panMove(L.touches[0].clientX,L.touches[0].clientY))}function Ce(){r.panEnd()}function pe(L){r.keyDown(L)}function R(L){r.setFilterText(L.target.value)}je(()=>t.theme,()=>K()),je(()=>[t.curvature,t.bendField],()=>dn(W)),je(()=>t.scanlines,()=>K()),je(()=>t.glow,()=>K()),je(()=>t.magnify,L=>{L||F.setLens(null),K()});let O=null,A=null,de=0;function se(){cancelAnimationFrame(de),de=requestAnimationFrame(W)}function ne(L){L.preventDefault()}function ce(){T==null||T.dispose(),T=null,I=!1,B()}Rn(()=>{r.init(),document.addEventListener("click",he),document.addEventListener("mousemove",_e),document.addEventListener("mouseup",ve),dn(()=>{var L;B(),_.value&&(_.value.addEventListener("webglcontextlost",ne),_.value.addEventListener("webglcontextrestored",ce)),b.value&&(O=new ResizeObserver(()=>W()),O.observe(b.value),A=new IntersectionObserver(G=>{G.some(J=>J.isIntersecting)&&se()}),A.observe(b.value)),window.addEventListener("resize",se),(L=window.visualViewport)==null||L.addEventListener("resize",se),i("grid-ready",{api:r.api})})}),Wn(()=>{var L,G,J;document.removeEventListener("click",he),document.removeEventListener("mousemove",_e),document.removeEventListener("mouseup",ve),(L=_.value)==null||L.removeEventListener("webglcontextlost",ne),(G=_.value)==null||G.removeEventListener("webglcontextrestored",ce),O==null||O.disconnect(),A==null||A.disconnect(),window.removeEventListener("resize",se),(J=window.visualViewport)==null||J.removeEventListener("resize",se),cancelAnimationFrame(de),x(),F.dispose(),r.dispose()});const xe=nt(()=>Vr[t.theme]??Vr.none),ue=nt(()=>({background:xe.value.headerBg,borderTop:`1px solid ${xe.value.border}`,color:xe.value.text})),w=nt(()=>({background:xe.value.bg})),M=nt(()=>xe.value.accent);return(L,G)=>{var J,re;return Je(),mt("div",{ref_key:"wrapEl",ref:b,class:"cathode-wrap",style:Un(w.value)},[Le("canvas",{ref_key:"canvasEl",ref:_,class:"cathode-canvas",tabindex:"0",onWheel:ks(U,["prevent"]),onMousemove:V,onMouseleave:Y,onMousedown:ae,onClick:Q,onKeydown:pe,onTouchstartPassive:Be,onTouchmove:He,onTouchend:Ce,onTouchcancel:Ce},null,544),xt(m)?(Je(),mt("input",{key:0,ref_key:"filterGhostEl",ref:s,class:"cathode-filter-ghost","aria-label":"Filter column",value:xt(g),autofocus:"",onInput:R,onKeydown:[G[0]||(G[0]=kf((...we)=>xt(S)&&xt(S)(...we),["escape"])),G[1]||(G[1]=kf(we=>xt(r).closeFilter(),["enter"]))]},null,40,Fb)):Kt("",!0),n.pagination?(Je(),mt("div",{key:1,class:"cathode-pagination",style:Un(ue.value)},[Le("button",{disabled:xt(o)<=0,onClick:G[2]||(G[2]=we=>xt(p)())},"◀",8,Nb),Le("span",null,vn((xt(f)+1).toLocaleString())+"–"+vn(Math.min(xt(l).length,xt(d)+1).toLocaleString())+" / "+vn(xt(l).length.toLocaleString()),1),Le("button",{disabled:xt(o)>=xt(a),onClick:G[3]||(G[3]=we=>xt(h)())},"▶",8,Ob),Le("span",{class:"cathode-page-info",style:Un({color:M.value})},vn(xt(l).length.toLocaleString())+" rows ",5),xt(u)?(Je(),mt("span",{key:0,class:"cathode-sel-readout",style:Un({color:M.value})},vn(((J=xt(c)[xt(u).col])==null?void 0:J.colDef.headerName)??((re=xt(c)[xt(u).col])==null?void 0:re.colId))+" : "+vn(xt(v)(xt(c)[xt(u).col],xt(l)[xt(u).row])),5)):Kt("",!0)],4)):Kt("",!0)],4)}}}),li=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Wh=li(kb,[["__scopeId","data-v-3f5baab2"]]),Wa={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function zb(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const Hb=12,Qt=18,yo=10,Xs=6,Yu=`${Hb}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function Vb(n,e,t){if(t<=0||!e)return[e];const i=[];for(const s of e.split(`
`)){if(!s){i.push("");continue}if(n.measureText(s).width<=t){i.push(s);continue}const r=s.split(/(\s+)/);let o="";for(const a of r){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function lm(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${s}`}return n}function Gb(n,e){return Math.ceil(n.measureText(e).width)+12}function Wb(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:s,wordWrap:r}=n,o=n.formatTs??lm;t.font=Yu;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=s&&c.ts!=null?o(c.ts):"",d=r?Vb(t,c.text,i):c.text.split(`
`);for(let m=0;m<d.length;m++)a.push({entryIdx:l,text:d[m],level:u,timestamp:m===0?f:"",isFirstFrag:m===0,widthPx:t.measureText(d[m]).width})}return a}function Xb(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr??1,s=n.width/i,r=n.height/i,o=Wa[e.theme]??Wa.none;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip(),t.font=Yu,t.textBaseline="middle";const a=e.visualLines,l=yo-e.scrollX,c=(e.showTimestamps?yo+e.timestampWidth:yo)-e.scrollX,u=Math.max(0,Math.floor((e.scrollY-Xs)/Qt)),f=Math.min(a.length,Math.ceil((e.scrollY+r-Xs)/Qt)+1);for(let d=u;d<f;d++){const m=a[d],g=Xs+d*Qt-e.scrollY+Qt/2;if(m.entryIdx%2===1&&m.isFirstFrag){t.fillStyle=o.rowAlt;let p=1;for(;d+p<f&&a[d+p].entryIdx===m.entryIdx;)p++;t.fillRect(0,g-Qt/2,s,Qt*p)}e.selectionStart>=0&&d>=e.selectionStart&&d<=e.selectionEnd&&(t.fillStyle=o.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,g-Qt/2,s,Qt)),d===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,g-Qt/2,s,Qt)),e.showTimestamps&&m.timestamp&&(t.fillStyle=o.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=o.timestamp),t.fillText(m.timestamp,l,g),t.shadowBlur=0);const v=zb(o,m.level);t.fillStyle=v,t.textAlign="left",e.glow?(t.shadowColor=v,t.shadowBlur=14,t.fillText(m.text,c,g),t.shadowBlur=7,t.fillText(m.text,c,g),t.shadowBlur=3,t.fillText(m.text,c,g),t.shadowBlur=0):t.fillText(m.text,c,g)}t.restore()}function Xh(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-Xs)/Qt);return i<0||i>=t?-1:i}function Yb(n){return Xs*2+n*Qt}function cm(n){const e=Qa();return e.run(()=>{const t=()=>{var pe;return((pe=n.showTimestamps)==null?void 0:pe.call(n))??!0},i=()=>{var pe;return((pe=n.wordWrap)==null?void 0:pe.call(n))??!0},s=be(0),r=be(0),o=be(0),a=be(0),l=be(-1),c=be(!0),u=be(-1),f=be(-1),d=document.createElement("canvas"),m=nt(()=>{var O;const pe=n.entries()??[],R=((O=n.maxLines)==null?void 0:O.call(n))??0;return R>0&&pe.length>R?pe.slice(pe.length-R):pe}),g=nt(()=>{var O;if(!t())return"";const pe=((O=n.formatTs)==null?void 0:O.call(n))??lm;let R="00:00:00";for(const A of m.value){if(A.ts==null)continue;const de=pe(A.ts);de.length>R.length&&(R=de)}return R}),v=be(0),p=be([]);function h(){var O;const pe=d.getContext("2d");if(!pe)return;pe.font=Yu;const R=t()?Gb(pe,g.value):0;v.value=R,p.value=Wb({entries:m.value,ctx:pe,textMaxWidth:Math.max(1,s.value-yo*2-R),showTimestamps:t(),formatTs:(O=n.formatTs)==null?void 0:O.call(n),wordWrap:i()})}const S=nt(()=>Yb(p.value.length)),b=nt(()=>Math.max(0,S.value-r.value)),_=nt(()=>{let pe=0;for(const R of p.value)R.widthPx>pe&&(pe=R.widthPx);return yo*2+v.value+pe}),P=nt(()=>Math.max(0,_.value-s.value));je(b,()=>{c.value?o.value=b.value:o.value=Math.min(o.value,b.value)}),je(P,()=>{a.value=Math.min(a.value,P.value)}),je([m,s,t,i,g],()=>{h(),dn(()=>n.host.redraw())},{deep:!1}),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw()),je(l,()=>n.host.redraw()),je([u,f],()=>n.host.redraw());function E(pe,R){s.value=pe,r.value=R,h(),c.value&&(o.value=Math.max(0,S.value-r.value))}function T(pe){o.value=Math.max(0,Math.min(b.value,pe)),c.value=o.value>=b.value-4}function I(pe){a.value=Math.max(0,Math.min(P.value,pe))}function x(pe,R,O){O?I(a.value+R):Math.abs(pe)>Math.abs(R)?I(a.value+pe):T(o.value+R)}function y(){c.value=!0,o.value=b.value}function D(pe){T(Xs+pe*Qt)}let F=!1,B=!1,W=0,K=0,$=0,Z=0;function H(pe,R){F=!0,B=!1,W=pe,K=R,$=a.value,Z=o.value}function te(pe,R){if(!F)return!1;const O=W-pe,A=K-R;return(Math.abs(O)>4||Math.abs(A)>4)&&(B=!0),I($+O),T(Z+A),!0}function U(){F&&(F=!1,B&&(B=!1))}const V=()=>F;function Y(pe){l.value=pe<0?-1:Xh(pe,o.value,p.value.length)}function ae(){l.value=-1}function Q(pe,R){if(B){B=!1;return}const O=pe<0?-1:Xh(pe,o.value,p.value.length);if(O<0){u.value=-1,f.value=-1;return}R&&u.value>=0||(u.value=O),f.value=O}function he(pe,R){const O=p.value.length;if(O===0)return;const A=f.value<0?0:f.value,de=Math.max(0,Math.min(O-1,A+pe));f.value=de,(!R||u.value<0)&&(u.value=de),l.value=de;const se=Xs+de*Qt,ne=se+Qt;se<o.value?T(se):ne>o.value+r.value&&T(ne-r.value)}function _e(){const pe=Math.min(u.value,f.value),R=Math.max(u.value,f.value);if(pe<0)return"";const O=p.value,A=new Set,de=[];for(let se=pe;se<=R&&se<O.length;se++){const ne=O[se];if(A.has(ne.entryIdx))continue;A.add(ne.entryIdx);let ce="";for(let xe=0;xe<O.length;xe++)O[xe].entryIdx===ne.entryIdx&&(ce+=(ce&&!O[xe].isFirstFrag?" ":"")+O[xe].text);de.push(ne.timestamp?`${ne.timestamp}  ${ce}`:ce)}return de.join(`
`)}async function ve(){const pe=_e();if(pe)try{await navigator.clipboard.writeText(pe)}catch{const R=document.createElement("textarea");R.value=pe,R.style.position="fixed",R.style.opacity="0",document.body.appendChild(R),R.select();try{document.execCommand("copy")}catch{}document.body.removeChild(R)}}function Be(pe){if((pe.metaKey||pe.ctrlKey)&&(pe.key==="c"||pe.key==="C")){u.value>=0&&(pe.preventDefault(),ve());return}if((pe.metaKey||pe.ctrlKey)&&(pe.key==="a"||pe.key==="A")){pe.preventDefault(),u.value=0,f.value=p.value.length-1;return}switch(pe.key){case"ArrowDown":pe.preventDefault(),he(1,pe.shiftKey);break;case"ArrowUp":pe.preventDefault(),he(-1,pe.shiftKey);break;case"ArrowRight":pe.preventDefault(),I(a.value+Qt*2);break;case"ArrowLeft":pe.preventDefault(),I(a.value-Qt*2);break;case"PageDown":pe.preventDefault(),T(o.value+r.value);break;case"PageUp":pe.preventDefault(),T(o.value-r.value);break;case"Home":pe.preventDefault(),T(0),I(0);break;case"End":pe.preventDefault(),T(b.value);break;case"Escape":u.value=-1,f.value=-1;break}}function He(pe,{dpr:R,glow:O}){Xb(pe,{visualLines:p.value,scrollY:o.value,scrollX:a.value,theme:n.theme(),glow:O,showTimestamps:t(),timestampWidth:v.value,hoveredLine:l.value,selectionStart:Math.min(u.value,f.value),selectionEnd:Math.max(u.value,f.value),dpr:R})}function Ce(){e.stop()}return{canvasW:s,canvasH:r,scrollY:o,scrollX:a,hoveredLine:l,stuckToBottom:c,selectionAnchor:u,selectionActive:f,visualLines:p,tsWidth:v,contentH:S,maxScrollY:b,maxScrollX:P,setViewport:E,setScroll:T,setScrollX:I,wheel:x,scrollToBottom:y,scrollToLine:D,panStart:H,panMove:te,panEnd:U,panning:V,hover:Y,leave:ae,click:Q,keyDown:Be,moveSelection:he,selectionAsText:_e,copySelection:ve,paint:He,dispose:Ce}})}const $b=ai({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=be(null),s=be(null),r={...jt},o=cm({entries:()=>t.entries,theme:()=>t.theme,showTimestamps:()=>t.showTimestamps,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap,maxLines:()=>t.maxLines,host:{redraw:()=>p()}});let a=null,l=!1;function c(){if(a){try{a.forceContextLoss()}catch{}try{a.dispose()}catch{}a=null}}let u,f,d=1;const m=new Zi({paint:(Y,{dpr:ae,glow:Q})=>o.paint(Y,{dpr:ae,glow:Q})});function g(){if(!(!s.value||!i.value)){try{a=new Js({canvas:s.value,antialias:!1,alpha:!0})}catch{l=!0}if(!l&&!a.getContext()&&(a.dispose(),a=null,l=!0),l){v();return}a.setPixelRatio(1),a.setClearColor(0,0),u=new Qs,f=new Zs(-1,1,1,-1,0,1),u.add(new Bt(new en(2,2),m.material)),v()}}function v(){if(!i.value||!a&&!l)return;const Y=i.value.clientWidth,ae=i.value.clientHeight;!Y||!ae||m.resize(Y,ae)&&(m.setScreenSize(Y,ae),d=m.dpr,o.setViewport(Y,ae),a?(a.setPixelRatio(d),a.setSize(Y,ae)):s.value&&(s.value.width=Math.round(Y*d),s.value.height=Math.round(ae*d),s.value.style.width=Y+"px",s.value.style.height=ae+"px"),p())}function p(){if(!m.canvas.width)return;if(l){if(!s.value)return;m.paintOnly(!1);const ae=s.value.getContext("2d");ae&&ae.drawImage(m.canvas,0,0,m.canvas.width,m.canvas.height,0,0,s.value.width,s.value.height);return}if(!a)return;const Y=t.theme==="paper";m.setLook({curvature:t.curvature,scanlines:t.scanlines&&!Y,vignette:!Y,magnify:t.magnify}),m.setLens(t.magnify?r:null),m.syncUniforms(),m.paint(t.glow),a.render(u,f)}je(()=>t.theme,()=>p()),je(()=>t.curvature,()=>p()),je(()=>t.scanlines,()=>p()),je(()=>t.glow,()=>p()),je(()=>t.magnify,Y=>{Y||(r.x=jt.x,r.y=jt.y),p()});function h(Y){if(!s.value)return[-1,-1];const ae=s.value.getBoundingClientRect();return[Y.clientX-ae.left,Y.clientY-ae.top]}function S(Y){o.wheel(Y.deltaX,Y.deltaY,Y.shiftKey)}function b(Y){o.panStart(Y.clientX,Y.clientY),i.value&&i.value.focus()}function _(Y){o.panMove(Y.clientX,Y.clientY)}function P(){o.panEnd()}function E(Y){if(Y.touches.length!==1)return;const ae=Y.touches[0];o.panStart(ae.clientX,ae.clientY),i.value&&i.value.focus()}function T(Y){if(!o.panning()||Y.touches.length!==1)return;Y.preventDefault();const ae=Y.touches[0];o.panMove(ae.clientX,ae.clientY)}function I(){o.panEnd()}function x(Y){const[,ae]=h(Y);o.click(ae,Y.shiftKey)}function y(Y){o.keyDown(Y)}function D(Y){if(t.magnify&&s.value){const Q=ko(Y,s.value);r.x=Q.x,r.y=Q.y,p()}const[,ae]=h(Y);o.hover(ae)}function F(){o.leave(),r.x=jt.x,r.y=jt.y,p()}e({scrollToBottom(){o.scrollToBottom()},scrollToLine(Y){o.scrollToLine(Y)}});let B=null,W=null,K=0;const $=zi("cathodeResetTick",be(0));je($,()=>Z());function Z(){cancelAnimationFrame(K),K=requestAnimationFrame(v)}function H(Y){Y.preventDefault()}function te(){a==null||a.dispose(),a=null,l=!1,g()}Rn(()=>{document.addEventListener("mousemove",_),document.addEventListener("mouseup",P),dn(()=>{var Y;g(),s.value&&(s.value.addEventListener("webglcontextlost",H),s.value.addEventListener("webglcontextrestored",te)),i.value&&(B=new ResizeObserver(()=>v()),B.observe(i.value),W=new IntersectionObserver(ae=>{ae.some(Q=>Q.isIntersecting)&&Z()}),W.observe(i.value)),window.addEventListener("resize",Z),(Y=window.visualViewport)==null||Y.addEventListener("resize",Z),o.scrollY.value=o.maxScrollY.value})}),Wn(()=>{var Y,ae,Q;document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",P),(Y=s.value)==null||Y.removeEventListener("webglcontextlost",H),(ae=s.value)==null||ae.removeEventListener("webglcontextrestored",te),B==null||B.disconnect(),W==null||W.disconnect(),window.removeEventListener("resize",Z),(Q=window.visualViewport)==null||Q.removeEventListener("resize",Z),cancelAnimationFrame(K),c(),o.dispose(),m.dispose()});const U=nt(()=>Wa[t.theme]??Wa.none),V=nt(()=>({background:U.value.bg}));return(Y,ae)=>(Je(),mt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:Un(V.value),tabindex:"0",onKeydown:y},[Le("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-log-canvas",onWheel:ks(S,["prevent"]),onMousemove:D,onMouseleave:F,onMousedown:b,onClick:x,onTouchstartPassive:E,onTouchmove:T,onTouchend:I,onTouchcancel:I},null,544)],36))}}),du=li($b,[["__scopeId","data-v-328a73e4"]]),Gr={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},um=.18,ro=8,$u=22,qb=4,oi=8,xs=56,qu=42,Ki="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Kb="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",nc=4,jb=1,Zb=1;function Jb(n,e,t,i=0,s=!1){const r=s?qu:xs,o=Math.max(0,e-oi-r),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function Qb(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,s=-1/0,r=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>s&&(s=c.high),c.volume>r&&(r=c.volume))}if(!isFinite(i)||!isFinite(s)||i===s){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,r)}}const a=(s-i)*.04;return{min:i-a,max:s+a,maxVol:Math.max(1,r)}}function ew(n,e,t=!1){const i=t?qb:$u,s=Math.max(1,n-ro-i-nc),r=Math.max(0,Math.round(s*e)),o=s-r;return{priceY0:ro,priceY1:ro+o,volumeY0:ro+o+nc,volumeY1:ro+o+nc+r}}function Qn(n,e,t,i){const s=e.max-e.min;return s<=0?(t+i)/2:t+(1-(n-e.min)/s)*(i-t)}function Ms(n,e,t){return oi+(n-e+.5)*t}function ms(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function Ku(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),s=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${s}:${r}`}function tw(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),s=t/i;let r;return s<1.5?r=1:s<3?r=2:s<7?r=5:r=10,r*i}function fm(n,e){var g,v,p,h,S;const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=Gr[e.theme]??Gr.none,a=e.colors?{...o,...e.colors}:o,l=!!e.compact;if(t.clearRect(0,0,s,r),t.fillStyle=a.bg,t.fillRect(0,0,s,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const c=Jb(e.candles.length,s,e.slotW,e.scrollX,l),u=Qb(e.candles,c.firstIdx,c.count),f=ew(r,e.showVolume?e.volumeFraction:0,l),d=Math.max(jb,Math.floor(e.slotW*.7)),m=Math.min(e.candles.length,c.firstIdx+c.count);for(let b=c.firstIdx;b<m;b++){const _=e.candles[b];if(!_)continue;const P=Ms(b,c.firstIdx,e.slotW),E=Qn(_.open,u,f.priceY0,f.priceY1),T=Qn(_.close,u,f.priceY0,f.priceY1),I=Qn(_.high,u,f.priceY0,f.priceY1),x=Qn(_.low,u,f.priceY0,f.priceY1),y=_.close>=_.open,D=y?a.wickBull:a.wickBear,F=y?a.candleBull:a.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=F),t.strokeStyle=D,t.lineWidth=Zb,t.beginPath(),t.moveTo(Math.round(P)+.5,I),t.lineTo(Math.round(P)+.5,x),t.stroke(),t.fillStyle=F;const B=Math.min(E,T),W=Math.max(1,Math.abs(T-E)),K=Math.round(P-d/2),$=Math.round(B),Z=Math.round(W);if(t.fillRect(K,$,d,Z),e.glow&&(t.shadowBlur=4,t.fillRect(K,$,d,Z)),t.shadowBlur=0,e.showVolume&&u.maxVol>0){const H=Math.round(_.volume/u.maxVol*(f.volumeY1-f.volumeY0));H>0&&(t.fillStyle=y?a.volumeBull:a.volumeBear,t.fillRect(Math.round(P-d/2),f.volumeY1-H,d,H))}}if((g=e.overlays)!=null&&g.length){const b={above:0,below:0},_=e.overlays.filter(E=>E.kind!=="hline"&&!!E.label).length,P=_?14+14*_+12:8;for(const E of e.overlays)E.kind==="hline"?iw(t,E,s,u,f,a,l,b,P):nw(t,E,c,u,f,e.slotW)}(v=e.markers)!=null&&v.length&&fw(t,a,e.markers,e.candles,c,u,f,e.slotW),hw(t,a,u,f,s,l),l||(dw(t,a,e.candles,c,e.slotW,r),cw(t,a,e.candles,s,r)),(p=e.overlays)!=null&&p.length&&rw(t,a,e.overlays,f),e.hover&&(pw(t,a,e.candles,c,u,f,e.slotW,e.hover,s),ow(t,a,e.candles,c,e.slotW,e.hover,f,((h=e.overlays)==null?void 0:h.length)??0),(S=e.markers)!=null&&S.length&&lw(t,a,e.markers,e.candles,c,u,f,e.slotW,e.hover,s)),t.restore()}function nw(n,e,t,i,s,r){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(oi,s.priceY0,999999,s.priceY1-s.priceY0),n.clip(),e.kind==="line")ha(n,e.data,t.firstIdx,o,r,i,s,e.color,e.lineWidth??1,e.dashed===!0);else if(e.kind==="band"){const l=hm(e.color,e.fillAlpha??.08);sw(n,e.upper,e.lower,t.firstIdx,o,r,i,s,l),ha(n,e.upper,t.firstIdx,o,r,i,s,e.color,1,!1),ha(n,e.lower,t.firstIdx,o,r,i,s,e.color,1,!1),(a=e.middle)!=null&&a.length&&ha(n,e.middle,t.firstIdx,o,r,i,s,e.color,1,e.middleDashed!==!1)}n.restore()}function iw(n,e,t,i,s,r,o,a={above:0,below:0},l=8){const c=Qn(e.price,i,s.priceY0,s.priceY1),u=c<s.priceY0-.5,f=c>s.priceY1+.5,d=u||f,m=d?u?a.above++:a.below++:0,g=d?u?s.priceY0+l+m*20:s.priceY1-8-m*20:c,v=o?qu:xs,p=Math.round(g)+.5;n.save(),d||(n.strokeStyle=e.color,n.lineWidth=e.lineWidth??1,n.setLineDash(e.dashed===!1?[]:[4,3]),n.beginPath(),n.moveTo(oi,p),n.lineTo(t-v,p),n.stroke(),n.setLineDash([]));let h=e.label??ms(e.price);if(d&&h!==""&&(h=(u?"↑ ":"↓ ")+h),h!==""){n.font=Ki,n.textBaseline="middle",n.textAlign="left";const S=n.measureText(h).width,b=4,_=2,P=oi+2;n.fillStyle=e.color,d&&(n.globalAlpha=.85),n.fillRect(P,g-7-_,S+b*2,14+_*2),n.globalAlpha=1,n.fillStyle=r.bg&&!r.bg.startsWith("rgba(0,0,0,0)")?r.bg:"#0d1520",n.fillText(h,P+b,g)}n.restore()}function ha(n,e,t,i,s,r,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const d=e[f];if(typeof d!="number"||!isFinite(d)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const m=Ms(f,t,s),g=Qn(d,r,o.priceY0,o.priceY1);u?n.lineTo(m,g):(n.moveTo(m,g),u=!0)}u&&n.stroke(),n.setLineDash([])}function sw(n,e,t,i,s,r,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=s;f++){const d=e[f],m=t[f],g=f<s&&typeof d=="number"&&typeof m=="number"&&isFinite(d)&&isFinite(m);if(g&&!c&&(u=f,c=!0),!g&&c||f===s&&c){const v=g?f+1:f;n.beginPath();for(let p=u;p<v;p++){const h=Ms(p,i,r),S=Qn(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(h,S):n.lineTo(h,S)}for(let p=v-1;p>=u;p--){const h=Ms(p,i,r),S=Qn(t[p],o,a.priceY0,a.priceY1);n.lineTo(h,S)}n.closePath(),n.fill(),c=!1}}}function hm(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),s=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${i},${s},${r},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function rw(n,e,t,i){const s=t.filter(v=>v.kind!=="hline"&&!!v.label);if(!s.length)return;n.save(),n.font=Ki;const r=8,o=5,a=12,l=6,c=14;let u=0;for(const v of s){const p=n.measureText(v.label).width;p>u&&(u=p)}const f=r*2+a+l+u,d=o*2+c*s.length,m=oi+4,g=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(m,g,f,d),n.textBaseline="middle",n.textAlign="left";for(let v=0;v<s.length;v++){const p=s[v],h=g+o+c*(v+.5),S=m+r;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(S,h),n.lineTo(S+a,h),n.stroke(),n.setLineDash([])):p.kind==="band"&&(n.fillStyle=hm(p.color,p.fillAlpha??.2),n.fillRect(S,h-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(S+.5,h-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,S+a+l,h)}n.restore()}function ow(n,e,t,i,s,r,o,a){const l=Math.floor((r.x-oi)/s),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,d=u.open!==0?f/u.open*100:0,m=f>=0?"+":"",g=[["O",ms(u.open),void 0],["H",ms(u.high),void 0],["L",ms(u.low),void 0],["C",ms(u.close),void 0],["V",aw(u.volume),void 0],["",`${m}${d.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=Ki,n.textBaseline="middle",n.textAlign="left";const v=8,p=4,h=14;let S=v;for(const[E,T]of g){const I=E?`${E} ${T}`:T,x=n.measureText(I).width+12;S+=x}S+=v-12;const b=o.priceY0+4+(a>0?p*2+14*a+4:0),_=oi+4;n.fillStyle=e.panelBg,n.fillRect(_,b,S,h+p*2);let P=_+v;for(let E=0;E<g.length;E++){const[T,I,x]=g[E];n.fillStyle=e.text,T&&(n.globalAlpha=.6,n.fillText(T+" ",P,b+p+h/2),n.globalAlpha=1,P+=n.measureText(T+" ").width),x&&(n.fillStyle=x),n.fillText(I,P,b+p+h/2),P+=n.measureText(I).width+12}n.restore()}function aw(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function lw(n,e,t,i,s,r,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),d=Math.min(i.length,s.firstIdx+s.count),m=9;let g=null;for(const I of t){let x=0,y=i.length-1,D=-1;for(;x<=y;){const W=x+y>>1,K=i[W].start-I.timestamp;if(Math.abs(K)<=f){D=W;break}K<0?x=W+1:y=W-1}if(D<0||D<s.firstIdx||D>=d)continue;const F=Ms(D,s.firstIdx,a),B=Qn(I.price,r,o.priceY0,o.priceY1);if(Math.abs(l.x-F)<=m&&Math.abs(l.y-B)<=m){g={m:I,x:F,y:B};break}}if(!g)return;const v=Ku(g.m.timestamp),p=[`${g.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${v}`,`@ ${ms(g.m.price)}`];g.m.label&&p.push(g.m.label),n.save(),n.font=Ki,n.textBaseline="top",n.textAlign="left";const h=6,S=14;let b=0;for(const I of p){const x=n.measureText(I).width;x>b&&(b=x)}const _=b+h*2,P=p.length*S+h*2;let E=g.x+12;E+_>c-xs&&(E=g.x-12-_);let T=g.y-P/2;T<o.priceY0&&(T=o.priceY0),T+P>o.priceY1&&(T=o.priceY1-P),n.fillStyle=e.panelBgSolid,n.strokeStyle=g.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(E,T,_,P),n.strokeRect(E+.5,T+.5,_-1,P-1);for(let I=0;I<p.length;I++){const x=p[I];n.fillStyle=I===0?g.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(x,E+h,T+h+I*S)}n.restore()}function cw(n,e,t,i,s){if(t.length<2)return;const r=t[1].start-t[0].start,o=uw(r);if(!o)return;n.save(),n.font=Ki,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-xs-a,f=s-$u+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function uw(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,s=24*i,r=7*s;return n>=r&&n%r===0?n/r+"W":n>=s&&n%s===0?n/s+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function fw(n,e,t,i,s,r,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,s.firstIdx+s.count),f=m=>{let g=0,v=i.length-1;for(;g<=v;){const p=g+v>>1,h=i[p].start-m;if(Math.abs(h)<=c)return p;h<0?g=p+1:v=p-1}return-1},d=7;for(const m of t){const g=f(m.timestamp);if(g<0||g<s.firstIdx||g>=u)continue;const v=Ms(g,s.firstIdx,a),p=Qn(m.price,r,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const h=m.color??(m.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=h,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),m.kind==="entry"?(n.moveTo(v,p-d),n.lineTo(v-d,p+d-1),n.lineTo(v+d,p+d-1)):(n.moveTo(v,p+d),n.lineTo(v-d,p-d+1),n.lineTo(v+d,p-d+1)),n.closePath(),n.fill(),n.stroke()}}function hw(n,e,t,i,s,r=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=r?Math.max(2,Math.min(4,Math.round(a/36))):6,c=tw(o,l),u=Math.ceil(t.min/c)*c,f=r?qu:xs;n.font=r?Kb:Ki,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let d=u;d<=t.max;d+=c){const m=Qn(d,t,i.priceY0,i.priceY1);m<i.priceY0||m>i.priceY1||(n.beginPath(),n.moveTo(oi,Math.round(m)+.5),n.lineTo(s-f,Math.round(m)+.5),n.stroke(),n.fillText(ms(d),s-f+3,m))}n.globalAlpha=1}function dw(n,e,t,i,s,r){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=Ki,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=Ms(c,i.firstIdx,s);n.fillText(Ku(u.start),f,r-$u+4)}n.globalAlpha=1}function pw(n,e,t,i,s,r,o,a,l){const c=Math.floor((a.x-oi)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const d=Ms(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(d)+.5,r.priceY0),n.lineTo(Math.round(d)+.5,r.volumeY1||r.priceY1),n.stroke();const m=Math.max(r.priceY0,Math.min(r.priceY1,a.y));n.beginPath(),n.moveTo(oi,Math.round(m)+.5),n.lineTo(l-xs,Math.round(m)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const g=s.max-s.min;if(g>0){const h=s.max-(m-r.priceY0)/(r.priceY1-r.priceY0)*g,S=ms(h);n.font=Ki,n.textBaseline="middle",n.textAlign="left";const b=n.measureText(S).width,_=4,P=2;n.fillStyle=e.accent,n.fillRect(l-xs+2,m-7-P,b+_*2,14+P*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(S,l-xs+2+_,m)}n.font=Ki,n.textBaseline="top",n.textAlign="center";const v=Ku(f.start),p=n.measureText(v).width;n.fillStyle=e.accent,n.fillRect(d-p/2-4,r.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(v,d,r.volumeY1+4),n.restore()}const ic=.25,sc=6,Yh=8;function dm(n){const e=Qa();return e.run(()=>{const t=be(0),i=be(0),s=be(0),r=be(1),o=be(null),a=nt(()=>Math.max(1,n.slotW()*r.value));je([n.theme,n.slotW,n.showVolume,n.volumeFraction,()=>{var I;return(I=n.compact)==null?void 0:I.call(n)},()=>n.candles(),()=>{var I;return(I=n.overlays)==null?void 0:I.call(n)},()=>{var I;return(I=n.markers)==null?void 0:I.call(n)}],()=>n.host.redraw(),{deep:!1}),je(()=>{var I;return(I=n.colors)==null?void 0:I.call(n)},()=>n.host.redraw(),{deep:!0}),je(s,()=>n.host.redraw()),je(r,()=>n.host.redraw()),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw());function l(I,x){t.value=I,i.value=x}function c(I){var B;const x=a.value;if(x<=0)return 0;const y=((B=n.candles())==null?void 0:B.length)??0,D=Math.max(1,Math.floor((t.value||1)/x)),F=Math.max(0,y-D);return Math.max(0,Math.min(I,F*x))}function u(I,x,y,D){if(I!==0||y&&x!==0){const K=I!==0?I:x;s.value=c(s.value+K);return}if(x===0)return;const F=n.candles(),B=a.value,W=Math.exp(-x*.0015);if(D>=0&&B>0&&(F!=null&&F.length)){const K=Math.max(1,Math.floor((t.value||1)/B)),Z=Math.max(0,F.length-K-Math.floor(s.value/B))+(D-Yh)/B,H=Math.max(ic,Math.min(sc,r.value*W));r.value=H;const te=n.slotW()*H,U=Math.max(1,Math.floor((t.value||1)/te)),V=Z-(D-Yh)/te,Y=Math.max(0,F.length-U-V);s.value=c(Y*te)}else r.value=Math.max(ic,Math.min(sc,r.value*W))}let f=!1,d=0,m=0;function g(I){f=!0,d=I,m=s.value,o.value=null}function v(I){return f?(s.value=c(m+(I-d)),!0):!1}function p(){f=!1}const h=()=>f;function S(I,x){f||(o.value=I<0||x<0?null:{x:I,y:x})}function b(){o.value=null}function _(I){r.value=Math.max(ic,Math.min(sc,r.value*Math.exp(I*.18))),s.value=c(s.value)}function P(I){const x=a.value,y=I.shiftKey?20:3;switch(I.key){case"ArrowLeft":I.preventDefault(),s.value=c(s.value+x*y);break;case"ArrowRight":I.preventDefault(),s.value=c(s.value-x*y);break;case"ArrowUp":I.preventDefault(),_(1);break;case"ArrowDown":I.preventDefault(),_(-1);break;case"Home":I.preventDefault(),s.value=c(Number.MAX_SAFE_INTEGER);break;case"End":I.preventDefault(),s.value=0;break}}function E(I,{dpr:x,glow:y}){var D,F,B,W;fm(I,{candles:n.candles(),slotW:a.value,scrollX:s.value,theme:n.theme(),glow:y,showVolume:n.showVolume(),volumeFraction:n.volumeFraction(),hover:o.value,overlays:(D=n.overlays)==null?void 0:D.call(n),markers:(F=n.markers)==null?void 0:F.call(n),compact:(B=n.compact)==null?void 0:B.call(n),colors:(W=n.colors)==null?void 0:W.call(n),dpr:x})}function T(){e.stop()}return{canvasW:t,canvasH:i,scrollX:s,zoomLevel:r,hover:o,effectiveSlotW:a,setViewport:l,clampScroll:c,wheel:u,panStart:g,panMove:v,panEnd:p,panning:h,hoverAt:S,leave:b,keyDown:P,applyZoom:_,paint:E,dispose:T}})}const mw=ai({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:um},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=be(null),i=be(null),s={...jt},r=dm({candles:()=>e.candles,theme:()=>e.theme,slotW:()=>e.slotW,showVolume:()=>e.showVolume,volumeFraction:()=>e.volumeFraction,overlays:()=>e.overlays,markers:()=>e.markers,compact:()=>e.compact,colors:()=>e.colors,host:{redraw:()=>v()}});let o=null,a=!1;function l(){if(o){try{o.forceContextLoss()}catch{}try{o.dispose()}catch{}o=null}}let c,u,f=1;const d=new Zi({paint:(U,{dpr:V,glow:Y})=>r.paint(U,{dpr:V,glow:Y})});function m(){if(!(!i.value||!t.value)){if(e.flat){a=!0,g();return}try{o=new Js({canvas:i.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{a=!0}if(!a&&!o.getContext()&&(o.dispose(),o=null,a=!0),a){g();return}o.setPixelRatio(1),o.setClearColor(0,0),c=new Qs,u=new Zs(-1,1,1,-1,0,1),c.add(new Bt(new en(2,2),d.material)),g()}}function g(){if(!t.value||!o&&!a)return;const U=t.value.clientWidth,V=t.value.clientHeight;!U||!V||d.resize(U,V)&&(d.setScreenSize(U,V),f=d.dpr,r.setViewport(U,V),o?(o.setPixelRatio(f),o.setSize(U,V)):i.value&&(i.value.width=Math.round(U*f),i.value.height=Math.round(V*f),i.value.style.width=U+"px",i.value.style.height=V+"px"),v())}function v(){if(!d.canvas.width)return;if(a){if(!i.value)return;d.paintOnly(!1);const V=i.value.getContext("2d");V&&(V.clearRect(0,0,i.value.width,i.value.height),V.drawImage(d.canvas,0,0));return}if(!o)return;const U=e.theme==="paper";d.setLook({curvature:e.curvature,scanlines:e.scanlines&&!U,vignette:!U,magnify:e.magnify}),d.setLens(e.magnify?s:null),d.syncUniforms(),d.paint(e.glow),o.render(c,u)}je(()=>e.curvature,()=>v()),je(()=>e.scanlines,()=>v()),je(()=>e.glow,()=>v()),je(()=>e.magnify,U=>{U||(s.x=jt.x,s.y=jt.y),v()}),je(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")});let p=null,h=null,S=0;const b=zi("cathodeResetTick",be(0));je(b,()=>_());function _(){cancelAnimationFrame(S),S=requestAnimationFrame(g)}function P(U){U.preventDefault()}function E(){o==null||o.dispose(),o=null,a=!1,m()}function T(U){if(!i.value)return[-1,-1];const V=i.value.getBoundingClientRect();return[U.clientX-V.left,U.clientY-V.top]}function I(U){const[V]=T(U);r.wheel(U.deltaX,U.deltaY,U.shiftKey,V)}function x(U){U.button===0&&(r.panStart(U.clientX),t.value&&t.value.focus())}function y(U){r.keyDown(U)}function D(U){r.panMove(U.clientX)}function F(){r.panEnd()}function B(U){U.touches.length===1&&r.panStart(U.touches[0].clientX)}function W(U){!r.panning()||U.touches.length!==1||(U.preventDefault(),r.panMove(U.touches[0].clientX))}function K(){r.panEnd()}function $(U){if(e.magnify&&i.value){const ae=ko(U,i.value);s.x=ae.x,s.y=ae.y,v()}const[V,Y]=T(U);r.hoverAt(V,Y)}function Z(){r.leave(),s.x=jt.x,s.y=jt.y,v()}Rn(()=>{document.addEventListener("mousemove",D),document.addEventListener("mouseup",F),dn(()=>{var U;m(),i.value&&(i.value.addEventListener("webglcontextlost",P),i.value.addEventListener("webglcontextrestored",E)),t.value&&(p=new ResizeObserver(()=>g()),p.observe(t.value),h=new IntersectionObserver(V=>{V.some(Y=>Y.isIntersecting)&&_()}),h.observe(t.value)),window.addEventListener("resize",_),(U=window.visualViewport)==null||U.addEventListener("resize",_)})}),Wn(()=>{var U,V,Y;document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",F),(U=i.value)==null||U.removeEventListener("webglcontextlost",P),(V=i.value)==null||V.removeEventListener("webglcontextrestored",E),p==null||p.disconnect(),h==null||h.disconnect(),window.removeEventListener("resize",_),(Y=window.visualViewport)==null||Y.removeEventListener("resize",_),cancelAnimationFrame(S),l(),r.dispose(),d.dispose()});const H=nt(()=>Gr[e.theme]??Gr.none),te=nt(()=>({background:H.value.bg}));return(U,V)=>(Je(),mt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:Un(te.value),tabindex:"0",onKeydown:y},[Le("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:ks(I,["prevent"]),onMousedown:x,onMousemove:$,onMouseleave:Z,onTouchstartPassive:B,onTouchmove:W,onTouchend:K,onTouchcancel:K},null,544)],36))}}),$h=li(mw,[["__scopeId","data-v-f2099684"]]),gw=["disabled"],vw=ai({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100},magnify:{type:Boolean,default:!1}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=be(null),o=be(null),a=be(""),l=be([]),c=be(-1);let u="";function f(P){P.trim()&&(l.value.length&&l.value[l.value.length-1]===P||(l.value.push(P),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function d(P){if(!i.disabled){if(P.key==="Enter"){P.preventDefault();const E=a.value;E.trim()&&f(E),c.value=-1,a.value="",s("submit",E);return}if(P.key==="ArrowUp"){if(!l.value.length)return;P.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(P.key==="ArrowDown"){if(c.value===-1)return;P.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const m=be(!0);let g=null;function v(){g||(g=setInterval(()=>{m.value=!m.value},530))}function p(){g&&(clearInterval(g),g=null),m.value=!0}const h=nt(()=>{let P;return i.disabled?P=" ":i.busy?P="█":P=m.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${P}`}}),S=nt(()=>[...i.entries,h.value]);function b(){var P;i.disabled||(P=o.value)==null||P.focus()}je(()=>i.busy,(P,E)=>{E&&!P&&!i.disabled&&dn(()=>{var T;return(T=o.value)==null?void 0:T.focus()})});function _(){var P;(P=o.value)==null||P.focus()}return e({focus:_}),Rn(()=>{v(),i.disabled||requestAnimationFrame(()=>{var P;return(P=o.value)==null?void 0:P.focus()})}),Wn(()=>{p()}),(P,E)=>(Je(),mt("div",{ref_key:"wrapEl",ref:r,class:"cathode-terminal-wrap",onClick:b},[Ct(du,{entries:S.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,magnify:n.magnify,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","magnify","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Ht(Le("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":E[0]||(E[0]=T=>a.value=T),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:d},null,40,gw),[[_p,a.value]])],512))}}),qh=li(vw,[["__scopeId","data-v-a2b39934"]]),ju=be(0),pu=28;let mu=10,Xa="cathode.layout",Ya=!1;const tn=be({});function _w(n,e="cathode.layout"){if(!Ya){Ya=!0,Xa=e;try{const t=localStorage.getItem(Xa);if(t){tn.value=JSON.parse(t),Kh();return}}catch{}tn.value={...n},Kh()}}function Kh(){let n=10;for(const e of Object.values(tn.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);mu=n}function er(){localStorage.setItem(Xa,JSON.stringify(tn.value))}function xw(n){Ya=!1,localStorage.removeItem(Xa),tn.value={...n},er(),Ya=!0,ju.value++}function pm(n){mu++,tn.value[n]&&(tn.value[n].zIndex=mu)}function yw(n,e){tn.value[n].visible=e,er()}function Mw(n,e){tn.value[n].minimized=e,e&&(tn.value[n].maximized=!1),er()}function Sw(n,e){tn.value[n].maximized=e,e&&(tn.value[n].minimized=!1,pm(n)),er()}function bw(n,e,t){tn.value[n].x=Math.round(e),tn.value[n].y=Math.round(t),er()}function ww(n,e,t){tn.value[n].w=Math.round(e),tn.value[n].h=Math.round(t),er()}function mm(){return{containers:tn,TITLEBAR_H:pu,load:_w,save:er,reset:xw,bringToFront:pm,setVisible:yw,setMinimized:Mw,setMaximized:Sw,updatePos:bw,updateSize:ww}}const Ew={class:"ws-toolbar"},Tw={key:0,class:"ws-restore-menu"},Aw={key:0,class:"ws-restore-empty"},Cw=["onClick"],Rw=ai({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:s,setVisible:r}=mm(),o=be(null);pc("cathodeWorkspace",o),pc("cathodeResetTick",ju),Rn(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:h}=o.value,S=e.initialLayout??{};i(S,e.storageKey??"cathode.layout");const b=Object.keys(t.value)[0];b&&a(b)});function a(p){var S;document.querySelectorAll(".cc").forEach(b=>b.classList.remove("cc-focused"));const h=(S=o.value)==null?void 0:S.querySelector(`#cc-${p}`);h&&h.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||s(e.initialLayout)}function c(p){const h=p.target.closest(".cc");h&&(document.querySelectorAll(".cc").forEach(S=>S.classList.remove("cc-focused")),h.classList.add("cc-focused"))}const u=be(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function d(p){r(p,!0),u.value=!1}function m(p){if(!u.value)return;const h=p.target;!h.closest(".ws-restore-menu")&&!h.closest(".ws-btn-restore")&&(u.value=!1)}function g(p){p.key==="Escape"&&(u.value=!1)}Rn(()=>{document.addEventListener("click",m),document.addEventListener("keydown",g)}),Wn(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",g)});function v(p){var h;return((h=e.containerTitles)==null?void 0:h[p])??p}return(p,h)=>(Je(),mt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[gc(p.$slots,"default",{},void 0),gc(p.$slots,"overlay",{},void 0),Le("div",Ew,[n.initialLayout?(Je(),mt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):Kt("",!0),h[1]||(h[1]=Le("div",{class:"ws-sep"},null,-1)),Le("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:h[0]||(h[0]=S=>u.value=!u.value)}," ⊞ Restore Panel ")]),Ct(wv,{name:"menu"},{default:Fs(()=>[u.value?(Je(),mt("div",Tw,[h[3]||(h[3]=Le("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?Kt("",!0):(Je(),mt("div",Aw," No closed panels ")),(Je(!0),mt(ln,null,Lg(f(),S=>(Je(),mt("div",{key:S,class:"ws-restore-item",onClick:b=>d(S)},[h[2]||(h[2]=Le("span",{class:"ws-restore-icon"},"⊞",-1)),Tn(" "+vn(v(S)),1)],8,Cw))),128))])):Kt("",!0)]),_:1})],544))}}),Pw=li(Rw,[["__scopeId","data-v-5838d04b"]]),Dw=["id"],Lw={class:"cc-title"},Iw={key:0,class:"cc-size-badge"},Uw={class:"cc-controls"},Fw=["title"],Nw={class:"cc-body"},Ow=200,Bw=80,jh=60,kw=ai({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:s,setMinimized:r,setMaximized:o,updatePos:a,updateSize:l}=mm(),c=zi("cathodeWorkspace",be(null)),u=nt(()=>t.value[e.id]),f=nt(()=>{const U=u.value,V=e.curvature??0;if(!U)return{};const Y={"--curvature":Math.abs(V)};return U.maximized?{...Y,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:U.zIndex}:{...Y,left:U.x+"px",top:U.y+"px",width:U.w+"px",height:U.minimized?pu+"px":U.h+"px",zIndex:U.zIndex,display:U.visible?"flex":"none"}});let d=!1,m=0,g=0;function v(U){var ae;if(U.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),d=!0;const V=(ae=c.value)==null?void 0:ae.querySelector(`#cc-${e.id}`);if(!V)return;const Y=V.getBoundingClientRect();m=U.clientX-Y.left,g=U.clientY-Y.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",h),U.preventDefault()}function p(U){var he;if(!d||!c.value)return;const V=c.value.getBoundingClientRect(),Y=((he=u.value)==null?void 0:he.w)??300;let ae=U.clientX-V.left-m,Q=U.clientY-V.top-g;ae=Math.max(jh-Y,Math.min(V.width-jh,ae)),Q=Math.max(0,Math.min(V.height-pu,Q)),a(e.id,ae,Q)}function h(){d=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h)}let S=!1,b=0,_=0,P=0,E=0;const T=be("");function I(U){u.value.maximized||(i(e.id),S=!0,b=U.clientX,_=U.clientY,P=u.value.w,E=u.value.h,document.addEventListener("mousemove",x),document.addEventListener("mouseup",y),U.preventDefault(),U.stopPropagation())}function x(U){if(!S)return;const V=Math.max(Ow,P+(U.clientX-b)),Y=Math.max(Bw,E+(U.clientY-_));l(e.id,V,Y),T.value=`${Math.round(V)}×${Math.round(Y)}`}function y(){S=!1,T.value="",document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",y),D.value++}const D=be(0);je(ju,()=>{D.value++}),Wn(()=>{var U;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",y),(U=F.value)==null||U.removeEventListener("scroll",W),K()});const F=be(null);function B(U){if(e.canvas)return[];const V=U.children[0];return V?Array.from(V.children):[]}function W(){const U=F.value,V=e.curvature??0;if(!U)return;const Y=B(U);if(!Y.length)return;const ae=U.clientHeight,Q=ae/2,he=V*.0038;Y.forEach(_e=>{if(!_e.dataset.origFs){const de=getComputedStyle(_e);_e.dataset.origFs=de.fontSize,_e.dataset.origLh=de.lineHeight}if(V===0){_e.style.fontSize="",_e.style.lineHeight="";return}const ve=_e.getBoundingClientRect(),Be=U.getBoundingClientRect(),He=ve.top-Be.top+ve.height/2,Ce=Math.min(1,Math.abs(He-Q)/(ae/2)),pe=1+he*Math.cos(Ce*Math.PI/2),R=parseFloat(_e.dataset.origFs),O=_e.dataset.origLh,A=O==="normal"?R*1.4:parseFloat(O);isNaN(R)||(_e.style.fontSize=`${(R*pe).toFixed(2)}px`),isNaN(A)||(_e.style.lineHeight=`${(A*pe).toFixed(2)}px`)})}function K(){const U=F.value;U&&B(U).forEach(V=>{V.style.fontSize="",V.style.lineHeight="",delete V.dataset.origFs,delete V.dataset.origLh})}je(()=>e.curvature,U=>{(U??0)===0?K():W()}),Rn(()=>{var U;(U=F.value)==null||U.addEventListener("scroll",W,{passive:!0}),dn(W)});function $(){r(e.id,!u.value.minimized),dn(()=>{D.value++})}function Z(){o(e.id,!u.value.maximized),dn(()=>{D.value++})}function H(){s(e.id,!1)}function te(){i(e.id)}return(U,V)=>u.value&&u.value.visible?(Je(),mt("div",{key:0,id:`cc-${n.id}`,class:qt(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:Un(f.value),onMousedown:te},[Le("div",{class:"cc-titlebar",onMousedown:v},[V[0]||(V[0]=Le("span",{class:"cc-status-dot"},null,-1)),Le("span",Lw,vn(n.title),1),T.value?(Je(),mt("span",Iw,vn(T.value),1)):Kt("",!0),Le("div",Uw,[Le("button",{class:"cc-btn",title:"Minimize",onClick:ks($,["stop"])},"─"),Le("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:ks(Z,["stop"])},vn(u.value.maximized?"⤡":"⤢"),9,Fw),Le("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:ks(H,["stop"])},"✕")])],32),Ht(Le("div",Nw,[Le("div",{ref_key:"bodyEl",ref:F,class:"cc-screen",onScroll:W},[gc(U.$slots,"default",{resizeKey:D.value},void 0),V[1]||(V[1]=Le("div",{class:"cc-shine"},null,-1))],544)],512),[[cs,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(Je(),mt("div",{key:0,class:"cc-resize",onMousedown:ks(I,["stop"])},null,32)):Kt("",!0)],46,Dw)):Kt("",!0)}}),da=li(kw,[["__scopeId","data-v-ca0af4ca"]]),zw=`
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
`,Vw=100,Gw=ai({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=be(null),s=be(null);let r=null,o=!1;function a(){if(r){try{r.forceContextLoss()}catch{}try{r.dispose()}catch{}r=null}}let l,c,u,f,d,m=null,g=0;function v(E){E-g>=Vw&&(S(),g=E),m=requestAnimationFrame(v)}function p(){if(!i.value||!d)return;const E=i.value.clientWidth,T=i.value.clientHeight;E<=0||T<=0||d.width===E&&d.height===T||(d.width=E,d.height=T,r&&r.setSize(E,T,!1),s.value&&(s.value.width=E,s.value.height=T,s.value.style.width=E+"px",s.value.style.height=T+"px"))}function h(){if(!(d!=null&&d.width))return;const E=d.getContext("2d");if(!E)return;const T=d.width,I=d.height,x=t[e.theme]??t.none;E.clearRect(0,0,T,I),E.fillStyle=x.bg,E.fillRect(0,0,T,I);const y=Date.now(),D=(y/500|0)%2===0,F=(y/400|0)%4;E.font=`bold ${Math.max(14,Math.min(T,I)*.06)}px monospace`,E.textAlign="center",E.textBaseline="middle",E.fillStyle=x.text,e.glow&&(E.shadowColor=x.text,E.shadowBlur=14);const B=".".repeat(F).padEnd(3," "),W=`${e.label}${B}`;if(E.fillText(W,T/2,I/2),E.shadowBlur=0,D){const K=E.measureText(W),$=E.measureText("M").width,Z=parseFloat(E.font),H=T/2+K.width/2+4,te=I/2-Z/2+2;E.fillStyle=x.cursor,e.glow&&(E.shadowColor=x.cursor,E.shadowBlur=12),E.fillRect(H,te,$*.7,Z*.95),E.shadowBlur=0}}function S(){if(!d)return;if(h(),o){if(!s.value)return;const T=s.value.getContext("2d");T&&T.drawImage(d,0,0);return}if(!r||!u||!f)return;const E=e.theme==="paper";u.uniforms.uStrength.value=qs(e.curvature),u.uniforms.uScanlines.value=e.scanlines&&!E?1:0,u.uniforms.uVignette.value=E?0:1,f.needsUpdate=!0,r.render(l,c)}function b(){if(!(!s.value||!i.value)){d=document.createElement("canvas");try{r=new Js({canvas:s.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!r.getContext()&&(r.dispose(),r=null,o=!0),o){p();return}r.setPixelRatio(1),r.setClearColor(0,0),l=new Qs,c=new Zs(-1,1,1,-1,0,1),f=new _s(d),f.minFilter=Zt,f.magFilter=Zt,u=new Gn({uniforms:{uTex:{value:f},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:zw,fragmentShader:Hw,transparent:!0}),l.add(new Bt(new en(2,2),u)),p()}}let _=null;Rn(()=>{b(),S(),m=requestAnimationFrame(v),i.value&&(_=new ResizeObserver(()=>p()),_.observe(i.value))}),Wn(()=>{m!==null&&cancelAnimationFrame(m),_==null||_.disconnect(),a(),f==null||f.dispose(),u==null||u.dispose()}),je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>S());const P=nt(()=>({background:(t[e.theme]??t.none).bg}));return(E,T)=>(Je(),mt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:Un(P.value)},[Le("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-loader-canvas"},null,512)],4))}}),Di=li(Gw,[["__scopeId","data-v-d00e5f47"]]),gm=22,vm=6;function Zu(n){const e=Math.max(1,Math.floor(n.width/n.minCellW)),t=Math.floor(n.width/e),i=Math.round(t*n.cellAspect),s=gm+i+vm;return{rects:Array.from({length:n.count},(o,a)=>({x:a%e*t,y:Math.floor(a/e)*s-n.scrollY,w:t,h:s})),rowH:s,totalH:Math.ceil(n.count/e)*s,cols:e}}function gu(n,e,t){return e<0?-1:n.findIndex(i=>e>=i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h)}const _m=(n,e)=>Math.max(0,n-e);function Ww(n,e,t,i,s){const r=t.candles[t.candles.length-1],o=`${i}x${s}@${e.dpr}|${t.candles.length}|${r?r.start+":"+r.close:0}|${e.theme}|${e.glow}|${e.showVolume}|${e.slotW}`,a=n.get(t.id);if(a&&a.key===o)return a.canvas;const l=(a==null?void 0:a.canvas)??document.createElement("canvas");l.width=Math.round(i*e.dpr),l.height=Math.round(s*e.dpr);const c=Math.max(1.5,Math.min(e.slotW,i/Math.max(1,t.candles.length))),u=i<260&&t.overlays?t.overlays.map(f=>({...f,label:""})):t.overlays;return fm(l,{candles:t.candles,slotW:c,scrollX:Math.max(0,t.candles.length*c-i),theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:null,overlays:u,compact:!0,colors:e.colors,dpr:e.dpr}),n.set(t.id,{canvas:l,key:o}),l}function xm(n,e,t){if(!n.width)return;const i=n.getContext("2d");if(!i)return;const s=e.dpr,r={...Gr[e.theme]??Gr.none,...e.colors??{}};i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,n.width,n.height),r.bg&&r.bg!=="rgba(0,0,0,0)"&&(i.fillStyle=r.bg,i.fillRect(0,0,n.width,n.height)),i.setTransform(s,0,0,s,0,0);const{rects:o}=Zu({count:e.cells.length,width:n.width/s,minCellW:e.minCellW,cellAspect:e.cellAspect,scrollY:e.scrollY}),a=gm,l=vm;i.font="600 11px ui-monospace, SFMono-Regular, monospace",i.textBaseline="middle";for(let c=0;c<e.cells.length;c++){const u=e.cells[c],f=o[c];if(f.y+f.h<0||f.y>n.height/s)continue;const d=f.x+l/2,m=f.w-l;i.strokeStyle=u.open?r.candleBull:r.gridline,i.lineWidth=c===e.hoveredCell?2:1,i.strokeRect(d+.5,f.y+.5,m-1,f.h-l-1),i.save(),i.beginPath(),i.rect(d,f.y,m,a),i.clip();const g=f.y+a/2+1,v=u.note?i.measureText(u.note).width+(u.open?22:12):u.open?16:0,p=u.badge?i.measureText(u.badge).width+6:0,h=m-14-p-v;let S=u.title;if(i.measureText(S).width>h){for(;S.length>1&&i.measureText(S+"…").width>h;)S=S.slice(0,-1);S+="…"}let b=d+7;i.fillStyle=r.text,i.textAlign="left",i.fillText(S,b,g),b+=i.measureText(S).width+6,u.badge&&(i.fillStyle=r.accent,i.fillText(u.badge,b,g)),u.note&&(i.textAlign="right",i.fillStyle=u.noteColor||r.accent,i.fillText(u.note,d+m-(u.open?16:7),g),i.textAlign="left"),i.restore(),u.open&&(i.fillStyle=r.candleBull,i.beginPath(),i.arc(d+m-9,f.y+a/2+1,3,0,Math.PI*2),i.fill());const _=f.y+a,P=f.h-a-l;u.candles.length?i.drawImage(Ww(t,e,u,m-2,P-1),d+1,_,m-2,P-1):(i.fillStyle=r.accent,i.textAlign="center",i.fillText("· · ·",d+m/2,_+P/2),i.textAlign="left")}}const Xw=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Yw=ai({__name:"CathodeCandleGrid",props:{cells:{},theme:{default:"none"},curvature:{default:0},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},showVolume:{type:Boolean,default:!0},volumeFraction:{default:.22},slotW:{default:3},colors:{},bendField:{type:Boolean,default:!0},minCellW:{default:210},cellAspect:{default:.6}},emits:["cell-click"],setup(n,{emit:e}){const t=n,i=e,s=be(null),r=be(null),o=be(-1),a=be(0),l={...jt};let c=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),u=null,f=!1;function d(){if(u){try{u.forceContextLoss()}catch{}try{u.dispose()}catch{}u=null}}let m,g,v,p,h;const S=be(0),b=be(0),_=`
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
`;function P(){if(!(!r.value||!s.value)){h=document.createElement("canvas");try{u=new Js({canvas:r.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{f=!0}if(!f&&!u.getContext()&&(u.dispose(),u=null,f=!0),f){E();return}u.setPixelRatio(c),u.setClearColor(0,0),m=new Qs,g=new Zs(-1,1,1,-1,0,1),p=new _s(h),p.minFilter=Zt,p.magFilter=Zt,v=new Gn({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...rm()},vertexShader:Xw,fragmentShader:_,transparent:!0}),m.add(new Bt(new en(2,2),v)),E()}}function E(){if(!s.value||!u&&!f)return;const H=s.value.clientWidth,te=s.value.clientHeight;if(!H||!te)return;S.value=H,b.value=te,c=Math.min(window.devicePixelRatio||1,2);const U=t.bendField?Math.round(H*em(t.curvature)):H,V=Math.round(U*c),Y=Math.round(te*c),ae=h.width!==V||h.height!==Y;h.width=V,h.height=Y,u?(ae&&p&&(p.dispose(),p=new _s(h),p.minFilter=Zt,p.magFilter=Zt,v.uniforms.uTex.value=p),u.setPixelRatio(c),u.setSize(H,te)):r.value&&(r.value.width=Math.round(H*c),r.value.height=Math.round(te*c),r.value.style.width=H+"px",r.value.style.height=te+"px"),y()}function T(){return Zu({count:t.cells.length,width:((h==null?void 0:h.width)||0)/c,minCellW:t.minCellW,cellAspect:t.cellAspect,scrollY:a.value})}const I=()=>_m(T().totalH,((h==null?void 0:h.height)||0)/c),x=new Map;function y(){var H;if(h!=null&&h.width){if(xm(h,{cells:t.cells,theme:t.theme,glow:t.glow,showVolume:t.showVolume,volumeFraction:t.volumeFraction,slotW:t.slotW,colors:t.colors,hoveredCell:o.value,scrollY:a.value,minCellW:t.minCellW,cellAspect:t.cellAspect,dpr:c},x),f){const te=(H=r.value)==null?void 0:H.getContext("2d");te&&r.value&&te.drawImage(h,0,0,h.width,h.height,0,0,r.value.width,r.value.height);return}!u||!v||!p||(v.uniforms.uStrength.value=qs(t.curvature),v.uniforms.uScanlines.value=t.scanlines&&t.theme!=="paper"?1:0,v.uniforms.uVignette.value=t.theme==="paper"?0:1,om(v,t.magnify,l,S.value||h.width,b.value||h.height),p.needsUpdate=!0,u.render(m,g))}}function D(H){if(!r.value)return[-1,-1];const te=r.value.getBoundingClientRect();return Qp(H.clientX-te.left,H.clientY-te.top,te.width,te.height,qs(t.curvature),((h==null?void 0:h.width)||te.width)/c,((h==null?void 0:h.height)||te.height)/c)}function F(H,te){return gu(T().rects,H,te)}function B(H){const[te,U]=D(H),V=F(te,U);V>=0&&i("cell-click",t.cells[V].id)}function W(H){if(t.magnify&&r.value){const Y=ko(H,r.value);l.x=Y.x,l.y=Y.y}const[te,U]=D(H),V=F(te,U);V!==o.value?(o.value=V,y()):t.magnify&&y(),r.value&&(r.value.style.cursor=V>=0?"pointer":"default")}function K(){o.value=-1,l.x=jt.x,l.y=jt.y,y()}function $(H){const te=I();te<=0||(H.preventDefault(),a.value=Math.max(0,Math.min(te,a.value+H.deltaY)),y())}let Z=null;return Rn(()=>{P(),Z=new ResizeObserver(()=>E()),s.value&&Z.observe(s.value)}),Wn(()=>{Z==null||Z.disconnect(),d(),x.clear()}),je(()=>[t.curvature,t.bendField],()=>dn(E)),je(()=>[t.cells,t.theme,t.glow,t.scanlines,t.showVolume,t.magnify],()=>{a.value=Math.min(a.value,I()),y()},{deep:!1}),(H,te)=>(Je(),mt("div",{ref_key:"wrapEl",ref:s,class:"cathode-candle-grid-wrap"},[Le("canvas",{ref_key:"canvasEl",ref:r,onClick:B,onMousemove:W,onMouseleave:K,onWheel:$},null,544)],512))}}),$w=li(Yw,[["__scopeId","data-v-f4e5e064"]]),$a={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",dim:"#a0b8d0",left:"#ff9a9a",right:"#a0e8c0",neutral:"#a0b8d0",warn:"#ffd890",surface:"rgba(255,255,255,0.05)",border:"#2a3a50"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",dim:"#888888",left:"#c0392b",right:"#1a8038",neutral:"#888888",warn:"#a06000",surface:"rgba(0,0,0,0.035)",border:"#dee2e6"},phosphor:{bg:"#060d06",text:"#80ff80",dim:"#3fbf3f",left:"#ff8080",right:"#a0ffa0",neutral:"#3fbf3f",warn:"#ffe66d",surface:"rgba(51,255,51,0.05)",border:"#0a250a"},amber:{bg:"#0a0700",text:"#ffd060",dim:"#b08020",left:"#ff8a5a",right:"#ffe6a0",neutral:"#b08020",warn:"#ff9f40",surface:"rgba(255,176,0,0.06)",border:"#3a2a00"}},Zh=(n,e)=>e==="left"?n.left:e==="right"?n.right:!e||e==="neutral"?n.dim:e,kt="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Rt=12;function rc(n,e,t){const i=[];for(const s of e.split(`
`)){let r="";for(const o of s.split(" ")){const a=r?`${r} ${o}`:o;r&&n.measureText(a).width>t?(i.push(r),r=o):r=a}i.push(r)}return i}function oo(n,e,t,i,s,r){const o=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(e+o,t),n.lineTo(e+i-o,t),n.quadraticCurveTo(e+i,t,e+i,t+o),n.lineTo(e+i,t+s-o),n.quadraticCurveTo(e+i,t+s,e+i-o,t+s),n.lineTo(e+o,t+s),n.quadraticCurveTo(e,t+s,e,t+s-o),n.lineTo(e,t+o),n.quadraticCurveTo(e,t,e+o,t),n.closePath()}function ym(n,e){var T,I;const t=n.getContext("2d");if(!t)return 0;const i=e.dpr||1,s=n.width/i,r=n.height/i,o={...$a[e.theme]??$a.none,...e.colors??{}};t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r);const a=x=>x>0?o.right:x<0?o.left:o.neutral,l=a(e.value),c=(x,y=10)=>{e.glow&&(t.shadowColor=x,t.shadowBlur=y)},u=()=>{t.shadowBlur=0,t.shadowColor="transparent"},f=Math.max(40,s-Rt*2);let d=Rt;t.textBaseline="alphabetic",t.textAlign="left";const m=e.readout??`${e.value>0?"+":""}${e.value}`;t.font=`800 34px ${kt}`;const g=t.measureText(m).width;t.fillStyle=l,c(l,14),t.fillText(m,Rt,d+30),u();const v=Rt+g+14;e.stance&&(t.font=`700 14px ${kt}`,t.fillStyle=l,c(l,8),t.fillText(e.stance.toUpperCase(),v,d+15),u()),e.sub&&(t.font=`11px ${kt}`,t.fillStyle=o.dim,t.fillText(e.sub,v,d+31)),d+=48,t.font=`700 9px ${kt}`;const p=e.leftLabel.toUpperCase(),h=e.rightLabel.toUpperCase(),S=t.measureText(p).width,b=t.measureText(h).width,_=Rt+S+8,P=s-Rt-b-8,E=d+10;if(t.fillStyle=o.left,t.fillText(p,Rt,E+3),t.fillStyle=o.right,t.textAlign="right",t.fillText(h,s-Rt,E+3),t.textAlign="left",P-_>24){const x=t.createLinearGradient(_,0,P,0);x.addColorStop(0,o.left),x.addColorStop(.45,o.surface),x.addColorStop(.55,o.surface),x.addColorStop(1,o.right),oo(t,_,E-4,P-_,8,4),t.save(),t.globalAlpha=.5,t.fillStyle=x,t.fill(),t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke();const y=(_+P)/2;t.strokeStyle=o.border,t.beginPath(),t.moveTo(y,E-8),t.lineTo(y,E+8),t.stroke();for(const K of[.25,.75]){const $=_+K*(P-_);t.beginPath(),t.moveTo($,E-5),t.lineTo($,E+5),t.stroke()}const D=e.max-e.min||1,F=Math.max(0,Math.min(1,(e.shown-e.min)/D)),B=_+F*(P-_),W=a(e.shown);t.beginPath(),t.moveTo(B,E-10),t.lineTo(B-4.5,E-17),t.lineTo(B+4.5,E-17),t.closePath(),t.fillStyle=W,t.fill(),t.beginPath(),t.arc(B,E,6.5,0,Math.PI*2),t.fillStyle=W,c(W,12),t.fill(),u(),t.strokeStyle=o.bg==="rgba(0,0,0,0)"?o.border:o.bg,t.lineWidth=2,t.stroke();for(const K of e.marks??[]){const $=(K.value-e.min)/D;if($<0||$>1)continue;const Z=_+$*(P-_),H=Zh(o,K.color);if(t.save(),t.setLineDash([2,2]),t.strokeStyle=H,t.lineWidth=1,t.beginPath(),t.moveTo(Z,E-9),t.lineTo(Z,E+9),t.stroke(),t.restore(),K.label){t.font=`700 8px ${kt}`,t.fillStyle=H;const te=t.measureText(K.label).width;t.fillText(K.label,Math.max(_,Math.min(P-te,Z-te/2)),E+20)}}}if(d+=(T=e.marks)!=null&&T.some(x=>x.label)?42:30,e.meter){const x=e.meter,y=x.min??0,D=x.max??1,F=D-y||1,B=x.tone==="up"?o.right:x.tone==="down"?o.left:x.tone==="warn"?o.warn:o.neutral;x.label&&(t.font=`700 9px ${kt}`,t.fillStyle=o.dim,t.fillText(x.label.toUpperCase(),Rt,d+9)),x.hint&&(t.font=`9px ${kt}`,t.fillStyle=o.dim,t.textAlign="right",t.fillText(x.hint,s-Rt,d+9),t.textAlign="left"),(x.label||x.hint)&&(d+=15),t.font=`700 12px ${kt}`;const W=x.valueText??(x.value==null?"—":String(x.value)),K=t.measureText(W).width,$=Rt,Z=s-Rt-K-10,H=d+6,te=!!((I=x.thresholds)!=null&&I.some(U=>U.label));if(Z-$>24){if(oo(t,$,H-5,Z-$,10,5),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),x.value!=null){const U=Math.max(0,Math.min(1,(x.value-y)/F));U>0&&(t.save(),oo(t,$,H-5,Z-$,10,5),t.clip(),t.globalAlpha=.7,t.fillStyle=B,c(B,8),t.fillRect($,H-5,(Z-$)*U,10),t.restore())}for(const U of x.thresholds??[]){const V=(U.value-y)/F;if(V<0||V>1)continue;const Y=$+V*(Z-$),ae=Zh(o,U.color);if(t.strokeStyle=ae,t.lineWidth=1,t.beginPath(),t.moveTo(Y,H-7),t.lineTo(Y,H+7),t.stroke(),U.label){t.font=`700 7.5px ${kt}`,t.fillStyle=ae;const Q=t.measureText(U.label).width;t.fillText(U.label,Math.max($,Math.min(Z-Q,Y-Q/2)),H+17)}}}t.font=`700 12px ${kt}`,t.fillStyle=B,t.textAlign="right",c(B,8),t.fillText(W,s-Rt,H+4),u(),t.textAlign="left",d+=te?32:22}if(e.caption){t.font=`600 11.5px ${kt}`;const x=rc(t,e.caption,f-18),y=x.length*15+12;oo(t,Rt,d,f,y,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=e.value<0?o.left:o.border,t.lineWidth=1,t.stroke(),t.fillStyle=e.value<0?o.left:e.value>0?o.text:o.dim,x.forEach((D,F)=>t.fillText(D,Rt+9,d+17+F*15)),d+=y+10}if(e.note){t.font=`10px ${kt}`,t.fillStyle=o.dim;const x=rc(t,e.note,f);x.forEach((y,D)=>t.fillText(y,Rt,d+10+D*14)),d+=x.length*14+10}if(e.items.length){let D=Rt;for(const F of e.items){const B=F.side==="left"?o.left:F.side==="right"?o.right:o.neutral,W=F.side==="left"?e.sideLetters[0]:F.side==="right"?e.sideLetters[1]:"";t.font=`700 10px ${kt}`;const K=t.measureText(F.label).width;t.font=`700 8px ${kt}`;const $=W?t.measureText(W).width+6:0;t.font=`10px ${kt}`;const Z=F.value?t.measureText(F.value).width:0,H=7+K+(W?4+$:0)+(F.value?4+Z:0)+7;D+H>s-Rt&&D>Rt&&(D=Rt,d+=23),oo(t,D,d,H,18,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),t.fillStyle=B,t.fillRect(D,d+1,2,16);let te=D+7;t.font=`700 10px ${kt}`,t.fillStyle=o.text,t.fillText(F.label,te,d+12.5),te+=K+4,W&&(t.font=`700 8px ${kt}`,t.fillStyle=B,t.fillText(W,te+3,d+12),te+=$+4),F.value&&(t.font=`10px ${kt}`,t.fillStyle=F.tone==="up"?o.right:F.tone==="down"?o.left:o.dim,t.fillText(F.value,te,d+12.5)),D+=H+5}d+=18}else if(e.emptyText){t.font=`10px ${kt}`,t.fillStyle=o.dim;const x=rc(t,e.emptyText,f);x.forEach((y,D)=>t.fillText(y,Rt,d+10+D*14)),d+=x.length*14}return d+Rt}const qw=ai({__name:"CathodeGauge",props:{theme:{default:"none"},curvature:{default:10},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},value:{},min:{default:-1},max:{default:1},readout:{},stance:{},sub:{},leftLabel:{default:"−"},rightLabel:{default:"+"},sideLetters:{default:()=>["−","+"]},marks:{default:()=>[]},meter:{default:null},caption:{},note:{},items:{default:()=>[]},emptyText:{},colors:{},animate:{type:Boolean,default:!0}},setup(n){const e=n,t=be(null),i=be(null),s=()=>(e.min+e.max)/2,r=be(e.animate?s():e.value);let o=0;function a(){if(cancelAnimationFrame(o),!e.animate){r.value=e.value,p();return}const D=()=>{const F=e.value-r.value;if(Math.abs(F)<.004){r.value=e.value,p();return}r.value+=F*.18,p(),o=requestAnimationFrame(D)};o=requestAnimationFrame(D)}je(()=>e.value,a);let l=null,c=!1;function u(){if(l){try{l.forceContextLoss()}catch{}try{l.dispose()}catch{}l=null}}let f,d;const m=new Zi({paint:(D,{dpr:F,glow:B})=>ym(D,{dpr:F,theme:e.theme,colors:e.colors,glow:B,shown:r.value,value:e.value,min:e.min,max:e.max,readout:e.readout,stance:e.stance,sub:e.sub,leftLabel:e.leftLabel,rightLabel:e.rightLabel,sideLetters:e.sideLetters,marks:e.marks,meter:e.meter,caption:e.caption,note:e.note,items:e.items,emptyText:e.emptyText})});function g(){if(!(!i.value||!t.value)){try{l=new Js({canvas:i.value,antialias:!1,alpha:!0})}catch{c=!0}if(!c&&!l.getContext()&&(l.dispose(),l=null,c=!0),c){v();return}l.setPixelRatio(1),l.setClearColor(0,0),f=new Qs,d=new Zs(-1,1,1,-1,0,1),f.add(new Bt(new en(2,2),m.material)),v()}}function v(){if(!t.value||!l&&!c)return;const D=t.value.clientWidth,F=t.value.clientHeight;m.resize(D,F)&&(l?(l.setPixelRatio(m.dpr),l.setSize(D,F)):i.value&&(i.value.width=m.canvas.width,i.value.height=m.canvas.height,i.value.style.width=D+"px",i.value.style.height=F+"px"),p())}function p(){if(!m.canvas.width)return;if(c){if(!i.value)return;m.paintOnly(!1);const F=i.value.getContext("2d");F&&(F.setTransform(1,0,0,1,0,0),F.clearRect(0,0,i.value.width,i.value.height),F.drawImage(m.canvas,0,0));return}if(!l)return;const D=e.theme==="paper";m.setLook({curvature:e.curvature,scanlines:e.scanlines&&!D,vignette:!D,magnify:e.magnify}),m.syncUniforms(),m.paint(e.glow),l.render(f,d)}je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.readout,e.stance,e.sub,e.leftLabel,e.rightLabel,e.sideLetters,e.marks,e.meter,e.caption,e.note,e.items,e.emptyText,e.colors,e.min,e.max],()=>p(),{deep:!0}),je(()=>e.magnify,D=>{D||m.setLens(null),p()});function h(D){!e.magnify||!i.value||(m.setLens(ko(D,i.value)),p())}function S(){m.setLens(null),p()}let b=null,_=null,P=0;const E=zi("cathodeResetTick",be(0));je(E,()=>T());function T(){cancelAnimationFrame(P),P=requestAnimationFrame(v)}function I(D){D.preventDefault()}function x(){l==null||l.dispose(),l=null,c=!1,g(),p()}Rn(()=>{dn(()=>{var D;g(),i.value&&(i.value.addEventListener("webglcontextlost",I),i.value.addEventListener("webglcontextrestored",x)),t.value&&(b=new ResizeObserver(()=>v()),b.observe(t.value),_=new IntersectionObserver(F=>{F.some(B=>B.isIntersecting)&&T()}),_.observe(t.value)),window.addEventListener("resize",T),(D=window.visualViewport)==null||D.addEventListener("resize",T),a()})}),Wn(()=>{var D,F,B;cancelAnimationFrame(o),cancelAnimationFrame(P),(D=i.value)==null||D.removeEventListener("webglcontextlost",I),(F=i.value)==null||F.removeEventListener("webglcontextrestored",x),b==null||b.disconnect(),_==null||_.disconnect(),window.removeEventListener("resize",T),(B=window.visualViewport)==null||B.removeEventListener("resize",T),u(),m.dispose()});const y=nt(()=>({background:($a[e.theme]??$a.none).bg}));return(D,F)=>(Je(),mt("div",{ref_key:"wrapEl",ref:t,class:"cathode-gauge-wrap",style:Un(y.value)},[Le("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-gauge-canvas",onMousemove:h,onMouseleave:S},null,544)],4))}}),Kw=li(qw,[["__scopeId","data-v-6c2fc3b2"]]),Jh={type:"change"},Ju={type:"start"},Mm={type:"end"},pa=new Vu,Qh=new gi,jw=Math.cos(70*lu.DEG2RAD),zt=new ee,Sn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oc=1e-6;class Zw extends vb{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.enabled=!0,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new yi,this._lastTargetPosition=new ee,this._quat=new yi().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vh,this._sphericalDelta=new Vh,this._scale=1,this._panOffset=new ee,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new ee,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qw.bind(this),this._onPointerDown=Jw.bind(this),this._onPointerUp=eE.bind(this),this._onContextMenu=aE.bind(this),this._onMouseWheel=iE.bind(this),this._onKeyDown=sE.bind(this),this._onTouchStart=rE.bind(this),this._onTouchMove=oE.bind(this),this._onMouseDown=tE.bind(this),this._onMouseMove=nE.bind(this),this._interceptControlDown=lE.bind(this),this._interceptControlUp=cE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jh),this.update(),this.state=Mt.NONE}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new ee(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new ee(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pa.origin.copy(this.object.position),pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pa.direction))<jw?this.object.lookAt(this.target):(Qh.setFromNormalAndCoplanarPoint(this.object.up,this.target),pa.intersectPlane(Qh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oc||this._lastTargetPosition.distanceToSquared(this.target)>oc?(this.dispatchEvent(Jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Jw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Qw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function eE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mm),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case Pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case Pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ju)}function nE(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function iE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(Ju),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Mm))}function sE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function rE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ju)}function oE(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function aE(n){this.enabled!==!1&&n.preventDefault()}function lE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const uE={bg:"#0d1520",border:"#2a3a50",text:"#c0d0e0",muted:"#6a7f96",accent:"#40a0f0",hover:"rgba(255,255,255,0.07)",divider:"#1e2a3a"},fE=-40,hE=40,ma=2,Ot=188,In=26,bn=24,fi=30,Sm=24,Li=In+bn*3+fi+Sm,ac="11px system-ui, -apple-system, sans-serif",Dt=22,_r=10;class br{constructor(e,t={}){Oe(this,"mesh");Oe(this,"panel",null);Oe(this,"canvas",document.createElement("canvas"));Oe(this,"texture");Oe(this,"colors");Oe(this,"display",{curvature:0,scanlines:!1,glow:!1,magnify:!1});Oe(this,"hover",null);this.ppu=e,this.colors={...uE,...t};const i=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.round(Ot*i),this.canvas.height=Math.round(Li*i),this.texture=new _s(this.canvas),this.texture.colorSpace=on,this.mesh=new Bt(new en(Ot/e,Li/e),new Lo({map:this.texture,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.mesh.renderOrder=1e6,this.mesh.visible=!1}get isOpen(){return!!this.panel}setColors(e){this.colors={...this.colors,...e},this.panel&&this.draw()}open(e,t,i,s){this.close(),this.panel=e,this.display={...s},this.hover=null;const r=e.content.width,o=e.content.height,a=Math.max(4,Math.min(t,r-Ot-4)),l=Math.max(4,Math.min(i,o-Li-4));this.mesh.position.set((a+Ot/2-r/2)/this.ppu,(o/2-(l+Li/2))/this.ppu,.02),e.group.add(this.mesh),this.mesh.visible=!0,this.draw()}close(){this.panel&&(this.panel.group.remove(this.mesh),this.mesh.visible=!1,this.panel=null,this.hover=null)}update(e){this.display={...e},this.draw()}setHover(e){e!==this.hover&&(this.hover=e,this.draw())}rowAtUV(e,t){const i=e*Ot,r=(1-t)*Li-In;if(r<0)return null;if(r<bn*3)return["scanlines","glow","magnify"][Math.floor(r/bn)];if(r-bn*3<fi){if(i>=Ot-_r-Dt)return"curve+";if(i>=Ot-_r-Dt-54-Dt&&i<Ot-_r-Dt-54)return"curve-"}return null}static rowCentre(e){switch(e){case"scanlines":return{x:90,y:In+bn*.5};case"glow":return{x:90,y:In+bn*1.5};case"magnify":return{x:90,y:In+bn*2.5};case"curve-":return{x:Ot-_r-Dt-54-Dt/2,y:In+bn*3+fi/2};case"curve+":return{x:Ot-_r-Dt/2,y:In+bn*3+fi/2}}}draw(){var c;const e=Math.min(window.devicePixelRatio||1,2),t=this.colors,i=this.canvas.getContext("2d");i.setTransform(e,0,0,e,0,0),i.clearRect(0,0,Ot,Li),i.fillStyle=t.bg,i.fillRect(0,0,Ot,Li),i.strokeStyle=t.border,i.lineWidth=1,i.strokeRect(.5,.5,Ot-1,Li-1),i.textBaseline="middle",i.fillStyle=t.muted,i.font="bold 9px system-ui, -apple-system, sans-serif",i.letterSpacing="1px",i.textAlign="left",i.fillText("DISPLAY",10,In/2),i.letterSpacing="0px",i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="right",i.fillText(`curve: ${this.display.curvature}`,Ot-10,In/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,In-.5),i.lineTo(Ot,In-.5),i.stroke(),[["scanlines","Scan lines",this.display.scanlines],["glow","Glow",this.display.glow],["magnify","Magnify (hover lens)",this.display.magnify]].forEach(([u,f,d],m)=>{const g=In+m*bn;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(1,g,Ot-2,bn));const v=10,p=g+(bn-12)/2;i.strokeStyle=d?t.accent:t.muted,i.lineWidth=1.2,i.strokeRect(v+.5,p+.5,11,11),d&&(i.lineWidth=1.8,i.lineCap="round",i.beginPath(),i.moveTo(v+3,p+6.5),i.lineTo(v+5.5,p+9),i.lineTo(v+9.5,p+3.5),i.stroke()),i.fillStyle=t.text,i.font=ac,i.textAlign="left",i.fillText(f,30,g+bn/2)});const r=In+bn*3;i.strokeStyle=t.divider,i.lineWidth=1,i.beginPath(),i.moveTo(0,r+.5),i.lineTo(Ot,r+.5),i.stroke(),i.fillStyle=t.text,i.font=ac,i.textAlign="left",i.fillText("Bend",10,r+fi/2);const o=(u,f,d)=>{const m=r+(fi-Dt)/2;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(f,m,Dt,Dt)),i.strokeStyle=this.hover===u?t.accent:t.border,i.lineWidth=1,i.strokeRect(f+.5,m+.5,Dt-1,Dt-1),i.strokeStyle=t.text,i.lineWidth=1.6,i.lineCap="round",i.beginPath(),i.moveTo(f+6,m+Dt/2),i.lineTo(f+Dt-6,m+Dt/2),d&&(i.moveTo(f+Dt/2,m+6),i.lineTo(f+Dt/2,m+Dt-6)),i.stroke()},a=Ot-_r-Dt,l=a-54-Dt;o("curve-",l,!1),o("curve+",a,!0),i.fillStyle=t.text,i.font=ac,i.textAlign="center",i.fillText(String(this.display.curvature),l+Dt+27,r+fi/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,r+fi+.5),i.lineTo(Ot,r+fi+.5),i.stroke(),i.fillStyle=t.muted,i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="left",i.fillText("Cmd+Shift +/−  bends the hovered panel",10,r+fi+Sm/2),this.texture.needsUpdate=!0,(c=this.panel)==null||c.invalidate()}dispose(){this.close(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}}Oe(br,"width",Ot),Oe(br,"height",Li);const ed={bg:"#08130e",bgFocused:"#0f2a1d",line:"#2f6b4c",lineFocused:"#6ee7a7",text:"#6fae8f",textFocused:"#b6f5d2",box:"#2f6b4c",boxFocused:"#3f8f6b",accent:"#6ee7a7",accentText:"#d5fbe6"},Kn=26,ga=20,va=18,_a=4,xa=8,Hs=16,td="11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",nd=4,dE={w:240,h:160},pE={w:1600,h:1e3};class mE{constructor(e,t){Oe(this,"id");Oe(this,"content");Oe(this,"group",new uo);Oe(this,"body");Oe(this,"bar");Oe(this,"glow");Oe(this,"_display",{curvature:0,scanlines:!0,glow:!0,magnify:!1});Oe(this,"dirty",!0);Oe(this,"barDirty",!0);Oe(this,"_title");Oe(this,"controls");Oe(this,"resizable");Oe(this,"minSize");Oe(this,"maxSize");Oe(this,"_grip",null);Oe(this,"_minimized",!1);Oe(this,"_maximized",!1);Oe(this,"hoverControl",null);Oe(this,"hoverAction",null);Oe(this,"_actions",[]);Oe(this,"barCanvas",document.createElement("canvas"));Oe(this,"barTexture");var l,c,u,f,d;this.stage=e,this.id=t.id,this._title=t.title??t.id,this.controls=t.controls??[],this._actions=(t.actions??[]).map(m=>({...m})),this.content=t.content,this.resizable=!!t.resizable&&typeof t.content.resize=="function",this.minSize=t.minSize??dE,this.maxSize=t.maxSize??pE,this.glow=t.glow??!0;const i=t.content.surface;if(i.mode!=="world")throw new Error("CathodeStage3D panels need a CathodeSurface created with mode: 'world'");const s=e.pxPerUnit,r=t.content.width/s,o=t.content.height/s,a=Kn/s;if(this.body=new Bt(new en(r,o),i.material),this.barTexture=new _s(this.barCanvas),this.barTexture.colorSpace=on,this.bar=new Bt(new en(r,a),new Lo({map:this.barTexture,toneMapped:!1})),this.bar.position.y=o/2+a/2,this.group.add(this.body,this.bar),this.body.userData.panel=this,this.bar.userData.panel=this,this.resizable){const m=Hs/s,g=document.createElement("canvas");g.width=g.height=32;const v=g.getContext("2d");v.strokeStyle="#6ee7a7",v.lineWidth=3,v.lineCap="round",v.beginPath();for(const h of[10,18,26])v.moveTo(30,h),v.lineTo(h,30);v.stroke();const p=new _s(g);p.colorSpace=on,this._grip=new Bt(new en(m,m),new Lo({map:p,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1})),this.group.add(this._grip),this.placeGrip()}t.visible===!1&&(this.group.visible=!1),t.minimized&&(this._minimized=!0,this.body.visible=!1),t.position&&this.group.position.set(...t.position),this.group.rotation.y=t.rotationY??0,t.look&&i.setLook(t.look),this._display={curvature:((l=t.look)==null?void 0:l.curvature)??0,scanlines:((c=t.look)==null?void 0:c.scanlines)??!0,glow:this.glow,magnify:((u=t.look)==null?void 0:u.magnify)??!1},i.resize(t.content.width,t.content.height,window.devicePixelRatio||1),(d=(f=t.content).attach)==null||d.call(f,()=>this.invalidate())}get grip(){return this._grip}get title(){return this._title}setTitle(e){e!==this._title&&(this._title=e,this.invalidateBar())}placeGrip(){if(!this.grip)return;const e=this.stage.pxPerUnit;this.grip.position.set((this.content.width-Hs)/2/e,-(this.content.height-Hs)/2/e,.003),this.grip.visible=!this._minimized}setHoverGrip(e){this.grip&&(this.grip.material.opacity=e?1:.55,this.stage.invalidate())}resize(e,t){if(!this.resizable||(e=Math.round(Math.min(this.maxSize.w,Math.max(this.minSize.w,e))),t=Math.round(Math.min(this.maxSize.h,Math.max(this.minSize.h,t))),e===this.content.width&&t===this.content.height))return!1;this.content.resize(e,t),this.content.surface.resize(e,t,window.devicePixelRatio||1);const i=this.stage.pxPerUnit,s=Kn/i;return this.body.geometry.dispose(),this.body.geometry=new en(e/i,t/i),this.bar.geometry.dispose(),this.bar.geometry=new en(e/i,s),this.bar.position.y=t/i/2+s/2,this.placeGrip(),this.dirty=!0,this.barDirty=!0,this.stage.invalidate(),!0}get minimized(){return this._minimized}get maximized(){return this._maximized}setMinimized(e){this._minimized!==e&&(this._minimized=e,this.body.visible=!e,this.grip&&(this.grip.visible=!e),this.invalidateBar(),e||this.invalidate())}setMaximized(e){this._maximized!==e&&(this._maximized=e,this.invalidateBar())}setHoverControl(e,t=null){this.hoverControl===e&&this.hoverAction===t||(this.hoverControl=e,this.hoverAction=t,this.invalidateBar())}get actions(){return this._actions.map(e=>({...e}))}setActions(e){e.length===this._actions.length&&e.every((i,s)=>i.id===this._actions[s].id&&i.label===this._actions[s].label&&!!i.active==!!this._actions[s].active)||(this._actions=e.map(i=>({...i})),this.invalidateBar())}controlsLeft(){return this.controls.length?this.content.width-xa-this.controls.length*(ga+_a)+_a:this.content.width-xa}actionRects(){if(!this._actions.length)return[];const e=this.barCanvas.getContext("2d");e.font=td;const t=this._actions.map(r=>Math.ceil(e.measureText(r.label).width)+14),i=t.reduce((r,o)=>r+o,0)+(t.length-1)*nd;let s=this.controlsLeft()-10-i;return this._actions.map((r,o)=>{const a={id:r.id,x:s,y:(Kn-va)/2-1,w:t[o],h:va};return s+=t[o]+nd,a})}controlRect(e){const t=this.controls.indexOf(e);if(t<0)return null;const i=this.controls.length;return{x:this.content.width-xa-(i-t)*ga-(i-1-t)*_a,y:(Kn-va)/2-1,w:ga,h:va}}controlAt(e,t){for(const i of this.controls){const s=this.controlRect(i);if(e>=s.x&&e<=s.x+s.w&&t>=s.y&&t<=s.y+s.h)return i}return null}actionAt(e,t){for(const i of this.actionRects())if(e>=i.x&&e<=i.x+i.w&&t>=i.y&&t<=i.y+i.h)return i.id;return null}get visible(){return this.group.visible}setVisible(e){this.group.visible!==e&&(this.group.visible=e,e?this.invalidate():this.stage.invalidate())}invalidate(){this.dirty=!0,this.stage.invalidate()}invalidateBar(){this.barDirty=!0,this.stage.invalidate()}setLook(e){this.content.surface.setLook(e);const t=this._display;e.curvature!==void 0&&(t.curvature=e.curvature),e.scanlines!==void 0&&(t.scanlines=e.scanlines),e.magnify!==void 0&&(t.magnify=e.magnify),this.invalidate()}get display(){return{...this._display}}setDisplay(e){this._display={...this._display,...e};const t=this._display;this.content.surface.setLook({curvature:t.curvature,scanlines:t.scanlines,magnify:t.magnify}),this.glow=t.glow,t.magnify||this.content.surface.setLens(null),this.invalidate()}setPosition(e,t,i){this.group.position.set(e,t,i),this.stage.invalidate()}setRotationY(e){this.group.rotation.y=e,this.stage.invalidate()}paintIfDirty(){if(!this.group.visible)return;const e=this.content.surface;this.dirty&&(e.syncUniforms(),e.paint(this.glow),this.dirty=!1),this.barDirty&&(this.drawBar(),this.barDirty=!1)}drawBar(){const e=Math.min(window.devicePixelRatio||1,2),t=this.content.width,i=Kn,s=this.barCanvas;(s.width!==Math.round(t*e)||s.height!==Math.round(i*e))&&(s.width=Math.round(t*e),s.height=Math.round(i*e),this.barTexture.dispose(),this.barTexture=new _s(s),this.barTexture.colorSpace=on,this.bar.material.map=this.barTexture,this.bar.material.needsUpdate=!0);const r=s.getContext("2d");r.setTransform(e,0,0,e,0,0);const o=this.stage.focusedId===this.id,a=this.stage.barColors,l=this.stage.barStyle==="cockpit";r.fillStyle=o?a.bgFocused:a.bg,r.fillRect(0,0,t,i),r.fillStyle=o?a.lineFocused:a.line,r.fillRect(0,i-2,t,2),r.textBaseline="middle",r.font="12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";const c=this.actionRects(),u=l?23:10,f=c.length?c[0].x-8-u:this.controls.length?t-10-(xa+this.controls.length*(ga+_a))-(u-10):t-10-u;l?(r.save(),r.fillStyle=a.accent,r.shadowColor=a.accent,r.shadowBlur=4,r.beginPath(),r.arc(12.5,i/2-1,2.5,0,Math.PI*2),r.fill(),r.restore(),r.font="bold 9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",r.letterSpacing="1.26px",r.fillStyle=(o?a.titleFocused:a.title)??(o?a.textFocused:a.text),r.fillText(this._title.toUpperCase(),u,i/2-1,Math.max(20,f)),r.letterSpacing="0px"):(r.fillStyle=o?a.textFocused:a.text,r.fillText(this._title,u,i/2-1,Math.max(20,f))),this.drawActions(r,o,c),this.drawControls(r,o),this.barTexture.needsUpdate=!0}drawActions(e,t,i){const s=this.stage.barColors;e.font=td,e.textAlign="center",e.textBaseline="middle",this._actions.forEach((r,o)=>{const a=i[o];r.active?this.fillAlpha(e,s.accent,.28,a):this.hoverAction===r.id&&this.fillAlpha(e,s.accent,.14,a),e.strokeStyle=r.active?s.accent:t?s.boxFocused:s.box,e.lineWidth=1,e.strokeRect(a.x+.5,a.y+.5,a.w-1,a.h-1),e.fillStyle=r.active?s.accentText:t?s.textFocused:s.text,e.fillText(r.label,a.x+a.w/2,a.y+a.h/2+.5)}),e.textAlign="left"}fillAlpha(e,t,i,s){const r=/^#([0-9a-f]{6})$/i.exec(t);if(r){const o=parseInt(r[1],16);e.fillStyle=`rgba(${o>>16&255},${o>>8&255},${o&255},${i})`,e.fillRect(s.x,s.y,s.w,s.h);return}e.save(),e.globalAlpha=i,e.fillStyle=t,e.fillRect(s.x,s.y,s.w,s.h),e.restore()}drawControls(e,t){const i=this.stage.barColors;for(const s of this.controls){const r=this.controlRect(s);this.hoverControl===s&&this.fillAlpha(e,i.accent,.2,r),e.strokeStyle=t?i.textFocused:i.text,e.lineWidth=1.4;const o=r.x+r.w/2,a=r.y+r.h/2;e.beginPath(),s==="info"?(e.arc(o,a,6,0,Math.PI*2),e.moveTo(o,a-.5),e.lineTo(o,a+3),e.moveTo(o,a-3.2),e.lineTo(o,a-2.6)):s==="close"?(e.moveTo(o-4,a-4),e.lineTo(o+4,a+4),e.moveTo(o+4,a-4),e.lineTo(o-4,a+4)):s==="minimize"?this._minimized?(e.moveTo(o-5,a),e.lineTo(o+5,a),e.moveTo(o,a-5),e.lineTo(o,a+5)):(e.moveTo(o-5,a+3),e.lineTo(o+5,a+3)):this._maximized?(e.rect(o-5,a-2,7,6),e.moveTo(o-2,a-2),e.lineTo(o-2,a-5),e.lineTo(o+5,a-5),e.lineTo(o+5,a+1),e.lineTo(o+2,a+1)):e.rect(o-5,a-4,10,8),e.stroke()}}dispose(){var e,t,i;if(this.body.geometry.dispose(),this.bar.geometry.dispose(),this.bar.material.dispose(),this.barTexture.dispose(),this.grip){this.grip.geometry.dispose();const s=this.grip.material;(e=s.map)==null||e.dispose(),s.dispose()}(i=(t=this.content).dispose)==null||i.call(t)}}class gE{constructor(e){Oe(this,"renderer");Oe(this,"scene",new Qs);Oe(this,"camera");Oe(this,"canvas");Oe(this,"panels",new Map);Oe(this,"pxPerUnit");Oe(this,"focusedId",null);Oe(this,"barColors",{...ed});Oe(this,"barStyle","plain");Oe(this,"controls",null);Oe(this,"ray",new gb);Oe(this,"ndc",new at);Oe(this,"raf",0);Oe(this,"rendering",!1);Oe(this,"raiseCounter",0);Oe(this,"hovered",null);Oe(this,"pressed",null);Oe(this,"dragging",null);Oe(this,"suppressClick",!1);Oe(this,"menu",null);Oe(this,"lensPanel",null);Oe(this,"resizeObserver");Oe(this,"disposers",[]);Oe(this,"lastCursor","");Oe(this,"passThrough");Oe(this,"swallowClick",!1);Oe(this,"pressedControl",null);Oe(this,"resizing",null);Oe(this,"hoverGrip",null);Oe(this,"hoverBar",null);Oe(this,"cancelFly",null);this.o=e,this.pxPerUnit=e.pxPerUnit??360,this.passThrough=!!e.passThrough,this.renderer=new Js({antialias:!0,alpha:!!e.transparent}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(e.background??329738,e.transparent?0:1),this.canvas=this.renderer.domElement,this.passThrough||(this.canvas.tabIndex=0),this.canvas.style.cssText="display:block;width:100%;height:100%;outline:none;touch-action:none"+(this.passThrough?";pointer-events:none":""),e.container.appendChild(this.canvas),this.camera=new Hn(e.fov??45,1,e.near??.05,e.far??100);const t=e.cameraPosition??[0,.1,3.4];this.camera.position.set(...t),this.camera.lookAt(0,0,0),e.controls&&(this.controls=e.controls(this.camera,this.canvas),this.controls.addEventListener("change",()=>this.invalidate()));const i=this.passThrough?e.inputTarget??document:this.canvas;this.on(i,"pointerdown",s=>this.onPointerDown(s),{capture:!0}),this.on(i,"pointermove",s=>this.onPointerMove(s)),this.passThrough||this.on(this.canvas,"pointerleave",()=>this.setHover(null)),this.on(window,"pointerup",s=>this.onPointerUp(s)),this.on(window,"pointercancel",s=>this.onPointerUp(s)),this.on(i,"click",s=>this.onClick(s),{capture:this.passThrough}),this.on(i,"wheel",s=>this.onWheel(s),{capture:!0,passive:!1}),this.on(this.passThrough?window:this.canvas,"keydown",s=>this.onKey(s)),e.barColors&&(this.barColors={...ed,...e.barColors}),e.barStyle&&(this.barStyle=e.barStyle),e.displayMenu&&(this.menu=new br(this.pxPerUnit,typeof e.displayMenu=="object"?e.displayMenu.colors:{}),this.on(i,"contextmenu",s=>this.onContextMenu(s),{capture:!0})),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.container),this.resize()}on(e,t,i,s){e.addEventListener(t,i,s),this.disposers.push(()=>e.removeEventListener(t,i,s))}setCameraPose(e){var t,i;this.camera.position.set(...e.position),this.camera.lookAt(...e.target),this.camera.updateMatrixWorld(!0),(i=(t=this.controls)==null?void 0:t.target)==null||i.set(...e.target),this.invalidate()}facingPose(e,t={}){const i=this.panels.get(e);if(!i)return null;i.group.updateWorldMatrix(!0,!0);const s=this.pxPerUnit,r=i.content.height/s,o=Kn/s,a=i.content.width/s,l=r/2+o,c=i.minimized?r/2:-r/2,u=l-c,f=i.body.localToWorld(new ee(0,(l+c)/2,0)),d=new ee(0,0,1).applyQuaternion(i.group.getWorldQuaternion(new yi)),m=Math.tan(lu.degToRad(this.camera.fov/2)),g=Math.max(u/2/m,a/2/(m*this.camera.aspect))*(1+(t.margin??.12)),v=f.clone().addScaledVector(d,g);return{position:[v.x,v.y,v.z],target:[f.x,f.y,f.z]}}framePose(e,t={}){const i=(e??[...this.panels.keys()]).map(E=>this.panels.get(E)).filter(E=>!!E);if(!i.length)return null;const s=this.pxPerUnit,r=Kn/s,o=new ee;for(const E of i)E.group.updateWorldMatrix(!0,!0),o.add(new ee(0,0,1).applyQuaternion(E.group.getWorldQuaternion(new yi)));o.normalize(),isFinite(o.x)||o.set(0,0,1);const a=new ee().crossVectors(new ee(0,1,0),o);a.lengthSq()<1e-6&&a.set(1,0,0),a.normalize();const l=new ee().crossVectors(o,a).normalize();let c=1/0,u=-1/0,f=1/0,d=-1/0,m=0,g=0;for(const E of i){const T=E.content.width/s,I=E.content.height/s,x=I/2+r,y=E.minimized?I/2:-I/2;for(const[D,F]of[[-T/2,y],[T/2,y],[-T/2,x],[T/2,x]]){const B=E.body.localToWorld(new ee(D,F,0)),W=B.dot(a),K=B.dot(l);c=Math.min(c,W),u=Math.max(u,W),f=Math.min(f,K),d=Math.max(d,K),m+=B.dot(o),g++}}const v=1+(t.margin??.08),p=(u-c)*v,h=(d-f)*v,S=Math.tan(lu.degToRad(this.camera.fov/2)),b=Math.max(h/2/S,p/2/(S*this.camera.aspect),t.minDistance??0),_=a.clone().multiplyScalar((c+u)/2).addScaledVector(l,(f+d)/2).addScaledVector(o,m/g),P=_.clone().addScaledVector(o,b);return{position:[P.x,P.y,P.z],target:[_.x,_.y,_.z]}}flyTo(e,t=550){var s;if((s=this.cancelFly)==null||s.call(this),t<=0)return this.setCameraPose(e),Promise.resolve();const i=this.getCameraPose();return new Promise(r=>{const o=performance.now();let a=0;this.cancelFly=()=>{cancelAnimationFrame(a),this.cancelFly=null,r()};const l=c=>{const u=Math.min(1,(c-o)/t),f=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,d=(m,g)=>[m[0]+(g[0]-m[0])*f,m[1]+(g[1]-m[1])*f,m[2]+(g[2]-m[2])*f];this.setCameraPose({position:d(i.position,e.position),target:d(i.target,e.target)}),u<1?a=requestAnimationFrame(l):(this.cancelFly=null,r())};a=requestAnimationFrame(l)})}getCameraPose(){const e=this.camera.position,t=this.camera.getWorldDirection(new ee).add(e);return{position:[e.x,e.y,e.z],target:[t.x,t.y,t.z]}}addPanel(e){if(this.panels.has(e.id))throw new Error(`CathodeStage3D: duplicate panel id "${e.id}"`);const t=new mE(this,e);return t.content.surface.setAnisotropy(this.renderer.capabilities.getMaxAnisotropy()),this.panels.set(e.id,t),this.scene.add(t.group),this.raise(t),this.invalidate(),t}removePanel(e){var i;const t=this.panels.get(e);t&&(this.focusedId===e&&this.setFocus(null),this.hovered===t&&(this.hovered=null),this.pressed===t&&(this.pressed=null),this.lensPanel===t&&(this.lensPanel=null),((i=this.menu)==null?void 0:i.panel)===t&&this.menu.close(),this.scene.remove(t.group),t.dispose(),this.panels.delete(e),this.invalidate())}setPanelVisible(e,t){var s;const i=this.panels.get(e);i&&(i.setVisible(t),t||(this.focusedId===e&&this.setFocus(null),this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null),((s=this.dragging)==null?void 0:s.panel)===i&&(this.dragging=null)),this.invalidate())}setPanelMinimized(e,t){const i=this.panels.get(e);i&&(i.setMinimized(t),t&&(this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null)),this.invalidate())}setFocus(e){var s,r;if(this.focusedId===e){e&&this.raise(this.panels.get(e));return}const t=this.focusedId&&this.panels.get(this.focusedId);this.focusedId=e,t&&t.invalidateBar();const i=e?this.panels.get(e):null;i&&(this.raise(i),i.invalidateBar()),(r=(s=this.o).onFocus)==null||r.call(s,e),this.invalidate()}raise(e){e.body.renderOrder=e.bar.renderOrder=++this.raiseCounter,e.grip&&(e.grip.renderOrder=e.body.renderOrder+.5)}getLayout(){const e={};for(const[t,i]of this.panels)e[t]={x:i.group.position.x,y:i.group.position.y,z:i.group.position.z,rotY:i.group.rotation.y,visible:i.visible,minimized:i.minimized,...i.resizable?{size:{w:i.content.width,h:i.content.height}}:{}};return e}applyLayout(e){for(const[t,i]of Object.entries(e)){const s=this.panels.get(t);s&&(s.group.position.set(i.x??s.group.position.x,i.y??s.group.position.y,i.z??s.group.position.z),i.rotY!==void 0&&(s.group.rotation.y=i.rotY),i.visible!==void 0&&this.setPanelVisible(t,i.visible),i.minimized!==void 0&&this.setPanelMinimized(t,i.minimized),i.size&&s.resize(i.size.w,i.size.h))}this.invalidate()}invalidate(){this.raf||this.rendering||(this.raf=requestAnimationFrame(()=>{this.raf=0,this.frame()}))}frame(){var e;this.rendering=!0;for(const t of this.panels.values())t.paintIfDirty();(e=this.controls)==null||e.update(),this.renderer.render(this.scene,this.camera),this.rendering=!1}resize(){const e=this.o.container.clientWidth,t=this.o.container.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate())}setRay(e,t){const i=this.canvas.getBoundingClientRect();this.ndc.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera)}contentAt(e,t,i){this.setRay(t,i);const s=this.ray.intersectObject(e.body)[0];return s!=null&&s.uv?e.content.surface.contentPoint(s.uv.x,s.uv.y):null}hitScaleAt(e,t,i){const s=this.contentAt(e,t-4,i),r=this.contentAt(e,t+4,i);return!s||!r?1:Math.max(1,Math.abs(r.x-s.x)/8)}pick(e,t){this.setRay(e,t);const i=[];for(const m of this.panels.values())m.visible&&(m.minimized||i.push(m.body),i.push(m.bar));const s=this.ray.intersectObjects(i,!1);if(!s.length)return null;const r=s[0].distance;let o=s[0];for(const m of s)m.distance-r<.001&&m.object.renderOrder>o.object.renderOrder&&(o=m);const a=o.object.userData.panel,l=o.object===a.bar?"bar":"body",c=l==="body"&&o.uv?a.content.surface.contentPoint(o.uv.x,o.uv.y):null,u=l==="bar"&&o.uv?a.controlAt(o.uv.x*a.content.width,(1-o.uv.y)*Kn):null,f=l==="bar"&&o.uv&&!u?a.actionAt(o.uv.x*a.content.width,(1-o.uv.y)*Kn):null,d=l==="body"&&a.resizable&&!a.minimized&&!!o.uv&&o.uv.x*a.content.width>a.content.width-Hs&&(1-o.uv.y)*a.content.height>a.content.height-Hs;return{panel:a,part:l,content:c,control:u,action:f,handle:d,uv:o.uv?{x:o.uv.x,y:o.uv.y}:null}}clientPointForContent(e,t,i){const s=this.panels.get(e);if(!s)return null;const r=s.content.surface,o=s.content.width,a=s.content.height;let l=t/o,c=1-i/a;const u=(g,v)=>r.contentPoint(g,v);for(let g=0;g<12;g++){const v=u(l,c);if(!v){l=.5+(l-.5)*.8,c=.5+(c-.5)*.8;continue}const p=v.x-t,h=v.y-i;if(Math.hypot(p,h)<.05)break;const S=1e-4,b=u(l+S,c),_=u(l,c+S);if(!b||!_)break;const P=(b.x-v.x)/S,E=(_.x-v.x)/S,T=(b.y-v.y)/S,I=(_.y-v.y)/S,x=P*I-E*T;if(Math.abs(x)<1e-9)break;l-=(I*p-E*h)/x,c-=(-T*p+P*h)/x}const f=u(l,c);if(!f||Math.hypot(f.x-t,f.y-i)>1.5)return null;s.group.updateWorldMatrix(!0,!0);const d=s.body.localToWorld(new ee((l-.5)*(o/this.pxPerUnit),(c-.5)*(a/this.pxPerUnit),0));d.project(this.camera);const m=this.canvas.getBoundingClientRect();return{x:m.left+(d.x+1)/2*m.width,y:m.top+(1-d.y)/2*m.height}}clientPointForHandle(e){const t=this.panels.get(e);if(!t||!t.resizable)return null;t.group.updateWorldMatrix(!0,!0);const i=this.pxPerUnit,s=t.body.localToWorld(new ee((t.content.width/2-Hs/2)/i,-(t.content.height/2-Hs/2)/i,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}clientPointForAction(e,t){const i=this.panels.get(e),s=i==null?void 0:i.actionRects().find(l=>l.id===t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=i.bar.localToWorld(new ee((s.x+s.w/2-i.content.width/2)/r,-(s.y+s.h/2-Kn/2)/r,0)).project(this.camera),a=this.canvas.getBoundingClientRect();return{x:a.left+(o.x+1)/2*a.width,y:a.top+(1-o.y)/2*a.height}}clientPointForControl(e,t){const i=this.panels.get(e),s=i==null?void 0:i.controlRect(t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=new ee((s.x+s.w/2-i.content.width/2)/r,0,0);o.y=(Kn/2-(s.y+s.h/2))/r;const a=i.bar.localToWorld(o).project(this.camera),l=this.canvas.getBoundingClientRect();return{x:l.left+(a.x+1)/2*l.width,y:l.top+(1-a.y)/2*l.height}}clientPointForBar(e){const t=this.panels.get(e);if(!t)return null;t.group.updateWorldMatrix(!0,!0);const i=t.bar.getWorldPosition(new ee).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(i.x+1)/2*s.width,y:s.top+(1-i.y)/2*s.height}}send(e,t,i,s={}){var a,l;const r=this.contentAt(e,i.clientX,i.clientY),o={kind:t,x:r?r.x:-1,y:r?r.y:-1,hitScale:r?this.hitScaleAt(e,i.clientX,i.clientY):1,clientX:i.clientX,clientY:i.clientY,deltaX:s.deltaX??0,deltaY:s.deltaY??0,detail:t==="click"?i.detail??0:0,shiftKey:!!i.shiftKey};return((l=(a=e.content).pointer)==null?void 0:l.call(a,o))??null}setCursor(e){e!==this.lastCursor&&(this.lastCursor=e,this.o.onCursor?this.o.onCursor(e):this.canvas.style.cursor=e)}setHover(e,t){this.hovered&&this.hovered!==e&&this.send(this.hovered,"leave",t??{clientX:-1,clientY:-1}),this.hovered=e,e||(this.setCursor(""),this.setLens(null))}accepts(e){return!this.passThrough||!this.o.shouldHandle||this.o.shouldHandle(e.target)}onPointerDown(e){var i;if(e.button!==0||!this.accepts(e))return;if((i=this.menu)!=null&&i.isOpen){const s=this.pickMenu(e.clientX,e.clientY);if(s){e.preventDefault(),e.stopPropagation(),this.suppressClick=!0,this.menuAct(s);return}this.menu.close(),this.invalidate()}this.passThrough||this.canvas.focus({preventScroll:!0});const t=this.pick(e.clientX,e.clientY);if(!t){this.passThrough&&this.setFocus(null);return}this.passThrough&&(e.stopPropagation(),this.swallowClick=!0),this.controls&&(this.controls.enabled=!1),this.setFocus(t.panel.id),this.suppressClick=!1,t.part==="bar"&&(t.control||t.action)?(this.pressedControl={panel:t.panel,control:t.control,action:t.action},this.setCursor("pointer")):t.part==="bar"?(this.startDrag(t.panel),this.setCursor("grabbing")):t.handle?(this.startResize(t.panel),this.setCursor("nwse-resize")):(this.pressed=t.panel,this.send(t.panel,"down",e))}onPointerMove(e){var s;if(this.resizing){this.resizeTo(e);return}if(this.dragging){this.dragTo(e);return}if(this.pressed){this.send(this.pressed,"drag",e);return}if(this.pressedControl)return;if(!this.accepts(e)){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null);return}if((s=this.menu)!=null&&s.isOpen){const r=this.pickMenu(e.clientX,e.clientY);if(this.menu.setHover(r),r){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null),this.setLens(null),this.setCursor("pointer");return}}const t=this.pick(e.clientX,e.clientY);if(this.setLens(t&&t.part==="body"&&!t.handle?t:null),this.setHoverGrip(t!=null&&t.handle?t.panel:null),this.setHover(t&&t.part==="body"&&!t.handle?t.panel:null,e),this.setHoverBar(t&&t.part==="bar"?t.panel:null,(t==null?void 0:t.control)??null,(t==null?void 0:t.action)??null),!t){this.setCursor("");return}if(t.part==="bar"){this.setCursor(t.control||t.action?"pointer":"grab");return}if(t.handle){this.setCursor("nwse-resize");return}const i=this.send(t.panel,"move",e);i&&this.setCursor(i)}setHoverBar(e,t,i=null){this.hoverBar&&this.hoverBar!==e&&this.hoverBar.setHoverControl(null,null),this.hoverBar=e,e==null||e.setHoverControl(t,i)}setHoverGrip(e){this.hoverGrip&&this.hoverGrip!==e&&this.hoverGrip.setHoverGrip(!1),this.hoverGrip=e,e==null||e.setHoverGrip(!0)}onPointerUp(e){var t,i,s,r;if(this.pressedControl=null,this.resizing){const o=this.resizing;if(this.resizing=null,o.moved){this.suppressClick=!0;const a=o.panel.group.position;(i=(t=this.o).onPanelResized)==null||i.call(t,o.panel.id,{w:o.panel.content.width,h:o.panel.content.height},{x:a.x,y:a.y,z:a.z})}this.setCursor("")}if(this.dragging){this.dragging.moved&&(this.suppressClick=!0);const o=this.dragging.panel;this.dragging=null,this.setCursor(""),(r=(s=this.o).onPanelMoved)==null||r.call(s,o.id,{x:o.group.position.x,y:o.group.position.y,z:o.group.position.z})}this.pressed&&(this.send(this.pressed,"up",e),this.pressed=null),this.controls&&(this.controls.enabled=!0)}onClick(e){var i,s,r,o,a,l;if(!this.accepts(e))return;if(this.passThrough&&this.swallowClick&&(this.swallowClick=!1,e.stopPropagation()),this.suppressClick){this.suppressClick=!1;return}const t=this.pick(e.clientX,e.clientY);t&&this.passThrough&&e.stopPropagation(),t&&t.part==="body"&&this.send(t.panel,"click",e),t&&t.part==="bar"&&(t.control?(s=(i=this.o).onPanelControl)==null||s.call(i,t.panel.id,t.control):t.action?(o=(r=this.o).onPanelAction)==null||o.call(r,t.panel.id,t.action):e.detail>=2&&((l=(a=this.o).onPanelActivate)==null||l.call(a,t.panel.id)))}onWheel(e){if(!this.accepts(e))return;const t=this.pick(e.clientX,e.clientY);!t||t.part!=="body"||(e.preventDefault(),e.stopImmediatePropagation(),this.send(t.panel,"wheel",e,{deltaX:e.deltaX,deltaY:e.deltaY}))}onKey(e){if(this.passThrough){const i=e.target;if(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))return}if(this.menu){if(e.key==="Escape"&&this.menu.isOpen){this.menu.close(),this.invalidate();return}if(e.metaKey&&e.shiftKey&&/^[=+\-_]$/.test(e.key)){const i=this.menu.panel??this.hovered;if(i){e.preventDefault(),this.stepBend(i,e.key==="="||e.key==="+"?ma:-ma);return}}}const t=this.focusedId?this.panels.get(this.focusedId):null;t!=null&&t.content.key&&(t.content.key(e),t.invalidate())}onContextMenu(e){if(!this.menu)return;if(!this.accepts(e)){this.menu.close(),this.invalidate();return}if(this.dragging||this.resizing)return;const t=this.pick(e.clientX,e.clientY);if(!t){this.menu.isOpen&&(this.menu.close(),this.invalidate());return}e.preventDefault(),e.stopPropagation(),this.setFocus(t.panel.id);const i=t.panel.content.width,s=t.panel.content.height,r=t.part==="body"&&t.uv||t.uv?t.uv.x*i:0,o=t.part==="body"&&t.uv?(1-t.uv.y)*s:0;this.menu.open(t.panel,r,o,t.panel.display),this.invalidate()}openDisplayMenu(e,t=8,i=8){const s=this.panels.get(e);!this.menu||!s||(this.menu.open(s,t,i,s.display),this.invalidate())}setMenuColors(e){var t;(t=this.menu)==null||t.setColors(e),this.invalidate()}setBarColors(e){this.barColors={...this.barColors,...e};for(const t of this.panels.values())t.invalidateBar();this.invalidate()}setBarStyle(e){if(this.barStyle!==e){this.barStyle=e;for(const t of this.panels.values())t.invalidateBar();this.invalidate()}}closeDisplayMenu(){var e;(e=this.menu)!=null&&e.isOpen&&(this.menu.close(),this.invalidate())}get displayMenuPanel(){var e;return((e=this.menu)==null?void 0:e.panel)??null}pickMenu(e,t){var s;if(!((s=this.menu)!=null&&s.isOpen))return null;this.setRay(e,t);const i=this.ray.intersectObject(this.menu.mesh,!1)[0];return i!=null&&i.uv?this.menu.rowAtUV(i.uv.x,i.uv.y):null}clientPointForMenuRow(e){var o;if(!((o=this.menu)!=null&&o.isOpen))return null;const{x:t,y:i}=br.rowCentre(e);this.menu.mesh.updateWorldMatrix(!0,!1);const s=this.menu.mesh.localToWorld(new ee((t-br.width/2)/this.pxPerUnit,(br.height/2-i)/this.pxPerUnit,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}menuAct(e){var s;const t=(s=this.menu)==null?void 0:s.panel;if(!t)return;const i=t.display;if(e==="curve-"||e==="curve+"){this.stepBend(t,e==="curve+"?ma:-ma);return}this.applyDisplay(t,{[e]:!i[e]})}stepBend(e,t){this.applyDisplay(e,{curvature:Math.max(fE,Math.min(hE,e.display.curvature+t))})}applyDisplay(e,t){var i,s,r;e.setDisplay(t),((i=this.menu)==null?void 0:i.panel)===e&&this.menu.update(e.display),(r=(s=this.o).onPanelDisplay)==null||r.call(s,e.id,e.display),this.invalidate()}setLens(e){const t=e&&e.uv&&e.panel.display.magnify?e.panel:null;this.lensPanel&&this.lensPanel!==t&&(this.lensPanel.content.surface.setLens(null),this.lensPanel.invalidate()),this.lensPanel=t,t&&e.uv&&(t.content.surface.setLens({x:e.uv.x,y:e.uv.y}),t.invalidate())}startResize(e){var c;(c=this.menu)==null||c.close(),e.group.updateWorldMatrix(!0,!0);const t=e.group.getWorldQuaternion(new yi),i=new ee(1,0,0).applyQuaternion(t),s=new ee(0,1,0).applyQuaternion(t),r=new ee(0,0,1).applyQuaternion(t),o=this.pxPerUnit,a=e.body.localToWorld(new ee(-e.content.width/o/2,e.content.height/o/2,0)),l=new gi().setFromNormalAndCoplanarPoint(r,a);this.resizing={panel:e,tl:a,right:i,up:s,plane:l,moved:!1}}resizeTo(e){const t=this.resizing;this.setRay(e.clientX,e.clientY);const i=new ee;if(!this.ray.ray.intersectPlane(t.plane,i))return;const s=this.pxPerUnit,r=i.sub(t.tl),o=Math.round(r.dot(t.right)*s),a=Math.round(-r.dot(t.up)*s),l=t.panel,c=Math.round(Math.min(l.maxSize.w,Math.max(l.minSize.w,o))),u=Math.round(Math.min(l.maxSize.h,Math.max(l.minSize.h,a)));c===l.content.width&&u===l.content.height||(l.group.position.copy(t.tl).addScaledVector(t.right,c/s/2).addScaledVector(t.up,-u/s/2),l.resize(c,u),t.moved=!0)}startDrag(e){var o;(o=this.menu)==null||o.close(),e.group.updateWorldMatrix(!0,!0);const t=new ee(0,0,1).applyQuaternion(e.group.quaternion),i=new gi().setFromNormalAndCoplanarPoint(t,e.group.position),s=new ee,r=new ee;this.ray.ray.intersectPlane(i,s)&&r.copy(e.group.position).sub(s),this.dragging={panel:e,plane:i,offset:r,moved:!1}}dragTo(e){const t=this.dragging;this.setRay(e.clientX,e.clientY);const i=new ee;this.ray.ray.intersectPlane(t.plane,i)&&(t.panel.group.position.copy(i.add(t.offset)),t.moved=!0,this.invalidate())}dispose(){var e,t,i;(e=this.cancelFly)==null||e.call(this),cancelAnimationFrame(this.raf),this.resizeObserver.disconnect();for(const s of this.disposers)s();for(const s of[...this.panels.values()])this.removePanel(s.id);(t=this.menu)==null||t.dispose(),(i=this.controls)==null||i.dispose();try{this.renderer.forceContextLoss()}catch{}this.renderer.dispose(),this.canvas.remove()}}function vE(n){const e=Qa();return e.run(()=>{const t=be(0),i=be(0),s=be(0),r=be(-1),o=new Map,a=()=>{var S;return((S=n.minCellW)==null?void 0:S.call(n))??210},l=()=>{var S;return((S=n.cellAspect)==null?void 0:S.call(n))??.6},c=()=>Zu({count:n.cells().length,width:t.value,minCellW:a(),cellAspect:l(),scrollY:s.value}),u=()=>_m(c().totalH,i.value);je([n.cells,n.theme,()=>{var S;return(S=n.showVolume)==null?void 0:S.call(n)},()=>{var S;return(S=n.volumeFraction)==null?void 0:S.call(n)},()=>{var S;return(S=n.slotW)==null?void 0:S.call(n)},()=>{var S;return(S=n.colors)==null?void 0:S.call(n)},a,l],()=>{s.value=Math.min(s.value,u()),n.host.redraw()}),je([s,r],()=>n.host.redraw());function f(S,b){t.value=S,i.value=b,s.value=Math.min(s.value,u()),n.host.redraw()}function d(S){const b=u();return b<=0?!1:(s.value=Math.max(0,Math.min(b,s.value+S)),!0)}function m(S,b){const _=gu(c().rects,S,b);return _>=0?n.cells()[_].id:null}function g(S,b){const _=gu(c().rects,S,b);return r.value=_,_}function v(){r.value=-1}function p(S,{dpr:b,glow:_}){var P,E,T,I;xm(S,{cells:n.cells(),theme:n.theme(),glow:_,showVolume:((P=n.showVolume)==null?void 0:P.call(n))??!0,volumeFraction:((E=n.volumeFraction)==null?void 0:E.call(n))??.22,slotW:((T=n.slotW)==null?void 0:T.call(n))??3,colors:(I=n.colors)==null?void 0:I.call(n),hoveredCell:r.value,scrollY:s.value,minCellW:a(),cellAspect:l(),dpr:b},o)}function h(){o.clear(),e.stop()}return{viewW:t,viewH:i,scrollY:s,hoveredCell:r,layout:c,maxScroll:u,setViewport:f,wheel:d,cellIdAt:m,hover:g,leave:v,paint:p,dispose:h}})}function _E(n){let e=()=>{};const t=n.theme??"phosphor",i=am({columnDefs:()=>n.columnDefs,defaultColDef:()=>n.defaultColDef,rowData:()=>n.rowData,pinnedBottomRowData:()=>n.pinnedBottomRowData,rowHeight:()=>n.rowHeight??28,theme:()=>t,emit:n.emit??(()=>{}),host:{redraw:()=>e()}});i.init(),i.setViewport(n.width,n.height,n.width,n.height);const s=new Zi({mode:"world",paint:(l,c)=>i.paint(l,c)}),r=l=>{const c={cx:l.x,cy:l.y,hitScale:l.hitScale};switch(l.kind){case"move":return i.resizing?null:i.hover(c);case"leave":return i.leave(),null;case"down":return i.pointerDown(c,l.clientX,l.clientY),null;case"drag":return i.globalMove(l.clientX,l.clientY),null;case"up":return i.globalUp(),null;case"click":return i.click(c,{shiftKey:l.shiftKey,detail:l.detail}),null;case"wheel":return i.wheel(l.deltaX,l.deltaY,l.shiftKey),null}},o=l=>{if(i.activeFilter.value){if(l.key==="Escape"){l.preventDefault(),i.clearFilter();return}if(l.key==="Enter"){l.preventDefault(),i.closeFilter();return}if(l.key==="Backspace"){l.preventDefault(),i.setFilterText(i.filterPopupValue.value.slice(0,-1)),e();return}if(l.key.length===1&&!l.ctrlKey&&!l.metaKey){l.preventDefault(),i.setFilterText(i.filterPopupValue.value+l.key),e();return}}i.keyDown(l)},a={model:i,surface:s,width:n.width,height:n.height,attach:l=>{e=l},pointer:r,key:o,resize(l,c){a.width=l,a.height=c,i.setViewport(l,c,l,c),e()},dispose:()=>{i.dispose(),s.dispose()}};return a}function xE(n){let e=()=>{};const t=tl({entries:n.entries,theme:n.theme??"phosphor",showTimestamps:n.showTimestamps,formatTs:n.formatTs,wordWrap:n.wordWrap,maxLines:n.maxLines}),i=cm({entries:()=>t.entries,theme:()=>t.theme??"phosphor",showTimestamps:()=>t.showTimestamps??!0,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap??!0,maxLines:()=>t.maxLines??0,host:{redraw:()=>e()}});i.setViewport(n.width,n.height),i.scrollToBottom();const s=new Zi({mode:"world",paint:(c,u)=>i.paint(c,u)});let r={x:0,y:0},o=!1;const a=c=>{switch(c.kind){case"move":return i.hover(c.x<0?-1:c.y),null;case"leave":return i.leave(),null;case"down":return r={x:c.clientX,y:c.clientY},o=!1,i.panStart(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"drag":return Math.hypot(c.clientX-r.x,c.clientY-r.y)>4&&(o=!0),i.panMove(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"up":return i.panEnd(),null;case"click":return o||i.click(c.x<0?-1:c.y,c.shiftKey),o=!1,null;case"wheel":return i.wheel(c.deltaX,c.deltaY,c.shiftKey),null}},l={model:i,surface:s,width:n.width,height:n.height,attach:c=>{e=c},pointer:a,key:c=>i.keyDown(c),update(c){Object.assign(t,c),e()},resize(c,u){l.width=c,l.height=u,i.setViewport(c,u),e()},dispose:()=>{i.dispose(),s.dispose()}};return l}function yE(n){let e=()=>{};const t=tl({candles:n.candles,theme:n.theme,slotW:n.slotW,showVolume:n.showVolume,volumeFraction:n.volumeFraction,overlays:n.overlays,markers:n.markers,compact:n.compact,colors:n.colors}),i=dm({candles:()=>t.candles,theme:()=>t.theme??"phosphor",slotW:()=>t.slotW??8,showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??um,overlays:()=>t.overlays,markers:()=>t.markers,compact:()=>t.compact??!1,colors:()=>t.colors,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new Zi({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{switch(a.kind){case"move":return i.hoverAt(a.x,a.y),null;case"leave":return i.leave(),null;case"down":return i.panStart(a.clientX*a.hitScale),null;case"drag":return i.panMove(a.clientX*a.hitScale),null;case"up":return i.panEnd(),null;case"wheel":return i.wheel(a.deltaX,a.deltaY,a.shiftKey,a.x),null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,key:a=>i.keyDown(a),update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function ME(n){let e=()=>{};const t=tl({cells:n.cells,theme:n.theme,showVolume:n.showVolume,volumeFraction:n.volumeFraction,slotW:n.slotW,minCellW:n.minCellW,cellAspect:n.cellAspect,colors:n.colors}),i=vE({cells:()=>t.cells,theme:()=>t.theme??"phosphor",showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??.22,slotW:()=>t.slotW??3,colors:()=>t.colors,minCellW:()=>t.minCellW??210,cellAspect:()=>t.cellAspect??.6,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new Zi({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{var l;switch(a.kind){case"move":return i.hover(a.x,a.y)>=0?"pointer":null;case"leave":return i.leave(),null;case"click":{const c=i.cellIdAt(a.x,a.y);return c&&((l=n.onCellClick)==null||l.call(n,c)),null}case"wheel":return i.wheel(a.deltaY),null;default:return null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function SE(n){let e=()=>{},t={...n};const i=()=>((t.min??-1)+(t.max??1))/2;let s=t.animate===!1?t.value:i(),r=0;const o=new Zi({mode:"world",paint:(c,{dpr:u,glow:f})=>{ym(c,{dpr:u,theme:t.theme??"none",colors:t.colors,glow:f,shown:s,value:t.value,min:t.min??-1,max:t.max??1,readout:t.readout,stance:t.stance,sub:t.sub,leftLabel:t.leftLabel??"−",rightLabel:t.rightLabel??"+",sideLetters:t.sideLetters??["−","+"],marks:t.marks??[],meter:t.meter??null,caption:t.caption,note:t.note,items:t.items??[],emptyText:t.emptyText})}}),a=()=>{if(cancelAnimationFrame(r),t.animate===!1){s=t.value,e();return}const c=()=>{const u=t.value-s;if(Math.abs(u)<.004){s=t.value,e();return}s+=u*.18,e(),r=requestAnimationFrame(c)};r=requestAnimationFrame(c)},l={surface:o,width:n.width,height:n.height,attach:c=>{e=c,a()},resize(c,u){l.width=c,l.height=u,e()},update(c){const u=c.value!==void 0&&c.value!==t.value;t={...t,...c},u||c.animate!==void 0?a():e()},get shown(){return s},dispose:()=>{cancelAnimationFrame(r),e=()=>{},o.dispose()}};return l}const fs=300,bE=36e5,wE=Date.UTC(2026,9,1,0,0,0);let lc=20261122;const ya=()=>(lc=lc*1664525+1013904223>>>0,lc/4294967296),An=[];let id=100;for(let n=0;n<fs;n++){const e=id,t=e*(1+(ya()-.48)*.02+Math.sin(n/17)*.002),i=Math.max(e,t)*(1+ya()*.006),s=Math.min(e,t)*(1-ya()*.006);An.push({start:wE+n*bE,open:e,high:i,low:s,close:t,volume:800+Math.round(ya()*2200)}),id=t}const bm=n=>An.map((e,t)=>t<n-1?NaN:An.slice(t-n+1,t+1).reduce((i,s)=>i+s.close,0)/n),Da=bm(20),sd=An.map((n,e)=>e<19?NaN:Math.sqrt(An.slice(e-19,e+1).reduce((t,i)=>t+(i.close-Da[e])**2,0)/20)),EE=[{kind:"band",upper:Da.map((n,e)=>n+2*sd[e]),lower:Da.map((n,e)=>n-2*sd[e]),middle:Da,color:"#6ee7a7"},{kind:"line",data:bm(50),color:"#fbbf24",label:"SMA50"},{kind:"hline",price:An[fs-1].close,color:"#60a5fa",label:"last"}],TE=[{timestamp:An[fs-40].start,price:An[fs-40].low,kind:"entry"},{timestamp:An[fs-12].start,price:An[fs-12].high,kind:"exit"},{timestamp:An[fs-90].start,price:An[fs-90].low,kind:"entry",label:"E"}];function AE(n){return Array.from({length:n},(e,t)=>{const i=An.slice(t*7,t*7+70),s=t%3===0;return{id:`P${t}`,title:t%5===4?`Will the long question number ${t} resolve before the end of the quarter?`:`AAPL${t}`,badge:t%2?"EQ":"₿",note:`${t%2?"-":"+"}${(t*.37+.2).toFixed(2)}%`,noteColor:t%2?"#e74c3c":"#00bc8c",open:s,candles:i,overlays:s?[{kind:"hline",price:i[20].close,color:"#5b8ff9",dashed:!1,label:"entry"}]:[]}})}const CE={class:"ws3d-bar"},RE={key:0,class:"ws3d-caption",role:"status"},rd=26,PE=ai({__name:"Workspace3D",props:{theme:{}},setup(n){const e=n,t=be(null),i=be(""),s=be(!1),r={paper:{bars:{bg:"#e6edf6",bgFocused:"#f3f7fc",line:"#b9c7da",lineFocused:"#2f6fd0",text:"#5a6b80",textFocused:"#1d2b3d",title:"#2f6fd0",titleFocused:"#1f56ad",box:"#b9c7da",boxFocused:"#8aa0bd",accent:"#1f9d66",accentText:"#0b2a1a"},menu:{bg:"#f8fafd",border:"#b9c7da",text:"#1d2b3d",muted:"#6b7c92",accent:"#2f6fd0",divider:"#d6dfeb",hover:"rgba(47,111,208,0.10)"},bg:"radial-gradient(ellipse at 50% 30%, #fbfdff 0%, #eaf1fa 55%, #d3e0f1 100%)",dot:"rgba(47,111,208,0.16)",floor:"#2f6fd0",floorAlpha:.55,panel:{curvature:5,scanlines:!1,glow:!1},up:"#16794f",down:"#c0392b",ui:{ink:"#2f6fd0",btnBg:"rgba(255,255,255,0.75)",btnBorder:"#b9c7da",btnInk:"#33465e",btnHoverInk:"#fff",capBg:"rgba(31,86,173,0.92)",capInk:"#fff",hint:"#5a6b80"}},none:{bars:{bg:"#12122a",bgFocused:"#181840",line:"#26324a",lineFocused:"#40a0f0",text:"#6a85a8",textFocused:"#b8d0ea",title:"#40a0f0",titleFocused:"#7cc4ff",box:"#26324a",boxFocused:"#3a5a80",accent:"#00bc8c",accentText:"#e8fff6"},menu:{bg:"#10182a",border:"#2a3a55",text:"#c0d0e0",muted:"#6a7f96",accent:"#40a0f0",divider:"#1e2a3a",hover:"rgba(255,255,255,0.07)"},bg:"radial-gradient(ellipse at 50% 30%, #131c33 0%, #0a1020 60%, #060a14 100%)",dot:"rgba(64,160,240,0.14)",floor:"#40a0f0",floorAlpha:.5,panel:{curvature:8,scanlines:!0,glow:!1},up:"#00bc8c",down:"#e74c3c",ui:{ink:"#40a0f0",btnBg:"rgba(16,24,42,0.78)",btnBorder:"#2a3a55",btnInk:"#a8c4e4",btnHoverInk:"#06101e",capBg:"rgba(64,160,240,0.95)",capInk:"#06101e",hint:"#6a85a8"}},phosphor:{bars:{},menu:{},bg:"radial-gradient(ellipse at 50% 30%, #0e1a22 0%, #070d12 60%, #04080b 100%)",dot:"rgba(110,231,167,0.14)",floor:"#6ee7a7",floorAlpha:.5,panel:{curvature:10,scanlines:!0,glow:!0},up:"#6ee7a7",down:"#f87171",ui:{ink:"#6ee7a7",btnBg:"rgba(8,19,14,0.7)",btnBorder:"#2f6b4c",btnInk:"#9fd9bd",btnHoverInk:"#06150e",capBg:"rgba(110,231,167,0.95)",capInk:"#06150e",hint:"#6fae8f"}},amber:{bars:{bg:"#1a1205",bgFocused:"#271a07",line:"#5e4310",lineFocused:"#ffcc33",text:"#b8883a",textFocused:"#ffd983",title:"#ffcc33",titleFocused:"#ffe08a",box:"#5e4310",boxFocused:"#8a6418",accent:"#ffcc33",accentText:"#2a1c04"},menu:{bg:"#1a1205",border:"#5e4310",text:"#ffd983",muted:"#b8883a",accent:"#ffcc33",divider:"#3a2a0a",hover:"rgba(255,204,51,0.10)"},bg:"radial-gradient(ellipse at 50% 30%, #20160a 0%, #120c04 60%, #0a0702 100%)",dot:"rgba(255,204,51,0.13)",floor:"#ffb62e",floorAlpha:.5,panel:{curvature:10,scanlines:!0,glow:!0},up:"#ffcc33",down:"#d9531e",ui:{ink:"#ffcc33",btnBg:"rgba(26,18,5,0.78)",btnBorder:"#5e4310",btnInk:"#e0b560",btnHoverInk:"#1a1205",capBg:"rgba(255,204,51,0.95)",capInk:"#1a1205",hint:"#b8883a"}}},o=()=>r[e.theme],a=()=>{const U=o();return{"--bg":U.bg,"--dot":U.dot,"--ink":U.ui.ink,"--btn-bg":U.ui.btnBg,"--btn-border":U.ui.btnBorder,"--btn-ink":U.ui.btnInk,"--btn-hover-ink":U.ui.btnHoverInk,"--cap-bg":U.ui.capBg,"--cap-ink":U.ui.capInk,"--hint":U.ui.hint}},l=["BTC-USD","ETH-USD","SOL-USD","AVAX-USD","LINK-USD","DOGE-USD","ADA-USD","XRP-USD"],c=Array.from({length:80},(U,V)=>({id:V+1,product:l[V%l.length],side:V%3===0?"short":"long",pnl:Math.round(Math.sin(V*1.7)*480)/10,size:100+V*37%900})),u=Date.UTC(2026,10,22,14,0,0),f=["info","info","success","warn","debug","info"],d=Array.from({length:60},(U,V)=>({ts:u+V*7e3,level:f[V%f.length],text:`scanner cycle ${V*3} complete — ${V%5} candidates passed the filter`})),m=U=>{const V=new Date(U);return`${String(V.getUTCHours()).padStart(2,"0")}:${String(V.getUTCMinutes()).padStart(2,"0")}:${String(V.getUTCSeconds()).padStart(2,"0")}`},g={trades:{x:0,y:0,w:560,h:320,title:"Open positions"},candle:{x:580,y:0,w:600,h:320,title:"BTC-USD · 1h"},tilt:{x:1200,y:0,w:340,h:320,title:"Net tilt"},wall:{x:0,y:370,w:740,h:320,title:"Charts"},log:{x:760,y:370,w:780,h:320,title:"Monitor log"}},v=1540,p=690+rd;let h=null,S=null,b=null;const _=new Map;let P=0,E=null;function T(U,V,Y){const ae=new Gn({transparent:!0,depthWrite:!1,side:jn,uniforms:{uColor:{value:new gt(U)},uAlpha:{value:V},uCell:{value:.3},uFar:{value:20}},vertexShader:"varying vec3 vP; void main() { vP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vP, 1.0); }",fragmentShader:`
      varying vec3 vP; uniform vec3 uColor; uniform float uAlpha; uniform float uCell; uniform float uFar;
      float lines(vec2 p, float cell) { vec2 c = p / cell; vec2 g = abs(fract(c - 0.5) - 0.5) / max(fwidth(c), vec2(1e-4)); return 1.0 - min(min(g.x, g.y), 1.0); }
      void main() {
        float minor = lines(vP.xz, uCell), major = lines(vP.xz, uCell * 5.0);
        float fade = smoothstep(uFar, 1.5, length(vP.xz));
        float front = smoothstep(0.0, 0.4, vP.z);              // only IN FRONT of the panels (a ledge they hover over) — never behind their glass, where it would cross their text
        float a = max(minor * 0.55, major) * fade * front * uAlpha;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uColor, a);
      }`}),Q=new Bt(new en(80,80),ae);return Q.rotation.x=-Math.PI/2,Q.position.set(0,Y,-10),Q.renderOrder=-10,Q.name="floor",Q}function I(U){const V=t.value,Y=o(),ae=e.theme;h=new gE({container:V,transparent:!0,controls:(Ce,pe)=>{const R=new Zw(Ce,pe);return R.enableDamping=!0,R.minDistance=.4,R.maxDistance=16,R.zoomSpeed=.9,R},cameraPosition:[0,0,6],displayMenu:{colors:Y.menu},barStyle:"cockpit",barColors:Y.bars,onPanelActivate:Ce=>{const pe=h.facingPose(Ce,{margin:.04});pe&&h.flyTo(pe,650)},onPanelControl:(Ce,pe)=>{const R=h.panels.get(Ce);if(pe==="info"){F(y[Ce]??"",5e3);return}if(pe==="minimize"){h.setPanelMinimized(Ce,!R.minimized);return}if(pe==="maximize")if(R.maximized){R.setMaximized(!1);const O=_.get(Ce);O&&h.flyTo(O,700)}else{_.set(Ce,h.getCameraPose()),R.setMaximized(!0);const O=h.facingPose(Ce,{margin:.03});O&&h.flyTo(O,700)}}});const Q={curvature:Y.panel.curvature,scanlines:Y.panel.scanlines,vignette:!1},he=Y.panel.glow,_e=h.pxPerUnit,ve=Ce=>{const pe=g[Ce];return[(pe.x+pe.w/2-v/2)/_e,-(pe.y+rd+pe.h/2-p/2)/_e,0]},Be=(Ce,pe,R={})=>h.addPanel({id:Ce,title:g[Ce].title,content:pe,position:ve(Ce),look:Q,glow:he,controls:["info","minimize","maximize"],resizable:!0,...R});Be("trades",_E({width:g.trades.w,height:g.trades.h,theme:ae,rowData:c,columnDefs:[{field:"id",headerName:"ID",width:60,sortable:!0},{field:"product",headerName:"Product",width:130,sortable:!0,filter:!0},{field:"side",headerName:"Side",width:90,sortable:!0},{field:"pnl",headerName:"P&L %",width:110,sortable:!0,cellStyle:Ce=>({color:Ce.value>=0?Y.up:Y.down})},{field:"size",headerName:"Size",width:100,sortable:!0}],rowHeight:24})),Be("candle",yE({width:g.candle.w,height:g.candle.h,candles:An,overlays:EE,markers:TE,theme:ae})),b=SE({width:g.tilt.w,height:g.tilt.h,theme:ae,value:.62,min:-1,max:1,stance:"net long",sub:"5 long · 3 short · 9 flat",leftLabel:"SHORT",rightLabel:"LONG",sideLetters:["S","L"],caption:"tilt of the book",note:"a gauge, in the same scene",items:[{label:"BTC",side:"right",value:"+2.1%",tone:"up"},{label:"ETH",side:"right",value:"+0.8%",tone:"up"},{label:"XRP",side:"left",value:"−1.4%",tone:"down"}]}),Be("tilt",b),Be("wall",ME({width:g.wall.w,height:g.wall.h,cells:AE(9),theme:ae})),Be("log",xE({width:g.log.w,height:g.log.h,entries:d,theme:ae,formatTs:m})),E=T(Y.floor,Y.floorAlpha,-358/_e-.12),h.scene.add(E);const He=U??B();He&&h.setCameraPose(He),S=setInterval(()=>{const Ce=Math.round(Math.sin(Date.now()/4e3)*90)/100;b==null||b.update({value:Ce,stance:Ce>=0?"net long":"net short"})},2500),window.__ws3d={stage:h,overview:W,recenter:K,tour:H,stopTour:te,get floor(){return E},theme:()=>e.theme,layout:g,setCaption:Ce=>{i.value=Ce},setTilt:Ce=>{S&&clearInterval(S),S=null,b==null||b.update({value:Ce,stance:Ce>=0?"net long":"net short"})}}}function x(){S&&clearInterval(S),S=null,E&&(E.geometry.dispose(),E.material.dispose()),E=null,h==null||h.dispose(),h=null,b=null,_.clear()}const y={trades:"A sortable, filterable canvas grid — click a header to sort, the funnel to filter",candle:"A three.js candlestick chart — wheel to zoom the series, drag to pan, hover for the crosshair",tilt:"A bipolar gauge — the needle eases to each new reading",wall:"A wall of mini charts drawn into ONE surface — hover a card, scroll the wall",log:"A scrolling console — follow the tail, select and copy lines"};let D=null;function F(U,V){i.value=U,D&&clearTimeout(D),D=setTimeout(()=>{s.value||(i.value="")},V)}function B(){const U=h==null?void 0:h.framePose(void 0,{margin:.12});if(!U)return null;const V=.17;return{position:[U.position[0],U.position[1]-V,U.position[2]],target:[U.target[0],U.target[1]-V,U.target[2]]}}function W(){const U=B();U&&h.flyTo(U,800)}function K(){var U;for(const[V]of _)(U=h==null?void 0:h.panels.get(V))==null||U.setMaximized(!1);_.clear(),W()}async function $(U,V=800){const Y=h==null?void 0:h.facingPose(U,{margin:.05});Y&&await h.flyTo(Y,V)}const Z=U=>new Promise(V=>setTimeout(V,U));async function H(){if(s.value){te();return}s.value=!0;const U=++P,V=()=>P===U&&!!h,Y=[{text:"Zoom out — the whole workspace in one view",run:()=>{W()},hold:1600},{text:"Zoom in — a panel fills the screen",run:()=>$("trades"),hold:1500},{text:"Zoom out — and in again on the chart",run:async()=>{W(),await Z(900),await $("candle")},hold:1700},{text:"A wall of mini charts — one WebGL surface",run:()=>$("wall"),hold:1500},{text:"Back out to the overview",run:()=>{W()},hold:1500}];for(const ae of Y){if(!V())break;i.value=ae.text,await ae.run(),await Z(ae.hold)}P===U&&(i.value="",s.value=!1)}function te(){P++,s.value=!1,i.value="",h==null||h.flyTo(h.getCameraPose(),0)}return je(()=>e.theme,()=>{if(!h)return;const U=h.getCameraPose();te(),x(),I(U)}),Rn(()=>{I(null)}),Ru(()=>{P++,x(),delete window.__ws3d}),(U,V)=>(Je(),mt("div",{class:qt(["ws3d",`t-${n.theme}`]),style:Un(a()),"data-testid":"ws3d"},[Le("div",{ref_key:"host",ref:t,class:"ws3d-stage"},null,512),Le("div",CE,[V[0]||(V[0]=Le("span",{class:"ws3d-title"},"3D workspace",-1)),Le("button",{class:"ws3d-btn",title:"Zoom the whole workspace out until every panel is in frame",onClick:W},"Overview"),Le("button",{class:"ws3d-btn",title:"Fly back to the start",onClick:K},"Recenter"),Le("button",{class:qt(["ws3d-btn",{on:s.value}]),title:"Play a short zoom-in / zoom-out tour",onClick:H},vn(s.value?"■ Stop":"▶ Tour"),3)]),i.value?(Je(),mt("div",RE,vn(i.value),1)):Kt("",!0),V[1]||(V[1]=Le("div",{class:"ws3d-hint"},[Tn("scroll to "),Le("b",null,"zoom"),Tn(" · drag to "),Le("b",null,"orbit"),Tn(" · "),Le("b",null,"□"),Tn(" expands a panel · double-click a title bar to face it · right-click a panel for its display menu · the look follows the Theme menu")],-1))],6))}}),DE=li(PE,[["__scopeId","data-v-8cdc80f9"]]),LE={class:"demo-bar"},IE={class:"demo-tabs"},UE={key:1,class:"demo-btns"},FE={key:2},NE={key:3},OE={key:4},BE={class:"demo-btns"},kE=["value"],zE={class:"tab-content"},HE={class:"tab-content"},VE={class:"tab-content"},GE={class:"tab-content"},WE={class:"tab-content"},XE={class:"tab-content"},YE={key:0,class:"stage-tab"},$E=720,qE=ai({__name:"App",setup(n){const e=be((()=>{const N=new URLSearchParams(location.search).get("tab");return["grid","workspace","stage3d","log","candle","wall","terminal","gauge"].includes(N??"")?N:"stage3d"})()),t=be(e.value==="stage3d"?"paper":"none"),i=nt(()=>t.value!=="paper"),s=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],r=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(N,z){return+(Math.random()*(z-N)+N).toFixed(4)}function l(N){return N[Math.floor(Math.random()*N.length)]}function c(N){return N.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],d=["NY","London","Tokyo","AH"],m=Array.from({length:240},(N,z)=>{const ie=z%r.length,Ee=r[ie],ye=o[ie],Ne=l(s),Ie=u-Math.floor(Math.random()*30*24*36e5),qe=Math.random()<.15,X=a(10,3e3),Re=a(-8,22),fe=+(Re-.12).toFixed(4),Me=+(X*a(.2,2)).toFixed(2),Fe=qe?null:Ie+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(Ie)),entry_timestamp:c(new Date(Ie)),exit_timestamp:Fe?c(new Date(Fe)):"",product:Ee,strategy:Ne,exchange:ye,status:qe?"open":"closed",entry_price:X.toFixed(4),exit_price:qe?"":a(X*.92,X*1.25).toFixed(4),pnl_pct:Re.toFixed(4),net_pnl_pct:fe.toFixed(4),size_base:a(.001,2).toFixed(6),notional:Me.toFixed(2),reason:qe?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(d)}}),g=N=>z=>z.value!==""&&z.value!=null&&!isNaN(Number(z.value))?Number(z.value).toFixed(N):"",v=N=>N.value!==""&&N.value!=null&&!isNaN(Number(N.value))?Number(N.value).toFixed(2)+"%":"—",p={textAlign:"right"};function h(N){var Ie,qe;const z=(Ie=N.data)==null?void 0:Ie.entry_timestamp,ie=(qe=N.data)==null?void 0:qe.exit_timestamp;if(!z||!ie)return"—";const Ee=new Date(ie).getTime()-new Date(z).getTime();if(Ee<0)return"—";const ye=Math.floor(Ee/36e5),Ne=Math.floor(Ee%36e5/6e4);return ye>0?`${ye}h ${Ne}m`:`${Ne}m`}const S=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:N=>N.data.entry_timestamp||N.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:N=>N.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:h,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:N=>N.data.status??"closed",cellStyle:N=>({color:N.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:N=>`${N} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:g(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:g(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:g(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:g(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:N=>Number(N).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:v,cellStyle:N=>({...p,color:Number(N.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:v,cellStyle:N=>({...p,color:Number(N.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:v,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:g(1),cellStyle:N=>({...p,color:Number(N.value)>65?"#e74c3c":Number(N.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:N=>Number(N).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:N=>(Number(N.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:N=>Number(N).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:N=>Number(N).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],b={resizable:!0,sortable:!0},_=be(null),P=be(25),E=be(!0),T=be(!0),I=be(!1),x=be(!1),y=be(-1),D=be([{label:"QQQ",side:"left",value:"+1.4%",tone:"up"},{label:"IWM",side:"left",value:"−0.3%",tone:"down"},{label:"TLT",side:"right",value:"+0.8%",tone:"up"}]),F=nt(()=>y.value>0?"net long":y.value<0?"net short":"flat"),B=nt(()=>y.value<=-2?"CRASH-POSITIONED — the short tilt is the insurance paying out.":y.value<0?"tilting short — a downtrend is developing.":y.value===0?"balanced — no clear trend.":"calm tape — riding the up-trends; would flip short as a selloff develops."),W=be(.31),K=nt(()=>{const N=W.value;return{label:"margin guard",hint:"liquidation headroom · reserve +$200.00",value:N,min:0,max:.6,valueText:N.toFixed(2),tone:N<.15?"down":N<.25?"warn":"up",thresholds:[{value:.25,label:"top-up",color:"neutral"},{value:.15,label:"de-risk",color:"left"},{value:.05,label:"halt",color:"left"}]}});function $(){let N=y.value;for(;N===y.value;)N=Math.floor(Math.random()*9)-4;y.value=N,W.value=+(.03+Math.random()*.5).toFixed(2)}const Z=be(typeof window<"u"?window.innerWidth:1200),H=nt(()=>Z.value<$E);function te(){Z.value=window.innerWidth}Rn(()=>window.addEventListener("resize",te)),Wn(()=>window.removeEventListener("resize",te)),je(H,N=>{N&&e.value==="workspace"&&(e.value="grid")},{immediate:!0});const U=be(!1),V=be(""),Y=be("all"),ae=be(0),Q=be(!0),he=be(!1),_e=be(!1);je(e,N=>{N==="grid"&&ae.value++});function ve(N){_.value=N.api,window.__cathodeGridApi=N.api,N.api.setGridOption("rowData",m),Y.value!=="all"&&He(Y.value)}function Be(N){var ie;const z=N.target.value;V.value=z,(ie=_.value)==null||ie.setGridOption("quickFilterText",z)}function He(N){var z,ie,Ee;Y.value=N,N==="all"?(z=_.value)==null||z.setFilterModel(null):(ie=_.value)==null||ie.setFilterModel({status:{type:"equals",filter:N}}),(Ee=_.value)==null||Ee.onFilterChanged()}const Ce={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function pe(N,z){const Ee=Math.round(N*.62)-12,ye=Ee+12*2,Ne=N-ye-12,Ie=Math.round(z*.62),qe=Ie+12*2,X=z-qe-12;return{trades:{x:12,y:12,w:Ee,h:Ie,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:ye,y:12,w:Ne,h:Ie,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:qe,w:Ee,h:X,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:ye,y:qe,w:Ne,h:X,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const R=pe(window.innerWidth,window.innerHeight-88),O=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const N=[],z=Date.now()-45e5;for(let ie=0;ie<140;ie++){const Ee=O[ie%O.length];N.push({ts:z+ie*32e3,text:Ee.text,level:Ee.level})}return N})();const A=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],de=be([]),se=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],ne=be([{level:"info",text:"CathodeTerminal demo"},...se]),ce=be(!1),xe={help:()=>se,echo:N=>({level:"info",text:N||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:N=>{const z=N.trim();return z?z==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:z==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${z}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:N=>{const z=N.trim()||"localhost",ie=[{level:"info",text:`PING ${z}: 56 data bytes`}];for(let Ee=0;Ee<4;Ee++){const ye=(12+Math.random()*18).toFixed(1);ie.push({level:"success",text:`64 bytes from ${z}: icmp_seq=${Ee} ttl=64 time=${ye} ms`})}return ie},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:N=>{const z=N.trim()||"moo",ie="─".repeat(Math.max(2,z.length+2));return[{level:"info",text:` ╭${ie}╮`},{level:"info",text:` │ ${z} │`},{level:"info",text:` ╰${ie}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const N=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:N[Math.floor(Math.random()*N.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function ue(N){ne.value=[...ne.value,{level:"info",text:`→ ${N}`}];const z=N.trim();if(!z)return;if(z==="clear"){ne.value=[];return}const ie=z.indexOf(" "),Ee=ie===-1?z:z.slice(0,ie),ye=ie===-1?"":z.slice(ie+1),Ne=xe[Ee];let Ie;Ne?Ie=Ne(ye):Ie={level:"warn",text:`unknown command: ${Ee} — type 'help' for the demo vocabulary`},ce.value=!0,setTimeout(()=>{if(Ie!==null){const qe=Array.isArray(Ie)?Ie:[Ie];ne.value=[...ne.value,...qe]}ce.value=!1},180)}const M=["BTC","ETH","SOL","ARB","UNI","DASH","ZEC","AVAX","DOGE","LINK","TAO","NEAR","SPY","QQQ","NVDA","TSLA"].map((N,z)=>{const ie=L(90+z*7%60),Ee=(ie[ie.length-1].close/ie[0].close-1)*100;return{id:N,title:N,badge:z>=12?"EQ":"₿",note:`${Ee>=0?"+":""}${Ee.toFixed(1)}%`,noteColor:Ee>=0?"#00bc8c":"#e74c3c",open:z%5===0,candles:ie}});function L(N){const z=[];let ie=6e4;const Ee=Date.now()-N*36e5;for(let ye=0;ye<N;ye++){const Ne=(Math.random()-.495)*ie*.012,Ie=ie,qe=Math.max(1,ie+Ne),X=Math.max(Ie,qe)*(1+Math.random()*.005),Re=Math.min(Ie,qe)*(1-Math.random()*.005),fe=Math.round(20+Math.random()*80);z.push({start:Ee+ye*36e5,open:Ie,close:qe,high:X,low:Re,volume:fe}),ie=qe}return z}const G=be(L(300));function J(N,z){const ie=new Array(N.length).fill(NaN);let Ee=0;for(let ye=0;ye<N.length;ye++)Ee+=N[ye],ye>=z&&(Ee-=N[ye-z]),ye+1>=z&&(ie[ye]=Ee/z);return ie}function re(N,z){const ie=new Array(N.length).fill(NaN);if(!N.length)return ie;const Ee=2/(z+1);let ye=N[0];ie[0]=ye;for(let Ne=1;Ne<N.length;Ne++)ye=N[Ne]*Ee+ye*(1-Ee),ie[Ne]=ye;for(let Ne=0;Ne<Math.min(z-1,N.length);Ne++)ie[Ne]=NaN;return ie}function we(N,z=20,ie=2){const Ee=J(N,z),ye=new Array(N.length).fill(NaN),Ne=new Array(N.length).fill(NaN);for(let Ie=z-1;Ie<N.length;Ie++){let qe=0;for(let Re=Ie-z+1;Re<=Ie;Re++){const fe=N[Re]-Ee[Ie];qe+=fe*fe}const X=Math.sqrt(qe/z);ye[Ie]=Ee[Ie]+ie*X,Ne[Ie]=Ee[Ie]-ie*X}return{upper:ye,middle:Ee,lower:Ne}}const Se=nt(()=>{const N=G.value.map(ie=>ie.close),z=we(N,20,2);return[{kind:"band",upper:z.upper,middle:z.middle,lower:z.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:re(N,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:re(N,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),Te=nt(()=>{const N=G.value;if(N.length<130)return[];const z=ie=>N[ie];return[{timestamp:z(N.length-120).start,price:z(N.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:z(N.length-100).start,price:z(N.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:z(N.length-80).start,price:z(N.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:z(N.length-60).start,price:z(N.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:z(N.length-40).start,price:z(N.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:z(N.length-20).start,price:z(N.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const N=G.value,z=Te.value;if(!N.length||!z.length)return[];const ie=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!ie)return[];const Ee=ie.width/(window.devicePixelRatio||1),ye=ie.height/(window.devicePixelRatio||1),Ne=8,Ie=56,qe=8,X=22,Re=8,fe=Ee-Ne-Ie,Me=Math.max(1,Math.floor(fe/Re)),Fe=Math.max(0,N.length-Me);let Ue=1/0,Qe=-1/0;for(let At=Fe;At<N.length;At++)N[At].low<Ue&&(Ue=N[At].low),N[At].high>Qe&&(Qe=N[At].high);const _t=(Qe-Ue)*.04;Ue-=_t,Qe+=_t;const Pt=qe,lt=qe+(ye-qe-X-4)*(1-.18),nn=[];for(const At of z){const tr=N[1].start-N[0].start;let Si=-1;for(let k=0;k<N.length;k++)if(Math.abs(N[k].start-At.timestamp)<=tr*.5){Si=k;break}if(Si<Fe||Si>=N.length)continue;const On=Ne+(Si-Fe+.5)*Re,Ji=Pt+(1-(At.price-Ue)/(Qe-Ue))*(lt-Pt);nn.push({x:On,y:Ji,kind:At.kind,label:At.label||""})}return nn}});function We(){const N=[],z=Date.now()-54e5;for(let ie=0;ie<320;ie++){const Ee=A[ie%A.length];N.push({ts:z+ie*16e3,text:Ee.text,level:Ee.level})}de.value=N}return We(),(N,z)=>(Je(),mt("div",{class:qt(["demo-shell",{"cathode-light":!i.value,mobile:H.value}])},[Le("div",LE,[z[31]||(z[31]=Le("span",{class:"demo-title"},"⬛ CATHODE",-1)),Le("div",IE,[Le("button",{class:qt(["tab-btn",{active:e.value==="stage3d"}]),onClick:z[0]||(z[0]=ie=>e.value="stage3d")}," 3D Workspace ",2),H.value?Kt("",!0):(Je(),mt("button",{key:0,class:qt(["tab-btn",{active:e.value==="workspace"}]),onClick:z[1]||(z[1]=ie=>e.value="workspace")}," Workspace ",2)),Le("button",{class:qt(["tab-btn",{active:e.value==="grid"}]),onClick:z[2]||(z[2]=ie=>e.value="grid")}," Grid ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="log"}]),onClick:z[3]||(z[3]=ie=>e.value="log")}," Log ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="wall"}]),onClick:z[4]||(z[4]=ie=>e.value="wall")}," WALL ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="candle"}]),onClick:z[5]||(z[5]=ie=>e.value="candle")}," Candle ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="terminal"}]),onClick:z[6]||(z[6]=ie=>e.value="terminal")}," Terminal ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="gauge"}]),onClick:z[7]||(z[7]=ie=>e.value="gauge")}," Gauge ",2)]),z[32]||(z[32]=Le("label",null,"Theme",-1)),Ht(Le("select",{"onUpdate:modelValue":z[8]||(z[8]=ie=>t.value=ie)},[...z[22]||(z[22]=[Le("option",{value:"none"},"Default (dark)",-1),Le("option",{value:"phosphor"},"Phosphor Green",-1),Le("option",{value:"amber"},"Amber",-1),Le("option",{value:"paper"},"Paper (light)",-1)])],512),[[Xv,t.value]]),e.value!=="stage3d"?(Je(),mt(ln,{key:0},[Le("label",null,"Curve "+vn(P.value)+" · "+vn(P.value<0?"concave":P.value>0?"convex":"flat"),1),Ht(Le("input",{type:"range",min:"-45",max:"45",step:"1","onUpdate:modelValue":z[9]||(z[9]=ie=>P.value=ie),style:{width:"110px"}},null,512),[[_p,P.value,void 0,{number:!0}]]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":z[10]||(z[10]=ie=>E.value=ie),"data-testid":"cf-bendfield"},null,512),[[ns,E.value]]),z[23]||(z[23]=Tn(" Field",-1))]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":z[11]||(z[11]=ie=>T.value=ie)},null,512),[[ns,T.value]]),z[24]||(z[24]=Tn(" Scanlines",-1))]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":z[12]||(z[12]=ie=>U.value=ie)},null,512),[[ns,U.value]]),z[25]||(z[25]=Tn(" Glow",-1))]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":z[13]||(z[13]=ie=>I.value=ie),"data-testid":"cf-magnify"},null,512),[[ns,I.value]]),z[26]||(z[26]=Tn(" Magnify ",-1))]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":z[14]||(z[14]=ie=>x.value=ie),"data-testid":"cf-show-loaders"},null,512),[[ns,x.value]]),z[27]||(z[27]=Tn(" Show loaders ",-1))])],64)):Kt("",!0),e.value==="gauge"?(Je(),mt("div",UE,[Le("button",{"data-testid":"cf-tilt",onClick:$},"Tilt")])):Kt("",!0),e.value==="candle"?(Je(),mt("label",FE,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":z[15]||(z[15]=ie=>Q.value=ie),"data-testid":"cf-show-indicators"},null,512),[[ns,Q.value]]),z[28]||(z[28]=Tn(" Indicators ",-1))])):Kt("",!0),e.value==="candle"?(Je(),mt("label",NE,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":z[16]||(z[16]=ie=>he.value=ie),"data-testid":"cf-flat"},null,512),[[ns,he.value]]),z[29]||(z[29]=Tn(" Flat (no GL) ",-1))])):Kt("",!0),e.value==="candle"?(Je(),mt("label",OE,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":z[17]||(z[17]=ie=>_e.value=ie),"data-testid":"cf-compact"},null,512),[[ns,_e.value]]),z[30]||(z[30]=Tn(" Compact ",-1))])):Kt("",!0),z[33]||(z[33]=Le("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(Je(),mt(ln,{key:5},[Le("div",BE,[Le("button",{class:qt({active:Y.value==="all"}),onClick:z[18]||(z[18]=ie=>He("all"))},"All",2),Le("button",{class:qt({active:Y.value==="open"}),onClick:z[19]||(z[19]=ie=>He("open"))},"Open",2),Le("button",{class:qt({active:Y.value==="closed"}),onClick:z[20]||(z[20]=ie=>He("closed"))},"Closed",2)]),Le("input",{class:"demo-filter",placeholder:"Quick filter…",value:V.value,onInput:Be},null,40,kE)],64)):Kt("",!0)]),Ht(Le("div",zE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,"bend-field":E.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(Wh,{key:ae.value,"column-defs":S,"default-col-def":b,"row-height":28,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,magnify:I.value,pagination:!0,"pagination-page-size":50,onGridReady:ve},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[cs,e.value==="grid"]]),Ht(Le("div",HE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,"bend-field":E.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(du,{key:1,entries:de.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,magnify:I.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[cs,e.value==="log"]]),Ht(Le("div",VE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,"bend-field":E.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt($h,{key:`cf-${he.value}`,candles:G.value,overlays:Q.value?Se.value:[],markers:Q.value?Te.value:[],theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,flat:he.value,compact:_e.value,magnify:I.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[cs,e.value==="candle"]]),Ht(Le("div",GE,[Ct($w,{cells:xt(M),theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,magnify:I.value,"bend-field":E.value,onCellClick:z[21]||(z[21]=ie=>console.log("wall cell:",ie))},null,8,["cells","theme","curvature","scanlines","glow","magnify","bend-field"])],512),[[cs,e.value==="wall"]]),Ht(Le("div",WE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,"bend-field":E.value,label:"READING THE BOOK"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(Kw,{key:1,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,magnify:I.value,value:y.value,min:-6,max:6,stance:F.value,sub:"1 long · 2 short · 3 flat","left-label":"short","right-label":"long","side-letters":["S","L"],marks:[{value:-2,label:"crash-positioned",color:"left"},{value:3,label:"calm tape",color:"neutral"}],meter:K.value,caption:B.value,note:"Insurance, not alpha — judge it by crash-protection, not a calm-month P&L. It bleeds a small premium in quiet tape and pays off when the long books crash.",items:D.value,"empty-text":"Flat — no positions."},null,8,["theme","curvature","scanlines","glow","magnify","value","stance","meter","caption","items"]))],512),[[cs,e.value==="gauge"]]),Ht(Le("div",XE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,"bend-field":E.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(qh,{key:1,entries:ne.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,magnify:I.value,busy:ce.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:ue},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))],512),[[cs,e.value==="terminal"]]),e.value==="stage3d"?(Je(),mt("div",YE,[Ct(DE,{theme:t.value},null,8,["theme"])])):Kt("",!0),Ht(Ct(Pw,{"storage-key":"cathode.demo.layout","initial-layout":xt(R),"container-titles":Ce},{default:Fs(()=>[Ct(da,{id:"trades",title:"Trades",curvature:P.value,canvas:""},{default:Fs(({resizeKey:ie})=>[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,"bend-field":E.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(Wh,{key:ie,"column-defs":S,"default-col-def":b,"row-height":26,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,magnify:I.value,pagination:!0,"pagination-page-size":50,onGridReady:ve},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Ct(da,{id:"chart",title:"Chart",curvature:P.value,canvas:""},{default:Fs(({resizeKey:ie})=>[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,"bend-field":E.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt($h,{key:ie,candles:G.value,overlays:Se.value,markers:Te.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,magnify:I.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Ct(da,{id:"log",title:"Log",curvature:P.value,canvas:""},{default:Fs(()=>[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,"bend-field":E.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(du,{key:1,entries:de.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,magnify:I.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Ct(da,{id:"terminal",title:"Terminal",curvature:P.value,canvas:""},{default:Fs(()=>[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,"bend-field":E.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(qh,{key:1,entries:ne.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:U.value,magnify:I.value,busy:ce.value,prompt:"→ ",onSubmit:ue},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[cs,e.value==="workspace"]])],2))}}),KE=li(qE,[["__scopeId","data-v-bdd27823"]]);Zv(KE).mount("#app");
