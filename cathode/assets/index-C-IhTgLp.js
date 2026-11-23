var Sp=Object.defineProperty;var yp=(n,e,t)=>e in n?Sp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var en=(n,e,t)=>yp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xt={},ts=[],si=()=>{},cd=()=>!1,_a=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xa=n=>n.startsWith("onUpdate:"),Ft=Object.assign,Bc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},bp=Object.prototype.hasOwnProperty,dt=(n,e)=>bp.call(n,e),je=Array.isArray,ns=n=>oo(n)==="[object Map]",Ms=n=>oo(n)==="[object Set]",mu=n=>oo(n)==="[object Date]",nt=n=>typeof n=="function",Pt=n=>typeof n=="string",Wn=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",ud=n=>(ht(n)||nt(n))&&nt(n.then)&&nt(n.catch),fd=Object.prototype.toString,oo=n=>fd.call(n),Ep=n=>oo(n).slice(8,-1),dd=n=>oo(n)==="[object Object]",kc=n=>Pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gs=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Tp=/-\w/g,Hn=Ma(n=>n.replace(Tp,e=>e.slice(1).toUpperCase())),wp=/\B([A-Z])/g,or=Ma(n=>n.replace(wp,"-$1").toLowerCase()),hd=Ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Na=Ma(n=>n?`on${hd(n)}`:""),ii=(n,e)=>!Object.is(n,e),Xo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},pd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Sa=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Ap=n=>{const e=Pt(n)?Number(n):NaN;return isNaN(e)?n:e};let gu;const ya=()=>gu||(gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ln(n){if(je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Pt(i)?Pp(i):Ln(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Pt(n)||ht(n))return n}const Cp=/;(?![^(]*\))/g,Rp=/:([^]+)/,Lp=/\/\*[^]*?\*\//g;function Pp(n){const e={};return n.replace(Lp,"").split(Cp).forEach(t=>{if(t){const i=t.split(Rp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function rn(n){let e="";if(Pt(n))e=n;else if(je(n))for(let t=0;t<n.length;t++){const i=rn(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Dp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ip=Oc(Dp);function md(n){return!!n||n===""}function Up(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ss(n[i],e[i]);return t}function Ss(n,e){if(n===e)return!0;let t=mu(n),i=mu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Wn(n),i=Wn(e),t||i)return n===e;if(t=je(n),i=je(e),t||i)return t&&i?Up(n,e):!1;if(t=ht(n),i=ht(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ss(n[o],e[o]))return!1}}return String(n)===String(e)}function zc(n,e){return n.findIndex(t=>Ss(t,e))}const gd=n=>!!(n&&n.__v_isRef===!0),Sn=n=>Pt(n)?n:n==null?"":je(n)||ht(n)&&(n.toString===fd||!nt(n.toString))?gd(n)?Sn(n.value):JSON.stringify(n,vd,2):String(n),vd=(n,e)=>gd(e)?vd(n,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Fa(i,s)+" =>"]=r,t),{})}:Ms(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Fa(t))}:Wn(e)?Fa(e):ht(e)&&!je(e)&&!dd(e)?String(e):e,Fa=(n,e="")=>{var t;return Wn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class _d{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=mn;try{return mn=this,e()}finally{mn=t}}}on(){++this._on===1&&(this.prevScope=mn,mn=this)}off(){this._on>0&&--this._on===0&&(mn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hc(n){return new _d(n)}function Np(){return mn}let St;const Oa=new WeakSet;class xd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vu(this),yd(this);const e=St,t=Vn;St=this,Vn=!0;try{return this.fn()}finally{bd(this),St=e,Vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wc(e);this.deps=this.depsTail=void 0,vu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pl(this)&&this.run()}get dirty(){return Pl(this)}}let Md=0,Ws,Xs;function Sd(n,e=!1){if(n.flags|=8,e){n.next=Xs,Xs=n;return}n.next=Ws,Ws=n}function Vc(){Md++}function Gc(){if(--Md>0)return;if(Xs){let e=Xs;for(Xs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function yd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Wc(i),Fp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Pl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ed(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ed(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===js)||(n.globalVersion=js,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Pl(n))))return;n.flags|=2;const e=n.dep,t=St,i=Vn;St=n,Vn=!0;try{yd(n);const r=n.fn(n._value);(e.version===0||ii(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{St=t,Vn=i,bd(n),n.flags&=-3}}function Wc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Wc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Fp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Vn=!0;const Td=[];function Li(){Td.push(Vn),Vn=!1}function Pi(){const n=Td.pop();Vn=n===void 0?!0:n}function vu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=St;St=void 0;try{e()}finally{St=t}}}let js=0;class Op{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!St||!Vn||St===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==St)t=this.activeLink=new Op(St,this),St.deps?(t.prevDep=St.depsTail,St.depsTail.nextDep=t,St.depsTail=t):St.deps=St.depsTail=t,wd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=St.depsTail,t.nextDep=void 0,St.depsTail.nextDep=t,St.depsTail=t,St.deps===t&&(St.deps=i)}return t}trigger(e){this.version++,js++,this.notify(e)}notify(e){Vc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Gc()}}}function wd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)wd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Dl=new WeakMap,wr=Symbol(""),Il=Symbol(""),Zs=Symbol("");function jt(n,e,t){if(Vn&&St){let i=Dl.get(n);i||Dl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Xc),r.map=i,r.key=t),r.track()}}function bi(n,e,t,i,r,s){const o=Dl.get(n);if(!o){js++;return}const a=l=>{l&&l.trigger()};if(Vc(),e==="clear")o.forEach(a);else{const l=je(n),u=l&&kc(t);if(l&&t==="length"){const c=Number(i);o.forEach((f,d)=>{(d==="length"||d===Zs||!Wn(d)&&d>=c)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Zs)),e){case"add":l?u&&a(o.get("length")):(a(o.get(wr)),ns(n)&&a(o.get(Il)));break;case"delete":l||(a(o.get(wr)),ns(n)&&a(o.get(Il)));break;case"set":ns(n)&&a(o.get(wr));break}}Gc()}function Br(n){const e=ct(n);return e===n?e:(jt(e,"iterate",Zs),Pn(n)?e:e.map(Xn))}function ba(n){return jt(n=ct(n),"iterate",Zs),n}function ei(n,e){return Di(n)?us(Ar(n)?Xn(e):e):Xn(e)}const Bp={__proto__:null,[Symbol.iterator](){return Ba(this,Symbol.iterator,n=>ei(this,n))},concat(...n){return Br(this).concat(...n.map(e=>je(e)?Br(e):e))},entries(){return Ba(this,"entries",n=>(n[1]=ei(this,n[1]),n))},every(n,e){return di(this,"every",n,e,void 0,arguments)},filter(n,e){return di(this,"filter",n,e,t=>t.map(i=>ei(this,i)),arguments)},find(n,e){return di(this,"find",n,e,t=>ei(this,t),arguments)},findIndex(n,e){return di(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return di(this,"findLast",n,e,t=>ei(this,t),arguments)},findLastIndex(n,e){return di(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return di(this,"forEach",n,e,void 0,arguments)},includes(...n){return ka(this,"includes",n)},indexOf(...n){return ka(this,"indexOf",n)},join(n){return Br(this).join(n)},lastIndexOf(...n){return ka(this,"lastIndexOf",n)},map(n,e){return di(this,"map",n,e,void 0,arguments)},pop(){return Rs(this,"pop")},push(...n){return Rs(this,"push",n)},reduce(n,...e){return _u(this,"reduce",n,e)},reduceRight(n,...e){return _u(this,"reduceRight",n,e)},shift(){return Rs(this,"shift")},some(n,e){return di(this,"some",n,e,void 0,arguments)},splice(...n){return Rs(this,"splice",n)},toReversed(){return Br(this).toReversed()},toSorted(n){return Br(this).toSorted(n)},toSpliced(...n){return Br(this).toSpliced(...n)},unshift(...n){return Rs(this,"unshift",n)},values(){return Ba(this,"values",n=>ei(this,n))}};function Ba(n,e,t){const i=ba(n),r=i[e]();return i!==n&&!Pn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const kp=Array.prototype;function di(n,e,t,i,r,s){const o=ba(n),a=o!==n&&!Pn(n),l=o[e];if(l!==kp[e]){const f=l.apply(n,s);return a?Xn(f):f}let u=t;o!==n&&(a?u=function(f,d){return t.call(this,ei(n,f),d,n)}:t.length>2&&(u=function(f,d){return t.call(this,f,d,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function _u(n,e,t,i){const r=ba(n),s=r!==n&&!Pn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=ei(n,u)),t.call(this,u,ei(n,c),f,n)}):t.length>3&&(o=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](o,...i);return a?ei(n,l):l}function ka(n,e,t){const i=ct(n);jt(i,"iterate",Zs);const r=i[e](...t);return(r===-1||r===!1)&&qc(t[0])?(t[0]=ct(t[0]),i[e](...t)):r}function Rs(n,e,t=[]){Li(),Vc();const i=ct(n)[e].apply(n,t);return Gc(),Pi(),i}const zp=Oc("__proto__,__v_isRef,__isVue"),Ad=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wn));function Hp(n){Wn(n)||(n=String(n));const e=ct(this);return jt(e,"has",n),e.hasOwnProperty(n)}class Cd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Zp:Dd:s?Pd:Ld).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=je(e);if(!r){let l;if(o&&(l=Bp[t]))return l;if(t==="hasOwnProperty")return Hp}const a=Reflect.get(e,t,Qt(e)?e:i);if((Wn(t)?Ad.has(t):zp(t))||(r||jt(e,"get",t),s))return a;if(Qt(a)){const l=o&&kc(t)?a:a.value;return r&&ht(l)?Nl(l):l}return ht(a)?r?Nl(a):is(a):a}}class Rd extends Cd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=je(e)&&kc(t);if(!this._isShallow){const u=Di(s);if(!Pn(i)&&!Di(i)&&(s=ct(s),i=ct(i)),!o&&Qt(s)&&!Qt(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:dt(e,t),l=Reflect.set(e,t,i,Qt(e)?e:r);return e===ct(r)&&(a?ii(i,s)&&bi(e,"set",t,i):bi(e,"add",t,i)),l}deleteProperty(e,t){const i=dt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&bi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Wn(t)||!Ad.has(t))&&jt(e,"has",t),i}ownKeys(e){return jt(e,"iterate",je(e)?"length":wr),Reflect.ownKeys(e)}}class Vp extends Cd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Gp=new Rd,Wp=new Vp,Xp=new Rd(!0);const Ul=n=>n,go=n=>Reflect.getPrototypeOf(n);function Yp(n,e,t){return function(...i){const r=this.__v_raw,s=ct(r),o=ns(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=t?Ul:e?us:Xn;return!e&&jt(s,"iterate",l?Il:wr),Ft(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function vo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function $p(n,e){const t={get(r){const s=this.__v_raw,o=ct(s),a=ct(r);n||(ii(r,a)&&jt(o,"get",r),jt(o,"get",a));const{has:l}=go(o),u=e?Ul:n?us:Xn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&jt(ct(r),"iterate",wr),r.size},has(r){const s=this.__v_raw,o=ct(s),a=ct(r);return n||(ii(r,a)&&jt(o,"has",r),jt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ct(a),u=e?Ul:n?us:Xn;return!n&&jt(l,"iterate",wr),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Ft(t,n?{add:vo("add"),set:vo("set"),delete:vo("delete"),clear:vo("clear")}:{add(r){const s=ct(this),o=go(s),a=ct(r),l=!e&&!Pn(r)&&!Di(r)?a:r;return o.has.call(s,l)||ii(r,l)&&o.has.call(s,r)||ii(a,l)&&o.has.call(s,a)||(s.add(l),bi(s,"add",l,l)),this},set(r,s){!e&&!Pn(s)&&!Di(s)&&(s=ct(s));const o=ct(this),{has:a,get:l}=go(o);let u=a.call(o,r);u||(r=ct(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?ii(s,c)&&bi(o,"set",r,s):bi(o,"add",r,s),this},delete(r){const s=ct(this),{has:o,get:a}=go(s);let l=o.call(s,r);l||(r=ct(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&bi(s,"delete",r,void 0),u},clear(){const r=ct(this),s=r.size!==0,o=r.clear();return s&&bi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Yp(r,n,e)}),t}function Yc(n,e){const t=$p(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(dt(t,r)&&r in i?t:i,r,s)}const qp={get:Yc(!1,!1)},Kp={get:Yc(!1,!0)},jp={get:Yc(!0,!1)};const Ld=new WeakMap,Pd=new WeakMap,Dd=new WeakMap,Zp=new WeakMap;function Jp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qp(n){return n.__v_skip||!Object.isExtensible(n)?0:Jp(Ep(n))}function is(n){return Di(n)?n:$c(n,!1,Gp,qp,Ld)}function em(n){return $c(n,!1,Xp,Kp,Pd)}function Nl(n){return $c(n,!0,Wp,jp,Dd)}function $c(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Qp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Ar(n){return Di(n)?Ar(n.__v_raw):!!(n&&n.__v_isReactive)}function Di(n){return!!(n&&n.__v_isReadonly)}function Pn(n){return!!(n&&n.__v_isShallow)}function qc(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function tm(n){return!dt(n,"__v_skip")&&Object.isExtensible(n)&&pd(n,"__v_skip",!0),n}const Xn=n=>ht(n)?is(n):n,us=n=>ht(n)?Nl(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function we(n){return nm(n,!1)}function nm(n,e){return Qt(n)?n:new im(n,e)}class im{constructor(e,t){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:Xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Pn(e)||Di(e);e=i?e:ct(e),ii(e,t)&&(this._rawValue=e,this._value=i?e:Xn(e),this.dep.trigger())}}function gt(n){return Qt(n)?n.value:n}const rm={get:(n,e,t)=>e==="__v_raw"?n:gt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Qt(r)&&!Qt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Id(n){return Ar(n)?n:new Proxy(n,rm)}class sm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return Sd(this,!0),!0}get value(){const e=this.dep.track();return Ed(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function om(n,e,t=!1){let i,r;return nt(n)?i=n:(i=n.get,r=n.set),new sm(i,r,t)}const _o={},ta=new WeakMap;let vr;function am(n,e=!1,t=vr){if(t){let i=ta.get(t);i||ta.set(t,i=[]),i.push(n)}}function lm(n,e,t=xt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,u=_=>r?_:Pn(_)||r===!1||r===0?Ei(_,1):Ei(_);let c,f,d,m,g=!1,v=!1;if(Qt(n)?(f=()=>n.value,g=Pn(n)):Ar(n)?(f=()=>u(n),g=!0):je(n)?(v=!0,g=n.some(_=>Ar(_)||Pn(_)),f=()=>n.map(_=>{if(Qt(_))return _.value;if(Ar(_))return u(_);if(nt(_))return l?l(_,2):_()})):nt(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Li();try{d()}finally{Pi()}}const _=vr;vr=c;try{return l?l(n,3,[m]):n(m)}finally{vr=_}}:f=si,e&&r){const _=f,P=r===!0?1/0:r;f=()=>Ei(_(),P)}const p=Np(),h=()=>{c.stop(),p&&p.active&&Bc(p.effects,c)};if(s&&e){const _=e;e=(...P)=>{_(...P),h()}}let E=v?new Array(n.length).fill(_o):_o;const b=_=>{if(!(!(c.flags&1)||!c.dirty&&!_))if(e){const P=c.run();if(r||g||(v?P.some((C,T)=>ii(C,E[T])):ii(P,E))){d&&d();const C=vr;vr=c;try{const T=[P,E===_o?void 0:v&&E[0]===_o?[]:E,m];E=P,l?l(e,3,T):e(...T)}finally{vr=C}}}else c.run()};return a&&a(b),c=new xd(f),c.scheduler=o?()=>o(b,!1):b,m=_=>am(_,!1,c),d=c.onStop=()=>{const _=ta.get(c);if(_){if(l)l(_,4);else for(const P of _)P();ta.delete(c)}},e?i?b(!0):E=c.run():o?o(b.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function Ei(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Qt(n))Ei(n.value,e,t);else if(je(n))for(let i=0;i<n.length;i++)Ei(n[i],e,t);else if(Ms(n)||ns(n))n.forEach(i=>{Ei(i,e,t)});else if(dd(n)){for(const i in n)Ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ei(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ao(n,e,t,i){try{return i?n(...i):n()}catch(r){Ea(r,e,t)}}function Yn(n,e,t,i){if(nt(n)){const r=ao(n,e,t,i);return r&&ud(r)&&r.catch(s=>{Ea(s,e,t)}),r}if(je(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Yn(n[s],e,t,i));return r}}function Ea(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){Li(),ao(s,null,10,[n,l,u]),Pi();return}}cm(n,t,r,i,o)}function cm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const sn=[];let Zn=-1;const rs=[];let ji=null,Qr=0;const Ud=Promise.resolve();let na=null;function un(n){const e=na||Ud;return n?e.then(this?n.bind(this):n):e}function um(n){let e=Zn+1,t=sn.length;for(;e<t;){const i=e+t>>>1,r=sn[i],s=Js(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Kc(n){if(!(n.flags&1)){const e=Js(n),t=sn[sn.length-1];!t||!(n.flags&2)&&e>=Js(t)?sn.push(n):sn.splice(um(e),0,n),n.flags|=1,Nd()}}function Nd(){na||(na=Ud.then(Od))}function fm(n){je(n)?rs.push(...n):ji&&n.id===-1?ji.splice(Qr+1,0,n):n.flags&1||(rs.push(n),n.flags|=1),Nd()}function xu(n,e,t=Zn+1){for(;t<sn.length;t++){const i=sn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;sn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Fd(n){if(rs.length){const e=[...new Set(rs)].sort((t,i)=>Js(t)-Js(i));if(rs.length=0,ji){ji.push(...e);return}for(ji=e,Qr=0;Qr<ji.length;Qr++){const t=ji[Qr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ji=null,Qr=0}}const Js=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Od(n){try{for(Zn=0;Zn<sn.length;Zn++){const e=sn[Zn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ao(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zn<sn.length;Zn++){const e=sn[Zn];e&&(e.flags&=-2)}Zn=-1,sn.length=0,Fd(),na=null,(sn.length||rs.length)&&Od()}}let Jt=null,Bd=null;function ia(n){const e=Jt;return Jt=n,Bd=n&&n.type.__scopeId||null,e}function Mr(n,e=Jt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&oa(-1);const s=ia(e);let o;try{o=n(...r)}finally{ia(s),i._d&&oa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Nt(n,e){if(Jt===null)return n;const t=Ra(Jt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=xt]=e[r];s&&(nt(s)&&(s={mounted:s,updated:s}),s.deep&&Ei(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ar(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Li(),Yn(l,t,8,[n.el,a,n,e]),Pi())}}function Fl(n,e){if(ln){let t=ln.provides;const i=ln.parent&&ln.parent.provides;i===t&&(t=ln.provides=Object.create(i)),t[n]=e}}function Ai(n,e,t=!1){const i=gh();if(i||os){let r=os?os._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&nt(e)?e.call(i&&i.proxy):e}}const dm=Symbol.for("v-scx"),hm=()=>Ai(dm);function Ke(n,e,t){return kd(n,e,t)}function kd(n,e,t=xt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ft({},t),l=e&&i||!e&&s!=="post";let u;if(no){if(s==="sync"){const m=hm();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=si,m.resume=si,m.pause=si,m}}const c=ln;a.call=(m,g,v)=>Yn(m,c,g,v);let f=!1;s==="post"?a.scheduler=m=>{pn(m,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Kc(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const d=lm(n,e,a);return no&&(u?u.push(d):l&&d()),d}function pm(n,e,t){const i=this.proxy,r=Pt(n)?n.includes(".")?zd(i,n):()=>i[n]:n.bind(i,i);let s;nt(e)?s=e:(s=e.handler,t=e);const o=lo(this),a=kd(r,s.bind(i),t);return o(),a}function zd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const mm=Symbol("_vte"),Hd=n=>n.__isTeleport,Qn=Symbol("_leaveCb"),Ls=Symbol("_enterCb");function gm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return En(()=>{n.isMounted=!0}),Kd(()=>{n.isUnmounting=!0}),n}const An=[Function,Array],Vd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},Gd=n=>{const e=n.subTree;return e.component?Gd(e.component):e},vm={name:"BaseTransition",props:Vd,setup(n,{slots:e}){const t=gh(),i=gm();return()=>{const r=e.default&&Yd(e.default(),!0);if(!r||!r.length)return;const s=Wd(r),o=ct(n),{mode:a}=o;if(i.isLeaving)return za(s);const l=Mu(s);if(!l)return za(s);let u=Ol(l,o,i,t,f=>u=f);l.type!==Zt&&Qs(l,u);let c=t.subTree&&Mu(t.subTree);if(c&&c.type!==Zt&&!Sr(c,l)&&Gd(t).type!==Zt){let f=Ol(c,o,i,t);if(Qs(c,f),a==="out-in"&&l.type!==Zt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},za(s);a==="in-out"&&l.type!==Zt?f.delayLeave=(d,m,g)=>{const v=Xd(i,c);v[String(c.key)]=c,d[Qn]=()=>{m(),d[Qn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Wd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Zt){e=t;break}}return e}const _m=vm;function Xd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ol(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:p,onAppear:h,onAfterAppear:E,onAppearCancelled:b}=e,_=String(n.key),P=Xd(t,n),C=(x,M)=>{x&&Yn(x,i,9,M)},T=(x,M)=>{const D=M[1];C(x,M),je(x)?x.every(U=>U.length<=1)&&D():x.length<=1&&D()},I={mode:o,persisted:a,beforeEnter(x){let M=l;if(!t.isMounted)if(s)M=p||l;else return;x[Qn]&&x[Qn](!0);const D=P[_];D&&Sr(n,D)&&D.el[Qn]&&D.el[Qn](),C(M,[x])},enter(x){if(P[_]===n)return;let M=u,D=c,U=f;if(!t.isMounted)if(s)M=h||u,D=E||c,U=b||f;else return;let B=!1;x[Ls]=Z=>{B||(B=!0,Z?C(U,[x]):C(D,[x]),I.delayedLeave&&I.delayedLeave(),x[Ls]=void 0)};const W=x[Ls].bind(null,!1);M?T(M,[x,W]):W()},leave(x,M){const D=String(n.key);if(x[Ls]&&x[Ls](!0),t.isUnmounting)return M();C(d,[x]);let U=!1;x[Qn]=W=>{U||(U=!0,M(),W?C(v,[x]):C(g,[x]),x[Qn]=void 0,P[D]===n&&delete P[D])};const B=x[Qn].bind(null,!1);P[D]=n,m?T(m,[x,B]):B()},clone(x){const M=Ol(x,e,t,i,r);return r&&r(M),M}};return I}function za(n){if(Ta(n))return n=rr(n),n.children=null,n}function Mu(n){if(!Ta(n))return Hd(n.type)&&n.children?Wd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&nt(t.default))return t.default()}}function Qs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Qs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Yd(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===on?(o.patchFlag&128&&r++,i=i.concat(Yd(o.children,e,a))):(e||o.type!==Zt)&&i.push(a!=null?rr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ai(n,e){return nt(n)?Ft({name:n.name},e,{setup:n}):n}function $d(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Su(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ra=new WeakMap;function Ys(n,e,t,i,r=!1){if(je(n)){n.forEach((v,p)=>Ys(v,e&&(je(e)?e[p]:e),t,i,r));return}if(ss(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ys(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Ra(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=e&&e.r,c=a.refs===xt?a.refs={}:a.refs,f=a.setupState,d=ct(f),m=f===xt?cd:v=>Su(c,v)?!1:dt(d,v),g=(v,p)=>!(p&&Su(c,p));if(u!=null&&u!==l){if(yu(e),Pt(u))c[u]=null,m(u)&&(f[u]=null);else if(Qt(u)){const v=e;g(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(nt(l))ao(l,a,12,[o,c]);else{const v=Pt(l),p=Qt(l);if(v||p){const h=()=>{if(n.f){const E=v?m(l)?f[l]:c[l]:g()||!n.k?l.value:c[n.k];if(r)je(E)&&Bc(E,s);else if(je(E))E.includes(s)||E.push(s);else if(v)c[l]=[s],m(l)&&(f[l]=c[l]);else{const b=[s];g(l,n.k)&&(l.value=b),n.k&&(c[n.k]=b)}}else v?(c[l]=o,m(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const E=()=>{h(),ra.delete(n)};E.id=-1,ra.set(n,E),pn(E,t)}else yu(n),h()}}}function yu(n){const e=ra.get(n);e&&(e.flags|=8,ra.delete(n))}ya().requestIdleCallback;ya().cancelIdleCallback;const ss=n=>!!n.type.__asyncLoader,Ta=n=>n.type.__isKeepAlive;function xm(n,e){qd(n,"a",e)}function Mm(n,e){qd(n,"da",e)}function qd(n,e,t=ln){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(wa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ta(r.parent.vnode)&&Sm(i,e,t,r),r=r.parent}}function Sm(n,e,t,i){const r=wa(e,n,i,!0);Dn(()=>{Bc(i[e],r)},t)}function wa(n,e,t=ln,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Li();const a=lo(t),l=Yn(e,t,n,o);return a(),Pi(),l});return i?r.unshift(s):r.push(s),s}}const Oi=n=>(e,t=ln)=>{(!no||n==="sp")&&wa(n,(...i)=>e(...i),t)},ym=Oi("bm"),En=Oi("m"),bm=Oi("bu"),Em=Oi("u"),Kd=Oi("bum"),Dn=Oi("um"),Tm=Oi("sp"),wm=Oi("rtg"),Am=Oi("rtc");function Cm(n,e=ln){wa("ec",n,e)}const Rm=Symbol.for("v-ndc");function Lm(n,e,t,i){let r;const s=t,o=je(n);if(o||Pt(n)){const a=o&&Ar(n);let l=!1,u=!1;a&&(l=!Pn(n),u=Di(n),n=ba(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?us(Xn(n[c])):Xn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}function Bl(n,e,t={},i,r){if(Jt.ce||Jt.parent&&ss(Jt.parent)&&Jt.parent.ce){const u=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Qe(),Rt(on,null,[At("slot",t,i)],u?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),Qe();const o=s&&jd(s(t)),a=t.key||o&&o.key,l=Rt(on,{key:(a&&!Wn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function jd(n){return n.some(e=>to(e)?!(e.type===Zt||e.type===on&&!jd(e.children)):!0)?n:null}const kl=n=>n?vh(n)?Ra(n):kl(n.parent):null,$s=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kl(n.parent),$root:n=>kl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Jd(n),$forceUpdate:n=>n.f||(n.f=()=>{Kc(n.update)}),$nextTick:n=>n.n||(n.n=un.bind(n.proxy)),$watch:n=>pm.bind(n)}),Ha=(n,e)=>n!==xt&&!n.__isScriptSetup&&dt(n,e),Pm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ha(i,e))return o[e]=1,i[e];if(r!==xt&&dt(r,e))return o[e]=2,r[e];if(dt(s,e))return o[e]=3,s[e];if(t!==xt&&dt(t,e))return o[e]=4,t[e];zl&&(o[e]=0)}}const u=$s[e];let c,f;if(u)return e==="$attrs"&&jt(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==xt&&dt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,dt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ha(r,e)?(r[e]=t,!0):i!==xt&&dt(i,e)?(i[e]=t,!0):dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==xt&&a[0]!=="$"&&dt(n,a)||Ha(e,a)||dt(s,a)||dt(i,a)||dt($s,a)||dt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function bu(n){return je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let zl=!0;function Dm(n){const e=Jd(n),t=n.proxy,i=n.ctx;zl=!1,e.beforeCreate&&Eu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:v,deactivated:p,beforeDestroy:h,beforeUnmount:E,destroyed:b,unmounted:_,render:P,renderTracked:C,renderTriggered:T,errorCaptured:I,serverPrefetch:x,expose:M,inheritAttrs:D,components:U,directives:B,filters:W}=e;if(u&&Im(u,i,null),o)for(const J in o){const H=o[J];nt(H)&&(i[J]=H.bind(t))}if(r){const J=r.call(t,t);ht(J)&&(n.data=is(J))}if(zl=!0,s)for(const J in s){const H=s[J],ee=nt(H)?H.bind(t,t):nt(H.get)?H.get.bind(t,t):si,O=!nt(H)&&nt(H.set)?H.set.bind(t):si,$=tt({get:ee,set:O});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>$.value,set:q=>$.value=q})}if(a)for(const J in a)Zd(a[J],i,t,J);if(l){const J=nt(l)?l.call(t):l;Reflect.ownKeys(J).forEach(H=>{Fl(H,J[H])})}c&&Eu(c,n,"c");function Y(J,H){je(H)?H.forEach(ee=>J(ee.bind(t))):H&&J(H.bind(t))}if(Y(ym,f),Y(En,d),Y(bm,m),Y(Em,g),Y(xm,v),Y(Mm,p),Y(Cm,I),Y(Am,C),Y(wm,T),Y(Kd,E),Y(Dn,_),Y(Tm,x),je(M))if(M.length){const J=n.exposed||(n.exposed={});M.forEach(H=>{Object.defineProperty(J,H,{get:()=>t[H],set:ee=>t[H]=ee,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===si&&(n.render=P),D!=null&&(n.inheritAttrs=D),U&&(n.components=U),B&&(n.directives=B),x&&$d(n)}function Im(n,e,t=si){je(n)&&(n=Hl(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=Ai(r.from||i,r.default,!0):s=Ai(r.from||i):s=Ai(r),Qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Eu(n,e,t){Yn(je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Zd(n,e,t,i){let r=i.includes(".")?zd(t,i):()=>t[i];if(Pt(n)){const s=e[n];nt(s)&&Ke(r,s)}else if(nt(n))Ke(r,n.bind(t));else if(ht(n))if(je(n))n.forEach(s=>Zd(s,e,t,i));else{const s=nt(n.handler)?n.handler.bind(t):e[n.handler];nt(s)&&Ke(r,s,n)}}function Jd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>sa(l,u,o,!0)),sa(l,e,o)),ht(e)&&s.set(e,l),l}function sa(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&sa(n,s,t,!0),r&&r.forEach(o=>sa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Um[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Um={data:Tu,props:wu,emits:wu,methods:zs,computed:zs,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:zs,directives:zs,watch:Fm,provide:Tu,inject:Nm};function Tu(n,e){return e?n?function(){return Ft(nt(n)?n.call(this,this):n,nt(e)?e.call(this,this):e)}:e:n}function Nm(n,e){return zs(Hl(n),Hl(e))}function Hl(n){if(je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function tn(n,e){return n?[...new Set([].concat(n,e))]:e}function zs(n,e){return n?Ft(Object.create(null),n,e):e}function wu(n,e){return n?je(n)&&je(e)?[...new Set([...n,...e])]:Ft(Object.create(null),bu(n),bu(e??{})):e}function Fm(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const i in e)t[i]=tn(n[i],e[i]);return t}function Qd(){return{app:null,config:{isNativeTag:cd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Om=0;function Bm(n,e){return function(i,r=null){nt(i)||(i=Ft({},i)),r!=null&&!ht(r)&&(r=null);const s=Qd(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Om++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:gg,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&nt(c.install)?(o.add(c),c.install(u,...f)):nt(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const m=u._ceVNode||At(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,c,d),l=!0,u._container=c,c.__vue_app__=u,Ra(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Yn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=os;os=u;try{return c()}finally{os=f}}};return u}}let os=null;const km=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Hn(e)}Modifiers`]||n[`${or(e)}Modifiers`];function zm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||xt;let r=t;const s=e.startsWith("update:"),o=s&&km(i,e.slice(7));o&&(o.trim&&(r=t.map(c=>Pt(c)?c.trim():c)),o.number&&(r=t.map(Sa)));let a,l=i[a=Na(e)]||i[a=Na(Hn(e))];!l&&s&&(l=i[a=Na(or(e))]),l&&Yn(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Yn(u,n,6,r)}}const Hm=new WeakMap;function eh(n,e,t=!1){const i=t?Hm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!nt(n)){const l=u=>{const c=eh(u,e,!0);c&&(a=!0,Ft(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):(je(s)?s.forEach(l=>o[l]=null):Ft(o,s),ht(n)&&i.set(n,o),o)}function Aa(n,e){return!n||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(n,e[0].toLowerCase()+e.slice(1))||dt(n,or(e))||dt(n,e))}function Au(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:d,setupState:m,ctx:g,inheritAttrs:v}=n,p=ia(n);let h,E;try{if(t.shapeFlag&4){const _=r||i,P=_;h=ti(u.call(P,_,c,f,m,d,g)),E=a}else{const _=e;h=ti(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),E=e.props?a:Vm(a)}}catch(_){qs.length=0,Ea(_,n,1),h=At(Zt)}let b=h;if(E&&v!==!1){const _=Object.keys(E),{shapeFlag:P}=b;_.length&&P&7&&(s&&_.some(xa)&&(E=Gm(E,s)),b=rr(b,E,!1,!0))}return t.dirs&&(b=rr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Qs(b,t.transition),h=b,ia(p),h}const Vm=n=>{let e;for(const t in n)(t==="class"||t==="style"||_a(t))&&((e||(e={}))[t]=n[t]);return e},Gm=(n,e)=>{const t={};for(const i in n)(!xa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Wm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Cu(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(th(o,i,d)&&!Aa(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Cu(i,o,u):!0:!!o;return!1}function Cu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(th(e,n,s)&&!Aa(t,s))return!0}return!1}function th(n,e,t){const i=n[t],r=e[t];return t==="style"&&ht(i)&&ht(r)?!Ss(i,r):i!==r}function Xm({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const nh={},ih=()=>Object.create(nh),rh=n=>Object.getPrototypeOf(n)===nh;function Ym(n,e,t,i=!1){const r={},s=ih();n.propsDefaults=Object.create(null),sh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:em(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function $m(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ct(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Aa(n.emitsOptions,d))continue;const m=e[d];if(l)if(dt(s,d))m!==s[d]&&(s[d]=m,u=!0);else{const g=Hn(d);r[g]=Vl(l,a,g,m,n,!1)}else m!==s[d]&&(s[d]=m,u=!0)}}}else{sh(n,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!dt(e,f)&&((c=or(f))===f||!dt(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Vl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!dt(e,f))&&(delete s[f],u=!0)}u&&bi(n.attrs,"set","")}function sh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gs(l))continue;const u=e[l];let c;r&&dt(r,c=Hn(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:Aa(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=ct(t),u=a||xt;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Vl(r,l,f,u[f],n,!dt(u,f))}}return o}function Vl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&nt(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=lo(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===or(t))&&(i=!0))}return i}const qm=new WeakMap;function oh(n,e,t=!1){const i=t?qm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!nt(n)){const c=f=>{l=!0;const[d,m]=oh(f,e,!0);Ft(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ht(n)&&i.set(n,ts),ts;if(je(s))for(let c=0;c<s.length;c++){const f=Hn(s[c]);Ru(f)&&(o[f]=xt)}else if(s)for(const c in s){const f=Hn(c);if(Ru(f)){const d=s[c],m=o[f]=je(d)||nt(d)?{type:d}:Ft({},d),g=m.type;let v=!1,p=!0;if(je(g))for(let h=0;h<g.length;++h){const E=g[h],b=nt(E)&&E.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(p=!1)}else v=nt(g)&&g.name==="Boolean";m[0]=v,m[1]=p,(v||dt(m,"default"))&&a.push(f)}}const u=[o,a];return ht(n)&&i.set(n,u),u}function Ru(n){return n[0]!=="$"&&!Gs(n)}const jc=n=>n==="_"||n==="_ctx"||n==="$stable",Zc=n=>je(n)?n.map(ti):[ti(n)],Km=(n,e,t)=>{if(e._n)return e;const i=Mr((...r)=>Zc(e(...r)),t);return i._c=!1,i},ah=(n,e,t)=>{const i=n._ctx;for(const r in n){if(jc(r))continue;const s=n[r];if(nt(s))e[r]=Km(r,s,i);else if(s!=null){const o=Zc(s);e[r]=()=>o}}},lh=(n,e)=>{const t=Zc(e);n.slots.default=()=>t},ch=(n,e,t)=>{for(const i in e)(t||!jc(i))&&(n[i]=e[i])},jm=(n,e,t)=>{const i=n.slots=ih();if(n.vnode.shapeFlag&32){const r=e._;r?(ch(i,e,t),t&&pd(i,"_",r,!0)):ah(e,i)}else e&&lh(n,e)},Zm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:ch(r,e,t):(s=!e.$stable,ah(e,r)),o=e}else e&&(lh(n,e),o={default:1});if(s)for(const a in r)!jc(a)&&o[a]==null&&delete r[a]},pn=ng;function Jm(n){return Qm(n)}function Qm(n,e){const t=ya();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:m=si,insertStaticContent:g}=n,v=(R,F,w,de=null,ne=null,te=null,ae=void 0,ge=null,le=!!F.dynamicChildren)=>{if(R===F)return;R&&!Sr(R,F)&&(de=ve(R),q(R,ne,te,!0),R=null),F.patchFlag===-2&&(le=!1,F.dynamicChildren=null);const{type:y,ref:S,shapeFlag:L}=F;switch(y){case Ca:p(R,F,w,de);break;case Zt:h(R,F,w,de);break;case Ga:R==null&&E(F,w,de,ae);break;case on:U(R,F,w,de,ne,te,ae,ge,le);break;default:L&1?P(R,F,w,de,ne,te,ae,ge,le):L&6?B(R,F,w,de,ne,te,ae,ge,le):(L&64||L&128)&&y.process(R,F,w,de,ne,te,ae,ge,le,He)}S!=null&&ne?Ys(S,R&&R.ref,te,F||R,!F):S==null&&R&&R.ref!=null&&Ys(R.ref,null,te,R,!0)},p=(R,F,w,de)=>{if(R==null)i(F.el=a(F.children),w,de);else{const ne=F.el=R.el;F.children!==R.children&&u(ne,F.children)}},h=(R,F,w,de)=>{R==null?i(F.el=l(F.children||""),w,de):F.el=R.el},E=(R,F,w,de)=>{[R.el,R.anchor]=g(R.children,F,w,de,R.el,R.anchor)},b=({el:R,anchor:F},w,de)=>{let ne;for(;R&&R!==F;)ne=d(R),i(R,w,de),R=ne;i(F,w,de)},_=({el:R,anchor:F})=>{let w;for(;R&&R!==F;)w=d(R),r(R),R=w;r(F)},P=(R,F,w,de,ne,te,ae,ge,le)=>{if(F.type==="svg"?ae="svg":F.type==="math"&&(ae="mathml"),R==null)C(F,w,de,ne,te,ae,ge,le);else{const y=R.el&&R.el._isVueCE?R.el:null;try{y&&y._beginPatch(),x(R,F,ne,te,ae,ge,le)}finally{y&&y._endPatch()}}},C=(R,F,w,de,ne,te,ae,ge)=>{let le,y;const{props:S,shapeFlag:L,transition:V,dirs:j}=R;if(le=R.el=o(R.type,te,S&&S.is,S),L&8?c(le,R.children):L&16&&I(R.children,le,null,de,ne,Va(R,te),ae,ge),j&&ar(R,null,de,"created"),T(le,R,R.scopeId,ae,de),S){for(const be in S)be!=="value"&&!Gs(be)&&s(le,be,null,S[be],te,de);"value"in S&&s(le,"value",null,S.value,te),(y=S.onVnodeBeforeMount)&&jn(y,de,R)}j&&ar(R,null,de,"beforeMount");const ie=eg(ne,V);ie&&V.beforeEnter(le),i(le,F,w),((y=S&&S.onVnodeMounted)||ie||j)&&pn(()=>{try{y&&jn(y,de,R),ie&&V.enter(le),j&&ar(R,null,de,"mounted")}finally{}},ne)},T=(R,F,w,de,ne)=>{if(w&&m(R,w),de)for(let te=0;te<de.length;te++)m(R,de[te]);if(ne){let te=ne.subTree;if(F===te||hh(te.type)&&(te.ssContent===F||te.ssFallback===F)){const ae=ne.vnode;T(R,ae,ae.scopeId,ae.slotScopeIds,ne.parent)}}},I=(R,F,w,de,ne,te,ae,ge,le=0)=>{for(let y=le;y<R.length;y++){const S=R[y]=ge?yi(R[y]):ti(R[y]);v(null,S,F,w,de,ne,te,ae,ge)}},x=(R,F,w,de,ne,te,ae)=>{const ge=F.el=R.el;let{patchFlag:le,dynamicChildren:y,dirs:S}=F;le|=R.patchFlag&16;const L=R.props||xt,V=F.props||xt;let j;if(w&&lr(w,!1),(j=V.onVnodeBeforeUpdate)&&jn(j,w,F,R),S&&ar(F,R,w,"beforeUpdate"),w&&lr(w,!0),(L.innerHTML&&V.innerHTML==null||L.textContent&&V.textContent==null)&&c(ge,""),y?M(R.dynamicChildren,y,ge,w,de,Va(F,ne),te):ae||H(R,F,ge,null,w,de,Va(F,ne),te,!1),le>0){if(le&16)D(ge,L,V,w,ne);else if(le&2&&L.class!==V.class&&s(ge,"class",null,V.class,ne),le&4&&s(ge,"style",L.style,V.style,ne),le&8){const ie=F.dynamicProps;for(let be=0;be<ie.length;be++){const ye=ie[be],Te=L[ye],Ge=V[ye];(Ge!==Te||ye==="value")&&s(ge,ye,Te,Ge,ne,w)}}le&1&&R.children!==F.children&&c(ge,F.children)}else!ae&&y==null&&D(ge,L,V,w,ne);((j=V.onVnodeUpdated)||S)&&pn(()=>{j&&jn(j,w,F,R),S&&ar(F,R,w,"updated")},de)},M=(R,F,w,de,ne,te,ae)=>{for(let ge=0;ge<F.length;ge++){const le=R[ge],y=F[ge],S=le.el&&(le.type===on||!Sr(le,y)||le.shapeFlag&198)?f(le.el):w;v(le,y,S,null,de,ne,te,ae,!0)}},D=(R,F,w,de,ne)=>{if(F!==w){if(F!==xt)for(const te in F)!Gs(te)&&!(te in w)&&s(R,te,F[te],null,ne,de);for(const te in w){if(Gs(te))continue;const ae=w[te],ge=F[te];ae!==ge&&te!=="value"&&s(R,te,ge,ae,ne,de)}"value"in w&&s(R,"value",F.value,w.value,ne)}},U=(R,F,w,de,ne,te,ae,ge,le)=>{const y=F.el=R?R.el:a(""),S=F.anchor=R?R.anchor:a("");let{patchFlag:L,dynamicChildren:V,slotScopeIds:j}=F;j&&(ge=ge?ge.concat(j):j),R==null?(i(y,w,de),i(S,w,de),I(F.children||[],w,S,ne,te,ae,ge,le)):L>0&&L&64&&V&&R.dynamicChildren&&R.dynamicChildren.length===V.length?(M(R.dynamicChildren,V,w,ne,te,ae,ge),(F.key!=null||ne&&F===ne.subTree)&&uh(R,F,!0)):H(R,F,w,S,ne,te,ae,ge,le)},B=(R,F,w,de,ne,te,ae,ge,le)=>{F.slotScopeIds=ge,R==null?F.shapeFlag&512?ne.ctx.activate(F,w,de,ae,le):W(F,w,de,ne,te,ae,le):Z(R,F,le)},W=(R,F,w,de,ne,te,ae)=>{const ge=R.component=cg(R,de,ne);if(Ta(R)&&(ge.ctx.renderer=He),ug(ge,!1,ae),ge.asyncDep){if(ne&&ne.registerDep(ge,Y,ae),!R.el){const le=ge.subTree=At(Zt);h(null,le,F,w),R.placeholder=le.el}}else Y(ge,R,F,w,ne,te,ae)},Z=(R,F,w)=>{const de=F.component=R.component;if(Wm(R,F,w))if(de.asyncDep&&!de.asyncResolved){J(de,F,w);return}else de.next=F,de.update();else F.el=R.el,de.vnode=F},Y=(R,F,w,de,ne,te,ae)=>{const ge=()=>{if(R.isMounted){let{next:L,bu:V,u:j,parent:ie,vnode:be}=R;{const k=fh(R);if(k){L&&(L.el=be.el,J(R,L,ae)),k.asyncDep.then(()=>{pn(()=>{R.isUnmounted||y()},ne)});return}}let ye=L,Te;lr(R,!1),L?(L.el=be.el,J(R,L,ae)):L=be,V&&Xo(V),(Te=L.props&&L.props.onVnodeBeforeUpdate)&&jn(Te,ie,L,be),lr(R,!0);const Ge=Au(R),N=R.subTree;R.subTree=Ge,v(N,Ge,f(N.el),ve(N),R,ne,te),L.el=Ge.el,ye===null&&Xm(R,Ge.el),j&&pn(j,ne),(Te=L.props&&L.props.onVnodeUpdated)&&pn(()=>jn(Te,ie,L,be),ne)}else{let L;const{el:V,props:j}=F,{bm:ie,m:be,parent:ye,root:Te,type:Ge}=R,N=ss(F);lr(R,!1),ie&&Xo(ie),!N&&(L=j&&j.onVnodeBeforeMount)&&jn(L,ye,F),lr(R,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(Ge,R.parent?R.parent.type:void 0);const k=R.subTree=Au(R);v(null,k,w,de,R,ne,te),F.el=k.el}if(be&&pn(be,ne),!N&&(L=j&&j.onVnodeMounted)){const k=F;pn(()=>jn(L,ye,k),ne)}(F.shapeFlag&256||ye&&ss(ye.vnode)&&ye.vnode.shapeFlag&256)&&R.a&&pn(R.a,ne),R.isMounted=!0,F=w=de=null}};R.scope.on();const le=R.effect=new xd(ge);R.scope.off();const y=R.update=le.run.bind(le),S=R.job=le.runIfDirty.bind(le);S.i=R,S.id=R.uid,le.scheduler=()=>Kc(S),lr(R,!0),y()},J=(R,F,w)=>{F.component=R;const de=R.vnode.props;R.vnode=F,R.next=null,$m(R,F.props,de,w),Zm(R,F.children,w),Li(),xu(R),Pi()},H=(R,F,w,de,ne,te,ae,ge,le=!1)=>{const y=R&&R.children,S=R?R.shapeFlag:0,L=F.children,{patchFlag:V,shapeFlag:j}=F;if(V>0){if(V&128){O(y,L,w,de,ne,te,ae,ge,le);return}else if(V&256){ee(y,L,w,de,ne,te,ae,ge,le);return}}j&8?(S&16&&_e(y,ne,te),L!==y&&c(w,L)):S&16?j&16?O(y,L,w,de,ne,te,ae,ge,le):_e(y,ne,te,!0):(S&8&&c(w,""),j&16&&I(L,w,de,ne,te,ae,ge,le))},ee=(R,F,w,de,ne,te,ae,ge,le)=>{R=R||ts,F=F||ts;const y=R.length,S=F.length,L=Math.min(y,S);let V;for(V=0;V<L;V++){const j=F[V]=le?yi(F[V]):ti(F[V]);v(R[V],j,w,null,ne,te,ae,ge,le)}y>S?_e(R,ne,te,!0,!1,L):I(F,w,de,ne,te,ae,ge,le,L)},O=(R,F,w,de,ne,te,ae,ge,le)=>{let y=0;const S=F.length;let L=R.length-1,V=S-1;for(;y<=L&&y<=V;){const j=R[y],ie=F[y]=le?yi(F[y]):ti(F[y]);if(Sr(j,ie))v(j,ie,w,null,ne,te,ae,ge,le);else break;y++}for(;y<=L&&y<=V;){const j=R[L],ie=F[V]=le?yi(F[V]):ti(F[V]);if(Sr(j,ie))v(j,ie,w,null,ne,te,ae,ge,le);else break;L--,V--}if(y>L){if(y<=V){const j=V+1,ie=j<S?F[j].el:de;for(;y<=V;)v(null,F[y]=le?yi(F[y]):ti(F[y]),w,ie,ne,te,ae,ge,le),y++}}else if(y>V)for(;y<=L;)q(R[y],ne,te,!0),y++;else{const j=y,ie=y,be=new Map;for(y=ie;y<=V;y++){const xe=F[y]=le?yi(F[y]):ti(F[y]);xe.key!=null&&be.set(xe.key,y)}let ye,Te=0;const Ge=V-ie+1;let N=!1,k=0;const re=new Array(Ge);for(y=0;y<Ge;y++)re[y]=0;for(y=j;y<=L;y++){const xe=R[y];if(Te>=Ge){q(xe,ne,te,!0);continue}let Ue;if(xe.key!=null)Ue=be.get(xe.key);else for(ye=ie;ye<=V;ye++)if(re[ye-ie]===0&&Sr(xe,F[ye])){Ue=ye;break}Ue===void 0?q(xe,ne,te,!0):(re[Ue-ie]=y+1,Ue>=k?k=Ue:N=!0,v(xe,F[Ue],w,null,ne,te,ae,ge,le),Te++)}const Ee=N?tg(re):ts;for(ye=Ee.length-1,y=Ge-1;y>=0;y--){const xe=ie+y,Ue=F[xe],Pe=F[xe+1],$e=xe+1<S?Pe.el||dh(Pe):de;re[y]===0?v(null,Ue,w,$e,ne,te,ae,ge,le):N&&(ye<0||y!==Ee[ye]?$(Ue,w,$e,2):ye--)}}},$=(R,F,w,de,ne=null)=>{const{el:te,type:ae,transition:ge,children:le,shapeFlag:y}=R;if(y&6){$(R.component.subTree,F,w,de);return}if(y&128){R.suspense.move(F,w,de);return}if(y&64){ae.move(R,F,w,He);return}if(ae===on){i(te,F,w);for(let L=0;L<le.length;L++)$(le[L],F,w,de);i(R.anchor,F,w);return}if(ae===Ga){b(R,F,w);return}if(de!==2&&y&1&&ge)if(de===0)ge.beforeEnter(te),i(te,F,w),pn(()=>ge.enter(te),ne);else{const{leave:L,delayLeave:V,afterLeave:j}=ge,ie=()=>{R.ctx.isUnmounted?r(te):i(te,F,w)},be=()=>{te._isLeaving&&te[Qn](!0),L(te,()=>{ie(),j&&j()})};V?V(te,ie,be):be()}else i(te,F,w)},q=(R,F,w,de=!1,ne=!1)=>{const{type:te,props:ae,ref:ge,children:le,dynamicChildren:y,shapeFlag:S,patchFlag:L,dirs:V,cacheIndex:j,memo:ie}=R;if(L===-2&&(ne=!1),ge!=null&&(Li(),Ys(ge,null,w,R,!0),Pi()),j!=null&&(F.renderCache[j]=void 0),S&256){F.ctx.deactivate(R);return}const be=S&1&&V,ye=!ss(R);let Te;if(ye&&(Te=ae&&ae.onVnodeBeforeUnmount)&&jn(Te,F,R),S&6)he(R.component,w,de);else{if(S&128){R.suspense.unmount(w,de);return}be&&ar(R,null,F,"beforeUnmount"),S&64?R.type.remove(R,F,w,He,de):y&&!y.hasOnce&&(te!==on||L>0&&L&64)?_e(y,F,w,!1,!0):(te===on&&L&384||!ne&&S&16)&&_e(le,F,w),de&&fe(R)}const Ge=ie!=null&&j==null;(ye&&(Te=ae&&ae.onVnodeUnmounted)||be||Ge)&&pn(()=>{Te&&jn(Te,F,R),be&&ar(R,null,F,"unmounted"),Ge&&(R.el=null)},w)},fe=R=>{const{type:F,el:w,anchor:de,transition:ne}=R;if(F===on){Q(w,de);return}if(F===Ga){_(R);return}const te=()=>{r(w),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(R.shapeFlag&1&&ne&&!ne.persisted){const{leave:ae,delayLeave:ge}=ne,le=()=>ae(w,te);ge?ge(R.el,te,le):le()}else te()},Q=(R,F)=>{let w;for(;R!==F;)w=d(R),r(R),R=w;r(F)},he=(R,F,w)=>{const{bum:de,scope:ne,job:te,subTree:ae,um:ge,m:le,a:y}=R;Lu(le),Lu(y),de&&Xo(de),ne.stop(),te&&(te.flags|=8,q(ae,R,F,w)),ge&&pn(ge,F),pn(()=>{R.isUnmounted=!0},F)},_e=(R,F,w,de=!1,ne=!1,te=0)=>{for(let ae=te;ae<R.length;ae++)q(R[ae],F,w,de,ne)},ve=R=>{if(R.shapeFlag&6)return ve(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const F=d(R.anchor||R.el),w=F&&F[mm];return w?d(w):F};let Be=!1;const ze=(R,F,w)=>{let de;R==null?F._vnode&&(q(F._vnode,null,null,!0),de=F._vnode.component):v(F._vnode||null,R,F,null,null,null,w),F._vnode=R,Be||(Be=!0,xu(de),Fd(),Be=!1)},He={p:v,um:q,m:$,r:fe,mt:W,mc:I,pc:H,pbc:M,n:ve,o:n};return{render:ze,hydrate:void 0,createApp:Bm(ze)}}function Va({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function lr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function eg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function uh(n,e,t=!1){const i=n.children,r=e.children;if(je(i)&&je(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=yi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&uh(o,a)),a.type===Ca&&(a.patchFlag===-1&&(a=r[s]=yi(a)),a.el=o.el),a.type===Zt&&!a.el&&(a.el=o.el)}}function tg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function fh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fh(e)}function Lu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function dh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?dh(e.subTree):null}const hh=n=>n.__isSuspense;function ng(n,e){e&&e.pendingBranch?je(n)?e.effects.push(...n):e.effects.push(n):fm(n)}const on=Symbol.for("v-fgt"),Ca=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Ga=Symbol.for("v-stc"),qs=[];let yn=null;function Qe(n=!1){qs.push(yn=n?null:[])}function ig(){qs.pop(),yn=qs[qs.length-1]||null}let eo=1;function oa(n,e=!1){eo+=n,n<0&&yn&&e&&(yn.hasOnce=!0)}function ph(n){return n.dynamicChildren=eo>0?yn||ts:null,ig(),eo>0&&yn&&yn.push(n),n}function yt(n,e,t,i,r,s){return ph(Fe(n,e,t,i,r,s,!0))}function Rt(n,e,t,i,r){return ph(At(n,e,t,i,r,!0))}function to(n){return n?n.__v_isVNode===!0:!1}function Sr(n,e){return n.type===e.type&&n.key===e.key}const mh=({key:n})=>n??null,Yo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Pt(n)||Qt(n)||nt(n)?{i:Jt,r:n,k:e,f:!!t}:n:null);function Fe(n,e=null,t=null,i=0,r=null,s=n===on?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mh(e),ref:e&&Yo(e),scopeId:Bd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jt};return a?(Jc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),eo>0&&!o&&yn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&yn.push(l),l}const At=rg;function rg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Rm)&&(n=Zt),to(n)){const a=rr(n,e,!0);return t&&Jc(a,t),eo>0&&!s&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag=-2,a}if(pg(n)&&(n=n.__vccOpts),e){e=sg(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=rn(a)),ht(l)&&(qc(l)&&!je(l)&&(l=Ft({},l)),e.style=Ln(l))}const o=Pt(n)?1:hh(n)?128:Hd(n)?64:ht(n)?4:nt(n)?2:0;return Fe(n,e,t,i,r,o,s,!0)}function sg(n){return n?qc(n)||rh(n)?Ft({},n):n:null}function rr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=e?og(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&mh(u),ref:e&&e.ref?t&&s?je(s)?s.concat(Yo(e)):[s,Yo(e)]:Yo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==on?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rr(n.ssContent),ssFallback:n.ssFallback&&rr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Qs(c,l.clone(c)),c}function Jn(n=" ",e=0){return At(Ca,null,n,e)}function an(n="",e=!1){return e?(Qe(),Rt(Zt,null,n)):At(Zt,null,n)}function ti(n){return n==null||typeof n=="boolean"?At(Zt):je(n)?At(on,null,n.slice()):to(n)?yi(n):At(Ca,null,String(n))}function yi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rr(n)}function Jc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(je(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Jc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!rh(e)?e._ctx=Jt:r===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else nt(e)?(e={default:e,_ctx:Jt},t=32):(e=String(e),i&64?(t=16,e=[Jn(e)]):t=8);n.children=e,n.shapeFlag|=t}function og(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=rn([e.class,i.class]));else if(r==="style")e.style=Ln([e.style,i.style]);else if(_a(r)){const s=e[r],o=i[r];o&&s!==o&&!(je(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!xa(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function jn(n,e,t,i=null){Yn(n,e,7,[t,i])}const ag=Qd();let lg=0;function cg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ag,s={uid:lg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _d(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oh(i,r),emitsOptions:eh(i,r),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zm.bind(null,s),n.ce&&n.ce(s),s}let ln=null;const gh=()=>ln||Jt;let aa,Gl;{const n=ya(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};aa=e("__VUE_INSTANCE_SETTERS__",t=>ln=t),Gl=e("__VUE_SSR_SETTERS__",t=>no=t)}const lo=n=>{const e=ln;return aa(n),n.scope.on(),()=>{n.scope.off(),aa(e)}},Pu=()=>{ln&&ln.scope.off(),aa(null)};function vh(n){return n.vnode.shapeFlag&4}let no=!1;function ug(n,e=!1,t=!1){e&&Gl(e);const{props:i,children:r}=n.vnode,s=vh(n);Ym(n,i,s,e),jm(n,r,t||e);const o=s?fg(n,e):void 0;return e&&Gl(!1),o}function fg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Pm);const{setup:i}=t;if(i){Li();const r=n.setupContext=i.length>1?hg(n):null,s=lo(n),o=ao(i,n,0,[n.props,r]),a=ud(o);if(Pi(),s(),(a||n.sp)&&!ss(n)&&$d(n),a){if(o.then(Pu,Pu),e)return o.then(l=>{Du(n,l)}).catch(l=>{Ea(l,n,0)});n.asyncDep=o}else Du(n,o)}else _h(n)}function Du(n,e,t){nt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=Id(e)),_h(n)}function _h(n,e,t){const i=n.type;n.render||(n.render=i.render||si);{const r=lo(n);Li();try{Dm(n)}finally{Pi(),r()}}}const dg={get(n,e){return jt(n,"get",""),n[e]}};function hg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,dg),slots:n.slots,emit:n.emit,expose:e}}function Ra(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Id(tm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $s)return $s[t](n)},has(e,t){return t in e||t in $s}})):n.proxy}function pg(n){return nt(n)&&"__vccOpts"in n}const tt=(n,e)=>om(n,e,no);function mg(n,e,t){try{oa(-1);const i=arguments.length;return i===2?ht(e)&&!je(e)?to(e)?At(n,null,[e]):At(n,e):At(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&to(t)&&(t=[t]),At(n,e,t))}finally{oa(1)}}const gg="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wl;const Iu=typeof window<"u"&&window.trustedTypes;if(Iu)try{Wl=Iu.createPolicy("vue",{createHTML:n=>n})}catch{}const xh=Wl?n=>Wl.createHTML(n):n=>n,vg="http://www.w3.org/2000/svg",_g="http://www.w3.org/1998/Math/MathML",Si=typeof document<"u"?document:null,Uu=Si&&Si.createElement("template"),xg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Si.createElementNS(vg,n):e==="mathml"?Si.createElementNS(_g,n):t?Si.createElement(n,{is:t}):Si.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Si.createTextNode(n),createComment:n=>Si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Uu.innerHTML=xh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Uu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Hi="transition",Ps="animation",io=Symbol("_vtc"),Mh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mg=Ft({},Vd,Mh),Sg=n=>(n.displayName="Transition",n.props=Mg,n),yg=Sg((n,{slots:e})=>mg(_m,bg(n),e)),cr=(n,e=[])=>{je(n)?n.forEach(t=>t(...e)):n&&n(...e)},Nu=n=>n?je(n)?n.some(e=>e.length>1):n.length>1:!1;function bg(n){const e={};for(const U in n)U in Mh||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=Eg(r),v=g&&g[0],p=g&&g[1],{onBeforeEnter:h,onEnter:E,onEnterCancelled:b,onLeave:_,onLeaveCancelled:P,onBeforeAppear:C=h,onAppear:T=E,onAppearCancelled:I=b}=e,x=(U,B,W,Z)=>{U._enterCancelled=Z,ur(U,B?c:a),ur(U,B?u:o),W&&W()},M=(U,B)=>{U._isLeaving=!1,ur(U,f),ur(U,m),ur(U,d),B&&B()},D=U=>(B,W)=>{const Z=U?T:E,Y=()=>x(B,U,W);cr(Z,[B,Y]),Fu(()=>{ur(B,U?l:s),hi(B,U?c:a),Nu(Z)||Ou(B,i,v,Y)})};return Ft(e,{onBeforeEnter(U){cr(h,[U]),hi(U,s),hi(U,o)},onBeforeAppear(U){cr(C,[U]),hi(U,l),hi(U,u)},onEnter:D(!1),onAppear:D(!0),onLeave(U,B){U._isLeaving=!0;const W=()=>M(U,B);hi(U,f),U._enterCancelled?(hi(U,d),zu(U)):(zu(U),hi(U,d)),Fu(()=>{U._isLeaving&&(ur(U,f),hi(U,m),Nu(_)||Ou(U,i,p,W))}),cr(_,[U,W])},onEnterCancelled(U){x(U,!1,void 0,!0),cr(b,[U])},onAppearCancelled(U){x(U,!0,void 0,!0),cr(I,[U])},onLeaveCancelled(U){M(U),cr(P,[U])}})}function Eg(n){if(n==null)return null;if(ht(n))return[Wa(n.enter),Wa(n.leave)];{const e=Wa(n);return[e,e]}}function Wa(n){return Ap(n)}function hi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[io]||(n[io]=new Set)).add(e)}function ur(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[io];t&&(t.delete(e),t.size||(n[io]=void 0))}function Fu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Tg=0;function Ou(n,e,t,i){const r=n._endId=++Tg,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=wg(n,e);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,d),s()},d=m=>{m.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,d)}function wg(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${Hi}Delay`),s=i(`${Hi}Duration`),o=Bu(r,s),a=i(`${Ps}Delay`),l=i(`${Ps}Duration`),u=Bu(a,l);let c=null,f=0,d=0;e===Hi?o>0&&(c=Hi,f=o,d=s.length):e===Ps?u>0&&(c=Ps,f=u,d=l.length):(f=Math.max(o,u),c=f>0?o>u?Hi:Ps:null,d=c?c===Hi?s.length:l.length:0);const m=c===Hi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Hi}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:m}}function Bu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ku(t)+ku(n[i])))}function ku(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function zu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Ag(n,e,t){const i=n[io];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const la=Symbol("_vod"),Sh=Symbol("_vsh"),Ki={name:"show",beforeMount(n,{value:e},{transition:t}){n[la]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ds(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ds(n,!0),i.enter(n)):i.leave(n,()=>{Ds(n,!1)}):Ds(n,e))},beforeUnmount(n,{value:e}){Ds(n,e)}};function Ds(n,e){n.style.display=e?n[la]:"none",n[Sh]=!e}const Cg=Symbol(""),Rg=/(?:^|;)\s*display\s*:/;function Lg(n,e,t){const i=n.style,r=Pt(t);let s=!1;if(t&&!r){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&$o(i,a,"")}else for(const o in e)t[o]==null&&$o(i,o,"");for(const o in t)o==="display"&&(s=!0),$o(i,o,t[o])}else if(r){if(e!==t){const o=i[Cg];o&&(t+=";"+o),i.cssText=t,s=Rg.test(t)}}else e&&n.removeAttribute("style");la in n&&(n[la]=s?i.display:"",n[Sh]&&(i.display="none"))}const Hu=/\s*!important$/;function $o(n,e,t){if(je(t))t.forEach(i=>$o(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Pg(n,e);Hu.test(t)?n.setProperty(or(i),t.replace(Hu,""),"important"):n[i]=t}}const Vu=["Webkit","Moz","ms"],Xa={};function Pg(n,e){const t=Xa[e];if(t)return t;let i=Hn(e);if(i!=="filter"&&i in n)return Xa[e]=i;i=hd(i);for(let r=0;r<Vu.length;r++){const s=Vu[r]+i;if(s in n)return Xa[e]=s}return e}const Gu="http://www.w3.org/1999/xlink";function Wu(n,e,t,i,r,s=Ip(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Gu,e.slice(6,e.length)):n.setAttributeNS(Gu,e,t):t==null||s&&!md(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Wn(t)?String(t):t)}function Xu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?xh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=md(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Zi(n,e,t,i){n.addEventListener(e,t,i)}function Dg(n,e,t,i){n.removeEventListener(e,t,i)}const Yu=Symbol("_vei");function Ig(n,e,t,i,r=null){const s=n[Yu]||(n[Yu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Ug(e);if(i){const u=s[e]=Og(i,r);Zi(n,a,u,l)}else o&&(Dg(n,a,o,l),s[e]=void 0)}}const $u=/(?:Once|Passive|Capture)$/;function Ug(n){let e;if($u.test(n)){e={};let i;for(;i=n.match($u);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):or(n.slice(2)),e]}let Ya=0;const Ng=Promise.resolve(),Fg=()=>Ya||(Ng.then(()=>Ya=0),Ya=Date.now());function Og(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Yn(Bg(i,t.value),e,5,[i])};return t.value=n,t.attached=Fg(),t}function Bg(n,e){if(je(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const qu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,kg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Ag(n,i,o):e==="style"?Lg(n,t,i):_a(e)?xa(e)||Ig(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zg(n,e,i,o))?(Xu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wu(n,e,i,o,s,e!=="value")):n._isVueCE&&(Hg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Pt(i)))?Xu(n,Hn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wu(n,e,i,o))};function zg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&qu(e)&&nt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return qu(e)&&Pt(t)?!1:e in n}function Hg(n,e){const t=n._def.props;if(!t)return!1;const i=Hn(e);return Array.isArray(t)?t.some(r=>Hn(r)===i):Object.keys(t).some(r=>Hn(r)===i)}const fs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return je(e)?t=>Xo(e,t):e};function Vg(n){n.target.composing=!0}function Ku(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ci=Symbol("_assign");function ju(n,e,t){return e&&(n=n.trim()),t&&(n=Sa(n)),n}const yh={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Ci]=fs(r);const s=i||r.props&&r.props.type==="number";Zi(n,e?"change":"input",o=>{o.target.composing||n[Ci](ju(n.value,t,s))}),(t||s)&&Zi(n,"change",()=>{n.value=ju(n.value,t,s)}),e||(Zi(n,"compositionstart",Vg),Zi(n,"compositionend",Ku),Zi(n,"change",Ku))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Ci]=fs(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Sa(n.value):n.value,l=e??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},Vi={deep:!0,created(n,e,t){n[Ci]=fs(t),Zi(n,"change",()=>{const i=n._modelValue,r=ro(n),s=n.checked,o=n[Ci];if(je(i)){const a=zc(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const u=[...i];u.splice(a,1),o(u)}}else if(Ms(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(bh(n,s))})},mounted:Zu,beforeUpdate(n,e,t){n[Ci]=fs(t),Zu(n,e,t)}};function Zu(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(je(e))r=zc(e,i.props.value)>-1;else if(Ms(e))r=e.has(i.props.value);else{if(e===t)return;r=Ss(e,bh(n,!0))}n.checked!==r&&(n.checked=r)}const Gg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Ms(e);Zi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Sa(ro(o)):ro(o));n[Ci](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,un(()=>{n._assigning=!1})}),n[Ci]=fs(i)},mounted(n,{value:e}){Ju(n,e)},beforeUpdate(n,e,t){n[Ci]=fs(t)},updated(n,{value:e}){n._assigning||Ju(n,e)}};function Ju(n,e){const t=n.multiple,i=je(e);if(!(t&&!i&&!Ms(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=ro(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=zc(e,a)>-1}else o.selected=e.has(a);else if(Ss(ro(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ro(n){return"_value"in n?n._value:n.value}function bh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Wg=["ctrl","shift","alt","meta"],Xg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Wg.some(t=>n[`${t}Key`]&&!e.includes(t))},Er=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Xg[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Yg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Qu=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=or(r.key);if(e.some(o=>o===s||Yg[o]===s))return n(r)})},$g=Ft({patchProp:kg},xg);let ef;function qg(){return ef||(ef=Jm($g))}const Kg=(...n)=>{const e=qg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Zg(i);if(!r)return;const s=e._component;!nt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,jg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function jg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Zg(n){return Pt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="170",Jg=0,tf=1,Qg=2,Eh=1,ev=2,Mi=3,Ii=0,vn=1,ri=2,tr=0,as=1,nf=2,rf=3,sf=4,tv=5,yr=100,nv=101,iv=102,rv=103,sv=104,ov=200,av=201,lv=202,cv=203,Xl=204,Yl=205,uv=206,fv=207,dv=208,hv=209,pv=210,mv=211,gv=212,vv=213,_v=214,$l=0,ql=1,Kl=2,ds=3,jl=4,Zl=5,Jl=6,Ql=7,Th=0,xv=1,Mv=2,nr=0,Sv=1,yv=2,bv=3,Ev=4,Tv=5,wv=6,Av=7,wh=300,hs=301,ps=302,ec=303,tc=304,La=306,nc=1e3,Tr=1001,ic=1002,Gn=1003,Cv=1004,xo=1005,Gt=1006,$a=1007,Qi=1008,Ui=1009,Ah=1010,Ch=1011,so=1012,eu=1013,Lr=1014,Ti=1015,co=1016,tu=1017,nu=1018,ms=1020,Rh=35902,Lh=1021,Ph=1022,kn=1023,Dh=1024,Ih=1025,ls=1026,gs=1027,Uh=1028,iu=1029,Nh=1030,ru=1031,su=1033,qo=33776,Ko=33777,jo=33778,Zo=33779,rc=35840,sc=35841,oc=35842,ac=35843,lc=36196,cc=37492,uc=37496,fc=37808,dc=37809,hc=37810,pc=37811,mc=37812,gc=37813,vc=37814,_c=37815,xc=37816,Mc=37817,Sc=37818,yc=37819,bc=37820,Ec=37821,Jo=36492,Tc=36494,wc=36495,Fh=36283,Ac=36284,Cc=36285,Rc=36286,Rv=3200,Lv=3201,Pv=0,Dv=1,Ji="",Rn="srgb",ys="srgb-linear",Pa="linear",vt="srgb",kr=7680,of=519,Iv=512,Uv=513,Nv=514,Oh=515,Fv=516,Ov=517,Bv=518,kv=519,af=35044,lf="300 es",wi=2e3,ca=2001;class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qa=Math.PI/180,Lc=180/Math.PI;function uo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function gn(n,e,t){return Math.max(e,Math.min(t,n))}function zv(n,e){return(n%e+e)%e}function Ka(n,e,t){return(1-t)*n+t*e}function Is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,r,s,o,a,l,u){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],m=i[5],g=i[8],v=r[0],p=r[3],h=r[6],E=r[1],b=r[4],_=r[7],P=r[2],C=r[5],T=r[8];return s[0]=o*v+a*E+l*P,s[3]=o*p+a*b+l*C,s[6]=o*h+a*_+l*T,s[1]=u*v+c*E+f*P,s[4]=u*p+c*b+f*C,s[7]=u*h+c*_+f*T,s[2]=d*v+m*E+g*P,s[5]=d*p+m*b+g*C,s[8]=d*h+m*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,m=u*s-o*l,g=t*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new rt;function Bh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hv(){const n=ua("canvas");return n.style.display="block",n}const cf={};function Hs(n){n in cf||(cf[n]=!0,console.warn(n))}function Vv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Gv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const at={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(n.r=Ri(n.r),n.g=Ri(n.g),n.b=Ri(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?Pa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const uf=[.64,.33,.3,.6,.15,.06],ff=[.2126,.7152,.0722],df=[.3127,.329],hf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pf=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);at.define({[ys]:{primaries:uf,whitePoint:df,transfer:Pa,toXYZ:hf,fromXYZ:pf,luminanceCoefficients:ff,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:uf,whitePoint:df,transfer:vt,toXYZ:hf,fromXYZ:pf,luminanceCoefficients:ff,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}});let zr;class Xv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zr===void 0&&(zr=ua("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yv=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Za(r[o].image)):s.push(Za(r[o]))}else s=Za(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $v=0;class fn extends bs{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Tr,r=Tr,s=Gt,o=Qi,a=kn,l=Ui,u=fn.DEFAULT_ANISOTROPY,c=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=uo(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=wh;fn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,_=(m+1)/2,P=(h+1)/2,C=(c+d)/4,T=(f+v)/4,I=(g+p)/4;return b>_&&b>P?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=C/i,s=T/i):_>P?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=I/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=I/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(f-v)/E,this.z=(d-c)/E,this.w=Math.acos((u+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qv extends bs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends qv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zh extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kv extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||u!==m||c!==g){let p=1-a;const h=l*d+u*m+c*g+f*v,E=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const P=Math.sqrt(b),C=Math.atan2(P,h*E);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}const _=a*E;if(l=l*p+d*_,u=u*p+m*_,c=c*p+g*_,f=f*p+v*_,p===1-a){const P=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=P,u*=P,c*=P,f*=P}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*m-u*d,e[t+1]=l*g+c*d+u*f-a*m,e[t+2]=u*g+c*m+a*d-l*f,e[t+3]=c*g-a*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*m*g,this._y=u*m*f-d*c*g,this._z=u*c*g+d*m*f,this._w=u*c*f-d*m*g;break;case"YXZ":this._x=d*c*f+u*m*g,this._y=u*m*f-d*c*g,this._z=u*c*g-d*m*f,this._w=u*c*f+d*m*g;break;case"ZXY":this._x=d*c*f-u*m*g,this._y=u*m*f+d*c*g,this._z=u*c*g+d*m*f,this._w=u*c*f-d*m*g;break;case"ZYX":this._x=d*c*f-u*m*g,this._y=u*m*f+d*c*g,this._z=u*c*g-d*m*f,this._w=u*c*f+d*m*g;break;case"YZX":this._x=d*c*f+u*m*g,this._y=u*m*f+d*c*g,this._z=u*c*g-d*m*f,this._w=u*c*f-d*m*g;break;case"XZY":this._x=d*c*f-u*m*g,this._y=u*m*f-d*c*g,this._z=u*c*g+d*m*f,this._w=u*c*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,i=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new ue,mf=new fo;class ho{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),So.subVectors(this.max,Us),Hr.subVectors(e.a,Us),Vr.subVectors(e.b,Us),Gr.subVectors(e.c,Us),Gi.subVectors(Vr,Hr),Wi.subVectors(Gr,Vr),fr.subVectors(Hr,Gr);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-fr.z,fr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,fr.z,0,-fr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-fr.y,fr.x,0];return!Qa(t,Hr,Vr,Gr,So)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Hr,Vr,Gr,So))?!1:(yo.crossVectors(Gi,Wi),t=[yo.x,yo.y,yo.z],Qa(t,Hr,Vr,Gr,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Un=new ue,Mo=new ho,Hr=new ue,Vr=new ue,Gr=new ue,Gi=new ue,Wi=new ue,fr=new ue,Us=new ue,So=new ue,yo=new ue,dr=new ue;function Qa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){dr.fromArray(n,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),u=t.dot(dr),c=i.dot(dr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const jv=new ho,Ns=new ue,el=new ue;class ou{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(el)),this.expandByPoint(Ns.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new ue,tl=new ue,bo=new ue,Xi=new ue,nl=new ue,Eo=new ue,il=new ue;class Zv{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){tl.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(tl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=Xi.dot(this.direction),l=-Xi.dot(bo),u=Xi.lengthSq(),c=Math.abs(1-o*o);let f,d,m,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const v=1/c;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tl).addScaledVector(bo,d),m}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,r,s){nl.subVectors(t,e),Eo.subVectors(i,e),il.crossVectors(nl,Eo);let o=this.direction.dot(il),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(Eo.crossVectors(Xi,Eo));if(l<0)return null;const u=a*this.direction.dot(nl.cross(Xi));if(u<0||l+u>o)return null;const c=-a*Xi.dot(il);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,r,s,o,a,l,u,c,f,d,m,g,v,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,m,g,v,p)}set(e,t,i,r,s,o,a,l,u,c,f,d,m,g,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*f,g=a*c,v=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+g*u,t[5]=d-v*u,t[9]=-a*l,t[2]=v-d*u,t[6]=g+m*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,g=u*c,v=u*f;t[0]=d+v*a,t[4]=g*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,g=u*c,v=u*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*c,t[9]=v-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*f,g=a*c,v=a*f;t[0]=l*c,t[4]=g*u-m,t[8]=d*u+v,t[1]=l*f,t[5]=v*u+d,t[9]=m*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=v-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,m=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+v,t[5]=o*c,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*c,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jv,e,Qv)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Yi.crossVectors(i,xn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Yi.crossVectors(i,xn)),Yi.normalize(),To.crossVectors(xn,Yi),r[0]=Yi.x,r[4]=To.x,r[8]=xn.x,r[1]=Yi.y,r[5]=To.y,r[9]=xn.y,r[2]=Yi.z,r[6]=To.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],h=i[14],E=i[3],b=i[7],_=i[11],P=i[15],C=r[0],T=r[4],I=r[8],x=r[12],M=r[1],D=r[5],U=r[9],B=r[13],W=r[2],Z=r[6],Y=r[10],J=r[14],H=r[3],ee=r[7],O=r[11],$=r[15];return s[0]=o*C+a*M+l*W+u*H,s[4]=o*T+a*D+l*Z+u*ee,s[8]=o*I+a*U+l*Y+u*O,s[12]=o*x+a*B+l*J+u*$,s[1]=c*C+f*M+d*W+m*H,s[5]=c*T+f*D+d*Z+m*ee,s[9]=c*I+f*U+d*Y+m*O,s[13]=c*x+f*B+d*J+m*$,s[2]=g*C+v*M+p*W+h*H,s[6]=g*T+v*D+p*Z+h*ee,s[10]=g*I+v*U+p*Y+h*O,s[14]=g*x+v*B+p*J+h*$,s[3]=E*C+b*M+_*W+P*H,s[7]=E*T+b*D+_*Z+P*ee,s[11]=E*I+b*U+_*Y+P*O,s[15]=E*x+b*B+_*J+P*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15];return g*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*m-i*l*m)+v*(+t*l*m-t*u*d+s*o*d-r*o*m+r*u*c-s*l*c)+p*(+t*u*f-t*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+h*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],E=f*p*u-v*d*u+v*l*m-a*p*m-f*l*h+a*d*h,b=g*d*u-c*p*u-g*l*m+o*p*m+c*l*h-o*d*h,_=c*v*u-g*f*u+g*a*m-o*v*m-c*a*h+o*f*h,P=g*f*l-c*v*l-g*a*d+o*v*d+c*a*p-o*f*p,C=t*E+i*b+r*_+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=E*T,e[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*h-i*d*h)*T,e[2]=(a*p*s-v*l*s+v*r*u-i*p*u-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*m-i*l*m)*T,e[4]=b*T,e[5]=(c*p*s-g*d*s+g*r*m-t*p*m-c*r*h+t*d*h)*T,e[6]=(g*l*s-o*p*s-g*r*u+t*p*u+o*r*h-t*l*h)*T,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*m+t*l*m)*T,e[8]=_*T,e[9]=(g*f*s-c*v*s-g*i*m+t*v*m+c*i*h-t*f*h)*T,e[10]=(o*v*s-g*a*s+g*i*u-t*v*u-o*i*h+t*a*h)*T,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*m-t*a*m)*T,e[12]=P*T,e[13]=(c*v*r-g*f*r+g*i*d-t*v*d-c*i*p+t*f*p)*T,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*p-t*a*p)*T,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,m=s*c,g=s*f,v=o*c,p=o*f,h=a*f,E=l*u,b=l*c,_=l*f,P=i.x,C=i.y,T=i.z;return r[0]=(1-(v+h))*P,r[1]=(m+_)*P,r[2]=(g-b)*P,r[3]=0,r[4]=(m-_)*C,r[5]=(1-(d+h))*C,r[6]=(p+E)*C,r[7]=0,r[8]=(g+b)*T,r[9]=(p-E)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Wr.set(r[0],r[1],r[2]).length();const o=Wr.set(r[4],r[5],r[6]).length(),a=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,c=1/o,f=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=c,Nn.elements[5]*=c,Nn.elements[6]*=c,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,t.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=wi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(a===wi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ca)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=wi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),d=(t+e)*u,m=(i+r)*c;let g,v;if(a===wi)g=(o+s)*f,v=-2*f;else if(a===ca)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wr=new ue,Nn=new It,Jv=new ue(0,0,0),Qv=new ue(1,1,1),Yi=new ue,To=new ue,xn=new ue,gf=new It,vf=new fo;class Ni{constructor(e=0,t=0,i=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vf.setFromEuler(this),this.setFromQuaternion(vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e_=0;const _f=new ue,Xr=new fo,gi=new It,wo=new ue,Fs=new ue,t_=new ue,n_=new fo,xf=new ue(1,0,0),Mf=new ue(0,1,0),Sf=new ue(0,0,1),yf={type:"added"},i_={type:"removed"},Yr={type:"childadded",child:null},rl={type:"childremoved",child:null};class bn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new ue,t=new Ni,i=new fo,r=new ue(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new rt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(xf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,t){return _f.copy(e).applyQuaternion(this.quaternion),this.position.add(_f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wo.copy(e):wo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Fs,wo,this.up):gi.lookAt(wo,Fs,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(gi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yf),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i_),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yf),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,t_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,n_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bn.DEFAULT_UP=new ue(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new ue,vi=new ue,sl=new ue,_i=new ue,$r=new ue,qr=new ue,bf=new ue,ol=new ue,al=new ue,ll=new ue,cl=new Lt,ul=new Lt,fl=new Lt;class Bn{constructor(e=new ue,t=new ue,i=new ue){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Fn.subVectors(e,t),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Fn.subVectors(r,t),vi.subVectors(i,t),sl.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(vi),l=Fn.dot(sl),u=vi.dot(vi),c=vi.dot(sl),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return cl.setScalar(0),ul.setScalar(0),fl.setScalar(0),cl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,i),fl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(cl,s.x),o.addScaledVector(ul,s.y),o.addScaledVector(fl,s.z),o}static isFrontFacing(e,t,i,r){return Fn.subVectors(i,t),vi.subVectors(e,t),Fn.cross(vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Fn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),qr.subVectors(s,i),ol.subVectors(e,i);const l=$r.dot(ol),u=qr.dot(ol);if(l<=0&&u<=0)return t.copy(i);al.subVectors(e,r);const c=$r.dot(al),f=qr.dot(al);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector($r,o);ll.subVectors(e,s);const m=$r.dot(ll),g=qr.dot(ll);if(g>=0&&m<=g)return t.copy(s);const v=m*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(qr,a);const p=c*g-m*f;if(p<=0&&f-c>=0&&m-g>=0)return bf.subVectors(s,r),a=(f-c)/(f-c+(m-g)),t.copy(r).addScaledVector(bf,a);const h=1/(p+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector($r,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=zv(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=dl(o,s,e+1/3),this.g=dl(o,s,e),this.b=dl(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const i=Vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return at.fromWorkingColorSpace(Kt.copy(this),e),Math.round(gn(Kt.r*255,0,255))*65536+Math.round(gn(Kt.g*255,0,255))*256+Math.round(gn(Kt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Rn){at.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Ao);const i=Ka($i.h,Ao.h,t),r=Ka($i.s,Ao.s,t),s=Ka($i.l,Ao.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new pt;pt.NAMES=Vh;let r_=0;class Da extends bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=uo(),this.name="",this.blending=as,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=Yl,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xl&&(i.blendSrc=this.blendSrc),this.blendDst!==Yl&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==of&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gh extends Da{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new ue,Co=new _t;class oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=af,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==af&&(e.usage=this.usage),e}}class Wh extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xh extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Cr extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let s_=0;const Cn=new It,hl=new bn,Kr=new ue,Mn=new ho,Os=new ho,zt=new ue;class Ir extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bh(e)?Xh:Wh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Cr(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Mn.min,Os.min),Mn.expandByPoint(zt),zt.addVectors(Mn.max,Os.max),Mn.expandByPoint(zt)):(Mn.expandByPoint(Os.min),Mn.expandByPoint(Os.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)zt.fromBufferAttribute(a,u),l&&(Kr.fromBufferAttribute(e,u),zt.add(Kr)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new ue,l[I]=new ue;const u=new ue,c=new ue,f=new ue,d=new _t,m=new _t,g=new _t,v=new ue,p=new ue;function h(I,x,M){u.fromBufferAttribute(i,I),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),c.sub(u),f.sub(u),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(D),a[I].add(v),a[x].add(v),a[M].add(v),l[I].add(p),l[x].add(p),l[M].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,x=E.length;I<x;++I){const M=E[I],D=M.start,U=M.count;for(let B=D,W=D+U;B<W;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new ue,_=new ue,P=new ue,C=new ue;function T(I){P.fromBufferAttribute(r,I),C.copy(P);const x=a[I];b.copy(x),b.sub(P.multiplyScalar(P.dot(x))).normalize(),_.crossVectors(C,x);const D=_.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,D)}for(let I=0,x=E.length;I<x;++I){const M=E[I],D=M.start,U=M.count;for(let B=D,W=D+U;B<W;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new ue,s=new ue,o=new ue,a=new ue,l=new ue,u=new ue,c=new ue,f=new ue;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*c;for(let h=0;h<c;h++)d[g++]=u[m++]}return new oi(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ir,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ef=new It,hr=new Zv,Ro=new ou,Tf=new ue,Lo=new ue,Po=new ue,Do=new ue,pl=new ue,Io=new ue,wf=new ue,Uo=new ue;class cn extends bn{constructor(e=new Ir,t=new Gh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Io.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(pl.fromBufferAttribute(f,e),o?Io.addScaledVector(pl,c):Io.addScaledVector(pl.sub(t),c))}t.add(Io)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Ro.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Ro,Tf)===null||hr.origin.distanceToSquared(Tf)>(e.far-e.near)**2))&&(Ef.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Ef),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=E,P=b;_<P;_+=3){const C=a.getX(_),T=a.getX(_+1),I=a.getX(_+2);r=No(this,h,e,i,u,c,f,C,T,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const E=a.getX(p),b=a.getX(p+1),_=a.getX(p+2);r=No(this,o,e,i,u,c,f,E,b,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=E,P=b;_<P;_+=3){const C=_,T=_+1,I=_+2;r=No(this,h,e,i,u,c,f,C,T,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const E=p,b=p+1,_=p+2;r=No(this,o,e,i,u,c,f,E,b,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function o_(n,e,t,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ii,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Uo);return u<t.near||u>t.far?null:{distance:u,point:Uo.clone(),object:n}}function No(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Lo),n.getVertexPosition(l,Po),n.getVertexPosition(u,Do);const c=o_(n,e,t,i,Lo,Po,Do,wf);if(c){const f=new ue;Bn.getBarycoord(wf,Lo,Po,Do,f),r&&(c.uv=Bn.getInterpolatedAttribute(r,a,l,u,f,new _t)),s&&(c.uv1=Bn.getInterpolatedAttribute(s,a,l,u,f,new _t)),o&&(c.normal=Bn.getInterpolatedAttribute(o,a,l,u,f,new ue),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new ue,materialIndex:0};Bn.getNormal(Lo,Po,Do,d.normal),c.face=d,c.barycoord=f}return c}class po extends Ir{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cr(u,3)),this.setAttribute("normal",new Cr(c,3)),this.setAttribute("uv",new Cr(f,2));function g(v,p,h,E,b,_,P,C,T,I,x){const M=_/T,D=P/I,U=_/2,B=P/2,W=C/2,Z=T+1,Y=I+1;let J=0,H=0;const ee=new ue;for(let O=0;O<Y;O++){const $=O*D-B;for(let q=0;q<Z;q++){const fe=q*M-U;ee[v]=fe*E,ee[p]=$*b,ee[h]=W,u.push(ee.x,ee.y,ee.z),ee[v]=0,ee[p]=0,ee[h]=C>0?1:-1,c.push(ee.x,ee.y,ee.z),f.push(q/T),f.push(1-O/I),J+=1}}for(let O=0;O<I;O++)for(let $=0;$<T;$++){const q=d+$+Z*O,fe=d+$+Z*(O+1),Q=d+($+1)+Z*(O+1),he=d+($+1)+Z*O;l.push(q,fe,he),l.push(fe,Q,he),H+=6}a.addGroup(m,H,x),m+=H,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=vs(n[t]);for(const r in i)e[r]=i[r]}return e}function a_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const l_={clone:vs,merge:nn};var c_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Da{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c_,this.fragmentShader=u_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=a_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $h extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new ue,Af=new _t,Cf=new _t;class On extends $h{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Af,Cf),t.subVectors(Cf,Af)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jr=-90,Zr=1;class f_ extends bn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(jr,Zr,e,t);r.layers=this.layers,this.add(r);const s=new On(jr,Zr,e,t);s.layers=this.layers,this.add(s);const o=new On(jr,Zr,e,t);o.layers=this.layers,this.add(o);const a=new On(jr,Zr,e,t);a.layers=this.layers,this.add(a);const l=new On(jr,Zr,e,t);l.layers=this.layers,this.add(l);const u=new On(jr,Zr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qh extends fn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:hs,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class d_ extends Pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new po(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:tr});s.uniforms.tEquirect.value=t;const o=new cn(r,s),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Gt),new f_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ml=new ue,h_=new ue,p_=new rt;class _r{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ml.subVectors(i,t).cross(h_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||p_.getNormalMatrix(e),r=this.coplanarPoint(ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new ou,Fo=new ue;class Kh{constructor(e=new _r,t=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],m=r[8],g=r[9],v=r[10],p=r[11],h=r[12],E=r[13],b=r[14],_=r[15];if(i[0].setComponents(l-s,d-u,p-m,_-h).normalize(),i[1].setComponents(l+s,d+u,p+m,_+h).normalize(),i[2].setComponents(l+o,d+c,p+g,_+E).normalize(),i[3].setComponents(l-o,d-c,p-g,_-E).normalize(),i[4].setComponents(l-a,d-f,p-v,_-b).normalize(),t===wi)i[5].setComponents(l+a,d+f,p+v,_+b).normalize();else if(t===ca)i[5].setComponents(a,f,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function m_(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class li extends Ir{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,m=[],g=[],v=[],p=[];for(let h=0;h<c;h++){const E=h*d-o;for(let b=0;b<u;b++){const _=b*f-s;g.push(_,-E,0),v.push(0,0,1),p.push(b/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){const b=E+u*h,_=E+u*(h+1),P=E+1+u*(h+1),C=E+1+u*h;m.push(b,_,C),m.push(_,P,C)}this.setIndex(m),this.setAttribute("position",new Cr(g,3)),this.setAttribute("normal",new Cr(v,3)),this.setAttribute("uv",new Cr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.widthSegments,e.heightSegments)}}var g_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v_=`#ifdef USE_ALPHAHASH
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
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y_=`#ifdef USE_AOMAP
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
#endif`,b_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E_=`#ifdef USE_BATCHING
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
#endif`,T_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R_=`#ifdef USE_IRIDESCENCE
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
#endif`,L_=`#ifdef USE_BUMPMAP
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
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,k_=`#define PI 3.141592653589793
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
} // validated`,z_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H_=`vec3 transformedNormal = objectNormal;
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
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
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
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
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
#endif`,p0=`struct PhysicalMaterial {
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
}`,m0=`
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
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
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ex=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,yx=`#if DEPTH_PACKING == 3200
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
}`,bx=`#define DISTANCE
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
}`,Ex=`#define DISTANCE
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`uniform float scale;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Px=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Ix=`#define MATCAP
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
}`,Ux=`#define MATCAP
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
}`,Nx=`#define NORMAL
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
}`,Fx=`#define NORMAL
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
}`,Ox=`#define PHONG
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
}`,Bx=`#define PHONG
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
}`,kx=`#define STANDARD
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
}`,zx=`#define STANDARD
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
}`,Hx=`#define TOON
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
}`,Vx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,Yx=`uniform vec3 color;
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
}`,$x=`uniform float rotation;
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
}`,qx=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:g_,alphahash_pars_fragment:v_,alphamap_fragment:__,alphamap_pars_fragment:x_,alphatest_fragment:M_,alphatest_pars_fragment:S_,aomap_fragment:y_,aomap_pars_fragment:b_,batching_pars_vertex:E_,batching_vertex:T_,begin_vertex:w_,beginnormal_vertex:A_,bsdfs:C_,iridescence_fragment:R_,bumpmap_pars_fragment:L_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:D_,clipping_planes_pars_vertex:I_,clipping_planes_vertex:U_,color_fragment:N_,color_pars_fragment:F_,color_pars_vertex:O_,color_vertex:B_,common:k_,cube_uv_reflection_fragment:z_,defaultnormal_vertex:H_,displacementmap_pars_vertex:V_,displacementmap_vertex:G_,emissivemap_fragment:W_,emissivemap_pars_fragment:X_,colorspace_fragment:Y_,colorspace_pars_fragment:$_,envmap_fragment:q_,envmap_common_pars_fragment:K_,envmap_pars_fragment:j_,envmap_pars_vertex:Z_,envmap_physical_pars_fragment:l0,envmap_vertex:J_,fog_vertex:Q_,fog_pars_vertex:e0,fog_fragment:t0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:r0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:o0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:u0,lights_phong_fragment:f0,lights_phong_pars_fragment:d0,lights_physical_fragment:h0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:v0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:S0,map_fragment:y0,map_pars_fragment:b0,map_particle_fragment:E0,map_particle_pars_fragment:T0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:A0,morphinstance_vertex:C0,morphcolor_vertex:R0,morphnormal_vertex:L0,morphtarget_pars_vertex:P0,morphtarget_vertex:D0,normal_fragment_begin:I0,normal_fragment_maps:U0,normal_pars_fragment:N0,normal_pars_vertex:F0,normal_vertex:O0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:V0,opaque_fragment:G0,packing:W0,premultiplied_alpha_fragment:X0,project_vertex:Y0,dithering_fragment:$0,dithering_pars_fragment:q0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:J0,shadowmap_vertex:Q0,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:rx,specularmap_fragment:sx,specularmap_pars_fragment:ox,tonemapping_fragment:ax,tonemapping_pars_fragment:lx,transmission_fragment:cx,transmission_pars_fragment:ux,uv_pars_fragment:fx,uv_pars_vertex:dx,uv_vertex:hx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:vx,backgroundCube_frag:_x,cube_vert:xx,cube_frag:Mx,depth_vert:Sx,depth_frag:yx,distanceRGBA_vert:bx,distanceRGBA_frag:Ex,equirect_vert:Tx,equirect_frag:wx,linedashed_vert:Ax,linedashed_frag:Cx,meshbasic_vert:Rx,meshbasic_frag:Lx,meshlambert_vert:Px,meshlambert_frag:Dx,meshmatcap_vert:Ix,meshmatcap_frag:Ux,meshnormal_vert:Nx,meshnormal_frag:Fx,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:kx,meshphysical_frag:zx,meshtoon_vert:Hx,meshtoon_frag:Vx,points_vert:Gx,points_frag:Wx,shadow_vert:Xx,shadow_frag:Yx,sprite_vert:$x,sprite_frag:qx},Ne={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ni={basic:{uniforms:nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new pt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:nn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:nn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new pt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:nn([Ne.points,Ne.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:nn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:nn([Ne.common,Ne.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:nn([Ne.sprite,Ne.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:nn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:nn([Ne.lights,Ne.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ni.physical={uniforms:nn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Oo={r:0,b:0,g:0},mr=new Ni,Kx=new It;function jx(n,e,t,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,u,c,f=null,d=0,m=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function v(E){let b=!1;const _=g(E);_===null?h(a,l):_&&_.isColor&&(h(_,1),b=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,b){const _=g(b);_&&(_.isCubeTexture||_.mapping===La)?(c===void 0&&(c=new cn(new po(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:vs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),mr.copy(b.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(mr)),c.material.toneMapped=at.getTransfer(_.colorSpace)!==vt,(f!==_||d!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new cn(new li(2,2),new $n({name:"BackgroundMaterial",uniforms:vs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=at.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function h(E,b){E.getRGB(Oo,Yh(n)),i.buffers.color.setClear(Oo.r,Oo.g,Oo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:v,addToRenderList:p}}function Zx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,D,U,B,W){let Z=!1;const Y=f(B,U,D);s!==Y&&(s=Y,u(s.object)),Z=m(M,B,U,W),Z&&g(M,B,U,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(M,D,U,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function f(M,D,U){const B=U.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Z=W[D.id];Z===void 0&&(Z={},W[D.id]=Z);let Y=Z[B];return Y===void 0&&(Y=d(l()),Z[B]=Y),Y}function d(M){const D=[],U=[],B=[];for(let W=0;W<t;W++)D[W]=0,U[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:B,object:M,attributes:{},index:null}}function m(M,D,U,B){const W=s.attributes,Z=D.attributes;let Y=0;const J=U.getAttributes();for(const H in J)if(J[H].location>=0){const O=W[H];let $=Z[H];if($===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),O===void 0||O.attribute!==$||$&&O.data!==$.data)return!0;Y++}return s.attributesNum!==Y||s.index!==B}function g(M,D,U,B){const W={},Z=D.attributes;let Y=0;const J=U.getAttributes();for(const H in J)if(J[H].location>=0){let O=Z[H];O===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(O=M.instanceColor));const $={};$.attribute=O,O&&O.data&&($.data=O.data),W[H]=$,Y++}s.attributes=W,s.attributesNum=Y,s.index=B}function v(){const M=s.newAttributes;for(let D=0,U=M.length;D<U;D++)M[D]=0}function p(M){h(M,0)}function h(M,D){const U=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;U[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),W[M]!==D&&(n.vertexAttribDivisor(M,D),W[M]=D)}function E(){const M=s.newAttributes,D=s.enabledAttributes;for(let U=0,B=D.length;U<B;U++)D[U]!==M[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function b(M,D,U,B,W,Z,Y){Y===!0?n.vertexAttribIPointer(M,D,U,W,Z):n.vertexAttribPointer(M,D,U,B,W,Z)}function _(M,D,U,B){v();const W=B.attributes,Z=U.getAttributes(),Y=D.defaultAttributeValues;for(const J in Z){const H=Z[J];if(H.location>=0){let ee=W[J];if(ee===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const O=ee.normalized,$=ee.itemSize,q=e.get(ee);if(q===void 0)continue;const fe=q.buffer,Q=q.type,he=q.bytesPerElement,_e=Q===n.INT||Q===n.UNSIGNED_INT||ee.gpuType===eu;if(ee.isInterleavedBufferAttribute){const ve=ee.data,Be=ve.stride,ze=ee.offset;if(ve.isInstancedInterleavedBuffer){for(let He=0;He<H.locationSize;He++)h(H.location+He,ve.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let He=0;He<H.locationSize;He++)p(H.location+He);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let He=0;He<H.locationSize;He++)b(H.location+He,$/H.locationSize,Q,O,Be*he,(ze+$/H.locationSize*He)*he,_e)}else{if(ee.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)h(H.location+ve,ee.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<H.locationSize;ve++)p(H.location+ve);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let ve=0;ve<H.locationSize;ve++)b(H.location+ve,$/H.locationSize,Q,O,$*he,$/H.locationSize*ve*he,_e)}}else if(Y!==void 0){const O=Y[J];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(H.location,O);break;case 3:n.vertexAttrib3fv(H.location,O);break;case 4:n.vertexAttrib4fv(H.location,O);break;default:n.vertexAttrib1fv(H.location,O)}}}}E()}function P(){I();for(const M in i){const D=i[M];for(const U in D){const B=D[U];for(const W in B)c(B[W].object),delete B[W];delete D[U]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const U in D){const B=D[U];for(const W in B)c(B[W].object),delete B[W];delete D[U]}delete i[M.id]}function T(M){for(const D in i){const U=i[D];if(U[M.id]===void 0)continue;const B=U[M.id];for(const W in B)c(B[W].object),delete B[W];delete U[M.id]}}function I(){x(),o=!0,s!==r&&(s=r,u(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function Jx(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g];t.update(m,i,1)}function l(u,c,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=c[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==kn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ui&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ti&&!I)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:P,maxSamples:C}}function eM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new _r,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?c(null):u();else{const E=s?0:i,b=E*4;let _=h.clippingState||null;l.value=_,_=c(g,d,b,m);for(let P=0;P!==b;++P)_[P]=t[P];h.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const h=m+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,_=m;b!==v;++b,_+=4)o.copy(f[b]).applyMatrix4(E,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function tM(n){let e=new WeakMap;function t(o,a){return a===ec?o.mapping=hs:a===tc&&(o.mapping=ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ec||a===tc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new d_(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ur extends $h{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,Rf=[.125,.215,.35,.446,.526,.582],br=20,gl=new Ur,Lf=new pt;let vl=null,_l=0,xl=0,Ml=!1;const xr=(1+Math.sqrt(5))/2,Jr=1/xr,Pf=[new ue(-xr,Jr,0),new ue(xr,Jr,0),new ue(-Jr,0,xr),new ue(Jr,0,xr),new ue(0,xr,-Jr),new ue(0,xr,Jr),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)];class Df{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,_l,xl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:co,format:kn,colorSpace:ys,depthBuffer:!1},r=If(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nM(s)),this._blurMaterial=iM(s,e,t)}return r}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,i,r){const a=new On(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Lf),c.toneMapping=nr,c.autoClear=!1;const m=new Gh({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new cn(new po,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Lf),v=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):E===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const b=this._cubeSize;Bo(r,E*b,h>2?b:0,b,b),c.setRenderTarget(r),v&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===hs||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,gl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pf[(r-s-1)%Pf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new cn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*br-1),v=s/g,p=isFinite(s)?1+Math.floor(c*v):br;p>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);const h=[];let E=0;for(let T=0;T<br;++T){const I=T/v,x=Math.exp(-I*I/2);h.push(x),T===0?E+=x:T<p&&(E+=2*x)}for(let T=0;T<h.length;T++)h[T]=h[T]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const _=this._sizeLods[r],P=3*_*(r>b-es?r-b+es:0),C=4*(this._cubeSize-_);Bo(t,P,C,3*_,2*_),l.setRenderTarget(t),l.render(f,gl)}}function nM(n){const e=[],t=[],i=[];let r=n;const s=n-es+1+Rf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-es?l=Rf[o-n+es-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,v=3,p=2,h=1,E=new Float32Array(v*g*m),b=new Float32Array(p*g*m),_=new Float32Array(h*g*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,I=C>2?0:-1,x=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];E.set(x,v*g*C),b.set(d,p*g*C);const M=[C,C,C,C,C,C];_.set(M,h*g*C)}const P=new Ir;P.setAttribute("position",new oi(E,v)),P.setAttribute("uv",new oi(b,p)),P.setAttribute("faceIndex",new oi(_,h)),e.push(P),r>es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function If(n,e,t){const i=new Pr(n,e,t);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iM(n,e,t){const i=new Float32Array(br),r=new ue(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:au(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Uf(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Nf(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function rM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ec||l===tc,c=l===hs||l===ps;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Df(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&r(m)?(t===null&&(t=new Df(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Hs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oM(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function u(f){const d=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let b=0,_=E.length;b<_;b+=3){const P=E[b+0],C=E[b+1],T=E[b+2];d.push(P,C,C,T,T,P)}}else if(g!==void 0){const E=g.array;v=g.version;for(let b=0,_=E.length/3-1;b<_;b+=3){const P=b+0,C=b+1,T=b+2;d.push(P,C,C,T,T,P)}}else return;const p=new(Bh(d)?Xh:Wh)(d,1);p.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function aM(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*o),t.update(m,i,1)}function u(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*o,g),t.update(m,i,g))}function c(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function f(d,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)u(d[h]/o,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,g);let h=0;for(let E=0;E<g;E++)h+=m[E]*v[E];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function lM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cM(n,e,t){const i=new WeakMap,r=new Lt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let P=a.attributes.position.count*_,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*C*4*f),I=new zh(T,P,C,f);I.type=Ti,I.needsUpdate=!0;const x=_*4;for(let D=0;D<f;D++){const U=h[D],B=E[D],W=b[D],Z=P*C*4*D;for(let Y=0;Y<U.count;Y++){const J=Y*x;g===!0&&(r.fromBufferAttribute(U,Y),T[Z+J+0]=r.x,T[Z+J+1]=r.y,T[Z+J+2]=r.z,T[Z+J+3]=0),v===!0&&(r.fromBufferAttribute(B,Y),T[Z+J+4]=r.x,T[Z+J+5]=r.y,T[Z+J+6]=r.z,T[Z+J+7]=0),p===!0&&(r.fromBufferAttribute(W,Y),T[Z+J+8]=r.x,T[Z+J+9]=r.y,T[Z+J+10]=r.z,T[Z+J+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new _t(P,C)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<u.length;p++)g+=u[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function uM(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Zh extends fn{constructor(e,t,i,r,s,o,a,l,u,c=ls){if(c!==ls&&c!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ls&&(i=Lr),i===void 0&&c===gs&&(i=ms),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jh=new fn,Ff=new Zh(1,1),Qh=new zh,ep=new Kv,tp=new qh,Of=[],Bf=[],kf=new Float32Array(16),zf=new Float32Array(9),Hf=new Float32Array(4);function Es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Of[r];if(s===void 0&&(s=new Float32Array(r),Of[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Hf.set(i),n.uniformMatrix2fv(this.addr,!1,Hf),Bt(t,i)}}function gM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;zf.set(i),n.uniformMatrix3fv(this.addr,!1,zf),Bt(t,i)}}function vM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;kf.set(i),n.uniformMatrix4fv(this.addr,!1,kf),Bt(t,i)}}function _M(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function wM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ff.compareFunction=Oh,s=Ff):s=Jh,t.setTexture2D(e||s,r)}function AM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ep,r)}function CM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tp,r)}function RM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qh,r)}function LM(n){switch(n){case 5126:return fM;case 35664:return dM;case 35665:return hM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return vM;case 5124:case 35670:return _M;case 35667:case 35671:return xM;case 35668:case 35672:return MM;case 35669:case 35673:return SM;case 5125:return yM;case 36294:return bM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return RM}}function PM(n,e){n.uniform1fv(this.addr,e)}function DM(n,e){const t=Es(e,this.size,2);n.uniform2fv(this.addr,t)}function IM(n,e){const t=Es(e,this.size,3);n.uniform3fv(this.addr,t)}function UM(n,e){const t=Es(e,this.size,4);n.uniform4fv(this.addr,t)}function NM(n,e){const t=Es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FM(n,e){const t=Es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OM(n,e){const t=Es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BM(n,e){n.uniform1iv(this.addr,e)}function kM(n,e){n.uniform2iv(this.addr,e)}function zM(n,e){n.uniform3iv(this.addr,e)}function HM(n,e){n.uniform4iv(this.addr,e)}function VM(n,e){n.uniform1uiv(this.addr,e)}function GM(n,e){n.uniform2uiv(this.addr,e)}function WM(n,e){n.uniform3uiv(this.addr,e)}function XM(n,e){n.uniform4uiv(this.addr,e)}function YM(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jh,s[o])}function $M(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ep,s[o])}function qM(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tp,s[o])}function KM(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qh,s[o])}function jM(n){switch(n){case 5126:return PM;case 35664:return DM;case 35665:return IM;case 35666:return UM;case 35674:return NM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return BM;case 35667:case 35671:return kM;case 35668:case 35672:return zM;case 35669:case 35673:return HM;case 5125:return VM;case 36294:return GM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return KM}}class ZM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LM(t.type)}}class JM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jM(t.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function Vf(n,e){n.seq.push(e),n.map[e.id]=e}function eS(n,e,t){const i=n.name,r=i.length;for(Sl.lastIndex=0;;){const s=Sl.exec(i),o=Sl.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Vf(t,u===void 0?new ZM(a,n,e):new JM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new QM(a),Vf(t,f)),t=f}}}class Qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);eS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tS=37297;let nS=0;function iS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Wf=new rt;function rS(n){at._getMatrix(Wf,at.workingColorSpace,n);const e=`mat3( ${Wf.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Pa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+iS(n.getShaderSource(e),o)}else return r}function sS(n,e){const t=rS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oS(n,e){let t;switch(e){case Sv:t="Linear";break;case yv:t="Reinhard";break;case bv:t="Cineon";break;case Ev:t="ACESFilmic";break;case wv:t="AgX";break;case Av:t="Neutral";break;case Tv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ko=new ue;function aS(){at.getLuminanceCoefficients(ko);const n=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function cS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vs(n){return n!==""}function Yf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $f(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(fS,hS)}const dS=new Map;function hS(n,e){let t=st[e];if(t===void 0){const i=dS.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pc(t)}const pS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(n){return n.replace(pS,mS)}function mS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function gS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Eh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ev?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function vS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hs:case ps:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _S(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function xS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Th:e="ENVMAP_BLENDING_MULTIPLY";break;case xv:e="ENVMAP_BLENDING_MIX";break;case Mv:e="ENVMAP_BLENDING_ADD";break}return e}function MS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gS(t),u=vS(t),c=_S(t),f=xS(t),d=MS(t),m=lS(t),g=cS(s),v=r.createProgram();let p,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),h.length>0&&(h+=`
`)):(p=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),h=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?st.tonemapping_pars_fragment:"",t.toneMapping!==nr?oS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,sS("linearToOutputTexel",t.outputColorSpace),aS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=Pc(o),o=Yf(o,t),o=$f(o,t),a=Pc(a),a=Yf(a,t),a=$f(a,t),o=qf(o),a=qf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=E+p+o,_=E+h+a,P=Gf(r,r.VERTEX_SHADER,b),C=Gf(r,r.FRAGMENT_SHADER,_);r.attachShader(v,P),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(D){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(C).trim();let Z=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,P,C);else{const J=Xf(r,P,"vertex"),H=Xf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+J+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||W==="")&&(Y=!1);Y&&(D.diagnostics={runnable:Z,programLog:U,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:h}})}r.deleteShader(P),r.deleteShader(C),I=new Qo(r,v),x=uS(r,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,tS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}let yS=0;class bS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ES(e),t.set(e,i)),i}}class ES{constructor(e){this.id=yS++,this.code=e,this.usedTimes=0}}function TS(n,e,t,i,r,s,o){const a=new Hh,l=new bS,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return u.add(x),x===0?"uv":`uv${x}`}function p(x,M,D,U,B){const W=U.fog,Z=B.geometry,Y=x.isMeshStandardMaterial?U.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),H=J&&J.mapping===La?J.image.height:null,ee=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const O=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$=O!==void 0?O.length:0;let q=0;Z.morphAttributes.position!==void 0&&(q=1),Z.morphAttributes.normal!==void 0&&(q=2),Z.morphAttributes.color!==void 0&&(q=3);let fe,Q,he,_e;if(ee){const ot=ni[ee];fe=ot.vertexShader,Q=ot.fragmentShader}else fe=x.vertexShader,Q=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const ve=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),ze=B.isInstancedMesh===!0,He=B.isBatchedMesh===!0,Me=!!x.map,R=!!x.matcap,F=!!J,w=!!x.aoMap,de=!!x.lightMap,ne=!!x.bumpMap,te=!!x.normalMap,ae=!!x.displacementMap,ge=!!x.emissiveMap,le=!!x.metalnessMap,y=!!x.roughnessMap,S=x.anisotropy>0,L=x.clearcoat>0,V=x.dispersion>0,j=x.iridescence>0,ie=x.sheen>0,be=x.transmission>0,ye=S&&!!x.anisotropyMap,Te=L&&!!x.clearcoatMap,Ge=L&&!!x.clearcoatNormalMap,N=L&&!!x.clearcoatRoughnessMap,k=j&&!!x.iridescenceMap,re=j&&!!x.iridescenceThicknessMap,Ee=ie&&!!x.sheenColorMap,xe=ie&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,Pe=!!x.specularColorMap,$e=!!x.specularIntensityMap,G=be&&!!x.transmissionMap,Ce=be&&!!x.thicknessMap,ce=!!x.gradientMap,Se=!!x.alphaMap,Ie=x.alphaTest>0,De=!!x.alphaHash,Ze=!!x.extensions;let mt=nr;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Ct={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:fe,fragmentShader:Q,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:He,batchingColor:He&&B._colorsTexture!==null,instancing:ze,instancingColor:ze&&B.instanceColor!==null,instancingMorph:ze&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ys,alphaToCoverage:!!x.alphaToCoverage,map:Me,matcap:R,envMap:F,envMapMode:F&&J.mapping,envMapCubeUVHeight:H,aoMap:w,lightMap:de,bumpMap:ne,normalMap:te,displacementMap:d&&ae,emissiveMap:ge,normalMapObjectSpace:te&&x.normalMapType===Dv,normalMapTangentSpace:te&&x.normalMapType===Pv,metalnessMap:le,roughnessMap:y,anisotropy:S,anisotropyMap:ye,clearcoat:L,clearcoatMap:Te,clearcoatNormalMap:Ge,clearcoatRoughnessMap:N,dispersion:V,iridescence:j,iridescenceMap:k,iridescenceThicknessMap:re,sheen:ie,sheenColorMap:Ee,sheenRoughnessMap:xe,specularMap:Ue,specularColorMap:Pe,specularIntensityMap:$e,transmission:be,transmissionMap:G,thicknessMap:Ce,gradientMap:ce,opaque:x.transparent===!1&&x.blending===as&&x.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ie,alphaHash:De,combine:x.combine,mapUv:Me&&v(x.map.channel),aoMapUv:w&&v(x.aoMap.channel),lightMapUv:de&&v(x.lightMap.channel),bumpMapUv:ne&&v(x.bumpMap.channel),normalMapUv:te&&v(x.normalMap.channel),displacementMapUv:ae&&v(x.displacementMap.channel),emissiveMapUv:ge&&v(x.emissiveMap.channel),metalnessMapUv:le&&v(x.metalnessMap.channel),roughnessMapUv:y&&v(x.roughnessMap.channel),anisotropyMapUv:ye&&v(x.anisotropyMap.channel),clearcoatMapUv:Te&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(x.sheenRoughnessMap.channel),specularMapUv:Ue&&v(x.specularMap.channel),specularColorMapUv:Pe&&v(x.specularColorMap.channel),specularIntensityMapUv:$e&&v(x.specularIntensityMap.channel),transmissionMapUv:G&&v(x.transmissionMap.channel),thicknessMapUv:Ce&&v(x.thicknessMap.channel),alphaMapUv:Se&&v(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(te||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Me||Se),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Be,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:ge&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ze&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&x.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ct.vertexUv1s=u.has(1),Ct.vertexUv2s=u.has(2),Ct.vertexUv3s=u.has(3),u.clear(),Ct}function h(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(E(M,x),b(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function E(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){const M=g[x.type];let D;if(M){const U=ni[M];D=l_.clone(U.uniforms)}else D=x.uniforms;return D}function P(x,M){let D;for(let U=0,B=c.length;U<B;U++){const W=c[U];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new SS(n,M,x,s),c.push(D)),D}function C(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:P,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:I}}function wS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function AS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,m,g,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function a(f,d,m,g,v,p){const h=o(f,d,m,g,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,g,v,p){const h=o(f,d,m,g,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||AS),i.length>1&&i.sort(d||jf),r.length>1&&r.sort(d||jf)}function c(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function CS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zf,n.set(i,[o])):r>=s.length?(o=new Zf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function RS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new pt};break;case"SpotLight":t={position:new ue,direction:new ue,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return n[e.id]=t,t}}}function LS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PS=0;function DS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IS(n){const e=new RS,t=LS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ue);const r=new ue,s=new It,o=new It;function a(u){let c=0,f=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,g=0,v=0,p=0,h=0,E=0,b=0,_=0,P=0,C=0,T=0;u.sort(DS);for(let x=0,M=u.length;x<M;x++){const D=u[x],U=D.color,B=D.intensity,W=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=U.r*B,f+=U.g*B,d+=U.b*B;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],B);T++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,H=t.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=D.shadow.matrix,E++}i.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(U).multiplyScalar(B),Y.distance=W,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[v]=Y;const J=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,J.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[v]=J.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=Z,_++}v++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(U).multiplyScalar(B),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=Y,p++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const J=D.shadow,H=t.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(B),Y.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[h]=Y,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==h||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==_||I.numSpotMaps!==P||I.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=_+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=h,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=_,I.numSpotMaps=P,I.numLightProbes=T,i.version=PS++)}function l(u,c){let f=0,d=0,m=0,g=0,v=0;const p=c.matrixWorldInverse;for(let h=0,E=u.length;h<E;h++){const b=u[h];if(b.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),f++}else if(b.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Jf(n){const e=new IS(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function US(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jf(n),e.set(r,[a])):s>=o.length?(a=new Jf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class NS extends Da{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FS extends Da{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BS=`uniform sampler2D shadow_pass;
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
}`;function kS(n,e,t){let i=new Kh;const r=new _t,s=new _t,o=new Lt,a=new NS({depthPacking:Lv}),l=new FS,u={},c=t.maxTextureSize,f={[Ii]:vn,[vn]:Ii,[ri]:ri},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:OS,fragmentShader:BS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ir;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new cn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let h=this.type;this.render=function(C,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const x=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(tr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=h!==Mi&&this.type===Mi,W=h===Mi&&this.type!==Mi;for(let Z=0,Y=C.length;Z<Y;Z++){const J=C[Z],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||B===!0||W===!0){const $=this.type!==Mi?{minFilter:Gn,magFilter:Gn}:{};H.map!==null&&H.map.dispose(),H.map=new Pr(r.x,r.y,$),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const O=H.getViewportCount();for(let $=0;$<O;$++){const q=H.getViewport($);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),U.viewport(o),H.updateMatrices(J,$),i=H.getFrustum(),_(T,I,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Mi&&E(H,I),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(x,M,D)};function E(C,T){const I=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,I,d,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,I,m,v,null)}function b(C,T,I,x){let M=null;const D=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=M.uuid,B=T.uuid;let W=u[U];W===void 0&&(W={},u[U]=W);let Z=W[B];Z===void 0&&(Z=M.clone(),W[B]=Z,T.addEventListener("dispose",P)),M=Z}if(M.visible=T.visible,M.wireframe=T.wireframe,x===Mi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=I}return M}function _(C,T,I,x,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Mi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const B=e.update(C),W=C.material;if(Array.isArray(W)){const Z=B.groups;for(let Y=0,J=Z.length;Y<J;Y++){const H=Z[Y],ee=W[H.materialIndex];if(ee&&ee.visible){const O=b(C,ee,x,M);C.onBeforeShadow(n,C,T,I,B,O,H),n.renderBufferDirect(I,null,B,O,C,H),C.onAfterShadow(n,C,T,I,B,O,H)}}}else if(W.visible){const Z=b(C,W,x,M);C.onBeforeShadow(n,C,T,I,B,Z,null),n.renderBufferDirect(I,null,B,Z,C,null),C.onAfterShadow(n,C,T,I,B,Z,null)}}const U=C.children;for(let B=0,W=U.length;B<W;B++)_(U[B],T,I,x,M)}function P(C){C.target.removeEventListener("dispose",P);for(const I in u){const x=u[I],M=C.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const zS={[$l]:ql,[Kl]:Jl,[jl]:Ql,[ds]:Zl,[ql]:$l,[Jl]:Kl,[Ql]:jl,[Zl]:ds};function HS(n,e){function t(){let G=!1;const Ce=new Lt;let ce=null;const Se=new Lt(0,0,0,0);return{setMask:function(Ie){ce!==Ie&&!G&&(n.colorMask(Ie,Ie,Ie,Ie),ce=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,De,Ze,mt,Ct){Ct===!0&&(Ie*=mt,De*=mt,Ze*=mt),Ce.set(Ie,De,Ze,mt),Se.equals(Ce)===!1&&(n.clearColor(Ie,De,Ze,mt),Se.copy(Ce))},reset:function(){G=!1,ce=null,Se.set(-1,0,0,0)}}}function i(){let G=!1,Ce=!1,ce=null,Se=null,Ie=null;return{setReversed:function(De){if(Ce!==De){const Ze=e.get("EXT_clip_control");Ce?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const mt=Ie;Ie=null,this.setClear(mt)}Ce=De},getReversed:function(){return Ce},setTest:function(De){De?ve(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(De){ce!==De&&!G&&(n.depthMask(De),ce=De)},setFunc:function(De){if(Ce&&(De=zS[De]),Se!==De){switch(De){case $l:n.depthFunc(n.NEVER);break;case ql:n.depthFunc(n.ALWAYS);break;case Kl:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case jl:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case Jl:n.depthFunc(n.GREATER);break;case Ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=De}},setLocked:function(De){G=De},setClear:function(De){Ie!==De&&(Ce&&(De=1-De),n.clearDepth(De),Ie=De)},reset:function(){G=!1,ce=null,Se=null,Ie=null,Ce=!1}}}function r(){let G=!1,Ce=null,ce=null,Se=null,Ie=null,De=null,Ze=null,mt=null,Ct=null;return{setTest:function(ot){G||(ot?ve(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(ot){Ce!==ot&&!G&&(n.stencilMask(ot),Ce=ot)},setFunc:function(ot,$t,Tt){(ce!==ot||Se!==$t||Ie!==Tt)&&(n.stencilFunc(ot,$t,Tt),ce=ot,Se=$t,Ie=Tt)},setOp:function(ot,$t,Tt){(De!==ot||Ze!==$t||mt!==Tt)&&(n.stencilOp(ot,$t,Tt),De=ot,Ze=$t,mt=Tt)},setLocked:function(ot){G=ot},setClear:function(ot){Ct!==ot&&(n.clearStencil(ot),Ct=ot)},reset:function(){G=!1,Ce=null,ce=null,Se=null,Ie=null,De=null,Ze=null,mt=null,Ct=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,h=null,E=null,b=null,_=null,P=null,C=null,T=new pt(0,0,0),I=0,x=!1,M=null,D=null,U=null,B=null,W=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=J>=2);let ee=null,O={};const $=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),fe=new Lt().fromArray($),Q=new Lt().fromArray(q);function he(G,Ce,ce,Se){const Ie=new Uint8Array(4),De=n.createTexture();n.bindTexture(G,De),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ce;Ze++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Ce+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return De}const _e={};_e[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(ds),ne(!1),te(tf),ve(n.CULL_FACE),w(tr);function ve(G){c[G]!==!0&&(n.enable(G),c[G]=!0)}function Be(G){c[G]!==!1&&(n.disable(G),c[G]=!1)}function ze(G,Ce){return f[G]!==Ce?(n.bindFramebuffer(G,Ce),f[G]=Ce,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ce),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function He(G,Ce){let ce=m,Se=!1;if(G){ce=d.get(Ce),ce===void 0&&(ce=[],d.set(Ce,ce));const Ie=G.textures;if(ce.length!==Ie.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let De=0,Ze=Ie.length;De<Ze;De++)ce[De]=n.COLOR_ATTACHMENT0+De;ce.length=Ie.length,Se=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ce)}function Me(G){return g!==G?(n.useProgram(G),g=G,!0):!1}const R={[yr]:n.FUNC_ADD,[nv]:n.FUNC_SUBTRACT,[iv]:n.FUNC_REVERSE_SUBTRACT};R[rv]=n.MIN,R[sv]=n.MAX;const F={[ov]:n.ZERO,[av]:n.ONE,[lv]:n.SRC_COLOR,[Xl]:n.SRC_ALPHA,[pv]:n.SRC_ALPHA_SATURATE,[dv]:n.DST_COLOR,[uv]:n.DST_ALPHA,[cv]:n.ONE_MINUS_SRC_COLOR,[Yl]:n.ONE_MINUS_SRC_ALPHA,[hv]:n.ONE_MINUS_DST_COLOR,[fv]:n.ONE_MINUS_DST_ALPHA,[mv]:n.CONSTANT_COLOR,[gv]:n.ONE_MINUS_CONSTANT_COLOR,[vv]:n.CONSTANT_ALPHA,[_v]:n.ONE_MINUS_CONSTANT_ALPHA};function w(G,Ce,ce,Se,Ie,De,Ze,mt,Ct,ot){if(G===tr){v===!0&&(Be(n.BLEND),v=!1);return}if(v===!1&&(ve(n.BLEND),v=!0),G!==tv){if(G!==p||ot!==x){if((h!==yr||_!==yr)&&(n.blendEquation(n.FUNC_ADD),h=yr,_=yr),ot)switch(G){case as:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nf:n.blendFunc(n.ONE,n.ONE);break;case rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case as:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}E=null,b=null,P=null,C=null,T.set(0,0,0),I=0,p=G,x=ot}return}Ie=Ie||Ce,De=De||ce,Ze=Ze||Se,(Ce!==h||Ie!==_)&&(n.blendEquationSeparate(R[Ce],R[Ie]),h=Ce,_=Ie),(ce!==E||Se!==b||De!==P||Ze!==C)&&(n.blendFuncSeparate(F[ce],F[Se],F[De],F[Ze]),E=ce,b=Se,P=De,C=Ze),(mt.equals(T)===!1||Ct!==I)&&(n.blendColor(mt.r,mt.g,mt.b,Ct),T.copy(mt),I=Ct),p=G,x=!1}function de(G,Ce){G.side===ri?Be(n.CULL_FACE):ve(n.CULL_FACE);let ce=G.side===vn;Ce&&(ce=!ce),ne(ce),G.blending===as&&G.transparent===!1?w(tr):w(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const Se=G.stencilWrite;a.setTest(Se),Se&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ge(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(G){M!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),M=G)}function te(G){G!==Jg?(ve(n.CULL_FACE),G!==D&&(G===tf?n.cullFace(n.BACK):G===Qg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),D=G}function ae(G){G!==U&&(Y&&n.lineWidth(G),U=G)}function ge(G,Ce,ce){G?(ve(n.POLYGON_OFFSET_FILL),(B!==Ce||W!==ce)&&(n.polygonOffset(Ce,ce),B=Ce,W=ce)):Be(n.POLYGON_OFFSET_FILL)}function le(G){G?ve(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function y(G){G===void 0&&(G=n.TEXTURE0+Z-1),ee!==G&&(n.activeTexture(G),ee=G)}function S(G,Ce,ce){ce===void 0&&(ee===null?ce=n.TEXTURE0+Z-1:ce=ee);let Se=O[ce];Se===void 0&&(Se={type:void 0,texture:void 0},O[ce]=Se),(Se.type!==G||Se.texture!==Ce)&&(ee!==ce&&(n.activeTexture(ce),ee=ce),n.bindTexture(G,Ce||_e[G]),Se.type=G,Se.texture=Ce)}function L(){const G=O[ee];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function N(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(G){fe.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),fe.copy(G))}function xe(G){Q.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function Ue(G,Ce){let ce=u.get(Ce);ce===void 0&&(ce=new WeakMap,u.set(Ce,ce));let Se=ce.get(G);Se===void 0&&(Se=n.getUniformBlockIndex(Ce,G.name),ce.set(G,Se))}function Pe(G,Ce){const Se=u.get(Ce).get(G);l.get(Ce)!==Se&&(n.uniformBlockBinding(Ce,Se,G.__bindingPointIndex),l.set(Ce,Se))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ee=null,O={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,h=null,E=null,b=null,_=null,P=null,C=null,T=new pt(0,0,0),I=0,x=!1,M=null,D=null,U=null,B=null,W=null,fe.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:Be,bindFramebuffer:ze,drawBuffers:He,useProgram:Me,setBlending:w,setMaterial:de,setFlipSided:ne,setCullFace:te,setLineWidth:ae,setPolygonOffset:ge,setScissorTest:le,activeTexture:y,bindTexture:S,unbindTexture:L,compressedTexImage2D:V,compressedTexImage3D:j,texImage2D:k,texImage3D:re,updateUBOMapping:Ue,uniformBlockBinding:Pe,texStorage2D:Ge,texStorage3D:N,texSubImage2D:ie,texSubImage3D:be,compressedTexSubImage2D:ye,compressedTexSubImage3D:Te,scissor:Ee,viewport:xe,reset:$e}}function Qf(n,e,t,i){const r=VS(i);switch(t){case Lh:return n*e;case Dh:return n*e;case Ih:return n*e*2;case Uh:return n*e/r.components*r.byteLength;case iu:return n*e/r.components*r.byteLength;case Nh:return n*e*2/r.components*r.byteLength;case ru:return n*e*2/r.components*r.byteLength;case Ph:return n*e*3/r.components*r.byteLength;case kn:return n*e*4/r.components*r.byteLength;case su:return n*e*4/r.components*r.byteLength;case qo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jo:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:case ac:return Math.max(n,16)*Math.max(e,8)/4;case rc:case oc:return Math.max(n,8)*Math.max(e,8)/2;case lc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jo:case Tc:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fh:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cc:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VS(n){switch(n){case Ui:case Ah:return{byteLength:1,components:1};case so:case Ch:case co:return{byteLength:2,components:1};case tu:case nu:return{byteLength:2,components:4};case Lr:case eu:case Ti:return{byteLength:4,components:1};case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function GS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new _t,c=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,S){return m?new OffscreenCanvas(y,S):ua("canvas")}function v(y,S,L){let V=1;const j=le(y);if((j.width>L||j.height>L)&&(V=L/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const ie=Math.floor(V*j.width),be=Math.floor(V*j.height);f===void 0&&(f=g(ie,be));const ye=S?g(ie,be):f;return ye.width=ie,ye.height=be,ye.getContext("2d").drawImage(y,0,0,ie,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ie+"x"+be+")."),ye}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){n.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(y,S,L,V,j=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ie=S;if(S===n.RED&&(L===n.FLOAT&&(ie=n.R32F),L===n.HALF_FLOAT&&(ie=n.R16F),L===n.UNSIGNED_BYTE&&(ie=n.R8)),S===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(ie=n.R8UI),L===n.UNSIGNED_SHORT&&(ie=n.R16UI),L===n.UNSIGNED_INT&&(ie=n.R32UI),L===n.BYTE&&(ie=n.R8I),L===n.SHORT&&(ie=n.R16I),L===n.INT&&(ie=n.R32I)),S===n.RG&&(L===n.FLOAT&&(ie=n.RG32F),L===n.HALF_FLOAT&&(ie=n.RG16F),L===n.UNSIGNED_BYTE&&(ie=n.RG8)),S===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(ie=n.RG8UI),L===n.UNSIGNED_SHORT&&(ie=n.RG16UI),L===n.UNSIGNED_INT&&(ie=n.RG32UI),L===n.BYTE&&(ie=n.RG8I),L===n.SHORT&&(ie=n.RG16I),L===n.INT&&(ie=n.RG32I)),S===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),L===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),L===n.UNSIGNED_INT&&(ie=n.RGB32UI),L===n.BYTE&&(ie=n.RGB8I),L===n.SHORT&&(ie=n.RGB16I),L===n.INT&&(ie=n.RGB32I)),S===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),L===n.UNSIGNED_INT&&(ie=n.RGBA32UI),L===n.BYTE&&(ie=n.RGBA8I),L===n.SHORT&&(ie=n.RGBA16I),L===n.INT&&(ie=n.RGBA32I)),S===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),S===n.RGBA){const be=j?Pa:at.getTransfer(V);L===n.FLOAT&&(ie=n.RGBA32F),L===n.HALF_FLOAT&&(ie=n.RGBA16F),L===n.UNSIGNED_BYTE&&(ie=be===vt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(y,S){let L;return y?S===null||S===Lr||S===ms?L=n.DEPTH24_STENCIL8:S===Ti?L=n.DEPTH32F_STENCIL8:S===so&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Lr||S===ms?L=n.DEPTH_COMPONENT24:S===Ti?L=n.DEPTH_COMPONENT32F:S===so&&(L=n.DEPTH_COMPONENT16),L}function P(y,S){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Gn&&y.minFilter!==Gt?Math.log2(Math.max(S.width,S.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?S.mipmaps.length:1}function C(y){const S=y.target;S.removeEventListener("dispose",C),I(S),S.isVideoTexture&&c.delete(S)}function T(y){const S=y.target;S.removeEventListener("dispose",T),M(S)}function I(y){const S=i.get(y);if(S.__webglInit===void 0)return;const L=y.source,V=d.get(L);if(V){const j=V[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(y),Object.keys(V).length===0&&d.delete(L)}i.remove(y)}function x(y){const S=i.get(y);n.deleteTexture(S.__webglTexture);const L=y.source,V=d.get(L);delete V[S.__cacheKey],o.memory.textures--}function M(y){const S=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let j=0;j<S.__webglFramebuffer[V].length;j++)n.deleteFramebuffer(S.__webglFramebuffer[V][j]);else n.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)n.deleteFramebuffer(S.__webglFramebuffer[V]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const L=y.textures;for(let V=0,j=L.length;V<j;V++){const ie=i.get(L[V]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(L[V])}i.remove(y)}let D=0;function U(){D=0}function B(){const y=D;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),D+=1,y}function W(y){const S=[];return S.push(y.wrapS),S.push(y.wrapT),S.push(y.wrapR||0),S.push(y.magFilter),S.push(y.minFilter),S.push(y.anisotropy),S.push(y.internalFormat),S.push(y.format),S.push(y.type),S.push(y.generateMipmaps),S.push(y.premultiplyAlpha),S.push(y.flipY),S.push(y.unpackAlignment),S.push(y.colorSpace),S.join()}function Z(y,S){const L=i.get(y);if(y.isVideoTexture&&ae(y),y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){const V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(L,y,S);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+S)}function Y(y,S){const L=i.get(y);if(y.version>0&&L.__version!==y.version){Q(L,y,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+S)}function J(y,S){const L=i.get(y);if(y.version>0&&L.__version!==y.version){Q(L,y,S);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+S)}function H(y,S){const L=i.get(y);if(y.version>0&&L.__version!==y.version){he(L,y,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+S)}const ee={[nc]:n.REPEAT,[Tr]:n.CLAMP_TO_EDGE,[ic]:n.MIRRORED_REPEAT},O={[Gn]:n.NEAREST,[Cv]:n.NEAREST_MIPMAP_NEAREST,[xo]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},$={[Iv]:n.NEVER,[kv]:n.ALWAYS,[Uv]:n.LESS,[Oh]:n.LEQUAL,[Nv]:n.EQUAL,[Bv]:n.GEQUAL,[Fv]:n.GREATER,[Ov]:n.NOTEQUAL};function q(y,S){if(S.type===Ti&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gt||S.magFilter===$a||S.magFilter===xo||S.magFilter===Qi||S.minFilter===Gt||S.minFilter===$a||S.minFilter===xo||S.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ee[S.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ee[S.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ee[S.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,O[S.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,O[S.minFilter]),S.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gn||S.minFilter!==xo&&S.minFilter!==Qi||S.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function fe(y,S){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,S.addEventListener("dispose",C));const V=S.source;let j=d.get(V);j===void 0&&(j={},d.set(V,j));const ie=W(S);if(ie!==y.__cacheKey){j[ie]===void 0&&(j[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),j[ie].usedTimes++;const be=j[y.__cacheKey];be!==void 0&&(j[y.__cacheKey].usedTimes--,be.usedTimes===0&&x(S)),y.__cacheKey=ie,y.__webglTexture=j[ie].texture}return L}function Q(y,S,L){let V=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=n.TEXTURE_3D);const j=fe(y,S),ie=S.source;t.bindTexture(V,y.__webglTexture,n.TEXTURE0+L);const be=i.get(ie);if(ie.version!==be.__version||j===!0){t.activeTexture(n.TEXTURE0+L);const ye=at.getPrimaries(at.workingColorSpace),Te=S.colorSpace===Ji?null:at.getPrimaries(S.colorSpace),Ge=S.colorSpace===Ji||ye===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let N=v(S.image,!1,r.maxTextureSize);N=ge(S,N);const k=s.convert(S.format,S.colorSpace),re=s.convert(S.type);let Ee=b(S.internalFormat,k,re,S.colorSpace,S.isVideoTexture);q(V,S);let xe;const Ue=S.mipmaps,Pe=S.isVideoTexture!==!0,$e=be.__version===void 0||j===!0,G=ie.dataReady,Ce=P(S,N);if(S.isDepthTexture)Ee=_(S.format===gs,S.type),$e&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Ee,N.width,N.height):t.texImage2D(n.TEXTURE_2D,0,Ee,N.width,N.height,0,k,re,null));else if(S.isDataTexture)if(Ue.length>0){Pe&&$e&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,Ue[0].width,Ue[0].height);for(let ce=0,Se=Ue.length;ce<Se;ce++)xe=Ue[ce],Pe?G&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,xe.width,xe.height,k,re,xe.data):t.texImage2D(n.TEXTURE_2D,ce,Ee,xe.width,xe.height,0,k,re,xe.data);S.generateMipmaps=!1}else Pe?($e&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,N.width,N.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,N.width,N.height,k,re,N.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,N.width,N.height,0,k,re,N.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Pe&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ee,Ue[0].width,Ue[0].height,N.depth);for(let ce=0,Se=Ue.length;ce<Se;ce++)if(xe=Ue[ce],S.format!==kn)if(k!==null)if(Pe){if(G)if(S.layerUpdates.size>0){const Ie=Qf(xe.width,xe.height,S.format,S.type);for(const De of S.layerUpdates){const Ze=xe.data.subarray(De*Ie/xe.data.BYTES_PER_ELEMENT,(De+1)*Ie/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,De,xe.width,xe.height,1,k,Ze)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,N.depth,k,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Ee,xe.width,xe.height,N.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,N.depth,k,re,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Ee,xe.width,xe.height,N.depth,0,k,re,xe.data)}else{Pe&&$e&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,Ue[0].width,Ue[0].height);for(let ce=0,Se=Ue.length;ce<Se;ce++)xe=Ue[ce],S.format!==kn?k!==null?Pe?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,xe.width,xe.height,k,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Ee,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?G&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,xe.width,xe.height,k,re,xe.data):t.texImage2D(n.TEXTURE_2D,ce,Ee,xe.width,xe.height,0,k,re,xe.data)}else if(S.isDataArrayTexture)if(Pe){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ee,N.width,N.height,N.depth),G)if(S.layerUpdates.size>0){const ce=Qf(N.width,N.height,S.format,S.type);for(const Se of S.layerUpdates){const Ie=N.data.subarray(Se*ce/N.data.BYTES_PER_ELEMENT,(Se+1)*ce/N.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,N.width,N.height,1,k,re,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,k,re,N.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,N.width,N.height,N.depth,0,k,re,N.data);else if(S.isData3DTexture)Pe?($e&&t.texStorage3D(n.TEXTURE_3D,Ce,Ee,N.width,N.height,N.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,k,re,N.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,N.width,N.height,N.depth,0,k,re,N.data);else if(S.isFramebufferTexture){if($e)if(Pe)t.texStorage2D(n.TEXTURE_2D,Ce,Ee,N.width,N.height);else{let ce=N.width,Se=N.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Ee,ce,Se,0,k,re,null),ce>>=1,Se>>=1}}else if(Ue.length>0){if(Pe&&$e){const ce=le(Ue[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Ee,ce.width,ce.height)}for(let ce=0,Se=Ue.length;ce<Se;ce++)xe=Ue[ce],Pe?G&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,k,re,xe):t.texImage2D(n.TEXTURE_2D,ce,Ee,k,re,xe);S.generateMipmaps=!1}else if(Pe){if($e){const ce=le(N);t.texStorage2D(n.TEXTURE_2D,Ce,Ee,ce.width,ce.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,k,re,N)}else t.texImage2D(n.TEXTURE_2D,0,Ee,k,re,N);p(S)&&h(V),be.__version=ie.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function he(y,S,L){if(S.image.length!==6)return;const V=fe(y,S),j=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const ie=i.get(j);if(j.version!==ie.__version||V===!0){t.activeTexture(n.TEXTURE0+L);const be=at.getPrimaries(at.workingColorSpace),ye=S.colorSpace===Ji?null:at.getPrimaries(S.colorSpace),Te=S.colorSpace===Ji||be===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ge=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,k=[];for(let Se=0;Se<6;Se++)!Ge&&!N?k[Se]=v(S.image[Se],!0,r.maxCubemapSize):k[Se]=N?S.image[Se].image:S.image[Se],k[Se]=ge(S,k[Se]);const re=k[0],Ee=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Ue=b(S.internalFormat,Ee,xe,S.colorSpace),Pe=S.isVideoTexture!==!0,$e=ie.__version===void 0||V===!0,G=j.dataReady;let Ce=P(S,re);q(n.TEXTURE_CUBE_MAP,S);let ce;if(Ge){Pe&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ue,re.width,re.height);for(let Se=0;Se<6;Se++){ce=k[Se].mipmaps;for(let Ie=0;Ie<ce.length;Ie++){const De=ce[Ie];S.format!==kn?Ee!==null?Pe?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,0,0,De.width,De.height,Ee,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,0,0,De.width,De.height,Ee,xe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,Ue,De.width,De.height,0,Ee,xe,De.data)}}}else{if(ce=S.mipmaps,Pe&&$e){ce.length>0&&Ce++;const Se=le(k[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ue,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(N){Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,k[Se].width,k[Se].height,Ee,xe,k[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ue,k[Se].width,k[Se].height,0,Ee,xe,k[Se].data);for(let Ie=0;Ie<ce.length;Ie++){const Ze=ce[Ie].image[Se].image;Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,0,0,Ze.width,Ze.height,Ee,xe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,Ue,Ze.width,Ze.height,0,Ee,xe,Ze.data)}}else{Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ee,xe,k[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ue,Ee,xe,k[Se]);for(let Ie=0;Ie<ce.length;Ie++){const De=ce[Ie];Pe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,0,0,Ee,xe,De.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,Ue,Ee,xe,De.image[Se])}}}p(S)&&h(n.TEXTURE_CUBE_MAP),ie.__version=j.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function _e(y,S,L,V,j,ie){const be=s.convert(L.format,L.colorSpace),ye=s.convert(L.type),Te=b(L.internalFormat,be,ye,L.colorSpace),Ge=i.get(S),N=i.get(L);if(N.__renderTarget=S,!Ge.__hasExternalTextures){const k=Math.max(1,S.width>>ie),re=Math.max(1,S.height>>ie);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,ie,Te,k,re,S.depth,0,be,ye,null):t.texImage2D(j,ie,Te,k,re,0,be,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),te(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,j,N.__webglTexture,0,ne(S)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,j,N.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(y,S,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),S.depthBuffer){const V=S.depthTexture,j=V&&V.isDepthTexture?V.type:null,ie=_(S.stencilBuffer,j),be=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=ne(S);te(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ie,S.width,S.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ie,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ie,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,y)}else{const V=S.textures;for(let j=0;j<V.length;j++){const ie=V[j],be=s.convert(ie.format,ie.colorSpace),ye=s.convert(ie.type),Te=b(ie.internalFormat,be,ye,ie.colorSpace),Ge=ne(S);L&&te(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Te,S.width,S.height):te(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Te,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Te,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(y,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(S.depthTexture);V.__renderTarget=S,(!V.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const j=V.__webglTexture,ie=ne(S);if(S.depthTexture.format===ls)te(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(S.depthTexture.format===gs)te(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ze(y){const S=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==y.depthTexture){const V=y.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=V}if(y.depthTexture&&!S.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Be(S.__webglFramebuffer,y)}else if(L){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[V],y,!1);else{const j=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,y,!1);else{const V=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(y,S,L){const V=i.get(y);S!==void 0&&_e(V.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ze(y)}function Me(y){const S=y.texture,L=i.get(y),V=i.get(S);y.addEventListener("dispose",T);const j=y.textures,ie=y.isWebGLCubeRenderTarget===!0,be=j.length>1;if(be||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=S.version,o.memory.textures++),ie){L.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer[ye]=[];for(let Te=0;Te<S.mipmaps.length;Te++)L.__webglFramebuffer[ye][Te]=n.createFramebuffer()}else L.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)L.__webglFramebuffer[ye]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(be)for(let ye=0,Te=j.length;ye<Te;ye++){const Ge=i.get(j[ye]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&te(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ye=0;ye<j.length;ye++){const Te=j[ye];L.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ye]);const Ge=s.convert(Te.format,Te.colorSpace),N=s.convert(Te.type),k=b(Te.internalFormat,Ge,N,Te.colorSpace,y.isXRRenderTarget===!0),re=ne(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,re,k,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,L.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),q(n.TEXTURE_CUBE_MAP,S);for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)_e(L.__webglFramebuffer[ye][Te],y,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else _e(L.__webglFramebuffer[ye],y,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(S)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ye=0,Te=j.length;ye<Te;ye++){const Ge=j[ye],N=i.get(Ge);t.bindTexture(n.TEXTURE_2D,N.__webglTexture),q(n.TEXTURE_2D,Ge),_e(L.__webglFramebuffer,y,Ge,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),p(Ge)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ye=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,V.__webglTexture),q(ye,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)_e(L.__webglFramebuffer[Te],y,S,n.COLOR_ATTACHMENT0,ye,Te);else _e(L.__webglFramebuffer,y,S,n.COLOR_ATTACHMENT0,ye,0);p(S)&&h(ye),t.unbindTexture()}y.depthBuffer&&ze(y)}function R(y){const S=y.textures;for(let L=0,V=S.length;L<V;L++){const j=S[L];if(p(j)){const ie=E(y),be=i.get(j).__webglTexture;t.bindTexture(ie,be),h(ie),t.unbindTexture()}}}const F=[],w=[];function de(y){if(y.samples>0){if(te(y)===!1){const S=y.textures,L=y.width,V=y.height;let j=n.COLOR_BUFFER_BIT;const ie=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(y),ye=S.length>1;if(ye)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Te]);const Ge=i.get(S[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,L,V,0,0,L,V,j,n.NEAREST),l===!0&&(F.length=0,w.length=0,F.push(n.COLOR_ATTACHMENT0+Te),y.depthBuffer&&y.resolveDepthBuffer===!1&&(F.push(ie),w.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,be.__webglColorRenderbuffer[Te]);const Ge=i.get(S[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const S=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ne(y){return Math.min(r.maxSamples,y.samples)}function te(y){const S=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(y){const S=o.render.frame;c.get(y)!==S&&(c.set(y,S),y.update())}function ge(y,S){const L=y.colorSpace,V=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==ys&&L!==Ji&&(at.getTransfer(L)===vt?(V!==kn||j!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),S}function le(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(u.width=y.naturalWidth||y.width,u.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(u.width=y.displayWidth,u.height=y.displayHeight):(u.width=y.width,u.height=y.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=He,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=te}function WS(n,e){function t(i,r=Ji){let s;const o=at.getTransfer(r);if(i===Ui)return n.UNSIGNED_BYTE;if(i===tu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ah)return n.BYTE;if(i===Ch)return n.SHORT;if(i===so)return n.UNSIGNED_SHORT;if(i===eu)return n.INT;if(i===Lr)return n.UNSIGNED_INT;if(i===Ti)return n.FLOAT;if(i===co)return n.HALF_FLOAT;if(i===Lh)return n.ALPHA;if(i===Ph)return n.RGB;if(i===kn)return n.RGBA;if(i===Dh)return n.LUMINANCE;if(i===Ih)return n.LUMINANCE_ALPHA;if(i===ls)return n.DEPTH_COMPONENT;if(i===gs)return n.DEPTH_STENCIL;if(i===Uh)return n.RED;if(i===iu)return n.RED_INTEGER;if(i===Nh)return n.RG;if(i===ru)return n.RG_INTEGER;if(i===su)return n.RGBA_INTEGER;if(i===qo||i===Ko||i===jo||i===Zo)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rc||i===sc||i===oc||i===ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lc||i===cc||i===uc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lc||i===cc)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fc||i===dc||i===hc||i===pc||i===mc||i===gc||i===vc||i===_c||i===xc||i===Mc||i===Sc||i===yc||i===bc||i===Ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===Tc||i===wc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jo)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fh||i===Ac||i===Cc||i===Rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class XS extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zo extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YS={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(u,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qS=`
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

}`;class KS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new fn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $n({vertexShader:$S,fragmentShader:qS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jS extends bs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,m=null,g=null;const v=new KS,p=t.getContextAttributes();let h=null,E=null;const b=[],_=[],P=new _t;let C=null;const T=new On;T.viewport=new Lt;const I=new On;I.viewport=new Lt;const x=[T,I],M=new XS;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=b[Q];return he===void 0&&(he=new yl,b[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=b[Q];return he===void 0&&(he=new yl,b[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=b[Q];return he===void 0&&(he=new yl,b[Q]=he),he.getHandSpace()};function B(Q){const he=_.indexOf(Q.inputSource);if(he===-1)return;const _e=b[he];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,u||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<b.length;Q++){const he=_[Q];he!==null&&(_[Q]=null,b[Q].disconnect(he))}D=null,U=null,v.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,E=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Pr(m.framebufferWidth,m.framebufferHeight,{format:kn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,_e=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?gs:ls,_e=p.stencil?ms:Lr);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Pr(d.textureWidth,d.textureHeight,{format:kn,type:Ui,depthTexture:new Zh(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(Q){for(let he=0;he<Q.removed.length;he++){const _e=Q.removed[he],ve=_.indexOf(_e);ve>=0&&(_[ve]=null,b[ve].disconnect(_e))}for(let he=0;he<Q.added.length;he++){const _e=Q.added[he];let ve=_.indexOf(_e);if(ve===-1){for(let ze=0;ze<b.length;ze++)if(ze>=_.length){_.push(_e),ve=ze;break}else if(_[ze]===null){_[ze]=_e,ve=ze;break}if(ve===-1)break}const Be=b[ve];Be&&Be.connect(_e)}}const Y=new ue,J=new ue;function H(Q,he,_e){Y.setFromMatrixPosition(he.matrixWorld),J.setFromMatrixPosition(_e.matrixWorld);const ve=Y.distanceTo(J),Be=he.projectionMatrix.elements,ze=_e.projectionMatrix.elements,He=Be[14]/(Be[10]-1),Me=Be[14]/(Be[10]+1),R=(Be[9]+1)/Be[5],F=(Be[9]-1)/Be[5],w=(Be[8]-1)/Be[0],de=(ze[8]+1)/ze[0],ne=He*w,te=He*de,ae=ve/(-w+de),ge=ae*-w;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ge),Q.translateZ(ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Be[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const le=He+ae,y=Me+ae,S=ne-ge,L=te+(ve-ge),V=R*Me/y*le,j=F*Me/y*le;Q.projectionMatrix.makePerspective(S,L,V,j,le,y),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ee(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let he=Q.near,_e=Q.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),M.near=I.near=T.near=he,M.far=I.far=T.far=_e,(D!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,U=M.far),T.layers.mask=Q.layers.mask|2,I.layers.mask=Q.layers.mask|4,M.layers.mask=T.layers.mask|I.layers.mask;const ve=Q.parent,Be=M.cameras;ee(M,ve);for(let ze=0;ze<Be.length;ze++)ee(Be[ze],ve);Be.length===2?H(M,T,I):M.projectionMatrix.copy(T.projectionMatrix),O(Q,M,ve)};function O(Q,he,_e){_e===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Lc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let $=null;function q(Q,he){if(c=he.getViewerPose(u||o),g=he,c!==null){const _e=c.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ve=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let ze=0;ze<_e.length;ze++){const He=_e[ze];let Me=null;if(m!==null)Me=m.getViewport(He);else{const F=f.getViewSubImage(d,He);Me=F.viewport,ze===0&&(e.setRenderTargetTextures(E,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(E))}let R=x[ze];R===void 0&&(R=new On,R.layers.enable(ze),R.viewport=new Lt,x[ze]=R),R.matrix.fromArray(He.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(He.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Me.x,Me.y,Me.width,Me.height),ze===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(R)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const ze=f.getDepthInformation(_e[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,r.renderState)}}for(let _e=0;_e<b.length;_e++){const ve=_[_e],Be=b[_e];ve!==null&&Be!==void 0&&Be.update(ve,he,u||o)}$&&$(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const fe=new jh;fe.setAnimationLoop(q),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const gr=new Ni,ZS=new It;function JS(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Yh(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,E,b,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),c(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,_)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,E,b):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===vn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===vn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h),b=E.envMap,_=E.envMapRotation;b&&(p.envMap.value=b,gr.copy(_),gr.x*=-1,gr.y*=-1,gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),p.envMapRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(gr)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const _=b.program;i.uniformBlockBinding(E,_)}function u(E,b){let _=r[E.id];_===void 0&&(g(E),_=c(E),r[E.id]=_,E.addEventListener("dispose",p));const P=b.program;i.updateUBOMapping(E,P);const C=e.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function c(E){const b=f();E.__bindingPointIndex=b;const _=n.createBuffer(),P=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=r[E.id],_=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,T=_.length;C<T;C++){const I=Array.isArray(_[C])?_[C]:[_[C]];for(let x=0,M=I.length;x<M;x++){const D=I[x];if(m(D,C,x,P)===!0){const U=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Z=0;Z<B.length;Z++){const Y=B[Z],J=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,U+W,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,b,_,P){const C=E.value,T=b+"_"+_;if(P[T]===void 0)return typeof C=="number"||typeof C=="boolean"?P[T]=C:P[T]=C.clone(),!0;{const I=P[T];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return P[T]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(E){const b=E.uniforms;let _=0;const P=16;for(let T=0,I=b.length;T<I;T++){const x=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,D=x.length;M<D;M++){const U=x[M],B=Array.isArray(U.value)?U.value:[U.value];for(let W=0,Z=B.length;W<Z;W++){const Y=B[W],J=v(Y),H=_%P,ee=H%J.boundary,O=H+ee;_+=ee,O!==0&&P-O<J.storage&&(_+=P-O),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=J.storage}}}const C=_%P;return C>0&&(_+=P-C),E.__size=_,E.__cache={},this}function v(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function p(E){const b=E.target;b.removeEventListener("dispose",p);const _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class Ts{constructor(e={}){const{canvas:t=Hv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=nr,this.toneMappingExposure=1;const _=this;let P=!1,C=0,T=0,I=null,x=-1,M=null;const D=new Lt,U=new Lt;let B=null;const W=new pt(0);let Z=0,Y=t.width,J=t.height,H=1,ee=null,O=null;const $=new Lt(0,0,Y,J),q=new Lt(0,0,Y,J);let fe=!1;const Q=new Kh;let he=!1,_e=!1;const ve=new It,Be=new It,ze=new ue,He=new Lt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function F(){return I===null?H:1}let w=i;function de(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",De,!1),w===null){const X="webgl2";if(w=de(X,A),w===null)throw de(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,te,ae,ge,le,y,S,L,V,j,ie,be,ye,Te,Ge,N,k,re,Ee,xe,Ue,Pe,$e,G;function Ce(){ne=new sM(w),ne.init(),Pe=new WS(w,ne),te=new Qx(w,ne,e,Pe),ae=new HS(w,ne),te.reverseDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),ge=new lM(w),le=new wS,y=new GS(w,ne,ae,le,te,Pe,ge),S=new tM(_),L=new rM(_),V=new m_(w),$e=new Zx(w,V),j=new oM(w,V,ge,$e),ie=new uM(w,j,V,ge),Ee=new cM(w,te,y),N=new eM(le),be=new TS(_,S,L,ne,te,$e,N),ye=new JS(_,le),Te=new CS,Ge=new US(ne),re=new jx(_,S,L,ae,ie,m,l),k=new kS(_,ie,te),G=new QS(w,ge,te,ae),xe=new Jx(w,ne,ge),Ue=new aM(w,ne,ge),ge.programs=be.programs,_.capabilities=te,_.extensions=ne,_.properties=le,_.renderLists=Te,_.shadowMap=k,_.state=ae,_.info=ge}Ce();const ce=new jS(_,w);this.xr=ce,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(Y,J,!1))},this.getSize=function(A){return A.set(Y,J)},this.setSize=function(A,X,se=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,J=X,t.width=Math.floor(A*H),t.height=Math.floor(X*H),se===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Y*H,J*H).floor()},this.setDrawingBufferSize=function(A,X,se){Y=A,J=X,H=se,t.width=Math.floor(A*se),t.height=Math.floor(X*se),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,X,se,oe){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,X,se,oe),ae.viewport(D.copy($).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(q)},this.setScissor=function(A,X,se,oe){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,X,se,oe),ae.scissor(U.copy(q).multiplyScalar(H).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){ae.setScissorTest(fe=A)},this.setOpaqueSort=function(A){ee=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,X=!0,se=!0){let oe=0;if(A){let K=!1;if(I!==null){const Re=I.texture.format;K=Re===su||Re===ru||Re===iu}if(K){const Re=I.texture.type,Oe=Re===Ui||Re===Lr||Re===so||Re===ms||Re===tu||Re===nu,We=re.getClearColor(),Xe=re.getClearAlpha(),et=We.r,it=We.g,Ye=We.b;Oe?(g[0]=et,g[1]=it,g[2]=Ye,g[3]=Xe,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=et,v[1]=it,v[2]=Ye,v[3]=Xe,w.clearBufferiv(w.COLOR,0,v))}else oe|=w.COLOR_BUFFER_BIT}X&&(oe|=w.DEPTH_BUFFER_BIT),se&&(oe|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Te.dispose(),Ge.dispose(),le.dispose(),S.dispose(),L.dispose(),ie.dispose(),$e.dispose(),G.dispose(),be.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Fr),ce.removeEventListener("sessionend",ui),Tn.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=ge.autoReset,X=k.enabled,se=k.autoUpdate,oe=k.needsUpdate,K=k.type;Ce(),ge.autoReset=A,k.enabled=X,k.autoUpdate=se,k.needsUpdate=oe,k.type=K}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ze(A){const X=A.target;X.removeEventListener("dispose",Ze),mt(X)}function mt(A){Ct(A),le.remove(A)}function Ct(A){const X=le.get(A).programs;X!==void 0&&(X.forEach(function(se){be.releaseProgram(se)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,se,oe,K,Re){X===null&&(X=Me);const Oe=K.isMesh&&K.matrixWorld.determinant()<0,We=Je(A,X,se,oe,K);ae.setMaterial(oe,Oe);let Xe=se.index,et=1;if(oe.wireframe===!0){if(Xe=j.getWireframeAttribute(se),Xe===void 0)return;et=2}const it=se.drawRange,Ye=se.attributes.position;let lt=it.start*et,Mt=(it.start+it.count)*et;Re!==null&&(lt=Math.max(lt,Re.start*et),Mt=Math.min(Mt,(Re.start+Re.count)*et)),Xe!==null?(lt=Math.max(lt,0),Mt=Math.min(Mt,Xe.count)):Ye!=null&&(lt=Math.max(lt,0),Mt=Math.min(Mt,Ye.count));const bt=Mt-lt;if(bt<0||bt===1/0)return;$e.setup(K,oe,We,se,Xe);let dn,ut=xe;if(Xe!==null&&(dn=V.get(Xe),ut=Ue,ut.setIndex(dn)),K.isMesh)oe.wireframe===!0?(ae.setLineWidth(oe.wireframeLinewidth*F()),ut.setMode(w.LINES)):ut.setMode(w.TRIANGLES);else if(K.isLine){let qe=oe.linewidth;qe===void 0&&(qe=1),ae.setLineWidth(qe*F()),K.isLineSegments?ut.setMode(w.LINES):K.isLineLoop?ut.setMode(w.LINE_LOOP):ut.setMode(w.LINE_STRIP)}else K.isPoints?ut.setMode(w.POINTS):K.isSprite&&ut.setMode(w.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ut.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ut.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qe=K._multiDrawStarts,fi=K._multiDrawCounts,ft=K._multiDrawCount,In=Xe?V.get(Xe).bytesPerElement:1,Or=le.get(oe).currentProgram.getUniforms();for(let _n=0;_n<ft;_n++)Or.setValue(w,"_gl_DrawID",_n),ut.render(qe[_n]/In,fi[_n])}else if(K.isInstancedMesh)ut.renderInstances(lt,bt,K.count);else if(se.isInstancedBufferGeometry){const qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,fi=Math.min(se.instanceCount,qe);ut.renderInstances(lt,bt,fi)}else ut.render(lt,bt)};function ot(A,X,se){A.transparent===!0&&A.side===ri&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,Le(A,X,se),A.side=Ii,A.needsUpdate=!0,Le(A,X,se),A.side=ri):Le(A,X,se)}this.compile=function(A,X,se=null){se===null&&(se=A),h=Ge.get(se),h.init(X),b.push(h),se.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),A!==se&&A.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),h.setupLights();const oe=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Re=K.material;if(Re)if(Array.isArray(Re))for(let Oe=0;Oe<Re.length;Oe++){const We=Re[Oe];ot(We,se,K),oe.add(We)}else ot(Re,se,K),oe.add(Re)}),b.pop(),h=null,oe},this.compileAsync=function(A,X,se=null){const oe=this.compile(A,X,se);return new Promise(K=>{function Re(){if(oe.forEach(function(Oe){le.get(Oe).currentProgram.isReady()&&oe.delete(Oe)}),oe.size===0){K(A);return}setTimeout(Re,10)}ne.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let $t=null;function Tt(A){$t&&$t(A)}function Fr(){Tn.stop()}function ui(){Tn.start()}const Tn=new jh;Tn.setAnimationLoop(Tt),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(A){$t=A,ce.setAnimationLoop(A),A===null?Tn.stop():Tn.start()},ce.addEventListener("sessionstart",Fr),ce.addEventListener("sessionend",ui),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(X),X=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,X,I),h=Ge.get(A,b.length),h.init(X),b.push(h),Be.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(Be),_e=this.localClippingEnabled,he=N.init(this.clippingPlanes,_e),p=Te.get(A,E.length),p.init(),E.push(p),ce.enabled===!0&&ce.isPresenting===!0){const Re=_.xr.getDepthSensingMesh();Re!==null&&Bi(Re,X,-1/0,_.sortObjects)}Bi(A,X,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(ee,O),R=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,R&&re.addToRenderList(p,A),this.info.render.frame++,he===!0&&N.beginShadows();const se=h.state.shadowsArray;k.render(se,A,X),he===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=p.opaque,K=p.transmissive;if(h.setupLights(),X.isArrayCamera){const Re=X.cameras;if(K.length>0)for(let Oe=0,We=Re.length;Oe<We;Oe++){const Xe=Re[Oe];pe(oe,K,A,Xe)}R&&re.render(A);for(let Oe=0,We=Re.length;Oe<We;Oe++){const Xe=Re[Oe];z(p,A,Xe,Xe.viewport)}}else K.length>0&&pe(oe,K,A,X),R&&re.render(A),z(p,A,X);I!==null&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(_,A,X),$e.resetDefaultState(),x=-1,M=null,b.pop(),b.length>0?(h=b[b.length-1],he===!0&&N.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Bi(A,X,se,oe){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){oe&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Be);const Oe=ie.update(A),We=A.material;We.visible&&p.push(A,Oe,We,se,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Oe=ie.update(A),We=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),He.copy(Oe.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(Be)),Array.isArray(We)){const Xe=Oe.groups;for(let et=0,it=Xe.length;et<it;et++){const Ye=Xe[et],lt=We[Ye.materialIndex];lt&&lt.visible&&p.push(A,Oe,lt,se,He.z,Ye)}}else We.visible&&p.push(A,Oe,We,se,He.z,null)}}const Re=A.children;for(let Oe=0,We=Re.length;Oe<We;Oe++)Bi(Re[Oe],X,se,oe)}function z(A,X,se,oe){const K=A.opaque,Re=A.transmissive,Oe=A.transparent;h.setupLightsView(se),he===!0&&N.setGlobalState(_.clippingPlanes,se),oe&&ae.viewport(D.copy(oe)),K.length>0&&me(K,X,se),Re.length>0&&me(Re,X,se),Oe.length>0&&me(Oe,X,se),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function pe(A,X,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[oe.id]===void 0&&(h.state.transmissionRenderTarget[oe.id]=new Pr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?co:Ui,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const Re=h.state.transmissionRenderTarget[oe.id],Oe=oe.viewport||D;Re.setSize(Oe.z,Oe.w);const We=_.getRenderTarget();_.setRenderTarget(Re),_.getClearColor(W),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),R&&re.render(se);const Xe=_.toneMapping;_.toneMapping=nr;const et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),h.setupLightsView(oe),he===!0&&N.setGlobalState(_.clippingPlanes,oe),me(A,se,oe),y.updateMultisampleRenderTarget(Re),y.updateRenderTargetMipmap(Re),ne.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ye=0,lt=X.length;Ye<lt;Ye++){const Mt=X[Ye],bt=Mt.object,dn=Mt.geometry,ut=Mt.material,qe=Mt.group;if(ut.side===ri&&bt.layers.test(oe.layers)){const fi=ut.side;ut.side=vn,ut.needsUpdate=!0,Ae(bt,se,oe,dn,ut,qe),ut.side=fi,ut.needsUpdate=!0,it=!0}}it===!0&&(y.updateMultisampleRenderTarget(Re),y.updateRenderTargetMipmap(Re))}_.setRenderTarget(We),_.setClearColor(W,Z),et!==void 0&&(oe.viewport=et),_.toneMapping=Xe}function me(A,X,se){const oe=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Re=A.length;K<Re;K++){const Oe=A[K],We=Oe.object,Xe=Oe.geometry,et=oe===null?Oe.material:oe,it=Oe.group;We.layers.test(se.layers)&&Ae(We,X,se,Xe,et,it)}}function Ae(A,X,se,oe,K,Re){A.onBeforeRender(_,X,se,oe,K,Re),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(_,X,se,oe,A,Re),K.transparent===!0&&K.side===ri&&K.forceSinglePass===!1?(K.side=vn,K.needsUpdate=!0,_.renderBufferDirect(se,X,oe,K,A,Re),K.side=Ii,K.needsUpdate=!0,_.renderBufferDirect(se,X,oe,K,A,Re),K.side=ri):_.renderBufferDirect(se,X,oe,K,A,Re),A.onAfterRender(_,X,se,oe,K,Re)}function Le(A,X,se){X.isScene!==!0&&(X=Me);const oe=le.get(A),K=h.state.lights,Re=h.state.shadowsArray,Oe=K.state.version,We=be.getParameters(A,K.state,Re,X,se),Xe=be.getProgramCacheKey(We);let et=oe.programs;oe.environment=A.isMeshStandardMaterial?X.environment:null,oe.fog=X.fog,oe.envMap=(A.isMeshStandardMaterial?L:S).get(A.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",Ze),et=new Map,oe.programs=et);let it=et.get(Xe);if(it!==void 0){if(oe.currentProgram===it&&oe.lightsStateVersion===Oe)return Ve(A,We),it}else We.uniforms=be.getUniforms(A),A.onBeforeCompile(We,_),it=be.acquireProgram(We,Xe),et.set(Xe,it),oe.uniforms=We.uniforms;const Ye=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=N.uniform),Ve(A,We),oe.needsLights=kt(A),oe.lightsStateVersion=Oe,oe.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.directionalShadowMap.value=K.state.directionalShadowMap,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotShadowMap.value=K.state.spotShadowMap,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMap.value=K.state.pointShadowMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),oe.currentProgram=it,oe.uniformsList=null,it}function ke(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Qo.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ve(A,X){const se=le.get(A);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function Je(A,X,se,oe,K){X.isScene!==!0&&(X=Me),y.resetTextureUnits();const Re=X.fog,Oe=oe.isMeshStandardMaterial?X.environment:null,We=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ys,Xe=(oe.isMeshStandardMaterial?L:S).get(oe.envMap||Oe),et=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ye=!!se.morphAttributes.position,lt=!!se.morphAttributes.normal,Mt=!!se.morphAttributes.color;let bt=nr;oe.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(bt=_.toneMapping);const dn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ut=dn!==void 0?dn.length:0,qe=le.get(oe),fi=h.state.lights;if(he===!0&&(_e===!0||A!==M)){const wn=A===M&&oe.id===x;N.setState(oe,A,wn)}let ft=!1;oe.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==fi.state.version||qe.outputColorSpace!==We||K.isBatchedMesh&&qe.batching===!1||!K.isBatchedMesh&&qe.batching===!0||K.isBatchedMesh&&qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qe.instancingMorph===!1&&K.morphTexture!==null||qe.envMap!==Xe||oe.fog===!0&&qe.fog!==Re||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==N.numPlanes||qe.numIntersection!==N.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==it||qe.morphTargets!==Ye||qe.morphNormals!==lt||qe.morphColors!==Mt||qe.toneMapping!==bt||qe.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,qe.__version=oe.version);let In=qe.currentProgram;ft===!0&&(In=Le(oe,X,K));let Or=!1,_n=!1,As=!1;const Et=In.getUniforms(),Kn=qe.uniforms;if(ae.useProgram(In.program)&&(Or=!0,_n=!0,As=!0),oe.id!==x&&(x=oe.id,_n=!0),Or||M!==A){ae.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),Gv(ve),Wv(ve),Et.setValue(w,"projectionMatrix",ve)):Et.setValue(w,"projectionMatrix",A.projectionMatrix),Et.setValue(w,"viewMatrix",A.matrixWorldInverse);const ki=Et.map.cameraPosition;ki!==void 0&&ki.setValue(w,ze.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&Et.setValue(w,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Et.setValue(w,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,_n=!0,As=!0)}if(K.isSkinnedMesh){Et.setOptional(w,K,"bindMatrix"),Et.setOptional(w,K,"bindMatrixInverse");const wn=K.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Et.setValue(w,"boneTexture",wn.boneTexture,y))}K.isBatchedMesh&&(Et.setOptional(w,K,"batchingTexture"),Et.setValue(w,"batchingTexture",K._matricesTexture,y),Et.setOptional(w,K,"batchingIdTexture"),Et.setValue(w,"batchingIdTexture",K._indirectTexture,y),Et.setOptional(w,K,"batchingColorTexture"),K._colorsTexture!==null&&Et.setValue(w,"batchingColorTexture",K._colorsTexture,y));const Cs=se.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&Ee.update(K,se,In),(_n||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,Et.setValue(w,"receiveShadow",K.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Kn.envMap.value=Xe,Kn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&X.environment!==null&&(Kn.envMapIntensity.value=X.environmentIntensity),_n&&(Et.setValue(w,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&Wt(Kn,As),Re&&oe.fog===!0&&ye.refreshFogUniforms(Kn,Re),ye.refreshMaterialUniforms(Kn,oe,H,J,h.state.transmissionRenderTarget[A.id]),Qo.upload(w,ke(qe),Kn,y)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Qo.upload(w,ke(qe),Kn,y),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Et.setValue(w,"center",K.center),Et.setValue(w,"modelViewMatrix",K.modelViewMatrix),Et.setValue(w,"normalMatrix",K.normalMatrix),Et.setValue(w,"modelMatrix",K.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const wn=oe.uniformsGroups;for(let ki=0,zi=wn.length;ki<zi;ki++){const pu=wn[ki];G.update(pu,In),G.bind(pu,In)}}return In}function Wt(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function kt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,X,se){le.get(A.texture).__webglTexture=X,le.get(A.depthTexture).__webglTexture=se;const oe=le.get(A);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const se=le.get(A);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,se=0){I=A,C=X,T=se;let oe=!0,K=null,Re=!1,Oe=!1;if(A){const Xe=le.get(A);if(Xe.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(w.FRAMEBUFFER,null),oe=!1;else if(Xe.__webglFramebuffer===void 0)y.setupRenderTarget(A);else if(Xe.__hasExternalTextures)y.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ye=A.depthTexture;if(Xe.__boundDepthTexture!==Ye){if(Ye!==null&&le.has(Ye)&&(A.width!==Ye.image.width||A.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Oe=!0);const it=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[X])?K=it[X][se]:K=it[X],Re=!0):A.samples>0&&y.useMultisampledRTT(A)===!1?K=le.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?K=it[se]:K=it,D.copy(A.viewport),U.copy(A.scissor),B=A.scissorTest}else D.copy($).multiplyScalar(H).floor(),U.copy(q).multiplyScalar(H).floor(),B=fe;if(ae.bindFramebuffer(w.FRAMEBUFFER,K)&&oe&&ae.drawBuffers(A,K),ae.viewport(D),ae.scissor(U),ae.setScissorTest(B),Re){const Xe=le.get(A.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+X,Xe.__webglTexture,se)}else if(Oe){const Xe=le.get(A.texture),et=X||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Xe.__webglTexture,se||0,et)}x=-1},this.readRenderTargetPixels=function(A,X,se,oe,K,Re,Oe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){ae.bindFramebuffer(w.FRAMEBUFFER,We);try{const Xe=A.texture,et=Xe.format,it=Xe.type;if(!te.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-oe&&se>=0&&se<=A.height-K&&w.readPixels(X,se,oe,K,Pe.convert(et),Pe.convert(it),Re)}finally{const Xe=I!==null?le.get(I).__webglFramebuffer:null;ae.bindFramebuffer(w.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,X,se,oe,K,Re,Oe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){const Xe=A.texture,et=Xe.format,it=Xe.type;if(!te.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-oe&&se>=0&&se<=A.height-K){ae.bindFramebuffer(w.FRAMEBUFFER,We);const Ye=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ye),w.bufferData(w.PIXEL_PACK_BUFFER,Re.byteLength,w.STREAM_READ),w.readPixels(X,se,oe,K,Pe.convert(et),Pe.convert(it),0);const lt=I!==null?le.get(I).__webglFramebuffer:null;ae.bindFramebuffer(w.FRAMEBUFFER,lt);const Mt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Vv(w,Mt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ye),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Re),w.deleteBuffer(Ye),w.deleteSync(Mt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,se=0){A.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const oe=Math.pow(2,-se),K=Math.floor(A.image.width*oe),Re=Math.floor(A.image.height*oe),Oe=X!==null?X.x:0,We=X!==null?X.y:0;y.setTexture2D(A,0),w.copyTexSubImage2D(w.TEXTURE_2D,se,0,0,Oe,We,K,Re),ae.unbindTexture()},this.copyTextureToTexture=function(A,X,se=null,oe=null,K=0){A.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,A=arguments[1],X=arguments[2],K=arguments[3]||0,se=null);let Re,Oe,We,Xe,et,it,Ye,lt,Mt;const bt=A.isCompressedTexture?A.mipmaps[K]:A.image;se!==null?(Re=se.max.x-se.min.x,Oe=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,et=se.min.y,it=se.isBox3?se.min.z:0):(Re=bt.width,Oe=bt.height,We=bt.depth||1,Xe=0,et=0,it=0),oe!==null?(Ye=oe.x,lt=oe.y,Mt=oe.z):(Ye=0,lt=0,Mt=0);const dn=Pe.convert(X.format),ut=Pe.convert(X.type);let qe;X.isData3DTexture?(y.setTexture3D(X,0),qe=w.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(y.setTexture2DArray(X,0),qe=w.TEXTURE_2D_ARRAY):(y.setTexture2D(X,0),qe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,X.unpackAlignment);const fi=w.getParameter(w.UNPACK_ROW_LENGTH),ft=w.getParameter(w.UNPACK_IMAGE_HEIGHT),In=w.getParameter(w.UNPACK_SKIP_PIXELS),Or=w.getParameter(w.UNPACK_SKIP_ROWS),_n=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,bt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,bt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Xe),w.pixelStorei(w.UNPACK_SKIP_ROWS,et),w.pixelStorei(w.UNPACK_SKIP_IMAGES,it);const As=A.isDataArrayTexture||A.isData3DTexture,Et=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Kn=le.get(A),Cs=le.get(X),wn=le.get(Kn.__renderTarget),ki=le.get(Cs.__renderTarget);ae.bindFramebuffer(w.READ_FRAMEBUFFER,wn.__webglFramebuffer),ae.bindFramebuffer(w.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let zi=0;zi<We;zi++)As&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,le.get(A).__webglTexture,K,it+zi),A.isDepthTexture?(Et&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,le.get(X).__webglTexture,K,Mt+zi),w.blitFramebuffer(Xe,et,Re,Oe,Ye,lt,Re,Oe,w.DEPTH_BUFFER_BIT,w.NEAREST)):Et?w.copyTexSubImage3D(qe,K,Ye,lt,Mt+zi,Xe,et,Re,Oe):w.copyTexSubImage2D(qe,K,Ye,lt,Mt+zi,Xe,et,Re,Oe);ae.bindFramebuffer(w.READ_FRAMEBUFFER,null),ae.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Et?A.isDataTexture||A.isData3DTexture?w.texSubImage3D(qe,K,Ye,lt,Mt,Re,Oe,We,dn,ut,bt.data):X.isCompressedArrayTexture?w.compressedTexSubImage3D(qe,K,Ye,lt,Mt,Re,Oe,We,dn,bt.data):w.texSubImage3D(qe,K,Ye,lt,Mt,Re,Oe,We,dn,ut,bt):A.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,K,Ye,lt,Re,Oe,dn,ut,bt.data):A.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,K,Ye,lt,bt.width,bt.height,dn,bt.data):w.texSubImage2D(w.TEXTURE_2D,K,Ye,lt,Re,Oe,dn,ut,bt);w.pixelStorei(w.UNPACK_ROW_LENGTH,fi),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ft),w.pixelStorei(w.UNPACK_SKIP_PIXELS,In),w.pixelStorei(w.UNPACK_SKIP_ROWS,Or),w.pixelStorei(w.UNPACK_SKIP_IMAGES,_n),K===0&&X.generateMipmaps&&w.generateMipmap(qe),ae.unbindTexture()},this.copyTextureToTexture3D=function(A,X,se=null,oe=null,K=0){return A.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,A=arguments[2],X=arguments[3],K=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,se,oe,K)},this.initRenderTarget=function(A){le.get(A).__webglFramebuffer===void 0&&y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?y.setTextureCube(A,0):A.isData3DTexture?y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?y.setTexture2DArray(A,0):y.setTexture2D(A,0),ae.unbindTexture()},this.resetState=function(){C=0,T=0,I=null,ae.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class ws extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fa extends fn{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const _s={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},Ht=30,Dc=12,ey=10,ea=14,np=5;function da(){return`${Dc}px system-ui, -apple-system, sans-serif`}function ip(n,e,t){const i=String(e??"");if(!i)return[""];const r=i.split(/\s+/).filter(Boolean);if(r.length===0)return[""];const s=[];let o="";for(const a of r){const l=o?o+" "+a:a;!o||n.measureText(l).width<=t?o=l:(s.push(o),o=a)}return o&&s.push(o),s.length?s:[""]}function ty(n,e){return Math.max(e,n*ea+np*2)}function lu(n,e){const t=new Array(e+1);t[0]=0;for(let i=0;i<e;i++)t[i+1]=t[i]+(n[i]??0);return t}function ha(n,e){if(e<=0)return 0;let t=0,i=n.length-1;for(;t<i;){const r=t+i+1>>1;n[r]<=e?t=r:i=r-1}return t}const rp=28;function ny(n,e){if(typeof e=="function")return e(n);const t=n.filter(r=>r!=null&&r!=="");if(e==="count")return t.length;const i=t.map(r=>Number(r)).filter(r=>!Number.isNaN(r));if(i.length===0)return null;switch(e){case"sum":return i.reduce((r,s)=>r+s,0);case"avg":return i.reduce((r,s)=>r+s,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function iy(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const r=n.width/i,s=n.height/i,o=_s[e.theme]??_s.none,{cols:a,rows:l,pinnedRows:u,rowHeight:c,scrollY:f,scrollX:d,glow:m}=e;t.clearRect(0,0,r,s),t.fillStyle=o.bg,t.fillRect(0,0,r,s),t.save(),t.beginPath(),t.rect(0,0,r,s),t.clip();const g=u.length*c,v=e.aggregateRow?rp:0,p=s-Ht-g-v;t.fillStyle=o.headerBg,t.fillRect(0,0,r,Ht),t.textBaseline="middle",t.textAlign="left";let h=-d;for(let O=0;O<a.length;O++){const $=a[O];if(h+$.width<=0){h+=$.width;continue}if(h>=r)break;const q=!!e.colFilters[$.colId],fe=e.sorts.findIndex(_e=>_e.colId===$.colId),Q=fe>=0,he=($.colDef.headerName??$.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(h,0,$.width,Ht),t.clip(),t.font=`bold ${ey}px system-ui, -apple-system, sans-serif`,t.fillStyle=q?o.accent:o.textHeader,m?(t.shadowColor=o.textHeader,t.shadowBlur=10,t.fillText(he,h+8,Ht/2),t.shadowBlur=4,t.fillText(he,h+8,Ht/2),t.shadowBlur=0):t.fillText(he,h+8,Ht/2),Q){const _e=t.measureText(he).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=o.accent;const ve=e.sorts[fe].dir==="asc"?"▲":"▼";t.fillText(e.sorts.length>1?`${ve}${fe+1}`:ve,h+8+_e+4,Ht/2)}$.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=q?o.accent:o.textHeader,t.globalAlpha=q?1:.38,t.fillText("⌕",h+$.width-20,Ht/2),t.globalAlpha=1),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(h+$.width-.5,0),t.lineTo(h+$.width-.5,Ht),t.stroke(),h+=$.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,Ht-.5),t.lineTo(r,Ht-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,Ht,r,p),t.clip();const E=e.rowHeights&&e.rowHeights.length===l.length?e.rowHeights:null,b=E?lu(E,l.length):null,_=O=>b?b[O]:O*c,P=O=>E?E[O]:c,C=b?ha(b,f):Math.max(0,Math.floor(f/c));let T;if(b)for(T=C;T<l.length&&_(T)<f+p;)T++;else T=Math.min(l.length,Math.ceil((f+p)/c));const I=e.selectionAnchorRow??e.selectedRow,x=e.selectionAnchorCol??e.selectedCol,M=e.selectedRow>=0&&I>=0?Math.min(e.selectedRow,I):-1,D=e.selectedRow>=0&&I>=0?Math.max(e.selectedRow,I):-1,U=e.selectedCol>=0&&x>=0?Math.min(e.selectedCol,x):-1,B=e.selectedCol>=0&&x>=0?Math.max(e.selectedCol,x):-1,W=D>M||B>U;let Z=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY,J=Number.POSITIVE_INFINITY,H=Number.NEGATIVE_INFINITY;const ee=(O,$,q,fe)=>{m?(t.shadowColor=fe,t.shadowBlur=12,t.fillText(O,$,q),t.shadowBlur=6,t.fillText(O,$,q),t.shadowBlur=2,t.fillText(O,$,q),t.shadowBlur=0):t.fillText(O,$,q)};for(let O=C;O<T;O++){const $=l[O],q=P(O),fe=Ht+_(O)-f;O%2===1&&(t.fillStyle=o.rowAlt,t.fillRect(0,fe,r,q));const Q=O>=M&&O<=D;O===e.hoveredRow&&!Q&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,fe,r,q)),Q&&!W&&(t.fillStyle=bl(o.accent,.1),t.fillRect(0,fe,r,q)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,fe+q-.5),t.lineTo(r,fe+q-.5),t.stroke();let he=-d;for(let _e=0;_e<a.length;_e++){const ve=a[_e];if(he+ve.width<=0){he+=ve.width;continue}if(he>=r)break;const Be=Q&&_e>=U&&_e<=B;Be&&W&&(t.fillStyle=bl(o.accent,.14),t.fillRect(he,fe,ve.width,q)),Be&&(he<Z&&(Z=he),he+ve.width>Y&&(Y=he+ve.width),fe<J&&(J=fe),fe+q>H&&(H=fe+q));const ze=e.getCellStyle(ve,$),He=ze.color??o.text,Me=ze.textAlign??"left",R=e.formatCell(ve,$);if(t.save(),t.beginPath(),t.rect(he+1,fe,ve.width-2,q),t.clip(),t.font=da(),t.fillStyle=He,t.textBaseline="middle",ve.colDef.wrap){t.textAlign="left";const F=ip(t,R,Math.max(20,ve.width-16));let w=fe+np+ea/2;for(const de of F){if(w-ea/2>=fe+q)break;ee(de,he+8,w,He),w+=ea}}else{const F=Me==="right"?he+ve.width-8:he+8;t.textAlign=Me==="right"?"right":"left",ee(R,F,fe+q/2,He)}t.restore(),O===e.selectedRow&&_e===e.selectedCol&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(he+1.5,fe+1.5,ve.width-3,q-3)),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(he+ve.width-.5,fe),t.lineTo(he+ve.width-.5,fe+q),t.stroke(),he+=ve.width}}if(W&&Z<Y&&J<H&&(t.strokeStyle=o.accent,t.lineWidth=2,t.strokeRect(Z+.5,J+.5,Y-Z-1,H-J-1)),t.restore(),u.length>0){const O=s-g-v;t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,O-.5),t.lineTo(r,O-.5),t.stroke();for(let $=0;$<u.length;$++){const q=u[$],fe=O+$*c;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,fe,r,c);let Q=-d;for(let he=0;he<a.length;he++){const _e=a[he];if(Q+_e.width<=0){Q+=_e.width;continue}if(Q>=r)break;const ve=e.getCellStyle(_e,q),Be=ve.color??o.text,ze=ve.textAlign??"left",He=e.formatCell(_e,q);t.save(),t.beginPath(),t.rect(Q+1,fe,_e.width-2,c),t.clip(),t.font=`bold ${Dc}px system-ui, -apple-system, sans-serif`,t.fillStyle=Be,t.textBaseline="middle",ze==="right"?(t.textAlign="right",t.fillText(He,Q+_e.width-8,fe+c/2)):(t.textAlign="left",t.fillText(He,Q+8,fe+c/2)),t.restore(),t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(Q+_e.width-.5,fe),t.lineTo(Q+_e.width-.5,fe+c),t.stroke(),Q+=_e.width}t.strokeStyle=o.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,fe+c-.5),t.lineTo(r,fe+c-.5),t.stroke()}}if(e.aggregateRow){const O=s-v;t.fillStyle=bl(o.accent,.1),t.fillRect(0,O,r,v),t.strokeStyle=o.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,O-.5),t.lineTo(r,O-.5),t.stroke();let $=-d;for(let q=0;q<a.length;q++){const fe=a[q];if($+fe.width<=0){$+=fe.width;continue}if($>=r)break;const he=e.getCellStyle(fe,e.aggregateRow).textAlign??"left",_e=e.aggregateRow[fe.colId]??"";t.save(),t.beginPath(),t.rect($+1,O,fe.width-2,v),t.clip(),t.font=`bold ${Dc}px system-ui, -apple-system, sans-serif`,t.fillStyle=o.accent,t.textBaseline="middle",m&&(t.shadowColor=o.accent,t.shadowBlur=8),he==="right"?(t.textAlign="right",t.fillText(_e,$+fe.width-8,O+v/2)):(t.textAlign="left",t.fillText(_e,$+8,O+v/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.beginPath(),t.moveTo($+fe.width-.5,O),t.lineTo($+fe.width-.5,O+v),t.stroke(),$+=fe.width}}t.restore()}function bl(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${r},${e})`}const Ho=190,El=34;function ry(n,e,t){const i=Math.max(4,Math.min(e,n-Ho-4)),r=Ht+6,s=t?26:0;return{box:{x:i,y:r,w:Ho,h:El},input:{x:i+9,y:r+5,w:Ho-18-s,h:El-10},clear:t?{x:i+Ho-28,y:r,w:28,h:El}:null}}const Tl=(n,e,t,i=0)=>n>=t.x-i&&n<=t.x+t.w+i&&e>=t.y&&e<=t.y+t.h;function Vo(n,e,t,i=1){return t.clear&&Tl(n,e,t.clear,4*(i-1))?"clear":Tl(n,e,t.input)?"input":Tl(n,e,t.box)?"inside":"outside"}function sy(n,e,t,i,r){const{box:s,input:o,clear:a}=e;n.save(),n.fillStyle="rgba(8,12,22,0.94)",n.strokeStyle=r.accent,n.lineWidth=1,n.beginPath(),n.roundRect(s.x+.5,s.y+.5,s.w-1,s.h-1,4),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.05)",n.beginPath(),n.roundRect(o.x,o.y,o.w,o.h,3),n.fill(),n.beginPath(),n.rect(o.x,o.y,o.w,o.h),n.clip(),n.font=da(),n.textBaseline="middle";const l=o.y+o.h/2+1,u=5;if(t){n.fillStyle=r.text;const c=n.measureText(t).width,f=c>o.w-2*u-2?o.x+o.w-u-2-c:o.x+u;n.fillText(t,f,l),i&&(n.fillStyle=r.accent,n.fillRect(Math.min(f+c+1,o.x+o.w-u),o.y+4,1.5,o.h-8))}else n.fillStyle=r.textHeader,n.fillText("Filter…",o.x+u,l),i&&(n.fillStyle=r.accent,n.fillRect(o.x+u,o.y+4,1.5,o.h-8));n.restore(),a&&(n.save(),n.font=da(),n.textBaseline="middle",n.textAlign="center",n.fillStyle=r.textHeader,n.fillText("✕",a.x+a.w/2,a.y+a.h/2+1),n.restore())}function oy(n,e,t){const i=n-.5,r=e-.5,s=Math.abs(t),o=(i*i+r*r)*s;if(t<0){const u=.5*s,f=1/(1-2*(.5*(1+u)*u)),d=(i+i*(1+o)*o*-1)*f,m=(r+r*(1+o)*o*-1)*f;return[.5+d,.5+m]}const a=i*(1+o)*o,l=r*(1+o)*o;return[n+a,e+l]}function sp(n,e,t,i,r,s=t,o=i){const a=n/t,l=1-e/i,[u,c]=oy(a,l,r);return u<0||u>1||c<0||c>1?[-1,-1]:[u*s,(1-c)*o]}function wl(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function ay(n,e,t,i=1){return n>=e+t-24*i&&n<e+t}function ed(n,e,t,i=1){const r=e+t;return n>=r-6*i&&n<=r+1*i}function ly(n,e,t,i,r,s,o,a,l,u=!1,c){const f=n+l;let d=-1,m=0;for(let E=0;E<t.length;E++){if(f>=m&&f<m+t[E].width){d=E;break}m+=t[E].width}if(e<Ht)return{area:"header",colIdx:d,rowIdx:-1};const g=u?rp:0;if(g>0&&e>=o-g)return{area:"agg",colIdx:d,rowIdx:-1};const v=a*r;if(v>0&&e>=o-v-g){const E=Math.floor((e-(o-v-g))/r);return{area:"pinned",colIdx:d,rowIdx:E}}const p=e-Ht+s,h=c&&c.length===i?ha(lu(c,i),p):Math.floor(p/r);return h>=0&&h<i?{area:"body",colIdx:d,rowIdx:h}:{area:"none",colIdx:-1,rowIdx:-1}}function Dr(n){return n/45*.55}function op(n){const e=Math.abs(Dr(n));if(e===0)return 1;if(n<0){const i=.5*e;return 1/(1-2*(.5*(1+i)*i))}const t=.25*e;return 1+2*(.5*(1+t)*t)}const cy=500,ap=cy/2,Ic=1.6,lp=`
  uniform vec2  uMouseUV;    // mouse position in UV space; (-999,-999) = lens off
  uniform float uLensR;      // lens radius in aspect-corrected units (0 = disabled)
  uniform float uLensZoom;   // lens magnification factor (~1.6)
  uniform vec3  uLensTint;   // ring tint (phosphor accent)
  uniform float uAspect;     // canvas W / H — needed to draw a circular lens
`,cp=`
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
`,up=`
    // Lens ring — visually masks the magnification seam at the rim.
    if (uLensR > 0.0) {
      vec2  rd       = (vUv - uMouseUV) * vec2(uAspect, 1.0);
      float ringDist = abs(length(rd) - uLensR);
      float ring     = 1.0 - smoothstep(0.002, 0.012, ringDist);
      color.rgb     += uLensTint * ring * 0.32;
    }
`;function fp(){return{uMouseUV:{value:new _t(-999,-999)},uLensR:{value:0},uLensZoom:{value:Ic},uLensTint:{value:new pt(7268263)},uAspect:{value:1}}}const Vt={x:-999,y:-999};function dp(n,e,t,i,r){const s=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=s&&r>0?ap/r:0,n.uniforms.uAspect.value=r>0?i/r:1}function mo(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const uy=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,fy=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,dy=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${lp}

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

  ${cp}

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
    ${up}
    gl_FragColor = color;
  }
`;function hy(n,e,t){const i=n-.5,r=e-.5,s=Math.abs(t),o=(i*i+r*r)*s,a=(1+o)*o*Math.sign(t);let l=i+i*a,u=r+r*a;if(t<0){const c=.5*s,f=.5*(1+c)*c;l/=1-2*f,u/=1-2*f}return{x:.5+l,y:.5+u}}function py(n,e,t,i,r,s){if(!i||t.x===Vt.x||s<=0)return{x:n,y:e};const o=r/s,a=ap/s,l=(n-t.x)*o,u=e-t.y,c=Math.hypot(l,u);if(c>=a)return{x:n,y:e};const f=c/a,d=Math.min(Math.max((f-.88)/(1-.88),0),1),m=d*d*(3-2*d),g=Ic+(1-Ic)*m;return{x:t.x+l/g/o,y:t.y+u/g}}class Ua{constructor(e){en(this,"canvas");en(this,"material");en(this,"mode");en(this,"dpr",1);en(this,"logicalW",0);en(this,"logicalH",0);en(this,"screenW",0);en(this,"screenH",0);en(this,"texture");en(this,"painter");en(this,"maxDpr");en(this,"look",{curvature:0,scanlines:!0,vignette:!0,magnify:!1});en(this,"mouse",{x:Vt.x,y:Vt.y});en(this,"anisotropy",1);this.painter=e.paint,this.mode=e.mode??"screen",this.maxDpr=e.maxDpr??2,this.canvas=document.createElement("canvas"),this.texture=this.makeTexture(),this.material=new $n({uniforms:{uTex:{value:this.texture},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...fp()},vertexShader:this.mode==="world"?fy:uy,fragmentShader:dy,transparent:!0,side:this.mode==="world"?ri:Ii})}setAnisotropy(e){this.anisotropy=Math.max(1,e),this.texture.anisotropy=this.anisotropy,this.texture.needsUpdate=!0}makeTexture(){const e=new fa(this.canvas);return e.magFilter=Gt,this.mode==="world"?(e.generateMipmaps=!0,e.minFilter=Qi,e.anisotropy=this.anisotropy):e.minFilter=Gt,e}resize(e,t,i=window.devicePixelRatio||1){if(!e||!t)return!1;const r=Math.min(i,this.maxDpr),s=Math.round(e*r),o=Math.round(t*r);return this.canvas.width===s&&this.canvas.height===o&&this.dpr===r?!1:(this.dpr=r,this.logicalW=e,this.logicalH=t,this.canvas.width=s,this.canvas.height=o,this.texture.dispose(),this.texture=this.makeTexture(),this.material.uniforms.uTex.value=this.texture,!0)}setLook(e){this.look={...this.look,...e}}setScreenSize(e,t){this.screenW=e,this.screenH=t}setLens(e){this.mouse.x=e?e.x:Vt.x,this.mouse.y=e?e.y:Vt.y}syncUniforms(){const e=this.material.uniforms;e.uStrength.value=Dr(this.look.curvature),e.uScanlines.value=this.look.scanlines?1:0,e.uVignette.value=this.look.vignette?1:0,dp(this.material,this.look.magnify,this.mouse,this.screenW||this.logicalW||this.canvas.width,this.screenH||this.logicalH||this.canvas.height)}paint(e){this.canvas.width&&(this.painter(this.canvas,{dpr:this.dpr,glow:e}),this.texture.needsUpdate=!0)}paintOnly(e){this.canvas.width&&this.painter(this.canvas,{dpr:this.dpr,glow:e})}contentPoint(e,t){const i=py(e,t,this.mouse,this.look.magnify,this.screenW||this.logicalW,this.screenH||this.logicalH),r=hy(i.x,i.y,Dr(this.look.curvature));return r.x<0||r.x>1||r.y<0||r.y>1?null:{x:r.x*this.logicalW,y:(1-r.y)*this.logicalH}}dispose(){this.texture.dispose(),this.material.dispose()}}const my=600;function gy(n){const e=Hc(!0);return e.run(()=>vy(n,e))}function vy(n,e){var Tn,Bi;const{emit:t,host:i}=n,r=we(((Tn=n.rowData)==null?void 0:Tn.call(n))??[]),s=we(((Bi=n.pinnedBottomRowData)==null?void 0:Bi.call(n))??[]),o=we(""),a=we([]),l=is({}),u=is({}),c=is(new Set),f=we(0),d=we(0),m=we(0),g=we(0),v=we(0),p=we(0),h=we(0),E=we(-1),b=we(null),_=we(null),P=we(null),C=we(""),T=we(0);let I=null;const x=we(!0);let M=null;Ke(P,z=>{var pe;M&&(clearInterval(M),M=null),z?(x.value=!0,M=setInterval(()=>{x.value=!x.value,i.redraw()},530),un(()=>{var me;return(me=i.focusFilterInput)==null?void 0:me.call(i)})):(I=null,(pe=i.blurFilterInput)==null||pe.call(i)),i.redraw()});function D(z){return z.colId??z.field??(z.headerName?z.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const U=tt(()=>{var pe;const z=((pe=n.defaultColDef)==null?void 0:pe.call(n))??{};return n.columnDefs().filter(me=>!c.has(D(me))).map(me=>{const Ae=D(me),Le={...z,...me};return{colId:Ae,colDef:Le,width:u[Ae]??Le.width??100}})}),B=tt(()=>{const z=d.value;if(!z)return U.value;const pe=U.value.reduce((Le,ke)=>Le+ke.width,0);if(!pe||pe>=z)return U.value;const me=z/pe;let Ae=0;return U.value.map((Le,ke)=>{const Je=ke===U.value.length-1?z-Ae:Math.max(8,Math.round(Le.width*me));return Ae+=Je,{...Le,width:Je}})}),W=tt(()=>{const z=B.value.reduce((pe,me)=>pe+me.width,0);return Math.max(0,z-d.value)});function Z(z,pe){if(pe.colDef.valueGetter)return pe.colDef.valueGetter({data:z,colDef:pe.colDef});if(pe.colDef.field)return z[pe.colDef.field]}function Y(z,pe){const me=Z(pe,z);return z.colDef.valueFormatter?z.colDef.valueFormatter({value:me,data:pe,colDef:z.colDef})??"":z.colDef.cellRenderer?(z.colDef.cellRenderer({value:me,data:pe,colDef:z.colDef})??"").replace(/<[^>]+>/g,""):me==null?"":String(me)}function J(z,pe){return z.colDef.cellStyle?typeof z.colDef.cellStyle=="function"?z.colDef.cellStyle({value:Z(pe,z),data:pe,colDef:z.colDef})??{}:z.colDef.cellStyle:{}}function H(){return n.columnDefs().map((z,pe)=>({d:z,i:pe})).filter(({d:z})=>z.sort).sort((z,pe)=>(z.d.sortIndex??z.i)-(pe.d.sortIndex??pe.i)).map(({d:z})=>({colId:D(z),dir:z.sort}))}const ee=tt(()=>{f.value;let z=r.value;const pe=o.value.trim().toLowerCase();pe&&(z=z.filter(Ae=>U.value.some(Le=>String(Z(Ae,Le)??"").toLowerCase().includes(pe))));for(const[Ae,Le]of Object.entries(l)){if(!Le)continue;const ke=U.value.find(Ve=>Ve.colId===Ae);if(ke)if(Le.startsWith("__eq__")){const Ve=Le.slice(6).toLowerCase();z=z.filter(Je=>String(Z(Je,ke)??"").toLowerCase()===Ve)}else{const Ve=Le.toLowerCase();z=z.filter(Je=>String(Z(Je,ke)??"").toLowerCase().includes(Ve))}}const me=a.value.map(({colId:Ae,dir:Le})=>({col:U.value.find(ke=>ke.colId===Ae),dir:Le})).filter(Ae=>!!Ae.col);return me.length&&(z=[...z].sort((Ae,Le)=>{for(const{col:ke,dir:Ve}of me){const Je=Z(Ae,ke),Wt=Z(Le,ke);let kt=0;if(ke.colDef.comparator?kt=ke.colDef.comparator(Je,Wt):typeof Je=="number"&&typeof Wt=="number"?kt=Je-Wt:kt=String(Je??"").localeCompare(String(Wt??""),void 0,{numeric:!0}),kt)return Ve==="asc"?kt:-kt}return 0})),z});let O=null;function $(){if(typeof document>"u")return null;O||(O=document.createElement("canvas"));const z=O.getContext("2d");return z&&(z.font=da()),z}const q=tt(()=>B.value.some(z=>z.colDef.wrap)),fe=tt(()=>{if(!q.value)return null;const z=$();if(!z)return null;const pe=B.value.filter(Ae=>Ae.colDef.wrap),me=n.rowHeight();return ee.value.map(Ae=>{let Le=1;for(const ke of pe){const Ve=ip(z,Y(ke,Ae),Math.max(20,ke.width-16));Ve.length>Le&&(Le=Ve.length)}return ty(Le,me)})}),Q=tt(()=>fe.value?lu(fe.value,ee.value.length):null),he=tt(()=>Q.value?Q.value[ee.value.length]:ee.value.length*n.rowHeight()),_e=tt(()=>{const z=s.value.length*n.rowHeight();return Math.max(0,m.value-Ht-z)}),ve=tt(()=>Math.max(0,he.value-_e.value)),Be=tt(()=>Math.max(1,Math.floor(_e.value/n.rowHeight()))),ze=tt(()=>{const z=ee.value.length;if(z===0)return 0;const pe=Q.value?ha(Q.value,p.value):Math.floor(p.value/n.rowHeight());return Math.min(z-1,pe)}),He=tt(()=>{const z=ee.value.length;return z===0?0:Q.value?Math.min(z-1,ha(Q.value,p.value+_e.value-1)):Math.min(z-1,ze.value+Be.value-1)}),Me=tt(()=>{const z=U.value.filter(Le=>Le.colDef.aggFunc!=null);if(z.length===0)return null;const pe=ee.value,me={};for(const Le of z){const ke=pe.map(Je=>Z(Je,Le)),Ve=ny(ke,Le.colDef.aggFunc);if(Ve==null){me[Le.colId]="";continue}me[Le.colId]=Le.colDef.aggValueFormatter?Le.colDef.aggValueFormatter(Ve):String(Ve)}const Ae=z[0].colId;return me[Ae]===""&&(me[Ae]="Σ"),me});Ke(ee,()=>{p.value=0,b.value=null}),Ke(W,()=>{h.value=Math.min(h.value,W.value)}),Ke(ve,()=>{p.value=Math.min(p.value,ve.value)}),Ke([ee,()=>s.value,B,p,E,b],()=>un(()=>i.redraw())),Ke(b,z=>{if(!z)return;const pe=ee.value[z.row],me=B.value[z.col];pe&&me&&t("cell-selected",{data:pe,row:z.row,col:z.col,colId:me.colId})});function R(z,pe,me,Ae){g.value=me,v.value=Ae,d.value=z,m.value=pe,h.value=Math.max(0,Math.min(W.value,h.value)),p.value=Math.max(0,Math.min(ve.value,p.value))}function F(z){const pe=Q.value,me=pe?pe[z]:z*n.rowHeight(),Ae=pe?pe[z+1]:me+n.rowHeight();me<p.value?p.value=me:Ae>p.value+_e.value&&(p.value=Math.min(ve.value,Ae-_e.value))}function w(z){var Le;if(!d.value)return;let pe=0;for(let ke=0;ke<z;ke++)pe+=B.value[ke].width;const me=((Le=B.value[z])==null?void 0:Le.width)??0,Ae=pe-h.value;Ae<0?h.value=Math.max(0,pe):Ae+me>d.value&&(h.value=Math.min(W.value,pe+me-d.value))}function de(){p.value=Math.max(0,p.value-_e.value),i.redraw()}function ne(){p.value=Math.min(ve.value,p.value+_e.value),i.redraw()}let te=!1,ae="",ge=0,le=0,y=1,S=!1,L=!1,V=0,j=0,ie=0,be=0,ye=!1;function Te(z,pe,me=1){var Ae;te=!0,ae=z,ge=pe,y=me,le=((Ae=B.value.find(Le=>Le.colId===z))==null?void 0:Ae.width)??100,S=!1}function Ge(z,pe){L=!0,ye=!1,V=z,j=pe,ie=h.value,be=p.value}function N(z,pe){const me=V-z,Ae=j-pe;(Math.abs(me)>4||Math.abs(Ae)>4)&&(ye=!0),h.value=Math.max(0,Math.min(W.value,ie+me)),p.value=Math.max(0,Math.min(ve.value,be+Ae)),i.redraw()}function k(){L&&(ye&&(S=!0),L=!1)}function re(z,pe){if(L){N(z,pe);return}if(!te)return;const me=d.value,Ae=Math.max(30,le+(z-ge)*y),Le=U.value.filter(Ve=>Ve.colId!==ae).reduce((Ve,Je)=>Ve+Je.width,0),ke=me-Ae;ke>10&&(u[ae]=Math.max(10,Math.round(Ae*Le/ke))),i.redraw()}function Ee(){k(),te&&(te=!1,S=!0,t("column-resized"))}function xe(z,pe){return ly(z,pe,B.value,ee.value.length,n.rowHeight(),p.value,m.value,s.value.length,h.value,Me.value!==null,fe.value??void 0)}let Ue=0;function Pe(z,pe,me){P.value=null;const Ae=Date.now();if(z!==0){Ue=Ae,h.value=Math.max(0,Math.min(W.value,h.value+z)),i.redraw();return}if(me&&pe!==0){Ue=Ae,h.value=Math.max(0,Math.min(W.value,h.value+pe)),i.redraw();return}Ae-Ue<my||(p.value=Math.max(0,Math.min(ve.value,p.value+pe)),i.redraw())}function $e(z){if(z.cx<0)return E.value=-1,i.redraw(),null;if(P.value&&I){const Ae=Vo(z.cx,z.cy,I,z.hitScale);if(Ae!=="outside")return E.value=-1,i.redraw(),Ae==="clear"?"pointer":"text"}const pe=xe(z.cx,z.cy);E.value=pe.area==="body"?pe.rowIdx:-1;let me;if(pe.area==="header"&&pe.colIdx>=0){const Ae=B.value[pe.colIdx],Le=wl(pe.colIdx,B.value),ke=z.cx+h.value;me=Ae&&ed(ke,Le,Ae.width,z.hitScale)?"col-resize":"pointer"}else pe.area==="body"?me="pointer":me="default";return i.redraw(),me}function G(){E.value=-1,i.redraw()}function Ce(z,pe,me){if(z.cx<0||P.value&&I&&Vo(z.cx,z.cy,I,z.hitScale)!=="outside")return;if(z.cy>=Ht){Ge(pe,me);return}const Ae=z.cx+h.value;for(let Le=0;Le<B.value.length;Le++){const ke=B.value[Le],Ve=wl(Le,B.value);if(ke.colDef.resizable!==!1&&ed(Ae,Ve,ke.width,z.hitScale)){Te(ke.colId,pe,z.hitScale);return}}}function ce(z,pe){var Le,ke,Ve;const me={stopPropagation:!1};if(S)return S=!1,me;if(te)return me;if(z.cx<0)return P.value=null,me;if(P.value&&I){const Je=Vo(z.cx,z.cy,I,z.hitScale);if(Je==="clear")return mt(),me;if(Je!=="outside")return(Le=i.focusFilterInput)==null||Le.call(i),me;P.value=null}const Ae=xe(z.cx,z.cy);if(Ae.area==="header"&&Ae.colIdx>=0){const Je=B.value[Ae.colIdx],Wt=wl(Ae.colIdx,B.value),kt=z.cx+h.value;if(Je.colDef.filter&&ay(kt,Wt,Je.width,z.hitScale))me.stopPropagation=!0,P.value===Je.colId?P.value=null:(P.value=Je.colId,C.value=(ke=l[Je.colId])!=null&&ke.startsWith("__eq__")?l[Je.colId].slice(6):l[Je.colId]??"",T.value=Math.max(0,Wt-h.value));else if(Je.colDef.sortable!==!1){P.value=null;const A=a.value.find(se=>se.colId===Je.colId),X=A?A.dir==="asc"?"desc":null:"asc";pe.shiftKey?a.value=A?X?a.value.map(se=>se.colId===Je.colId?{colId:se.colId,dir:X}:se):a.value.filter(se=>se.colId!==Je.colId):[...a.value,{colId:Je.colId,dir:"asc"}]:a.value=X?[{colId:Je.colId,dir:X}]:[],t("sort-changed")}return me}if(P.value=null,Ae.area==="body"&&Ae.rowIdx>=0&&Ae.colIdx>=0){const Je=Ae.rowIdx;pe.shiftKey&&b.value?(_.value||(_.value={...b.value}),b.value={row:Je,col:Ae.colIdx}):(b.value={row:Je,col:Ae.colIdx},_.value={row:Je,col:Ae.colIdx}),(Ve=i.focusCanvas)==null||Ve.call(i);const Wt=ee.value[Je],kt=B.value[Ae.colIdx];Wt&&kt&&(t("row-clicked",{data:Wt,event:pe}),t("cell-selected",{data:Wt,row:Je,col:Ae.colIdx,colId:kt.colId}))}return me}function Se(z){P.value&&(z&&I&&z.cx>=0&&Vo(z.cx,z.cy,I,z.hitScale)!=="outside"||(P.value=null))}function Ie(z){const me=B.value.length-1,Ae=ee.value.length-1;if(!b.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(z.key)&&(z.preventDefault(),b.value={row:ze.value,col:0},_.value={row:ze.value,col:0});return}let{row:Le,col:ke}=b.value;const Ve=(Je,Wt,kt=!1)=>{Le=Math.max(0,Math.min(Ae,Je)),ke=Math.max(0,Math.min(me,Wt)),b.value={row:Le,col:ke},kt||(_.value={row:Le,col:ke}),F(Le),w(ke)};switch(z.key){case"ArrowDown":z.preventDefault(),Ve(Le+1,ke,z.shiftKey);break;case"ArrowUp":z.preventDefault(),Ve(Le-1,ke,z.shiftKey);break;case"ArrowRight":z.preventDefault(),z.shiftKey?Ve(Le,ke+1,!0):ke<me?Ve(Le,ke+1):Ve(Le+1,0);break;case"ArrowLeft":z.preventDefault(),z.shiftKey?Ve(Le,ke-1,!0):ke>0?Ve(Le,ke-1):Ve(Le-1,me);break;case"Tab":z.preventDefault(),z.shiftKey?ke>0?Ve(Le,ke-1):Ve(Le-1,me):ke<me?Ve(Le,ke+1):Ve(Le+1,0);break;case"Enter":z.preventDefault(),z.shiftKey?Ve(Le-1,ke):Ve(Le+1,ke);break;case"Home":z.preventDefault(),z.ctrlKey||z.metaKey?Ve(0,0,z.shiftKey):Ve(Le,0,z.shiftKey);break;case"End":z.preventDefault(),z.ctrlKey||z.metaKey?Ve(Ae,me,z.shiftKey):Ve(Le,me,z.shiftKey);break;case"PageDown":z.preventDefault(),Ve(Math.min(Ae,Le+Be.value),ke,z.shiftKey);break;case"PageUp":z.preventDefault(),Ve(Math.max(0,Le-Be.value),ke,z.shiftKey);break;case"Escape":b.value=null,_.value=null;break;case"c":case"C":(z.ctrlKey||z.metaKey)&&(z.preventDefault(),De());break}}function De(){var kt;if(!b.value)return;const z=B.value,pe=ee.value,me=_.value??b.value,Ae=Math.min(me.row,b.value.row),Le=Math.max(me.row,b.value.row),ke=Math.min(me.col,b.value.col),Ve=Math.max(me.col,b.value.col),Je=[];for(let A=Ae;A<=Le;A++){const X=pe[A];if(!X)continue;const se=[];for(let oe=ke;oe<=Ve;oe++){const K=z[oe];K&&se.push(Y(K,X).replace(/[\t\r\n]+/g," "))}Je.push(se.join("	"))}const Wt=Je.join(`
`);(kt=navigator.clipboard)==null||kt.writeText(Wt).catch(()=>{})}function Ze(z){C.value=z,z?l[P.value]=z:delete l[P.value],t("filter-changed")}function mt(){P.value&&delete l[P.value],C.value="",P.value=null,t("filter-changed")}function Ct(){P.value=null}function ot(z,pe){if(!P.value||!z.width)return;const me=z.getContext("2d");if(!me)return;me.setTransform(pe,0,0,pe,0,0),I=ry(z.width/pe,T.value,!!C.value);const Ae=_s[n.theme()]??_s.none;sy(me,I,C.value,x.value,Ae)}function $t(z,{dpr:pe,glow:me}){var Ae,Le,ke,Ve;iy(z,{cols:B.value,rows:ee.value,pinnedRows:s.value,rowHeight:n.rowHeight(),rowHeights:fe.value??void 0,scrollY:p.value,scrollX:h.value,theme:n.theme(),glow:me,sorts:a.value,colFilters:l,hoveredRow:E.value,selectedRow:((Ae=b.value)==null?void 0:Ae.row)??-1,selectedCol:((Le=b.value)==null?void 0:Le.col)??-1,selectionAnchorRow:((ke=_.value)==null?void 0:ke.row)??-1,selectionAnchorCol:((Ve=_.value)==null?void 0:Ve.col)??-1,formatCell:Y,getCellStyle:J,aggregateRow:Me.value,dpr:pe}),ot(z,pe)}const Tt={setGridOption(z,pe){z==="rowData"?r.value=pe:z==="pinnedBottomRowData"?s.value=pe:z==="quickFilterText"&&(o.value=pe)},getColumnState(){return n.columnDefs().map(z=>{var me;const pe=D(z);return{colId:pe,hide:c.has(pe),sort:((me=a.value.find(Ae=>Ae.colId===pe))==null?void 0:me.dir)??null,sortIndex:a.value.some(Ae=>Ae.colId===pe)?a.value.findIndex(Ae=>Ae.colId===pe):null,width:u[pe]??z.width}})},applyColumnState({state:z}){const pe=z.filter(me=>me.sort).sort((me,Ae)=>(me.sortIndex??0)-(Ae.sortIndex??0));pe.length&&(a.value=pe.map(me=>({colId:me.colId,dir:me.sort})));for(const me of z)me.hide===!0&&c.add(me.colId),me.hide===!1&&c.delete(me.colId),me.width&&(u[me.colId]=me.width)},setFilterModel(z){for(const pe of Object.keys(l))delete l[pe];if(z)for(const[pe,me]of Object.entries(z))(me==null?void 0:me.type)==="equals"?l[pe]=`__eq__${me.filter}`:me!=null&&me.filter&&(l[pe]=me.filter)},getFilterModel(){const z={};for(const[pe,me]of Object.entries(l))me&&(z[pe]=me.startsWith("__eq__")?{type:"equals",filter:me.slice(6)}:{type:"contains",filter:me});return z},async setColumnFilterModel(z,pe){pe?pe.type==="equals"?l[z]=`__eq__${pe.filter}`:l[z]=pe.filter??"":delete l[z]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:z="export.csv"}={}){const pe=U.value,me=pe.map(Ve=>Ve.colDef.headerName??Ve.colId).join(","),Ae=ee.value.map(Ve=>pe.map(Je=>`"${String(Y(Je,Ve)).replace(/"/g,'""')}"`).join(",")),Le=new Blob([[me,...Ae].join(`
`)],{type:"text/csv"}),ke=URL.createObjectURL(Le);Object.assign(document.createElement("a"),{href:ke,download:z}).click(),URL.revokeObjectURL(ke)},resize(){var z;(z=i.resize)==null||z.call(i)},resetColumnState(){c.clear();for(const z of n.columnDefs())z.hide&&c.add(D(z));a.value=H();for(const z of Object.keys(u))delete u[z];for(const z of Object.keys(l))delete l[z];o.value="",p.value=0,b.value=null,P.value=null}};function Fr(){var z,pe;for(const me of n.columnDefs())me.hide&&c.add(D(me));a.value.length||(a.value=H()),r.value=((z=n.rowData)==null?void 0:z.call(n))??[],s.value=((pe=n.pinnedBottomRowData)==null?void 0:pe.call(n))??[]}function ui(){M&&(clearInterval(M),M=null),e.stop()}return{scrollX:h,scrollY:p,maxScrollX:W,maxScrollY:ve,filteredRows:ee,displayCols:B,resolvedCols:U,aggregateRow:Me,rowHeights:fe,firstVisibleRow:ze,lastVisibleRow:He,visibleRowCount:Be,selectedCell:b,selectionAnchor:_,hoveredRow:E,activeFilter:P,filterPopupValue:C,caretOn:x,canvasW:d,canvasH:m,screenW:g,screenH:v,sortState:a,colFilters:l,formatCell:Y,getCellValue:Z,hit:xe,get resizing(){return te},get panning(){return L},setViewport:R,pageUp:de,pageDown:ne,ensureRowVisible:F,ensureColVisible:w,wheel:Pe,hover:$e,leave:G,pointerDown:Ce,click:ce,docClick:Se,keyDown:Ie,panStart:Ge,panMove:N,panEnd:k,globalMove:re,globalUp:Ee,setFilterText:Ze,clearFilter:mt,closeFilter:Ct,paint:$t,api:Tt,init:Fr,dispose:ui}}const _y=["value"],xy=["disabled"],My=["disabled"],Sy=28,yy=ai({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},bendField:{type:Boolean,default:!0}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,r=we(null),s=gy({columnDefs:()=>t.columnDefs,defaultColDef:()=>t.defaultColDef,rowData:()=>t.rowData,pinnedBottomRowData:()=>t.pinnedBottomRowData,rowHeight:()=>t.rowHeight,theme:()=>t.theme,emit:i,host:{redraw:()=>Z(),resize:()=>W(),focusCanvas:()=>{var L;return(L=_.value)==null?void 0:L.focus()},focusFilterInput:()=>{var L;return(L=r.value)==null?void 0:L.focus()},blurFilterInput:()=>{var L;return(L=r.value)==null?void 0:L.blur()}}}),{scrollY:o,maxScrollY:a,filteredRows:l,displayCols:u,selectedCell:c,firstVisibleRow:f,lastVisibleRow:d,activeFilter:m,filterPopupValue:g,formatCell:v,pageUp:p,pageDown:h,clearFilter:E}=s,b=we(null),_=we(null),P=Ai("cathodeResetTick",we(0));Ke(P,()=>ne());let C=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),T=null,I=!1;function x(){if(T){try{T.forceContextLoss()}catch{}try{T.dispose()}catch{}T=null}}let M,D;const U=new Ua({paint:(L,{dpr:V,glow:j})=>s.paint(L,{dpr:V,glow:j})});function B(){if(!(!_.value||!b.value)){try{T=new Ts({canvas:_.value,antialias:!1,alpha:!0})}catch{I=!0}if(!I&&!T.getContext()&&(T.dispose(),T=null,I=!0),I){W();return}T.setPixelRatio(1),T.setClearColor(0,0),M=new ws,D=new Ur(-1,1,1,-1,0,1),M.add(new cn(new li(2,2),U.material)),W()}}function W(){if(!b.value||!T&&!I)return;const L=b.value.clientWidth,V=b.value.clientHeight-(t.pagination?Sy:0);if(!L||!V)return;const j=t.bendField?Math.round(L*op(t.curvature)):L;U.resize(j,V),U.setScreenSize(L,V),C=U.dpr,s.setViewport(j,V,L,V),T?(T.setPixelRatio(C),T.setSize(L,V)):_.value&&(_.value.width=Math.round(L*C),_.value.height=Math.round(V*C),_.value.style.width=L+"px",_.value.style.height=V+"px"),Z()}function Z(){if(!U.canvas.width)return;if(I){if(!_.value)return;U.paintOnly(!1);const V=U.canvas,j=_.value.getContext("2d");j&&j.drawImage(V,0,0,V.width,V.height,0,0,_.value.width,_.value.height);return}if(!T)return;const L=t.theme==="paper";U.setLook({curvature:t.curvature,scanlines:t.scanlines&&!L,vignette:!L,magnify:t.magnify}),U.syncUniforms(),U.paint(t.glow),T.render(M,D)}function Y(L,V){if(!_.value)return[-1,-1];const j=_.value.getBoundingClientRect(),ie=L-j.left,be=V-j.top,ye=j.width,Te=j.height,Ge=Dr(t.curvature),[N,k]=sp(ie,be,ye,Te,Ge,U.canvas.width/C||ye,U.canvas.height/C||Te);return N<0?[-1,-1]:[N,k]}function J(L){return Y(L.clientX,L.clientY)}function H(L){if(!_.value)return 1;const[V]=Y(L.clientX-4,L.clientY),[j]=Y(L.clientX+4,L.clientY);return V<0||j<0?1:Math.max(1,Math.abs(j-V)/8)}function ee(L){const[V,j]=J(L);return{cx:V,cy:j,hitScale:H(L)}}function O(L){s.wheel(L.deltaX,L.deltaY,L.shiftKey)}function $(L){if(s.resizing)return;t.magnify&&_.value&&U.setLens(mo(L,_.value));const V=s.hover(ee(L));V&&_.value&&(_.value.style.cursor=V)}function q(){U.setLens(null),s.leave()}function fe(L){s.pointerDown(ee(L),L.clientX,L.clientY)}function Q(L){s.click(ee(L),L).stopPropagation&&L.stopPropagation()}function he(L){m.value&&s.docClick(L.target===_.value?ee(L):null)}function _e(L){s.globalMove(L.clientX,L.clientY)}function ve(){s.globalUp()}function Be(L){L.touches.length===1&&s.panStart(L.touches[0].clientX,L.touches[0].clientY)}function ze(L){!s.panning||L.touches.length!==1||(L.preventDefault(),s.panMove(L.touches[0].clientX,L.touches[0].clientY))}function He(){s.panEnd()}function Me(L){s.keyDown(L)}function R(L){s.setFilterText(L.target.value)}Ke(()=>t.theme,()=>Z()),Ke(()=>[t.curvature,t.bendField],()=>un(W)),Ke(()=>t.scanlines,()=>Z()),Ke(()=>t.glow,()=>Z()),Ke(()=>t.magnify,L=>{L||U.setLens(null),Z()});let F=null,w=null,de=0;function ne(){cancelAnimationFrame(de),de=requestAnimationFrame(W)}function te(L){L.preventDefault()}function ae(){T==null||T.dispose(),T=null,I=!1,B()}En(()=>{s.init(),document.addEventListener("click",he),document.addEventListener("mousemove",_e),document.addEventListener("mouseup",ve),un(()=>{var L;B(),_.value&&(_.value.addEventListener("webglcontextlost",te),_.value.addEventListener("webglcontextrestored",ae)),b.value&&(F=new ResizeObserver(()=>W()),F.observe(b.value),w=new IntersectionObserver(V=>{V.some(j=>j.isIntersecting)&&ne()}),w.observe(b.value)),window.addEventListener("resize",ne),(L=window.visualViewport)==null||L.addEventListener("resize",ne),i("grid-ready",{api:s.api})})}),Dn(()=>{var L,V,j;document.removeEventListener("click",he),document.removeEventListener("mousemove",_e),document.removeEventListener("mouseup",ve),(L=_.value)==null||L.removeEventListener("webglcontextlost",te),(V=_.value)==null||V.removeEventListener("webglcontextrestored",ae),F==null||F.disconnect(),w==null||w.disconnect(),window.removeEventListener("resize",ne),(j=window.visualViewport)==null||j.removeEventListener("resize",ne),cancelAnimationFrame(de),x(),U.dispose(),s.dispose()});const ge=tt(()=>_s[t.theme]??_s.none),le=tt(()=>({background:ge.value.headerBg,borderTop:`1px solid ${ge.value.border}`,color:ge.value.text})),y=tt(()=>({background:ge.value.bg})),S=tt(()=>ge.value.accent);return(L,V)=>{var j,ie;return Qe(),yt("div",{ref_key:"wrapEl",ref:b,class:"cathode-wrap",style:Ln(y.value)},[Fe("canvas",{ref_key:"canvasEl",ref:_,class:"cathode-canvas",tabindex:"0",onWheel:Er(O,["prevent"]),onMousemove:$,onMouseleave:q,onMousedown:fe,onClick:Q,onKeydown:Me,onTouchstartPassive:Be,onTouchmove:ze,onTouchend:He,onTouchcancel:He},null,544),gt(m)?(Qe(),yt("input",{key:0,ref_key:"filterGhostEl",ref:r,class:"cathode-filter-ghost","aria-label":"Filter column",value:gt(g),autofocus:"",onInput:R,onKeydown:[V[0]||(V[0]=Qu((...be)=>gt(E)&&gt(E)(...be),["escape"])),V[1]||(V[1]=Qu(be=>gt(s).closeFilter(),["enter"]))]},null,40,_y)):an("",!0),n.pagination?(Qe(),yt("div",{key:1,class:"cathode-pagination",style:Ln(le.value)},[Fe("button",{disabled:gt(o)<=0,onClick:V[2]||(V[2]=be=>gt(p)())},"◀",8,xy),Fe("span",null,Sn((gt(f)+1).toLocaleString())+"–"+Sn(Math.min(gt(l).length,gt(d)+1).toLocaleString())+" / "+Sn(gt(l).length.toLocaleString()),1),Fe("button",{disabled:gt(o)>=gt(a),onClick:V[3]||(V[3]=be=>gt(h)())},"▶",8,My),Fe("span",{class:"cathode-page-info",style:Ln({color:S.value})},Sn(gt(l).length.toLocaleString())+" rows ",5),gt(c)?(Qe(),yt("span",{key:0,class:"cathode-sel-readout",style:Ln({color:S.value})},Sn(((j=gt(u)[gt(c).col])==null?void 0:j.colDef.headerName)??((ie=gt(u)[gt(c).col])==null?void 0:ie.colId))+" : "+Sn(gt(v)(gt(u)[gt(c).col],gt(l)[gt(c).row])),5)):an("",!0)],4)):an("",!0)],4)}}}),ci=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},td=ci(yy,[["__scopeId","data-v-3f5baab2"]]),pa={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function by(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const Ey=12,Xt=18,Ks=10,Rr=6,cu=`${Ey}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function Ty(n,e,t){if(t<=0||!e)return[e];const i=[];for(const r of e.split(`
`)){if(!r){i.push("");continue}if(n.measureText(r).width<=t){i.push(r);continue}const s=r.split(/(\s+)/);let o="";for(const a of s){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let u="";for(const c of a)n.measureText(u+c).width>t?(u&&i.push(u),u=c):u+=c;o=u}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function hp(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),r=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${r}`}return n}function wy(n,e){return Math.ceil(n.measureText(e).width)+12}function Ay(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:r,wordWrap:s}=n,o=n.formatTs??hp;t.font=cu;const a=[];for(let l=0;l<e.length;l++){const u=e[l],c=u.level??"info",f=r&&u.ts!=null?o(u.ts):"",d=s?Ty(t,u.text,i):u.text.split(`
`);for(let m=0;m<d.length;m++)a.push({entryIdx:l,text:d[m],level:c,timestamp:m===0?f:"",isFirstFrag:m===0,widthPx:t.measureText(d[m]).width})}return a}function Cy(n,e){const t=n.getContext("2d");if(!t)return;const i=e.dpr??1,r=n.width/i,s=n.height/i,o=pa[e.theme]??pa.none;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,r,s),t.save(),t.beginPath(),t.rect(0,0,r,s),t.clip(),t.font=cu,t.textBaseline="middle";const a=e.visualLines,l=Ks-e.scrollX,u=(e.showTimestamps?Ks+e.timestampWidth:Ks)-e.scrollX,c=Math.max(0,Math.floor((e.scrollY-Rr)/Xt)),f=Math.min(a.length,Math.ceil((e.scrollY+s-Rr)/Xt)+1);for(let d=c;d<f;d++){const m=a[d],g=Rr+d*Xt-e.scrollY+Xt/2;if(m.entryIdx%2===1&&m.isFirstFrag){t.fillStyle=o.rowAlt;let p=1;for(;d+p<f&&a[d+p].entryIdx===m.entryIdx;)p++;t.fillRect(0,g-Xt/2,r,Xt*p)}e.selectionStart>=0&&d>=e.selectionStart&&d<=e.selectionEnd&&(t.fillStyle=o.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,g-Xt/2,r,Xt)),d===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,g-Xt/2,r,Xt)),e.showTimestamps&&m.timestamp&&(t.fillStyle=o.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=o.timestamp),t.fillText(m.timestamp,l,g),t.shadowBlur=0);const v=by(o,m.level);t.fillStyle=v,t.textAlign="left",e.glow?(t.shadowColor=v,t.shadowBlur=14,t.fillText(m.text,u,g),t.shadowBlur=7,t.fillText(m.text,u,g),t.shadowBlur=3,t.fillText(m.text,u,g),t.shadowBlur=0):t.fillText(m.text,u,g)}t.restore()}function nd(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-Rr)/Xt);return i<0||i>=t?-1:i}function Ry(n){return Rr*2+n*Xt}function Ly(n){const e=Hc();return e.run(()=>{const t=()=>{var Me;return((Me=n.showTimestamps)==null?void 0:Me.call(n))??!0},i=()=>{var Me;return((Me=n.wordWrap)==null?void 0:Me.call(n))??!0},r=we(0),s=we(0),o=we(0),a=we(0),l=we(-1),u=we(!0),c=we(-1),f=we(-1),d=document.createElement("canvas"),m=tt(()=>{var F;const Me=n.entries()??[],R=((F=n.maxLines)==null?void 0:F.call(n))??0;return R>0&&Me.length>R?Me.slice(Me.length-R):Me}),g=tt(()=>{var F;if(!t())return"";const Me=((F=n.formatTs)==null?void 0:F.call(n))??hp;let R="00:00:00";for(const w of m.value){if(w.ts==null)continue;const de=Me(w.ts);de.length>R.length&&(R=de)}return R}),v=we(0),p=we([]);function h(){var F;const Me=d.getContext("2d");if(!Me)return;Me.font=cu;const R=t()?wy(Me,g.value):0;v.value=R,p.value=Ay({entries:m.value,ctx:Me,textMaxWidth:Math.max(1,r.value-Ks*2-R),showTimestamps:t(),formatTs:(F=n.formatTs)==null?void 0:F.call(n),wordWrap:i()})}const E=tt(()=>Ry(p.value.length)),b=tt(()=>Math.max(0,E.value-s.value)),_=tt(()=>{let Me=0;for(const R of p.value)R.widthPx>Me&&(Me=R.widthPx);return Ks*2+v.value+Me}),P=tt(()=>Math.max(0,_.value-r.value));Ke(b,()=>{u.value?o.value=b.value:o.value=Math.min(o.value,b.value)}),Ke(P,()=>{a.value=Math.min(a.value,P.value)}),Ke([m,r,t,i,g],()=>{h(),un(()=>n.host.redraw())},{deep:!1}),Ke(o,()=>n.host.redraw()),Ke(a,()=>n.host.redraw()),Ke(l,()=>n.host.redraw()),Ke([c,f],()=>n.host.redraw());function C(Me,R){r.value=Me,s.value=R,h(),u.value&&(o.value=Math.max(0,E.value-s.value))}function T(Me){o.value=Math.max(0,Math.min(b.value,Me)),u.value=o.value>=b.value-4}function I(Me){a.value=Math.max(0,Math.min(P.value,Me))}function x(Me,R,F){F?I(a.value+R):Math.abs(Me)>Math.abs(R)?I(a.value+Me):T(o.value+R)}function M(){u.value=!0,o.value=b.value}function D(Me){T(Rr+Me*Xt)}let U=!1,B=!1,W=0,Z=0,Y=0,J=0;function H(Me,R){U=!0,B=!1,W=Me,Z=R,Y=a.value,J=o.value}function ee(Me,R){if(!U)return!1;const F=W-Me,w=Z-R;return(Math.abs(F)>4||Math.abs(w)>4)&&(B=!0),I(Y+F),T(J+w),!0}function O(){U&&(U=!1,B&&(B=!1))}const $=()=>U;function q(Me){l.value=Me<0?-1:nd(Me,o.value,p.value.length)}function fe(){l.value=-1}function Q(Me,R){if(B){B=!1;return}const F=Me<0?-1:nd(Me,o.value,p.value.length);if(F<0){c.value=-1,f.value=-1;return}R&&c.value>=0||(c.value=F),f.value=F}function he(Me,R){const F=p.value.length;if(F===0)return;const w=f.value<0?0:f.value,de=Math.max(0,Math.min(F-1,w+Me));f.value=de,(!R||c.value<0)&&(c.value=de),l.value=de;const ne=Rr+de*Xt,te=ne+Xt;ne<o.value?T(ne):te>o.value+s.value&&T(te-s.value)}function _e(){const Me=Math.min(c.value,f.value),R=Math.max(c.value,f.value);if(Me<0)return"";const F=p.value,w=new Set,de=[];for(let ne=Me;ne<=R&&ne<F.length;ne++){const te=F[ne];if(w.has(te.entryIdx))continue;w.add(te.entryIdx);let ae="";for(let ge=0;ge<F.length;ge++)F[ge].entryIdx===te.entryIdx&&(ae+=(ae&&!F[ge].isFirstFrag?" ":"")+F[ge].text);de.push(te.timestamp?`${te.timestamp}  ${ae}`:ae)}return de.join(`
`)}async function ve(){const Me=_e();if(Me)try{await navigator.clipboard.writeText(Me)}catch{const R=document.createElement("textarea");R.value=Me,R.style.position="fixed",R.style.opacity="0",document.body.appendChild(R),R.select();try{document.execCommand("copy")}catch{}document.body.removeChild(R)}}function Be(Me){if((Me.metaKey||Me.ctrlKey)&&(Me.key==="c"||Me.key==="C")){c.value>=0&&(Me.preventDefault(),ve());return}if((Me.metaKey||Me.ctrlKey)&&(Me.key==="a"||Me.key==="A")){Me.preventDefault(),c.value=0,f.value=p.value.length-1;return}switch(Me.key){case"ArrowDown":Me.preventDefault(),he(1,Me.shiftKey);break;case"ArrowUp":Me.preventDefault(),he(-1,Me.shiftKey);break;case"ArrowRight":Me.preventDefault(),I(a.value+Xt*2);break;case"ArrowLeft":Me.preventDefault(),I(a.value-Xt*2);break;case"PageDown":Me.preventDefault(),T(o.value+s.value);break;case"PageUp":Me.preventDefault(),T(o.value-s.value);break;case"Home":Me.preventDefault(),T(0),I(0);break;case"End":Me.preventDefault(),T(b.value);break;case"Escape":c.value=-1,f.value=-1;break}}function ze(Me,{dpr:R,glow:F}){Cy(Me,{visualLines:p.value,scrollY:o.value,scrollX:a.value,theme:n.theme(),glow:F,showTimestamps:t(),timestampWidth:v.value,hoveredLine:l.value,selectionStart:Math.min(c.value,f.value),selectionEnd:Math.max(c.value,f.value),dpr:R})}function He(){e.stop()}return{canvasW:r,canvasH:s,scrollY:o,scrollX:a,hoveredLine:l,stuckToBottom:u,selectionAnchor:c,selectionActive:f,visualLines:p,tsWidth:v,contentH:E,maxScrollY:b,maxScrollX:P,setViewport:C,setScroll:T,setScrollX:I,wheel:x,scrollToBottom:M,scrollToLine:D,panStart:H,panMove:ee,panEnd:O,panning:$,hover:q,leave:fe,click:Q,keyDown:Be,moveSelection:he,selectionAsText:_e,copySelection:ve,paint:ze,dispose:He}})}const Py=ai({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=we(null),r=we(null),s={...Vt},o=Ly({entries:()=>t.entries,theme:()=>t.theme,showTimestamps:()=>t.showTimestamps,formatTs:()=>t.formatTs,wordWrap:()=>t.wordWrap,maxLines:()=>t.maxLines,host:{redraw:()=>p()}});let a=null,l=!1;function u(){if(a){try{a.forceContextLoss()}catch{}try{a.dispose()}catch{}a=null}}let c,f,d=1;const m=new Ua({paint:(q,{dpr:fe,glow:Q})=>o.paint(q,{dpr:fe,glow:Q})});function g(){if(!(!r.value||!i.value)){try{a=new Ts({canvas:r.value,antialias:!1,alpha:!0})}catch{l=!0}if(!l&&!a.getContext()&&(a.dispose(),a=null,l=!0),l){v();return}a.setPixelRatio(1),a.setClearColor(0,0),c=new ws,f=new Ur(-1,1,1,-1,0,1),c.add(new cn(new li(2,2),m.material)),v()}}function v(){if(!i.value||!a&&!l)return;const q=i.value.clientWidth,fe=i.value.clientHeight;!q||!fe||m.resize(q,fe)&&(m.setScreenSize(q,fe),d=m.dpr,o.setViewport(q,fe),a?(a.setPixelRatio(d),a.setSize(q,fe)):r.value&&(r.value.width=Math.round(q*d),r.value.height=Math.round(fe*d),r.value.style.width=q+"px",r.value.style.height=fe+"px"),p())}function p(){if(!m.canvas.width)return;if(l){if(!r.value)return;m.paintOnly(!1);const fe=r.value.getContext("2d");fe&&fe.drawImage(m.canvas,0,0,m.canvas.width,m.canvas.height,0,0,r.value.width,r.value.height);return}if(!a)return;const q=t.theme==="paper";m.setLook({curvature:t.curvature,scanlines:t.scanlines&&!q,vignette:!q,magnify:t.magnify}),m.setLens(t.magnify?s:null),m.syncUniforms(),m.paint(t.glow),a.render(c,f)}Ke(()=>t.theme,()=>p()),Ke(()=>t.curvature,()=>p()),Ke(()=>t.scanlines,()=>p()),Ke(()=>t.glow,()=>p()),Ke(()=>t.magnify,q=>{q||(s.x=Vt.x,s.y=Vt.y),p()});function h(q){if(!r.value)return[-1,-1];const fe=r.value.getBoundingClientRect();return[q.clientX-fe.left,q.clientY-fe.top]}function E(q){o.wheel(q.deltaX,q.deltaY,q.shiftKey)}function b(q){o.panStart(q.clientX,q.clientY),i.value&&i.value.focus()}function _(q){o.panMove(q.clientX,q.clientY)}function P(){o.panEnd()}function C(q){if(q.touches.length!==1)return;const fe=q.touches[0];o.panStart(fe.clientX,fe.clientY),i.value&&i.value.focus()}function T(q){if(!o.panning()||q.touches.length!==1)return;q.preventDefault();const fe=q.touches[0];o.panMove(fe.clientX,fe.clientY)}function I(){o.panEnd()}function x(q){const[,fe]=h(q);o.click(fe,q.shiftKey)}function M(q){o.keyDown(q)}function D(q){if(t.magnify&&r.value){const Q=mo(q,r.value);s.x=Q.x,s.y=Q.y,p()}const[,fe]=h(q);o.hover(fe)}function U(){o.leave(),s.x=Vt.x,s.y=Vt.y,p()}e({scrollToBottom(){o.scrollToBottom()},scrollToLine(q){o.scrollToLine(q)}});let B=null,W=null,Z=0;const Y=Ai("cathodeResetTick",we(0));Ke(Y,()=>J());function J(){cancelAnimationFrame(Z),Z=requestAnimationFrame(v)}function H(q){q.preventDefault()}function ee(){a==null||a.dispose(),a=null,l=!1,g()}En(()=>{document.addEventListener("mousemove",_),document.addEventListener("mouseup",P),un(()=>{var q;g(),r.value&&(r.value.addEventListener("webglcontextlost",H),r.value.addEventListener("webglcontextrestored",ee)),i.value&&(B=new ResizeObserver(()=>v()),B.observe(i.value),W=new IntersectionObserver(fe=>{fe.some(Q=>Q.isIntersecting)&&J()}),W.observe(i.value)),window.addEventListener("resize",J),(q=window.visualViewport)==null||q.addEventListener("resize",J),o.scrollY.value=o.maxScrollY.value})}),Dn(()=>{var q,fe,Q;document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",P),(q=r.value)==null||q.removeEventListener("webglcontextlost",H),(fe=r.value)==null||fe.removeEventListener("webglcontextrestored",ee),B==null||B.disconnect(),W==null||W.disconnect(),window.removeEventListener("resize",J),(Q=window.visualViewport)==null||Q.removeEventListener("resize",J),cancelAnimationFrame(Z),u(),o.dispose(),m.dispose()});const O=tt(()=>pa[t.theme]??pa.none),$=tt(()=>({background:O.value.bg}));return(q,fe)=>(Qe(),yt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:Ln($.value),tabindex:"0",onKeydown:M},[Fe("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-log-canvas",onWheel:Er(E,["prevent"]),onMousemove:D,onMouseleave:U,onMousedown:b,onClick:x,onTouchstartPassive:C,onTouchmove:T,onTouchend:I,onTouchcancel:I},null,544)],36))}}),Uc=ci(Py,[["__scopeId","data-v-328a73e4"]]),xs={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},Dy=.18,Bs=8,uu=22,Iy=4,qn=8,ir=56,fu=42,Fi="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Uy="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Al=4,Ny=1,Fy=1;function Oy(n,e,t,i=0,r=!1){const s=r?fu:ir,o=Math.max(0,e-qn-s),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function By(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,r=-1/0,s=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const u=n[l];u&&(u.low<i&&(i=u.low),u.high>r&&(r=u.high),u.volume>s&&(s=u.volume))}if(!isFinite(i)||!isFinite(r)||i===r){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,s)}}const a=(r-i)*.04;return{min:i-a,max:r+a,maxVol:Math.max(1,s)}}function ky(n,e,t=!1){const i=t?Iy:uu,r=Math.max(1,n-Bs-i-Al),s=Math.max(0,Math.round(r*e)),o=r-s;return{priceY0:Bs,priceY1:Bs+o,volumeY0:Bs+o+Al,volumeY1:Bs+o+Al+s}}function zn(n,e,t,i){const r=e.max-e.min;return r<=0?(t+i)/2:t+(1-(n-e.min)/r)*(i-t)}function sr(n,e,t){return qn+(n-e+.5)*t}function er(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function du(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${r}:${s}`}function zy(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),r=t/i;let s;return r<1.5?s=1:r<3?s=2:r<7?s=5:s=10,s*i}function pp(n,e){var g,v,p,h,E;const t=n.getContext("2d");if(!t)return;const i=e.dpr&&e.dpr>0?e.dpr:1;t.setTransform(i,0,0,i,0,0);const r=n.width/i,s=n.height/i,o=xs[e.theme]??xs.none,a=e.colors?{...o,...e.colors}:o,l=!!e.compact;if(t.clearRect(0,0,r,s),t.fillStyle=a.bg,t.fillRect(0,0,r,s),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,r,s),t.clip();const u=Oy(e.candles.length,r,e.slotW,e.scrollX,l),c=By(e.candles,u.firstIdx,u.count),f=ky(s,e.showVolume?e.volumeFraction:0,l),d=Math.max(Ny,Math.floor(e.slotW*.7)),m=Math.min(e.candles.length,u.firstIdx+u.count);for(let b=u.firstIdx;b<m;b++){const _=e.candles[b];if(!_)continue;const P=sr(b,u.firstIdx,e.slotW),C=zn(_.open,c,f.priceY0,f.priceY1),T=zn(_.close,c,f.priceY0,f.priceY1),I=zn(_.high,c,f.priceY0,f.priceY1),x=zn(_.low,c,f.priceY0,f.priceY1),M=_.close>=_.open,D=M?a.wickBull:a.wickBear,U=M?a.candleBull:a.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=U),t.strokeStyle=D,t.lineWidth=Fy,t.beginPath(),t.moveTo(Math.round(P)+.5,I),t.lineTo(Math.round(P)+.5,x),t.stroke(),t.fillStyle=U;const B=Math.min(C,T),W=Math.max(1,Math.abs(T-C)),Z=Math.round(P-d/2),Y=Math.round(B),J=Math.round(W);if(t.fillRect(Z,Y,d,J),e.glow&&(t.shadowBlur=4,t.fillRect(Z,Y,d,J)),t.shadowBlur=0,e.showVolume&&c.maxVol>0){const H=Math.round(_.volume/c.maxVol*(f.volumeY1-f.volumeY0));H>0&&(t.fillStyle=M?a.volumeBull:a.volumeBear,t.fillRect(Math.round(P-d/2),f.volumeY1-H,d,H))}}if((g=e.overlays)!=null&&g.length){const b={above:0,below:0},_=e.overlays.filter(C=>C.kind!=="hline"&&!!C.label).length,P=_?14+14*_+12:8;for(const C of e.overlays)C.kind==="hline"?Vy(t,C,r,c,f,a,l,b,P):Hy(t,C,u,c,f,e.slotW)}(v=e.markers)!=null&&v.length&&jy(t,a,e.markers,e.candles,u,c,f,e.slotW),Zy(t,a,c,f,r,l),l||(Jy(t,a,e.candles,u,e.slotW,s),qy(t,a,e.candles,r,s)),(p=e.overlays)!=null&&p.length&&Wy(t,a,e.overlays,f),e.hover&&(Qy(t,a,e.candles,u,c,f,e.slotW,e.hover,r),Xy(t,a,e.candles,u,e.slotW,e.hover,f,((h=e.overlays)==null?void 0:h.length)??0),(E=e.markers)!=null&&E.length&&$y(t,a,e.markers,e.candles,u,c,f,e.slotW,e.hover,r)),t.restore()}function Hy(n,e,t,i,r,s){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(qn,r.priceY0,999999,r.priceY1-r.priceY0),n.clip(),e.kind==="line")Go(n,e.data,t.firstIdx,o,s,i,r,e.color,e.lineWidth??1,e.dashed===!0);else if(e.kind==="band"){const l=mp(e.color,e.fillAlpha??.08);Gy(n,e.upper,e.lower,t.firstIdx,o,s,i,r,l),Go(n,e.upper,t.firstIdx,o,s,i,r,e.color,1,!1),Go(n,e.lower,t.firstIdx,o,s,i,r,e.color,1,!1),(a=e.middle)!=null&&a.length&&Go(n,e.middle,t.firstIdx,o,s,i,r,e.color,1,e.middleDashed!==!1)}n.restore()}function Vy(n,e,t,i,r,s,o,a={above:0,below:0},l=8){const u=zn(e.price,i,r.priceY0,r.priceY1),c=u<r.priceY0-.5,f=u>r.priceY1+.5,d=c||f,m=d?c?a.above++:a.below++:0,g=d?c?r.priceY0+l+m*20:r.priceY1-8-m*20:u,v=o?fu:ir,p=Math.round(g)+.5;n.save(),d||(n.strokeStyle=e.color,n.lineWidth=e.lineWidth??1,n.setLineDash(e.dashed===!1?[]:[4,3]),n.beginPath(),n.moveTo(qn,p),n.lineTo(t-v,p),n.stroke(),n.setLineDash([]));let h=e.label??er(e.price);if(d&&h!==""&&(h=(c?"↑ ":"↓ ")+h),h!==""){n.font=Fi,n.textBaseline="middle",n.textAlign="left";const E=n.measureText(h).width,b=4,_=2,P=qn+2;n.fillStyle=e.color,d&&(n.globalAlpha=.85),n.fillRect(P,g-7-_,E+b*2,14+_*2),n.globalAlpha=1,n.fillStyle=s.bg&&!s.bg.startsWith("rgba(0,0,0,0)")?s.bg:"#0d1520",n.fillText(h,P+b,g)}n.restore()}function Go(n,e,t,i,r,s,o,a,l,u){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(u?[4,3]:[]),n.beginPath();let c=!1;for(let f=t;f<i;f++){const d=e[f];if(typeof d!="number"||!isFinite(d)){c&&(n.stroke(),n.beginPath(),c=!1);continue}const m=sr(f,t,r),g=zn(d,s,o.priceY0,o.priceY1);c?n.lineTo(m,g):(n.moveTo(m,g),c=!0)}c&&n.stroke(),n.setLineDash([])}function Gy(n,e,t,i,r,s,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let u=!1,c=-1;for(let f=i;f<=r;f++){const d=e[f],m=t[f],g=f<r&&typeof d=="number"&&typeof m=="number"&&isFinite(d)&&isFinite(m);if(g&&!u&&(c=f,u=!0),!g&&u||f===r&&u){const v=g?f+1:f;n.beginPath();for(let p=c;p<v;p++){const h=sr(p,i,s),E=zn(e[p],o,a.priceY0,a.priceY1);p===c?n.moveTo(h,E):n.lineTo(h,E)}for(let p=v-1;p>=c;p--){const h=sr(p,i,s),E=zn(t[p],o,a.priceY0,a.priceY1);n.lineTo(h,E)}n.closePath(),n.fill(),u=!1}}}function mp(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),r=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${i},${r},${s},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function Wy(n,e,t,i){const r=t.filter(v=>v.kind!=="hline"&&!!v.label);if(!r.length)return;n.save(),n.font=Fi;const s=8,o=5,a=12,l=6,u=14;let c=0;for(const v of r){const p=n.measureText(v.label).width;p>c&&(c=p)}const f=s*2+a+l+c,d=o*2+u*r.length,m=qn+4,g=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(m,g,f,d),n.textBaseline="middle",n.textAlign="left";for(let v=0;v<r.length;v++){const p=r[v],h=g+o+u*(v+.5),E=m+s;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(E,h),n.lineTo(E+a,h),n.stroke(),n.setLineDash([])):p.kind==="band"&&(n.fillStyle=mp(p.color,p.fillAlpha??.2),n.fillRect(E,h-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(E+.5,h-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,E+a+l,h)}n.restore()}function Xy(n,e,t,i,r,s,o,a){const l=Math.floor((s.x-qn)/r),u=i.firstIdx+l;if(u<0||u>=t.length)return;const c=t[u];if(!c)return;const f=c.close-c.open,d=c.open!==0?f/c.open*100:0,m=f>=0?"+":"",g=[["O",er(c.open),void 0],["H",er(c.high),void 0],["L",er(c.low),void 0],["C",er(c.close),void 0],["V",Yy(c.volume),void 0],["",`${m}${d.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=Fi,n.textBaseline="middle",n.textAlign="left";const v=8,p=4,h=14;let E=v;for(const[C,T]of g){const I=C?`${C} ${T}`:T,x=n.measureText(I).width+12;E+=x}E+=v-12;const b=o.priceY0+4+(a>0?p*2+14*a+4:0),_=qn+4;n.fillStyle=e.panelBg,n.fillRect(_,b,E,h+p*2);let P=_+v;for(let C=0;C<g.length;C++){const[T,I,x]=g[C];n.fillStyle=e.text,T&&(n.globalAlpha=.6,n.fillText(T+" ",P,b+p+h/2),n.globalAlpha=1,P+=n.measureText(T+" ").width),x&&(n.fillStyle=x),n.fillText(I,P,b+p+h/2),P+=n.measureText(I).width+12}n.restore()}function Yy(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function $y(n,e,t,i,r,s,o,a,l,u){if(!i.length)return;const c=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,c*.5),d=Math.min(i.length,r.firstIdx+r.count),m=9;let g=null;for(const I of t){let x=0,M=i.length-1,D=-1;for(;x<=M;){const W=x+M>>1,Z=i[W].start-I.timestamp;if(Math.abs(Z)<=f){D=W;break}Z<0?x=W+1:M=W-1}if(D<0||D<r.firstIdx||D>=d)continue;const U=sr(D,r.firstIdx,a),B=zn(I.price,s,o.priceY0,o.priceY1);if(Math.abs(l.x-U)<=m&&Math.abs(l.y-B)<=m){g={m:I,x:U,y:B};break}}if(!g)return;const v=du(g.m.timestamp),p=[`${g.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${v}`,`@ ${er(g.m.price)}`];g.m.label&&p.push(g.m.label),n.save(),n.font=Fi,n.textBaseline="top",n.textAlign="left";const h=6,E=14;let b=0;for(const I of p){const x=n.measureText(I).width;x>b&&(b=x)}const _=b+h*2,P=p.length*E+h*2;let C=g.x+12;C+_>u-ir&&(C=g.x-12-_);let T=g.y-P/2;T<o.priceY0&&(T=o.priceY0),T+P>o.priceY1&&(T=o.priceY1-P),n.fillStyle=e.panelBgSolid,n.strokeStyle=g.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(C,T,_,P),n.strokeRect(C+.5,T+.5,_-1,P-1);for(let I=0;I<p.length;I++){const x=p[I];n.fillStyle=I===0?g.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(x,C+h,T+h+I*E)}n.restore()}function qy(n,e,t,i,r){if(t.length<2)return;const s=t[1].start-t[0].start,o=Ky(s);if(!o)return;n.save(),n.font=Fi,n.textBaseline="top",n.textAlign="right";const a=6,l=3,u=n.measureText(o).width,c=i-ir-a,f=r-uu+4;n.fillStyle=e.accent,n.fillRect(c-u-a,f-l,u+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,c,f),n.restore()}function Ky(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,r=24*i,s=7*r;return n>=s&&n%s===0?n/s+"W":n>=r&&n%r===0?n/r+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function jy(n,e,t,i,r,s,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,u=Math.max(1,l*.5),c=Math.min(i.length,r.firstIdx+r.count),f=m=>{let g=0,v=i.length-1;for(;g<=v;){const p=g+v>>1,h=i[p].start-m;if(Math.abs(h)<=u)return p;h<0?g=p+1:v=p-1}return-1},d=7;for(const m of t){const g=f(m.timestamp);if(g<0||g<r.firstIdx||g>=c)continue;const v=sr(g,r.firstIdx,a),p=zn(m.price,s,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const h=m.color??(m.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=h,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),m.kind==="entry"?(n.moveTo(v,p-d),n.lineTo(v-d,p+d-1),n.lineTo(v+d,p+d-1)):(n.moveTo(v,p+d),n.lineTo(v-d,p-d+1),n.lineTo(v+d,p-d+1)),n.closePath(),n.fill(),n.stroke()}}function Zy(n,e,t,i,r,s=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=s?Math.max(2,Math.min(4,Math.round(a/36))):6,u=zy(o,l),c=Math.ceil(t.min/u)*u,f=s?fu:ir;n.font=s?Uy:Fi,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let d=c;d<=t.max;d+=u){const m=zn(d,t,i.priceY0,i.priceY1);m<i.priceY0||m>i.priceY1||(n.beginPath(),n.moveTo(qn,Math.round(m)+.5),n.lineTo(r-f,Math.round(m)+.5),n.stroke(),n.fillText(er(d),r-f+3,m))}n.globalAlpha=1}function Jy(n,e,t,i,r,s){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=Fi,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let u=i.firstIdx;u<l;u+=a){const c=t[u];if(!c)continue;const f=sr(u,i.firstIdx,r);n.fillText(du(c.start),f,s-uu+4)}n.globalAlpha=1}function Qy(n,e,t,i,r,s,o,a,l){const u=Math.floor((a.x-qn)/o),c=Math.max(0,Math.min(t.length-1,i.firstIdx+u)),f=t[c];if(!f)return;const d=sr(c,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(d)+.5,s.priceY0),n.lineTo(Math.round(d)+.5,s.volumeY1||s.priceY1),n.stroke();const m=Math.max(s.priceY0,Math.min(s.priceY1,a.y));n.beginPath(),n.moveTo(qn,Math.round(m)+.5),n.lineTo(l-ir,Math.round(m)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const g=r.max-r.min;if(g>0){const h=r.max-(m-s.priceY0)/(s.priceY1-s.priceY0)*g,E=er(h);n.font=Fi,n.textBaseline="middle",n.textAlign="left";const b=n.measureText(E).width,_=4,P=2;n.fillStyle=e.accent,n.fillRect(l-ir+2,m-7-P,b+_*2,14+P*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(E,l-ir+2+_,m)}n.font=Fi,n.textBaseline="top",n.textAlign="center";const v=du(f.start),p=n.measureText(v).width;n.fillStyle=e.accent,n.fillRect(d-p/2-4,s.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(v,d,s.volumeY1+4),n.restore()}const Cl=.25,Rl=6,id=8;function eb(n){const e=Hc();return e.run(()=>{const t=we(0),i=we(0),r=we(0),s=we(1),o=we(null),a=tt(()=>Math.max(1,n.slotW()*s.value));Ke([n.theme,n.slotW,n.showVolume,n.volumeFraction,()=>{var I;return(I=n.compact)==null?void 0:I.call(n)},()=>n.candles(),()=>{var I;return(I=n.overlays)==null?void 0:I.call(n)},()=>{var I;return(I=n.markers)==null?void 0:I.call(n)}],()=>n.host.redraw(),{deep:!1}),Ke(()=>{var I;return(I=n.colors)==null?void 0:I.call(n)},()=>n.host.redraw(),{deep:!0}),Ke(r,()=>n.host.redraw()),Ke(s,()=>n.host.redraw()),Ke(o,()=>n.host.redraw()),Ke(a,()=>n.host.redraw());function l(I,x){t.value=I,i.value=x}function u(I){var B;const x=a.value;if(x<=0)return 0;const M=((B=n.candles())==null?void 0:B.length)??0,D=Math.max(1,Math.floor((t.value||1)/x)),U=Math.max(0,M-D);return Math.max(0,Math.min(I,U*x))}function c(I,x,M,D){if(I!==0||M&&x!==0){const Z=I!==0?I:x;r.value=u(r.value+Z);return}if(x===0)return;const U=n.candles(),B=a.value,W=Math.exp(-x*.0015);if(D>=0&&B>0&&(U!=null&&U.length)){const Z=Math.max(1,Math.floor((t.value||1)/B)),J=Math.max(0,U.length-Z-Math.floor(r.value/B))+(D-id)/B,H=Math.max(Cl,Math.min(Rl,s.value*W));s.value=H;const ee=n.slotW()*H,O=Math.max(1,Math.floor((t.value||1)/ee)),$=J-(D-id)/ee,q=Math.max(0,U.length-O-$);r.value=u(q*ee)}else s.value=Math.max(Cl,Math.min(Rl,s.value*W))}let f=!1,d=0,m=0;function g(I){f=!0,d=I,m=r.value,o.value=null}function v(I){return f?(r.value=u(m+(I-d)),!0):!1}function p(){f=!1}const h=()=>f;function E(I,x){f||(o.value=I<0||x<0?null:{x:I,y:x})}function b(){o.value=null}function _(I){s.value=Math.max(Cl,Math.min(Rl,s.value*Math.exp(I*.18))),r.value=u(r.value)}function P(I){const x=a.value,M=I.shiftKey?20:3;switch(I.key){case"ArrowLeft":I.preventDefault(),r.value=u(r.value+x*M);break;case"ArrowRight":I.preventDefault(),r.value=u(r.value-x*M);break;case"ArrowUp":I.preventDefault(),_(1);break;case"ArrowDown":I.preventDefault(),_(-1);break;case"Home":I.preventDefault(),r.value=u(Number.MAX_SAFE_INTEGER);break;case"End":I.preventDefault(),r.value=0;break}}function C(I,{dpr:x,glow:M}){var D,U,B,W;pp(I,{candles:n.candles(),slotW:a.value,scrollX:r.value,theme:n.theme(),glow:M,showVolume:n.showVolume(),volumeFraction:n.volumeFraction(),hover:o.value,overlays:(D=n.overlays)==null?void 0:D.call(n),markers:(U=n.markers)==null?void 0:U.call(n),compact:(B=n.compact)==null?void 0:B.call(n),colors:(W=n.colors)==null?void 0:W.call(n),dpr:x})}function T(){e.stop()}return{canvasW:t,canvasH:i,scrollX:r,zoomLevel:s,hover:o,effectiveSlotW:a,setViewport:l,clampScroll:u,wheel:c,panStart:g,panMove:v,panEnd:p,panning:h,hoverAt:E,leave:b,keyDown:P,applyZoom:_,paint:C,dispose:T}})}const tb=ai({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:Dy},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=we(null),i=we(null),r={...Vt},s=eb({candles:()=>e.candles,theme:()=>e.theme,slotW:()=>e.slotW,showVolume:()=>e.showVolume,volumeFraction:()=>e.volumeFraction,overlays:()=>e.overlays,markers:()=>e.markers,compact:()=>e.compact,colors:()=>e.colors,host:{redraw:()=>v()}});let o=null,a=!1;function l(){if(o){try{o.forceContextLoss()}catch{}try{o.dispose()}catch{}o=null}}let u,c,f=1;const d=new Ua({paint:(O,{dpr:$,glow:q})=>s.paint(O,{dpr:$,glow:q})});function m(){if(!(!i.value||!t.value)){if(e.flat){a=!0,g();return}try{o=new Ts({canvas:i.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{a=!0}if(!a&&!o.getContext()&&(o.dispose(),o=null,a=!0),a){g();return}o.setPixelRatio(1),o.setClearColor(0,0),u=new ws,c=new Ur(-1,1,1,-1,0,1),u.add(new cn(new li(2,2),d.material)),g()}}function g(){if(!t.value||!o&&!a)return;const O=t.value.clientWidth,$=t.value.clientHeight;!O||!$||d.resize(O,$)&&(d.setScreenSize(O,$),f=d.dpr,s.setViewport(O,$),o?(o.setPixelRatio(f),o.setSize(O,$)):i.value&&(i.value.width=Math.round(O*f),i.value.height=Math.round($*f),i.value.style.width=O+"px",i.value.style.height=$+"px"),v())}function v(){if(!d.canvas.width)return;if(a){if(!i.value)return;d.paintOnly(!1);const $=i.value.getContext("2d");$&&($.clearRect(0,0,i.value.width,i.value.height),$.drawImage(d.canvas,0,0));return}if(!o)return;const O=e.theme==="paper";d.setLook({curvature:e.curvature,scanlines:e.scanlines&&!O,vignette:!O,magnify:e.magnify}),d.setLens(e.magnify?r:null),d.syncUniforms(),d.paint(e.glow),o.render(u,c)}Ke(()=>e.curvature,()=>v()),Ke(()=>e.scanlines,()=>v()),Ke(()=>e.glow,()=>v()),Ke(()=>e.magnify,O=>{O||(r.x=Vt.x,r.y=Vt.y),v()}),Ke(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")});let p=null,h=null,E=0;const b=Ai("cathodeResetTick",we(0));Ke(b,()=>_());function _(){cancelAnimationFrame(E),E=requestAnimationFrame(g)}function P(O){O.preventDefault()}function C(){o==null||o.dispose(),o=null,a=!1,m()}function T(O){if(!i.value)return[-1,-1];const $=i.value.getBoundingClientRect();return[O.clientX-$.left,O.clientY-$.top]}function I(O){const[$]=T(O);s.wheel(O.deltaX,O.deltaY,O.shiftKey,$)}function x(O){O.button===0&&(s.panStart(O.clientX),t.value&&t.value.focus())}function M(O){s.keyDown(O)}function D(O){s.panMove(O.clientX)}function U(){s.panEnd()}function B(O){O.touches.length===1&&s.panStart(O.touches[0].clientX)}function W(O){!s.panning()||O.touches.length!==1||(O.preventDefault(),s.panMove(O.touches[0].clientX))}function Z(){s.panEnd()}function Y(O){if(e.magnify&&i.value){const fe=mo(O,i.value);r.x=fe.x,r.y=fe.y,v()}const[$,q]=T(O);s.hoverAt($,q)}function J(){s.leave(),r.x=Vt.x,r.y=Vt.y,v()}En(()=>{document.addEventListener("mousemove",D),document.addEventListener("mouseup",U),un(()=>{var O;m(),i.value&&(i.value.addEventListener("webglcontextlost",P),i.value.addEventListener("webglcontextrestored",C)),t.value&&(p=new ResizeObserver(()=>g()),p.observe(t.value),h=new IntersectionObserver($=>{$.some(q=>q.isIntersecting)&&_()}),h.observe(t.value)),window.addEventListener("resize",_),(O=window.visualViewport)==null||O.addEventListener("resize",_)})}),Dn(()=>{var O,$,q;document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",U),(O=i.value)==null||O.removeEventListener("webglcontextlost",P),($=i.value)==null||$.removeEventListener("webglcontextrestored",C),p==null||p.disconnect(),h==null||h.disconnect(),window.removeEventListener("resize",_),(q=window.visualViewport)==null||q.removeEventListener("resize",_),cancelAnimationFrame(E),l(),s.dispose(),d.dispose()});const H=tt(()=>xs[e.theme]??xs.none),ee=tt(()=>({background:H.value.bg}));return(O,$)=>(Qe(),yt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:Ln(ee.value),tabindex:"0",onKeydown:M},[Fe("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:Er(I,["prevent"]),onMousedown:x,onMousemove:Y,onMouseleave:J,onTouchstartPassive:B,onTouchmove:W,onTouchend:Z,onTouchcancel:Z},null,544)],36))}}),rd=ci(tb,[["__scopeId","data-v-f2099684"]]),nb=["disabled"],ib=ai({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100},magnify:{type:Boolean,default:!1}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=we(null),o=we(null),a=we(""),l=we([]),u=we(-1);let c="";function f(P){P.trim()&&(l.value.length&&l.value[l.value.length-1]===P||(l.value.push(P),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function d(P){if(!i.disabled){if(P.key==="Enter"){P.preventDefault();const C=a.value;C.trim()&&f(C),u.value=-1,a.value="",r("submit",C);return}if(P.key==="ArrowUp"){if(!l.value.length)return;P.preventDefault(),u.value===-1?(c=a.value,u.value=l.value.length-1):u.value>0&&u.value--,a.value=l.value[u.value];return}if(P.key==="ArrowDown"){if(u.value===-1)return;P.preventDefault(),u.value<l.value.length-1?(u.value++,a.value=l.value[u.value]):(u.value=-1,a.value=c,c="");return}}}const m=we(!0);let g=null;function v(){g||(g=setInterval(()=>{m.value=!m.value},530))}function p(){g&&(clearInterval(g),g=null),m.value=!0}const h=tt(()=>{let P;return i.disabled?P=" ":i.busy?P="█":P=m.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${P}`}}),E=tt(()=>[...i.entries,h.value]);function b(){var P;i.disabled||(P=o.value)==null||P.focus()}Ke(()=>i.busy,(P,C)=>{C&&!P&&!i.disabled&&un(()=>{var T;return(T=o.value)==null?void 0:T.focus()})});function _(){var P;(P=o.value)==null||P.focus()}return e({focus:_}),En(()=>{v(),i.disabled||requestAnimationFrame(()=>{var P;return(P=o.value)==null?void 0:P.focus()})}),Dn(()=>{p()}),(P,C)=>(Qe(),yt("div",{ref_key:"wrapEl",ref:s,class:"cathode-terminal-wrap",onClick:b},[At(Uc,{entries:E.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,magnify:n.magnify,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","magnify","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Nt(Fe("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":C[0]||(C[0]=T=>a.value=T),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:d},null,40,nb),[[yh,a.value]])],512))}}),sd=ci(ib,[["__scopeId","data-v-a2b39934"]]),hu=we(0),Nc=28;let Fc=10,ma="cathode.layout",ga=!1;const Yt=we({});function rb(n,e="cathode.layout"){if(!ga){ga=!0,ma=e;try{const t=localStorage.getItem(ma);if(t){Yt.value=JSON.parse(t),od();return}}catch{}Yt.value={...n},od()}}function od(){let n=10;for(const e of Object.values(Yt.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);Fc=n}function Nr(){localStorage.setItem(ma,JSON.stringify(Yt.value))}function sb(n){ga=!1,localStorage.removeItem(ma),Yt.value={...n},Nr(),ga=!0,hu.value++}function gp(n){Fc++,Yt.value[n]&&(Yt.value[n].zIndex=Fc)}function ob(n,e){Yt.value[n].visible=e,Nr()}function ab(n,e){Yt.value[n].minimized=e,e&&(Yt.value[n].maximized=!1),Nr()}function lb(n,e){Yt.value[n].maximized=e,e&&(Yt.value[n].minimized=!1,gp(n)),Nr()}function cb(n,e,t){Yt.value[n].x=Math.round(e),Yt.value[n].y=Math.round(t),Nr()}function ub(n,e,t){Yt.value[n].w=Math.round(e),Yt.value[n].h=Math.round(t),Nr()}function vp(){return{containers:Yt,TITLEBAR_H:Nc,load:rb,save:Nr,reset:sb,bringToFront:gp,setVisible:ob,setMinimized:ab,setMaximized:lb,updatePos:cb,updateSize:ub}}const fb={class:"ws-toolbar"},db={key:0,class:"ws-restore-menu"},hb={key:0,class:"ws-restore-empty"},pb=["onClick"],mb=ai({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:r,setVisible:s}=vp(),o=we(null);Fl("cathodeWorkspace",o),Fl("cathodeResetTick",hu),En(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:h}=o.value,E=e.initialLayout??{};i(E,e.storageKey??"cathode.layout");const b=Object.keys(t.value)[0];b&&a(b)});function a(p){var E;document.querySelectorAll(".cc").forEach(b=>b.classList.remove("cc-focused"));const h=(E=o.value)==null?void 0:E.querySelector(`#cc-${p}`);h&&h.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||r(e.initialLayout)}function u(p){const h=p.target.closest(".cc");h&&(document.querySelectorAll(".cc").forEach(E=>E.classList.remove("cc-focused")),h.classList.add("cc-focused"))}const c=we(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function d(p){s(p,!0),c.value=!1}function m(p){if(!c.value)return;const h=p.target;!h.closest(".ws-restore-menu")&&!h.closest(".ws-btn-restore")&&(c.value=!1)}function g(p){p.key==="Escape"&&(c.value=!1)}En(()=>{document.addEventListener("click",m),document.addEventListener("keydown",g)}),Dn(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",g)});function v(p){var h;return((h=e.containerTitles)==null?void 0:h[p])??p}return(p,h)=>(Qe(),yt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:u},[Bl(p.$slots,"default",{},void 0),Bl(p.$slots,"overlay",{},void 0),Fe("div",fb,[n.initialLayout?(Qe(),yt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):an("",!0),h[1]||(h[1]=Fe("div",{class:"ws-sep"},null,-1)),Fe("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:h[0]||(h[0]=E=>c.value=!c.value)}," ⊞ Restore Panel ")]),At(yg,{name:"menu"},{default:Mr(()=>[c.value?(Qe(),yt("div",db,[h[3]||(h[3]=Fe("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?an("",!0):(Qe(),yt("div",hb," No closed panels ")),(Qe(!0),yt(on,null,Lm(f(),E=>(Qe(),yt("div",{key:E,class:"ws-restore-item",onClick:b=>d(E)},[h[2]||(h[2]=Fe("span",{class:"ws-restore-icon"},"⊞",-1)),Jn(" "+Sn(v(E)),1)],8,pb))),128))])):an("",!0)]),_:1})],544))}}),gb=ci(mb,[["__scopeId","data-v-5838d04b"]]),vb=["id"],_b={class:"cc-title"},xb={key:0,class:"cc-size-badge"},Mb={class:"cc-controls"},Sb=["title"],yb={class:"cc-body"},bb=200,Eb=80,ad=60,Tb=ai({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:r,setMinimized:s,setMaximized:o,updatePos:a,updateSize:l}=vp(),u=Ai("cathodeWorkspace",we(null)),c=tt(()=>t.value[e.id]),f=tt(()=>{const O=c.value,$=e.curvature??0;if(!O)return{};const q={"--curvature":Math.abs($)};return O.maximized?{...q,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:O.zIndex}:{...q,left:O.x+"px",top:O.y+"px",width:O.w+"px",height:O.minimized?Nc+"px":O.h+"px",zIndex:O.zIndex,display:O.visible?"flex":"none"}});let d=!1,m=0,g=0;function v(O){var fe;if(O.target.closest(".cc-btn")||c.value.maximized)return;i(e.id),d=!0;const $=(fe=u.value)==null?void 0:fe.querySelector(`#cc-${e.id}`);if(!$)return;const q=$.getBoundingClientRect();m=O.clientX-q.left,g=O.clientY-q.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",h),O.preventDefault()}function p(O){var he;if(!d||!u.value)return;const $=u.value.getBoundingClientRect(),q=((he=c.value)==null?void 0:he.w)??300;let fe=O.clientX-$.left-m,Q=O.clientY-$.top-g;fe=Math.max(ad-q,Math.min($.width-ad,fe)),Q=Math.max(0,Math.min($.height-Nc,Q)),a(e.id,fe,Q)}function h(){d=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h)}let E=!1,b=0,_=0,P=0,C=0;const T=we("");function I(O){c.value.maximized||(i(e.id),E=!0,b=O.clientX,_=O.clientY,P=c.value.w,C=c.value.h,document.addEventListener("mousemove",x),document.addEventListener("mouseup",M),O.preventDefault(),O.stopPropagation())}function x(O){if(!E)return;const $=Math.max(bb,P+(O.clientX-b)),q=Math.max(Eb,C+(O.clientY-_));l(e.id,$,q),T.value=`${Math.round($)}×${Math.round(q)}`}function M(){E=!1,T.value="",document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",M),D.value++}const D=we(0);Ke(hu,()=>{D.value++}),Dn(()=>{var O;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",h),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",M),(O=U.value)==null||O.removeEventListener("scroll",W),Z()});const U=we(null);function B(O){if(e.canvas)return[];const $=O.children[0];return $?Array.from($.children):[]}function W(){const O=U.value,$=e.curvature??0;if(!O)return;const q=B(O);if(!q.length)return;const fe=O.clientHeight,Q=fe/2,he=$*.0038;q.forEach(_e=>{if(!_e.dataset.origFs){const de=getComputedStyle(_e);_e.dataset.origFs=de.fontSize,_e.dataset.origLh=de.lineHeight}if($===0){_e.style.fontSize="",_e.style.lineHeight="";return}const ve=_e.getBoundingClientRect(),Be=O.getBoundingClientRect(),ze=ve.top-Be.top+ve.height/2,He=Math.min(1,Math.abs(ze-Q)/(fe/2)),Me=1+he*Math.cos(He*Math.PI/2),R=parseFloat(_e.dataset.origFs),F=_e.dataset.origLh,w=F==="normal"?R*1.4:parseFloat(F);isNaN(R)||(_e.style.fontSize=`${(R*Me).toFixed(2)}px`),isNaN(w)||(_e.style.lineHeight=`${(w*Me).toFixed(2)}px`)})}function Z(){const O=U.value;O&&B(O).forEach($=>{$.style.fontSize="",$.style.lineHeight="",delete $.dataset.origFs,delete $.dataset.origLh})}Ke(()=>e.curvature,O=>{(O??0)===0?Z():W()}),En(()=>{var O;(O=U.value)==null||O.addEventListener("scroll",W,{passive:!0}),un(W)});function Y(){s(e.id,!c.value.minimized),un(()=>{D.value++})}function J(){o(e.id,!c.value.maximized),un(()=>{D.value++})}function H(){r(e.id,!1)}function ee(){i(e.id)}return(O,$)=>c.value&&c.value.visible?(Qe(),yt("div",{key:0,id:`cc-${n.id}`,class:rn(["cc",{"cc-minimized":c.value.minimized,"cc-maximized":c.value.maximized,"cc-has-canvas":n.canvas}]),style:Ln(f.value),onMousedown:ee},[Fe("div",{class:"cc-titlebar",onMousedown:v},[$[0]||($[0]=Fe("span",{class:"cc-status-dot"},null,-1)),Fe("span",_b,Sn(n.title),1),T.value?(Qe(),yt("span",xb,Sn(T.value),1)):an("",!0),Fe("div",Mb,[Fe("button",{class:"cc-btn",title:"Minimize",onClick:Er(Y,["stop"])},"─"),Fe("button",{class:"cc-btn cc-btn-max",title:c.value.maximized?"Restore":"Maximize",onClick:Er(J,["stop"])},Sn(c.value.maximized?"⤡":"⤢"),9,Sb),Fe("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:Er(H,["stop"])},"✕")])],32),Nt(Fe("div",yb,[Fe("div",{ref_key:"bodyEl",ref:U,class:"cc-screen",onScroll:W},[Bl(O.$slots,"default",{resizeKey:D.value},void 0),$[1]||($[1]=Fe("div",{class:"cc-shine"},null,-1))],544)],512),[[Ki,!c.value.minimized]]),!c.value.minimized&&!c.value.maximized?(Qe(),yt("div",{key:0,class:"cc-resize",onMousedown:Er(I,["stop"])},null,32)):an("",!0)],46,vb)):an("",!0)}}),Wo=ci(Tb,[["__scopeId","data-v-ca0af4ca"]]),wb=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Ab=`
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
`,Cb=100,Rb=ai({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=we(null),r=we(null);let s=null,o=!1;function a(){if(s){try{s.forceContextLoss()}catch{}try{s.dispose()}catch{}s=null}}let l,u,c,f,d,m=null,g=0;function v(C){C-g>=Cb&&(E(),g=C),m=requestAnimationFrame(v)}function p(){if(!i.value||!d)return;const C=i.value.clientWidth,T=i.value.clientHeight;C<=0||T<=0||d.width===C&&d.height===T||(d.width=C,d.height=T,s&&s.setSize(C,T,!1),r.value&&(r.value.width=C,r.value.height=T,r.value.style.width=C+"px",r.value.style.height=T+"px"))}function h(){if(!(d!=null&&d.width))return;const C=d.getContext("2d");if(!C)return;const T=d.width,I=d.height,x=t[e.theme]??t.none;C.clearRect(0,0,T,I),C.fillStyle=x.bg,C.fillRect(0,0,T,I);const M=Date.now(),D=(M/500|0)%2===0,U=(M/400|0)%4;C.font=`bold ${Math.max(14,Math.min(T,I)*.06)}px monospace`,C.textAlign="center",C.textBaseline="middle",C.fillStyle=x.text,e.glow&&(C.shadowColor=x.text,C.shadowBlur=14);const B=".".repeat(U).padEnd(3," "),W=`${e.label}${B}`;if(C.fillText(W,T/2,I/2),C.shadowBlur=0,D){const Z=C.measureText(W),Y=C.measureText("M").width,J=parseFloat(C.font),H=T/2+Z.width/2+4,ee=I/2-J/2+2;C.fillStyle=x.cursor,e.glow&&(C.shadowColor=x.cursor,C.shadowBlur=12),C.fillRect(H,ee,Y*.7,J*.95),C.shadowBlur=0}}function E(){if(!d)return;if(h(),o){if(!r.value)return;const T=r.value.getContext("2d");T&&T.drawImage(d,0,0);return}if(!s||!c||!f)return;const C=e.theme==="paper";c.uniforms.uStrength.value=Dr(e.curvature),c.uniforms.uScanlines.value=e.scanlines&&!C?1:0,c.uniforms.uVignette.value=C?0:1,f.needsUpdate=!0,s.render(l,u)}function b(){if(!(!r.value||!i.value)){d=document.createElement("canvas");try{s=new Ts({canvas:r.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!s.getContext()&&(s.dispose(),s=null,o=!0),o){p();return}s.setPixelRatio(1),s.setClearColor(0,0),l=new ws,u=new Ur(-1,1,1,-1,0,1),f=new fa(d),f.minFilter=Gt,f.magFilter=Gt,c=new $n({uniforms:{uTex:{value:f},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:wb,fragmentShader:Ab,transparent:!0}),l.add(new cn(new li(2,2),c)),p()}}let _=null;En(()=>{b(),E(),m=requestAnimationFrame(v),i.value&&(_=new ResizeObserver(()=>p()),_.observe(i.value))}),Dn(()=>{m!==null&&cancelAnimationFrame(m),_==null||_.disconnect(),a(),f==null||f.dispose(),c==null||c.dispose()}),Ke(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>E());const P=tt(()=>({background:(t[e.theme]??t.none).bg}));return(C,T)=>(Qe(),yt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:Ln(P.value)},[Fe("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-loader-canvas"},null,512)],4))}}),xi=ci(Rb,[["__scopeId","data-v-d00e5f47"]]),_p=22,xp=6;function Mp(n){const e=Math.max(1,Math.floor(n.width/n.minCellW)),t=Math.floor(n.width/e),i=Math.round(t*n.cellAspect),r=_p+i+xp;return{rects:Array.from({length:n.count},(o,a)=>({x:a%e*t,y:Math.floor(a/e)*r-n.scrollY,w:t,h:r})),rowH:r,totalH:Math.ceil(n.count/e)*r,cols:e}}function Lb(n,e,t){return e<0?-1:n.findIndex(i=>e>=i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h)}const Pb=(n,e)=>Math.max(0,n-e);function Db(n,e,t,i,r){const s=t.candles[t.candles.length-1],o=`${i}x${r}@${e.dpr}|${t.candles.length}|${s?s.start+":"+s.close:0}|${e.theme}|${e.glow}|${e.showVolume}|${e.slotW}`,a=n.get(t.id);if(a&&a.key===o)return a.canvas;const l=(a==null?void 0:a.canvas)??document.createElement("canvas");l.width=Math.round(i*e.dpr),l.height=Math.round(r*e.dpr);const u=Math.max(1.5,Math.min(e.slotW,i/Math.max(1,t.candles.length))),c=i<260&&t.overlays?t.overlays.map(f=>({...f,label:""})):t.overlays;return pp(l,{candles:t.candles,slotW:u,scrollX:Math.max(0,t.candles.length*u-i),theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:null,overlays:c,compact:!0,colors:e.colors,dpr:e.dpr}),n.set(t.id,{canvas:l,key:o}),l}function Ib(n,e,t){if(!n.width)return;const i=n.getContext("2d");if(!i)return;const r=e.dpr,s={...xs[e.theme]??xs.none,...e.colors??{}};i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,n.width,n.height),s.bg&&s.bg!=="rgba(0,0,0,0)"&&(i.fillStyle=s.bg,i.fillRect(0,0,n.width,n.height)),i.setTransform(r,0,0,r,0,0);const{rects:o}=Mp({count:e.cells.length,width:n.width/r,minCellW:e.minCellW,cellAspect:e.cellAspect,scrollY:e.scrollY}),a=_p,l=xp;i.font="600 11px ui-monospace, SFMono-Regular, monospace",i.textBaseline="middle";for(let u=0;u<e.cells.length;u++){const c=e.cells[u],f=o[u];if(f.y+f.h<0||f.y>n.height/r)continue;const d=f.x+l/2,m=f.w-l;i.strokeStyle=c.open?s.candleBull:s.gridline,i.lineWidth=u===e.hoveredCell?2:1,i.strokeRect(d+.5,f.y+.5,m-1,f.h-l-1),i.save(),i.beginPath(),i.rect(d,f.y,m,a),i.clip();const g=f.y+a/2+1,v=c.note?i.measureText(c.note).width+(c.open?22:12):c.open?16:0,p=c.badge?i.measureText(c.badge).width+6:0,h=m-14-p-v;let E=c.title;if(i.measureText(E).width>h){for(;E.length>1&&i.measureText(E+"…").width>h;)E=E.slice(0,-1);E+="…"}let b=d+7;i.fillStyle=s.text,i.textAlign="left",i.fillText(E,b,g),b+=i.measureText(E).width+6,c.badge&&(i.fillStyle=s.accent,i.fillText(c.badge,b,g)),c.note&&(i.textAlign="right",i.fillStyle=c.noteColor||s.accent,i.fillText(c.note,d+m-(c.open?16:7),g),i.textAlign="left"),i.restore(),c.open&&(i.fillStyle=s.candleBull,i.beginPath(),i.arc(d+m-9,f.y+a/2+1,3,0,Math.PI*2),i.fill());const _=f.y+a,P=f.h-a-l;c.candles.length?i.drawImage(Db(t,e,c,m-2,P-1),d+1,_,m-2,P-1):(i.fillStyle=s.accent,i.textAlign="center",i.fillText("· · ·",d+m/2,_+P/2),i.textAlign="left")}}const Ub=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Nb=ai({__name:"CathodeCandleGrid",props:{cells:{},theme:{default:"none"},curvature:{default:0},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},showVolume:{type:Boolean,default:!0},volumeFraction:{default:.22},slotW:{default:3},colors:{},bendField:{type:Boolean,default:!0},minCellW:{default:210},cellAspect:{default:.6}},emits:["cell-click"],setup(n,{emit:e}){const t=n,i=e,r=we(null),s=we(null),o=we(-1),a=we(0),l={...Vt};let u=Math.min(typeof window<"u"&&window.devicePixelRatio||1,2),c=null,f=!1;function d(){if(c){try{c.forceContextLoss()}catch{}try{c.dispose()}catch{}c=null}}let m,g,v,p,h;const E=we(0),b=we(0),_=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${lp}

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

  ${cp}

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

    ${up}

    gl_FragColor = color;
  }
`;function P(){if(!(!s.value||!r.value)){h=document.createElement("canvas");try{c=new Ts({canvas:s.value,antialias:!1,alpha:!0,preserveDrawingBuffer:!0})}catch{f=!0}if(!f&&!c.getContext()&&(c.dispose(),c=null,f=!0),f){C();return}c.setPixelRatio(u),c.setClearColor(0,0),m=new ws,g=new Ur(-1,1,1,-1,0,1),p=new fa(h),p.minFilter=Gt,p.magFilter=Gt,v=new $n({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...fp()},vertexShader:Ub,fragmentShader:_,transparent:!0}),m.add(new cn(new li(2,2),v)),C()}}function C(){if(!r.value||!c&&!f)return;const H=r.value.clientWidth,ee=r.value.clientHeight;if(!H||!ee)return;E.value=H,b.value=ee,u=Math.min(window.devicePixelRatio||1,2);const O=t.bendField?Math.round(H*op(t.curvature)):H,$=Math.round(O*u),q=Math.round(ee*u),fe=h.width!==$||h.height!==q;h.width=$,h.height=q,c?(fe&&p&&(p.dispose(),p=new fa(h),p.minFilter=Gt,p.magFilter=Gt,v.uniforms.uTex.value=p),c.setPixelRatio(u),c.setSize(H,ee)):s.value&&(s.value.width=Math.round(H*u),s.value.height=Math.round(ee*u),s.value.style.width=H+"px",s.value.style.height=ee+"px"),M()}function T(){return Mp({count:t.cells.length,width:((h==null?void 0:h.width)||0)/u,minCellW:t.minCellW,cellAspect:t.cellAspect,scrollY:a.value})}const I=()=>Pb(T().totalH,((h==null?void 0:h.height)||0)/u),x=new Map;function M(){var H;if(h!=null&&h.width){if(Ib(h,{cells:t.cells,theme:t.theme,glow:t.glow,showVolume:t.showVolume,volumeFraction:t.volumeFraction,slotW:t.slotW,colors:t.colors,hoveredCell:o.value,scrollY:a.value,minCellW:t.minCellW,cellAspect:t.cellAspect,dpr:u},x),f){const ee=(H=s.value)==null?void 0:H.getContext("2d");ee&&s.value&&ee.drawImage(h,0,0,h.width,h.height,0,0,s.value.width,s.value.height);return}!c||!v||!p||(v.uniforms.uStrength.value=Dr(t.curvature),v.uniforms.uScanlines.value=t.scanlines&&t.theme!=="paper"?1:0,v.uniforms.uVignette.value=t.theme==="paper"?0:1,dp(v,t.magnify,l,E.value||h.width,b.value||h.height),p.needsUpdate=!0,c.render(m,g))}}function D(H){if(!s.value)return[-1,-1];const ee=s.value.getBoundingClientRect();return sp(H.clientX-ee.left,H.clientY-ee.top,ee.width,ee.height,Dr(t.curvature),((h==null?void 0:h.width)||ee.width)/u,((h==null?void 0:h.height)||ee.height)/u)}function U(H,ee){return Lb(T().rects,H,ee)}function B(H){const[ee,O]=D(H),$=U(ee,O);$>=0&&i("cell-click",t.cells[$].id)}function W(H){if(t.magnify&&s.value){const q=mo(H,s.value);l.x=q.x,l.y=q.y}const[ee,O]=D(H),$=U(ee,O);$!==o.value?(o.value=$,M()):t.magnify&&M(),s.value&&(s.value.style.cursor=$>=0?"pointer":"default")}function Z(){o.value=-1,l.x=Vt.x,l.y=Vt.y,M()}function Y(H){const ee=I();ee<=0||(H.preventDefault(),a.value=Math.max(0,Math.min(ee,a.value+H.deltaY)),M())}let J=null;return En(()=>{P(),J=new ResizeObserver(()=>C()),r.value&&J.observe(r.value)}),Dn(()=>{J==null||J.disconnect(),d(),x.clear()}),Ke(()=>[t.curvature,t.bendField],()=>un(C)),Ke(()=>[t.cells,t.theme,t.glow,t.scanlines,t.showVolume,t.magnify],()=>{a.value=Math.min(a.value,I()),M()},{deep:!1}),(H,ee)=>(Qe(),yt("div",{ref_key:"wrapEl",ref:r,class:"cathode-candle-grid-wrap"},[Fe("canvas",{ref_key:"canvasEl",ref:s,onClick:B,onMousemove:W,onMouseleave:Z,onWheel:Y},null,544)],512))}}),Fb=ci(Nb,[["__scopeId","data-v-f4e5e064"]]),va={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",dim:"#a0b8d0",left:"#ff9a9a",right:"#a0e8c0",neutral:"#a0b8d0",warn:"#ffd890",surface:"rgba(255,255,255,0.05)",border:"#2a3a50"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",dim:"#888888",left:"#c0392b",right:"#1a8038",neutral:"#888888",warn:"#a06000",surface:"rgba(0,0,0,0.035)",border:"#dee2e6"},phosphor:{bg:"#060d06",text:"#80ff80",dim:"#3fbf3f",left:"#ff8080",right:"#a0ffa0",neutral:"#3fbf3f",warn:"#ffe66d",surface:"rgba(51,255,51,0.05)",border:"#0a250a"},amber:{bg:"#0a0700",text:"#ffd060",dim:"#b08020",left:"#ff8a5a",right:"#ffe6a0",neutral:"#b08020",warn:"#ff9f40",surface:"rgba(255,176,0,0.06)",border:"#3a2a00"}},ld=(n,e)=>e==="left"?n.left:e==="right"?n.right:!e||e==="neutral"?n.dim:e,Ut="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",wt=12;function Ll(n,e,t){const i=[];for(const r of e.split(`
`)){let s="";for(const o of r.split(" ")){const a=s?`${s} ${o}`:o;s&&n.measureText(a).width>t?(i.push(s),s=o):s=a}i.push(s)}return i}function ks(n,e,t,i,r,s){const o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.lineTo(e+i-o,t),n.quadraticCurveTo(e+i,t,e+i,t+o),n.lineTo(e+i,t+r-o),n.quadraticCurveTo(e+i,t+r,e+i-o,t+r),n.lineTo(e+o,t+r),n.quadraticCurveTo(e,t+r,e,t+r-o),n.lineTo(e,t+o),n.quadraticCurveTo(e,t,e+o,t),n.closePath()}function Ob(n,e){var T,I;const t=n.getContext("2d");if(!t)return 0;const i=e.dpr||1,r=n.width/i,s=n.height/i,o={...va[e.theme]??va.none,...e.colors??{}};t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n.width,n.height),t.setTransform(i,0,0,i,0,0),t.fillStyle=o.bg,t.fillRect(0,0,r,s);const a=x=>x>0?o.right:x<0?o.left:o.neutral,l=a(e.value),u=(x,M=10)=>{e.glow&&(t.shadowColor=x,t.shadowBlur=M)},c=()=>{t.shadowBlur=0,t.shadowColor="transparent"},f=Math.max(40,r-wt*2);let d=wt;t.textBaseline="alphabetic",t.textAlign="left";const m=e.readout??`${e.value>0?"+":""}${e.value}`;t.font=`800 34px ${Ut}`;const g=t.measureText(m).width;t.fillStyle=l,u(l,14),t.fillText(m,wt,d+30),c();const v=wt+g+14;e.stance&&(t.font=`700 14px ${Ut}`,t.fillStyle=l,u(l,8),t.fillText(e.stance.toUpperCase(),v,d+15),c()),e.sub&&(t.font=`11px ${Ut}`,t.fillStyle=o.dim,t.fillText(e.sub,v,d+31)),d+=48,t.font=`700 9px ${Ut}`;const p=e.leftLabel.toUpperCase(),h=e.rightLabel.toUpperCase(),E=t.measureText(p).width,b=t.measureText(h).width,_=wt+E+8,P=r-wt-b-8,C=d+10;if(t.fillStyle=o.left,t.fillText(p,wt,C+3),t.fillStyle=o.right,t.textAlign="right",t.fillText(h,r-wt,C+3),t.textAlign="left",P-_>24){const x=t.createLinearGradient(_,0,P,0);x.addColorStop(0,o.left),x.addColorStop(.45,o.surface),x.addColorStop(.55,o.surface),x.addColorStop(1,o.right),ks(t,_,C-4,P-_,8,4),t.save(),t.globalAlpha=.5,t.fillStyle=x,t.fill(),t.restore(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke();const M=(_+P)/2;t.strokeStyle=o.border,t.beginPath(),t.moveTo(M,C-8),t.lineTo(M,C+8),t.stroke();for(const Z of[.25,.75]){const Y=_+Z*(P-_);t.beginPath(),t.moveTo(Y,C-5),t.lineTo(Y,C+5),t.stroke()}const D=e.max-e.min||1,U=Math.max(0,Math.min(1,(e.shown-e.min)/D)),B=_+U*(P-_),W=a(e.shown);t.beginPath(),t.moveTo(B,C-10),t.lineTo(B-4.5,C-17),t.lineTo(B+4.5,C-17),t.closePath(),t.fillStyle=W,t.fill(),t.beginPath(),t.arc(B,C,6.5,0,Math.PI*2),t.fillStyle=W,u(W,12),t.fill(),c(),t.strokeStyle=o.bg==="rgba(0,0,0,0)"?o.border:o.bg,t.lineWidth=2,t.stroke();for(const Z of e.marks??[]){const Y=(Z.value-e.min)/D;if(Y<0||Y>1)continue;const J=_+Y*(P-_),H=ld(o,Z.color);if(t.save(),t.setLineDash([2,2]),t.strokeStyle=H,t.lineWidth=1,t.beginPath(),t.moveTo(J,C-9),t.lineTo(J,C+9),t.stroke(),t.restore(),Z.label){t.font=`700 8px ${Ut}`,t.fillStyle=H;const ee=t.measureText(Z.label).width;t.fillText(Z.label,Math.max(_,Math.min(P-ee,J-ee/2)),C+20)}}}if(d+=(T=e.marks)!=null&&T.some(x=>x.label)?42:30,e.meter){const x=e.meter,M=x.min??0,D=x.max??1,U=D-M||1,B=x.tone==="up"?o.right:x.tone==="down"?o.left:x.tone==="warn"?o.warn:o.neutral;x.label&&(t.font=`700 9px ${Ut}`,t.fillStyle=o.dim,t.fillText(x.label.toUpperCase(),wt,d+9)),x.hint&&(t.font=`9px ${Ut}`,t.fillStyle=o.dim,t.textAlign="right",t.fillText(x.hint,r-wt,d+9),t.textAlign="left"),(x.label||x.hint)&&(d+=15),t.font=`700 12px ${Ut}`;const W=x.valueText??(x.value==null?"—":String(x.value)),Z=t.measureText(W).width,Y=wt,J=r-wt-Z-10,H=d+6,ee=!!((I=x.thresholds)!=null&&I.some(O=>O.label));if(J-Y>24){if(ks(t,Y,H-5,J-Y,10,5),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),x.value!=null){const O=Math.max(0,Math.min(1,(x.value-M)/U));O>0&&(t.save(),ks(t,Y,H-5,J-Y,10,5),t.clip(),t.globalAlpha=.7,t.fillStyle=B,u(B,8),t.fillRect(Y,H-5,(J-Y)*O,10),t.restore())}for(const O of x.thresholds??[]){const $=(O.value-M)/U;if($<0||$>1)continue;const q=Y+$*(J-Y),fe=ld(o,O.color);if(t.strokeStyle=fe,t.lineWidth=1,t.beginPath(),t.moveTo(q,H-7),t.lineTo(q,H+7),t.stroke(),O.label){t.font=`700 7.5px ${Ut}`,t.fillStyle=fe;const Q=t.measureText(O.label).width;t.fillText(O.label,Math.max(Y,Math.min(J-Q,q-Q/2)),H+17)}}}t.font=`700 12px ${Ut}`,t.fillStyle=B,t.textAlign="right",u(B,8),t.fillText(W,r-wt,H+4),c(),t.textAlign="left",d+=ee?32:22}if(e.caption){t.font=`600 11.5px ${Ut}`;const x=Ll(t,e.caption,f-18),M=x.length*15+12;ks(t,wt,d,f,M,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=e.value<0?o.left:o.border,t.lineWidth=1,t.stroke(),t.fillStyle=e.value<0?o.left:e.value>0?o.text:o.dim,x.forEach((D,U)=>t.fillText(D,wt+9,d+17+U*15)),d+=M+10}if(e.note){t.font=`10px ${Ut}`,t.fillStyle=o.dim;const x=Ll(t,e.note,f);x.forEach((M,D)=>t.fillText(M,wt,d+10+D*14)),d+=x.length*14+10}if(e.items.length){let D=wt;for(const U of e.items){const B=U.side==="left"?o.left:U.side==="right"?o.right:o.neutral,W=U.side==="left"?e.sideLetters[0]:U.side==="right"?e.sideLetters[1]:"";t.font=`700 10px ${Ut}`;const Z=t.measureText(U.label).width;t.font=`700 8px ${Ut}`;const Y=W?t.measureText(W).width+6:0;t.font=`10px ${Ut}`;const J=U.value?t.measureText(U.value).width:0,H=7+Z+(W?4+Y:0)+(U.value?4+J:0)+7;D+H>r-wt&&D>wt&&(D=wt,d+=23),ks(t,D,d,H,18,4),t.fillStyle=o.surface,t.fill(),t.strokeStyle=o.border,t.lineWidth=1,t.stroke(),t.fillStyle=B,t.fillRect(D,d+1,2,16);let ee=D+7;t.font=`700 10px ${Ut}`,t.fillStyle=o.text,t.fillText(U.label,ee,d+12.5),ee+=Z+4,W&&(t.font=`700 8px ${Ut}`,t.fillStyle=B,t.fillText(W,ee+3,d+12),ee+=Y+4),U.value&&(t.font=`10px ${Ut}`,t.fillStyle=U.tone==="up"?o.right:U.tone==="down"?o.left:o.dim,t.fillText(U.value,ee,d+12.5)),D+=H+5}d+=18}else if(e.emptyText){t.font=`10px ${Ut}`,t.fillStyle=o.dim;const x=Ll(t,e.emptyText,f);x.forEach((M,D)=>t.fillText(M,wt,d+10+D*14)),d+=x.length*14}return d+wt}const Bb=ai({__name:"CathodeGauge",props:{theme:{default:"none"},curvature:{default:10},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1},value:{},min:{default:-1},max:{default:1},readout:{},stance:{},sub:{},leftLabel:{default:"−"},rightLabel:{default:"+"},sideLetters:{default:()=>["−","+"]},marks:{default:()=>[]},meter:{default:null},caption:{},note:{},items:{default:()=>[]},emptyText:{},colors:{},animate:{type:Boolean,default:!0}},setup(n){const e=n,t=we(null),i=we(null),r=()=>(e.min+e.max)/2,s=we(e.animate?r():e.value);let o=0;function a(){if(cancelAnimationFrame(o),!e.animate){s.value=e.value,p();return}const D=()=>{const U=e.value-s.value;if(Math.abs(U)<.004){s.value=e.value,p();return}s.value+=U*.18,p(),o=requestAnimationFrame(D)};o=requestAnimationFrame(D)}Ke(()=>e.value,a);let l=null,u=!1;function c(){if(l){try{l.forceContextLoss()}catch{}try{l.dispose()}catch{}l=null}}let f,d;const m=new Ua({paint:(D,{dpr:U,glow:B})=>Ob(D,{dpr:U,theme:e.theme,colors:e.colors,glow:B,shown:s.value,value:e.value,min:e.min,max:e.max,readout:e.readout,stance:e.stance,sub:e.sub,leftLabel:e.leftLabel,rightLabel:e.rightLabel,sideLetters:e.sideLetters,marks:e.marks,meter:e.meter,caption:e.caption,note:e.note,items:e.items,emptyText:e.emptyText})});function g(){if(!(!i.value||!t.value)){try{l=new Ts({canvas:i.value,antialias:!1,alpha:!0})}catch{u=!0}if(!u&&!l.getContext()&&(l.dispose(),l=null,u=!0),u){v();return}l.setPixelRatio(1),l.setClearColor(0,0),f=new ws,d=new Ur(-1,1,1,-1,0,1),f.add(new cn(new li(2,2),m.material)),v()}}function v(){if(!t.value||!l&&!u)return;const D=t.value.clientWidth,U=t.value.clientHeight;m.resize(D,U)&&(l?(l.setPixelRatio(m.dpr),l.setSize(D,U)):i.value&&(i.value.width=m.canvas.width,i.value.height=m.canvas.height,i.value.style.width=D+"px",i.value.style.height=U+"px"),p())}function p(){if(!m.canvas.width)return;if(u){if(!i.value)return;m.paintOnly(!1);const U=i.value.getContext("2d");U&&(U.setTransform(1,0,0,1,0,0),U.clearRect(0,0,i.value.width,i.value.height),U.drawImage(m.canvas,0,0));return}if(!l)return;const D=e.theme==="paper";m.setLook({curvature:e.curvature,scanlines:e.scanlines&&!D,vignette:!D,magnify:e.magnify}),m.syncUniforms(),m.paint(e.glow),l.render(f,d)}Ke(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.readout,e.stance,e.sub,e.leftLabel,e.rightLabel,e.sideLetters,e.marks,e.meter,e.caption,e.note,e.items,e.emptyText,e.colors,e.min,e.max],()=>p(),{deep:!0}),Ke(()=>e.magnify,D=>{D||m.setLens(null),p()});function h(D){!e.magnify||!i.value||(m.setLens(mo(D,i.value)),p())}function E(){m.setLens(null),p()}let b=null,_=null,P=0;const C=Ai("cathodeResetTick",we(0));Ke(C,()=>T());function T(){cancelAnimationFrame(P),P=requestAnimationFrame(v)}function I(D){D.preventDefault()}function x(){l==null||l.dispose(),l=null,u=!1,g(),p()}En(()=>{un(()=>{var D;g(),i.value&&(i.value.addEventListener("webglcontextlost",I),i.value.addEventListener("webglcontextrestored",x)),t.value&&(b=new ResizeObserver(()=>v()),b.observe(t.value),_=new IntersectionObserver(U=>{U.some(B=>B.isIntersecting)&&T()}),_.observe(t.value)),window.addEventListener("resize",T),(D=window.visualViewport)==null||D.addEventListener("resize",T),a()})}),Dn(()=>{var D,U,B;cancelAnimationFrame(o),cancelAnimationFrame(P),(D=i.value)==null||D.removeEventListener("webglcontextlost",I),(U=i.value)==null||U.removeEventListener("webglcontextrestored",x),b==null||b.disconnect(),_==null||_.disconnect(),window.removeEventListener("resize",T),(B=window.visualViewport)==null||B.removeEventListener("resize",T),c(),m.dispose()});const M=tt(()=>({background:(va[e.theme]??va.none).bg}));return(D,U)=>(Qe(),yt("div",{ref_key:"wrapEl",ref:t,class:"cathode-gauge-wrap",style:Ln(M.value)},[Fe("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-gauge-canvas",onMousemove:h,onMouseleave:E},null,544)],4))}}),kb=ci(Bb,[["__scopeId","data-v-6c2fc3b2"]]),zb={class:"demo-bar"},Hb={class:"demo-tabs"},Vb={key:0,class:"demo-btns"},Gb={key:1},Wb={key:2},Xb={key:3},Yb={class:"demo-btns"},$b=["value"],qb={class:"tab-content"},Kb={class:"tab-content"},jb={class:"tab-content"},Zb={class:"tab-content"},Jb={class:"tab-content"},Qb={class:"tab-content"},eE=720,tE=ai({__name:"App",setup(n){const e=we("workspace"),t=we("none"),i=tt(()=>t.value!=="paper"),r=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],s=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(N,k){return+(Math.random()*(k-N)+N).toFixed(4)}function l(N){return N[Math.floor(Math.random()*N.length)]}function u(N){return N.toISOString().replace("T"," ").slice(0,19)}const c=Date.now(),f=["trending","ranging","volatile"],d=["NY","London","Tokyo","AH"],m=Array.from({length:240},(N,k)=>{const re=k%s.length,Ee=s[re],xe=o[re],Ue=l(r),Pe=c-Math.floor(Math.random()*30*24*36e5),$e=Math.random()<.15,G=a(10,3e3),Ce=a(-8,22),ce=+(Ce-.12).toFixed(4),Se=+(G*a(.2,2)).toFixed(2),Ie=$e?null:Pe+Math.floor(Math.random()*15*24*36e5);return{timestamp:u(new Date(Pe)),entry_timestamp:u(new Date(Pe)),exit_timestamp:Ie?u(new Date(Ie)):"",product:Ee,strategy:Ue,exchange:xe,status:$e?"open":"closed",entry_price:G.toFixed(4),exit_price:$e?"":a(G*.92,G*1.25).toFixed(4),pnl_pct:Ce.toFixed(4),net_pnl_pct:ce.toFixed(4),size_base:a(.001,2).toFixed(6),notional:Se.toFixed(2),reason:$e?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(d)}}),g=N=>k=>k.value!==""&&k.value!=null&&!isNaN(Number(k.value))?Number(k.value).toFixed(N):"",v=N=>N.value!==""&&N.value!=null&&!isNaN(Number(N.value))?Number(N.value).toFixed(2)+"%":"—",p={textAlign:"right"};function h(N){var Pe,$e;const k=(Pe=N.data)==null?void 0:Pe.entry_timestamp,re=($e=N.data)==null?void 0:$e.exit_timestamp;if(!k||!re)return"—";const Ee=new Date(re).getTime()-new Date(k).getTime();if(Ee<0)return"—";const xe=Math.floor(Ee/36e5),Ue=Math.floor(Ee%36e5/6e4);return xe>0?`${xe}h ${Ue}m`:`${Ue}m`}const E=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:N=>N.data.entry_timestamp||N.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:N=>N.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:h,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:N=>N.data.status??"closed",cellStyle:N=>({color:N.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:N=>`${N} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:g(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:g(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:g(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:g(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:N=>Number(N).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:v,cellStyle:N=>({...p,color:Number(N.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:v,cellStyle:N=>({...p,color:Number(N.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:v,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:g(1),cellStyle:N=>({...p,color:Number(N.value)>65?"#e74c3c":Number(N.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:N=>Number(N).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:N=>(Number(N.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:N=>Number(N).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:N=>`${Number(N).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:N=>Number(N).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],b={resizable:!0,sortable:!0},_=we(null),P=we(25),C=we(!0),T=we(!0),I=we(!1),x=we(!1),M=we(-1),D=we([{label:"QQQ",side:"left",value:"+1.4%",tone:"up"},{label:"IWM",side:"left",value:"−0.3%",tone:"down"},{label:"TLT",side:"right",value:"+0.8%",tone:"up"}]),U=tt(()=>M.value>0?"net long":M.value<0?"net short":"flat"),B=tt(()=>M.value<=-2?"CRASH-POSITIONED — the short tilt is the insurance paying out.":M.value<0?"tilting short — a downtrend is developing.":M.value===0?"balanced — no clear trend.":"calm tape — riding the up-trends; would flip short as a selloff develops."),W=we(.31),Z=tt(()=>{const N=W.value;return{label:"margin guard",hint:"liquidation headroom · reserve +$200.00",value:N,min:0,max:.6,valueText:N.toFixed(2),tone:N<.15?"down":N<.25?"warn":"up",thresholds:[{value:.25,label:"top-up",color:"neutral"},{value:.15,label:"de-risk",color:"left"},{value:.05,label:"halt",color:"left"}]}});function Y(){let N=M.value;for(;N===M.value;)N=Math.floor(Math.random()*9)-4;M.value=N,W.value=+(.03+Math.random()*.5).toFixed(2)}const J=we(typeof window<"u"?window.innerWidth:1200),H=tt(()=>J.value<eE);function ee(){J.value=window.innerWidth}En(()=>window.addEventListener("resize",ee)),Dn(()=>window.removeEventListener("resize",ee)),Ke(H,N=>{N&&e.value==="workspace"&&(e.value="grid")},{immediate:!0});const O=we(!1),$=we(""),q=we("all"),fe=we(0),Q=we(!0),he=we(!1),_e=we(!1);Ke(e,N=>{N==="grid"&&fe.value++});function ve(N){_.value=N.api,window.__cathodeGridApi=N.api,N.api.setGridOption("rowData",m),q.value!=="all"&&ze(q.value)}function Be(N){var re;const k=N.target.value;$.value=k,(re=_.value)==null||re.setGridOption("quickFilterText",k)}function ze(N){var k,re,Ee;q.value=N,N==="all"?(k=_.value)==null||k.setFilterModel(null):(re=_.value)==null||re.setFilterModel({status:{type:"equals",filter:N}}),(Ee=_.value)==null||Ee.onFilterChanged()}const He={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function Me(N,k){const Ee=Math.round(N*.62)-12,xe=Ee+12*2,Ue=N-xe-12,Pe=Math.round(k*.62),$e=Pe+12*2,G=k-$e-12;return{trades:{x:12,y:12,w:Ee,h:Pe,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:xe,y:12,w:Ue,h:Pe,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:$e,w:Ee,h:G,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:xe,y:$e,w:Ue,h:G,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const R=Me(window.innerWidth,window.innerHeight-88),F=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const N=[],k=Date.now()-45e5;for(let re=0;re<140;re++){const Ee=F[re%F.length];N.push({ts:k+re*32e3,text:Ee.text,level:Ee.level})}return N})();const w=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],de=we([]),ne=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],te=we([{level:"info",text:"CathodeTerminal demo"},...ne]),ae=we(!1),ge={help:()=>ne,echo:N=>({level:"info",text:N||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:N=>{const k=N.trim();return k?k==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:k==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${k}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:N=>{const k=N.trim()||"localhost",re=[{level:"info",text:`PING ${k}: 56 data bytes`}];for(let Ee=0;Ee<4;Ee++){const xe=(12+Math.random()*18).toFixed(1);re.push({level:"success",text:`64 bytes from ${k}: icmp_seq=${Ee} ttl=64 time=${xe} ms`})}return re},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:N=>{const k=N.trim()||"moo",re="─".repeat(Math.max(2,k.length+2));return[{level:"info",text:` ╭${re}╮`},{level:"info",text:` │ ${k} │`},{level:"info",text:` ╰${re}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const N=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:N[Math.floor(Math.random()*N.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function le(N){te.value=[...te.value,{level:"info",text:`→ ${N}`}];const k=N.trim();if(!k)return;if(k==="clear"){te.value=[];return}const re=k.indexOf(" "),Ee=re===-1?k:k.slice(0,re),xe=re===-1?"":k.slice(re+1),Ue=ge[Ee];let Pe;Ue?Pe=Ue(xe):Pe={level:"warn",text:`unknown command: ${Ee} — type 'help' for the demo vocabulary`},ae.value=!0,setTimeout(()=>{if(Pe!==null){const $e=Array.isArray(Pe)?Pe:[Pe];te.value=[...te.value,...$e]}ae.value=!1},180)}const S=["BTC","ETH","SOL","ARB","UNI","DASH","ZEC","AVAX","DOGE","LINK","TAO","NEAR","SPY","QQQ","NVDA","TSLA"].map((N,k)=>{const re=L(90+k*7%60),Ee=(re[re.length-1].close/re[0].close-1)*100;return{id:N,title:N,badge:k>=12?"EQ":"₿",note:`${Ee>=0?"+":""}${Ee.toFixed(1)}%`,noteColor:Ee>=0?"#00bc8c":"#e74c3c",open:k%5===0,candles:re}});function L(N){const k=[];let re=6e4;const Ee=Date.now()-N*36e5;for(let xe=0;xe<N;xe++){const Ue=(Math.random()-.495)*re*.012,Pe=re,$e=Math.max(1,re+Ue),G=Math.max(Pe,$e)*(1+Math.random()*.005),Ce=Math.min(Pe,$e)*(1-Math.random()*.005),ce=Math.round(20+Math.random()*80);k.push({start:Ee+xe*36e5,open:Pe,close:$e,high:G,low:Ce,volume:ce}),re=$e}return k}const V=we(L(300));function j(N,k){const re=new Array(N.length).fill(NaN);let Ee=0;for(let xe=0;xe<N.length;xe++)Ee+=N[xe],xe>=k&&(Ee-=N[xe-k]),xe+1>=k&&(re[xe]=Ee/k);return re}function ie(N,k){const re=new Array(N.length).fill(NaN);if(!N.length)return re;const Ee=2/(k+1);let xe=N[0];re[0]=xe;for(let Ue=1;Ue<N.length;Ue++)xe=N[Ue]*Ee+xe*(1-Ee),re[Ue]=xe;for(let Ue=0;Ue<Math.min(k-1,N.length);Ue++)re[Ue]=NaN;return re}function be(N,k=20,re=2){const Ee=j(N,k),xe=new Array(N.length).fill(NaN),Ue=new Array(N.length).fill(NaN);for(let Pe=k-1;Pe<N.length;Pe++){let $e=0;for(let Ce=Pe-k+1;Ce<=Pe;Ce++){const ce=N[Ce]-Ee[Pe];$e+=ce*ce}const G=Math.sqrt($e/k);xe[Pe]=Ee[Pe]+re*G,Ue[Pe]=Ee[Pe]-re*G}return{upper:xe,middle:Ee,lower:Ue}}const ye=tt(()=>{const N=V.value.map(re=>re.close),k=be(N,20,2);return[{kind:"band",upper:k.upper,middle:k.middle,lower:k.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:ie(N,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:ie(N,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),Te=tt(()=>{const N=V.value;if(N.length<130)return[];const k=re=>N[re];return[{timestamp:k(N.length-120).start,price:k(N.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:k(N.length-100).start,price:k(N.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:k(N.length-80).start,price:k(N.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:k(N.length-60).start,price:k(N.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:k(N.length-40).start,price:k(N.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:k(N.length-20).start,price:k(N.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const N=V.value,k=Te.value;if(!N.length||!k.length)return[];const re=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!re)return[];const Ee=re.width/(window.devicePixelRatio||1),xe=re.height/(window.devicePixelRatio||1),Ue=8,Pe=56,$e=8,G=22,Ce=8,ce=Ee-Ue-Pe,Se=Math.max(1,Math.floor(ce/Ce)),Ie=Math.max(0,N.length-Se);let De=1/0,Ze=-1/0;for(let Tt=Ie;Tt<N.length;Tt++)N[Tt].low<De&&(De=N[Tt].low),N[Tt].high>Ze&&(Ze=N[Tt].high);const mt=(Ze-De)*.04;De-=mt,Ze+=mt;const Ct=$e,ot=$e+(xe-$e-G-4)*(1-.18),$t=[];for(const Tt of k){const Fr=N[1].start-N[0].start;let ui=-1;for(let z=0;z<N.length;z++)if(Math.abs(N[z].start-Tt.timestamp)<=Fr*.5){ui=z;break}if(ui<Ie||ui>=N.length)continue;const Tn=Ue+(ui-Ie+.5)*Ce,Bi=Ct+(1-(Tt.price-De)/(Ze-De))*(ot-Ct);$t.push({x:Tn,y:Bi,kind:Tt.kind,label:Tt.label||""})}return $t}});function Ge(){const N=[],k=Date.now()-54e5;for(let re=0;re<320;re++){const Ee=w[re%w.length];N.push({ts:k+re*16e3,text:Ee.text,level:Ee.level})}de.value=N}return Ge(),(N,k)=>(Qe(),yt("div",{class:rn(["demo-shell",{"cathode-light":!i.value,mobile:H.value}])},[Fe("div",zb,[k[30]||(k[30]=Fe("span",{class:"demo-title"},"⬛ CATHODE",-1)),Fe("div",Hb,[H.value?an("",!0):(Qe(),yt("button",{key:0,class:rn(["tab-btn",{active:e.value==="workspace"}]),onClick:k[0]||(k[0]=re=>e.value="workspace")}," Workspace ",2)),Fe("button",{class:rn(["tab-btn",{active:e.value==="grid"}]),onClick:k[1]||(k[1]=re=>e.value="grid")}," Grid ",2),Fe("button",{class:rn(["tab-btn",{active:e.value==="log"}]),onClick:k[2]||(k[2]=re=>e.value="log")}," Log ",2),Fe("button",{class:rn(["tab-btn",{active:e.value==="wall"}]),onClick:k[3]||(k[3]=re=>e.value="wall")}," WALL ",2),Fe("button",{class:rn(["tab-btn",{active:e.value==="candle"}]),onClick:k[4]||(k[4]=re=>e.value="candle")}," Candle ",2),Fe("button",{class:rn(["tab-btn",{active:e.value==="terminal"}]),onClick:k[5]||(k[5]=re=>e.value="terminal")}," Terminal ",2),Fe("button",{class:rn(["tab-btn",{active:e.value==="gauge"}]),onClick:k[6]||(k[6]=re=>e.value="gauge")}," Gauge ",2)]),k[31]||(k[31]=Fe("label",null,"Theme",-1)),Nt(Fe("select",{"onUpdate:modelValue":k[7]||(k[7]=re=>t.value=re)},[...k[21]||(k[21]=[Fe("option",{value:"none"},"Default (dark)",-1),Fe("option",{value:"phosphor"},"Phosphor Green",-1),Fe("option",{value:"amber"},"Amber",-1),Fe("option",{value:"paper"},"Paper (light)",-1)])],512),[[Gg,t.value]]),Fe("label",null,"Curve "+Sn(P.value)+" · "+Sn(P.value<0?"concave":P.value>0?"convex":"flat"),1),Nt(Fe("input",{type:"range",min:"-45",max:"45",step:"1","onUpdate:modelValue":k[8]||(k[8]=re=>P.value=re),style:{width:"110px"}},null,512),[[yh,P.value,void 0,{number:!0}]]),Fe("label",null,[Nt(Fe("input",{type:"checkbox","onUpdate:modelValue":k[9]||(k[9]=re=>C.value=re),"data-testid":"cf-bendfield"},null,512),[[Vi,C.value]]),k[22]||(k[22]=Jn(" Field",-1))]),Fe("label",null,[Nt(Fe("input",{type:"checkbox","onUpdate:modelValue":k[10]||(k[10]=re=>T.value=re)},null,512),[[Vi,T.value]]),k[23]||(k[23]=Jn(" Scanlines",-1))]),Fe("label",null,[Nt(Fe("input",{type:"checkbox","onUpdate:modelValue":k[11]||(k[11]=re=>O.value=re)},null,512),[[Vi,O.value]]),k[24]||(k[24]=Jn(" Glow",-1))]),Fe("label",null,[Nt(Fe("input",{type:"checkbox","onUpdate:modelValue":k[12]||(k[12]=re=>I.value=re),"data-testid":"cf-magnify"},null,512),[[Vi,I.value]]),k[25]||(k[25]=Jn(" Magnify ",-1))]),Fe("label",null,[Nt(Fe("input",{type:"checkbox","onUpdate:modelValue":k[13]||(k[13]=re=>x.value=re),"data-testid":"cf-show-loaders"},null,512),[[Vi,x.value]]),k[26]||(k[26]=Jn(" Show loaders ",-1))]),e.value==="gauge"?(Qe(),yt("div",Vb,[Fe("button",{"data-testid":"cf-tilt",onClick:Y},"Tilt")])):an("",!0),e.value==="candle"?(Qe(),yt("label",Gb,[Nt(Fe("input",{type:"checkbox","onUpdate:modelValue":k[14]||(k[14]=re=>Q.value=re),"data-testid":"cf-show-indicators"},null,512),[[Vi,Q.value]]),k[27]||(k[27]=Jn(" Indicators ",-1))])):an("",!0),e.value==="candle"?(Qe(),yt("label",Wb,[Nt(Fe("input",{type:"checkbox","onUpdate:modelValue":k[15]||(k[15]=re=>he.value=re),"data-testid":"cf-flat"},null,512),[[Vi,he.value]]),k[28]||(k[28]=Jn(" Flat (no GL) ",-1))])):an("",!0),e.value==="candle"?(Qe(),yt("label",Xb,[Nt(Fe("input",{type:"checkbox","onUpdate:modelValue":k[16]||(k[16]=re=>_e.value=re),"data-testid":"cf-compact"},null,512),[[Vi,_e.value]]),k[29]||(k[29]=Jn(" Compact ",-1))])):an("",!0),k[32]||(k[32]=Fe("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(Qe(),yt(on,{key:4},[Fe("div",Yb,[Fe("button",{class:rn({active:q.value==="all"}),onClick:k[17]||(k[17]=re=>ze("all"))},"All",2),Fe("button",{class:rn({active:q.value==="open"}),onClick:k[18]||(k[18]=re=>ze("open"))},"Open",2),Fe("button",{class:rn({active:q.value==="closed"}),onClick:k[19]||(k[19]=re=>ze("closed"))},"Closed",2)]),Fe("input",{class:"demo-filter",placeholder:"Quick filter…",value:$.value,onInput:Be},null,40,$b)],64)):an("",!0)]),Nt(Fe("div",qb,[x.value?(Qe(),Rt(xi,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,"bend-field":C.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Qe(),Rt(td,{key:fe.value,"column-defs":E,"default-col-def":b,"row-height":28,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,magnify:I.value,pagination:!0,"pagination-page-size":50,onGridReady:ve},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[Ki,e.value==="grid"]]),Nt(Fe("div",Kb,[x.value?(Qe(),Rt(xi,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,"bend-field":C.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Qe(),Rt(Uc,{key:1,entries:de.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,magnify:I.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[Ki,e.value==="log"]]),Nt(Fe("div",jb,[x.value?(Qe(),Rt(xi,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,"bend-field":C.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Qe(),Rt(rd,{key:`cf-${he.value}`,candles:V.value,overlays:Q.value?ye.value:[],markers:Q.value?Te.value:[],theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,flat:he.value,compact:_e.value,magnify:I.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[Ki,e.value==="candle"]]),Nt(Fe("div",Zb,[At(Fb,{cells:gt(S),theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,magnify:I.value,"bend-field":C.value,onCellClick:k[20]||(k[20]=re=>console.log("wall cell:",re))},null,8,["cells","theme","curvature","scanlines","glow","magnify","bend-field"])],512),[[Ki,e.value==="wall"]]),Nt(Fe("div",Jb,[x.value?(Qe(),Rt(xi,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,"bend-field":C.value,label:"READING THE BOOK"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Qe(),Rt(kb,{key:1,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,magnify:I.value,value:M.value,min:-6,max:6,stance:U.value,sub:"1 long · 2 short · 3 flat","left-label":"short","right-label":"long","side-letters":["S","L"],marks:[{value:-2,label:"crash-positioned",color:"left"},{value:3,label:"calm tape",color:"neutral"}],meter:Z.value,caption:B.value,note:"Insurance, not alpha — judge it by crash-protection, not a calm-month P&L. It bleeds a small premium in quiet tape and pays off when the long books crash.",items:D.value,"empty-text":"Flat — no positions."},null,8,["theme","curvature","scanlines","glow","magnify","value","stance","meter","caption","items"]))],512),[[Ki,e.value==="gauge"]]),Nt(Fe("div",Qb,[x.value?(Qe(),Rt(xi,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,"bend-field":C.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Qe(),Rt(sd,{key:1,entries:te.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,magnify:I.value,busy:ae.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:le},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))],512),[[Ki,e.value==="terminal"]]),Nt(At(gb,{"storage-key":"cathode.demo.layout","initial-layout":gt(R),"container-titles":He},{default:Mr(()=>[At(Wo,{id:"trades",title:"Trades",curvature:P.value,canvas:""},{default:Mr(({resizeKey:re})=>[x.value?(Qe(),Rt(xi,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,"bend-field":C.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Qe(),Rt(td,{key:re,"column-defs":E,"default-col-def":b,"row-height":26,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,magnify:I.value,pagination:!0,"pagination-page-size":50,onGridReady:ve},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),At(Wo,{id:"chart",title:"Chart",curvature:P.value,canvas:""},{default:Mr(({resizeKey:re})=>[x.value?(Qe(),Rt(xi,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,"bend-field":C.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Qe(),Rt(rd,{key:re,candles:V.value,overlays:ye.value,markers:Te.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,magnify:I.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),At(Wo,{id:"log",title:"Log",curvature:P.value,canvas:""},{default:Mr(()=>[x.value?(Qe(),Rt(xi,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,"bend-field":C.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Qe(),Rt(Uc,{key:1,entries:de.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,magnify:I.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),At(Wo,{id:"terminal",title:"Terminal",curvature:P.value,canvas:""},{default:Mr(()=>[x.value?(Qe(),Rt(xi,{key:0,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,"bend-field":C.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow","bend-field"])):(Qe(),Rt(sd,{key:1,entries:te.value,theme:t.value,curvature:P.value,scanlines:T.value,glow:O.value,magnify:I.value,busy:ae.value,prompt:"→ ",onSubmit:le},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[Ki,e.value==="workspace"]])],2))}}),nE=ci(tE,[["__scopeId","data-v-4715577b"]]);Kg(nE).mount("#app");
