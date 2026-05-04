(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const vt={},Xr=[],Yn=()=>{},qf=()=>!1,ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),na=n=>n.startsWith("onUpdate:"),Dt=Object.assign,vc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},$h=Object.prototype.hasOwnProperty,ut=(n,e)=>$h.call(n,e),Ye=Array.isArray,Yr=n=>qs(n)==="[object Map]",cs=n=>qs(n)==="[object Set]",Qc=n=>qs(n)==="[object Date]",Je=n=>typeof n=="function",At=n=>typeof n=="string",In=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",Kf=n=>(ht(n)||Je(n))&&Je(n.then)&&Je(n.catch),jf=Object.prototype.toString,qs=n=>jf.call(n),qh=n=>qs(n).slice(8,-1),Zf=n=>qs(n)==="[object Object]",_c=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ds=gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Kh=/-\w/g,Pn=ia(n=>n.replace(Kh,e=>e.slice(1).toUpperCase())),jh=/\B([A-Z])/g,Vi=ia(n=>n.replace(jh,"-$1").toLowerCase()),Jf=ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),_a=ia(n=>n?`on${Jf(n)}`:""),Wn=(n,e)=>!Object.is(n,e),Lo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Qf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ra=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Zh=n=>{const e=At(n)?Number(n):NaN;return isNaN(e)?n:e};let eu;const sa=()=>eu||(eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fn(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=At(i)?tp(i):fn(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(n)||ht(n))return n}const Jh=/;(?![^(]*\))/g,Qh=/:([^]+)/,ep=/\/\*[^]*?\*\//g;function tp(n){const e={};return n.replace(ep,"").split(Jh).forEach(t=>{if(t){const i=t.split(Qh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function un(n){let e="";if(At(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=un(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ip=gc(np);function ed(n){return!!n||n===""}function rp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=us(n[i],e[i]);return t}function us(n,e){if(n===e)return!0;let t=Qc(n),i=Qc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=In(n),i=In(e),t||i)return n===e;if(t=Ye(n),i=Ye(e),t||i)return t&&i?rp(n,e):!1;if(t=ht(n),i=ht(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!us(n[o],e[o]))return!1}}return String(n)===String(e)}function xc(n,e){return n.findIndex(t=>us(t,e))}const td=n=>!!(n&&n.__v_isRef===!0),xn=n=>At(n)?n:n==null?"":Ye(n)||ht(n)&&(n.toString===jf||!Je(n.toString))?td(n)?xn(n.value):JSON.stringify(n,nd,2):String(n),nd=(n,e)=>td(e)?nd(n,e.value):Yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[xa(i,s)+" =>"]=r,t),{})}:cs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>xa(t))}:In(e)?xa(e):ht(e)&&!Ye(e)&&!Zf(e)?String(e):e,xa=(n,e="")=>{var t;return In(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class sp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=rn,!e&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=rn;try{return rn=this,e()}finally{rn=t}}}on(){++this._on===1&&(this.prevScope=rn,rn=this)}off(){this._on>0&&--this._on===0&&(rn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function op(){return rn}let xt;const Ma=new WeakSet;class id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&rn.active&&rn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ma.has(this)&&(Ma.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tu(this),od(this);const e=xt,t=Dn;xt=this,Dn=!0;try{return this.fn()}finally{ad(this),xt=e,Dn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yc(e);this.deps=this.depsTail=void 0,tu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ma.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dl(this)&&this.run()}get dirty(){return dl(this)}}let rd=0,Ls,Is;function sd(n,e=!1){if(n.flags|=8,e){n.next=Is,Is=n;return}n.next=Ls,Ls=n}function Mc(){rd++}function Sc(){if(--rd>0)return;if(Is){let e=Is;for(Is=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ls;){let e=Ls;for(Ls=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ad(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),yc(i),ap(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function dl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ld(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Bs)||(n.globalVersion=Bs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!dl(n))))return;n.flags|=2;const e=n.dep,t=xt,i=Dn;xt=n,Dn=!0;try{od(n);const r=n.fn(n._value);(e.version===0||Wn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{xt=t,Dn=i,ad(n),n.flags&=-3}}function yc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)yc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ap(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Dn=!0;const cd=[];function hi(){cd.push(Dn),Dn=!1}function pi(){const n=cd.pop();Dn=n===void 0?!0:n}function tu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=xt;xt=void 0;try{e()}finally{xt=t}}}let Bs=0;class lp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ec{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!Dn||xt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==xt)t=this.activeLink=new lp(xt,this),xt.deps?(t.prevDep=xt.depsTail,xt.depsTail.nextDep=t,xt.depsTail=t):xt.deps=xt.depsTail=t,ud(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=xt.depsTail,t.nextDep=void 0,xt.depsTail.nextDep=t,xt.depsTail=t,xt.deps===t&&(xt.deps=i)}return t}trigger(e){this.version++,Bs++,this.notify(e)}notify(e){Mc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Sc()}}}function ud(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ud(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const hl=new WeakMap,dr=Symbol(""),pl=Symbol(""),zs=Symbol("");function kt(n,e,t){if(Dn&&xt){let i=hl.get(n);i||hl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ec),r.map=i,r.key=t),r.track()}}function oi(n,e,t,i,r,s){const o=hl.get(n);if(!o){Bs++;return}const a=l=>{l&&l.trigger()};if(Mc(),e==="clear")o.forEach(a);else{const l=Ye(n),c=l&&_c(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===zs||!In(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(zs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(dr)),Yr(n)&&a(o.get(pl)));break;case"delete":l||(a(o.get(dr)),Yr(n)&&a(o.get(pl)));break;case"set":Yr(n)&&a(o.get(dr));break}}Sc()}function Tr(n){const e=at(n);return e===n?e:(kt(e,"iterate",zs),Sn(n)?e:e.map(Un))}function oa(n){return kt(n=at(n),"iterate",zs),n}function Hn(n,e){return mi(n)?es(hr(n)?Un(e):e):Un(e)}const cp={__proto__:null,[Symbol.iterator](){return Sa(this,Symbol.iterator,n=>Hn(this,n))},concat(...n){return Tr(this).concat(...n.map(e=>Ye(e)?Tr(e):e))},entries(){return Sa(this,"entries",n=>(n[1]=Hn(this,n[1]),n))},every(n,e){return jn(this,"every",n,e,void 0,arguments)},filter(n,e){return jn(this,"filter",n,e,t=>t.map(i=>Hn(this,i)),arguments)},find(n,e){return jn(this,"find",n,e,t=>Hn(this,t),arguments)},findIndex(n,e){return jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return jn(this,"findLast",n,e,t=>Hn(this,t),arguments)},findLastIndex(n,e){return jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ya(this,"includes",n)},indexOf(...n){return ya(this,"indexOf",n)},join(n){return Tr(this).join(n)},lastIndexOf(...n){return ya(this,"lastIndexOf",n)},map(n,e){return jn(this,"map",n,e,void 0,arguments)},pop(){return _s(this,"pop")},push(...n){return _s(this,"push",n)},reduce(n,...e){return nu(this,"reduce",n,e)},reduceRight(n,...e){return nu(this,"reduceRight",n,e)},shift(){return _s(this,"shift")},some(n,e){return jn(this,"some",n,e,void 0,arguments)},splice(...n){return _s(this,"splice",n)},toReversed(){return Tr(this).toReversed()},toSorted(n){return Tr(this).toSorted(n)},toSpliced(...n){return Tr(this).toSpliced(...n)},unshift(...n){return _s(this,"unshift",n)},values(){return Sa(this,"values",n=>Hn(this,n))}};function Sa(n,e,t){const i=oa(n),r=i[e]();return i!==n&&!Sn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const up=Array.prototype;function jn(n,e,t,i,r,s){const o=oa(n),a=o!==n&&!Sn(n),l=o[e];if(l!==up[e]){const f=l.apply(n,s);return a?Un(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Hn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function nu(n,e,t,i){const r=oa(n),s=r!==n&&!Sn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Hn(n,c)),t.call(this,c,Hn(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?Hn(n,l):l}function ya(n,e,t){const i=at(n);kt(i,"iterate",zs);const r=i[e](...t);return(r===-1||r===!1)&&wc(t[0])?(t[0]=at(t[0]),i[e](...t)):r}function _s(n,e,t=[]){hi(),Mc();const i=at(n)[e].apply(n,t);return Sc(),pi(),i}const fp=gc("__proto__,__v_isRef,__isVue"),fd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(In));function dp(n){In(n)||(n=String(n));const e=at(this);return kt(e,"has",n),e.hasOwnProperty(n)}class dd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?yp:gd:s?md:pd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!r){let l;if(o&&(l=cp[t]))return l;if(t==="hasOwnProperty")return dp}const a=Reflect.get(e,t,Gt(e)?e:i);if((In(t)?fd.has(t):fp(t))||(r||kt(e,"get",t),s))return a;if(Gt(a)){const l=o&&_c(t)?a:a.value;return r&&ht(l)?gl(l):l}return ht(a)?r?gl(a):$r(a):a}}class hd extends dd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ye(e)&&_c(t);if(!this._isShallow){const c=mi(s);if(!Sn(i)&&!mi(i)&&(s=at(s),i=at(i)),!o&&Gt(s)&&!Gt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:ut(e,t),l=Reflect.set(e,t,i,Gt(e)?e:r);return e===at(r)&&(a?Wn(i,s)&&oi(e,"set",t,i):oi(e,"add",t,i)),l}deleteProperty(e,t){const i=ut(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&oi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!In(t)||!fd.has(t))&&kt(e,"has",t),i}ownKeys(e){return kt(e,"iterate",Ye(e)?"length":dr),Reflect.ownKeys(e)}}class hp extends dd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const pp=new hd,mp=new hp,gp=new hd(!0);const ml=n=>n,ro=n=>Reflect.getPrototypeOf(n);function vp(n,e,t){return function(...i){const r=this.__v_raw,s=at(r),o=Yr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?ml:e?es:Un;return!e&&kt(s,"iterate",l?pl:dr),Dt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function so(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function _p(n,e){const t={get(r){const s=this.__v_raw,o=at(s),a=at(r);n||(Wn(r,a)&&kt(o,"get",r),kt(o,"get",a));const{has:l}=ro(o),c=e?ml:n?es:Un;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&kt(at(r),"iterate",dr),r.size},has(r){const s=this.__v_raw,o=at(s),a=at(r);return n||(Wn(r,a)&&kt(o,"has",r),kt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=at(a),c=e?ml:n?es:Un;return!n&&kt(l,"iterate",dr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Dt(t,n?{add:so("add"),set:so("set"),delete:so("delete"),clear:so("clear")}:{add(r){const s=at(this),o=ro(s),a=at(r),l=!e&&!Sn(r)&&!mi(r)?a:r;return o.has.call(s,l)||Wn(r,l)&&o.has.call(s,r)||Wn(a,l)&&o.has.call(s,a)||(s.add(l),oi(s,"add",l,l)),this},set(r,s){!e&&!Sn(s)&&!mi(s)&&(s=at(s));const o=at(this),{has:a,get:l}=ro(o);let c=a.call(o,r);c||(r=at(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Wn(s,u)&&oi(o,"set",r,s):oi(o,"add",r,s),this},delete(r){const s=at(this),{has:o,get:a}=ro(s);let l=o.call(s,r);l||(r=at(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&oi(s,"delete",r,void 0),c},clear(){const r=at(this),s=r.size!==0,o=r.clear();return s&&oi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=vp(r,n,e)}),t}function bc(n,e){const t=_p(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ut(t,r)&&r in i?t:i,r,s)}const xp={get:bc(!1,!1)},Mp={get:bc(!1,!0)},Sp={get:bc(!0,!1)};const pd=new WeakMap,md=new WeakMap,gd=new WeakMap,yp=new WeakMap;function Ep(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bp(n){return n.__v_skip||!Object.isExtensible(n)?0:Ep(qh(n))}function $r(n){return mi(n)?n:Tc(n,!1,pp,xp,pd)}function Tp(n){return Tc(n,!1,gp,Mp,md)}function gl(n){return Tc(n,!0,mp,Sp,gd)}function Tc(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=bp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function hr(n){return mi(n)?hr(n.__v_raw):!!(n&&n.__v_isReactive)}function mi(n){return!!(n&&n.__v_isReadonly)}function Sn(n){return!!(n&&n.__v_isShallow)}function wc(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function wp(n){return!ut(n,"__v_skip")&&Object.isExtensible(n)&&Qf(n,"__v_skip",!0),n}const Un=n=>ht(n)?$r(n):n,es=n=>ht(n)?gl(n):n;function Gt(n){return n?n.__v_isRef===!0:!1}function Ue(n){return Ap(n,!1)}function Ap(n,e){return Gt(n)?n:new Cp(n,e)}class Cp{constructor(e,t){this.dep=new Ec,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:Un(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Sn(e)||mi(e);e=i?e:at(e),Wn(e,t)&&(this._rawValue=e,this._value=i?e:Un(e),this.dep.trigger())}}function vd(n){return Gt(n)?n.value:n}const Rp={get:(n,e,t)=>e==="__v_raw"?n:vd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Gt(r)&&!Gt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _d(n){return hr(n)?n:new Proxy(n,Rp)}class Pp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ec(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return sd(this,!0),!0}get value(){const e=this.dep.track();return ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Dp(n,e,t=!1){let i,r;return Je(n)?i=n:(i=n.get,r=n.set),new Pp(i,r,t)}const oo={},Ho=new WeakMap;let tr;function Lp(n,e=!1,t=tr){if(t){let i=Ho.get(t);i||Ho.set(t,i=[]),i.push(n)}}function Ip(n,e,t=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:Sn(E)||r===!1||r===0?ai(E,1):ai(E);let u,f,h,m,g=!1,_=!1;if(Gt(n)?(f=()=>n.value,g=Sn(n)):hr(n)?(f=()=>c(n),g=!0):Ye(n)?(_=!0,g=n.some(E=>hr(E)||Sn(E)),f=()=>n.map(E=>{if(Gt(E))return E.value;if(hr(E))return c(E);if(Je(E))return l?l(E,2):E()})):Je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){hi();try{h()}finally{pi()}}const E=tr;tr=u;try{return l?l(n,3,[m]):n(m)}finally{tr=E}}:f=Yn,e&&r){const E=f,I=r===!0?1/0:r;f=()=>ai(E(),I)}const p=op(),d=()=>{u.stop(),p&&p.active&&vc(p.effects,u)};if(s&&e){const E=e;e=(...I)=>{E(...I),d()}}let w=_?new Array(n.length).fill(oo):oo;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const I=u.run();if(r||g||(_?I.some((D,C)=>Wn(D,w[C])):Wn(I,w))){h&&h();const D=tr;tr=u;try{const C=[I,w===oo?void 0:_&&w[0]===oo?[]:w,m];w=I,l?l(e,3,C):e(...C)}finally{tr=D}}}else u.run()};return a&&a(b),u=new id(f),u.scheduler=o?()=>o(b,!1):b,m=E=>Lp(E,!1,u),h=u.onStop=()=>{const E=Ho.get(u);if(E){if(l)l(E,4);else for(const I of E)I();Ho.delete(u)}},e?i?b(!0):w=u.run():o?o(b.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ai(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Gt(n))ai(n.value,e,t);else if(Ye(n))for(let i=0;i<n.length;i++)ai(n[i],e,t);else if(cs(n)||Yr(n))n.forEach(i=>{ai(i,e,t)});else if(Zf(n)){for(const i in n)ai(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ai(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ks(n,e,t,i){try{return i?n(...i):n()}catch(r){aa(r,e,t)}}function Nn(n,e,t,i){if(Je(n)){const r=Ks(n,e,t,i);return r&&Kf(r)&&r.catch(s=>{aa(s,e,t)}),r}if(Ye(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Nn(n[s],e,t,i));return r}}function aa(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){hi(),Ks(s,null,10,[n,l,c]),pi();return}}Up(n,t,r,i,o)}function Up(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const qt=[];let zn=-1;const qr=[];let Pi=null,Hr=0;const xd=Promise.resolve();let Vo=null;function yn(n){const e=Vo||xd;return n?e.then(this?n.bind(this):n):e}function Np(n){let e=zn+1,t=qt.length;for(;e<t;){const i=e+t>>>1,r=qt[i],s=ks(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ac(n){if(!(n.flags&1)){const e=ks(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=ks(t)?qt.push(n):qt.splice(Np(e),0,n),n.flags|=1,Md()}}function Md(){Vo||(Vo=xd.then(yd))}function Fp(n){Ye(n)?qr.push(...n):Pi&&n.id===-1?Pi.splice(Hr+1,0,n):n.flags&1||(qr.push(n),n.flags|=1),Md()}function iu(n,e,t=zn+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sd(n){if(qr.length){const e=[...new Set(qr)].sort((t,i)=>ks(t)-ks(i));if(qr.length=0,Pi){Pi.push(...e);return}for(Pi=e,Hr=0;Hr<Pi.length;Hr++){const t=Pi[Hr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Pi=null,Hr=0}}const ks=n=>n.id==null?n.flags&2?-1:1/0:n.id;function yd(n){try{for(zn=0;zn<qt.length;zn++){const e=qt[zn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ks(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;zn<qt.length;zn++){const e=qt[zn];e&&(e.flags&=-2)}zn=-1,qt.length=0,Sd(),Vo=null,(qt.length||qr.length)&&yd()}}let Vt=null,Ed=null;function Go(n){const e=Vt;return Vt=n,Ed=n&&n.type.__scopeId||null,e}function rr(n,e=Vt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Yo(-1);const s=Go(e);let o;try{o=n(...r)}finally{Go(s),i._d&&Yo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Yt(n,e){if(Vt===null)return n;const t=da(Vt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=vt]=e[r];s&&(Je(s)&&(s={mounted:s,updated:s}),s.deep&&ai(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Xi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(hi(),Nn(l,t,8,[n.el,a,n,e]),pi())}}function vl(n,e){if(Zt){let t=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===t&&(t=Zt.provides=Object.create(i)),t[n]=e}}function Ni(n,e,t=!1){const i=th();if(i||jr){let r=jr?jr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const Op=Symbol.for("v-scx"),Bp=()=>Ni(Op);function qe(n,e,t){return bd(n,e,t)}function bd(n,e,t=vt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Dt({},t),l=e&&i||!e&&s!=="post";let c;if(Ws){if(s==="sync"){const m=Bp();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Yn,m.resume=Yn,m.pause=Yn,m}}const u=Zt;a.call=(m,g,_)=>Nn(m,u,g,_);let f=!1;s==="post"?a.scheduler=m=>{nn(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Ac(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Ip(n,e,a);return Ws&&(c?c.push(h):l&&h()),h}function zp(n,e,t){const i=this.proxy,r=At(n)?n.includes(".")?Td(i,n):()=>i[n]:n.bind(i,i);let s;Je(e)?s=e:(s=e.handler,t=e);const o=js(this),a=bd(r,s.bind(i),t);return o(),a}function Td(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const kp=Symbol("_vte"),wd=n=>n.__isTeleport,kn=Symbol("_leaveCb"),xs=Symbol("_enterCb");function Hp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gi(()=>{n.isMounted=!0}),Ud(()=>{n.isUnmounting=!0}),n}const gn=[Function,Array],Ad={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},Cd=n=>{const e=n.subTree;return e.component?Cd(e.component):e},Vp={name:"BaseTransition",props:Ad,setup(n,{slots:e}){const t=th(),i=Hp();return()=>{const r=e.default&&Dd(e.default(),!0);if(!r||!r.length)return;const s=Rd(r),o=at(n),{mode:a}=o;if(i.isLeaving)return Ea(s);const l=ru(s);if(!l)return Ea(s);let c=_l(l,o,i,t,f=>c=f);l.type!==Ht&&Hs(l,c);let u=t.subTree&&ru(t.subTree);if(u&&u.type!==Ht&&!sr(u,l)&&Cd(t).type!==Ht){let f=_l(u,o,i,t);if(Hs(u,f),a==="out-in"&&l.type!==Ht)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Ea(s);a==="in-out"&&l.type!==Ht?f.delayLeave=(h,m,g)=>{const _=Pd(i,u);_[String(u.key)]=u,h[kn]=()=>{m(),h[kn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Rd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ht){e=t;break}}return e}const Gp=Vp;function Pd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function _l(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:d,onAfterAppear:w,onAppearCancelled:b}=e,E=String(n.key),I=Pd(t,n),D=(S,M)=>{S&&Nn(S,i,9,M)},C=(S,M)=>{const U=M[1];D(S,M),Ye(S)?S.every(B=>B.length<=1)&&U():S.length<=1&&U()},N={mode:o,persisted:a,beforeEnter(S){let M=l;if(!t.isMounted)if(s)M=p||l;else return;S[kn]&&S[kn](!0);const U=I[E];U&&sr(n,U)&&U.el[kn]&&U.el[kn](),D(M,[S])},enter(S){if(I[E]===n)return;let M=c,U=u,B=f;if(!t.isMounted)if(s)M=d||c,U=w||u,B=b||f;else return;let k=!1;S[xs]=te=>{k||(k=!0,te?D(B,[S]):D(U,[S]),N.delayedLeave&&N.delayedLeave(),S[xs]=void 0)};const j=S[xs].bind(null,!1);M?C(M,[S,j]):j()},leave(S,M){const U=String(n.key);if(S[xs]&&S[xs](!0),t.isUnmounting)return M();D(h,[S]);let B=!1;S[kn]=j=>{B||(B=!0,M(),j?D(_,[S]):D(g,[S]),S[kn]=void 0,I[U]===n&&delete I[U])};const k=S[kn].bind(null,!1);I[U]=n,m?C(m,[S,k]):k()},clone(S){const M=_l(S,e,t,i,r);return r&&r(M),M}};return N}function Ea(n){if(la(n))return n=Bi(n),n.children=null,n}function ru(n){if(!la(n))return wd(n.type)&&n.children?Rd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Je(t.default))return t.default()}}function Hs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Hs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Dd(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Kt?(o.patchFlag&128&&r++,i=i.concat(Dd(o.children,e,a))):(e||o.type!==Ht)&&i.push(a!=null?Bi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function xr(n,e){return Je(n)?Dt({name:n.name},e,{setup:n}):n}function Ld(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function su(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Wo=new WeakMap;function Us(n,e,t,i,r=!1){if(Ye(n)){n.forEach((_,p)=>Us(_,e&&(Ye(e)?e[p]:e),t,i,r));return}if(Kr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Us(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?da(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,f=a.setupState,h=at(f),m=f===vt?qf:_=>su(u,_)?!1:ut(h,_),g=(_,p)=>!(p&&su(u,p));if(c!=null&&c!==l){if(ou(e),At(c))u[c]=null,m(c)&&(f[c]=null);else if(Gt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Je(l))Ks(l,a,12,[o,u]);else{const _=At(l),p=Gt(l);if(_||p){const d=()=>{if(n.f){const w=_?m(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)Ye(w)&&vc(w,s);else if(Ye(w))w.includes(s)||w.push(s);else if(_)u[l]=[s],m(l)&&(f[l]=u[l]);else{const b=[s];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else _?(u[l]=o,m(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{d(),Wo.delete(n)};w.id=-1,Wo.set(n,w),nn(w,t)}else ou(n),d()}}}function ou(n){const e=Wo.get(n);e&&(e.flags|=8,Wo.delete(n))}sa().requestIdleCallback;sa().cancelIdleCallback;const Kr=n=>!!n.type.__asyncLoader,la=n=>n.type.__isKeepAlive;function Wp(n,e){Id(n,"a",e)}function Xp(n,e){Id(n,"da",e)}function Id(n,e,t=Zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ca(e,i,t),t){let r=t.parent;for(;r&&r.parent;)la(r.parent.vnode)&&Yp(i,e,t,r),r=r.parent}}function Yp(n,e,t,i){const r=ca(e,n,i,!0);Gi(()=>{vc(i[e],r)},t)}function ca(n,e,t=Zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{hi();const a=js(t),l=Nn(e,t,n,o);return a(),pi(),l});return i?r.unshift(s):r.push(s),s}}const Mi=n=>(e,t=Zt)=>{(!Ws||n==="sp")&&ca(n,(...i)=>e(...i),t)},$p=Mi("bm"),gi=Mi("m"),qp=Mi("bu"),Kp=Mi("u"),Ud=Mi("bum"),Gi=Mi("um"),jp=Mi("sp"),Zp=Mi("rtg"),Jp=Mi("rtc");function Qp(n,e=Zt){ca("ec",n,e)}const em=Symbol.for("v-ndc");function tm(n,e,t,i){let r;const s=t,o=Ye(n);if(o||At(n)){const a=o&&hr(n);let l=!1,c=!1;a&&(l=!Sn(n),c=mi(n),n=oa(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?es(Un(n[u])):Un(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function xl(n,e,t={},i,r){if(Vt.ce||Vt.parent&&Kr(Vt.parent)&&Vt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),ft(),lr(Kt,null,[yt("slot",t,i)],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),ft();const o=s&&Nd(s(t)),a=t.key||o&&o.key,l=lr(Kt,{key:(a&&!In(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Nd(n){return n.some(e=>Gs(e)?!(e.type===Ht||e.type===Kt&&!Nd(e.children)):!0)?n:null}const Ml=n=>n?nh(n)?da(n):Ml(n.parent):null,Ns=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ml(n.parent),$root:n=>Ml(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Od(n),$forceUpdate:n=>n.f||(n.f=()=>{Ac(n.update)}),$nextTick:n=>n.n||(n.n=yn.bind(n.proxy)),$watch:n=>zp.bind(n)}),ba=(n,e)=>n!==vt&&!n.__isScriptSetup&&ut(n,e),nm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ba(i,e))return o[e]=1,i[e];if(r!==vt&&ut(r,e))return o[e]=2,r[e];if(ut(s,e))return o[e]=3,s[e];if(t!==vt&&ut(t,e))return o[e]=4,t[e];Sl&&(o[e]=0)}}const c=Ns[e];let u,f;if(c)return e==="$attrs"&&kt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==vt&&ut(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ut(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ba(r,e)?(r[e]=t,!0):i!==vt&&ut(i,e)?(i[e]=t,!0):ut(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==vt&&a[0]!=="$"&&ut(n,a)||ba(e,a)||ut(s,a)||ut(i,a)||ut(Ns,a)||ut(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ut(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function au(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Sl=!0;function im(n){const e=Od(n),t=n.proxy,i=n.ctx;Sl=!1,e.beforeCreate&&lu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:_,deactivated:p,beforeDestroy:d,beforeUnmount:w,destroyed:b,unmounted:E,render:I,renderTracked:D,renderTriggered:C,errorCaptured:N,serverPrefetch:S,expose:M,inheritAttrs:U,components:B,directives:k,filters:j}=e;if(c&&rm(c,i,null),o)for(const q in o){const V=o[q];Je(V)&&(i[q]=V.bind(t))}if(r){const q=r.call(t,t);ht(q)&&(n.data=$r(q))}if(Sl=!0,s)for(const q in s){const V=s[q],le=Je(V)?V.bind(t,t):Je(V.get)?V.get.bind(t,t):Yn,ne=!Je(V)&&Je(V.set)?V.set.bind(t):Yn,ge=nt({get:le,set:ne});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Te=>ge.value=Te})}if(a)for(const q in a)Fd(a[q],i,t,q);if(l){const q=Je(l)?l.call(t):l;Reflect.ownKeys(q).forEach(V=>{vl(V,q[V])})}u&&lu(u,n,"c");function $(q,V){Ye(V)?V.forEach(le=>q(le.bind(t))):V&&q(V.bind(t))}if($($p,f),$(gi,h),$(qp,m),$(Kp,g),$(Wp,_),$(Xp,p),$(Qp,N),$(Jp,D),$(Zp,C),$(Ud,w),$(Gi,E),$(jp,S),Ye(M))if(M.length){const q=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(q,V,{get:()=>t[V],set:le=>t[V]=le,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Yn&&(n.render=I),U!=null&&(n.inheritAttrs=U),B&&(n.components=B),k&&(n.directives=k),S&&Ld(n)}function rm(n,e,t=Yn){Ye(n)&&(n=yl(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=Ni(r.from||i,r.default,!0):s=Ni(r.from||i):s=Ni(r),Gt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function lu(n,e,t){Nn(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Fd(n,e,t,i){let r=i.includes(".")?Td(t,i):()=>t[i];if(At(n)){const s=e[n];Je(s)&&qe(r,s)}else if(Je(n))qe(r,n.bind(t));else if(ht(n))if(Ye(n))n.forEach(s=>Fd(s,e,t,i));else{const s=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(s)&&qe(r,s,n)}}function Od(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Xo(l,c,o,!0)),Xo(l,e,o)),ht(e)&&s.set(e,l),l}function Xo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Xo(n,s,t,!0),r&&r.forEach(o=>Xo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=sm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const sm={data:cu,props:uu,emits:uu,methods:Cs,computed:Cs,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Cs,directives:Cs,watch:am,provide:cu,inject:om};function cu(n,e){return e?n?function(){return Dt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function om(n,e){return Cs(yl(n),yl(e))}function yl(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function Cs(n,e){return n?Dt(Object.create(null),n,e):e}function uu(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:Dt(Object.create(null),au(n),au(e??{})):e}function am(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function Bd(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lm=0;function cm(n,e){return function(i,r=null){Je(i)||(i=Dt({},i)),r!=null&&!ht(r)&&(r=null);const s=Bd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:lm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Hm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...f)):Je(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||yt(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,da(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=jr;jr=c;try{return u()}finally{jr=f}}};return c}}let jr=null;const um=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Pn(e)}Modifiers`]||n[`${Vi(e)}Modifiers`];function fm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||vt;let r=t;const s=e.startsWith("update:"),o=s&&um(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>At(u)?u.trim():u)),o.number&&(r=t.map(ra)));let a,l=i[a=_a(e)]||i[a=_a(Pn(e))];!l&&s&&(l=i[a=_a(Vi(e))]),l&&Nn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(c,n,6,r)}}const dm=new WeakMap;function zd(n,e,t=!1){const i=t?dm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Je(n)){const l=c=>{const u=zd(c,e,!0);u&&(a=!0,Dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):(Ye(s)?s.forEach(l=>o[l]=null):Dt(o,s),ht(n)&&i.set(n,o),o)}function ua(n,e){return!n||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(n,e[0].toLowerCase()+e.slice(1))||ut(n,Vi(e))||ut(n,e))}function fu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:g,inheritAttrs:_}=n,p=Go(n);let d,w;try{if(t.shapeFlag&4){const E=r||i,I=E;d=Vn(c.call(I,E,u,f,m,h,g)),w=a}else{const E=e;d=Vn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),w=e.props?a:hm(a)}}catch(E){Fs.length=0,aa(E,n,1),d=yt(Ht)}let b=d;if(w&&_!==!1){const E=Object.keys(w),{shapeFlag:I}=b;E.length&&I&7&&(s&&E.some(na)&&(w=pm(w,s)),b=Bi(b,w,!1,!0))}return t.dirs&&(b=Bi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Hs(b,t.transition),d=b,Go(p),d}const hm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ta(t))&&((e||(e={}))[t]=n[t]);return e},pm=(n,e)=>{const t={};for(const i in n)(!na(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function mm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?du(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(kd(o,i,h)&&!ua(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?du(i,o,c):!0:!!o;return!1}function du(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(kd(e,n,s)&&!ua(t,s))return!0}return!1}function kd(n,e,t){const i=n[t],r=e[t];return t==="style"&&ht(i)&&ht(r)?!us(i,r):i!==r}function gm({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Hd={},Vd=()=>Object.create(Hd),Gd=n=>Object.getPrototypeOf(n)===Hd;function vm(n,e,t,i=!1){const r={},s=Vd();n.propsDefaults=Object.create(null),Wd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Tp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function _m(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=at(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ua(n.emitsOptions,h))continue;const m=e[h];if(l)if(ut(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=Pn(h);r[g]=El(l,a,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Wd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ut(e,f)&&((u=Vi(f))===f||!ut(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=El(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ut(e,f))&&(delete s[f],c=!0)}c&&oi(n.attrs,"set","")}function Wd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ds(l))continue;const c=e[l];let u;r&&ut(r,u=Pn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ua(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=at(t),c=a||vt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=El(r,l,f,c[f],n,!ut(c,f))}}return o}function El(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ut(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=js(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Vi(t))&&(i=!0))}return i}const xm=new WeakMap;function Xd(n,e,t=!1){const i=t?xm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Je(n)){const u=f=>{l=!0;const[h,m]=Xd(f,e,!0);Dt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,Xr),Xr;if(Ye(s))for(let u=0;u<s.length;u++){const f=Pn(s[u]);hu(f)&&(o[f]=vt)}else if(s)for(const u in s){const f=Pn(u);if(hu(f)){const h=s[u],m=o[f]=Ye(h)||Je(h)?{type:h}:Dt({},h),g=m.type;let _=!1,p=!0;if(Ye(g))for(let d=0;d<g.length;++d){const w=g[d],b=Je(w)&&w.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(p=!1)}else _=Je(g)&&g.name==="Boolean";m[0]=_,m[1]=p,(_||ut(m,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function hu(n){return n[0]!=="$"&&!Ds(n)}const Cc=n=>n==="_"||n==="_ctx"||n==="$stable",Rc=n=>Ye(n)?n.map(Vn):[Vn(n)],Mm=(n,e,t)=>{if(e._n)return e;const i=rr((...r)=>Rc(e(...r)),t);return i._c=!1,i},Yd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Cc(r))continue;const s=n[r];if(Je(s))e[r]=Mm(r,s,i);else if(s!=null){const o=Rc(s);e[r]=()=>o}}},$d=(n,e)=>{const t=Rc(e);n.slots.default=()=>t},qd=(n,e,t)=>{for(const i in e)(t||!Cc(i))&&(n[i]=e[i])},Sm=(n,e,t)=>{const i=n.slots=Vd();if(n.vnode.shapeFlag&32){const r=e._;r?(qd(i,e,t),t&&Qf(i,"_",r,!0)):Yd(e,i)}else e&&$d(n,e)},ym=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:qd(r,e,t):(s=!e.$stable,Yd(e,r)),o=e}else e&&($d(n,e),o={default:1});if(s)for(const a in r)!Cc(a)&&o[a]==null&&delete r[a]},nn=Am;function Em(n){return bm(n)}function bm(n,e){const t=sa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Yn,insertStaticContent:g}=n,_=(R,O,T,de=null,A=null,P=null,F=void 0,K=null,Z=!!O.dynamicChildren)=>{if(R===O)return;R&&!sr(R,O)&&(de=_e(R),Te(R,A,P,!0),R=null),O.patchFlag===-2&&(Z=!1,O.dynamicChildren=null);const{type:x,ref:v,shapeFlag:L}=O;switch(x){case fa:p(R,O,T,de);break;case Ht:d(R,O,T,de);break;case wa:R==null&&w(O,T,de,F);break;case Kt:B(R,O,T,de,A,P,F,K,Z);break;default:L&1?I(R,O,T,de,A,P,F,K,Z):L&6?k(R,O,T,de,A,P,F,K,Z):(L&64||L&128)&&x.process(R,O,T,de,A,P,F,K,Z,De)}v!=null&&A?Us(v,R&&R.ref,P,O||R,!O):v==null&&R&&R.ref!=null&&Us(R.ref,null,P,R,!0)},p=(R,O,T,de)=>{if(R==null)i(O.el=a(O.children),T,de);else{const A=O.el=R.el;O.children!==R.children&&c(A,O.children)}},d=(R,O,T,de)=>{R==null?i(O.el=l(O.children||""),T,de):O.el=R.el},w=(R,O,T,de)=>{[R.el,R.anchor]=g(R.children,O,T,de,R.el,R.anchor)},b=({el:R,anchor:O},T,de)=>{let A;for(;R&&R!==O;)A=h(R),i(R,T,de),R=A;i(O,T,de)},E=({el:R,anchor:O})=>{let T;for(;R&&R!==O;)T=h(R),r(R),R=T;r(O)},I=(R,O,T,de,A,P,F,K,Z)=>{if(O.type==="svg"?F="svg":O.type==="math"&&(F="mathml"),R==null)D(O,T,de,A,P,F,K,Z);else{const x=R.el&&R.el._isVueCE?R.el:null;try{x&&x._beginPatch(),S(R,O,A,P,F,K,Z)}finally{x&&x._endPatch()}}},D=(R,O,T,de,A,P,F,K)=>{let Z,x;const{props:v,shapeFlag:L,transition:X,dirs:J}=R;if(Z=R.el=o(R.type,P,v&&v.is,v),L&8?u(Z,R.children):L&16&&N(R.children,Z,null,de,A,Ta(R,P),F,K),J&&Xi(R,null,de,"created"),C(Z,R,R.scopeId,F,de),v){for(const pe in v)pe!=="value"&&!Ds(pe)&&s(Z,pe,null,v[pe],P,de);"value"in v&&s(Z,"value",null,v.value,P),(x=v.onVnodeBeforeMount)&&Bn(x,de,R)}J&&Xi(R,null,de,"beforeMount");const Q=Tm(A,X);Q&&X.beforeEnter(Z),i(Z,O,T),((x=v&&v.onVnodeMounted)||Q||J)&&nn(()=>{try{x&&Bn(x,de,R),Q&&X.enter(Z),J&&Xi(R,null,de,"mounted")}finally{}},A)},C=(R,O,T,de,A)=>{if(T&&m(R,T),de)for(let P=0;P<de.length;P++)m(R,de[P]);if(A){let P=A.subTree;if(O===P||Jd(P.type)&&(P.ssContent===O||P.ssFallback===O)){const F=A.vnode;C(R,F,F.scopeId,F.slotScopeIds,A.parent)}}},N=(R,O,T,de,A,P,F,K,Z=0)=>{for(let x=Z;x<R.length;x++){const v=R[x]=K?si(R[x]):Vn(R[x]);_(null,v,O,T,de,A,P,F,K)}},S=(R,O,T,de,A,P,F)=>{const K=O.el=R.el;let{patchFlag:Z,dynamicChildren:x,dirs:v}=O;Z|=R.patchFlag&16;const L=R.props||vt,X=O.props||vt;let J;if(T&&Yi(T,!1),(J=X.onVnodeBeforeUpdate)&&Bn(J,T,O,R),v&&Xi(O,R,T,"beforeUpdate"),T&&Yi(T,!0),(L.innerHTML&&X.innerHTML==null||L.textContent&&X.textContent==null)&&u(K,""),x?M(R.dynamicChildren,x,K,T,de,Ta(O,A),P):F||V(R,O,K,null,T,de,Ta(O,A),P,!1),Z>0){if(Z&16)U(K,L,X,T,A);else if(Z&2&&L.class!==X.class&&s(K,"class",null,X.class,A),Z&4&&s(K,"style",L.style,X.style,A),Z&8){const Q=O.dynamicProps;for(let pe=0;pe<Q.length;pe++){const z=Q[pe],ie=L[z],Se=X[z];(Se!==ie||z==="value")&&s(K,z,ie,Se,A,T)}}Z&1&&R.children!==O.children&&u(K,O.children)}else!F&&x==null&&U(K,L,X,T,A);((J=X.onVnodeUpdated)||v)&&nn(()=>{J&&Bn(J,T,O,R),v&&Xi(O,R,T,"updated")},de)},M=(R,O,T,de,A,P,F)=>{for(let K=0;K<O.length;K++){const Z=R[K],x=O[K],v=Z.el&&(Z.type===Kt||!sr(Z,x)||Z.shapeFlag&198)?f(Z.el):T;_(Z,x,v,null,de,A,P,F,!0)}},U=(R,O,T,de,A)=>{if(O!==T){if(O!==vt)for(const P in O)!Ds(P)&&!(P in T)&&s(R,P,O[P],null,A,de);for(const P in T){if(Ds(P))continue;const F=T[P],K=O[P];F!==K&&P!=="value"&&s(R,P,K,F,A,de)}"value"in T&&s(R,"value",O.value,T.value,A)}},B=(R,O,T,de,A,P,F,K,Z)=>{const x=O.el=R?R.el:a(""),v=O.anchor=R?R.anchor:a("");let{patchFlag:L,dynamicChildren:X,slotScopeIds:J}=O;J&&(K=K?K.concat(J):J),R==null?(i(x,T,de),i(v,T,de),N(O.children||[],T,v,A,P,F,K,Z)):L>0&&L&64&&X&&R.dynamicChildren&&R.dynamicChildren.length===X.length?(M(R.dynamicChildren,X,T,A,P,F,K),(O.key!=null||A&&O===A.subTree)&&Kd(R,O,!0)):V(R,O,T,v,A,P,F,K,Z)},k=(R,O,T,de,A,P,F,K,Z)=>{O.slotScopeIds=K,R==null?O.shapeFlag&512?A.ctx.activate(O,T,de,F,Z):j(O,T,de,A,P,F,Z):te(R,O,Z)},j=(R,O,T,de,A,P,F)=>{const K=R.component=Um(R,de,A);if(la(R)&&(K.ctx.renderer=De),Nm(K,!1,F),K.asyncDep){if(A&&A.registerDep(K,$,F),!R.el){const Z=K.subTree=yt(Ht);d(null,Z,O,T),R.placeholder=Z.el}}else $(K,R,O,T,A,P,F)},te=(R,O,T)=>{const de=O.component=R.component;if(mm(R,O,T))if(de.asyncDep&&!de.asyncResolved){q(de,O,T);return}else de.next=O,de.update();else O.el=R.el,de.vnode=O},$=(R,O,T,de,A,P,F)=>{const K=()=>{if(R.isMounted){let{next:L,bu:X,u:J,parent:Q,vnode:pe}=R;{const be=jd(R);if(be){L&&(L.el=pe.el,q(R,L,F)),be.asyncDep.then(()=>{nn(()=>{R.isUnmounted||x()},A)});return}}let z=L,ie;Yi(R,!1),L?(L.el=pe.el,q(R,L,F)):L=pe,X&&Lo(X),(ie=L.props&&L.props.onVnodeBeforeUpdate)&&Bn(ie,Q,L,pe),Yi(R,!0);const Se=fu(R),ue=R.subTree;R.subTree=Se,_(ue,Se,f(ue.el),_e(ue),R,A,P),L.el=Se.el,z===null&&gm(R,Se.el),J&&nn(J,A),(ie=L.props&&L.props.onVnodeUpdated)&&nn(()=>Bn(ie,Q,L,pe),A)}else{let L;const{el:X,props:J}=O,{bm:Q,m:pe,parent:z,root:ie,type:Se}=R,ue=Kr(O);Yi(R,!1),Q&&Lo(Q),!ue&&(L=J&&J.onVnodeBeforeMount)&&Bn(L,z,O),Yi(R,!0);{ie.ce&&ie.ce._hasShadowRoot()&&ie.ce._injectChildStyle(Se,R.parent?R.parent.type:void 0);const be=R.subTree=fu(R);_(null,be,T,de,R,A,P),O.el=be.el}if(pe&&nn(pe,A),!ue&&(L=J&&J.onVnodeMounted)){const be=O;nn(()=>Bn(L,z,be),A)}(O.shapeFlag&256||z&&Kr(z.vnode)&&z.vnode.shapeFlag&256)&&R.a&&nn(R.a,A),R.isMounted=!0,O=T=de=null}};R.scope.on();const Z=R.effect=new id(K);R.scope.off();const x=R.update=Z.run.bind(Z),v=R.job=Z.runIfDirty.bind(Z);v.i=R,v.id=R.uid,Z.scheduler=()=>Ac(v),Yi(R,!0),x()},q=(R,O,T)=>{O.component=R;const de=R.vnode.props;R.vnode=O,R.next=null,_m(R,O.props,de,T),ym(R,O.children,T),hi(),iu(R),pi()},V=(R,O,T,de,A,P,F,K,Z=!1)=>{const x=R&&R.children,v=R?R.shapeFlag:0,L=O.children,{patchFlag:X,shapeFlag:J}=O;if(X>0){if(X&128){ne(x,L,T,de,A,P,F,K,Z);return}else if(X&256){le(x,L,T,de,A,P,F,K,Z);return}}J&8?(v&16&&Ee(x,A,P),L!==x&&u(T,L)):v&16?J&16?ne(x,L,T,de,A,P,F,K,Z):Ee(x,A,P,!0):(v&8&&u(T,""),J&16&&N(L,T,de,A,P,F,K,Z))},le=(R,O,T,de,A,P,F,K,Z)=>{R=R||Xr,O=O||Xr;const x=R.length,v=O.length,L=Math.min(x,v);let X;for(X=0;X<L;X++){const J=O[X]=Z?si(O[X]):Vn(O[X]);_(R[X],J,T,null,A,P,F,K,Z)}x>v?Ee(R,A,P,!0,!1,L):N(O,T,de,A,P,F,K,Z,L)},ne=(R,O,T,de,A,P,F,K,Z)=>{let x=0;const v=O.length;let L=R.length-1,X=v-1;for(;x<=L&&x<=X;){const J=R[x],Q=O[x]=Z?si(O[x]):Vn(O[x]);if(sr(J,Q))_(J,Q,T,null,A,P,F,K,Z);else break;x++}for(;x<=L&&x<=X;){const J=R[L],Q=O[X]=Z?si(O[X]):Vn(O[X]);if(sr(J,Q))_(J,Q,T,null,A,P,F,K,Z);else break;L--,X--}if(x>L){if(x<=X){const J=X+1,Q=J<v?O[J].el:de;for(;x<=X;)_(null,O[x]=Z?si(O[x]):Vn(O[x]),T,Q,A,P,F,K,Z),x++}}else if(x>X)for(;x<=L;)Te(R[x],A,P,!0),x++;else{const J=x,Q=x,pe=new Map;for(x=Q;x<=X;x++){const Me=O[x]=Z?si(O[x]):Vn(O[x]);Me.key!=null&&pe.set(Me.key,x)}let z,ie=0;const Se=X-Q+1;let ue=!1,be=0;const Ne=new Array(Se);for(x=0;x<Se;x++)Ne[x]=0;for(x=J;x<=L;x++){const Me=R[x];if(ie>=Se){Te(Me,A,P,!0);continue}let Xe;if(Me.key!=null)Xe=pe.get(Me.key);else for(z=Q;z<=X;z++)if(Ne[z-Q]===0&&sr(Me,O[z])){Xe=z;break}Xe===void 0?Te(Me,A,P,!0):(Ne[Xe-Q]=x+1,Xe>=be?be=Xe:ue=!0,_(Me,O[Xe],T,null,A,P,F,K,Z),ie++)}const Be=ue?wm(Ne):Xr;for(z=Be.length-1,x=Se-1;x>=0;x--){const Me=Q+x,Xe=O[Me],$e=O[Me+1],it=Me+1<v?$e.el||Zd($e):de;Ne[x]===0?_(null,Xe,T,it,A,P,F,K,Z):ue&&(z<0||x!==Be[z]?ge(Xe,T,it,2):z--)}}},ge=(R,O,T,de,A=null)=>{const{el:P,type:F,transition:K,children:Z,shapeFlag:x}=R;if(x&6){ge(R.component.subTree,O,T,de);return}if(x&128){R.suspense.move(O,T,de);return}if(x&64){F.move(R,O,T,De);return}if(F===Kt){i(P,O,T);for(let L=0;L<Z.length;L++)ge(Z[L],O,T,de);i(R.anchor,O,T);return}if(F===wa){b(R,O,T);return}if(de!==2&&x&1&&K)if(de===0)K.beforeEnter(P),i(P,O,T),nn(()=>K.enter(P),A);else{const{leave:L,delayLeave:X,afterLeave:J}=K,Q=()=>{R.ctx.isUnmounted?r(P):i(P,O,T)},pe=()=>{P._isLeaving&&P[kn](!0),L(P,()=>{Q(),J&&J()})};X?X(P,Q,pe):pe()}else i(P,O,T)},Te=(R,O,T,de=!1,A=!1)=>{const{type:P,props:F,ref:K,children:Z,dynamicChildren:x,shapeFlag:v,patchFlag:L,dirs:X,cacheIndex:J,memo:Q}=R;if(L===-2&&(A=!1),K!=null&&(hi(),Us(K,null,T,R,!0),pi()),J!=null&&(O.renderCache[J]=void 0),v&256){O.ctx.deactivate(R);return}const pe=v&1&&X,z=!Kr(R);let ie;if(z&&(ie=F&&F.onVnodeBeforeUnmount)&&Bn(ie,O,R),v&6)he(R.component,T,de);else{if(v&128){R.suspense.unmount(T,de);return}pe&&Xi(R,null,O,"beforeUnmount"),v&64?R.type.remove(R,O,T,De,de):x&&!x.hasOnce&&(P!==Kt||L>0&&L&64)?Ee(x,O,T,!1,!0):(P===Kt&&L&384||!A&&v&16)&&Ee(Z,O,T),de&&Ge(R)}const Se=Q!=null&&J==null;(z&&(ie=F&&F.onVnodeUnmounted)||pe||Se)&&nn(()=>{ie&&Bn(ie,O,R),pe&&Xi(R,null,O,"unmounted"),Se&&(R.el=null)},T)},Ge=R=>{const{type:O,el:T,anchor:de,transition:A}=R;if(O===Kt){oe(T,de);return}if(O===wa){E(R);return}const P=()=>{r(T),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(R.shapeFlag&1&&A&&!A.persisted){const{leave:F,delayLeave:K}=A,Z=()=>F(T,P);K?K(R.el,P,Z):Z()}else P()},oe=(R,O)=>{let T;for(;R!==O;)T=h(R),r(R),R=T;r(O)},he=(R,O,T)=>{const{bum:de,scope:A,job:P,subTree:F,um:K,m:Z,a:x}=R;pu(Z),pu(x),de&&Lo(de),A.stop(),P&&(P.flags|=8,Te(F,R,O,T)),K&&nn(K,O),nn(()=>{R.isUnmounted=!0},O)},Ee=(R,O,T,de=!1,A=!1,P=0)=>{for(let F=P;F<R.length;F++)Te(R[F],O,T,de,A)},_e=R=>{if(R.shapeFlag&6)return _e(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const O=h(R.anchor||R.el),T=O&&O[kp];return T?h(T):O};let fe=!1;const ve=(R,O,T)=>{let de;R==null?O._vnode&&(Te(O._vnode,null,null,!0),de=O._vnode.component):_(O._vnode||null,R,O,null,null,null,T),O._vnode=R,fe||(fe=!0,iu(de),Sd(),fe=!1)},De={p:_,um:Te,m:ge,r:Ge,mt:j,mc:N,pc:V,pbc:M,n:_e,o:n};return{render:ve,hydrate:void 0,createApp:cm(ve)}}function Ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Tm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Kd(n,e,t=!1){const i=n.children,r=e.children;if(Ye(i)&&Ye(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=si(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Kd(o,a)),a.type===fa&&(a.patchFlag===-1&&(a=r[s]=si(a)),a.el=o.el),a.type===Ht&&!a.el&&(a.el=o.el)}}function wm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function jd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jd(e)}function pu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Zd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Zd(e.subTree):null}const Jd=n=>n.__isSuspense;function Am(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):Fp(n)}const Kt=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),Fs=[];let dn=null;function ft(n=!1){Fs.push(dn=n?null:[])}function Cm(){Fs.pop(),dn=Fs[Fs.length-1]||null}let Vs=1;function Yo(n,e=!1){Vs+=n,n<0&&dn&&e&&(dn.hasOnce=!0)}function Qd(n){return n.dynamicChildren=Vs>0?dn||Xr:null,Cm(),Vs>0&&dn&&dn.push(n),n}function Et(n,e,t,i,r,s){return Qd(ze(n,e,t,i,r,s,!0))}function lr(n,e,t,i,r){return Qd(yt(n,e,t,i,r,!0))}function Gs(n){return n?n.__v_isVNode===!0:!1}function sr(n,e){return n.type===e.type&&n.key===e.key}const eh=({key:n})=>n??null,Io=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Gt(n)||Je(n)?{i:Vt,r:n,k:e,f:!!t}:n:null);function ze(n,e=null,t=null,i=0,r=null,s=n===Kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&eh(e),ref:e&&Io(e),scopeId:Ed,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return a?(Pc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Vs>0&&!o&&dn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&dn.push(l),l}const yt=Rm;function Rm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===em)&&(n=Ht),Gs(n)){const a=Bi(n,e,!0);return t&&Pc(a,t),Vs>0&&!s&&dn&&(a.shapeFlag&6?dn[dn.indexOf(n)]=a:dn.push(a)),a.patchFlag=-2,a}if(zm(n)&&(n=n.__vccOpts),e){e=Pm(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=un(a)),ht(l)&&(wc(l)&&!Ye(l)&&(l=Dt({},l)),e.style=fn(l))}const o=At(n)?1:Jd(n)?128:wd(n)?64:ht(n)?4:Je(n)?2:0;return ze(n,e,t,i,r,o,s,!0)}function Pm(n){return n?wc(n)||Gd(n)?Dt({},n):n:null}function Bi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Dm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&eh(c),ref:e&&e.ref?t&&s?Ye(s)?s.concat(Io(e)):[s,Io(e)]:Io(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Kt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bi(n.ssContent),ssFallback:n.ssFallback&&Bi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Hs(u,l.clone(u)),u}function Di(n=" ",e=0){return yt(fa,null,n,e)}function jt(n="",e=!1){return e?(ft(),lr(Ht,null,n)):yt(Ht,null,n)}function Vn(n){return n==null||typeof n=="boolean"?yt(Ht):Ye(n)?yt(Kt,null,n.slice()):Gs(n)?si(n):yt(fa,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bi(n)}function Pc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Pc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Gd(e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:Vt},t=32):(e=String(e),i&64?(t=16,e=[Di(e)]):t=8);n.children=e,n.shapeFlag|=t}function Dm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=un([e.class,i.class]));else if(r==="style")e.style=fn([e.style,i.style]);else if(ta(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ye(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!na(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Bn(n,e,t,i=null){Nn(n,e,7,[t,i])}const Lm=Bd();let Im=0;function Um(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Lm,s={uid:Im++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xd(i,r),emitsOptions:zd(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=fm.bind(null,s),n.ce&&n.ce(s),s}let Zt=null;const th=()=>Zt||Vt;let $o,bl;{const n=sa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};$o=e("__VUE_INSTANCE_SETTERS__",t=>Zt=t),bl=e("__VUE_SSR_SETTERS__",t=>Ws=t)}const js=n=>{const e=Zt;return $o(n),n.scope.on(),()=>{n.scope.off(),$o(e)}},mu=()=>{Zt&&Zt.scope.off(),$o(null)};function nh(n){return n.vnode.shapeFlag&4}let Ws=!1;function Nm(n,e=!1,t=!1){e&&bl(e);const{props:i,children:r}=n.vnode,s=nh(n);vm(n,i,s,e),Sm(n,r,t||e);const o=s?Fm(n,e):void 0;return e&&bl(!1),o}function Fm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,nm);const{setup:i}=t;if(i){hi();const r=n.setupContext=i.length>1?Bm(n):null,s=js(n),o=Ks(i,n,0,[n.props,r]),a=Kf(o);if(pi(),s(),(a||n.sp)&&!Kr(n)&&Ld(n),a){if(o.then(mu,mu),e)return o.then(l=>{gu(n,l)}).catch(l=>{aa(l,n,0)});n.asyncDep=o}else gu(n,o)}else ih(n)}function gu(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=_d(e)),ih(n)}function ih(n,e,t){const i=n.type;n.render||(n.render=i.render||Yn);{const r=js(n);hi();try{im(n)}finally{pi(),r()}}}const Om={get(n,e){return kt(n,"get",""),n[e]}};function Bm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Om),slots:n.slots,emit:n.emit,expose:e}}function da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_d(wp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ns)return Ns[t](n)},has(e,t){return t in e||t in Ns}})):n.proxy}function zm(n){return Je(n)&&"__vccOpts"in n}const nt=(n,e)=>Dp(n,e,Ws);function km(n,e,t){try{Yo(-1);const i=arguments.length;return i===2?ht(e)&&!Ye(e)?Gs(e)?yt(n,null,[e]):yt(n,e):yt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Gs(t)&&(t=[t]),yt(n,e,t))}finally{Yo(1)}}const Hm="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tl;const vu=typeof window<"u"&&window.trustedTypes;if(vu)try{Tl=vu.createPolicy("vue",{createHTML:n=>n})}catch{}const rh=Tl?n=>Tl.createHTML(n):n=>n,Vm="http://www.w3.org/2000/svg",Gm="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,_u=ri&&ri.createElement("template"),Wm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ri.createElementNS(Vm,n):e==="mathml"?ri.createElementNS(Gm,n):t?ri.createElement(n,{is:t}):ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{_u.innerHTML=rh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=_u.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ei="transition",Ms="animation",Xs=Symbol("_vtc"),sh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xm=Dt({},Ad,sh),Ym=n=>(n.displayName="Transition",n.props=Xm,n),$m=Ym((n,{slots:e})=>km(Gp,qm(n),e)),$i=(n,e=[])=>{Ye(n)?n.forEach(t=>t(...e)):n&&n(...e)},xu=n=>n?Ye(n)?n.some(e=>e.length>1):n.length>1:!1;function qm(n){const e={};for(const B in n)B in sh||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=Km(r),_=g&&g[0],p=g&&g[1],{onBeforeEnter:d,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:I,onBeforeAppear:D=d,onAppear:C=w,onAppearCancelled:N=b}=e,S=(B,k,j,te)=>{B._enterCancelled=te,qi(B,k?u:a),qi(B,k?c:o),j&&j()},M=(B,k)=>{B._isLeaving=!1,qi(B,f),qi(B,m),qi(B,h),k&&k()},U=B=>(k,j)=>{const te=B?C:w,$=()=>S(k,B,j);$i(te,[k,$]),Mu(()=>{qi(k,B?l:s),Zn(k,B?u:a),xu(te)||Su(k,i,_,$)})};return Dt(e,{onBeforeEnter(B){$i(d,[B]),Zn(B,s),Zn(B,o)},onBeforeAppear(B){$i(D,[B]),Zn(B,l),Zn(B,c)},onEnter:U(!1),onAppear:U(!0),onLeave(B,k){B._isLeaving=!0;const j=()=>M(B,k);Zn(B,f),B._enterCancelled?(Zn(B,h),bu(B)):(bu(B),Zn(B,h)),Mu(()=>{B._isLeaving&&(qi(B,f),Zn(B,m),xu(E)||Su(B,i,p,j))}),$i(E,[B,j])},onEnterCancelled(B){S(B,!1,void 0,!0),$i(b,[B])},onAppearCancelled(B){S(B,!0,void 0,!0),$i(N,[B])},onLeaveCancelled(B){M(B),$i(I,[B])}})}function Km(n){if(n==null)return null;if(ht(n))return[Aa(n.enter),Aa(n.leave)];{const e=Aa(n);return[e,e]}}function Aa(n){return Zh(n)}function Zn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Xs]||(n[Xs]=new Set)).add(e)}function qi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Xs];t&&(t.delete(e),t.size||(n[Xs]=void 0))}function Mu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let jm=0;function Su(n,e,t,i){const r=n._endId=++jm,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Zm(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Zm(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${Ei}Delay`),s=i(`${Ei}Duration`),o=yu(r,s),a=i(`${Ms}Delay`),l=i(`${Ms}Duration`),c=yu(a,l);let u=null,f=0,h=0;e===Ei?o>0&&(u=Ei,f=o,h=s.length):e===Ms?c>0&&(u=Ms,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Ei:Ms:null,h=u?u===Ei?s.length:l.length:0);const m=u===Ei&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ei}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function yu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Eu(t)+Eu(n[i])))}function Eu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function bu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Jm(n,e,t){const i=n[Xs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const qo=Symbol("_vod"),oh=Symbol("_vsh"),Vr={name:"show",beforeMount(n,{value:e},{transition:t}){n[qo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ss(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ss(n,!0),i.enter(n)):i.leave(n,()=>{Ss(n,!1)}):Ss(n,e))},beforeUnmount(n,{value:e}){Ss(n,e)}};function Ss(n,e){n.style.display=e?n[qo]:"none",n[oh]=!e}const Qm=Symbol(""),eg=/(?:^|;)\s*display\s*:/;function tg(n,e,t){const i=n.style,r=At(t);let s=!1;if(t&&!r){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Uo(i,a,"")}else for(const o in e)t[o]==null&&Uo(i,o,"");for(const o in t)o==="display"&&(s=!0),Uo(i,o,t[o])}else if(r){if(e!==t){const o=i[Qm];o&&(t+=";"+o),i.cssText=t,s=eg.test(t)}}else e&&n.removeAttribute("style");qo in n&&(n[qo]=s?i.display:"",n[oh]&&(i.display="none"))}const Tu=/\s*!important$/;function Uo(n,e,t){if(Ye(t))t.forEach(i=>Uo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ng(n,e);Tu.test(t)?n.setProperty(Vi(i),t.replace(Tu,""),"important"):n[i]=t}}const wu=["Webkit","Moz","ms"],Ca={};function ng(n,e){const t=Ca[e];if(t)return t;let i=Pn(e);if(i!=="filter"&&i in n)return Ca[e]=i;i=Jf(i);for(let r=0;r<wu.length;r++){const s=wu[r]+i;if(s in n)return Ca[e]=s}return e}const Au="http://www.w3.org/1999/xlink";function Cu(n,e,t,i,r,s=ip(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Au,e.slice(6,e.length)):n.setAttributeNS(Au,e,t):t==null||s&&!ed(t)?n.removeAttribute(e):n.setAttribute(e,s?"":In(t)?String(t):t)}function Ru(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?rh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ed(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Li(n,e,t,i){n.addEventListener(e,t,i)}function ig(n,e,t,i){n.removeEventListener(e,t,i)}const Pu=Symbol("_vei");function rg(n,e,t,i,r=null){const s=n[Pu]||(n[Pu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=sg(e);if(i){const c=s[e]=lg(i,r);Li(n,a,c,l)}else o&&(ig(n,a,o,l),s[e]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function sg(n){let e;if(Du.test(n)){e={};let i;for(;i=n.match(Du);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Vi(n.slice(2)),e]}let Ra=0;const og=Promise.resolve(),ag=()=>Ra||(og.then(()=>Ra=0),Ra=Date.now());function lg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Nn(cg(i,t.value),e,5,[i])};return t.value=n,t.attached=ag(),t}function cg(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Lu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ug=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Jm(n,i,o):e==="style"?tg(n,t,i):ta(e)?na(e)||rg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fg(n,e,i,o))?(Ru(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cu(n,e,i,o,s,e!=="value")):n._isVueCE&&(dg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!At(i)))?Ru(n,Pn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Cu(n,e,i,o))};function fg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Lu(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Lu(e)&&At(t)?!1:e in n}function dg(n,e){const t=n._def.props;if(!t)return!1;const i=Pn(e);return Array.isArray(t)?t.some(r=>Pn(r)===i):Object.keys(t).some(r=>Pn(r)===i)}const ts=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ye(e)?t=>Lo(e,t):e};function hg(n){n.target.composing=!0}function Iu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fi=Symbol("_assign");function Uu(n,e,t){return e&&(n=n.trim()),t&&(n=ra(n)),n}const ah={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[fi]=ts(r);const s=i||r.props&&r.props.type==="number";Li(n,e?"change":"input",o=>{o.target.composing||n[fi](Uu(n.value,t,s))}),(t||s)&&Li(n,"change",()=>{n.value=Uu(n.value,t,s)}),e||(Li(n,"compositionstart",hg),Li(n,"compositionend",Iu),Li(n,"change",Iu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[fi]=ts(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?ra(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},wr={deep:!0,created(n,e,t){n[fi]=ts(t),Li(n,"change",()=>{const i=n._modelValue,r=Ys(n),s=n.checked,o=n[fi];if(Ye(i)){const a=xc(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(cs(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(lh(n,s))})},mounted:Nu,beforeUpdate(n,e,t){n[fi]=ts(t),Nu(n,e,t)}};function Nu(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Ye(e))r=xc(e,i.props.value)>-1;else if(cs(e))r=e.has(i.props.value);else{if(e===t)return;r=us(e,lh(n,!0))}n.checked!==r&&(n.checked=r)}const pg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=cs(e);Li(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?ra(Ys(o)):Ys(o));n[fi](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,yn(()=>{n._assigning=!1})}),n[fi]=ts(i)},mounted(n,{value:e}){Fu(n,e)},beforeUpdate(n,e,t){n[fi]=ts(t)},updated(n,{value:e}){n._assigning||Fu(n,e)}};function Fu(n,e){const t=n.multiple,i=Ye(e);if(!(t&&!i&&!cs(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=Ys(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=xc(e,a)>-1}else o.selected=e.has(a);else if(us(Ys(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ys(n){return"_value"in n?n._value:n.value}function lh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const mg=["ctrl","shift","alt","meta"],gg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>mg.some(t=>n[`${t}Key`]&&!e.includes(t))},Ui=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=gg[e[o]];if(a&&a(r,e))return}return n(r,...s)})},vg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_g=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=Vi(r.key);if(e.some(o=>o===s||vg[o]===s))return n(r)})},xg=Dt({patchProp:ug},Wm);let Ou;function Mg(){return Ou||(Ou=Em(xg))}const Sg=(...n)=>{const e=Mg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Eg(i);if(!r)return;const s=e._component;!Je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,yg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function yg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Eg(n){return At(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="170",bg=0,Bu=1,Tg=2,ch=1,wg=2,ii=3,zi=0,on=1,li=2,Fi=0,Zr=1,zu=2,ku=3,Hu=4,Ag=5,or=100,Cg=101,Rg=102,Pg=103,Dg=104,Lg=200,Ig=201,Ug=202,Ng=203,wl=204,Al=205,Fg=206,Og=207,Bg=208,zg=209,kg=210,Hg=211,Vg=212,Gg=213,Wg=214,Cl=0,Rl=1,Pl=2,ns=3,Dl=4,Ll=5,Il=6,Ul=7,uh=0,Xg=1,Yg=2,Oi=0,$g=1,qg=2,Kg=3,jg=4,Zg=5,Jg=6,Qg=7,fh=300,is=301,rs=302,Nl=303,Fl=304,ha=306,Ol=1e3,cr=1001,Bl=1002,Ln=1003,ev=1004,ao=1005,Tt=1006,Pa=1007,ur=1008,vi=1009,dh=1010,hh=1011,$s=1012,Lc=1013,vr=1014,ci=1015,Zs=1016,Ic=1017,Uc=1018,ss=1020,ph=35902,mh=1021,gh=1022,Rn=1023,vh=1024,_h=1025,Jr=1026,os=1027,xh=1028,Nc=1029,Mh=1030,Fc=1031,Oc=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,zl=35840,kl=35841,Hl=35842,Vl=35843,Gl=36196,Wl=37492,Xl=37496,Yl=37808,$l=37809,ql=37810,Kl=37811,jl=37812,Zl=37813,Jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,rc=37820,sc=37821,zo=36492,oc=36494,ac=36495,Sh=36283,lc=36284,cc=36285,uc=36286,tv=3200,nv=3201,iv=0,rv=1,Ii="",_n="srgb",fs="srgb-linear",pa="linear",mt="srgb",Ar=7680,Vu=519,sv=512,ov=513,av=514,yh=515,lv=516,cv=517,uv=518,fv=519,Gu=35044,Wu="300 es",ui=2e3,Ko=2001;class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Da=Math.PI/180,fc=180/Math.PI;function Js(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function dv(n,e){return(n%e+e)%e}function La(n,e,t){return(1-t)*n+t*e}function ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],_=r[0],p=r[3],d=r[6],w=r[1],b=r[4],E=r[7],I=r[2],D=r[5],C=r[8];return s[0]=o*_+a*w+l*I,s[3]=o*p+a*b+l*D,s[6]=o*d+a*E+l*C,s[1]=c*_+u*w+f*I,s[4]=c*p+u*b+f*D,s[7]=c*d+u*E+f*C,s[2]=h*_+m*w+g*I,s[5]=h*p+m*b+g*D,s[8]=h*d+m*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new et;function Eh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hv(){const n=jo("canvas");return n.style.display="block",n}const Xu={};function Rs(n){n in Xu||(Xu[n]=!0,console.warn(n))}function pv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function mv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(n.r=di(n.r),n.g=di(n.g),n.b=di(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(n.r=Qr(n.r),n.g=Qr(n.g),n.b=Qr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ii?pa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Yu=[.64,.33,.3,.6,.15,.06],$u=[.2126,.7152,.0722],qu=[.3127,.329],Ku=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[fs]:{primaries:Yu,whitePoint:qu,transfer:pa,toXYZ:Ku,fromXYZ:ju,luminanceCoefficients:$u,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:Yu,whitePoint:qu,transfer:mt,toXYZ:Ku,fromXYZ:ju,luminanceCoefficients:$u,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}});let Cr;class vv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=jo("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _v=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ua(r[o].image)):s.push(Ua(r[o]))}else s=Ua(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xv=0;class Qt extends ds{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=cr,r=cr,s=Tt,o=ur,a=Rn,l=vi,c=Qt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Js(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ol:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ol:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=fh;Qt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(m+1)/2,I=(d+1)/2,D=(u+h)/4,C=(f+_)/4,N=(g+p)/4;return b>E&&b>I?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=D/i,s=C/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=N/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=N/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(f-_)/w,this.z=(h-u)/w,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mv extends ds{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends Mv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Th extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sv extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==m||u!==g){let p=1-a;const d=l*h+c*m+u*g+f*_,w=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const I=Math.sqrt(b),D=Math.atan2(I,d*w);p=Math.sin(p*D)/I,a=Math.sin(a*D)/I}const E=a*w;if(l=l*p+h*E,c=c*p+m*E,u=u*p+g*E,f=f*p+_*E,p===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,i=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new ae,Zu=new Qs;class eo{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),co.subVectors(this.max,Es),Rr.subVectors(e.a,Es),Pr.subVectors(e.b,Es),Dr.subVectors(e.c,Es),bi.subVectors(Pr,Rr),Ti.subVectors(Dr,Pr),Ki.subVectors(Rr,Dr);let t=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-Ki.z,Ki.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,Ki.z,0,-Ki.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-Ki.y,Ki.x,0];return!Fa(t,Rr,Pr,Dr,co)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,Rr,Pr,Dr,co))?!1:(uo.crossVectors(bi,Ti),t=[uo.x,uo.y,uo.z],Fa(t,Rr,Pr,Dr,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],bn=new ae,lo=new eo,Rr=new ae,Pr=new ae,Dr=new ae,bi=new ae,Ti=new ae,Ki=new ae,Es=new ae,co=new ae,uo=new ae,ji=new ae;function Fa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ji.fromArray(n,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yv=new eo,bs=new ae,Oa=new ae;class Bc{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Oa)),this.expandByPoint(bs.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new ae,Ba=new ae,fo=new ae,wi=new ae,za=new ae,ho=new ae,ka=new ae;class Ev{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ba.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Ba);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=wi.dot(this.direction),l=-wi.dot(fo),c=wi.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ba).addScaledVector(fo,h),m}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,r,s){za.subVectors(t,e),ho.subVectors(i,e),ka.crossVectors(za,ho);let o=this.direction.dot(ka),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(ho.crossVectors(wi,ho));if(l<0)return null;const c=a*this.direction.dot(za.cross(wi));if(c<0||l+c>o)return null;const u=-a*wi.dot(ka);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,m,g,_,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bv,e,Tv)}lookAt(e,t,i){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ai.crossVectors(i,ln),Ai.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ai.crossVectors(i,ln)),Ai.normalize(),po.crossVectors(ln,Ai),r[0]=Ai.x,r[4]=po.x,r[8]=ln.x,r[1]=Ai.y,r[5]=po.y,r[9]=ln.y,r[2]=Ai.z,r[6]=po.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],w=i[3],b=i[7],E=i[11],I=i[15],D=r[0],C=r[4],N=r[8],S=r[12],M=r[1],U=r[5],B=r[9],k=r[13],j=r[2],te=r[6],$=r[10],q=r[14],V=r[3],le=r[7],ne=r[11],ge=r[15];return s[0]=o*D+a*M+l*j+c*V,s[4]=o*C+a*U+l*te+c*le,s[8]=o*N+a*B+l*$+c*ne,s[12]=o*S+a*k+l*q+c*ge,s[1]=u*D+f*M+h*j+m*V,s[5]=u*C+f*U+h*te+m*le,s[9]=u*N+f*B+h*$+m*ne,s[13]=u*S+f*k+h*q+m*ge,s[2]=g*D+_*M+p*j+d*V,s[6]=g*C+_*U+p*te+d*le,s[10]=g*N+_*B+p*$+d*ne,s[14]=g*S+_*k+p*q+d*ge,s[3]=w*D+b*M+E*j+I*V,s[7]=w*C+b*U+E*te+I*le,s[11]=w*N+b*B+E*$+I*ne,s[15]=w*S+b*k+E*q+I*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+_*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],w=f*p*c-_*h*c+_*l*m-a*p*m-f*l*d+a*h*d,b=g*h*c-u*p*c-g*l*m+o*p*m+u*l*d-o*h*d,E=u*_*c-g*f*c+g*a*m-o*_*m-u*a*d+o*f*d,I=g*f*l-u*_*l-g*a*h+o*_*h+u*a*p-o*f*p,D=t*w+i*b+r*E+s*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=w*C,e[1]=(_*h*s-f*p*s-_*r*m+i*p*m+f*r*d-i*h*d)*C,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*C,e[4]=b*C,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*d+t*h*d)*C,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*d-t*l*d)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*C,e[8]=E*C,e[9]=(g*f*s-u*_*s-g*i*m+t*_*m+u*i*d-t*f*d)*C,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*d+t*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*C,e[12]=I*C,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*p+t*f*p)*C,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,_=o*u,p=o*f,d=a*f,w=l*c,b=l*u,E=l*f,I=i.x,D=i.y,C=i.z;return r[0]=(1-(_+d))*I,r[1]=(m+E)*I,r[2]=(g-b)*I,r[3]=0,r[4]=(m-E)*D,r[5]=(1-(h+d))*D,r[6]=(p+w)*D,r[7]=0,r[8]=(g+b)*C,r[9]=(p-w)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Lr.set(r[0],r[1],r[2]).length();const o=Lr.set(r[4],r[5],r[6]).length(),a=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const c=1/s,u=1/o,f=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ui){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,g;if(a===ui)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ko)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ui){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,m=(i+r)*u;let g,_;if(a===ui)g=(o+s)*f,_=-2*f;else if(a===Ko)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Lr=new ae,Tn=new Rt,bv=new ae(0,0,0),Tv=new ae(1,1,1),Ai=new ae,po=new ae,ln=new ae,Ju=new Rt,Qu=new Qs;class _i{constructor(e=0,t=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wv=0;const ef=new ae,Ir=new Qs,ei=new Rt,mo=new ae,Ts=new ae,Av=new ae,Cv=new Qs,tf=new ae(1,0,0),nf=new ae(0,1,0),rf=new ae(0,0,1),sf={type:"added"},Rv={type:"removed"},Ur={type:"childadded",child:null},Ha={type:"childremoved",child:null};class hn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new ae,t=new _i,i=new Qs,r=new ae(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new et}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(rf,e)}translateOnAxis(e,t){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mo.copy(e):mo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Ts,mo,this.up):ei.lookAt(mo,Ts,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(ei),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rv),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,Av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new ae(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new ae,ti=new ae,Va=new ae,ni=new ae,Nr=new ae,Fr=new ae,of=new ae,Ga=new ae,Wa=new ae,Xa=new ae,Ya=new wt,$a=new wt,qa=new wt;class Cn{constructor(e=new ae,t=new ae,i=new ae){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wn.subVectors(e,t),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){wn.subVectors(r,t),ti.subVectors(i,t),Va.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(ti),l=wn.dot(Va),c=ti.dot(ti),u=ti.dot(Va),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ya.setScalar(0),$a.setScalar(0),qa.setScalar(0),Ya.fromBufferAttribute(e,t),$a.fromBufferAttribute(e,i),qa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ya,s.x),o.addScaledVector($a,s.y),o.addScaledVector(qa,s.z),o}static isFrontFacing(e,t,i,r){return wn.subVectors(i,t),ti.subVectors(e,t),wn.cross(ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),wn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Nr.subVectors(r,i),Fr.subVectors(s,i),Ga.subVectors(e,i);const l=Nr.dot(Ga),c=Fr.dot(Ga);if(l<=0&&c<=0)return t.copy(i);Wa.subVectors(e,r);const u=Nr.dot(Wa),f=Fr.dot(Wa);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Nr,o);Xa.subVectors(e,s);const m=Nr.dot(Xa),g=Fr.dot(Xa);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Fr,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return of.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(of,a);const d=1/(p+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Nr,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},go={h:0,s:0,l:0};function Ka(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=dv(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ka(o,s,e+1/3),this.g=Ka(o,s,e),this.b=Ka(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const i=Ah[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return st.fromWorkingColorSpace(zt.copy(this),e),Math.round(sn(zt.r*255,0,255))*65536+Math.round(sn(zt.g*255,0,255))*256+Math.round(sn(zt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=_n){st.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(go);const i=La(Ci.h,go.h,t),r=La(Ci.s,go.s,t),s=La(Ci.l,go.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new dt;dt.NAMES=Ah;let Pv=0;class ma extends ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Js(),this.name="",this.blending=Zr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Al,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Al&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ch extends ma{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new ae,vo=new gt;class $n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gu,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gu&&(e.usage=this.usage),e}}class Rh extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ph extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pr extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dv=0;const vn=new Rt,ja=new hn,Or=new ae,cn=new eo,ws=new eo,Nt=new ae;class Mr extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eh(e)?Ph:Rh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pr(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(cn.min,ws.min),cn.expandByPoint(Nt),Nt.addVectors(cn.max,ws.max),cn.expandByPoint(Nt)):(cn.expandByPoint(ws.min),cn.expandByPoint(ws.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),Nt.add(Or)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new ae,l[N]=new ae;const c=new ae,u=new ae,f=new ae,h=new gt,m=new gt,g=new gt,_=new ae,p=new ae;function d(N,S,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(h),g.sub(h);const U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(U),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(U),a[N].add(_),a[S].add(_),a[M].add(_),l[N].add(p),l[S].add(p),l[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,S=w.length;N<S;++N){const M=w[N],U=M.start,B=M.count;for(let k=U,j=U+B;k<j;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new ae,E=new ae,I=new ae,D=new ae;function C(N){I.fromBufferAttribute(r,N),D.copy(I);const S=a[N];b.copy(S),b.sub(I.multiplyScalar(I.dot(S))).normalize(),E.crossVectors(D,S);const U=E.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,U)}for(let N=0,S=w.length;N<S;++N){const M=w[N],U=M.start,B=M.count;for(let k=U,j=U+B;k<j;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new ae,s=new ae,o=new ae,a=new ae,l=new ae,c=new ae,u=new ae,f=new ae;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new $n(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new Rt,Zi=new Ev,_o=new Bc,lf=new ae,xo=new ae,Mo=new ae,So=new ae,Za=new ae,yo=new ae,cf=new ae,Eo=new ae;class Mn extends hn{constructor(e=new Mr,t=new Ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Za.fromBufferAttribute(f,e),o?yo.addScaledVector(Za,u):yo.addScaledVector(Za.sub(t),u))}t.add(yo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(_o.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(_o,lf)===null||Zi.origin.distanceToSquared(lf)>(e.far-e.near)**2))&&(af.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(af),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=o[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=w,I=b;E<I;E+=3){const D=a.getX(E),C=a.getX(E+1),N=a.getX(E+2);r=bo(this,d,e,i,c,u,f,D,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const w=a.getX(p),b=a.getX(p+1),E=a.getX(p+2);r=bo(this,o,e,i,c,u,f,w,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=o[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=w,I=b;E<I;E+=3){const D=E,C=E+1,N=E+2;r=bo(this,d,e,i,c,u,f,D,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const w=p,b=p+1,E=p+2;r=bo(this,o,e,i,c,u,f,w,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Lv(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zi,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:n}}function bo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,xo),n.getVertexPosition(l,Mo),n.getVertexPosition(c,So);const u=Lv(n,e,t,i,xo,Mo,So,cf);if(u){const f=new ae;Cn.getBarycoord(cf,xo,Mo,So,f),r&&(u.uv=Cn.getInterpolatedAttribute(r,a,l,c,f,new gt)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,a,l,c,f,new gt)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,f,new ae),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new ae,materialIndex:0};Cn.getNormal(xo,Mo,So,h.normal),u.face=h,u.barycoord=f}return u}class to extends Mr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pr(c,3)),this.setAttribute("normal",new pr(u,3)),this.setAttribute("uv",new pr(f,2));function g(_,p,d,w,b,E,I,D,C,N,S){const M=E/C,U=I/N,B=E/2,k=I/2,j=D/2,te=C+1,$=N+1;let q=0,V=0;const le=new ae;for(let ne=0;ne<$;ne++){const ge=ne*U-k;for(let Te=0;Te<te;Te++){const Ge=Te*M-B;le[_]=Ge*w,le[p]=ge*b,le[d]=j,c.push(le.x,le.y,le.z),le[_]=0,le[p]=0,le[d]=D>0?1:-1,u.push(le.x,le.y,le.z),f.push(Te/C),f.push(1-ne/N),q+=1}}for(let ne=0;ne<N;ne++)for(let ge=0;ge<C;ge++){const Te=h+ge+te*ne,Ge=h+ge+te*(ne+1),oe=h+(ge+1)+te*(ne+1),he=h+(ge+1)+te*ne;l.push(Te,Ge,he),l.push(Ge,oe,he),V+=6}a.addGroup(m,V,S),m+=V,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=as(n[t]);for(const r in i)e[r]=i[r]}return e}function Iv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Uv={clone:as,merge:$t};var Nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends ma{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nv,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lh extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new ae,uf=new gt,ff=new gt;class An extends Lh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,uf,ff),t.subVectors(ff,uf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Da*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Br=-90,zr=1;class Ov extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Br,zr,e,t);r.layers=this.layers,this.add(r);const s=new An(Br,zr,e,t);s.layers=this.layers,this.add(s);const o=new An(Br,zr,e,t);o.layers=this.layers,this.add(o);const a=new An(Br,zr,e,t);a.layers=this.layers,this.add(a);const l=new An(Br,zr,e,t);l.layers=this.layers,this.add(l);const c=new An(Br,zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ih extends Qt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:is,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bv extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ih(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new to(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Fi});s.uniforms.tEquirect.value=t;const o=new Mn(r,s),a=t.minFilter;return t.minFilter===ur&&(t.minFilter=Tt),new Ov(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ja=new ae,zv=new ae,kv=new et;class nr{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ja.subVectors(i,t).cross(zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ja),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kv.getNormalMatrix(e),r=this.coplanarPoint(Ja).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Bc,To=new ae;class Uh{constructor(e=new nr,t=new nr,i=new nr,r=new nr,s=new nr,o=new nr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],g=r[9],_=r[10],p=r[11],d=r[12],w=r[13],b=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,p-m,E-d).normalize(),i[1].setComponents(l+s,h+c,p+m,E+d).normalize(),i[2].setComponents(l+o,h+u,p+g,E+w).normalize(),i[3].setComponents(l-o,h-u,p-g,E-w).normalize(),i[4].setComponents(l-a,h-f,p-_,E-b).normalize(),t===ui)i[5].setComponents(l+a,h+f,p+_,E+b).normalize();else if(t===Ko)i[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(To.x=r.normal.x>0?e.max.x:e.min.x,To.y=r.normal.y>0?e.max.y:e.min.y,To.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Sr extends Mr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const w=d*h-o;for(let b=0;b<c;b++){const E=b*f-s;g.push(E,-w,0),_.push(0,0,1),p.push(b/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const b=w+c*d,E=w+c*(d+1),I=w+1+c*(d+1),D=w+1+c*d;m.push(b,E,D),m.push(E,I,D)}this.setIndex(m),this.setAttribute("position",new pr(g,3)),this.setAttribute("normal",new pr(_,3)),this.setAttribute("uv",new pr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gv=`#ifdef USE_ALPHAHASH
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
#endif`,Wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qv=`#ifdef USE_AOMAP
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
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
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
#endif`,Zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t_=`#ifdef USE_IRIDESCENCE
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
#endif`,n_=`#ifdef USE_BUMPMAP
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,f_=`#define PI 3.141592653589793
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
} // validated`,d_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h_=`vec3 transformedNormal = objectNormal;
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
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
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
}`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I_=`uniform bool receiveShadow;
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
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
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
#endif`,k_=`struct PhysicalMaterial {
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
}`,H_=`
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,q0=`#if DEPTH_PACKING == 3200
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
}`,K0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#define LAMBERT
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
}`,rx=`#define LAMBERT
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
}`,sx=`#define MATCAP
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
}`,ox=`#define MATCAP
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
}`,ax=`#define NORMAL
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
}`,lx=`#define NORMAL
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
}`,cx=`#define PHONG
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
}`,ux=`#define PHONG
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
}`,fx=`#define STANDARD
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
}`,dx=`#define STANDARD
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
}`,hx=`#define TOON
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
}`,px=`#define TOON
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
}`,mx=`uniform float size;
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
}`,gx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,_x=`uniform vec3 color;
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
}`,xx=`uniform float rotation;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Vv,alphahash_pars_fragment:Gv,alphamap_fragment:Wv,alphamap_pars_fragment:Xv,alphatest_fragment:Yv,alphatest_pars_fragment:$v,aomap_fragment:qv,aomap_pars_fragment:Kv,batching_pars_vertex:jv,batching_vertex:Zv,begin_vertex:Jv,beginnormal_vertex:Qv,bsdfs:e_,iridescence_fragment:t_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:r_,clipping_planes_pars_vertex:s_,clipping_planes_vertex:o_,color_fragment:a_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:u_,common:f_,cube_uv_reflection_fragment:d_,defaultnormal_vertex:h_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:v_,colorspace_fragment:__,colorspace_pars_fragment:x_,envmap_fragment:M_,envmap_common_pars_fragment:S_,envmap_pars_fragment:y_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:U_,envmap_vertex:b_,fog_vertex:T_,fog_pars_vertex:w_,fog_fragment:A_,fog_pars_fragment:C_,gradientmap_pars_fragment:R_,lightmap_pars_fragment:P_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:L_,lights_pars_begin:I_,lights_toon_fragment:N_,lights_toon_pars_fragment:F_,lights_phong_fragment:O_,lights_phong_pars_fragment:B_,lights_physical_fragment:z_,lights_physical_pars_fragment:k_,lights_fragment_begin:H_,lights_fragment_maps:V_,lights_fragment_end:G_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:$_,map_fragment:q_,map_pars_fragment:K_,map_particle_fragment:j_,map_particle_pars_fragment:Z_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:e0,morphcolor_vertex:t0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:r0,normal_fragment_begin:s0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:v0,project_vertex:_0,dithering_fragment:x0,dithering_pars_fragment:M0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:y0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:b0,shadowmap_vertex:T0,shadowmask_pars_fragment:w0,skinbase_vertex:A0,skinning_pars_vertex:C0,skinning_vertex:R0,skinnormal_vertex:P0,specularmap_fragment:D0,specularmap_pars_fragment:L0,tonemapping_fragment:I0,tonemapping_pars_fragment:U0,transmission_fragment:N0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:k0,background_vert:H0,background_frag:V0,backgroundCube_vert:G0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:Y0,depth_vert:$0,depth_frag:q0,distanceRGBA_vert:K0,distanceRGBA_frag:j0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:ex,meshbasic_vert:tx,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:rx,meshmatcap_vert:sx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:ux,meshphysical_vert:fx,meshphysical_frag:dx,meshtoon_vert:hx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:vx,shadow_frag:_x,sprite_vert:xx,sprite_frag:Mx},Re={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Gn={basic:{uniforms:$t([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:$t([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:$t([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:$t([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:$t([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:$t([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:$t([Re.points,Re.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:$t([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:$t([Re.common,Re.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:$t([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:$t([Re.sprite,Re.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:$t([Re.common,Re.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:$t([Re.lights,Re.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Gn.physical={uniforms:$t([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const wo={r:0,b:0,g:0},Qi=new _i,Sx=new Rt;function yx(n,e,t,i,r,s,o){const a=new dt(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function _(w){let b=!1;const E=g(w);E===null?d(a,l):E&&E.isColor&&(d(E,1),b=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,b){const E=g(b);E&&(E.isCubeTexture||E.mapping===ha)?(u===void 0&&(u=new Mn(new to(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:as(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qi.copy(b.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(Qi)),u.material.toneMapped=st.getTransfer(E.colorSpace)!==mt,(f!==E||h!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,m=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Mn(new Sr(2,2),new Fn({name:"BackgroundMaterial",uniforms:as(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=st.getTransfer(E.colorSpace)!==mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,m=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,b){w.getRGB(wo,Dh(n)),i.buffers.color.setClear(wo.r,wo.g,wo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:_,addToRenderList:p}}function Ex(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,U,B,k,j){let te=!1;const $=f(k,B,U);s!==$&&(s=$,c(s.object)),te=m(M,k,B,j),te&&g(M,k,B,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,E(M,U,B,k),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,U,B){const k=B.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let te=j[U.id];te===void 0&&(te={},j[U.id]=te);let $=te[k];return $===void 0&&($=h(l()),te[k]=$),$}function h(M){const U=[],B=[],k=[];for(let j=0;j<t;j++)U[j]=0,B[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:k,object:M,attributes:{},index:null}}function m(M,U,B,k){const j=s.attributes,te=U.attributes;let $=0;const q=B.getAttributes();for(const V in q)if(q[V].location>=0){const ne=j[V];let ge=te[V];if(ge===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ne===void 0||ne.attribute!==ge||ge&&ne.data!==ge.data)return!0;$++}return s.attributesNum!==$||s.index!==k}function g(M,U,B,k){const j={},te=U.attributes;let $=0;const q=B.getAttributes();for(const V in q)if(q[V].location>=0){let ne=te[V];ne===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));const ge={};ge.attribute=ne,ne&&ne.data&&(ge.data=ne.data),j[V]=ge,$++}s.attributes=j,s.attributesNum=$,s.index=k}function _(){const M=s.newAttributes;for(let U=0,B=M.length;U<B;U++)M[U]=0}function p(M){d(M,0)}function d(M,U){const B=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;B[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),j[M]!==U&&(n.vertexAttribDivisor(M,U),j[M]=U)}function w(){const M=s.newAttributes,U=s.enabledAttributes;for(let B=0,k=U.length;B<k;B++)U[B]!==M[B]&&(n.disableVertexAttribArray(B),U[B]=0)}function b(M,U,B,k,j,te,$){$===!0?n.vertexAttribIPointer(M,U,B,j,te):n.vertexAttribPointer(M,U,B,k,j,te)}function E(M,U,B,k){_();const j=k.attributes,te=B.getAttributes(),$=U.defaultAttributeValues;for(const q in te){const V=te[q];if(V.location>=0){let le=j[q];if(le===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const ne=le.normalized,ge=le.itemSize,Te=e.get(le);if(Te===void 0)continue;const Ge=Te.buffer,oe=Te.type,he=Te.bytesPerElement,Ee=oe===n.INT||oe===n.UNSIGNED_INT||le.gpuType===Lc;if(le.isInterleavedBufferAttribute){const _e=le.data,fe=_e.stride,ve=le.offset;if(_e.isInstancedInterleavedBuffer){for(let De=0;De<V.locationSize;De++)d(V.location+De,_e.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let De=0;De<V.locationSize;De++)p(V.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let De=0;De<V.locationSize;De++)b(V.location+De,ge/V.locationSize,oe,ne,fe*he,(ve+ge/V.locationSize*De)*he,Ee)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)d(V.location+_e,le.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<V.locationSize;_e++)p(V.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let _e=0;_e<V.locationSize;_e++)b(V.location+_e,ge/V.locationSize,oe,ne,ge*he,ge/V.locationSize*_e*he,Ee)}}else if($!==void 0){const ne=$[q];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(V.location,ne);break;case 3:n.vertexAttrib3fv(V.location,ne);break;case 4:n.vertexAttrib4fv(V.location,ne);break;default:n.vertexAttrib1fv(V.location,ne)}}}}w()}function I(){N();for(const M in i){const U=i[M];for(const B in U){const k=U[B];for(const j in k)u(k[j].object),delete k[j];delete U[B]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const B in U){const k=U[B];for(const j in k)u(k[j].object),delete k[j];delete U[B]}delete i[M.id]}function C(M){for(const U in i){const B=i[U];if(B[M.id]===void 0)continue;const k=B[M.id];for(const j in k)u(k[j].object),delete k[j];delete B[M.id]}}function N(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function bx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Rn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ci&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:I,maxSamples:D}}function wx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new nr,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const w=s?0:i,b=w*4;let E=d.clippingState||null;l.value=E,E=u(g,h,b,m);for(let I=0;I!==b;++I)E[I]=t[I];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,E=m;b!==_;++b,E+=4)o.copy(f[b]).applyMatrix4(w,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ax(n){let e=new WeakMap;function t(o,a){return a===Nl?o.mapping=is:a===Fl&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nl||a===Fl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ga extends Lh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,df=[.125,.215,.35,.446,.526,.582],ar=20,Qa=new ga,hf=new dt;let el=null,tl=0,nl=0,il=!1;const ir=(1+Math.sqrt(5))/2,kr=1/ir,pf=[new ae(-ir,kr,0),new ae(ir,kr,0),new ae(-kr,0,ir),new ae(kr,0,ir),new ae(0,ir,-kr),new ae(0,ir,kr),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)];class mf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),this._renderer.xr.enabled=il,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Zs,format:Rn,colorSpace:fs,depthBuffer:!1},r=gf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cx(s)),this._blurMaterial=Rx(s,e,t)}return r}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,i,r){const a=new An(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(hf),u.toneMapping=Oi,u.autoClear=!1;const m=new Ch({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Mn(new to,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(hf),_=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const b=this._cubeSize;Ao(r,w*b,d>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ao(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pf[(r-s-1)%pf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ar-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ar;p>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ar}`);const d=[];let w=0;for(let C=0;C<ar;++C){const N=C/_,S=Math.exp(-N*N/2);d.push(S),C===0?w+=S:C<p&&(w+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/w;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const E=this._sizeLods[r],I=3*E*(r>b-Gr?r-b+Gr:0),D=4*(this._cubeSize-E);Ao(t,I,D,3*E,2*E),l.setRenderTarget(t),l.render(f,Qa)}}function Cx(n){const e=[],t=[],i=[];let r=n;const s=n-Gr+1+df.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Gr?l=df[o-n+Gr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,d=1,w=new Float32Array(_*g*m),b=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let D=0;D<m;D++){const C=D%3*2/3-1,N=D>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(S,_*g*D),b.set(h,p*g*D);const M=[D,D,D,D,D,D];E.set(M,d*g*D)}const I=new Mr;I.setAttribute("position",new $n(w,_)),I.setAttribute("uv",new $n(b,p)),I.setAttribute("faceIndex",new $n(E,d)),e.push(I),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gf(n,e,t){const i=new _r(n,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rx(n,e,t){const i=new Float32Array(ar),r=new ae(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function vf(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function _f(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function Px(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nl||l===Fl,u=l===is||l===rs;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new mf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new mf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Dx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Rs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Lx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let b=0,E=w.length;b<E;b+=3){const I=w[b+0],D=w[b+1],C=w[b+2];h.push(I,D,D,C,C,I)}}else if(g!==void 0){const w=g.array;_=g.version;for(let b=0,E=w.length/3-1;b<E;b+=3){const I=b+0,D=b+1,C=b+2;h.push(I,D,D,C,C,I)}}else return;const p=new(Eh(h)?Ph:Rh)(h,1);p.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ix(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function c(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,h*o,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}function f(h,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,_,0,g);let d=0;for(let w=0;w<g;w++)d+=m[w]*_[w];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Ux(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Nx(n,e,t){const i=new WeakMap,r=new wt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let I=a.attributes.position.count*E,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*D*4*f),N=new Th(C,I,D,f);N.type=ci,N.needsUpdate=!0;const S=E*4;for(let U=0;U<f;U++){const B=d[U],k=w[U],j=b[U],te=I*D*4*U;for(let $=0;$<B.count;$++){const q=$*S;g===!0&&(r.fromBufferAttribute(B,$),C[te+q+0]=r.x,C[te+q+1]=r.y,C[te+q+2]=r.z,C[te+q+3]=0),_===!0&&(r.fromBufferAttribute(k,$),C[te+q+4]=r.x,C[te+q+5]=r.y,C[te+q+6]=r.z,C[te+q+7]=0),p===!0&&(r.fromBufferAttribute(j,$),C[te+q+8]=r.x,C[te+q+9]=r.y,C[te+q+10]=r.z,C[te+q+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new gt(I,D)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Fx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Fh extends Qt{constructor(e,t,i,r,s,o,a,l,c,u=Jr){if(u!==Jr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jr&&(i=vr),i===void 0&&u===os&&(i=ss),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Oh=new Qt,xf=new Fh(1,1),Bh=new Th,zh=new Sv,kh=new Ih,Mf=[],Sf=[],yf=new Float32Array(16),Ef=new Float32Array(9),bf=new Float32Array(4);function hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Mf[r];if(s===void 0&&(s=new Float32Array(r),Mf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function va(n,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ox(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function Hx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;bf.set(i),n.uniformMatrix2fv(this.addr,!1,bf),It(t,i)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Ef.set(i),n.uniformMatrix3fv(this.addr,!1,Ef),It(t,i)}}function Gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;yf.set(i),n.uniformMatrix4fv(this.addr,!1,yf),It(t,i)}}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function Yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function qx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function Jx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(xf.compareFunction=yh,s=xf):s=Oh,t.setTexture2D(e||s,r)}function Qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zh,r)}function eM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kh,r)}function tM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bh,r)}function nM(n){switch(n){case 5126:return Ox;case 35664:return Bx;case 35665:return zx;case 35666:return kx;case 35674:return Hx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return Yx;case 35669:case 35673:return $x;case 5125:return qx;case 36294:return Kx;case 36295:return jx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}function iM(n,e){n.uniform1fv(this.addr,e)}function rM(n,e){const t=hs(e,this.size,2);n.uniform2fv(this.addr,t)}function sM(n,e){const t=hs(e,this.size,3);n.uniform3fv(this.addr,t)}function oM(n,e){const t=hs(e,this.size,4);n.uniform4fv(this.addr,t)}function aM(n,e){const t=hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lM(n,e){const t=hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cM(n,e){const t=hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uM(n,e){n.uniform1iv(this.addr,e)}function fM(n,e){n.uniform2iv(this.addr,e)}function dM(n,e){n.uniform3iv(this.addr,e)}function hM(n,e){n.uniform4iv(this.addr,e)}function pM(n,e){n.uniform1uiv(this.addr,e)}function mM(n,e){n.uniform2uiv(this.addr,e)}function gM(n,e){n.uniform3uiv(this.addr,e)}function vM(n,e){n.uniform4uiv(this.addr,e)}function _M(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Oh,s[o])}function xM(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zh,s[o])}function MM(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kh,s[o])}function SM(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bh,s[o])}function yM(n){switch(n){case 5126:return iM;case 35664:return rM;case 35665:return sM;case 35666:return oM;case 35674:return aM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return fM;case 35668:case 35672:return dM;case 35669:case 35673:return hM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return SM}}class EM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nM(t.type)}}class bM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yM(t.type)}}class TM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const rl=/(\w+)(\])?(\[|\.)?/g;function Tf(n,e){n.seq.push(e),n.map[e.id]=e}function wM(n,e,t){const i=n.name,r=i.length;for(rl.lastIndex=0;;){const s=rl.exec(i),o=rl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tf(t,c===void 0?new EM(a,n,e):new bM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new TM(a),Tf(t,f)),t=f}}}class ko{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);wM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function wf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const AM=37297;let CM=0;function RM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Af=new et;function PM(n){st._getMatrix(Af,st.workingColorSpace,n);const e=`mat3( ${Af.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case pa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+RM(n.getShaderSource(e),o)}else return r}function DM(n,e){const t=PM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function LM(n,e){let t;switch(e){case $g:t="Linear";break;case qg:t="Reinhard";break;case Kg:t="Cineon";break;case jg:t="ACESFilmic";break;case Jg:t="AgX";break;case Qg:t="Neutral";break;case Zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Co=new ae;function IM(){st.getLuminanceCoefficients(Co);const n=Co.x.toFixed(4),e=Co.y.toFixed(4),t=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function NM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function FM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ps(n){return n!==""}function Rf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OM=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(n){return n.replace(OM,zM)}const BM=new Map;function zM(n,e){let t=tt[e];if(t===void 0){const i=BM.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dc(t)}const kM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(n){return n.replace(kM,HM)}function HM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function VM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function GM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function XM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uh:e="ENVMAP_BLENDING_MULTIPLY";break;case Xg:e="ENVMAP_BLENDING_MIX";break;case Yg:e="ENVMAP_BLENDING_ADD";break}return e}function YM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $M(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=VM(t),c=GM(t),u=WM(t),f=XM(t),h=YM(t),m=UM(t),g=NM(s),_=r.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),d.length>0&&(d+=`
`)):(p=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),d=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?LM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,DM("linearToOutputTexel",t.outputColorSpace),IM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),o=dc(o),o=Rf(o,t),o=Pf(o,t),a=dc(a),a=Rf(a,t),a=Pf(a,t),o=Df(o),a=Df(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=w+p+o,E=w+d+a,I=wf(r,r.VERTEX_SHADER,b),D=wf(r,r.FRAGMENT_SHADER,E);r.attachShader(_,I),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(U){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(I).trim(),j=r.getShaderInfoLog(D).trim();let te=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,I,D);else{const q=Cf(r,I,"vertex"),V=Cf(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+q+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||j==="")&&($=!1);$&&(U.diagnostics={runnable:te,programLog:B,vertexShader:{log:k,prefix:p},fragmentShader:{log:j,prefix:d}})}r.deleteShader(I),r.deleteShader(D),N=new ko(r,_),S=FM(r,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,AM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=D,this}let qM=0;class KM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jM(e),t.set(e,i)),i}}class jM{constructor(e){this.id=qM++,this.code=e,this.usedTimes=0}}function ZM(n,e,t,i,r,s,o){const a=new wh,l=new KM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,U,B,k){const j=B.fog,te=k.geometry,$=S.isMeshStandardMaterial?B.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),V=q&&q.mapping===ha?q.image.height:null,le=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ne=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ge=ne!==void 0?ne.length:0;let Te=0;te.morphAttributes.position!==void 0&&(Te=1),te.morphAttributes.normal!==void 0&&(Te=2),te.morphAttributes.color!==void 0&&(Te=3);let Ge,oe,he,Ee;if(le){const rt=Gn[le];Ge=rt.vertexShader,oe=rt.fragmentShader}else Ge=S.vertexShader,oe=S.fragmentShader,l.update(S),he=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const _e=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),ve=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,je=!!S.map,R=!!S.matcap,O=!!q,T=!!S.aoMap,de=!!S.lightMap,A=!!S.bumpMap,P=!!S.normalMap,F=!!S.displacementMap,K=!!S.emissiveMap,Z=!!S.metalnessMap,x=!!S.roughnessMap,v=S.anisotropy>0,L=S.clearcoat>0,X=S.dispersion>0,J=S.iridescence>0,Q=S.sheen>0,pe=S.transmission>0,z=v&&!!S.anisotropyMap,ie=L&&!!S.clearcoatMap,Se=L&&!!S.clearcoatNormalMap,ue=L&&!!S.clearcoatRoughnessMap,be=J&&!!S.iridescenceMap,Ne=J&&!!S.iridescenceThicknessMap,Be=Q&&!!S.sheenColorMap,Me=Q&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,$e=!!S.specularColorMap,it=!!S.specularIntensityMap,G=pe&&!!S.transmissionMap,we=pe&&!!S.thicknessMap,ce=!!S.gradientMap,me=!!S.alphaMap,Le=S.alphaTest>0,Pe=!!S.alphaHash,Ze=!!S.extensions;let pt=Oi;S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(pt=n.toneMapping);const bt={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:oe,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:ve,instancingColor:ve&&k.instanceColor!==null,instancingMorph:ve&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:fs,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:R,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:de,bumpMap:A,normalMap:P,displacementMap:h&&F,emissiveMap:K,normalMapObjectSpace:P&&S.normalMapType===rv,normalMapTangentSpace:P&&S.normalMapType===iv,metalnessMap:Z,roughnessMap:x,anisotropy:v,anisotropyMap:z,clearcoat:L,clearcoatMap:ie,clearcoatNormalMap:Se,clearcoatRoughnessMap:ue,dispersion:X,iridescence:J,iridescenceMap:be,iridescenceThicknessMap:Ne,sheen:Q,sheenColorMap:Be,sheenRoughnessMap:Me,specularMap:Xe,specularColorMap:$e,specularIntensityMap:it,transmission:pe,transmissionMap:G,thicknessMap:we,gradientMap:ce,opaque:S.transparent===!1&&S.blending===Zr&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:Le,alphaHash:Pe,combine:S.combine,mapUv:je&&_(S.map.channel),aoMapUv:T&&_(S.aoMap.channel),lightMapUv:de&&_(S.lightMap.channel),bumpMapUv:A&&_(S.bumpMap.channel),normalMapUv:P&&_(S.normalMap.channel),displacementMapUv:F&&_(S.displacementMap.channel),emissiveMapUv:K&&_(S.emissiveMap.channel),metalnessMapUv:Z&&_(S.metalnessMap.channel),roughnessMapUv:x&&_(S.roughnessMap.channel),anisotropyMapUv:z&&_(S.anisotropyMap.channel),clearcoatMapUv:ie&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(S.sheenRoughnessMap.channel),specularMapUv:Xe&&_(S.specularMap.channel),specularColorMapUv:$e&&_(S.specularColorMap.channel),specularIntensityMapUv:it&&_(S.specularIntensityMap.channel),transmissionMapUv:G&&_(S.transmissionMap.channel),thicknessMapUv:we&&_(S.thicknessMap.channel),alphaMapUv:me&&_(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(P||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!te.attributes.uv&&(je||me),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:fe,skinning:k.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:K&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&S.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)M.push(U),M.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(w(M,S),b(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){const M=g[S.type];let U;if(M){const B=Gn[M];U=Uv.clone(B.uniforms)}else U=S.uniforms;return U}function I(S,M){let U;for(let B=0,k=u.length;B<k;B++){const j=u[B];if(j.cacheKey===M){U=j,++U.usedTimes;break}}return U===void 0&&(U=new $M(n,M,S,s),u.push(U)),U}function D(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:I,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:N}}function JM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function QM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function If(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,g,_,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function a(f,h,m,g,_,p){const d=o(f,h,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,g,_,p){const d=o(f,h,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||QM),i.length>1&&i.sort(h||If),r.length>1&&r.sort(h||If)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function eS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Uf,n.set(i,[o])):r>=s.length?(o=new Uf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new dt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function nS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iS=0;function rS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sS(n){const e=new tS,t=nS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ae);const r=new ae,s=new Rt,o=new Rt;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,w=0,b=0,E=0,I=0,D=0,C=0;c.sort(rS);for(let S=0,M=c.length;S<M;S++){const U=c[S],B=U.color,k=U.intensity,j=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=B.r*k,f+=B.g*k,h+=B.b*k;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],k);C++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const q=U.shadow,V=t.get(U);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=U.shadow.matrix,w++}i.directional[m]=$,m++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(B).multiplyScalar(k),$.distance=j,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[_]=$;const q=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,q.updateMatrices(U),U.castShadow&&D++),i.spotLightMatrix[_]=q.matrix,U.castShadow){const V=t.get(U);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=te,E++}_++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(B).multiplyScalar(k),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=$,p++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const q=U.shadow,V=t.get(U);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=U.shadow.matrix,b++}i.point[g]=$,g++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(k),$.groundColor.copy(U.groundColor).multiplyScalar(k),i.hemi[d]=$,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==d||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==E||N.numSpotMaps!==I||N.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+I-D,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=d,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=E,N.numSpotMaps=I,N.numLightProbes=C,i.version=iS++)}function l(c,u){let f=0,h=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const b=c[d];if(b.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(b.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Nf(n){const e=new sS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function oS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Nf(n),e.set(r,[a])):s>=o.length?(a=new Nf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class aS extends ma{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lS extends ma{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uS=`uniform sampler2D shadow_pass;
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
}`;function fS(n,e,t){let i=new Uh;const r=new gt,s=new gt,o=new wt,a=new aS({depthPacking:nv}),l=new lS,c={},u=t.maxTextureSize,f={[zi]:on,[on]:zi,[li]:li},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:cS,fragmentShader:uS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mr;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let d=this.type;this.render=function(D,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Fi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=d!==ii&&this.type===ii,j=d===ii&&this.type!==ii;for(let te=0,$=D.length;te<$;te++){const q=D[te],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const le=V.getFrameExtents();if(r.multiply(le),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,V.mapSize.y=s.y)),V.map===null||k===!0||j===!0){const ge=this.type!==ii?{minFilter:Ln,magFilter:Ln}:{};V.map!==null&&V.map.dispose(),V.map=new _r(r.x,r.y,ge),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ne=V.getViewportCount();for(let ge=0;ge<ne;ge++){const Te=V.getViewport(ge);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),B.viewport(o),V.updateMatrices(q,ge),i=V.getFrustum(),E(C,N,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===ii&&w(V,N),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(S,M,U)};function w(D,C){const N=e.update(_);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new _r(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,N,h,_,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,N,m,_,null)}function b(D,C,N,S){let M=null;const U=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)M=U;else if(M=N.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=M.uuid,k=C.uuid;let j=c[B];j===void 0&&(j={},c[B]=j);let te=j[k];te===void 0&&(te=M.clone(),j[k]=te,C.addEventListener("dispose",I)),M=te}if(M.visible=C.visible,M.wireframe=C.wireframe,S===ii?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=N}return M}function E(D,C,N,S,M){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===ii)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const k=e.update(D),j=D.material;if(Array.isArray(j)){const te=k.groups;for(let $=0,q=te.length;$<q;$++){const V=te[$],le=j[V.materialIndex];if(le&&le.visible){const ne=b(D,le,S,M);D.onBeforeShadow(n,D,C,N,k,ne,V),n.renderBufferDirect(N,null,k,ne,D,V),D.onAfterShadow(n,D,C,N,k,ne,V)}}}else if(j.visible){const te=b(D,j,S,M);D.onBeforeShadow(n,D,C,N,k,te,null),n.renderBufferDirect(N,null,k,te,D,null),D.onAfterShadow(n,D,C,N,k,te,null)}}const B=D.children;for(let k=0,j=B.length;k<j;k++)E(B[k],C,N,S,M)}function I(D){D.target.removeEventListener("dispose",I);for(const N in c){const S=c[N],M=D.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const dS={[Cl]:Rl,[Pl]:Il,[Dl]:Ul,[ns]:Ll,[Rl]:Cl,[Il]:Pl,[Ul]:Dl,[Ll]:ns};function hS(n,e){function t(){let G=!1;const we=new wt;let ce=null;const me=new wt(0,0,0,0);return{setMask:function(Le){ce!==Le&&!G&&(n.colorMask(Le,Le,Le,Le),ce=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,Ze,pt,bt){bt===!0&&(Le*=pt,Pe*=pt,Ze*=pt),we.set(Le,Pe,Ze,pt),me.equals(we)===!1&&(n.clearColor(Le,Pe,Ze,pt),me.copy(we))},reset:function(){G=!1,ce=null,me.set(-1,0,0,0)}}}function i(){let G=!1,we=!1,ce=null,me=null,Le=null;return{setReversed:function(Pe){if(we!==Pe){const Ze=e.get("EXT_clip_control");we?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const pt=Le;Le=null,this.setClear(pt)}we=Pe},getReversed:function(){return we},setTest:function(Pe){Pe?_e(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(Pe){ce!==Pe&&!G&&(n.depthMask(Pe),ce=Pe)},setFunc:function(Pe){if(we&&(Pe=dS[Pe]),me!==Pe){switch(Pe){case Cl:n.depthFunc(n.NEVER);break;case Rl:n.depthFunc(n.ALWAYS);break;case Pl:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case Dl:n.depthFunc(n.EQUAL);break;case Ll:n.depthFunc(n.GEQUAL);break;case Il:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(we&&(Pe=1-Pe),n.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,ce=null,me=null,Le=null,we=!1}}}function r(){let G=!1,we=null,ce=null,me=null,Le=null,Pe=null,Ze=null,pt=null,bt=null;return{setTest:function(rt){G||(rt?_e(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(rt){we!==rt&&!G&&(n.stencilMask(rt),we=rt)},setFunc:function(rt,Ut,pn){(ce!==rt||me!==Ut||Le!==pn)&&(n.stencilFunc(rt,Ut,pn),ce=rt,me=Ut,Le=pn)},setOp:function(rt,Ut,pn){(Pe!==rt||Ze!==Ut||pt!==pn)&&(n.stencilOp(rt,Ut,pn),Pe=rt,Ze=Ut,pt=pn)},setLocked:function(rt){G=rt},setClear:function(rt){bt!==rt&&(n.clearStencil(rt),bt=rt)},reset:function(){G=!1,we=null,ce=null,me=null,Le=null,Pe=null,Ze=null,pt=null,bt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],g=null,_=!1,p=null,d=null,w=null,b=null,E=null,I=null,D=null,C=new dt(0,0,0),N=0,S=!1,M=null,U=null,B=null,k=null,j=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,q=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=q>=2);let le=null,ne={};const ge=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Ge=new wt().fromArray(ge),oe=new wt().fromArray(Te);function he(G,we,ce,me){const Le=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(G,Pe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ce;Ze++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(we+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),o.setFunc(ns),A(!1),P(Bu),_e(n.CULL_FACE),T(Fi);function _e(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function fe(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function ve(G,we){return f[G]!==we?(n.bindFramebuffer(G,we),f[G]=we,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=we),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=we),!0):!1}function De(G,we){let ce=m,me=!1;if(G){ce=h.get(we),ce===void 0&&(ce=[],h.set(we,ce));const Le=G.textures;if(ce.length!==Le.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,Ze=Le.length;Pe<Ze;Pe++)ce[Pe]=n.COLOR_ATTACHMENT0+Pe;ce.length=Le.length,me=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,me=!0);me&&n.drawBuffers(ce)}function je(G){return g!==G?(n.useProgram(G),g=G,!0):!1}const R={[or]:n.FUNC_ADD,[Cg]:n.FUNC_SUBTRACT,[Rg]:n.FUNC_REVERSE_SUBTRACT};R[Pg]=n.MIN,R[Dg]=n.MAX;const O={[Lg]:n.ZERO,[Ig]:n.ONE,[Ug]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[kg]:n.SRC_ALPHA_SATURATE,[Bg]:n.DST_COLOR,[Fg]:n.DST_ALPHA,[Ng]:n.ONE_MINUS_SRC_COLOR,[Al]:n.ONE_MINUS_SRC_ALPHA,[zg]:n.ONE_MINUS_DST_COLOR,[Og]:n.ONE_MINUS_DST_ALPHA,[Hg]:n.CONSTANT_COLOR,[Vg]:n.ONE_MINUS_CONSTANT_COLOR,[Gg]:n.CONSTANT_ALPHA,[Wg]:n.ONE_MINUS_CONSTANT_ALPHA};function T(G,we,ce,me,Le,Pe,Ze,pt,bt,rt){if(G===Fi){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(_e(n.BLEND),_=!0),G!==Ag){if(G!==p||rt!==S){if((d!==or||E!==or)&&(n.blendEquation(n.FUNC_ADD),d=or,E=or),rt)switch(G){case Zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.ONE,n.ONE);break;case ku:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ku:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}w=null,b=null,I=null,D=null,C.set(0,0,0),N=0,p=G,S=rt}return}Le=Le||we,Pe=Pe||ce,Ze=Ze||me,(we!==d||Le!==E)&&(n.blendEquationSeparate(R[we],R[Le]),d=we,E=Le),(ce!==w||me!==b||Pe!==I||Ze!==D)&&(n.blendFuncSeparate(O[ce],O[me],O[Pe],O[Ze]),w=ce,b=me,I=Pe,D=Ze),(pt.equals(C)===!1||bt!==N)&&(n.blendColor(pt.r,pt.g,pt.b,bt),C.copy(pt),N=bt),p=G,S=!1}function de(G,we){G.side===li?fe(n.CULL_FACE):_e(n.CULL_FACE);let ce=G.side===on;we&&(ce=!ce),A(ce),G.blending===Zr&&G.transparent===!1?T(Fi):T(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const me=G.stencilWrite;a.setTest(me),me&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),K(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function A(G){M!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),M=G)}function P(G){G!==bg?(_e(n.CULL_FACE),G!==U&&(G===Bu?n.cullFace(n.BACK):G===Tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),U=G}function F(G){G!==B&&($&&n.lineWidth(G),B=G)}function K(G,we,ce){G?(_e(n.POLYGON_OFFSET_FILL),(k!==we||j!==ce)&&(n.polygonOffset(we,ce),k=we,j=ce)):fe(n.POLYGON_OFFSET_FILL)}function Z(G){G?_e(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function x(G){G===void 0&&(G=n.TEXTURE0+te-1),le!==G&&(n.activeTexture(G),le=G)}function v(G,we,ce){ce===void 0&&(le===null?ce=n.TEXTURE0+te-1:ce=le);let me=ne[ce];me===void 0&&(me={type:void 0,texture:void 0},ne[ce]=me),(me.type!==G||me.texture!==we)&&(le!==ce&&(n.activeTexture(ce),le=ce),n.bindTexture(G,we||Ee[G]),me.type=G,me.texture=we)}function L(){const G=ne[le];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(G){Ge.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ge.copy(G))}function Me(G){oe.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),oe.copy(G))}function Xe(G,we){let ce=c.get(we);ce===void 0&&(ce=new WeakMap,c.set(we,ce));let me=ce.get(G);me===void 0&&(me=n.getUniformBlockIndex(we,G.name),ce.set(G,me))}function $e(G,we){const me=c.get(we).get(G);l.get(we)!==me&&(n.uniformBlockBinding(we,me,G.__bindingPointIndex),l.set(we,me))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,ne={},f={},h=new WeakMap,m=[],g=null,_=!1,p=null,d=null,w=null,b=null,E=null,I=null,D=null,C=new dt(0,0,0),N=0,S=!1,M=null,U=null,B=null,k=null,j=null,Ge.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_e,disable:fe,bindFramebuffer:ve,drawBuffers:De,useProgram:je,setBlending:T,setMaterial:de,setFlipSided:A,setCullFace:P,setLineWidth:F,setPolygonOffset:K,setScissorTest:Z,activeTexture:x,bindTexture:v,unbindTexture:L,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:be,texImage3D:Ne,updateUBOMapping:Xe,uniformBlockBinding:$e,texStorage2D:Se,texStorage3D:ue,texSubImage2D:Q,texSubImage3D:pe,compressedTexSubImage2D:z,compressedTexSubImage3D:ie,scissor:Be,viewport:Me,reset:it}}function Ff(n,e,t,i){const r=pS(i);switch(t){case mh:return n*e;case vh:return n*e;case _h:return n*e*2;case xh:return n*e/r.components*r.byteLength;case Nc:return n*e/r.components*r.byteLength;case Mh:return n*e*2/r.components*r.byteLength;case Fc:return n*e*2/r.components*r.byteLength;case gh:return n*e*3/r.components*r.byteLength;case Rn:return n*e*4/r.components*r.byteLength;case Oc:return n*e*4/r.components*r.byteLength;case No:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:case Vl:return Math.max(n,16)*Math.max(e,8)/4;case zl:case Hl:return Math.max(n,8)*Math.max(e,8)/2;case Gl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zo:case oc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sh:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pS(n){switch(n){case vi:case dh:return{byteLength:1,components:1};case $s:case hh:case Zs:return{byteLength:2,components:1};case Ic:case Uc:return{byteLength:2,components:4};case vr:case Lc:case ci:return{byteLength:4,components:1};case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function mS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return m?new OffscreenCanvas(x,v):jo("canvas")}function _(x,v,L){let X=1;const J=Z(x);if((J.width>L||J.height>L)&&(X=L/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const Q=Math.floor(X*J.width),pe=Math.floor(X*J.height);f===void 0&&(f=g(Q,pe));const z=v?g(Q,pe):f;return z.width=Q,z.height=pe,z.getContext("2d").drawImage(x,0,0,Q,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+pe+")."),z}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),x;return x}function p(x){return x.generateMipmaps}function d(x){n.generateMipmap(x)}function w(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(x,v,L,X,J=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Q=v;if(v===n.RED&&(L===n.FLOAT&&(Q=n.R32F),L===n.HALF_FLOAT&&(Q=n.R16F),L===n.UNSIGNED_BYTE&&(Q=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Q=n.R8UI),L===n.UNSIGNED_SHORT&&(Q=n.R16UI),L===n.UNSIGNED_INT&&(Q=n.R32UI),L===n.BYTE&&(Q=n.R8I),L===n.SHORT&&(Q=n.R16I),L===n.INT&&(Q=n.R32I)),v===n.RG&&(L===n.FLOAT&&(Q=n.RG32F),L===n.HALF_FLOAT&&(Q=n.RG16F),L===n.UNSIGNED_BYTE&&(Q=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(Q=n.RG8UI),L===n.UNSIGNED_SHORT&&(Q=n.RG16UI),L===n.UNSIGNED_INT&&(Q=n.RG32UI),L===n.BYTE&&(Q=n.RG8I),L===n.SHORT&&(Q=n.RG16I),L===n.INT&&(Q=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),L===n.UNSIGNED_INT&&(Q=n.RGB32UI),L===n.BYTE&&(Q=n.RGB8I),L===n.SHORT&&(Q=n.RGB16I),L===n.INT&&(Q=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),L===n.UNSIGNED_INT&&(Q=n.RGBA32UI),L===n.BYTE&&(Q=n.RGBA8I),L===n.SHORT&&(Q=n.RGBA16I),L===n.INT&&(Q=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),v===n.RGBA){const pe=J?pa:st.getTransfer(X);L===n.FLOAT&&(Q=n.RGBA32F),L===n.HALF_FLOAT&&(Q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Q=pe===mt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(x,v){let L;return x?v===null||v===vr||v===ss?L=n.DEPTH24_STENCIL8:v===ci?L=n.DEPTH32F_STENCIL8:v===$s&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vr||v===ss?L=n.DEPTH_COMPONENT24:v===ci?L=n.DEPTH_COMPONENT32F:v===$s&&(L=n.DEPTH_COMPONENT16),L}function I(x,v){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ln&&x.minFilter!==Tt?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function D(x){const v=x.target;v.removeEventListener("dispose",D),N(v),v.isVideoTexture&&u.delete(v)}function C(x){const v=x.target;v.removeEventListener("dispose",C),M(v)}function N(x){const v=i.get(x);if(v.__webglInit===void 0)return;const L=x.source,X=h.get(L);if(X){const J=X[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(x),Object.keys(X).length===0&&h.delete(L)}i.remove(x)}function S(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const L=x.source,X=h.get(L);delete X[v.__cacheKey],o.memory.textures--}function M(x){const v=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let J=0;J<v.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[X][J]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=x.textures;for(let X=0,J=L.length;X<J;X++){const Q=i.get(L[X]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(L[X])}i.remove(x)}let U=0;function B(){U=0}function k(){const x=U;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),U+=1,x}function j(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function te(x,v){const L=i.get(x);if(x.isVideoTexture&&F(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){const X=x.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(L,x,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function $(x,v){const L=i.get(x);if(x.version>0&&L.__version!==x.version){oe(L,x,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function q(x,v){const L=i.get(x);if(x.version>0&&L.__version!==x.version){oe(L,x,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function V(x,v){const L=i.get(x);if(x.version>0&&L.__version!==x.version){he(L,x,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const le={[Ol]:n.REPEAT,[cr]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},ne={[Ln]:n.NEAREST,[ev]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[Tt]:n.LINEAR,[Pa]:n.LINEAR_MIPMAP_NEAREST,[ur]:n.LINEAR_MIPMAP_LINEAR},ge={[sv]:n.NEVER,[fv]:n.ALWAYS,[ov]:n.LESS,[yh]:n.LEQUAL,[av]:n.EQUAL,[uv]:n.GEQUAL,[lv]:n.GREATER,[cv]:n.NOTEQUAL};function Te(x,v){if(v.type===ci&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tt||v.magFilter===Pa||v.magFilter===ao||v.magFilter===ur||v.minFilter===Tt||v.minFilter===Pa||v.minFilter===ao||v.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,le[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,le[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,le[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ne[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ne[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ln||v.minFilter!==ao&&v.minFilter!==ur||v.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ge(x,v){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",D));const X=v.source;let J=h.get(X);J===void 0&&(J={},h.set(X,J));const Q=j(v);if(Q!==x.__cacheKey){J[Q]===void 0&&(J[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[Q].usedTimes++;const pe=J[x.__cacheKey];pe!==void 0&&(J[x.__cacheKey].usedTimes--,pe.usedTimes===0&&S(v)),x.__cacheKey=Q,x.__webglTexture=J[Q].texture}return L}function oe(x,v,L){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const J=Ge(x,v),Q=v.source;t.bindTexture(X,x.__webglTexture,n.TEXTURE0+L);const pe=i.get(Q);if(Q.version!==pe.__version||J===!0){t.activeTexture(n.TEXTURE0+L);const z=st.getPrimaries(st.workingColorSpace),ie=v.colorSpace===Ii?null:st.getPrimaries(v.colorSpace),Se=v.colorSpace===Ii||z===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ue=_(v.image,!1,r.maxTextureSize);ue=K(v,ue);const be=s.convert(v.format,v.colorSpace),Ne=s.convert(v.type);let Be=b(v.internalFormat,be,Ne,v.colorSpace,v.isVideoTexture);Te(X,v);let Me;const Xe=v.mipmaps,$e=v.isVideoTexture!==!0,it=pe.__version===void 0||J===!0,G=Q.dataReady,we=I(v,ue);if(v.isDepthTexture)Be=E(v.format===os,v.type),it&&($e?t.texStorage2D(n.TEXTURE_2D,1,Be,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Be,ue.width,ue.height,0,be,Ne,null));else if(v.isDataTexture)if(Xe.length>0){$e&&it&&t.texStorage2D(n.TEXTURE_2D,we,Be,Xe[0].width,Xe[0].height);for(let ce=0,me=Xe.length;ce<me;ce++)Me=Xe[ce],$e?G&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Me.width,Me.height,be,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,ce,Be,Me.width,Me.height,0,be,Ne,Me.data);v.generateMipmaps=!1}else $e?(it&&t.texStorage2D(n.TEXTURE_2D,we,Be,ue.width,ue.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,be,Ne,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Be,ue.width,ue.height,0,be,Ne,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$e&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Be,Xe[0].width,Xe[0].height,ue.depth);for(let ce=0,me=Xe.length;ce<me;ce++)if(Me=Xe[ce],v.format!==Rn)if(be!==null)if($e){if(G)if(v.layerUpdates.size>0){const Le=Ff(Me.width,Me.height,v.format,v.type);for(const Pe of v.layerUpdates){const Ze=Me.data.subarray(Pe*Le/Me.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Pe,Me.width,Me.height,1,be,Ze)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,ue.depth,be,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Be,Me.width,Me.height,ue.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,ue.depth,be,Ne,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Be,Me.width,Me.height,ue.depth,0,be,Ne,Me.data)}else{$e&&it&&t.texStorage2D(n.TEXTURE_2D,we,Be,Xe[0].width,Xe[0].height);for(let ce=0,me=Xe.length;ce<me;ce++)Me=Xe[ce],v.format!==Rn?be!==null?$e?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Me.width,Me.height,be,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?G&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Me.width,Me.height,be,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,ce,Be,Me.width,Me.height,0,be,Ne,Me.data)}else if(v.isDataArrayTexture)if($e){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Be,ue.width,ue.height,ue.depth),G)if(v.layerUpdates.size>0){const ce=Ff(ue.width,ue.height,v.format,v.type);for(const me of v.layerUpdates){const Le=ue.data.subarray(me*ce/ue.data.BYTES_PER_ELEMENT,(me+1)*ce/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,ue.width,ue.height,1,be,Ne,Le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,Ne,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,ue.width,ue.height,ue.depth,0,be,Ne,ue.data);else if(v.isData3DTexture)$e?(it&&t.texStorage3D(n.TEXTURE_3D,we,Be,ue.width,ue.height,ue.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,Ne,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Be,ue.width,ue.height,ue.depth,0,be,Ne,ue.data);else if(v.isFramebufferTexture){if(it)if($e)t.texStorage2D(n.TEXTURE_2D,we,Be,ue.width,ue.height);else{let ce=ue.width,me=ue.height;for(let Le=0;Le<we;Le++)t.texImage2D(n.TEXTURE_2D,Le,Be,ce,me,0,be,Ne,null),ce>>=1,me>>=1}}else if(Xe.length>0){if($e&&it){const ce=Z(Xe[0]);t.texStorage2D(n.TEXTURE_2D,we,Be,ce.width,ce.height)}for(let ce=0,me=Xe.length;ce<me;ce++)Me=Xe[ce],$e?G&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,be,Ne,Me):t.texImage2D(n.TEXTURE_2D,ce,Be,be,Ne,Me);v.generateMipmaps=!1}else if($e){if(it){const ce=Z(ue);t.texStorage2D(n.TEXTURE_2D,we,Be,ce.width,ce.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ne,ue)}else t.texImage2D(n.TEXTURE_2D,0,Be,be,Ne,ue);p(v)&&d(X),pe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function he(x,v,L){if(v.image.length!==6)return;const X=Ge(x,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+L);const Q=i.get(J);if(J.version!==Q.__version||X===!0){t.activeTexture(n.TEXTURE0+L);const pe=st.getPrimaries(st.workingColorSpace),z=v.colorSpace===Ii?null:st.getPrimaries(v.colorSpace),ie=v.colorSpace===Ii||pe===z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,be=[];for(let me=0;me<6;me++)!Se&&!ue?be[me]=_(v.image[me],!0,r.maxCubemapSize):be[me]=ue?v.image[me].image:v.image[me],be[me]=K(v,be[me]);const Ne=be[0],Be=s.convert(v.format,v.colorSpace),Me=s.convert(v.type),Xe=b(v.internalFormat,Be,Me,v.colorSpace),$e=v.isVideoTexture!==!0,it=Q.__version===void 0||X===!0,G=J.dataReady;let we=I(v,Ne);Te(n.TEXTURE_CUBE_MAP,v);let ce;if(Se){$e&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Xe,Ne.width,Ne.height);for(let me=0;me<6;me++){ce=be[me].mipmaps;for(let Le=0;Le<ce.length;Le++){const Pe=ce[Le];v.format!==Rn?Be!==null?$e?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,Pe.width,Pe.height,Be,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,Xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,Pe.width,Pe.height,Be,Me,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,Xe,Pe.width,Pe.height,0,Be,Me,Pe.data)}}}else{if(ce=v.mipmaps,$e&&it){ce.length>0&&we++;const me=Z(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Xe,me.width,me.height)}for(let me=0;me<6;me++)if(ue){$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,be[me].width,be[me].height,Be,Me,be[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Xe,be[me].width,be[me].height,0,Be,Me,be[me].data);for(let Le=0;Le<ce.length;Le++){const Ze=ce[Le].image[me].image;$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,Ze.width,Ze.height,Be,Me,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,Xe,Ze.width,Ze.height,0,Be,Me,Ze.data)}}else{$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Be,Me,be[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Xe,Be,Me,be[me]);for(let Le=0;Le<ce.length;Le++){const Pe=ce[Le];$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,Be,Me,Pe.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,Xe,Be,Me,Pe.image[me])}}}p(v)&&d(n.TEXTURE_CUBE_MAP),Q.__version=J.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Ee(x,v,L,X,J,Q){const pe=s.convert(L.format,L.colorSpace),z=s.convert(L.type),ie=b(L.internalFormat,pe,z,L.colorSpace),Se=i.get(v),ue=i.get(L);if(ue.__renderTarget=v,!Se.__hasExternalTextures){const be=Math.max(1,v.width>>Q),Ne=Math.max(1,v.height>>Q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,ie,be,Ne,v.depth,0,pe,z,null):t.texImage2D(J,Q,ie,be,Ne,0,pe,z,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),P(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,ue.__webglTexture,0,A(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,ue.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(x,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){const X=v.depthTexture,J=X&&X.isDepthTexture?X.type:null,Q=E(v.stencilBuffer,J),pe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=A(v);P(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,Q,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,Q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,x)}else{const X=v.textures;for(let J=0;J<X.length;J++){const Q=X[J],pe=s.convert(Q.format,Q.colorSpace),z=s.convert(Q.type),ie=b(Q.internalFormat,pe,z,Q.colorSpace),Se=A(v);L&&P(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ie,v.width,v.height):P(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ie,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ie,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),te(v.depthTexture,0);const J=X.__webglTexture,Q=A(v);if(v.depthTexture.format===Jr)P(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===os)P(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ve(x){const v=i.get(x),L=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const X=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=X}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");fe(v.__webglFramebuffer,x)}else if(L){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),_e(v.__webglDepthbuffer[X],x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),_e(v.__webglDepthbuffer,x,!1);else{const X=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(x,v,L){const X=i.get(x);v!==void 0&&Ee(X.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ve(x)}function je(x){const v=x.texture,L=i.get(x),X=i.get(v);x.addEventListener("dispose",C);const J=x.textures,Q=x.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,o.memory.textures++),Q){L.__webglFramebuffer=[];for(let z=0;z<6;z++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[z]=[];for(let ie=0;ie<v.mipmaps.length;ie++)L.__webglFramebuffer[z][ie]=n.createFramebuffer()}else L.__webglFramebuffer[z]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let z=0;z<v.mipmaps.length;z++)L.__webglFramebuffer[z]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(pe)for(let z=0,ie=J.length;z<ie;z++){const Se=i.get(J[z]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&P(x)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let z=0;z<J.length;z++){const ie=J[z];L.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[z]);const Se=s.convert(ie.format,ie.colorSpace),ue=s.convert(ie.type),be=b(ie.internalFormat,Se,ue,ie.colorSpace,x.isXRRenderTarget===!0),Ne=A(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,be,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,L.__webglColorRenderbuffer[z])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(L.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Te(n.TEXTURE_CUBE_MAP,v);for(let z=0;z<6;z++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Ee(L.__webglFramebuffer[z][ie],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ie);else Ee(L.__webglFramebuffer[z],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);p(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let z=0,ie=J.length;z<ie;z++){const Se=J[z],ue=i.get(Se);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Te(n.TEXTURE_2D,Se),Ee(L.__webglFramebuffer,x,Se,n.COLOR_ATTACHMENT0+z,n.TEXTURE_2D,0),p(Se)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let z=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(z=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(z,X.__webglTexture),Te(z,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Ee(L.__webglFramebuffer[ie],x,v,n.COLOR_ATTACHMENT0,z,ie);else Ee(L.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,z,0);p(v)&&d(z),t.unbindTexture()}x.depthBuffer&&ve(x)}function R(x){const v=x.textures;for(let L=0,X=v.length;L<X;L++){const J=v[L];if(p(J)){const Q=w(x),pe=i.get(J).__webglTexture;t.bindTexture(Q,pe),d(Q),t.unbindTexture()}}}const O=[],T=[];function de(x){if(x.samples>0){if(P(x)===!1){const v=x.textures,L=x.width,X=x.height;let J=n.COLOR_BUFFER_BIT;const Q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(x),z=v.length>1;if(z)for(let ie=0;ie<v.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ie=0;ie<v.length;ie++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ie]);const Se=i.get(v[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,L,X,0,0,L,X,J,n.NEAREST),l===!0&&(O.length=0,T.length=0,O.push(n.COLOR_ATTACHMENT0+ie),x.depthBuffer&&x.resolveDepthBuffer===!1&&(O.push(Q),T.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),z)for(let ie=0;ie<v.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ie]);const Se=i.get(v[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function A(x){return Math.min(r.maxSamples,x.samples)}function P(x){const v=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(x){const v=o.render.frame;u.get(x)!==v&&(u.set(x,v),x.update())}function K(x,v){const L=x.colorSpace,X=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||L!==fs&&L!==Ii&&(st.getTransfer(L)===mt?(X!==Rn||J!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function Z(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=te,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=De,this.setupRenderTarget=je,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=P}function gS(n,e){function t(i,r=Ii){let s;const o=st.getTransfer(r);if(i===vi)return n.UNSIGNED_BYTE;if(i===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dh)return n.BYTE;if(i===hh)return n.SHORT;if(i===$s)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===vr)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Zs)return n.HALF_FLOAT;if(i===mh)return n.ALPHA;if(i===gh)return n.RGB;if(i===Rn)return n.RGBA;if(i===vh)return n.LUMINANCE;if(i===_h)return n.LUMINANCE_ALPHA;if(i===Jr)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===xh)return n.RED;if(i===Nc)return n.RED_INTEGER;if(i===Mh)return n.RG;if(i===Fc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===No||i===Fo||i===Oo||i===Bo)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zl||i===kl||i===Hl||i===Vl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gl||i===Wl)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yl||i===$l||i===ql||i===Kl||i===jl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===oc||i===ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zo)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sh||i===lc||i===cc||i===uc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class vS extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ro extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _S={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_S)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ro;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MS=`
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

}`;class SS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fn({vertexShader:xS,fragmentShader:MS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new Sr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yS extends ds{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const _=new SS,p=t.getContextAttributes();let d=null,w=null;const b=[],E=[],I=new gt;let D=null;const C=new An;C.viewport=new wt;const N=new An;N.viewport=new wt;const S=[C,N],M=new vS;let U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let he=b[oe];return he===void 0&&(he=new sl,b[oe]=he),he.getTargetRaySpace()},this.getControllerGrip=function(oe){let he=b[oe];return he===void 0&&(he=new sl,b[oe]=he),he.getGripSpace()},this.getHand=function(oe){let he=b[oe];return he===void 0&&(he=new sl,b[oe]=he),he.getHandSpace()};function k(oe){const he=E.indexOf(oe.inputSource);if(he===-1)return;const Ee=b[he];Ee!==void 0&&(Ee.update(oe.inputSource,oe.frame,c||o),Ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",te);for(let oe=0;oe<b.length;oe++){const he=E[oe];he!==null&&(E[oe]=null,b[oe].disconnect(he))}U=null,B=null,_.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,w=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new _r(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,Ee=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?os:Jr,Ee=p.stencil?ss:vr);const fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new _r(h.textureWidth,h.textureHeight,{format:Rn,type:vi,depthTexture:new Fh(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(oe){for(let he=0;he<oe.removed.length;he++){const Ee=oe.removed[he],_e=E.indexOf(Ee);_e>=0&&(E[_e]=null,b[_e].disconnect(Ee))}for(let he=0;he<oe.added.length;he++){const Ee=oe.added[he];let _e=E.indexOf(Ee);if(_e===-1){for(let ve=0;ve<b.length;ve++)if(ve>=E.length){E.push(Ee),_e=ve;break}else if(E[ve]===null){E[ve]=Ee,_e=ve;break}if(_e===-1)break}const fe=b[_e];fe&&fe.connect(Ee)}}const $=new ae,q=new ae;function V(oe,he,Ee){$.setFromMatrixPosition(he.matrixWorld),q.setFromMatrixPosition(Ee.matrixWorld);const _e=$.distanceTo(q),fe=he.projectionMatrix.elements,ve=Ee.projectionMatrix.elements,De=fe[14]/(fe[10]-1),je=fe[14]/(fe[10]+1),R=(fe[9]+1)/fe[5],O=(fe[9]-1)/fe[5],T=(fe[8]-1)/fe[0],de=(ve[8]+1)/ve[0],A=De*T,P=De*de,F=_e/(-T+de),K=F*-T;if(he.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(K),oe.translateZ(F),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),fe[10]===-1)oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Z=De+F,x=je+F,v=A-K,L=P+(_e-K),X=R*je/x*Z,J=O*je/x*Z;oe.projectionMatrix.makePerspective(v,L,X,J,Z,x),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function le(oe,he){he===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(he.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let he=oe.near,Ee=oe.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(Ee=_.depthFar)),M.near=N.near=C.near=he,M.far=N.far=C.far=Ee,(U!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,B=M.far),C.layers.mask=oe.layers.mask|2,N.layers.mask=oe.layers.mask|4,M.layers.mask=C.layers.mask|N.layers.mask;const _e=oe.parent,fe=M.cameras;le(M,_e);for(let ve=0;ve<fe.length;ve++)le(fe[ve],_e);fe.length===2?V(M,C,N):M.projectionMatrix.copy(C.projectionMatrix),ne(oe,M,_e)};function ne(oe,he,Ee){Ee===null?oe.matrix.copy(he.matrixWorld):(oe.matrix.copy(Ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(he.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=fc*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(oe){l=oe,h!==null&&(h.fixedFoveation=oe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=oe)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ge=null;function Te(oe,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const Ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let _e=!1;Ee.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let ve=0;ve<Ee.length;ve++){const De=Ee[ve];let je=null;if(m!==null)je=m.getViewport(De);else{const O=f.getViewSubImage(h,De);je=O.viewport,ve===0&&(e.setRenderTargetTextures(w,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(w))}let R=S[ve];R===void 0&&(R=new An,R.layers.enable(ve),R.viewport=new wt,S[ve]=R),R.matrix.fromArray(De.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(De.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(je.x,je.y,je.width,je.height),ve===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(R)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const ve=f.getDepthInformation(Ee[0]);ve&&ve.isValid&&ve.texture&&_.init(e,ve,r.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const _e=E[Ee],fe=b[Ee];_e!==null&&fe!==void 0&&fe.update(_e,he,c||o)}ge&&ge(oe,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ge=new Nh;Ge.setAnimationLoop(Te),this.setAnimationLoop=function(oe){ge=oe},this.dispose=function(){}}}const er=new _i,ES=new Rt;function bS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Dh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,w,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===on&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===on&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),b=w.envMap,E=w.envMapRotation;b&&(p.envMap.value=b,er.copy(E),er.x*=-1,er.y*=-1,er.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),p.envMapRotation.value.setFromMatrix4(ES.makeRotationFromEuler(er)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const E=b.program;i.uniformBlockBinding(w,E)}function c(w,b){let E=r[w.id];E===void 0&&(g(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",p));const I=b.program;i.updateUBOMapping(w,I);const D=e.render.frame;s[w.id]!==D&&(h(w),s[w.id]=D)}function u(w){const b=f();w.__bindingPointIndex=b;const E=n.createBuffer(),I=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const b=r[w.id],E=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,C=E.length;D<C;D++){const N=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,M=N.length;S<M;S++){const U=N[S];if(m(U,D,S,I)===!0){const B=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let te=0;te<k.length;te++){const $=k[te],q=_($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,B+j,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,j),j+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,b,E,I){const D=w.value,C=b+"_"+E;if(I[C]===void 0)return typeof D=="number"||typeof D=="boolean"?I[C]=D:I[C]=D.clone(),!0;{const N=I[C];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return I[C]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function g(w){const b=w.uniforms;let E=0;const I=16;for(let C=0,N=b.length;C<N;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,U=S.length;M<U;M++){const B=S[M],k=Array.isArray(B.value)?B.value:[B.value];for(let j=0,te=k.length;j<te;j++){const $=k[j],q=_($),V=E%I,le=V%q.boundary,ne=V+le;E+=le,ne!==0&&I-ne<q.storage&&(E+=I-ne),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=q.storage}}}const D=E%I;return D>0&&(E+=I-D),w.__size=E,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){const b=w.target;b.removeEventListener("dispose",p);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class kc{constructor(e={}){const{canvas:t=hv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Oi,this.toneMappingExposure=1;const E=this;let I=!1,D=0,C=0,N=null,S=-1,M=null;const U=new wt,B=new wt;let k=null;const j=new dt(0);let te=0,$=t.width,q=t.height,V=1,le=null,ne=null;const ge=new wt(0,0,$,q),Te=new wt(0,0,$,q);let Ge=!1;const oe=new Uh;let he=!1,Ee=!1;const _e=new Rt,fe=new Rt,ve=new ae,De=new wt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function O(){return N===null?V:1}let T=i;function de(y,H){return t.getContext(y,H)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),T===null){const H="webgl2";if(T=de(H,y),T===null)throw de(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let A,P,F,K,Z,x,v,L,X,J,Q,pe,z,ie,Se,ue,be,Ne,Be,Me,Xe,$e,it,G;function we(){A=new Dx(T),A.init(),$e=new gS(T,A),P=new Tx(T,A,e,$e),F=new hS(T,A),P.reverseDepthBuffer&&h&&F.buffers.depth.setReversed(!0),K=new Ux(T),Z=new JM,x=new mS(T,A,F,Z,P,$e,K),v=new Ax(E),L=new Px(E),X=new Hv(T),it=new Ex(T,X),J=new Lx(T,X,K,it),Q=new Fx(T,J,X,K),Be=new Nx(T,P,x),ue=new wx(Z),pe=new ZM(E,v,L,A,P,it,ue),z=new bS(E,Z),ie=new eS,Se=new oS(A),Ne=new yx(E,v,L,F,Q,m,l),be=new fS(E,Q,P),G=new TS(T,K,P,F),Me=new bx(T,A,K),Xe=new Ix(T,A,K),K.programs=pe.programs,E.capabilities=P,E.extensions=A,E.properties=Z,E.renderLists=ie,E.shadowMap=be,E.state=F,E.info=K}we();const ce=new yS(E,T);this.xr=ce,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=A.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=A.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize($,q,!1))},this.getSize=function(y){return y.set($,q)},this.setSize=function(y,H,ee=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,q=H,t.width=Math.floor(y*V),t.height=Math.floor(H*V),ee===!0&&(t.style.width=y+"px",t.style.height=H+"px"),this.setViewport(0,0,y,H)},this.getDrawingBufferSize=function(y){return y.set($*V,q*V).floor()},this.setDrawingBufferSize=function(y,H,ee){$=y,q=H,V=ee,t.width=Math.floor(y*ee),t.height=Math.floor(H*ee),this.setViewport(0,0,y,H)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(ge)},this.setViewport=function(y,H,ee,re){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,H,ee,re),F.viewport(U.copy(ge).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Te)},this.setScissor=function(y,H,ee,re){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,H,ee,re),F.scissor(B.copy(Te).multiplyScalar(V).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(y){F.setScissorTest(Ge=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){ne=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(y=!0,H=!0,ee=!0){let re=0;if(y){let Y=!1;if(N!==null){const ye=N.texture.format;Y=ye===Oc||ye===Fc||ye===Nc}if(Y){const ye=N.texture.type,Ce=ye===vi||ye===vr||ye===$s||ye===ss||ye===Ic||ye===Uc,Oe=Ne.getClearColor(),He=Ne.getClearAlpha(),Ke=Oe.r,Qe=Oe.g,Ve=Oe.b;Ce?(g[0]=Ke,g[1]=Qe,g[2]=Ve,g[3]=He,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Ke,_[1]=Qe,_[2]=Ve,_[3]=He,T.clearBufferiv(T.COLOR,0,_))}else re|=T.COLOR_BUFFER_BIT}H&&(re|=T.DEPTH_BUFFER_BIT),ee&&(re|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ie.dispose(),Se.dispose(),Z.dispose(),v.dispose(),L.dispose(),Q.dispose(),it.dispose(),G.dispose(),pe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ps),ce.removeEventListener("sessionend",Wt),qn.stop()};function me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const y=K.autoReset,H=be.enabled,ee=be.autoUpdate,re=be.needsUpdate,Y=be.type;we(),K.autoReset=y,be.enabled=H,be.autoUpdate=ee,be.needsUpdate=re,be.type=Y}function Pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ze(y){const H=y.target;H.removeEventListener("dispose",Ze),pt(H)}function pt(y){bt(y),Z.remove(y)}function bt(y){const H=Z.get(y).programs;H!==void 0&&(H.forEach(function(ee){pe.releaseProgram(ee)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,H,ee,re,Y,ye){H===null&&(H=je);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=Ae(y,H,ee,re,Y);F.setMaterial(re,Ce);let He=ee.index,Ke=1;if(re.wireframe===!0){if(He=J.getWireframeAttribute(ee),He===void 0)return;Ke=2}const Qe=ee.drawRange,Ve=ee.attributes.position;let ot=Qe.start*Ke,_t=(Qe.start+Qe.count)*Ke;ye!==null&&(ot=Math.max(ot,ye.start*Ke),_t=Math.min(_t,(ye.start+ye.count)*Ke)),He!==null?(ot=Math.max(ot,0),_t=Math.min(_t,He.count)):Ve!=null&&(ot=Math.max(ot,0),_t=Math.min(_t,Ve.count));const Mt=_t-ot;if(Mt<0||Mt===1/0)return;it.setup(Y,re,Oe,ee,He);let en,lt=Me;if(He!==null&&(en=X.get(He),lt=Xe,lt.setIndex(en)),Y.isMesh)re.wireframe===!0?(F.setLineWidth(re.wireframeLinewidth*O()),lt.setMode(T.LINES)):lt.setMode(T.TRIANGLES);else if(Y.isLine){let We=re.linewidth;We===void 0&&(We=1),F.setLineWidth(We*O()),Y.isLineSegments?lt.setMode(T.LINES):Y.isLineLoop?lt.setMode(T.LINE_LOOP):lt.setMode(T.LINE_STRIP)}else Y.isPoints?lt.setMode(T.POINTS):Y.isSprite&&lt.setMode(T.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)lt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(A.get("WEBGL_multi_draw"))lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const We=Y._multiDrawStarts,Kn=Y._multiDrawCounts,ct=Y._multiDrawCount,En=He?X.get(He).bytesPerElement:1,br=Z.get(re).currentProgram.getUniforms();for(let an=0;an<ct;an++)br.setValue(T,"_gl_DrawID",an),lt.render(We[an]/En,Kn[an])}else if(Y.isInstancedMesh)lt.renderInstances(ot,Mt,Y.count);else if(ee.isInstancedBufferGeometry){const We=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Kn=Math.min(ee.instanceCount,We);lt.renderInstances(ot,Mt,Kn)}else lt.render(ot,Mt)};function rt(y,H,ee){y.transparent===!0&&y.side===li&&y.forceSinglePass===!1?(y.side=on,y.needsUpdate=!0,se(y,H,ee),y.side=zi,y.needsUpdate=!0,se(y,H,ee),y.side=li):se(y,H,ee)}this.compile=function(y,H,ee=null){ee===null&&(ee=y),d=Se.get(ee),d.init(H),b.push(d),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),y!==ee&&y.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();const re=new Set;return y.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const Oe=ye[Ce];rt(Oe,ee,Y),re.add(Oe)}else rt(ye,ee,Y),re.add(ye)}),b.pop(),d=null,re},this.compileAsync=function(y,H,ee=null){const re=this.compile(y,H,ee);return new Promise(Y=>{function ye(){if(re.forEach(function(Ce){Z.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){Y(y);return}setTimeout(ye,10)}A.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ut=null;function pn(y){Ut&&Ut(y)}function ps(){qn.stop()}function Wt(){qn.start()}const qn=new Nh;qn.setAnimationLoop(pn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(y){Ut=y,ce.setAnimationLoop(y),y===null?qn.stop():qn.start()},ce.addEventListener("sessionstart",ps),ce.addEventListener("sessionend",Wt),this.render=function(y,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(H),H=ce.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,H,N),d=Se.get(y,b.length),d.init(H),b.push(d),fe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),oe.setFromProjectionMatrix(fe),Ee=this.localClippingEnabled,he=ue.init(this.clippingPlanes,Ee),p=ie.get(y,w.length),p.init(),w.push(p),ce.enabled===!0&&ce.isPresenting===!0){const ye=E.xr.getDepthSensingMesh();ye!==null&&ms(ye,H,-1/0,E.sortObjects)}ms(y,H,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(le,ne),R=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,R&&Ne.addToRenderList(p,y),this.info.render.frame++,he===!0&&ue.beginShadows();const ee=d.state.shadowsArray;be.render(ee,y,H),he===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=p.opaque,Y=p.transmissive;if(d.setupLights(),H.isArrayCamera){const ye=H.cameras;if(Y.length>0)for(let Ce=0,Oe=ye.length;Ce<Oe;Ce++){const He=ye[Ce];io(re,Y,y,He)}R&&Ne.render(y);for(let Ce=0,Oe=ye.length;Ce<Oe;Ce++){const He=ye[Ce];no(p,y,He,He.viewport)}}else Y.length>0&&io(re,Y,y,H),R&&Ne.render(y),no(p,y,H);N!==null&&(x.updateMultisampleRenderTarget(N),x.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(E,y,H),it.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],he===!0&&ue.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function ms(y,H,ee,re){if(y.visible===!1)return;if(y.layers.test(H.layers)){if(y.isGroup)ee=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(H);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||oe.intersectsSprite(y)){re&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);const Ce=Q.update(y),Oe=y.material;Oe.visible&&p.push(y,Ce,Oe,ee,De.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||oe.intersectsObject(y))){const Ce=Q.update(y),Oe=y.material;if(re&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),De.copy(Ce.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4(fe)),Array.isArray(Oe)){const He=Ce.groups;for(let Ke=0,Qe=He.length;Ke<Qe;Ke++){const Ve=He[Ke],ot=Oe[Ve.materialIndex];ot&&ot.visible&&p.push(y,Ce,ot,ee,De.z,Ve)}}else Oe.visible&&p.push(y,Ce,Oe,ee,De.z,null)}}const ye=y.children;for(let Ce=0,Oe=ye.length;Ce<Oe;Ce++)ms(ye[Ce],H,ee,re)}function no(y,H,ee,re){const Y=y.opaque,ye=y.transmissive,Ce=y.transparent;d.setupLightsView(ee),he===!0&&ue.setGlobalState(E.clippingPlanes,ee),re&&F.viewport(U.copy(re)),Y.length>0&&Wi(Y,H,ee),ye.length>0&&Wi(ye,H,ee),Ce.length>0&&Wi(Ce,H,ee),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function io(y,H,ee,re){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[re.id]===void 0&&(d.state.transmissionRenderTarget[re.id]=new _r(1,1,{generateMipmaps:!0,type:A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float")?Zs:vi,minFilter:ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ye=d.state.transmissionRenderTarget[re.id],Ce=re.viewport||U;ye.setSize(Ce.z,Ce.w);const Oe=E.getRenderTarget();E.setRenderTarget(ye),E.getClearColor(j),te=E.getClearAlpha(),te<1&&E.setClearColor(16777215,.5),E.clear(),R&&Ne.render(ee);const He=E.toneMapping;E.toneMapping=Oi;const Ke=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),d.setupLightsView(re),he===!0&&ue.setGlobalState(E.clippingPlanes,re),Wi(y,ee,re),x.updateMultisampleRenderTarget(ye),x.updateRenderTargetMipmap(ye),A.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ve=0,ot=H.length;Ve<ot;Ve++){const _t=H[Ve],Mt=_t.object,en=_t.geometry,lt=_t.material,We=_t.group;if(lt.side===li&&Mt.layers.test(re.layers)){const Kn=lt.side;lt.side=on,lt.needsUpdate=!0,W(Mt,ee,re,en,lt,We),lt.side=Kn,lt.needsUpdate=!0,Qe=!0}}Qe===!0&&(x.updateMultisampleRenderTarget(ye),x.updateRenderTargetMipmap(ye))}E.setRenderTarget(Oe),E.setClearColor(j,te),Ke!==void 0&&(re.viewport=Ke),E.toneMapping=He}function Wi(y,H,ee){const re=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,ye=y.length;Y<ye;Y++){const Ce=y[Y],Oe=Ce.object,He=Ce.geometry,Ke=re===null?Ce.material:re,Qe=Ce.group;Oe.layers.test(ee.layers)&&W(Oe,H,ee,He,Ke,Qe)}}function W(y,H,ee,re,Y,ye){y.onBeforeRender(E,H,ee,re,Y,ye),y.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(E,H,ee,re,y,ye),Y.transparent===!0&&Y.side===li&&Y.forceSinglePass===!1?(Y.side=on,Y.needsUpdate=!0,E.renderBufferDirect(ee,H,re,Y,y,ye),Y.side=zi,Y.needsUpdate=!0,E.renderBufferDirect(ee,H,re,Y,y,ye),Y.side=li):E.renderBufferDirect(ee,H,re,Y,y,ye),y.onAfterRender(E,H,ee,re,Y,ye)}function se(y,H,ee){H.isScene!==!0&&(H=je);const re=Z.get(y),Y=d.state.lights,ye=d.state.shadowsArray,Ce=Y.state.version,Oe=pe.getParameters(y,Y.state,ye,H,ee),He=pe.getProgramCacheKey(Oe);let Ke=re.programs;re.environment=y.isMeshStandardMaterial?H.environment:null,re.fog=H.fog,re.envMap=(y.isMeshStandardMaterial?L:v).get(y.envMap||re.environment),re.envMapRotation=re.environment!==null&&y.envMap===null?H.environmentRotation:y.envMapRotation,Ke===void 0&&(y.addEventListener("dispose",Ze),Ke=new Map,re.programs=Ke);let Qe=Ke.get(He);if(Qe!==void 0){if(re.currentProgram===Qe&&re.lightsStateVersion===Ce)return Ie(y,Oe),Qe}else Oe.uniforms=pe.getUniforms(y),y.onBeforeCompile(Oe,E),Qe=pe.acquireProgram(Oe,He),Ke.set(He,Qe),re.uniforms=Oe.uniforms;const Ve=re.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=ue.uniform),Ie(y,Oe),re.needsLights=ke(y),re.lightsStateVersion=Ce,re.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),re.currentProgram=Qe,re.uniformsList=null,Qe}function xe(y){if(y.uniformsList===null){const H=y.currentProgram.getUniforms();y.uniformsList=ko.seqWithValue(H.seq,y.uniforms)}return y.uniformsList}function Ie(y,H){const ee=Z.get(y);ee.outputColorSpace=H.outputColorSpace,ee.batching=H.batching,ee.batchingColor=H.batchingColor,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.instancingMorph=H.instancingMorph,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function Ae(y,H,ee,re,Y){H.isScene!==!0&&(H=je),x.resetTextureUnits();const ye=H.fog,Ce=re.isMeshStandardMaterial?H.environment:null,Oe=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fs,He=(re.isMeshStandardMaterial?L:v).get(re.envMap||Ce),Ke=re.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Qe=!!ee.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ve=!!ee.morphAttributes.position,ot=!!ee.morphAttributes.normal,_t=!!ee.morphAttributes.color;let Mt=Oi;re.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=E.toneMapping);const en=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,lt=en!==void 0?en.length:0,We=Z.get(re),Kn=d.state.lights;if(he===!0&&(Ee===!0||y!==M)){const mn=y===M&&re.id===S;ue.setState(re,y,mn)}let ct=!1;re.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Kn.state.version||We.outputColorSpace!==Oe||Y.isBatchedMesh&&We.batching===!1||!Y.isBatchedMesh&&We.batching===!0||Y.isBatchedMesh&&We.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&We.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&We.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&We.instancingMorph===!1&&Y.morphTexture!==null||We.envMap!==He||re.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ue.numPlanes||We.numIntersection!==ue.numIntersection)||We.vertexAlphas!==Ke||We.vertexTangents!==Qe||We.morphTargets!==Ve||We.morphNormals!==ot||We.morphColors!==_t||We.toneMapping!==Mt||We.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,We.__version=re.version);let En=We.currentProgram;ct===!0&&(En=se(re,H,Y));let br=!1,an=!1,gs=!1;const St=En.getUniforms(),On=We.uniforms;if(F.useProgram(En.program)&&(br=!0,an=!0,gs=!0),re.id!==S&&(S=re.id,an=!0),br||M!==y){F.buffers.depth.getReversed()?(_e.copy(y.projectionMatrix),mv(_e),gv(_e),St.setValue(T,"projectionMatrix",_e)):St.setValue(T,"projectionMatrix",y.projectionMatrix),St.setValue(T,"viewMatrix",y.matrixWorldInverse);const Si=St.map.cameraPosition;Si!==void 0&&Si.setValue(T,ve.setFromMatrixPosition(y.matrixWorld)),P.logarithmicDepthBuffer&&St.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&St.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,an=!0,gs=!0)}if(Y.isSkinnedMesh){St.setOptional(T,Y,"bindMatrix"),St.setOptional(T,Y,"bindMatrixInverse");const mn=Y.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),St.setValue(T,"boneTexture",mn.boneTexture,x))}Y.isBatchedMesh&&(St.setOptional(T,Y,"batchingTexture"),St.setValue(T,"batchingTexture",Y._matricesTexture,x),St.setOptional(T,Y,"batchingIdTexture"),St.setValue(T,"batchingIdTexture",Y._indirectTexture,x),St.setOptional(T,Y,"batchingColorTexture"),Y._colorsTexture!==null&&St.setValue(T,"batchingColorTexture",Y._colorsTexture,x));const vs=ee.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&Be.update(Y,ee,En),(an||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,St.setValue(T,"receiveShadow",Y.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(On.envMap.value=He,On.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&H.environment!==null&&(On.envMapIntensity.value=H.environmentIntensity),an&&(St.setValue(T,"toneMappingExposure",E.toneMappingExposure),We.needsLights&&Fe(On,gs),ye&&re.fog===!0&&z.refreshFogUniforms(On,ye),z.refreshMaterialUniforms(On,re,V,q,d.state.transmissionRenderTarget[y.id]),ko.upload(T,xe(We),On,x)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(ko.upload(T,xe(We),On,x),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&St.setValue(T,"center",Y.center),St.setValue(T,"modelViewMatrix",Y.modelViewMatrix),St.setValue(T,"normalMatrix",Y.normalMatrix),St.setValue(T,"modelMatrix",Y.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const mn=re.uniformsGroups;for(let Si=0,yi=mn.length;Si<yi;Si++){const Jc=mn[Si];G.update(Jc,En),G.bind(Jc,En)}}return En}function Fe(y,H){y.ambientLightColor.needsUpdate=H,y.lightProbe.needsUpdate=H,y.directionalLights.needsUpdate=H,y.directionalLightShadows.needsUpdate=H,y.pointLights.needsUpdate=H,y.pointLightShadows.needsUpdate=H,y.spotLights.needsUpdate=H,y.spotLightShadows.needsUpdate=H,y.rectAreaLights.needsUpdate=H,y.hemisphereLights.needsUpdate=H}function ke(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,H,ee){Z.get(y.texture).__webglTexture=H,Z.get(y.depthTexture).__webglTexture=ee;const re=Z.get(y);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ee===void 0,re.__autoAllocateDepthBuffer||A.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,H){const ee=Z.get(y);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(y,H=0,ee=0){N=y,D=H,C=ee;let re=!0,Y=null,ye=!1,Ce=!1;if(y){const He=Z.get(y);if(He.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(T.FRAMEBUFFER,null),re=!1;else if(He.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(He.__hasExternalTextures)x.rebindTextures(y,Z.get(y.texture).__webglTexture,Z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ve=y.depthTexture;if(He.__boundDepthTexture!==Ve){if(Ve!==null&&Z.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const Ke=y.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ce=!0);const Qe=Z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Qe[H])?Y=Qe[H][ee]:Y=Qe[H],ye=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?Y=Z.get(y).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[ee]:Y=Qe,U.copy(y.viewport),B.copy(y.scissor),k=y.scissorTest}else U.copy(ge).multiplyScalar(V).floor(),B.copy(Te).multiplyScalar(V).floor(),k=Ge;if(F.bindFramebuffer(T.FRAMEBUFFER,Y)&&re&&F.drawBuffers(y,Y),F.viewport(U),F.scissor(B),F.setScissorTest(k),ye){const He=Z.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,He.__webglTexture,ee)}else if(Ce){const He=Z.get(y.texture),Ke=H||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,He.__webglTexture,ee||0,Ke)}S=-1},this.readRenderTargetPixels=function(y,H,ee,re,Y,ye,Ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){F.bindFramebuffer(T.FRAMEBUFFER,Oe);try{const He=y.texture,Ke=He.format,Qe=He.type;if(!P.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=y.width-re&&ee>=0&&ee<=y.height-Y&&T.readPixels(H,ee,re,Y,$e.convert(Ke),$e.convert(Qe),ye)}finally{const He=N!==null?Z.get(N).__webglFramebuffer:null;F.bindFramebuffer(T.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(y,H,ee,re,Y,ye,Ce){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){const He=y.texture,Ke=He.format,Qe=He.type;if(!P.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=y.width-re&&ee>=0&&ee<=y.height-Y){F.bindFramebuffer(T.FRAMEBUFFER,Oe);const Ve=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ve),T.bufferData(T.PIXEL_PACK_BUFFER,ye.byteLength,T.STREAM_READ),T.readPixels(H,ee,re,Y,$e.convert(Ke),$e.convert(Qe),0);const ot=N!==null?Z.get(N).__webglFramebuffer:null;F.bindFramebuffer(T.FRAMEBUFFER,ot);const _t=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await pv(T,_t,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ve),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ye),T.deleteBuffer(Ve),T.deleteSync(_t),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,H=null,ee=0){y.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1]);const re=Math.pow(2,-ee),Y=Math.floor(y.image.width*re),ye=Math.floor(y.image.height*re),Ce=H!==null?H.x:0,Oe=H!==null?H.y:0;x.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,ee,0,0,Ce,Oe,Y,ye),F.unbindTexture()},this.copyTextureToTexture=function(y,H,ee=null,re=null,Y=0){y.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,y=arguments[1],H=arguments[2],Y=arguments[3]||0,ee=null);let ye,Ce,Oe,He,Ke,Qe,Ve,ot,_t;const Mt=y.isCompressedTexture?y.mipmaps[Y]:y.image;ee!==null?(ye=ee.max.x-ee.min.x,Ce=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,He=ee.min.x,Ke=ee.min.y,Qe=ee.isBox3?ee.min.z:0):(ye=Mt.width,Ce=Mt.height,Oe=Mt.depth||1,He=0,Ke=0,Qe=0),re!==null?(Ve=re.x,ot=re.y,_t=re.z):(Ve=0,ot=0,_t=0);const en=$e.convert(H.format),lt=$e.convert(H.type);let We;H.isData3DTexture?(x.setTexture3D(H,0),We=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(x.setTexture2DArray(H,0),We=T.TEXTURE_2D_ARRAY):(x.setTexture2D(H,0),We=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const Kn=T.getParameter(T.UNPACK_ROW_LENGTH),ct=T.getParameter(T.UNPACK_IMAGE_HEIGHT),En=T.getParameter(T.UNPACK_SKIP_PIXELS),br=T.getParameter(T.UNPACK_SKIP_ROWS),an=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Mt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Mt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,He),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ke),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Qe);const gs=y.isDataArrayTexture||y.isData3DTexture,St=H.isDataArrayTexture||H.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const On=Z.get(y),vs=Z.get(H),mn=Z.get(On.__renderTarget),Si=Z.get(vs.__renderTarget);F.bindFramebuffer(T.READ_FRAMEBUFFER,mn.__webglFramebuffer),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let yi=0;yi<Oe;yi++)gs&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Z.get(y).__webglTexture,Y,Qe+yi),y.isDepthTexture?(St&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,Y,_t+yi),T.blitFramebuffer(He,Ke,ye,Ce,Ve,ot,ye,Ce,T.DEPTH_BUFFER_BIT,T.NEAREST)):St?T.copyTexSubImage3D(We,Y,Ve,ot,_t+yi,He,Ke,ye,Ce):T.copyTexSubImage2D(We,Y,Ve,ot,_t+yi,He,Ke,ye,Ce);F.bindFramebuffer(T.READ_FRAMEBUFFER,null),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else St?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(We,Y,Ve,ot,_t,ye,Ce,Oe,en,lt,Mt.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(We,Y,Ve,ot,_t,ye,Ce,Oe,en,Mt.data):T.texSubImage3D(We,Y,Ve,ot,_t,ye,Ce,Oe,en,lt,Mt):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Y,Ve,ot,ye,Ce,en,lt,Mt.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Y,Ve,ot,Mt.width,Mt.height,en,Mt.data):T.texSubImage2D(T.TEXTURE_2D,Y,Ve,ot,ye,Ce,en,lt,Mt);T.pixelStorei(T.UNPACK_ROW_LENGTH,Kn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ct),T.pixelStorei(T.UNPACK_SKIP_PIXELS,En),T.pixelStorei(T.UNPACK_SKIP_ROWS,br),T.pixelStorei(T.UNPACK_SKIP_IMAGES,an),Y===0&&H.generateMipmaps&&T.generateMipmap(We),F.unbindTexture()},this.copyTextureToTexture3D=function(y,H,ee=null,re=null,Y=0){return y.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,re=arguments[1]||null,y=arguments[2],H=arguments[3],Y=arguments[4]||0),Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,H,ee,re,Y)},this.initRenderTarget=function(y){Z.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),F.unbindTexture()},this.resetState=function(){D=0,C=0,N=null,F.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class Hc extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ls extends Qt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);const Wr={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},Pt=30,ol=12,wS=10,Hh=28;function AS(n,e){if(typeof e=="function")return e(n);const t=n.filter(r=>r!=null&&r!=="");if(e==="count")return t.length;const i=t.map(r=>Number(r)).filter(r=>!Number.isNaN(r));if(i.length===0)return null;switch(e){case"sum":return i.reduce((r,s)=>r+s,0);case"avg":return i.reduce((r,s)=>r+s,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Of(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=Wr[e.theme]??Wr.none,{cols:o,rows:a,pinnedRows:l,rowHeight:c,scrollY:u,scrollX:f,glow:h}=e;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const m=l.length*c,g=e.aggregateRow?Hh:0,_=r-Pt-m-g;t.fillStyle=s.headerBg,t.fillRect(0,0,i,Pt),t.textBaseline="middle",t.textAlign="left";let p=-f;for(let j=0;j<o.length;j++){const te=o[j];if(p+te.width<=0){p+=te.width;continue}if(p>=i)break;const $=!!e.colFilters[te.colId],q=e.sortColId===te.colId,V=(te.colDef.headerName??te.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(p,0,te.width,Pt),t.clip(),t.font=`bold ${wS}px system-ui, -apple-system, sans-serif`,t.fillStyle=$?s.accent:s.textHeader,h?(t.shadowColor=s.textHeader,t.shadowBlur=10,t.fillText(V,p+8,Pt/2),t.shadowBlur=4,t.fillText(V,p+8,Pt/2),t.shadowBlur=0):t.fillText(V,p+8,Pt/2),q){const le=t.measureText(V).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=s.accent,t.fillText(e.sortDir==="asc"?"▲":"▼",p+8+le+4,Pt/2)}te.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=$?s.accent:s.textHeader,t.globalAlpha=$?1:.38,t.fillText("⌕",p+te.width-20,Pt/2),t.globalAlpha=1),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(p+te.width-.5,0),t.lineTo(p+te.width-.5,Pt),t.stroke(),p+=te.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,Pt-.5),t.lineTo(i,Pt-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,Pt,i,_),t.clip();const d=Math.max(0,Math.floor(u/c)),w=Math.min(a.length,Math.ceil((u+_)/c)),b=e.selectionAnchorRow??e.selectedRow,E=e.selectionAnchorCol??e.selectedCol,I=e.selectedRow>=0&&b>=0?Math.min(e.selectedRow,b):-1,D=e.selectedRow>=0&&b>=0?Math.max(e.selectedRow,b):-1,C=e.selectedCol>=0&&E>=0?Math.min(e.selectedCol,E):-1,N=e.selectedCol>=0&&E>=0?Math.max(e.selectedCol,E):-1,S=D>I||N>C;let M=Number.POSITIVE_INFINITY,U=Number.NEGATIVE_INFINITY,B=Number.POSITIVE_INFINITY,k=Number.NEGATIVE_INFINITY;for(let j=d;j<w;j++){const te=a[j],$=Pt+j*c-u;j%2===1&&(t.fillStyle=s.rowAlt,t.fillRect(0,$,i,c));const q=j>=I&&j<=D;j===e.hoveredRow&&!q&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,$,i,c)),q&&!S&&(t.fillStyle=al(s.accent,.1),t.fillRect(0,$,i,c)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,$+c-.5),t.lineTo(i,$+c-.5),t.stroke();let V=-f;for(let le=0;le<o.length;le++){const ne=o[le];if(V+ne.width<=0){V+=ne.width;continue}if(V>=i)break;const ge=q&&le>=C&&le<=N;ge&&S&&(t.fillStyle=al(s.accent,.14),t.fillRect(V,$,ne.width,c)),ge&&(V<M&&(M=V),V+ne.width>U&&(U=V+ne.width),$<B&&(B=$),$+c>k&&(k=$+c));const Te=e.getCellStyle(ne,te),Ge=Te.color??s.text,oe=Te.textAlign??"left",he=e.formatCell(ne,te);t.save(),t.beginPath(),t.rect(V+1,$,ne.width-2,c),t.clip(),t.font=`${ol}px system-ui, -apple-system, sans-serif`,t.fillStyle=Ge,t.textBaseline="middle";const Ee=oe==="right"?V+ne.width-8:V+8;t.textAlign=oe==="right"?"right":"left";const _e=$+c/2;h?(t.shadowColor=Ge,t.shadowBlur=12,t.fillText(he,Ee,_e),t.shadowBlur=6,t.fillText(he,Ee,_e),t.shadowBlur=2,t.fillText(he,Ee,_e),t.shadowBlur=0):t.fillText(he,Ee,_e),t.restore(),j===e.selectedRow&&le===e.selectedCol&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect(V+1.5,$+1.5,ne.width-3,c-3)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(V+ne.width-.5,$),t.lineTo(V+ne.width-.5,$+c),t.stroke(),V+=ne.width}}if(S&&M<U&&B<k&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect(M+.5,B+.5,U-M-1,k-B-1)),t.restore(),l.length>0){const j=r-m-g;t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,j-.5),t.lineTo(i,j-.5),t.stroke();for(let te=0;te<l.length;te++){const $=l[te],q=j+te*c;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,q,i,c);let V=-f;for(let le=0;le<o.length;le++){const ne=o[le];if(V+ne.width<=0){V+=ne.width;continue}if(V>=i)break;const ge=e.getCellStyle(ne,$),Te=ge.color??s.text,Ge=ge.textAlign??"left",oe=e.formatCell(ne,$);t.save(),t.beginPath(),t.rect(V+1,q,ne.width-2,c),t.clip(),t.font=`bold ${ol}px system-ui, -apple-system, sans-serif`,t.fillStyle=Te,t.textBaseline="middle",Ge==="right"?(t.textAlign="right",t.fillText(oe,V+ne.width-8,q+c/2)):(t.textAlign="left",t.fillText(oe,V+8,q+c/2)),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(V+ne.width-.5,q),t.lineTo(V+ne.width-.5,q+c),t.stroke(),V+=ne.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,q+c-.5),t.lineTo(i,q+c-.5),t.stroke()}}if(e.aggregateRow){const j=r-g;t.fillStyle=al(s.accent,.1),t.fillRect(0,j,i,g),t.strokeStyle=s.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,j-.5),t.lineTo(i,j-.5),t.stroke();let te=-f;for(let $=0;$<o.length;$++){const q=o[$];if(te+q.width<=0){te+=q.width;continue}if(te>=i)break;const le=e.getCellStyle(q,e.aggregateRow).textAlign??"left",ne=e.aggregateRow[q.colId]??"";t.save(),t.beginPath(),t.rect(te+1,j,q.width-2,g),t.clip(),t.font=`bold ${ol}px system-ui, -apple-system, sans-serif`,t.fillStyle=s.accent,t.textBaseline="middle",h&&(t.shadowColor=s.accent,t.shadowBlur=8),le==="right"?(t.textAlign="right",t.fillText(ne,te+q.width-8,j+g/2)):(t.textAlign="left",t.fillText(ne,te+8,j+g/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=s.border,t.lineWidth=1,t.beginPath(),t.moveTo(te+q.width-.5,j),t.lineTo(te+q.width-.5,j+g),t.stroke(),te+=q.width}}t.restore()}function al(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${r},${e})`}function CS(n,e,t){const i=n-.5,r=e-.5,s=(i*i+r*r)*t,o=i*(1+s)*s,a=r*(1+s)*s;return[n+o,e+a*.15]}function RS(n,e,t,i,r){const s=n/t,o=1-e/i,[a,l]=CS(s,o,r);return a<0||a>1||l<0||l>1?[-1,-1]:[a*t,(1-l)*i]}function ll(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function PS(n,e,t){return n>=e+t-24&&n<e+t}function Bf(n,e,t){const i=e+t;return n>=i-6&&n<=i+1}function zf(n,e,t,i,r,s,o,a,l,c=!1){const u=n+l;let f=-1,h=0;for(let d=0;d<t.length;d++){if(u>=h&&u<h+t[d].width){f=d;break}h+=t[d].width}if(e<Pt)return{area:"header",colIdx:f,rowIdx:-1};const m=c?Hh:0;if(m>0&&e>=o-m)return{area:"agg",colIdx:f,rowIdx:-1};const g=a*r;if(g>0&&e>=o-g-m){const d=Math.floor((e-(o-g-m))/r);return{area:"pinned",colIdx:f,rowIdx:d}}const _=e-Pt+s,p=Math.floor(_/r);return p>=0&&p<i?{area:"body",colIdx:f,rowIdx:p}:{area:"none",colIdx:-1,rowIdx:-1}}const DS=500,LS=DS/2,IS=1.6,Vc=`
  uniform vec2  uMouseUV;    // mouse position in UV space; (-999,-999) = lens off
  uniform float uLensR;      // lens radius in aspect-corrected units (0 = disabled)
  uniform float uLensZoom;   // lens magnification factor (~1.6)
  uniform vec3  uLensTint;   // ring tint (phosphor accent)
  uniform float uAspect;     // canvas W / H — needed to draw a circular lens
`,Gc=`
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
`,Wc=`
    // Lens ring — visually masks the magnification seam at the rim.
    if (uLensR > 0.0) {
      vec2  rd       = (vUv - uMouseUV) * vec2(uAspect, 1.0);
      float ringDist = abs(length(rd) - uLensR);
      float ring     = 1.0 - smoothstep(0.002, 0.012, ringDist);
      color.rgb     += uLensTint * ring * 0.32;
    }
`;function Xc(){return{uMouseUV:{value:new gt(-999,-999)},uLensR:{value:0},uLensZoom:{value:IS},uLensTint:{value:new dt(7268263)},uAspect:{value:1}}}const Jt={x:-999,y:-999};function Yc(n,e,t,i,r){const s=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=s&&r>0?LS/r:0,n.uniforms.uAspect.value=r>0?i/r:1}function $c(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const US=["value"],NS=["disabled"],FS=["disabled"],OS=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,BS=28,zS=600,kS=xr({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,r=Ue(t.rowData??[]),s=Ue(t.pinnedBottomRowData??[]),o=Ue(""),a=Ue(null),l=$r({}),c=$r({}),u=$r(new Set),f=Ue(0),h=Ue(0),m=Ue(0),g=Ue(0),_=Ue(0),p=Ue(-1),d=Ue(null),w=Ue(null),b=Ue(null),E={...Jt},I=Ue({x:0,y:Pt}),D=Ue("");function C(W){return W.colId??W.field??(W.headerName?W.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const N=nt(()=>{const W=t.defaultColDef??{};return t.columnDefs.filter(se=>!u.has(C(se))).map(se=>{const xe=C(se),Ie={...W,...se};return{colId:xe,colDef:Ie,width:c[xe]??Ie.width??100}})}),S=nt(()=>{const W=h.value;if(!W)return N.value;const se=N.value.reduce((Ae,Fe)=>Ae+Fe.width,0);if(!se||se>=W)return N.value;const xe=W/se;let Ie=0;return N.value.map((Ae,Fe)=>{const y=Fe===N.value.length-1?W-Ie:Math.max(8,Math.round(Ae.width*xe));return Ie+=y,{...Ae,width:y}})}),M=nt(()=>{const W=S.value.reduce((se,xe)=>se+xe.width,0);return Math.max(0,W-h.value)}),U=nt(()=>{const W=s.value.length*t.rowHeight;return Math.max(0,m.value-Pt-W)}),B=nt(()=>Math.max(0,le.value.length*t.rowHeight-U.value)),k=nt(()=>Math.max(1,Math.floor(U.value/t.rowHeight))),j=nt(()=>le.value.length===0?0:Math.min(le.value.length-1,Math.floor(g.value/t.rowHeight))),te=nt(()=>Math.min(le.value.length-1,j.value+k.value-1));function $(W,se){if(se.colDef.valueGetter)return se.colDef.valueGetter({data:W,colDef:se.colDef});if(se.colDef.field)return W[se.colDef.field]}function q(W,se){const xe=$(se,W);return W.colDef.valueFormatter?W.colDef.valueFormatter({value:xe,data:se,colDef:W.colDef})??"":W.colDef.cellRenderer?(W.colDef.cellRenderer({value:xe,data:se,colDef:W.colDef})??"").replace(/<[^>]+>/g,""):xe==null?"":String(xe)}function V(W,se){return W.colDef.cellStyle?typeof W.colDef.cellStyle=="function"?W.colDef.cellStyle({value:$(se,W),data:se,colDef:W.colDef})??{}:W.colDef.cellStyle:{}}const le=nt(()=>{f.value;let W=r.value;const se=o.value.trim().toLowerCase();se&&(W=W.filter(xe=>N.value.some(Ie=>String($(xe,Ie)??"").toLowerCase().includes(se))));for(const[xe,Ie]of Object.entries(l)){if(!Ie)continue;const Ae=N.value.find(Fe=>Fe.colId===xe);if(Ae)if(Ie.startsWith("__eq__")){const Fe=Ie.slice(6).toLowerCase();W=W.filter(ke=>String($(ke,Ae)??"").toLowerCase()===Fe)}else{const Fe=Ie.toLowerCase();W=W.filter(ke=>String($(ke,Ae)??"").toLowerCase().includes(Fe))}}if(a.value){const{colId:xe,dir:Ie}=a.value,Ae=N.value.find(Fe=>Fe.colId===xe);Ae&&(W=[...W].sort((Fe,ke)=>{const y=$(Fe,Ae),H=$(ke,Ae);let ee=0;return Ae.colDef.comparator?ee=Ae.colDef.comparator(y,H):typeof y=="number"&&typeof H=="number"?ee=y-H:ee=String(y??"").localeCompare(String(H??""),void 0,{numeric:!0}),Ie==="asc"?ee:-ee}))}return W}),ne=nt(()=>{const W=N.value.filter(Ae=>Ae.colDef.aggFunc!=null);if(W.length===0)return null;const se=le.value,xe={};for(const Ae of W){const Fe=se.map(y=>$(y,Ae)),ke=AS(Fe,Ae.colDef.aggFunc);if(ke==null){xe[Ae.colId]="";continue}xe[Ae.colId]=Ae.colDef.aggValueFormatter?Ae.colDef.aggValueFormatter(ke):String(ke)}const Ie=W[0].colId;return xe[Ie]===""&&(xe[Ie]="Σ"),xe});qe(le,()=>{g.value=0,d.value=null}),qe(M,()=>{_.value=Math.min(_.value,M.value)}),qe(B,()=>{g.value=Math.min(g.value,B.value)});function ge(W){const se=W*t.rowHeight,xe=se+t.rowHeight;se<g.value?g.value=se:xe>g.value+U.value&&(g.value=Math.min(B.value,xe-U.value))}function Te(){g.value=Math.max(0,g.value-U.value),ue()}function Ge(){g.value=Math.min(B.value,g.value+U.value),ue()}let oe=!1,he="",Ee=0,_e=0,fe=!1,ve=!1,De=0,je=0,R=0,O=0,T=!1;function de(W,se){var xe;oe=!0,he=W,Ee=se,_e=((xe=S.value.find(Ie=>Ie.colId===W))==null?void 0:xe.width)??100,fe=!1}function A(W){if(ve){const Fe=De-W.clientX,ke=je-W.clientY;(Math.abs(Fe)>4||Math.abs(ke)>4)&&(T=!0),_.value=Math.max(0,Math.min(M.value,R+Fe)),g.value=Math.max(0,Math.min(B.value,O+ke)),ue();return}if(!oe)return;const se=h.value,xe=Math.max(30,_e+(W.clientX-Ee)),Ie=N.value.filter(Fe=>Fe.colId!==he).reduce((Fe,ke)=>Fe+ke.width,0),Ae=se-xe;Ae>10&&(c[he]=Math.max(10,Math.round(xe*Ie/Ae))),ue()}function P(){ve&&(T&&(fe=!0),ve=!1),oe&&(oe=!1,fe=!0,i("column-resized"))}const F=Ue(null),K=Ue(null),Z=Ni("cathodeResetTick",Ue(0));qe(Z,()=>Ut());let x=null,v=!1,L,X,J,Q,pe;const z=`
  uniform sampler2D uTex;
  uniform float     uStrength;   // barrel strength 0..~0.55
  uniform float     uScanlines;  // 1.0 = on
  uniform float     uVignette;   // 1.0 = on  (off for paper theme)
  uniform vec3      uBezel;      // bezel / outside-screen colour
  ${Vc}

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    vec2  cc   = uv - 0.5;
    float dist = dot(cc, cc) * uStrength;
    vec2  d    = cc * (1.0 + dist) * dist;
    return uv + d;
  }

  ${Gc}

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

    ${Wc}

    gl_FragColor = color;
  }
`;function ie(){if(!(!K.value||!F.value)){pe=document.createElement("canvas");try{x=new kc({canvas:K.value,antialias:!1,alpha:!0})}catch{v=!0}if(!v&&!x.getContext()&&(x.dispose(),x=null,v=!0),v){Se();return}x.setPixelRatio(1),x.setClearColor(0,0),L=new Hc,X=new ga(-1,1,1,-1,0,1),Q=new ls(pe),Q.minFilter=Tt,Q.magFilter=Tt,J=new Fn({uniforms:{uTex:{value:Q},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},uBezel:{value:new dt(0)},...Xc()},vertexShader:OS,fragmentShader:z,transparent:!0}),L.add(new Mn(new Sr(2,2),J)),Se()}}function Se(){if(!F.value||!x&&!v)return;const W=F.value.clientWidth,se=F.value.clientHeight-(t.pagination?BS:0);if(!W||!se)return;const xe=pe.width!==W||pe.height!==se;pe.width=W,pe.height=se,h.value=W,m.value=se,_.value=Math.max(0,Math.min(M.value,_.value)),g.value=Math.max(0,Math.min(B.value,g.value)),x?(xe&&Q&&(Q.dispose(),Q=new ls(pe),Q.minFilter=Tt,Q.magFilter=Tt,J&&(J.uniforms.uTex.value=Q)),x.setPixelRatio(window.devicePixelRatio||1),x.setSize(W,se)):K.value&&(K.value.width=W,K.value.height=se,K.value.style.width=W+"px",K.value.style.height=se+"px"),ue()}function ue(){var xe,Ie,Ae,Fe,ke,y,H,ee,re,Y,ye,Ce;if(!(pe!=null&&pe.width))return;if(v){if(!K.value)return;Of(pe,{cols:S.value,rows:le.value,pinnedRows:s.value,rowHeight:t.rowHeight,scrollY:g.value,scrollX:_.value,theme:t.theme,glow:!1,sortColId:((xe=a.value)==null?void 0:xe.colId)??null,sortDir:((Ie=a.value)==null?void 0:Ie.dir)??null,colFilters:l,hoveredRow:p.value,selectedRow:((Ae=d.value)==null?void 0:Ae.row)??-1,selectedCol:((Fe=d.value)==null?void 0:Fe.col)??-1,selectionAnchorRow:((ke=w.value)==null?void 0:ke.row)??-1,selectionAnchorCol:((y=w.value)==null?void 0:y.col)??-1,formatCell:q,getCellStyle:V});const Oe=K.value.getContext("2d");Oe&&Oe.drawImage(pe,0,0);return}if(!x||!J||!Q)return;const W=Wr[t.theme]??Wr.none,se=t.theme==="paper";J.uniforms.uStrength.value=t.curvature/45*.55,J.uniforms.uScanlines.value=t.scanlines&&!se?1:0,J.uniforms.uVignette.value=se?0:1,J.uniforms.uBezel.value.set(W.bg),Yc(J,t.magnify,E,pe.width,pe.height),Of(pe,{cols:S.value,rows:le.value,pinnedRows:s.value,rowHeight:t.rowHeight,scrollY:g.value,scrollX:_.value,theme:t.theme,glow:t.glow,sortColId:((H=a.value)==null?void 0:H.colId)??null,sortDir:((ee=a.value)==null?void 0:ee.dir)??null,colFilters:l,hoveredRow:p.value,selectedRow:((re=d.value)==null?void 0:re.row)??-1,selectedCol:((Y=d.value)==null?void 0:Y.col)??-1,selectionAnchorRow:((ye=w.value)==null?void 0:ye.row)??-1,selectionAnchorCol:((Ce=w.value)==null?void 0:Ce.col)??-1,formatCell:q,getCellStyle:V,aggregateRow:ne.value}),Q.needsUpdate=!0,x.render(L,X)}function be(W){if(!K.value)return[-1,-1];const se=K.value.getBoundingClientRect(),xe=W.clientX-se.left,Ie=W.clientY-se.top,Ae=K.value.width||se.width,Fe=K.value.height||se.height,ke=t.curvature/45*.55,[y,H]=RS(xe,Ie,Ae,Fe,ke);return y<0?[-1,-1]:[y,H]}let Ne=0;function Be(W){b.value=null;const se=Date.now();if(W.deltaX!==0){Ne=se,_.value=Math.max(0,Math.min(M.value,_.value+W.deltaX)),ue();return}if(W.shiftKey&&W.deltaY!==0){Ne=se,_.value=Math.max(0,Math.min(M.value,_.value+W.deltaY)),ue();return}se-Ne<zS||(g.value=Math.max(0,Math.min(B.value,g.value+W.deltaY)),ue())}function Me(W){if(oe)return;if(t.magnify&&K.value){const Ae=$c(W,K.value);E.x=Ae.x,E.y=Ae.y}const[se,xe]=be(W);if(se<0){p.value=-1,ue();return}const Ie=zf(se,xe,S.value,le.value.length,t.rowHeight,g.value,pe.height,s.value.length,_.value,ne.value!==null);if(p.value=Ie.area==="body"?Ie.rowIdx:-1,Ie.area==="header"&&Ie.colIdx>=0){const Ae=S.value[Ie.colIdx],Fe=ll(Ie.colIdx,S.value),ke=se+_.value;K.value.style.cursor=Ae&&Bf(ke,Fe,Ae.width)?"col-resize":"pointer"}else Ie.area==="body"?K.value.style.cursor="pointer":K.value.style.cursor="default";ue()}function Xe(){p.value=-1,E.x=Jt.x,E.y=Jt.y,ue()}function $e(W){const[se,xe]=be(W);if(se<0)return;if(xe>=Pt){ve=!0,T=!1,De=W.clientX,je=W.clientY,R=_.value,O=g.value;return}const Ie=se+_.value;for(let Ae=0;Ae<S.value.length;Ae++){const Fe=S.value[Ae],ke=ll(Ae,S.value);if(Fe.colDef.resizable!==!1&&Bf(Ie,ke,Fe.width)){de(Fe.colId,W.clientX);return}}}function it(W){var Ae,Fe,ke;if(fe){fe=!1;return}if(oe)return;const[se,xe]=be(W);if(se<0){b.value=null;return}const Ie=zf(se,xe,S.value,le.value.length,t.rowHeight,g.value,pe.height,s.value.length,_.value,ne.value!==null);if(Ie.area==="header"&&Ie.colIdx>=0){const y=S.value[Ie.colIdx],H=ll(Ie.colIdx,S.value),ee=se+_.value;y.colDef.filter&&PS(ee,H,y.width)?(W.stopPropagation(),b.value===y.colId?b.value=null:(b.value=y.colId,D.value=(Ae=l[y.colId])!=null&&Ae.startsWith("__eq__")?l[y.colId].slice(6):l[y.colId]??"",I.value={x:Math.max(0,H-_.value),y:Pt})):y.colDef.sortable!==!1&&(b.value=null,a.value=((Fe=a.value)==null?void 0:Fe.colId)===y.colId?a.value.dir==="asc"?{colId:y.colId,dir:"desc"}:null:{colId:y.colId,dir:"asc"},i("sort-changed"));return}if(b.value=null,Ie.area==="body"&&Ie.rowIdx>=0&&Ie.colIdx>=0){const y=Ie.rowIdx;W.shiftKey&&d.value?(w.value||(w.value={...d.value}),d.value={row:y,col:Ie.colIdx}):(d.value={row:y,col:Ie.colIdx},w.value={row:y,col:Ie.colIdx}),(ke=K.value)==null||ke.focus();const H=le.value[y],ee=S.value[Ie.colIdx];H&&ee&&(i("row-clicked",{data:H,event:W}),i("cell-selected",{data:H,row:y,col:Ie.colIdx,colId:ee.colId}))}}function G(W){var se,xe;b.value&&((xe=(se=W.target).closest)!=null&&xe.call(se,".cathode-filter-popup")||(b.value=null))}function we(W){var Ae;if(!h.value)return;let se=0;for(let Fe=0;Fe<W;Fe++)se+=S.value[Fe].width;const xe=((Ae=S.value[W])==null?void 0:Ae.width)??0,Ie=se-_.value;Ie<0?_.value=Math.max(0,se):Ie+xe>h.value&&(_.value=Math.min(M.value,se+xe-h.value))}function ce(W){const xe=S.value.length-1,Ie=le.value.length-1;if(!d.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(W.key)&&(W.preventDefault(),d.value={row:j.value,col:0},w.value={row:j.value,col:0});return}let{row:Ae,col:Fe}=d.value;const ke=(y,H,ee=!1)=>{Ae=Math.max(0,Math.min(Ie,y)),Fe=Math.max(0,Math.min(xe,H)),d.value={row:Ae,col:Fe},ee||(w.value={row:Ae,col:Fe}),ge(Ae),we(Fe)};switch(W.key){case"ArrowDown":W.preventDefault(),ke(Ae+1,Fe,W.shiftKey);break;case"ArrowUp":W.preventDefault(),ke(Ae-1,Fe,W.shiftKey);break;case"ArrowRight":W.preventDefault(),W.shiftKey?ke(Ae,Fe+1,!0):Fe<xe?ke(Ae,Fe+1):ke(Ae+1,0);break;case"ArrowLeft":W.preventDefault(),W.shiftKey?ke(Ae,Fe-1,!0):Fe>0?ke(Ae,Fe-1):ke(Ae-1,xe);break;case"Tab":W.preventDefault(),W.shiftKey?Fe>0?ke(Ae,Fe-1):ke(Ae-1,xe):Fe<xe?ke(Ae,Fe+1):ke(Ae+1,0);break;case"Enter":W.preventDefault(),W.shiftKey?ke(Ae-1,Fe):ke(Ae+1,Fe);break;case"Home":W.preventDefault(),W.ctrlKey||W.metaKey?ke(0,0,W.shiftKey):ke(Ae,0,W.shiftKey);break;case"End":W.preventDefault(),W.ctrlKey||W.metaKey?ke(Ie,xe,W.shiftKey):ke(Ae,xe,W.shiftKey);break;case"PageDown":W.preventDefault(),ke(Math.min(Ie,Ae+k.value),Fe,W.shiftKey);break;case"PageUp":W.preventDefault(),ke(Math.max(0,Ae-k.value),Fe,W.shiftKey);break;case"Escape":d.value=null,w.value=null;break;case"c":case"C":(W.ctrlKey||W.metaKey)&&(W.preventDefault(),me());break}}function me(){var ee;if(!d.value)return;const W=S.value,se=le.value,xe=w.value??d.value,Ie=Math.min(xe.row,d.value.row),Ae=Math.max(xe.row,d.value.row),Fe=Math.min(xe.col,d.value.col),ke=Math.max(xe.col,d.value.col),y=[];for(let re=Ie;re<=Ae;re++){const Y=se[re];if(!Y)continue;const ye=[];for(let Ce=Fe;Ce<=ke;Ce++){const Oe=W[Ce];Oe&&ye.push(q(Oe,Y).replace(/[\t\r\n]+/g," "))}y.push(ye.join("	"))}const H=y.join(`
`);(ee=navigator.clipboard)==null||ee.writeText(H).catch(()=>{})}function Le(W){const se=W.target.value;D.value=se,se?l[b.value]=se:delete l[b.value],i("filter-changed")}function Pe(){b.value&&delete l[b.value],D.value="",b.value=null,i("filter-changed")}const Ze={setGridOption(W,se){W==="rowData"?r.value=se:W==="pinnedBottomRowData"?s.value=se:W==="quickFilterText"&&(o.value=se)},getColumnState(){return t.columnDefs.map(W=>{var xe,Ie;const se=C(W);return{colId:se,hide:u.has(se),sort:((xe=a.value)==null?void 0:xe.colId)===se?a.value.dir:null,sortIndex:((Ie=a.value)==null?void 0:Ie.colId)===se?0:null,width:c[se]??W.width}})},applyColumnState({state:W}){for(const se of W)se.hide===!0&&u.add(se.colId),se.hide===!1&&u.delete(se.colId),se.sort&&(a.value={colId:se.colId,dir:se.sort}),se.width&&(c[se.colId]=se.width)},setFilterModel(W){for(const se of Object.keys(l))delete l[se];if(W)for(const[se,xe]of Object.entries(W))(xe==null?void 0:xe.type)==="equals"?l[se]=`__eq__${xe.filter}`:xe!=null&&xe.filter&&(l[se]=xe.filter)},getFilterModel(){const W={};for(const[se,xe]of Object.entries(l))xe&&(W[se]=xe.startsWith("__eq__")?{type:"equals",filter:xe.slice(6)}:{type:"contains",filter:xe});return W},async setColumnFilterModel(W,se){se?se.type==="equals"?l[W]=`__eq__${se.filter}`:l[W]=se.filter??"":delete l[W]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:W="export.csv"}={}){const se=N.value,xe=se.map(ke=>ke.colDef.headerName??ke.colId).join(","),Ie=le.value.map(ke=>se.map(y=>`"${String(q(y,ke)).replace(/"/g,'""')}"`).join(",")),Ae=new Blob([[xe,...Ie].join(`
`)],{type:"text/csv"}),Fe=URL.createObjectURL(Ae);Object.assign(document.createElement("a"),{href:Fe,download:W}).click(),URL.revokeObjectURL(Fe)},resize(){Se()},resetColumnState(){u.clear();for(const se of t.columnDefs)se.hide&&u.add(C(se));const W=t.columnDefs.find(se=>se.sort);a.value=W?{colId:C(W),dir:W.sort}:null;for(const se of Object.keys(c))delete c[se];for(const se of Object.keys(l))delete l[se];o.value="",g.value=0,d.value=null,b.value=null}};qe([le,()=>s.value,S,g,p,d],()=>yn(ue)),qe(()=>t.theme,()=>ue()),qe(()=>t.curvature,()=>yn(Se)),qe(()=>t.scanlines,()=>ue()),qe(()=>t.glow,()=>ue()),qe(()=>t.magnify,W=>{W||(E.x=Jt.x,E.y=Jt.y),ue()}),qe(d,W=>{if(!W)return;const se=le.value[W.row],xe=S.value[W.col];se&&xe&&i("cell-selected",{data:se,row:W.row,col:W.col,colId:xe.colId})});let pt=null,bt=null,rt=0;function Ut(){cancelAnimationFrame(rt),rt=requestAnimationFrame(Se)}function pn(W){W.preventDefault()}function ps(){x==null||x.dispose(),x=null,v=!1,ie()}gi(()=>{for(const W of t.columnDefs)W.hide&&u.add(C(W)),W.sort&&!a.value&&(a.value={colId:C(W),dir:W.sort});r.value=t.rowData??[],s.value=t.pinnedBottomRowData??[],document.addEventListener("click",G),document.addEventListener("mousemove",A),document.addEventListener("mouseup",P),yn(()=>{var W;ie(),K.value&&(K.value.addEventListener("webglcontextlost",pn),K.value.addEventListener("webglcontextrestored",ps)),F.value&&(pt=new ResizeObserver(()=>Se()),pt.observe(F.value),bt=new IntersectionObserver(se=>{se.some(xe=>xe.isIntersecting)&&Ut()}),bt.observe(F.value)),window.addEventListener("resize",Ut),(W=window.visualViewport)==null||W.addEventListener("resize",Ut),i("grid-ready",{api:Ze})})}),Gi(()=>{var W,se,xe;document.removeEventListener("click",G,!0),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",P),(W=K.value)==null||W.removeEventListener("webglcontextlost",pn),(se=K.value)==null||se.removeEventListener("webglcontextrestored",ps),pt==null||pt.disconnect(),bt==null||bt.disconnect(),window.removeEventListener("resize",Ut),(xe=window.visualViewport)==null||xe.removeEventListener("resize",Ut),cancelAnimationFrame(rt),x==null||x.dispose()});const Wt=nt(()=>Wr[t.theme]??Wr.none),qn=nt(()=>({position:"absolute",left:`${I.value.x}px`,top:`${I.value.y}px`,zIndex:100,background:Wt.value.headerBg,border:`1px solid ${Wt.value.accent}`,color:Wt.value.text,boxShadow:"0 4px 14px rgba(0,0,0,0.55)",borderRadius:"3px",display:"flex",alignItems:"center",gap:"4px",padding:"5px",minWidth:"160px"})),ms=nt(()=>({background:Wt.value.bg,border:`1px solid ${Wt.value.border}`,color:Wt.value.text,fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"11px",padding:"3px 7px",borderRadius:"2px",outline:"none",flex:"1"})),no=nt(()=>({background:Wt.value.headerBg,borderTop:`1px solid ${Wt.value.border}`,color:Wt.value.text})),io=nt(()=>({background:Wt.value.bg})),Wi=nt(()=>Wt.value.accent);return(W,se)=>{var xe,Ie;return ft(),Et("div",{ref_key:"wrapEl",ref:F,class:"cathode-wrap",style:fn(io.value)},[ze("canvas",{ref_key:"canvasEl",ref:K,class:"cathode-canvas",tabindex:"0",onWheel:Ui(Be,["prevent"]),onMousemove:Me,onMouseleave:Xe,onMousedown:$e,onClick:it,onKeydown:ce},null,544),b.value?(ft(),Et("div",{key:0,class:"cathode-filter-popup",style:fn(qn.value),onClick:se[0]||(se[0]=Ui(()=>{},["stop"]))},[ze("input",{style:fn(ms.value),value:D.value,placeholder:"Filter…",autofocus:"",onInput:Le,onKeydown:_g(Pe,["escape"])},null,44,US),D.value?(ft(),Et("button",{key:0,style:fn({background:"none",border:"none",color:Wt.value.text,opacity:"0.55",cursor:"pointer",fontSize:"11px",padding:"0 4px"}),onClick:Pe},"✕",4)):jt("",!0)],4)):jt("",!0),n.pagination?(ft(),Et("div",{key:1,class:"cathode-pagination",style:fn(no.value)},[ze("button",{disabled:g.value<=0,onClick:se[1]||(se[1]=Ae=>Te())},"◀",8,NS),ze("span",null,xn((j.value+1).toLocaleString())+"–"+xn(Math.min(le.value.length,te.value+1).toLocaleString())+" / "+xn(le.value.length.toLocaleString()),1),ze("button",{disabled:g.value>=B.value,onClick:se[2]||(se[2]=Ae=>Ge())},"▶",8,FS),ze("span",{class:"cathode-page-info",style:fn({color:Wi.value})},xn(le.value.length.toLocaleString())+" rows ",5),d.value?(ft(),Et("span",{key:0,class:"cathode-sel-readout",style:fn({color:Wi.value})},xn(((xe=S.value[d.value.col])==null?void 0:xe.colDef.headerName)??((Ie=S.value[d.value.col])==null?void 0:Ie.colId))+" : "+xn(q(S.value[d.value.col],le.value[d.value.row])),5)):jt("",!0)],4)):jt("",!0)],4)}}}),yr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},kf=yr(kS,[["__scopeId","data-v-b951b247"]]),Zo={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function HS(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const VS=12,Ft=18,Os=10,mr=6,qc=`${VS}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function GS(n,e,t){if(t<=0||!e)return[e];const i=[];for(const r of e.split(`
`)){if(!r){i.push("");continue}if(n.measureText(r).width<=t){i.push(r);continue}const s=r.split(/(\s+)/);let o="";for(const a of s){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function Vh(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),r=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${r}`}return n}function WS(n,e){return Math.ceil(n.measureText(e).width)+12}function XS(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:r,wordWrap:s}=n,o=n.formatTs??Vh;t.font=qc;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=r&&c.ts!=null?o(c.ts):"",h=s?GS(t,c.text,i):c.text.split(`
`);for(let m=0;m<h.length;m++)a.push({entryIdx:l,text:h[m],level:u,timestamp:m===0?f:"",isFirstFrag:m===0,widthPx:t.measureText(h[m]).width})}return a}function Hf(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=Zo[e.theme]??Zo.none;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip(),t.font=qc,t.textBaseline="middle";const o=e.visualLines,a=Os-e.scrollX,l=(e.showTimestamps?Os+e.timestampWidth:Os)-e.scrollX,c=Math.max(0,Math.floor((e.scrollY-mr)/Ft)),u=Math.min(o.length,Math.ceil((e.scrollY+r-mr)/Ft)+1);for(let f=c;f<u;f++){const h=o[f],m=mr+f*Ft-e.scrollY+Ft/2;if(h.entryIdx%2===1&&h.isFirstFrag){t.fillStyle=s.rowAlt;let _=1;for(;f+_<u&&o[f+_].entryIdx===h.entryIdx;)_++;t.fillRect(0,m-Ft/2,i,Ft*_)}e.selectionStart>=0&&f>=e.selectionStart&&f<=e.selectionEnd&&(t.fillStyle=s.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,m-Ft/2,i,Ft)),f===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,m-Ft/2,i,Ft)),e.showTimestamps&&h.timestamp&&(t.fillStyle=s.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=s.timestamp),t.fillText(h.timestamp,a,m),t.shadowBlur=0);const g=HS(s,h.level);t.fillStyle=g,t.textAlign="left",e.glow?(t.shadowColor=g,t.shadowBlur=14,t.fillText(h.text,l,m),t.shadowBlur=7,t.fillText(h.text,l,m),t.shadowBlur=3,t.fillText(h.text,l,m),t.shadowBlur=0):t.fillText(h.text,l,m)}t.restore()}function Vf(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-mr)/Ft);return i<0||i>=t?-1:i}function YS(n){return mr*2+n*Ft}const $S=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,qS=xr({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=Ue(null),r=Ue(null),s={...Jt},o=Ue(0),a=Ue(0),l=Ue(0),c=Ue(-1),u=Ue(!0),f=Ue(-1),h=Ue(-1),m=nt(()=>{const z=t.entries??[];return t.maxLines>0&&z.length>t.maxLines?z.slice(z.length-t.maxLines):z}),g=nt(()=>{if(!t.showTimestamps)return"";const z=t.formatTs??Vh;let ie="00:00:00";for(const Se of m.value){if(Se.ts==null)continue;const ue=z(Se.ts);ue.length>ie.length&&(ie=ue)}return ie}),_=Ue(0),p=Ue([]);function d(){if(!k)return;const z=k.getContext("2d");if(!z)return;z.font=qc;const ie=t.showTimestamps?WS(z,g.value):0;_.value=ie;const Se=Math.max(1,o.value-Os*2-ie);p.value=XS({entries:m.value,ctx:z,textMaxWidth:Se,showTimestamps:t.showTimestamps,formatTs:t.formatTs,wordWrap:t.wordWrap})}const w=nt(()=>YS(p.value.length)),b=nt(()=>Math.max(0,w.value-a.value)),E=nt(()=>{let z=0;for(const ie of p.value)ie.widthPx>z&&(z=ie.widthPx);return Os*2+_.value+z}),I=nt(()=>Math.max(0,E.value-o.value)),D=Ue(0);qe(b,()=>{u.value?l.value=b.value:l.value=Math.min(l.value,b.value)}),qe(I,()=>{D.value=Math.min(D.value,I.value)}),qe([m,o,()=>t.showTimestamps,()=>t.wordWrap,g],()=>{d(),yn(q)},{deep:!1});let C=null,N=!1,S,M,U,B,k;const j=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${Vc}

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    vec2  cc   = uv - 0.5;
    float dist = dot(cc, cc) * uStrength;
    vec2  d    = cc * (1.0 + dist) * dist;
    return uv + d;
  }

  ${Gc}

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

    ${Wc}

    gl_FragColor = color;
  }
