(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ac(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const gt={},Gr=[],$n=()=>{},od=()=>!1,aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),la=n=>n.startsWith("onUpdate:"),Ct=Object.assign,Cc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},op=Object.prototype.hasOwnProperty,ft=(n,e)=>op.call(n,e),qe=Array.isArray,Wr=n=>Ws(n)==="[object Map]",as=n=>Ws(n)==="[object Set]",uu=n=>Ws(n)==="[object Date]",et=n=>typeof n=="function",Et=n=>typeof n=="string",In=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",ad=n=>(ht(n)||et(n))&&et(n.then)&&et(n.catch),ld=Object.prototype.toString,Ws=n=>ld.call(n),ap=n=>Ws(n).slice(8,-1),cd=n=>Ws(n)==="[object Object]",Rc=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,As=Ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},lp=/-\w/g,Pn=ca(n=>n.replace(lp,e=>e.slice(1).toUpperCase())),cp=/\B([A-Z])/g,Gi=ca(n=>n.replace(cp,"-$1").toLowerCase()),ud=ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Aa=ca(n=>n?`on${ud(n)}`:""),Yn=(n,e)=>!Object.is(n,e),No=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},fd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ua=n=>{const e=parseFloat(n);return isNaN(e)?n:e},up=n=>{const e=Et(n)?Number(n):NaN;return isNaN(e)?n:e};let fu;const fa=()=>fu||(fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function An(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Et(i)?pp(i):An(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(n)||ht(n))return n}const fp=/;(?![^(]*\))/g,dp=/:([^]+)/,hp=/\/\*[^]*?\*\//g;function pp(n){const e={};return n.replace(hp,"").split(fp).forEach(t=>{if(t){const i=t.split(dp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ln(n){let e="";if(Et(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=ln(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const mp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gp=Ac(mp);function dd(n){return!!n||n===""}function vp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ls(n[i],e[i]);return t}function ls(n,e){if(n===e)return!0;let t=uu(n),i=uu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=In(n),i=In(e),t||i)return n===e;if(t=qe(n),i=qe(e),t||i)return t&&i?vp(n,e):!1;if(t=ht(n),i=ht(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ls(n[o],e[o]))return!1}}return String(n)===String(e)}function Pc(n,e){return n.findIndex(t=>ls(t,e))}const hd=n=>!!(n&&n.__v_isRef===!0),cn=n=>Et(n)?n:n==null?"":qe(n)||ht(n)&&(n.toString===ld||!et(n.toString))?hd(n)?cn(n.value):JSON.stringify(n,pd,2):String(n),pd=(n,e)=>hd(e)?pd(n,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ca(i,s)+" =>"]=r,t),{})}:as(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ca(t))}:In(e)?Ca(e):ht(e)&&!qe(e)&&!cd(e)?String(e):e,Ca=(n,e="")=>{var t;return In(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let en;class _p{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=en;try{return en=this,e()}finally{en=t}}}on(){++this._on===1&&(this.prevScope=en,en=this)}off(){this._on>0&&--this._on===0&&(en=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function xp(){return en}let vt;const Ra=new WeakSet;class md{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,en&&en.active&&en.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ra.has(this)&&(Ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,du(this),_d(this);const e=vt,t=Dn;vt=this,Dn=!0;try{return this.fn()}finally{xd(this),vt=e,Dn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ic(e);this.deps=this.depsTail=void 0,du(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yl(this)&&this.run()}get dirty(){return yl(this)}}let gd=0,Cs,Rs;function vd(n,e=!1){if(n.flags|=8,e){n.next=Rs,Rs=n;return}n.next=Cs,Cs=n}function Dc(){gd++}function Lc(){if(--gd>0)return;if(Rs){let e=Rs;for(Rs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Cs;){let e=Cs;for(Cs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function _d(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ic(i),Mp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function yl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Md(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Md(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Us)||(n.globalVersion=Us,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!yl(n))))return;n.flags|=2;const e=n.dep,t=vt,i=Dn;vt=n,Dn=!0;try{_d(n);const r=n.fn(n._value);(e.version===0||Yn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{vt=t,Dn=i,xd(n),n.flags&=-3}}function Ic(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ic(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Mp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Dn=!0;const Sd=[];function hi(){Sd.push(Dn),Dn=!1}function pi(){const n=Sd.pop();Dn=n===void 0?!0:n}function du(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=vt;vt=void 0;try{e()}finally{vt=t}}}let Us=0;class Sp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!vt||!Dn||vt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vt)t=this.activeLink=new Sp(vt,this),vt.deps?(t.prevDep=vt.depsTail,vt.depsTail.nextDep=t,vt.depsTail=t):vt.deps=vt.depsTail=t,yd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=vt.depsTail,t.nextDep=void 0,vt.depsTail.nextDep=t,vt.depsTail=t,vt.deps===t&&(vt.deps=i)}return t}trigger(e){this.version++,Us++,this.notify(e)}notify(e){Dc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Lc()}}}function yd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)yd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const El=new WeakMap,mr=Symbol(""),bl=Symbol(""),Ns=Symbol("");function zt(n,e,t){if(Dn&&vt){let i=El.get(n);i||El.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Uc),r.map=i,r.key=t),r.track()}}function oi(n,e,t,i,r,s){const o=El.get(n);if(!o){Us++;return}const a=l=>{l&&l.trigger()};if(Dc(),e==="clear")o.forEach(a);else{const l=qe(n),c=l&&Rc(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Ns||!In(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Ns)),e){case"add":l?c&&a(o.get("length")):(a(o.get(mr)),Wr(n)&&a(o.get(bl)));break;case"delete":l||(a(o.get(mr)),Wr(n)&&a(o.get(bl)));break;case"set":Wr(n)&&a(o.get(mr));break}}Lc()}function Tr(n){const e=ct(n);return e===n?e:(zt(e,"iterate",Ns),_n(n)?e:e.map(Un))}function da(n){return zt(n=ct(n),"iterate",Ns),n}function Gn(n,e){return mi(n)?Jr(gr(n)?Un(e):e):Un(e)}const yp={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,n=>Gn(this,n))},concat(...n){return Tr(this).concat(...n.map(e=>qe(e)?Tr(e):e))},entries(){return Pa(this,"entries",n=>(n[1]=Gn(this,n[1]),n))},every(n,e){return jn(this,"every",n,e,void 0,arguments)},filter(n,e){return jn(this,"filter",n,e,t=>t.map(i=>Gn(this,i)),arguments)},find(n,e){return jn(this,"find",n,e,t=>Gn(this,t),arguments)},findIndex(n,e){return jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return jn(this,"findLast",n,e,t=>Gn(this,t),arguments)},findLastIndex(n,e){return jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Da(this,"includes",n)},indexOf(...n){return Da(this,"indexOf",n)},join(n){return Tr(this).join(n)},lastIndexOf(...n){return Da(this,"lastIndexOf",n)},map(n,e){return jn(this,"map",n,e,void 0,arguments)},pop(){return ps(this,"pop")},push(...n){return ps(this,"push",n)},reduce(n,...e){return hu(this,"reduce",n,e)},reduceRight(n,...e){return hu(this,"reduceRight",n,e)},shift(){return ps(this,"shift")},some(n,e){return jn(this,"some",n,e,void 0,arguments)},splice(...n){return ps(this,"splice",n)},toReversed(){return Tr(this).toReversed()},toSorted(n){return Tr(this).toSorted(n)},toSpliced(...n){return Tr(this).toSpliced(...n)},unshift(...n){return ps(this,"unshift",n)},values(){return Pa(this,"values",n=>Gn(this,n))}};function Pa(n,e,t){const i=da(n),r=i[e]();return i!==n&&!_n(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Ep=Array.prototype;function jn(n,e,t,i,r,s){const o=da(n),a=o!==n&&!_n(n),l=o[e];if(l!==Ep[e]){const f=l.apply(n,s);return a?Un(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Gn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function hu(n,e,t,i){const r=da(n),s=r!==n&&!_n(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Gn(n,c)),t.call(this,c,Gn(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?Gn(n,l):l}function Da(n,e,t){const i=ct(n);zt(i,"iterate",Ns);const r=i[e](...t);return(r===-1||r===!1)&&Oc(t[0])?(t[0]=ct(t[0]),i[e](...t)):r}function ps(n,e,t=[]){hi(),Dc();const i=ct(n)[e].apply(n,t);return Lc(),pi(),i}const bp=Ac("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(In));function Tp(n){In(n)||(n=String(n));const e=ct(this);return zt(e,"has",n),e.hasOwnProperty(n)}class bd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Np:Cd:s?Ad:wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!r){let l;if(o&&(l=yp[t]))return l;if(t==="hasOwnProperty")return Tp}const a=Reflect.get(e,t,Gt(e)?e:i);if((In(t)?Ed.has(t):bp(t))||(r||zt(e,"get",t),s))return a;if(Gt(a)){const l=o&&Rc(t)?a:a.value;return r&&ht(l)?wl(l):l}return ht(a)?r?wl(a):Xr(a):a}}class Td extends bd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=qe(e)&&Rc(t);if(!this._isShallow){const c=mi(s);if(!_n(i)&&!mi(i)&&(s=ct(s),i=ct(i)),!o&&Gt(s)&&!Gt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:ft(e,t),l=Reflect.set(e,t,i,Gt(e)?e:r);return e===ct(r)&&(a?Yn(i,s)&&oi(e,"set",t,i):oi(e,"add",t,i)),l}deleteProperty(e,t){const i=ft(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&oi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!In(t)||!Ed.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",qe(e)?"length":mr),Reflect.ownKeys(e)}}class wp extends bd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ap=new Td,Cp=new wp,Rp=new Td(!0);const Tl=n=>n,so=n=>Reflect.getPrototypeOf(n);function Pp(n,e,t){return function(...i){const r=this.__v_raw,s=ct(r),o=Wr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Tl:e?Jr:Un;return!e&&zt(s,"iterate",l?bl:mr),Ct(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function oo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Dp(n,e){const t={get(r){const s=this.__v_raw,o=ct(s),a=ct(r);n||(Yn(r,a)&&zt(o,"get",r),zt(o,"get",a));const{has:l}=so(o),c=e?Tl:n?Jr:Un;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&zt(ct(r),"iterate",mr),r.size},has(r){const s=this.__v_raw,o=ct(s),a=ct(r);return n||(Yn(r,a)&&zt(o,"has",r),zt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ct(a),c=e?Tl:n?Jr:Un;return!n&&zt(l,"iterate",mr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ct(t,n?{add:oo("add"),set:oo("set"),delete:oo("delete"),clear:oo("clear")}:{add(r){const s=ct(this),o=so(s),a=ct(r),l=!e&&!_n(r)&&!mi(r)?a:r;return o.has.call(s,l)||Yn(r,l)&&o.has.call(s,r)||Yn(a,l)&&o.has.call(s,a)||(s.add(l),oi(s,"add",l,l)),this},set(r,s){!e&&!_n(s)&&!mi(s)&&(s=ct(s));const o=ct(this),{has:a,get:l}=so(o);let c=a.call(o,r);c||(r=ct(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Yn(s,u)&&oi(o,"set",r,s):oi(o,"add",r,s),this},delete(r){const s=ct(this),{has:o,get:a}=so(s);let l=o.call(s,r);l||(r=ct(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&oi(s,"delete",r,void 0),c},clear(){const r=ct(this),s=r.size!==0,o=r.clear();return s&&oi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Pp(r,n,e)}),t}function Nc(n,e){const t=Dp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ft(t,r)&&r in i?t:i,r,s)}const Lp={get:Nc(!1,!1)},Ip={get:Nc(!1,!0)},Up={get:Nc(!0,!1)};const wd=new WeakMap,Ad=new WeakMap,Cd=new WeakMap,Np=new WeakMap;function Fp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Op(n){return n.__v_skip||!Object.isExtensible(n)?0:Fp(ap(n))}function Xr(n){return mi(n)?n:Fc(n,!1,Ap,Lp,wd)}function Bp(n){return Fc(n,!1,Rp,Ip,Ad)}function wl(n){return Fc(n,!0,Cp,Up,Cd)}function Fc(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Op(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function gr(n){return mi(n)?gr(n.__v_raw):!!(n&&n.__v_isReactive)}function mi(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function Oc(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function kp(n){return!ft(n,"__v_skip")&&Object.isExtensible(n)&&fd(n,"__v_skip",!0),n}const Un=n=>ht(n)?Xr(n):n,Jr=n=>ht(n)?wl(n):n;function Gt(n){return n?n.__v_isRef===!0:!1}function Ue(n){return zp(n,!1)}function zp(n,e){return Gt(n)?n:new Hp(n,e)}class Hp{constructor(e,t){this.dep=new Uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:Un(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||_n(e)||mi(e);e=i?e:ct(e),Yn(e,t)&&(this._rawValue=e,this._value=i?e:Un(e),this.dep.trigger())}}function Rd(n){return Gt(n)?n.value:n}const Vp={get:(n,e,t)=>e==="__v_raw"?n:Rd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Gt(r)&&!Gt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Pd(n){return gr(n)?n:new Proxy(n,Vp)}class Gp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return vd(this,!0),!0}get value(){const e=this.dep.track();return Md(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wp(n,e,t=!1){let i,r;return et(n)?i=n:(i=n.get,r=n.set),new Gp(i,r,t)}const ao={},Xo=new WeakMap;let sr;function Xp(n,e=!1,t=sr){if(t){let i=Xo.get(t);i||Xo.set(t,i=[]),i.push(n)}}function Yp(n,e,t=gt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:_n(S)||r===!1||r===0?ai(S,1):ai(S);let u,f,d,g,v=!1,_=!1;if(Gt(n)?(f=()=>n.value,v=_n(n)):gr(n)?(f=()=>c(n),v=!0):qe(n)?(_=!0,v=n.some(S=>gr(S)||_n(S)),f=()=>n.map(S=>{if(Gt(S))return S.value;if(gr(S))return c(S);if(et(S))return l?l(S,2):S()})):et(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){hi();try{d()}finally{pi()}}const S=sr;sr=u;try{return l?l(n,3,[g]):n(g)}finally{sr=S}}:f=$n,e&&r){const S=f,L=r===!0?1/0:r;f=()=>ai(S(),L)}const p=xp(),h=()=>{u.stop(),p&&p.active&&Cc(p.effects,u)};if(s&&e){const S=e;e=(...L)=>{S(...L),h()}}let T=_?new Array(n.length).fill(ao):ao;const w=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const L=u.run();if(r||v||(_?L.some((R,P)=>Yn(R,T[P])):Yn(L,T))){d&&d();const R=sr;sr=u;try{const P=[L,T===ao?void 0:_&&T[0]===ao?[]:T,g];T=L,l?l(e,3,P):e(...P)}finally{sr=R}}}else u.run()};return a&&a(w),u=new md(f),u.scheduler=o?()=>o(w,!1):w,g=S=>Xp(S,!1,u),d=u.onStop=()=>{const S=Xo.get(u);if(S){if(l)l(S,4);else for(const L of S)L();Xo.delete(u)}},e?i?w(!0):T=u.run():o?o(w.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ai(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Gt(n))ai(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)ai(n[i],e,t);else if(as(n)||Wr(n))n.forEach(i=>{ai(i,e,t)});else if(cd(n)){for(const i in n)ai(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ai(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xs(n,e,t,i){try{return i?n(...i):n()}catch(r){ha(r,e,t)}}function Nn(n,e,t,i){if(et(n)){const r=Xs(n,e,t,i);return r&&ad(r)&&r.catch(s=>{ha(s,e,t)}),r}if(qe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Nn(n[s],e,t,i));return r}}function ha(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||gt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){hi(),Xs(s,null,10,[n,l,c]),pi();return}}$p(n,t,r,i,o)}function $p(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Yt=[];let zn=-1;const Yr=[];let Di=null,zr=0;const Dd=Promise.resolve();let Yo=null;function un(n){const e=Yo||Dd;return n?e.then(this?n.bind(this):n):e}function qp(n){let e=zn+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,r=Yt[i],s=Fs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Bc(n){if(!(n.flags&1)){const e=Fs(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=Fs(t)?Yt.push(n):Yt.splice(qp(e),0,n),n.flags|=1,Ld()}}function Ld(){Yo||(Yo=Dd.then(Ud))}function Kp(n){qe(n)?Yr.push(...n):Di&&n.id===-1?Di.splice(zr+1,0,n):n.flags&1||(Yr.push(n),n.flags|=1),Ld()}function pu(n,e,t=zn+1){for(;t<Yt.length;t++){const i=Yt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Yt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Id(n){if(Yr.length){const e=[...new Set(Yr)].sort((t,i)=>Fs(t)-Fs(i));if(Yr.length=0,Di){Di.push(...e);return}for(Di=e,zr=0;zr<Di.length;zr++){const t=Di[zr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Di=null,zr=0}}const Fs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ud(n){try{for(zn=0;zn<Yt.length;zn++){const e=Yt[zn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Xs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;zn<Yt.length;zn++){const e=Yt[zn];e&&(e.flags&=-2)}zn=-1,Yt.length=0,Id(),Yo=null,(Yt.length||Yr.length)&&Ud()}}let Vt=null,Nd=null;function $o(n){const e=Vt;return Vt=n,Nd=n&&n.type.__scopeId||null,e}function lr(n,e=Vt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&jo(-1);const s=$o(e);let o;try{o=n(...r)}finally{$o(s),i._d&&jo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ut(n,e){if(Vt===null)return n;const t=_a(Vt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=gt]=e[r];s&&(et(s)&&(s={mounted:s,updated:s}),s.deep&&ai(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ki(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(hi(),Nn(l,t,8,[n.el,a,n,e]),pi())}}function Al(n,e){if(qt){let t=qt.provides;const i=qt.parent&&qt.parent.provides;i===t&&(t=qt.provides=Object.create(i)),t[n]=e}}function Fi(n,e,t=!1){const i=hh();if(i||qr){let r=qr?qr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&et(e)?e.call(i&&i.proxy):e}}const jp=Symbol.for("v-scx"),Zp=()=>Fi(jp);function $e(n,e,t){return Fd(n,e,t)}function Fd(n,e,t=gt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ct({},t),l=e&&i||!e&&s!=="post";let c;if(zs){if(s==="sync"){const g=Zp();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=$n,g.resume=$n,g.pause=$n,g}}const u=qt;a.call=(g,v,_)=>Nn(g,u,v,_);let f=!1;s==="post"?a.scheduler=g=>{Qt(g,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(g,v)=>{v?g():Bc(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=Yp(n,e,a);return zs&&(c?c.push(d):l&&d()),d}function Jp(n,e,t){const i=this.proxy,r=Et(n)?n.includes(".")?Od(i,n):()=>i[n]:n.bind(i,i);let s;et(e)?s=e:(s=e.handler,t=e);const o=Ys(this),a=Fd(r,s.bind(i),t);return o(),a}function Od(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Qp=Symbol("_vte"),Bd=n=>n.__isTeleport,Vn=Symbol("_leaveCb"),ms=Symbol("_enterCb");function em(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fn(()=>{n.isMounted=!0}),Yd(()=>{n.isUnmounting=!0}),n}const mn=[Function,Array],kd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},zd=n=>{const e=n.subTree;return e.component?zd(e.component):e},tm={name:"BaseTransition",props:kd,setup(n,{slots:e}){const t=hh(),i=em();return()=>{const r=e.default&&Gd(e.default(),!0);if(!r||!r.length)return;const s=Hd(r),o=ct(n),{mode:a}=o;if(i.isLeaving)return La(s);const l=mu(s);if(!l)return La(s);let c=Cl(l,o,i,t,f=>c=f);l.type!==Ht&&Os(l,c);let u=t.subTree&&mu(t.subTree);if(u&&u.type!==Ht&&!cr(u,l)&&zd(t).type!==Ht){let f=Cl(u,o,i,t);if(Os(u,f),a==="out-in"&&l.type!==Ht)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},La(s);a==="in-out"&&l.type!==Ht?f.delayLeave=(d,g,v)=>{const _=Vd(i,u);_[String(u.key)]=u,d[Vn]=()=>{g(),d[Vn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Hd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ht){e=t;break}}return e}const nm=tm;function Vd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Cl(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:g,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:p,onAppear:h,onAfterAppear:T,onAppearCancelled:w}=e,S=String(n.key),L=Vd(t,n),R=(E,y)=>{E&&Nn(E,i,9,y)},P=(E,y)=>{const N=y[1];R(E,y),qe(E)?E.every(B=>B.length<=1)&&N():E.length<=1&&N()},F={mode:o,persisted:a,beforeEnter(E){let y=l;if(!t.isMounted)if(s)y=p||l;else return;E[Vn]&&E[Vn](!0);const N=L[S];N&&cr(n,N)&&N.el[Vn]&&N.el[Vn](),R(y,[E])},enter(E){if(L[S]===n)return;let y=c,N=u,B=f;if(!t.isMounted)if(s)y=h||c,N=T||u,B=w||f;else return;let O=!1;E[ms]=K=>{O||(O=!0,K?R(B,[E]):R(N,[E]),F.delayedLeave&&F.delayedLeave(),E[ms]=void 0)};const $=E[ms].bind(null,!1);y?P(y,[E,$]):$()},leave(E,y){const N=String(n.key);if(E[ms]&&E[ms](!0),t.isUnmounting)return y();R(d,[E]);let B=!1;E[Vn]=$=>{B||(B=!0,y(),$?R(_,[E]):R(v,[E]),E[Vn]=void 0,L[N]===n&&delete L[N])};const O=E[Vn].bind(null,!1);L[N]=n,g?P(g,[E,O]):O()},clone(E){const y=Cl(E,e,t,i,r);return r&&r(y),y}};return F}function La(n){if(pa(n))return n=zi(n),n.children=null,n}function mu(n){if(!pa(n))return Bd(n.type)&&n.children?Hd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&et(t.default))return t.default()}}function Os(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Os(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Gd(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===$t?(o.patchFlag&128&&r++,i=i.concat(Gd(o.children,e,a))):(e||o.type!==Ht)&&i.push(a!=null?zi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Wi(n,e){return et(n)?Ct({name:n.name},e,{setup:n}):n}function Wd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function gu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const qo=new WeakMap;function Ps(n,e,t,i,r=!1){if(qe(n)){n.forEach((_,p)=>Ps(_,e&&(qe(e)?e[p]:e),t,i,r));return}if($r(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ps(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?_a(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===gt?a.refs={}:a.refs,f=a.setupState,d=ct(f),g=f===gt?od:_=>gu(u,_)?!1:ft(d,_),v=(_,p)=>!(p&&gu(u,p));if(c!=null&&c!==l){if(vu(e),Et(c))u[c]=null,g(c)&&(f[c]=null);else if(Gt(c)){const _=e;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(et(l))Xs(l,a,12,[o,u]);else{const _=Et(l),p=Gt(l);if(_||p){const h=()=>{if(n.f){const T=_?g(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)qe(T)&&Cc(T,s);else if(qe(T))T.includes(s)||T.push(s);else if(_)u[l]=[s],g(l)&&(f[l]=u[l]);else{const w=[s];v(l,n.k)&&(l.value=w),n.k&&(u[n.k]=w)}}else _?(u[l]=o,g(l)&&(f[l]=o)):p&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const T=()=>{h(),qo.delete(n)};T.id=-1,qo.set(n,T),Qt(T,t)}else vu(n),h()}}}function vu(n){const e=qo.get(n);e&&(e.flags|=8,qo.delete(n))}fa().requestIdleCallback;fa().cancelIdleCallback;const $r=n=>!!n.type.__asyncLoader,pa=n=>n.type.__isKeepAlive;function im(n,e){Xd(n,"a",e)}function rm(n,e){Xd(n,"da",e)}function Xd(n,e,t=qt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ma(e,i,t),t){let r=t.parent;for(;r&&r.parent;)pa(r.parent.vnode)&&sm(i,e,t,r),r=r.parent}}function sm(n,e,t,i){const r=ma(e,n,i,!0);Kn(()=>{Cc(i[e],r)},t)}function ma(n,e,t=qt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{hi();const a=Ys(t),l=Nn(e,t,n,o);return a(),pi(),l});return i?r.unshift(s):r.push(s),s}}const xi=n=>(e,t=qt)=>{(!zs||n==="sp")&&ma(n,(...i)=>e(...i),t)},om=xi("bm"),Fn=xi("m"),am=xi("bu"),lm=xi("u"),Yd=xi("bum"),Kn=xi("um"),cm=xi("sp"),um=xi("rtg"),fm=xi("rtc");function dm(n,e=qt){ma("ec",n,e)}const hm=Symbol.for("v-ndc");function pm(n,e,t,i){let r;const s=t,o=qe(n);if(o||Et(n)){const a=o&&gr(n);let l=!1,c=!1;a&&(l=!_n(n),c=mi(n),n=da(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Jr(Un(n[u])):Un(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function Rl(n,e,t={},i,r){if(Vt.ce||Vt.parent&&$r(Vt.parent)&&Vt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),tt(),At($t,null,[St("slot",t,i)],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),tt();const o=s&&$d(s(t)),a=t.key||o&&o.key,l=At($t,{key:(a&&!In(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function $d(n){return n.some(e=>ks(e)?!(e.type===Ht||e.type===$t&&!$d(e.children)):!0)?n:null}const Pl=n=>n?ph(n)?_a(n):Pl(n.parent):null,Ds=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pl(n.parent),$root:n=>Pl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Kd(n),$forceUpdate:n=>n.f||(n.f=()=>{Bc(n.update)}),$nextTick:n=>n.n||(n.n=un.bind(n.proxy)),$watch:n=>Jp.bind(n)}),Ia=(n,e)=>n!==gt&&!n.__isScriptSetup&&ft(n,e),mm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ia(i,e))return o[e]=1,i[e];if(r!==gt&&ft(r,e))return o[e]=2,r[e];if(ft(s,e))return o[e]=3,s[e];if(t!==gt&&ft(t,e))return o[e]=4,t[e];Dl&&(o[e]=0)}}const c=Ds[e];let u,f;if(c)return e==="$attrs"&&zt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==gt&&ft(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ft(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ia(r,e)?(r[e]=t,!0):i!==gt&&ft(i,e)?(i[e]=t,!0):ft(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==gt&&a[0]!=="$"&&ft(n,a)||Ia(e,a)||ft(s,a)||ft(i,a)||ft(Ds,a)||ft(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ft(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _u(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Dl=!0;function gm(n){const e=Kd(n),t=n.proxy,i=n.ctx;Dl=!1,e.beforeCreate&&xu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:v,activated:_,deactivated:p,beforeDestroy:h,beforeUnmount:T,destroyed:w,unmounted:S,render:L,renderTracked:R,renderTriggered:P,errorCaptured:F,serverPrefetch:E,expose:y,inheritAttrs:N,components:B,directives:O,filters:$}=e;if(c&&vm(c,i,null),o)for(const J in o){const W=o[J];et(W)&&(i[J]=W.bind(t))}if(r){const J=r.call(t,t);ht(J)&&(n.data=Xr(J))}if(Dl=!0,s)for(const J in s){const W=s[J],ce=et(W)?W.bind(t,t):et(W.get)?W.get.bind(t,t):$n,q=!et(W)&&et(W.set)?W.set.bind(t):$n,re=rt({get:ce,set:q});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>re.value,set:xe=>re.value=xe})}if(a)for(const J in a)qd(a[J],i,t,J);if(l){const J=et(l)?l.call(t):l;Reflect.ownKeys(J).forEach(W=>{Al(W,J[W])})}u&&xu(u,n,"c");function Z(J,W){qe(W)?W.forEach(ce=>J(ce.bind(t))):W&&J(W.bind(t))}if(Z(om,f),Z(Fn,d),Z(am,g),Z(lm,v),Z(im,_),Z(rm,p),Z(dm,F),Z(fm,R),Z(um,P),Z(Yd,T),Z(Kn,S),Z(cm,E),qe(y))if(y.length){const J=n.exposed||(n.exposed={});y.forEach(W=>{Object.defineProperty(J,W,{get:()=>t[W],set:ce=>t[W]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===$n&&(n.render=L),N!=null&&(n.inheritAttrs=N),B&&(n.components=B),O&&(n.directives=O),E&&Wd(n)}function vm(n,e,t=$n){qe(n)&&(n=Ll(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=Fi(r.from||i,r.default,!0):s=Fi(r.from||i):s=Fi(r),Gt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function xu(n,e,t){Nn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function qd(n,e,t,i){let r=i.includes(".")?Od(t,i):()=>t[i];if(Et(n)){const s=e[n];et(s)&&$e(r,s)}else if(et(n))$e(r,n.bind(t));else if(ht(n))if(qe(n))n.forEach(s=>qd(s,e,t,i));else{const s=et(n.handler)?n.handler.bind(t):e[n.handler];et(s)&&$e(r,s,n)}}function Kd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ko(l,c,o,!0)),Ko(l,e,o)),ht(e)&&s.set(e,l),l}function Ko(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ko(n,s,t,!0),r&&r.forEach(o=>Ko(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=_m[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const _m={data:Mu,props:Su,emits:Su,methods:bs,computed:bs,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:bs,directives:bs,watch:Mm,provide:Mu,inject:xm};function Mu(n,e){return e?n?function(){return Ct(et(n)?n.call(this,this):n,et(e)?e.call(this,this):e)}:e:n}function xm(n,e){return bs(Ll(n),Ll(e))}function Ll(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function bs(n,e){return n?Ct(Object.create(null),n,e):e}function Su(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:Ct(Object.create(null),_u(n),_u(e??{})):e}function Mm(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function jd(){return{app:null,config:{isNativeTag:od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sm=0;function ym(n,e){return function(i,r=null){et(i)||(i=Ct({},i)),r!=null&&!ht(r)&&(r=null);const s=jd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Sm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:eg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&et(u.install)?(o.add(u),u.install(c,...f)):et(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const g=c._ceVNode||St(i,r);return g.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(g,u,d),l=!0,c._container=u,u.__vue_app__=c,_a(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=qr;qr=c;try{return u()}finally{qr=f}}};return c}}let qr=null;const Em=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Pn(e)}Modifiers`]||n[`${Gi(e)}Modifiers`];function bm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let r=t;const s=e.startsWith("update:"),o=s&&Em(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Et(u)?u.trim():u)),o.number&&(r=t.map(ua)));let a,l=i[a=Aa(e)]||i[a=Aa(Pn(e))];!l&&s&&(l=i[a=Aa(Gi(e))]),l&&Nn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(c,n,6,r)}}const Tm=new WeakMap;function Zd(n,e,t=!1){const i=t?Tm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!et(n)){const l=c=>{const u=Zd(c,e,!0);u&&(a=!0,Ct(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):(qe(s)?s.forEach(l=>o[l]=null):Ct(o,s),ht(n)&&i.set(n,o),o)}function ga(n,e){return!n||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ft(n,e[0].toLowerCase()+e.slice(1))||ft(n,Gi(e))||ft(n,e))}function yu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:g,ctx:v,inheritAttrs:_}=n,p=$o(n);let h,T;try{if(t.shapeFlag&4){const S=r||i,L=S;h=Wn(c.call(L,S,u,f,g,d,v)),T=a}else{const S=e;h=Wn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),T=e.props?a:wm(a)}}catch(S){Ls.length=0,ha(S,n,1),h=St(Ht)}let w=h;if(T&&_!==!1){const S=Object.keys(T),{shapeFlag:L}=w;S.length&&L&7&&(s&&S.some(la)&&(T=Am(T,s)),w=zi(w,T,!1,!0))}return t.dirs&&(w=zi(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&Os(w,t.transition),h=w,$o(p),h}const wm=n=>{let e;for(const t in n)(t==="class"||t==="style"||aa(t))&&((e||(e={}))[t]=n[t]);return e},Am=(n,e)=>{const t={};for(const i in n)(!la(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Cm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Eu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Jd(o,i,d)&&!ga(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Eu(i,o,c):!0:!!o;return!1}function Eu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Jd(e,n,s)&&!ga(t,s))return!0}return!1}function Jd(n,e,t){const i=n[t],r=e[t];return t==="style"&&ht(i)&&ht(r)?!ls(i,r):i!==r}function Rm({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Qd={},eh=()=>Object.create(Qd),th=n=>Object.getPrototypeOf(n)===Qd;function Pm(n,e,t,i=!1){const r={},s=eh();n.propsDefaults=Object.create(null),nh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Bp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Dm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ct(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ga(n.emitsOptions,d))continue;const g=e[d];if(l)if(ft(s,d))g!==s[d]&&(s[d]=g,c=!0);else{const v=Pn(d);r[v]=Il(l,a,v,g,n,!1)}else g!==s[d]&&(s[d]=g,c=!0)}}}else{nh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ft(e,f)&&((u=Gi(f))===f||!ft(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Il(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ft(e,f))&&(delete s[f],c=!0)}c&&oi(n.attrs,"set","")}function nh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(As(l))continue;const c=e[l];let u;r&&ft(r,u=Pn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ga(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ct(t),c=a||gt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Il(r,l,f,c[f],n,!ft(c,f))}}return o}function Il(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ft(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&et(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ys(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Gi(t))&&(i=!0))}return i}const Lm=new WeakMap;function ih(n,e,t=!1){const i=t?Lm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!et(n)){const u=f=>{l=!0;const[d,g]=ih(f,e,!0);Ct(o,d),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,Gr),Gr;if(qe(s))for(let u=0;u<s.length;u++){const f=Pn(s[u]);bu(f)&&(o[f]=gt)}else if(s)for(const u in s){const f=Pn(u);if(bu(f)){const d=s[u],g=o[f]=qe(d)||et(d)?{type:d}:Ct({},d),v=g.type;let _=!1,p=!0;if(qe(v))for(let h=0;h<v.length;++h){const T=v[h],w=et(T)&&T.name;if(w==="Boolean"){_=!0;break}else w==="String"&&(p=!1)}else _=et(v)&&v.name==="Boolean";g[0]=_,g[1]=p,(_||ft(g,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function bu(n){return n[0]!=="$"&&!As(n)}const kc=n=>n==="_"||n==="_ctx"||n==="$stable",zc=n=>qe(n)?n.map(Wn):[Wn(n)],Im=(n,e,t)=>{if(e._n)return e;const i=lr((...r)=>zc(e(...r)),t);return i._c=!1,i},rh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(kc(r))continue;const s=n[r];if(et(s))e[r]=Im(r,s,i);else if(s!=null){const o=zc(s);e[r]=()=>o}}},sh=(n,e)=>{const t=zc(e);n.slots.default=()=>t},oh=(n,e,t)=>{for(const i in e)(t||!kc(i))&&(n[i]=e[i])},Um=(n,e,t)=>{const i=n.slots=eh();if(n.vnode.shapeFlag&32){const r=e._;r?(oh(i,e,t),t&&fd(i,"_",r,!0)):rh(e,i)}else e&&sh(n,e)},Nm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:oh(r,e,t):(s=!e.$stable,rh(e,r)),o=e}else e&&(sh(n,e),o={default:1});if(s)for(const a in r)!kc(a)&&o[a]==null&&delete r[a]},Qt=zm;function Fm(n){return Om(n)}function Om(n,e){const t=fa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=$n,insertStaticContent:v}=n,_=(b,U,A,fe=null,Q=null,te=null,ue=void 0,Me=null,ie=!!U.dynamicChildren)=>{if(b===U)return;b&&!cr(b,U)&&(fe=Ae(b),xe(b,Q,te,!0),b=null),U.patchFlag===-2&&(ie=!1,U.dynamicChildren=null);const{type:x,ref:m,shapeFlag:M}=U;switch(x){case va:p(b,U,A,fe);break;case Ht:h(b,U,A,fe);break;case Na:b==null&&T(U,A,fe,ue);break;case $t:B(b,U,A,fe,Q,te,ue,Me,ie);break;default:M&1?L(b,U,A,fe,Q,te,ue,Me,ie):M&6?O(b,U,A,fe,Q,te,ue,Me,ie):(M&64||M&128)&&x.process(b,U,A,fe,Q,te,ue,Me,ie,He)}m!=null&&Q?Ps(m,b&&b.ref,te,U||b,!U):m==null&&b&&b.ref!=null&&Ps(b.ref,null,te,b,!0)},p=(b,U,A,fe)=>{if(b==null)i(U.el=a(U.children),A,fe);else{const Q=U.el=b.el;U.children!==b.children&&c(Q,U.children)}},h=(b,U,A,fe)=>{b==null?i(U.el=l(U.children||""),A,fe):U.el=b.el},T=(b,U,A,fe)=>{[b.el,b.anchor]=v(b.children,U,A,fe,b.el,b.anchor)},w=({el:b,anchor:U},A,fe)=>{let Q;for(;b&&b!==U;)Q=d(b),i(b,A,fe),b=Q;i(U,A,fe)},S=({el:b,anchor:U})=>{let A;for(;b&&b!==U;)A=d(b),r(b),b=A;r(U)},L=(b,U,A,fe,Q,te,ue,Me,ie)=>{if(U.type==="svg"?ue="svg":U.type==="math"&&(ue="mathml"),b==null)R(U,A,fe,Q,te,ue,Me,ie);else{const x=b.el&&b.el._isVueCE?b.el:null;try{x&&x._beginPatch(),E(b,U,Q,te,ue,Me,ie)}finally{x&&x._endPatch()}}},R=(b,U,A,fe,Q,te,ue,Me)=>{let ie,x;const{props:m,shapeFlag:M,transition:I,dirs:k}=b;if(ie=b.el=o(b.type,te,m&&m.is,m),M&8?u(ie,b.children):M&16&&F(b.children,ie,null,fe,Q,Ua(b,te),ue,Me),k&&Ki(b,null,fe,"created"),P(ie,b,b.scopeId,ue,fe),m){for(const de in m)de!=="value"&&!As(de)&&s(ie,de,null,m[de],te,fe);"value"in m&&s(ie,"value",null,m.value,te),(x=m.onVnodeBeforeMount)&&kn(x,fe,b)}k&&Ki(b,null,fe,"beforeMount");const G=Bm(Q,I);G&&I.beforeEnter(ie),i(ie,U,A),((x=m&&m.onVnodeMounted)||G||k)&&Qt(()=>{try{x&&kn(x,fe,b),G&&I.enter(ie),k&&Ki(b,null,fe,"mounted")}finally{}},Q)},P=(b,U,A,fe,Q)=>{if(A&&g(b,A),fe)for(let te=0;te<fe.length;te++)g(b,fe[te]);if(Q){let te=Q.subTree;if(U===te||uh(te.type)&&(te.ssContent===U||te.ssFallback===U)){const ue=Q.vnode;P(b,ue,ue.scopeId,ue.slotScopeIds,Q.parent)}}},F=(b,U,A,fe,Q,te,ue,Me,ie=0)=>{for(let x=ie;x<b.length;x++){const m=b[x]=Me?si(b[x]):Wn(b[x]);_(null,m,U,A,fe,Q,te,ue,Me)}},E=(b,U,A,fe,Q,te,ue)=>{const Me=U.el=b.el;let{patchFlag:ie,dynamicChildren:x,dirs:m}=U;ie|=b.patchFlag&16;const M=b.props||gt,I=U.props||gt;let k;if(A&&ji(A,!1),(k=I.onVnodeBeforeUpdate)&&kn(k,A,U,b),m&&Ki(U,b,A,"beforeUpdate"),A&&ji(A,!0),(M.innerHTML&&I.innerHTML==null||M.textContent&&I.textContent==null)&&u(Me,""),x?y(b.dynamicChildren,x,Me,A,fe,Ua(U,Q),te):ue||W(b,U,Me,null,A,fe,Ua(U,Q),te,!1),ie>0){if(ie&16)N(Me,M,I,A,Q);else if(ie&2&&M.class!==I.class&&s(Me,"class",null,I.class,Q),ie&4&&s(Me,"style",M.style,I.style,Q),ie&8){const G=U.dynamicProps;for(let de=0;de<G.length;de++){const ae=G[de],_e=M[ae],Be=I[ae];(Be!==_e||ae==="value")&&s(Me,ae,_e,Be,Q,A)}}ie&1&&b.children!==U.children&&u(Me,U.children)}else!ue&&x==null&&N(Me,M,I,A,Q);((k=I.onVnodeUpdated)||m)&&Qt(()=>{k&&kn(k,A,U,b),m&&Ki(U,b,A,"updated")},fe)},y=(b,U,A,fe,Q,te,ue)=>{for(let Me=0;Me<U.length;Me++){const ie=b[Me],x=U[Me],m=ie.el&&(ie.type===$t||!cr(ie,x)||ie.shapeFlag&198)?f(ie.el):A;_(ie,x,m,null,fe,Q,te,ue,!0)}},N=(b,U,A,fe,Q)=>{if(U!==A){if(U!==gt)for(const te in U)!As(te)&&!(te in A)&&s(b,te,U[te],null,Q,fe);for(const te in A){if(As(te))continue;const ue=A[te],Me=U[te];ue!==Me&&te!=="value"&&s(b,te,Me,ue,Q,fe)}"value"in A&&s(b,"value",U.value,A.value,Q)}},B=(b,U,A,fe,Q,te,ue,Me,ie)=>{const x=U.el=b?b.el:a(""),m=U.anchor=b?b.anchor:a("");let{patchFlag:M,dynamicChildren:I,slotScopeIds:k}=U;k&&(Me=Me?Me.concat(k):k),b==null?(i(x,A,fe),i(m,A,fe),F(U.children||[],A,m,Q,te,ue,Me,ie)):M>0&&M&64&&I&&b.dynamicChildren&&b.dynamicChildren.length===I.length?(y(b.dynamicChildren,I,A,Q,te,ue,Me),(U.key!=null||Q&&U===Q.subTree)&&ah(b,U,!0)):W(b,U,A,m,Q,te,ue,Me,ie)},O=(b,U,A,fe,Q,te,ue,Me,ie)=>{U.slotScopeIds=Me,b==null?U.shapeFlag&512?Q.ctx.activate(U,A,fe,ue,ie):$(U,A,fe,Q,te,ue,ie):K(b,U,ie)},$=(b,U,A,fe,Q,te,ue)=>{const Me=b.component=$m(b,fe,Q);if(pa(b)&&(Me.ctx.renderer=He),qm(Me,!1,ue),Me.asyncDep){if(Q&&Q.registerDep(Me,Z,ue),!b.el){const ie=Me.subTree=St(Ht);h(null,ie,U,A),b.placeholder=ie.el}}else Z(Me,b,U,A,Q,te,ue)},K=(b,U,A)=>{const fe=U.component=b.component;if(Cm(b,U,A))if(fe.asyncDep&&!fe.asyncResolved){J(fe,U,A);return}else fe.next=U,fe.update();else U.el=b.el,fe.vnode=U},Z=(b,U,A,fe,Q,te,ue)=>{const Me=()=>{if(b.isMounted){let{next:M,bu:I,u:k,parent:G,vnode:de}=b;{const H=lh(b);if(H){M&&(M.el=de.el,J(b,M,ue)),H.asyncDep.then(()=>{Qt(()=>{b.isUnmounted||x()},Q)});return}}let ae=M,_e;ji(b,!1),M?(M.el=de.el,J(b,M,ue)):M=de,I&&No(I),(_e=M.props&&M.props.onVnodeBeforeUpdate)&&kn(_e,G,M,de),ji(b,!0);const Be=yu(b),Se=b.subTree;b.subTree=Be,_(Se,Be,f(Se.el),Ae(Se),b,Q,te),M.el=Be.el,ae===null&&Rm(b,Be.el),k&&Qt(k,Q),(_e=M.props&&M.props.onVnodeUpdated)&&Qt(()=>kn(_e,G,M,de),Q)}else{let M;const{el:I,props:k}=U,{bm:G,m:de,parent:ae,root:_e,type:Be}=b,Se=$r(U);ji(b,!1),G&&No(G),!Se&&(M=k&&k.onVnodeBeforeMount)&&kn(M,ae,U),ji(b,!0);{_e.ce&&_e.ce._hasShadowRoot()&&_e.ce._injectChildStyle(Be,b.parent?b.parent.type:void 0);const H=b.subTree=yu(b);_(null,H,A,fe,b,Q,te),U.el=H.el}if(de&&Qt(de,Q),!Se&&(M=k&&k.onVnodeMounted)){const H=U;Qt(()=>kn(M,ae,H),Q)}(U.shapeFlag&256||ae&&$r(ae.vnode)&&ae.vnode.shapeFlag&256)&&b.a&&Qt(b.a,Q),b.isMounted=!0,U=A=fe=null}};b.scope.on();const ie=b.effect=new md(Me);b.scope.off();const x=b.update=ie.run.bind(ie),m=b.job=ie.runIfDirty.bind(ie);m.i=b,m.id=b.uid,ie.scheduler=()=>Bc(m),ji(b,!0),x()},J=(b,U,A)=>{U.component=b;const fe=b.vnode.props;b.vnode=U,b.next=null,Dm(b,U.props,fe,A),Nm(b,U.children,A),hi(),pu(b),pi()},W=(b,U,A,fe,Q,te,ue,Me,ie=!1)=>{const x=b&&b.children,m=b?b.shapeFlag:0,M=U.children,{patchFlag:I,shapeFlag:k}=U;if(I>0){if(I&128){q(x,M,A,fe,Q,te,ue,Me,ie);return}else if(I&256){ce(x,M,A,fe,Q,te,ue,Me,ie);return}}k&8?(m&16&&ye(x,Q,te),M!==x&&u(A,M)):m&16?k&16?q(x,M,A,fe,Q,te,ue,Me,ie):ye(x,Q,te,!0):(m&8&&u(A,""),k&16&&F(M,A,fe,Q,te,ue,Me,ie))},ce=(b,U,A,fe,Q,te,ue,Me,ie)=>{b=b||Gr,U=U||Gr;const x=b.length,m=U.length,M=Math.min(x,m);let I;for(I=0;I<M;I++){const k=U[I]=ie?si(U[I]):Wn(U[I]);_(b[I],k,A,null,Q,te,ue,Me,ie)}x>m?ye(b,Q,te,!0,!1,M):F(U,A,fe,Q,te,ue,Me,ie,M)},q=(b,U,A,fe,Q,te,ue,Me,ie)=>{let x=0;const m=U.length;let M=b.length-1,I=m-1;for(;x<=M&&x<=I;){const k=b[x],G=U[x]=ie?si(U[x]):Wn(U[x]);if(cr(k,G))_(k,G,A,null,Q,te,ue,Me,ie);else break;x++}for(;x<=M&&x<=I;){const k=b[M],G=U[I]=ie?si(U[I]):Wn(U[I]);if(cr(k,G))_(k,G,A,null,Q,te,ue,Me,ie);else break;M--,I--}if(x>M){if(x<=I){const k=I+1,G=k<m?U[k].el:fe;for(;x<=I;)_(null,U[x]=ie?si(U[x]):Wn(U[x]),A,G,Q,te,ue,Me,ie),x++}}else if(x>I)for(;x<=M;)xe(b[x],Q,te,!0),x++;else{const k=x,G=x,de=new Map;for(x=G;x<=I;x++){const he=U[x]=ie?si(U[x]):Wn(U[x]);he.key!=null&&de.set(he.key,x)}let ae,_e=0;const Be=I-G+1;let Se=!1,H=0;const me=new Array(Be);for(x=0;x<Be;x++)me[x]=0;for(x=k;x<=M;x++){const he=b[x];if(_e>=Be){xe(he,Q,te,!0);continue}let Xe;if(he.key!=null)Xe=de.get(he.key);else for(ae=G;ae<=I;ae++)if(me[ae-G]===0&&cr(he,U[ae])){Xe=ae;break}Xe===void 0?xe(he,Q,te,!0):(me[Xe-G]=x+1,Xe>=H?H=Xe:Se=!0,_(he,U[Xe],A,null,Q,te,ue,Me,ie),_e++)}const Ce=Se?km(me):Gr;for(ae=Ce.length-1,x=Be-1;x>=0;x--){const he=G+x,Xe=U[he],Ne=U[he+1],je=he+1<m?Ne.el||ch(Ne):fe;me[x]===0?_(null,Xe,A,je,Q,te,ue,Me,ie):Se&&(ae<0||x!==Ce[ae]?re(Xe,A,je,2):ae--)}}},re=(b,U,A,fe,Q=null)=>{const{el:te,type:ue,transition:Me,children:ie,shapeFlag:x}=b;if(x&6){re(b.component.subTree,U,A,fe);return}if(x&128){b.suspense.move(U,A,fe);return}if(x&64){ue.move(b,U,A,He);return}if(ue===$t){i(te,U,A);for(let M=0;M<ie.length;M++)re(ie[M],U,A,fe);i(b.anchor,U,A);return}if(ue===Na){w(b,U,A);return}if(fe!==2&&x&1&&Me)if(fe===0)Me.beforeEnter(te),i(te,U,A),Qt(()=>Me.enter(te),Q);else{const{leave:M,delayLeave:I,afterLeave:k}=Me,G=()=>{b.ctx.isUnmounted?r(te):i(te,U,A)},de=()=>{te._isLeaving&&te[Vn](!0),M(te,()=>{G(),k&&k()})};I?I(te,G,de):de()}else i(te,U,A)},xe=(b,U,A,fe=!1,Q=!1)=>{const{type:te,props:ue,ref:Me,children:ie,dynamicChildren:x,shapeFlag:m,patchFlag:M,dirs:I,cacheIndex:k,memo:G}=b;if(M===-2&&(Q=!1),Me!=null&&(hi(),Ps(Me,null,A,b,!0),pi()),k!=null&&(U.renderCache[k]=void 0),m&256){U.ctx.deactivate(b);return}const de=m&1&&I,ae=!$r(b);let _e;if(ae&&(_e=ue&&ue.onVnodeBeforeUnmount)&&kn(_e,U,b),m&6)pe(b.component,A,fe);else{if(m&128){b.suspense.unmount(A,fe);return}de&&Ki(b,null,U,"beforeUnmount"),m&64?b.type.remove(b,U,A,He,fe):x&&!x.hasOnce&&(te!==$t||M>0&&M&64)?ye(x,U,A,!1,!0):(te===$t&&M&384||!Q&&m&16)&&ye(ie,U,A),fe&&Ie(b)}const Be=G!=null&&k==null;(ae&&(_e=ue&&ue.onVnodeUnmounted)||de||Be)&&Qt(()=>{_e&&kn(_e,U,b),de&&Ki(b,null,U,"unmounted"),Be&&(b.el=null)},A)},Ie=b=>{const{type:U,el:A,anchor:fe,transition:Q}=b;if(U===$t){j(A,fe);return}if(U===Na){S(b);return}const te=()=>{r(A),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(b.shapeFlag&1&&Q&&!Q.persisted){const{leave:ue,delayLeave:Me}=Q,ie=()=>ue(A,te);Me?Me(b.el,te,ie):ie()}else te()},j=(b,U)=>{let A;for(;b!==U;)A=d(b),r(b),b=A;r(U)},pe=(b,U,A)=>{const{bum:fe,scope:Q,job:te,subTree:ue,um:Me,m:ie,a:x}=b;Tu(ie),Tu(x),fe&&No(fe),Q.stop(),te&&(te.flags|=8,xe(ue,b,U,A)),Me&&Qt(Me,U),Qt(()=>{b.isUnmounted=!0},U)},ye=(b,U,A,fe=!1,Q=!1,te=0)=>{for(let ue=te;ue<b.length;ue++)xe(b[ue],U,A,fe,Q)},Ae=b=>{if(b.shapeFlag&6)return Ae(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const U=d(b.anchor||b.el),A=U&&U[Qp];return A?d(A):U};let Le=!1;const ke=(b,U,A)=>{let fe;b==null?U._vnode&&(xe(U._vnode,null,null,!0),fe=U._vnode.component):_(U._vnode||null,b,U,null,null,null,A),U._vnode=b,Le||(Le=!0,pu(fe),Id(),Le=!1)},He={p:_,um:xe,m:re,r:Ie,mt:$,mc:F,pc:W,pbc:y,n:Ae,o:n};return{render:ke,hydrate:void 0,createApp:ym(ke)}}function Ua({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ji({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Bm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ah(n,e,t=!1){const i=n.children,r=e.children;if(qe(i)&&qe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=si(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&ah(o,a)),a.type===va&&(a.patchFlag===-1&&(a=r[s]=si(a)),a.el=o.el),a.type===Ht&&!a.el&&(a.el=o.el)}}function km(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function lh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lh(e)}function Tu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function ch(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?ch(e.subTree):null}const uh=n=>n.__isSuspense;function zm(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):Kp(n)}const $t=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),Na=Symbol.for("v-stc"),Ls=[];let fn=null;function tt(n=!1){Ls.push(fn=n?null:[])}function Hm(){Ls.pop(),fn=Ls[Ls.length-1]||null}let Bs=1;function jo(n,e=!1){Bs+=n,n<0&&fn&&e&&(fn.hasOnce=!0)}function fh(n){return n.dynamicChildren=Bs>0?fn||Gr:null,Hm(),Bs>0&&fn&&fn.push(n),n}function Mt(n,e,t,i,r,s){return fh(Ge(n,e,t,i,r,s,!0))}function At(n,e,t,i,r){return fh(St(n,e,t,i,r,!0))}function ks(n){return n?n.__v_isVNode===!0:!1}function cr(n,e){return n.type===e.type&&n.key===e.key}const dh=({key:n})=>n??null,Fo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||Gt(n)||et(n)?{i:Vt,r:n,k:e,f:!!t}:n:null);function Ge(n,e=null,t=null,i=0,r=null,s=n===$t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&dh(e),ref:e&&Fo(e),scopeId:Nd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return a?(Hc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),Bs>0&&!o&&fn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&fn.push(l),l}const St=Vm;function Vm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===hm)&&(n=Ht),ks(n)){const a=zi(n,e,!0);return t&&Hc(a,t),Bs>0&&!s&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if(Jm(n)&&(n=n.__vccOpts),e){e=Gm(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=ln(a)),ht(l)&&(Oc(l)&&!qe(l)&&(l=Ct({},l)),e.style=An(l))}const o=Et(n)?1:uh(n)?128:Bd(n)?64:ht(n)?4:et(n)?2:0;return Ge(n,e,t,i,r,o,s,!0)}function Gm(n){return n?Oc(n)||th(n)?Ct({},n):n:null}function zi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Wm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&dh(c),ref:e&&e.ref?t&&s?qe(s)?s.concat(Fo(e)):[s,Fo(e)]:Fo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==$t?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zi(n.ssContent),ssFallback:n.ssFallback&&zi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Os(u,l.clone(u)),u}function Hn(n=" ",e=0){return St(va,null,n,e)}function nn(n="",e=!1){return e?(tt(),At(Ht,null,n)):St(Ht,null,n)}function Wn(n){return n==null||typeof n=="boolean"?St(Ht):qe(n)?St($t,null,n.slice()):ks(n)?si(n):St(va,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:zi(n)}function Hc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Hc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!th(e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else et(e)?(e={default:e,_ctx:Vt},t=32):(e=String(e),i&64?(t=16,e=[Hn(e)]):t=8);n.children=e,n.shapeFlag|=t}function Wm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ln([e.class,i.class]));else if(r==="style")e.style=An([e.style,i.style]);else if(aa(r)){const s=e[r],o=i[r];o&&s!==o&&!(qe(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!la(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function kn(n,e,t,i=null){Nn(n,e,7,[t,i])}const Xm=jd();let Ym=0;function $m(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Xm,s={uid:Ym++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ih(i,r),emitsOptions:Zd(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=bm.bind(null,s),n.ce&&n.ce(s),s}let qt=null;const hh=()=>qt||Vt;let Zo,Ul;{const n=fa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Zo=e("__VUE_INSTANCE_SETTERS__",t=>qt=t),Ul=e("__VUE_SSR_SETTERS__",t=>zs=t)}const Ys=n=>{const e=qt;return Zo(n),n.scope.on(),()=>{n.scope.off(),Zo(e)}},wu=()=>{qt&&qt.scope.off(),Zo(null)};function ph(n){return n.vnode.shapeFlag&4}let zs=!1;function qm(n,e=!1,t=!1){e&&Ul(e);const{props:i,children:r}=n.vnode,s=ph(n);Pm(n,i,s,e),Um(n,r,t||e);const o=s?Km(n,e):void 0;return e&&Ul(!1),o}function Km(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,mm);const{setup:i}=t;if(i){hi();const r=n.setupContext=i.length>1?Zm(n):null,s=Ys(n),o=Xs(i,n,0,[n.props,r]),a=ad(o);if(pi(),s(),(a||n.sp)&&!$r(n)&&Wd(n),a){if(o.then(wu,wu),e)return o.then(l=>{Au(n,l)}).catch(l=>{ha(l,n,0)});n.asyncDep=o}else Au(n,o)}else mh(n)}function Au(n,e,t){et(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=Pd(e)),mh(n)}function mh(n,e,t){const i=n.type;n.render||(n.render=i.render||$n);{const r=Ys(n);hi();try{gm(n)}finally{pi(),r()}}}const jm={get(n,e){return zt(n,"get",""),n[e]}};function Zm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,jm),slots:n.slots,emit:n.emit,expose:e}}function _a(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Pd(kp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ds)return Ds[t](n)},has(e,t){return t in e||t in Ds}})):n.proxy}function Jm(n){return et(n)&&"__vccOpts"in n}const rt=(n,e)=>Wp(n,e,zs);function Qm(n,e,t){try{jo(-1);const i=arguments.length;return i===2?ht(e)&&!qe(e)?ks(e)?St(n,null,[e]):St(n,e):St(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ks(t)&&(t=[t]),St(n,e,t))}finally{jo(1)}}const eg="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nl;const Cu=typeof window<"u"&&window.trustedTypes;if(Cu)try{Nl=Cu.createPolicy("vue",{createHTML:n=>n})}catch{}const gh=Nl?n=>Nl.createHTML(n):n=>n,tg="http://www.w3.org/2000/svg",ng="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,Ru=ri&&ri.createElement("template"),ig={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ri.createElementNS(tg,n):e==="mathml"?ri.createElementNS(ng,n):t?ri.createElement(n,{is:t}):ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ru.innerHTML=gh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ru.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},yi="transition",gs="animation",Hs=Symbol("_vtc"),vh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rg=Ct({},kd,vh),sg=n=>(n.displayName="Transition",n.props=rg,n),og=sg((n,{slots:e})=>Qm(nm,ag(n),e)),Zi=(n,e=[])=>{qe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Pu=n=>n?qe(n)?n.some(e=>e.length>1):n.length>1:!1;function ag(n){const e={};for(const B in n)B in vh||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=n,v=lg(r),_=v&&v[0],p=v&&v[1],{onBeforeEnter:h,onEnter:T,onEnterCancelled:w,onLeave:S,onLeaveCancelled:L,onBeforeAppear:R=h,onAppear:P=T,onAppearCancelled:F=w}=e,E=(B,O,$,K)=>{B._enterCancelled=K,Ji(B,O?u:a),Ji(B,O?c:o),$&&$()},y=(B,O)=>{B._isLeaving=!1,Ji(B,f),Ji(B,g),Ji(B,d),O&&O()},N=B=>(O,$)=>{const K=B?P:T,Z=()=>E(O,B,$);Zi(K,[O,Z]),Du(()=>{Ji(O,B?l:s),Zn(O,B?u:a),Pu(K)||Lu(O,i,_,Z)})};return Ct(e,{onBeforeEnter(B){Zi(h,[B]),Zn(B,s),Zn(B,o)},onBeforeAppear(B){Zi(R,[B]),Zn(B,l),Zn(B,c)},onEnter:N(!1),onAppear:N(!0),onLeave(B,O){B._isLeaving=!0;const $=()=>y(B,O);Zn(B,f),B._enterCancelled?(Zn(B,d),Nu(B)):(Nu(B),Zn(B,d)),Du(()=>{B._isLeaving&&(Ji(B,f),Zn(B,g),Pu(S)||Lu(B,i,p,$))}),Zi(S,[B,$])},onEnterCancelled(B){E(B,!1,void 0,!0),Zi(w,[B])},onAppearCancelled(B){E(B,!0,void 0,!0),Zi(F,[B])},onLeaveCancelled(B){y(B),Zi(L,[B])}})}function lg(n){if(n==null)return null;if(ht(n))return[Fa(n.enter),Fa(n.leave)];{const e=Fa(n);return[e,e]}}function Fa(n){return up(n)}function Zn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Hs]||(n[Hs]=new Set)).add(e)}function Ji(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Hs];t&&(t.delete(e),t.size||(n[Hs]=void 0))}function Du(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let cg=0;function Lu(n,e,t,i){const r=n._endId=++cg,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=ug(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=g=>{g.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function ug(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),r=i(`${yi}Delay`),s=i(`${yi}Duration`),o=Iu(r,s),a=i(`${gs}Delay`),l=i(`${gs}Duration`),c=Iu(a,l);let u=null,f=0,d=0;e===yi?o>0&&(u=yi,f=o,d=s.length):e===gs?c>0&&(u=gs,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?yi:gs:null,d=u?u===yi?s.length:l.length:0);const g=u===yi&&/\b(?:transform|all)(?:,|$)/.test(i(`${yi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:g}}function Iu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Uu(t)+Uu(n[i])))}function Uu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Nu(n){return(n?n.ownerDocument:document).body.offsetHeight}function fg(n,e,t){const i=n[Hs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Jo=Symbol("_vod"),_h=Symbol("_vsh"),Hr={name:"show",beforeMount(n,{value:e},{transition:t}){n[Jo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):vs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),vs(n,!0),i.enter(n)):i.leave(n,()=>{vs(n,!1)}):vs(n,e))},beforeUnmount(n,{value:e}){vs(n,e)}};function vs(n,e){n.style.display=e?n[Jo]:"none",n[_h]=!e}const dg=Symbol(""),hg=/(?:^|;)\s*display\s*:/;function pg(n,e,t){const i=n.style,r=Et(t);let s=!1;if(t&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Oo(i,a,"")}else for(const o in e)t[o]==null&&Oo(i,o,"");for(const o in t)o==="display"&&(s=!0),Oo(i,o,t[o])}else if(r){if(e!==t){const o=i[dg];o&&(t+=";"+o),i.cssText=t,s=hg.test(t)}}else e&&n.removeAttribute("style");Jo in n&&(n[Jo]=s?i.display:"",n[_h]&&(i.display="none"))}const Fu=/\s*!important$/;function Oo(n,e,t){if(qe(t))t.forEach(i=>Oo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=mg(n,e);Fu.test(t)?n.setProperty(Gi(i),t.replace(Fu,""),"important"):n[i]=t}}const Ou=["Webkit","Moz","ms"],Oa={};function mg(n,e){const t=Oa[e];if(t)return t;let i=Pn(e);if(i!=="filter"&&i in n)return Oa[e]=i;i=ud(i);for(let r=0;r<Ou.length;r++){const s=Ou[r]+i;if(s in n)return Oa[e]=s}return e}const Bu="http://www.w3.org/1999/xlink";function ku(n,e,t,i,r,s=gp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Bu,e.slice(6,e.length)):n.setAttributeNS(Bu,e,t):t==null||s&&!dd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":In(t)?String(t):t)}function zu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?gh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=dd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Ii(n,e,t,i){n.addEventListener(e,t,i)}function gg(n,e,t,i){n.removeEventListener(e,t,i)}const Hu=Symbol("_vei");function vg(n,e,t,i,r=null){const s=n[Hu]||(n[Hu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=_g(e);if(i){const c=s[e]=Sg(i,r);Ii(n,a,c,l)}else o&&(gg(n,a,o,l),s[e]=void 0)}}const Vu=/(?:Once|Passive|Capture)$/;function _g(n){let e;if(Vu.test(n)){e={};let i;for(;i=n.match(Vu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Gi(n.slice(2)),e]}let Ba=0;const xg=Promise.resolve(),Mg=()=>Ba||(xg.then(()=>Ba=0),Ba=Date.now());function Sg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Nn(yg(i,t.value),e,5,[i])};return t.value=n,t.attached=Mg(),t}function yg(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Gu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Eg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?fg(n,i,o):e==="style"?pg(n,t,i):aa(e)?la(e)||vg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bg(n,e,i,o))?(zu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ku(n,e,i,o,s,e!=="value")):n._isVueCE&&(Tg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Et(i)))?zu(n,Pn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ku(n,e,i,o))};function bg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gu(e)&&et(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gu(e)&&Et(t)?!1:e in n}function Tg(n,e){const t=n._def.props;if(!t)return!1;const i=Pn(e);return Array.isArray(t)?t.some(r=>Pn(r)===i):Object.keys(t).some(r=>Pn(r)===i)}const Qr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>No(e,t):e};function wg(n){n.target.composing=!0}function Wu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fi=Symbol("_assign");function Xu(n,e,t){return e&&(n=n.trim()),t&&(n=ua(n)),n}const xh={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[fi]=Qr(r);const s=i||r.props&&r.props.type==="number";Ii(n,e?"change":"input",o=>{o.target.composing||n[fi](Xu(n.value,t,s))}),(t||s)&&Ii(n,"change",()=>{n.value=Xu(n.value,t,s)}),e||(Ii(n,"compositionstart",wg),Ii(n,"compositionend",Wu),Ii(n,"change",Wu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[fi]=Qr(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?ua(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},Ei={deep:!0,created(n,e,t){n[fi]=Qr(t),Ii(n,"change",()=>{const i=n._modelValue,r=Vs(n),s=n.checked,o=n[fi];if(qe(i)){const a=Pc(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(as(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Mh(n,s))})},mounted:Yu,beforeUpdate(n,e,t){n[fi]=Qr(t),Yu(n,e,t)}};function Yu(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(qe(e))r=Pc(e,i.props.value)>-1;else if(as(e))r=e.has(i.props.value);else{if(e===t)return;r=ls(e,Mh(n,!0))}n.checked!==r&&(n.checked=r)}const Ag={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=as(e);Ii(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?ua(Vs(o)):Vs(o));n[fi](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,un(()=>{n._assigning=!1})}),n[fi]=Qr(i)},mounted(n,{value:e}){$u(n,e)},beforeUpdate(n,e,t){n[fi]=Qr(t)},updated(n,{value:e}){n._assigning||$u(n,e)}};function $u(n,e){const t=n.multiple,i=qe(e);if(!(t&&!i&&!as(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=Vs(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Pc(e,a)>-1}else o.selected=e.has(a);else if(ls(Vs(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Vs(n){return"_value"in n?n._value:n.value}function Mh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Cg=["ctrl","shift","alt","meta"],Rg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Cg.some(t=>n[`${t}Key`]&&!e.includes(t))},dr=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Rg[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Pg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qu=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=Gi(r.key);if(e.some(o=>o===s||Pg[o]===s))return n(r)})},Dg=Ct({patchProp:Eg},ig);let Ku;function Lg(){return Ku||(Ku=Fm(Dg))}const Ig=(...n)=>{const e=Lg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ng(i);if(!r)return;const s=e._component;!et(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Ug(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ug(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ng(n){return Et(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vc="170",Fg=0,ju=1,Og=2,Sh=1,Bg=2,ii=3,Hi=0,rn=1,li=2,Oi=0,Kr=1,Zu=2,Ju=3,Qu=4,kg=5,ur=100,zg=101,Hg=102,Vg=103,Gg=104,Wg=200,Xg=201,Yg=202,$g=203,Fl=204,Ol=205,qg=206,Kg=207,jg=208,Zg=209,Jg=210,Qg=211,ev=212,tv=213,nv=214,Bl=0,kl=1,zl=2,es=3,Hl=4,Vl=5,Gl=6,Wl=7,yh=0,iv=1,rv=2,Bi=0,sv=1,ov=2,av=3,lv=4,cv=5,uv=6,fv=7,Eh=300,ts=301,ns=302,Xl=303,Yl=304,xa=306,$l=1e3,hr=1001,ql=1002,Ln=1003,dv=1004,lo=1005,_t=1006,ka=1007,pr=1008,gi=1009,bh=1010,Th=1011,Gs=1012,Gc=1013,xr=1014,ci=1015,$s=1016,Wc=1017,Xc=1018,is=1020,wh=35902,Ah=1021,Ch=1022,Cn=1023,Rh=1024,Ph=1025,jr=1026,rs=1027,Dh=1028,Yc=1029,Lh=1030,$c=1031,qc=1033,Bo=33776,ko=33777,zo=33778,Ho=33779,Kl=35840,jl=35841,Zl=35842,Jl=35843,Ql=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,oc=37812,ac=37813,lc=37814,cc=37815,uc=37816,fc=37817,dc=37818,hc=37819,pc=37820,mc=37821,Vo=36492,gc=36494,vc=36495,Ih=36283,_c=36284,xc=36285,Mc=36286,hv=3200,pv=3201,mv=0,gv=1,Ui="",vn="srgb",cs="srgb-linear",Ma="linear",pt="srgb",wr=7680,ef=519,vv=512,_v=513,xv=514,Uh=515,Mv=516,Sv=517,yv=518,Ev=519,tf=35044,nf="300 es",ui=2e3,Qo=2001;class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,Sc=180/Math.PI;function qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function bv(n,e){return(n%e+e)%e}function Ha(n,e,t){return(1-t)*n+t*e}function _s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,i,r,s,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],g=i[5],v=i[8],_=r[0],p=r[3],h=r[6],T=r[1],w=r[4],S=r[7],L=r[2],R=r[5],P=r[8];return s[0]=o*_+a*T+l*L,s[3]=o*p+a*w+l*R,s[6]=o*h+a*S+l*P,s[1]=c*_+u*T+f*L,s[4]=c*p+u*w+f*R,s[7]=c*h+u*S+f*P,s[2]=d*_+g*T+v*L,s[5]=d*p+g*w+v*R,s[8]=d*h+g*S+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,g=c*s-o*l,v=t*f+i*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=g*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new nt;function Nh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tv(){const n=ea("canvas");return n.style.display="block",n}const rf={};function Ts(n){n in rf||(rf[n]=!0,console.warn(n))}function wv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Av(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const at={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(n.r=di(n.r),n.g=di(n.g),n.b=di(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(n.r=Zr(n.r),n.g=Zr(n.g),n.b=Zr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ui?Ma:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const sf=[.64,.33,.3,.6,.15,.06],of=[.2126,.7152,.0722],af=[.3127,.329],lf=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);at.define({[cs]:{primaries:sf,whitePoint:af,transfer:Ma,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:of,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:sf,whitePoint:af,transfer:pt,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:of,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}});let Ar;class Rv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=ea("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pv=0;class Fh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ga(r[o].image)):s.push(Ga(r[o]))}else s=Ga(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dv=0;class jt extends us{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=hr,r=hr,s=_t,o=pr,a=Cn,l=gi,c=jt.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=qs(),this.name="",this.source=new Fh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Eh;jt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],g=l[5],v=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(g+1)/2,L=(h+1)/2,R=(u+d)/4,P=(f+_)/4,F=(v+p)/4;return w>S&&w>L?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=R/i,s=P/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=F/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(p-v)/T,this.y=(f-_)/T,this.z=(d-u)/T,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lv extends us{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends Lv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Oh extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iv extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],g=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==d||c!==g||u!==v){let p=1-a;const h=l*d+c*g+u*v+f*_,T=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){const L=Math.sqrt(w),R=Math.atan2(L,h*T);p=Math.sin(p*R)/L,a=Math.sin(a*R)/L}const S=a*T;if(l=l*p+d*S,c=c*p+g*S,u=u*p+v*S,f=f*p+_*S,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],g=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*g-c*d,e[t+1]=l*v+u*d+c*f-a*g,e[t+2]=c*v+u*g+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),g=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*g*v,this._y=c*g*f-d*u*v,this._z=c*u*v+d*g*f,this._w=c*u*f-d*g*v;break;case"YXZ":this._x=d*u*f+c*g*v,this._y=c*g*f-d*u*v,this._z=c*u*v-d*g*f,this._w=c*u*f+d*g*v;break;case"ZXY":this._x=d*u*f-c*g*v,this._y=c*g*f+d*u*v,this._z=c*u*v+d*g*f,this._w=c*u*f-d*g*v;break;case"ZYX":this._x=d*u*f-c*g*v,this._y=c*g*f+d*u*v,this._z=c*u*v-d*g*f,this._w=c*u*f+d*g*v;break;case"YZX":this._x=d*u*f+c*g*v,this._y=c*g*f+d*u*v,this._z=c*u*v-d*g*f,this._w=c*u*f-d*g*v;break;case"XZY":this._x=d*u*f-c*g*v,this._y=c*g*f-d*u*v,this._z=c*u*v+d*g*f,this._w=c*u*f+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,i=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new le,uf=new Ks;class js{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),uo.subVectors(this.max,xs),Cr.subVectors(e.a,xs),Rr.subVectors(e.b,xs),Pr.subVectors(e.c,xs),bi.subVectors(Rr,Cr),Ti.subVectors(Pr,Rr),Qi.subVectors(Cr,Pr);let t=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-Qi.z,Qi.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,Qi.z,0,-Qi.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-Qi.y,Qi.x,0];return!Xa(t,Cr,Rr,Pr,uo)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Cr,Rr,Pr,uo))?!1:(fo.crossVectors(bi,Ti),t=[fo.x,fo.y,fo.z],Xa(t,Cr,Rr,Pr,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new le,new le,new le,new le,new le,new le,new le,new le],yn=new le,co=new js,Cr=new le,Rr=new le,Pr=new le,bi=new le,Ti=new le,Qi=new le,xs=new le,uo=new le,fo=new le,er=new le;function Xa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){er.fromArray(n,s);const a=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=i.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Uv=new js,Ms=new le,Ya=new le;class Kc{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Ya)),this.expandByPoint(Ms.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new le,$a=new le,ho=new le,wi=new le,qa=new le,po=new le,Ka=new le;class Nv{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$a.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),wi.copy(this.origin).sub($a);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=wi.dot(this.direction),l=-wi.dot(ho),c=wi.lengthSq(),u=Math.abs(1-o*o);let f,d,g,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const _=1/u;f*=_,d*=_,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy($a).addScaledVector(ho,d),g}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,r,s){qa.subVectors(t,e),po.subVectors(i,e),Ka.crossVectors(qa,po);let o=this.direction.dot(Ka),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(po.crossVectors(wi,po));if(l<0)return null;const c=a*this.direction.dot(qa.cross(wi));if(c<0||l+c>o)return null;const u=-a*wi.dot(Ka);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,g,v,_,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,g,v,_,p)}set(e,t,i,r,s,o,a,l,c,u,f,d,g,v,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=g,h[7]=v,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,g=o*f,v=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=g+v*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=v+g*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,g=l*f,v=c*u,_=c*f;t[0]=d+_*a,t[4]=v*a-g,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=g*a-v,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,g=l*f,v=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,g=o*f,v=a*u,_=a*f;t[0]=l*u,t[4]=v*c-g,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=g*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=v*f+g,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=g*f+v,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,g=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=g*f-v,t[2]=v*f-g,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fv,e,Ov)}lookAt(e,t,i){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Ai.crossVectors(i,on),Ai.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ai.crossVectors(i,on)),Ai.normalize(),mo.crossVectors(on,Ai),r[0]=Ai.x,r[4]=mo.x,r[8]=on.x,r[1]=Ai.y,r[5]=mo.y,r[9]=on.y,r[2]=Ai.z,r[6]=mo.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],g=i[13],v=i[2],_=i[6],p=i[10],h=i[14],T=i[3],w=i[7],S=i[11],L=i[15],R=r[0],P=r[4],F=r[8],E=r[12],y=r[1],N=r[5],B=r[9],O=r[13],$=r[2],K=r[6],Z=r[10],J=r[14],W=r[3],ce=r[7],q=r[11],re=r[15];return s[0]=o*R+a*y+l*$+c*W,s[4]=o*P+a*N+l*K+c*ce,s[8]=o*F+a*B+l*Z+c*q,s[12]=o*E+a*O+l*J+c*re,s[1]=u*R+f*y+d*$+g*W,s[5]=u*P+f*N+d*K+g*ce,s[9]=u*F+f*B+d*Z+g*q,s[13]=u*E+f*O+d*J+g*re,s[2]=v*R+_*y+p*$+h*W,s[6]=v*P+_*N+p*K+h*ce,s[10]=v*F+_*B+p*Z+h*q,s[14]=v*E+_*O+p*J+h*re,s[3]=T*R+w*y+S*$+L*W,s[7]=T*P+w*N+S*K+L*ce,s[11]=T*F+w*B+S*Z+L*q,s[15]=T*E+w*O+S*J+L*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],g=e[14],v=e[3],_=e[7],p=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*g-i*l*g)+_*(+t*l*g-t*c*d+s*o*d-r*o*g+r*c*u-s*l*u)+p*(+t*c*f-t*a*g-s*o*f+i*o*g+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],g=e[11],v=e[12],_=e[13],p=e[14],h=e[15],T=f*p*c-_*d*c+_*l*g-a*p*g-f*l*h+a*d*h,w=v*d*c-u*p*c-v*l*g+o*p*g+u*l*h-o*d*h,S=u*_*c-v*f*c+v*a*g-o*_*g-u*a*h+o*f*h,L=v*f*l-u*_*l-v*a*d+o*_*d+u*a*p-o*f*p,R=t*T+i*w+r*S+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=T*P,e[1]=(_*d*s-f*p*s-_*r*g+i*p*g+f*r*h-i*d*h)*P,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*h+i*l*h)*P,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*g-i*l*g)*P,e[4]=w*P,e[5]=(u*p*s-v*d*s+v*r*g-t*p*g-u*r*h+t*d*h)*P,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*h-t*l*h)*P,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*g+t*l*g)*P,e[8]=S*P,e[9]=(v*f*s-u*_*s-v*i*g+t*_*g+u*i*h-t*f*h)*P,e[10]=(o*_*s-v*a*s+v*i*c-t*_*c-o*i*h+t*a*h)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*g-t*a*g)*P,e[12]=L*P,e[13]=(u*_*r-v*f*r+v*i*d-t*_*d-u*i*p+t*f*p)*P,e[14]=(v*a*r-o*_*r-v*i*l+t*_*l+o*i*p-t*a*p)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,g=s*u,v=s*f,_=o*u,p=o*f,h=a*f,T=l*c,w=l*u,S=l*f,L=i.x,R=i.y,P=i.z;return r[0]=(1-(_+h))*L,r[1]=(g+S)*L,r[2]=(v-w)*L,r[3]=0,r[4]=(g-S)*R,r[5]=(1-(d+h))*R,r[6]=(p+T)*R,r[7]=0,r[8]=(v+w)*P,r[9]=(p-T)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const o=Dr.set(r[4],r[5],r[6]).length(),a=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const c=1/s,u=1/o,f=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ui){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let g,v;if(a===ui)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Qo)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ui){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,g=(i+r)*u;let v,_;if(a===ui)v=(o+s)*f,_=-2*f;else if(a===Qo)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Dr=new le,En=new Tt,Fv=new le(0,0,0),Ov=new le(1,1,1),Ai=new le,mo=new le,on=new le,ff=new Tt,df=new Ks;class vi{constructor(e=0,t=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ff,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return df.setFromEuler(this),this.setFromQuaternion(df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bv=0;const hf=new le,Lr=new Ks,ei=new Tt,go=new le,Ss=new le,kv=new le,zv=new Ks,pf=new le(1,0,0),mf=new le(0,1,0),gf=new le(0,0,1),vf={type:"added"},Hv={type:"removed"},Ir={type:"childadded",child:null},ja={type:"childremoved",child:null};class hn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new le,t=new vi,i=new Ks,r=new le(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new nt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(pf,e)}rotateY(e){return this.rotateOnAxis(mf,e)}rotateZ(e){return this.rotateOnAxis(gf,e)}translateOnAxis(e,t){return hf.copy(e).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pf,e)}translateY(e){return this.translateOnAxis(mf,e)}translateZ(e){return this.translateOnAxis(gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?go.copy(e):go.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Ss,go,this.up):ei.lookAt(go,Ss,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(ei),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vf),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hv),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vf),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new le(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new le,ti=new le,Za=new le,ni=new le,Ur=new le,Nr=new le,_f=new le,Ja=new le,Qa=new le,el=new le,tl=new yt,nl=new yt,il=new yt;class wn{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),ti.subVectors(i,t),Za.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(ti),l=bn.dot(Za),c=ti.dot(ti),u=ti.dot(Za),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,g=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-g-v,v,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tl,s.x),o.addScaledVector(nl,s.y),o.addScaledVector(il,s.z),o}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),ti.subVectors(e,t),bn.cross(ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),bn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ur.subVectors(r,i),Nr.subVectors(s,i),Ja.subVectors(e,i);const l=Ur.dot(Ja),c=Nr.dot(Ja);if(l<=0&&c<=0)return t.copy(i);Qa.subVectors(e,r);const u=Ur.dot(Qa),f=Nr.dot(Qa);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ur,o);el.subVectors(e,s);const g=Ur.dot(el),v=Nr.dot(el);if(v>=0&&g<=v)return t.copy(s);const _=g*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Nr,a);const p=u*v-g*f;if(p<=0&&f-u>=0&&g-v>=0)return _f.subVectors(s,r),a=(f-u)/(f-u+(g-v)),t.copy(r).addScaledVector(_f,a);const h=1/(p+_+d);return o=_*h,a=d*h,t.copy(i).addScaledVector(Ur,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},vo={h:0,s:0,l:0};function rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=bv(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=rl(o,s,e+1/3),this.g=rl(o,s,e),this.b=rl(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=kh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return at.fromWorkingColorSpace(kt.copy(this),e),Math.round(tn(kt.r*255,0,255))*65536+Math.round(tn(kt.g*255,0,255))*256+Math.round(tn(kt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=vn){at.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,r=kt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(vo);const i=Ha(Ci.h,vo.h,t),r=Ha(Ci.s,vo.s,t),s=Ha(Ci.l,vo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new dt;dt.NAMES=kh;let Vv=0;class Sa extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=qs(),this.name="",this.blending=Kr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ol,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ol&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ef&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zh extends Sa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new le,_o=new mt;class qn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tf,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tf&&(e.usage=this.usage),e}}class Hh extends qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vh extends qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vr extends qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gv=0;const gn=new Tt,sl=new hn,Fr=new le,an=new js,ys=new js,Lt=new le;class yr extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nh(e)?Vh:Hh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vr(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(an.min,ys.min),an.expandByPoint(Lt),Lt.addVectors(an.max,ys.max),an.expandByPoint(Lt)):(an.expandByPoint(ys.min),an.expandByPoint(ys.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Lt.add(Fr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new le,l[F]=new le;const c=new le,u=new le,f=new le,d=new mt,g=new mt,v=new mt,_=new le,p=new le;function h(F,E,y){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,F),g.fromBufferAttribute(s,E),v.fromBufferAttribute(s,y),u.sub(c),f.sub(c),g.sub(d),v.sub(d);const N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(N),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(N),a[F].add(_),a[E].add(_),a[y].add(_),l[F].add(p),l[E].add(p),l[y].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,E=T.length;F<E;++F){const y=T[F],N=y.start,B=y.count;for(let O=N,$=N+B;O<$;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new le,S=new le,L=new le,R=new le;function P(F){L.fromBufferAttribute(r,F),R.copy(L);const E=a[F];w.copy(E),w.sub(L.multiplyScalar(L.dot(E))).normalize(),S.crossVectors(R,E);const N=S.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,N)}for(let F=0,E=T.length;F<E;++F){const y=T[F],N=y.start,B=y.count;for(let O=N,$=N+B;O<$;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new le,s=new le,o=new le,a=new le,l=new le,c=new le,u=new le,f=new le;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let g=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*u;for(let h=0;h<u;h++)d[v++]=c[g++]}return new qn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],g=e(d,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,g=f.length;d<g;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xf=new Tt,tr=new Nv,xo=new Kc,Mf=new le,Mo=new le,So=new le,yo=new le,ol=new le,Eo=new le,Sf=new le,bo=new le;class dn extends hn{constructor(e=new yr,t=new zh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ol.fromBufferAttribute(f,e),o?Eo.addScaledVector(ol,u):Eo.addScaledVector(ol.sub(t),u))}t.add(Eo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(xo.containsPoint(tr.origin)===!1&&(tr.intersectSphere(xo,Mf)===null||tr.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(xf.copy(s).invert(),tr.copy(e.ray).applyMatrix4(xf),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],h=o[p.materialIndex],T=Math.max(p.start,g.start),w=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let S=T,L=w;S<L;S+=3){const R=a.getX(S),P=a.getX(S+1),F=a.getX(S+2);r=To(this,h,e,i,c,u,f,R,P,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=v,h=_;p<h;p+=3){const T=a.getX(p),w=a.getX(p+1),S=a.getX(p+2);r=To(this,o,e,i,c,u,f,T,w,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],h=o[p.materialIndex],T=Math.max(p.start,g.start),w=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=T,L=w;S<L;S+=3){const R=S,P=S+1,F=S+2;r=To(this,h,e,i,c,u,f,R,P,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=v,h=_;p<h;p+=3){const T=p,w=p+1,S=p+2;r=To(this,o,e,i,c,u,f,T,w,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Wv(n,e,t,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hi,a),l===null)return null;bo.copy(a),bo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:n}}function To(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Mo),n.getVertexPosition(l,So),n.getVertexPosition(c,yo);const u=Wv(n,e,t,i,Mo,So,yo,Sf);if(u){const f=new le;wn.getBarycoord(Sf,Mo,So,yo,f),r&&(u.uv=wn.getInterpolatedAttribute(r,a,l,c,f,new mt)),s&&(u.uv1=wn.getInterpolatedAttribute(s,a,l,c,f,new mt)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,f,new le),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new le,materialIndex:0};wn.getNormal(Mo,So,yo,d.normal),u.face=d,u.barycoord=f}return u}class Zs extends yr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,g=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vr(c,3)),this.setAttribute("normal",new vr(u,3)),this.setAttribute("uv",new vr(f,2));function v(_,p,h,T,w,S,L,R,P,F,E){const y=S/P,N=L/F,B=S/2,O=L/2,$=R/2,K=P+1,Z=F+1;let J=0,W=0;const ce=new le;for(let q=0;q<Z;q++){const re=q*N-O;for(let xe=0;xe<K;xe++){const Ie=xe*y-B;ce[_]=Ie*T,ce[p]=re*w,ce[h]=$,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[p]=0,ce[h]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(xe/P),f.push(1-q/F),J+=1}}for(let q=0;q<F;q++)for(let re=0;re<P;re++){const xe=d+re+K*q,Ie=d+re+K*(q+1),j=d+(re+1)+K*(q+1),pe=d+(re+1)+K*q;l.push(xe,Ie,pe),l.push(Ie,j,pe),W+=6}a.addGroup(g,W,E),g+=W,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=ss(n[t]);for(const r in i)e[r]=i[r]}return e}function Xv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Yv={clone:ss,merge:Xt};var $v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Sa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Xv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wh extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new le,yf=new mt,Ef=new mt;class Tn extends Wh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,yf,Ef),t.subVectors(Ef,yf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,Br=1;class Kv extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Or,Br,e,t);r.layers=this.layers,this.add(r);const s=new Tn(Or,Br,e,t);s.layers=this.layers,this.add(s);const o=new Tn(Or,Br,e,t);o.layers=this.layers,this.add(o);const a=new Tn(Or,Br,e,t);a.layers=this.layers,this.add(a);const l=new Tn(Or,Br,e,t);l.layers=this.layers,this.add(l);const c=new Tn(Or,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Xh extends jt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ts,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jv extends Mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zs(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Oi});s.uniforms.tEquirect.value=t;const o=new dn(r,s),a=t.minFilter;return t.minFilter===pr&&(t.minFilter=_t),new Kv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const al=new le,Zv=new le,Jv=new nt;class or{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=al.subVectors(i,t).cross(Zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(al),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jv.getNormalMatrix(e),r=this.coplanarPoint(al).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new Kc,wo=new le;class Yh{constructor(e=new or,t=new or,i=new or,r=new or,s=new or,o=new or){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],_=r[10],p=r[11],h=r[12],T=r[13],w=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,p-g,S-h).normalize(),i[1].setComponents(l+s,d+c,p+g,S+h).normalize(),i[2].setComponents(l+o,d+u,p+v,S+T).normalize(),i[3].setComponents(l-o,d-u,p-v,S-T).normalize(),i[4].setComponents(l-a,d-f,p-_,S-w).normalize(),t===ui)i[5].setComponents(l+a,d+f,p+_,S+w).normalize();else if(t===Qo)i[5].setComponents(a,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $h(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Qv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((g,v)=>g.start-v.start);let d=0;for(let g=1;g<f.length;g++){const v=f[d],_=f[g];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,f[d]=_)}f.length=d+1;for(let g=0,v=f.length;g<v;g++){const _=f[g];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Xi extends yr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,g=[],v=[],_=[],p=[];for(let h=0;h<u;h++){const T=h*d-o;for(let w=0;w<c;w++){const S=w*f-s;v.push(S,-T,0),_.push(0,0,1),p.push(w/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<a;T++){const w=T+c*h,S=T+c*(h+1),L=T+1+c*(h+1),R=T+1+c*h;g.push(w,S,R),g.push(S,L,R)}this.setIndex(g),this.setAttribute("position",new vr(v,3)),this.setAttribute("normal",new vr(_,3)),this.setAttribute("uv",new vr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var e_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t_=`#ifdef USE_ALPHAHASH
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
#endif`,n_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o_=`#ifdef USE_AOMAP
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
#endif`,a_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l_=`#ifdef USE_BATCHING
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
#endif`,c_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h_=`#ifdef USE_IRIDESCENCE
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
#endif`,p_=`#ifdef USE_BUMPMAP
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
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,E_=`#define PI 3.141592653589793
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
} // validated`,b_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T_=`vec3 transformedNormal = objectNormal;
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
#endif`,w_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P_="gl_FragColor = linearToOutputTexel( gl_FragColor );",D_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,N_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,O_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H_=`#ifdef USE_GRADIENTMAP
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
}`,V_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X_=`uniform bool receiveShadow;
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
#endif`,Y_=`#ifdef USE_ENVMAP
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
#endif`,$_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z_=`PhysicalMaterial material;
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
#endif`,J_=`struct PhysicalMaterial {
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
}`,Q_=`
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,ax=`#define DISTANCE
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
}`,lx=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define LAMBERT
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
}`,vx=`#define MATCAP
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
}`,_x=`#define MATCAP
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
}`,xx=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,Sx=`#define PHONG
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
}`,yx=`#define PHONG
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
}`,Ex=`#define STANDARD
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
}`,bx=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,wx=`#define TOON
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
}`,Ax=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Px=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:e_,alphahash_pars_fragment:t_,alphamap_fragment:n_,alphamap_pars_fragment:i_,alphatest_fragment:r_,alphatest_pars_fragment:s_,aomap_fragment:o_,aomap_pars_fragment:a_,batching_pars_vertex:l_,batching_vertex:c_,begin_vertex:u_,beginnormal_vertex:f_,bsdfs:d_,iridescence_fragment:h_,bumpmap_pars_fragment:p_,clipping_planes_fragment:m_,clipping_planes_pars_fragment:g_,clipping_planes_pars_vertex:v_,clipping_planes_vertex:__,color_fragment:x_,color_pars_fragment:M_,color_pars_vertex:S_,color_vertex:y_,common:E_,cube_uv_reflection_fragment:b_,defaultnormal_vertex:T_,displacementmap_pars_vertex:w_,displacementmap_vertex:A_,emissivemap_fragment:C_,emissivemap_pars_fragment:R_,colorspace_fragment:P_,colorspace_pars_fragment:D_,envmap_fragment:L_,envmap_common_pars_fragment:I_,envmap_pars_fragment:U_,envmap_pars_vertex:N_,envmap_physical_pars_fragment:Y_,envmap_vertex:F_,fog_vertex:O_,fog_pars_vertex:B_,fog_fragment:k_,fog_pars_fragment:z_,gradientmap_pars_fragment:H_,lightmap_pars_fragment:V_,lights_lambert_fragment:G_,lights_lambert_pars_fragment:W_,lights_pars_begin:X_,lights_toon_fragment:$_,lights_toon_pars_fragment:q_,lights_phong_fragment:K_,lights_phong_pars_fragment:j_,lights_physical_fragment:Z_,lights_physical_pars_fragment:J_,lights_fragment_begin:Q_,lights_fragment_maps:e0,lights_fragment_end:t0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:s0,map_fragment:o0,map_pars_fragment:a0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:f0,morphinstance_vertex:d0,morphcolor_vertex:h0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:v0,normal_fragment_maps:_0,normal_pars_fragment:x0,normal_pars_vertex:M0,normal_vertex:S0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:b0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:w0,opaque_fragment:A0,packing:C0,premultiplied_alpha_fragment:R0,project_vertex:P0,dithering_fragment:D0,dithering_pars_fragment:L0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:F0,shadowmap_vertex:O0,shadowmask_pars_fragment:B0,skinbase_vertex:k0,skinning_pars_vertex:z0,skinning_vertex:H0,skinnormal_vertex:V0,specularmap_fragment:G0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:Y0,transmission_fragment:$0,transmission_pars_fragment:q0,uv_pars_fragment:K0,uv_pars_vertex:j0,uv_vertex:Z0,worldpos_vertex:J0,background_vert:Q0,background_frag:ex,backgroundCube_vert:tx,backgroundCube_frag:nx,cube_vert:ix,cube_frag:rx,depth_vert:sx,depth_frag:ox,distanceRGBA_vert:ax,distanceRGBA_frag:lx,equirect_vert:cx,equirect_frag:ux,linedashed_vert:fx,linedashed_frag:dx,meshbasic_vert:hx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:vx,meshmatcap_frag:_x,meshnormal_vert:xx,meshnormal_frag:Mx,meshphong_vert:Sx,meshphong_frag:yx,meshphysical_vert:Ex,meshphysical_frag:bx,meshtoon_vert:Tx,meshtoon_frag:wx,points_vert:Ax,points_frag:Cx,shadow_vert:Rx,shadow_frag:Px,sprite_vert:Dx,sprite_frag:Lx},Fe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Xn={basic:{uniforms:Xt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Xt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new dt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Xt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Xt([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Xt([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new dt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Xt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Xt([Fe.points,Fe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Xt([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Xt([Fe.common,Fe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Xt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Xt([Fe.sprite,Fe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Xt([Fe.common,Fe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Xt([Fe.lights,Fe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Xn.physical={uniforms:Xt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ao={r:0,b:0,g:0},ir=new vi,Ix=new Tt;function Ux(n,e,t,i,r,s,o){const a=new dt(0);let l=s===!0?0:1,c,u,f=null,d=0,g=null;function v(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function _(T){let w=!1;const S=v(T);S===null?h(a,l):S&&S.isColor&&(h(S,1),w=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,w){const S=v(w);S&&(S.isCubeTexture||S.mapping===xa)?(u===void 0&&(u=new dn(new Zs(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ss(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ir.copy(w.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(ir)),u.material.toneMapped=at.getTransfer(S.colorSpace)!==pt,(f!==S||d!==S.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,g=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dn(new Xi(2,2),new xn({name:"BackgroundMaterial",uniforms:ss(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,g=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,w){T.getRGB(Ao,Gh(n)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),l=w,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(a,l)},render:_,addToRenderList:p}}function Nx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,N,B,O,$){let K=!1;const Z=f(O,B,N);s!==Z&&(s=Z,c(s.object)),K=g(y,O,B,$),K&&v(y,O,B,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(y,N,B,O),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,N,B){const O=B.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let K=$[N.id];K===void 0&&(K={},$[N.id]=K);let Z=K[O];return Z===void 0&&(Z=d(l()),K[O]=Z),Z}function d(y){const N=[],B=[],O=[];for(let $=0;$<t;$++)N[$]=0,B[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:O,object:y,attributes:{},index:null}}function g(y,N,B,O){const $=s.attributes,K=N.attributes;let Z=0;const J=B.getAttributes();for(const W in J)if(J[W].location>=0){const q=$[W];let re=K[W];if(re===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;Z++}return s.attributesNum!==Z||s.index!==O}function v(y,N,B,O){const $={},K=N.attributes;let Z=0;const J=B.getAttributes();for(const W in J)if(J[W].location>=0){let q=K[W];q===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),$[W]=re,Z++}s.attributes=$,s.attributesNum=Z,s.index=O}function _(){const y=s.newAttributes;for(let N=0,B=y.length;N<B;N++)y[N]=0}function p(y){h(y,0)}function h(y,N){const B=s.newAttributes,O=s.enabledAttributes,$=s.attributeDivisors;B[y]=1,O[y]===0&&(n.enableVertexAttribArray(y),O[y]=1),$[y]!==N&&(n.vertexAttribDivisor(y,N),$[y]=N)}function T(){const y=s.newAttributes,N=s.enabledAttributes;for(let B=0,O=N.length;B<O;B++)N[B]!==y[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function w(y,N,B,O,$,K,Z){Z===!0?n.vertexAttribIPointer(y,N,B,$,K):n.vertexAttribPointer(y,N,B,O,$,K)}function S(y,N,B,O){_();const $=O.attributes,K=B.getAttributes(),Z=N.defaultAttributeValues;for(const J in K){const W=K[J];if(W.location>=0){let ce=$[J];if(ce===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const q=ce.normalized,re=ce.itemSize,xe=e.get(ce);if(xe===void 0)continue;const Ie=xe.buffer,j=xe.type,pe=xe.bytesPerElement,ye=j===n.INT||j===n.UNSIGNED_INT||ce.gpuType===Gc;if(ce.isInterleavedBufferAttribute){const Ae=ce.data,Le=Ae.stride,ke=ce.offset;if(Ae.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)h(W.location+He,Ae.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let He=0;He<W.locationSize;He++)p(W.location+He);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let He=0;He<W.locationSize;He++)w(W.location+He,re/W.locationSize,j,q,Le*pe,(ke+re/W.locationSize*He)*pe,ye)}else{if(ce.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)h(W.location+Ae,ce.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)p(W.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Ae=0;Ae<W.locationSize;Ae++)w(W.location+Ae,re/W.locationSize,j,q,re*pe,re/W.locationSize*Ae*pe,ye)}}else if(Z!==void 0){const q=Z[J];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(W.location,q);break;case 3:n.vertexAttrib3fv(W.location,q);break;case 4:n.vertexAttrib4fv(W.location,q);break;default:n.vertexAttrib1fv(W.location,q)}}}}T()}function L(){F();for(const y in i){const N=i[y];for(const B in N){const O=N[B];for(const $ in O)u(O[$].object),delete O[$];delete N[B]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const N=i[y.id];for(const B in N){const O=N[B];for(const $ in O)u(O[$].object),delete O[$];delete N[B]}delete i[y.id]}function P(y){for(const N in i){const B=i[N];if(B[y.id]===void 0)continue;const O=B[y.id];for(const $ in O)u(O[$].object),delete O[$];delete B[y.id]}}function F(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function Fx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];t.update(g,i,1)}function l(c,u,f,d){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let _=0;_<f;_++)v+=u[_]*d[_];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ox(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Cn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==gi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ci&&!F)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:L,maxSamples:R}}function Bx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new or,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||i!==0||r;return r=d,i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,g){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const T=s?0:i,w=T*4;let S=h.clippingState||null;l.value=S,S=u(v,d,w,g);for(let L=0;L!==w;++L)S[L]=t[L];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,g,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const h=g+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let w=0,S=g;w!==_;++w,S+=4)o.copy(f[w]).applyMatrix4(T,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function kx(n){let e=new WeakMap;function t(o,a){return a===Xl?o.mapping=ts:a===Yl&&(o.mapping=ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xl||a===Yl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Js extends Wh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vr=4,bf=[.125,.215,.35,.446,.526,.582],fr=20,ll=new Js,Tf=new dt;let cl=null,ul=0,fl=0,dl=!1;const ar=(1+Math.sqrt(5))/2,kr=1/ar,wf=[new le(-ar,kr,0),new le(ar,kr,0),new le(-kr,0,ar),new le(kr,0,ar),new le(0,ar,-kr),new le(0,ar,kr),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class Af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl,ul,fl),this._renderer.xr.enabled=dl,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:$s,format:Cn,colorSpace:cs,depthBuffer:!1},r=Cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zx(s)),this._blurMaterial=Hx(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,i,r){const a=new Tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Tf),u.toneMapping=Bi,u.autoClear=!1;const g=new zh({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new dn(new Zs,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(Tf),_=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):T===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const w=this._cubeSize;Co(r,T*w,h>2?w:0,w,w),u.setRenderTarget(r),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ts||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ll)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wf[(r-s-1)%wf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dn(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*fr-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const h=[];let T=0;for(let P=0;P<fr;++P){const F=P/_,E=Math.exp(-F*F/2);h.push(E),P===0?T+=E:P<p&&(T+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=v,d.mipInt.value=w-i;const S=this._sizeLods[r],L=3*S*(r>w-Vr?r-w+Vr:0),R=4*(this._cubeSize-S);Co(t,L,R,3*S,2*S),l.setRenderTarget(t),l.render(f,ll)}}function zx(n){const e=[],t=[],i=[];let r=n;const s=n-Vr+1+bf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Vr?l=bf[o-n+Vr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,v=6,_=3,p=2,h=1,T=new Float32Array(_*v*g),w=new Float32Array(p*v*g),S=new Float32Array(h*v*g);for(let R=0;R<g;R++){const P=R%3*2/3-1,F=R>2?0:-1,E=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];T.set(E,_*v*R),w.set(d,p*v*R);const y=[R,R,R,R,R,R];S.set(y,h*v*R)}const L=new yr;L.setAttribute("position",new qn(T,_)),L.setAttribute("uv",new qn(w,p)),L.setAttribute("faceIndex",new qn(S,h)),e.push(L),r>Vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cf(n,e,t){const i=new Mr(n,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Hx(n,e,t){const i=new Float32Array(fr),r=new le(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Rf(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Pf(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function Vx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xl||l===Yl,u=l===ts||l===ns;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Af(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return c&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new Af(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Gx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ts("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Wx(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const _=g[v];for(let p=0,h=_.length;p<h;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],g=f.index,v=f.attributes.position;let _=0;if(g!==null){const T=g.array;_=g.version;for(let w=0,S=T.length;w<S;w+=3){const L=T[w+0],R=T[w+1],P=T[w+2];d.push(L,R,R,P,P,L)}}else if(v!==void 0){const T=v.array;_=v.version;for(let w=0,S=T.length/3-1;w<S;w+=3){const L=w+0,R=w+1,P=w+2;d.push(L,R,R,P,P,L)}}else return;const p=new(Nh(d)?Vh:Hh)(d,1);p.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Xx(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,g){n.drawElements(i,g,s,d*o),t.update(g,i,1)}function c(d,g,v){v!==0&&(n.drawElementsInstanced(i,g,s,d*o,v),t.update(g,i,v))}function u(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,d,0,v);let p=0;for(let h=0;h<v;h++)p+=g[h];t.update(p,i,1)}function f(d,g,v,_){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/o,g[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,d,0,_,0,v);let h=0;for(let T=0;T<v;T++)h+=g[T]*_[T];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Yx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $x(n,e,t){const i=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var g=y;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let L=a.attributes.position.count*S,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const P=new Float32Array(L*R*4*f),F=new Oh(P,L,R,f);F.type=ci,F.needsUpdate=!0;const E=S*4;for(let N=0;N<f;N++){const B=h[N],O=T[N],$=w[N],K=L*R*4*N;for(let Z=0;Z<B.count;Z++){const J=Z*E;v===!0&&(r.fromBufferAttribute(B,Z),P[K+J+0]=r.x,P[K+J+1]=r.y,P[K+J+2]=r.z,P[K+J+3]=0),_===!0&&(r.fromBufferAttribute(O,Z),P[K+J+4]=r.x,P[K+J+5]=r.y,P[K+J+6]=r.z,P[K+J+7]=0),p===!0&&(r.fromBufferAttribute($,Z),P[K+J+8]=r.x,P[K+J+9]=r.y,P[K+J+10]=r.z,P[K+J+11]=$.itemSize===4?r.w:1)}}d={count:f,texture:F,size:new mt(L,R)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function qx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class qh extends jt{constructor(e,t,i,r,s,o,a,l,c,u=jr){if(u!==jr&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===jr&&(i=xr),i===void 0&&u===rs&&(i=is),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kh=new jt,Df=new qh(1,1),jh=new Oh,Zh=new Iv,Jh=new Xh,Lf=[],If=[],Uf=new Float32Array(16),Nf=new Float32Array(9),Ff=new Float32Array(4);function fs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Lf[r];if(s===void 0&&(s=new Float32Array(r),Lf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ya(n,e){let t=If[e];t===void 0&&(t=new Int32Array(e),If[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function Qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Ff.set(i),n.uniformMatrix2fv(this.addr,!1,Ff),Pt(t,i)}}function eM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Nf.set(i),n.uniformMatrix3fv(this.addr,!1,Nf),Pt(t,i)}}function tM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Uf.set(i),n.uniformMatrix4fv(this.addr,!1,Uf),Pt(t,i)}}function nM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function oM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function uM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Df.compareFunction=Uh,s=Df):s=Kh,t.setTexture2D(e||s,r)}function fM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zh,r)}function dM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jh,r)}function hM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jh,r)}function pM(n){switch(n){case 5126:return Kx;case 35664:return jx;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return hM}}function mM(n,e){n.uniform1fv(this.addr,e)}function gM(n,e){const t=fs(e,this.size,2);n.uniform2fv(this.addr,t)}function vM(n,e){const t=fs(e,this.size,3);n.uniform3fv(this.addr,t)}function _M(n,e){const t=fs(e,this.size,4);n.uniform4fv(this.addr,t)}function xM(n,e){const t=fs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function MM(n,e){const t=fs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function SM(n,e){const t=fs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yM(n,e){n.uniform1iv(this.addr,e)}function EM(n,e){n.uniform2iv(this.addr,e)}function bM(n,e){n.uniform3iv(this.addr,e)}function TM(n,e){n.uniform4iv(this.addr,e)}function wM(n,e){n.uniform1uiv(this.addr,e)}function AM(n,e){n.uniform2uiv(this.addr,e)}function CM(n,e){n.uniform3uiv(this.addr,e)}function RM(n,e){n.uniform4uiv(this.addr,e)}function PM(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Kh,s[o])}function DM(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zh,s[o])}function LM(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jh,s[o])}function IM(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||jh,s[o])}function UM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return vM;case 35666:return _M;case 35674:return xM;case 35675:return MM;case 35676:return SM;case 5124:case 35670:return yM;case 35667:case 35671:return EM;case 35668:case 35672:return bM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return IM}}class NM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pM(t.type)}}class FM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UM(t.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function Of(n,e){n.seq.push(e),n.map[e.id]=e}function BM(n,e,t){const i=n.name,r=i.length;for(hl.lastIndex=0;;){const s=hl.exec(i),o=hl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Of(t,c===void 0?new NM(a,n,e):new FM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new OM(a),Of(t,f)),t=f}}}class Go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);BM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Bf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kM=37297;let zM=0;function HM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const kf=new nt;function VM(n){at._getMatrix(kf,at.workingColorSpace,n);const e=`mat3( ${kf.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Ma:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+HM(n.getShaderSource(e),o)}else return r}function GM(n,e){const t=VM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function WM(n,e){let t;switch(e){case sv:t="Linear";break;case ov:t="Reinhard";break;case av:t="Cineon";break;case lv:t="ACESFilmic";break;case uv:t="AgX";break;case fv:t="Neutral";break;case cv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ro=new le;function XM(){at.getLuminanceCoefficients(Ro);const n=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function $M(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ws(n){return n!==""}function Hf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(KM,ZM)}const jM=new Map;function ZM(n,e){let t=it[e];if(t===void 0){const i=jM.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(n){return n.replace(JM,QM)}function QM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function eS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function tS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ns:e="ENVMAP_MODE_REFRACTION";break}return e}function iS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case iv:e="ENVMAP_BLENDING_MIX";break;case rv:e="ENVMAP_BLENDING_ADD";break}return e}function rS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=eS(t),c=tS(t),u=nS(t),f=iS(t),d=rS(t),g=YM(t),v=$M(s),_=r.createProgram();let p,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ws).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ws).join(`
`),h.length>0&&(h+=`
`)):(p=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),h=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?it.tonemapping_pars_fragment:"",t.toneMapping!==Bi?WM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),o=yc(o),o=Hf(o,t),o=Vf(o,t),a=yc(a),a=Hf(a,t),a=Vf(a,t),o=Gf(o),a=Gf(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=T+p+o,S=T+h+a,L=Bf(r,r.VERTEX_SHADER,w),R=Bf(r,r.FRAGMENT_SHADER,S);r.attachShader(_,L),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(N){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(L).trim(),$=r.getShaderInfoLog(R).trim();let K=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,R);else{const J=zf(r,L,"vertex"),W=zf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+J+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||$==="")&&(Z=!1);Z&&(N.diagnostics={runnable:K,programLog:B,vertexShader:{log:O,prefix:p},fragmentShader:{log:$,prefix:h}})}r.deleteShader(L),r.deleteShader(R),F=new Go(r,_),E=qM(r,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,kM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let oS=0;class aS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lS(e),t.set(e,i)),i}}class lS{constructor(e){this.id=oS++,this.code=e,this.usedTimes=0}}function cS(n,e,t,i,r,s,o){const a=new Bh,l=new aS,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,y,N,B,O){const $=B.fog,K=O.geometry,Z=E.isMeshStandardMaterial?B.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),W=J&&J.mapping===xa?J.image.height:null,ce=v[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const q=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,re=q!==void 0?q.length:0;let xe=0;K.morphAttributes.position!==void 0&&(xe=1),K.morphAttributes.normal!==void 0&&(xe=2),K.morphAttributes.color!==void 0&&(xe=3);let Ie,j,pe,ye;if(ce){const Ke=Xn[ce];Ie=Ke.vertexShader,j=Ke.fragmentShader}else Ie=E.vertexShader,j=E.fragmentShader,l.update(E),pe=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);const Ae=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,He=O.isBatchedMesh===!0,We=!!E.map,b=!!E.matcap,U=!!J,A=!!E.aoMap,fe=!!E.lightMap,Q=!!E.bumpMap,te=!!E.normalMap,ue=!!E.displacementMap,Me=!!E.emissiveMap,ie=!!E.metalnessMap,x=!!E.roughnessMap,m=E.anisotropy>0,M=E.clearcoat>0,I=E.dispersion>0,k=E.iridescence>0,G=E.sheen>0,de=E.transmission>0,ae=m&&!!E.anisotropyMap,_e=M&&!!E.clearcoatMap,Be=M&&!!E.clearcoatNormalMap,Se=M&&!!E.clearcoatRoughnessMap,H=k&&!!E.iridescenceMap,me=k&&!!E.iridescenceThicknessMap,Ce=G&&!!E.sheenColorMap,he=G&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,Ne=!!E.specularColorMap,je=!!E.specularIntensityMap,V=de&&!!E.transmissionMap,De=de&&!!E.thicknessMap,se=!!E.gradientMap,ge=!!E.alphaMap,Pe=E.alphaTest>0,we=!!E.alphaHash,Je=!!E.extensions;let ut=Bi;E.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ut=n.toneMapping);const xt={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:Ie,fragmentShader:j,defines:E.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:He,batchingColor:He&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:cs,alphaToCoverage:!!E.alphaToCoverage,map:We,matcap:b,envMap:U,envMapMode:U&&J.mapping,envMapCubeUVHeight:W,aoMap:A,lightMap:fe,bumpMap:Q,normalMap:te,displacementMap:d&&ue,emissiveMap:Me,normalMapObjectSpace:te&&E.normalMapType===gv,normalMapTangentSpace:te&&E.normalMapType===mv,metalnessMap:ie,roughnessMap:x,anisotropy:m,anisotropyMap:ae,clearcoat:M,clearcoatMap:_e,clearcoatNormalMap:Be,clearcoatRoughnessMap:Se,dispersion:I,iridescence:k,iridescenceMap:H,iridescenceThicknessMap:me,sheen:G,sheenColorMap:Ce,sheenRoughnessMap:he,specularMap:Xe,specularColorMap:Ne,specularIntensityMap:je,transmission:de,transmissionMap:V,thicknessMap:De,gradientMap:se,opaque:E.transparent===!1&&E.blending===Kr&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:Pe,alphaHash:we,combine:E.combine,mapUv:We&&_(E.map.channel),aoMapUv:A&&_(E.aoMap.channel),lightMapUv:fe&&_(E.lightMap.channel),bumpMapUv:Q&&_(E.bumpMap.channel),normalMapUv:te&&_(E.normalMap.channel),displacementMapUv:ue&&_(E.displacementMap.channel),emissiveMapUv:Me&&_(E.emissiveMap.channel),metalnessMapUv:ie&&_(E.metalnessMap.channel),roughnessMapUv:x&&_(E.roughnessMap.channel),anisotropyMapUv:ae&&_(E.anisotropyMap.channel),clearcoatMapUv:_e&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(E.sheenRoughnessMap.channel),specularMapUv:Xe&&_(E.specularMap.channel),specularColorMapUv:Ne&&_(E.specularColorMap.channel),specularIntensityMapUv:je&&_(E.specularIntensityMap.channel),transmissionMapUv:V&&_(E.transmissionMap.channel),thicknessMapUv:De&&_(E.thicknessMap.channel),alphaMapUv:ge&&_(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(te||m),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(We||ge),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Le,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:We&&E.map.isVideoTexture===!0&&at.getTransfer(E.map.colorSpace)===pt,decodeVideoTextureEmissive:Me&&E.emissiveMap.isVideoTexture===!0&&at.getTransfer(E.emissiveMap.colorSpace)===pt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===li,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&E.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function h(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)y.push(N),y.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(T(y,E),w(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function T(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function w(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const y=v[E.type];let N;if(y){const B=Xn[y];N=Yv.clone(B.uniforms)}else N=E.uniforms;return N}function L(E,y){let N;for(let B=0,O=u.length;B<O;B++){const $=u[B];if($.cacheKey===y){N=$,++N.usedTimes;break}}return N===void 0&&(N=new sS(n,y,E,s),u.push(N)),N}function R(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:L,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:F}}function uS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function fS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,g,v,_,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:g,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=g,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function a(f,d,g,v,_,p){const h=o(f,d,g,v,_,p);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):t.push(h)}function l(f,d,g,v,_,p){const h=o(f,d,g,v,_,p);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||fS),i.length>1&&i.sort(d||Xf),r.length>1&&r.sort(d||Xf)}function u(){for(let f=e,d=n.length;f<d;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function dS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Yf,n.set(i,[o])):r>=s.length?(o=new Yf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new dt};break;case"SpotLight":t={position:new le,direction:new le,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function pS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mS=0;function gS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vS(n){const e=new hS,t=pS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new le);const r=new le,s=new Tt,o=new Tt;function a(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,v=0,_=0,p=0,h=0,T=0,w=0,S=0,L=0,R=0,P=0;c.sort(gS);for(let E=0,y=c.length;E<y;E++){const N=c[E],B=N.color,O=N.intensity,$=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=B.r*O,f+=B.g*O,d+=B.b*O;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],O);P++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const J=N.shadow,W=t.get(N);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.directionalShadow[g]=W,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=N.shadow.matrix,T++}i.directional[g]=Z,g++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(B).multiplyScalar(O),Z.distance=$,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[_]=Z;const J=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,J.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[_]=J.matrix,N.castShadow){const W=t.get(N);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=K,S++}_++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(B).multiplyScalar(O),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[p]=Z,p++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const J=N.shadow,W=t.get(N);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=N.shadow.matrix,w++}i.point[v]=Z,v++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(O),Z.groundColor.copy(N.groundColor).multiplyScalar(O),i.hemi[h]=Z,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==g||F.pointLength!==v||F.spotLength!==_||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==T||F.numPointShadows!==w||F.numSpotShadows!==S||F.numSpotMaps!==L||F.numLightProbes!==P)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=p,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,F.directionalLength=g,F.pointLength=v,F.spotLength=_,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=T,F.numPointShadows=w,F.numSpotShadows=S,F.numSpotMaps=L,F.numLightProbes=P,i.version=mS++)}function l(c,u){let f=0,d=0,g=0,v=0,_=0;const p=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const w=c[h];if(w.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(w.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(w.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(w.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function $f(n){const e=new vS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _S(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new $f(n),e.set(r,[a])):s>=o.length?(a=new $f(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class xS extends Sa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MS extends Sa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yS=`uniform sampler2D shadow_pass;
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
}`;function ES(n,e,t){let i=new Yh;const r=new mt,s=new mt,o=new yt,a=new xS({depthPacking:pv}),l=new MS,c={},u=t.maxTextureSize,f={[Hi]:rn,[rn]:Hi,[li]:li},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:SS,fragmentShader:yS}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new yr;v.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sh;let h=this.type;this.render=function(R,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Oi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=h!==ii&&this.type===ii,$=h===ii&&this.type!==ii;for(let K=0,Z=R.length;K<Z;K++){const J=R[K],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ce=W.getFrameExtents();if(r.multiply(ce),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,W.mapSize.y=s.y)),W.map===null||O===!0||$===!0){const re=this.type!==ii?{minFilter:Ln,magFilter:Ln}:{};W.map!==null&&W.map.dispose(),W.map=new Mr(r.x,r.y,re),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const q=W.getViewportCount();for(let re=0;re<q;re++){const xe=W.getViewport(re);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),B.viewport(o),W.updateMatrices(J,re),i=W.getFrustum(),S(P,F,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===ii&&T(W,F),W.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(E,y,N)};function T(R,P){const F=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Mr(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,_,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,F,g,_,null)}function w(R,P,F,E){let y=null;const N=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)y=N;else if(y=F.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const B=y.uuid,O=P.uuid;let $=c[B];$===void 0&&($={},c[B]=$);let K=$[O];K===void 0&&(K=y.clone(),$[O]=K,P.addEventListener("dispose",L)),y=K}if(y.visible=P.visible,y.wireframe=P.wireframe,E===ii?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=n.properties.get(y);B.light=F}return y}function S(R,P,F,E,y){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===ii)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const O=e.update(R),$=R.material;if(Array.isArray($)){const K=O.groups;for(let Z=0,J=K.length;Z<J;Z++){const W=K[Z],ce=$[W.materialIndex];if(ce&&ce.visible){const q=w(R,ce,E,y);R.onBeforeShadow(n,R,P,F,O,q,W),n.renderBufferDirect(F,null,O,q,R,W),R.onAfterShadow(n,R,P,F,O,q,W)}}}else if($.visible){const K=w(R,$,E,y);R.onBeforeShadow(n,R,P,F,O,K,null),n.renderBufferDirect(F,null,O,K,R,null),R.onAfterShadow(n,R,P,F,O,K,null)}}const B=R.children;for(let O=0,$=B.length;O<$;O++)S(B[O],P,F,E,y)}function L(R){R.target.removeEventListener("dispose",L);for(const F in c){const E=c[F],y=R.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const bS={[Bl]:kl,[zl]:Gl,[Hl]:Wl,[es]:Vl,[kl]:Bl,[Gl]:zl,[Wl]:Hl,[Vl]:es};function TS(n,e){function t(){let V=!1;const De=new yt;let se=null;const ge=new yt(0,0,0,0);return{setMask:function(Pe){se!==Pe&&!V&&(n.colorMask(Pe,Pe,Pe,Pe),se=Pe)},setLocked:function(Pe){V=Pe},setClear:function(Pe,we,Je,ut,xt){xt===!0&&(Pe*=ut,we*=ut,Je*=ut),De.set(Pe,we,Je,ut),ge.equals(De)===!1&&(n.clearColor(Pe,we,Je,ut),ge.copy(De))},reset:function(){V=!1,se=null,ge.set(-1,0,0,0)}}}function i(){let V=!1,De=!1,se=null,ge=null,Pe=null;return{setReversed:function(we){if(De!==we){const Je=e.get("EXT_clip_control");De?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const ut=Pe;Pe=null,this.setClear(ut)}De=we},getReversed:function(){return De},setTest:function(we){we?Ae(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(we){se!==we&&!V&&(n.depthMask(we),se=we)},setFunc:function(we){if(De&&(we=bS[we]),ge!==we){switch(we){case Bl:n.depthFunc(n.NEVER);break;case kl:n.depthFunc(n.ALWAYS);break;case zl:n.depthFunc(n.LESS);break;case es:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Vl:n.depthFunc(n.GEQUAL);break;case Gl:n.depthFunc(n.GREATER);break;case Wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=we}},setLocked:function(we){V=we},setClear:function(we){Pe!==we&&(De&&(we=1-we),n.clearDepth(we),Pe=we)},reset:function(){V=!1,se=null,ge=null,Pe=null,De=!1}}}function r(){let V=!1,De=null,se=null,ge=null,Pe=null,we=null,Je=null,ut=null,xt=null;return{setTest:function(Ke){V||(Ke?Ae(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(Ke){De!==Ke&&!V&&(n.stencilMask(Ke),De=Ke)},setFunc:function(Ke,Zt,sn){(se!==Ke||ge!==Zt||Pe!==sn)&&(n.stencilFunc(Ke,Zt,sn),se=Ke,ge=Zt,Pe=sn)},setOp:function(Ke,Zt,sn){(we!==Ke||Je!==Zt||ut!==sn)&&(n.stencilOp(Ke,Zt,sn),we=Ke,Je=Zt,ut=sn)},setLocked:function(Ke){V=Ke},setClear:function(Ke){xt!==Ke&&(n.clearStencil(Ke),xt=Ke)},reset:function(){V=!1,De=null,se=null,ge=null,Pe=null,we=null,Je=null,ut=null,xt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,g=[],v=null,_=!1,p=null,h=null,T=null,w=null,S=null,L=null,R=null,P=new dt(0,0,0),F=0,E=!1,y=null,N=null,B=null,O=null,$=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=J>=2);let ce=null,q={};const re=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Ie=new yt().fromArray(re),j=new yt().fromArray(xe);function pe(V,De,se,ge){const Pe=new Uint8Array(4),we=n.createTexture();n.bindTexture(V,we),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<se;Je++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(De+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return we}const ye={};ye[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ae(n.DEPTH_TEST),o.setFunc(es),Q(!1),te(ju),Ae(n.CULL_FACE),A(Oi);function Ae(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function Le(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function ke(V,De){return f[V]!==De?(n.bindFramebuffer(V,De),f[V]=De,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=De),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=De),!0):!1}function He(V,De){let se=g,ge=!1;if(V){se=d.get(De),se===void 0&&(se=[],d.set(De,se));const Pe=V.textures;if(se.length!==Pe.length||se[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Je=Pe.length;we<Je;we++)se[we]=n.COLOR_ATTACHMENT0+we;se.length=Pe.length,ge=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ge=!0);ge&&n.drawBuffers(se)}function We(V){return v!==V?(n.useProgram(V),v=V,!0):!1}const b={[ur]:n.FUNC_ADD,[zg]:n.FUNC_SUBTRACT,[Hg]:n.FUNC_REVERSE_SUBTRACT};b[Vg]=n.MIN,b[Gg]=n.MAX;const U={[Wg]:n.ZERO,[Xg]:n.ONE,[Yg]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[Jg]:n.SRC_ALPHA_SATURATE,[jg]:n.DST_COLOR,[qg]:n.DST_ALPHA,[$g]:n.ONE_MINUS_SRC_COLOR,[Ol]:n.ONE_MINUS_SRC_ALPHA,[Zg]:n.ONE_MINUS_DST_COLOR,[Kg]:n.ONE_MINUS_DST_ALPHA,[Qg]:n.CONSTANT_COLOR,[ev]:n.ONE_MINUS_CONSTANT_COLOR,[tv]:n.CONSTANT_ALPHA,[nv]:n.ONE_MINUS_CONSTANT_ALPHA};function A(V,De,se,ge,Pe,we,Je,ut,xt,Ke){if(V===Oi){_===!0&&(Le(n.BLEND),_=!1);return}if(_===!1&&(Ae(n.BLEND),_=!0),V!==kg){if(V!==p||Ke!==E){if((h!==ur||S!==ur)&&(n.blendEquation(n.FUNC_ADD),h=ur,S=ur),Ke)switch(V){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zu:n.blendFunc(n.ONE,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}T=null,w=null,L=null,R=null,P.set(0,0,0),F=0,p=V,E=Ke}return}Pe=Pe||De,we=we||se,Je=Je||ge,(De!==h||Pe!==S)&&(n.blendEquationSeparate(b[De],b[Pe]),h=De,S=Pe),(se!==T||ge!==w||we!==L||Je!==R)&&(n.blendFuncSeparate(U[se],U[ge],U[we],U[Je]),T=se,w=ge,L=we,R=Je),(ut.equals(P)===!1||xt!==F)&&(n.blendColor(ut.r,ut.g,ut.b,xt),P.copy(ut),F=xt),p=V,E=!1}function fe(V,De){V.side===li?Le(n.CULL_FACE):Ae(n.CULL_FACE);let se=V.side===rn;De&&(se=!se),Q(se),V.blending===Kr&&V.transparent===!1?A(Oi):A(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const ge=V.stencilWrite;a.setTest(ge),ge&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Me(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ae(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(V){y!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),y=V)}function te(V){V!==Fg?(Ae(n.CULL_FACE),V!==N&&(V===ju?n.cullFace(n.BACK):V===Og?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),N=V}function ue(V){V!==B&&(Z&&n.lineWidth(V),B=V)}function Me(V,De,se){V?(Ae(n.POLYGON_OFFSET_FILL),(O!==De||$!==se)&&(n.polygonOffset(De,se),O=De,$=se)):Le(n.POLYGON_OFFSET_FILL)}function ie(V){V?Ae(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function x(V){V===void 0&&(V=n.TEXTURE0+K-1),ce!==V&&(n.activeTexture(V),ce=V)}function m(V,De,se){se===void 0&&(ce===null?se=n.TEXTURE0+K-1:se=ce);let ge=q[se];ge===void 0&&(ge={type:void 0,texture:void 0},q[se]=ge),(ge.type!==V||ge.texture!==De)&&(ce!==se&&(n.activeTexture(se),ce=se),n.bindTexture(V,De||ye[V]),ge.type=V,ge.texture=De)}function M(){const V=q[ce];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function H(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(V){Ie.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ie.copy(V))}function he(V){j.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),j.copy(V))}function Xe(V,De){let se=c.get(De);se===void 0&&(se=new WeakMap,c.set(De,se));let ge=se.get(V);ge===void 0&&(ge=n.getUniformBlockIndex(De,V.name),se.set(V,ge))}function Ne(V,De){const ge=c.get(De).get(V);l.get(De)!==ge&&(n.uniformBlockBinding(De,ge,V.__bindingPointIndex),l.set(De,ge))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,q={},f={},d=new WeakMap,g=[],v=null,_=!1,p=null,h=null,T=null,w=null,S=null,L=null,R=null,P=new dt(0,0,0),F=0,E=!1,y=null,N=null,B=null,O=null,$=null,Ie.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Ae,disable:Le,bindFramebuffer:ke,drawBuffers:He,useProgram:We,setBlending:A,setMaterial:fe,setFlipSided:Q,setCullFace:te,setLineWidth:ue,setPolygonOffset:Me,setScissorTest:ie,activeTexture:x,bindTexture:m,unbindTexture:M,compressedTexImage2D:I,compressedTexImage3D:k,texImage2D:H,texImage3D:me,updateUBOMapping:Xe,uniformBlockBinding:Ne,texStorage2D:Be,texStorage3D:Se,texSubImage2D:G,texSubImage3D:de,compressedTexSubImage2D:ae,compressedTexSubImage3D:_e,scissor:Ce,viewport:he,reset:je}}function qf(n,e,t,i){const r=wS(i);switch(t){case Ah:return n*e;case Rh:return n*e;case Ph:return n*e*2;case Dh:return n*e/r.components*r.byteLength;case Yc:return n*e/r.components*r.byteLength;case Lh:return n*e*2/r.components*r.byteLength;case $c:return n*e*2/r.components*r.byteLength;case Ch:return n*e*3/r.components*r.byteLength;case Cn:return n*e*4/r.components*r.byteLength;case qc:return n*e*4/r.components*r.byteLength;case Bo:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:case Jl:return Math.max(n,16)*Math.max(e,8)/4;case Kl:case Zl:return Math.max(n,8)*Math.max(e,8)/2;case Ql:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vo:case gc:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ih:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xc:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wS(n){switch(n){case gi:case bh:return{byteLength:1,components:1};case Gs:case Th:case $s:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case xr:case Gc:case ci:return{byteLength:4,components:1};case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function AS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,m){return g?new OffscreenCanvas(x,m):ea("canvas")}function _(x,m,M){let I=1;const k=ie(x);if((k.width>M||k.height>M)&&(I=M/Math.max(k.width,k.height)),I<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor(I*k.width),de=Math.floor(I*k.height);f===void 0&&(f=v(G,de));const ae=m?v(G,de):f;return ae.width=G,ae.height=de,ae.getContext("2d").drawImage(x,0,0,G,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+G+"x"+de+")."),ae}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),x;return x}function p(x){return x.generateMipmaps}function h(x){n.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(x,m,M,I,k=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=m;if(m===n.RED&&(M===n.FLOAT&&(G=n.R32F),M===n.HALF_FLOAT&&(G=n.R16F),M===n.UNSIGNED_BYTE&&(G=n.R8)),m===n.RED_INTEGER&&(M===n.UNSIGNED_BYTE&&(G=n.R8UI),M===n.UNSIGNED_SHORT&&(G=n.R16UI),M===n.UNSIGNED_INT&&(G=n.R32UI),M===n.BYTE&&(G=n.R8I),M===n.SHORT&&(G=n.R16I),M===n.INT&&(G=n.R32I)),m===n.RG&&(M===n.FLOAT&&(G=n.RG32F),M===n.HALF_FLOAT&&(G=n.RG16F),M===n.UNSIGNED_BYTE&&(G=n.RG8)),m===n.RG_INTEGER&&(M===n.UNSIGNED_BYTE&&(G=n.RG8UI),M===n.UNSIGNED_SHORT&&(G=n.RG16UI),M===n.UNSIGNED_INT&&(G=n.RG32UI),M===n.BYTE&&(G=n.RG8I),M===n.SHORT&&(G=n.RG16I),M===n.INT&&(G=n.RG32I)),m===n.RGB_INTEGER&&(M===n.UNSIGNED_BYTE&&(G=n.RGB8UI),M===n.UNSIGNED_SHORT&&(G=n.RGB16UI),M===n.UNSIGNED_INT&&(G=n.RGB32UI),M===n.BYTE&&(G=n.RGB8I),M===n.SHORT&&(G=n.RGB16I),M===n.INT&&(G=n.RGB32I)),m===n.RGBA_INTEGER&&(M===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),M===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),M===n.UNSIGNED_INT&&(G=n.RGBA32UI),M===n.BYTE&&(G=n.RGBA8I),M===n.SHORT&&(G=n.RGBA16I),M===n.INT&&(G=n.RGBA32I)),m===n.RGB&&M===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),m===n.RGBA){const de=k?Ma:at.getTransfer(I);M===n.FLOAT&&(G=n.RGBA32F),M===n.HALF_FLOAT&&(G=n.RGBA16F),M===n.UNSIGNED_BYTE&&(G=de===pt?n.SRGB8_ALPHA8:n.RGBA8),M===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),M===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(x,m){let M;return x?m===null||m===xr||m===is?M=n.DEPTH24_STENCIL8:m===ci?M=n.DEPTH32F_STENCIL8:m===Gs&&(M=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===xr||m===is?M=n.DEPTH_COMPONENT24:m===ci?M=n.DEPTH_COMPONENT32F:m===Gs&&(M=n.DEPTH_COMPONENT16),M}function L(x,m){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ln&&x.minFilter!==_t?Math.log2(Math.max(m.width,m.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?m.mipmaps.length:1}function R(x){const m=x.target;m.removeEventListener("dispose",R),F(m),m.isVideoTexture&&u.delete(m)}function P(x){const m=x.target;m.removeEventListener("dispose",P),y(m)}function F(x){const m=i.get(x);if(m.__webglInit===void 0)return;const M=x.source,I=d.get(M);if(I){const k=I[m.__cacheKey];k.usedTimes--,k.usedTimes===0&&E(x),Object.keys(I).length===0&&d.delete(M)}i.remove(x)}function E(x){const m=i.get(x);n.deleteTexture(m.__webglTexture);const M=x.source,I=d.get(M);delete I[m.__cacheKey],o.memory.textures--}function y(x){const m=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(m.__webglFramebuffer[I]))for(let k=0;k<m.__webglFramebuffer[I].length;k++)n.deleteFramebuffer(m.__webglFramebuffer[I][k]);else n.deleteFramebuffer(m.__webglFramebuffer[I]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[I])}else{if(Array.isArray(m.__webglFramebuffer))for(let I=0;I<m.__webglFramebuffer.length;I++)n.deleteFramebuffer(m.__webglFramebuffer[I]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let I=0;I<m.__webglColorRenderbuffer.length;I++)m.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[I]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const M=x.textures;for(let I=0,k=M.length;I<k;I++){const G=i.get(M[I]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(M[I])}i.remove(x)}let N=0;function B(){N=0}function O(){const x=N;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),N+=1,x}function $(x){const m=[];return m.push(x.wrapS),m.push(x.wrapT),m.push(x.wrapR||0),m.push(x.magFilter),m.push(x.minFilter),m.push(x.anisotropy),m.push(x.internalFormat),m.push(x.format),m.push(x.type),m.push(x.generateMipmaps),m.push(x.premultiplyAlpha),m.push(x.flipY),m.push(x.unpackAlignment),m.push(x.colorSpace),m.join()}function K(x,m){const M=i.get(x);if(x.isVideoTexture&&ue(x),x.isRenderTargetTexture===!1&&x.version>0&&M.__version!==x.version){const I=x.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(M,x,m);return}}t.bindTexture(n.TEXTURE_2D,M.__webglTexture,n.TEXTURE0+m)}function Z(x,m){const M=i.get(x);if(x.version>0&&M.__version!==x.version){j(M,x,m);return}t.bindTexture(n.TEXTURE_2D_ARRAY,M.__webglTexture,n.TEXTURE0+m)}function J(x,m){const M=i.get(x);if(x.version>0&&M.__version!==x.version){j(M,x,m);return}t.bindTexture(n.TEXTURE_3D,M.__webglTexture,n.TEXTURE0+m)}function W(x,m){const M=i.get(x);if(x.version>0&&M.__version!==x.version){pe(M,x,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+m)}const ce={[$l]:n.REPEAT,[hr]:n.CLAMP_TO_EDGE,[ql]:n.MIRRORED_REPEAT},q={[Ln]:n.NEAREST,[dv]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[_t]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[pr]:n.LINEAR_MIPMAP_LINEAR},re={[vv]:n.NEVER,[Ev]:n.ALWAYS,[_v]:n.LESS,[Uh]:n.LEQUAL,[xv]:n.EQUAL,[yv]:n.GEQUAL,[Mv]:n.GREATER,[Sv]:n.NOTEQUAL};function xe(x,m){if(m.type===ci&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===_t||m.magFilter===ka||m.magFilter===lo||m.magFilter===pr||m.minFilter===_t||m.minFilter===ka||m.minFilter===lo||m.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ce[m.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ce[m.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ce[m.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,q[m.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,q[m.minFilter]),m.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,re[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ln||m.minFilter!==lo&&m.minFilter!==pr||m.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const M=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,M.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Ie(x,m){let M=!1;x.__webglInit===void 0&&(x.__webglInit=!0,m.addEventListener("dispose",R));const I=m.source;let k=d.get(I);k===void 0&&(k={},d.set(I,k));const G=$(m);if(G!==x.__cacheKey){k[G]===void 0&&(k[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,M=!0),k[G].usedTimes++;const de=k[x.__cacheKey];de!==void 0&&(k[x.__cacheKey].usedTimes--,de.usedTimes===0&&E(m)),x.__cacheKey=G,x.__webglTexture=k[G].texture}return M}function j(x,m,M){let I=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(I=n.TEXTURE_3D);const k=Ie(x,m),G=m.source;t.bindTexture(I,x.__webglTexture,n.TEXTURE0+M);const de=i.get(G);if(G.version!==de.__version||k===!0){t.activeTexture(n.TEXTURE0+M);const ae=at.getPrimaries(at.workingColorSpace),_e=m.colorSpace===Ui?null:at.getPrimaries(m.colorSpace),Be=m.colorSpace===Ui||ae===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Se=_(m.image,!1,r.maxTextureSize);Se=Me(m,Se);const H=s.convert(m.format,m.colorSpace),me=s.convert(m.type);let Ce=w(m.internalFormat,H,me,m.colorSpace,m.isVideoTexture);xe(I,m);let he;const Xe=m.mipmaps,Ne=m.isVideoTexture!==!0,je=de.__version===void 0||k===!0,V=G.dataReady,De=L(m,Se);if(m.isDepthTexture)Ce=S(m.format===rs,m.type),je&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Ce,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,Ce,Se.width,Se.height,0,H,me,null));else if(m.isDataTexture)if(Xe.length>0){Ne&&je&&t.texStorage2D(n.TEXTURE_2D,De,Ce,Xe[0].width,Xe[0].height);for(let se=0,ge=Xe.length;se<ge;se++)he=Xe[se],Ne?V&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,he.width,he.height,H,me,he.data):t.texImage2D(n.TEXTURE_2D,se,Ce,he.width,he.height,0,H,me,he.data);m.generateMipmaps=!1}else Ne?(je&&t.texStorage2D(n.TEXTURE_2D,De,Ce,Se.width,Se.height),V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se.width,Se.height,H,me,Se.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,Se.width,Se.height,0,H,me,Se.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ne&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ce,Xe[0].width,Xe[0].height,Se.depth);for(let se=0,ge=Xe.length;se<ge;se++)if(he=Xe[se],m.format!==Cn)if(H!==null)if(Ne){if(V)if(m.layerUpdates.size>0){const Pe=qf(he.width,he.height,m.format,m.type);for(const we of m.layerUpdates){const Je=he.data.subarray(we*Pe/he.data.BYTES_PER_ELEMENT,(we+1)*Pe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,we,he.width,he.height,1,H,Je)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,he.width,he.height,Se.depth,H,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ce,he.width,he.height,Se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,he.width,he.height,Se.depth,H,me,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ce,he.width,he.height,Se.depth,0,H,me,he.data)}else{Ne&&je&&t.texStorage2D(n.TEXTURE_2D,De,Ce,Xe[0].width,Xe[0].height);for(let se=0,ge=Xe.length;se<ge;se++)he=Xe[se],m.format!==Cn?H!==null?Ne?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,he.width,he.height,H,he.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?V&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,he.width,he.height,H,me,he.data):t.texImage2D(n.TEXTURE_2D,se,Ce,he.width,he.height,0,H,me,he.data)}else if(m.isDataArrayTexture)if(Ne){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ce,Se.width,Se.height,Se.depth),V)if(m.layerUpdates.size>0){const se=qf(Se.width,Se.height,m.format,m.type);for(const ge of m.layerUpdates){const Pe=Se.data.subarray(ge*se/Se.data.BYTES_PER_ELEMENT,(ge+1)*se/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,Se.width,Se.height,1,H,me,Pe)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,H,me,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,Se.width,Se.height,Se.depth,0,H,me,Se.data);else if(m.isData3DTexture)Ne?(je&&t.texStorage3D(n.TEXTURE_3D,De,Ce,Se.width,Se.height,Se.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,H,me,Se.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,Se.width,Se.height,Se.depth,0,H,me,Se.data);else if(m.isFramebufferTexture){if(je)if(Ne)t.texStorage2D(n.TEXTURE_2D,De,Ce,Se.width,Se.height);else{let se=Se.width,ge=Se.height;for(let Pe=0;Pe<De;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ce,se,ge,0,H,me,null),se>>=1,ge>>=1}}else if(Xe.length>0){if(Ne&&je){const se=ie(Xe[0]);t.texStorage2D(n.TEXTURE_2D,De,Ce,se.width,se.height)}for(let se=0,ge=Xe.length;se<ge;se++)he=Xe[se],Ne?V&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,H,me,he):t.texImage2D(n.TEXTURE_2D,se,Ce,H,me,he);m.generateMipmaps=!1}else if(Ne){if(je){const se=ie(Se);t.texStorage2D(n.TEXTURE_2D,De,Ce,se.width,se.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,H,me,Se)}else t.texImage2D(n.TEXTURE_2D,0,Ce,H,me,Se);p(m)&&h(I),de.__version=G.version,m.onUpdate&&m.onUpdate(m)}x.__version=m.version}function pe(x,m,M){if(m.image.length!==6)return;const I=Ie(x,m),k=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+M);const G=i.get(k);if(k.version!==G.__version||I===!0){t.activeTexture(n.TEXTURE0+M);const de=at.getPrimaries(at.workingColorSpace),ae=m.colorSpace===Ui?null:at.getPrimaries(m.colorSpace),_e=m.colorSpace===Ui||de===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Be=m.isCompressedTexture||m.image[0].isCompressedTexture,Se=m.image[0]&&m.image[0].isDataTexture,H=[];for(let ge=0;ge<6;ge++)!Be&&!Se?H[ge]=_(m.image[ge],!0,r.maxCubemapSize):H[ge]=Se?m.image[ge].image:m.image[ge],H[ge]=Me(m,H[ge]);const me=H[0],Ce=s.convert(m.format,m.colorSpace),he=s.convert(m.type),Xe=w(m.internalFormat,Ce,he,m.colorSpace),Ne=m.isVideoTexture!==!0,je=G.__version===void 0||I===!0,V=k.dataReady;let De=L(m,me);xe(n.TEXTURE_CUBE_MAP,m);let se;if(Be){Ne&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Xe,me.width,me.height);for(let ge=0;ge<6;ge++){se=H[ge].mipmaps;for(let Pe=0;Pe<se.length;Pe++){const we=se[Pe];m.format!==Cn?Ce!==null?Ne?V&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,Xe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,we.width,we.height,Ce,he,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,Xe,we.width,we.height,0,Ce,he,we.data)}}}else{if(se=m.mipmaps,Ne&&je){se.length>0&&De++;const ge=ie(H[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Xe,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Se){Ne?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,H[ge].width,H[ge].height,Ce,he,H[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Xe,H[ge].width,H[ge].height,0,Ce,he,H[ge].data);for(let Pe=0;Pe<se.length;Pe++){const Je=se[Pe].image[ge].image;Ne?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,Je.width,Je.height,Ce,he,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,Xe,Je.width,Je.height,0,Ce,he,Je.data)}}else{Ne?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ce,he,H[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Xe,Ce,he,H[ge]);for(let Pe=0;Pe<se.length;Pe++){const we=se[Pe];Ne?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,Ce,he,we.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,Xe,Ce,he,we.image[ge])}}}p(m)&&h(n.TEXTURE_CUBE_MAP),G.__version=k.version,m.onUpdate&&m.onUpdate(m)}x.__version=m.version}function ye(x,m,M,I,k,G){const de=s.convert(M.format,M.colorSpace),ae=s.convert(M.type),_e=w(M.internalFormat,de,ae,M.colorSpace),Be=i.get(m),Se=i.get(M);if(Se.__renderTarget=m,!Be.__hasExternalTextures){const H=Math.max(1,m.width>>G),me=Math.max(1,m.height>>G);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,G,_e,H,me,m.depth,0,de,ae,null):t.texImage2D(k,G,_e,H,me,0,de,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),te(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,k,Se.__webglTexture,0,Q(m)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,k,Se.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(x,m,M){if(n.bindRenderbuffer(n.RENDERBUFFER,x),m.depthBuffer){const I=m.depthTexture,k=I&&I.isDepthTexture?I.type:null,G=S(m.stencilBuffer,k),de=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Q(m);te(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,G,m.width,m.height):M?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,G,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,G,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,x)}else{const I=m.textures;for(let k=0;k<I.length;k++){const G=I[k],de=s.convert(G.format,G.colorSpace),ae=s.convert(G.type),_e=w(G.internalFormat,de,ae,G.colorSpace),Be=Q(m);M&&te(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,_e,m.width,m.height):te(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,_e,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,_e,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(x,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const I=i.get(m.depthTexture);I.__renderTarget=m,(!I.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),K(m.depthTexture,0);const k=I.__webglTexture,G=Q(m);if(m.depthTexture.format===jr)te(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(m.depthTexture.format===rs)te(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function ke(x){const m=i.get(x),M=x.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==x.depthTexture){const I=x.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),I){const k=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,I.removeEventListener("dispose",k)};I.addEventListener("dispose",k),m.__depthDisposeCallback=k}m.__boundDepthTexture=I}if(x.depthTexture&&!m.__autoAllocateDepthBuffer){if(M)throw new Error("target.depthTexture not supported in Cube render targets");Le(m.__webglFramebuffer,x)}else if(M){m.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[I]),m.__webglDepthbuffer[I]===void 0)m.__webglDepthbuffer[I]=n.createRenderbuffer(),Ae(m.__webglDepthbuffer[I],x,!1);else{const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=m.__webglDepthbuffer[I];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Ae(m.__webglDepthbuffer,x,!1);else{const I=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(x,m,M){const I=i.get(x);m!==void 0&&ye(I.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),M!==void 0&&ke(x)}function We(x){const m=x.texture,M=i.get(x),I=i.get(m);x.addEventListener("dispose",P);const k=x.textures,G=x.isWebGLCubeRenderTarget===!0,de=k.length>1;if(de||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=m.version,o.memory.textures++),G){M.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0){M.__webglFramebuffer[ae]=[];for(let _e=0;_e<m.mipmaps.length;_e++)M.__webglFramebuffer[ae][_e]=n.createFramebuffer()}else M.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){M.__webglFramebuffer=[];for(let ae=0;ae<m.mipmaps.length;ae++)M.__webglFramebuffer[ae]=n.createFramebuffer()}else M.__webglFramebuffer=n.createFramebuffer();if(de)for(let ae=0,_e=k.length;ae<_e;ae++){const Be=i.get(k[ae]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&te(x)===!1){M.__webglMultisampledFramebuffer=n.createFramebuffer(),M.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,M.__webglMultisampledFramebuffer);for(let ae=0;ae<k.length;ae++){const _e=k[ae];M.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,M.__webglColorRenderbuffer[ae]);const Be=s.convert(_e.format,_e.colorSpace),Se=s.convert(_e.type),H=w(_e.internalFormat,Be,Se,_e.colorSpace,x.isXRRenderTarget===!0),me=Q(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,H,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,M.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(M.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(M.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),xe(n.TEXTURE_CUBE_MAP,m);for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0)for(let _e=0;_e<m.mipmaps.length;_e++)ye(M.__webglFramebuffer[ae][_e],x,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e);else ye(M.__webglFramebuffer[ae],x,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(m)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ae=0,_e=k.length;ae<_e;ae++){const Be=k[ae],Se=i.get(Be);t.bindTexture(n.TEXTURE_2D,Se.__webglTexture),xe(n.TEXTURE_2D,Be),ye(M.__webglFramebuffer,x,Be,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),p(Be)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ae=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,I.__webglTexture),xe(ae,m),m.mipmaps&&m.mipmaps.length>0)for(let _e=0;_e<m.mipmaps.length;_e++)ye(M.__webglFramebuffer[_e],x,m,n.COLOR_ATTACHMENT0,ae,_e);else ye(M.__webglFramebuffer,x,m,n.COLOR_ATTACHMENT0,ae,0);p(m)&&h(ae),t.unbindTexture()}x.depthBuffer&&ke(x)}function b(x){const m=x.textures;for(let M=0,I=m.length;M<I;M++){const k=m[M];if(p(k)){const G=T(x),de=i.get(k).__webglTexture;t.bindTexture(G,de),h(G),t.unbindTexture()}}}const U=[],A=[];function fe(x){if(x.samples>0){if(te(x)===!1){const m=x.textures,M=x.width,I=x.height;let k=n.COLOR_BUFFER_BIT;const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(x),ae=m.length>1;if(ae)for(let _e=0;_e<m.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<m.length;_e++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Be=i.get(m[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,M,I,0,0,M,I,k,n.NEAREST),l===!0&&(U.length=0,A.length=0,U.push(n.COLOR_ATTACHMENT0+_e),x.depthBuffer&&x.resolveDepthBuffer===!1&&(U.push(G),A.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let _e=0;_e<m.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Be=i.get(m[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const m=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function Q(x){return Math.min(r.maxSamples,x.samples)}function te(x){const m=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ue(x){const m=o.render.frame;u.get(x)!==m&&(u.set(x,m),x.update())}function Me(x,m){const M=x.colorSpace,I=x.format,k=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||M!==cs&&M!==Ui&&(at.getTransfer(M)===pt?(I!==Cn||k!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",M)),m}function ie(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=We,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=te}function CS(n,e){function t(i,r=Ui){let s;const o=at.getTransfer(r);if(i===gi)return n.UNSIGNED_BYTE;if(i===Wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.BYTE;if(i===Th)return n.SHORT;if(i===Gs)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===xr)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===$s)return n.HALF_FLOAT;if(i===Ah)return n.ALPHA;if(i===Ch)return n.RGB;if(i===Cn)return n.RGBA;if(i===Rh)return n.LUMINANCE;if(i===Ph)return n.LUMINANCE_ALPHA;if(i===jr)return n.DEPTH_COMPONENT;if(i===rs)return n.DEPTH_STENCIL;if(i===Dh)return n.RED;if(i===Yc)return n.RED_INTEGER;if(i===Lh)return n.RG;if(i===$c)return n.RG_INTEGER;if(i===qc)return n.RGBA_INTEGER;if(i===Bo||i===ko||i===zo||i===Ho)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===jl||i===Zl||i===Jl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===ec||i===tc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ql||i===ec)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vo||i===gc||i===vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vo)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ih||i===_c||i===xc||i===Mc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class RS extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PS={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),g=.02,v=.005;c.inputState.pinching&&d>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Po;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const DS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LS=`
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

}`;class IS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xn({vertexShader:DS,fragmentShader:LS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new Xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class US extends us{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,g=null,v=null;const _=new IS,p=t.getContextAttributes();let h=null,T=null;const w=[],S=[],L=new mt;let R=null;const P=new Tn;P.viewport=new yt;const F=new Tn;F.viewport=new yt;const E=[P,F],y=new RS;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pe=w[j];return pe===void 0&&(pe=new pl,w[j]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(j){let pe=w[j];return pe===void 0&&(pe=new pl,w[j]=pe),pe.getGripSpace()},this.getHand=function(j){let pe=w[j];return pe===void 0&&(pe=new pl,w[j]=pe),pe.getHandSpace()};function O(j){const pe=S.indexOf(j.inputSource);if(pe===-1)return;const ye=w[pe];ye!==void 0&&(ye.update(j.inputSource,j.frame,c||o),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",K);for(let j=0;j<w.length;j++){const pe=S[j];pe!==null&&(S[j]=null,w[j].disconnect(pe))}N=null,B=null,_.reset(),e.setRenderTarget(h),g=null,d=null,f=null,r=null,T=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",$),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const pe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new Mr(g.framebufferWidth,g.framebufferHeight,{format:Cn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let pe=null,ye=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=p.stencil?rs:jr,ye=p.stencil?is:xr);const Le={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Mr(d.textureWidth,d.textureHeight,{format:Cn,type:gi,depthTexture:new qh(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(j){for(let pe=0;pe<j.removed.length;pe++){const ye=j.removed[pe],Ae=S.indexOf(ye);Ae>=0&&(S[Ae]=null,w[Ae].disconnect(ye))}for(let pe=0;pe<j.added.length;pe++){const ye=j.added[pe];let Ae=S.indexOf(ye);if(Ae===-1){for(let ke=0;ke<w.length;ke++)if(ke>=S.length){S.push(ye),Ae=ke;break}else if(S[ke]===null){S[ke]=ye,Ae=ke;break}if(Ae===-1)break}const Le=w[Ae];Le&&Le.connect(ye)}}const Z=new le,J=new le;function W(j,pe,ye){Z.setFromMatrixPosition(pe.matrixWorld),J.setFromMatrixPosition(ye.matrixWorld);const Ae=Z.distanceTo(J),Le=pe.projectionMatrix.elements,ke=ye.projectionMatrix.elements,He=Le[14]/(Le[10]-1),We=Le[14]/(Le[10]+1),b=(Le[9]+1)/Le[5],U=(Le[9]-1)/Le[5],A=(Le[8]-1)/Le[0],fe=(ke[8]+1)/ke[0],Q=He*A,te=He*fe,ue=Ae/(-A+fe),Me=ue*-A;if(pe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Me),j.translateZ(ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Le[10]===-1)j.projectionMatrix.copy(pe.projectionMatrix),j.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const ie=He+ue,x=We+ue,m=Q-Me,M=te+(Ae-Me),I=b*We/x*ie,k=U*We/x*ie;j.projectionMatrix.makePerspective(m,M,I,k,ie,x),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,pe){pe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let pe=j.near,ye=j.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),y.near=F.near=P.near=pe,y.far=F.far=P.far=ye,(N!==y.near||B!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,B=y.far),P.layers.mask=j.layers.mask|2,F.layers.mask=j.layers.mask|4,y.layers.mask=P.layers.mask|F.layers.mask;const Ae=j.parent,Le=y.cameras;ce(y,Ae);for(let ke=0;ke<Le.length;ke++)ce(Le[ke],Ae);Le.length===2?W(y,P,F):y.projectionMatrix.copy(P.projectionMatrix),q(j,y,Ae)};function q(j,pe,ye){ye===null?j.matrix.copy(pe.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(pe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pe.projectionMatrix),j.projectionMatrixInverse.copy(pe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Sc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let re=null;function xe(j,pe){if(u=pe.getViewerPose(c||o),v=pe,u!==null){const ye=u.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let Ae=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,Ae=!0);for(let ke=0;ke<ye.length;ke++){const He=ye[ke];let We=null;if(g!==null)We=g.getViewport(He);else{const U=f.getViewSubImage(d,He);We=U.viewport,ke===0&&(e.setRenderTargetTextures(T,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(T))}let b=E[ke];b===void 0&&(b=new Tn,b.layers.enable(ke),b.viewport=new yt,E[ke]=b),b.matrix.fromArray(He.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(He.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(We.x,We.y,We.width,We.height),ke===0&&(y.matrix.copy(b.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ae===!0&&y.cameras.push(b)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ke=f.getDepthInformation(ye[0]);ke&&ke.isValid&&ke.texture&&_.init(e,ke,r.renderState)}}for(let ye=0;ye<w.length;ye++){const Ae=S[ye],Le=w[ye];Ae!==null&&Le!==void 0&&Le.update(Ae,pe,c||o)}re&&re(j,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),v=null}const Ie=new $h;Ie.setAnimationLoop(xe),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}}const rr=new vi,NS=new Tt;function FS(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Gh(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,T,w,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&g(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,T,w):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===rn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===rn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h),w=T.envMap,S=T.envMapRotation;w&&(p.envMap.value=w,rr.copy(S),rr.x*=-1,rr.y*=-1,rr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),p.envMapRotation.value.setFromMatrix4(NS.makeRotationFromEuler(rr)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,w){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=w*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function g(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function OS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const S=w.program;i.uniformBlockBinding(T,S)}function c(T,w){let S=r[T.id];S===void 0&&(v(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",p));const L=w.program;i.updateUBOMapping(T,L);const R=e.render.frame;s[T.id]!==R&&(d(T),s[T.id]=R)}function u(T){const w=f();T.__bindingPointIndex=w;const S=n.createBuffer(),L=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const w=r[T.id],S=T.uniforms,L=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let R=0,P=S.length;R<P;R++){const F=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,y=F.length;E<y;E++){const N=F[E];if(g(N,R,E,L)===!0){const B=N.__offset,O=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let K=0;K<O.length;K++){const Z=O[K],J=_(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,B+$,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(T,w,S,L){const R=T.value,P=w+"_"+S;if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:L[P]=R.clone(),!0;{const F=L[P];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return L[P]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function v(T){const w=T.uniforms;let S=0;const L=16;for(let P=0,F=w.length;P<F;P++){const E=Array.isArray(w[P])?w[P]:[w[P]];for(let y=0,N=E.length;y<N;y++){const B=E[y],O=Array.isArray(B.value)?B.value:[B.value];for(let $=0,K=O.length;$<K;$++){const Z=O[$],J=_(Z),W=S%L,ce=W%J.boundary,q=W+ce;S+=ce,q!==0&&L-q<J.storage&&(S+=L-q),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=J.storage}}}const R=S%L;return R>0&&(S+=L-R),T.__size=S,T.__cache={},this}function _(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function p(T){const w=T.target;w.removeEventListener("dispose",p);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Ea{constructor(e={}){const{canvas:t=Tv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=Bi,this.toneMappingExposure=1;const S=this;let L=!1,R=0,P=0,F=null,E=-1,y=null;const N=new yt,B=new yt;let O=null;const $=new dt(0);let K=0,Z=t.width,J=t.height,W=1,ce=null,q=null;const re=new yt(0,0,Z,J),xe=new yt(0,0,Z,J);let Ie=!1;const j=new Yh;let pe=!1,ye=!1;const Ae=new Tt,Le=new Tt,ke=new le,He=new yt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let b=!1;function U(){return F===null?W:1}let A=i;function fe(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",we,!1),A===null){const X="webgl2";if(A=fe(X,C),A===null)throw fe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,te,ue,Me,ie,x,m,M,I,k,G,de,ae,_e,Be,Se,H,me,Ce,he,Xe,Ne,je,V;function De(){Q=new Gx(A),Q.init(),Ne=new CS(A,Q),te=new Ox(A,Q,e,Ne),ue=new TS(A,Q),te.reverseDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),Me=new Yx(A),ie=new uS,x=new AS(A,Q,ue,ie,te,Ne,Me),m=new kx(S),M=new Vx(S),I=new Qv(A),je=new Nx(A,I),k=new Wx(A,I,Me,je),G=new qx(A,k,I,Me),Ce=new $x(A,te,x),Se=new Bx(ie),de=new cS(S,m,M,Q,te,je,Se),ae=new FS(S,ie),_e=new dS,Be=new _S(Q),me=new Ux(S,m,M,ue,G,g,l),H=new ES(S,G,te),V=new OS(A,Me,te,ue),he=new Fx(A,Q,Me),Xe=new Xx(A,Q,Me),Me.programs=de.programs,S.capabilities=te,S.extensions=Q,S.properties=ie,S.renderLists=_e,S.shadowMap=H,S.state=ue,S.info=Me}De();const se=new US(S,A);this.xr=se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(Z,J,!1))},this.getSize=function(C){return C.set(Z,J)},this.setSize=function(C,X,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,J=X,t.width=Math.floor(C*W),t.height=Math.floor(X*W),ee===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(Z*W,J*W).floor()},this.setDrawingBufferSize=function(C,X,ee){Z=C,J=X,W=ee,t.width=Math.floor(C*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(re)},this.setViewport=function(C,X,ee,ne){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,X,ee,ne),ue.viewport(N.copy(re).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,X,ee,ne){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,X,ee,ne),ue.scissor(B.copy(xe).multiplyScalar(W).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(C){ue.setScissorTest(Ie=C)},this.setOpaqueSort=function(C){ce=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(C=!0,X=!0,ee=!0){let ne=0;if(C){let Y=!1;if(F!==null){const Re=F.texture.format;Y=Re===qc||Re===$c||Re===Yc}if(Y){const Re=F.texture.type,Oe=Re===gi||Re===xr||Re===Gs||Re===is||Re===Wc||Re===Xc,Ve=me.getClearColor(),Ye=me.getClearAlpha(),Ze=Ve.r,Qe=Ve.g,D=Ve.b;Oe?(v[0]=Ze,v[1]=Qe,v[2]=D,v[3]=Ye,A.clearBufferuiv(A.COLOR,0,v)):(_[0]=Ze,_[1]=Qe,_[2]=D,_[3]=Ye,A.clearBufferiv(A.COLOR,0,_))}else ne|=A.COLOR_BUFFER_BIT}X&&(ne|=A.DEPTH_BUFFER_BIT),ee&&(ne|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",we,!1),_e.dispose(),Be.dispose(),ie.dispose(),m.dispose(),M.dispose(),G.dispose(),je.dispose(),V.dispose(),de.dispose(),se.dispose(),se.removeEventListener("sessionstart",$i),se.removeEventListener("sessionend",Bn),Mn.stop()};function ge(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=Me.autoReset,X=H.enabled,ee=H.autoUpdate,ne=H.needsUpdate,Y=H.type;De(),Me.autoReset=C,H.enabled=X,H.autoUpdate=ee,H.needsUpdate=ne,H.type=Y}function we(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Je(C){const X=C.target;X.removeEventListener("dispose",Je),ut(X)}function ut(C){xt(C),ie.remove(C)}function xt(C){const X=ie.get(C).programs;X!==void 0&&(X.forEach(function(ee){de.releaseProgram(ee)}),C.isShaderMaterial&&de.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ee,ne,Y,Re){X===null&&(X=We);const Oe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ve=Ta(C,X,ee,ne,Y);ue.setMaterial(ne,Oe);let Ye=ee.index,Ze=1;if(ne.wireframe===!0){if(Ye=k.getWireframeAttribute(ee),Ye===void 0)return;Ze=2}const Qe=ee.drawRange,D=ee.attributes.position;let z=Qe.start*Ze,oe=(Qe.start+Qe.count)*Ze;Re!==null&&(z=Math.max(z,Re.start*Ze),oe=Math.min(oe,(Re.start+Re.count)*Ze)),Ye!==null?(z=Math.max(z,0),oe=Math.min(oe,Ye.count)):D!=null&&(z=Math.max(z,0),oe=Math.min(oe,D.count));const Ee=oe-z;if(Ee<0||Ee===1/0)return;je.setup(Y,ne,Ve,ee,Ye);let Te,be=he;if(Ye!==null&&(Te=I.get(Ye),be=Xe,be.setIndex(Te)),Y.isMesh)ne.wireframe===!0?(ue.setLineWidth(ne.wireframeLinewidth*U()),be.setMode(A.LINES)):be.setMode(A.TRIANGLES);else if(Y.isLine){let ve=ne.linewidth;ve===void 0&&(ve=1),ue.setLineWidth(ve*U()),Y.isLineSegments?be.setMode(A.LINES):Y.isLineLoop?be.setMode(A.LINE_LOOP):be.setMode(A.LINE_STRIP)}else Y.isPoints?be.setMode(A.POINTS):Y.isSprite&&be.setMode(A.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)be.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))be.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ve=Y._multiDrawStarts,st=Y._multiDrawCounts,ze=Y._multiDrawCount,ot=Ye?I.get(Ye).bytesPerElement:1,Dt=ie.get(ne).currentProgram.getUniforms();for(let wt=0;wt<ze;wt++)Dt.setValue(A,"_gl_DrawID",wt),be.render(ve[wt]/ot,st[wt])}else if(Y.isInstancedMesh)be.renderInstances(z,Ee,Y.count);else if(ee.isInstancedBufferGeometry){const ve=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,st=Math.min(ee.instanceCount,ve);be.renderInstances(z,Ee,st)}else be.render(z,Ee)};function Ke(C,X,ee){C.transparent===!0&&C.side===li&&C.forceSinglePass===!1?(C.side=rn,C.needsUpdate=!0,qi(C,X,ee),C.side=Hi,C.needsUpdate=!0,qi(C,X,ee),C.side=li):qi(C,X,ee)}this.compile=function(C,X,ee=null){ee===null&&(ee=C),h=Be.get(ee),h.init(X),w.push(h),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),C!==ee&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights();const ne=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Oe=0;Oe<Re.length;Oe++){const Ve=Re[Oe];Ke(Ve,ee,Y),ne.add(Ve)}else Ke(Re,ee,Y),ne.add(Re)}),w.pop(),h=null,ne},this.compileAsync=function(C,X,ee=null){const ne=this.compile(C,X,ee);return new Promise(Y=>{function Re(){if(ne.forEach(function(Oe){ie.get(Oe).currentProgram.isReady()&&ne.delete(Oe)}),ne.size===0){Y(C);return}setTimeout(Re,10)}Q.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Zt=null;function sn(C){Zt&&Zt(C)}function $i(){Mn.stop()}function Bn(){Mn.start()}const Mn=new $h;Mn.setAnimationLoop(sn),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(C){Zt=C,se.setAnimationLoop(C),C===null?Mn.stop():Mn.start()},se.addEventListener("sessionstart",$i),se.addEventListener("sessionend",Bn),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,X,F),h=Be.get(C,w.length),h.init(X),w.push(h),Le.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(Le),ye=this.localClippingEnabled,pe=Se.init(this.clippingPlanes,ye),p=_e.get(C,T.length),p.init(),T.push(p),se.enabled===!0&&se.isPresenting===!0){const Re=S.xr.getDepthSensingMesh();Re!==null&&ds(Re,X,-1/0,S.sortObjects)}ds(C,X,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(ce,q),b=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,b&&me.addToRenderList(p,C),this.info.render.frame++,pe===!0&&Se.beginShadows();const ee=h.state.shadowsArray;H.render(ee,C,X),pe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=p.opaque,Y=p.transmissive;if(h.setupLights(),X.isArrayCamera){const Re=X.cameras;if(Y.length>0)for(let Oe=0,Ve=Re.length;Oe<Ve;Oe++){const Ye=Re[Oe];eo(ne,Y,C,Ye)}b&&me.render(C);for(let Oe=0,Ve=Re.length;Oe<Ve;Oe++){const Ye=Re[Oe];Qs(p,C,Ye,Ye.viewport)}}else Y.length>0&&eo(ne,Y,C,X),b&&me.render(C),Qs(p,C,X);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(S,C,X),je.resetDefaultState(),E=-1,y=null,w.pop(),w.length>0?(h=w[w.length-1],pe===!0&&Se.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function ds(C,X,ee,ne){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){ne&&He.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Le);const Oe=G.update(C),Ve=C.material;Ve.visible&&p.push(C,Oe,Ve,ee,He.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const Oe=G.update(C),Ve=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),He.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),He.copy(Oe.boundingSphere.center)),He.applyMatrix4(C.matrixWorld).applyMatrix4(Le)),Array.isArray(Ve)){const Ye=Oe.groups;for(let Ze=0,Qe=Ye.length;Ze<Qe;Ze++){const D=Ye[Ze],z=Ve[D.materialIndex];z&&z.visible&&p.push(C,Oe,z,ee,He.z,D)}}else Ve.visible&&p.push(C,Oe,Ve,ee,He.z,null)}}const Re=C.children;for(let Oe=0,Ve=Re.length;Oe<Ve;Oe++)ds(Re[Oe],X,ee,ne)}function Qs(C,X,ee,ne){const Y=C.opaque,Re=C.transmissive,Oe=C.transparent;h.setupLightsView(ee),pe===!0&&Se.setGlobalState(S.clippingPlanes,ee),ne&&ue.viewport(N.copy(ne)),Y.length>0&&br(Y,X,ee),Re.length>0&&br(Re,X,ee),Oe.length>0&&br(Oe,X,ee),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function eo(C,X,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ne.id]===void 0&&(h.state.transmissionRenderTarget[ne.id]=new Mr(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?$s:gi,minFilter:pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const Re=h.state.transmissionRenderTarget[ne.id],Oe=ne.viewport||N;Re.setSize(Oe.z,Oe.w);const Ve=S.getRenderTarget();S.setRenderTarget(Re),S.getClearColor($),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),b&&me.render(ee);const Ye=S.toneMapping;S.toneMapping=Bi;const Ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),h.setupLightsView(ne),pe===!0&&Se.setGlobalState(S.clippingPlanes,ne),br(C,ee,ne),x.updateMultisampleRenderTarget(Re),x.updateRenderTargetMipmap(Re),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let D=0,z=X.length;D<z;D++){const oe=X[D],Ee=oe.object,Te=oe.geometry,be=oe.material,ve=oe.group;if(be.side===li&&Ee.layers.test(ne.layers)){const st=be.side;be.side=rn,be.needsUpdate=!0,to(Ee,ee,ne,Te,be,ve),be.side=st,be.needsUpdate=!0,Qe=!0}}Qe===!0&&(x.updateMultisampleRenderTarget(Re),x.updateRenderTargetMipmap(Re))}S.setRenderTarget(Ve),S.setClearColor($,K),Ze!==void 0&&(ne.viewport=Ze),S.toneMapping=Ye}function br(C,X,ee){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Re=C.length;Y<Re;Y++){const Oe=C[Y],Ve=Oe.object,Ye=Oe.geometry,Ze=ne===null?Oe.material:ne,Qe=Oe.group;Ve.layers.test(ee.layers)&&to(Ve,X,ee,Ye,Ze,Qe)}}function to(C,X,ee,ne,Y,Re){C.onBeforeRender(S,X,ee,ne,Y,Re),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(S,X,ee,ne,C,Re),Y.transparent===!0&&Y.side===li&&Y.forceSinglePass===!1?(Y.side=rn,Y.needsUpdate=!0,S.renderBufferDirect(ee,X,ne,Y,C,Re),Y.side=Hi,Y.needsUpdate=!0,S.renderBufferDirect(ee,X,ne,Y,C,Re),Y.side=li):S.renderBufferDirect(ee,X,ne,Y,C,Re),C.onAfterRender(S,X,ee,ne,Y,Re)}function qi(C,X,ee){X.isScene!==!0&&(X=We);const ne=ie.get(C),Y=h.state.lights,Re=h.state.shadowsArray,Oe=Y.state.version,Ve=de.getParameters(C,Y.state,Re,X,ee),Ye=de.getProgramCacheKey(Ve);let Ze=ne.programs;ne.environment=C.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(C.isMeshStandardMaterial?M:m).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",Je),Ze=new Map,ne.programs=Ze);let Qe=Ze.get(Ye);if(Qe!==void 0){if(ne.currentProgram===Qe&&ne.lightsStateVersion===Oe)return io(C,Ve),Qe}else Ve.uniforms=de.getUniforms(C),C.onBeforeCompile(Ve,S),Qe=de.acquireProgram(Ve,Ye),Ze.set(Ye,Qe),ne.uniforms=Ve.uniforms;const D=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(D.clippingPlanes=Se.uniform),io(C,Ve),ne.needsLights=ro(C),ne.lightsStateVersion=Oe,ne.needsLights&&(D.ambientLightColor.value=Y.state.ambient,D.lightProbe.value=Y.state.probe,D.directionalLights.value=Y.state.directional,D.directionalLightShadows.value=Y.state.directionalShadow,D.spotLights.value=Y.state.spot,D.spotLightShadows.value=Y.state.spotShadow,D.rectAreaLights.value=Y.state.rectArea,D.ltc_1.value=Y.state.rectAreaLTC1,D.ltc_2.value=Y.state.rectAreaLTC2,D.pointLights.value=Y.state.point,D.pointLightShadows.value=Y.state.pointShadow,D.hemisphereLights.value=Y.state.hemi,D.directionalShadowMap.value=Y.state.directionalShadowMap,D.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,D.spotShadowMap.value=Y.state.spotShadowMap,D.spotLightMatrix.value=Y.state.spotLightMatrix,D.spotLightMap.value=Y.state.spotLightMap,D.pointShadowMap.value=Y.state.pointShadowMap,D.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=Qe,ne.uniformsList=null,Qe}function no(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Go.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function io(C,X){const ee=ie.get(C);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Ta(C,X,ee,ne,Y){X.isScene!==!0&&(X=We),x.resetTextureUnits();const Re=X.fog,Oe=ne.isMeshStandardMaterial?X.environment:null,Ve=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:cs,Ye=(ne.isMeshStandardMaterial?M:m).get(ne.envMap||Oe),Ze=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Qe=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),D=!!ee.morphAttributes.position,z=!!ee.morphAttributes.normal,oe=!!ee.morphAttributes.color;let Ee=Bi;ne.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ee=S.toneMapping);const Te=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,be=Te!==void 0?Te.length:0,ve=ie.get(ne),st=h.state.lights;if(pe===!0&&(ye===!0||C!==y)){const pn=C===y&&ne.id===E;Se.setState(ne,C,pn)}let ze=!1;ne.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==st.state.version||ve.outputColorSpace!==Ve||Y.isBatchedMesh&&ve.batching===!1||!Y.isBatchedMesh&&ve.batching===!0||Y.isBatchedMesh&&ve.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ve.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ve.instancing===!1||!Y.isInstancedMesh&&ve.instancing===!0||Y.isSkinnedMesh&&ve.skinning===!1||!Y.isSkinnedMesh&&ve.skinning===!0||Y.isInstancedMesh&&ve.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ve.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ve.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ve.instancingMorph===!1&&Y.morphTexture!==null||ve.envMap!==Ye||ne.fog===!0&&ve.fog!==Re||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Se.numPlanes||ve.numIntersection!==Se.numIntersection)||ve.vertexAlphas!==Ze||ve.vertexTangents!==Qe||ve.morphTargets!==D||ve.morphNormals!==z||ve.morphColors!==oe||ve.toneMapping!==Ee||ve.morphTargetsCount!==be)&&(ze=!0):(ze=!0,ve.__version=ne.version);let ot=ve.currentProgram;ze===!0&&(ot=qi(ne,X,Y));let Dt=!1,wt=!1,Sn=!1;const lt=ot.getUniforms(),Ot=ve.uniforms;if(ue.useProgram(ot.program)&&(Dt=!0,wt=!0,Sn=!0),ne.id!==E&&(E=ne.id,wt=!0),Dt||y!==C){ue.buffers.depth.getReversed()?(Ae.copy(C.projectionMatrix),Av(Ae),Cv(Ae),lt.setValue(A,"projectionMatrix",Ae)):lt.setValue(A,"projectionMatrix",C.projectionMatrix),lt.setValue(A,"viewMatrix",C.matrixWorldInverse);const Mi=lt.map.cameraPosition;Mi!==void 0&&Mi.setValue(A,ke.setFromMatrixPosition(C.matrixWorld)),te.logarithmicDepthBuffer&&lt.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&lt.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,wt=!0,Sn=!0)}if(Y.isSkinnedMesh){lt.setOptional(A,Y,"bindMatrix"),lt.setOptional(A,Y,"bindMatrixInverse");const pn=Y.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),lt.setValue(A,"boneTexture",pn.boneTexture,x))}Y.isBatchedMesh&&(lt.setOptional(A,Y,"batchingTexture"),lt.setValue(A,"batchingTexture",Y._matricesTexture,x),lt.setOptional(A,Y,"batchingIdTexture"),lt.setValue(A,"batchingIdTexture",Y._indirectTexture,x),lt.setOptional(A,Y,"batchingColorTexture"),Y._colorsTexture!==null&&lt.setValue(A,"batchingColorTexture",Y._colorsTexture,x));const hs=ee.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Ce.update(Y,ee,ot),(wt||ve.receiveShadow!==Y.receiveShadow)&&(ve.receiveShadow=Y.receiveShadow,lt.setValue(A,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ot.envMap.value=Ye,Ot.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Ot.envMapIntensity.value=X.environmentIntensity),wt&&(lt.setValue(A,"toneMappingExposure",S.toneMappingExposure),ve.needsLights&&wa(Ot,Sn),Re&&ne.fog===!0&&ae.refreshFogUniforms(Ot,Re),ae.refreshMaterialUniforms(Ot,ne,W,J,h.state.transmissionRenderTarget[C.id]),Go.upload(A,no(ve),Ot,x)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Go.upload(A,no(ve),Ot,x),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&lt.setValue(A,"center",Y.center),lt.setValue(A,"modelViewMatrix",Y.modelViewMatrix),lt.setValue(A,"normalMatrix",Y.normalMatrix),lt.setValue(A,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const pn=ne.uniformsGroups;for(let Mi=0,Si=pn.length;Mi<Si;Mi++){const cu=pn[Mi];V.update(cu,ot),V.bind(cu,ot)}}return ot}function wa(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function ro(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,X,ee){ie.get(C.texture).__webglTexture=X,ie.get(C.depthTexture).__webglTexture=ee;const ne=ie.get(C);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const ee=ie.get(C);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ee=0){F=C,R=X,P=ee;let ne=!0,Y=null,Re=!1,Oe=!1;if(C){const Ye=ie.get(C);if(Ye.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(A.FRAMEBUFFER,null),ne=!1;else if(Ye.__webglFramebuffer===void 0)x.setupRenderTarget(C);else if(Ye.__hasExternalTextures)x.rebindTextures(C,ie.get(C.texture).__webglTexture,ie.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const D=C.depthTexture;if(Ye.__boundDepthTexture!==D){if(D!==null&&ie.has(D)&&(C.width!==D.image.width||C.height!==D.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Oe=!0);const Qe=ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?Y=Qe[X][ee]:Y=Qe[X],Re=!0):C.samples>0&&x.useMultisampledRTT(C)===!1?Y=ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[ee]:Y=Qe,N.copy(C.viewport),B.copy(C.scissor),O=C.scissorTest}else N.copy(re).multiplyScalar(W).floor(),B.copy(xe).multiplyScalar(W).floor(),O=Ie;if(ue.bindFramebuffer(A.FRAMEBUFFER,Y)&&ne&&ue.drawBuffers(C,Y),ue.viewport(N),ue.scissor(B),ue.setScissorTest(O),Re){const Ye=ie.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ye.__webglTexture,ee)}else if(Oe){const Ye=ie.get(C.texture),Ze=X||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ye.__webglTexture,ee||0,Ze)}E=-1},this.readRenderTargetPixels=function(C,X,ee,ne,Y,Re,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){ue.bindFramebuffer(A.FRAMEBUFFER,Ve);try{const Ye=C.texture,Ze=Ye.format,Qe=Ye.type;if(!te.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ne&&ee>=0&&ee<=C.height-Y&&A.readPixels(X,ee,ne,Y,Ne.convert(Ze),Ne.convert(Qe),Re)}finally{const Ye=F!==null?ie.get(F).__webglFramebuffer:null;ue.bindFramebuffer(A.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,X,ee,ne,Y,Re,Oe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){const Ye=C.texture,Ze=Ye.format,Qe=Ye.type;if(!te.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-ne&&ee>=0&&ee<=C.height-Y){ue.bindFramebuffer(A.FRAMEBUFFER,Ve);const D=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,D),A.bufferData(A.PIXEL_PACK_BUFFER,Re.byteLength,A.STREAM_READ),A.readPixels(X,ee,ne,Y,Ne.convert(Ze),Ne.convert(Qe),0);const z=F!==null?ie.get(F).__webglFramebuffer:null;ue.bindFramebuffer(A.FRAMEBUFFER,z);const oe=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await wv(A,oe,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,D),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Re),A.deleteBuffer(D),A.deleteSync(oe),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,ee=0){C.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const ne=Math.pow(2,-ee),Y=Math.floor(C.image.width*ne),Re=Math.floor(C.image.height*ne),Oe=X!==null?X.x:0,Ve=X!==null?X.y:0;x.setTexture2D(C,0),A.copyTexSubImage2D(A.TEXTURE_2D,ee,0,0,Oe,Ve,Y,Re),ue.unbindTexture()},this.copyTextureToTexture=function(C,X,ee=null,ne=null,Y=0){C.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,C=arguments[1],X=arguments[2],Y=arguments[3]||0,ee=null);let Re,Oe,Ve,Ye,Ze,Qe,D,z,oe;const Ee=C.isCompressedTexture?C.mipmaps[Y]:C.image;ee!==null?(Re=ee.max.x-ee.min.x,Oe=ee.max.y-ee.min.y,Ve=ee.isBox3?ee.max.z-ee.min.z:1,Ye=ee.min.x,Ze=ee.min.y,Qe=ee.isBox3?ee.min.z:0):(Re=Ee.width,Oe=Ee.height,Ve=Ee.depth||1,Ye=0,Ze=0,Qe=0),ne!==null?(D=ne.x,z=ne.y,oe=ne.z):(D=0,z=0,oe=0);const Te=Ne.convert(X.format),be=Ne.convert(X.type);let ve;X.isData3DTexture?(x.setTexture3D(X,0),ve=A.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(x.setTexture2DArray(X,0),ve=A.TEXTURE_2D_ARRAY):(x.setTexture2D(X,0),ve=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,X.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,X.unpackAlignment);const st=A.getParameter(A.UNPACK_ROW_LENGTH),ze=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ot=A.getParameter(A.UNPACK_SKIP_PIXELS),Dt=A.getParameter(A.UNPACK_SKIP_ROWS),wt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ee.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ee.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ye),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ze),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Qe);const Sn=C.isDataArrayTexture||C.isData3DTexture,lt=X.isDataArrayTexture||X.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Ot=ie.get(C),hs=ie.get(X),pn=ie.get(Ot.__renderTarget),Mi=ie.get(hs.__renderTarget);ue.bindFramebuffer(A.READ_FRAMEBUFFER,pn.__webglFramebuffer),ue.bindFramebuffer(A.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Si=0;Si<Ve;Si++)Sn&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ie.get(C).__webglTexture,Y,Qe+Si),C.isDepthTexture?(lt&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ie.get(X).__webglTexture,Y,oe+Si),A.blitFramebuffer(Ye,Ze,Re,Oe,D,z,Re,Oe,A.DEPTH_BUFFER_BIT,A.NEAREST)):lt?A.copyTexSubImage3D(ve,Y,D,z,oe+Si,Ye,Ze,Re,Oe):A.copyTexSubImage2D(ve,Y,D,z,oe+Si,Ye,Ze,Re,Oe);ue.bindFramebuffer(A.READ_FRAMEBUFFER,null),ue.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else lt?C.isDataTexture||C.isData3DTexture?A.texSubImage3D(ve,Y,D,z,oe,Re,Oe,Ve,Te,be,Ee.data):X.isCompressedArrayTexture?A.compressedTexSubImage3D(ve,Y,D,z,oe,Re,Oe,Ve,Te,Ee.data):A.texSubImage3D(ve,Y,D,z,oe,Re,Oe,Ve,Te,be,Ee):C.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Y,D,z,Re,Oe,Te,be,Ee.data):C.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Y,D,z,Ee.width,Ee.height,Te,Ee.data):A.texSubImage2D(A.TEXTURE_2D,Y,D,z,Re,Oe,Te,be,Ee);A.pixelStorei(A.UNPACK_ROW_LENGTH,st),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ze),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ot),A.pixelStorei(A.UNPACK_SKIP_ROWS,Dt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,wt),Y===0&&X.generateMipmaps&&A.generateMipmap(ve),ue.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ee=null,ne=null,Y=0){return C.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,ne=arguments[1]||null,C=arguments[2],X=arguments[3],Y=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,ee,ne,Y)},this.initRenderTarget=function(C){ie.get(C).__webglFramebuffer===void 0&&x.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?x.setTextureCube(C,0):C.isData3DTexture?x.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?x.setTexture2DArray(C,0):x.setTexture2D(C,0),ue.unbindTexture()},this.resetState=function(){R=0,P=0,F=null,ue.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class ba extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sr extends jt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);const Li={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},It=30,Ec=12,BS=10,Wo=14,Qh=5;function ta(){return`${Ec}px system-ui, -apple-system, sans-serif`}function ep(n,e,t){const i=String(e??"");if(!i)return[""];const r=i.split(/\s+/).filter(Boolean);if(r.length===0)return[""];const s=[];let o="";for(const a of r){const l=o?o+" "+a:a;!o||n.measureText(l).width<=t?o=l:(s.push(o),o=a)}return o&&s.push(o),s.length?s:[""]}function kS(n,e){return Math.max(e,n*Wo+Qh*2)}function Zc(n,e){const t=new Array(e+1);t[0]=0;for(let i=0;i<e;i++)t[i+1]=t[i]+(n[i]??0);return t}function na(n,e){if(e<=0)return 0;let t=0,i=n.length-1;for(;t<i;){const r=t+i+1>>1;n[r]<=e?t=r:i=r-1}return t}const tp=28;function zS(n,e){if(typeof e=="function")return e(n);const t=n.filter(r=>r!=null&&r!=="");if(e==="count")return t.length;const i=t.map(r=>Number(r)).filter(r=>!Number.isNaN(r));if(i.length===0)return null;switch(e){case"sum":return i.reduce((r,s)=>r+s,0);case"avg":return i.reduce((r,s)=>r+s,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Kf(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=Li[e.theme]??Li.none,{cols:o,rows:a,pinnedRows:l,rowHeight:c,scrollY:u,scrollX:f,glow:d}=e;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const g=l.length*c,v=e.aggregateRow?tp:0,_=r-It-g-v;t.fillStyle=s.headerBg,t.fillRect(0,0,i,It),t.textBaseline="middle",t.textAlign="left";let p=-f;for(let ce=0;ce<o.length;ce++){const q=o[ce];if(p+q.width<=0){p+=q.width;continue}if(p>=i)break;const re=!!e.colFilters[q.colId],xe=e.sortColId===q.colId,Ie=(q.colDef.headerName??q.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(p,0,q.width,It),t.clip(),t.font=`bold ${BS}px system-ui, -apple-system, sans-serif`,t.fillStyle=re?s.accent:s.textHeader,d?(t.shadowColor=s.textHeader,t.shadowBlur=10,t.fillText(Ie,p+8,It/2),t.shadowBlur=4,t.fillText(Ie,p+8,It/2),t.shadowBlur=0):t.fillText(Ie,p+8,It/2),xe){const j=t.measureText(Ie).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=s.accent,t.fillText(e.sortDir==="asc"?"▲":"▼",p+8+j+4,It/2)}q.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=re?s.accent:s.textHeader,t.globalAlpha=re?1:.38,t.fillText("⌕",p+q.width-20,It/2),t.globalAlpha=1),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(p+q.width-.5,0),t.lineTo(p+q.width-.5,It),t.stroke(),p+=q.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,It-.5),t.lineTo(i,It-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,It,i,_),t.clip();const h=e.rowHeights&&e.rowHeights.length===a.length?e.rowHeights:null,T=h?Zc(h,a.length):null,w=ce=>T?T[ce]:ce*c,S=ce=>h?h[ce]:c,L=T?na(T,u):Math.max(0,Math.floor(u/c));let R;if(T)for(R=L;R<a.length&&w(R)<u+_;)R++;else R=Math.min(a.length,Math.ceil((u+_)/c));const P=e.selectionAnchorRow??e.selectedRow,F=e.selectionAnchorCol??e.selectedCol,E=e.selectedRow>=0&&P>=0?Math.min(e.selectedRow,P):-1,y=e.selectedRow>=0&&P>=0?Math.max(e.selectedRow,P):-1,N=e.selectedCol>=0&&F>=0?Math.min(e.selectedCol,F):-1,B=e.selectedCol>=0&&F>=0?Math.max(e.selectedCol,F):-1,O=y>E||B>N;let $=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;const W=(ce,q,re,xe)=>{d?(t.shadowColor=xe,t.shadowBlur=12,t.fillText(ce,q,re),t.shadowBlur=6,t.fillText(ce,q,re),t.shadowBlur=2,t.fillText(ce,q,re),t.shadowBlur=0):t.fillText(ce,q,re)};for(let ce=L;ce<R;ce++){const q=a[ce],re=S(ce),xe=It+w(ce)-u;ce%2===1&&(t.fillStyle=s.rowAlt,t.fillRect(0,xe,i,re));const Ie=ce>=E&&ce<=y;ce===e.hoveredRow&&!Ie&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,xe,i,re)),Ie&&!O&&(t.fillStyle=ml(s.accent,.1),t.fillRect(0,xe,i,re)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,xe+re-.5),t.lineTo(i,xe+re-.5),t.stroke();let j=-f;for(let pe=0;pe<o.length;pe++){const ye=o[pe];if(j+ye.width<=0){j+=ye.width;continue}if(j>=i)break;const Ae=Ie&&pe>=N&&pe<=B;Ae&&O&&(t.fillStyle=ml(s.accent,.14),t.fillRect(j,xe,ye.width,re)),Ae&&(j<$&&($=j),j+ye.width>K&&(K=j+ye.width),xe<Z&&(Z=xe),xe+re>J&&(J=xe+re));const Le=e.getCellStyle(ye,q),ke=Le.color??s.text,He=Le.textAlign??"left",We=e.formatCell(ye,q);if(t.save(),t.beginPath(),t.rect(j+1,xe,ye.width-2,re),t.clip(),t.font=ta(),t.fillStyle=ke,t.textBaseline="middle",ye.colDef.wrap){t.textAlign="left";const b=ep(t,We,Math.max(20,ye.width-16));let U=xe+Qh+Wo/2;for(const A of b){if(U-Wo/2>=xe+re)break;W(A,j+8,U,ke),U+=Wo}}else{const b=He==="right"?j+ye.width-8:j+8;t.textAlign=He==="right"?"right":"left",W(We,b,xe+re/2,ke)}t.restore(),ce===e.selectedRow&&pe===e.selectedCol&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect(j+1.5,xe+1.5,ye.width-3,re-3)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(j+ye.width-.5,xe),t.lineTo(j+ye.width-.5,xe+re),t.stroke(),j+=ye.width}}if(O&&$<K&&Z<J&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect($+.5,Z+.5,K-$-1,J-Z-1)),t.restore(),l.length>0){const ce=r-g-v;t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,ce-.5),t.lineTo(i,ce-.5),t.stroke();for(let q=0;q<l.length;q++){const re=l[q],xe=ce+q*c;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,xe,i,c);let Ie=-f;for(let j=0;j<o.length;j++){const pe=o[j];if(Ie+pe.width<=0){Ie+=pe.width;continue}if(Ie>=i)break;const ye=e.getCellStyle(pe,re),Ae=ye.color??s.text,Le=ye.textAlign??"left",ke=e.formatCell(pe,re);t.save(),t.beginPath(),t.rect(Ie+1,xe,pe.width-2,c),t.clip(),t.font=`bold ${Ec}px system-ui, -apple-system, sans-serif`,t.fillStyle=Ae,t.textBaseline="middle",Le==="right"?(t.textAlign="right",t.fillText(ke,Ie+pe.width-8,xe+c/2)):(t.textAlign="left",t.fillText(ke,Ie+8,xe+c/2)),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(Ie+pe.width-.5,xe),t.lineTo(Ie+pe.width-.5,xe+c),t.stroke(),Ie+=pe.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,xe+c-.5),t.lineTo(i,xe+c-.5),t.stroke()}}if(e.aggregateRow){const ce=r-v;t.fillStyle=ml(s.accent,.1),t.fillRect(0,ce,i,v),t.strokeStyle=s.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,ce-.5),t.lineTo(i,ce-.5),t.stroke();let q=-f;for(let re=0;re<o.length;re++){const xe=o[re];if(q+xe.width<=0){q+=xe.width;continue}if(q>=i)break;const j=e.getCellStyle(xe,e.aggregateRow).textAlign??"left",pe=e.aggregateRow[xe.colId]??"";t.save(),t.beginPath(),t.rect(q+1,ce,xe.width-2,v),t.clip(),t.font=`bold ${Ec}px system-ui, -apple-system, sans-serif`,t.fillStyle=s.accent,t.textBaseline="middle",d&&(t.shadowColor=s.accent,t.shadowBlur=8),j==="right"?(t.textAlign="right",t.fillText(pe,q+xe.width-8,ce+v/2)):(t.textAlign="left",t.fillText(pe,q+8,ce+v/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=s.border,t.lineWidth=1,t.beginPath(),t.moveTo(q+xe.width-.5,ce),t.lineTo(q+xe.width-.5,ce+v),t.stroke(),q+=xe.width}}t.restore()}function ml(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${r},${e})`}const Do=190,gl=34;function HS(n,e,t){const i=Math.max(4,Math.min(e,n-Do-4)),r=It+6,s=t?26:0;return{box:{x:i,y:r,w:Do,h:gl},input:{x:i+9,y:r+5,w:Do-18-s,h:gl-10},clear:t?{x:i+Do-28,y:r,w:28,h:gl}:null}}const vl=(n,e,t,i=0)=>n>=t.x-i&&n<=t.x+t.w+i&&e>=t.y&&e<=t.y+t.h;function Lo(n,e,t,i=1){return t.clear&&vl(n,e,t.clear,4*(i-1))?"clear":vl(n,e,t.input)?"input":vl(n,e,t.box)?"inside":"outside"}function VS(n,e,t,i,r){const{box:s,input:o,clear:a}=e;n.save(),n.fillStyle="rgba(8,12,22,0.94)",n.strokeStyle=r.accent,n.lineWidth=1,n.beginPath(),n.roundRect(s.x+.5,s.y+.5,s.w-1,s.h-1,4),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.05)",n.beginPath(),n.roundRect(o.x,o.y,o.w,o.h,3),n.fill(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.font=ta(),n.textBaseline="middle";const l=o.y+o.h/2+1,c=5;if(t){n.fillStyle=r.text;const u=n.measureText(t).width,f=u>o.w-2*c-2?o.x+o.w-c-2-u:o.x+c;n.fillText(t,f,l),i&&(n.fillStyle=r.accent,n.fillRect(Math.min(f+u+1,o.x+o.w-c),o.y+4,1.5,o.h-8))}else n.fillStyle=r.textHeader,n.fillText("Filter…",o.x+c,l),i&&(n.fillStyle=r.accent,n.fillRect(o.x+c,o.y+4,1.5,o.h-8));n.restore(),a&&(n.save(),n.font=ta(),n.textBaseline="middle",n.textAlign="center",n.fillStyle=r.textHeader,n.fillText("✕",a.x+a.w/2,a.y+a.h/2+1),n.restore())}function GS(n,e,t){const i=n-.5,r=e-.5,s=Math.abs(t),o=(i*i+r*r)*s;if(t<0){const c=.5*s,f=1/(1-2*(.5*(1+c)*c)),d=(i+i*(1+o)*o*-1)*f,g=(r+r*(1+o)*o*-1)*f;return[.5+d,.5+g]}const a=i*(1+o)*o,l=r*(1+o)*o;return[n+a,e+l*.15]}function WS(n,e,t,i,r,s=t,o=i){const a=n/t,l=1-e/i,[c,u]=GS(a,l,r);return c<0||c>1||u<0||u>1?[-1,-1]:[c*s,(1-u)*o]}function _l(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function XS(n,e,t,i=1){return n>=e+t-24*i&&n<e+t}function jf(n,e,t,i=1){const r=e+t;return n>=r-6*i&&n<=r+1*i}function Zf(n,e,t,i,r,s,o,a,l,c=!1,u){const f=n+l;let d=-1,g=0;for(let T=0;T<t.length;T++){if(f>=g&&f<g+t[T].width){d=T;break}g+=t[T].width}if(e<It)return{area:"header",colIdx:d,rowIdx:-1};const v=c?tp:0;if(v>0&&e>=o-v)return{area:"agg",colIdx:d,rowIdx:-1};const _=a*r;if(_>0&&e>=o-_-v){const T=Math.floor((e-(o-_-v))/r);return{area:"pinned",colIdx:d,rowIdx:T}}const p=e-It+s,h=u&&u.length===i?na(Zc(u,i),p):Math.floor(p/r);return h>=0&&h<i?{area:"body",colIdx:d,rowIdx:h}:{area:"none",colIdx:-1,rowIdx:-1}}function os(n){return n/45*.55}function YS(n){const e=Math.abs(os(n));if(e===0)return 1;if(n<0){const i=.5*e;return 1/(1-2*(.5*(1+i)*i))}const t=.25*e;return 1+2*(.5*(1+t)*t)}const $S=500,qS=$S/2,KS=1.6,Jc=`
  uniform vec2  uMouseUV;    // mouse position in UV space; (-999,-999) = lens off
  uniform float uLensR;      // lens radius in aspect-corrected units (0 = disabled)
  uniform float uLensZoom;   // lens magnification factor (~1.6)
  uniform vec3  uLensTint;   // ring tint (phosphor accent)
  uniform float uAspect;     // canvas W / H — needed to draw a circular lens
`,Qc=`
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
`,eu=`
    // Lens ring — visually masks the magnification seam at the rim.
    if (uLensR > 0.0) {
      vec2  rd       = (vUv - uMouseUV) * vec2(uAspect, 1.0);
      float ringDist = abs(length(rd) - uLensR);
      float ring     = 1.0 - smoothstep(0.002, 0.012, ringDist);
      color.rgb     += uLensTint * ring * 0.32;
    }
`;function tu(){return{uMouseUV:{value:new mt(-999,-999)},uLensR:{value:0},uLensZoom:{value:KS},uLensTint:{value:new dt(7268263)},uAspect:{value:1}}}const Kt={x:-999,y:-999};function nu(n,e,t,i,r){const s=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=s&&r>0?qS/r:0,n.uniforms.uAspect.value=r>0?i/r:1}function iu(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const jS=["value"],ZS=["disabled"],JS=["disabled"],QS=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,ey=28,ty=600,ny=Wi({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},bendField:{type:Boolean,default:!0}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,r=Ue(t.rowData??[]),s=Ue(t.pinnedBottomRowData??[]),o=Ue(""),a=Ue(null),l=Xr({}),c=Xr({}),u=Xr(new Set),f=Ue(0),d=Ue(0),g=Ue(0),v=Ue(0),_=Ue(0),p=Ue(0),h=Ue(0),T=Ue(-1),w=Ue(null),S=Ue(null),L=Ue(null),R={...Kt},P=Ue(""),F=Ue(0),E=Ue(null);let y=null;const N=Ue(!0);let B=null;$e(L,D=>{var z;B&&(clearInterval(B),B=null),D?(N.value=!0,B=setInterval(()=>{N.value=!N.value,Ke()},530),un(()=>{var oe;return(oe=E.value)==null?void 0:oe.focus()})):(y=null,(z=E.value)==null||z.blur()),Ke()});function O(D){return D.colId??D.field??(D.headerName?D.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const $=rt(()=>{const D=t.defaultColDef??{};return t.columnDefs.filter(z=>!u.has(O(z))).map(z=>{const oe=O(z),Ee={...D,...z};return{colId:oe,colDef:Ee,width:c[oe]??Ee.width??100}})}),K=rt(()=>{const D=d.value;if(!D)return $.value;const z=$.value.reduce((Te,be)=>Te+be.width,0);if(!z||z>=D)return $.value;const oe=D/z;let Ee=0;return $.value.map((Te,be)=>{const st=be===$.value.length-1?D-Ee:Math.max(8,Math.round(Te.width*oe));return Ee+=st,{...Te,width:st}})}),Z=rt(()=>{const D=K.value.reduce((z,oe)=>z+oe.width,0);return Math.max(0,D-d.value)});let J=null;function W(){if(typeof document>"u")return null;J||(J=document.createElement("canvas"));const D=J.getContext("2d");return D&&(D.font=ta()),D}const ce=rt(()=>K.value.some(D=>D.colDef.wrap)),q=rt(()=>{if(!ce.value)return null;const D=W();if(!D)return null;const z=K.value.filter(Ee=>Ee.colDef.wrap),oe=t.rowHeight;return We.value.map(Ee=>{let Te=1;for(const be of z){const ve=ep(D,ke(be,Ee),Math.max(20,be.width-16));ve.length>Te&&(Te=ve.length)}return kS(Te,oe)})}),re=rt(()=>q.value?Zc(q.value,We.value.length):null),xe=rt(()=>re.value?re.value[We.value.length]:We.value.length*t.rowHeight),Ie=rt(()=>{const D=s.value.length*t.rowHeight;return Math.max(0,g.value-It-D)}),j=rt(()=>Math.max(0,xe.value-Ie.value)),pe=rt(()=>Math.max(1,Math.floor(Ie.value/t.rowHeight))),ye=rt(()=>{const D=We.value.length;if(D===0)return 0;const z=re.value?na(re.value,p.value):Math.floor(p.value/t.rowHeight);return Math.min(D-1,z)}),Ae=rt(()=>{const D=We.value.length;return D===0?0:re.value?Math.min(D-1,na(re.value,p.value+Ie.value-1)):Math.min(D-1,ye.value+pe.value-1)});function Le(D,z){if(z.colDef.valueGetter)return z.colDef.valueGetter({data:D,colDef:z.colDef});if(z.colDef.field)return D[z.colDef.field]}function ke(D,z){const oe=Le(z,D);return D.colDef.valueFormatter?D.colDef.valueFormatter({value:oe,data:z,colDef:D.colDef})??"":D.colDef.cellRenderer?(D.colDef.cellRenderer({value:oe,data:z,colDef:D.colDef})??"").replace(/<[^>]+>/g,""):oe==null?"":String(oe)}function He(D,z){return D.colDef.cellStyle?typeof D.colDef.cellStyle=="function"?D.colDef.cellStyle({value:Le(z,D),data:z,colDef:D.colDef})??{}:D.colDef.cellStyle:{}}const We=rt(()=>{f.value;let D=r.value;const z=o.value.trim().toLowerCase();z&&(D=D.filter(oe=>$.value.some(Ee=>String(Le(oe,Ee)??"").toLowerCase().includes(z))));for(const[oe,Ee]of Object.entries(l)){if(!Ee)continue;const Te=$.value.find(be=>be.colId===oe);if(Te)if(Ee.startsWith("__eq__")){const be=Ee.slice(6).toLowerCase();D=D.filter(ve=>String(Le(ve,Te)??"").toLowerCase()===be)}else{const be=Ee.toLowerCase();D=D.filter(ve=>String(Le(ve,Te)??"").toLowerCase().includes(be))}}if(a.value){const{colId:oe,dir:Ee}=a.value,Te=$.value.find(be=>be.colId===oe);Te&&(D=[...D].sort((be,ve)=>{const st=Le(be,Te),ze=Le(ve,Te);let ot=0;return Te.colDef.comparator?ot=Te.colDef.comparator(st,ze):typeof st=="number"&&typeof ze=="number"?ot=st-ze:ot=String(st??"").localeCompare(String(ze??""),void 0,{numeric:!0}),Ee==="asc"?ot:-ot}))}return D}),b=rt(()=>{const D=$.value.filter(Te=>Te.colDef.aggFunc!=null);if(D.length===0)return null;const z=We.value,oe={};for(const Te of D){const be=z.map(st=>Le(st,Te)),ve=zS(be,Te.colDef.aggFunc);if(ve==null){oe[Te.colId]="";continue}oe[Te.colId]=Te.colDef.aggValueFormatter?Te.colDef.aggValueFormatter(ve):String(ve)}const Ee=D[0].colId;return oe[Ee]===""&&(oe[Ee]="Σ"),oe});$e(We,()=>{p.value=0,w.value=null}),$e(Z,()=>{h.value=Math.min(h.value,Z.value)}),$e(j,()=>{p.value=Math.min(p.value,j.value)});function U(D){const z=re.value,oe=z?z[D]:D*t.rowHeight,Ee=z?z[D+1]:oe+t.rowHeight;oe<p.value?p.value=oe:Ee>p.value+Ie.value&&(p.value=Math.min(j.value,Ee-Ie.value))}function A(){p.value=Math.max(0,p.value-Ie.value),Ke()}function fe(){p.value=Math.min(j.value,p.value+Ie.value),Ke()}let Q=!1,te="",ue=0,Me=0,ie=1,x=!1,m=!1,M=0,I=0,k=0,G=0,de=!1;function ae(D,z,oe=1){var Ee;Q=!0,te=D,ue=z,ie=oe,Me=((Ee=K.value.find(Te=>Te.colId===D))==null?void 0:Ee.width)??100,x=!1}function _e(D){if(m){const be=M-D.clientX,ve=I-D.clientY;(Math.abs(be)>4||Math.abs(ve)>4)&&(de=!0),h.value=Math.max(0,Math.min(Z.value,k+be)),p.value=Math.max(0,Math.min(j.value,G+ve)),Ke();return}if(!Q)return;const z=d.value,oe=Math.max(30,Me+(D.clientX-ue)*ie),Ee=$.value.filter(be=>be.colId!==te).reduce((be,ve)=>be+ve.width,0),Te=z-oe;Te>10&&(c[te]=Math.max(10,Math.round(oe*Ee/Te))),Ke()}function Be(){m&&(de&&(x=!0),m=!1),Q&&(Q=!1,x=!0,i("column-resized"))}function Se(D){if(D.touches.length!==1)return;const z=D.touches[0];m=!0,de=!1,M=z.clientX,I=z.clientY,k=h.value,G=p.value}function H(D){if(!m||D.touches.length!==1)return;D.preventDefault();const z=D.touches[0],oe=M-z.clientX,Ee=I-z.clientY;(Math.abs(oe)>4||Math.abs(Ee)>4)&&(de=!0),h.value=Math.max(0,Math.min(Z.value,k+oe)),p.value=Math.max(0,Math.min(j.value,G+Ee)),Ke()}function me(){m&&(de&&(x=!0),m=!1)}const Ce=Ue(null),he=Ue(null),Xe=Fi("cathodeResetTick",Ue(0));$e(Xe,()=>Y());let Ne=null,je=!1;function V(){if(Ne){try{Ne.forceContextLoss()}catch{}try{Ne.dispose()}catch{}Ne=null}}let De,se,ge,Pe,we;const Je=`
  uniform sampler2D uTex;
  uniform float     uStrength;   // barrel strength 0..~0.55
  uniform float     uScanlines;  // 1.0 = on
  uniform float     uVignette;   // 1.0 = on  (off for paper theme)
  uniform vec3      uBezel;      // bezel / outside-screen colour
  ${Jc}

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

  ${Qc}

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
      float vign = 1.0 - dot(vc, vc) * 0.6;   // softened falloff — see CathodeLog for rationale
      color.rgb  *= clamp(vign, 0.0, 1.0);
    }

    ${eu}

    gl_FragColor = color;
  }
`;function ut(){if(!(!he.value||!Ce.value)){we=document.createElement("canvas");try{Ne=new Ea({canvas:he.value,antialias:!1,alpha:!0})}catch{je=!0}if(!je&&!Ne.getContext()&&(Ne.dispose(),Ne=null,je=!0),je){xt();return}Ne.setPixelRatio(1),Ne.setClearColor(0,0),De=new ba,se=new Js(-1,1,1,-1,0,1),Pe=new Sr(we),Pe.minFilter=_t,Pe.magFilter=_t,ge=new xn({uniforms:{uTex:{value:Pe},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},uBezel:{value:new dt(0)},...tu()},vertexShader:QS,fragmentShader:Je,transparent:!0}),De.add(new dn(new Xi(2,2),ge)),xt()}}function xt(){if(!Ce.value||!Ne&&!je)return;const D=Ce.value.clientWidth,z=Ce.value.clientHeight-(t.pagination?ey:0);if(!D||!z)return;v.value=D,_.value=z;const oe=t.bendField?Math.round(D*YS(t.curvature)):D,Ee=we.width!==oe||we.height!==z;we.width=oe,we.height=z,d.value=oe,g.value=z,h.value=Math.max(0,Math.min(Z.value,h.value)),p.value=Math.max(0,Math.min(j.value,p.value)),Ne?(Ee&&Pe&&(Pe.dispose(),Pe=new Sr(we),Pe.minFilter=_t,Pe.magFilter=_t,ge&&(ge.uniforms.uTex.value=Pe)),Ne.setPixelRatio(window.devicePixelRatio||1),Ne.setSize(D,z)):he.value&&(he.value.width=D,he.value.height=z,he.value.style.width=D+"px",he.value.style.height=z+"px"),Ke()}function Ke(){var oe,Ee,Te,be,ve,st,ze,ot,Dt,wt,Sn,lt;if(!(we!=null&&we.width))return;if(je){if(!he.value)return;Kf(we,{cols:K.value,rows:We.value,pinnedRows:s.value,rowHeight:t.rowHeight,rowHeights:q.value??void 0,scrollY:p.value,scrollX:h.value,theme:t.theme,glow:!1,sortColId:((oe=a.value)==null?void 0:oe.colId)??null,sortDir:((Ee=a.value)==null?void 0:Ee.dir)??null,colFilters:l,hoveredRow:T.value,selectedRow:((Te=w.value)==null?void 0:Te.row)??-1,selectedCol:((be=w.value)==null?void 0:be.col)??-1,selectionAnchorRow:((ve=S.value)==null?void 0:ve.row)??-1,selectionAnchorCol:((st=S.value)==null?void 0:st.col)??-1,formatCell:ke,getCellStyle:He}),Zt();const Ot=he.value.getContext("2d");Ot&&Ot.drawImage(we,0,0,we.width,we.height,0,0,he.value.width,he.value.height);return}if(!Ne||!ge||!Pe)return;const D=Li[t.theme]??Li.none,z=t.theme==="paper";ge.uniforms.uStrength.value=os(t.curvature),ge.uniforms.uScanlines.value=t.scanlines&&!z?1:0,ge.uniforms.uVignette.value=z?0:1,ge.uniforms.uBezel.value.set(D.bg),nu(ge,t.magnify,R,v.value||we.width,_.value||we.height),Kf(we,{cols:K.value,rows:We.value,pinnedRows:s.value,rowHeight:t.rowHeight,rowHeights:q.value??void 0,scrollY:p.value,scrollX:h.value,theme:t.theme,glow:t.glow,sortColId:((ze=a.value)==null?void 0:ze.colId)??null,sortDir:((ot=a.value)==null?void 0:ot.dir)??null,colFilters:l,hoveredRow:T.value,selectedRow:((Dt=w.value)==null?void 0:Dt.row)??-1,selectedCol:((wt=w.value)==null?void 0:wt.col)??-1,selectionAnchorRow:((Sn=S.value)==null?void 0:Sn.row)??-1,selectionAnchorCol:((lt=S.value)==null?void 0:lt.col)??-1,formatCell:ke,getCellStyle:He,aggregateRow:b.value}),Zt(),Pe.needsUpdate=!0,Ne.render(De,se)}function Zt(){if(!L.value||!(we!=null&&we.width))return;const D=we.getContext("2d");if(!D)return;y=HS(we.width,F.value,!!P.value);const z=Li[t.theme]??Li.none;VS(D,y,P.value,N.value,z)}function sn(D,z){if(!he.value)return[-1,-1];const oe=he.value.getBoundingClientRect(),Ee=D-oe.left,Te=z-oe.top,be=oe.width,ve=oe.height,st=os(t.curvature),[ze,ot]=WS(Ee,Te,be,ve,st,we.width||be,we.height||ve);return ze<0?[-1,-1]:[ze,ot]}function $i(D){return sn(D.clientX,D.clientY)}function Bn(D){if(!he.value)return 1;const[z]=sn(D.clientX-4,D.clientY),[oe]=sn(D.clientX+4,D.clientY);return z<0||oe<0?1:Math.max(1,Math.abs(oe-z)/8)}let Mn=0;function ds(D){L.value=null;const z=Date.now();if(D.deltaX!==0){Mn=z,h.value=Math.max(0,Math.min(Z.value,h.value+D.deltaX)),Ke();return}if(D.shiftKey&&D.deltaY!==0){Mn=z,h.value=Math.max(0,Math.min(Z.value,h.value+D.deltaY)),Ke();return}z-Mn<ty||(p.value=Math.max(0,Math.min(j.value,p.value+D.deltaY)),Ke())}function Qs(D){if(Q)return;if(t.magnify&&he.value){const Te=iu(D,he.value);R.x=Te.x,R.y=Te.y}const[z,oe]=$i(D);if(z<0){T.value=-1,Ke();return}if(L.value&&y){const Te=Lo(z,oe,y,Bn(D));if(Te!=="outside"){T.value=-1,he.value.style.cursor=Te==="clear"?"pointer":"text",Ke();return}}const Ee=Zf(z,oe,K.value,We.value.length,t.rowHeight,p.value,we.height,s.value.length,h.value,b.value!==null,q.value??void 0);if(T.value=Ee.area==="body"?Ee.rowIdx:-1,Ee.area==="header"&&Ee.colIdx>=0){const Te=K.value[Ee.colIdx],be=_l(Ee.colIdx,K.value),ve=z+h.value;he.value.style.cursor=Te&&jf(ve,be,Te.width,Bn(D))?"col-resize":"pointer"}else Ee.area==="body"?he.value.style.cursor="pointer":he.value.style.cursor="default";Ke()}function eo(){T.value=-1,R.x=Kt.x,R.y=Kt.y,Ke()}function br(D){const[z,oe]=$i(D);if(z<0||L.value&&y&&Lo(z,oe,y,Bn(D))!=="outside")return;if(oe>=It){m=!0,de=!1,M=D.clientX,I=D.clientY,k=h.value,G=p.value;return}const Ee=z+h.value,Te=Bn(D);for(let be=0;be<K.value.length;be++){const ve=K.value[be],st=_l(be,K.value);if(ve.colDef.resizable!==!1&&jf(Ee,st,ve.width,Te)){ae(ve.colId,D.clientX,Te);return}}}function to(D){var Te,be,ve,st;if(x){x=!1;return}if(Q)return;const[z,oe]=$i(D);if(z<0){L.value=null;return}if(L.value&&y){const ze=Lo(z,oe,y,Bn(D));if(ze==="clear"){ro();return}if(ze!=="outside"){(Te=E.value)==null||Te.focus();return}L.value=null}const Ee=Zf(z,oe,K.value,We.value.length,t.rowHeight,p.value,we.height,s.value.length,h.value,b.value!==null,q.value??void 0);if(Ee.area==="header"&&Ee.colIdx>=0){const ze=K.value[Ee.colIdx],ot=_l(Ee.colIdx,K.value),Dt=z+h.value;ze.colDef.filter&&XS(Dt,ot,ze.width,Bn(D))?(D.stopPropagation(),L.value===ze.colId?L.value=null:(L.value=ze.colId,P.value=(be=l[ze.colId])!=null&&be.startsWith("__eq__")?l[ze.colId].slice(6):l[ze.colId]??"",F.value=Math.max(0,ot-h.value))):ze.colDef.sortable!==!1&&(L.value=null,a.value=((ve=a.value)==null?void 0:ve.colId)===ze.colId?a.value.dir==="asc"?{colId:ze.colId,dir:"desc"}:null:{colId:ze.colId,dir:"asc"},i("sort-changed"));return}if(L.value=null,Ee.area==="body"&&Ee.rowIdx>=0&&Ee.colIdx>=0){const ze=Ee.rowIdx;D.shiftKey&&w.value?(S.value||(S.value={...w.value}),w.value={row:ze,col:Ee.colIdx}):(w.value={row:ze,col:Ee.colIdx},S.value={row:ze,col:Ee.colIdx}),(st=he.value)==null||st.focus();const ot=We.value[ze],Dt=K.value[Ee.colIdx];ot&&Dt&&(i("row-clicked",{data:ot,event:D}),i("cell-selected",{data:ot,row:ze,col:Ee.colIdx,colId:Dt.colId}))}}function qi(D){if(L.value){if(D.target===he.value&&y){const[z,oe]=$i(D);if(z>=0&&Lo(z,oe,y,Bn(D))!=="outside")return}L.value=null}}function no(D){var Te;if(!d.value)return;let z=0;for(let be=0;be<D;be++)z+=K.value[be].width;const oe=((Te=K.value[D])==null?void 0:Te.width)??0,Ee=z-h.value;Ee<0?h.value=Math.max(0,z):Ee+oe>d.value&&(h.value=Math.min(Z.value,z+oe-d.value))}function io(D){const oe=K.value.length-1,Ee=We.value.length-1;if(!w.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(D.key)&&(D.preventDefault(),w.value={row:ye.value,col:0},S.value={row:ye.value,col:0});return}let{row:Te,col:be}=w.value;const ve=(st,ze,ot=!1)=>{Te=Math.max(0,Math.min(Ee,st)),be=Math.max(0,Math.min(oe,ze)),w.value={row:Te,col:be},ot||(S.value={row:Te,col:be}),U(Te),no(be)};switch(D.key){case"ArrowDown":D.preventDefault(),ve(Te+1,be,D.shiftKey);break;case"ArrowUp":D.preventDefault(),ve(Te-1,be,D.shiftKey);break;case"ArrowRight":D.preventDefault(),D.shiftKey?ve(Te,be+1,!0):be<oe?ve(Te,be+1):ve(Te+1,0);break;case"ArrowLeft":D.preventDefault(),D.shiftKey?ve(Te,be-1,!0):be>0?ve(Te,be-1):ve(Te-1,oe);break;case"Tab":D.preventDefault(),D.shiftKey?be>0?ve(Te,be-1):ve(Te-1,oe):be<oe?ve(Te,be+1):ve(Te+1,0);break;case"Enter":D.preventDefault(),D.shiftKey?ve(Te-1,be):ve(Te+1,be);break;case"Home":D.preventDefault(),D.ctrlKey||D.metaKey?ve(0,0,D.shiftKey):ve(Te,0,D.shiftKey);break;case"End":D.preventDefault(),D.ctrlKey||D.metaKey?ve(Ee,oe,D.shiftKey):ve(Te,oe,D.shiftKey);break;case"PageDown":D.preventDefault(),ve(Math.min(Ee,Te+pe.value),be,D.shiftKey);break;case"PageUp":D.preventDefault(),ve(Math.max(0,Te-pe.value),be,D.shiftKey);break;case"Escape":w.value=null,S.value=null;break;case"c":case"C":(D.ctrlKey||D.metaKey)&&(D.preventDefault(),Ta());break}}function Ta(){var ot;if(!w.value)return;const D=K.value,z=We.value,oe=S.value??w.value,Ee=Math.min(oe.row,w.value.row),Te=Math.max(oe.row,w.value.row),be=Math.min(oe.col,w.value.col),ve=Math.max(oe.col,w.value.col),st=[];for(let Dt=Ee;Dt<=Te;Dt++){const wt=z[Dt];if(!wt)continue;const Sn=[];for(let lt=be;lt<=ve;lt++){const Ot=D[lt];Ot&&Sn.push(ke(Ot,wt).replace(/[\t\r\n]+/g," "))}st.push(Sn.join("	"))}const ze=st.join(`
`);(ot=navigator.clipboard)==null||ot.writeText(ze).catch(()=>{})}function wa(D){const z=D.target.value;P.value=z,z?l[L.value]=z:delete l[L.value],i("filter-changed")}function ro(){L.value&&delete l[L.value],P.value="",L.value=null,i("filter-changed")}const C={setGridOption(D,z){D==="rowData"?r.value=z:D==="pinnedBottomRowData"?s.value=z:D==="quickFilterText"&&(o.value=z)},getColumnState(){return t.columnDefs.map(D=>{var oe,Ee;const z=O(D);return{colId:z,hide:u.has(z),sort:((oe=a.value)==null?void 0:oe.colId)===z?a.value.dir:null,sortIndex:((Ee=a.value)==null?void 0:Ee.colId)===z?0:null,width:c[z]??D.width}})},applyColumnState({state:D}){for(const z of D)z.hide===!0&&u.add(z.colId),z.hide===!1&&u.delete(z.colId),z.sort&&(a.value={colId:z.colId,dir:z.sort}),z.width&&(c[z.colId]=z.width)},setFilterModel(D){for(const z of Object.keys(l))delete l[z];if(D)for(const[z,oe]of Object.entries(D))(oe==null?void 0:oe.type)==="equals"?l[z]=`__eq__${oe.filter}`:oe!=null&&oe.filter&&(l[z]=oe.filter)},getFilterModel(){const D={};for(const[z,oe]of Object.entries(l))oe&&(D[z]=oe.startsWith("__eq__")?{type:"equals",filter:oe.slice(6)}:{type:"contains",filter:oe});return D},async setColumnFilterModel(D,z){z?z.type==="equals"?l[D]=`__eq__${z.filter}`:l[D]=z.filter??"":delete l[D]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:D="export.csv"}={}){const z=$.value,oe=z.map(ve=>ve.colDef.headerName??ve.colId).join(","),Ee=We.value.map(ve=>z.map(st=>`"${String(ke(st,ve)).replace(/"/g,'""')}"`).join(",")),Te=new Blob([[oe,...Ee].join(`
`)],{type:"text/csv"}),be=URL.createObjectURL(Te);Object.assign(document.createElement("a"),{href:be,download:D}).click(),URL.revokeObjectURL(be)},resize(){xt()},resetColumnState(){u.clear();for(const z of t.columnDefs)z.hide&&u.add(O(z));const D=t.columnDefs.find(z=>z.sort);a.value=D?{colId:O(D),dir:D.sort}:null;for(const z of Object.keys(c))delete c[z];for(const z of Object.keys(l))delete l[z];o.value="",p.value=0,w.value=null,L.value=null}};$e([We,()=>s.value,K,p,T,w],()=>un(Ke)),$e(()=>t.theme,()=>Ke()),$e(()=>[t.curvature,t.bendField],()=>un(xt)),$e(()=>t.scanlines,()=>Ke()),$e(()=>t.glow,()=>Ke()),$e(()=>t.magnify,D=>{D||(R.x=Kt.x,R.y=Kt.y),Ke()}),$e(w,D=>{if(!D)return;const z=We.value[D.row],oe=K.value[D.col];z&&oe&&i("cell-selected",{data:z,row:D.row,col:D.col,colId:oe.colId})});let X=null,ee=null,ne=0;function Y(){cancelAnimationFrame(ne),ne=requestAnimationFrame(xt)}function Re(D){D.preventDefault()}function Oe(){Ne==null||Ne.dispose(),Ne=null,je=!1,ut()}Fn(()=>{for(const D of t.columnDefs)D.hide&&u.add(O(D)),D.sort&&!a.value&&(a.value={colId:O(D),dir:D.sort});r.value=t.rowData??[],s.value=t.pinnedBottomRowData??[],document.addEventListener("click",qi),document.addEventListener("mousemove",_e),document.addEventListener("mouseup",Be),un(()=>{var D;ut(),he.value&&(he.value.addEventListener("webglcontextlost",Re),he.value.addEventListener("webglcontextrestored",Oe)),Ce.value&&(X=new ResizeObserver(()=>xt()),X.observe(Ce.value),ee=new IntersectionObserver(z=>{z.some(oe=>oe.isIntersecting)&&Y()}),ee.observe(Ce.value)),window.addEventListener("resize",Y),(D=window.visualViewport)==null||D.addEventListener("resize",Y),i("grid-ready",{api:C})})}),Kn(()=>{var D,z,oe;document.removeEventListener("click",qi,!0),document.removeEventListener("mousemove",_e),document.removeEventListener("mouseup",Be),(D=he.value)==null||D.removeEventListener("webglcontextlost",Re),(z=he.value)==null||z.removeEventListener("webglcontextrestored",Oe),X==null||X.disconnect(),ee==null||ee.disconnect(),window.removeEventListener("resize",Y),(oe=window.visualViewport)==null||oe.removeEventListener("resize",Y),cancelAnimationFrame(ne),V()});const Ve=rt(()=>Li[t.theme]??Li.none),Ye=rt(()=>({background:Ve.value.headerBg,borderTop:`1px solid ${Ve.value.border}`,color:Ve.value.text})),Ze=rt(()=>({background:Ve.value.bg})),Qe=rt(()=>Ve.value.accent);return(D,z)=>{var oe,Ee;return tt(),Mt("div",{ref_key:"wrapEl",ref:Ce,class:"cathode-wrap",style:An(Ze.value)},[Ge("canvas",{ref_key:"canvasEl",ref:he,class:"cathode-canvas",tabindex:"0",onWheel:dr(ds,["prevent"]),onMousemove:Qs,onMouseleave:eo,onMousedown:br,onClick:to,onKeydown:io,onTouchstartPassive:Se,onTouchmove:H,onTouchend:me,onTouchcancel:me},null,544),L.value?(tt(),Mt("input",{key:0,ref_key:"filterGhostEl",ref:E,class:"cathode-filter-ghost","aria-label":"Filter column",value:P.value,autofocus:"",onInput:wa,onKeydown:[qu(ro,["escape"]),z[0]||(z[0]=qu(Te=>L.value=null,["enter"]))]},null,40,jS)):nn("",!0),n.pagination?(tt(),Mt("div",{key:1,class:"cathode-pagination",style:An(Ye.value)},[Ge("button",{disabled:p.value<=0,onClick:z[1]||(z[1]=Te=>A())},"◀",8,ZS),Ge("span",null,cn((ye.value+1).toLocaleString())+"–"+cn(Math.min(We.value.length,Ae.value+1).toLocaleString())+" / "+cn(We.value.length.toLocaleString()),1),Ge("button",{disabled:p.value>=j.value,onClick:z[2]||(z[2]=Te=>fe())},"▶",8,JS),Ge("span",{class:"cathode-page-info",style:An({color:Qe.value})},cn(We.value.length.toLocaleString())+" rows ",5),w.value?(tt(),Mt("span",{key:0,class:"cathode-sel-readout",style:An({color:Qe.value})},cn(((oe=K.value[w.value.col])==null?void 0:oe.colDef.headerName)??((Ee=K.value[w.value.col])==null?void 0:Ee.colId))+" : "+cn(ke(K.value[w.value.col],We.value[w.value.row])),5)):nn("",!0)],4)):nn("",!0)],4)}}}),Yi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Jf=Yi(ny,[["__scopeId","data-v-4918f754"]]),ia={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function iy(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const ry=12,Nt=18,Is=10,_r=6,ru=`${ry}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function sy(n,e,t){if(t<=0||!e)return[e];const i=[];for(const r of e.split(`
`)){if(!r){i.push("");continue}if(n.measureText(r).width<=t){i.push(r);continue}const s=r.split(/(\s+)/);let o="";for(const a of s){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function np(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),r=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${r}`}return n}function oy(n,e){return Math.ceil(n.measureText(e).width)+12}function ay(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:r,wordWrap:s}=n,o=n.formatTs??np;t.font=ru;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=r&&c.ts!=null?o(c.ts):"",d=s?sy(t,c.text,i):c.text.split(`
`);for(let g=0;g<d.length;g++)a.push({entryIdx:l,text:d[g],level:u,timestamp:g===0?f:"",isFirstFrag:g===0,widthPx:t.measureText(d[g]).width})}return a}function Qf(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=ia[e.theme]??ia.none;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip(),t.font=ru,t.textBaseline="middle";const o=e.visualLines,a=Is-e.scrollX,l=(e.showTimestamps?Is+e.timestampWidth:Is)-e.scrollX,c=Math.max(0,Math.floor((e.scrollY-_r)/Nt)),u=Math.min(o.length,Math.ceil((e.scrollY+r-_r)/Nt)+1);for(let f=c;f<u;f++){const d=o[f],g=_r+f*Nt-e.scrollY+Nt/2;if(d.entryIdx%2===1&&d.isFirstFrag){t.fillStyle=s.rowAlt;let _=1;for(;f+_<u&&o[f+_].entryIdx===d.entryIdx;)_++;t.fillRect(0,g-Nt/2,i,Nt*_)}e.selectionStart>=0&&f>=e.selectionStart&&f<=e.selectionEnd&&(t.fillStyle=s.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,g-Nt/2,i,Nt)),f===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,g-Nt/2,i,Nt)),e.showTimestamps&&d.timestamp&&(t.fillStyle=s.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=s.timestamp),t.fillText(d.timestamp,a,g),t.shadowBlur=0);const v=iy(s,d.level);t.fillStyle=v,t.textAlign="left",e.glow?(t.shadowColor=v,t.shadowBlur=14,t.fillText(d.text,l,g),t.shadowBlur=7,t.fillText(d.text,l,g),t.shadowBlur=3,t.fillText(d.text,l,g),t.shadowBlur=0):t.fillText(d.text,l,g)}t.restore()}function ed(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-_r)/Nt);return i<0||i>=t?-1:i}function ly(n){return _r*2+n*Nt}const cy=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,uy=Wi({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=Ue(null),r=Ue(null),s={...Kt},o=Ue(0),a=Ue(0),l=Ue(0),c=Ue(-1),u=Ue(!0),f=Ue(-1),d=Ue(-1),g=rt(()=>{const H=t.entries??[];return t.maxLines>0&&H.length>t.maxLines?H.slice(H.length-t.maxLines):H}),v=rt(()=>{if(!t.showTimestamps)return"";const H=t.formatTs??np;let me="00:00:00";for(const Ce of g.value){if(Ce.ts==null)continue;const he=H(Ce.ts);he.length>me.length&&(me=he)}return me}),_=Ue(0),p=Ue([]);function h(){if(!$)return;const H=$.getContext("2d");if(!H)return;H.font=ru;const me=t.showTimestamps?oy(H,v.value):0;_.value=me;const Ce=Math.max(1,o.value-Is*2-me);p.value=ay({entries:g.value,ctx:H,textMaxWidth:Ce,showTimestamps:t.showTimestamps,formatTs:t.formatTs,wordWrap:t.wordWrap})}const T=rt(()=>ly(p.value.length)),w=rt(()=>Math.max(0,T.value-a.value)),S=rt(()=>{let H=0;for(const me of p.value)me.widthPx>H&&(H=me.widthPx);return Is*2+_.value+H}),L=rt(()=>Math.max(0,S.value-o.value)),R=Ue(0);$e(w,()=>{u.value?l.value=w.value:l.value=Math.min(l.value,w.value)}),$e(L,()=>{R.value=Math.min(R.value,L.value)}),$e([g,o,()=>t.showTimestamps,()=>t.wordWrap,v],()=>{h(),un(W)},{deep:!1});let P=null,F=!1;function E(){if(P){try{P.forceContextLoss()}catch{}try{P.dispose()}catch{}P=null}}let y,N,B,O,$;const K=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${Jc}

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

  ${Qc}

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
      // Falloff coefficient was 1.5 — corners darkened to ~25% of centre,
      // which crushed text brightness. Dropped to 0.6: corners now hold
      // ~70%+ luminance so text reads bright across the whole screen.
      vec2  vc   = uv - 0.5;
      float vign = 1.0 - dot(vc, vc) * 0.6;
      color.rgb  *= clamp(vign, 0.0, 1.0);
    }

    ${eu}

    gl_FragColor = color;
  }
`;function Z(){if(!(!r.value||!i.value)){$=document.createElement("canvas");try{P=new Ea({canvas:r.value,antialias:!1,alpha:!0})}catch{F=!0}if(!F&&!P.getContext()&&(P.dispose(),P=null,F=!0),F){J();return}P.setPixelRatio(1),P.setClearColor(0,0),y=new ba,N=new Js(-1,1,1,-1,0,1),O=new Sr($),O.minFilter=_t,O.magFilter=_t,B=new xn({uniforms:{uTex:{value:O},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...tu()},vertexShader:cy,fragmentShader:K,transparent:!0}),y.add(new dn(new Xi(2,2),B)),J()}}function J(){if(!i.value||!P&&!F)return;const H=i.value.clientWidth,me=i.value.clientHeight;if(!H||!me)return;const Ce=$.width!==H||$.height!==me;Ce&&($.width=H,$.height=me,o.value=H,a.value=me,h(),P?(Ce&&O&&(O.dispose(),O=new Sr($),O.minFilter=_t,O.magFilter=_t,B&&(B.uniforms.uTex.value=O)),P.setPixelRatio(window.devicePixelRatio||1),P.setSize(H,me)):r.value&&(r.value.width=H,r.value.height=me,r.value.style.width=H+"px",r.value.style.height=me+"px"),u.value&&(l.value=Math.max(0,T.value-a.value)),W())}function W(){if(!($!=null&&$.width))return;if(F){if(!r.value)return;Qf($,{visualLines:p.value,scrollY:l.value,scrollX:R.value,theme:t.theme,glow:!1,showTimestamps:t.showTimestamps,timestampWidth:_.value,hoveredLine:c.value,selectionStart:Math.min(f.value,d.value),selectionEnd:Math.max(f.value,d.value)});const me=r.value.getContext("2d");me&&me.drawImage($,0,0);return}if(!P||!B||!O)return;const H=t.theme==="paper";B.uniforms.uStrength.value=os(t.curvature),B.uniforms.uScanlines.value=t.scanlines&&!H?1:0,B.uniforms.uVignette.value=H?0:1,nu(B,t.magnify,s,$.width,$.height),Qf($,{visualLines:p.value,scrollY:l.value,scrollX:R.value,theme:t.theme,glow:t.glow,showTimestamps:t.showTimestamps,timestampWidth:_.value,hoveredLine:c.value,selectionStart:Math.min(f.value,d.value),selectionEnd:Math.max(f.value,d.value)}),O.needsUpdate=!0,P.render(y,N)}$e(()=>t.theme,()=>W()),$e(()=>t.curvature,()=>W()),$e(()=>t.scanlines,()=>W()),$e(()=>t.glow,()=>W()),$e(()=>t.magnify,H=>{H||(s.x=Kt.x,s.y=Kt.y),W()}),$e(l,()=>W()),$e(R,()=>W()),$e(c,()=>W()),$e([f,d],()=>W());function ce(H){if(!r.value)return[-1,-1];const me=r.value.getBoundingClientRect();return[H.clientX-me.left,H.clientY-me.top]}function q(H){l.value=Math.max(0,Math.min(w.value,H)),u.value=l.value>=w.value-4}function re(H){R.value=Math.max(0,Math.min(L.value,H))}function xe(H){H.shiftKey?re(R.value+H.deltaY):Math.abs(H.deltaX)>Math.abs(H.deltaY)?re(R.value+H.deltaX):q(l.value+H.deltaY)}let Ie=!1,j=0,pe=0,ye=0,Ae=0,Le=!1;function ke(H){Ie=!0,Le=!1,j=H.clientX,pe=H.clientY,ye=R.value,Ae=l.value,i.value&&i.value.focus()}function He(H){if(Ie){const me=j-H.clientX,Ce=pe-H.clientY;(Math.abs(me)>4||Math.abs(Ce)>4)&&(Le=!0),re(ye+me),q(Ae+Ce)}}function We(){Ie&&(Ie=!1,Le&&(Le=!1))}function b(H){if(H.touches.length!==1)return;const me=H.touches[0];Ie=!0,Le=!1,j=me.clientX,pe=me.clientY,ye=R.value,Ae=l.value,i.value&&i.value.focus()}function U(H){if(!Ie||H.touches.length!==1)return;H.preventDefault();const me=H.touches[0],Ce=j-me.clientX,he=pe-me.clientY;(Math.abs(Ce)>4||Math.abs(he)>4)&&(Le=!0),re(ye+Ce),q(Ae+he)}function A(){Ie&&(Ie=!1,Le&&(Le=!1))}function fe(H){const[,me]=ce(H);return me<0?-1:ed(me,l.value,p.value.length)}function Q(H){if(Le){Le=!1;return}const me=fe(H);if(me<0){f.value=-1,d.value=-1;return}H.shiftKey&&f.value>=0||(f.value=me),d.value=me}function te(H,me){const Ce=p.value.length;if(Ce===0)return;const he=d.value<0?0:d.value;let Xe=Math.max(0,Math.min(Ce-1,he+H));d.value=Xe,(!me||f.value<0)&&(f.value=Xe),c.value=Xe;const Ne=_r+Xe*Nt,je=Ne+Nt;Ne<l.value?q(Ne):je>l.value+a.value&&q(je-a.value)}function ue(){const H=Math.min(f.value,d.value),me=Math.max(f.value,d.value);if(H<0)return"";const Ce=p.value,he=new Set,Xe=[];for(let Ne=H;Ne<=me&&Ne<Ce.length;Ne++){const je=Ce[Ne];if(he.has(je.entryIdx))continue;he.add(je.entryIdx);let V="";for(let De=0;De<Ce.length;De++)Ce[De].entryIdx===je.entryIdx&&(V+=(V&&!Ce[De].isFirstFrag?" ":"")+Ce[De].text);Xe.push(je.timestamp?`${je.timestamp}  ${V}`:V)}return Xe.join(`
`)}async function Me(){const H=ue();if(H)try{await navigator.clipboard.writeText(H)}catch{const me=document.createElement("textarea");me.value=H,me.style.position="fixed",me.style.opacity="0",document.body.appendChild(me),me.select();try{document.execCommand("copy")}catch{}document.body.removeChild(me)}}function ie(H){if((H.metaKey||H.ctrlKey)&&(H.key==="c"||H.key==="C")){f.value>=0&&(H.preventDefault(),Me());return}if((H.metaKey||H.ctrlKey)&&(H.key==="a"||H.key==="A")){H.preventDefault(),f.value=0,d.value=p.value.length-1;return}switch(H.key){case"ArrowDown":H.preventDefault(),te(1,H.shiftKey);break;case"ArrowUp":H.preventDefault(),te(-1,H.shiftKey);break;case"ArrowRight":H.preventDefault(),re(R.value+Nt*2);break;case"ArrowLeft":H.preventDefault(),re(R.value-Nt*2);break;case"PageDown":H.preventDefault(),q(l.value+a.value);break;case"PageUp":H.preventDefault(),q(l.value-a.value);break;case"Home":H.preventDefault(),q(0),re(0);break;case"End":H.preventDefault(),q(w.value);break;case"Escape":f.value=-1,d.value=-1;break}}function x(H){if(t.magnify&&r.value){const Ce=iu(H,r.value);s.x=Ce.x,s.y=Ce.y,W()}const[,me]=ce(H);if(me<0){c.value=-1;return}c.value=ed(me,l.value,p.value.length)}function m(){c.value=-1,s.x=Kt.x,s.y=Kt.y,W()}e({scrollToBottom(){u.value=!0,l.value=w.value},scrollToLine(H){q(_r+H*Nt)}});let M=null,I=null,k=0;const G=Fi("cathodeResetTick",Ue(0));$e(G,()=>de());function de(){cancelAnimationFrame(k),k=requestAnimationFrame(J)}function ae(H){H.preventDefault()}function _e(){P==null||P.dispose(),P=null,F=!1,Z()}Fn(()=>{document.addEventListener("mousemove",He),document.addEventListener("mouseup",We),un(()=>{var H;Z(),r.value&&(r.value.addEventListener("webglcontextlost",ae),r.value.addEventListener("webglcontextrestored",_e)),i.value&&(M=new ResizeObserver(()=>J()),M.observe(i.value),I=new IntersectionObserver(me=>{me.some(Ce=>Ce.isIntersecting)&&de()}),I.observe(i.value)),window.addEventListener("resize",de),(H=window.visualViewport)==null||H.addEventListener("resize",de),l.value=w.value})}),Kn(()=>{var H,me,Ce;document.removeEventListener("mousemove",He),document.removeEventListener("mouseup",We),(H=r.value)==null||H.removeEventListener("webglcontextlost",ae),(me=r.value)==null||me.removeEventListener("webglcontextrestored",_e),M==null||M.disconnect(),I==null||I.disconnect(),window.removeEventListener("resize",de),(Ce=window.visualViewport)==null||Ce.removeEventListener("resize",de),cancelAnimationFrame(k),E()});const Be=rt(()=>ia[t.theme]??ia.none),Se=rt(()=>({background:Be.value.bg}));return(H,me)=>(tt(),Mt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:An(Se.value),tabindex:"0",onKeydown:ie},[Ge("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-log-canvas",onWheel:dr(xe,["prevent"]),onMousemove:x,onMouseleave:m,onMousedown:ke,onClick:Q,onTouchstartPassive:b,onTouchmove:U,onTouchend:A,onTouchcancel:A},null,544)],36))}}),bc=Yi(uy,[["__scopeId","data-v-d6dc9e79"]]),ra={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},fy=.18,Es=8,su=22,dy=4,On=8,ki=56,ou=42,_i="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",hy="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",xl=4,py=1,my=1;function gy(n,e,t,i=0,r=!1){const s=r?ou:ki,o=Math.max(0,e-On-s),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function vy(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,r=-1/0,s=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>r&&(r=c.high),c.volume>s&&(s=c.volume))}if(!isFinite(i)||!isFinite(r)||i===r){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,s)}}const a=(r-i)*.04;return{min:i-a,max:r+a,maxVol:Math.max(1,s)}}function _y(n,e,t=!1){const i=t?dy:su,r=Math.max(1,n-Es-i-xl),s=Math.max(0,Math.round(r*e)),o=r-s;return{priceY0:Es,priceY1:Es+o,volumeY0:Es+o+xl,volumeY1:Es+o+xl+s}}function Rn(n,e,t,i){const r=e.max-e.min;return r<=0?(t+i)/2:t+(1-(n-e.min)/r)*(i-t)}function Vi(n,e,t){return On+(n-e+.5)*t}function Ni(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function au(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${r}:${s}`}function xy(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),r=t/i;let s;return r<1.5?s=1:r<3?s=2:r<7?s=5:s=10,s*i}function td(n,e){var g,v,_,p,h;const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=ra[e.theme]??ra.none,o=e.colors?{...s,...e.colors}:s,a=!!e.compact;if(t.clearRect(0,0,i,r),t.fillStyle=o.bg,t.fillRect(0,0,i,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const l=gy(e.candles.length,i,e.slotW,e.scrollX,a),c=vy(e.candles,l.firstIdx,l.count),u=_y(r,e.showVolume?e.volumeFraction:0,a),f=Math.max(py,Math.floor(e.slotW*.7)),d=Math.min(e.candles.length,l.firstIdx+l.count);for(let T=l.firstIdx;T<d;T++){const w=e.candles[T];if(!w)continue;const S=Vi(T,l.firstIdx,e.slotW),L=Rn(w.open,c,u.priceY0,u.priceY1),R=Rn(w.close,c,u.priceY0,u.priceY1),P=Rn(w.high,c,u.priceY0,u.priceY1),F=Rn(w.low,c,u.priceY0,u.priceY1),E=w.close>=w.open,y=E?o.wickBull:o.wickBear,N=E?o.candleBull:o.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=N),t.strokeStyle=y,t.lineWidth=my,t.beginPath(),t.moveTo(Math.round(S)+.5,P),t.lineTo(Math.round(S)+.5,F),t.stroke(),t.fillStyle=N;const B=Math.min(L,R),O=Math.max(1,Math.abs(R-L)),$=Math.round(S-f/2),K=Math.round(B),Z=Math.round(O);if(t.fillRect($,K,f,Z),e.glow&&(t.shadowBlur=4,t.fillRect($,K,f,Z)),t.shadowBlur=0,e.showVolume&&c.maxVol>0){const J=Math.round(w.volume/c.maxVol*(u.volumeY1-u.volumeY0));J>0&&(t.fillStyle=E?o.volumeBull:o.volumeBear,t.fillRect(Math.round(S-f/2),u.volumeY1-J,f,J))}}if((g=e.overlays)!=null&&g.length){const T={above:0,below:0},w=e.overlays.filter(L=>L.kind!=="hline"&&!!L.label).length,S=w?14+14*w+12:8;for(const L of e.overlays)L.kind==="hline"?Sy(t,L,i,c,u,o,a,T,S):My(t,L,l,c,u,e.slotW)}(v=e.markers)!=null&&v.length&&Ry(t,o,e.markers,e.candles,l,c,u,e.slotW),Py(t,o,c,u,i,a),a||(Dy(t,o,e.candles,l,e.slotW,r),Ay(t,o,e.candles,i,r)),(_=e.overlays)!=null&&_.length&&Ey(t,o,e.overlays,u),e.hover&&(Ly(t,o,e.candles,l,c,u,e.slotW,e.hover,i),by(t,o,e.candles,l,e.slotW,e.hover,u,((p=e.overlays)==null?void 0:p.length)??0),(h=e.markers)!=null&&h.length&&wy(t,o,e.markers,e.candles,l,c,u,e.slotW,e.hover,i)),t.restore()}function My(n,e,t,i,r,s){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(On,r.priceY0,999999,r.priceY1-r.priceY0),n.clip(),e.kind==="line")Io(n,e.data,t.firstIdx,o,s,i,r,e.color,e.lineWidth??1,e.dashed===!0);else if(e.kind==="band"){const l=ip(e.color,e.fillAlpha??.08);yy(n,e.upper,e.lower,t.firstIdx,o,s,i,r,l),Io(n,e.upper,t.firstIdx,o,s,i,r,e.color,1,!1),Io(n,e.lower,t.firstIdx,o,s,i,r,e.color,1,!1),(a=e.middle)!=null&&a.length&&Io(n,e.middle,t.firstIdx,o,s,i,r,e.color,1,e.middleDashed!==!1)}n.restore()}function Sy(n,e,t,i,r,s,o,a={above:0,below:0},l=8){const c=Rn(e.price,i,r.priceY0,r.priceY1),u=c<r.priceY0-.5,f=c>r.priceY1+.5,d=u||f,g=d?u?a.above++:a.below++:0,v=d?u?r.priceY0+l+g*20:r.priceY1-8-g*20:c,_=o?ou:ki,p=Math.round(v)+.5;n.save(),d||(n.strokeStyle=e.color,n.lineWidth=e.lineWidth??1,n.setLineDash(e.dashed===!1?[]:[4,3]),n.beginPath(),n.moveTo(On,p),n.lineTo(t-_,p),n.stroke(),n.setLineDash([]));let h=e.label??Ni(e.price);if(d&&h!==""&&(h=(u?"↑ ":"↓ ")+h),h!==""){n.font=_i,n.textBaseline="middle",n.textAlign="left";const T=n.measureText(h).width,w=4,S=2,L=On+2;n.fillStyle=e.color,d&&(n.globalAlpha=.85),n.fillRect(L,v-7-S,T+w*2,14+S*2),n.globalAlpha=1,n.fillStyle=s.bg&&!s.bg.startsWith("rgba(0,0,0,0)")?s.bg:"#0d1520",n.fillText(h,L+w,v)}n.restore()}function Io(n,e,t,i,r,s,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const d=e[f];if(typeof d!="number"||!isFinite(d)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const g=Vi(f,t,r),v=Rn(d,s,o.priceY0,o.priceY1);u?n.lineTo(g,v):(n.moveTo(g,v),u=!0)}u&&n.stroke(),n.setLineDash([])}function yy(n,e,t,i,r,s,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=r;f++){const d=e[f],g=t[f],v=f<r&&typeof d=="number"&&typeof g=="number"&&isFinite(d)&&isFinite(g);if(v&&!c&&(u=f,c=!0),!v&&c||f===r&&c){const _=v?f+1:f;n.beginPath();for(let p=u;p<_;p++){const h=Vi(p,i,s),T=Rn(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(h,T):n.lineTo(h,T)}for(let p=_-1;p>=u;p--){const h=Vi(p,i,s),T=Rn(t[p],o,a.priceY0,a.priceY1);n.lineTo(h,T)}n.closePath(),n.fill(),c=!1}}}function ip(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),r=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${i},${r},${s},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function Ey(n,e,t,i){const r=t.filter(_=>_.kind!=="hline"&&!!_.label);if(!r.length)return;n.save(),n.font=_i;const s=8,o=5,a=12,l=6,c=14;let u=0;for(const _ of r){const p=n.measureText(_.label).width;p>u&&(u=p)}const f=s*2+a+l+u,d=o*2+c*r.length,g=On+4,v=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(g,v,f,d),n.textBaseline="middle",n.textAlign="left";for(let _=0;_<r.length;_++){const p=r[_],h=v+o+c*(_+.5),T=g+s;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(T,h),n.lineTo(T+a,h),n.stroke(),n.setLineDash([])):p.kind==="band"&&(n.fillStyle=ip(p.color,p.fillAlpha??.2),n.fillRect(T,h-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(T+.5,h-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,T+a+l,h)}n.restore()}function by(n,e,t,i,r,s,o,a){const l=Math.floor((s.x-On)/r),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,d=u.open!==0?f/u.open*100:0,g=f>=0?"+":"",v=[["O",Ni(u.open),void 0],["H",Ni(u.high),void 0],["L",Ni(u.low),void 0],["C",Ni(u.close),void 0],["V",Ty(u.volume),void 0],["",`${g}${d.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=_i,n.textBaseline="middle",n.textAlign="left";const _=8,p=4,h=14;let T=_;for(const[R,P]of v){const F=R?`${R} ${P}`:P,E=n.measureText(F).width+12;T+=E}T+=_-12;const w=o.priceY0+4+(a>0?p*2+14*a+4:0),S=On+4;n.fillStyle=e.panelBg,n.fillRect(S,w,T,h+p*2);let L=S+_;for(let R=0;R<v.length;R++){const[P,F,E]=v[R];n.fillStyle=e.text,P&&(n.globalAlpha=.6,n.fillText(P+" ",L,w+p+h/2),n.globalAlpha=1,L+=n.measureText(P+" ").width),E&&(n.fillStyle=E),n.fillText(F,L,w+p+h/2),L+=n.measureText(F).width+12}n.restore()}function Ty(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function wy(n,e,t,i,r,s,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),d=Math.min(i.length,r.firstIdx+r.count),g=9;let v=null;for(const F of t){let E=0,y=i.length-1,N=-1;for(;E<=y;){const $=E+y>>1,K=i[$].start-F.timestamp;if(Math.abs(K)<=f){N=$;break}K<0?E=$+1:y=$-1}if(N<0||N<r.firstIdx||N>=d)continue;const B=Vi(N,r.firstIdx,a),O=Rn(F.price,s,o.priceY0,o.priceY1);if(Math.abs(l.x-B)<=g&&Math.abs(l.y-O)<=g){v={m:F,x:B,y:O};break}}if(!v)return;const _=au(v.m.timestamp),p=[`${v.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${_}`,`@ ${Ni(v.m.price)}`];v.m.label&&p.push(v.m.label),n.save(),n.font=_i,n.textBaseline="top",n.textAlign="left";const h=6,T=14;let w=0;for(const F of p){const E=n.measureText(F).width;E>w&&(w=E)}const S=w+h*2,L=p.length*T+h*2;let R=v.x+12;R+S>c-ki&&(R=v.x-12-S);let P=v.y-L/2;P<o.priceY0&&(P=o.priceY0),P+L>o.priceY1&&(P=o.priceY1-L),n.fillStyle=e.panelBgSolid,n.strokeStyle=v.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(R,P,S,L),n.strokeRect(R+.5,P+.5,S-1,L-1);for(let F=0;F<p.length;F++){const E=p[F];n.fillStyle=F===0?v.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(E,R+h,P+h+F*T)}n.restore()}function Ay(n,e,t,i,r){if(t.length<2)return;const s=t[1].start-t[0].start,o=Cy(s);if(!o)return;n.save(),n.font=_i,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-ki-a,f=r-su+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function Cy(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,r=24*i,s=7*r;return n>=s&&n%s===0?n/s+"W":n>=r&&n%r===0?n/r+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function Ry(n,e,t,i,r,s,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,r.firstIdx+r.count),f=g=>{let v=0,_=i.length-1;for(;v<=_;){const p=v+_>>1,h=i[p].start-g;if(Math.abs(h)<=c)return p;h<0?v=p+1:_=p-1}return-1},d=7;for(const g of t){const v=f(g.timestamp);if(v<0||v<r.firstIdx||v>=u)continue;const _=Vi(v,r.firstIdx,a),p=Rn(g.price,s,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const h=g.color??(g.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=h,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),g.kind==="entry"?(n.moveTo(_,p-d),n.lineTo(_-d,p+d-1),n.lineTo(_+d,p+d-1)):(n.moveTo(_,p+d),n.lineTo(_-d,p-d+1),n.lineTo(_+d,p-d+1)),n.closePath(),n.fill(),n.stroke()}}function Py(n,e,t,i,r,s=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=s?Math.max(2,Math.min(4,Math.round(a/36))):6,c=xy(o,l),u=Math.ceil(t.min/c)*c,f=s?ou:ki;n.font=s?hy:_i,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let d=u;d<=t.max;d+=c){const g=Rn(d,t,i.priceY0,i.priceY1);g<i.priceY0||g>i.priceY1||(n.beginPath(),n.moveTo(On,Math.round(g)+.5),n.lineTo(r-f,Math.round(g)+.5),n.stroke(),n.fillText(Ni(d),r-f+3,g))}n.globalAlpha=1}function Dy(n,e,t,i,r,s){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=_i,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=Vi(c,i.firstIdx,r);n.fillText(au(u.start),f,s-su+4)}n.globalAlpha=1}function Ly(n,e,t,i,r,s,o,a,l){const c=Math.floor((a.x-On)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const d=Vi(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(d)+.5,s.priceY0),n.lineTo(Math.round(d)+.5,s.volumeY1||s.priceY1),n.stroke();const g=Math.max(s.priceY0,Math.min(s.priceY1,a.y));n.beginPath(),n.moveTo(On,Math.round(g)+.5),n.lineTo(l-ki,Math.round(g)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const v=r.max-r.min;if(v>0){const h=r.max-(g-s.priceY0)/(s.priceY1-s.priceY0)*v,T=Ni(h);n.font=_i,n.textBaseline="middle",n.textAlign="left";const w=n.measureText(T).width,S=4,L=2;n.fillStyle=e.accent,n.fillRect(l-ki+2,g-7-L,w+S*2,14+L*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(T,l-ki+2+S,g)}n.font=_i,n.textBaseline="top",n.textAlign="center";const _=au(f.start),p=n.measureText(_).width;n.fillStyle=e.accent,n.fillRect(d-p/2-4,s.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(_,d,s.volumeY1+4),n.restore()}const Ml=.25,Sl=6,Iy=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Uy=Wi({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:fy},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=Ue(null),i=Ue(null),r={...Kt},s=Ue(0),o=Ue(0),a=Ue(0),l=Ue(1),c=Ue(null),u=rt(()=>Math.max(1,e.slotW*l.value));let f=null,d=!1;function g(){if(f){try{f.forceContextLoss()}catch{}try{f.dispose()}catch{}f=null}}let v,_,p,h,T;const w=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${Jc}

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

  ${Qc}

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
      float vign = 1.0 - dot(vc, vc) * 0.6;   // softened falloff — see CathodeLog for rationale
      color.rgb  *= clamp(vign, 0.0, 1.0);
    }

    ${eu}

    gl_FragColor = color;
  }
`;function S(){if(!(!i.value||!t.value)){if(T=document.createElement("canvas"),e.flat){d=!0,L();return}try{f=new Ea({canvas:i.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{d=!0}if(!d&&!f.getContext()&&(f.dispose(),f=null,d=!0),d){L();return}f.setPixelRatio(1),f.setClearColor(0,0),v=new ba,_=new Js(-1,1,1,-1,0,1),h=new Sr(T),h.minFilter=_t,h.magFilter=_t,p=new xn({uniforms:{uTex:{value:h},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...tu()},vertexShader:Iy,fragmentShader:w,transparent:!0}),v.add(new dn(new Xi(2,2),p)),L()}}function L(){if(!t.value||!f&&!d)return;const b=t.value.clientWidth,U=t.value.clientHeight;!b||!U||!(T.width!==b||T.height!==U)||(T.width=b,T.height=U,s.value=b,o.value=U,f?(h&&(h.dispose(),h=new Sr(T),h.minFilter=_t,h.magFilter=_t,p&&(p.uniforms.uTex.value=h)),f.setPixelRatio(window.devicePixelRatio||1),f.setSize(b,U)):i.value&&(i.value.width=b,i.value.height=U,i.value.style.width=b+"px",i.value.style.height=U+"px"),R())}function R(){if(!(T!=null&&T.width))return;if(d){if(!i.value)return;td(T,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:!1,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors});const U=i.value.getContext("2d");U&&(U.clearRect(0,0,i.value.width,i.value.height),U.drawImage(T,0,0));return}if(!f||!p||!h)return;const b=e.theme==="paper";p.uniforms.uStrength.value=os(e.curvature),p.uniforms.uScanlines.value=e.scanlines&&!b?1:0,p.uniforms.uVignette.value=b?0:1,nu(p,e.magnify,r,T.width,T.height),td(T,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors}),h.needsUpdate=!0,f.render(v,_)}$e(()=>e.theme,()=>R()),$e(()=>e.curvature,()=>R()),$e(()=>e.scanlines,()=>R()),$e(()=>e.glow,()=>R()),$e(()=>e.showVolume,()=>R()),$e(()=>e.volumeFraction,()=>R()),$e(()=>e.slotW,()=>R()),$e(()=>e.candles,()=>R(),{deep:!1}),$e(()=>e.overlays,()=>R(),{deep:!1}),$e(()=>e.markers,()=>R(),{deep:!1}),$e(()=>e.compact,()=>R()),$e(()=>e.magnify,b=>{b||(r.x=Kt.x,r.y=Kt.y),R()}),$e(()=>e.colors,()=>R(),{deep:!0}),$e(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")}),$e(a,()=>R()),$e(l,()=>R()),$e(c,()=>R()),$e(u,()=>R());let P=null,F=null,E=0;const y=Fi("cathodeResetTick",Ue(0));$e(y,()=>N());function N(){cancelAnimationFrame(E),E=requestAnimationFrame(L)}function B(b){b.preventDefault()}function O(){f==null||f.dispose(),f=null,d=!1,S()}function $(b){if(!i.value)return[-1,-1];const U=i.value.getBoundingClientRect();return[b.clientX-U.left,b.clientY-U.top]}function K(b){var te;const U=u.value;if(U<=0)return 0;const A=((te=e.candles)==null?void 0:te.length)??0,fe=Math.max(1,Math.floor((s.value||1)/U)),Q=Math.max(0,A-fe);return Math.max(0,Math.min(b,Q*U))}function Z(b){var fe;if(b.deltaX!==0||b.shiftKey&&b.deltaY!==0){const Q=b.deltaX!==0?b.deltaX:b.deltaY;a.value=K(a.value+Q);return}if(b.deltaY===0)return;const[U]=$(b),A=u.value;if(U>=0&&A>0&&((fe=e.candles)!=null&&fe.length)){const Q=Math.max(1,Math.floor((s.value||1)/A)),ue=Math.max(0,e.candles.length-Q-Math.floor(a.value/A))+(U-8)/A,Me=Math.exp(-b.deltaY*.0015),ie=Math.max(Ml,Math.min(Sl,l.value*Me));l.value=ie;const x=e.slotW*ie,m=Math.max(1,Math.floor((s.value||1)/x)),M=ue-(U-8)/x,I=Math.max(0,e.candles.length-m-M);a.value=K(I*x)}else{const Q=Math.exp(-b.deltaY*.0015);l.value=Math.max(Ml,Math.min(Sl,l.value*Q))}}let J=!1,W=0,ce=0;function q(b){b.button===0&&(J=!0,W=b.clientX,ce=a.value,c.value=null,t.value&&t.value.focus())}function re(b){const U=Math.exp(b*.18);l.value=Math.max(Ml,Math.min(Sl,l.value*U)),a.value=K(a.value)}function xe(b){const U=u.value,A=b.shiftKey?20:3;switch(b.key){case"ArrowLeft":b.preventDefault(),a.value=K(a.value+U*A);break;case"ArrowRight":b.preventDefault(),a.value=K(a.value-U*A);break;case"ArrowUp":b.preventDefault(),re(1);break;case"ArrowDown":b.preventDefault(),re(-1);break;case"Home":b.preventDefault(),a.value=K(Number.MAX_SAFE_INTEGER);break;case"End":b.preventDefault(),a.value=0;break}}function Ie(b){if(J){const U=b.clientX-W;a.value=K(ce+U);return}}function j(){J=!1}function pe(b){if(b.touches.length!==1)return;const U=b.touches[0];J=!0,W=U.clientX,ce=a.value,c.value=null}function ye(b){if(!J||b.touches.length!==1)return;b.preventDefault();const A=b.touches[0].clientX-W;a.value=K(ce+A)}function Ae(){J=!1}function Le(b){if(e.magnify&&i.value){const fe=iu(b,i.value);r.x=fe.x,r.y=fe.y,R()}if(J)return;const[U,A]=$(b);if(U<0||A<0){c.value=null;return}c.value={x:U,y:A}}function ke(){c.value=null,r.x=Kt.x,r.y=Kt.y,R()}Fn(()=>{document.addEventListener("mousemove",Ie),document.addEventListener("mouseup",j),un(()=>{var b;S(),i.value&&(i.value.addEventListener("webglcontextlost",B),i.value.addEventListener("webglcontextrestored",O)),t.value&&(P=new ResizeObserver(()=>L()),P.observe(t.value),F=new IntersectionObserver(U=>{U.some(A=>A.isIntersecting)&&N()}),F.observe(t.value)),window.addEventListener("resize",N),(b=window.visualViewport)==null||b.addEventListener("resize",N)})}),Kn(()=>{var b,U,A;document.removeEventListener("mousemove",Ie),document.removeEventListener("mouseup",j),(b=i.value)==null||b.removeEventListener("webglcontextlost",B),(U=i.value)==null||U.removeEventListener("webglcontextrestored",O),P==null||P.disconnect(),F==null||F.disconnect(),window.removeEventListener("resize",N),(A=window.visualViewport)==null||A.removeEventListener("resize",N),cancelAnimationFrame(E),g()});const He=rt(()=>ra[e.theme]??ra.none),We=rt(()=>({background:He.value.bg}));return(b,U)=>(tt(),Mt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:An(We.value),tabindex:"0",onKeydown:xe},[Ge("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:dr(Z,["prevent"]),onMousedown:q,onMousemove:Le,onMouseleave:ke,onTouchstartPassive:pe,onTouchmove:ye,onTouchend:Ae,onTouchcancel:Ae},null,544)],36))}}),nd=Yi(Uy,[["__scopeId","data-v-7c334778"]]),Ny=["disabled"],Fy=Wi({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100},magnify:{type:Boolean,default:!1}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=Ue(null),o=Ue(null),a=Ue(""),l=Ue([]),c=Ue(-1);let u="";function f(L){L.trim()&&(l.value.length&&l.value[l.value.length-1]===L||(l.value.push(L),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function d(L){if(!i.disabled){if(L.key==="Enter"){L.preventDefault();const R=a.value;R.trim()&&f(R),c.value=-1,a.value="",r("submit",R);return}if(L.key==="ArrowUp"){if(!l.value.length)return;L.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(L.key==="ArrowDown"){if(c.value===-1)return;L.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const g=Ue(!0);let v=null;function _(){v||(v=setInterval(()=>{g.value=!g.value},530))}function p(){v&&(clearInterval(v),v=null),g.value=!0}const h=rt(()=>{let L;return i.disabled?L=" ":i.busy?L="█":L=g.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${L}`}}),T=rt(()=>[...i.entries,h.value]);function w(){var L;i.disabled||(L=o.value)==null||L.focus()}$e(()=>i.busy,(L,R)=>{R&&!L&&!i.disabled&&un(()=>{var P;return(P=o.value)==null?void 0:P.focus()})});function S(){var L;(L=o.value)==null||L.focus()}return e({focus:S}),Fn(()=>{_(),i.disabled||requestAnimationFrame(()=>{var L;return(L=o.value)==null?void 0:L.focus()})}),Kn(()=>{p()}),(L,R)=>(tt(),Mt("div",{ref_key:"wrapEl",ref:s,class:"cathode-terminal-wrap",onClick:w},[St(bc,{entries:T.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,magnify:n.magnify,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","magnify","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Ut(Ge("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":R[0]||(R[0]=P=>a.value=P),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:d},null,40,Ny),[[xh,a.value]])],512))}}),id=Yi(Fy,[["__scopeId","data-v-a2b39934"]]),lu=Ue(0),Tc=28;let wc=10,sa="cathode.layout",oa=!1;const Ft=Ue({});function Oy(n,e="cathode.layout"){if(!oa){oa=!0,sa=e;try{const t=localStorage.getItem(sa);if(t){Ft.value=JSON.parse(t),rd();return}}catch{}Ft.value={...n},rd()}}function rd(){let n=10;for(const e of Object.values(Ft.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);wc=n}function Er(){localStorage.setItem(sa,JSON.stringify(Ft.value))}function By(n){oa=!1,localStorage.removeItem(sa),Ft.value={...n},Er(),oa=!0,lu.value++}function rp(n){wc++,Ft.value[n]&&(Ft.value[n].zIndex=wc)}function ky(n,e){Ft.value[n].visible=e,Er()}function zy(n,e){Ft.value[n].minimized=e,e&&(Ft.value[n].maximized=!1),Er()}function Hy(n,e){Ft.value[n].maximized=e,e&&(Ft.value[n].minimized=!1,rp(n)),Er()}function Vy(n,e,t){Ft.value[n].x=Math.round(e),Ft.value[n].y=Math.round(t),Er()}function Gy(n,e,t){Ft.value[n].w=Math.round(e),Ft.value[n].h=Math.round(t),Er()}function sp(){return{containers:Ft,TITLEBAR_H:Tc,load:Oy,save:Er,reset:By,bringToFront:rp,setVisible:ky,setMinimized:zy,setMaximized:Hy,updatePos:Vy,updateSize:Gy}}const Wy={class:"ws-toolbar"},Xy={key:0,class:"ws-restore-menu"},Yy={key:0,class:"ws-restore-empty"},$y=["onClick"],qy=Wi({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:r,setVisible:s}=sp(),o=Ue(null);Al("cathodeWorkspace",o),Al("cathodeResetTick",lu),Fn(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:h}=o.value,T=e.initialLayout??{};i(T,e.storageKey??"cathode.layout");const w=Object.keys(t.value)[0];w&&a(w)});function a(p){var T;document.querySelectorAll(".cc").forEach(w=>w.classList.remove("cc-focused"));const h=(T=o.value)==null?void 0:T.querySelector(`#cc-${p}`);h&&h.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||r(e.initialLayout)}function c(p){const h=p.target.closest(".cc");h&&(document.querySelectorAll(".cc").forEach(T=>T.classList.remove("cc-focused")),h.classList.add("cc-focused"))}const u=Ue(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function d(p){s(p,!0),u.value=!1}function g(p){if(!u.value)return;const h=p.target;!h.closest(".ws-restore-menu")&&!h.closest(".ws-btn-restore")&&(u.value=!1)}function v(p){p.key==="Escape"&&(u.value=!1)}Fn(()=>{document.addEventListener("click",g),document.addEventListener("keydown",v)}),Kn(()=>{document.removeEventListener("click",g),document.removeEventListener("keydown",v)});function _(p){var h;return((h=e.containerTitles)==null?void 0:h[p])??p}return(p,h)=>(tt(),Mt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[Rl(p.$slots,"default",{},void 0),Rl(p.$slots,"overlay",{},void 0),Ge("div",Wy,[n.initialLayout?(tt(),Mt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):nn("",!0),h[1]||(h[1]=Ge("div",{class:"ws-sep"},null,-1)),Ge("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:h[0]||(h[0]=T=>u.value=!u.value)}," ⊞ Restore Panel ")]),St(og,{name:"menu"},{default:lr(()=>[u.value?(tt(),Mt("div",Xy,[h[3]||(h[3]=Ge("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?nn("",!0):(tt(),Mt("div",Yy," No closed panels ")),(tt(!0),Mt($t,null,pm(f(),T=>(tt(),Mt("div",{key:T,class:"ws-restore-item",onClick:w=>d(T)},[h[2]||(h[2]=Ge("span",{class:"ws-restore-icon"},"⊞",-1)),Hn(" "+cn(_(T)),1)],8,$y))),128))])):nn("",!0)]),_:1})],544))}}),Ky=Yi(qy,[["__scopeId","data-v-5838d04b"]]),jy=["id"],Zy={class:"cc-title"},Jy={key:0,class:"cc-size-badge"},Qy={class:"cc-controls"},eE=["title"],tE={class:"cc-body"},nE=200,iE=80,sd=60,rE=Wi({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:r,setMinimized:s,setMaximized:o,updatePos:a,updateSize:l}=sp(),c=Fi("cathodeWorkspace",Ue(null)),u=rt(()=>t.value[e.id]),f=rt(()=>{const q=u.value,re=e.curvature??0;if(!q)return{};const xe={"--curvature":Math.abs(re)};return q.maximized?{...xe,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:q.zIndex}:{...xe,left:q.x+"px",top:q.y+"px",width:q.w+"px",height:q.minimized?Tc+"px":q.h+"px",zIndex:q.zIndex,display:q.visible?"flex":"none"}});let d=!1,g=0,v=0;function _(q){var Ie;if(q.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),d=!0;const re=(Ie=c.value)==null?void 0:Ie.querySelector(`#cc-${e.id}`);if(!re)return;const xe=re.getBoundingClientRect();g=q.clientX-xe.left,v=q.clientY-xe.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",h),q.preventDefault()}function p(q){var pe;if(!d||!c.value)return;const re=c.value.getBoundingClientRect(),xe=((pe=u.value)==null?void 0:pe.w)??300;let Ie=q.clientX-re.left-g,j=q.clientY-re.top-v;Ie=Math.max(sd-xe,Math.min(re.width-sd,Ie)),j=Math.max(0,Math.min(re.height-Tc,j)),a(e.id,Ie,j)}function h(){d=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h)}let T=!1,w=0,S=0,L=0,R=0;const P=Ue("");function F(q){u.value.maximized||(i(e.id),T=!0,w=q.clientX,S=q.clientY,L=u.value.w,R=u.value.h,document.addEventListener("mousemove",E),document.addEventListener("mouseup",y),q.preventDefault(),q.stopPropagation())}function E(q){if(!T)return;const re=Math.max(nE,L+(q.clientX-w)),xe=Math.max(iE,R+(q.clientY-S));l(e.id,re,xe),P.value=`${Math.round(re)}×${Math.round(xe)}`}function y(){T=!1,P.value="",document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",y),N.value++}const N=Ue(0);$e(lu,()=>{N.value++}),Kn(()=>{var q;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",y),(q=B.value)==null||q.removeEventListener("scroll",$),K()});const B=Ue(null);function O(q){if(e.canvas)return[];const re=q.children[0];return re?Array.from(re.children):[]}function $(){const q=B.value,re=e.curvature??0;if(!q)return;const xe=O(q);if(!xe.length)return;const Ie=q.clientHeight,j=Ie/2,pe=re*.0038;xe.forEach(ye=>{if(!ye.dataset.origFs){const fe=getComputedStyle(ye);ye.dataset.origFs=fe.fontSize,ye.dataset.origLh=fe.lineHeight}if(re===0){ye.style.fontSize="",ye.style.lineHeight="";return}const Ae=ye.getBoundingClientRect(),Le=q.getBoundingClientRect(),ke=Ae.top-Le.top+Ae.height/2,He=Math.min(1,Math.abs(ke-j)/(Ie/2)),We=1+pe*Math.cos(He*Math.PI/2),b=parseFloat(ye.dataset.origFs),U=ye.dataset.origLh,A=U==="normal"?b*1.4:parseFloat(U);isNaN(b)||(ye.style.fontSize=`${(b*We).toFixed(2)}px`),isNaN(A)||(ye.style.lineHeight=`${(A*We).toFixed(2)}px`)})}function K(){const q=B.value;q&&O(q).forEach(re=>{re.style.fontSize="",re.style.lineHeight="",delete re.dataset.origFs,delete re.dataset.origLh})}$e(()=>e.curvature,q=>{(q??0)===0?K():$()}),Fn(()=>{var q;(q=B.value)==null||q.addEventListener("scroll",$,{passive:!0}),un($)});function Z(){s(e.id,!u.value.minimized),un(()=>{N.value++})}function J(){o(e.id,!u.value.maximized),un(()=>{N.value++})}function W(){r(e.id,!1)}function ce(){i(e.id)}return(q,re)=>u.value&&u.value.visible?(tt(),Mt("div",{key:0,id:`cc-${n.id}`,class:ln(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:An(f.value),onMousedown:ce},[Ge("div",{class:"cc-titlebar",onMousedown:_},[re[0]||(re[0]=Ge("span",{class:"cc-status-dot"},null,-1)),Ge("span",Zy,cn(n.title),1),P.value?(tt(),Mt("span",Jy,cn(P.value),1)):nn("",!0),Ge("div",Qy,[Ge("button",{class:"cc-btn",title:"Minimize",onClick:dr(Z,["stop"])},"─"),Ge("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:dr(J,["stop"])},cn(u.value.maximized?"⤡":"⤢"),9,eE),Ge("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:dr(W,["stop"])},"✕")])],32),Ut(Ge("div",tE,[Ge("div",{ref_key:"bodyEl",ref:B,class:"cc-screen",onScroll:$},[Rl(q.$slots,"default",{resizeKey:N.value},void 0),re[1]||(re[1]=Ge("div",{class:"cc-shine"},null,-1))],544)],512),[[Hr,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(tt(),Mt("div",{key:0,class:"cc-resize",onMousedown:dr(F,["stop"])},null,32)):nn("",!0)],46,jy)):nn("",!0)}}),Uo=Yi(rE,[["__scopeId","data-v-ca0af4ca"]]),sE=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,oE=`
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
`,aE=100,lE=Wi({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=Ue(null),r=Ue(null);let s=null,o=!1;function a(){if(s){try{s.forceContextLoss()}catch{}try{s.dispose()}catch{}s=null}}let l,c,u,f,d,g=null,v=0;function _(R){R-v>=aE&&(T(),v=R),g=requestAnimationFrame(_)}function p(){if(!i.value||!d)return;const R=i.value.clientWidth,P=i.value.clientHeight;R<=0||P<=0||d.width===R&&d.height===P||(d.width=R,d.height=P,s&&s.setSize(R,P,!1),r.value&&(r.value.width=R,r.value.height=P,r.value.style.width=R+"px",r.value.style.height=P+"px"))}function h(){if(!(d!=null&&d.width))return;const R=d.getContext("2d");if(!R)return;const P=d.width,F=d.height,E=t[e.theme]??t.none;R.clearRect(0,0,P,F),R.fillStyle=E.bg,R.fillRect(0,0,P,F);const y=Date.now(),N=(y/500|0)%2===0,B=(y/400|0)%4;R.font=`bold ${Math.max(14,Math.min(P,F)*.06)}px monospace`,R.textAlign="center",R.textBaseline="middle",R.fillStyle=E.text,e.glow&&(R.shadowColor=E.text,R.shadowBlur=14);const O=".".repeat(B).padEnd(3," "),$=`${e.label}${O}`;if(R.fillText($,P/2,F/2),R.shadowBlur=0,N){const K=R.measureText($),Z=R.measureText("M").width,J=parseFloat(R.font),W=P/2+K.width/2+4,ce=F/2-J/2+2;R.fillStyle=E.cursor,e.glow&&(R.shadowColor=E.cursor,R.shadowBlur=12),R.fillRect(W,ce,Z*.7,J*.95),R.shadowBlur=0}}function T(){if(!d)return;if(h(),o){if(!r.value)return;const P=r.value.getContext("2d");P&&P.drawImage(d,0,0);return}if(!s||!u||!f)return;const R=e.theme==="paper";u.uniforms.uStrength.value=os(e.curvature),u.uniforms.uScanlines.value=e.scanlines&&!R?1:0,u.uniforms.uVignette.value=R?0:1,f.needsUpdate=!0,s.render(l,c)}function w(){if(!(!r.value||!i.value)){d=document.createElement("canvas");try{s=new Ea({canvas:r.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!s.getContext()&&(s.dispose(),s=null,o=!0),o){p();return}s.setPixelRatio(1),s.setClearColor(0,0),l=new ba,c=new Js(-1,1,1,-1,0,1),f=new Sr(d),f.minFilter=_t,f.magFilter=_t,u=new xn({uniforms:{uTex:{value:f},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:sE,fragmentShader:oE,transparent:!0}),l.add(new dn(new Xi(2,2),u)),p()}}let S=null;Fn(()=>{w(),T(),g=requestAnimationFrame(_),i.value&&(S=new ResizeObserver(()=>p()),S.observe(i.value))}),Kn(()=>{g!==null&&cancelAnimationFrame(g),S==null||S.disconnect(),a(),f==null||f.dispose(),u==null||u.dispose()}),$e(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>T());const L=rt(()=>({background:(t[e.theme]??t.none).bg}));return(R,P)=>(tt(),Mt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:An(L.value)},[Ge("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-loader-canvas"},null,512)],4))}}),Pi=Yi(lE,[["__scopeId","data-v-d00e5f47"]]),cE={class:"demo-bar"},uE={class:"demo-tabs"},fE={key:0},dE={key:1},hE={key:2},pE={class:"demo-btns"},mE=["value"],gE={class:"tab-content"},vE={class:"tab-content"},_E={class:"tab-content"},xE={class:"tab-content"},ME=720,SE=Wi({__name:"App",setup(n){const e=Ue("workspace"),t=Ue("none"),i=rt(()=>t.value!=="paper"),r=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],s=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(m,M){return+(Math.random()*(M-m)+m).toFixed(4)}function l(m){return m[Math.floor(Math.random()*m.length)]}function c(m){return m.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],d=["NY","London","Tokyo","AH"],g=Array.from({length:240},(m,M)=>{const I=M%s.length,k=s[I],G=o[I],de=l(r),ae=u-Math.floor(Math.random()*30*24*36e5),_e=Math.random()<.15,Be=a(10,3e3),Se=a(-8,22),H=+(Se-.12).toFixed(4),me=+(Be*a(.2,2)).toFixed(2),Ce=_e?null:ae+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(ae)),entry_timestamp:c(new Date(ae)),exit_timestamp:Ce?c(new Date(Ce)):"",product:k,strategy:de,exchange:G,status:_e?"open":"closed",entry_price:Be.toFixed(4),exit_price:_e?"":a(Be*.92,Be*1.25).toFixed(4),pnl_pct:Se.toFixed(4),net_pnl_pct:H.toFixed(4),size_base:a(.001,2).toFixed(6),notional:me.toFixed(2),reason:_e?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(d)}}),v=m=>M=>M.value!==""&&M.value!=null&&!isNaN(Number(M.value))?Number(M.value).toFixed(m):"",_=m=>m.value!==""&&m.value!=null&&!isNaN(Number(m.value))?Number(m.value).toFixed(2)+"%":"—",p={textAlign:"right"};function h(m){var ae,_e;const M=(ae=m.data)==null?void 0:ae.entry_timestamp,I=(_e=m.data)==null?void 0:_e.exit_timestamp;if(!M||!I)return"—";const k=new Date(I).getTime()-new Date(M).getTime();if(k<0)return"—";const G=Math.floor(k/36e5),de=Math.floor(k%36e5/6e4);return G>0?`${G}h ${de}m`:`${de}m`}const T=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:m=>m.data.entry_timestamp||m.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:m=>m.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:h,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:m=>m.data.status??"closed",cellStyle:m=>({color:m.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:m=>`${m} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:v(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:v(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:v(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:v(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:m=>Number(m).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:_,cellStyle:m=>({...p,color:Number(m.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:m=>`${Number(m).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:_,cellStyle:m=>({...p,color:Number(m.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:m=>`${Number(m).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:_,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:v(1),cellStyle:m=>({...p,color:Number(m.value)>65?"#e74c3c":Number(m.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:m=>Number(m).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:m=>(Number(m.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:m=>Number(m).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:m=>`${Number(m).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:m=>`${Number(m).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:m=>`${Number(m).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:m=>Number(m).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],w={resizable:!0,sortable:!0},S=Ue(null),L=Ue(25),R=Ue(!0),P=Ue(!0),F=Ue(!1),E=Ue(!1),y=Ue(typeof window<"u"?window.innerWidth:1200),N=rt(()=>y.value<ME);function B(){y.value=window.innerWidth}Fn(()=>window.addEventListener("resize",B)),Kn(()=>window.removeEventListener("resize",B)),$e(N,m=>{m&&e.value==="workspace"&&(e.value="grid")},{immediate:!0});const O=Ue(!1),$=Ue(""),K=Ue("all"),Z=Ue(0),J=Ue(!0),W=Ue(!1),ce=Ue(!1);$e(e,m=>{m==="grid"&&Z.value++});function q(m){S.value=m.api,m.api.setGridOption("rowData",g),K.value!=="all"&&xe(K.value)}function re(m){var I;const M=m.target.value;$.value=M,(I=S.value)==null||I.setGridOption("quickFilterText",M)}function xe(m){var M,I,k;K.value=m,m==="all"?(M=S.value)==null||M.setFilterModel(null):(I=S.value)==null||I.setFilterModel({status:{type:"equals",filter:m}}),(k=S.value)==null||k.onFilterChanged()}const Ie={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function j(m,M){const k=Math.round(m*.62)-12,G=k+12*2,de=m-G-12,ae=Math.round(M*.62),_e=ae+12*2,Be=M-_e-12;return{trades:{x:12,y:12,w:k,h:ae,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:G,y:12,w:de,h:ae,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:_e,w:k,h:Be,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:G,y:_e,w:de,h:Be,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const pe=j(window.innerWidth,window.innerHeight-88),ye=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const m=[],M=Date.now()-45e5;for(let I=0;I<140;I++){const k=ye[I%ye.length];m.push({ts:M+I*32e3,text:k.text,level:k.level})}return m})();const Ae=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],Le=Ue([]),ke=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],He=Ue([{level:"info",text:"CathodeTerminal demo"},...ke]),We=Ue(!1),b={help:()=>ke,echo:m=>({level:"info",text:m||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:m=>{const M=m.trim();return M?M==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:M==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${M}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:m=>{const M=m.trim()||"localhost",I=[{level:"info",text:`PING ${M}: 56 data bytes`}];for(let k=0;k<4;k++){const G=(12+Math.random()*18).toFixed(1);I.push({level:"success",text:`64 bytes from ${M}: icmp_seq=${k} ttl=64 time=${G} ms`})}return I},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:m=>{const M=m.trim()||"moo",I="─".repeat(Math.max(2,M.length+2));return[{level:"info",text:` ╭${I}╮`},{level:"info",text:` │ ${M} │`},{level:"info",text:` ╰${I}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const m=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:m[Math.floor(Math.random()*m.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function U(m){He.value=[...He.value,{level:"info",text:`→ ${m}`}];const M=m.trim();if(!M)return;if(M==="clear"){He.value=[];return}const I=M.indexOf(" "),k=I===-1?M:M.slice(0,I),G=I===-1?"":M.slice(I+1),de=b[k];let ae;de?ae=de(G):ae={level:"warn",text:`unknown command: ${k} — type 'help' for the demo vocabulary`},We.value=!0,setTimeout(()=>{if(ae!==null){const _e=Array.isArray(ae)?ae:[ae];He.value=[...He.value,..._e]}We.value=!1},180)}function A(m){const M=[];let I=6e4;const k=Date.now()-m*36e5;for(let G=0;G<m;G++){const de=(Math.random()-.495)*I*.012,ae=I,_e=Math.max(1,I+de),Be=Math.max(ae,_e)*(1+Math.random()*.005),Se=Math.min(ae,_e)*(1-Math.random()*.005),H=Math.round(20+Math.random()*80);M.push({start:k+G*36e5,open:ae,close:_e,high:Be,low:Se,volume:H}),I=_e}return M}const fe=Ue(A(300));function Q(m,M){const I=new Array(m.length).fill(NaN);let k=0;for(let G=0;G<m.length;G++)k+=m[G],G>=M&&(k-=m[G-M]),G+1>=M&&(I[G]=k/M);return I}function te(m,M){const I=new Array(m.length).fill(NaN);if(!m.length)return I;const k=2/(M+1);let G=m[0];I[0]=G;for(let de=1;de<m.length;de++)G=m[de]*k+G*(1-k),I[de]=G;for(let de=0;de<Math.min(M-1,m.length);de++)I[de]=NaN;return I}function ue(m,M=20,I=2){const k=Q(m,M),G=new Array(m.length).fill(NaN),de=new Array(m.length).fill(NaN);for(let ae=M-1;ae<m.length;ae++){let _e=0;for(let Se=ae-M+1;Se<=ae;Se++){const H=m[Se]-k[ae];_e+=H*H}const Be=Math.sqrt(_e/M);G[ae]=k[ae]+I*Be,de[ae]=k[ae]-I*Be}return{upper:G,middle:k,lower:de}}const Me=rt(()=>{const m=fe.value.map(I=>I.close),M=ue(m,20,2);return[{kind:"band",upper:M.upper,middle:M.middle,lower:M.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:te(m,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:te(m,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),ie=rt(()=>{const m=fe.value;if(m.length<130)return[];const M=I=>m[I];return[{timestamp:M(m.length-120).start,price:M(m.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:M(m.length-100).start,price:M(m.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:M(m.length-80).start,price:M(m.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:M(m.length-60).start,price:M(m.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:M(m.length-40).start,price:M(m.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:M(m.length-20).start,price:M(m.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const m=fe.value,M=ie.value;if(!m.length||!M.length)return[];const I=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!I)return[];const k=I.width/(window.devicePixelRatio||1),G=I.height/(window.devicePixelRatio||1),de=8,ae=56,_e=8,Be=22,Se=8,H=k-de-ae,me=Math.max(1,Math.floor(H/Se)),Ce=Math.max(0,m.length-me);let he=1/0,Xe=-1/0;for(let se=Ce;se<m.length;se++)m[se].low<he&&(he=m[se].low),m[se].high>Xe&&(Xe=m[se].high);const Ne=(Xe-he)*.04;he-=Ne,Xe+=Ne;const je=_e,V=_e+(G-_e-Be-4)*(1-.18),De=[];for(const se of M){const ge=m[1].start-m[0].start;let Pe=-1;for(let ut=0;ut<m.length;ut++)if(Math.abs(m[ut].start-se.timestamp)<=ge*.5){Pe=ut;break}if(Pe<Ce||Pe>=m.length)continue;const we=de+(Pe-Ce+.5)*Se,Je=je+(1-(se.price-he)/(Xe-he))*(V-je);De.push({x:we,y:Je,kind:se.kind,label:se.label||""})}return De}});function x(){const m=[],M=Date.now()-54e5;for(let I=0;I<320;I++){const k=Ae[I%Ae.length];m.push({ts:M+I*16e3,text:k.text,level:k.level})}Le.value=m}return x(),(m,M)=>(tt(),Mt("div",{class:ln(["demo-shell",{"cathode-light":!i.value,mobile:N.value}])},[Ge("div",cE,[M[27]||(M[27]=Ge("span",{class:"demo-title"},"⬛ CATHODE",-1)),Ge("div",uE,[N.value?nn("",!0):(tt(),Mt("button",{key:0,class:ln(["tab-btn",{active:e.value==="workspace"}]),onClick:M[0]||(M[0]=I=>e.value="workspace")}," Workspace ",2)),Ge("button",{class:ln(["tab-btn",{active:e.value==="grid"}]),onClick:M[1]||(M[1]=I=>e.value="grid")}," Grid ",2),Ge("button",{class:ln(["tab-btn",{active:e.value==="log"}]),onClick:M[2]||(M[2]=I=>e.value="log")}," Log ",2),Ge("button",{class:ln(["tab-btn",{active:e.value==="candle"}]),onClick:M[3]||(M[3]=I=>e.value="candle")}," Candle ",2),Ge("button",{class:ln(["tab-btn",{active:e.value==="terminal"}]),onClick:M[4]||(M[4]=I=>e.value="terminal")}," Terminal ",2)]),M[28]||(M[28]=Ge("label",null,"Theme",-1)),Ut(Ge("select",{"onUpdate:modelValue":M[5]||(M[5]=I=>t.value=I)},[...M[18]||(M[18]=[Ge("option",{value:"none"},"Default (dark)",-1),Ge("option",{value:"phosphor"},"Phosphor Green",-1),Ge("option",{value:"amber"},"Amber",-1),Ge("option",{value:"paper"},"Paper (light)",-1)])],512),[[Ag,t.value]]),Ge("label",null,"Curve "+cn(L.value)+" · "+cn(L.value<0?"concave":L.value>0?"convex":"flat"),1),Ut(Ge("input",{type:"range",min:"-45",max:"45",step:"1","onUpdate:modelValue":M[6]||(M[6]=I=>L.value=I),style:{width:"110px"}},null,512),[[xh,L.value,void 0,{number:!0}]]),Ge("label",null,[Ut(Ge("input",{type:"checkbox","onUpdate:modelValue":M[7]||(M[7]=I=>R.value=I),"data-testid":"cf-bendfield"},null,512),[[Ei,R.value]]),M[19]||(M[19]=Hn(" Field",-1))]),Ge("label",null,[Ut(Ge("input",{type:"checkbox","onUpdate:modelValue":M[8]||(M[8]=I=>P.value=I)},null,512),[[Ei,P.value]]),M[20]||(M[20]=Hn(" Scanlines",-1))]),Ge("label",null,[Ut(Ge("input",{type:"checkbox","onUpdate:modelValue":M[9]||(M[9]=I=>O.value=I)},null,512),[[Ei,O.value]]),M[21]||(M[21]=Hn(" Glow",-1))]),Ge("label",null,[Ut(Ge("input",{type:"checkbox","onUpdate:modelValue":M[10]||(M[10]=I=>F.value=I),"data-testid":"cf-magnify"},null,512),[[Ei,F.value]]),M[22]||(M[22]=Hn(" Magnify ",-1))]),Ge("label",null,[Ut(Ge("input",{type:"checkbox","onUpdate:modelValue":M[11]||(M[11]=I=>E.value=I),"data-testid":"cf-show-loaders"},null,512),[[Ei,E.value]]),M[23]||(M[23]=Hn(" Show loaders ",-1))]),e.value==="candle"?(tt(),Mt("label",fE,[Ut(Ge("input",{type:"checkbox","onUpdate:modelValue":M[12]||(M[12]=I=>J.value=I),"data-testid":"cf-show-indicators"},null,512),[[Ei,J.value]]),M[24]||(M[24]=Hn(" Indicators ",-1))])):nn("",!0),e.value==="candle"?(tt(),Mt("label",dE,[Ut(Ge("input",{type:"checkbox","onUpdate:modelValue":M[13]||(M[13]=I=>W.value=I),"data-testid":"cf-flat"},null,512),[[Ei,W.value]]),M[25]||(M[25]=Hn(" Flat (no GL) ",-1))])):nn("",!0),e.value==="candle"?(tt(),Mt("label",hE,[Ut(Ge("input",{type:"checkbox","onUpdate:modelValue":M[14]||(M[14]=I=>ce.value=I),"data-testid":"cf-compact"},null,512),[[Ei,ce.value]]),M[26]||(M[26]=Hn(" Compact ",-1))])):nn("",!0),M[29]||(M[29]=Ge("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(tt(),Mt($t,{key:3},[Ge("div",pE,[Ge("button",{class:ln({active:K.value==="all"}),onClick:M[15]||(M[15]=I=>xe("all"))},"All",2),Ge("button",{class:ln({active:K.value==="open"}),onClick:M[16]||(M[16]=I=>xe("open"))},"Open",2),Ge("button",{class:ln({active:K.value==="closed"}),onClick:M[17]||(M[17]=I=>xe("closed"))},"Closed",2)]),Ge("input",{class:"demo-filter",placeholder:"Quick filter…",value:$.value,onInput:re},null,40,mE)],64)):nn("",!0)]),Ut(Ge("div",gE,[E.value?(tt(),At(Pi,{key:0,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,"bend-field":R.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(tt(),At(Jf,{key:Z.value,"column-defs":T,"default-col-def":w,"row-height":28,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,magnify:F.value,pagination:!0,"pagination-page-size":50,onGridReady:q},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[Hr,e.value==="grid"]]),Ut(Ge("div",vE,[E.value?(tt(),At(Pi,{key:0,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,"bend-field":R.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(tt(),At(bc,{key:1,entries:Le.value,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,magnify:F.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[Hr,e.value==="log"]]),Ut(Ge("div",_E,[E.value?(tt(),At(Pi,{key:0,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,"bend-field":R.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(tt(),At(nd,{key:`cf-${W.value}`,candles:fe.value,overlays:J.value?Me.value:[],markers:J.value?ie.value:[],theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,flat:W.value,compact:ce.value,magnify:F.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[Hr,e.value==="candle"]]),Ut(Ge("div",xE,[E.value?(tt(),At(Pi,{key:0,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,"bend-field":R.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(tt(),At(id,{key:1,entries:He.value,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,magnify:F.value,busy:We.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:U},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))],512),[[Hr,e.value==="terminal"]]),Ut(St(Ky,{"storage-key":"cathode.demo.layout","initial-layout":Rd(pe),"container-titles":Ie},{default:lr(()=>[St(Uo,{id:"trades",title:"Trades",curvature:L.value,canvas:""},{default:lr(({resizeKey:I})=>[E.value?(tt(),At(Pi,{key:0,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,"bend-field":R.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(tt(),At(Jf,{key:I,"column-defs":T,"default-col-def":w,"row-height":26,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,magnify:F.value,pagination:!0,"pagination-page-size":50,onGridReady:q},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),St(Uo,{id:"chart",title:"Chart",curvature:L.value,canvas:""},{default:lr(({resizeKey:I})=>[E.value?(tt(),At(Pi,{key:0,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,"bend-field":R.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(tt(),At(nd,{key:I,candles:fe.value,overlays:Me.value,markers:ie.value,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,magnify:F.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),St(Uo,{id:"log",title:"Log",curvature:L.value,canvas:""},{default:lr(()=>[E.value?(tt(),At(Pi,{key:0,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,"bend-field":R.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(tt(),At(bc,{key:1,entries:Le.value,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,magnify:F.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),St(Uo,{id:"terminal",title:"Terminal",curvature:L.value,canvas:""},{default:lr(()=>[E.value?(tt(),At(Pi,{key:0,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,"bend-field":R.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(tt(),At(id,{key:1,entries:He.value,theme:t.value,curvature:L.value,scanlines:P.value,glow:O.value,magnify:F.value,busy:We.value,prompt:"→ ",onSubmit:U},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[Hr,e.value==="workspace"]])],2))}}),yE=Yi(SE,[["__scopeId","data-v-49a23c07"]]);Ig(yE).mount("#app");
