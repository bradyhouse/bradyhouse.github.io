var Em=Object.defineProperty;var Tm=(n,e,t)=>e in n?Em(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Oe=(n,e,t)=>Tm(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},wr=[],xi=()=>{},ad=()=>!1,qa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ka=n=>n.startsWith("onUpdate:"),Vt=Object.assign,_u=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Am=Object.prototype.hasOwnProperty,pt=(n,e)=>Am.call(n,e),Ze=Array.isArray,Er=n=>Io(n)==="[object Map]",Wr=n=>Io(n)==="[object Set]",ef=n=>Io(n)==="[object Date]",it=n=>typeof n=="function",Ft=n=>typeof n=="string",ii=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",ld=n=>(vt(n)||it(n))&&it(n.then)&&it(n.catch),cd=Object.prototype.toString,Io=n=>cd.call(n),Cm=n=>Io(n).slice(8,-1),ud=n=>Io(n)==="[object Object]",xu=n=>Ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fo=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ja=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Rm=/-\w/g,ei=ja(n=>n.replace(Rm,e=>e.slice(1).toUpperCase())),Pm=/\B([A-Z])/g,Ss=ja(n=>n.replace(Pm,"-$1").toLowerCase()),fd=ja(n=>n.charAt(0).toUpperCase()+n.slice(1)),hl=ja(n=>n?`on${fd(n)}`:""),_i=(n,e)=>!Object.is(n,e),Ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},hd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Za=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Dm=n=>{const e=Ft(n)?Number(n):NaN;return isNaN(e)?n:e};let tf;const Ja=()=>tf||(tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fn(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ft(i)?Fm(i):Fn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(n)||vt(n))return n}const Lm=/;(?![^(]*\))/g,Im=/:([^]+)/,Um=/\/\*[^]*?\*\//g;function Fm(n){const e={};return n.replace(Um,"").split(Lm).forEach(t=>{if(t){const i=t.split(Im);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qt(n){let e="";if(Ft(n))e=n;else if(Ze(n))for(let t=0;t<n.length;t++){const i=qt(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Nm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Om=vu(Nm);function dd(n){return!!n||n===""}function Bm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Xr(n[i],e[i]);return t}function Xr(n,e){if(n===e)return!0;let t=ef(n),i=ef(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ii(n),i=ii(e),t||i)return n===e;if(t=Ze(n),i=Ze(e),t||i)return t&&i?Bm(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Xr(n[o],e[o]))return!1}}return String(n)===String(e)}function yu(n,e){return n.findIndex(t=>Xr(t,e))}const pd=n=>!!(n&&n.__v_isRef===!0),_n=n=>Ft(n)?n:n==null?"":Ze(n)||vt(n)&&(n.toString===cd||!it(n.toString))?pd(n)?_n(n.value):JSON.stringify(n,md,2):String(n),md=(n,e)=>pd(e)?md(n,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[dl(i,r)+" =>"]=s,t),{})}:Wr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>dl(t))}:ii(e)?dl(e):vt(e)&&!Ze(e)&&!ud(e)?String(e):e,dl=(n,e="")=>{var t;return ii(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tn;class gd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Tn;try{return Tn=this,e()}finally{Tn=t}}}on(){++this._on===1&&(this.prevScope=Tn,Tn=this)}off(){this._on>0&&--this._on===0&&(Tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qa(n){return new gd(n)}function km(){return Tn}let wt;const pl=new WeakSet;class vd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tn&&Tn.active&&Tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pl.has(this)&&(pl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nf(this),yd(this);const e=wt,t=ti;wt=this,ti=!0;try{return this.fn()}finally{Md(this),wt=e,ti=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bu(e);this.deps=this.depsTail=void 0,nf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cc(this)&&this.run()}get dirty(){return cc(this)}}let _d=0,ho,po;function xd(n,e=!1){if(n.flags|=8,e){n.next=po,po=n;return}n.next=ho,ho=n}function Mu(){_d++}function Su(){if(--_d>0)return;if(po){let e=po;for(po=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ho;){let e=ho;for(ho=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function yd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Md(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),bu(i),zm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function cc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Sd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Mo)||(n.globalVersion=Mo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!cc(n))))return;n.flags|=2;const e=n.dep,t=wt,i=ti;wt=n,ti=!0;try{yd(n);const s=n.fn(n._value);(e.version===0||_i(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{wt=t,ti=i,Md(n),n.flags&=-3}}function bu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)bu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function zm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ti=!0;const bd=[];function Gi(){bd.push(ti),ti=!1}function Wi(){const n=bd.pop();ti=n===void 0?!0:n}function nf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=wt;wt=void 0;try{e()}finally{wt=t}}}let Mo=0;class Hm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!wt||!ti||wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==wt)t=this.activeLink=new Hm(wt,this),wt.deps?(t.prevDep=wt.depsTail,wt.depsTail.nextDep=t,wt.depsTail=t):wt.deps=wt.depsTail=t,wd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=wt.depsTail,t.nextDep=void 0,wt.depsTail.nextDep=t,wt.depsTail=t,wt.deps===t&&(wt.deps=i)}return t}trigger(e){this.version++,Mo++,this.notify(e)}notify(e){Mu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Su()}}}function wd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)wd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const uc=new WeakMap,Vs=Symbol(""),fc=Symbol(""),So=Symbol("");function an(n,e,t){if(ti&&wt){let i=uc.get(n);i||uc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new wu),s.map=i,s.key=t),s.track()}}function Ni(n,e,t,i,s,r){const o=uc.get(n);if(!o){Mo++;return}const a=l=>{l&&l.trigger()};if(Mu(),e==="clear")o.forEach(a);else{const l=Ze(n),c=l&&xu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===So||!ii(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(So)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Vs)),Er(n)&&a(o.get(fc)));break;case"delete":l||(a(o.get(Vs)),Er(n)&&a(o.get(fc)));break;case"set":Er(n)&&a(o.get(Vs));break}}Su()}function ir(n){const e=ft(n);return e===n?e:(an(e,"iterate",So),Gn(n)?e:e.map(si))}function el(n){return an(n=ft(n),"iterate",So),n}function pi(n,e){return Xi(n)?Ur(Gs(n)?si(e):e):si(e)}const Vm={__proto__:null,[Symbol.iterator](){return ml(this,Symbol.iterator,n=>pi(this,n))},concat(...n){return ir(this).concat(...n.map(e=>Ze(e)?ir(e):e))},entries(){return ml(this,"entries",n=>(n[1]=pi(this,n[1]),n))},every(n,e){return wi(this,"every",n,e,void 0,arguments)},filter(n,e){return wi(this,"filter",n,e,t=>t.map(i=>pi(this,i)),arguments)},find(n,e){return wi(this,"find",n,e,t=>pi(this,t),arguments)},findIndex(n,e){return wi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wi(this,"findLast",n,e,t=>pi(this,t),arguments)},findLastIndex(n,e){return wi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wi(this,"forEach",n,e,void 0,arguments)},includes(...n){return gl(this,"includes",n)},indexOf(...n){return gl(this,"indexOf",n)},join(n){return ir(this).join(n)},lastIndexOf(...n){return gl(this,"lastIndexOf",n)},map(n,e){return wi(this,"map",n,e,void 0,arguments)},pop(){return Zr(this,"pop")},push(...n){return Zr(this,"push",n)},reduce(n,...e){return sf(this,"reduce",n,e)},reduceRight(n,...e){return sf(this,"reduceRight",n,e)},shift(){return Zr(this,"shift")},some(n,e){return wi(this,"some",n,e,void 0,arguments)},splice(...n){return Zr(this,"splice",n)},toReversed(){return ir(this).toReversed()},toSorted(n){return ir(this).toSorted(n)},toSpliced(...n){return ir(this).toSpliced(...n)},unshift(...n){return Zr(this,"unshift",n)},values(){return ml(this,"values",n=>pi(this,n))}};function ml(n,e,t){const i=el(n),s=i[e]();return i!==n&&!Gn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Gm=Array.prototype;function wi(n,e,t,i,s,r){const o=el(n),a=o!==n&&!Gn(n),l=o[e];if(l!==Gm[e]){const f=l.apply(n,r);return a?si(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,pi(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function sf(n,e,t,i){const s=el(n),r=s!==n&&!Gn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=pi(n,c)),t.call(this,c,pi(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?pi(n,l):l}function gl(n,e,t){const i=ft(n);an(i,"iterate",So);const s=i[e](...t);return(s===-1||s===!1)&&Au(t[0])?(t[0]=ft(t[0]),i[e](...t)):s}function Zr(n,e,t=[]){Gi(),Mu();const i=ft(n)[e].apply(n,t);return Su(),Wi(),i}const Wm=vu("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ii));function Xm(n){ii(n)||(n=String(n));const e=ft(this);return an(e,"has",n),e.hasOwnProperty(n)}class Td{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?tg:Pd:r?Rd:Cd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=Vm[t]))return l;if(t==="hasOwnProperty")return Xm}const a=Reflect.get(e,t,hn(e)?e:i);if((ii(t)?Ed.has(t):Wm(t))||(s||an(e,"get",t),r))return a;if(hn(a)){const l=o&&xu(t)?a:a.value;return s&&vt(l)?dc(l):l}return vt(a)?s?dc(a):Tr(a):a}}class Ad extends Td{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ze(e)&&xu(t);if(!this._isShallow){const c=Xi(r);if(!Gn(i)&&!Xi(i)&&(r=ft(r),i=ft(i)),!o&&hn(r)&&!hn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:pt(e,t),l=Reflect.set(e,t,i,hn(e)?e:s);return e===ft(s)&&(a?_i(i,r)&&Ni(e,"set",t,i):Ni(e,"add",t,i)),l}deleteProperty(e,t){const i=pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ni(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ii(t)||!Ed.has(t))&&an(e,"has",t),i}ownKeys(e){return an(e,"iterate",Ze(e)?"length":Vs),Reflect.ownKeys(e)}}class Ym extends Td{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $m=new Ad,qm=new Ym,Km=new Ad(!0);const hc=n=>n,zo=n=>Reflect.getPrototypeOf(n);function jm(n,e,t){return function(...i){const s=this.__v_raw,r=ft(s),o=Er(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?hc:e?Ur:si;return!e&&an(r,"iterate",l?fc:Vs),Vt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Ho(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Zm(n,e){const t={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);n||(_i(s,a)&&an(o,"get",s),an(o,"get",a));const{has:l}=zo(o),c=e?hc:n?Ur:si;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&an(ft(s),"iterate",Vs),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return n||(_i(s,a)&&an(o,"has",s),an(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?hc:n?Ur:si;return!n&&an(l,"iterate",Vs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Vt(t,n?{add:Ho("add"),set:Ho("set"),delete:Ho("delete"),clear:Ho("clear")}:{add(s){const r=ft(this),o=zo(r),a=ft(s),l=!e&&!Gn(s)&&!Xi(s)?a:s;return o.has.call(r,l)||_i(s,l)&&o.has.call(r,s)||_i(a,l)&&o.has.call(r,a)||(r.add(l),Ni(r,"add",l,l)),this},set(s,r){!e&&!Gn(r)&&!Xi(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=zo(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?_i(r,u)&&Ni(o,"set",s,r):Ni(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=zo(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ni(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&Ni(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=jm(s,n,e)}),t}function Eu(n,e){const t=Zm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pt(t,s)&&s in i?t:i,s,r)}const Jm={get:Eu(!1,!1)},Qm={get:Eu(!1,!0)},eg={get:Eu(!0,!1)};const Cd=new WeakMap,Rd=new WeakMap,Pd=new WeakMap,tg=new WeakMap;function ng(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ig(n){return n.__v_skip||!Object.isExtensible(n)?0:ng(Cm(n))}function Tr(n){return Xi(n)?n:Tu(n,!1,$m,Jm,Cd)}function tl(n){return Tu(n,!1,Km,Qm,Rd)}function dc(n){return Tu(n,!0,qm,eg,Pd)}function Tu(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=ig(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Gs(n){return Xi(n)?Gs(n.__v_raw):!!(n&&n.__v_isReactive)}function Xi(n){return!!(n&&n.__v_isReadonly)}function Gn(n){return!!(n&&n.__v_isShallow)}function Au(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function sg(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&hd(n,"__v_skip",!0),n}const si=n=>vt(n)?Tr(n):n,Ur=n=>vt(n)?dc(n):n;function hn(n){return n?n.__v_isRef===!0:!1}function be(n){return rg(n,!1)}function rg(n,e){return hn(n)?n:new og(n,e)}class og{constructor(e,t){this.dep=new wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:si(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Gn(e)||Xi(e);e=i?e:ft(e),_i(e,t)&&(this._rawValue=e,this._value=i?e:si(e),this.dep.trigger())}}function xt(n){return hn(n)?n.value:n}const ag={get:(n,e,t)=>e==="__v_raw"?n:xt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return hn(s)&&!hn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Dd(n){return Gs(n)?n:new Proxy(n,ag)}class lg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return xd(this,!0),!0}get value(){const e=this.dep.track();return Sd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function cg(n,e,t=!1){let i,s;return it(n)?i=n:(i=n.get,s=n.set),new lg(i,s,t)}const Vo={},La=new WeakMap;let Is;function ug(n,e=!1,t=Is){if(t){let i=La.get(t);i||La.set(t,i=[]),i.push(n)}}function fg(n,e,t=St){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=v=>s?v:Gn(v)||s===!1||s===0?Oi(v,1):Oi(v);let u,f,d,m,g=!1,_=!1;if(hn(n)?(f=()=>n.value,g=Gn(n)):Gs(n)?(f=()=>c(n),g=!0):Ze(n)?(_=!0,g=n.some(v=>Gs(v)||Gn(v)),f=()=>n.map(v=>{if(hn(v))return v.value;if(Gs(v))return c(v);if(it(v))return l?l(v,2):v()})):it(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Gi();try{d()}finally{Wi()}}const v=Is;Is=u;try{return l?l(n,3,[m]):n(m)}finally{Is=v}}:f=xi,e&&s){const v=f,A=s===!0?1/0:s;f=()=>Oi(v(),A)}const p=km(),h=()=>{u.stop(),p&&p.active&&_u(p.effects,u)};if(r&&e){const v=e;e=(...A)=>{v(...A),h()}}let S=_?new Array(n.length).fill(Vo):Vo;const b=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const A=u.run();if(s||g||(_?A.some((T,E)=>_i(T,S[E])):_i(A,S))){d&&d();const T=Is;Is=u;try{const E=[A,S===Vo?void 0:_&&S[0]===Vo?[]:S,m];S=A,l?l(e,3,E):e(...E)}finally{Is=T}}}else u.run()};return a&&a(b),u=new vd(f),u.scheduler=o?()=>o(b,!1):b,m=v=>ug(v,!1,u),d=u.onStop=()=>{const v=La.get(u);if(v){if(l)l(v,4);else for(const A of v)A();La.delete(u)}},e?i?b(!0):S=u.run():o?o(b.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Oi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,hn(n))Oi(n.value,e,t);else if(Ze(n))for(let i=0;i<n.length;i++)Oi(n[i],e,t);else if(Wr(n)||Er(n))n.forEach(i=>{Oi(i,e,t)});else if(ud(n)){for(const i in n)Oi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Oi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uo(n,e,t,i){try{return i?n(...i):n()}catch(s){nl(s,e,t)}}function ri(n,e,t,i){if(it(n)){const s=Uo(n,e,t,i);return s&&ld(s)&&s.catch(r=>{nl(r,e,t)}),s}if(Ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ri(n[r],e,t,i));return s}}function nl(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||St;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Gi(),Uo(r,null,10,[n,l,c]),Wi();return}}hg(n,t,s,i,o)}function hg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const xn=[];let hi=-1;const Ar=[];let us=null,xr=0;const Ld=Promise.resolve();let Ia=null;function dn(n){const e=Ia||Ld;return n?e.then(this?n.bind(this):n):e}function dg(n){let e=hi+1,t=xn.length;for(;e<t;){const i=e+t>>>1,s=xn[i],r=bo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Cu(n){if(!(n.flags&1)){const e=bo(n),t=xn[xn.length-1];!t||!(n.flags&2)&&e>=bo(t)?xn.push(n):xn.splice(dg(e),0,n),n.flags|=1,Id()}}function Id(){Ia||(Ia=Ld.then(Fd))}function pg(n){Ze(n)?Ar.push(...n):us&&n.id===-1?us.splice(xr+1,0,n):n.flags&1||(Ar.push(n),n.flags|=1),Id()}function rf(n,e,t=hi+1){for(;t<xn.length;t++){const i=xn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ud(n){if(Ar.length){const e=[...new Set(Ar)].sort((t,i)=>bo(t)-bo(i));if(Ar.length=0,us){us.push(...e);return}for(us=e,xr=0;xr<us.length;xr++){const t=us[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}us=null,xr=0}}const bo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Fd(n){try{for(hi=0;hi<xn.length;hi++){const e=xn[hi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Uo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hi<xn.length;hi++){const e=xn[hi];e&&(e.flags&=-2)}hi=-1,xn.length=0,Ud(),Ia=null,(xn.length||Ar.length)&&Fd()}}let fn=null,Nd=null;function Ua(n){const e=fn;return fn=n,Nd=n&&n.type.__scopeId||null,e}function Fs(n,e=fn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Oa(-1);const r=Ua(e);let o;try{o=n(...s)}finally{Ua(r),i._d&&Oa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ht(n,e){if(fn===null)return n;const t=al(fn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=St]=e[s];r&&(it(r)&&(r={mounted:r,updated:r}),r.deep&&Oi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function bs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Gi(),ri(l,t,8,[n.el,a,n,e]),Wi())}}function pc(n,e){if(yn){let t=yn.provides;const i=yn.parent&&yn.parent.provides;i===t&&(t=yn.provides=Object.create(i)),t[n]=e}}function zi(n,e,t=!1){const i=dp();if(i||Rr){let s=Rr?Rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&it(e)?e.call(i&&i.proxy):e}}const mg=Symbol.for("v-scx"),gg=()=>zi(mg);function je(n,e,t){return Od(n,e,t)}function Od(n,e,t=St){const{immediate:i,deep:s,flush:r,once:o}=t,a=Vt({},t),l=e&&i||!e&&r!=="post";let c;if(Ao){if(r==="sync"){const m=gg();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=xi,m.resume=xi,m.pause=xi,m}}const u=yn;a.call=(m,g,_)=>ri(m,u,g,_);let f=!1;r==="post"?a.scheduler=m=>{En(m,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Cu(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=fg(n,e,a);return Ao&&(c?c.push(d):l&&d()),d}function vg(n,e,t){const i=this.proxy,s=Ft(n)?n.includes(".")?Bd(i,n):()=>i[n]:n.bind(i,i);let r;it(e)?r=e:(r=e.handler,t=e);const o=Fo(this),a=Od(s,r.bind(i),t);return o(),a}function Bd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const _g=Symbol("_vte"),kd=n=>n.__isTeleport,di=Symbol("_leaveCb"),Jr=Symbol("_enterCb");function xg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pn(()=>{n.isMounted=!0}),Ru(()=>{n.isUnmounting=!0}),n}const zn=[Function,Array],zd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zn,onEnter:zn,onAfterEnter:zn,onEnterCancelled:zn,onBeforeLeave:zn,onLeave:zn,onAfterLeave:zn,onLeaveCancelled:zn,onBeforeAppear:zn,onAppear:zn,onAfterAppear:zn,onAppearCancelled:zn},Hd=n=>{const e=n.subTree;return e.component?Hd(e.component):e},yg={name:"BaseTransition",props:zd,setup(n,{slots:e}){const t=dp(),i=xg();return()=>{const s=e.default&&Wd(e.default(),!0);if(!s||!s.length)return;const r=Vd(s),o=ft(n),{mode:a}=o;if(i.isLeaving)return vl(r);const l=of(r);if(!l)return vl(r);let c=mc(l,o,i,t,f=>c=f);l.type!==un&&wo(l,c);let u=t.subTree&&of(t.subTree);if(u&&u.type!==un&&!Ns(u,l)&&Hd(t).type!==un){let f=mc(u,o,i,t);if(wo(u,f),a==="out-in"&&l.type!==un)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},vl(r);a==="in-out"&&l.type!==un?f.delayLeave=(d,m,g)=>{const _=Gd(i,u);_[String(u.key)]=u,d[di]=()=>{m(),d[di]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Vd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==un){e=t;break}}return e}const Mg=yg;function Gd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function mc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:h,onAfterAppear:S,onAppearCancelled:b}=e,v=String(n.key),A=Gd(t,n),T=(x,y)=>{x&&ri(x,i,9,y)},E=(x,y)=>{const D=y[1];T(x,y),Ze(x)?x.every(U=>U.length<=1)&&D():x.length<=1&&D()},I={mode:o,persisted:a,beforeEnter(x){let y=l;if(!t.isMounted)if(r)y=p||l;else return;x[di]&&x[di](!0);const D=A[v];D&&Ns(n,D)&&D.el[di]&&D.el[di](),T(y,[x])},enter(x){if(A[v]===n)return;let y=c,D=u,U=f;if(!t.isMounted)if(r)y=h||c,D=S||u,U=b||f;else return;let k=!1;x[Jr]=j=>{k||(k=!0,j?T(U,[x]):T(D,[x]),I.delayedLeave&&I.delayedLeave(),x[Jr]=void 0)};const X=x[Jr].bind(null,!1);y?E(y,[x,X]):X()},leave(x,y){const D=String(n.key);if(x[Jr]&&x[Jr](!0),t.isUnmounting)return y();T(d,[x]);let U=!1;x[di]=X=>{U||(U=!0,y(),X?T(_,[x]):T(g,[x]),x[di]=void 0,A[D]===n&&delete A[D])};const k=x[di].bind(null,!1);A[D]=n,m?E(m,[x,k]):k()},clone(x){const y=mc(x,e,t,i,s);return s&&s(y),y}};return I}function vl(n){if(il(n))return n=ys(n),n.children=null,n}function of(n){if(!il(n))return kd(n.type)&&n.children?Vd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&it(t.default))return t.default()}}function wo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,wo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Wd(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===ln?(o.patchFlag&128&&s++,i=i.concat(Wd(o.children,e,a))):(e||o.type!==un)&&i.push(a!=null?ys(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function ai(n,e){return it(n)?Vt({name:n.name},e,{setup:n}):n}function Xd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function af(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Fa=new WeakMap;function mo(n,e,t,i,s=!1){if(Ze(n)){n.forEach((_,p)=>mo(_,e&&(Ze(e)?e[p]:e),t,i,s));return}if(Cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&mo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?al(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===St?a.refs={}:a.refs,f=a.setupState,d=ft(f),m=f===St?ad:_=>af(u,_)?!1:pt(d,_),g=(_,p)=>!(p&&af(u,p));if(c!=null&&c!==l){if(lf(e),Ft(c))u[c]=null,m(c)&&(f[c]=null);else if(hn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(it(l))Uo(l,a,12,[o,u]);else{const _=Ft(l),p=hn(l);if(_||p){const h=()=>{if(n.f){const S=_?m(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ze(S)&&_u(S,r);else if(Ze(S))S.includes(r)||S.push(r);else if(_)u[l]=[r],m(l)&&(f[l]=u[l]);else{const b=[r];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else _?(u[l]=o,m(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const S=()=>{h(),Fa.delete(n)};S.id=-1,Fa.set(n,S),En(S,t)}else lf(n),h()}}}function lf(n){const e=Fa.get(n);e&&(e.flags|=8,Fa.delete(n))}Ja().requestIdleCallback;Ja().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,il=n=>n.type.__isKeepAlive;function Sg(n,e){Yd(n,"a",e)}function bg(n,e){Yd(n,"da",e)}function Yd(n,e,t=yn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(sl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)il(s.parent.vnode)&&wg(i,e,t,s),s=s.parent}}function wg(n,e,t,i){const s=sl(e,n,i,!0);Xn(()=>{_u(i[e],s)},t)}function sl(n,e,t=yn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Gi();const a=Fo(t),l=ri(e,t,n,o);return a(),Wi(),l});return i?s.unshift(r):s.push(r),r}}const ji=n=>(e,t=yn)=>{(!Ao||n==="sp")&&sl(n,(...i)=>e(...i),t)},Eg=ji("bm"),Pn=ji("m"),Tg=ji("bu"),Ag=ji("u"),Ru=ji("bum"),Xn=ji("um"),Cg=ji("sp"),Rg=ji("rtg"),Pg=ji("rtc");function Dg(n,e=yn){sl("ec",n,e)}const Lg=Symbol.for("v-ndc");function Ig(n,e,t,i){let s;const r=t,o=Ze(n);if(o||Ft(n)){const a=o&&Gs(n);let l=!1,c=!1;a&&(l=!Gn(n),c=Xi(n),n=el(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Ur(si(n[u])):si(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function gc(n,e,t={},i,s){if(fn.ce||fn.parent&&Cr(fn.parent)&&fn.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Je(),Lt(ln,null,[Ct("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Je();const o=r&&$d(r(t)),a=t.key||o&&o.key,l=Lt(ln,{key:(a&&!ii(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function $d(n){return n.some(e=>To(e)?!(e.type===un||e.type===ln&&!$d(e.children)):!0)?n:null}const vc=n=>n?pp(n)?al(n):vc(n.parent):null,go=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vc(n.parent),$root:n=>vc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Kd(n),$forceUpdate:n=>n.f||(n.f=()=>{Cu(n.update)}),$nextTick:n=>n.n||(n.n=dn.bind(n.proxy)),$watch:n=>vg.bind(n)}),_l=(n,e)=>n!==St&&!n.__isScriptSetup&&pt(n,e),Ug={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(_l(i,e))return o[e]=1,i[e];if(s!==St&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(t!==St&&pt(t,e))return o[e]=4,t[e];_c&&(o[e]=0)}}const c=go[e];let u,f;if(c)return e==="$attrs"&&an(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==St&&pt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,pt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return _l(s,e)?(s[e]=t,!0):i!==St&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==St&&a[0]!=="$"&&pt(n,a)||_l(e,a)||pt(r,a)||pt(i,a)||pt(go,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cf(n){return Ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _c=!0;function Fg(n){const e=Kd(n),t=n.proxy,i=n.ctx;_c=!1,e.beforeCreate&&uf(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:_,deactivated:p,beforeDestroy:h,beforeUnmount:S,destroyed:b,unmounted:v,render:A,renderTracked:T,renderTriggered:E,errorCaptured:I,serverPrefetch:x,expose:y,inheritAttrs:D,components:U,directives:k,filters:X}=e;if(c&&Ng(c,i,null),o)for(const Z in o){const N=o[Z];it(N)&&(i[Z]=N.bind(t))}if(s){const Z=s.call(t,t);vt(Z)&&(n.data=Tr(Z))}if(_c=!0,r)for(const Z in r){const N=r[Z],W=it(N)?N.bind(t,t):it(N.get)?N.get.bind(t,t):xi,F=!it(N)&&it(N.set)?N.set.bind(t):xi,Y=nt({get:W,set:F});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Y.value,set:$=>Y.value=$})}if(a)for(const Z in a)qd(a[Z],i,t,Z);if(l){const Z=it(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(N=>{pc(N,Z[N])})}u&&uf(u,n,"c");function q(Z,N){Ze(N)?N.forEach(W=>Z(W.bind(t))):N&&Z(N.bind(t))}if(q(Eg,f),q(Pn,d),q(Tg,m),q(Ag,g),q(Sg,_),q(bg,p),q(Dg,I),q(Pg,T),q(Rg,E),q(Ru,S),q(Xn,v),q(Cg,x),Ze(y))if(y.length){const Z=n.exposed||(n.exposed={});y.forEach(N=>{Object.defineProperty(Z,N,{get:()=>t[N],set:W=>t[N]=W,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===xi&&(n.render=A),D!=null&&(n.inheritAttrs=D),U&&(n.components=U),k&&(n.directives=k),x&&Xd(n)}function Ng(n,e,t=xi){Ze(n)&&(n=xc(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=zi(s.from||i,s.default,!0):r=zi(s.from||i):r=zi(s),hn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function uf(n,e,t){ri(Ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function qd(n,e,t,i){let s=i.includes(".")?Bd(t,i):()=>t[i];if(Ft(n)){const r=e[n];it(r)&&je(s,r)}else if(it(n))je(s,n.bind(t));else if(vt(n))if(Ze(n))n.forEach(r=>qd(r,e,t,i));else{const r=it(n.handler)?n.handler.bind(t):e[n.handler];it(r)&&je(s,r,n)}}function Kd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Na(l,c,o,!0)),Na(l,e,o)),vt(e)&&r.set(e,l),l}function Na(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Na(n,r,t,!0),s&&s.forEach(o=>Na(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Og[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Og={data:ff,props:hf,emits:hf,methods:ao,computed:ao,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:ao,directives:ao,watch:kg,provide:ff,inject:Bg};function ff(n,e){return e?n?function(){return Vt(it(n)?n.call(this,this):n,it(e)?e.call(this,this):e)}:e:n}function Bg(n,e){return ao(xc(n),xc(e))}function xc(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pn(n,e){return n?[...new Set([].concat(n,e))]:e}function ao(n,e){return n?Vt(Object.create(null),n,e):e}function hf(n,e){return n?Ze(n)&&Ze(e)?[...new Set([...n,...e])]:Vt(Object.create(null),cf(n),cf(e??{})):e}function kg(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=pn(n[i],e[i]);return t}function jd(){return{app:null,config:{isNativeTag:ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zg=0;function Hg(n,e){return function(i,s=null){it(i)||(i=Vt({},i)),s!=null&&!vt(s)&&(s=null);const r=jd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:zg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:xv,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&it(u.install)?(o.add(u),u.install(c,...f)):it(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||Ct(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,al(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ri(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Rr;Rr=c;try{return u()}finally{Rr=f}}};return c}}let Rr=null;const Vg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ei(e)}Modifiers`]||n[`${Ss(e)}Modifiers`];function Gg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let s=t;const r=e.startsWith("update:"),o=r&&Vg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ft(u)?u.trim():u)),o.number&&(s=t.map(Za)));let a,l=i[a=hl(e)]||i[a=hl(ei(e))];!l&&r&&(l=i[a=hl(Ss(e))]),l&&ri(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ri(c,n,6,s)}}const Wg=new WeakMap;function Zd(n,e,t=!1){const i=t?Wg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!it(n)){const l=c=>{const u=Zd(c,e,!0);u&&(a=!0,Vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Ze(r)?r.forEach(l=>o[l]=null):Vt(o,r),vt(n)&&i.set(n,o),o)}function rl(n,e){return!n||!qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,Ss(e))||pt(n,e))}function df(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:g,inheritAttrs:_}=n,p=Ua(n);let h,S;try{if(t.shapeFlag&4){const v=s||i,A=v;h=mi(c.call(A,v,u,f,m,d,g)),S=a}else{const v=e;h=mi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),S=e.props?a:Xg(a)}}catch(v){vo.length=0,nl(v,n,1),h=Ct(un)}let b=h;if(S&&_!==!1){const v=Object.keys(S),{shapeFlag:A}=b;v.length&&A&7&&(r&&v.some(Ka)&&(S=Yg(S,r)),b=ys(b,S,!1,!0))}return t.dirs&&(b=ys(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&wo(b,t.transition),h=b,Ua(p),h}const Xg=n=>{let e;for(const t in n)(t==="class"||t==="style"||qa(t))&&((e||(e={}))[t]=n[t]);return e},Yg=(n,e)=>{const t={};for(const i in n)(!Ka(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function $g(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Jd(o,i,d)&&!rl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?pf(i,o,c):!0:!!o;return!1}function pf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Jd(e,n,r)&&!rl(t,r))return!0}return!1}function Jd(n,e,t){const i=n[t],s=e[t];return t==="style"&&vt(i)&&vt(s)?!Xr(i,s):i!==s}function qg({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Qd={},ep=()=>Object.create(Qd),tp=n=>Object.getPrototypeOf(n)===Qd;function Kg(n,e,t,i=!1){const s={},r=ep();n.propsDefaults=Object.create(null),np(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:tl(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function jg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ft(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(rl(n.emitsOptions,d))continue;const m=e[d];if(l)if(pt(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const g=ei(d);s[g]=yc(l,a,g,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{np(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=Ss(f))===f||!pt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=yc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!pt(e,f))&&(delete r[f],c=!0)}c&&Ni(n.attrs,"set","")}function np(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(fo(l))continue;const c=e[l];let u;s&&pt(s,u=ei(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:rl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(t),c=a||St;for(let u=0;u<r.length;u++){const f=r[u];t[f]=yc(s,l,f,c[f],n,!pt(c,f))}}return o}function yc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&it(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Fo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ss(t))&&(i=!0))}return i}const Zg=new WeakMap;function ip(n,e,t=!1){const i=t?Zg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!it(n)){const u=f=>{l=!0;const[d,m]=ip(f,e,!0);Vt(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,wr),wr;if(Ze(r))for(let u=0;u<r.length;u++){const f=ei(r[u]);mf(f)&&(o[f]=St)}else if(r)for(const u in r){const f=ei(u);if(mf(f)){const d=r[u],m=o[f]=Ze(d)||it(d)?{type:d}:Vt({},d),g=m.type;let _=!1,p=!0;if(Ze(g))for(let h=0;h<g.length;++h){const S=g[h],b=it(S)&&S.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(p=!1)}else _=it(g)&&g.name==="Boolean";m[0]=_,m[1]=p,(_||pt(m,"default"))&&a.push(f)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function mf(n){return n[0]!=="$"&&!fo(n)}const Pu=n=>n==="_"||n==="_ctx"||n==="$stable",Du=n=>Ze(n)?n.map(mi):[mi(n)],Jg=(n,e,t)=>{if(e._n)return e;const i=Fs((...s)=>Du(e(...s)),t);return i._c=!1,i},sp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Pu(s))continue;const r=n[s];if(it(r))e[s]=Jg(s,r,i);else if(r!=null){const o=Du(r);e[s]=()=>o}}},rp=(n,e)=>{const t=Du(e);n.slots.default=()=>t},op=(n,e,t)=>{for(const i in e)(t||!Pu(i))&&(n[i]=e[i])},Qg=(n,e,t)=>{const i=n.slots=ep();if(n.vnode.shapeFlag&32){const s=e._;s?(op(i,e,t),t&&hd(i,"_",s,!0)):sp(e,i)}else e&&rp(n,e)},ev=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=St;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:op(s,e,t):(r=!e.$stable,sp(e,s)),o=e}else e&&(rp(n,e),o={default:1});if(r)for(const a in s)!Pu(a)&&o[a]==null&&delete s[a]},En=rv;function tv(n){return nv(n)}function nv(n,e){const t=Ja();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=xi,insertStaticContent:g}=n,_=(P,B,C,de=null,se=null,ne=null,ce=void 0,_e=null,ue=!!B.dynamicChildren)=>{if(P===B)return;P&&!Ns(P,B)&&(de=ve(P),$(P,se,ne,!0),P=null),B.patchFlag===-2&&(ue=!1,B.dynamicChildren=null);const{type:w,ref:M,shapeFlag:L}=B;switch(w){case ol:p(P,B,C,de);break;case un:h(P,B,C,de);break;case yl:P==null&&S(B,C,de,ce);break;case ln:U(P,B,C,de,se,ne,ce,_e,ue);break;default:L&1?A(P,B,C,de,se,ne,ce,_e,ue):L&6?k(P,B,C,de,se,ne,ce,_e,ue):(L&64||L&128)&&w.process(P,B,C,de,se,ne,ce,_e,ue,ze)}M!=null&&se?mo(M,P&&P.ref,ne,B||P,!B):M==null&&P&&P.ref!=null&&mo(P.ref,null,ne,P,!0)},p=(P,B,C,de)=>{if(P==null)i(B.el=a(B.children),C,de);else{const se=B.el=P.el;B.children!==P.children&&c(se,B.children)}},h=(P,B,C,de)=>{P==null?i(B.el=l(B.children||""),C,de):B.el=P.el},S=(P,B,C,de)=>{[P.el,P.anchor]=g(P.children,B,C,de,P.el,P.anchor)},b=({el:P,anchor:B},C,de)=>{let se;for(;P&&P!==B;)se=d(P),i(P,C,de),P=se;i(B,C,de)},v=({el:P,anchor:B})=>{let C;for(;P&&P!==B;)C=d(P),s(P),P=C;s(B)},A=(P,B,C,de,se,ne,ce,_e,ue)=>{if(B.type==="svg"?ce="svg":B.type==="math"&&(ce="mathml"),P==null)T(B,C,de,se,ne,ce,_e,ue);else{const w=P.el&&P.el._isVueCE?P.el:null;try{w&&w._beginPatch(),x(P,B,se,ne,ce,_e,ue)}finally{w&&w._endPatch()}}},T=(P,B,C,de,se,ne,ce,_e)=>{let ue,w;const{props:M,shapeFlag:L,transition:V,dirs:Q}=P;if(ue=P.el=o(P.type,ne,M&&M.is,M),L&8?u(ue,P.children):L&16&&I(P.children,ue,null,de,se,xl(P,ne),ce,_e),Q&&bs(P,null,de,"created"),E(ue,P,P.scopeId,ce,de),M){for(const we in M)we!=="value"&&!fo(we)&&r(ue,we,null,M[we],ne,de);"value"in M&&r(ue,"value",null,M.value,ne),(w=M.onVnodeBeforeMount)&&ui(w,de,P)}Q&&bs(P,null,de,"beforeMount");const re=iv(se,V);re&&V.beforeEnter(ue),i(ue,B,C),((w=M&&M.onVnodeMounted)||re||Q)&&En(()=>{try{w&&ui(w,de,P),re&&V.enter(ue),Q&&bs(P,null,de,"mounted")}finally{}},se)},E=(P,B,C,de,se)=>{if(C&&m(P,C),de)for(let ne=0;ne<de.length;ne++)m(P,de[ne]);if(se){let ne=se.subTree;if(B===ne||up(ne.type)&&(ne.ssContent===B||ne.ssFallback===B)){const ce=se.vnode;E(P,ce,ce.scopeId,ce.slotScopeIds,se.parent)}}},I=(P,B,C,de,se,ne,ce,_e,ue=0)=>{for(let w=ue;w<P.length;w++){const M=P[w]=_e?Fi(P[w]):mi(P[w]);_(null,M,B,C,de,se,ne,ce,_e)}},x=(P,B,C,de,se,ne,ce)=>{const _e=B.el=P.el;let{patchFlag:ue,dynamicChildren:w,dirs:M}=B;ue|=P.patchFlag&16;const L=P.props||St,V=B.props||St;let Q;if(C&&ws(C,!1),(Q=V.onVnodeBeforeUpdate)&&ui(Q,C,B,P),M&&bs(B,P,C,"beforeUpdate"),C&&ws(C,!0),(L.innerHTML&&V.innerHTML==null||L.textContent&&V.textContent==null)&&u(_e,""),w?y(P.dynamicChildren,w,_e,C,de,xl(B,se),ne):ce||N(P,B,_e,null,C,de,xl(B,se),ne,!1),ue>0){if(ue&16)D(_e,L,V,C,se);else if(ue&2&&L.class!==V.class&&r(_e,"class",null,V.class,se),ue&4&&r(_e,"style",L.style,V.style,se),ue&8){const re=B.dynamicProps;for(let we=0;we<re.length;we++){const Se=re[we],Ae=L[Se],We=V[Se];(We!==Ae||Se==="value")&&r(_e,Se,Ae,We,se,C)}}ue&1&&P.children!==B.children&&u(_e,B.children)}else!ce&&w==null&&D(_e,L,V,C,se);((Q=V.onVnodeUpdated)||M)&&En(()=>{Q&&ui(Q,C,B,P),M&&bs(B,P,C,"updated")},de)},y=(P,B,C,de,se,ne,ce)=>{for(let _e=0;_e<B.length;_e++){const ue=P[_e],w=B[_e],M=ue.el&&(ue.type===ln||!Ns(ue,w)||ue.shapeFlag&198)?f(ue.el):C;_(ue,w,M,null,de,se,ne,ce,!0)}},D=(P,B,C,de,se)=>{if(B!==C){if(B!==St)for(const ne in B)!fo(ne)&&!(ne in C)&&r(P,ne,B[ne],null,se,de);for(const ne in C){if(fo(ne))continue;const ce=C[ne],_e=B[ne];ce!==_e&&ne!=="value"&&r(P,ne,_e,ce,se,de)}"value"in C&&r(P,"value",B.value,C.value,se)}},U=(P,B,C,de,se,ne,ce,_e,ue)=>{const w=B.el=P?P.el:a(""),M=B.anchor=P?P.anchor:a("");let{patchFlag:L,dynamicChildren:V,slotScopeIds:Q}=B;Q&&(_e=_e?_e.concat(Q):Q),P==null?(i(w,C,de),i(M,C,de),I(B.children||[],C,M,se,ne,ce,_e,ue)):L>0&&L&64&&V&&P.dynamicChildren&&P.dynamicChildren.length===V.length?(y(P.dynamicChildren,V,C,se,ne,ce,_e),(B.key!=null||se&&B===se.subTree)&&ap(P,B,!0)):N(P,B,C,M,se,ne,ce,_e,ue)},k=(P,B,C,de,se,ne,ce,_e,ue)=>{B.slotScopeIds=_e,P==null?B.shapeFlag&512?se.ctx.activate(B,C,de,ce,ue):X(B,C,de,se,ne,ce,ue):j(P,B,ue)},X=(P,B,C,de,se,ne,ce)=>{const _e=P.component=hv(P,de,se);if(il(P)&&(_e.ctx.renderer=ze),dv(_e,!1,ce),_e.asyncDep){if(se&&se.registerDep(_e,q,ce),!P.el){const ue=_e.subTree=Ct(un);h(null,ue,B,C),P.placeholder=ue.el}}else q(_e,P,B,C,se,ne,ce)},j=(P,B,C)=>{const de=B.component=P.component;if($g(P,B,C))if(de.asyncDep&&!de.asyncResolved){Z(de,B,C);return}else de.next=B,de.update();else B.el=P.el,de.vnode=B},q=(P,B,C,de,se,ne,ce)=>{const _e=()=>{if(P.isMounted){let{next:L,bu:V,u:Q,parent:re,vnode:we}=P;{const H=lp(P);if(H){L&&(L.el=we.el,Z(P,L,ce)),H.asyncDep.then(()=>{En(()=>{P.isUnmounted||w()},se)});return}}let Se=L,Ae;ws(P,!1),L?(L.el=we.el,Z(P,L,ce)):L=we,V&&Ma(V),(Ae=L.props&&L.props.onVnodeBeforeUpdate)&&ui(Ae,re,L,we),ws(P,!0);const We=df(P),O=P.subTree;P.subTree=We,_(O,We,f(O.el),ve(O),P,se,ne),L.el=We.el,Se===null&&qg(P,We.el),Q&&En(Q,se),(Ae=L.props&&L.props.onVnodeUpdated)&&En(()=>ui(Ae,re,L,we),se)}else{let L;const{el:V,props:Q}=B,{bm:re,m:we,parent:Se,root:Ae,type:We}=P,O=Cr(B);ws(P,!1),re&&Ma(re),!O&&(L=Q&&Q.onVnodeBeforeMount)&&ui(L,Se,B),ws(P,!0);{Ae.ce&&Ae.ce._hasShadowRoot()&&Ae.ce._injectChildStyle(We,P.parent?P.parent.type:void 0);const H=P.subTree=df(P);_(null,H,C,de,P,se,ne),B.el=H.el}if(we&&En(we,se),!O&&(L=Q&&Q.onVnodeMounted)){const H=B;En(()=>ui(L,Se,H),se)}(B.shapeFlag&256||Se&&Cr(Se.vnode)&&Se.vnode.shapeFlag&256)&&P.a&&En(P.a,se),P.isMounted=!0,B=C=de=null}};P.scope.on();const ue=P.effect=new vd(_e);P.scope.off();const w=P.update=ue.run.bind(ue),M=P.job=ue.runIfDirty.bind(ue);M.i=P,M.id=P.uid,ue.scheduler=()=>Cu(M),ws(P,!0),w()},Z=(P,B,C)=>{B.component=P;const de=P.vnode.props;P.vnode=B,P.next=null,jg(P,B.props,de,C),ev(P,B.children,C),Gi(),rf(P),Wi()},N=(P,B,C,de,se,ne,ce,_e,ue=!1)=>{const w=P&&P.children,M=P?P.shapeFlag:0,L=B.children,{patchFlag:V,shapeFlag:Q}=B;if(V>0){if(V&128){F(w,L,C,de,se,ne,ce,_e,ue);return}else if(V&256){W(w,L,C,de,se,ne,ce,_e,ue);return}}Q&8?(M&16&&ge(w,se,ne),L!==w&&u(C,L)):M&16?Q&16?F(w,L,C,de,se,ne,ce,_e,ue):ge(w,se,ne,!0):(M&8&&u(C,""),Q&16&&I(L,C,de,se,ne,ce,_e,ue))},W=(P,B,C,de,se,ne,ce,_e,ue)=>{P=P||wr,B=B||wr;const w=P.length,M=B.length,L=Math.min(w,M);let V;for(V=0;V<L;V++){const Q=B[V]=ue?Fi(B[V]):mi(B[V]);_(P[V],Q,C,null,se,ne,ce,_e,ue)}w>M?ge(P,se,ne,!0,!1,L):I(B,C,de,se,ne,ce,_e,ue,L)},F=(P,B,C,de,se,ne,ce,_e,ue)=>{let w=0;const M=B.length;let L=P.length-1,V=M-1;for(;w<=L&&w<=V;){const Q=P[w],re=B[w]=ue?Fi(B[w]):mi(B[w]);if(Ns(Q,re))_(Q,re,C,null,se,ne,ce,_e,ue);else break;w++}for(;w<=L&&w<=V;){const Q=P[L],re=B[V]=ue?Fi(B[V]):mi(B[V]);if(Ns(Q,re))_(Q,re,C,null,se,ne,ce,_e,ue);else break;L--,V--}if(w>L){if(w<=V){const Q=V+1,re=Q<M?B[Q].el:de;for(;w<=V;)_(null,B[w]=ue?Fi(B[w]):mi(B[w]),C,re,se,ne,ce,_e,ue),w++}}else if(w>V)for(;w<=L;)$(P[w],se,ne,!0),w++;else{const Q=w,re=w,we=new Map;for(w=re;w<=V;w++){const xe=B[w]=ue?Fi(B[w]):mi(B[w]);xe.key!=null&&we.set(xe.key,w)}let Se,Ae=0;const We=V-re+1;let O=!1,H=0;const ie=new Array(We);for(w=0;w<We;w++)ie[w]=0;for(w=Q;w<=L;w++){const xe=P[w];if(Ae>=We){$(xe,se,ne,!0);continue}let Be;if(xe.key!=null)Be=we.get(xe.key);else for(Se=re;Se<=V;Se++)if(ie[Se-re]===0&&Ns(xe,B[Se])){Be=Se;break}Be===void 0?$(xe,se,ne,!0):(ie[Be-re]=w+1,Be>=H?H=Be:O=!0,_(xe,B[Be],C,null,se,ne,ce,_e,ue),Ae++)}const Ee=O?sv(ie):wr;for(Se=Ee.length-1,w=We-1;w>=0;w--){const xe=re+w,Be=B[xe],Ue=B[xe+1],qe=xe+1<M?Ue.el||cp(Ue):de;ie[w]===0?_(null,Be,C,qe,se,ne,ce,_e,ue):O&&(Se<0||w!==Ee[Se]?Y(Be,C,qe,2):Se--)}}},Y=(P,B,C,de,se=null)=>{const{el:ne,type:ce,transition:_e,children:ue,shapeFlag:w}=P;if(w&6){Y(P.component.subTree,B,C,de);return}if(w&128){P.suspense.move(B,C,de);return}if(w&64){ce.move(P,B,C,ze);return}if(ce===ln){i(ne,B,C);for(let L=0;L<ue.length;L++)Y(ue[L],B,C,de);i(P.anchor,B,C);return}if(ce===yl){b(P,B,C);return}if(de!==2&&w&1&&_e)if(de===0)_e.beforeEnter(ne),i(ne,B,C),En(()=>_e.enter(ne),se);else{const{leave:L,delayLeave:V,afterLeave:Q}=_e,re=()=>{P.ctx.isUnmounted?s(ne):i(ne,B,C)},we=()=>{ne._isLeaving&&ne[di](!0),L(ne,()=>{re(),Q&&Q()})};V?V(ne,re,we):we()}else i(ne,B,C)},$=(P,B,C,de=!1,se=!1)=>{const{type:ne,props:ce,ref:_e,children:ue,dynamicChildren:w,shapeFlag:M,patchFlag:L,dirs:V,cacheIndex:Q,memo:re}=P;if(L===-2&&(se=!1),_e!=null&&(Gi(),mo(_e,null,C,P,!0),Wi()),Q!=null&&(B.renderCache[Q]=void 0),M&256){B.ctx.deactivate(P);return}const we=M&1&&V,Se=!Cr(P);let Ae;if(Se&&(Ae=ce&&ce.onVnodeBeforeUnmount)&&ui(Ae,B,P),M&6)he(P.component,C,de);else{if(M&128){P.suspense.unmount(C,de);return}we&&bs(P,null,B,"beforeUnmount"),M&64?P.type.remove(P,B,C,ze,de):w&&!w.hasOnce&&(ne!==ln||L>0&&L&64)?ge(w,B,C,!1,!0):(ne===ln&&L&384||!se&&M&16)&&ge(ue,B,C),de&&le(P)}const We=re!=null&&Q==null;(Se&&(Ae=ce&&ce.onVnodeUnmounted)||we||We)&&En(()=>{Ae&&ui(Ae,B,P),we&&bs(P,null,B,"unmounted"),We&&(P.el=null)},C)},le=P=>{const{type:B,el:C,anchor:de,transition:se}=P;if(B===ln){te(C,de);return}if(B===yl){v(P);return}const ne=()=>{s(C),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(P.shapeFlag&1&&se&&!se.persisted){const{leave:ce,delayLeave:_e}=se,ue=()=>ce(C,ne);_e?_e(P.el,ne,ue):ue()}else ne()},te=(P,B)=>{let C;for(;P!==B;)C=d(P),s(P),P=C;s(B)},he=(P,B,C)=>{const{bum:de,scope:se,job:ne,subTree:ce,um:_e,m:ue,a:w}=P;gf(ue),gf(w),de&&Ma(de),se.stop(),ne&&(ne.flags|=8,$(ce,P,B,C)),_e&&En(_e,B),En(()=>{P.isUnmounted=!0},B)},ge=(P,B,C,de=!1,se=!1,ne=0)=>{for(let ce=ne;ce<P.length;ce++)$(P[ce],B,C,de,se)},ve=P=>{if(P.shapeFlag&6)return ve(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const B=d(P.anchor||P.el),C=B&&B[_g];return C?d(C):B};let Te=!1;const Ie=(P,B,C)=>{let de;P==null?B._vnode&&($(B._vnode,null,null,!0),de=B._vnode.component):_(B._vnode||null,P,B,null,null,null,C),B._vnode=P,Te||(Te=!0,rf(de),Ud(),Te=!1)},ze={p:_,um:$,m:Y,r:le,mt:X,mc:I,pc:N,pbc:y,n:ve,o:n};return{render:Ie,hydrate:void 0,createApp:Hg(Ie)}}function xl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ws({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function iv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ap(n,e,t=!1){const i=n.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Fi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&ap(o,a)),a.type===ol&&(a.patchFlag===-1&&(a=s[r]=Fi(a)),a.el=o.el),a.type===un&&!a.el&&(a.el=o.el)}}function sv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function lp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lp(e)}function gf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function cp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?cp(e.subTree):null}const up=n=>n.__isSuspense;function rv(n,e){e&&e.pendingBranch?Ze(n)?e.effects.push(...n):e.effects.push(n):pg(n)}const ln=Symbol.for("v-fgt"),ol=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),yl=Symbol.for("v-stc"),vo=[];let Nn=null;function Je(n=!1){vo.push(Nn=n?null:[])}function ov(){vo.pop(),Nn=vo[vo.length-1]||null}let Eo=1;function Oa(n,e=!1){Eo+=n,n<0&&Nn&&e&&(Nn.hasOnce=!0)}function fp(n){return n.dynamicChildren=Eo>0?Nn||wr:null,ov(),Eo>0&&Nn&&Nn.push(n),n}function mt(n,e,t,i,s,r){return fp(Le(n,e,t,i,s,r,!0))}function Lt(n,e,t,i,s){return fp(Ct(n,e,t,i,s,!0))}function To(n){return n?n.__v_isVNode===!0:!1}function Ns(n,e){return n.type===e.type&&n.key===e.key}const hp=({key:n})=>n??null,Sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ft(n)||hn(n)||it(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function Le(n,e=null,t=null,i=0,s=null,r=n===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&hp(e),ref:e&&Sa(e),scopeId:Nd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return a?(Lu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),Eo>0&&!o&&Nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Nn.push(l),l}const Ct=av;function av(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Lg)&&(n=un),To(n)){const a=ys(n,e,!0);return t&&Lu(a,t),Eo>0&&!r&&Nn&&(a.shapeFlag&6?Nn[Nn.indexOf(n)]=a:Nn.push(a)),a.patchFlag=-2,a}if(vv(n)&&(n=n.__vccOpts),e){e=lv(e);let{class:a,style:l}=e;a&&!Ft(a)&&(e.class=qt(a)),vt(l)&&(Au(l)&&!Ze(l)&&(l=Vt({},l)),e.style=Fn(l))}const o=Ft(n)?1:up(n)?128:kd(n)?64:vt(n)?4:it(n)?2:0;return Le(n,e,t,i,s,o,r,!0)}function lv(n){return n?Au(n)||tp(n)?Vt({},n):n:null}function ys(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?cv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&hp(c),ref:e&&e.ref?t&&r?Ze(r)?r.concat(Sa(e)):[r,Sa(e)]:Sa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ln?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ys(n.ssContent),ssFallback:n.ssFallback&&ys(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&wo(u,l.clone(u)),u}function vn(n=" ",e=0){return Ct(ol,null,n,e)}function Kt(n="",e=!1){return e?(Je(),Lt(un,null,n)):Ct(un,null,n)}function mi(n){return n==null||typeof n=="boolean"?Ct(un):Ze(n)?Ct(ln,null,n.slice()):To(n)?Fi(n):Ct(ol,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ys(n)}function Lu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Lu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!tp(e)?e._ctx=fn:s===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else it(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[vn(e)]):t=8);n.children=e,n.shapeFlag|=t}function cv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=qt([e.class,i.class]));else if(s==="style")e.style=Fn([e.style,i.style]);else if(qa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ka(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function ui(n,e,t,i=null){ri(n,e,7,[t,i])}const uv=jd();let fv=0;function hv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||uv,r={uid:fv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ip(i,s),emitsOptions:Zd(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Gg.bind(null,r),n.ce&&n.ce(r),r}let yn=null;const dp=()=>yn||fn;let Ba,Mc;{const n=Ja(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ba=e("__VUE_INSTANCE_SETTERS__",t=>yn=t),Mc=e("__VUE_SSR_SETTERS__",t=>Ao=t)}const Fo=n=>{const e=yn;return Ba(n),n.scope.on(),()=>{n.scope.off(),Ba(e)}},vf=()=>{yn&&yn.scope.off(),Ba(null)};function pp(n){return n.vnode.shapeFlag&4}let Ao=!1;function dv(n,e=!1,t=!1){e&&Mc(e);const{props:i,children:s}=n.vnode,r=pp(n);Kg(n,i,r,e),Qg(n,s,t||e);const o=r?pv(n,e):void 0;return e&&Mc(!1),o}function pv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ug);const{setup:i}=t;if(i){Gi();const s=n.setupContext=i.length>1?gv(n):null,r=Fo(n),o=Uo(i,n,0,[n.props,s]),a=ld(o);if(Wi(),r(),(a||n.sp)&&!Cr(n)&&Xd(n),a){if(o.then(vf,vf),e)return o.then(l=>{_f(n,l)}).catch(l=>{nl(l,n,0)});n.asyncDep=o}else _f(n,o)}else mp(n)}function _f(n,e,t){it(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Dd(e)),mp(n)}function mp(n,e,t){const i=n.type;n.render||(n.render=i.render||xi);{const s=Fo(n);Gi();try{Fg(n)}finally{Wi(),s()}}}const mv={get(n,e){return an(n,"get",""),n[e]}};function gv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,mv),slots:n.slots,emit:n.emit,expose:e}}function al(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Dd(sg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in go)return go[t](n)},has(e,t){return t in e||t in go}})):n.proxy}function vv(n){return it(n)&&"__vccOpts"in n}const nt=(n,e)=>cg(n,e,Ao);function _v(n,e,t){try{Oa(-1);const i=arguments.length;return i===2?vt(e)&&!Ze(e)?To(e)?Ct(n,null,[e]):Ct(n,e):Ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&To(t)&&(t=[t]),Ct(n,e,t))}finally{Oa(1)}}const xv="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sc;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{Sc=xf.createPolicy("vue",{createHTML:n=>n})}catch{}const gp=Sc?n=>Sc.createHTML(n):n=>n,yv="http://www.w3.org/2000/svg",Mv="http://www.w3.org/1998/Math/MathML",Ui=typeof document<"u"?document:null,yf=Ui&&Ui.createElement("template"),Sv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ui.createElementNS(yv,n):e==="mathml"?Ui.createElementNS(Mv,n):t?Ui.createElement(n,{is:t}):Ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ui.createTextNode(n),createComment:n=>Ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{yf.innerHTML=gp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=yf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ts="transition",Qr="animation",Co=Symbol("_vtc"),vp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},bv=Vt({},zd,vp),wv=n=>(n.displayName="Transition",n.props=bv,n),Ev=wv((n,{slots:e})=>_v(Mg,Tv(n),e)),Es=(n,e=[])=>{Ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},Mf=n=>n?Ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Tv(n){const e={};for(const U in n)U in vp||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=Av(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:h,onEnter:S,onEnterCancelled:b,onLeave:v,onLeaveCancelled:A,onBeforeAppear:T=h,onAppear:E=S,onAppearCancelled:I=b}=e,x=(U,k,X,j)=>{U._enterCancelled=j,Ts(U,k?u:a),Ts(U,k?c:o),X&&X()},y=(U,k)=>{U._isLeaving=!1,Ts(U,f),Ts(U,m),Ts(U,d),k&&k()},D=U=>(k,X)=>{const j=U?E:S,q=()=>x(k,U,X);Es(j,[k,q]),Sf(()=>{Ts(k,U?l:r),Ei(k,U?u:a),Mf(j)||bf(k,i,_,q)})};return Vt(e,{onBeforeEnter(U){Es(h,[U]),Ei(U,r),Ei(U,o)},onBeforeAppear(U){Es(T,[U]),Ei(U,l),Ei(U,c)},onEnter:D(!1),onAppear:D(!0),onLeave(U,k){U._isLeaving=!0;const X=()=>y(U,k);Ei(U,f),U._enterCancelled?(Ei(U,d),Tf(U)):(Tf(U),Ei(U,d)),Sf(()=>{U._isLeaving&&(Ts(U,f),Ei(U,m),Mf(v)||bf(U,i,p,X))}),Es(v,[U,X])},onEnterCancelled(U){x(U,!1,void 0,!0),Es(b,[U])},onAppearCancelled(U){x(U,!0,void 0,!0),Es(I,[U])},onLeaveCancelled(U){y(U),Es(A,[U])}})}function Av(n){if(n==null)return null;if(vt(n))return[Ml(n.enter),Ml(n.leave)];{const e=Ml(n);return[e,e]}}function Ml(n){return Dm(n)}function Ei(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Co]||(n[Co]=new Set)).add(e)}function Ts(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Co];t&&(t.delete(e),t.size||(n[Co]=void 0))}function Sf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Cv=0;function bf(n,e,t,i){const s=n._endId=++Cv,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Rv(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),r()},d=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function Rv(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${ts}Delay`),r=i(`${ts}Duration`),o=wf(s,r),a=i(`${Qr}Delay`),l=i(`${Qr}Duration`),c=wf(a,l);let u=null,f=0,d=0;e===ts?o>0&&(u=ts,f=o,d=r.length):e===Qr?c>0&&(u=Qr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?ts:Qr:null,d=u?u===ts?r.length:l.length:0);const m=u===ts&&/\b(?:transform|all)(?:,|$)/.test(i(`${ts}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function wf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ef(t)+Ef(n[i])))}function Ef(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Tf(n){return(n?n.ownerDocument:document).body.offsetHeight}function Pv(n,e,t){const i=n[Co];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ka=Symbol("_vod"),_p=Symbol("_vsh"),cs={name:"show",beforeMount(n,{value:e},{transition:t}){n[ka]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):eo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),eo(n,!0),i.enter(n)):i.leave(n,()=>{eo(n,!1)}):eo(n,e))},beforeUnmount(n,{value:e}){eo(n,e)}};function eo(n,e){n.style.display=e?n[ka]:"none",n[_p]=!e}const Dv=Symbol(""),Lv=/(?:^|;)\s*display\s*:/;function Iv(n,e,t){const i=n.style,s=Ft(t);let r=!1;if(t&&!s){if(e)if(Ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ba(i,a,"")}else for(const o in e)t[o]==null&&ba(i,o,"");for(const o in t)o==="display"&&(r=!0),ba(i,o,t[o])}else if(s){if(e!==t){const o=i[Dv];o&&(t+=";"+o),i.cssText=t,r=Lv.test(t)}}else e&&n.removeAttribute("style");ka in n&&(n[ka]=r?i.display:"",n[_p]&&(i.display="none"))}const Af=/\s*!important$/;function ba(n,e,t){if(Ze(t))t.forEach(i=>ba(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Uv(n,e);Af.test(t)?n.setProperty(Ss(i),t.replace(Af,""),"important"):n[i]=t}}const Cf=["Webkit","Moz","ms"],Sl={};function Uv(n,e){const t=Sl[e];if(t)return t;let i=ei(e);if(i!=="filter"&&i in n)return Sl[e]=i;i=fd(i);for(let s=0;s<Cf.length;s++){const r=Cf[s]+i;if(r in n)return Sl[e]=r}return e}const Rf="http://www.w3.org/1999/xlink";function Pf(n,e,t,i,s,r=Om(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Rf,e.slice(6,e.length)):n.setAttributeNS(Rf,e,t):t==null||r&&!dd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ii(t)?String(t):t)}function Df(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?gp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=dd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function hs(n,e,t,i){n.addEventListener(e,t,i)}function Fv(n,e,t,i){n.removeEventListener(e,t,i)}const Lf=Symbol("_vei");function Nv(n,e,t,i,s=null){const r=n[Lf]||(n[Lf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Ov(e);if(i){const c=r[e]=zv(i,s);hs(n,a,c,l)}else o&&(Fv(n,a,o,l),r[e]=void 0)}}const If=/(?:Once|Passive|Capture)$/;function Ov(n){let e;if(If.test(n)){e={};let i;for(;i=n.match(If);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ss(n.slice(2)),e]}let bl=0;const Bv=Promise.resolve(),kv=()=>bl||(Bv.then(()=>bl=0),bl=Date.now());function zv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ri(Hv(i,t.value),e,5,[i])};return t.value=n,t.attached=kv(),t}function Hv(n,e){if(Ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Uf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Vv=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Pv(n,i,o):e==="style"?Iv(n,t,i):qa(e)?Ka(e)||Nv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gv(n,e,i,o))?(Df(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pf(n,e,i,o,r,e!=="value")):n._isVueCE&&(Wv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ft(i)))?Df(n,ei(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Pf(n,e,i,o))};function Gv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uf(e)&&it(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uf(e)&&Ft(t)?!1:e in n}function Wv(n,e){const t=n._def.props;if(!t)return!1;const i=ei(e);return Array.isArray(t)?t.some(s=>ei(s)===i):Object.keys(t).some(s=>ei(s)===i)}const Fr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ze(e)?t=>Ma(e,t):e};function Xv(n){n.target.composing=!0}function Ff(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hi=Symbol("_assign");function Nf(n,e,t){return e&&(n=n.trim()),t&&(n=Za(n)),n}const xp={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Hi]=Fr(s);const r=i||s.props&&s.props.type==="number";hs(n,e?"change":"input",o=>{o.target.composing||n[Hi](Nf(n.value,t,r))}),(t||r)&&hs(n,"change",()=>{n.value=Nf(n.value,t,r)}),e||(hs(n,"compositionstart",Xv),hs(n,"compositionend",Ff),hs(n,"change",Ff))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Hi]=Fr(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Za(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ns={deep:!0,created(n,e,t){n[Hi]=Fr(t),hs(n,"change",()=>{const i=n._modelValue,s=Ro(n),r=n.checked,o=n[Hi];if(Ze(i)){const a=yu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Wr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(yp(n,r))})},mounted:Of,beforeUpdate(n,e,t){n[Hi]=Fr(t),Of(n,e,t)}};function Of(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ze(e))s=yu(e,i.props.value)>-1;else if(Wr(e))s=e.has(i.props.value);else{if(e===t)return;s=Xr(e,yp(n,!0))}n.checked!==s&&(n.checked=s)}const Yv={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Wr(e);hs(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Za(Ro(o)):Ro(o));n[Hi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,dn(()=>{n._assigning=!1})}),n[Hi]=Fr(i)},mounted(n,{value:e}){Bf(n,e)},beforeUpdate(n,e,t){n[Hi]=Fr(t)},updated(n,{value:e}){n._assigning||Bf(n,e)}};function Bf(n,e){const t=n.multiple,i=Ze(e);if(!(t&&!i&&!Wr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Ro(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=yu(e,a)>-1}else o.selected=e.has(a);else if(Xr(Ro(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ro(n){return"_value"in n?n._value:n.value}function yp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const $v=["ctrl","shift","alt","meta"],qv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>$v.some(t=>n[`${t}Key`]&&!e.includes(t))},ks=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=qv[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Kv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Ss(s.key);if(e.some(o=>o===r||Kv[o]===r))return n(s)})},jv=Vt({patchProp:Vv},Sv);let zf;function Zv(){return zf||(zf=tv(jv))}const Jv=(...n)=>{const e=Zv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=e0(i);if(!s)return;const r=e._component;!it(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Qv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function e0(n){return Ft(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Iu="170",Pr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t0=0,Hf=1,n0=2,Mp=1,i0=2,Ii=3,Yi=0,Rn=1,jn=2,gs=0,Dr=1,Vf=2,Gf=3,Wf=4,s0=5,Os=100,r0=101,o0=102,a0=103,l0=104,c0=200,u0=201,f0=202,h0=203,bc=204,wc=205,d0=206,p0=207,m0=208,g0=209,v0=210,_0=211,x0=212,y0=213,M0=214,Ec=0,Tc=1,Ac=2,Nr=3,Cc=4,Rc=5,Pc=6,Dc=7,Sp=0,S0=1,b0=2,vs=0,w0=1,E0=2,T0=3,A0=4,C0=5,R0=6,P0=7,bp=300,Or=301,Br=302,Lc=303,Ic=304,ll=306,Uc=1e3,zs=1001,Fc=1002,ni=1003,D0=1004,Go=1005,Zt=1006,wl=1007,ps=1008,$i=1009,wp=1010,Ep=1011,Po=1012,Uu=1013,Ys=1014,Bi=1015,No=1016,Fu=1017,Nu=1018,kr=1020,Tp=35902,Ap=1021,Cp=1022,Jn=1023,Rp=1024,Pp=1025,Lr=1026,zr=1027,Dp=1028,Ou=1029,Lp=1030,Bu=1031,ku=1033,wa=33776,Ea=33777,Ta=33778,Aa=33779,Nc=35840,Oc=35841,Bc=35842,kc=35843,zc=36196,Hc=37492,Vc=37496,Gc=37808,Wc=37809,Xc=37810,Yc=37811,$c=37812,qc=37813,Kc=37814,jc=37815,Zc=37816,Jc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,Ca=36492,iu=36494,su=36495,Ip=36283,ru=36284,ou=36285,au=36286,L0=3200,I0=3201,U0=0,F0=1,ds="",on="srgb",Yr="srgb-linear",cl="linear",yt="srgb",sr=7680,Xf=519,N0=512,O0=513,B0=514,Up=515,k0=516,z0=517,H0=518,V0=519,Yf=35044,$f="300 es",ki=2e3,za=2001;class Ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qf=1234567;const _o=Math.PI/180,Do=180/Math.PI;function $r(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function zu(n,e){return(n%e+e)%e}function G0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function W0(n,e,t){return n!==e?(t-n)/(e-n):0}function xo(n,e,t){return(1-t)*n+t*e}function X0(n,e,t,i){return xo(n,e,1-Math.exp(-t*i))}function Y0(n,e=1){return e-Math.abs(zu(n,e*2)-e)}function $0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function q0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function K0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function j0(n,e){return n+Math.random()*(e-n)}function Z0(n){return n*(.5-Math.random())}function J0(n){n!==void 0&&(qf=n);let e=qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Q0(n){return n*_o}function e_(n){return n*Do}function t_(n){return(n&n-1)===0&&n!==0}function n_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function i_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function s_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lu={DEG2RAD:_o,RAD2DEG:Do,generateUUID:$r,clamp:cn,euclideanModulo:zu,mapLinear:G0,inverseLerp:W0,lerp:xo,damp:X0,pingpong:Y0,smoothstep:$0,smootherstep:q0,randInt:K0,randFloat:j0,randFloatSpread:Z0,seededRandom:J0,degToRad:Q0,radToDeg:e_,isPowerOfTwo:t_,ceilPowerOfTwo:n_,floorPowerOfTwo:i_,setQuaternionFromProperEuler:s_,normalize:mn,denormalize:yr};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,s,r,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],_=s[0],p=s[3],h=s[6],S=s[1],b=s[4],v=s[7],A=s[2],T=s[5],E=s[8];return r[0]=o*_+a*S+l*A,r[3]=o*p+a*b+l*T,r[6]=o*h+a*v+l*E,r[1]=c*_+u*S+f*A,r[4]=c*p+u*b+f*T,r[7]=c*h+u*v+f*E,r[2]=d*_+m*S+g*A,r[5]=d*p+m*b+g*T,r[8]=d*h+m*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,m=c*r-o*l,g=t*f+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new rt;function Fp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function r_(){const n=Ha("canvas");return n.style.display="block",n}const Kf={};function lo(n){n in Kf||(Kf[n]=!0,console.warn(n))}function o_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function a_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function l_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ct={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(n.r=Vi(n.r),n.g=Vi(n.g),n.b=Vi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(n.r=Ir(n.r),n.g=Ir(n.g),n.b=Ir(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ds?cl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jf=[.64,.33,.3,.6,.15,.06],Zf=[.2126,.7152,.0722],Jf=[.3127,.329],Qf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[Yr]:{primaries:jf,whitePoint:Jf,transfer:cl,toXYZ:Qf,fromXYZ:eh,luminanceCoefficients:Zf,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:jf,whitePoint:Jf,transfer:yt,toXYZ:Qf,fromXYZ:eh,luminanceCoefficients:Zf,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let rr;class c_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Ha("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ha("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u_=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tl(s[o].image)):r.push(Tl(s[o]))}else r=Tl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?c_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f_=0;class Mn extends Ks{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=zs,s=zs,r=Zt,o=ps,a=Jn,l=$i,c=Mn.DEFAULT_ANISOTROPY,u=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=$r(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uc:e.x=e.x-Math.floor(e.x);break;case zs:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uc:e.y=e.y-Math.floor(e.y);break;case zs:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=bp;Mn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(m+1)/2,A=(h+1)/2,T=(u+d)/4,E=(f+_)/4,I=(g+p)/4;return b>v&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=E/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=I/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=E/r,s=I/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h_ extends Ks{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Np(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends h_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Op extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d_ extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==m||u!==g){let p=1-a;const h=l*d+c*m+u*g+f*_,S=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const A=Math.sqrt(b),T=Math.atan2(A,h*S);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}const v=a*S;if(l=l*p+d*v,c=c*p+m*v,u=u*p+g*v,f=f*p+_*v,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-a*m,e[t+2]=c*g+u*m+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new ee,th=new yi;class Oo{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Xo.subVectors(this.max,to),or.subVectors(e.a,to),ar.subVectors(e.b,to),lr.subVectors(e.c,to),is.subVectors(ar,or),ss.subVectors(lr,ar),As.subVectors(or,lr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-As.z,As.y,is.z,0,-is.x,ss.z,0,-ss.x,As.z,0,-As.x,-is.y,is.x,0,-ss.y,ss.x,0,-As.y,As.x,0];return!Cl(t,or,ar,lr,Xo)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,or,ar,lr,Xo))?!1:(Yo.crossVectors(is,ss),t=[Yo.x,Yo.y,Yo.z],Cl(t,or,ar,lr,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],$n=new ee,Wo=new Oo,or=new ee,ar=new ee,lr=new ee,is=new ee,ss=new ee,As=new ee,to=new ee,Xo=new ee,Yo=new ee,Cs=new ee;function Cl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Cs.fromArray(n,r);const a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),u=i.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const p_=new Oo,no=new ee,Rl=new ee;class Hu{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):p_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Rl)),this.expandByPoint(no.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new ee,Pl=new ee,$o=new ee,rs=new ee,Dl=new ee,qo=new ee,Ll=new ee;class Vu{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pl.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Pl);const r=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=rs.dot(this.direction),l=-rs.dot($o),c=rs.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pl).addScaledVector($o,d),m}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){Dl.subVectors(t,e),qo.subVectors(i,e),Ll.crossVectors(Dl,qo);let o=this.direction.dot(Ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(qo.crossVectors(rs,qo));if(l<0)return null;const c=a*this.direction.dot(Dl.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(Ll);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,i,s,r,o,a,l,c,u,f,d,m,g,_,p){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,m,g,_,p)}set(e,t,i,s,r,o,a,l,c,u,f,d,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m_,e,g_)}lookAt(e,t,i){const s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),os.crossVectors(i,Ln),os.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),os.crossVectors(i,Ln)),os.normalize(),Ko.crossVectors(Ln,os),s[0]=os.x,s[4]=Ko.x,s[8]=Ln.x,s[1]=os.y,s[5]=Ko.y,s[9]=Ln.y,s[2]=os.z,s[6]=Ko.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],h=i[14],S=i[3],b=i[7],v=i[11],A=i[15],T=s[0],E=s[4],I=s[8],x=s[12],y=s[1],D=s[5],U=s[9],k=s[13],X=s[2],j=s[6],q=s[10],Z=s[14],N=s[3],W=s[7],F=s[11],Y=s[15];return r[0]=o*T+a*y+l*X+c*N,r[4]=o*E+a*D+l*j+c*W,r[8]=o*I+a*U+l*q+c*F,r[12]=o*x+a*k+l*Z+c*Y,r[1]=u*T+f*y+d*X+m*N,r[5]=u*E+f*D+d*j+m*W,r[9]=u*I+f*U+d*q+m*F,r[13]=u*x+f*k+d*Z+m*Y,r[2]=g*T+_*y+p*X+h*N,r[6]=g*E+_*D+p*j+h*W,r[10]=g*I+_*U+p*q+h*F,r[14]=g*x+_*k+p*Z+h*Y,r[3]=S*T+b*y+v*X+A*N,r[7]=S*E+b*D+v*j+A*W,r[11]=S*I+b*U+v*q+A*F,r[15]=S*x+b*k+v*Z+A*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*m-i*l*m)+_*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*u-i*c*u)+h*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],S=f*p*c-_*d*c+_*l*m-a*p*m-f*l*h+a*d*h,b=g*d*c-u*p*c-g*l*m+o*p*m+u*l*h-o*d*h,v=u*_*c-g*f*c+g*a*m-o*_*m-u*a*h+o*f*h,A=g*f*l-u*_*l-g*a*d+o*_*d+u*a*p-o*f*p,T=t*S+i*b+s*v+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=S*E,e[1]=(_*d*r-f*p*r-_*s*m+i*p*m+f*s*h-i*d*h)*E,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*h+i*l*h)*E,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*m-i*l*m)*E,e[4]=b*E,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*h+t*d*h)*E,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*h-t*l*h)*E,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*m+t*l*m)*E,e[8]=v*E,e[9]=(g*f*r-u*_*r-g*i*m+t*_*m+u*i*h-t*f*h)*E,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*h+t*a*h)*E,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*m-t*a*m)*E,e[12]=A*E,e[13]=(u*_*s-g*f*s+g*i*d-t*_*d-u*i*p+t*f*p)*E,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*p-t*a*p)*E,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*E,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,m=r*u,g=r*f,_=o*u,p=o*f,h=a*f,S=l*c,b=l*u,v=l*f,A=i.x,T=i.y,E=i.z;return s[0]=(1-(_+h))*A,s[1]=(m+v)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(m-v)*T,s[5]=(1-(d+h))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(g+b)*E,s[9]=(p-S)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=cr.set(s[0],s[1],s[2]).length();const o=cr.set(s[4],s[5],s[6]).length(),a=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);const c=1/r,u=1/o,f=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,t.setFromRotationMatrix(qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ki){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let m,g;if(a===ki)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===za)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ki){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),d=(t+e)*c,m=(i+s)*u;let g,_;if(a===ki)g=(o+r)*f,_=-2*f;else if(a===za)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cr=new ee,qn=new Ut,m_=new ee(0,0,0),g_=new ee(1,1,1),os=new ee,Ko=new ee,Ln=new ee,nh=new Ut,ih=new yi;class qi{constructor(e=0,t=0,i=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v_=0;const sh=new ee,ur=new yi,Ci=new Ut,jo=new ee,io=new ee,__=new ee,x_=new yi,rh=new ee(1,0,0),oh=new ee(0,1,0),ah=new ee(0,0,1),lh={type:"added"},y_={type:"removed"},fr={type:"childadded",child:null},Il={type:"childremoved",child:null};class On extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new ee,t=new qi,i=new yi,s=new ee(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new rt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jo.copy(e):jo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(io,jo,this.up):Ci.lookAt(jo,io,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Ci),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y_),Il.child=e,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,__),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,x_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}On.DEFAULT_UP=new ee(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new ee,Ri=new ee,Ul=new ee,Pi=new ee,hr=new ee,dr=new ee,ch=new ee,Fl=new ee,Nl=new ee,Ol=new ee,Bl=new It,kl=new It,zl=new It;class Zn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),Ri.subVectors(i,t),Ul.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Ri),l=Kn.dot(Ul),c=Ri.dot(Ri),u=Ri.dot(Ul),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bl.setScalar(0),kl.setScalar(0),zl.setScalar(0),Bl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,i),zl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(kl,r.y),o.addScaledVector(zl,r.z),o}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),Ri.subVectors(e,t),Kn.cross(Ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Kn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;hr.subVectors(s,i),dr.subVectors(r,i),Fl.subVectors(e,i);const l=hr.dot(Fl),c=dr.dot(Fl);if(l<=0&&c<=0)return t.copy(i);Nl.subVectors(e,s);const u=hr.dot(Nl),f=dr.dot(Nl);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hr,o);Ol.subVectors(e,r);const m=hr.dot(Ol),g=dr.dot(Ol);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(dr,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return ch.subVectors(r,s),a=(f-u)/(f-u+(m-g)),t.copy(s).addScaledVector(ch,a);const h=1/(p+_+d);return o=_*h,a=d*h,t.copy(i).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=zu(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Hl(o,r,e+1/3),this.g=Hl(o,r,e),this.b=Hl(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=Bp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return ct.fromWorkingColorSpace(rn.copy(this),e),Math.round(cn(rn.r*255,0,255))*65536+Math.round(cn(rn.g*255,0,255))*256+Math.round(cn(rn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(rn.copy(this),t);const i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=on){ct.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,s=rn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Zo);const i=xo(as.h,Zo.h,t),s=xo(as.s,Zo.s,t),r=xo(as.l,Zo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new gt;gt.NAMES=Bp;let M_=0;class ul extends Ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=$r(),this.name="",this.blending=Dr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=wc,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lo extends ul{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new ee,Jo=new at;class Mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yf,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yf&&(e.usage=this.usage),e}}class kp extends Mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zp extends Mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ws extends Mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let S_=0;const Hn=new Ut,Vl=new On,pr=new ee,In=new Oo,so=new Oo,Yt=new ee;class js extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?zp:kp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ws(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(In.min,so.min),In.expandByPoint(Yt),Yt.addVectors(In.max,so.max),In.expandByPoint(Yt)):(In.expandByPoint(so.min),In.expandByPoint(so.max))}In.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),Yt.add(pr)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new ee,l[I]=new ee;const c=new ee,u=new ee,f=new ee,d=new at,m=new at,g=new at,_=new ee,p=new ee;function h(I,x,y){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(c),f.sub(c),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(_),a[x].add(_),a[y].add(_),l[I].add(p),l[x].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,x=S.length;I<x;++I){const y=S[I],D=y.start,U=y.count;for(let k=D,X=D+U;k<X;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new ee,v=new ee,A=new ee,T=new ee;function E(I){A.fromBufferAttribute(s,I),T.copy(A);const x=a[I];b.copy(x),b.sub(A.multiplyScalar(A.dot(x))).normalize(),v.crossVectors(T,x);const D=v.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,D)}for(let I=0,x=S.length;I<x;++I){const y=S[I],D=y.start,U=y.count;for(let k=D,X=D+U;k<X;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new ee,r=new ee,o=new ee,a=new ee,l=new ee,c=new ee,u=new ee,f=new ee;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[m++]}return new Mi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new js,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new Ut,Rs=new Vu,Qo=new Hu,fh=new ee,ea=new ee,ta=new ee,na=new ee,Gl=new ee,ia=new ee,hh=new ee,sa=new ee;class Bt extends On{constructor(e=new js,t=new Lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Gl.fromBufferAttribute(f,e),o?ia.addScaledVector(Gl,u):ia.addScaledVector(Gl.sub(t),u))}t.add(ia)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Qo.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Qo,fh)===null||Rs.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(uh.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(uh),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=o[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=S,A=b;v<A;v+=3){const T=a.getX(v),E=a.getX(v+1),I=a.getX(v+2);s=ra(this,h,e,i,c,u,f,T,E,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const S=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);s=ra(this,o,e,i,c,u,f,S,b,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=o[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=S,A=b;v<A;v+=3){const T=v,E=v+1,I=v+2;s=ra(this,h,e,i,c,u,f,T,E,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const S=p,b=p+1,v=p+2;s=ra(this,o,e,i,c,u,f,S,b,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function b_(n,e,t,i,s,r,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Yi,a),l===null)return null;sa.copy(a),sa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:n}}function ra(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ea),n.getVertexPosition(l,ta),n.getVertexPosition(c,na);const u=b_(n,e,t,i,ea,ta,na,hh);if(u){const f=new ee;Zn.getBarycoord(hh,ea,ta,na,f),s&&(u.uv=Zn.getInterpolatedAttribute(s,a,l,c,f,new at)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,a,l,c,f,new at)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,f,new ee),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new ee,materialIndex:0};Zn.getNormal(ea,ta,na,d.normal),u.face=d,u.barycoord=f}return u}class Bo extends js{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ws(c,3)),this.setAttribute("normal",new Ws(u,3)),this.setAttribute("uv",new Ws(f,2));function g(_,p,h,S,b,v,A,T,E,I,x){const y=v/E,D=A/I,U=v/2,k=A/2,X=T/2,j=E+1,q=I+1;let Z=0,N=0;const W=new ee;for(let F=0;F<q;F++){const Y=F*D-k;for(let $=0;$<j;$++){const le=$*y-U;W[_]=le*S,W[p]=Y*b,W[h]=X,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[h]=T>0?1:-1,u.push(W.x,W.y,W.z),f.push($/E),f.push(1-F/I),Z+=1}}for(let F=0;F<I;F++)for(let Y=0;Y<E;Y++){const $=d+Y+j*F,le=d+Y+j*(F+1),te=d+(Y+1)+j*(F+1),he=d+(Y+1)+j*F;l.push($,le,he),l.push(le,te,he),N+=6}a.addGroup(m,N,x),m+=N,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=Hr(n[t]);for(const s in i)e[s]=i[s]}return e}function w_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const E_={clone:Hr,merge:gn};var T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends ul{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=A_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vp extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new ee,dh=new at,ph=new at;class Vn extends Vp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,dh,ph),t.subVectors(ph,dh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class C_ extends On{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vn(mr,gr,e,t);s.layers=this.layers,this.add(s);const r=new Vn(mr,gr,e,t);r.layers=this.layers,this.add(r);const o=new Vn(mr,gr,e,t);o.layers=this.layers,this.add(o);const a=new Vn(mr,gr,e,t);a.layers=this.layers,this.add(a);const l=new Vn(mr,gr,e,t);l.layers=this.layers,this.add(l);const c=new Vn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gp extends Mn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R_ extends $s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Gp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bo(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:gs});r.uniforms.tEquirect.value=t;const o=new Bt(s,r),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=Zt),new C_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Wl=new ee,P_=new ee,D_=new rt;class gi{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wl.subVectors(i,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||D_.getNormalMatrix(e),s=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new Hu,oa=new ee;class Wp{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],h=s[12],S=s[13],b=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,p-m,v-h).normalize(),i[1].setComponents(l+r,d+c,p+m,v+h).normalize(),i[2].setComponents(l+o,d+u,p+g,v+S).normalize(),i[3].setComponents(l-o,d-u,p-g,v-S).normalize(),i[4].setComponents(l-a,d-f,p-_,v-b).normalize(),t===ki)i[5].setComponents(l+a,d+f,p+_,v+b).normalize();else if(t===za)i[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function L_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class en extends js{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const S=h*d-o;for(let b=0;b<c;b++){const v=b*f-r;g.push(v,-S,0),_.push(0,0,1),p.push(b/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const b=S+c*h,v=S+c*(h+1),A=S+1+c*(h+1),T=S+1+c*h;m.push(b,v,T),m.push(v,A,T)}this.setIndex(m),this.setAttribute("position",new Ws(g,3)),this.setAttribute("normal",new Ws(_,3)),this.setAttribute("uv",new Ws(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.widthSegments,e.heightSegments)}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U_=`#ifdef USE_ALPHAHASH
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
#endif`,F_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k_=`#ifdef USE_AOMAP
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
#endif`,z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H_=`#ifdef USE_BATCHING
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
#endif`,V_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y_=`#ifdef USE_IRIDESCENCE
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
#endif`,$_=`#ifdef USE_BUMPMAP
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nx=`#define PI 3.141592653589793
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
} // validated`,ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ux=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wx=`uniform bool receiveShadow;
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
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Px=`PhysicalMaterial material;
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
#endif`,Dx=`struct PhysicalMaterial {
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
}`,Lx=`
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vx=`#if defined( USE_POINTS_UV )
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
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ty=`#ifdef USE_NORMALMAP
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
#endif`,ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vy=`float getShadowMask() {
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
}`,_y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,My=`#ifdef USE_SKINNING
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
#endif`,Sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,by=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ey=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iy=`uniform sampler2D t2D;
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
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`#include <common>
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
}`,ky=`#if DEPTH_PACKING == 3200
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
}`,zy=`#define DISTANCE
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
}`,Hy=`#define DISTANCE
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Yy=`#include <common>
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
}`,$y=`uniform vec3 diffuse;
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
}`,qy=`#define LAMBERT
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
}`,Ky=`#define LAMBERT
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
}`,jy=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define NORMAL
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
}`,Qy=`#define NORMAL
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
}`,eM=`#define PHONG
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
}`,tM=`#define PHONG
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
}`,nM=`#define STANDARD
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
}`,iM=`#define STANDARD
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
}`,sM=`#define TOON
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
}`,rM=`#define TOON
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
}`,oM=`uniform float size;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 color;
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
}`,uM=`uniform float rotation;
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
}`,fM=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:I_,alphahash_pars_fragment:U_,alphamap_fragment:F_,alphamap_pars_fragment:N_,alphatest_fragment:O_,alphatest_pars_fragment:B_,aomap_fragment:k_,aomap_pars_fragment:z_,batching_pars_vertex:H_,batching_vertex:V_,begin_vertex:G_,beginnormal_vertex:W_,bsdfs:X_,iridescence_fragment:Y_,bumpmap_pars_fragment:$_,clipping_planes_fragment:q_,clipping_planes_pars_fragment:K_,clipping_planes_pars_vertex:j_,clipping_planes_vertex:Z_,color_fragment:J_,color_pars_fragment:Q_,color_pars_vertex:ex,color_vertex:tx,common:nx,cube_uv_reflection_fragment:ix,defaultnormal_vertex:sx,displacementmap_pars_vertex:rx,displacementmap_vertex:ox,emissivemap_fragment:ax,emissivemap_pars_fragment:lx,colorspace_fragment:cx,colorspace_pars_fragment:ux,envmap_fragment:fx,envmap_common_pars_fragment:hx,envmap_pars_fragment:dx,envmap_pars_vertex:px,envmap_physical_pars_fragment:Ex,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:vx,fog_fragment:_x,fog_pars_fragment:xx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:Mx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:bx,lights_pars_begin:wx,lights_toon_fragment:Tx,lights_toon_pars_fragment:Ax,lights_phong_fragment:Cx,lights_phong_pars_fragment:Rx,lights_physical_fragment:Px,lights_physical_pars_fragment:Dx,lights_fragment_begin:Lx,lights_fragment_maps:Ix,lights_fragment_end:Ux,logdepthbuf_fragment:Fx,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Bx,map_fragment:kx,map_pars_fragment:zx,map_particle_fragment:Hx,map_particle_pars_fragment:Vx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Wx,morphinstance_vertex:Xx,morphcolor_vertex:Yx,morphnormal_vertex:$x,morphtarget_pars_vertex:qx,morphtarget_vertex:Kx,normal_fragment_begin:jx,normal_fragment_maps:Zx,normal_pars_fragment:Jx,normal_pars_vertex:Qx,normal_vertex:ey,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:sy,iridescence_pars_fragment:ry,opaque_fragment:oy,packing:ay,premultiplied_alpha_fragment:ly,project_vertex:cy,dithering_fragment:uy,dithering_pars_fragment:fy,roughnessmap_fragment:hy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:vy,skinbase_vertex:_y,skinning_pars_vertex:xy,skinning_vertex:yy,skinnormal_vertex:My,specularmap_fragment:Sy,specularmap_pars_fragment:by,tonemapping_fragment:wy,tonemapping_pars_fragment:Ey,transmission_fragment:Ty,transmission_pars_fragment:Ay,uv_pars_fragment:Cy,uv_pars_vertex:Ry,uv_vertex:Py,worldpos_vertex:Dy,background_vert:Ly,background_frag:Iy,backgroundCube_vert:Uy,backgroundCube_frag:Fy,cube_vert:Ny,cube_frag:Oy,depth_vert:By,depth_frag:ky,distanceRGBA_vert:zy,distanceRGBA_frag:Hy,equirect_vert:Vy,equirect_frag:Gy,linedashed_vert:Wy,linedashed_frag:Xy,meshbasic_vert:Yy,meshbasic_frag:$y,meshlambert_vert:qy,meshlambert_frag:Ky,meshmatcap_vert:jy,meshmatcap_frag:Zy,meshnormal_vert:Jy,meshnormal_frag:Qy,meshphong_vert:eM,meshphong_frag:tM,meshphysical_vert:nM,meshphysical_frag:iM,meshtoon_vert:sM,meshtoon_frag:rM,points_vert:oM,points_frag:aM,shadow_vert:lM,shadow_frag:cM,sprite_vert:uM,sprite_frag:fM},ke={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},vi={basic:{uniforms:gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new gt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:gn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:gn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new gt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:gn([ke.points,ke.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:gn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:gn([ke.common,ke.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:gn([ke.sprite,ke.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:gn([ke.common,ke.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:gn([ke.lights,ke.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};vi.physical={uniforms:gn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const aa={r:0,b:0,g:0},Ds=new qi,hM=new Ut;function dM(n,e,t,i,s,r,o){const a=new gt(0);let l=r===!0?0:1,c,u,f=null,d=0,m=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function _(S){let b=!1;const v=g(S);v===null?h(a,l):v&&v.isColor&&(h(v,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===ll)?(u===void 0&&(u=new Bt(new Bo(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Hr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ds.copy(b.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(Ds)),u.material.toneMapped=ct.getTransfer(v.colorSpace)!==yt,(f!==v||d!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,m=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Bt(new en(2,2),new Wn({name:"BackgroundMaterial",uniforms:Hr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ct.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,b){S.getRGB(aa,Hp(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),l=b,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(a,l)},render:_,addToRenderList:p}}function pM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,D,U,k,X){let j=!1;const q=f(k,U,D);r!==q&&(r=q,c(r.object)),j=m(y,k,U,X),j&&g(y,k,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(y,D,U,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,D,U){const k=U.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let j=X[D.id];j===void 0&&(j={},X[D.id]=j);let q=j[k];return q===void 0&&(q=d(l()),j[k]=q),q}function d(y){const D=[],U=[],k=[];for(let X=0;X<t;X++)D[X]=0,U[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:k,object:y,attributes:{},index:null}}function m(y,D,U,k){const X=r.attributes,j=D.attributes;let q=0;const Z=U.getAttributes();for(const N in Z)if(Z[N].location>=0){const F=X[N];let Y=j[N];if(Y===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),F===void 0||F.attribute!==Y||Y&&F.data!==Y.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function g(y,D,U,k){const X={},j=D.attributes;let q=0;const Z=U.getAttributes();for(const N in Z)if(Z[N].location>=0){let F=j[N];F===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(F=y.instanceColor));const Y={};Y.attribute=F,F&&F.data&&(Y.data=F.data),X[N]=Y,q++}r.attributes=X,r.attributesNum=q,r.index=k}function _(){const y=r.newAttributes;for(let D=0,U=y.length;D<U;D++)y[D]=0}function p(y){h(y,0)}function h(y,D){const U=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;U[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),X[y]!==D&&(n.vertexAttribDivisor(y,D),X[y]=D)}function S(){const y=r.newAttributes,D=r.enabledAttributes;for(let U=0,k=D.length;U<k;U++)D[U]!==y[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function b(y,D,U,k,X,j,q){q===!0?n.vertexAttribIPointer(y,D,U,X,j):n.vertexAttribPointer(y,D,U,k,X,j)}function v(y,D,U,k){_();const X=k.attributes,j=U.getAttributes(),q=D.defaultAttributeValues;for(const Z in j){const N=j[Z];if(N.location>=0){let W=X[Z];if(W===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const F=W.normalized,Y=W.itemSize,$=e.get(W);if($===void 0)continue;const le=$.buffer,te=$.type,he=$.bytesPerElement,ge=te===n.INT||te===n.UNSIGNED_INT||W.gpuType===Uu;if(W.isInterleavedBufferAttribute){const ve=W.data,Te=ve.stride,Ie=W.offset;if(ve.isInstancedInterleavedBuffer){for(let ze=0;ze<N.locationSize;ze++)h(N.location+ze,ve.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ze=0;ze<N.locationSize;ze++)p(N.location+ze);n.bindBuffer(n.ARRAY_BUFFER,le);for(let ze=0;ze<N.locationSize;ze++)b(N.location+ze,Y/N.locationSize,te,F,Te*he,(Ie+Y/N.locationSize*ze)*he,ge)}else{if(W.isInstancedBufferAttribute){for(let ve=0;ve<N.locationSize;ve++)h(N.location+ve,W.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ve=0;ve<N.locationSize;ve++)p(N.location+ve);n.bindBuffer(n.ARRAY_BUFFER,le);for(let ve=0;ve<N.locationSize;ve++)b(N.location+ve,Y/N.locationSize,te,F,Y*he,Y/N.locationSize*ve*he,ge)}}else if(q!==void 0){const F=q[Z];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(N.location,F);break;case 3:n.vertexAttrib3fv(N.location,F);break;case 4:n.vertexAttrib4fv(N.location,F);break;default:n.vertexAttrib1fv(N.location,F)}}}}S()}function A(){I();for(const y in i){const D=i[y];for(const U in D){const k=D[U];for(const X in k)u(k[X].object),delete k[X];delete D[U]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const U in D){const k=D[U];for(const X in k)u(k[X].object),delete k[X];delete D[U]}delete i[y.id]}function E(y){for(const D in i){const U=i[D];if(U[y.id]===void 0)continue;const k=U[y.id];for(const X in k)u(k[X].object),delete k[X];delete U[y.id]}}function I(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function mM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Jn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const I=E===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==$i&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Bi&&!I)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function vM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new gi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,b=S*4;let v=h.clippingState||null;l.value=v,v=u(g,d,b,m);for(let A=0;A!==b;++A)v[A]=t[A];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,v=m;b!==_;++b,v+=4)o.copy(f[b]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function _M(n){let e=new WeakMap;function t(o,a){return a===Lc?o.mapping=Or:a===Ic&&(o.mapping=Br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new R_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Zs extends Vp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,mh=[.125,.215,.35,.446,.526,.582],Bs=20,Xl=new Zs,gh=new gt;let Yl=null,$l=0,ql=0,Kl=!1;const Us=(1+Math.sqrt(5))/2,vr=1/Us,vh=[new ee(-Us,vr,0),new ee(Us,vr,0),new ee(-vr,0,Us),new ee(vr,0,Us),new ee(0,Us,-vr),new ee(0,Us,vr),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class _h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,$l,ql),this._renderer.xr.enabled=Kl,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:No,format:Jn,colorSpace:Yr,depthBuffer:!1},s=xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(r)),this._blurMaterial=yM(r,e,t)}return s}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,i,s){const a=new Vn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(gh),u.toneMapping=vs,u.autoClear=!1;const m=new Lo({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new Bt(new Bo,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(gh),_=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):S===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const b=this._cubeSize;la(s,S*b,h>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Or||e.mapping===Br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vh[(s-r-1)%vh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Bt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bs-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Bs;p>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bs}`);const h=[];let S=0;for(let E=0;E<Bs;++E){const I=E/_,x=Math.exp(-I*I/2);h.push(x),E===0?S+=x:E<p&&(S+=2*x)}for(let E=0;E<h.length;E++)h[E]=h[E]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const v=this._sizeLods[s],A=3*v*(s>b-Sr?s-b+Sr:0),T=4*(this._cubeSize-v);la(t,A,T,3*v,2*v),l.setRenderTarget(t),l.render(f,Xl)}}function xM(n){const e=[],t=[],i=[];let s=n;const r=n-Sr+1+mh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Sr?l=mh[o-n+Sr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,h=1,S=new Float32Array(_*g*m),b=new Float32Array(p*g*m),v=new Float32Array(h*g*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,I=T>2?0:-1,x=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];S.set(x,_*g*T),b.set(d,p*g*T);const y=[T,T,T,T,T,T];v.set(y,h*g*T)}const A=new js;A.setAttribute("position",new Mi(S,_)),A.setAttribute("uv",new Mi(b,p)),A.setAttribute("faceIndex",new Mi(v,h)),e.push(A),s>Sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xh(n,e,t){const i=new $s(n,e,t);return i.texture.mapping=ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function yM(n,e,t){const i=new Float32Array(Bs),s=new ee(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function yh(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Mh(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

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
	`}function MM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lc||l===Ic,u=l===Or||l===Br;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new _h(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new _h(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function SM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function bM(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let b=0,v=S.length;b<v;b+=3){const A=S[b+0],T=S[b+1],E=S[b+2];d.push(A,T,T,E,E,A)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,v=S.length/3-1;b<v;b+=3){const A=b+0,T=b+1,E=b+2;d.push(A,T,T,E,E,A)}}else return;const p=new(Fp(d)?zp:kp)(d,1);p.version=_;const h=r.get(f);h&&e.remove(h),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function wM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*o,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function f(d,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/o,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,_,0,g);let h=0;for(let S=0;S<g;S++)h+=m[S]*_[S];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function EM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function TM(n,e,t){const i=new WeakMap,s=new It;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let A=a.attributes.position.count*v,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*T*4*f),I=new Op(E,A,T,f);I.type=Bi,I.needsUpdate=!0;const x=v*4;for(let D=0;D<f;D++){const U=h[D],k=S[D],X=b[D],j=A*T*4*D;for(let q=0;q<U.count;q++){const Z=q*x;g===!0&&(s.fromBufferAttribute(U,q),E[j+Z+0]=s.x,E[j+Z+1]=s.y,E[j+Z+2]=s.z,E[j+Z+3]=0),_===!0&&(s.fromBufferAttribute(k,q),E[j+Z+4]=s.x,E[j+Z+5]=s.y,E[j+Z+6]=s.z,E[j+Z+7]=0),p===!0&&(s.fromBufferAttribute(X,q),E[j+Z+8]=s.x,E[j+Z+9]=s.y,E[j+Z+10]=s.z,E[j+Z+11]=X.itemSize===4?s.w:1)}}d={count:f,texture:I,size:new at(A,T)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function AM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Yp extends Mn{constructor(e,t,i,s,r,o,a,l,c,u=Lr){if(u!==Lr&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Lr&&(i=Ys),i===void 0&&u===zr&&(i=kr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $p=new Mn,Sh=new Yp(1,1),qp=new Op,Kp=new d_,jp=new Gp,bh=[],wh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fl(n,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function CM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function LM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Ah.set(i),n.uniformMatrix2fv(this.addr,!1,Ah),Wt(t,i)}}function IM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),Wt(t,i)}}function UM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Eh.set(i),n.uniformMatrix4fv(this.addr,!1,Eh),Wt(t,i)}}function FM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function kM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function GM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Sh.compareFunction=Up,r=Sh):r=$p,t.setTexture2D(e||r,s)}function WM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Kp,s)}function XM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||jp,s)}function YM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qp,s)}function $M(n){switch(n){case 5126:return CM;case 35664:return RM;case 35665:return PM;case 35666:return DM;case 35674:return LM;case 35675:return IM;case 35676:return UM;case 5124:case 35670:return FM;case 35667:case 35671:return NM;case 35668:case 35672:return OM;case 35669:case 35673:return BM;case 5125:return kM;case 36294:return zM;case 36295:return HM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return YM}}function qM(n,e){n.uniform1fv(this.addr,e)}function KM(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function jM(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function ZM(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function JM(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QM(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eS(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tS(n,e){n.uniform1iv(this.addr,e)}function nS(n,e){n.uniform2iv(this.addr,e)}function iS(n,e){n.uniform3iv(this.addr,e)}function sS(n,e){n.uniform4iv(this.addr,e)}function rS(n,e){n.uniform1uiv(this.addr,e)}function oS(n,e){n.uniform2uiv(this.addr,e)}function aS(n,e){n.uniform3uiv(this.addr,e)}function lS(n,e){n.uniform4uiv(this.addr,e)}function cS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$p,r[o])}function uS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kp,r[o])}function fS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||jp,r[o])}function hS(n,e,t){const i=this.cache,s=e.length,r=fl(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qp,r[o])}function dS(n){switch(n){case 5126:return qM;case 35664:return KM;case 35665:return jM;case 35666:return ZM;case 35674:return JM;case 35675:return QM;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return sS;case 5125:return rS;case 36294:return oS;case 36295:return aS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return hS}}class pS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$M(t.type)}}class mS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}}class gS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function Ch(n,e){n.seq.push(e),n.map[e.id]=e}function vS(n,e,t){const i=n.name,s=i.length;for(jl.lastIndex=0;;){const r=jl.exec(i),o=jl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ch(t,c===void 0?new pS(a,n,e):new mS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new gS(a),Ch(t,f)),t=f}}}class Ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Rh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _S=37297;let xS=0;function yS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ph=new rt;function MS(n){ct._getMatrix(Ph,ct.workingColorSpace,n);const e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case cl:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+yS(n.getShaderSource(e),o)}else return s}function SS(n,e){const t=MS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bS(n,e){let t;switch(e){case w0:t="Linear";break;case E0:t="Reinhard";break;case T0:t="Cineon";break;case A0:t="ACESFilmic";break;case R0:t="AgX";break;case P0:t="Neutral";break;case C0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ca=new ee;function wS(){ct.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ES(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function TS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function co(n){return n!==""}function Lh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CS=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(n){return n.replace(CS,PS)}const RS=new Map;function PS(n,e){let t=ot[e];if(t===void 0){const i=RS.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cu(t)}const DS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(n){return n.replace(DS,LS)}function LS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function IS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function US(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Or:case Br:e="ENVMAP_TYPE_CUBE";break;case ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function NS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sp:e="ENVMAP_BLENDING_MULTIPLY";break;case S0:e="ENVMAP_BLENDING_MIX";break;case b0:e="ENVMAP_BLENDING_ADD";break}return e}function OS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function BS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IS(t),c=US(t),u=FS(t),f=NS(t),d=OS(t),m=ES(t),g=TS(r),_=s.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),h.length>0&&(h+=`
`)):(p=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),h=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vs?"#define TONE_MAPPING":"",t.toneMapping!==vs?ot.tonemapping_pars_fragment:"",t.toneMapping!==vs?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,SS("linearToOutputTexel",t.outputColorSpace),wS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=cu(o),o=Lh(o,t),o=Ih(o,t),a=cu(a),a=Lh(a,t),a=Ih(a,t),o=Uh(o),a=Uh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=S+p+o,v=S+h+a,A=Rh(s,s.VERTEX_SHADER,b),T=Rh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(A).trim(),X=s.getShaderInfoLog(T).trim();let j=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,T);else{const Z=Dh(s,A,"vertex"),N=Dh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+Z+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||X==="")&&(q=!1);q&&(D.diagnostics={runnable:j,programLog:U,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:h}})}s.deleteShader(A),s.deleteShader(T),I=new Ra(s,_),x=AS(s,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,_S)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let kS=0;class zS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HS(e),t.set(e,i)),i}}class HS{constructor(e){this.id=kS++,this.code=e,this.usedTimes=0}}function VS(n,e,t,i,s,r,o){const a=new Gu,l=new zS,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,y,D,U,k){const X=U.fog,j=k.geometry,q=x.isMeshStandardMaterial?U.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),N=Z&&Z.mapping===ll?Z.image.height:null,W=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const F=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Y=F!==void 0?F.length:0;let $=0;j.morphAttributes.position!==void 0&&($=1),j.morphAttributes.normal!==void 0&&($=2),j.morphAttributes.color!==void 0&&($=3);let le,te,he,ge;if(W){const lt=vi[W];le=lt.vertexShader,te=lt.fragmentShader}else le=x.vertexShader,te=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),ge=l.getFragmentShaderID(x);const ve=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,ze=k.isBatchedMesh===!0,ye=!!x.map,P=!!x.matcap,B=!!Z,C=!!x.aoMap,de=!!x.lightMap,se=!!x.bumpMap,ne=!!x.normalMap,ce=!!x.displacementMap,_e=!!x.emissiveMap,ue=!!x.metalnessMap,w=!!x.roughnessMap,M=x.anisotropy>0,L=x.clearcoat>0,V=x.dispersion>0,Q=x.iridescence>0,re=x.sheen>0,we=x.transmission>0,Se=M&&!!x.anisotropyMap,Ae=L&&!!x.clearcoatMap,We=L&&!!x.clearcoatNormalMap,O=L&&!!x.clearcoatRoughnessMap,H=Q&&!!x.iridescenceMap,ie=Q&&!!x.iridescenceThicknessMap,Ee=re&&!!x.sheenColorMap,xe=re&&!!x.sheenRoughnessMap,Be=!!x.specularMap,Ue=!!x.specularColorMap,qe=!!x.specularIntensityMap,G=we&&!!x.transmissionMap,Re=we&&!!x.thicknessMap,fe=!!x.gradientMap,Me=!!x.alphaMap,Ne=x.alphaTest>0,Fe=!!x.alphaHash,Qe=!!x.extensions;let _t=vs;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Pt={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:te,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:ze,batchingColor:ze&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Yr,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:P,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:N,aoMap:C,lightMap:de,bumpMap:se,normalMap:ne,displacementMap:d&&ce,emissiveMap:_e,normalMapObjectSpace:ne&&x.normalMapType===F0,normalMapTangentSpace:ne&&x.normalMapType===U0,metalnessMap:ue,roughnessMap:w,anisotropy:M,anisotropyMap:Se,clearcoat:L,clearcoatMap:Ae,clearcoatNormalMap:We,clearcoatRoughnessMap:O,dispersion:V,iridescence:Q,iridescenceMap:H,iridescenceThicknessMap:ie,sheen:re,sheenColorMap:Ee,sheenRoughnessMap:xe,specularMap:Be,specularColorMap:Ue,specularIntensityMap:qe,transmission:we,transmissionMap:G,thicknessMap:Re,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Dr&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Fe,combine:x.combine,mapUv:ye&&_(x.map.channel),aoMapUv:C&&_(x.aoMap.channel),lightMapUv:de&&_(x.lightMap.channel),bumpMapUv:se&&_(x.bumpMap.channel),normalMapUv:ne&&_(x.normalMap.channel),displacementMapUv:ce&&_(x.displacementMap.channel),emissiveMapUv:_e&&_(x.emissiveMap.channel),metalnessMapUv:ue&&_(x.metalnessMap.channel),roughnessMapUv:w&&_(x.roughnessMap.channel),anisotropyMapUv:Se&&_(x.anisotropyMap.channel),clearcoatMapUv:Ae&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:We&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(x.sheenRoughnessMap.channel),specularMapUv:Be&&_(x.specularMap.channel),specularColorMapUv:Ue&&_(x.specularColorMap.channel),specularIntensityMapUv:qe&&_(x.specularIntensityMap.channel),transmissionMapUv:G&&_(x.transmissionMap.channel),thicknessMapUv:Re&&_(x.thicknessMap.channel),alphaMapUv:Me&&_(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ne||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(ye||Me),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Te,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:$,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:_e&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===Rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&x.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function h(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)y.push(D),y.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(S(y,x),b(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function b(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const y=g[x.type];let D;if(y){const U=vi[y];D=E_.clone(U.uniforms)}else D=x.uniforms;return D}function A(x,y){let D;for(let U=0,k=u.length;U<k;U++){const X=u[U];if(X.cacheKey===y){D=X,++D.usedTimes;break}}return D===void 0&&(D=new BS(n,y,x,r),u.push(D)),D}function T(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function E(x){l.remove(x)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:I}}function GS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function WS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,m,g,_,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function a(f,d,m,g,_,p){const h=o(f,d,m,g,_,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(f,d,m,g,_,p){const h=o(f,d,m,g,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||WS),i.length>1&&i.sort(d||Nh),s.length>1&&s.sort(d||Nh)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function XS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Oh,n.set(i,[o])):s>=r.length?(o=new Oh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function YS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new gt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function $S(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qS=0;function KS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jS(n){const e=new YS,t=$S(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const s=new ee,r=new Ut,o=new Ut;function a(c){let u=0,f=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,S=0,b=0,v=0,A=0,T=0,E=0;c.sort(KS);for(let x=0,y=c.length;x<y;x++){const D=c[x],U=D.color,k=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*k,f+=U.g*k,d+=U.b*k;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],k);E++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,N=t.get(D);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=D.shadow.matrix,S++}i.directional[m]=q,m++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(U).multiplyScalar(k),q.distance=X,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[_]=q;const Z=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,Z.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[_]=Z.matrix,D.castShadow){const N=t.get(D);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=j,v++}_++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(U).multiplyScalar(k),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=q,p++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Z=D.shadow,N=t.get(D);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=q,g++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(k),q.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[h]=q,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==h||I.numDirectionalShadows!==S||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==A||I.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=h,I.numDirectionalShadows=S,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=A,I.numLightProbes=E,i.version=qS++)}function l(c,u){let f=0,d=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const b=c[h];if(b.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(b.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Bh(n){const e=new jS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ZS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Bh(n),e.set(s,[a])):r>=o.length?(a=new Bh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class JS extends ul{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=L0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QS extends ul{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tb=`uniform sampler2D shadow_pass;
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
}`;function nb(n,e,t){let i=new Wp;const s=new at,r=new at,o=new It,a=new JS({depthPacking:I0}),l=new QS,c={},u=t.maxTextureSize,f={[Yi]:Rn,[Rn]:Yi,[jn]:jn},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:eb,fragmentShader:tb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new js;g.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mp;let h=this.type;this.render=function(T,E,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const x=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(gs),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=h!==Ii&&this.type===Ii,X=h===Ii&&this.type!==Ii;for(let j=0,q=T.length;j<q;j++){const Z=T[j],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const W=N.getFrameExtents();if(s.multiply(W),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,N.mapSize.y=r.y)),N.map===null||k===!0||X===!0){const Y=this.type!==Ii?{minFilter:ni,magFilter:ni}:{};N.map!==null&&N.map.dispose(),N.map=new $s(s.x,s.y,Y),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const F=N.getViewportCount();for(let Y=0;Y<F;Y++){const $=N.getViewport(Y);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),U.viewport(o),N.updateMatrices(Z,Y),i=N.getFrustum(),v(E,I,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===Ii&&S(N,I),N.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(x,y,D)};function S(T,E){const I=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $s(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,I,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,I,m,_,null)}function b(T,E,I,x){let y=null;const D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=y.uuid,k=E.uuid;let X=c[U];X===void 0&&(X={},c[U]=X);let j=X[k];j===void 0&&(j=y.clone(),X[k]=j,E.addEventListener("dispose",A)),y=j}if(y.visible=E.visible,y.wireframe=E.wireframe,x===Ii?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=I}return y}function v(T,E,I,x,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Ii)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const k=e.update(T),X=T.material;if(Array.isArray(X)){const j=k.groups;for(let q=0,Z=j.length;q<Z;q++){const N=j[q],W=X[N.materialIndex];if(W&&W.visible){const F=b(T,W,x,y);T.onBeforeShadow(n,T,E,I,k,F,N),n.renderBufferDirect(I,null,k,F,T,N),T.onAfterShadow(n,T,E,I,k,F,N)}}}else if(X.visible){const j=b(T,X,x,y);T.onBeforeShadow(n,T,E,I,k,j,null),n.renderBufferDirect(I,null,k,j,T,null),T.onAfterShadow(n,T,E,I,k,j,null)}}const U=T.children;for(let k=0,X=U.length;k<X;k++)v(U[k],E,I,x,y)}function A(T){T.target.removeEventListener("dispose",A);for(const I in c){const x=c[I],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const ib={[Ec]:Tc,[Ac]:Pc,[Cc]:Dc,[Nr]:Rc,[Tc]:Ec,[Pc]:Ac,[Dc]:Cc,[Rc]:Nr};function sb(n,e){function t(){let G=!1;const Re=new It;let fe=null;const Me=new It(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!G&&(n.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,Fe,Qe,_t,Pt){Pt===!0&&(Ne*=_t,Fe*=_t,Qe*=_t),Re.set(Ne,Fe,Qe,_t),Me.equals(Re)===!1&&(n.clearColor(Ne,Fe,Qe,_t),Me.copy(Re))},reset:function(){G=!1,fe=null,Me.set(-1,0,0,0)}}}function i(){let G=!1,Re=!1,fe=null,Me=null,Ne=null;return{setReversed:function(Fe){if(Re!==Fe){const Qe=e.get("EXT_clip_control");Re?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const _t=Ne;Ne=null,this.setClear(_t)}Re=Fe},getReversed:function(){return Re},setTest:function(Fe){Fe?ve(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Fe){fe!==Fe&&!G&&(n.depthMask(Fe),fe=Fe)},setFunc:function(Fe){if(Re&&(Fe=ib[Fe]),Me!==Fe){switch(Fe){case Ec:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case Ac:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case Cc:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Pc:n.depthFunc(n.GREATER);break;case Dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=Fe}},setLocked:function(Fe){G=Fe},setClear:function(Fe){Ne!==Fe&&(Re&&(Fe=1-Fe),n.clearDepth(Fe),Ne=Fe)},reset:function(){G=!1,fe=null,Me=null,Ne=null,Re=!1}}}function s(){let G=!1,Re=null,fe=null,Me=null,Ne=null,Fe=null,Qe=null,_t=null,Pt=null;return{setTest:function(lt){G||(lt?ve(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(lt){Re!==lt&&!G&&(n.stencilMask(lt),Re=lt)},setFunc:function(lt,nn,At){(fe!==lt||Me!==nn||Ne!==At)&&(n.stencilFunc(lt,nn,At),fe=lt,Me=nn,Ne=At)},setOp:function(lt,nn,At){(Fe!==lt||Qe!==nn||_t!==At)&&(n.stencilOp(lt,nn,At),Fe=lt,Qe=nn,_t=At)},setLocked:function(lt){G=lt},setClear:function(lt){Pt!==lt&&(n.clearStencil(lt),Pt=lt)},reset:function(){G=!1,Re=null,fe=null,Me=null,Ne=null,Fe=null,Qe=null,_t=null,Pt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],g=null,_=!1,p=null,h=null,S=null,b=null,v=null,A=null,T=null,E=new gt(0,0,0),I=0,x=!1,y=null,D=null,U=null,k=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(N)[1]),q=Z>=1):N.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),q=Z>=2);let W=null,F={};const Y=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),le=new It().fromArray(Y),te=new It().fromArray($);function he(G,Re,fe,Me){const Ne=new Uint8Array(4),Fe=n.createTexture();n.bindTexture(G,Fe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<fe;Qe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Re+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return Fe}const ge={};ge[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(Nr),se(!1),ne(Hf),ve(n.CULL_FACE),C(gs);function ve(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Te(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Ie(G,Re){return f[G]!==Re?(n.bindFramebuffer(G,Re),f[G]=Re,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Re),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function ze(G,Re){let fe=m,Me=!1;if(G){fe=d.get(Re),fe===void 0&&(fe=[],d.set(Re,fe));const Ne=G.textures;if(fe.length!==Ne.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Fe=0,Qe=Ne.length;Fe<Qe;Fe++)fe[Fe]=n.COLOR_ATTACHMENT0+Fe;fe.length=Ne.length,Me=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Me=!0);Me&&n.drawBuffers(fe)}function ye(G){return g!==G?(n.useProgram(G),g=G,!0):!1}const P={[Os]:n.FUNC_ADD,[r0]:n.FUNC_SUBTRACT,[o0]:n.FUNC_REVERSE_SUBTRACT};P[a0]=n.MIN,P[l0]=n.MAX;const B={[c0]:n.ZERO,[u0]:n.ONE,[f0]:n.SRC_COLOR,[bc]:n.SRC_ALPHA,[v0]:n.SRC_ALPHA_SATURATE,[m0]:n.DST_COLOR,[d0]:n.DST_ALPHA,[h0]:n.ONE_MINUS_SRC_COLOR,[wc]:n.ONE_MINUS_SRC_ALPHA,[g0]:n.ONE_MINUS_DST_COLOR,[p0]:n.ONE_MINUS_DST_ALPHA,[_0]:n.CONSTANT_COLOR,[x0]:n.ONE_MINUS_CONSTANT_COLOR,[y0]:n.CONSTANT_ALPHA,[M0]:n.ONE_MINUS_CONSTANT_ALPHA};function C(G,Re,fe,Me,Ne,Fe,Qe,_t,Pt,lt){if(G===gs){_===!0&&(Te(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),G!==s0){if(G!==p||lt!==x){if((h!==Os||v!==Os)&&(n.blendEquation(n.FUNC_ADD),h=Os,v=Os),lt)switch(G){case Dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.ONE,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,b=null,A=null,T=null,E.set(0,0,0),I=0,p=G,x=lt}return}Ne=Ne||Re,Fe=Fe||fe,Qe=Qe||Me,(Re!==h||Ne!==v)&&(n.blendEquationSeparate(P[Re],P[Ne]),h=Re,v=Ne),(fe!==S||Me!==b||Fe!==A||Qe!==T)&&(n.blendFuncSeparate(B[fe],B[Me],B[Fe],B[Qe]),S=fe,b=Me,A=Fe,T=Qe),(_t.equals(E)===!1||Pt!==I)&&(n.blendColor(_t.r,_t.g,_t.b,Pt),E.copy(_t),I=Pt),p=G,x=!1}function de(G,Re){G.side===jn?Te(n.CULL_FACE):ve(n.CULL_FACE);let fe=G.side===Rn;Re&&(fe=!fe),se(fe),G.blending===Dr&&G.transparent===!1?C(gs):C(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Me=G.stencilWrite;a.setTest(Me),Me&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),_e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(G){y!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),y=G)}function ne(G){G!==t0?(ve(n.CULL_FACE),G!==D&&(G===Hf?n.cullFace(n.BACK):G===n0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),D=G}function ce(G){G!==U&&(q&&n.lineWidth(G),U=G)}function _e(G,Re,fe){G?(ve(n.POLYGON_OFFSET_FILL),(k!==Re||X!==fe)&&(n.polygonOffset(Re,fe),k=Re,X=fe)):Te(n.POLYGON_OFFSET_FILL)}function ue(G){G?ve(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function w(G){G===void 0&&(G=n.TEXTURE0+j-1),W!==G&&(n.activeTexture(G),W=G)}function M(G,Re,fe){fe===void 0&&(W===null?fe=n.TEXTURE0+j-1:fe=W);let Me=F[fe];Me===void 0&&(Me={type:void 0,texture:void 0},F[fe]=Me),(Me.type!==G||Me.texture!==Re)&&(W!==fe&&(n.activeTexture(fe),W=fe),n.bindTexture(G,Re||ge[G]),Me.type=G,Me.texture=Re)}function L(){const G=F[W];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(G){le.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),le.copy(G))}function xe(G){te.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),te.copy(G))}function Be(G,Re){let fe=c.get(Re);fe===void 0&&(fe=new WeakMap,c.set(Re,fe));let Me=fe.get(G);Me===void 0&&(Me=n.getUniformBlockIndex(Re,G.name),fe.set(G,Me))}function Ue(G,Re){const Me=c.get(Re).get(G);l.get(Re)!==Me&&(n.uniformBlockBinding(Re,Me,G.__bindingPointIndex),l.set(Re,Me))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,F={},f={},d=new WeakMap,m=[],g=null,_=!1,p=null,h=null,S=null,b=null,v=null,A=null,T=null,E=new gt(0,0,0),I=0,x=!1,y=null,D=null,U=null,k=null,X=null,le.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Te,bindFramebuffer:Ie,drawBuffers:ze,useProgram:ye,setBlending:C,setMaterial:de,setFlipSided:se,setCullFace:ne,setLineWidth:ce,setPolygonOffset:_e,setScissorTest:ue,activeTexture:w,bindTexture:M,unbindTexture:L,compressedTexImage2D:V,compressedTexImage3D:Q,texImage2D:H,texImage3D:ie,updateUBOMapping:Be,uniformBlockBinding:Ue,texStorage2D:We,texStorage3D:O,texSubImage2D:re,texSubImage3D:we,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ae,scissor:Ee,viewport:xe,reset:qe}}function kh(n,e,t,i){const s=rb(i);switch(t){case Ap:return n*e;case Rp:return n*e;case Pp:return n*e*2;case Dp:return n*e/s.components*s.byteLength;case Ou:return n*e/s.components*s.byteLength;case Lp:return n*e*2/s.components*s.byteLength;case Bu:return n*e*2/s.components*s.byteLength;case Cp:return n*e*3/s.components*s.byteLength;case Jn:return n*e*4/s.components*s.byteLength;case ku:return n*e*4/s.components*s.byteLength;case wa:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:case kc:return Math.max(n,16)*Math.max(e,8)/4;case Nc:case Bc:return Math.max(n,8)*Math.max(e,8)/2;case zc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ca:case iu:case su:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ip:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ou:case au:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rb(n){switch(n){case $i:case wp:return{byteLength:1,components:1};case Po:case Ep:case No:return{byteLength:2,components:1};case Fu:case Nu:return{byteLength:2,components:4};case Ys:case Uu:case Bi:return{byteLength:4,components:1};case Tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ob(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return m?new OffscreenCanvas(w,M):Ha("canvas")}function _(w,M,L){let V=1;const Q=ue(w);if((Q.width>L||Q.height>L)&&(V=L/Math.max(Q.width,Q.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(V*Q.width),we=Math.floor(V*Q.height);f===void 0&&(f=g(re,we));const Se=M?g(re,we):f;return Se.width=re,Se.height=we,Se.getContext("2d").drawImage(w,0,0,re,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+we+")."),Se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function p(w){return w.generateMipmaps}function h(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,M,L,V,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=M;if(M===n.RED&&(L===n.FLOAT&&(re=n.R32F),L===n.HALF_FLOAT&&(re=n.R16F),L===n.UNSIGNED_BYTE&&(re=n.R8)),M===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(re=n.R8UI),L===n.UNSIGNED_SHORT&&(re=n.R16UI),L===n.UNSIGNED_INT&&(re=n.R32UI),L===n.BYTE&&(re=n.R8I),L===n.SHORT&&(re=n.R16I),L===n.INT&&(re=n.R32I)),M===n.RG&&(L===n.FLOAT&&(re=n.RG32F),L===n.HALF_FLOAT&&(re=n.RG16F),L===n.UNSIGNED_BYTE&&(re=n.RG8)),M===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(re=n.RG8UI),L===n.UNSIGNED_SHORT&&(re=n.RG16UI),L===n.UNSIGNED_INT&&(re=n.RG32UI),L===n.BYTE&&(re=n.RG8I),L===n.SHORT&&(re=n.RG16I),L===n.INT&&(re=n.RG32I)),M===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(re=n.RGB8UI),L===n.UNSIGNED_SHORT&&(re=n.RGB16UI),L===n.UNSIGNED_INT&&(re=n.RGB32UI),L===n.BYTE&&(re=n.RGB8I),L===n.SHORT&&(re=n.RGB16I),L===n.INT&&(re=n.RGB32I)),M===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),L===n.UNSIGNED_INT&&(re=n.RGBA32UI),L===n.BYTE&&(re=n.RGBA8I),L===n.SHORT&&(re=n.RGBA16I),L===n.INT&&(re=n.RGBA32I)),M===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),M===n.RGBA){const we=Q?cl:ct.getTransfer(V);L===n.FLOAT&&(re=n.RGBA32F),L===n.HALF_FLOAT&&(re=n.RGBA16F),L===n.UNSIGNED_BYTE&&(re=we===yt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function v(w,M){let L;return w?M===null||M===Ys||M===kr?L=n.DEPTH24_STENCIL8:M===Bi?L=n.DEPTH32F_STENCIL8:M===Po&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ys||M===kr?L=n.DEPTH_COMPONENT24:M===Bi?L=n.DEPTH_COMPONENT32F:M===Po&&(L=n.DEPTH_COMPONENT16),L}function A(w,M){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==ni&&w.minFilter!==Zt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){const M=w.target;M.removeEventListener("dispose",T),I(M),M.isVideoTexture&&u.delete(M)}function E(w){const M=w.target;M.removeEventListener("dispose",E),y(M)}function I(w){const M=i.get(w);if(M.__webglInit===void 0)return;const L=w.source,V=d.get(L);if(V){const Q=V[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(w),Object.keys(V).length===0&&d.delete(L)}i.remove(w)}function x(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const L=w.source,V=d.get(L);delete V[M.__cacheKey],o.memory.textures--}function y(w){const M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let Q=0;Q<M.__webglFramebuffer[V].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[V][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)n.deleteFramebuffer(M.__webglFramebuffer[V]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const L=w.textures;for(let V=0,Q=L.length;V<Q;V++){const re=i.get(L[V]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(L[V])}i.remove(w)}let D=0;function U(){D=0}function k(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function X(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function j(w,M){const L=i.get(w);if(w.isVideoTexture&&ce(w),w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(L,w,M);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+M)}function q(w,M){const L=i.get(w);if(w.version>0&&L.__version!==w.version){te(L,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+M)}function Z(w,M){const L=i.get(w);if(w.version>0&&L.__version!==w.version){te(L,w,M);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+M)}function N(w,M){const L=i.get(w);if(w.version>0&&L.__version!==w.version){he(L,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+M)}const W={[Uc]:n.REPEAT,[zs]:n.CLAMP_TO_EDGE,[Fc]:n.MIRRORED_REPEAT},F={[ni]:n.NEAREST,[D0]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[wl]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},Y={[N0]:n.NEVER,[V0]:n.ALWAYS,[O0]:n.LESS,[Up]:n.LEQUAL,[B0]:n.EQUAL,[H0]:n.GEQUAL,[k0]:n.GREATER,[z0]:n.NOTEQUAL};function $(w,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Zt||M.magFilter===wl||M.magFilter===Go||M.magFilter===ps||M.minFilter===Zt||M.minFilter===wl||M.minFilter===Go||M.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,W[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,W[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,W[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,F[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Y[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ni||M.minFilter!==Go&&M.minFilter!==ps||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function le(w,M){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",T));const V=M.source;let Q=d.get(V);Q===void 0&&(Q={},d.set(V,Q));const re=X(M);if(re!==w.__cacheKey){Q[re]===void 0&&(Q[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Q[re].usedTimes++;const we=Q[w.__cacheKey];we!==void 0&&(Q[w.__cacheKey].usedTimes--,we.usedTimes===0&&x(M)),w.__cacheKey=re,w.__webglTexture=Q[re].texture}return L}function te(w,M,L){let V=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=n.TEXTURE_3D);const Q=le(w,M),re=M.source;t.bindTexture(V,w.__webglTexture,n.TEXTURE0+L);const we=i.get(re);if(re.version!==we.__version||Q===!0){t.activeTexture(n.TEXTURE0+L);const Se=ct.getPrimaries(ct.workingColorSpace),Ae=M.colorSpace===ds?null:ct.getPrimaries(M.colorSpace),We=M.colorSpace===ds||Se===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let O=_(M.image,!1,s.maxTextureSize);O=_e(M,O);const H=r.convert(M.format,M.colorSpace),ie=r.convert(M.type);let Ee=b(M.internalFormat,H,ie,M.colorSpace,M.isVideoTexture);$(V,M);let xe;const Be=M.mipmaps,Ue=M.isVideoTexture!==!0,qe=we.__version===void 0||Q===!0,G=re.dataReady,Re=A(M,O);if(M.isDepthTexture)Ee=v(M.format===zr,M.type),qe&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Ee,O.width,O.height):t.texImage2D(n.TEXTURE_2D,0,Ee,O.width,O.height,0,H,ie,null));else if(M.isDataTexture)if(Be.length>0){Ue&&qe&&t.texStorage2D(n.TEXTURE_2D,Re,Ee,Be[0].width,Be[0].height);for(let fe=0,Me=Be.length;fe<Me;fe++)xe=Be[fe],Ue?G&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,xe.width,xe.height,H,ie,xe.data):t.texImage2D(n.TEXTURE_2D,fe,Ee,xe.width,xe.height,0,H,ie,xe.data);M.generateMipmaps=!1}else Ue?(qe&&t.texStorage2D(n.TEXTURE_2D,Re,Ee,O.width,O.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,O.width,O.height,H,ie,O.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,O.width,O.height,0,H,ie,O.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ee,Be[0].width,Be[0].height,O.depth);for(let fe=0,Me=Be.length;fe<Me;fe++)if(xe=Be[fe],M.format!==Jn)if(H!==null)if(Ue){if(G)if(M.layerUpdates.size>0){const Ne=kh(xe.width,xe.height,M.format,M.type);for(const Fe of M.layerUpdates){const Qe=xe.data.subarray(Fe*Ne/xe.data.BYTES_PER_ELEMENT,(Fe+1)*Ne/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Fe,xe.width,xe.height,1,H,Qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,O.depth,H,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ee,xe.width,xe.height,O.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,O.depth,H,ie,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ee,xe.width,xe.height,O.depth,0,H,ie,xe.data)}else{Ue&&qe&&t.texStorage2D(n.TEXTURE_2D,Re,Ee,Be[0].width,Be[0].height);for(let fe=0,Me=Be.length;fe<Me;fe++)xe=Be[fe],M.format!==Jn?H!==null?Ue?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,xe.width,xe.height,H,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ee,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?G&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,xe.width,xe.height,H,ie,xe.data):t.texImage2D(n.TEXTURE_2D,fe,Ee,xe.width,xe.height,0,H,ie,xe.data)}else if(M.isDataArrayTexture)if(Ue){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ee,O.width,O.height,O.depth),G)if(M.layerUpdates.size>0){const fe=kh(O.width,O.height,M.format,M.type);for(const Me of M.layerUpdates){const Ne=O.data.subarray(Me*fe/O.data.BYTES_PER_ELEMENT,(Me+1)*fe/O.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,O.width,O.height,1,H,ie,Ne)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,H,ie,O.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,O.width,O.height,O.depth,0,H,ie,O.data);else if(M.isData3DTexture)Ue?(qe&&t.texStorage3D(n.TEXTURE_3D,Re,Ee,O.width,O.height,O.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,H,ie,O.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,O.width,O.height,O.depth,0,H,ie,O.data);else if(M.isFramebufferTexture){if(qe)if(Ue)t.texStorage2D(n.TEXTURE_2D,Re,Ee,O.width,O.height);else{let fe=O.width,Me=O.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Ee,fe,Me,0,H,ie,null),fe>>=1,Me>>=1}}else if(Be.length>0){if(Ue&&qe){const fe=ue(Be[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ee,fe.width,fe.height)}for(let fe=0,Me=Be.length;fe<Me;fe++)xe=Be[fe],Ue?G&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,H,ie,xe):t.texImage2D(n.TEXTURE_2D,fe,Ee,H,ie,xe);M.generateMipmaps=!1}else if(Ue){if(qe){const fe=ue(O);t.texStorage2D(n.TEXTURE_2D,Re,Ee,fe.width,fe.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,H,ie,O)}else t.texImage2D(n.TEXTURE_2D,0,Ee,H,ie,O);p(M)&&h(V),we.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function he(w,M,L){if(M.image.length!==6)return;const V=le(w,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+L);const re=i.get(Q);if(Q.version!==re.__version||V===!0){t.activeTexture(n.TEXTURE0+L);const we=ct.getPrimaries(ct.workingColorSpace),Se=M.colorSpace===ds?null:ct.getPrimaries(M.colorSpace),Ae=M.colorSpace===ds||we===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,O=M.image[0]&&M.image[0].isDataTexture,H=[];for(let Me=0;Me<6;Me++)!We&&!O?H[Me]=_(M.image[Me],!0,s.maxCubemapSize):H[Me]=O?M.image[Me].image:M.image[Me],H[Me]=_e(M,H[Me]);const ie=H[0],Ee=r.convert(M.format,M.colorSpace),xe=r.convert(M.type),Be=b(M.internalFormat,Ee,xe,M.colorSpace),Ue=M.isVideoTexture!==!0,qe=re.__version===void 0||V===!0,G=Q.dataReady;let Re=A(M,ie);$(n.TEXTURE_CUBE_MAP,M);let fe;if(We){Ue&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Be,ie.width,ie.height);for(let Me=0;Me<6;Me++){fe=H[Me].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const Fe=fe[Ne];M.format!==Jn?Ee!==null?Ue?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne,0,0,Fe.width,Fe.height,Ee,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne,0,0,Fe.width,Fe.height,Ee,xe,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne,Be,Fe.width,Fe.height,0,Ee,xe,Fe.data)}}}else{if(fe=M.mipmaps,Ue&&qe){fe.length>0&&Re++;const Me=ue(H[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Be,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(O){Ue?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,H[Me].width,H[Me].height,Ee,xe,H[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Be,H[Me].width,H[Me].height,0,Ee,xe,H[Me].data);for(let Ne=0;Ne<fe.length;Ne++){const Qe=fe[Ne].image[Me].image;Ue?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne+1,0,0,Qe.width,Qe.height,Ee,xe,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne+1,Be,Qe.width,Qe.height,0,Ee,xe,Qe.data)}}else{Ue?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ee,xe,H[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Be,Ee,xe,H[Me]);for(let Ne=0;Ne<fe.length;Ne++){const Fe=fe[Ne];Ue?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne+1,0,0,Ee,xe,Fe.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ne+1,Be,Ee,xe,Fe.image[Me])}}}p(M)&&h(n.TEXTURE_CUBE_MAP),re.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ge(w,M,L,V,Q,re){const we=r.convert(L.format,L.colorSpace),Se=r.convert(L.type),Ae=b(L.internalFormat,we,Se,L.colorSpace),We=i.get(M),O=i.get(L);if(O.__renderTarget=M,!We.__hasExternalTextures){const H=Math.max(1,M.width>>re),ie=Math.max(1,M.height>>re);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,Ae,H,ie,M.depth,0,we,Se,null):t.texImage2D(Q,re,Ae,H,ie,0,we,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ne(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Q,O.__webglTexture,0,se(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Q,O.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(w,M,L){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){const V=M.depthTexture,Q=V&&V.isDepthTexture?V.type:null,re=v(M.stencilBuffer,Q),we=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=se(M);ne(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,re,M.width,M.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,re,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,re,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,w)}else{const V=M.textures;for(let Q=0;Q<V.length;Q++){const re=V[Q],we=r.convert(re.format,re.colorSpace),Se=r.convert(re.type),Ae=b(re.internalFormat,we,Se,re.colorSpace),We=se(M);L&&ne(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Ae,M.width,M.height):ne(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,Ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(M.depthTexture);V.__renderTarget=M,(!V.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const Q=V.__webglTexture,re=se(M);if(M.depthTexture.format===Lr)ne(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===zr)ne(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ie(w){const M=i.get(w),L=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const V=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",Q)};V.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=V}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,w)}else if(L){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=n.createRenderbuffer(),ve(M.__webglDepthbuffer[V],w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,re)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ve(M.__webglDepthbuffer,w,!1);else{const V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(w,M,L){const V=i.get(w);M!==void 0&&ge(V.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ie(w)}function ye(w){const M=w.texture,L=i.get(w),V=i.get(M);w.addEventListener("dispose",E);const Q=w.textures,re=w.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=M.version,o.memory.textures++),re){L.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer[Se]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)L.__webglFramebuffer[Se][Ae]=n.createFramebuffer()}else L.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer=[];for(let Se=0;Se<M.mipmaps.length;Se++)L.__webglFramebuffer[Se]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(we)for(let Se=0,Ae=Q.length;Se<Ae;Se++){const We=i.get(Q[Se]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ne(w)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Se=0;Se<Q.length;Se++){const Ae=Q[Se];L.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[Se]);const We=r.convert(Ae.format,Ae.colorSpace),O=r.convert(Ae.type),H=b(Ae.internalFormat,We,O,Ae.colorSpace,w.isXRRenderTarget===!0),ie=se(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,H,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,L.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(L.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),$(n.TEXTURE_CUBE_MAP,M);for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)ge(L.__webglFramebuffer[Se][Ae],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ae);else ge(L.__webglFramebuffer[Se],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);p(M)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let Se=0,Ae=Q.length;Se<Ae;Se++){const We=Q[Se],O=i.get(We);t.bindTexture(n.TEXTURE_2D,O.__webglTexture),$(n.TEXTURE_2D,We),ge(L.__webglFramebuffer,w,We,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),p(We)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Se=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,V.__webglTexture),$(Se,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)ge(L.__webglFramebuffer[Ae],w,M,n.COLOR_ATTACHMENT0,Se,Ae);else ge(L.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,Se,0);p(M)&&h(Se),t.unbindTexture()}w.depthBuffer&&Ie(w)}function P(w){const M=w.textures;for(let L=0,V=M.length;L<V;L++){const Q=M[L];if(p(Q)){const re=S(w),we=i.get(Q).__webglTexture;t.bindTexture(re,we),h(re),t.unbindTexture()}}}const B=[],C=[];function de(w){if(w.samples>0){if(ne(w)===!1){const M=w.textures,L=w.width,V=w.height;let Q=n.COLOR_BUFFER_BIT;const re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(w),Se=M.length>1;if(Se)for(let Ae=0;Ae<M.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),Se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const We=i.get(M[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,L,V,0,0,L,V,Q,n.NEAREST),l===!0&&(B.length=0,C.length=0,B.push(n.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(B.push(re),C.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let Ae=0;Ae<M.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const We=i.get(M[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function se(w){return Math.min(s.maxSamples,w.samples)}function ne(w){const M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ce(w){const M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function _e(w,M){const L=w.colorSpace,V=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==Yr&&L!==ds&&(ct.getTransfer(L)===yt?(V!==Jn||Q!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),M}function ue(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=N,this.rebindTextures=ze,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ne}function ab(n,e){function t(i,s=ds){let r;const o=ct.getTransfer(s);if(i===$i)return n.UNSIGNED_BYTE;if(i===Fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wp)return n.BYTE;if(i===Ep)return n.SHORT;if(i===Po)return n.UNSIGNED_SHORT;if(i===Uu)return n.INT;if(i===Ys)return n.UNSIGNED_INT;if(i===Bi)return n.FLOAT;if(i===No)return n.HALF_FLOAT;if(i===Ap)return n.ALPHA;if(i===Cp)return n.RGB;if(i===Jn)return n.RGBA;if(i===Rp)return n.LUMINANCE;if(i===Pp)return n.LUMINANCE_ALPHA;if(i===Lr)return n.DEPTH_COMPONENT;if(i===zr)return n.DEPTH_STENCIL;if(i===Dp)return n.RED;if(i===Ou)return n.RED_INTEGER;if(i===Lp)return n.RG;if(i===Bu)return n.RG_INTEGER;if(i===ku)return n.RGBA_INTEGER;if(i===wa||i===Ea||i===Ta||i===Aa)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===Oc||i===Bc||i===kc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Hc||i===Vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Hc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gc||i===Wc||i===Xc||i===Yc||i===$c||i===qc||i===Kc||i===jc||i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ca||i===iu||i===su)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ca)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ip||i===ru||i===ou||i===au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class lb extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class uo extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cb={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fb=`
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

}`;class hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:ub,fragmentShader:fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new en(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class db extends Ks{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null;const _=new hb,p=t.getContextAttributes();let h=null,S=null;const b=[],v=[],A=new at;let T=null;const E=new Vn;E.viewport=new It;const I=new Vn;I.viewport=new It;const x=[E,I],y=new lb;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=b[te];return he===void 0&&(he=new Zl,b[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=b[te];return he===void 0&&(he=new Zl,b[te]=he),he.getGripSpace()},this.getHand=function(te){let he=b[te];return he===void 0&&(he=new Zl,b[te]=he),he.getHandSpace()};function k(te){const he=v.indexOf(te.inputSource);if(he===-1)return;const ge=b[he];ge!==void 0&&(ge.update(te.inputSource,te.frame,c||o),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let te=0;te<b.length;te++){const he=v[te];he!==null&&(v[te]=null,b[te].disconnect(he))}D=null,U=null,_.reset(),e.setRenderTarget(h),m=null,d=null,f=null,s=null,S=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new $s(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,ge=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?zr:Lr,ge=p.stencil?kr:Ys);const Te={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Te),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new $s(d.textureWidth,d.textureHeight,{format:Jn,type:$i,depthTexture:new Yp(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(te){for(let he=0;he<te.removed.length;he++){const ge=te.removed[he],ve=v.indexOf(ge);ve>=0&&(v[ve]=null,b[ve].disconnect(ge))}for(let he=0;he<te.added.length;he++){const ge=te.added[he];let ve=v.indexOf(ge);if(ve===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=v.length){v.push(ge),ve=Ie;break}else if(v[Ie]===null){v[Ie]=ge,ve=Ie;break}if(ve===-1)break}const Te=b[ve];Te&&Te.connect(ge)}}const q=new ee,Z=new ee;function N(te,he,ge){q.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const ve=q.distanceTo(Z),Te=he.projectionMatrix.elements,Ie=ge.projectionMatrix.elements,ze=Te[14]/(Te[10]-1),ye=Te[14]/(Te[10]+1),P=(Te[9]+1)/Te[5],B=(Te[9]-1)/Te[5],C=(Te[8]-1)/Te[0],de=(Ie[8]+1)/Ie[0],se=ze*C,ne=ze*de,ce=ve/(-C+de),_e=ce*-C;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(_e),te.translateZ(ce),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Te[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const ue=ze+ce,w=ye+ce,M=se-_e,L=ne+(ve-_e),V=P*ye/w*ue,Q=B*ye/w*ue;te.projectionMatrix.makePerspective(M,L,V,Q,ue,w),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function W(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let he=te.near,ge=te.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),y.near=I.near=E.near=he,y.far=I.far=E.far=ge,(D!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,U=y.far),E.layers.mask=te.layers.mask|2,I.layers.mask=te.layers.mask|4,y.layers.mask=E.layers.mask|I.layers.mask;const ve=te.parent,Te=y.cameras;W(y,ve);for(let Ie=0;Ie<Te.length;Ie++)W(Te[Ie],ve);Te.length===2?N(y,E,I):y.projectionMatrix.copy(E.projectionMatrix),F(te,y,ve)};function F(te,he,ge){ge===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(ge.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Do*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Y=null;function $(te,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ve=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,ve=!0);for(let Ie=0;Ie<ge.length;Ie++){const ze=ge[Ie];let ye=null;if(m!==null)ye=m.getViewport(ze);else{const B=f.getViewSubImage(d,ze);ye=B.viewport,Ie===0&&(e.setRenderTargetTextures(S,B.colorTexture,d.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(S))}let P=x[Ie];P===void 0&&(P=new Vn,P.layers.enable(Ie),P.viewport=new It,x[Ie]=P),P.matrix.fromArray(ze.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ze.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(ye.x,ye.y,ye.width,ye.height),Ie===0&&(y.matrix.copy(P.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ve===!0&&y.cameras.push(P)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=f.getDepthInformation(ge[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,s.renderState)}}for(let ge=0;ge<b.length;ge++){const ve=v[ge],Te=b[ge];ve!==null&&Te!==void 0&&Te.update(ve,he,c||o)}Y&&Y(te,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const le=new Xp;le.setAnimationLoop($),this.setAnimationLoop=function(te){Y=te},this.dispose=function(){}}}const Ls=new qi,pb=new Ut;function mb(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Hp(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,S,b,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,v)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,S,b):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Rn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Rn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h),b=S.envMap,v=S.envMapRotation;b&&(p.envMap.value=b,Ls.copy(v),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),p.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(Ls)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const v=b.program;i.uniformBlockBinding(S,v)}function c(S,b){let v=s[S.id];v===void 0&&(g(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",p));const A=b.program;i.updateUBOMapping(S,A);const T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function u(S){const b=f();S.__bindingPointIndex=b;const v=n.createBuffer(),A=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,v),v}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=s[S.id],v=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,E=v.length;T<E;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,y=I.length;x<y;x++){const D=I[x];if(m(D,T,x,A)===!0){const U=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let j=0;j<k.length;j++){const q=k[j],Z=_(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,U+X,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,b,v,A){const T=S.value,E=b+"_"+v;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{const I=A[E];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[E]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(S){const b=S.uniforms;let v=0;const A=16;for(let E=0,I=b.length;E<I;E++){const x=Array.isArray(b[E])?b[E]:[b[E]];for(let y=0,D=x.length;y<D;y++){const U=x[y],k=Array.isArray(U.value)?U.value:[U.value];for(let X=0,j=k.length;X<j;X++){const q=k[X],Z=_(q),N=v%A,W=N%Z.boundary,F=N+W;v+=W,F!==0&&A-F<Z.storage&&(v+=A-F),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Z.storage}}}const T=v%A;return T>0&&(v+=A-T),S.__size=v,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function p(S){const b=S.target;b.removeEventListener("dispose",p);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Js{constructor(e={}){const{canvas:t=r_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=vs,this.toneMappingExposure=1;const v=this;let A=!1,T=0,E=0,I=null,x=-1,y=null;const D=new It,U=new It;let k=null;const X=new gt(0);let j=0,q=t.width,Z=t.height,N=1,W=null,F=null;const Y=new It(0,0,q,Z),$=new It(0,0,q,Z);let le=!1;const te=new Wp;let he=!1,ge=!1;const ve=new Ut,Te=new Ut,Ie=new ee,ze=new It,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function B(){return I===null?N:1}let C=i;function de(R,K){return t.getContext(R,K)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Iu}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),C===null){const K="webgl2";if(C=de(K,R),C===null)throw de(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,ne,ce,_e,ue,w,M,L,V,Q,re,we,Se,Ae,We,O,H,ie,Ee,xe,Be,Ue,qe,G;function Re(){se=new SM(C),se.init(),Ue=new ab(C,se),ne=new gM(C,se,e,Ue),ce=new sb(C,se),ne.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),_e=new EM(C),ue=new GS,w=new ob(C,se,ce,ue,ne,Ue,_e),M=new _M(v),L=new MM(v),V=new L_(C),qe=new pM(C,V),Q=new bM(C,V,_e,qe),re=new AM(C,Q,V,_e),Ee=new TM(C,ne,w),O=new vM(ue),we=new VS(v,M,L,se,ne,qe,O),Se=new mb(v,ue),Ae=new XS,We=new ZS(se),ie=new dM(v,M,L,ce,re,m,l),H=new nb(v,re,ne),G=new gb(C,_e,ne,ce),xe=new mM(C,se,_e),Be=new wM(C,se,_e),_e.programs=we.programs,v.capabilities=ne,v.extensions=se,v.properties=ue,v.renderLists=Ae,v.shadowMap=H,v.state=ce,v.info=_e}Re();const fe=new db(v,C);this.xr=fe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(R){R!==void 0&&(N=R,this.setSize(q,Z,!1))},this.getSize=function(R){return R.set(q,Z)},this.setSize=function(R,K,oe=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,Z=K,t.width=Math.floor(R*N),t.height=Math.floor(K*N),oe===!0&&(t.style.width=R+"px",t.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(q*N,Z*N).floor()},this.setDrawingBufferSize=function(R,K,oe){q=R,Z=K,N=oe,t.width=Math.floor(R*oe),t.height=Math.floor(K*oe),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Y)},this.setViewport=function(R,K,oe,ae){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,K,oe,ae),ce.viewport(D.copy(Y).multiplyScalar(N).round())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,K,oe,ae){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,K,oe,ae),ce.scissor(U.copy($).multiplyScalar(N).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){ce.setScissorTest(le=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){F=R},this.getClearColor=function(R){return R.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(R=!0,K=!0,oe=!0){let ae=0;if(R){let J=!1;if(I!==null){const Pe=I.texture.format;J=Pe===ku||Pe===Bu||Pe===Ou}if(J){const Pe=I.texture.type,He=Pe===$i||Pe===Ys||Pe===Po||Pe===kr||Pe===Fu||Pe===Nu,Xe=ie.getClearColor(),Ye=ie.getClearAlpha(),tt=Xe.r,st=Xe.g,$e=Xe.b;He?(g[0]=tt,g[1]=st,g[2]=$e,g[3]=Ye,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=tt,_[1]=st,_[2]=$e,_[3]=Ye,C.clearBufferiv(C.COLOR,0,_))}else ae|=C.COLOR_BUFFER_BIT}K&&(ae|=C.DEPTH_BUFFER_BIT),oe&&(ae|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Ae.dispose(),We.dispose(),ue.dispose(),M.dispose(),L.dispose(),re.dispose(),qe.dispose(),G.dispose(),we.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",tr),fe.removeEventListener("sessionend",Si),Bn.stop()};function Me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=_e.autoReset,K=H.enabled,oe=H.autoUpdate,ae=H.needsUpdate,J=H.type;Re(),_e.autoReset=R,H.enabled=K,H.autoUpdate=oe,H.needsUpdate=ae,H.type=J}function Fe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Qe(R){const K=R.target;K.removeEventListener("dispose",Qe),_t(K)}function _t(R){Pt(R),ue.remove(R)}function Pt(R){const K=ue.get(R).programs;K!==void 0&&(K.forEach(function(oe){we.releaseProgram(oe)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,oe,ae,J,Pe){K===null&&(K=ye);const He=J.isMesh&&J.matrixWorld.determinant()<0,Xe=et(R,K,oe,ae,J);ce.setMaterial(ae,He);let Ye=oe.index,tt=1;if(ae.wireframe===!0){if(Ye=Q.getWireframeAttribute(oe),Ye===void 0)return;tt=2}const st=oe.drawRange,$e=oe.attributes.position;let ut=st.start*tt,bt=(st.start+st.count)*tt;Pe!==null&&(ut=Math.max(ut,Pe.start*tt),bt=Math.min(bt,(Pe.start+Pe.count)*tt)),Ye!==null?(ut=Math.max(ut,0),bt=Math.min(bt,Ye.count)):$e!=null&&(ut=Math.max(ut,0),bt=Math.min(bt,$e.count));const Et=bt-ut;if(Et<0||Et===1/0)return;qe.setup(J,ae,Xe,oe,Ye);let Sn,ht=xe;if(Ye!==null&&(Sn=V.get(Ye),ht=Be,ht.setIndex(Sn)),J.isMesh)ae.wireframe===!0?(ce.setLineWidth(ae.wireframeLinewidth*B()),ht.setMode(C.LINES)):ht.setMode(C.TRIANGLES);else if(J.isLine){let Ke=ae.linewidth;Ke===void 0&&(Ke=1),ce.setLineWidth(Ke*B()),J.isLineSegments?ht.setMode(C.LINES):J.isLineLoop?ht.setMode(C.LINE_LOOP):ht.setMode(C.LINE_STRIP)}else J.isPoints?ht.setMode(C.POINTS):J.isSprite&&ht.setMode(C.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ht.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ht.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ke=J._multiDrawStarts,bi=J._multiDrawCounts,dt=J._multiDrawCount,Yn=Ye?V.get(Ye).bytesPerElement:1,nr=ue.get(ae).currentProgram.getUniforms();for(let Dn=0;Dn<dt;Dn++)nr.setValue(C,"_gl_DrawID",Dn),ht.render(Ke[Dn]/Yn,bi[Dn])}else if(J.isInstancedMesh)ht.renderInstances(ut,Et,J.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,bi=Math.min(oe.instanceCount,Ke);ht.renderInstances(ut,Et,bi)}else ht.render(ut,Et)};function lt(R,K,oe){R.transparent===!0&&R.side===jn&&R.forceSinglePass===!1?(R.side=Rn,R.needsUpdate=!0,De(R,K,oe),R.side=Yi,R.needsUpdate=!0,De(R,K,oe),R.side=jn):De(R,K,oe)}this.compile=function(R,K,oe=null){oe===null&&(oe=R),h=We.get(oe),h.init(K),b.push(h),oe.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),R!==oe&&R.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),h.setupLights();const ae=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let He=0;He<Pe.length;He++){const Xe=Pe[He];lt(Xe,oe,J),ae.add(Xe)}else lt(Pe,oe,J),ae.add(Pe)}),b.pop(),h=null,ae},this.compileAsync=function(R,K,oe=null){const ae=this.compile(R,K,oe);return new Promise(J=>{function Pe(){if(ae.forEach(function(He){ue.get(He).currentProgram.isReady()&&ae.delete(He)}),ae.size===0){J(R);return}setTimeout(Pe,10)}se.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let nn=null;function At(R){nn&&nn(R)}function tr(){Bn.stop()}function Si(){Bn.start()}const Bn=new Xp;Bn.setAnimationLoop(At),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(R){nn=R,fe.setAnimationLoop(R),R===null?Bn.stop():Bn.start()},fe.addEventListener("sessionstart",tr),fe.addEventListener("sessionend",Si),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(K),K=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,K,I),h=We.get(R,b.length),h.init(K),b.push(h),Te.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),te.setFromProjectionMatrix(Te),ge=this.localClippingEnabled,he=O.init(this.clippingPlanes,ge),p=Ae.get(R,S.length),p.init(),S.push(p),fe.enabled===!0&&fe.isPresenting===!0){const Pe=v.xr.getDepthSensingMesh();Pe!==null&&Ji(Pe,K,-1/0,v.sortObjects)}Ji(R,K,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(W,F),P=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,P&&ie.addToRenderList(p,R),this.info.render.frame++,he===!0&&O.beginShadows();const oe=h.state.shadowsArray;H.render(oe,R,K),he===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=p.opaque,J=p.transmissive;if(h.setupLights(),K.isArrayCamera){const Pe=K.cameras;if(J.length>0)for(let He=0,Xe=Pe.length;He<Xe;He++){const Ye=Pe[He];pe(ae,J,R,Ye)}P&&ie.render(R);for(let He=0,Xe=Pe.length;He<Xe;He++){const Ye=Pe[He];z(p,R,Ye,Ye.viewport)}}else J.length>0&&pe(ae,J,R,K),P&&ie.render(R),z(p,R,K);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(v,R,K),qe.resetDefaultState(),x=-1,y=null,b.pop(),b.length>0?(h=b[b.length-1],he===!0&&O.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Ji(R,K,oe,ae){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){ae&&ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Te);const He=re.update(R),Xe=R.material;Xe.visible&&p.push(R,He,Xe,oe,ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const He=re.update(R),Xe=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ze.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ze.copy(He.boundingSphere.center)),ze.applyMatrix4(R.matrixWorld).applyMatrix4(Te)),Array.isArray(Xe)){const Ye=He.groups;for(let tt=0,st=Ye.length;tt<st;tt++){const $e=Ye[tt],ut=Xe[$e.materialIndex];ut&&ut.visible&&p.push(R,He,ut,oe,ze.z,$e)}}else Xe.visible&&p.push(R,He,Xe,oe,ze.z,null)}}const Pe=R.children;for(let He=0,Xe=Pe.length;He<Xe;He++)Ji(Pe[He],K,oe,ae)}function z(R,K,oe,ae){const J=R.opaque,Pe=R.transmissive,He=R.transparent;h.setupLightsView(oe),he===!0&&O.setGlobalState(v.clippingPlanes,oe),ae&&ce.viewport(D.copy(ae)),J.length>0&&me(J,K,oe),Pe.length>0&&me(Pe,K,oe),He.length>0&&me(He,K,oe),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function pe(R,K,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ae.id]===void 0&&(h.state.transmissionRenderTarget[ae.id]=new $s(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?No:$i,minFilter:ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const Pe=h.state.transmissionRenderTarget[ae.id],He=ae.viewport||D;Pe.setSize(He.z,He.w);const Xe=v.getRenderTarget();v.setRenderTarget(Pe),v.getClearColor(X),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),P&&ie.render(oe);const Ye=v.toneMapping;v.toneMapping=vs;const tt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),h.setupLightsView(ae),he===!0&&O.setGlobalState(v.clippingPlanes,ae),me(R,oe,ae),w.updateMultisampleRenderTarget(Pe),w.updateRenderTargetMipmap(Pe),se.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let $e=0,ut=K.length;$e<ut;$e++){const bt=K[$e],Et=bt.object,Sn=bt.geometry,ht=bt.material,Ke=bt.group;if(ht.side===jn&&Et.layers.test(ae.layers)){const bi=ht.side;ht.side=Rn,ht.needsUpdate=!0,Ce(Et,oe,ae,Sn,ht,Ke),ht.side=bi,ht.needsUpdate=!0,st=!0}}st===!0&&(w.updateMultisampleRenderTarget(Pe),w.updateRenderTargetMipmap(Pe))}v.setRenderTarget(Xe),v.setClearColor(X,j),tt!==void 0&&(ae.viewport=tt),v.toneMapping=Ye}function me(R,K,oe){const ae=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Pe=R.length;J<Pe;J++){const He=R[J],Xe=He.object,Ye=He.geometry,tt=ae===null?He.material:ae,st=He.group;Xe.layers.test(oe.layers)&&Ce(Xe,K,oe,Ye,tt,st)}}function Ce(R,K,oe,ae,J,Pe){R.onBeforeRender(v,K,oe,ae,J,Pe),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(v,K,oe,ae,R,Pe),J.transparent===!0&&J.side===jn&&J.forceSinglePass===!1?(J.side=Rn,J.needsUpdate=!0,v.renderBufferDirect(oe,K,ae,J,R,Pe),J.side=Yi,J.needsUpdate=!0,v.renderBufferDirect(oe,K,ae,J,R,Pe),J.side=jn):v.renderBufferDirect(oe,K,ae,J,R,Pe),R.onAfterRender(v,K,oe,ae,J,Pe)}function De(R,K,oe){K.isScene!==!0&&(K=ye);const ae=ue.get(R),J=h.state.lights,Pe=h.state.shadowsArray,He=J.state.version,Xe=we.getParameters(R,J.state,Pe,K,oe),Ye=we.getProgramCacheKey(Xe);let tt=ae.programs;ae.environment=R.isMeshStandardMaterial?K.environment:null,ae.fog=K.fog,ae.envMap=(R.isMeshStandardMaterial?L:M).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",Qe),tt=new Map,ae.programs=tt);let st=tt.get(Ye);if(st!==void 0){if(ae.currentProgram===st&&ae.lightsStateVersion===He)return Ge(R,Xe),st}else Xe.uniforms=we.getUniforms(R),R.onBeforeCompile(Xe,v),st=we.acquireProgram(Xe,Ye),tt.set(Ye,st),ae.uniforms=Xe.uniforms;const $e=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=O.uniform),Ge(R,Xe),ae.needsLights=Xt(R),ae.lightsStateVersion=He,ae.needsLights&&($e.ambientLightColor.value=J.state.ambient,$e.lightProbe.value=J.state.probe,$e.directionalLights.value=J.state.directional,$e.directionalLightShadows.value=J.state.directionalShadow,$e.spotLights.value=J.state.spot,$e.spotLightShadows.value=J.state.spotShadow,$e.rectAreaLights.value=J.state.rectArea,$e.ltc_1.value=J.state.rectAreaLTC1,$e.ltc_2.value=J.state.rectAreaLTC2,$e.pointLights.value=J.state.point,$e.pointLightShadows.value=J.state.pointShadow,$e.hemisphereLights.value=J.state.hemi,$e.directionalShadowMap.value=J.state.directionalShadowMap,$e.directionalShadowMatrix.value=J.state.directionalShadowMatrix,$e.spotShadowMap.value=J.state.spotShadowMap,$e.spotLightMatrix.value=J.state.spotLightMatrix,$e.spotLightMap.value=J.state.spotLightMap,$e.pointShadowMap.value=J.state.pointShadowMap,$e.pointShadowMatrix.value=J.state.pointShadowMatrix),ae.currentProgram=st,ae.uniformsList=null,st}function Ve(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Ra.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Ge(R,K){const oe=ue.get(R);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function et(R,K,oe,ae,J){K.isScene!==!0&&(K=ye),w.resetTextureUnits();const Pe=K.fog,He=ae.isMeshStandardMaterial?K.environment:null,Xe=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yr,Ye=(ae.isMeshStandardMaterial?L:M).get(ae.envMap||He),tt=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,st=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),$e=!!oe.morphAttributes.position,ut=!!oe.morphAttributes.normal,bt=!!oe.morphAttributes.color;let Et=vs;ae.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Et=v.toneMapping);const Sn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ht=Sn!==void 0?Sn.length:0,Ke=ue.get(ae),bi=h.state.lights;if(he===!0&&(ge===!0||R!==y)){const kn=R===y&&ae.id===x;O.setState(ae,R,kn)}let dt=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==bi.state.version||Ke.outputColorSpace!==Xe||J.isBatchedMesh&&Ke.batching===!1||!J.isBatchedMesh&&Ke.batching===!0||J.isBatchedMesh&&Ke.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ke.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ke.instancing===!1||!J.isInstancedMesh&&Ke.instancing===!0||J.isSkinnedMesh&&Ke.skinning===!1||!J.isSkinnedMesh&&Ke.skinning===!0||J.isInstancedMesh&&Ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ke.instancingMorph===!1&&J.morphTexture!==null||Ke.envMap!==Ye||ae.fog===!0&&Ke.fog!==Pe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==O.numPlanes||Ke.numIntersection!==O.numIntersection)||Ke.vertexAlphas!==tt||Ke.vertexTangents!==st||Ke.morphTargets!==$e||Ke.morphNormals!==ut||Ke.morphColors!==bt||Ke.toneMapping!==Et||Ke.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Ke.__version=ae.version);let Yn=Ke.currentProgram;dt===!0&&(Yn=De(ae,K,J));let nr=!1,Dn=!1,Kr=!1;const Tt=Yn.getUniforms(),ci=Ke.uniforms;if(ce.useProgram(Yn.program)&&(nr=!0,Dn=!0,Kr=!0),ae.id!==x&&(x=ae.id,Dn=!0),nr||y!==R){ce.buffers.depth.getReversed()?(ve.copy(R.projectionMatrix),a_(ve),l_(ve),Tt.setValue(C,"projectionMatrix",ve)):Tt.setValue(C,"projectionMatrix",R.projectionMatrix),Tt.setValue(C,"viewMatrix",R.matrixWorldInverse);const Qi=Tt.map.cameraPosition;Qi!==void 0&&Qi.setValue(C,Ie.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Dn=!0,Kr=!0)}if(J.isSkinnedMesh){Tt.setOptional(C,J,"bindMatrix"),Tt.setOptional(C,J,"bindMatrixInverse");const kn=J.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),Tt.setValue(C,"boneTexture",kn.boneTexture,w))}J.isBatchedMesh&&(Tt.setOptional(C,J,"batchingTexture"),Tt.setValue(C,"batchingTexture",J._matricesTexture,w),Tt.setOptional(C,J,"batchingIdTexture"),Tt.setValue(C,"batchingIdTexture",J._indirectTexture,w),Tt.setOptional(C,J,"batchingColorTexture"),J._colorsTexture!==null&&Tt.setValue(C,"batchingColorTexture",J._colorsTexture,w));const jr=oe.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&Ee.update(J,oe,Yn),(Dn||Ke.receiveShadow!==J.receiveShadow)&&(Ke.receiveShadow=J.receiveShadow,Tt.setValue(C,"receiveShadow",J.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(ci.envMap.value=Ye,ci.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&K.environment!==null&&(ci.envMapIntensity.value=K.environmentIntensity),Dn&&(Tt.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&Jt(ci,Kr),Pe&&ae.fog===!0&&Se.refreshFogUniforms(ci,Pe),Se.refreshMaterialUniforms(ci,ae,N,Z,h.state.transmissionRenderTarget[R.id]),Ra.upload(C,Ve(Ke),ci,w)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ra.upload(C,Ve(Ke),ci,w),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Tt.setValue(C,"center",J.center),Tt.setValue(C,"modelViewMatrix",J.modelViewMatrix),Tt.setValue(C,"normalMatrix",J.normalMatrix),Tt.setValue(C,"modelMatrix",J.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const kn=ae.uniformsGroups;for(let Qi=0,es=kn.length;Qi<es;Qi++){const Qu=kn[Qi];G.update(Qu,Yn),G.bind(Qu,Yn)}}return Yn}function Jt(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Xt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,K,oe){ue.get(R.texture).__webglTexture=K,ue.get(R.depthTexture).__webglTexture=oe;const ae=ue.get(R);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=oe===void 0,ae.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){const oe=ue.get(R);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,oe=0){I=R,T=K,E=oe;let ae=!0,J=null,Pe=!1,He=!1;if(R){const Ye=ue.get(R);if(Ye.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(C.FRAMEBUFFER,null),ae=!1;else if(Ye.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Ye.__hasExternalTextures)w.rebindTextures(R,ue.get(R.texture).__webglTexture,ue.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Ye.__boundDepthTexture!==$e){if($e!==null&&ue.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(He=!0);const st=ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[K])?J=st[K][oe]:J=st[K],Pe=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?J=ue.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?J=st[oe]:J=st,D.copy(R.viewport),U.copy(R.scissor),k=R.scissorTest}else D.copy(Y).multiplyScalar(N).floor(),U.copy($).multiplyScalar(N).floor(),k=le;if(ce.bindFramebuffer(C.FRAMEBUFFER,J)&&ae&&ce.drawBuffers(R,J),ce.viewport(D),ce.scissor(U),ce.setScissorTest(k),Pe){const Ye=ue.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ye.__webglTexture,oe)}else if(He){const Ye=ue.get(R.texture),tt=K||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ye.__webglTexture,oe||0,tt)}x=-1},this.readRenderTargetPixels=function(R,K,oe,ae,J,Pe,He){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe){ce.bindFramebuffer(C.FRAMEBUFFER,Xe);try{const Ye=R.texture,tt=Ye.format,st=Ye.type;if(!ne.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ae&&oe>=0&&oe<=R.height-J&&C.readPixels(K,oe,ae,J,Ue.convert(tt),Ue.convert(st),Pe)}finally{const Ye=I!==null?ue.get(I).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,K,oe,ae,J,Pe,He){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe){const Ye=R.texture,tt=Ye.format,st=Ye.type;if(!ne.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-ae&&oe>=0&&oe<=R.height-J){ce.bindFramebuffer(C.FRAMEBUFFER,Xe);const $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,Pe.byteLength,C.STREAM_READ),C.readPixels(K,oe,ae,J,Ue.convert(tt),Ue.convert(st),0);const ut=I!==null?ue.get(I).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,ut);const bt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await o_(C,bt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Pe),C.deleteBuffer($e),C.deleteSync(bt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,oe=0){R.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);const ae=Math.pow(2,-oe),J=Math.floor(R.image.width*ae),Pe=Math.floor(R.image.height*ae),He=K!==null?K.x:0,Xe=K!==null?K.y:0;w.setTexture2D(R,0),C.copyTexSubImage2D(C.TEXTURE_2D,oe,0,0,He,Xe,J,Pe),ce.unbindTexture()},this.copyTextureToTexture=function(R,K,oe=null,ae=null,J=0){R.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,R=arguments[1],K=arguments[2],J=arguments[3]||0,oe=null);let Pe,He,Xe,Ye,tt,st,$e,ut,bt;const Et=R.isCompressedTexture?R.mipmaps[J]:R.image;oe!==null?(Pe=oe.max.x-oe.min.x,He=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,Ye=oe.min.x,tt=oe.min.y,st=oe.isBox3?oe.min.z:0):(Pe=Et.width,He=Et.height,Xe=Et.depth||1,Ye=0,tt=0,st=0),ae!==null?($e=ae.x,ut=ae.y,bt=ae.z):($e=0,ut=0,bt=0);const Sn=Ue.convert(K.format),ht=Ue.convert(K.type);let Ke;K.isData3DTexture?(w.setTexture3D(K,0),Ke=C.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(w.setTexture2DArray(K,0),Ke=C.TEXTURE_2D_ARRAY):(w.setTexture2D(K,0),Ke=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,K.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,K.unpackAlignment);const bi=C.getParameter(C.UNPACK_ROW_LENGTH),dt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Yn=C.getParameter(C.UNPACK_SKIP_PIXELS),nr=C.getParameter(C.UNPACK_SKIP_ROWS),Dn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Et.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Et.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,tt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,st);const Kr=R.isDataArrayTexture||R.isData3DTexture,Tt=K.isDataArrayTexture||K.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const ci=ue.get(R),jr=ue.get(K),kn=ue.get(ci.__renderTarget),Qi=ue.get(jr.__renderTarget);ce.bindFramebuffer(C.READ_FRAMEBUFFER,kn.__webglFramebuffer),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let es=0;es<Xe;es++)Kr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ue.get(R).__webglTexture,J,st+es),R.isDepthTexture?(Tt&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ue.get(K).__webglTexture,J,bt+es),C.blitFramebuffer(Ye,tt,Pe,He,$e,ut,Pe,He,C.DEPTH_BUFFER_BIT,C.NEAREST)):Tt?C.copyTexSubImage3D(Ke,J,$e,ut,bt+es,Ye,tt,Pe,He):C.copyTexSubImage2D(Ke,J,$e,ut,bt+es,Ye,tt,Pe,He);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Tt?R.isDataTexture||R.isData3DTexture?C.texSubImage3D(Ke,J,$e,ut,bt,Pe,He,Xe,Sn,ht,Et.data):K.isCompressedArrayTexture?C.compressedTexSubImage3D(Ke,J,$e,ut,bt,Pe,He,Xe,Sn,Et.data):C.texSubImage3D(Ke,J,$e,ut,bt,Pe,He,Xe,Sn,ht,Et):R.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,J,$e,ut,Pe,He,Sn,ht,Et.data):R.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,J,$e,ut,Et.width,Et.height,Sn,Et.data):C.texSubImage2D(C.TEXTURE_2D,J,$e,ut,Pe,He,Sn,ht,Et);C.pixelStorei(C.UNPACK_ROW_LENGTH,bi),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Yn),C.pixelStorei(C.UNPACK_SKIP_ROWS,nr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Dn),J===0&&K.generateMipmaps&&C.generateMipmap(Ke),ce.unbindTexture()},this.copyTextureToTexture3D=function(R,K,oe=null,ae=null,J=0){return R.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ae=arguments[1]||null,R=arguments[2],K=arguments[3],J=arguments[4]||0),lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,oe,ae,J)},this.initRenderTarget=function(R){ue.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),ce.unbindTexture()},this.resetState=function(){T=0,E=0,I=null,ce.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class Qs extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _s extends Mn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const zh=new Ut;class vb{constructor(e,t,i=0,s=1/0){this.ray=new Vu(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(e,t=!0,i=[]){return uu(e,this,i,t),i.sort(Hh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)uu(e[s],this,i,t);return i.sort(Hh),i}}function Hh(n,e){return n.distance-e.distance}function uu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)uu(r[o],e,t,!0)}}class Vh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(cn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _b extends Ks{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);const Vr={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},$t=30,fu=12,xb=10,Pa=14,Zp=5;function Va(){return`${fu}px system-ui, -apple-system, sans-serif`}function Jp(n,e,t){const i=String(e??"");if(!i)return[""];const s=i.split(/\s+/).filter(Boolean);if(s.length===0)return[""];const r=[];let o="";for(const a of s){const l=o?o+" "+a:a;!o||n.measureText(l).width<=t?o=l:(r.push(o),o=a)}return o&&r.push(o),r.length?r:[""]}function yb(n,e){return Math.max(e,n*Pa+Zp*2)}function Xu(n,e){const t=new Array(e+1);t[0]=0;for(let i=0;i<e;i++)t[i+1]=t[i]+(n[i]??0);return t}function Ga(n,e){if(e<=0)return 0;let t=0,i=n.length-1;for(;t<i;){const s=t+i+1>>1;n[s]<=e?t=s:i=s-1}return t}const Qp=28;function Mb(n,e){if(typeof e=="function")return e(n);const t=n.filter(s=>s!=null&&s!=="");if(e==="count")return t.length;const i=t.map(s=>Number(s)).filter(s=>!Number.isNaN(s));if(i.length===0)return null;switch(e){case"sum":return i.reduce((s,r)=>s+r,0);case"avg":return i.reduce((s,r)=>s+r,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Sb(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=Vr[e.theme]??Vr.none,{cols:a,rows:l,pinnedRows:c,rowHeight:u,scrollY:f,scrollX:d,glow:m}=e;t.clearRect(0,0,s,r),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const g=c.length*u,_=e.aggregateRow?Qp:0,p=r-$t-g-_;t.fillStyle=o.headerBg,t.fillRect(0,0,s,$t),t.textBaseline="middle",t.textAlign="left";let h=-d;for(let F=0;F<a.length;F++){const Y=a[F];if(h+Y.width<=0){h+=Y.width;continue}if(h>=s)break;const $=!!e.colFilters[Y.colId],le=e.sorts.findIndex(ge=>ge.colId===Y.colId),te=le>=0,he=(Y.colDef.headerName??Y.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(h,0,Y.width,$t),t.clip(),t.font=`bold ${xb}px system-ui, -apple-system, sans-serif`,t.fillStyle=$?o.accent:o.textHeader,m?(t.shadowColor=o.textHeader,t.shadowBlur=10,t.fillText(he,h+8,$t/2),t.shadowBlur=4,t.fillText(he,h+8,$t/2),t.shadowBlur=0):t.fillText(he,h+8,$t/2),te){const ge=t.measureText(he).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=o.accent;const ve=e.sorts[le].dir==="asc"?"▲":"▼";t.fillText(e.sorts.length>1?`${ve}${le+1}`:ve,h+8+ge+4,$t/2)}Y.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=$?o.accent:o.textHeader,t.globalAlpha=$?1:.38,t.fillText("⌕",h+Y.width-20,$t/2),t.globalAlpha=1),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(h+Y.width-.5,0),t.lineTo(h+Y.width-.5,$t),t.stroke(),h+=Y.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,$t-.5),t.lineTo(s,$t-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,$t,s,p),t.clip();const S=e.rowHeights&&e.rowHeights.length===l.length?e.rowHeights:null,b=S?Xu(S,l.length):null,v=F=>b?b[F]:F*u,A=F=>S?S[F]:u,T=b?Ga(b,f):Math.max(0,Math.floor(f/u));let E;if(b)for(E=T;E<l.length&&v(E)<f+p;)E++;else E=Math.min(l.length,Math.ceil((f+p)/u));const I=e.selectionAnchorRow??e.selectedRow,x=e.selectionAnchorCol??e.selectedCol,y=e.selectedRow>=0&&I>=0?Math.min(e.selectedRow,I):-1,D=e.selectedRow>=0&&I>=0?Math.max(e.selectedRow,I):-1,U=e.selectedCol>=0&&x>=0?Math.min(e.selectedCol,x):-1,k=e.selectedCol>=0&&x>=0?Math.max(e.selectedCol,x):-1,X=D>y||k>U;let j=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY;const W=(F,Y,$,le)=>{m?(t.shadowColor=le,t.shadowBlur=12,t.fillText(F,Y,$),t.shadowBlur=6,t.fillText(F,Y,$),t.shadowBlur=2,t.fillText(F,Y,$),t.shadowBlur=0):t.fillText(F,Y,$)};for(let F=T;F<E;F++){const Y=l[F],$=A(F),le=$t+v(F)-f;F%2===1&&(t.fillStyle=o.rowAlt,t.fillRect(0,le,s,$));const te=F>=y&&F<=D;F===e.hoveredRow&&!te&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,le,s,$)),te&&!X&&(t.fillStyle=Jl(o.accent,.1),t.fillRect(0,le,s,$)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,le+$-.5),t.lineTo(s,le+$-.5),t.stroke();let he=-d;for(let ge=0;ge<a.length;ge++){const ve=a[ge];if(he+ve.width<=0){he+=ve.width;continue}if(he>=s)break;const Te=te&&ge>=U&&ge<=k;Te&&X&&(t.fillStyle=Jl(o.accent,.14),t.fillRect(he,le,ve.width,$)),Te&&(he<j&&(j=he),he+ve.width>q&&(q=he+ve.width),le<Z&&(Z=le),le+$>N&&(N=le+$));const Ie=e.getCellStyle(ve,Y),ze=Ie.color??o.text,ye=Ie.textAlign??"left",P=e.formatCell(ve,Y);if(t.save(),t.beginPath(),t.rect(he+1,le,ve.width-2,$),t.clip(),t.font=Va(),t.fillStyle=ze,t.textBaseline="middle",ve.colDef.wrap){t.textAlign="left";const B=Jp(t,P,Math.max(20,ve.width-16));let C=le+Zp+Pa/2;for(const de of B){if(C-Pa/2>=le+$)break;W(de,he+8,C,ze),C+=Pa}}else{const B=ye==="right"?he+ve.width-8:he+8;t.textAlign=ye==="right"?"right":"left",W(P,B,le+$/2,ze)}t.restore(),F===e.selectedRow&&ge===e.selectedCol&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(he+1.5,le+1.5,ve.width-3,$-3)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(he+ve.width-.5,le),t.lineTo(he+ve.width-.5,le+$),t.stroke(),he+=ve.width}}if(X&&j<q&&Z<N&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(j+.5,Z+.5,q-j-1,N-Z-1)),t.restore(),c.length>0){const F=r-g-_;t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,F-.5),t.lineTo(s,F-.5),t.stroke();for(let Y=0;Y<c.length;Y++){const $=c[Y],le=F+Y*u;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,le,s,u);let te=-d;for(let he=0;he<a.length;he++){const ge=a[he];if(te+ge.width<=0){te+=ge.width;continue}if(te>=s)break;const ve=e.getCellStyle(ge,$),Te=ve.color??o.text,Ie=ve.textAlign??"left",ze=e.formatCell(ge,$);t.save(),t.beginPath(),t.rect(te+1,le,ge.width-2,u),t.clip(),t.font=`bold ${fu}px system-ui, -apple-system, sans-serif`,t.fillStyle=Te,t.textBaseline="middle",Ie==="right"?(t.textAlign="right",t.fillText(ze,te+ge.width-8,le+u/2)):(t.textAlign="left",t.fillText(ze,te+8,le+u/2)),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(te+ge.width-.5,le),t.lineTo(te+ge.width-.5,le+u),t.stroke(),te+=ge.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,le+u-.5),t.lineTo(s,le+u-.5),t.stroke()}}if(e.aggregateRow){const F=r-_;t.fillStyle=Jl(o.accent,.1),t.fillRect(0,F,s,_),t.strokeStyle=o.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,F-.5),t.lineTo(s,F-.5),t.stroke();let Y=-d;for(let $=0;$<a.length;$++){const le=a[$];if(Y+le.width<=0){Y+=le.width;continue}if(Y>=s)break;const he=e.getCellStyle(le,e.aggregateRow).textAlign??"left",ge=e.aggregateRow[le.colId]??"";t.save(),t.beginPath(),t.rect(Y+1,F,le.width-2,_),t.clip(),t.font=`bold ${fu}px system-ui, -apple-system, sans-serif`,t.fillStyle=o.accent,t.textBaseline="middle",m&&(t.shadowColor=o.accent,t.shadowBlur=8),he==="right"?(t.textAlign="right",t.fillText(ge,Y+le.width-8,F+_/2)):(t.textAlign="left",t.fillText(ge,Y+8,F+_/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.beginPath(),t.moveTo(Y+le.width-.5,F),t.lineTo(Y+le.width-.5,F+_),t.stroke(),Y+=le.width}}t.restore()}function Jl(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${s},${e})`}const ua=190,Ql=34;function bb(n,e,t){const i=Math.max(4,Math.min(e,n-ua-4)),s=$t+6,r=t?26:0;return{box:{x:i,y:s,w:ua,h:Ql},input:{x:i+9,y:s+5,w:ua-18-r,h:Ql-10},clear:t?{x:i+ua-28,y:s,w:28,h:Ql}:null}}const ec=(n,e,t,i=0)=>n>=t.x-i&&n<=t.x+t.w+i&&e>=t.y&&e<=t.y+t.h;function fa(n,e,t,i=1){return t.clear&&ec(n,e,t.clear,4*(i-1))?"clear":ec(n,e,t.input)?"input":ec(n,e,t.box)?"inside":"outside"}function wb(n,e,t,i,s){const{box:r,input:o,clear:a}=e;n.save(),n.fillStyle="rgba(8,12,22,0.94)",n.strokeStyle=s.accent,n.lineWidth=1,n.beginPath(),n.roundRect(r.x+.5,r.y+.5,r.w-1,r.h-1,4),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.05)",n.beginPath(),n.roundRect(o.x,o.y,o.w,o.h,3),n.fill(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.font=Va(),n.textBaseline="middle";const l=o.y+o.h/2+1,c=5;if(t){n.fillStyle=s.text;const u=n.measureText(t).width,f=u>o.w-2*c-2?o.x+o.w-c-2-u:o.x+c;n.fillText(t,f,l),i&&(n.fillStyle=s.accent,n.fillRect(Math.min(f+u+1,o.x+o.w-c),o.y+4,1.5,o.h-8))}else n.fillStyle=s.textHeader,n.fillText("Filter…",o.x+c,l),i&&(n.fillStyle=s.accent,n.fillRect(o.x+c,o.y+4,1.5,o.h-8));n.restore(),a&&(n.save(),n.font=Va(),n.textBaseline="middle",n.textAlign="center",n.fillStyle=s.textHeader,n.fillText("✕",a.x+a.w/2,a.y+a.h/2+1),n.restore())}function Eb(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r;if(t<0){const c=.5*r,f=1/(1-2*(.5*(1+c)*c)),d=(i+i*(1+o)*o*-1)*f,m=(s+s*(1+o)*o*-1)*f;return[.5+d,.5+m]}const a=i*(1+o)*o,l=s*(1+o)*o;return[n+a,e+l]}function em(n,e,t,i,s,r=t,o=i){const a=n/t,l=1-e/i,[c,u]=Eb(a,l,s);return c<0||c>1||u<0||u>1?[-1,-1]:[c*r,(1-u)*o]}function tc(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function Tb(n,e,t,i=1){return n>=e+t-24*i&&n<e+t}function Gh(n,e,t,i=1){const s=e+t;return n>=s-6*i&&n<=s+1*i}function Ab(n,e,t,i,s,r,o,a,l,c=!1,u){const f=n+l;let d=-1,m=0;for(let S=0;S<t.length;S++){if(f>=m&&f<m+t[S].width){d=S;break}m+=t[S].width}if(e<$t)return{area:"header",colIdx:d,rowIdx:-1};const g=c?Qp:0;if(g>0&&e>=o-g)return{area:"agg",colIdx:d,rowIdx:-1};const _=a*s;if(_>0&&e>=o-_-g){const S=Math.floor((e-(o-_-g))/s);return{area:"pinned",colIdx:d,rowIdx:S}}const p=e-$t+r,h=u&&u.length===i?Ga(Xu(u,i),p):Math.floor(p/s);return h>=0&&h<i?{area:"body",colIdx:d,rowIdx:h}:{area:"none",colIdx:-1,rowIdx:-1}}function qs(n){return n/45*.55}function tm(n){const e=Math.abs(qs(n));if(e===0)return 1;if(n<0){const i=.5*e;return 1/(1-2*(.5*(1+i)*i))}const t=.25*e;return 1+2*(.5*(1+t)*t)}const Cb=500,nm=Cb/2,hu=1.6,im=`
  uniform vec2  uMouseUV;    // mouse position in UV space; (-999,-999) = lens off
  uniform float uLensR;      // lens radius in aspect-corrected units (0 = disabled)
  uniform float uLensZoom;   // lens magnification factor (~1.6)
  uniform vec3  uLensTint;   // ring tint (phosphor accent)
  uniform float uAspect;     // canvas W / H — needed to draw a circular lens
`,sm=`
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
`,rm=`
    // Lens ring — visually masks the magnification seam at the rim.
    if (uLensR > 0.0) {
      vec2  rd       = (vUv - uMouseUV) * vec2(uAspect, 1.0);
      float ringDist = abs(length(rd) - uLensR);
      float ring     = 1.0 - smoothstep(0.002, 0.012, ringDist);
      color.rgb     += uLensTint * ring * 0.32;
    }
`;function om(){return{uMouseUV:{value:new at(-999,-999)},uLensR:{value:0},uLensZoom:{value:hu},uLensTint:{value:new gt(7268263)},uAspect:{value:1}}}const jt={x:-999,y:-999};function am(n,e,t,i,s){const r=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=r&&s>0?nm/s:0,n.uniforms.uAspect.value=s>0?i/s:1}function ko(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const Rb=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Pb=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Db=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${im}

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

  ${sm}

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
    ${rm}
    gl_FragColor = color;
  }
`;function Lb(n,e,t){const i=n-.5,s=e-.5,r=Math.abs(t),o=(i*i+s*s)*r,a=(1+o)*o*Math.sign(t);let l=i+i*a,c=s+s*a;if(t<0){const u=.5*r,f=.5*(1+u)*u;l/=1-2*f,c/=1-2*f}return{x:.5+l,y:.5+c}}function Ib(n,e,t,i,s,r){if(!i||t.x===jt.x||r<=0)return{x:n,y:e};const o=s/r,a=nm/r,l=(n-t.x)*o,c=e-t.y,u=Math.hypot(l,c);if(u>=a)return{x:n,y:e};const f=u/a,d=Math.min(Math.max((f-.88)/(1-.88),0),1),m=d*d*(3-2*d),g=hu+(1-hu)*m;return{x:t.x+l/g/o,y:t.y+c/g}}class Zi{constructor(e){Oe(this,"canvas");Oe(this,"material");Oe(this,"mode");Oe(this,"dpr",1);Oe(this,"logicalW",0);Oe(this,"logicalH",0);Oe(this,"screenW",0);Oe(this,"screenH",0);Oe(this,"texture");Oe(this,"painter");Oe(this,"maxDpr");Oe(this,"look",{curvature:0,scanlines:!0,vignette:!0,magnify:!1});Oe(this,"mouse",{x:jt.x,y:jt.y});Oe(this,"anisotropy",1);this.painter=e.paint,this.mode=e.mode??"screen",this.maxDpr=e.maxDpr??2,this.canvas=document.createElement("canvas"),this.texture=this.makeTexture(),this.material=new Wn({uniforms:{uTex:{value:this.texture},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...om()},vertexShader:this.mode==="world"?Pb:Rb,fragmentShader:Db,transparent:!0,side:this.mode==="world"?jn:Yi})}setAnisotropy(e){this.anisotropy=Math.max(1,e),this.texture.anisotropy=this.anisotropy,this.texture.needsUpdate=!0}makeTexture(){const e=new _s(this.canvas);return e.magFilter=Zt,this.mode==="world"?(e.generateMipmaps=!0,e.minFilter=ps,e.anisotropy=this.anisotropy):e.minFilter=Zt,e}resize(e,t,i=window.devicePixelRatio||1){if(!e||!t)return!1;const s=Math.min(i,this.maxDpr),r=Math.round(e*s),o=Math.round(t*s);return this.canvas.width===r&&this.canvas.height===o&&this.dpr===s?!1:(this.dpr=s,this.logicalW=e,this.logicalH=t,this.canvas.width=r,this.canvas.height=o,this.texture.dispose(),this.texture=this.makeTexture(),this.material.uniforms.uTex.value=this.texture,!0)}setLook(e){this.look={...this.look,...e}}setScreenSize(e,t){this.screenW=e,this.screenH=t}setLens(e){this.mouse.x=e?e.x:jt.x,this.mouse.y=e?e.y:jt.y}syncUniforms(){const e=this.material.uniforms;e.uStrength.value=qs(this.look.curvature),e.uScanlines.value=this.look.scanlines?1:0,e.uVignette.value=this.look.vignette?1:0,am(this.material,this.look.magnify,this.mouse,this.screenW||this.logicalW||this.canvas.width,this.screenH||this.logicalH||this.canvas.height)}paint(e){this.canvas.width&&(this.painter(this.canvas,{dpr:this.dpr,glow:e}),this.texture.needsUpdate=!0)}paintOnly(e){this.canvas.width&&this.painter(this.canvas,{dpr:this.dpr,glow:e})}contentPoint(e,t){const i=Ib(e,t,this.mouse,this.look.magnify,this.screenW||this.logicalW,this.screenH||this.logicalH),s=Lb(i.x,i.y,qs(this.look.curvature));return s.x<0||s.x>1||s.y<0||s.y>1?null:{x:s.x*this.logicalW,y:(1-s.y)*this.logicalH}}dispose(){this.texture.dispose(),this.material.dispose()}}const Ub=600;function lm(n){const e=Qa(!0);return e.run(()=>Fb(n,e))}function Fb(n,e){var Bn,Ji;const{emit:t,host:i}=n,s=be(((Bn=n.rowData)==null?void 0:Bn.call(n))??[]),r=be(((Ji=n.pinnedBottomRowData)==null?void 0:Ji.call(n))??[]),o=be(""),a=be([]),l=Tr({}),c=Tr({}),u=Tr(new Set),f=be(0),d=be(0),m=be(0),g=be(0),_=be(0),p=be(0),h=be(0),S=be(-1),b=be(null),v=be(null),A=be(null),T=be(""),E=be(0);let I=null;const x=be(!0);let y=null;je(A,z=>{var pe;y&&(clearInterval(y),y=null),z?(x.value=!0,y=setInterval(()=>{x.value=!x.value,i.redraw()},530),dn(()=>{var me;return(me=i.focusFilterInput)==null?void 0:me.call(i)})):(I=null,(pe=i.blurFilterInput)==null||pe.call(i)),i.redraw()});function D(z){return z.colId??z.field??(z.headerName?z.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const U=nt(()=>{var pe;const z=((pe=n.defaultColDef)==null?void 0:pe.call(n))??{};return n.columnDefs().filter(me=>!u.has(D(me))).map(me=>{const Ce=D(me),De={...z,...me};return{colId:Ce,colDef:De,width:c[Ce]??De.width??100}})}),k=nt(()=>{const z=d.value;if(!z)return U.value;const pe=U.value.reduce((De,Ve)=>De+Ve.width,0);if(!pe||pe>=z)return U.value;const me=z/pe;let Ce=0;return U.value.map((De,Ve)=>{const et=Ve===U.value.length-1?z-Ce:Math.max(8,Math.round(De.width*me));return Ce+=et,{...De,width:et}})}),X=nt(()=>{const z=k.value.reduce((pe,me)=>pe+me.width,0);return Math.max(0,z-d.value)});function j(z,pe){if(pe.colDef.valueGetter)return pe.colDef.valueGetter({data:z,colDef:pe.colDef});if(pe.colDef.field)return z[pe.colDef.field]}function q(z,pe){const me=j(pe,z);return z.colDef.valueFormatter?z.colDef.valueFormatter({value:me,data:pe,colDef:z.colDef})??"":z.colDef.cellRenderer?(z.colDef.cellRenderer({value:me,data:pe,colDef:z.colDef})??"").replace(/<[^>]+>/g,""):me==null?"":String(me)}function Z(z,pe){return z.colDef.cellStyle?typeof z.colDef.cellStyle=="function"?z.colDef.cellStyle({value:j(pe,z),data:pe,colDef:z.colDef})??{}:z.colDef.cellStyle:{}}function N(){return n.columnDefs().map((z,pe)=>({d:z,i:pe})).filter(({d:z})=>z.sort).sort((z,pe)=>(z.d.sortIndex??z.i)-(pe.d.sortIndex??pe.i)).map(({d:z})=>({colId:D(z),dir:z.sort}))}const W=nt(()=>{f.value;let z=s.value;const pe=o.value.trim().toLowerCase();pe&&(z=z.filter(Ce=>U.value.some(De=>String(j(Ce,De)??"").toLowerCase().includes(pe))));for(const[Ce,De]of Object.entries(l)){if(!De)continue;const Ve=U.value.find(Ge=>Ge.colId===Ce);if(Ve)if(De.startsWith("__eq__")){const Ge=De.slice(6).toLowerCase();z=z.filter(et=>String(j(et,Ve)??"").toLowerCase()===Ge)}else{const Ge=De.toLowerCase();z=z.filter(et=>String(j(et,Ve)??"").toLowerCase().includes(Ge))}}const me=a.value.map(({colId:Ce,dir:De})=>({col:U.value.find(Ve=>Ve.colId===Ce),dir:De})).filter(Ce=>!!Ce.col);return me.length&&(z=[...z].sort((Ce,De)=>{for(const{col:Ve,dir:Ge}of me){const et=j(Ce,Ve),Jt=j(De,Ve);let Xt=0;if(Ve.colDef.comparator?Xt=Ve.colDef.comparator(et,Jt):typeof et=="number"&&typeof Jt=="number"?Xt=et-Jt:Xt=String(et??"").localeCompare(String(Jt??""),void 0,{numeric:!0}),Xt)return Ge==="asc"?Xt:-Xt}return 0})),z});let F=null;function Y(){if(typeof document>"u")return null;F||(F=document.createElement("canvas"));const z=F.getContext("2d");return z&&(z.font=Va()),z}const $=nt(()=>k.value.some(z=>z.colDef.wrap)),le=nt(()=>{if(!$.value)return null;const z=Y();if(!z)return null;const pe=k.value.filter(Ce=>Ce.colDef.wrap),me=n.rowHeight();return W.value.map(Ce=>{let De=1;for(const Ve of pe){const Ge=Jp(z,q(Ve,Ce),Math.max(20,Ve.width-16));Ge.length>De&&(De=Ge.length)}return yb(De,me)})}),te=nt(()=>le.value?Xu(le.value,W.value.length):null),he=nt(()=>te.value?te.value[W.value.length]:W.value.length*n.rowHeight()),ge=nt(()=>{const z=r.value.length*n.rowHeight();return Math.max(0,m.value-$t-z)}),ve=nt(()=>Math.max(0,he.value-ge.value)),Te=nt(()=>Math.max(1,Math.floor(ge.value/n.rowHeight()))),Ie=nt(()=>{const z=W.value.length;if(z===0)return 0;const pe=te.value?Ga(te.value,p.value):Math.floor(p.value/n.rowHeight());return Math.min(z-1,pe)}),ze=nt(()=>{const z=W.value.length;return z===0?0:te.value?Math.min(z-1,Ga(te.value,p.value+ge.value-1)):Math.min(z-1,Ie.value+Te.value-1)}),ye=nt(()=>{const z=U.value.filter(De=>De.colDef.aggFunc!=null);if(z.length===0)return null;const pe=W.value,me={};for(const De of z){const Ve=pe.map(et=>j(et,De)),Ge=Mb(Ve,De.colDef.aggFunc);if(Ge==null){me[De.colId]="";continue}me[De.colId]=De.colDef.aggValueFormatter?De.colDef.aggValueFormatter(Ge):String(Ge)}const Ce=z[0].colId;return me[Ce]===""&&(me[Ce]="Σ"),me});je(W,()=>{p.value=0,b.value=null}),je(X,()=>{h.value=Math.min(h.value,X.value)}),je(ve,()=>{p.value=Math.min(p.value,ve.value)}),je([W,()=>r.value,k,p,S,b],()=>dn(()=>i.redraw())),je(b,z=>{if(!z)return;const pe=W.value[z.row],me=k.value[z.col];pe&&me&&t("cell-selected",{data:pe,row:z.row,col:z.col,colId:me.colId})});function P(z,pe,me,Ce){g.value=me,_.value=Ce,d.value=z,m.value=pe,h.value=Math.max(0,Math.min(X.value,h.value)),p.value=Math.max(0,Math.min(ve.value,p.value))}function B(z){const pe=te.value,me=pe?pe[z]:z*n.rowHeight(),Ce=pe?pe[z+1]:me+n.rowHeight();me<p.value?p.value=me:Ce>p.value+ge.value&&(p.value=Math.min(ve.value,Ce-ge.value))}function C(z){var De;if(!d.value)return;let pe=0;for(let Ve=0;Ve<z;Ve++)pe+=k.value[Ve].width;const me=((De=k.value[z])==null?void 0:De.width)??0,Ce=pe-h.value;Ce<0?h.value=Math.max(0,pe):Ce+me>d.value&&(h.value=Math.min(X.value,pe+me-d.value))}function de(){p.value=Math.max(0,p.value-ge.value),i.redraw()}function se(){p.value=Math.min(ve.value,p.value+ge.value),i.redraw()}let ne=!1,ce="",_e=0,ue=0,w=1,M=!1,L=!1,V=0,Q=0,re=0,we=0,Se=!1;function Ae(z,pe,me=1){var Ce;ne=!0,ce=z,_e=pe,w=me,ue=((Ce=k.value.find(De=>De.colId===z))==null?void 0:Ce.width)??100,M=!1}function We(z,pe){L=!0,Se=!1,V=z,Q=pe,re=h.value,we=p.value}function O(z,pe){const me=V-z,Ce=Q-pe;(Math.abs(me)>4||Math.abs(Ce)>4)&&(Se=!0),h.value=Math.max(0,Math.min(X.value,re+me)),p.value=Math.max(0,Math.min(ve.value,we+Ce)),i.redraw()}function H(){L&&(Se&&(M=!0),L=!1)}function ie(z,pe){if(L){O(z,pe);return}if(!ne)return;const me=d.value,Ce=Math.max(30,ue+(z-_e)*w),De=U.value.filter(Ge=>Ge.colId!==ce).reduce((Ge,et)=>Ge+et.width,0),Ve=me-Ce;Ve>10&&(c[ce]=Math.max(10,Math.round(Ce*De/Ve))),i.redraw()}function Ee(){H(),ne&&(ne=!1,M=!0,t("column-resized"))}function xe(z,pe){return Ab(z,pe,k.value,W.value.length,n.rowHeight(),p.value,m.value,r.value.length,h.value,ye.value!==null,le.value??void 0)}let Be=0;function Ue(z,pe,me){A.value=null;const Ce=Date.now();if(z!==0){Be=Ce,h.value=Math.max(0,Math.min(X.value,h.value+z)),i.redraw();return}if(me&&pe!==0){Be=Ce,h.value=Math.max(0,Math.min(X.value,h.value+pe)),i.redraw();return}Ce-Be<Ub||(p.value=Math.max(0,Math.min(ve.value,p.value+pe)),i.redraw())}function qe(z){if(z.cx<0)return S.value=-1,i.redraw(),null;if(A.value&&I){const Ce=fa(z.cx,z.cy,I,z.hitScale);if(Ce!=="outside")return S.value=-1,i.redraw(),Ce==="clear"?"pointer":"text"}const pe=xe(z.cx,z.cy);S.value=pe.area==="body"?pe.rowIdx:-1;let me;if(pe.area==="header"&&pe.colIdx>=0){const Ce=k.value[pe.colIdx],De=tc(pe.colIdx,k.value),Ve=z.cx+h.value;me=Ce&&Gh(Ve,De,Ce.width,z.hitScale)?"col-resize":"pointer"}else pe.area==="body"?me="pointer":me="default";return i.redraw(),me}function G(){S.value=-1,i.redraw()}function Re(z,pe,me){if(z.cx<0||A.value&&I&&fa(z.cx,z.cy,I,z.hitScale)!=="outside")return;if(z.cy>=$t){We(pe,me);return}const Ce=z.cx+h.value;for(let De=0;De<k.value.length;De++){const Ve=k.value[De],Ge=tc(De,k.value);if(Ve.colDef.resizable!==!1&&Gh(Ce,Ge,Ve.width,z.hitScale)){Ae(Ve.colId,pe,z.hitScale);return}}}function fe(z,pe){var De,Ve,Ge;const me={stopPropagation:!1};if(M)return M=!1,me;if(ne)return me;if(z.cx<0)return A.value=null,me;if(A.value&&I){const et=fa(z.cx,z.cy,I,z.hitScale);if(et==="clear")return _t(),me;if(et!=="outside")return(De=i.focusFilterInput)==null||De.call(i),me;A.value=null}const Ce=xe(z.cx,z.cy);if(Ce.area==="header"&&Ce.colIdx>=0){const et=k.value[Ce.colIdx],Jt=tc(Ce.colIdx,k.value),Xt=z.cx+h.value;if(et.colDef.filter&&Tb(Xt,Jt,et.width,z.hitScale))me.stopPropagation=!0,A.value===et.colId?A.value=null:(A.value=et.colId,T.value=(Ve=l[et.colId])!=null&&Ve.startsWith("__eq__")?l[et.colId].slice(6):l[et.colId]??"",E.value=Math.max(0,Jt-h.value));else if(et.colDef.sortable!==!1){A.value=null;const R=a.value.find(oe=>oe.colId===et.colId),K=R?R.dir==="asc"?"desc":null:"asc";pe.shiftKey?a.value=R?K?a.value.map(oe=>oe.colId===et.colId?{colId:oe.colId,dir:K}:oe):a.value.filter(oe=>oe.colId!==et.colId):[...a.value,{colId:et.colId,dir:"asc"}]:a.value=K?[{colId:et.colId,dir:K}]:[],t("sort-changed")}return me}if(A.value=null,Ce.area==="body"&&Ce.rowIdx>=0&&Ce.colIdx>=0){const et=Ce.rowIdx;pe.shiftKey&&b.value?(v.value||(v.value={...b.value}),b.value={row:et,col:Ce.colIdx}):(b.value={row:et,col:Ce.colIdx},v.value={row:et,col:Ce.colIdx}),(Ge=i.focusCanvas)==null||Ge.call(i);const Jt=W.value[et],Xt=k.value[Ce.colIdx];Jt&&Xt&&(t("row-clicked",{data:Jt,event:pe}),t("cell-selected",{data:Jt,row:et,col:Ce.colIdx,colId:Xt.colId}))}return me}function Me(z){A.value&&(z&&I&&z.cx>=0&&fa(z.cx,z.cy,I,z.hitScale)!=="outside"||(A.value=null))}function Ne(z){const me=k.value.length-1,Ce=W.value.length-1;if(!b.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(z.key)&&(z.preventDefault(),b.value={row:Ie.value,col:0},v.value={row:Ie.value,col:0});return}let{row:De,col:Ve}=b.value;const Ge=(et,Jt,Xt=!1)=>{De=Math.max(0,Math.min(Ce,et)),Ve=Math.max(0,Math.min(me,Jt)),b.value={row:De,col:Ve},Xt||(v.value={row:De,col:Ve}),B(De),C(Ve)};switch(z.key){case"ArrowDown":z.preventDefault(),Ge(De+1,Ve,z.shiftKey);break;case"ArrowUp":z.preventDefault(),Ge(De-1,Ve,z.shiftKey);break;case"ArrowRight":z.preventDefault(),z.shiftKey?Ge(De,Ve+1,!0):Ve<me?Ge(De,Ve+1):Ge(De+1,0);break;case"ArrowLeft":z.preventDefault(),z.shiftKey?Ge(De,Ve-1,!0):Ve>0?Ge(De,Ve-1):Ge(De-1,me);break;case"Tab":z.preventDefault(),z.shiftKey?Ve>0?Ge(De,Ve-1):Ge(De-1,me):Ve<me?Ge(De,Ve+1):Ge(De+1,0);break;case"Enter":z.preventDefault(),z.shiftKey?Ge(De-1,Ve):Ge(De+1,Ve);break;case"Home":z.preventDefault(),z.ctrlKey||z.metaKey?Ge(0,0,z.shiftKey):Ge(De,0,z.shiftKey);break;case"End":z.preventDefault(),z.ctrlKey||z.metaKey?Ge(Ce,me,z.shiftKey):Ge(De,me,z.shiftKey);break;case"PageDown":z.preventDefault(),Ge(Math.min(Ce,De+Te.value),Ve,z.shiftKey);break;case"PageUp":z.preventDefault(),Ge(Math.max(0,De-Te.value),Ve,z.shiftKey);break;case"Escape":b.value=null,v.value=null;break;case"c":case"C":(z.ctrlKey||z.metaKey)&&(z.preventDefault(),Fe());break}}function Fe(){var Xt;if(!b.value)return;const z=k.value,pe=W.value,me=v.value??b.value,Ce=Math.min(me.row,b.value.row),De=Math.max(me.row,b.value.row),Ve=Math.min(me.col,b.value.col),Ge=Math.max(me.col,b.value.col),et=[];for(let R=Ce;R<=De;R++){const K=pe[R];if(!K)continue;const oe=[];for(let ae=Ve;ae<=Ge;ae++){const J=z[ae];J&&oe.push(q(J,K).replace(/[\t\r\n]+/g," "))}et.push(oe.join("	"))}const Jt=et.join(`
`);(Xt=navigator.clipboard)==null||Xt.writeText(Jt).catch(()=>{})}function Qe(z){T.value=z,z?l[A.value]=z:delete l[A.value],t("filter-changed")}function _t(){A.value&&delete l[A.value],T.value="",A.value=null,t("filter-changed")}function Pt(){A.value=null}function lt(z,pe){if(!A.value||!z.width)return;const me=z.getContext("2d");if(!me)return;me.setTransform(pe,0,0,pe,0,0),I=bb(z.width/pe,E.value,!!T.value);const Ce=Vr[n.theme()]??Vr.none;wb(me,I,T.value,x.value,Ce)}function nn(z,{dpr:pe,glow:me}){var Ce,De,Ve,Ge;Sb(z,{cols:k.value,rows:W.value,pinnedRows:r.value,rowHeight:n.rowHeight(),rowHeights:le.value??void 0,scrollY:p.value,scrollX:h.value,theme:n.theme(),glow:me,sorts:a.value,colFilters:l,hoveredRow:S.value,selectedRow:((Ce=b.value)==null?void 0:Ce.row)??-1,selectedCol:((De=b.value)==null?void 0:De.col)??-1,selectionAnchorRow:((Ve=v.value)==null?void 0:Ve.row)??-1,selectionAnchorCol:((Ge=v.value)==null?void 0:Ge.col)??-1,formatCell:q,getCellStyle:Z,aggregateRow:ye.value,dpr:pe}),lt(z,pe)}const At={setGridOption(z,pe){z==="rowData"?s.value=pe:z==="pinnedBottomRowData"?r.value=pe:z==="quickFilterText"&&(o.value=pe)},getColumnState(){return n.columnDefs().map(z=>{var me;const pe=D(z);return{colId:pe,hide:u.has(pe),sort:((me=a.value.find(Ce=>Ce.colId===pe))==null?void 0:me.dir)??null,sortIndex:a.value.some(Ce=>Ce.colId===pe)?a.value.findIndex(Ce=>Ce.colId===pe):null,width:c[pe]??z.width}})},applyColumnState({state:z}){const pe=z.filter(me=>me.sort).sort((me,Ce)=>(me.sortIndex??0)-(Ce.sortIndex??0));pe.length&&(a.value=pe.map(me=>({colId:me.colId,dir:me.sort})));for(const me of z)me.hide===!0&&u.add(me.colId),me.hide===!1&&u.delete(me.colId),me.width&&(c[me.colId]=me.width)},setFilterModel(z){for(const pe of Object.keys(l))delete l[pe];if(z)for(const[pe,me]of Object.entries(z))(me==null?void 0:me.type)==="equals"?l[pe]=`__eq__${me.filter}`:me!=null&&me.filter&&(l[pe]=me.filter)},getFilterModel(){const z={};for(const[pe,me]of Object.entries(l))me&&(z[pe]=me.startsWith("__eq__")?{type:"equals",filter:me.slice(6)}:{type:"contains",filter:me});return z},async setColumnFilterModel(z,pe){pe?pe.type==="equals"?l[z]=`__eq__${pe.filter}`:l[z]=pe.filter??"":delete l[z]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:z="export.csv"}={}){const pe=U.value,me=pe.map(Ge=>Ge.colDef.headerName??Ge.colId).join(","),Ce=W.value.map(Ge=>pe.map(et=>`"${String(q(et,Ge)).replace(/"/g,'""')}"`).join(",")),De=new Blob([[me,...Ce].join(`
`)],{type:"text/csv"}),Ve=URL.createObjectURL(De);Object.assign(document.createElement("a"),{href:Ve,download:z}).click(),URL.revokeObjectURL(Ve)},resize(){var z;(z=i.resize)==null||z.call(i)},getSortModel(){return a.value.map(z=>({colId:z.colId,sort:z.dir}))},setSortModel(z){a.value=z.map(pe=>({colId:pe.colId,dir:pe.sort}))},getScrollY(){return p.value},setScrollY(z){dn(()=>{p.value=Math.max(0,Math.min(ve.value,z))})},resetColumnState(){u.clear();for(const z of n.columnDefs())z.hide&&u.add(D(z));a.value=N();for(const z of Object.keys(c))delete c[z];for(const z of Object.keys(l))delete l[z];o.value="",p.value=0,b.value=null,A.value=null}};function tr(){var z,pe;for(const me of n.columnDefs())me.hide&&u.add(D(me));a.value.length||(a.value=N()),s.value=((z=n.rowData)==null?void 0:z.call(n))??[],r.value=((pe=n.pinnedBottomRowData)==null?void 0:pe.call(n))??[]}function Si(){y&&(clearInterval(y),y=null),e.stop()}return{scrollX:h,scrollY:p,maxScrollX:X,maxScrollY:ve,filteredRows:W,displayCols:k,resolvedCols:U,aggregateRow:ye,rowHeights:le,firstVisibleRow:Ie,lastVisibleRow:ze,visibleRowCount:Te,selectedCell:b,selectionAnchor:v,hoveredRow:S,activeFilter:A,filterPopupValue:T,caretOn:x,canvasW:d,canvasH:m,screenW:g,screenH:_,sortState:a,colFilters:l,formatCell:q,getCellValue:j,hit:xe,get resizing(){return ne},get panning(){return L},setViewport:P,pageUp:de,pageDown:se,ensureRowVisible:B,ensureColVisible:C,wheel:Ue,hover:qe,leave:G,pointerDown:Re,click:fe,docClick:Me,keyDown:Ne,panStart:We,panMove:O,panEnd:H,globalMove:ie,globalUp:Ee,setFilterText:Qe,clearFilter:_t,closeFilter:Pt,paint:nn,api:At,init:tr,dispose:Si}}const Nb=["value"],Ob=["disabled"],Bb=["disabled"],kb=28,zb=ai({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},bendField:{type:Boolean,default:!0}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,s=be(null),r=lm({columnDefs:()=>t.columnDefs,defaultColDef:()=>t.defaultColDef,rowData:()=>t.rowData,pinnedBottomRowData:()=>t.pinnedBottomRowData,rowHeight:()=>t.rowHeight,theme:()=>t.theme,emit:i,host:{redraw:()=>j(),resize:()=>X(),focusCanvas:()=>{var L;return(L=v.value)==null?void 0:L.focus()},focusFilterInput:()=>{var L;return(L=s.value)==null?void 0:L.focus()},blurFilterInput:()=>{var L;return(L=s.value)==null?void 0:L.blur()}}}),{scrollY:o,maxScrollY:a,filteredRows:l,displayCols:c,selectedCell:u,firstVisibleRow:f,lastVisibleRow:d,activeFilter:m,filterPopupValue:g,formatCell:_,pageUp:p,pageDown:h,clearFilter:S}=r,b=be(null),v=be(null),A=zi("cathodeResetTick",be(0));je(A,()=>se());let T=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),E=null,I=!1;function x(){if(E){try{E.forceContextLoss()}catch{}try{E.dispose()}catch{}E=null}}let y,D;const U=new Zi({paint:(L,{dpr:V,glow:Q})=>r.paint(L,{dpr:V,glow:Q})});function k(){if(!(!v.value||!b.value)){try{E=new Js({canvas:v.value,antialias:!1,alpha:!0})}catch{I=!0}if(!I&&!E.getContext()&&(E.dispose(),E=null,I=!0),I){X();return}E.setPixelRatio(1),E.setClearColor(0,0),y=new Qs,D=new Zs(-1,1,1,-1,0,1),y.add(new Bt(new en(2,2),U.material)),X()}}function X(){if(!b.value||!E&&!I)return;const L=b.value.clientWidth,V=b.value.clientHeight-(t.pagination?kb:0);if(!L||!V)return;const Q=t.bendField?Math.round(L*tm(t.curvature)):L;U.resize(Q,V),U.setScreenSize(L,V),T=U.dpr,r.setViewport(Q,V,L,V),E?(E.setPixelRatio(T),E.setSize(L,V)):v.value&&(v.value.width=Math.round(L*T),v.value.height=Math.round(V*T),v.value.style.width=L+"px",v.value.style.height=V+"px"),j()}function j(){if(!U.canvas.width)return;if(I){if(!v.value)return;U.paintOnly(!1);const V=U.canvas,Q=v.value.getContext("2d");Q&&Q.drawImage(V,0,0,V.width,V.height,0,0,v.value.width,v.value.height);return}if(!E)return;const L=t.theme==="paper";U.setLook({curvature:t.curvature,scanlines:t.scanlines&&!L,vignette:!L,magnify:t.magnify}),U.syncUniforms(),U.paint(t.glow),E.render(y,D)}function q(L,V){if(!v.value)return[-1,-1];const Q=v.value.getBoundingClientRect(),re=L-Q.left,we=V-Q.top,Se=Q.width,Ae=Q.height,We=qs(t.curvature),[O,H]=em(re,we,Se,Ae,We,U.canvas.width/T||Se,U.canvas.height/T||Ae);return O<0?[-1,-1]:[O,H]}function Z(L){return q(L.clientX,L.clientY)}function N(L){if(!v.value)return 1;const[V]=q(L.clientX-4,L.clientY),[Q]=q(L.clientX+4,L.clientY);return V<0||Q<0?1:Math.max(1,Math.abs(Q-V)/8)}function W(L){const[V,Q]=Z(L);return{cx:V,cy:Q,hitScale:N(L)}}function F(L){r.wheel(L.deltaX,L.deltaY,L.shiftKey)}function Y(L){if(r.resizing)return;t.magnify&&v.value&&U.setLens(ko(L,v.value));const V=r.hover(W(L));V&&v.value&&(v.value.style.cursor=V)}function $(){U.setLens(null),r.leave()}function le(L){r.pointerDown(W(L),L.clientX,L.clientY)}function te(L){r.click(W(L),L).stopPropagation&&L.stopPropagation()}function he(L){m.value&&r.docClick(L.target===v.value?W(L):null)}function ge(L){r.globalMove(L.clientX,L.clientY)}function ve(){r.globalUp()}function Te(L){L.touches.length===1&&r.panStart(L.touches[0].clientX,L.touches[0].clientY)}function Ie(L){!r.panning||L.touches.length!==1||(L.preventDefault(),r.panMove(L.touches[0].clientX,L.touches[0].clientY))}function ze(){r.panEnd()}function ye(L){r.keyDown(L)}function P(L){r.setFilterText(L.target.value)}je(()=>t.theme,()=>j()),je(()=>[t.curvature,t.bendField],()=>dn(X)),je(()=>t.scanlines,()=>j()),je(()=>t.glow,()=>j()),je(()=>t.magnify,L=>{L||U.setLens(null),j()});let B=null,C=null,de=0;function se(){cancelAnimationFrame(de),de=requestAnimationFrame(X)}function ne(L){L.preventDefault()}function ce(){E==null||E.dispose(),E=null,I=!1,k()}Pn(()=>{r.init(),document.addEventListener("click",he),document.addEventListener("mousemove",ge),document.addEventListener("mouseup",ve),dn(()=>{var L;k(),v.value&&(v.value.addEventListener("webglcontextlost",ne),v.value.addEventListener("webglcontextrestored",ce)),b.value&&(B=new ResizeObserver(()=>X()),B.observe(b.value),C=new IntersectionObserver(V=>{V.some(Q=>Q.isIntersecting)&&se()}),C.observe(b.value)),window.addEventListener("resize",se),(L=window.visualViewport)==null||L.addEventListener("resize",se),i("grid-ready",{api:r.api})})}),Xn(()=>{var L,V,Q;document.removeEventListener("click",he),document.removeEventListener("mousemove",ge),document.removeEventListener("mouseup",ve),(L=v.value)==null||L.removeEventListener("webglcontextlost",ne),(V=v.value)==null||V.removeEventListener("webglcontextrestored",ce),B==null||B.disconnect(),C==null||C.disconnect(),window.removeEventListener("resize",se),(Q=window.visualViewport)==null||Q.removeEventListener("resize",se),cancelAnimationFrame(de),x(),U.dispose(),r.dispose()});const _e=nt(()=>Vr[t.theme]??Vr.none),ue=nt(()=>({background:_e.value.headerBg,borderTop:`1px solid ${_e.value.border}`,color:_e.value.text})),w=nt(()=>({background:_e.value.bg})),M=nt(()=>_e.value.accent);return(L,V)=>{var Q,re;return Je(),mt("div",{ref_key:"wrapEl",ref:b,class:"cathode-wrap",style:Fn(w.value)},[Le("canvas",{ref_key:"canvasEl",ref:v,class:"cathode-canvas",tabindex:"0",onWheel:ks(F,["prevent"]),onMousemove:Y,onMouseleave:$,onMousedown:le,onClick:te,onKeydown:ye,onTouchstartPassive:Te,onTouchmove:Ie,onTouchend:ze,onTouchcancel:ze},null,544),xt(m)?(Je(),mt("input",{key:0,ref_key:"filterGhostEl",ref:s,class:"cathode-filter-ghost","aria-label":"Filter column",value:xt(g),autofocus:"",onInput:P,onKeydown:[V[0]||(V[0]=kf((...we)=>xt(S)&&xt(S)(...we),["escape"])),V[1]||(V[1]=kf(we=>xt(r).closeFilter(),["enter"]))]},null,40,Nb)):Kt("",!0),n.pagination?(Je(),mt("div",{key:1,class:"cathode-pagination",style:Fn(ue.value)},[Le("button",{disabled:xt(o)<=0,onClick:V[2]||(V[2]=we=>xt(p)())},"◀",8,Ob),Le("span",null,_n((xt(f)+1).toLocaleString())+"–"+_n(Math.min(xt(l).length,xt(d)+1).toLocaleString())+" / "+_n(xt(l).length.toLocaleString()),1),Le("button",{disabled:xt(o)>=xt(a),onClick:V[3]||(V[3]=we=>xt(h)())},"▶",8,Bb),Le("span",{class:"cathode-page-info",style:Fn({color:M.value})},_n(xt(l).length.toLocaleString())+" rows ",5),xt(u)?(Je(),mt("span",{key:0,class:"cathode-sel-readout",style:Fn({color:M.value})},_n(((Q=xt(c)[xt(u).col])==null?void 0:Q.colDef.headerName)??((re=xt(c)[xt(u).col])==null?void 0:re.colId))+" : "+_n(xt(_)(xt(c)[xt(u).col],xt(l)[xt(u).row])),5)):Kt("",!0)],4)):Kt("",!0)],4)}}}),li=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Wh=li(zb,[["__scopeId","data-v-3f5baab2"]]),Wa={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function Hb(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const Vb=12,Qt=18,yo=10,Xs=6,Yu=`${Vb}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function Gb(n,e,t){if(t<=0||!e)return[e];const i=[];for(const s of e.split(`
`)){if(!s){i.push("");continue}if(n.measureText(s).width<=t){i.push(s);continue}const r=s.split(/(\s+)/);let o="";for(const a of r){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function cm(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${s}`}return n}function Wb(n,e){return Math.ceil(n.measureText(e).width)+12}function Xb(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:s,wordWrap:r}=n,o=n.formatTs??cm;t.font=Yu;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=s&&c.ts!=null?o(c.ts):"",d=r?Gb(t,c.text,i):c.text.split(`
`);for(let m=0;m<d.length;m++)a.push({entryIdx:l,text:d[m],level:u,timestamp:m===0?f:"",isFirstFrag:m===0,widthPx:t.measureText(d[m]).width})}return a}function Yb(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr??1,s=n.width/i,r=n.height/i,o=Wa[e.theme]??Wa.none;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r),t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip(),t.font=Yu,t.textBaseline="middle";const a=e.visualLines,l=yo-e.scrollX,c=(e.showTimestamps?yo+e.timestampWidth:yo)-e.scrollX,u=Math.max(0,Math.floor((e.scrollY-Xs)/Qt)),f=Math.min(a.length,Math.ceil((e.scrollY+r-Xs)/Qt)+1);for(let d=u;d<f;d++){const m=a[d],g=Xs+d*Qt-e.scrollY+Qt/2;if(m.entryIdx%2===1&&m.isFirstFrag){t.fillStyle=o.rowAlt;let p=1;for(;d+p<f&&a[d+p].entryIdx===m.entryIdx;)p++;t.fillRect(0,g-Qt/2,s,Qt*p)}e.selectionStart>=0&&d>=e.selectionStart&&d<=e.selectionEnd&&(t.fillStyle=o.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,g-Qt/2,s,Qt)),d===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,g-Qt/2,s,Qt)),e.showTimestamps&&m.timestamp&&(t.fillStyle=o.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=o.timestamp),t.fillText(m.timestamp,l,g),t.shadowBlur=0);const _=Hb(o,m.level);t.fillStyle=_,t.textAlign="left",e.glow?(t.shadowColor=_,t.shadowBlur=14,t.fillText(m.text,c,g),t.shadowBlur=7,t.fillText(m.text,c,g),t.shadowBlur=3,t.fillText(m.text,c,g),t.shadowBlur=0):t.fillText(m.text,c,g)}t.restore()}function Xh(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-Xs)/Qt);return i<0||i>=t?-1:i}function $b(n){return Xs*2+n*Qt}function um(n){const e=Qa();return e.run(()=>{const t=()=>{var ye;return((ye=n.showTimestamps)==null?void 0:ye.call(n))??!0},i=()=>{var ye;return((ye=n.wordWrap)==null?void 0:ye.call(n))??!0},s=be(0),r=be(0),o=be(0),a=be(0),l=be(-1),c=be(!0),u=be(-1),f=be(-1),d=document.createElement("canvas"),m=nt(()=>{var B;const ye=n.entries()??[],P=((B=n.maxLines)==null?void 0:B.call(n))??0;return P>0&&ye.length>P?ye.slice(ye.length-P):ye}),g=nt(()=>{var B;if(!t())return"";const ye=((B=n.formatTs)==null?void 0:B.call(n))??cm;let P="00:00:00";for(const C of m.value){if(C.ts==null)continue;const de=ye(C.ts);de.length>P.length&&(P=de)}return P}),_=be(0),p=be([]);function h(){var B;const ye=d.getContext("2d");if(!ye)return;ye.font=Yu;const P=t()?Wb(ye,g.value):0;_.value=P,p.value=Xb({entries:m.value,ctx:ye,textMaxWidth:Math.max(1,s.value-yo*2-P),showTimestamps:t(),formatTs:(B=n.formatTs)==null?void 0:B.call(n),wordWrap:i()})}const S=nt(()=>$b(p.value.length)),b=nt(()=>Math.max(0,S.value-r.value)),v=nt(()=>{let ye=0;for(const P of p.value)P.widthPx>ye&&(ye=P.widthPx);return yo*2+_.value+ye}),A=nt(()=>Math.max(0,v.value-s.value));je(b,()=>{c.value?o.value=b.value:o.value=Math.min(o.value,b.value)}),je(A,()=>{a.value=Math.min(a.value,A.value)}),je([m,s,t,i,g],()=>{h(),dn(()=>n.host.redraw())},{deep:!1}),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw()),je(l,()=>n.host.redraw()),je([u,f],()=>n.host.redraw());function T(ye,P){s.value=ye,r.value=P,h(),c.value&&(o.value=Math.max(0,S.value-r.value))}function E(ye){o.value=Math.max(0,Math.min(b.value,ye)),c.value=o.value>=b.value-4}function I(ye){a.value=Math.max(0,Math.min(A.value,ye))}function x(ye,P,B){B?I(a.value+P):Math.abs(ye)>Math.abs(P)?I(a.value+ye):E(o.value+P)}function y(){c.value=!0,o.value=b.value}function D(ye){E(Xs+ye*Qt)}let U=!1,k=!1,X=0,j=0,q=0,Z=0;function N(ye,P){U=!0,k=!1,X=ye,j=P,q=a.value,Z=o.value}function W(ye,P){if(!U)return!1;const B=X-ye,C=j-P;return(Math.abs(B)>4||Math.abs(C)>4)&&(k=!0),I(q+B),E(Z+C),!0}function F(){U&&(U=!1,k&&(k=!1))}const Y=()=>U;function $(ye){l.value=ye<0?-1:Xh(ye,o.value,p.value.length)}function le(){l.value=-1}function te(ye,P){if(k){k=!1;return}const B=ye<0?-1:Xh(ye,o.value,p.value.length);if(B<0){u.value=-1,f.value=-1;return}P&&u.value>=0||(u.value=B),f.value=B}function he(ye,P){const B=p.value.length;if(B===0)return;const C=f.value<0?0:f.value,de=Math.max(0,Math.min(B-1,C+ye));f.value=de,(!P||u.value<0)&&(u.value=de),l.value=de;const se=Xs+de*Qt,ne=se+Qt;se<o.value?E(se):ne>o.value+r.value&&E(ne-r.value)}function ge(){const ye=Math.min(u.value,f.value),P=Math.max(u.value,f.value);if(ye<0)return"";const B=p.value,C=new Set,de=[];for(let se=ye;se<=P&&se<B.length;se++){const ne=B[se];if(C.has(ne.entryIdx))continue;C.add(ne.entryIdx);let ce="";for(let _e=0;_e<B.length;_e++)B[_e].entryIdx===ne.entryIdx&&(ce+=(ce&&!B[_e].isFirstFrag?" ":"")+B[_e].text);de.push(ne.timestamp?`${ne.timestamp}  ${ce}`:ce)}return de.join(`
`)}async function ve(){const ye=ge();if(ye)try{await navigator.clipboard.writeText(ye)}catch{const P=document.createElement("textarea");P.value=ye,P.style.position="fixed",P.style.opacity="0",document.body.appendChild(P),P.select();try{document.execCommand("copy")}catch{}document.body.removeChild(P)}}function Te(ye){if((ye.metaKey||ye.ctrlKey)&&(ye.key==="c"||ye.key==="C")){u.value>=0&&(ye.preventDefault(),ve());return}if((ye.metaKey||ye.ctrlKey)&&(ye.key==="a"||ye.key==="A")){ye.preventDefault(),u.value=0,f.value=p.value.length-1;return}switch(ye.key){case"ArrowDown":ye.preventDefault(),he(1,ye.shiftKey);break;case"ArrowUp":ye.preventDefault(),he(-1,ye.shiftKey);break;case"ArrowRight":ye.preventDefault(),I(a.value+Qt*2);break;case"ArrowLeft":ye.preventDefault(),I(a.value-Qt*2);break;case"PageDown":ye.preventDefault(),E(o.value+r.value);break;case"PageUp":ye.preventDefault(),E(o.value-r.value);break;case"Home":ye.preventDefault(),E(0),I(0);break;case"End":ye.preventDefault(),E(b.value);break;case"Escape":u.value=-1,f.value=-1;break}}function Ie(ye,{dpr:P,glow:B}){Yb(ye,{visualLines:p.value,scrollY:o.value,scrollX:a.value,theme:n.theme(),glow:B,showTimestamps:t(),timestampWidth:_.value,hoveredLine:l.value,selectionStart:Math.min(u.value,f.value),selectionEnd:Math.max(u.value,f.value),dpr:P})}function ze(){e.stop()}return{canvasW:s,canvasH:r,scrollY:o,scrollX:a,hoveredLine:l,stuckToBottom:c,selectionAnchor:u,selectionActive:f,visualLines:p,tsWidth:_,contentH:S,maxScrollY:b,maxScrollX:A,setViewport:T,setScroll:E,setScrollX:I,wheel:x,scrollToBottom:y,scrollToLine:D,panStart:N,panMove:W,panEnd:F,panning:Y,hover:$,leave:le,click:te,keyDown:Te,moveSelection:he,selectionAsText:ge,copySelection:ve,paint:Ie,dispose:ze}})}const qb=ai({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=be(null),s=be(null),r={...jt},o=um({entries:()=>t.entries,theme:()=>t.theme,showTimestamps:()=>t.showTimestamps,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap,maxLines:()=>t.maxLines,host:{redraw:()=>p()}});let a=null,l=!1;function c(){if(a){try{a.forceContextLoss()}catch{}try{a.dispose()}catch{}a=null}}let u,f,d=1;const m=new Zi({paint:($,{dpr:le,glow:te})=>o.paint($,{dpr:le,glow:te})});function g(){if(!(!s.value||!i.value)){try{a=new Js({canvas:s.value,antialias:!1,alpha:!0})}catch{l=!0}if(!l&&!a.getContext()&&(a.dispose(),a=null,l=!0),l){_();return}a.setPixelRatio(1),a.setClearColor(0,0),u=new Qs,f=new Zs(-1,1,1,-1,0,1),u.add(new Bt(new en(2,2),m.material)),_()}}function _(){if(!i.value||!a&&!l)return;const $=i.value.clientWidth,le=i.value.clientHeight;!$||!le||m.resize($,le)&&(m.setScreenSize($,le),d=m.dpr,o.setViewport($,le),a?(a.setPixelRatio(d),a.setSize($,le)):s.value&&(s.value.width=Math.round($*d),s.value.height=Math.round(le*d),s.value.style.width=$+"px",s.value.style.height=le+"px"),p())}function p(){if(!m.canvas.width)return;if(l){if(!s.value)return;m.paintOnly(!1);const le=s.value.getContext("2d");le&&le.drawImage(m.canvas,0,0,m.canvas.width,m.canvas.height,0,0,s.value.width,s.value.height);return}if(!a)return;const $=t.theme==="paper";m.setLook({curvature:t.curvature,scanlines:t.scanlines&&!$,vignette:!$,magnify:t.magnify}),m.setLens(t.magnify?r:null),m.syncUniforms(),m.paint(t.glow),a.render(u,f)}je(()=>t.theme,()=>p()),je(()=>t.curvature,()=>p()),je(()=>t.scanlines,()=>p()),je(()=>t.glow,()=>p()),je(()=>t.magnify,$=>{$||(r.x=jt.x,r.y=jt.y),p()});function h($){if(!s.value)return[-1,-1];const le=s.value.getBoundingClientRect();return[$.clientX-le.left,$.clientY-le.top]}function S($){o.wheel($.deltaX,$.deltaY,$.shiftKey)}function b($){o.panStart($.clientX,$.clientY),i.value&&i.value.focus()}function v($){o.panMove($.clientX,$.clientY)}function A(){o.panEnd()}function T($){if($.touches.length!==1)return;const le=$.touches[0];o.panStart(le.clientX,le.clientY),i.value&&i.value.focus()}function E($){if(!o.panning()||$.touches.length!==1)return;$.preventDefault();const le=$.touches[0];o.panMove(le.clientX,le.clientY)}function I(){o.panEnd()}function x($){const[,le]=h($);o.click(le,$.shiftKey)}function y($){o.keyDown($)}function D($){if(t.magnify&&s.value){const te=ko($,s.value);r.x=te.x,r.y=te.y,p()}const[,le]=h($);o.hover(le)}function U(){o.leave(),r.x=jt.x,r.y=jt.y,p()}e({scrollToBottom(){o.scrollToBottom()},scrollToLine($){o.scrollToLine($)}});let k=null,X=null,j=0;const q=zi("cathodeResetTick",be(0));je(q,()=>Z());function Z(){cancelAnimationFrame(j),j=requestAnimationFrame(_)}function N($){$.preventDefault()}function W(){a==null||a.dispose(),a=null,l=!1,g()}Pn(()=>{document.addEventListener("mousemove",v),document.addEventListener("mouseup",A),dn(()=>{var $;g(),s.value&&(s.value.addEventListener("webglcontextlost",N),s.value.addEventListener("webglcontextrestored",W)),i.value&&(k=new ResizeObserver(()=>_()),k.observe(i.value),X=new IntersectionObserver(le=>{le.some(te=>te.isIntersecting)&&Z()}),X.observe(i.value)),window.addEventListener("resize",Z),($=window.visualViewport)==null||$.addEventListener("resize",Z),o.scrollY.value=o.maxScrollY.value})}),Xn(()=>{var $,le,te;document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",A),($=s.value)==null||$.removeEventListener("webglcontextlost",N),(le=s.value)==null||le.removeEventListener("webglcontextrestored",W),k==null||k.disconnect(),X==null||X.disconnect(),window.removeEventListener("resize",Z),(te=window.visualViewport)==null||te.removeEventListener("resize",Z),cancelAnimationFrame(j),c(),o.dispose(),m.dispose()});const F=nt(()=>Wa[t.theme]??Wa.none),Y=nt(()=>({background:F.value.bg}));return($,le)=>(Je(),mt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:Fn(Y.value),tabindex:"0",onKeydown:y},[Le("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-log-canvas",onWheel:ks(S,["prevent"]),onMousemove:D,onMouseleave:U,onMousedown:b,onClick:x,onTouchstartPassive:T,onTouchmove:E,onTouchend:I,onTouchcancel:I},null,544)],36))}}),du=li(qb,[["__scopeId","data-v-328a73e4"]]),Gr={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},fm=.18,ro=8,$u=22,Kb=4,oi=8,xs=56,qu=42,Ki="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",jb="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",nc=4,Zb=1,Jb=1;function Qb(n,e,t,i=0,s=!1){const r=s?qu:xs,o=Math.max(0,e-oi-r),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function ew(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,s=-1/0,r=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>s&&(s=c.high),c.volume>r&&(r=c.volume))}if(!isFinite(i)||!isFinite(s)||i===s){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,r)}}const a=(s-i)*.04;return{min:i-a,max:s+a,maxVol:Math.max(1,r)}}function tw(n,e,t=!1){const i=t?Kb:$u,s=Math.max(1,n-ro-i-nc),r=Math.max(0,Math.round(s*e)),o=s-r;return{priceY0:ro,priceY1:ro+o,volumeY0:ro+o+nc,volumeY1:ro+o+nc+r}}function Qn(n,e,t,i){const s=e.max-e.min;return s<=0?(t+i)/2:t+(1-(n-e.min)/s)*(i-t)}function Ms(n,e,t){return oi+(n-e+.5)*t}function ms(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function Ku(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),s=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${s}:${r}`}function nw(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),s=t/i;let r;return s<1.5?r=1:s<3?r=2:s<7?r=5:r=10,r*i}function hm(n,e){var g,_,p,h,S;const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const s=n.width/i,r=n.height/i,o=Gr[e.theme]??Gr.none,a=e.colors?{...o,...e.colors}:o,l=!!e.compact;if(t.clearRect(0,0,s,r),t.fillStyle=a.bg,t.fillRect(0,0,s,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,s,r),t.clip();const c=Qb(e.candles.length,s,e.slotW,e.scrollX,l),u=ew(e.candles,c.firstIdx,c.count),f=tw(r,e.showVolume?e.volumeFraction:0,l),d=Math.max(Zb,Math.floor(e.slotW*.7)),m=Math.min(e.candles.length,c.firstIdx+c.count);for(let b=c.firstIdx;b<m;b++){const v=e.candles[b];if(!v)continue;const A=Ms(b,c.firstIdx,e.slotW),T=Qn(v.open,u,f.priceY0,f.priceY1),E=Qn(v.close,u,f.priceY0,f.priceY1),I=Qn(v.high,u,f.priceY0,f.priceY1),x=Qn(v.low,u,f.priceY0,f.priceY1),y=v.close>=v.open,D=y?a.wickBull:a.wickBear,U=y?a.candleBull:a.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=U),t.strokeStyle=D,t.lineWidth=Jb,t.beginPath(),t.moveTo(Math.round(A)+.5,I),t.lineTo(Math.round(A)+.5,x),t.stroke(),t.fillStyle=U;const k=Math.min(T,E),X=Math.max(1,Math.abs(E-T)),j=Math.round(A-d/2),q=Math.round(k),Z=Math.round(X);if(t.fillRect(j,q,d,Z),e.glow&&(t.shadowBlur=4,t.fillRect(j,q,d,Z)),t.shadowBlur=0,e.showVolume&&u.maxVol>0){const N=Math.round(v.volume/u.maxVol*(f.volumeY1-f.volumeY0));N>0&&(t.fillStyle=y?a.volumeBull:a.volumeBear,t.fillRect(Math.round(A-d/2),f.volumeY1-N,d,N))}}if((g=e.overlays)!=null&&g.length){const b={above:0,below:0},v=e.overlays.filter(T=>T.kind!=="hline"&&!!T.label).length,A=v?14+14*v+12:8;for(const T of e.overlays)T.kind==="hline"?sw(t,T,s,u,f,a,l,b,A):iw(t,T,c,u,f,e.slotW)}(_=e.markers)!=null&&_.length&&hw(t,a,e.markers,e.candles,c,u,f,e.slotW),dw(t,a,u,f,s,l),l||(pw(t,a,e.candles,c,e.slotW,r),uw(t,a,e.candles,s,r)),(p=e.overlays)!=null&&p.length&&ow(t,a,e.overlays,f),e.hover&&(mw(t,a,e.candles,c,u,f,e.slotW,e.hover,s),aw(t,a,e.candles,c,e.slotW,e.hover,f,((h=e.overlays)==null?void 0:h.length)??0),(S=e.markers)!=null&&S.length&&cw(t,a,e.markers,e.candles,c,u,f,e.slotW,e.hover,s)),t.restore()}function iw(n,e,t,i,s,r){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(oi,s.priceY0,999999,s.priceY1-s.priceY0),n.clip(),e.kind==="line")ha(n,e.data,t.firstIdx,o,r,i,s,e.color,e.lineWidth??1,e.dashed===!0);else if(e.kind==="band"){const l=dm(e.color,e.fillAlpha??.08);rw(n,e.upper,e.lower,t.firstIdx,o,r,i,s,l),ha(n,e.upper,t.firstIdx,o,r,i,s,e.color,1,!1),ha(n,e.lower,t.firstIdx,o,r,i,s,e.color,1,!1),(a=e.middle)!=null&&a.length&&ha(n,e.middle,t.firstIdx,o,r,i,s,e.color,1,e.middleDashed!==!1)}n.restore()}function sw(n,e,t,i,s,r,o,a={above:0,below:0},l=8){const c=Qn(e.price,i,s.priceY0,s.priceY1),u=c<s.priceY0-.5,f=c>s.priceY1+.5,d=u||f,m=d?u?a.above++:a.below++:0,g=d?u?s.priceY0+l+m*20:s.priceY1-8-m*20:c,_=o?qu:xs,p=Math.round(g)+.5;n.save(),d||(n.strokeStyle=e.color,n.lineWidth=e.lineWidth??1,n.setLineDash(e.dashed===!1?[]:[4,3]),n.beginPath(),n.moveTo(oi,p),n.lineTo(t-_,p),n.stroke(),n.setLineDash([]));let h=e.label??ms(e.price);if(d&&h!==""&&(h=(u?"↑ ":"↓ ")+h),h!==""){n.font=Ki,n.textBaseline="middle",n.textAlign="left";const S=n.measureText(h).width,b=4,v=2,A=oi+2;n.fillStyle=e.color,d&&(n.globalAlpha=.85),n.fillRect(A,g-7-v,S+b*2,14+v*2),n.globalAlpha=1,n.fillStyle=r.bg&&!r.bg.startsWith("rgba(0,0,0,0)")?r.bg:"#0d1520",n.fillText(h,A+b,g)}n.restore()}function ha(n,e,t,i,s,r,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const d=e[f];if(typeof d!="number"||!isFinite(d)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const m=Ms(f,t,s),g=Qn(d,r,o.priceY0,o.priceY1);u?n.lineTo(m,g):(n.moveTo(m,g),u=!0)}u&&n.stroke(),n.setLineDash([])}function rw(n,e,t,i,s,r,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=s;f++){const d=e[f],m=t[f],g=f<s&&typeof d=="number"&&typeof m=="number"&&isFinite(d)&&isFinite(m);if(g&&!c&&(u=f,c=!0),!g&&c||f===s&&c){const _=g?f+1:f;n.beginPath();for(let p=u;p<_;p++){const h=Ms(p,i,r),S=Qn(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(h,S):n.lineTo(h,S)}for(let p=_-1;p>=u;p--){const h=Ms(p,i,r),S=Qn(t[p],o,a.priceY0,a.priceY1);n.lineTo(h,S)}n.closePath(),n.fill(),c=!1}}}function dm(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),s=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${i},${s},${r},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function ow(n,e,t,i){const s=t.filter(_=>_.kind!=="hline"&&!!_.label);if(!s.length)return;n.save(),n.font=Ki;const r=8,o=5,a=12,l=6,c=14;let u=0;for(const _ of s){const p=n.measureText(_.label).width;p>u&&(u=p)}const f=r*2+a+l+u,d=o*2+c*s.length,m=oi+4,g=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(m,g,f,d),n.textBaseline="middle",n.textAlign="left";for(let _=0;_<s.length;_++){const p=s[_],h=g+o+c*(_+.5),S=m+r;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(S,h),n.lineTo(S+a,h),n.stroke(),n.setLineDash([])):p.kind==="band"&&(n.fillStyle=dm(p.color,p.fillAlpha??.2),n.fillRect(S,h-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(S+.5,h-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,S+a+l,h)}n.restore()}function aw(n,e,t,i,s,r,o,a){const l=Math.floor((r.x-oi)/s),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,d=u.open!==0?f/u.open*100:0,m=f>=0?"+":"",g=[["O",ms(u.open),void 0],["H",ms(u.high),void 0],["L",ms(u.low),void 0],["C",ms(u.close),void 0],["V",lw(u.volume),void 0],["",`${m}${d.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=Ki,n.textBaseline="middle",n.textAlign="left";const _=8,p=4,h=14;let S=_;for(const[T,E]of g){const I=T?`${T} ${E}`:E,x=n.measureText(I).width+12;S+=x}S+=_-12;const b=o.priceY0+4+(a>0?p*2+14*a+4:0),v=oi+4;n.fillStyle=e.panelBg,n.fillRect(v,b,S,h+p*2);let A=v+_;for(let T=0;T<g.length;T++){const[E,I,x]=g[T];n.fillStyle=e.text,E&&(n.globalAlpha=.6,n.fillText(E+" ",A,b+p+h/2),n.globalAlpha=1,A+=n.measureText(E+" ").width),x&&(n.fillStyle=x),n.fillText(I,A,b+p+h/2),A+=n.measureText(I).width+12}n.restore()}function lw(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function cw(n,e,t,i,s,r,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),d=Math.min(i.length,s.firstIdx+s.count),m=9;let g=null;for(const I of t){let x=0,y=i.length-1,D=-1;for(;x<=y;){const X=x+y>>1,j=i[X].start-I.timestamp;if(Math.abs(j)<=f){D=X;break}j<0?x=X+1:y=X-1}if(D<0||D<s.firstIdx||D>=d)continue;const U=Ms(D,s.firstIdx,a),k=Qn(I.price,r,o.priceY0,o.priceY1);if(Math.abs(l.x-U)<=m&&Math.abs(l.y-k)<=m){g={m:I,x:U,y:k};break}}if(!g)return;const _=Ku(g.m.timestamp),p=[`${g.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${_}`,`@ ${ms(g.m.price)}`];g.m.label&&p.push(g.m.label),n.save(),n.font=Ki,n.textBaseline="top",n.textAlign="left";const h=6,S=14;let b=0;for(const I of p){const x=n.measureText(I).width;x>b&&(b=x)}const v=b+h*2,A=p.length*S+h*2;let T=g.x+12;T+v>c-xs&&(T=g.x-12-v);let E=g.y-A/2;E<o.priceY0&&(E=o.priceY0),E+A>o.priceY1&&(E=o.priceY1-A),n.fillStyle=e.panelBgSolid,n.strokeStyle=g.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(T,E,v,A),n.strokeRect(T+.5,E+.5,v-1,A-1);for(let I=0;I<p.length;I++){const x=p[I];n.fillStyle=I===0?g.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(x,T+h,E+h+I*S)}n.restore()}function uw(n,e,t,i,s){if(t.length<2)return;const r=t[1].start-t[0].start,o=fw(r);if(!o)return;n.save(),n.font=Ki,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-xs-a,f=s-$u+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function fw(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,s=24*i,r=7*s;return n>=r&&n%r===0?n/r+"W":n>=s&&n%s===0?n/s+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function hw(n,e,t,i,s,r,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,s.firstIdx+s.count),f=m=>{let g=0,_=i.length-1;for(;g<=_;){const p=g+_>>1,h=i[p].start-m;if(Math.abs(h)<=c)return p;h<0?g=p+1:_=p-1}return-1},d=7;for(const m of t){const g=f(m.timestamp);if(g<0||g<s.firstIdx||g>=u)continue;const _=Ms(g,s.firstIdx,a),p=Qn(m.price,r,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const h=m.color??(m.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=h,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),m.kind==="entry"?(n.moveTo(_,p-d),n.lineTo(_-d,p+d-1),n.lineTo(_+d,p+d-1)):(n.moveTo(_,p+d),n.lineTo(_-d,p-d+1),n.lineTo(_+d,p-d+1)),n.closePath(),n.fill(),n.stroke()}}function dw(n,e,t,i,s,r=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=r?Math.max(2,Math.min(4,Math.round(a/36))):6,c=nw(o,l),u=Math.ceil(t.min/c)*c,f=r?qu:xs;n.font=r?jb:Ki,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let d=u;d<=t.max;d+=c){const m=Qn(d,t,i.priceY0,i.priceY1);m<i.priceY0||m>i.priceY1||(n.beginPath(),n.moveTo(oi,Math.round(m)+.5),n.lineTo(s-f,Math.round(m)+.5),n.stroke(),n.fillText(ms(d),s-f+3,m))}n.globalAlpha=1}function pw(n,e,t,i,s,r){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=Ki,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=Ms(c,i.firstIdx,s);n.fillText(Ku(u.start),f,r-$u+4)}n.globalAlpha=1}function mw(n,e,t,i,s,r,o,a,l){const c=Math.floor((a.x-oi)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const d=Ms(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(d)+.5,r.priceY0),n.lineTo(Math.round(d)+.5,r.volumeY1||r.priceY1),n.stroke();const m=Math.max(r.priceY0,Math.min(r.priceY1,a.y));n.beginPath(),n.moveTo(oi,Math.round(m)+.5),n.lineTo(l-xs,Math.round(m)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const g=s.max-s.min;if(g>0){const h=s.max-(m-r.priceY0)/(r.priceY1-r.priceY0)*g,S=ms(h);n.font=Ki,n.textBaseline="middle",n.textAlign="left";const b=n.measureText(S).width,v=4,A=2;n.fillStyle=e.accent,n.fillRect(l-xs+2,m-7-A,b+v*2,14+A*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(S,l-xs+2+v,m)}n.font=Ki,n.textBaseline="top",n.textAlign="center";const _=Ku(f.start),p=n.measureText(_).width;n.fillStyle=e.accent,n.fillRect(d-p/2-4,r.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(_,d,r.volumeY1+4),n.restore()}const ic=.25,sc=6,Yh=8;function pm(n){const e=Qa();return e.run(()=>{const t=be(0),i=be(0),s=be(0),r=be(1),o=be(null),a=nt(()=>Math.max(1,n.slotW()*r.value));je([n.theme,n.slotW,n.showVolume,n.volumeFraction,()=>{var I;return(I=n.compact)==null?void 0:I.call(n)},()=>n.candles(),()=>{var I;return(I=n.overlays)==null?void 0:I.call(n)},()=>{var I;return(I=n.markers)==null?void 0:I.call(n)}],()=>n.host.redraw(),{deep:!1}),je(()=>{var I;return(I=n.colors)==null?void 0:I.call(n)},()=>n.host.redraw(),{deep:!0}),je(s,()=>n.host.redraw()),je(r,()=>n.host.redraw()),je(o,()=>n.host.redraw()),je(a,()=>n.host.redraw());function l(I,x){t.value=I,i.value=x}function c(I){var k;const x=a.value;if(x<=0)return 0;const y=((k=n.candles())==null?void 0:k.length)??0,D=Math.max(1,Math.floor((t.value||1)/x)),U=Math.max(0,y-D);return Math.max(0,Math.min(I,U*x))}function u(I,x,y,D){if(I!==0||y&&x!==0){const j=I!==0?I:x;s.value=c(s.value+j);return}if(x===0)return;const U=n.candles(),k=a.value,X=Math.exp(-x*.0015);if(D>=0&&k>0&&(U!=null&&U.length)){const j=Math.max(1,Math.floor((t.value||1)/k)),Z=Math.max(0,U.length-j-Math.floor(s.value/k))+(D-Yh)/k,N=Math.max(ic,Math.min(sc,r.value*X));r.value=N;const W=n.slotW()*N,F=Math.max(1,Math.floor((t.value||1)/W)),Y=Z-(D-Yh)/W,$=Math.max(0,U.length-F-Y);s.value=c($*W)}else r.value=Math.max(ic,Math.min(sc,r.value*X))}let f=!1,d=0,m=0;function g(I){f=!0,d=I,m=s.value,o.value=null}function _(I){return f?(s.value=c(m+(I-d)),!0):!1}function p(){f=!1}const h=()=>f;function S(I,x){f||(o.value=I<0||x<0?null:{x:I,y:x})}function b(){o.value=null}function v(I){r.value=Math.max(ic,Math.min(sc,r.value*Math.exp(I*.18))),s.value=c(s.value)}function A(I){const x=a.value,y=I.shiftKey?20:3;switch(I.key){case"ArrowLeft":I.preventDefault(),s.value=c(s.value+x*y);break;case"ArrowRight":I.preventDefault(),s.value=c(s.value-x*y);break;case"ArrowUp":I.preventDefault(),v(1);break;case"ArrowDown":I.preventDefault(),v(-1);break;case"Home":I.preventDefault(),s.value=c(Number.MAX_SAFE_INTEGER);break;case"End":I.preventDefault(),s.value=0;break}}function T(I,{dpr:x,glow:y}){var D,U,k,X;hm(I,{candles:n.candles(),slotW:a.value,scrollX:s.value,theme:n.theme(),glow:y,showVolume:n.showVolume(),volumeFraction:n.volumeFraction(),hover:o.value,overlays:(D=n.overlays)==null?void 0:D.call(n),markers:(U=n.markers)==null?void 0:U.call(n),compact:(k=n.compact)==null?void 0:k.call(n),colors:(X=n.colors)==null?void 0:X.call(n),dpr:x})}function E(){e.stop()}return{canvasW:t,canvasH:i,scrollX:s,zoomLevel:r,hover:o,effectiveSlotW:a,setViewport:l,clampScroll:c,wheel:u,panStart:g,panMove:_,panEnd:p,panning:h,hoverAt:S,leave:b,keyDown:A,applyZoom:v,paint:T,dispose:E}})}const gw=ai({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:fm},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=be(null),i=be(null),s={...jt},r=pm({candles:()=>e.candles,theme:()=>e.theme,slotW:()=>e.slotW,showVolume:()=>e.showVolume,volumeFraction:()=>e.volumeFraction,overlays:()=>e.overlays,markers:()=>e.markers,compact:()=>e.compact,colors:()=>e.colors,host:{redraw:()=>_()}});let o=null,a=!1;function l(){if(o){try{o.forceContextLoss()}catch{}try{o.dispose()}catch{}o=null}}let c,u,f=1;const d=new Zi({paint:(F,{dpr:Y,glow:$})=>r.paint(F,{dpr:Y,glow:$})});function m(){if(!(!i.value||!t.value)){if(e.flat){a=!0,g();return}try{o=new Js({canvas:i.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{a=!0}if(!a&&!o.getContext()&&(o.dispose(),o=null,a=!0),a){g();return}o.setPixelRatio(1),o.setClearColor(0,0),c=new Qs,u=new Zs(-1,1,1,-1,0,1),c.add(new Bt(new en(2,2),d.material)),g()}}function g(){if(!t.value||!o&&!a)return;const F=t.value.clientWidth,Y=t.value.clientHeight;!F||!Y||d.resize(F,Y)&&(d.setScreenSize(F,Y),f=d.dpr,r.setViewport(F,Y),o?(o.setPixelRatio(f),o.setSize(F,Y)):i.value&&(i.value.width=Math.round(F*f),i.value.height=Math.round(Y*f),i.value.style.width=F+"px",i.value.style.height=Y+"px"),_())}function _(){if(!d.canvas.width)return;if(a){if(!i.value)return;d.paintOnly(!1);const Y=i.value.getContext("2d");Y&&(Y.clearRect(0,0,i.value.width,i.value.height),Y.drawImage(d.canvas,0,0));return}if(!o)return;const F=e.theme==="paper";d.setLook({curvature:e.curvature,scanlines:e.scanlines&&!F,vignette:!F,magnify:e.magnify}),d.setLens(e.magnify?s:null),d.syncUniforms(),d.paint(e.glow),o.render(c,u)}je(()=>e.curvature,()=>_()),je(()=>e.scanlines,()=>_()),je(()=>e.glow,()=>_()),je(()=>e.magnify,F=>{F||(s.x=jt.x,s.y=jt.y),_()}),je(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")});let p=null,h=null,S=0;const b=zi("cathodeResetTick",be(0));je(b,()=>v());function v(){cancelAnimationFrame(S),S=requestAnimationFrame(g)}function A(F){F.preventDefault()}function T(){o==null||o.dispose(),o=null,a=!1,m()}function E(F){if(!i.value)return[-1,-1];const Y=i.value.getBoundingClientRect();return[F.clientX-Y.left,F.clientY-Y.top]}function I(F){const[Y]=E(F);r.wheel(F.deltaX,F.deltaY,F.shiftKey,Y)}function x(F){F.button===0&&(r.panStart(F.clientX),t.value&&t.value.focus())}function y(F){r.keyDown(F)}function D(F){r.panMove(F.clientX)}function U(){r.panEnd()}function k(F){F.touches.length===1&&r.panStart(F.touches[0].clientX)}function X(F){!r.panning()||F.touches.length!==1||(F.preventDefault(),r.panMove(F.touches[0].clientX))}function j(){r.panEnd()}function q(F){if(e.magnify&&i.value){const le=ko(F,i.value);s.x=le.x,s.y=le.y,_()}const[Y,$]=E(F);r.hoverAt(Y,$)}function Z(){r.leave(),s.x=jt.x,s.y=jt.y,_()}Pn(()=>{document.addEventListener("mousemove",D),document.addEventListener("mouseup",U),dn(()=>{var F;m(),i.value&&(i.value.addEventListener("webglcontextlost",A),i.value.addEventListener("webglcontextrestored",T)),t.value&&(p=new ResizeObserver(()=>g()),p.observe(t.value),h=new IntersectionObserver(Y=>{Y.some($=>$.isIntersecting)&&v()}),h.observe(t.value)),window.addEventListener("resize",v),(F=window.visualViewport)==null||F.addEventListener("resize",v)})}),Xn(()=>{var F,Y,$;document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",U),(F=i.value)==null||F.removeEventListener("webglcontextlost",A),(Y=i.value)==null||Y.removeEventListener("webglcontextrestored",T),p==null||p.disconnect(),h==null||h.disconnect(),window.removeEventListener("resize",v),($=window.visualViewport)==null||$.removeEventListener("resize",v),cancelAnimationFrame(S),l(),r.dispose(),d.dispose()});const N=nt(()=>Gr[e.theme]??Gr.none),W=nt(()=>({background:N.value.bg}));return(F,Y)=>(Je(),mt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:Fn(W.value),tabindex:"0",onKeydown:y},[Le("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:ks(I,["prevent"]),onMousedown:x,onMousemove:q,onMouseleave:Z,onTouchstartPassive:k,onTouchmove:X,onTouchend:j,onTouchcancel:j},null,544)],36))}}),$h=li(gw,[["__scopeId","data-v-f2099684"]]),vw=["disabled"],_w=ai({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100},magnify:{type:Boolean,default:!1}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=be(null),o=be(null),a=be(""),l=be([]),c=be(-1);let u="";function f(A){A.trim()&&(l.value.length&&l.value[l.value.length-1]===A||(l.value.push(A),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function d(A){if(!i.disabled){if(A.key==="Enter"){A.preventDefault();const T=a.value;T.trim()&&f(T),c.value=-1,a.value="",s("submit",T);return}if(A.key==="ArrowUp"){if(!l.value.length)return;A.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(A.key==="ArrowDown"){if(c.value===-1)return;A.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const m=be(!0);let g=null;function _(){g||(g=setInterval(()=>{m.value=!m.value},530))}function p(){g&&(clearInterval(g),g=null),m.value=!0}const h=nt(()=>{let A;return i.disabled?A=" ":i.busy?A="█":A=m.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${A}`}}),S=nt(()=>[...i.entries,h.value]);function b(){var A;i.disabled||(A=o.value)==null||A.focus()}je(()=>i.busy,(A,T)=>{T&&!A&&!i.disabled&&dn(()=>{var E;return(E=o.value)==null?void 0:E.focus()})});function v(){var A;(A=o.value)==null||A.focus()}return e({focus:v}),Pn(()=>{_(),i.disabled||requestAnimationFrame(()=>{var A;return(A=o.value)==null?void 0:A.focus()})}),Xn(()=>{p()}),(A,T)=>(Je(),mt("div",{ref_key:"wrapEl",ref:r,class:"cathode-terminal-wrap",onClick:b},[Ct(du,{entries:S.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,magnify:n.magnify,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","magnify","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Ht(Le("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":T[0]||(T[0]=E=>a.value=E),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:d},null,40,vw),[[xp,a.value]])],512))}}),qh=li(_w,[["__scopeId","data-v-a2b39934"]]),ju=be(0),pu=28;let mu=10,Xa="cathode.layout",Ya=!1;const tn=be({});function xw(n,e="cathode.layout"){if(!Ya){Ya=!0,Xa=e;try{const t=localStorage.getItem(Xa);if(t){tn.value=JSON.parse(t),Kh();return}}catch{}tn.value={...n},Kh()}}function Kh(){let n=10;for(const e of Object.values(tn.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);mu=n}function er(){localStorage.setItem(Xa,JSON.stringify(tn.value))}function yw(n){Ya=!1,localStorage.removeItem(Xa),tn.value={...n},er(),Ya=!0,ju.value++}function mm(n){mu++,tn.value[n]&&(tn.value[n].zIndex=mu)}function Mw(n,e){tn.value[n].visible=e,er()}function Sw(n,e){tn.value[n].minimized=e,e&&(tn.value[n].maximized=!1),er()}function bw(n,e){tn.value[n].maximized=e,e&&(tn.value[n].minimized=!1,mm(n)),er()}function ww(n,e,t){tn.value[n].x=Math.round(e),tn.value[n].y=Math.round(t),er()}function Ew(n,e,t){tn.value[n].w=Math.round(e),tn.value[n].h=Math.round(t),er()}function gm(){return{containers:tn,TITLEBAR_H:pu,load:xw,save:er,reset:yw,bringToFront:mm,setVisible:Mw,setMinimized:Sw,setMaximized:bw,updatePos:ww,updateSize:Ew}}const Tw={class:"ws-toolbar"},Aw={key:0,class:"ws-restore-menu"},Cw={key:0,class:"ws-restore-empty"},Rw=["onClick"],Pw=ai({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:s,setVisible:r}=gm(),o=be(null);pc("cathodeWorkspace",o),pc("cathodeResetTick",ju),Pn(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:h}=o.value,S=e.initialLayout??{};i(S,e.storageKey??"cathode.layout");const b=Object.keys(t.value)[0];b&&a(b)});function a(p){var S;document.querySelectorAll(".cc").forEach(b=>b.classList.remove("cc-focused"));const h=(S=o.value)==null?void 0:S.querySelector(`#cc-${p}`);h&&h.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||s(e.initialLayout)}function c(p){const h=p.target.closest(".cc");h&&(document.querySelectorAll(".cc").forEach(S=>S.classList.remove("cc-focused")),h.classList.add("cc-focused"))}const u=be(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function d(p){r(p,!0),u.value=!1}function m(p){if(!u.value)return;const h=p.target;!h.closest(".ws-restore-menu")&&!h.closest(".ws-btn-restore")&&(u.value=!1)}function g(p){p.key==="Escape"&&(u.value=!1)}Pn(()=>{document.addEventListener("click",m),document.addEventListener("keydown",g)}),Xn(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",g)});function _(p){var h;return((h=e.containerTitles)==null?void 0:h[p])??p}return(p,h)=>(Je(),mt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[gc(p.$slots,"default",{},void 0),gc(p.$slots,"overlay",{},void 0),Le("div",Tw,[n.initialLayout?(Je(),mt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):Kt("",!0),h[1]||(h[1]=Le("div",{class:"ws-sep"},null,-1)),Le("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:h[0]||(h[0]=S=>u.value=!u.value)}," ⊞ Restore Panel ")]),Ct(Ev,{name:"menu"},{default:Fs(()=>[u.value?(Je(),mt("div",Aw,[h[3]||(h[3]=Le("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?Kt("",!0):(Je(),mt("div",Cw," No closed panels ")),(Je(!0),mt(ln,null,Ig(f(),S=>(Je(),mt("div",{key:S,class:"ws-restore-item",onClick:b=>d(S)},[h[2]||(h[2]=Le("span",{class:"ws-restore-icon"},"⊞",-1)),vn(" "+_n(_(S)),1)],8,Rw))),128))])):Kt("",!0)]),_:1})],544))}}),Dw=li(Pw,[["__scopeId","data-v-5838d04b"]]),Lw=["id"],Iw={class:"cc-title"},Uw={key:0,class:"cc-size-badge"},Fw={class:"cc-controls"},Nw=["title"],Ow={class:"cc-body"},Bw=200,kw=80,jh=60,zw=ai({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:s,setMinimized:r,setMaximized:o,updatePos:a,updateSize:l}=gm(),c=zi("cathodeWorkspace",be(null)),u=nt(()=>t.value[e.id]),f=nt(()=>{const F=u.value,Y=e.curvature??0;if(!F)return{};const $={"--curvature":Math.abs(Y)};return F.maximized?{...$,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:F.zIndex}:{...$,left:F.x+"px",top:F.y+"px",width:F.w+"px",height:F.minimized?pu+"px":F.h+"px",zIndex:F.zIndex,display:F.visible?"flex":"none"}});let d=!1,m=0,g=0;function _(F){var le;if(F.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),d=!0;const Y=(le=c.value)==null?void 0:le.querySelector(`#cc-${e.id}`);if(!Y)return;const $=Y.getBoundingClientRect();m=F.clientX-$.left,g=F.clientY-$.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",h),F.preventDefault()}function p(F){var he;if(!d||!c.value)return;const Y=c.value.getBoundingClientRect(),$=((he=u.value)==null?void 0:he.w)??300;let le=F.clientX-Y.left-m,te=F.clientY-Y.top-g;le=Math.max(jh-$,Math.min(Y.width-jh,le)),te=Math.max(0,Math.min(Y.height-pu,te)),a(e.id,le,te)}function h(){d=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h)}let S=!1,b=0,v=0,A=0,T=0;const E=be("");function I(F){u.value.maximized||(i(e.id),S=!0,b=F.clientX,v=F.clientY,A=u.value.w,T=u.value.h,document.addEventListener("mousemove",x),document.addEventListener("mouseup",y),F.preventDefault(),F.stopPropagation())}function x(F){if(!S)return;const Y=Math.max(Bw,A+(F.clientX-b)),$=Math.max(kw,T+(F.clientY-v));l(e.id,Y,$),E.value=`${Math.round(Y)}×${Math.round($)}`}function y(){S=!1,E.value="",document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",y),D.value++}const D=be(0);je(ju,()=>{D.value++}),Xn(()=>{var F;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",y),(F=U.value)==null||F.removeEventListener("scroll",X),j()});const U=be(null);function k(F){if(e.canvas)return[];const Y=F.children[0];return Y?Array.from(Y.children):[]}function X(){const F=U.value,Y=e.curvature??0;if(!F)return;const $=k(F);if(!$.length)return;const le=F.clientHeight,te=le/2,he=Y*.0038;$.forEach(ge=>{if(!ge.dataset.origFs){const de=getComputedStyle(ge);ge.dataset.origFs=de.fontSize,ge.dataset.origLh=de.lineHeight}if(Y===0){ge.style.fontSize="",ge.style.lineHeight="";return}const ve=ge.getBoundingClientRect(),Te=F.getBoundingClientRect(),Ie=ve.top-Te.top+ve.height/2,ze=Math.min(1,Math.abs(Ie-te)/(le/2)),ye=1+he*Math.cos(ze*Math.PI/2),P=parseFloat(ge.dataset.origFs),B=ge.dataset.origLh,C=B==="normal"?P*1.4:parseFloat(B);isNaN(P)||(ge.style.fontSize=`${(P*ye).toFixed(2)}px`),isNaN(C)||(ge.style.lineHeight=`${(C*ye).toFixed(2)}px`)})}function j(){const F=U.value;F&&k(F).forEach(Y=>{Y.style.fontSize="",Y.style.lineHeight="",delete Y.dataset.origFs,delete Y.dataset.origLh})}je(()=>e.curvature,F=>{(F??0)===0?j():X()}),Pn(()=>{var F;(F=U.value)==null||F.addEventListener("scroll",X,{passive:!0}),dn(X)});function q(){r(e.id,!u.value.minimized),dn(()=>{D.value++})}function Z(){o(e.id,!u.value.maximized),dn(()=>{D.value++})}function N(){s(e.id,!1)}function W(){i(e.id)}return(F,Y)=>u.value&&u.value.visible?(Je(),mt("div",{key:0,id:`cc-${n.id}`,class:qt(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:Fn(f.value),onMousedown:W},[Le("div",{class:"cc-titlebar",onMousedown:_},[Y[0]||(Y[0]=Le("span",{class:"cc-status-dot"},null,-1)),Le("span",Iw,_n(n.title),1),E.value?(Je(),mt("span",Uw,_n(E.value),1)):Kt("",!0),Le("div",Fw,[Le("button",{class:"cc-btn",title:"Minimize",onClick:ks(q,["stop"])},"─"),Le("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:ks(Z,["stop"])},_n(u.value.maximized?"⤡":"⤢"),9,Nw),Le("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:ks(N,["stop"])},"✕")])],32),Ht(Le("div",Ow,[Le("div",{ref_key:"bodyEl",ref:U,class:"cc-screen",onScroll:X},[gc(F.$slots,"default",{resizeKey:D.value},void 0),Y[1]||(Y[1]=Le("div",{class:"cc-shine"},null,-1))],544)],512),[[cs,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(Je(),mt("div",{key:0,class:"cc-resize",onMousedown:ks(I,["stop"])},null,32)):Kt("",!0)],46,Lw)):Kt("",!0)}}),da=li(zw,[["__scopeId","data-v-ca0af4ca"]]),Hw=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Vw=`
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
`,Gw=100,Ww=ai({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=be(null),s=be(null);let r=null,o=!1;function a(){if(r){try{r.forceContextLoss()}catch{}try{r.dispose()}catch{}r=null}}let l,c,u,f,d,m=null,g=0;function _(T){T-g>=Gw&&(S(),g=T),m=requestAnimationFrame(_)}function p(){if(!i.value||!d)return;const T=i.value.clientWidth,E=i.value.clientHeight;T<=0||E<=0||d.width===T&&d.height===E||(d.width=T,d.height=E,r&&r.setSize(T,E,!1),s.value&&(s.value.width=T,s.value.height=E,s.value.style.width=T+"px",s.value.style.height=E+"px"))}function h(){if(!(d!=null&&d.width))return;const T=d.getContext("2d");if(!T)return;const E=d.width,I=d.height,x=t[e.theme]??t.none;T.clearRect(0,0,E,I),T.fillStyle=x.bg,T.fillRect(0,0,E,I);const y=Date.now(),D=(y/500|0)%2===0,U=(y/400|0)%4;T.font=`bold ${Math.max(14,Math.min(E,I)*.06)}px monospace`,T.textAlign="center",T.textBaseline="middle",T.fillStyle=x.text,e.glow&&(T.shadowColor=x.text,T.shadowBlur=14);const k=".".repeat(U).padEnd(3," "),X=`${e.label}${k}`;if(T.fillText(X,E/2,I/2),T.shadowBlur=0,D){const j=T.measureText(X),q=T.measureText("M").width,Z=parseFloat(T.font),N=E/2+j.width/2+4,W=I/2-Z/2+2;T.fillStyle=x.cursor,e.glow&&(T.shadowColor=x.cursor,T.shadowBlur=12),T.fillRect(N,W,q*.7,Z*.95),T.shadowBlur=0}}function S(){if(!d)return;if(h(),o){if(!s.value)return;const E=s.value.getContext("2d");E&&E.drawImage(d,0,0);return}if(!r||!u||!f)return;const T=e.theme==="paper";u.uniforms.uStrength.value=qs(e.curvature),u.uniforms.uScanlines.value=e.scanlines&&!T?1:0,u.uniforms.uVignette.value=T?0:1,f.needsUpdate=!0,r.render(l,c)}function b(){if(!(!s.value||!i.value)){d=document.createElement("canvas");try{r=new Js({canvas:s.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!r.getContext()&&(r.dispose(),r=null,o=!0),o){p();return}r.setPixelRatio(1),r.setClearColor(0,0),l=new Qs,c=new Zs(-1,1,1,-1,0,1),f=new _s(d),f.minFilter=Zt,f.magFilter=Zt,u=new Wn({uniforms:{uTex:{value:f},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:Hw,fragmentShader:Vw,transparent:!0}),l.add(new Bt(new en(2,2),u)),p()}}let v=null;Pn(()=>{b(),S(),m=requestAnimationFrame(_),i.value&&(v=new ResizeObserver(()=>p()),v.observe(i.value))}),Xn(()=>{m!==null&&cancelAnimationFrame(m),v==null||v.disconnect(),a(),f==null||f.dispose(),u==null||u.dispose()}),je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>S());const A=nt(()=>({background:(t[e.theme]??t.none).bg}));return(T,E)=>(Je(),mt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:Fn(A.value)},[Le("canvas",{ref_key:"canvasEl",ref:s,class:"cathode-loader-canvas"},null,512)],4))}}),Di=li(Ww,[["__scopeId","data-v-d00e5f47"]]),vm=22,_m=6;function Zu(n){const e=Math.max(1,Math.floor(n.width/n.minCellW)),t=Math.floor(n.width/e),i=Math.round(t*n.cellAspect),s=vm+i+_m;return{rects:Array.from({length:n.count},(o,a)=>({x:a%e*t,y:Math.floor(a/e)*s-n.scrollY,w:t,h:s})),rowH:s,totalH:Math.ceil(n.count/e)*s,cols:e}}function gu(n,e,t){return e<0?-1:n.findIndex(i=>e>=i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h)}const xm=(n,e)=>Math.max(0,n-e);function Xw(n,e,t,i,s){const r=t.candles[t.candles.length-1],o=`${i}x${s}@${e.dpr}|${t.candles.length}|${r?r.start+":"+r.close:0}|${e.theme}|${e.glow}|${e.showVolume}|${e.slotW}`,a=n.get(t.id);if(a&&a.key===o)return a.canvas;const l=(a==null?void 0:a.canvas)??document.createElement("canvas");l.width=Math.round(i*e.dpr),l.height=Math.round(s*e.dpr);const c=Math.max(1.5,Math.min(e.slotW,i/Math.max(1,t.candles.length))),u=i<260&&t.overlays?t.overlays.map(f=>({...f,label:""})):t.overlays;return hm(l,{candles:t.candles,slotW:c,scrollX:Math.max(0,t.candles.length*c-i),theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:null,overlays:u,compact:!0,colors:e.colors,dpr:e.dpr}),n.set(t.id,{canvas:l,key:o}),l}function ym(n,e,t){if(!n.width)return;const i=n.getContext("2d");if(!i)return;const s=e.dpr,r={...Gr[e.theme]??Gr.none,...e.colors??{}};i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,n.width,n.height),r.bg&&r.bg!=="rgba(0,0,0,0)"&&(i.fillStyle=r.bg,i.fillRect(0,0,n.width,n.height)),i.setTransform(s,0,0,s,0,0);const{rects:o}=Zu({count:e.cells.length,width:n.width/s,minCellW:e.minCellW,cellAspect:e.cellAspect,scrollY:e.scrollY}),a=vm,l=_m;i.font="600 11px ui-monospace, SFMono-Regular, monospace",i.textBaseline="middle";for(let c=0;c<e.cells.length;c++){const u=e.cells[c],f=o[c];if(f.y+f.h<0||f.y>n.height/s)continue;const d=f.x+l/2,m=f.w-l;i.strokeStyle=u.open?r.candleBull:r.gridline,i.lineWidth=c===e.hoveredCell?2:1,i.strokeRect(d+.5,f.y+.5,m-1,f.h-l-1),i.save(),i.beginPath(),i.rect(d,f.y,m,a),i.clip();const g=f.y+a/2+1,_=u.note?i.measureText(u.note).width+(u.open?22:12):u.open?16:0,p=u.badge?i.measureText(u.badge).width+6:0,h=m-14-p-_;let S=u.title;if(i.measureText(S).width>h){for(;S.length>1&&i.measureText(S+"…").width>h;)S=S.slice(0,-1);S+="…"}let b=d+7;i.fillStyle=r.text,i.textAlign="left",i.fillText(S,b,g),b+=i.measureText(S).width+6,u.badge&&(i.fillStyle=r.accent,i.fillText(u.badge,b,g)),u.note&&(i.textAlign="right",i.fillStyle=u.noteColor||r.accent,i.fillText(u.note,d+m-(u.open?16:7),g),i.textAlign="left"),i.restore(),u.open&&(i.fillStyle=r.candleBull,i.beginPath(),i.arc(d+m-9,f.y+a/2+1,3,0,Math.PI*2),i.fill());const v=f.y+a,A=f.h-a-l;u.candles.length?i.drawImage(Xw(t,e,u,m-2,A-1),d+1,v,m-2,A-1):(i.fillStyle=r.accent,i.textAlign="center",i.fillText("· · ·",d+m/2,v+A/2),i.textAlign="left")}}const Yw=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,$w=ai({__name:"CathodeCandleGrid",props:{cells:{},theme:{default:"none"},curvature:{default:0},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},showVolume:{type:Boolean,default:!0},volumeFraction:{default:.22},slotW:{default:3},colors:{},bendField:{type:Boolean,default:!0},minCellW:{default:210},cellAspect:{default:.6}},emits:["cell-click"],setup(n,{emit:e}){const t=n,i=e,s=be(null),r=be(null),o=be(-1),a=be(0),l={...jt};let c=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),u=null,f=!1;function d(){if(u){try{u.forceContextLoss()}catch{}try{u.dispose()}catch{}u=null}}let m,g,_,p,h;const S=be(0),b=be(0),v=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${im}

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

  ${sm}

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

    ${rm}

    gl_FragColor = color;
  }
`;function A(){if(!(!r.value||!s.value)){h=document.createElement("canvas");try{u=new Js({canvas:r.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{f=!0}if(!f&&!u.getContext()&&(u.dispose(),u=null,f=!0),f){T();return}u.setPixelRatio(c),u.setClearColor(0,0),m=new Qs,g=new Zs(-1,1,1,-1,0,1),p=new _s(h),p.minFilter=Zt,p.magFilter=Zt,_=new Wn({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...om()},vertexShader:Yw,fragmentShader:v,transparent:!0}),m.add(new Bt(new en(2,2),_)),T()}}function T(){if(!s.value||!u&&!f)return;const N=s.value.clientWidth,W=s.value.clientHeight;if(!N||!W)return;S.value=N,b.value=W,c=Math.min(window.devicePixelRatio||1,2);const F=t.bendField?Math.round(N*tm(t.curvature)):N,Y=Math.round(F*c),$=Math.round(W*c),le=h.width!==Y||h.height!==$;h.width=Y,h.height=$,u?(le&&p&&(p.dispose(),p=new _s(h),p.minFilter=Zt,p.magFilter=Zt,_.uniforms.uTex.value=p),u.setPixelRatio(c),u.setSize(N,W)):r.value&&(r.value.width=Math.round(N*c),r.value.height=Math.round(W*c),r.value.style.width=N+"px",r.value.style.height=W+"px"),y()}function E(){return Zu({count:t.cells.length,width:((h==null?void 0:h.width)||0)/c,minCellW:t.minCellW,cellAspect:t.cellAspect,scrollY:a.value})}const I=()=>xm(E().totalH,((h==null?void 0:h.height)||0)/c),x=new Map;function y(){var N;if(h!=null&&h.width){if(ym(h,{cells:t.cells,theme:t.theme,glow:t.glow,showVolume:t.showVolume,volumeFraction:t.volumeFraction,slotW:t.slotW,colors:t.colors,hoveredCell:o.value,scrollY:a.value,minCellW:t.minCellW,cellAspect:t.cellAspect,dpr:c},x),f){const W=(N=r.value)==null?void 0:N.getContext("2d");W&&r.value&&W.drawImage(h,0,0,h.width,h.height,0,0,r.value.width,r.value.height);return}!u||!_||!p||(_.uniforms.uStrength.value=qs(t.curvature),_.uniforms.uScanlines.value=t.scanlines&&t.theme!=="paper"?1:0,_.uniforms.uVignette.value=t.theme==="paper"?0:1,am(_,t.magnify,l,S.value||h.width,b.value||h.height),p.needsUpdate=!0,u.render(m,g))}}function D(N){if(!r.value)return[-1,-1];const W=r.value.getBoundingClientRect();return em(N.clientX-W.left,N.clientY-W.top,W.width,W.height,qs(t.curvature),((h==null?void 0:h.width)||W.width)/c,((h==null?void 0:h.height)||W.height)/c)}function U(N,W){return gu(E().rects,N,W)}function k(N){const[W,F]=D(N),Y=U(W,F);Y>=0&&i("cell-click",t.cells[Y].id)}function X(N){if(t.magnify&&r.value){const $=ko(N,r.value);l.x=$.x,l.y=$.y}const[W,F]=D(N),Y=U(W,F);Y!==o.value?(o.value=Y,y()):t.magnify&&y(),r.value&&(r.value.style.cursor=Y>=0?"pointer":"default")}function j(){o.value=-1,l.x=jt.x,l.y=jt.y,y()}function q(N){const W=I();W<=0||(N.preventDefault(),a.value=Math.max(0,Math.min(W,a.value+N.deltaY)),y())}let Z=null;return Pn(()=>{A(),Z=new ResizeObserver(()=>T()),s.value&&Z.observe(s.value)}),Xn(()=>{Z==null||Z.disconnect(),d(),x.clear()}),je(()=>[t.curvature,t.bendField],()=>dn(T)),je(()=>[t.cells,t.theme,t.glow,t.scanlines,t.showVolume,t.magnify],()=>{a.value=Math.min(a.value,I()),y()},{deep:!1}),(N,W)=>(Je(),mt("div",{ref_key:"wrapEl",ref:s,class:"cathode-candle-grid-wrap"},[Le("canvas",{ref_key:"canvasEl",ref:r,onClick:k,onMousemove:X,onMouseleave:j,onWheel:q},null,544)],512))}}),qw=li($w,[["__scopeId","data-v-f4e5e064"]]),$a={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",dim:"#a0b8d0",left:"#ff9a9a",right:"#a0e8c0",neutral:"#a0b8d0",warn:"#ffd890",surface:"rgba(255,255,255,0.05)",border:"#2a3a50"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",dim:"#888888",left:"#c0392b",right:"#1a8038",neutral:"#888888",warn:"#a06000",surface:"rgba(0,0,0,0.035)",border:"#dee2e6"},phosphor:{bg:"#060d06",text:"#80ff80",dim:"#3fbf3f",left:"#ff8080",right:"#a0ffa0",neutral:"#3fbf3f",warn:"#ffe66d",surface:"rgba(51,255,51,0.05)",border:"#0a250a"},amber:{bg:"#0a0700",text:"#ffd060",dim:"#b08020",left:"#ff8a5a",right:"#ffe6a0",neutral:"#b08020",warn:"#ff9f40",surface:"rgba(255,176,0,0.06)",border:"#3a2a00"}},Zh=(n,e)=>e==="left"?n.left:e==="right"?n.right:!e||e==="neutral"?n.dim:e,kt="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Rt=12;function rc(n,e,t){const i=[];for(const s of e.split(`
`)){let r="";for(const o of s.split(" ")){const a=r?`${r} ${o}`:o;r&&n.measureText(a).width>t?(i.push(r),r=o):r=a}i.push(r)}return i}function oo(n,e,t,i,s,r){const o=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(e+o,t),n.lineTo(e+i-o,t),n.quadraticCurveTo(e+i,t,e+i,t+o),n.lineTo(e+i,t+s-o),n.quadraticCurveTo(e+i,t+s,e+i-o,t+s),n.lineTo(e+o,t+s),n.quadraticCurveTo(e,t+s,e,t+s-o),n.lineTo(e,t+o),n.quadraticCurveTo(e,t,e+o,t),n.closePath()}function Mm(n,e){var E,I;const t=n.getContext("2d");if(!t)return 0;const i=e.dpr||1,s=n.width/i,r=n.height/i,o={...$a[e.theme]??$a.none,...e.colors??{}};t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,s,r);const a=x=>x>0?o.right:x<0?o.left:o.neutral,l=a(e.value),c=(x,y=10)=>{e.glow&&(t.shadowColor=x,t.shadowBlur=y)},u=()=>{t.shadowBlur=0,t.shadowColor="transparent"},f=Math.max(40,s-Rt*2);let d=Rt;t.textBaseline="alphabetic",t.textAlign="left";const m=e.readout??`${e.value>0?"+":""}${e.value}`;t.font=`800 34px ${kt}`;const g=t.measureText(m).width;t.fillStyle=l,c(l,14),t.fillText(m,Rt,d+30),u();const _=Rt+g+14;e.stance&&(t.font=`700 14px ${kt}`,t.fillStyle=l,c(l,8),t.fillText(e.stance.toUpperCase(),_,d+15),u()),e.sub&&(t.font=`11px ${kt}`,t.fillStyle=o.dim,t.fillText(e.sub,_,d+31)),d+=48,t.font=`700 9px ${kt}`;const p=e.leftLabel.toUpperCase(),h=e.rightLabel.toUpperCase(),S=t.measureText(p).width,b=t.measureText(h).width,v=Rt+S+8,A=s-Rt-b-8,T=d+10;if(t.fillStyle=o.left,t.fillText(p,Rt,T+3),t.fillStyle=o.right,t.textAlign="right",t.fillText(h,s-Rt,T+3),t.textAlign="left",A-v>24){const x=t.createLinearGradient(v,0,A,0);x.addColorStop(0,o.left),x.addColorStop(.45,o.surface),x.addColorStop(.55,o.surface),x.addColorStop(1,o.right),oo(t,v,T-4,A-v,8,4),t.save(),t.globalAlpha=.5,t.fillStyle=x,t.fill(),t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke();const y=(v+A)/2;t.strokeStyle=o.border,t.beginPath(),t.moveTo(y,T-8),t.lineTo(y,T+8),t.stroke();for(const j of[.25,.75]){const q=v+j*(A-v);t.beginPath(),t.moveTo(q,T-5),t.lineTo(q,T+5),t.stroke()}const D=e.max-e.min||1,U=Math.max(0,Math.min(1,(e.shown-e.min)/D)),k=v+U*(A-v),X=a(e.shown);t.beginPath(),t.moveTo(k,T-10),t.lineTo(k-4.5,T-17),t.lineTo(k+4.5,T-17),t.closePath(),t.fillStyle=X,t.fill(),t.beginPath(),t.arc(k,T,6.5,0,Math.PI*2),t.fillStyle=X,c(X,12),t.fill(),u(),t.strokeStyle=o.bg==="rgba(0,0,0,0)"?o.border:o.bg,t.lineWidth=2,t.stroke();for(const j of e.marks??[]){const q=(j.value-e.min)/D;if(q<0||q>1)continue;const Z=v+q*(A-v),N=Zh(o,j.color);if(t.save(),t.setLineDash([2,2]),t.strokeStyle=N,t.lineWidth=1,t.beginPath(),t.moveTo(Z,T-9),t.lineTo(Z,T+9),t.stroke(),t.restore(),j.label){t.font=`700 8px ${kt}`,t.fillStyle=N;const W=t.measureText(j.label).width;t.fillText(j.label,Math.max(v,Math.min(A-W,Z-W/2)),T+20)}}}if(d+=(E=e.marks)!=null&&E.some(x=>x.label)?42:30,e.meter){const x=e.meter,y=x.min??0,D=x.max??1,U=D-y||1,k=x.tone==="up"?o.right:x.tone==="down"?o.left:x.tone==="warn"?o.warn:o.neutral;x.label&&(t.font=`700 9px ${kt}`,t.fillStyle=o.dim,t.fillText(x.label.toUpperCase(),Rt,d+9)),x.hint&&(t.font=`9px ${kt}`,t.fillStyle=o.dim,t.textAlign="right",t.fillText(x.hint,s-Rt,d+9),t.textAlign="left"),(x.label||x.hint)&&(d+=15),t.font=`700 12px ${kt}`;const X=x.valueText??(x.value==null?"—":String(x.value)),j=t.measureText(X).width,q=Rt,Z=s-Rt-j-10,N=d+6,W=!!((I=x.thresholds)!=null&&I.some(F=>F.label));if(Z-q>24){if(oo(t,q,N-5,Z-q,10,5),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),x.value!=null){const F=Math.max(0,Math.min(1,(x.value-y)/U));F>0&&(t.save(),oo(t,q,N-5,Z-q,10,5),t.clip(),t.globalAlpha=.7,t.fillStyle=k,c(k,8),t.fillRect(q,N-5,(Z-q)*F,10),t.restore())}for(const F of x.thresholds??[]){const Y=(F.value-y)/U;if(Y<0||Y>1)continue;const $=q+Y*(Z-q),le=Zh(o,F.color);if(t.strokeStyle=le,t.lineWidth=1,t.beginPath(),t.moveTo($,N-7),t.lineTo($,N+7),t.stroke(),F.label){t.font=`700 7.5px ${kt}`,t.fillStyle=le;const te=t.measureText(F.label).width;t.fillText(F.label,Math.max(q,Math.min(Z-te,$-te/2)),N+17)}}}t.font=`700 12px ${kt}`,t.fillStyle=k,t.textAlign="right",c(k,8),t.fillText(X,s-Rt,N+4),u(),t.textAlign="left",d+=W?32:22}if(e.caption){t.font=`600 11.5px ${kt}`;const x=rc(t,e.caption,f-18),y=x.length*15+12;oo(t,Rt,d,f,y,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=e.value<0?o.left:o.border,t.lineWidth=1,t.stroke(),t.fillStyle=e.value<0?o.left:e.value>0?o.text:o.dim,x.forEach((D,U)=>t.fillText(D,Rt+9,d+17+U*15)),d+=y+10}if(e.note){t.font=`10px ${kt}`,t.fillStyle=o.dim;const x=rc(t,e.note,f);x.forEach((y,D)=>t.fillText(y,Rt,d+10+D*14)),d+=x.length*14+10}if(e.items.length){let D=Rt;for(const U of e.items){const k=U.side==="left"?o.left:U.side==="right"?o.right:o.neutral,X=U.side==="left"?e.sideLetters[0]:U.side==="right"?e.sideLetters[1]:"";t.font=`700 10px ${kt}`;const j=t.measureText(U.label).width;t.font=`700 8px ${kt}`;const q=X?t.measureText(X).width+6:0;t.font=`10px ${kt}`;const Z=U.value?t.measureText(U.value).width:0,N=7+j+(X?4+q:0)+(U.value?4+Z:0)+7;D+N>s-Rt&&D>Rt&&(D=Rt,d+=23),oo(t,D,d,N,18,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),t.fillStyle=k,t.fillRect(D,d+1,2,16);let W=D+7;t.font=`700 10px ${kt}`,t.fillStyle=o.text,t.fillText(U.label,W,d+12.5),W+=j+4,X&&(t.font=`700 8px ${kt}`,t.fillStyle=k,t.fillText(X,W+3,d+12),W+=q+4),U.value&&(t.font=`10px ${kt}`,t.fillStyle=U.tone==="up"?o.right:U.tone==="down"?o.left:o.dim,t.fillText(U.value,W,d+12.5)),D+=N+5}d+=18}else if(e.emptyText){t.font=`10px ${kt}`,t.fillStyle=o.dim;const x=rc(t,e.emptyText,f);x.forEach((y,D)=>t.fillText(y,Rt,d+10+D*14)),d+=x.length*14}return d+Rt}const Kw=ai({__name:"CathodeGauge",props:{theme:{default:"none"},curvature:{default:10},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},value:{},min:{default:-1},max:{default:1},readout:{},stance:{},sub:{},leftLabel:{default:"−"},rightLabel:{default:"+"},sideLetters:{default:()=>["−","+"]},marks:{default:()=>[]},meter:{default:null},caption:{},note:{},items:{default:()=>[]},emptyText:{},colors:{},animate:{type:Boolean,default:!0}},setup(n){const e=n,t=be(null),i=be(null),s=()=>(e.min+e.max)/2,r=be(e.animate?s():e.value);let o=0;function a(){if(cancelAnimationFrame(o),!e.animate){r.value=e.value,p();return}const D=()=>{const U=e.value-r.value;if(Math.abs(U)<.004){r.value=e.value,p();return}r.value+=U*.18,p(),o=requestAnimationFrame(D)};o=requestAnimationFrame(D)}je(()=>e.value,a);let l=null,c=!1;function u(){if(l){try{l.forceContextLoss()}catch{}try{l.dispose()}catch{}l=null}}let f,d;const m=new Zi({paint:(D,{dpr:U,glow:k})=>Mm(D,{dpr:U,theme:e.theme,colors:e.colors,glow:k,shown:r.value,value:e.value,min:e.min,max:e.max,readout:e.readout,stance:e.stance,sub:e.sub,leftLabel:e.leftLabel,rightLabel:e.rightLabel,sideLetters:e.sideLetters,marks:e.marks,meter:e.meter,caption:e.caption,note:e.note,items:e.items,emptyText:e.emptyText})});function g(){if(!(!i.value||!t.value)){try{l=new Js({canvas:i.value,antialias:!1,alpha:!0})}catch{c=!0}if(!c&&!l.getContext()&&(l.dispose(),l=null,c=!0),c){_();return}l.setPixelRatio(1),l.setClearColor(0,0),f=new Qs,d=new Zs(-1,1,1,-1,0,1),f.add(new Bt(new en(2,2),m.material)),_()}}function _(){if(!t.value||!l&&!c)return;const D=t.value.clientWidth,U=t.value.clientHeight;m.resize(D,U)&&(l?(l.setPixelRatio(m.dpr),l.setSize(D,U)):i.value&&(i.value.width=m.canvas.width,i.value.height=m.canvas.height,i.value.style.width=D+"px",i.value.style.height=U+"px"),p())}function p(){if(!m.canvas.width)return;if(c){if(!i.value)return;m.paintOnly(!1);const U=i.value.getContext("2d");U&&(U.setTransform(1,0,0,1,0,0),U.clearRect(0,0,i.value.width,i.value.height),U.drawImage(m.canvas,0,0));return}if(!l)return;const D=e.theme==="paper";m.setLook({curvature:e.curvature,scanlines:e.scanlines&&!D,vignette:!D,magnify:e.magnify}),m.syncUniforms(),m.paint(e.glow),l.render(f,d)}je(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.readout,e.stance,e.sub,e.leftLabel,e.rightLabel,e.sideLetters,e.marks,e.meter,e.caption,e.note,e.items,e.emptyText,e.colors,e.min,e.max],()=>p(),{deep:!0}),je(()=>e.magnify,D=>{D||m.setLens(null),p()});function h(D){!e.magnify||!i.value||(m.setLens(ko(D,i.value)),p())}function S(){m.setLens(null),p()}let b=null,v=null,A=0;const T=zi("cathodeResetTick",be(0));je(T,()=>E());function E(){cancelAnimationFrame(A),A=requestAnimationFrame(_)}function I(D){D.preventDefault()}function x(){l==null||l.dispose(),l=null,c=!1,g(),p()}Pn(()=>{dn(()=>{var D;g(),i.value&&(i.value.addEventListener("webglcontextlost",I),i.value.addEventListener("webglcontextrestored",x)),t.value&&(b=new ResizeObserver(()=>_()),b.observe(t.value),v=new IntersectionObserver(U=>{U.some(k=>k.isIntersecting)&&E()}),v.observe(t.value)),window.addEventListener("resize",E),(D=window.visualViewport)==null||D.addEventListener("resize",E),a()})}),Xn(()=>{var D,U,k;cancelAnimationFrame(o),cancelAnimationFrame(A),(D=i.value)==null||D.removeEventListener("webglcontextlost",I),(U=i.value)==null||U.removeEventListener("webglcontextrestored",x),b==null||b.disconnect(),v==null||v.disconnect(),window.removeEventListener("resize",E),(k=window.visualViewport)==null||k.removeEventListener("resize",E),u(),m.dispose()});const y=nt(()=>({background:($a[e.theme]??$a.none).bg}));return(D,U)=>(Je(),mt("div",{ref_key:"wrapEl",ref:t,class:"cathode-gauge-wrap",style:Fn(y.value)},[Le("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-gauge-canvas",onMousemove:h,onMouseleave:S},null,544)],4))}}),jw=li(Kw,[["__scopeId","data-v-6c2fc3b2"]]),Jh={type:"change"},Ju={type:"start"},Sm={type:"end"},pa=new Vu,Qh=new gi,Zw=Math.cos(70*lu.DEG2RAD),zt=new ee,bn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oc=1e-6;class Jw extends _b{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.enabled=!0,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new yi,this._lastTargetPosition=new ee,this._quat=new yi().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vh,this._sphericalDelta=new Vh,this._scale=1,this._panOffset=new ee,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new ee,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eE.bind(this),this._onPointerDown=Qw.bind(this),this._onPointerUp=tE.bind(this),this._onContextMenu=lE.bind(this),this._onMouseWheel=sE.bind(this),this._onKeyDown=rE.bind(this),this._onTouchStart=oE.bind(this),this._onTouchMove=aE.bind(this),this._onMouseDown=nE.bind(this),this._onMouseMove=iE.bind(this),this._interceptControlDown=cE.bind(this),this._interceptControlUp=uE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jh),this.update(),this.state=Mt.NONE}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),s<-Math.PI?s+=bn:s>Math.PI&&(s-=bn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new ee(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new ee(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pa.origin.copy(this.object.position),pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pa.direction))<Zw?this.object.lookAt(this.target):(Qh.setFromNormalAndCoplanarPoint(this.object.up,this.target),pa.intersectPlane(Qh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oc||this._lastTargetPosition.distanceToSquared(this.target)>oc?(this.dispatchEvent(Jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-bn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Qw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function eE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function tE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sm),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case Pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case Pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ju)}function iE(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(Ju),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sm))}function rE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function oE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Ju)}function aE(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function lE(n){this.enabled!==!1&&n.preventDefault()}function cE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fE={bg:"#0d1520",border:"#2a3a50",text:"#c0d0e0",muted:"#6a7f96",accent:"#40a0f0",hover:"rgba(255,255,255,0.07)",divider:"#1e2a3a"},hE=-40,dE=40,ma=2,Ot=188,Un=26,wn=24,fi=30,bm=24,Li=Un+wn*3+fi+bm,ac="11px system-ui, -apple-system, sans-serif",Dt=22,_r=10;class br{constructor(e,t={}){Oe(this,"mesh");Oe(this,"panel",null);Oe(this,"canvas",document.createElement("canvas"));Oe(this,"texture");Oe(this,"colors");Oe(this,"display",{curvature:0,scanlines:!1,glow:!1,magnify:!1});Oe(this,"hover",null);this.ppu=e,this.colors={...fE,...t};const i=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.round(Ot*i),this.canvas.height=Math.round(Li*i),this.texture=new _s(this.canvas),this.texture.colorSpace=on,this.mesh=new Bt(new en(Ot/e,Li/e),new Lo({map:this.texture,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.mesh.renderOrder=1e6,this.mesh.visible=!1}get isOpen(){return!!this.panel}setColors(e){this.colors={...this.colors,...e},this.panel&&this.draw()}open(e,t,i,s){this.close(),this.panel=e,this.display={...s},this.hover=null;const r=e.content.width,o=e.content.height,a=Math.max(4,Math.min(t,r-Ot-4)),l=Math.max(4,Math.min(i,o-Li-4));this.mesh.position.set((a+Ot/2-r/2)/this.ppu,(o/2-(l+Li/2))/this.ppu,.02),e.group.add(this.mesh),this.mesh.visible=!0,this.draw()}close(){this.panel&&(this.panel.group.remove(this.mesh),this.mesh.visible=!1,this.panel=null,this.hover=null)}update(e){this.display={...e},this.draw()}setHover(e){e!==this.hover&&(this.hover=e,this.draw())}rowAtUV(e,t){const i=e*Ot,r=(1-t)*Li-Un;if(r<0)return null;if(r<wn*3)return["scanlines","glow","magnify"][Math.floor(r/wn)];if(r-wn*3<fi){if(i>=Ot-_r-Dt)return"curve+";if(i>=Ot-_r-Dt-54-Dt&&i<Ot-_r-Dt-54)return"curve-"}return null}static rowCentre(e){switch(e){case"scanlines":return{x:90,y:Un+wn*.5};case"glow":return{x:90,y:Un+wn*1.5};case"magnify":return{x:90,y:Un+wn*2.5};case"curve-":return{x:Ot-_r-Dt-54-Dt/2,y:Un+wn*3+fi/2};case"curve+":return{x:Ot-_r-Dt/2,y:Un+wn*3+fi/2}}}draw(){var c;const e=Math.min(window.devicePixelRatio||1,2),t=this.colors,i=this.canvas.getContext("2d");i.setTransform(e,0,0,e,0,0),i.clearRect(0,0,Ot,Li),i.fillStyle=t.bg,i.fillRect(0,0,Ot,Li),i.strokeStyle=t.border,i.lineWidth=1,i.strokeRect(.5,.5,Ot-1,Li-1),i.textBaseline="middle",i.fillStyle=t.muted,i.font="bold 9px system-ui, -apple-system, sans-serif",i.letterSpacing="1px",i.textAlign="left",i.fillText("DISPLAY",10,Un/2),i.letterSpacing="0px",i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="right",i.fillText(`curve: ${this.display.curvature}`,Ot-10,Un/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,Un-.5),i.lineTo(Ot,Un-.5),i.stroke(),[["scanlines","Scan lines",this.display.scanlines],["glow","Glow",this.display.glow],["magnify","Magnify (hover lens)",this.display.magnify]].forEach(([u,f,d],m)=>{const g=Un+m*wn;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(1,g,Ot-2,wn));const _=10,p=g+(wn-12)/2;i.strokeStyle=d?t.accent:t.muted,i.lineWidth=1.2,i.strokeRect(_+.5,p+.5,11,11),d&&(i.lineWidth=1.8,i.lineCap="round",i.beginPath(),i.moveTo(_+3,p+6.5),i.lineTo(_+5.5,p+9),i.lineTo(_+9.5,p+3.5),i.stroke()),i.fillStyle=t.text,i.font=ac,i.textAlign="left",i.fillText(f,30,g+wn/2)});const r=Un+wn*3;i.strokeStyle=t.divider,i.lineWidth=1,i.beginPath(),i.moveTo(0,r+.5),i.lineTo(Ot,r+.5),i.stroke(),i.fillStyle=t.text,i.font=ac,i.textAlign="left",i.fillText("Bend",10,r+fi/2);const o=(u,f,d)=>{const m=r+(fi-Dt)/2;this.hover===u&&(i.fillStyle=t.hover,i.fillRect(f,m,Dt,Dt)),i.strokeStyle=this.hover===u?t.accent:t.border,i.lineWidth=1,i.strokeRect(f+.5,m+.5,Dt-1,Dt-1),i.strokeStyle=t.text,i.lineWidth=1.6,i.lineCap="round",i.beginPath(),i.moveTo(f+6,m+Dt/2),i.lineTo(f+Dt-6,m+Dt/2),d&&(i.moveTo(f+Dt/2,m+6),i.lineTo(f+Dt/2,m+Dt-6)),i.stroke()},a=Ot-_r-Dt,l=a-54-Dt;o("curve-",l,!1),o("curve+",a,!0),i.fillStyle=t.text,i.font=ac,i.textAlign="center",i.fillText(String(this.display.curvature),l+Dt+27,r+fi/2),i.strokeStyle=t.divider,i.beginPath(),i.moveTo(0,r+fi+.5),i.lineTo(Ot,r+fi+.5),i.stroke(),i.fillStyle=t.muted,i.font="9px system-ui, -apple-system, sans-serif",i.textAlign="left",i.fillText("Cmd+Shift +/−  bends the hovered panel",10,r+fi+bm/2),this.texture.needsUpdate=!0,(c=this.panel)==null||c.invalidate()}dispose(){this.close(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.texture.dispose()}}Oe(br,"width",Ot),Oe(br,"height",Li);const ed={bg:"#08130e",bgFocused:"#0f2a1d",line:"#2f6b4c",lineFocused:"#6ee7a7",text:"#6fae8f",textFocused:"#b6f5d2",box:"#2f6b4c",boxFocused:"#3f8f6b",accent:"#6ee7a7",accentText:"#d5fbe6"},An=26,ga=20,va=18,_a=4,xa=8,Hs=16,td="11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",nd=4,pE={w:240,h:160},mE={w:1600,h:1e3};class gE{constructor(e,t){Oe(this,"id");Oe(this,"content");Oe(this,"group",new uo);Oe(this,"body");Oe(this,"bar");Oe(this,"glow");Oe(this,"_display",{curvature:0,scanlines:!0,glow:!0,magnify:!1});Oe(this,"dirty",!0);Oe(this,"barDirty",!0);Oe(this,"_title");Oe(this,"controls");Oe(this,"resizable");Oe(this,"minSize");Oe(this,"maxSize");Oe(this,"_grip",null);Oe(this,"_minimized",!1);Oe(this,"_maximized",!1);Oe(this,"hoverControl",null);Oe(this,"hoverAction",null);Oe(this,"_actions",[]);Oe(this,"barCanvas",document.createElement("canvas"));Oe(this,"barTexture");var l,c,u,f,d;this.stage=e,this.id=t.id,this._title=t.title??t.id,this.controls=t.controls??[],this._actions=(t.actions??[]).map(m=>({...m})),this.content=t.content,this.resizable=!!t.resizable&&typeof t.content.resize=="function",this.minSize=t.minSize??pE,this.maxSize=t.maxSize??mE,this.glow=t.glow??!0;const i=t.content.surface;if(i.mode!=="world")throw new Error("CathodeStage3D panels need a CathodeSurface created with mode: 'world'");const s=e.pxPerUnit,r=t.content.width/s,o=t.content.height/s,a=An/s;if(this.body=new Bt(new en(r,o),i.material),this.barTexture=new _s(this.barCanvas),this.barTexture.colorSpace=on,this.bar=new Bt(new en(r,a),new Lo({map:this.barTexture,toneMapped:!1})),this.bar.position.y=o/2+a/2,this.group.add(this.body,this.bar),this.body.userData.panel=this,this.bar.userData.panel=this,this.resizable){const m=Hs/s,g=document.createElement("canvas");g.width=g.height=32;const _=g.getContext("2d");_.strokeStyle="#6ee7a7",_.lineWidth=3,_.lineCap="round",_.beginPath();for(const h of[10,18,26])_.moveTo(30,h),_.lineTo(h,30);_.stroke();const p=new _s(g);p.colorSpace=on,this._grip=new Bt(new en(m,m),new Lo({map:p,transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1})),this.group.add(this._grip),this.placeGrip()}t.visible===!1&&(this.group.visible=!1),t.minimized&&(this._minimized=!0,this.body.visible=!1),t.position&&this.group.position.set(...t.position),this.group.rotation.y=t.rotationY??0,t.look&&i.setLook(t.look),this._display={curvature:((l=t.look)==null?void 0:l.curvature)??0,scanlines:((c=t.look)==null?void 0:c.scanlines)??!0,glow:this.glow,magnify:((u=t.look)==null?void 0:u.magnify)??!1},i.resize(t.content.width,t.content.height,window.devicePixelRatio||1),(d=(f=t.content).attach)==null||d.call(f,()=>this.invalidate())}get grip(){return this._grip}get title(){return this._title}setTitle(e){e!==this._title&&(this._title=e,this.invalidateBar())}placeGrip(){if(!this.grip)return;const e=this.stage.pxPerUnit;this.grip.position.set((this.content.width-Hs)/2/e,-(this.content.height-Hs)/2/e,.003),this.grip.visible=!this._minimized}setHoverGrip(e){this.grip&&(this.grip.material.opacity=e?1:.55,this.stage.invalidate())}resize(e,t){if(!this.resizable||(e=Math.round(Math.min(this.maxSize.w,Math.max(this.minSize.w,e))),t=Math.round(Math.min(this.maxSize.h,Math.max(this.minSize.h,t))),e===this.content.width&&t===this.content.height))return!1;this.content.resize(e,t),this.content.surface.resize(e,t,window.devicePixelRatio||1);const i=this.stage.pxPerUnit,s=An/i;return this.body.geometry.dispose(),this.body.geometry=new en(e/i,t/i),this.bar.geometry.dispose(),this.bar.geometry=new en(e/i,s),this.bar.position.y=t/i/2+s/2,this.placeGrip(),this.dirty=!0,this.barDirty=!0,this.stage.invalidate(),!0}get minimized(){return this._minimized}get maximized(){return this._maximized}setMinimized(e){this._minimized!==e&&(this._minimized=e,this.body.visible=!e,this.grip&&(this.grip.visible=!e),this.invalidateBar(),e||this.invalidate())}setMaximized(e){this._maximized!==e&&(this._maximized=e,this.invalidateBar())}setHoverControl(e,t=null){this.hoverControl===e&&this.hoverAction===t||(this.hoverControl=e,this.hoverAction=t,this.invalidateBar())}get actions(){return this._actions.map(e=>({...e}))}setActions(e){e.length===this._actions.length&&e.every((i,s)=>i.id===this._actions[s].id&&i.label===this._actions[s].label&&!!i.active==!!this._actions[s].active)||(this._actions=e.map(i=>({...i})),this.invalidateBar())}controlsLeft(){return this.controls.length?this.content.width-xa-this.controls.length*(ga+_a)+_a:this.content.width-xa}actionRects(){if(!this._actions.length)return[];const e=this.barCanvas.getContext("2d");e.font=td;const t=this._actions.map(r=>Math.ceil(e.measureText(r.label).width)+14),i=t.reduce((r,o)=>r+o,0)+(t.length-1)*nd;let s=this.controlsLeft()-10-i;return this._actions.map((r,o)=>{const a={id:r.id,x:s,y:(An-va)/2-1,w:t[o],h:va};return s+=t[o]+nd,a})}controlRect(e){const t=this.controls.indexOf(e);if(t<0)return null;const i=this.controls.length;return{x:this.content.width-xa-(i-t)*ga-(i-1-t)*_a,y:(An-va)/2-1,w:ga,h:va}}controlAt(e,t){for(const i of this.controls){const s=this.controlRect(i);if(e>=s.x&&e<=s.x+s.w&&t>=s.y&&t<=s.y+s.h)return i}return null}actionAt(e,t){for(const i of this.actionRects())if(e>=i.x&&e<=i.x+i.w&&t>=i.y&&t<=i.y+i.h)return i.id;return null}get visible(){return this.group.visible}setVisible(e){this.group.visible!==e&&(this.group.visible=e,e?this.invalidate():this.stage.invalidate())}invalidate(){this.dirty=!0,this.stage.invalidate()}invalidateBar(){this.barDirty=!0,this.stage.invalidate()}setLook(e){this.content.surface.setLook(e);const t=this._display;e.curvature!==void 0&&(t.curvature=e.curvature),e.scanlines!==void 0&&(t.scanlines=e.scanlines),e.magnify!==void 0&&(t.magnify=e.magnify),this.invalidate()}get display(){return{...this._display}}setDisplay(e){this._display={...this._display,...e};const t=this._display;this.content.surface.setLook({curvature:t.curvature,scanlines:t.scanlines,magnify:t.magnify}),this.glow=t.glow,t.magnify||this.content.surface.setLens(null),this.invalidate()}setPosition(e,t,i){this.group.position.set(e,t,i),this.stage.invalidate()}setRotationY(e){this.group.rotation.y=e,this.stage.invalidate()}paintIfDirty(){if(!this.group.visible)return;const e=this.content.surface;this.dirty&&(e.syncUniforms(),e.paint(this.glow),this.dirty=!1),this.barDirty&&(this.drawBar(),this.barDirty=!1)}drawBar(){const e=Math.min(window.devicePixelRatio||1,2),t=this.content.width,i=An,s=this.barCanvas;(s.width!==Math.round(t*e)||s.height!==Math.round(i*e))&&(s.width=Math.round(t*e),s.height=Math.round(i*e),this.barTexture.dispose(),this.barTexture=new _s(s),this.barTexture.colorSpace=on,this.bar.material.map=this.barTexture,this.bar.material.needsUpdate=!0);const r=s.getContext("2d");r.setTransform(e,0,0,e,0,0);const o=this.stage.focusedId===this.id,a=this.stage.barColors,l=this.stage.barStyle==="cockpit";r.fillStyle=o?a.bgFocused:a.bg,r.fillRect(0,0,t,i),r.fillStyle=o?a.lineFocused:a.line,r.fillRect(0,i-2,t,2),r.textBaseline="middle",r.font="12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";const c=this.actionRects(),u=l?23:10,f=c.length?c[0].x-8-u:this.controls.length?t-10-(xa+this.controls.length*(ga+_a))-(u-10):t-10-u;l?(r.save(),r.fillStyle=a.accent,r.shadowColor=a.accent,r.shadowBlur=4,r.beginPath(),r.arc(12.5,i/2-1,2.5,0,Math.PI*2),r.fill(),r.restore(),r.font="bold 9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",r.letterSpacing="1.26px",r.fillStyle=(o?a.titleFocused:a.title)??(o?a.textFocused:a.text),r.fillText(this._title.toUpperCase(),u,i/2-1,Math.max(20,f)),r.letterSpacing="0px"):(r.fillStyle=o?a.textFocused:a.text,r.fillText(this._title,u,i/2-1,Math.max(20,f))),this.drawActions(r,o,c),this.drawControls(r,o),this.barTexture.needsUpdate=!0}drawActions(e,t,i){const s=this.stage.barColors;e.font=td,e.textAlign="center",e.textBaseline="middle",this._actions.forEach((r,o)=>{const a=i[o];r.active?this.fillAlpha(e,s.accent,.28,a):this.hoverAction===r.id&&this.fillAlpha(e,s.accent,.14,a),e.strokeStyle=r.active?s.accent:t?s.boxFocused:s.box,e.lineWidth=1,e.strokeRect(a.x+.5,a.y+.5,a.w-1,a.h-1),e.fillStyle=r.active?s.accentText:t?s.textFocused:s.text,e.fillText(r.label,a.x+a.w/2,a.y+a.h/2+.5)}),e.textAlign="left"}fillAlpha(e,t,i,s){const r=/^#([0-9a-f]{6})$/i.exec(t);if(r){const o=parseInt(r[1],16);e.fillStyle=`rgba(${o>>16&255},${o>>8&255},${o&255},${i})`,e.fillRect(s.x,s.y,s.w,s.h);return}e.save(),e.globalAlpha=i,e.fillStyle=t,e.fillRect(s.x,s.y,s.w,s.h),e.restore()}drawControls(e,t){const i=this.stage.barColors;for(const s of this.controls){const r=this.controlRect(s);this.hoverControl===s&&this.fillAlpha(e,i.accent,.2,r),e.strokeStyle=t?i.textFocused:i.text,e.lineWidth=1.4;const o=r.x+r.w/2,a=r.y+r.h/2;e.beginPath(),s==="info"?(e.arc(o,a,6,0,Math.PI*2),e.moveTo(o,a-.5),e.lineTo(o,a+3),e.moveTo(o,a-3.2),e.lineTo(o,a-2.6)):s==="close"?(e.moveTo(o-4,a-4),e.lineTo(o+4,a+4),e.moveTo(o+4,a-4),e.lineTo(o-4,a+4)):s==="minimize"?this._minimized?(e.moveTo(o-5,a),e.lineTo(o+5,a),e.moveTo(o,a-5),e.lineTo(o,a+5)):(e.moveTo(o-5,a+3),e.lineTo(o+5,a+3)):this._maximized?(e.rect(o-5,a-2,7,6),e.moveTo(o-2,a-2),e.lineTo(o-2,a-5),e.lineTo(o+5,a-5),e.lineTo(o+5,a+1),e.lineTo(o+2,a+1)):e.rect(o-5,a-4,10,8),e.stroke()}}dispose(){var e,t,i;if(this.body.geometry.dispose(),this.bar.geometry.dispose(),this.bar.material.dispose(),this.barTexture.dispose(),this.grip){this.grip.geometry.dispose();const s=this.grip.material;(e=s.map)==null||e.dispose(),s.dispose()}(i=(t=this.content).dispose)==null||i.call(t)}}class vE{constructor(e){Oe(this,"renderer");Oe(this,"scene",new Qs);Oe(this,"camera");Oe(this,"canvas");Oe(this,"panels",new Map);Oe(this,"pxPerUnit");Oe(this,"focusedId",null);Oe(this,"barColors",{...ed});Oe(this,"barStyle","plain");Oe(this,"controls",null);Oe(this,"ray",new vb);Oe(this,"ndc",new at);Oe(this,"raf",0);Oe(this,"rendering",!1);Oe(this,"raiseCounter",0);Oe(this,"hovered",null);Oe(this,"pressed",null);Oe(this,"dragging",null);Oe(this,"suppressClick",!1);Oe(this,"menu",null);Oe(this,"lensPanel",null);Oe(this,"resizeObserver");Oe(this,"disposers",[]);Oe(this,"lastCursor","");Oe(this,"passThrough");Oe(this,"swallowClick",!1);Oe(this,"pressedControl",null);Oe(this,"resizing",null);Oe(this,"hoverGrip",null);Oe(this,"hoverBar",null);Oe(this,"cancelFly",null);Oe(this,"expandedState",null);this.o=e,this.pxPerUnit=e.pxPerUnit??360,this.passThrough=!!e.passThrough,this.renderer=new Js({antialias:!0,alpha:!!e.transparent}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(e.background??329738,e.transparent?0:1),this.canvas=this.renderer.domElement,this.passThrough||(this.canvas.tabIndex=0),this.canvas.style.cssText="display:block;width:100%;height:100%;outline:none;touch-action:none"+(this.passThrough?";pointer-events:none":""),e.container.appendChild(this.canvas),this.camera=new Vn(e.fov??45,1,e.near??.05,e.far??100);const t=e.cameraPosition??[0,.1,3.4];this.camera.position.set(...t),this.camera.lookAt(0,0,0),e.controls&&(this.controls=e.controls(this.camera,this.canvas),this.controls.addEventListener("change",()=>this.invalidate()));const i=this.passThrough?e.inputTarget??document:this.canvas;this.on(i,"pointerdown",s=>this.onPointerDown(s),{capture:!0}),this.on(i,"pointermove",s=>this.onPointerMove(s)),this.passThrough||this.on(this.canvas,"pointerleave",()=>this.setHover(null)),this.on(window,"pointerup",s=>this.onPointerUp(s)),this.on(window,"pointercancel",s=>this.onPointerUp(s)),this.on(i,"click",s=>this.onClick(s),{capture:this.passThrough}),this.on(i,"wheel",s=>this.onWheel(s),{capture:!0,passive:!1}),this.on(this.passThrough?window:this.canvas,"keydown",s=>this.onKey(s)),e.barColors&&(this.barColors={...ed,...e.barColors}),e.barStyle&&(this.barStyle=e.barStyle),e.displayMenu&&(this.menu=new br(this.pxPerUnit,typeof e.displayMenu=="object"?e.displayMenu.colors:{}),this.on(i,"contextmenu",s=>this.onContextMenu(s),{capture:!0})),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.container),this.resize()}on(e,t,i,s){e.addEventListener(t,i,s),this.disposers.push(()=>e.removeEventListener(t,i,s))}setCameraPose(e){var t,i;this.camera.position.set(...e.position),this.camera.lookAt(...e.target),this.camera.updateMatrixWorld(!0),(i=(t=this.controls)==null?void 0:t.target)==null||i.set(...e.target),this.invalidate()}facingPose(e,t={}){const i=this.panels.get(e);if(!i)return null;i.group.updateWorldMatrix(!0,!0);const s=this.pxPerUnit,r=i.content.height/s,o=An/s,a=i.content.width/s,l=r/2+o,c=i.minimized?r/2:-r/2,u=l-c,f=i.body.localToWorld(new ee(0,(l+c)/2,0)),d=new ee(0,0,1).applyQuaternion(i.group.getWorldQuaternion(new yi)),m=Math.tan(lu.degToRad(this.camera.fov/2)),g=Math.max(u/2/m,a/2/(m*this.camera.aspect))*(1+(t.margin??.12)),_=f.clone().addScaledVector(d,g);return{position:[_.x,_.y,_.z],target:[f.x,f.y,f.z]}}framePose(e,t={}){const i=(e??[...this.panels.keys()]).map(T=>this.panels.get(T)).filter(T=>!!T);if(!i.length)return null;const s=this.pxPerUnit,r=An/s,o=new ee;for(const T of i)T.group.updateWorldMatrix(!0,!0),o.add(new ee(0,0,1).applyQuaternion(T.group.getWorldQuaternion(new yi)));o.normalize(),isFinite(o.x)||o.set(0,0,1);const a=new ee().crossVectors(new ee(0,1,0),o);a.lengthSq()<1e-6&&a.set(1,0,0),a.normalize();const l=new ee().crossVectors(o,a).normalize();let c=1/0,u=-1/0,f=1/0,d=-1/0,m=0,g=0;for(const T of i){const E=T.content.width/s,I=T.content.height/s,x=I/2+r,y=T.minimized?I/2:-I/2;for(const[D,U]of[[-E/2,y],[E/2,y],[-E/2,x],[E/2,x]]){const k=T.body.localToWorld(new ee(D,U,0)),X=k.dot(a),j=k.dot(l);c=Math.min(c,X),u=Math.max(u,X),f=Math.min(f,j),d=Math.max(d,j),m+=k.dot(o),g++}}const _=1+(t.margin??.08),p=(u-c)*_,h=(d-f)*_,S=Math.tan(lu.degToRad(this.camera.fov/2)),b=Math.max(h/2/S,p/2/(S*this.camera.aspect),t.minDistance??0),v=a.clone().multiplyScalar((c+u)/2).addScaledVector(l,(f+d)/2).addScaledVector(o,m/g),A=v.clone().addScaledVector(o,b);return{position:[A.x,A.y,A.z],target:[v.x,v.y,v.z]}}flyTo(e,t=550){var s;if((s=this.cancelFly)==null||s.call(this),t<=0)return this.setCameraPose(e),Promise.resolve();const i=this.getCameraPose();return new Promise(r=>{const o=performance.now();let a=0;this.cancelFly=()=>{cancelAnimationFrame(a),this.cancelFly=null,r()};const l=c=>{const u=Math.min(1,(c-o)/t),f=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,d=(m,g)=>[m[0]+(g[0]-m[0])*f,m[1]+(g[1]-m[1])*f,m[2]+(g[2]-m[2])*f];this.setCameraPose({position:d(i.position,e.position),target:d(i.target,e.target)}),u<1?a=requestAnimationFrame(l):(this.cancelFly=null,r())};a=requestAnimationFrame(l)})}getCameraPose(){const e=this.camera.position,t=this.camera.getWorldDirection(new ee).add(e);return{position:[e.x,e.y,e.z],target:[t.x,t.y,t.z]}}footprint(e){const t=this.pxPerUnit,i=e.content.width/t,s=e.content.height/t,r=An/t,o=s/2+r,a=e.minimized?s/2:-s/2;return{x0:e.group.position.x-i/2,x1:e.group.position.x+i/2,y0:e.group.position.y+a,y1:e.group.position.y+o}}freeSpot(e,t={}){const i=this.pxPerUnit,s=(t.gap??24)/i,r=e.w/i,o=(e.h+An)/i,a=[...this.panels.values()].filter(v=>v.group.visible).map(v=>this.footprint(v)),l=[...this.panels.values()].map(v=>v.group.position.z),c=l.length?l.reduce((v,A)=>v+A,0)/l.length:0,u=(v,A)=>[v+r/2,A-An/i-e.h/i/2,c];if(!a.length)return{position:[0,0,0]};const f=a.reduce((v,A)=>({x0:Math.min(v.x0,A.x0),x1:Math.max(v.x1,A.x1),y0:Math.min(v.y0,A.y0),y1:Math.max(v.y1,A.y1)}),{x0:1/0,x1:-1/0,y0:1/0,y1:-1/0}),d=t.near?this.panels.get(t.near):void 0,m=d?(()=>{const v=this.footprint(d);return{x:(v.x0+v.x1)/2,y:(v.y0+v.y1)/2}})():{x:(f.x0+f.x1)/2,y:(f.y0+f.y1)/2},g=[],_=["right","below","left","above"],p=v=>_.indexOf(t.prefer??"right")===_.indexOf(v)?0:1+(_.indexOf(v)-_.indexOf(t.prefer??"right")+4)%4*.01;for(const v of[...a,f]){const A=[v.x0,(v.x0+v.x1)/2-r/2,v.x1-r],T=[v.y1,(v.y0+v.y1)/2+o/2,v.y0+o];for(const E of T)g.push({x0:v.x1+s,y1:E,rank:p("right")}),g.push({x0:v.x0-s-r,y1:E,rank:p("left")});for(const E of A)g.push({x0:E,y1:v.y0-s,rank:p("below")}),g.push({x0:E,y1:v.y1+s+o,rank:p("above")})}const h=v=>a.every(A=>v.x0+r+s*.999<=A.x0||v.x0>=A.x1+s*.999||v.y1-o-s*.999>=A.y1||v.y1<=A.y0-s*.999);let S=null,b=1/0;for(const v of g){if(!h(v))continue;const A=Math.hypot(v.x0+r/2-m.x,v.y1-o/2-m.y)+v.rank*.01;A<b-1e-9&&(b=A,S=v)}return{position:u(S.x0,S.y1)}}get expandedId(){var e;return((e=this.expandedState)==null?void 0:e.id)??null}expand(e,t={}){var r;const i=this.panels.get(e);if(!i)return Promise.resolve();this.expandedState?(this.expandedState.id!==e&&((r=this.panels.get(this.expandedState.id))==null||r.setMaximized(!1)),this.expandedState.id=e):this.expandedState={id:e,pose:this.getCameraPose()},i.minimized&&this.setPanelMinimized(e,!1),i.setMaximized(!0);const s=this.facingPose(e,{margin:t.margin??.03});return s?this.flyTo(s,t.ms??650):Promise.resolve()}unexpand(e,t={}){var s;const i=this.expandedState;return!i||e!==void 0&&i.id!==e?Promise.resolve():((s=this.panels.get(i.id))==null||s.setMaximized(!1),this.expandedState=null,this.flyTo(i.pose,t.ms??650))}toggleExpand(e,t={}){var i;return((i=this.expandedState)==null?void 0:i.id)===e?this.unexpand(e,t):this.expand(e,t)}addPopup(e,t={}){const i=this.freeSpot({w:e.content.width,h:e.content.height},{near:t.near,gap:t.gap,prefer:t.prefer}),s=this.addPanel({...e,position:i.position,rotationY:0,controls:e.controls??["minimize","maximize","close"]});return this.setFocus(e.id),t.zoom!==!1&&this.expand(e.id,{margin:t.margin,ms:t.ms}),s}closePanel(e,t={}){const i=this.unexpand(e,t);return this.removePanel(e),i}addPanel(e){if(this.panels.has(e.id))throw new Error(`CathodeStage3D: duplicate panel id "${e.id}"`);const t=new gE(this,e);return t.content.surface.setAnisotropy(this.renderer.capabilities.getMaxAnisotropy()),this.panels.set(e.id,t),this.scene.add(t.group),this.raise(t),this.invalidate(),t}removePanel(e){var i,s;const t=this.panels.get(e);t&&(((i=this.expandedState)==null?void 0:i.id)===e&&(this.expandedState=null),this.focusedId===e&&this.setFocus(null),this.hovered===t&&(this.hovered=null),this.pressed===t&&(this.pressed=null),this.lensPanel===t&&(this.lensPanel=null),((s=this.menu)==null?void 0:s.panel)===t&&this.menu.close(),this.scene.remove(t.group),t.dispose(),this.panels.delete(e),this.invalidate())}setPanelVisible(e,t){var s;const i=this.panels.get(e);i&&(i.setVisible(t),t||(this.focusedId===e&&this.setFocus(null),this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null),((s=this.dragging)==null?void 0:s.panel)===i&&(this.dragging=null)),this.invalidate())}setPanelMinimized(e,t){const i=this.panels.get(e);i&&(i.setMinimized(t),t&&(this.hovered===i&&(this.hovered=null),this.pressed===i&&(this.pressed=null)),this.invalidate())}setFocus(e){var s,r;if(this.focusedId===e){e&&this.raise(this.panels.get(e));return}const t=this.focusedId&&this.panels.get(this.focusedId);this.focusedId=e,t&&t.invalidateBar();const i=e?this.panels.get(e):null;i&&(this.raise(i),i.invalidateBar()),(r=(s=this.o).onFocus)==null||r.call(s,e),this.invalidate()}raise(e){e.body.renderOrder=e.bar.renderOrder=++this.raiseCounter,e.grip&&(e.grip.renderOrder=e.body.renderOrder+.5)}getLayout(){const e={};for(const[t,i]of this.panels)e[t]={x:i.group.position.x,y:i.group.position.y,z:i.group.position.z,rotY:i.group.rotation.y,visible:i.visible,minimized:i.minimized,...i.resizable?{size:{w:i.content.width,h:i.content.height}}:{}};return e}applyLayout(e){for(const[t,i]of Object.entries(e)){const s=this.panels.get(t);s&&(s.group.position.set(i.x??s.group.position.x,i.y??s.group.position.y,i.z??s.group.position.z),i.rotY!==void 0&&(s.group.rotation.y=i.rotY),i.visible!==void 0&&this.setPanelVisible(t,i.visible),i.minimized!==void 0&&this.setPanelMinimized(t,i.minimized),i.size&&s.resize(i.size.w,i.size.h))}this.invalidate()}invalidate(){this.raf||this.rendering||(this.raf=requestAnimationFrame(()=>{this.raf=0,this.frame()}))}frame(){var e;this.rendering=!0;for(const t of this.panels.values())t.paintIfDirty();(e=this.controls)==null||e.update(),this.renderer.render(this.scene,this.camera),this.rendering=!1}resize(){const e=this.o.container.clientWidth,t=this.o.container.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate())}setRay(e,t){const i=this.canvas.getBoundingClientRect();this.ndc.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera)}contentAt(e,t,i){this.setRay(t,i);const s=this.ray.intersectObject(e.body)[0];return s!=null&&s.uv?e.content.surface.contentPoint(s.uv.x,s.uv.y):null}hitScaleAt(e,t,i){const s=this.contentAt(e,t-4,i),r=this.contentAt(e,t+4,i);return!s||!r?1:Math.max(1,Math.abs(r.x-s.x)/8)}pick(e,t){this.setRay(e,t);const i=[];for(const m of this.panels.values())m.visible&&(m.minimized||i.push(m.body),i.push(m.bar));const s=this.ray.intersectObjects(i,!1);if(!s.length)return null;const r=s[0].distance;let o=s[0];for(const m of s)m.distance-r<.001&&m.object.renderOrder>o.object.renderOrder&&(o=m);const a=o.object.userData.panel,l=o.object===a.bar?"bar":"body",c=l==="body"&&o.uv?a.content.surface.contentPoint(o.uv.x,o.uv.y):null,u=l==="bar"&&o.uv?a.controlAt(o.uv.x*a.content.width,(1-o.uv.y)*An):null,f=l==="bar"&&o.uv&&!u?a.actionAt(o.uv.x*a.content.width,(1-o.uv.y)*An):null,d=l==="body"&&a.resizable&&!a.minimized&&!!o.uv&&o.uv.x*a.content.width>a.content.width-Hs&&(1-o.uv.y)*a.content.height>a.content.height-Hs;return{panel:a,part:l,content:c,control:u,action:f,handle:d,uv:o.uv?{x:o.uv.x,y:o.uv.y}:null}}clientPointForContent(e,t,i){const s=this.panels.get(e);if(!s)return null;const r=s.content.surface,o=s.content.width,a=s.content.height;let l=t/o,c=1-i/a;const u=(g,_)=>r.contentPoint(g,_);for(let g=0;g<12;g++){const _=u(l,c);if(!_){l=.5+(l-.5)*.8,c=.5+(c-.5)*.8;continue}const p=_.x-t,h=_.y-i;if(Math.hypot(p,h)<.05)break;const S=1e-4,b=u(l+S,c),v=u(l,c+S);if(!b||!v)break;const A=(b.x-_.x)/S,T=(v.x-_.x)/S,E=(b.y-_.y)/S,I=(v.y-_.y)/S,x=A*I-T*E;if(Math.abs(x)<1e-9)break;l-=(I*p-T*h)/x,c-=(-E*p+A*h)/x}const f=u(l,c);if(!f||Math.hypot(f.x-t,f.y-i)>1.5)return null;s.group.updateWorldMatrix(!0,!0);const d=s.body.localToWorld(new ee((l-.5)*(o/this.pxPerUnit),(c-.5)*(a/this.pxPerUnit),0));d.project(this.camera);const m=this.canvas.getBoundingClientRect();return{x:m.left+(d.x+1)/2*m.width,y:m.top+(1-d.y)/2*m.height}}clientPointForHandle(e){const t=this.panels.get(e);if(!t||!t.resizable)return null;t.group.updateWorldMatrix(!0,!0);const i=this.pxPerUnit,s=t.body.localToWorld(new ee((t.content.width/2-Hs/2)/i,-(t.content.height/2-Hs/2)/i,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}clientPointForAction(e,t){const i=this.panels.get(e),s=i==null?void 0:i.actionRects().find(l=>l.id===t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=i.bar.localToWorld(new ee((s.x+s.w/2-i.content.width/2)/r,-(s.y+s.h/2-An/2)/r,0)).project(this.camera),a=this.canvas.getBoundingClientRect();return{x:a.left+(o.x+1)/2*a.width,y:a.top+(1-o.y)/2*a.height}}clientPointForControl(e,t){const i=this.panels.get(e),s=i==null?void 0:i.controlRect(t);if(!i||!s)return null;i.group.updateWorldMatrix(!0,!0);const r=this.pxPerUnit,o=new ee((s.x+s.w/2-i.content.width/2)/r,0,0);o.y=(An/2-(s.y+s.h/2))/r;const a=i.bar.localToWorld(o).project(this.camera),l=this.canvas.getBoundingClientRect();return{x:l.left+(a.x+1)/2*l.width,y:l.top+(1-a.y)/2*l.height}}clientPointForBar(e){const t=this.panels.get(e);if(!t)return null;t.group.updateWorldMatrix(!0,!0);const i=t.bar.getWorldPosition(new ee).project(this.camera),s=this.canvas.getBoundingClientRect();return{x:s.left+(i.x+1)/2*s.width,y:s.top+(1-i.y)/2*s.height}}send(e,t,i,s={}){var a,l;const r=this.contentAt(e,i.clientX,i.clientY),o={kind:t,x:r?r.x:-1,y:r?r.y:-1,hitScale:r?this.hitScaleAt(e,i.clientX,i.clientY):1,clientX:i.clientX,clientY:i.clientY,deltaX:s.deltaX??0,deltaY:s.deltaY??0,detail:t==="click"?i.detail??0:0,shiftKey:!!i.shiftKey};return((l=(a=e.content).pointer)==null?void 0:l.call(a,o))??null}setCursor(e){e!==this.lastCursor&&(this.lastCursor=e,this.o.onCursor?this.o.onCursor(e):this.canvas.style.cursor=e)}setHover(e,t){this.hovered&&this.hovered!==e&&this.send(this.hovered,"leave",t??{clientX:-1,clientY:-1}),this.hovered=e,e||(this.setCursor(""),this.setLens(null))}accepts(e){return!this.passThrough||!this.o.shouldHandle||this.o.shouldHandle(e.target)}onPointerDown(e){var i;if(e.button!==0||!this.accepts(e))return;if((i=this.menu)!=null&&i.isOpen){const s=this.pickMenu(e.clientX,e.clientY);if(s){e.preventDefault(),e.stopPropagation(),this.suppressClick=!0,this.menuAct(s);return}this.menu.close(),this.invalidate()}this.passThrough||this.canvas.focus({preventScroll:!0});const t=this.pick(e.clientX,e.clientY);if(!t){this.passThrough&&this.setFocus(null);return}this.passThrough&&(e.stopPropagation(),this.swallowClick=!0),this.controls&&(this.controls.enabled=!1),this.setFocus(t.panel.id),this.suppressClick=!1,t.part==="bar"&&(t.control||t.action)?(this.pressedControl={panel:t.panel,control:t.control,action:t.action},this.setCursor("pointer")):t.part==="bar"?(this.startDrag(t.panel),this.setCursor("grabbing")):t.handle?(this.startResize(t.panel),this.setCursor("nwse-resize")):(this.pressed=t.panel,this.send(t.panel,"down",e))}onPointerMove(e){var s;if(this.resizing){this.resizeTo(e);return}if(this.dragging){this.dragTo(e);return}if(this.pressed){this.send(this.pressed,"drag",e);return}if(this.pressedControl)return;if(!this.accepts(e)){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null);return}if((s=this.menu)!=null&&s.isOpen){const r=this.pickMenu(e.clientX,e.clientY);if(this.menu.setHover(r),r){this.setHover(null,e),this.setHoverBar(null,null),this.setHoverGrip(null),this.setLens(null),this.setCursor("pointer");return}}const t=this.pick(e.clientX,e.clientY);if(this.setLens(t&&t.part==="body"&&!t.handle?t:null),this.setHoverGrip(t!=null&&t.handle?t.panel:null),this.setHover(t&&t.part==="body"&&!t.handle?t.panel:null,e),this.setHoverBar(t&&t.part==="bar"?t.panel:null,(t==null?void 0:t.control)??null,(t==null?void 0:t.action)??null),!t){this.setCursor("");return}if(t.part==="bar"){this.setCursor(t.control||t.action?"pointer":"grab");return}if(t.handle){this.setCursor("nwse-resize");return}const i=this.send(t.panel,"move",e);i&&this.setCursor(i)}setHoverBar(e,t,i=null){this.hoverBar&&this.hoverBar!==e&&this.hoverBar.setHoverControl(null,null),this.hoverBar=e,e==null||e.setHoverControl(t,i)}setHoverGrip(e){this.hoverGrip&&this.hoverGrip!==e&&this.hoverGrip.setHoverGrip(!1),this.hoverGrip=e,e==null||e.setHoverGrip(!0)}onPointerUp(e){var t,i,s,r;if(this.pressedControl=null,this.resizing){const o=this.resizing;if(this.resizing=null,o.moved){this.suppressClick=!0;const a=o.panel.group.position;(i=(t=this.o).onPanelResized)==null||i.call(t,o.panel.id,{w:o.panel.content.width,h:o.panel.content.height},{x:a.x,y:a.y,z:a.z})}this.setCursor("")}if(this.dragging){this.dragging.moved&&(this.suppressClick=!0);const o=this.dragging.panel;this.dragging=null,this.setCursor(""),(r=(s=this.o).onPanelMoved)==null||r.call(s,o.id,{x:o.group.position.x,y:o.group.position.y,z:o.group.position.z})}this.pressed&&(this.send(this.pressed,"up",e),this.pressed=null),this.controls&&(this.controls.enabled=!0)}onClick(e){var i,s,r,o,a,l;if(!this.accepts(e))return;if(this.passThrough&&this.swallowClick&&(this.swallowClick=!1,e.stopPropagation()),this.suppressClick){this.suppressClick=!1;return}const t=this.pick(e.clientX,e.clientY);t&&this.passThrough&&e.stopPropagation(),t&&t.part==="body"&&this.send(t.panel,"click",e),t&&t.part==="bar"&&(t.control?(s=(i=this.o).onPanelControl)==null||s.call(i,t.panel.id,t.control):t.action?(o=(r=this.o).onPanelAction)==null||o.call(r,t.panel.id,t.action):e.detail>=2&&((l=(a=this.o).onPanelActivate)==null||l.call(a,t.panel.id)))}onWheel(e){if(!this.accepts(e))return;const t=this.pick(e.clientX,e.clientY);!t||t.part!=="body"||(e.preventDefault(),e.stopImmediatePropagation(),this.send(t.panel,"wheel",e,{deltaX:e.deltaX,deltaY:e.deltaY}))}onKey(e){if(this.passThrough){const i=e.target;if(i&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName)))return}if(this.menu){if(e.key==="Escape"&&this.menu.isOpen){this.menu.close(),this.invalidate();return}if(e.metaKey&&e.shiftKey&&/^[=+\-_]$/.test(e.key)){const i=this.menu.panel??this.hovered;if(i){e.preventDefault(),this.stepBend(i,e.key==="="||e.key==="+"?ma:-ma);return}}}const t=this.focusedId?this.panels.get(this.focusedId):null;t!=null&&t.content.key&&(t.content.key(e),t.invalidate())}onContextMenu(e){if(!this.menu)return;if(!this.accepts(e)){this.menu.close(),this.invalidate();return}if(this.dragging||this.resizing)return;const t=this.pick(e.clientX,e.clientY);if(!t){this.menu.isOpen&&(this.menu.close(),this.invalidate());return}e.preventDefault(),e.stopPropagation(),this.setFocus(t.panel.id);const i=t.panel.content.width,s=t.panel.content.height,r=t.part==="body"&&t.uv||t.uv?t.uv.x*i:0,o=t.part==="body"&&t.uv?(1-t.uv.y)*s:0;this.menu.open(t.panel,r,o,t.panel.display),this.invalidate()}openDisplayMenu(e,t=8,i=8){const s=this.panels.get(e);!this.menu||!s||(this.menu.open(s,t,i,s.display),this.invalidate())}setMenuColors(e){var t;(t=this.menu)==null||t.setColors(e),this.invalidate()}setBarColors(e){this.barColors={...this.barColors,...e};for(const t of this.panels.values())t.invalidateBar();this.invalidate()}setBarStyle(e){if(this.barStyle!==e){this.barStyle=e;for(const t of this.panels.values())t.invalidateBar();this.invalidate()}}closeDisplayMenu(){var e;(e=this.menu)!=null&&e.isOpen&&(this.menu.close(),this.invalidate())}get displayMenuPanel(){var e;return((e=this.menu)==null?void 0:e.panel)??null}pickMenu(e,t){var s;if(!((s=this.menu)!=null&&s.isOpen))return null;this.setRay(e,t);const i=this.ray.intersectObject(this.menu.mesh,!1)[0];return i!=null&&i.uv?this.menu.rowAtUV(i.uv.x,i.uv.y):null}clientPointForMenuRow(e){var o;if(!((o=this.menu)!=null&&o.isOpen))return null;const{x:t,y:i}=br.rowCentre(e);this.menu.mesh.updateWorldMatrix(!0,!1);const s=this.menu.mesh.localToWorld(new ee((t-br.width/2)/this.pxPerUnit,(br.height/2-i)/this.pxPerUnit,0)).project(this.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(s.x+1)/2*r.width,y:r.top+(1-s.y)/2*r.height}}menuAct(e){var s;const t=(s=this.menu)==null?void 0:s.panel;if(!t)return;const i=t.display;if(e==="curve-"||e==="curve+"){this.stepBend(t,e==="curve+"?ma:-ma);return}this.applyDisplay(t,{[e]:!i[e]})}stepBend(e,t){this.applyDisplay(e,{curvature:Math.max(hE,Math.min(dE,e.display.curvature+t))})}applyDisplay(e,t){var i,s,r;e.setDisplay(t),((i=this.menu)==null?void 0:i.panel)===e&&this.menu.update(e.display),(r=(s=this.o).onPanelDisplay)==null||r.call(s,e.id,e.display),this.invalidate()}setLens(e){const t=e&&e.uv&&e.panel.display.magnify?e.panel:null;this.lensPanel&&this.lensPanel!==t&&(this.lensPanel.content.surface.setLens(null),this.lensPanel.invalidate()),this.lensPanel=t,t&&e.uv&&(t.content.surface.setLens({x:e.uv.x,y:e.uv.y}),t.invalidate())}startResize(e){var c;(c=this.menu)==null||c.close(),e.group.updateWorldMatrix(!0,!0);const t=e.group.getWorldQuaternion(new yi),i=new ee(1,0,0).applyQuaternion(t),s=new ee(0,1,0).applyQuaternion(t),r=new ee(0,0,1).applyQuaternion(t),o=this.pxPerUnit,a=e.body.localToWorld(new ee(-e.content.width/o/2,e.content.height/o/2,0)),l=new gi().setFromNormalAndCoplanarPoint(r,a);this.resizing={panel:e,tl:a,right:i,up:s,plane:l,moved:!1}}resizeTo(e){const t=this.resizing;this.setRay(e.clientX,e.clientY);const i=new ee;if(!this.ray.ray.intersectPlane(t.plane,i))return;const s=this.pxPerUnit,r=i.sub(t.tl),o=Math.round(r.dot(t.right)*s),a=Math.round(-r.dot(t.up)*s),l=t.panel,c=Math.round(Math.min(l.maxSize.w,Math.max(l.minSize.w,o))),u=Math.round(Math.min(l.maxSize.h,Math.max(l.minSize.h,a)));c===l.content.width&&u===l.content.height||(l.group.position.copy(t.tl).addScaledVector(t.right,c/s/2).addScaledVector(t.up,-u/s/2),l.resize(c,u),t.moved=!0)}startDrag(e){var o;(o=this.menu)==null||o.close(),e.group.updateWorldMatrix(!0,!0);const t=new ee(0,0,1).applyQuaternion(e.group.quaternion),i=new gi().setFromNormalAndCoplanarPoint(t,e.group.position),s=new ee,r=new ee;this.ray.ray.intersectPlane(i,s)&&r.copy(e.group.position).sub(s),this.dragging={panel:e,plane:i,offset:r,moved:!1}}dragTo(e){const t=this.dragging;this.setRay(e.clientX,e.clientY);const i=new ee;this.ray.ray.intersectPlane(t.plane,i)&&(t.panel.group.position.copy(i.add(t.offset)),t.moved=!0,this.invalidate())}dispose(){var e,t,i;(e=this.cancelFly)==null||e.call(this),cancelAnimationFrame(this.raf),this.resizeObserver.disconnect();for(const s of this.disposers)s();for(const s of[...this.panels.values()])this.removePanel(s.id);(t=this.menu)==null||t.dispose(),(i=this.controls)==null||i.dispose();try{this.renderer.forceContextLoss()}catch{}this.renderer.dispose(),this.canvas.remove()}}function _E(n){const e=Qa();return e.run(()=>{const t=be(0),i=be(0),s=be(0),r=be(-1),o=new Map,a=()=>{var S;return((S=n.minCellW)==null?void 0:S.call(n))??210},l=()=>{var S;return((S=n.cellAspect)==null?void 0:S.call(n))??.6},c=()=>Zu({count:n.cells().length,width:t.value,minCellW:a(),cellAspect:l(),scrollY:s.value}),u=()=>xm(c().totalH,i.value);je([n.cells,n.theme,()=>{var S;return(S=n.showVolume)==null?void 0:S.call(n)},()=>{var S;return(S=n.volumeFraction)==null?void 0:S.call(n)},()=>{var S;return(S=n.slotW)==null?void 0:S.call(n)},()=>{var S;return(S=n.colors)==null?void 0:S.call(n)},a,l],()=>{s.value=Math.min(s.value,u()),n.host.redraw()}),je([s,r],()=>n.host.redraw());function f(S,b){t.value=S,i.value=b,s.value=Math.min(s.value,u()),n.host.redraw()}function d(S){const b=u();return b<=0?!1:(s.value=Math.max(0,Math.min(b,s.value+S)),!0)}function m(S,b){const v=gu(c().rects,S,b);return v>=0?n.cells()[v].id:null}function g(S,b){const v=gu(c().rects,S,b);return r.value=v,v}function _(){r.value=-1}function p(S,{dpr:b,glow:v}){var A,T,E,I;ym(S,{cells:n.cells(),theme:n.theme(),glow:v,showVolume:((A=n.showVolume)==null?void 0:A.call(n))??!0,volumeFraction:((T=n.volumeFraction)==null?void 0:T.call(n))??.22,slotW:((E=n.slotW)==null?void 0:E.call(n))??3,colors:(I=n.colors)==null?void 0:I.call(n),hoveredCell:r.value,scrollY:s.value,minCellW:a(),cellAspect:l(),dpr:b},o)}function h(){o.clear(),e.stop()}return{viewW:t,viewH:i,scrollY:s,hoveredCell:r,layout:c,maxScroll:u,setViewport:f,wheel:d,cellIdAt:m,hover:g,leave:_,paint:p,dispose:h}})}function xE(n){let e=()=>{};const t=n.theme??"phosphor",i=lm({columnDefs:()=>n.columnDefs,defaultColDef:()=>n.defaultColDef,rowData:()=>n.rowData,pinnedBottomRowData:()=>n.pinnedBottomRowData,rowHeight:()=>n.rowHeight??28,theme:()=>t,emit:n.emit??(()=>{}),host:{redraw:()=>e()}});i.init(),i.setViewport(n.width,n.height,n.width,n.height);const s=new Zi({mode:"world",paint:(l,c)=>i.paint(l,c)}),r=l=>{const c={cx:l.x,cy:l.y,hitScale:l.hitScale};switch(l.kind){case"move":return i.resizing?null:i.hover(c);case"leave":return i.leave(),null;case"down":return i.pointerDown(c,l.clientX,l.clientY),null;case"drag":return i.globalMove(l.clientX,l.clientY),null;case"up":return i.globalUp(),null;case"click":return i.click(c,{shiftKey:l.shiftKey,detail:l.detail}),null;case"wheel":return i.wheel(l.deltaX,l.deltaY,l.shiftKey),null}},o=l=>{if(i.activeFilter.value){if(l.key==="Escape"){l.preventDefault(),i.clearFilter();return}if(l.key==="Enter"){l.preventDefault(),i.closeFilter();return}if(l.key==="Backspace"){l.preventDefault(),i.setFilterText(i.filterPopupValue.value.slice(0,-1)),e();return}if(l.key.length===1&&!l.ctrlKey&&!l.metaKey){l.preventDefault(),i.setFilterText(i.filterPopupValue.value+l.key),e();return}}i.keyDown(l)},a={model:i,surface:s,width:n.width,height:n.height,attach:l=>{e=l},pointer:r,key:o,resize(l,c){a.width=l,a.height=c,i.setViewport(l,c,l,c),e()},dispose:()=>{i.dispose(),s.dispose()}};return a}function id(n){let e=()=>{};const t=tl({entries:n.entries,theme:n.theme??"phosphor",showTimestamps:n.showTimestamps,formatTs:n.formatTs,wordWrap:n.wordWrap,maxLines:n.maxLines}),i=um({entries:()=>t.entries,theme:()=>t.theme??"phosphor",showTimestamps:()=>t.showTimestamps??!0,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap??!0,maxLines:()=>t.maxLines??0,host:{redraw:()=>e()}});i.setViewport(n.width,n.height),i.scrollToBottom();const s=new Zi({mode:"world",paint:(c,u)=>i.paint(c,u)});let r={x:0,y:0},o=!1;const a=c=>{switch(c.kind){case"move":return i.hover(c.x<0?-1:c.y),null;case"leave":return i.leave(),null;case"down":return r={x:c.clientX,y:c.clientY},o=!1,i.panStart(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"drag":return Math.hypot(c.clientX-r.x,c.clientY-r.y)>4&&(o=!0),i.panMove(c.clientX*c.hitScale,c.clientY*c.hitScale),null;case"up":return i.panEnd(),null;case"click":return o||i.click(c.x<0?-1:c.y,c.shiftKey),o=!1,null;case"wheel":return i.wheel(c.deltaX,c.deltaY,c.shiftKey),null}},l={model:i,surface:s,width:n.width,height:n.height,attach:c=>{e=c},pointer:a,key:c=>i.keyDown(c),update(c){Object.assign(t,c),e()},resize(c,u){l.width=c,l.height=u,i.setViewport(c,u),e()},dispose:()=>{i.dispose(),s.dispose()}};return l}function yE(n){let e=()=>{};const t=tl({candles:n.candles,theme:n.theme,slotW:n.slotW,showVolume:n.showVolume,volumeFraction:n.volumeFraction,overlays:n.overlays,markers:n.markers,compact:n.compact,colors:n.colors}),i=pm({candles:()=>t.candles,theme:()=>t.theme??"phosphor",slotW:()=>t.slotW??8,showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??fm,overlays:()=>t.overlays,markers:()=>t.markers,compact:()=>t.compact??!1,colors:()=>t.colors,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new Zi({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{switch(a.kind){case"move":return i.hoverAt(a.x,a.y),null;case"leave":return i.leave(),null;case"down":return i.panStart(a.clientX*a.hitScale),null;case"drag":return i.panMove(a.clientX*a.hitScale),null;case"up":return i.panEnd(),null;case"wheel":return i.wheel(a.deltaX,a.deltaY,a.shiftKey,a.x),null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,key:a=>i.keyDown(a),update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function ME(n){let e=()=>{};const t=tl({cells:n.cells,theme:n.theme,showVolume:n.showVolume,volumeFraction:n.volumeFraction,slotW:n.slotW,minCellW:n.minCellW,cellAspect:n.cellAspect,colors:n.colors}),i=_E({cells:()=>t.cells,theme:()=>t.theme??"phosphor",showVolume:()=>t.showVolume??!0,volumeFraction:()=>t.volumeFraction??.22,slotW:()=>t.slotW??3,colors:()=>t.colors,minCellW:()=>t.minCellW??210,cellAspect:()=>t.cellAspect??.6,host:{redraw:()=>e()}});i.setViewport(n.width,n.height);const s=new Zi({mode:"world",paint:(a,l)=>i.paint(a,l)}),r=a=>{var l;switch(a.kind){case"move":return i.hover(a.x,a.y)>=0?"pointer":null;case"leave":return i.leave(),null;case"click":{const c=i.cellIdAt(a.x,a.y);return c&&((l=n.onCellClick)==null||l.call(n,c)),null}case"wheel":return i.wheel(a.deltaY),null;default:return null}},o={model:i,surface:s,width:n.width,height:n.height,attach:a=>{e=a},pointer:r,update(a){Object.assign(t,a),e()},resize(a,l){o.width=a,o.height=l,i.setViewport(a,l),e()},dispose:()=>{i.dispose(),s.dispose()}};return o}function SE(n){let e=()=>{},t={...n};const i=()=>((t.min??-1)+(t.max??1))/2;let s=t.animate===!1?t.value:i(),r=0;const o=new Zi({mode:"world",paint:(c,{dpr:u,glow:f})=>{Mm(c,{dpr:u,theme:t.theme??"none",colors:t.colors,glow:f,shown:s,value:t.value,min:t.min??-1,max:t.max??1,readout:t.readout,stance:t.stance,sub:t.sub,leftLabel:t.leftLabel??"−",rightLabel:t.rightLabel??"+",sideLetters:t.sideLetters??["−","+"],marks:t.marks??[],meter:t.meter??null,caption:t.caption,note:t.note,items:t.items??[],emptyText:t.emptyText})}}),a=()=>{if(cancelAnimationFrame(r),t.animate===!1){s=t.value,e();return}const c=()=>{const u=t.value-s;if(Math.abs(u)<.004){s=t.value,e();return}s+=u*.18,e(),r=requestAnimationFrame(c)};r=requestAnimationFrame(c)},l={surface:o,width:n.width,height:n.height,attach:c=>{e=c,a()},resize(c,u){l.width=c,l.height=u,e()},update(c){const u=c.value!==void 0&&c.value!==t.value;t={...t,...c},u||c.animate!==void 0?a():e()},get shown(){return s},dispose:()=>{cancelAnimationFrame(r),e=()=>{},o.dispose()}};return l}const fs=300,bE=36e5,wE=Date.UTC(2026,9,1,0,0,0);let lc=20261122;const ya=()=>(lc=lc*1664525+1013904223>>>0,lc/4294967296),Cn=[];let sd=100;for(let n=0;n<fs;n++){const e=sd,t=e*(1+(ya()-.48)*.02+Math.sin(n/17)*.002),i=Math.max(e,t)*(1+ya()*.006),s=Math.min(e,t)*(1-ya()*.006);Cn.push({start:wE+n*bE,open:e,high:i,low:s,close:t,volume:800+Math.round(ya()*2200)}),sd=t}const wm=n=>Cn.map((e,t)=>t<n-1?NaN:Cn.slice(t-n+1,t+1).reduce((i,s)=>i+s.close,0)/n),Da=wm(20),rd=Cn.map((n,e)=>e<19?NaN:Math.sqrt(Cn.slice(e-19,e+1).reduce((t,i)=>t+(i.close-Da[e])**2,0)/20)),EE=[{kind:"band",upper:Da.map((n,e)=>n+2*rd[e]),lower:Da.map((n,e)=>n-2*rd[e]),middle:Da,color:"#6ee7a7"},{kind:"line",data:wm(50),color:"#fbbf24",label:"SMA50"},{kind:"hline",price:Cn[fs-1].close,color:"#60a5fa",label:"last"}],TE=[{timestamp:Cn[fs-40].start,price:Cn[fs-40].low,kind:"entry"},{timestamp:Cn[fs-12].start,price:Cn[fs-12].high,kind:"exit"},{timestamp:Cn[fs-90].start,price:Cn[fs-90].low,kind:"entry",label:"E"}];function AE(n){return Array.from({length:n},(e,t)=>{const i=Cn.slice(t*7,t*7+70),s=t%3===0;return{id:`P${t}`,title:t%5===4?`Will the long question number ${t} resolve before the end of the quarter?`:`AAPL${t}`,badge:t%2?"EQ":"₿",note:`${t%2?"-":"+"}${(t*.37+.2).toFixed(2)}%`,noteColor:t%2?"#e74c3c":"#00bc8c",open:s,candles:i,overlays:s?[{kind:"hline",price:i[20].close,color:"#5b8ff9",dashed:!1,label:"entry"}]:[]}})}const CE={class:"ws3d-bar"},RE={key:0,class:"ws3d-caption",role:"status"},od=26,PE=ai({__name:"Workspace3D",props:{theme:{}},setup(n){const e=n,t=be(null),i=be(""),s=be(!1),r={paper:{bars:{bg:"#e6edf6",bgFocused:"#f3f7fc",line:"#b9c7da",lineFocused:"#2f6fd0",text:"#5a6b80",textFocused:"#1d2b3d",title:"#2f6fd0",titleFocused:"#1f56ad",box:"#b9c7da",boxFocused:"#8aa0bd",accent:"#1f9d66",accentText:"#0b2a1a"},menu:{bg:"#f8fafd",border:"#b9c7da",text:"#1d2b3d",muted:"#6b7c92",accent:"#2f6fd0",divider:"#d6dfeb",hover:"rgba(47,111,208,0.10)"},bg:"radial-gradient(ellipse at 50% 30%, #fbfdff 0%, #eaf1fa 55%, #d3e0f1 100%)",dot:"rgba(47,111,208,0.16)",floor:"#2f6fd0",floorAlpha:.55,panel:{curvature:5,scanlines:!1,glow:!1},up:"#16794f",down:"#c0392b",ui:{ink:"#2f6fd0",btnBg:"rgba(255,255,255,0.75)",btnBorder:"#b9c7da",btnInk:"#33465e",btnHoverInk:"#fff",capBg:"rgba(31,86,173,0.92)",capInk:"#fff",hint:"#5a6b80"}},none:{bars:{bg:"#12122a",bgFocused:"#181840",line:"#26324a",lineFocused:"#40a0f0",text:"#6a85a8",textFocused:"#b8d0ea",title:"#40a0f0",titleFocused:"#7cc4ff",box:"#26324a",boxFocused:"#3a5a80",accent:"#00bc8c",accentText:"#e8fff6"},menu:{bg:"#10182a",border:"#2a3a55",text:"#c0d0e0",muted:"#6a7f96",accent:"#40a0f0",divider:"#1e2a3a",hover:"rgba(255,255,255,0.07)"},bg:"radial-gradient(ellipse at 50% 30%, #131c33 0%, #0a1020 60%, #060a14 100%)",dot:"rgba(64,160,240,0.14)",floor:"#40a0f0",floorAlpha:.5,panel:{curvature:8,scanlines:!0,glow:!1},up:"#00bc8c",down:"#e74c3c",ui:{ink:"#40a0f0",btnBg:"rgba(16,24,42,0.78)",btnBorder:"#2a3a55",btnInk:"#a8c4e4",btnHoverInk:"#06101e",capBg:"rgba(64,160,240,0.95)",capInk:"#06101e",hint:"#6a85a8"}},phosphor:{bars:{},menu:{},bg:"radial-gradient(ellipse at 50% 30%, #0e1a22 0%, #070d12 60%, #04080b 100%)",dot:"rgba(110,231,167,0.14)",floor:"#6ee7a7",floorAlpha:.5,panel:{curvature:10,scanlines:!0,glow:!0},up:"#6ee7a7",down:"#f87171",ui:{ink:"#6ee7a7",btnBg:"rgba(8,19,14,0.7)",btnBorder:"#2f6b4c",btnInk:"#9fd9bd",btnHoverInk:"#06150e",capBg:"rgba(110,231,167,0.95)",capInk:"#06150e",hint:"#6fae8f"}},amber:{bars:{bg:"#1a1205",bgFocused:"#271a07",line:"#5e4310",lineFocused:"#ffcc33",text:"#b8883a",textFocused:"#ffd983",title:"#ffcc33",titleFocused:"#ffe08a",box:"#5e4310",boxFocused:"#8a6418",accent:"#ffcc33",accentText:"#2a1c04"},menu:{bg:"#1a1205",border:"#5e4310",text:"#ffd983",muted:"#b8883a",accent:"#ffcc33",divider:"#3a2a0a",hover:"rgba(255,204,51,0.10)"},bg:"radial-gradient(ellipse at 50% 30%, #20160a 0%, #120c04 60%, #0a0702 100%)",dot:"rgba(255,204,51,0.13)",floor:"#ffb62e",floorAlpha:.5,panel:{curvature:10,scanlines:!0,glow:!0},up:"#ffcc33",down:"#d9531e",ui:{ink:"#ffcc33",btnBg:"rgba(26,18,5,0.78)",btnBorder:"#5e4310",btnInk:"#e0b560",btnHoverInk:"#1a1205",capBg:"rgba(255,204,51,0.95)",capInk:"#1a1205",hint:"#b8883a"}}},o=()=>r[e.theme],a=()=>{const N=o();return{"--bg":N.bg,"--dot":N.dot,"--ink":N.ui.ink,"--btn-bg":N.ui.btnBg,"--btn-border":N.ui.btnBorder,"--btn-ink":N.ui.btnInk,"--btn-hover-ink":N.ui.btnHoverInk,"--cap-bg":N.ui.capBg,"--cap-ink":N.ui.capInk,"--hint":N.ui.hint}},l=["BTC-USD","ETH-USD","SOL-USD","AVAX-USD","LINK-USD","DOGE-USD","ADA-USD","XRP-USD"],c=Array.from({length:80},(N,W)=>({id:W+1,product:l[W%l.length],side:W%3===0?"short":"long",pnl:Math.round(Math.sin(W*1.7)*480)/10,size:100+W*37%900})),u=Date.UTC(2026,10,22,14,0,0),f=["info","info","success","warn","debug","info"],d=Array.from({length:60},(N,W)=>({ts:u+W*7e3,level:f[W%f.length],text:`scanner cycle ${W*3} complete — ${W%5} candidates passed the filter`})),m=N=>{const W=new Date(N);return`${String(W.getUTCHours()).padStart(2,"0")}:${String(W.getUTCMinutes()).padStart(2,"0")}:${String(W.getUTCSeconds()).padStart(2,"0")}`},g={trades:{x:0,y:0,w:560,h:320,title:"Open positions"},candle:{x:580,y:0,w:600,h:320,title:"BTC-USD · 1h"},tilt:{x:1200,y:0,w:340,h:320,title:"Net tilt"},wall:{x:0,y:370,w:740,h:320,title:"Charts"},log:{x:760,y:370,w:780,h:320,title:"Monitor log"}},_=1540,p=690+od;let h=null,S=null,b=null,v=0,A=null;function T(N,W,F){const Y=new Wn({transparent:!0,depthWrite:!1,side:jn,uniforms:{uColor:{value:new gt(N)},uAlpha:{value:W},uCell:{value:.3},uFar:{value:20}},vertexShader:"varying vec3 vP; void main() { vP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vP, 1.0); }",fragmentShader:`
      varying vec3 vP; uniform vec3 uColor; uniform float uAlpha; uniform float uCell; uniform float uFar;
      float lines(vec2 p, float cell) { vec2 c = p / cell; vec2 g = abs(fract(c - 0.5) - 0.5) / max(fwidth(c), vec2(1e-4)); return 1.0 - min(min(g.x, g.y), 1.0); }
      void main() {
        float minor = lines(vP.xz, uCell), major = lines(vP.xz, uCell * 5.0);
        float fade = smoothstep(uFar, 1.5, length(vP.xz));
        float front = smoothstep(0.0, 0.4, vP.z);              // only IN FRONT of the panels (a ledge they hover over) — never behind their glass, where it would cross their text
        float a = max(minor * 0.55, major) * fade * front * uAlpha;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uColor, a);
      }`}),$=new Bt(new en(80,80),Y);return $.rotation.x=-Math.PI/2,$.position.set(0,F,-10),$.renderOrder=-10,$.name="floor",$}function E(N){const W=t.value,F=o(),Y=e.theme;h=new vE({container:W,transparent:!0,controls:(Te,Ie)=>{const ze=new Jw(Te,Ie);return ze.enableDamping=!0,ze.minDistance=.4,ze.maxDistance=16,ze.zoomSpeed=.9,ze},cameraPosition:[0,0,6],displayMenu:{colors:F.menu},barStyle:"cockpit",barColors:F.bars,onPanelActivate:Te=>{const Ie=h.facingPose(Te,{margin:.04});Ie&&h.flyTo(Ie,650)},onPanelControl:(Te,Ie)=>{const ze=h.panels.get(Te);if(Ie==="info"){y(Te);return}if(Ie==="minimize"){h.setPanelMinimized(Te,!ze.minimized);return}if(Ie==="close"){h.closePanel(Te);return}h.toggleExpand(Te)}});const $={curvature:F.panel.curvature,scanlines:F.panel.scanlines,vignette:!1},le=F.panel.glow,te=h.pxPerUnit,he=Te=>{const Ie=g[Te];return[(Ie.x+Ie.w/2-_/2)/te,-(Ie.y+od+Ie.h/2-p/2)/te,0]},ge=(Te,Ie,ze={})=>h.addPanel({id:Te,title:g[Te].title,content:Ie,position:he(Te),look:$,glow:le,controls:["info","minimize","maximize"],resizable:!0,...ze});ge("trades",xE({width:g.trades.w,height:g.trades.h,theme:Y,rowData:c,columnDefs:[{field:"id",headerName:"ID",width:60,sortable:!0},{field:"product",headerName:"Product",width:130,sortable:!0,filter:!0},{field:"side",headerName:"Side",width:90,sortable:!0},{field:"pnl",headerName:"P&L %",width:110,sortable:!0,cellStyle:Te=>({color:Te.value>=0?F.up:F.down})},{field:"size",headerName:"Size",width:100,sortable:!0}],rowHeight:24})),ge("candle",yE({width:g.candle.w,height:g.candle.h,candles:Cn,overlays:EE,markers:TE,theme:Y})),b=SE({width:g.tilt.w,height:g.tilt.h,theme:Y,value:.62,min:-1,max:1,stance:"net long",sub:"5 long · 3 short · 9 flat",leftLabel:"SHORT",rightLabel:"LONG",sideLetters:["S","L"],caption:"tilt of the book",note:"a gauge, in the same scene",items:[{label:"BTC",side:"right",value:"+2.1%",tone:"up"},{label:"ETH",side:"right",value:"+0.8%",tone:"up"},{label:"XRP",side:"left",value:"−1.4%",tone:"down"}]}),ge("tilt",b),ge("wall",ME({width:g.wall.w,height:g.wall.h,cells:AE(9),theme:Y})),ge("log",id({width:g.log.w,height:g.log.h,entries:d,theme:Y,formatTs:m})),A=T(F.floor,F.floorAlpha,-358/te-.12),h.scene.add(A);const ve=N??D();ve&&h.setCameraPose(ve),S=setInterval(()=>{const Te=Math.round(Math.sin(Date.now()/4e3)*90)/100;b==null||b.update({value:Te,stance:Te>=0?"net long":"net short"})},2500),window.__ws3d={stage:h,overview:U,recenter:k,tour:q,stopTour:Z,openAbout:y,get floor(){return A},theme:()=>e.theme,layout:g,setCaption:Te=>{i.value=Te},setTilt:Te=>{S&&clearInterval(S),S=null,b==null||b.update({value:Te,stance:Te>=0?"net long":"net short"})}}}function I(){S&&clearInterval(S),S=null,A&&(A.geometry.dispose(),A.material.dispose()),A=null,h==null||h.dispose(),h=null,b=null}const x={trades:["A sortable, filterable canvas grid.","Click a header to sort; the funnel opens a filter you type into — there is no DOM input in 3D.","Rows are real data: select, copy as TSV, double-click to open."],candle:["A three.js candlestick chart.","Wheel zooms the series, drag pans, hover shows the crosshair and the OHLCV strip.","Overlays (Bollinger band, SMA50), a live price line and trade markers."],tilt:["A bipolar gauge.","The needle eases to each new reading; the figure and stance follow it."],wall:["A wall of mini charts drawn into ONE surface.","Hover rings a card, a click reports it, the wheel scrolls the wall.","Open positions are framed, with their P&L and entry line."],log:["A scrolling console.","Follows the tail until you scroll up; select and copy lines."]};function y(N){if(!h)return;const W=`about-${N}`;if(h.panels.has(W)){h.expand(W);return}const F=o(),Y=x[N].map(le=>({text:le,level:"info"})),$=id({width:520,height:220,entries:Y,theme:e.theme,showTimestamps:!1});$.model.setScroll(0),h.addPopup({id:W,title:`About — ${g[N].title}`,content:$,look:{curvature:F.panel.curvature,scanlines:F.panel.scanlines,vignette:!1},glow:F.panel.glow,resizable:!0},{near:N})}function D(){const N=h==null?void 0:h.framePose(void 0,{margin:.12});if(!N)return null;const W=.17;return{position:[N.position[0],N.position[1]-W,N.position[2]],target:[N.target[0],N.target[1]-W,N.target[2]]}}function U(){const N=D();N&&h.flyTo(N,800)}function k(){h!=null&&h.expandedId?h.unexpand():U()}async function X(N,W=800){const F=h==null?void 0:h.facingPose(N,{margin:.05});F&&await h.flyTo(F,W)}const j=N=>new Promise(W=>setTimeout(W,N));async function q(){if(s.value){Z();return}s.value=!0;const N=++v,W=()=>v===N&&!!h,F=[{text:"Zoom out — the whole workspace in one view",run:()=>{U()},hold:1600},{text:"Zoom in — a panel fills the screen",run:()=>X("trades"),hold:1500},{text:"Zoom out — and in again on the chart",run:async()=>{U(),await j(900),await X("candle")},hold:1700},{text:"A wall of mini charts — one WebGL surface",run:()=>X("wall"),hold:1500},{text:"Back out to the overview",run:()=>{U()},hold:1500}];for(const Y of F){if(!W())break;i.value=Y.text,await Y.run(),await j(Y.hold)}v===N&&(i.value="",s.value=!1)}function Z(){v++,s.value=!1,i.value="",h==null||h.flyTo(h.getCameraPose(),0)}return je(()=>e.theme,()=>{if(!h)return;const N=h.getCameraPose();Z(),I(),E(N)}),Pn(()=>{E(null)}),Ru(()=>{v++,I(),delete window.__ws3d}),(N,W)=>(Je(),mt("div",{class:qt(["ws3d",`t-${n.theme}`]),style:Fn(a()),"data-testid":"ws3d"},[Le("div",{ref_key:"host",ref:t,class:"ws3d-stage"},null,512),Le("div",CE,[W[0]||(W[0]=Le("span",{class:"ws3d-title"},"3D workspace",-1)),Le("button",{class:"ws3d-btn",title:"Zoom the whole workspace out until every panel is in frame",onClick:U},"Overview"),Le("button",{class:"ws3d-btn",title:"Fly back to the start",onClick:k},"Recenter"),Le("button",{class:qt(["ws3d-btn",{on:s.value}]),title:"Play a short zoom-in / zoom-out tour",onClick:q},_n(s.value?"■ Stop":"▶ Tour"),3)]),i.value?(Je(),mt("div",RE,_n(i.value),1)):Kt("",!0),W[1]||(W[1]=Le("div",{class:"ws3d-hint"},[vn("scroll to "),Le("b",null,"zoom"),vn(" · drag to "),Le("b",null,"orbit"),vn(" · "),Le("b",null,"□"),vn(" expands a panel (and flies back) · "),Le("b",null,"ⓘ"),vn(" opens a pop-up beside it · double-click a title bar to face it · right-click a panel for its display menu · the look follows the Theme menu")],-1))],6))}}),DE=li(PE,[["__scopeId","data-v-c2e4b3dd"]]),LE={class:"demo-bar"},IE={class:"demo-tabs"},UE={key:1,class:"demo-btns"},FE={key:2},NE={key:3},OE={key:4},BE={class:"demo-btns"},kE=["value"],zE={class:"tab-content"},HE={class:"tab-content"},VE={class:"tab-content"},GE={class:"tab-content"},WE={class:"tab-content"},XE={class:"tab-content"},YE={key:0,class:"stage-tab"},$E=720,qE=ai({__name:"App",setup(n){const e=be((()=>{const O=new URLSearchParams(location.search).get("tab");return["grid","workspace","stage3d","log","candle","wall","terminal","gauge"].includes(O??"")?O:"stage3d"})()),t=be(e.value==="stage3d"?"paper":"none"),i=nt(()=>t.value!=="paper"),s=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],r=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(O,H){return+(Math.random()*(H-O)+O).toFixed(4)}function l(O){return O[Math.floor(Math.random()*O.length)]}function c(O){return O.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],d=["NY","London","Tokyo","AH"],m=Array.from({length:240},(O,H)=>{const ie=H%r.length,Ee=r[ie],xe=o[ie],Be=l(s),Ue=u-Math.floor(Math.random()*30*24*36e5),qe=Math.random()<.15,G=a(10,3e3),Re=a(-8,22),fe=+(Re-.12).toFixed(4),Me=+(G*a(.2,2)).toFixed(2),Ne=qe?null:Ue+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(Ue)),entry_timestamp:c(new Date(Ue)),exit_timestamp:Ne?c(new Date(Ne)):"",product:Ee,strategy:Be,exchange:xe,status:qe?"open":"closed",entry_price:G.toFixed(4),exit_price:qe?"":a(G*.92,G*1.25).toFixed(4),pnl_pct:Re.toFixed(4),net_pnl_pct:fe.toFixed(4),size_base:a(.001,2).toFixed(6),notional:Me.toFixed(2),reason:qe?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(d)}}),g=O=>H=>H.value!==""&&H.value!=null&&!isNaN(Number(H.value))?Number(H.value).toFixed(O):"",_=O=>O.value!==""&&O.value!=null&&!isNaN(Number(O.value))?Number(O.value).toFixed(2)+"%":"—",p={textAlign:"right"};function h(O){var Ue,qe;const H=(Ue=O.data)==null?void 0:Ue.entry_timestamp,ie=(qe=O.data)==null?void 0:qe.exit_timestamp;if(!H||!ie)return"—";const Ee=new Date(ie).getTime()-new Date(H).getTime();if(Ee<0)return"—";const xe=Math.floor(Ee/36e5),Be=Math.floor(Ee%36e5/6e4);return xe>0?`${xe}h ${Be}m`:`${Be}m`}const S=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:O=>O.data.entry_timestamp||O.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:O=>O.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:h,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:O=>O.data.status??"closed",cellStyle:O=>({color:O.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:O=>`${O} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:g(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:g(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:g(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:g(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:O=>Number(O).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:_,cellStyle:O=>({...p,color:Number(O.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:O=>`${Number(O).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:_,cellStyle:O=>({...p,color:Number(O.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:O=>`${Number(O).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:_,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:g(1),cellStyle:O=>({...p,color:Number(O.value)>65?"#e74c3c":Number(O.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:O=>Number(O).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:O=>(Number(O.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:O=>Number(O).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:O=>`${Number(O).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:O=>`${Number(O).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:O=>`${Number(O).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:O=>Number(O).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],b={resizable:!0,sortable:!0},v=be(null),A=be(25),T=be(!0),E=be(!0),I=be(!1),x=be(!1),y=be(-1),D=be([{label:"QQQ",side:"left",value:"+1.4%",tone:"up"},{label:"IWM",side:"left",value:"−0.3%",tone:"down"},{label:"TLT",side:"right",value:"+0.8%",tone:"up"}]),U=nt(()=>y.value>0?"net long":y.value<0?"net short":"flat"),k=nt(()=>y.value<=-2?"CRASH-POSITIONED — the short tilt is the insurance paying out.":y.value<0?"tilting short — a downtrend is developing.":y.value===0?"balanced — no clear trend.":"calm tape — riding the up-trends; would flip short as a selloff develops."),X=be(.31),j=nt(()=>{const O=X.value;return{label:"margin guard",hint:"liquidation headroom · reserve +$200.00",value:O,min:0,max:.6,valueText:O.toFixed(2),tone:O<.15?"down":O<.25?"warn":"up",thresholds:[{value:.25,label:"top-up",color:"neutral"},{value:.15,label:"de-risk",color:"left"},{value:.05,label:"halt",color:"left"}]}});function q(){let O=y.value;for(;O===y.value;)O=Math.floor(Math.random()*9)-4;y.value=O,X.value=+(.03+Math.random()*.5).toFixed(2)}const Z=be(typeof window<"u"?window.innerWidth:1200),N=nt(()=>Z.value<$E);function W(){Z.value=window.innerWidth}Pn(()=>window.addEventListener("resize",W)),Xn(()=>window.removeEventListener("resize",W)),je(N,O=>{O&&e.value==="workspace"&&(e.value="grid")},{immediate:!0});const F=be(!1),Y=be(""),$=be("all"),le=be(0),te=be(!0),he=be(!1),ge=be(!1);je(e,O=>{O==="grid"&&le.value++});function ve(O){v.value=O.api,window.__cathodeGridApi=O.api,O.api.setGridOption("rowData",m),$.value!=="all"&&Ie($.value)}function Te(O){var ie;const H=O.target.value;Y.value=H,(ie=v.value)==null||ie.setGridOption("quickFilterText",H)}function Ie(O){var H,ie,Ee;$.value=O,O==="all"?(H=v.value)==null||H.setFilterModel(null):(ie=v.value)==null||ie.setFilterModel({status:{type:"equals",filter:O}}),(Ee=v.value)==null||Ee.onFilterChanged()}const ze={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function ye(O,H){const Ee=Math.round(O*.62)-12,xe=Ee+12*2,Be=O-xe-12,Ue=Math.round(H*.62),qe=Ue+12*2,G=H-qe-12;return{trades:{x:12,y:12,w:Ee,h:Ue,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:xe,y:12,w:Be,h:Ue,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:qe,w:Ee,h:G,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:xe,y:qe,w:Be,h:G,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const P=ye(window.innerWidth,window.innerHeight-88),B=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const O=[],H=Date.now()-45e5;for(let ie=0;ie<140;ie++){const Ee=B[ie%B.length];O.push({ts:H+ie*32e3,text:Ee.text,level:Ee.level})}return O})();const C=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],de=be([]),se=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],ne=be([{level:"info",text:"CathodeTerminal demo"},...se]),ce=be(!1),_e={help:()=>se,echo:O=>({level:"info",text:O||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:O=>{const H=O.trim();return H?H==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:H==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${H}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:O=>{const H=O.trim()||"localhost",ie=[{level:"info",text:`PING ${H}: 56 data bytes`}];for(let Ee=0;Ee<4;Ee++){const xe=(12+Math.random()*18).toFixed(1);ie.push({level:"success",text:`64 bytes from ${H}: icmp_seq=${Ee} ttl=64 time=${xe} ms`})}return ie},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:O=>{const H=O.trim()||"moo",ie="─".repeat(Math.max(2,H.length+2));return[{level:"info",text:` ╭${ie}╮`},{level:"info",text:` │ ${H} │`},{level:"info",text:` ╰${ie}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const O=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:O[Math.floor(Math.random()*O.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function ue(O){ne.value=[...ne.value,{level:"info",text:`→ ${O}`}];const H=O.trim();if(!H)return;if(H==="clear"){ne.value=[];return}const ie=H.indexOf(" "),Ee=ie===-1?H:H.slice(0,ie),xe=ie===-1?"":H.slice(ie+1),Be=_e[Ee];let Ue;Be?Ue=Be(xe):Ue={level:"warn",text:`unknown command: ${Ee} — type 'help' for the demo vocabulary`},ce.value=!0,setTimeout(()=>{if(Ue!==null){const qe=Array.isArray(Ue)?Ue:[Ue];ne.value=[...ne.value,...qe]}ce.value=!1},180)}const M=["BTC","ETH","SOL","ARB","UNI","DASH","ZEC","AVAX","DOGE","LINK","TAO","NEAR","SPY","QQQ","NVDA","TSLA"].map((O,H)=>{const ie=L(90+H*7%60),Ee=(ie[ie.length-1].close/ie[0].close-1)*100;return{id:O,title:O,badge:H>=12?"EQ":"₿",note:`${Ee>=0?"+":""}${Ee.toFixed(1)}%`,noteColor:Ee>=0?"#00bc8c":"#e74c3c",open:H%5===0,candles:ie}});function L(O){const H=[];let ie=6e4;const Ee=Date.now()-O*36e5;for(let xe=0;xe<O;xe++){const Be=(Math.random()-.495)*ie*.012,Ue=ie,qe=Math.max(1,ie+Be),G=Math.max(Ue,qe)*(1+Math.random()*.005),Re=Math.min(Ue,qe)*(1-Math.random()*.005),fe=Math.round(20+Math.random()*80);H.push({start:Ee+xe*36e5,open:Ue,close:qe,high:G,low:Re,volume:fe}),ie=qe}return H}const V=be(L(300));function Q(O,H){const ie=new Array(O.length).fill(NaN);let Ee=0;for(let xe=0;xe<O.length;xe++)Ee+=O[xe],xe>=H&&(Ee-=O[xe-H]),xe+1>=H&&(ie[xe]=Ee/H);return ie}function re(O,H){const ie=new Array(O.length).fill(NaN);if(!O.length)return ie;const Ee=2/(H+1);let xe=O[0];ie[0]=xe;for(let Be=1;Be<O.length;Be++)xe=O[Be]*Ee+xe*(1-Ee),ie[Be]=xe;for(let Be=0;Be<Math.min(H-1,O.length);Be++)ie[Be]=NaN;return ie}function we(O,H=20,ie=2){const Ee=Q(O,H),xe=new Array(O.length).fill(NaN),Be=new Array(O.length).fill(NaN);for(let Ue=H-1;Ue<O.length;Ue++){let qe=0;for(let Re=Ue-H+1;Re<=Ue;Re++){const fe=O[Re]-Ee[Ue];qe+=fe*fe}const G=Math.sqrt(qe/H);xe[Ue]=Ee[Ue]+ie*G,Be[Ue]=Ee[Ue]-ie*G}return{upper:xe,middle:Ee,lower:Be}}const Se=nt(()=>{const O=V.value.map(ie=>ie.close),H=we(O,20,2);return[{kind:"band",upper:H.upper,middle:H.middle,lower:H.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:re(O,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:re(O,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),Ae=nt(()=>{const O=V.value;if(O.length<130)return[];const H=ie=>O[ie];return[{timestamp:H(O.length-120).start,price:H(O.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:H(O.length-100).start,price:H(O.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:H(O.length-80).start,price:H(O.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:H(O.length-60).start,price:H(O.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:H(O.length-40).start,price:H(O.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:H(O.length-20).start,price:H(O.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const O=V.value,H=Ae.value;if(!O.length||!H.length)return[];const ie=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!ie)return[];const Ee=ie.width/(window.devicePixelRatio||1),xe=ie.height/(window.devicePixelRatio||1),Be=8,Ue=56,qe=8,G=22,Re=8,fe=Ee-Be-Ue,Me=Math.max(1,Math.floor(fe/Re)),Ne=Math.max(0,O.length-Me);let Fe=1/0,Qe=-1/0;for(let At=Ne;At<O.length;At++)O[At].low<Fe&&(Fe=O[At].low),O[At].high>Qe&&(Qe=O[At].high);const _t=(Qe-Fe)*.04;Fe-=_t,Qe+=_t;const Pt=qe,lt=qe+(xe-qe-G-4)*(1-.18),nn=[];for(const At of H){const tr=O[1].start-O[0].start;let Si=-1;for(let z=0;z<O.length;z++)if(Math.abs(O[z].start-At.timestamp)<=tr*.5){Si=z;break}if(Si<Ne||Si>=O.length)continue;const Bn=Be+(Si-Ne+.5)*Re,Ji=Pt+(1-(At.price-Fe)/(Qe-Fe))*(lt-Pt);nn.push({x:Bn,y:Ji,kind:At.kind,label:At.label||""})}return nn}});function We(){const O=[],H=Date.now()-54e5;for(let ie=0;ie<320;ie++){const Ee=C[ie%C.length];O.push({ts:H+ie*16e3,text:Ee.text,level:Ee.level})}de.value=O}return We(),(O,H)=>(Je(),mt("div",{class:qt(["demo-shell",{"cathode-light":!i.value,mobile:N.value}])},[Le("div",LE,[H[31]||(H[31]=Le("span",{class:"demo-title"},"⬛ CATHODE",-1)),Le("div",IE,[Le("button",{class:qt(["tab-btn",{active:e.value==="stage3d"}]),onClick:H[0]||(H[0]=ie=>e.value="stage3d")}," 3D Workspace ",2),N.value?Kt("",!0):(Je(),mt("button",{key:0,class:qt(["tab-btn",{active:e.value==="workspace"}]),onClick:H[1]||(H[1]=ie=>e.value="workspace")}," Workspace ",2)),Le("button",{class:qt(["tab-btn",{active:e.value==="grid"}]),onClick:H[2]||(H[2]=ie=>e.value="grid")}," Grid ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="log"}]),onClick:H[3]||(H[3]=ie=>e.value="log")}," Log ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="wall"}]),onClick:H[4]||(H[4]=ie=>e.value="wall")}," WALL ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="candle"}]),onClick:H[5]||(H[5]=ie=>e.value="candle")}," Candle ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="terminal"}]),onClick:H[6]||(H[6]=ie=>e.value="terminal")}," Terminal ",2),Le("button",{class:qt(["tab-btn",{active:e.value==="gauge"}]),onClick:H[7]||(H[7]=ie=>e.value="gauge")}," Gauge ",2)]),H[32]||(H[32]=Le("label",null,"Theme",-1)),Ht(Le("select",{"onUpdate:modelValue":H[8]||(H[8]=ie=>t.value=ie)},[...H[22]||(H[22]=[Le("option",{value:"none"},"Default (dark)",-1),Le("option",{value:"phosphor"},"Phosphor Green",-1),Le("option",{value:"amber"},"Amber",-1),Le("option",{value:"paper"},"Paper (light)",-1)])],512),[[Yv,t.value]]),e.value!=="stage3d"?(Je(),mt(ln,{key:0},[Le("label",null,"Curve "+_n(A.value)+" · "+_n(A.value<0?"concave":A.value>0?"convex":"flat"),1),Ht(Le("input",{type:"range",min:"-45",max:"45",step:"1","onUpdate:modelValue":H[9]||(H[9]=ie=>A.value=ie),style:{width:"110px"}},null,512),[[xp,A.value,void 0,{number:!0}]]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":H[10]||(H[10]=ie=>T.value=ie),"data-testid":"cf-bendfield"},null,512),[[ns,T.value]]),H[23]||(H[23]=vn(" Field",-1))]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":H[11]||(H[11]=ie=>E.value=ie)},null,512),[[ns,E.value]]),H[24]||(H[24]=vn(" Scanlines",-1))]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":H[12]||(H[12]=ie=>F.value=ie)},null,512),[[ns,F.value]]),H[25]||(H[25]=vn(" Glow",-1))]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":H[13]||(H[13]=ie=>I.value=ie),"data-testid":"cf-magnify"},null,512),[[ns,I.value]]),H[26]||(H[26]=vn(" Magnify ",-1))]),Le("label",null,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":H[14]||(H[14]=ie=>x.value=ie),"data-testid":"cf-show-loaders"},null,512),[[ns,x.value]]),H[27]||(H[27]=vn(" Show loaders ",-1))])],64)):Kt("",!0),e.value==="gauge"?(Je(),mt("div",UE,[Le("button",{"data-testid":"cf-tilt",onClick:q},"Tilt")])):Kt("",!0),e.value==="candle"?(Je(),mt("label",FE,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":H[15]||(H[15]=ie=>te.value=ie),"data-testid":"cf-show-indicators"},null,512),[[ns,te.value]]),H[28]||(H[28]=vn(" Indicators ",-1))])):Kt("",!0),e.value==="candle"?(Je(),mt("label",NE,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":H[16]||(H[16]=ie=>he.value=ie),"data-testid":"cf-flat"},null,512),[[ns,he.value]]),H[29]||(H[29]=vn(" Flat (no GL) ",-1))])):Kt("",!0),e.value==="candle"?(Je(),mt("label",OE,[Ht(Le("input",{type:"checkbox","onUpdate:modelValue":H[17]||(H[17]=ie=>ge.value=ie),"data-testid":"cf-compact"},null,512),[[ns,ge.value]]),H[30]||(H[30]=vn(" Compact ",-1))])):Kt("",!0),H[33]||(H[33]=Le("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(Je(),mt(ln,{key:5},[Le("div",BE,[Le("button",{class:qt({active:$.value==="all"}),onClick:H[18]||(H[18]=ie=>Ie("all"))},"All",2),Le("button",{class:qt({active:$.value==="open"}),onClick:H[19]||(H[19]=ie=>Ie("open"))},"Open",2),Le("button",{class:qt({active:$.value==="closed"}),onClick:H[20]||(H[20]=ie=>Ie("closed"))},"Closed",2)]),Le("input",{class:"demo-filter",placeholder:"Quick filter…",value:Y.value,onInput:Te},null,40,kE)],64)):Kt("",!0)]),Ht(Le("div",zE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(Wh,{key:le.value,"column-defs":S,"default-col-def":b,"row-height":28,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,magnify:I.value,pagination:!0,"pagination-page-size":50,onGridReady:ve},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[cs,e.value==="grid"]]),Ht(Le("div",HE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(du,{key:1,entries:de.value,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,magnify:I.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[cs,e.value==="log"]]),Ht(Le("div",VE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt($h,{key:`cf-${he.value}`,candles:V.value,overlays:te.value?Se.value:[],markers:te.value?Ae.value:[],theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,flat:he.value,compact:ge.value,magnify:I.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[cs,e.value==="candle"]]),Ht(Le("div",GE,[Ct(qw,{cells:xt(M),theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,magnify:I.value,"bend-field":T.value,onCellClick:H[21]||(H[21]=ie=>console.log("wall cell:",ie))},null,8,["cells","theme","curvature","scanlines","glow","magnify","bend-field"])],512),[[cs,e.value==="wall"]]),Ht(Le("div",WE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"READING THE BOOK"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(jw,{key:1,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,magnify:I.value,value:y.value,min:-6,max:6,stance:U.value,sub:"1 long · 2 short · 3 flat","left-label":"short","right-label":"long","side-letters":["S","L"],marks:[{value:-2,label:"crash-positioned",color:"left"},{value:3,label:"calm tape",color:"neutral"}],meter:j.value,caption:k.value,note:"Insurance, not alpha — judge it by crash-protection, not a calm-month P&L. It bleeds a small premium in quiet tape and pays off when the long books crash.",items:D.value,"empty-text":"Flat — no positions."},null,8,["theme","curvature","scanlines","glow","magnify","value","stance","meter","caption","items"]))],512),[[cs,e.value==="gauge"]]),Ht(Le("div",XE,[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(qh,{key:1,entries:ne.value,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,magnify:I.value,busy:ce.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:ue},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))],512),[[cs,e.value==="terminal"]]),e.value==="stage3d"?(Je(),mt("div",YE,[Ct(DE,{theme:t.value},null,8,["theme"])])):Kt("",!0),Ht(Ct(Dw,{"storage-key":"cathode.demo.layout","initial-layout":xt(P),"container-titles":ze},{default:Fs(()=>[Ct(da,{id:"trades",title:"Trades",curvature:A.value,canvas:""},{default:Fs(({resizeKey:ie})=>[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(Wh,{key:ie,"column-defs":S,"default-col-def":b,"row-height":26,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,magnify:I.value,pagination:!0,"pagination-page-size":50,onGridReady:ve},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Ct(da,{id:"chart",title:"Chart",curvature:A.value,canvas:""},{default:Fs(({resizeKey:ie})=>[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt($h,{key:ie,candles:V.value,overlays:Se.value,markers:Ae.value,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,magnify:I.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Ct(da,{id:"log",title:"Log",curvature:A.value,canvas:""},{default:Fs(()=>[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(du,{key:1,entries:de.value,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,magnify:I.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Ct(da,{id:"terminal",title:"Terminal",curvature:A.value,canvas:""},{default:Fs(()=>[x.value?(Je(),Lt(Di,{key:0,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,"bend-field":T.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Je(),Lt(qh,{key:1,entries:ne.value,theme:t.value,curvature:A.value,scanlines:E.value,glow:F.value,magnify:I.value,busy:ce.value,prompt:"→ ",onSubmit:ue},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[cs,e.value==="workspace"]])],2))}}),KE=li(qE,[["__scopeId","data-v-bdd27823"]]);Jv(KE).mount("#app");