`;function te(){if(!(!r.value||!i.value)){k=document.createElement("canvas");try{C=new kc({canvas:r.value,antialias:!1,alpha:!0})}catch{N=!0}if(!N&&!C.getContext()&&(C.dispose(),C=null,N=!0),N){$();return}C.setPixelRatio(1),C.setClearColor(0,0),S=new Hc,M=new ga(-1,1,1,-1,0,1),B=new ls(k),B.minFilter=Tt,B.magFilter=Tt,U=new Fn({uniforms:{uTex:{value:B},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...Xc()},vertexShader:$S,fragmentShader:j,transparent:!0}),S.add(new Mn(new Sr(2,2),U)),$()}}function $(){if(!i.value||!C&&!N)return;const z=i.value.clientWidth,ie=i.value.clientHeight;if(!z||!ie)return;const Se=k.width!==z||k.height!==ie;Se&&(k.width=z,k.height=ie,o.value=z,a.value=ie,d(),C?(Se&&B&&(B.dispose(),B=new ls(k),B.minFilter=Tt,B.magFilter=Tt,U&&(U.uniforms.uTex.value=B)),C.setPixelRatio(window.devicePixelRatio||1),C.setSize(z,ie)):r.value&&(r.value.width=z,r.value.height=ie,r.value.style.width=z+"px",r.value.style.height=ie+"px"),u.value&&(l.value=Math.max(0,w.value-a.value)),q())}function q(){if(!(k!=null&&k.width))return;if(N){if(!r.value)return;Hf(k,{visualLines:p.value,scrollY:l.value,scrollX:D.value,theme:t.theme,glow:!1,showTimestamps:t.showTimestamps,timestampWidth:_.value,hoveredLine:c.value,selectionStart:Math.min(f.value,h.value),selectionEnd:Math.max(f.value,h.value)});const ie=r.value.getContext("2d");ie&&ie.drawImage(k,0,0);return}if(!C||!U||!B)return;const z=t.theme==="paper";U.uniforms.uStrength.value=t.curvature/45*.55,U.uniforms.uScanlines.value=t.scanlines&&!z?1:0,U.uniforms.uVignette.value=z?0:1,Yc(U,t.magnify,s,k.width,k.height),Hf(k,{visualLines:p.value,scrollY:l.value,scrollX:D.value,theme:t.theme,glow:t.glow,showTimestamps:t.showTimestamps,timestampWidth:_.value,hoveredLine:c.value,selectionStart:Math.min(f.value,h.value),selectionEnd:Math.max(f.value,h.value)}),B.needsUpdate=!0,C.render(S,M)}qe(()=>t.theme,()=>q()),qe(()=>t.curvature,()=>q()),qe(()=>t.scanlines,()=>q()),qe(()=>t.glow,()=>q()),qe(()=>t.magnify,z=>{z||(s.x=Jt.x,s.y=Jt.y),q()}),qe(l,()=>q()),qe(D,()=>q()),qe(c,()=>q()),qe([f,h],()=>q());function V(z){if(!r.value)return[-1,-1];const ie=r.value.getBoundingClientRect();return[z.clientX-ie.left,z.clientY-ie.top]}function le(z){l.value=Math.max(0,Math.min(b.value,z)),u.value=l.value>=b.value-4}function ne(z){D.value=Math.max(0,Math.min(I.value,z))}function ge(z){z.shiftKey?ne(D.value+z.deltaY):Math.abs(z.deltaX)>Math.abs(z.deltaY)?ne(D.value+z.deltaX):le(l.value+z.deltaY)}let Te=!1,Ge=0,oe=0,he=0,Ee=0,_e=!1;function fe(z){Te=!0,_e=!1,Ge=z.clientX,oe=z.clientY,he=D.value,Ee=l.value,i.value&&i.value.focus()}function ve(z){if(Te){const ie=Ge-z.clientX,Se=oe-z.clientY;(Math.abs(ie)>4||Math.abs(Se)>4)&&(_e=!0),ne(he+ie),le(Ee+Se)}}function De(){Te&&(Te=!1,_e&&(_e=!1))}function je(z){const[,ie]=V(z);return ie<0?-1:Vf(ie,l.value,p.value.length)}function R(z){if(_e){_e=!1;return}const ie=je(z);if(ie<0){f.value=-1,h.value=-1;return}z.shiftKey&&f.value>=0||(f.value=ie),h.value=ie}function O(z,ie){const Se=p.value.length;if(Se===0)return;const ue=h.value<0?0:h.value;let be=Math.max(0,Math.min(Se-1,ue+z));h.value=be,(!ie||f.value<0)&&(f.value=be),c.value=be;const Ne=mr+be*Ft,Be=Ne+Ft;Ne<l.value?le(Ne):Be>l.value+a.value&&le(Be-a.value)}function T(){const z=Math.min(f.value,h.value),ie=Math.max(f.value,h.value);if(z<0)return"";const Se=p.value,ue=new Set,be=[];for(let Ne=z;Ne<=ie&&Ne<Se.length;Ne++){const Be=Se[Ne];if(ue.has(Be.entryIdx))continue;ue.add(Be.entryIdx);let Me="";for(let Xe=0;Xe<Se.length;Xe++)Se[Xe].entryIdx===Be.entryIdx&&(Me+=(Me&&!Se[Xe].isFirstFrag?" ":"")+Se[Xe].text);be.push(Be.timestamp?`${Be.timestamp}  ${Me}`:Me)}return be.join(`
`)}async function de(){const z=T();if(z)try{await navigator.clipboard.writeText(z)}catch{const ie=document.createElement("textarea");ie.value=z,ie.style.position="fixed",ie.style.opacity="0",document.body.appendChild(ie),ie.select();try{document.execCommand("copy")}catch{}document.body.removeChild(ie)}}function A(z){if((z.metaKey||z.ctrlKey)&&(z.key==="c"||z.key==="C")){f.value>=0&&(z.preventDefault(),de());return}if((z.metaKey||z.ctrlKey)&&(z.key==="a"||z.key==="A")){z.preventDefault(),f.value=0,h.value=p.value.length-1;return}switch(z.key){case"ArrowDown":z.preventDefault(),O(1,z.shiftKey);break;case"ArrowUp":z.preventDefault(),O(-1,z.shiftKey);break;case"ArrowRight":z.preventDefault(),ne(D.value+Ft*2);break;case"ArrowLeft":z.preventDefault(),ne(D.value-Ft*2);break;case"PageDown":z.preventDefault(),le(l.value+a.value);break;case"PageUp":z.preventDefault(),le(l.value-a.value);break;case"Home":z.preventDefault(),le(0),ne(0);break;case"End":z.preventDefault(),le(b.value);break;case"Escape":f.value=-1,h.value=-1;break}}function P(z){if(t.magnify&&r.value){const Se=$c(z,r.value);s.x=Se.x,s.y=Se.y,q()}const[,ie]=V(z);if(ie<0){c.value=-1;return}c.value=Vf(ie,l.value,p.value.length)}function F(){c.value=-1,s.x=Jt.x,s.y=Jt.y,q()}e({scrollToBottom(){u.value=!0,l.value=b.value},scrollToLine(z){le(mr+z*Ft)}});let K=null,Z=null,x=0;const v=Ni("cathodeResetTick",Ue(0));qe(v,()=>L());function L(){cancelAnimationFrame(x),x=requestAnimationFrame($)}function X(z){z.preventDefault()}function J(){C==null||C.dispose(),C=null,N=!1,te()}gi(()=>{document.addEventListener("mousemove",ve),document.addEventListener("mouseup",De),yn(()=>{var z;te(),r.value&&(r.value.addEventListener("webglcontextlost",X),r.value.addEventListener("webglcontextrestored",J)),i.value&&(K=new ResizeObserver(()=>$()),K.observe(i.value),Z=new IntersectionObserver(ie=>{ie.some(Se=>Se.isIntersecting)&&L()}),Z.observe(i.value)),window.addEventListener("resize",L),(z=window.visualViewport)==null||z.addEventListener("resize",L),l.value=b.value})}),Gi(()=>{var z,ie,Se;document.removeEventListener("mousemove",ve),document.removeEventListener("mouseup",De),(z=r.value)==null||z.removeEventListener("webglcontextlost",X),(ie=r.value)==null||ie.removeEventListener("webglcontextrestored",J),K==null||K.disconnect(),Z==null||Z.disconnect(),window.removeEventListener("resize",L),(Se=window.visualViewport)==null||Se.removeEventListener("resize",L),cancelAnimationFrame(x),C==null||C.dispose()});const Q=nt(()=>Zo[t.theme]??Zo.none),pe=nt(()=>({background:Q.value.bg}));return(z,ie)=>(ft(),Et("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:fn(pe.value),tabindex:"0",onKeydown:A},[ze("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-log-canvas",onWheel:Ui(ge,["prevent"]),onMousemove:P,onMouseleave:F,onMousedown:fe,onClick:R},null,544)],36))}}),hc=yr(qS,[["__scopeId","data-v-50995a41"]]),Jo={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},KS=.18,As=8,Kc=22,jS=4,xi=8,gr=56,Gh=42,ki="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",ZS="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cl=4,JS=1,QS=1;function ey(n,e,t,i=0,r=!1){const s=r?Gh:gr,o=Math.max(0,e-xi-s),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function ty(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,r=-1/0,s=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>r&&(r=c.high),c.volume>s&&(s=c.volume))}if(!isFinite(i)||!isFinite(r)||i===r){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,s)}}const a=(r-i)*.04;return{min:i-a,max:r+a,maxVol:Math.max(1,s)}}function ny(n,e,t=!1){const i=t?jS:Kc,r=Math.max(1,n-As-i-cl),s=Math.max(0,Math.round(r*e)),o=r-s;return{priceY0:As,priceY1:As+o,volumeY0:As+o+cl,volumeY1:As+o+cl+s}}function Xn(n,e,t,i){const r=e.max-e.min;return r<=0?(t+i)/2:t+(1-(n-e.min)/r)*(i-t)}function Hi(n,e,t){return xi+(n-e+.5)*t}function fr(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function jc(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${r}:${s}`}function iy(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),r=t/i;let s;return r<1.5?s=1:r<3?s=2:r<7?s=5:s=10,s*i}function Gf(n,e){var m,g,_,p,d;const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=Jo[e.theme]??Jo.none,o=e.colors?{...s,...e.colors}:s,a=!!e.compact;if(t.clearRect(0,0,i,r),t.fillStyle=o.bg,t.fillRect(0,0,i,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const l=ey(e.candles.length,i,e.slotW,e.scrollX,a),c=ty(e.candles,l.firstIdx,l.count),u=ny(r,e.showVolume?e.volumeFraction:0,a),f=Math.max(JS,Math.floor(e.slotW*.7)),h=Math.min(e.candles.length,l.firstIdx+l.count);for(let w=l.firstIdx;w<h;w++){const b=e.candles[w];if(!b)continue;const E=Hi(w,l.firstIdx,e.slotW),I=Xn(b.open,c,u.priceY0,u.priceY1),D=Xn(b.close,c,u.priceY0,u.priceY1),C=Xn(b.high,c,u.priceY0,u.priceY1),N=Xn(b.low,c,u.priceY0,u.priceY1),S=b.close>=b.open,M=S?o.wickBull:o.wickBear,U=S?o.candleBull:o.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=U),t.strokeStyle=M,t.lineWidth=QS,t.beginPath(),t.moveTo(Math.round(E)+.5,C),t.lineTo(Math.round(E)+.5,N),t.stroke(),t.fillStyle=U;const B=Math.min(I,D),k=Math.max(1,Math.abs(D-I)),j=Math.round(E-f/2),te=Math.round(B),$=Math.round(k);if(t.fillRect(j,te,f,$),e.glow&&(t.shadowBlur=4,t.fillRect(j,te,f,$)),t.shadowBlur=0,e.showVolume&&c.maxVol>0){const q=Math.round(b.volume/c.maxVol*(u.volumeY1-u.volumeY0));q>0&&(t.fillStyle=S?o.volumeBull:o.volumeBear,t.fillRect(Math.round(E-f/2),u.volumeY1-q,f,q))}}if((m=e.overlays)!=null&&m.length)for(const w of e.overlays)ry(t,w,l,c,u,e.slotW);(g=e.markers)!=null&&g.length&&dy(t,o,e.markers,e.candles,l,c,u,e.slotW),hy(t,o,c,u,i,a),a||(py(t,o,e.candles,l,e.slotW,r),uy(t,o,e.candles,i,r)),(_=e.overlays)!=null&&_.length&&oy(t,o,e.overlays,u),e.hover&&(my(t,o,e.candles,l,c,u,e.slotW,e.hover,i),ay(t,o,e.candles,l,e.slotW,e.hover,u,((p=e.overlays)==null?void 0:p.length)??0),(d=e.markers)!=null&&d.length&&cy(t,o,e.markers,e.candles,l,c,u,e.slotW,e.hover,i)),t.restore()}function ry(n,e,t,i,r,s){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(xi,r.priceY0,999999,r.priceY1-r.priceY0),n.clip(),e.kind==="line")Po(n,e.data,t.firstIdx,o,s,i,r,e.color,e.lineWidth??1,e.dashed===!0);else{const l=Wh(e.color,e.fillAlpha??.08);sy(n,e.upper,e.lower,t.firstIdx,o,s,i,r,l),Po(n,e.upper,t.firstIdx,o,s,i,r,e.color,1,!1),Po(n,e.lower,t.firstIdx,o,s,i,r,e.color,1,!1),(a=e.middle)!=null&&a.length&&Po(n,e.middle,t.firstIdx,o,s,i,r,e.color,1,e.middleDashed!==!1)}n.restore()}function Po(n,e,t,i,r,s,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const h=e[f];if(typeof h!="number"||!isFinite(h)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const m=Hi(f,t,r),g=Xn(h,s,o.priceY0,o.priceY1);u?n.lineTo(m,g):(n.moveTo(m,g),u=!0)}u&&n.stroke(),n.setLineDash([])}function sy(n,e,t,i,r,s,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=r;f++){const h=e[f],m=t[f],g=f<r&&typeof h=="number"&&typeof m=="number"&&isFinite(h)&&isFinite(m);if(g&&!c&&(u=f,c=!0),!g&&c||f===r&&c){const _=g?f+1:f;n.beginPath();for(let p=u;p<_;p++){const d=Hi(p,i,s),w=Xn(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(d,w):n.lineTo(d,w)}for(let p=_-1;p>=u;p--){const d=Hi(p,i,s),w=Xn(t[p],o,a.priceY0,a.priceY1);n.lineTo(d,w)}n.closePath(),n.fill(),c=!1}}}function Wh(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),r=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${i},${r},${s},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function oy(n,e,t,i){const r=t.filter(_=>!!_.label);if(!r.length)return;n.save(),n.font=ki;const s=8,o=5,a=12,l=6,c=14;let u=0;for(const _ of r){const p=n.measureText(_.label).width;p>u&&(u=p)}const f=s*2+a+l+u,h=o*2+c*r.length,m=xi+4,g=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(m,g,f,h),n.textBaseline="middle",n.textAlign="left";for(let _=0;_<r.length;_++){const p=r[_],d=g+o+c*(_+.5),w=m+s;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(w,d),n.lineTo(w+a,d),n.stroke(),n.setLineDash([])):(n.fillStyle=Wh(p.color,p.fillAlpha??.2),n.fillRect(w,d-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(w+.5,d-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,w+a+l,d)}n.restore()}function ay(n,e,t,i,r,s,o,a){const l=Math.floor((s.x-xi)/r),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,h=u.open!==0?f/u.open*100:0,m=f>=0?"+":"",g=[["O",fr(u.open),void 0],["H",fr(u.high),void 0],["L",fr(u.low),void 0],["C",fr(u.close),void 0],["V",ly(u.volume),void 0],["",`${m}${h.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=ki,n.textBaseline="middle",n.textAlign="left";const _=8,p=4,d=14;let w=_;for(const[D,C]of g){const N=D?`${D} ${C}`:C,S=n.measureText(N).width+12;w+=S}w+=_-12;const b=o.priceY0+4+(a>0?p*2+14*a+4:0),E=xi+4;n.fillStyle=e.panelBg,n.fillRect(E,b,w,d+p*2);let I=E+_;for(let D=0;D<g.length;D++){const[C,N,S]=g[D];n.fillStyle=e.text,C&&(n.globalAlpha=.6,n.fillText(C+" ",I,b+p+d/2),n.globalAlpha=1,I+=n.measureText(C+" ").width),S&&(n.fillStyle=S),n.fillText(N,I,b+p+d/2),I+=n.measureText(N).width+12}n.restore()}function ly(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function cy(n,e,t,i,r,s,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),h=Math.min(i.length,r.firstIdx+r.count),m=9;let g=null;for(const N of t){let S=0,M=i.length-1,U=-1;for(;S<=M;){const j=S+M>>1,te=i[j].start-N.timestamp;if(Math.abs(te)<=f){U=j;break}te<0?S=j+1:M=j-1}if(U<0||U<r.firstIdx||U>=h)continue;const B=Hi(U,r.firstIdx,a),k=Xn(N.price,s,o.priceY0,o.priceY1);if(Math.abs(l.x-B)<=m&&Math.abs(l.y-k)<=m){g={m:N,x:B,y:k};break}}if(!g)return;const _=jc(g.m.timestamp),p=[`${g.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${_}`,`@ ${fr(g.m.price)}`];g.m.label&&p.push(g.m.label),n.save(),n.font=ki,n.textBaseline="top",n.textAlign="left";const d=6,w=14;let b=0;for(const N of p){const S=n.measureText(N).width;S>b&&(b=S)}const E=b+d*2,I=p.length*w+d*2;let D=g.x+12;D+E>c-gr&&(D=g.x-12-E);let C=g.y-I/2;C<o.priceY0&&(C=o.priceY0),C+I>o.priceY1&&(C=o.priceY1-I),n.fillStyle=e.panelBgSolid,n.strokeStyle=g.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(D,C,E,I),n.strokeRect(D+.5,C+.5,E-1,I-1);for(let N=0;N<p.length;N++){const S=p[N];n.fillStyle=N===0?g.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(S,D+d,C+d+N*w)}n.restore()}function uy(n,e,t,i,r){if(t.length<2)return;const s=t[1].start-t[0].start,o=fy(s);if(!o)return;n.save(),n.font=ki,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-gr-a,f=r-Kc+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function fy(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,r=24*i,s=7*r;return n>=s&&n%s===0?n/s+"W":n>=r&&n%r===0?n/r+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function dy(n,e,t,i,r,s,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,r.firstIdx+r.count),f=m=>{let g=0,_=i.length-1;for(;g<=_;){const p=g+_>>1,d=i[p].start-m;if(Math.abs(d)<=c)return p;d<0?g=p+1:_=p-1}return-1},h=7;for(const m of t){const g=f(m.timestamp);if(g<0||g<r.firstIdx||g>=u)continue;const _=Hi(g,r.firstIdx,a),p=Xn(m.price,s,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const d=m.color??(m.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=d,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),m.kind==="entry"?(n.moveTo(_,p-h),n.lineTo(_-h,p+h-1),n.lineTo(_+h,p+h-1)):(n.moveTo(_,p+h),n.lineTo(_-h,p-h+1),n.lineTo(_+h,p-h+1)),n.closePath(),n.fill(),n.stroke()}}function hy(n,e,t,i,r,s=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=s?Math.max(2,Math.min(4,Math.round(a/36))):6,c=iy(o,l),u=Math.ceil(t.min/c)*c,f=s?Gh:gr;n.font=s?ZS:ki,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let h=u;h<=t.max;h+=c){const m=Xn(h,t,i.priceY0,i.priceY1);m<i.priceY0||m>i.priceY1||(n.beginPath(),n.moveTo(xi,Math.round(m)+.5),n.lineTo(r-f,Math.round(m)+.5),n.stroke(),n.fillText(fr(h),r-f+3,m))}n.globalAlpha=1}function py(n,e,t,i,r,s){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=ki,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=Hi(c,i.firstIdx,r);n.fillText(jc(u.start),f,s-Kc+4)}n.globalAlpha=1}function my(n,e,t,i,r,s,o,a,l){const c=Math.floor((a.x-xi)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const h=Hi(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(h)+.5,s.priceY0),n.lineTo(Math.round(h)+.5,s.volumeY1||s.priceY1),n.stroke();const m=Math.max(s.priceY0,Math.min(s.priceY1,a.y));n.beginPath(),n.moveTo(xi,Math.round(m)+.5),n.lineTo(l-gr,Math.round(m)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const g=r.max-r.min;if(g>0){const d=r.max-(m-s.priceY0)/(s.priceY1-s.priceY0)*g,w=fr(d);n.font=ki,n.textBaseline="middle",n.textAlign="left";const b=n.measureText(w).width,E=4,I=2;n.fillStyle=e.accent,n.fillRect(l-gr+2,m-7-I,b+E*2,14+I*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(w,l-gr+2+E,m)}n.font=ki,n.textBaseline="top",n.textAlign="center";const _=jc(f.start),p=n.measureText(_).width;n.fillStyle=e.accent,n.fillRect(h-p/2-4,s.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(_,h,s.volumeY1+4),n.restore()}const ul=.25,fl=6,gy=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,vy=xr({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:KS},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=Ue(null),i=Ue(null),r={...Jt},s=Ue(0),o=Ue(0),a=Ue(0),l=Ue(1),c=Ue(null),u=nt(()=>Math.max(1,e.slotW*l.value));let f=null,h=!1,m,g,_,p,d;const w=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${Vc}

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    vec2  cc   = uv - 0.5;
    float dist = dot(cc, cc) * uStrength;
    vec2  d    = cc * (1.0 + dist) * dist;
    return uv + d;
  }

  ${Gc}

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

    ${Wc}

    gl_FragColor = color;
  }
`;function b(){if(!(!i.value||!t.value)){if(d=document.createElement("canvas"),e.flat){h=!0,E();return}try{f=new kc({canvas:i.value,antialias:!1,alpha:!0})}catch{h=!0}if(!h&&!f.getContext()&&(f.dispose(),f=null,h=!0),h){E();return}f.setPixelRatio(1),f.setClearColor(0,0),m=new Hc,g=new ga(-1,1,1,-1,0,1),p=new ls(d),p.minFilter=Tt,p.magFilter=Tt,_=new Fn({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...Xc()},vertexShader:gy,fragmentShader:w,transparent:!0}),m.add(new Mn(new Sr(2,2),_)),E()}}function E(){if(!t.value||!f&&!h)return;const fe=t.value.clientWidth,ve=t.value.clientHeight;!fe||!ve||!(d.width!==fe||d.height!==ve)||(d.width=fe,d.height=ve,s.value=fe,o.value=ve,f?(p&&(p.dispose(),p=new ls(d),p.minFilter=Tt,p.magFilter=Tt,_&&(_.uniforms.uTex.value=p)),f.setPixelRatio(window.devicePixelRatio||1),f.setSize(fe,ve)):i.value&&(i.value.width=fe,i.value.height=ve,i.value.style.width=fe+"px",i.value.style.height=ve+"px"),I())}function I(){if(!(d!=null&&d.width))return;if(h){if(!i.value)return;Gf(d,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:!1,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors});const ve=i.value.getContext("2d");ve&&(ve.clearRect(0,0,i.value.width,i.value.height),ve.drawImage(d,0,0));return}if(!f||!_||!p)return;const fe=e.theme==="paper";_.uniforms.uStrength.value=e.curvature/45*.55,_.uniforms.uScanlines.value=e.scanlines&&!fe?1:0,_.uniforms.uVignette.value=fe?0:1,Yc(_,e.magnify,r,d.width,d.height),Gf(d,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors}),p.needsUpdate=!0,f.render(m,g)}qe(()=>e.theme,()=>I()),qe(()=>e.curvature,()=>I()),qe(()=>e.scanlines,()=>I()),qe(()=>e.glow,()=>I()),qe(()=>e.showVolume,()=>I()),qe(()=>e.volumeFraction,()=>I()),qe(()=>e.slotW,()=>I()),qe(()=>e.candles,()=>I(),{deep:!1}),qe(()=>e.overlays,()=>I(),{deep:!1}),qe(()=>e.markers,()=>I(),{deep:!1}),qe(()=>e.compact,()=>I()),qe(()=>e.magnify,fe=>{fe||(r.x=Jt.x,r.y=Jt.y),I()}),qe(()=>e.colors,()=>I(),{deep:!0}),qe(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")}),qe(a,()=>I()),qe(l,()=>I()),qe(c,()=>I()),qe(u,()=>I());let D=null,C=null,N=0;const S=Ni("cathodeResetTick",Ue(0));qe(S,()=>M());function M(){cancelAnimationFrame(N),N=requestAnimationFrame(E)}function U(fe){fe.preventDefault()}function B(){f==null||f.dispose(),f=null,h=!1,b()}function k(fe){if(!i.value)return[-1,-1];const ve=i.value.getBoundingClientRect();return[fe.clientX-ve.left,fe.clientY-ve.top]}function j(fe){var O;const ve=u.value;if(ve<=0)return 0;const De=((O=e.candles)==null?void 0:O.length)??0,je=Math.max(1,Math.floor((s.value||1)/ve)),R=Math.max(0,De-je);return Math.max(0,Math.min(fe,R*ve))}function te(fe){var je;if(fe.deltaX!==0||fe.shiftKey&&fe.deltaY!==0){const R=fe.deltaX!==0?fe.deltaX:fe.deltaY;a.value=j(a.value+R);return}if(fe.deltaY===0)return;const[ve]=k(fe),De=u.value;if(ve>=0&&De>0&&((je=e.candles)!=null&&je.length)){const R=Math.max(1,Math.floor((s.value||1)/De)),T=Math.max(0,e.candles.length-R-Math.floor(a.value/De))+(ve-8)/De,de=Math.exp(-fe.deltaY*.0015),A=Math.max(ul,Math.min(fl,l.value*de));l.value=A;const P=e.slotW*A,F=Math.max(1,Math.floor((s.value||1)/P)),K=T-(ve-8)/P,Z=Math.max(0,e.candles.length-F-K);a.value=j(Z*P)}else{const R=Math.exp(-fe.deltaY*.0015);l.value=Math.max(ul,Math.min(fl,l.value*R))}}let $=!1,q=0,V=0;function le(fe){fe.button===0&&($=!0,q=fe.clientX,V=a.value,c.value=null,t.value&&t.value.focus())}function ne(fe){const ve=Math.exp(fe*.18);l.value=Math.max(ul,Math.min(fl,l.value*ve)),a.value=j(a.value)}function ge(fe){const ve=u.value,De=fe.shiftKey?20:3;switch(fe.key){case"ArrowLeft":fe.preventDefault(),a.value=j(a.value+ve*De);break;case"ArrowRight":fe.preventDefault(),a.value=j(a.value-ve*De);break;case"ArrowUp":fe.preventDefault(),ne(1);break;case"ArrowDown":fe.preventDefault(),ne(-1);break;case"Home":fe.preventDefault(),a.value=j(Number.MAX_SAFE_INTEGER);break;case"End":fe.preventDefault(),a.value=0;break}}function Te(fe){if($){const ve=fe.clientX-q;a.value=j(V+ve);return}}function Ge(){$=!1}function oe(fe){if(e.magnify&&i.value){const je=$c(fe,i.value);r.x=je.x,r.y=je.y,I()}if($)return;const[ve,De]=k(fe);if(ve<0||De<0){c.value=null;return}c.value={x:ve,y:De}}function he(){c.value=null,r.x=Jt.x,r.y=Jt.y,I()}gi(()=>{document.addEventListener("mousemove",Te),document.addEventListener("mouseup",Ge),yn(()=>{var fe;b(),i.value&&(i.value.addEventListener("webglcontextlost",U),i.value.addEventListener("webglcontextrestored",B)),t.value&&(D=new ResizeObserver(()=>E()),D.observe(t.value),C=new IntersectionObserver(ve=>{ve.some(De=>De.isIntersecting)&&M()}),C.observe(t.value)),window.addEventListener("resize",M),(fe=window.visualViewport)==null||fe.addEventListener("resize",M)})}),Gi(()=>{var fe,ve,De;document.removeEventListener("mousemove",Te),document.removeEventListener("mouseup",Ge),(fe=i.value)==null||fe.removeEventListener("webglcontextlost",U),(ve=i.value)==null||ve.removeEventListener("webglcontextrestored",B),D==null||D.disconnect(),C==null||C.disconnect(),window.removeEventListener("resize",M),(De=window.visualViewport)==null||De.removeEventListener("resize",M),cancelAnimationFrame(N),f==null||f.dispose()});const Ee=nt(()=>Jo[e.theme]??Jo.none),_e=nt(()=>({background:Ee.value.bg}));return(fe,ve)=>(ft(),Et("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:fn(_e.value),tabindex:"0",onKeydown:ge},[ze("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:Ui(te,["prevent"]),onMousedown:le,onMousemove:oe,onMouseleave:he},null,544)],36))}}),Wf=yr(vy,[["__scopeId","data-v-1752ef06"]]),_y=["disabled"],xy=xr({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=Ue(null),o=Ue(null),a=Ue(""),l=Ue([]),c=Ue(-1);let u="";function f(I){I.trim()&&(l.value.length&&l.value[l.value.length-1]===I||(l.value.push(I),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function h(I){if(!i.disabled){if(I.key==="Enter"){I.preventDefault();const D=a.value;D.trim()&&f(D),c.value=-1,a.value="",r("submit",D);return}if(I.key==="ArrowUp"){if(!l.value.length)return;I.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(I.key==="ArrowDown"){if(c.value===-1)return;I.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const m=Ue(!0);let g=null;function _(){g||(g=setInterval(()=>{m.value=!m.value},530))}function p(){g&&(clearInterval(g),g=null),m.value=!0}const d=nt(()=>{let I;return i.disabled?I=" ":i.busy?I="█":I=m.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${I}`}}),w=nt(()=>[...i.entries,d.value]);function b(){var I;i.disabled||(I=o.value)==null||I.focus()}qe(()=>i.busy,(I,D)=>{D&&!I&&!i.disabled&&yn(()=>{var C;return(C=o.value)==null?void 0:C.focus()})});function E(){var I;(I=o.value)==null||I.focus()}return e({focus:E}),gi(()=>{_(),i.disabled||requestAnimationFrame(()=>{var I;return(I=o.value)==null?void 0:I.focus()})}),Gi(()=>{p()}),(I,D)=>(ft(),Et("div",{ref_key:"wrapEl",ref:s,class:"cathode-terminal-wrap",onClick:b},[yt(hc,{entries:w.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Yt(ze("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":D[0]||(D[0]=C=>a.value=C),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:h},null,40,_y),[[ah,a.value]])],512))}}),Xf=yr(xy,[["__scopeId","data-v-90cf2990"]]),Zc=Ue(0),pc=28;let mc=10,Qo="cathode.layout",ea=!1;const Ot=Ue({});function My(n,e="cathode.layout"){if(!ea){ea=!0,Qo=e;try{const t=localStorage.getItem(Qo);if(t){Ot.value=JSON.parse(t),Yf();return}}catch{}Ot.value={...n},Yf()}}function Yf(){let n=10;for(const e of Object.values(Ot.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);mc=n}function Er(){localStorage.setItem(Qo,JSON.stringify(Ot.value))}function Sy(n){ea=!1,localStorage.removeItem(Qo),Ot.value={...n},Er(),ea=!0,Zc.value++}function Xh(n){mc++,Ot.value[n]&&(Ot.value[n].zIndex=mc)}function yy(n,e){Ot.value[n].visible=e,Er()}function Ey(n,e){Ot.value[n].minimized=e,e&&(Ot.value[n].maximized=!1),Er()}function by(n,e){Ot.value[n].maximized=e,e&&(Ot.value[n].minimized=!1,Xh(n)),Er()}function Ty(n,e,t){Ot.value[n].x=Math.round(e),Ot.value[n].y=Math.round(t),Er()}function wy(n,e,t){Ot.value[n].w=Math.round(e),Ot.value[n].h=Math.round(t),Er()}function Yh(){return{containers:Ot,TITLEBAR_H:pc,load:My,save:Er,reset:Sy,bringToFront:Xh,setVisible:yy,setMinimized:Ey,setMaximized:by,updatePos:Ty,updateSize:wy}}const Ay={class:"ws-toolbar"},Cy={key:0,class:"ws-restore-menu"},Ry={key:0,class:"ws-restore-empty"},Py=["onClick"],Dy=xr({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:r,setVisible:s}=Yh(),o=Ue(null);vl("cathodeWorkspace",o),vl("cathodeResetTick",Zc),gi(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:d}=o.value,w=e.initialLayout??{};i(w,e.storageKey??"cathode.layout");const b=Object.keys(t.value)[0];b&&a(b)});function a(p){var w;document.querySelectorAll(".cc").forEach(b=>b.classList.remove("cc-focused"));const d=(w=o.value)==null?void 0:w.querySelector(`#cc-${p}`);d&&d.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||r(e.initialLayout)}function c(p){const d=p.target.closest(".cc");d&&(document.querySelectorAll(".cc").forEach(w=>w.classList.remove("cc-focused")),d.classList.add("cc-focused"))}const u=Ue(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function h(p){s(p,!0),u.value=!1}function m(p){if(!u.value)return;const d=p.target;!d.closest(".ws-restore-menu")&&!d.closest(".ws-btn-restore")&&(u.value=!1)}function g(p){p.key==="Escape"&&(u.value=!1)}gi(()=>{document.addEventListener("click",m),document.addEventListener("keydown",g)}),Gi(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",g)});function _(p){var d;return((d=e.containerTitles)==null?void 0:d[p])??p}return(p,d)=>(ft(),Et("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[xl(p.$slots,"default",{},void 0),xl(p.$slots,"overlay",{},void 0),ze("div",Ay,[n.initialLayout?(ft(),Et("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):jt("",!0),d[1]||(d[1]=ze("div",{class:"ws-sep"},null,-1)),ze("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:d[0]||(d[0]=w=>u.value=!u.value)}," ⊞ Restore Panel ")]),yt($m,{name:"menu"},{default:rr(()=>[u.value?(ft(),Et("div",Cy,[d[3]||(d[3]=ze("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?jt("",!0):(ft(),Et("div",Ry," No closed panels ")),(ft(!0),Et(Kt,null,tm(f(),w=>(ft(),Et("div",{key:w,class:"ws-restore-item",onClick:b=>h(w)},[d[2]||(d[2]=ze("span",{class:"ws-restore-icon"},"⊞",-1)),Di(" "+xn(_(w)),1)],8,Py))),128))])):jt("",!0)]),_:1})],544))}}),Ly=yr(Dy,[["__scopeId","data-v-5838d04b"]]),Iy=["id"],Uy={class:"cc-title"},Ny={key:0,class:"cc-size-badge"},Fy={class:"cc-controls"},Oy=["title"],By={class:"cc-body"},zy=200,ky=80,$f=60,Hy=xr({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:r,setMinimized:s,setMaximized:o,updatePos:a,updateSize:l}=Yh(),c=Ni("cathodeWorkspace",Ue(null)),u=nt(()=>t.value[e.id]),f=nt(()=>{const ne=u.value,ge=e.curvature??0;if(!ne)return{};const Te={"--curvature":ge};return ne.maximized?{...Te,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:ne.zIndex}:{...Te,left:ne.x+"px",top:ne.y+"px",width:ne.w+"px",height:ne.minimized?pc+"px":ne.h+"px",zIndex:ne.zIndex,display:ne.visible?"flex":"none"}});let h=!1,m=0,g=0;function _(ne){var Ge;if(ne.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),h=!0;const ge=(Ge=c.value)==null?void 0:Ge.querySelector(`#cc-${e.id}`);if(!ge)return;const Te=ge.getBoundingClientRect();m=ne.clientX-Te.left,g=ne.clientY-Te.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),ne.preventDefault()}function p(ne){var he;if(!h||!c.value)return;const ge=c.value.getBoundingClientRect(),Te=((he=u.value)==null?void 0:he.w)??300;let Ge=ne.clientX-ge.left-m,oe=ne.clientY-ge.top-g;Ge=Math.max($f-Te,Math.min(ge.width-$f,Ge)),oe=Math.max(0,Math.min(ge.height-pc,oe)),a(e.id,Ge,oe)}function d(){h=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d)}let w=!1,b=0,E=0,I=0,D=0;const C=Ue("");function N(ne){u.value.maximized||(i(e.id),w=!0,b=ne.clientX,E=ne.clientY,I=u.value.w,D=u.value.h,document.addEventListener("mousemove",S),document.addEventListener("mouseup",M),ne.preventDefault(),ne.stopPropagation())}function S(ne){if(!w)return;const ge=Math.max(zy,I+(ne.clientX-b)),Te=Math.max(ky,D+(ne.clientY-E));l(e.id,ge,Te),C.value=`${Math.round(ge)}×${Math.round(Te)}`}function M(){w=!1,C.value="",document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",M),U.value++}const U=Ue(0);qe(Zc,()=>{U.value++}),Gi(()=>{var ne;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",M),(ne=B.value)==null||ne.removeEventListener("scroll",j),te()});const B=Ue(null);function k(ne){if(e.canvas)return[];const ge=ne.children[0];return ge?Array.from(ge.children):[]}function j(){const ne=B.value,ge=e.curvature??0;if(!ne)return;const Te=k(ne);if(!Te.length)return;const Ge=ne.clientHeight,oe=Ge/2,he=ge*.0038;Te.forEach(Ee=>{if(!Ee.dataset.origFs){const de=getComputedStyle(Ee);Ee.dataset.origFs=de.fontSize,Ee.dataset.origLh=de.lineHeight}if(ge===0){Ee.style.fontSize="",Ee.style.lineHeight="";return}const _e=Ee.getBoundingClientRect(),fe=ne.getBoundingClientRect(),ve=_e.top-fe.top+_e.height/2,De=Math.min(1,Math.abs(ve-oe)/(Ge/2)),je=1+he*Math.cos(De*Math.PI/2),R=parseFloat(Ee.dataset.origFs),O=Ee.dataset.origLh,T=O==="normal"?R*1.4:parseFloat(O);isNaN(R)||(Ee.style.fontSize=`${(R*je).toFixed(2)}px`),isNaN(T)||(Ee.style.lineHeight=`${(T*je).toFixed(2)}px`)})}function te(){const ne=B.value;ne&&k(ne).forEach(ge=>{ge.style.fontSize="",ge.style.lineHeight="",delete ge.dataset.origFs,delete ge.dataset.origLh})}qe(()=>e.curvature,ne=>{(ne??0)===0?te():j()}),gi(()=>{var ne;(ne=B.value)==null||ne.addEventListener("scroll",j,{passive:!0}),yn(j)});function $(){s(e.id,!u.value.minimized),yn(()=>{U.value++})}function q(){o(e.id,!u.value.maximized),yn(()=>{U.value++})}function V(){r(e.id,!1)}function le(){i(e.id)}return(ne,ge)=>u.value&&u.value.visible?(ft(),Et("div",{key:0,id:`cc-${n.id}`,class:un(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:fn(f.value),onMousedown:le},[ze("div",{class:"cc-titlebar",onMousedown:_},[ge[0]||(ge[0]=ze("span",{class:"cc-status-dot"},null,-1)),ze("span",Uy,xn(n.title),1),C.value?(ft(),Et("span",Ny,xn(C.value),1)):jt("",!0),ze("div",Fy,[ze("button",{class:"cc-btn",title:"Minimize",onClick:Ui($,["stop"])},"─"),ze("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:Ui(q,["stop"])},xn(u.value.maximized?"⤡":"⤢"),9,Oy),ze("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:Ui(V,["stop"])},"✕")])],32),Yt(ze("div",By,[ze("div",{ref_key:"bodyEl",ref:B,class:"cc-screen",onScroll:j},[xl(ne.$slots,"default",{resizeKey:U.value},void 0),ge[1]||(ge[1]=ze("div",{class:"cc-shine"},null,-1))],544)],512),[[Vr,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(ft(),Et("div",{key:0,class:"cc-resize",onMousedown:Ui(N,["stop"])},null,32)):jt("",!0)],46,Iy)):jt("",!0)}}),Do=yr(Hy,[["__scopeId","data-v-d8a49f79"]]),Vy={class:"demo-bar"},Gy={class:"demo-tabs"},Wy={key:0},Xy={key:1},Yy={key:2},$y={key:3},qy={class:"demo-btns"},Ky=["value"],jy={class:"tab-content"},Zy={class:"tab-content"},Jy={class:"tab-content"},Qy={class:"tab-content"},eE=xr({__name:"App",setup(n){const e=Ue("workspace"),t=Ue("none"),i=nt(()=>t.value!=="paper"),r=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],s=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(A,P){return+(Math.random()*(P-A)+A).toFixed(4)}function l(A){return A[Math.floor(Math.random()*A.length)]}function c(A){return A.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],h=["NY","London","Tokyo","AH"],m=Array.from({length:240},(A,P)=>{const F=P%s.length,K=s[F],Z=o[F],x=l(r),v=u-Math.floor(Math.random()*30*24*36e5),L=Math.random()<.15,X=a(10,3e3),J=a(-8,22),Q=+(J-.12).toFixed(4),pe=+(X*a(.2,2)).toFixed(2),z=L?null:v+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(v)),entry_timestamp:c(new Date(v)),exit_timestamp:z?c(new Date(z)):"",product:K,strategy:x,exchange:Z,status:L?"open":"closed",entry_price:X.toFixed(4),exit_price:L?"":a(X*.92,X*1.25).toFixed(4),pnl_pct:J.toFixed(4),net_pnl_pct:Q.toFixed(4),size_base:a(.001,2).toFixed(6),notional:pe.toFixed(2),reason:L?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(h)}}),g=A=>P=>P.value!==""&&P.value!=null&&!isNaN(Number(P.value))?Number(P.value).toFixed(A):"",_=A=>A.value!==""&&A.value!=null&&!isNaN(Number(A.value))?Number(A.value).toFixed(2)+"%":"—",p={textAlign:"right"};function d(A){var v,L;const P=(v=A.data)==null?void 0:v.entry_timestamp,F=(L=A.data)==null?void 0:L.exit_timestamp;if(!P||!F)return"—";const K=new Date(F).getTime()-new Date(P).getTime();if(K<0)return"—";const Z=Math.floor(K/36e5),x=Math.floor(K%36e5/6e4);return Z>0?`${Z}h ${x}m`:`${x}m`}const w=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:A=>A.data.entry_timestamp||A.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:A=>A.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:d,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:A=>A.data.status??"closed",cellStyle:A=>({color:A.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:A=>`${A} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:g(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:g(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:g(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:g(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:A=>Number(A).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:_,cellStyle:A=>({...p,color:Number(A.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:A=>`${Number(A).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:_,cellStyle:A=>({...p,color:Number(A.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:A=>`${Number(A).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:_,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:g(1),cellStyle:A=>({...p,color:Number(A.value)>65?"#e74c3c":Number(A.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:A=>Number(A).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:A=>(Number(A.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:A=>Number(A).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:A=>`${Number(A).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:A=>`${Number(A).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:A=>`${Number(A).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:A=>Number(A).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],b={resizable:!0,sortable:!0},E=Ue(null),I=Ue(25),D=Ue(!0),C=Ue(!1),N=Ue(!0),S=Ue(""),M=Ue("all"),U=Ue(0),B=Ue(!0),k=Ue(!1),j=Ue(!1);qe(e,A=>{A==="grid"&&U.value++});function te(A){E.value=A.api,A.api.setGridOption("rowData",m),M.value!=="all"&&q(M.value)}function $(A){var F;const P=A.target.value;S.value=P,(F=E.value)==null||F.setGridOption("quickFilterText",P)}function q(A){var P,F,K;M.value=A,A==="all"?(P=E.value)==null||P.setFilterModel(null):(F=E.value)==null||F.setFilterModel({status:{type:"equals",filter:A}}),(K=E.value)==null||K.onFilterChanged()}const V={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function le(A,P){const K=Math.round(A*.62)-12,Z=K+12*2,x=A-Z-12,v=Math.round(P*.62),L=v+12*2,X=P-L-12;return{trades:{x:12,y:12,w:K,h:v,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:Z,y:12,w:x,h:v,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:L,w:K,h:X,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:Z,y:L,w:x,h:X,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const ne=le(window.innerWidth,window.innerHeight-88),ge=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const A=[],P=Date.now()-45e5;for(let F=0;F<140;F++){const K=ge[F%ge.length];A.push({ts:P+F*32e3,text:K.text,level:K.level})}return A})();const Te=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],Ge=Ue([]),oe=Ue([{level:"info",text:"CathodeTerminal demo"},{level:"debug",text:"type 'help' to list available commands"}]),he=Ue(!1),Ee={help:()=>[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],echo:A=>({level:"info",text:A||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:A=>{const P=A.trim();return P?P==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:P==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${P}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:A=>{const P=A.trim()||"localhost",F=[{level:"info",text:`PING ${P}: 56 data bytes`}];for(let K=0;K<4;K++){const Z=(12+Math.random()*18).toFixed(1);F.push({level:"success",text:`64 bytes from ${P}: icmp_seq=${K} ttl=64 time=${Z} ms`})}return F},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:A=>{const P=A.trim()||"moo",F="─".repeat(Math.max(2,P.length+2));return[{level:"info",text:` ╭${F}╮`},{level:"info",text:` │ ${P} │`},{level:"info",text:` ╰${F}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const A=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:A[Math.floor(Math.random()*A.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function _e(A){oe.value=[...oe.value,{level:"info",text:`→ ${A}`}];const P=A.trim();if(!P)return;if(P==="clear"){oe.value=[];return}const F=P.indexOf(" "),K=F===-1?P:P.slice(0,F),Z=F===-1?"":P.slice(F+1),x=Ee[K];let v;x?v=x(Z):v={level:"warn",text:`unknown command: ${K} — type 'help' for the demo vocabulary`},he.value=!0,setTimeout(()=>{if(v!==null){const L=Array.isArray(v)?v:[v];oe.value=[...oe.value,...L]}he.value=!1},180)}function fe(A){const P=[];let F=6e4;const K=Date.now()-A*36e5;for(let Z=0;Z<A;Z++){const x=(Math.random()-.495)*F*.012,v=F,L=Math.max(1,F+x),X=Math.max(v,L)*(1+Math.random()*.005),J=Math.min(v,L)*(1-Math.random()*.005),Q=Math.round(20+Math.random()*80);P.push({start:K+Z*36e5,open:v,close:L,high:X,low:J,volume:Q}),F=L}return P}const ve=Ue(fe(300));function De(A,P){const F=new Array(A.length).fill(NaN);let K=0;for(let Z=0;Z<A.length;Z++)K+=A[Z],Z>=P&&(K-=A[Z-P]),Z+1>=P&&(F[Z]=K/P);return F}function je(A,P){const F=new Array(A.length).fill(NaN);if(!A.length)return F;const K=2/(P+1);let Z=A[0];F[0]=Z;for(let x=1;x<A.length;x++)Z=A[x]*K+Z*(1-K),F[x]=Z;for(let x=0;x<Math.min(P-1,A.length);x++)F[x]=NaN;return F}function R(A,P=20,F=2){const K=De(A,P),Z=new Array(A.length).fill(NaN),x=new Array(A.length).fill(NaN);for(let v=P-1;v<A.length;v++){let L=0;for(let J=v-P+1;J<=v;J++){const Q=A[J]-K[v];L+=Q*Q}const X=Math.sqrt(L/P);Z[v]=K[v]+F*X,x[v]=K[v]-F*X}return{upper:Z,middle:K,lower:x}}const O=nt(()=>{const A=ve.value.map(F=>F.close),P=R(A,20,2);return[{kind:"band",upper:P.upper,middle:P.middle,lower:P.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:je(A,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:je(A,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),T=nt(()=>{const A=ve.value;if(A.length<130)return[];const P=F=>A[F];return[{timestamp:P(A.length-120).start,price:P(A.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:P(A.length-100).start,price:P(A.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:P(A.length-80).start,price:P(A.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:P(A.length-60).start,price:P(A.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:P(A.length-40).start,price:P(A.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:P(A.length-20).start,price:P(A.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const A=ve.value,P=T.value;if(!A.length||!P.length)return[];const F=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!F)return[];const K=F.width/(window.devicePixelRatio||1),Z=F.height/(window.devicePixelRatio||1),x=8,v=56,L=8,X=22,J=8,Q=K-x-v,pe=Math.max(1,Math.floor(Q/J)),z=Math.max(0,A.length-pe);let ie=1/0,Se=-1/0;for(let Me=z;Me<A.length;Me++)A[Me].low<ie&&(ie=A[Me].low),A[Me].high>Se&&(Se=A[Me].high);const ue=(Se-ie)*.04;ie-=ue,Se+=ue;const be=L,Ne=L+(Z-L-X-4)*(1-.18),Be=[];for(const Me of P){const Xe=A[1].start-A[0].start;let $e=-1;for(let we=0;we<A.length;we++)if(Math.abs(A[we].start-Me.timestamp)<=Xe*.5){$e=we;break}if($e<z||$e>=A.length)continue;const it=x+($e-z+.5)*J,G=be+(1-(Me.price-ie)/(Se-ie))*(Ne-be);Be.push({x:it,y:G,kind:Me.kind,label:Me.label||""})}return Be}});function de(){const A=[],P=Date.now()-54e5;for(let F=0;F<320;F++){const K=Te[F%Te.length];A.push({ts:P+F*16e3,text:K.text,level:K.level})}Ge.value=A}return de(),(A,P)=>(ft(),Et("div",{class:un(["demo-shell",{"cathode-light":!i.value}])},[ze("div",Vy,[P[23]||(P[23]=ze("span",{class:"demo-title"},"⬛ CATHODE",-1)),ze("div",Gy,[ze("button",{class:un(["tab-btn",{active:e.value==="workspace"}]),onClick:P[0]||(P[0]=F=>e.value="workspace")}," Workspace ",2),ze("button",{class:un(["tab-btn",{active:e.value==="grid"}]),onClick:P[1]||(P[1]=F=>e.value="grid")}," Grid ",2),ze("button",{class:un(["tab-btn",{active:e.value==="log"}]),onClick:P[2]||(P[2]=F=>e.value="log")}," Log ",2),ze("button",{class:un(["tab-btn",{active:e.value==="candle"}]),onClick:P[3]||(P[3]=F=>e.value="candle")}," Candle ",2),ze("button",{class:un(["tab-btn",{active:e.value==="terminal"}]),onClick:P[4]||(P[4]=F=>e.value="terminal")}," Terminal ",2)]),P[24]||(P[24]=ze("label",null,"Theme",-1)),Yt(ze("select",{"onUpdate:modelValue":P[5]||(P[5]=F=>t.value=F)},[...P[16]||(P[16]=[ze("option",{value:"none"},"Default (dark)",-1),ze("option",{value:"phosphor"},"Phosphor Green",-1),ze("option",{value:"amber"},"Amber",-1),ze("option",{value:"paper"},"Paper (light)",-1)])],512),[[pg,t.value]]),ze("label",null,"Curve "+xn(I.value),1),Yt(ze("input",{type:"range",min:"0",max:"45",step:"1","onUpdate:modelValue":P[6]||(P[6]=F=>I.value=F),style:{width:"110px"}},null,512),[[ah,I.value,void 0,{number:!0}]]),ze("label",null,[Yt(ze("input",{type:"checkbox","onUpdate:modelValue":P[7]||(P[7]=F=>D.value=F)},null,512),[[wr,D.value]]),P[17]||(P[17]=Di(" Scanlines",-1))]),ze("label",null,[Yt(ze("input",{type:"checkbox","onUpdate:modelValue":P[8]||(P[8]=F=>N.value=F)},null,512),[[wr,N.value]]),P[18]||(P[18]=Di(" Glow",-1))]),e.value!=="terminal"?(ft(),Et("label",Wy,[Yt(ze("input",{type:"checkbox","onUpdate:modelValue":P[9]||(P[9]=F=>C.value=F),"data-testid":"cf-magnify"},null,512),[[wr,C.value]]),P[19]||(P[19]=Di(" Magnify ",-1))])):jt("",!0),e.value==="candle"?(ft(),Et("label",Xy,[Yt(ze("input",{type:"checkbox","onUpdate:modelValue":P[10]||(P[10]=F=>B.value=F),"data-testid":"cf-show-indicators"},null,512),[[wr,B.value]]),P[20]||(P[20]=Di(" Indicators ",-1))])):jt("",!0),e.value==="candle"?(ft(),Et("label",Yy,[Yt(ze("input",{type:"checkbox","onUpdate:modelValue":P[11]||(P[11]=F=>k.value=F),"data-testid":"cf-flat"},null,512),[[wr,k.value]]),P[21]||(P[21]=Di(" Flat (no GL) ",-1))])):jt("",!0),e.value==="candle"?(ft(),Et("label",$y,[Yt(ze("input",{type:"checkbox","onUpdate:modelValue":P[12]||(P[12]=F=>j.value=F),"data-testid":"cf-compact"},null,512),[[wr,j.value]]),P[22]||(P[22]=Di(" Compact ",-1))])):jt("",!0),P[25]||(P[25]=ze("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(ft(),Et(Kt,{key:4},[ze("div",qy,[ze("button",{class:un({active:M.value==="all"}),onClick:P[13]||(P[13]=F=>q("all"))},"All",2),ze("button",{class:un({active:M.value==="open"}),onClick:P[14]||(P[14]=F=>q("open"))},"Open",2),ze("button",{class:un({active:M.value==="closed"}),onClick:P[15]||(P[15]=F=>q("closed"))},"Closed",2)]),ze("input",{class:"demo-filter",placeholder:"Quick filter…",value:S.value,onInput:$},null,40,Ky)],64)):jt("",!0)]),Yt(ze("div",jy,[(ft(),lr(kf,{key:U.value,"column-defs":w,"default-col-def":b,"row-height":28,theme:t.value,curvature:I.value,scanlines:D.value,glow:N.value,magnify:C.value,pagination:!0,"pagination-page-size":50,onGridReady:te},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[Vr,e.value==="grid"]]),Yt(ze("div",Zy,[yt(hc,{entries:Ge.value,theme:t.value,curvature:I.value,scanlines:D.value,glow:N.value,magnify:C.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"])],512),[[Vr,e.value==="log"]]),Yt(ze("div",Jy,[(ft(),lr(Wf,{key:`cf-${k.value}`,candles:ve.value,overlays:B.value?O.value:[],markers:B.value?T.value:[],theme:t.value,curvature:I.value,scanlines:D.value,glow:N.value,flat:k.value,compact:j.value,magnify:C.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[Vr,e.value==="candle"]]),Yt(ze("div",Qy,[yt(Xf,{entries:oe.value,theme:t.value,curvature:I.value,scanlines:D.value,glow:N.value,busy:he.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:_e},null,8,["entries","theme","curvature","scanlines","glow","busy"])],512),[[Vr,e.value==="terminal"]]),Yt(yt(Ly,{"storage-key":"cathode.demo.layout","initial-layout":vd(ne),"container-titles":V},{default:rr(()=>[yt(Do,{id:"trades",title:"Trades",curvature:I.value,canvas:""},{default:rr(({resizeKey:F})=>[(ft(),lr(kf,{key:F,"column-defs":w,"default-col-def":b,"row-height":26,theme:t.value,curvature:I.value,scanlines:D.value,glow:N.value,magnify:C.value,pagination:!0,"pagination-page-size":50,onGridReady:te},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),yt(Do,{id:"chart",title:"Chart",curvature:I.value,canvas:""},{default:rr(({resizeKey:F})=>[(ft(),lr(Wf,{key:F,candles:ve.value,overlays:O.value,markers:T.value,theme:t.value,curvature:I.value,scanlines:D.value,glow:N.value,magnify:C.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),yt(Do,{id:"log",title:"Log",curvature:I.value,canvas:""},{default:rr(()=>[yt(hc,{entries:Ge.value,theme:t.value,curvature:I.value,scanlines:D.value,glow:N.value,magnify:C.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"])]),_:1},8,["curvature"]),yt(Do,{id:"terminal",title:"Terminal",curvature:I.value,canvas:""},{default:rr(()=>[yt(Xf,{entries:oe.value,theme:t.value,curvature:I.value,scanlines:D.value,glow:N.value,busy:he.value,prompt:"→ ",onSubmit:_e},null,8,["entries","theme","curvature","scanlines","glow","busy"])]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[Vr,e.value==="workspace"]])],2))}}),tE=yr(eE,[["__scopeId","data-v-fb5107d2"]]);Sg(tE).mount("#app");
