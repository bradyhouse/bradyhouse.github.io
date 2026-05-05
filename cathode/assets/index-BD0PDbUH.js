(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const vt={},$r=[],qn=()=>{},Kf=()=>!1,ia=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ra=n=>n.startsWith("onUpdate:"),Dt=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qh=Object.prototype.hasOwnProperty,ft=(n,e)=>qh.call(n,e),$e=Array.isArray,qr=n=>Ks(n)==="[object Map]",us=n=>Ks(n)==="[object Set]",eu=n=>Ks(n)==="[object Date]",Je=n=>typeof n=="function",At=n=>typeof n=="string",Nn=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",jf=n=>(ht(n)||Je(n))&&Je(n.then)&&Je(n.catch),Zf=Object.prototype.toString,Ks=n=>Zf.call(n),Kh=n=>Ks(n).slice(8,-1),Jf=n=>Ks(n)==="[object Object]",Sc=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ds=xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},jh=/-\w/g,Dn=sa(n=>n.replace(jh,e=>e.slice(1).toUpperCase())),Zh=/\B([A-Z])/g,Xi=sa(n=>n.replace(Zh,"-$1").toLowerCase()),Qf=sa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sa=sa(n=>n?`on${Qf(n)}`:""),Yn=(n,e)=>!Object.is(n,e),Uo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ed=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},oa=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Jh=n=>{const e=At(n)?Number(n):NaN;return isNaN(e)?n:e};let tu;const aa=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function on(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=At(i)?np(i):on(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(n)||ht(n))return n}const Qh=/;(?![^(]*\))/g,ep=/:([^]+)/,tp=/\/\*[^]*?\*\//g;function np(n){const e={};return n.replace(tp,"").split(Qh).forEach(t=>{if(t){const i=t.split(ep);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function dn(n){let e="";if(At(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=dn(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rp=xc(ip);function td(n){return!!n||n===""}function sp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=fs(n[i],e[i]);return t}function fs(n,e){if(n===e)return!0;let t=eu(n),i=eu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Nn(n),i=Nn(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?sp(n,e):!1;if(t=ht(n),i=ht(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!fs(n[o],e[o]))return!1}}return String(n)===String(e)}function yc(n,e){return n.findIndex(t=>fs(t,e))}const nd=n=>!!(n&&n.__v_isRef===!0),Sn=n=>At(n)?n:n==null?"":$e(n)||ht(n)&&(n.toString===Zf||!Je(n.toString))?nd(n)?Sn(n.value):JSON.stringify(n,id,2):String(n),id=(n,e)=>nd(e)?id(n,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[ya(i,s)+" =>"]=r,t),{})}:us(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ya(t))}:Nn(e)?ya(e):ht(e)&&!$e(e)&&!Jf(e)?String(e):e,ya=(n,e="")=>{var t;return Nn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class op{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){++this._on===1&&(this.prevScope=sn,sn=this)}off(){this._on>0&&--this._on===0&&(sn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ap(){return sn}let xt;const Ea=new WeakSet;class rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,sn&&sn.active&&sn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nu(this),ad(this);const e=xt,t=In;xt=this,In=!0;try{return this.fn()}finally{ld(this),xt=e,In=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tc(e);this.deps=this.depsTail=void 0,nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ml(this)&&this.run()}get dirty(){return ml(this)}}let sd=0,Is,Us;function od(n,e=!1){if(n.flags|=8,e){n.next=Us,Us=n;return}n.next=Is,Is=n}function Ec(){sd++}function bc(){if(--sd>0)return;if(Us){let e=Us;for(Us=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Is;){let e=Is;for(Is=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ad(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ld(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Tc(i),lp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ml(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function cd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ks)||(n.globalVersion=ks,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ml(n))))return;n.flags|=2;const e=n.dep,t=xt,i=In;xt=n,In=!0;try{ad(n);const r=n.fn(n._value);(e.version===0||Yn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{xt=t,In=i,ld(n),n.flags&=-3}}function Tc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Tc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function lp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let In=!0;const ud=[];function vi(){ud.push(In),In=!1}function _i(){const n=ud.pop();In=n===void 0?!0:n}function nu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=xt;xt=void 0;try{e()}finally{xt=t}}}let ks=0;class cp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!In||xt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==xt)t=this.activeLink=new cp(xt,this),xt.deps?(t.prevDep=xt.depsTail,xt.depsTail.nextDep=t,xt.depsTail=t):xt.deps=xt.depsTail=t,fd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=xt.depsTail,t.nextDep=void 0,xt.depsTail.nextDep=t,xt.depsTail=t,xt.deps===t&&(xt.deps=i)}return t}trigger(e){this.version++,ks++,this.notify(e)}notify(e){Ec();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bc()}}}function fd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)fd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const gl=new WeakMap,vr=Symbol(""),vl=Symbol(""),zs=Symbol("");function Vt(n,e,t){if(In&&xt){let i=gl.get(n);i||gl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new wc),r.map=i,r.key=t),r.track()}}function ui(n,e,t,i,r,s){const o=gl.get(n);if(!o){ks++;return}const a=l=>{l&&l.trigger()};if(Ec(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&Sc(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===zs||!Nn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(zs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(vr)),qr(n)&&a(o.get(vl)));break;case"delete":l||(a(o.get(vr)),qr(n)&&a(o.get(vl)));break;case"set":qr(n)&&a(o.get(vr));break}}bc()}function Cr(n){const e=lt(n);return e===n?e:(Vt(e,"iterate",zs),yn(n)?e:e.map(Fn))}function la(n){return Vt(n=lt(n),"iterate",zs),n}function Gn(n,e){return xi(n)?ns(_r(n)?Fn(e):e):Fn(e)}const up={__proto__:null,[Symbol.iterator](){return ba(this,Symbol.iterator,n=>Gn(this,n))},concat(...n){return Cr(this).concat(...n.map(e=>$e(e)?Cr(e):e))},entries(){return ba(this,"entries",n=>(n[1]=Gn(this,n[1]),n))},every(n,e){return Qn(this,"every",n,e,void 0,arguments)},filter(n,e){return Qn(this,"filter",n,e,t=>t.map(i=>Gn(this,i)),arguments)},find(n,e){return Qn(this,"find",n,e,t=>Gn(this,t),arguments)},findIndex(n,e){return Qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Qn(this,"findLast",n,e,t=>Gn(this,t),arguments)},findLastIndex(n,e){return Qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ta(this,"includes",n)},indexOf(...n){return Ta(this,"indexOf",n)},join(n){return Cr(this).join(n)},lastIndexOf(...n){return Ta(this,"lastIndexOf",n)},map(n,e){return Qn(this,"map",n,e,void 0,arguments)},pop(){return xs(this,"pop")},push(...n){return xs(this,"push",n)},reduce(n,...e){return iu(this,"reduce",n,e)},reduceRight(n,...e){return iu(this,"reduceRight",n,e)},shift(){return xs(this,"shift")},some(n,e){return Qn(this,"some",n,e,void 0,arguments)},splice(...n){return xs(this,"splice",n)},toReversed(){return Cr(this).toReversed()},toSorted(n){return Cr(this).toSorted(n)},toSpliced(...n){return Cr(this).toSpliced(...n)},unshift(...n){return xs(this,"unshift",n)},values(){return ba(this,"values",n=>Gn(this,n))}};function ba(n,e,t){const i=la(n),r=i[e]();return i!==n&&!yn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const fp=Array.prototype;function Qn(n,e,t,i,r,s){const o=la(n),a=o!==n&&!yn(n),l=o[e];if(l!==fp[e]){const f=l.apply(n,s);return a?Fn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Gn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function iu(n,e,t,i){const r=la(n),s=r!==n&&!yn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Gn(n,c)),t.call(this,c,Gn(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?Gn(n,l):l}function Ta(n,e,t){const i=lt(n);Vt(i,"iterate",zs);const r=i[e](...t);return(r===-1||r===!1)&&Rc(t[0])?(t[0]=lt(t[0]),i[e](...t)):r}function xs(n,e,t=[]){vi(),Ec();const i=lt(n)[e].apply(n,t);return bc(),_i(),i}const dp=xc("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Nn));function hp(n){Nn(n)||(n=String(n));const e=lt(this);return Vt(e,"has",n),e.hasOwnProperty(n)}class hd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ep:vd:s?gd:md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!r){let l;if(o&&(l=up[t]))return l;if(t==="hasOwnProperty")return hp}const a=Reflect.get(e,t,Xt(e)?e:i);if((Nn(t)?dd.has(t):dp(t))||(r||Vt(e,"get",t),s))return a;if(Xt(a)){const l=o&&Sc(t)?a:a.value;return r&&ht(l)?xl(l):l}return ht(a)?r?xl(a):Kr(a):a}}class pd extends hd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=$e(e)&&Sc(t);if(!this._isShallow){const c=xi(s);if(!yn(i)&&!xi(i)&&(s=lt(s),i=lt(i)),!o&&Xt(s)&&!Xt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:ft(e,t),l=Reflect.set(e,t,i,Xt(e)?e:r);return e===lt(r)&&(a?Yn(i,s)&&ui(e,"set",t,i):ui(e,"add",t,i)),l}deleteProperty(e,t){const i=ft(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ui(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Nn(t)||!dd.has(t))&&Vt(e,"has",t),i}ownKeys(e){return Vt(e,"iterate",$e(e)?"length":vr),Reflect.ownKeys(e)}}class pp extends hd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mp=new pd,gp=new pp,vp=new pd(!0);const _l=n=>n,oo=n=>Reflect.getPrototypeOf(n);function _p(n,e,t){return function(...i){const r=this.__v_raw,s=lt(r),o=qr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?_l:e?ns:Fn;return!e&&Vt(s,"iterate",l?vl:vr),Dt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function ao(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function xp(n,e){const t={get(r){const s=this.__v_raw,o=lt(s),a=lt(r);n||(Yn(r,a)&&Vt(o,"get",r),Vt(o,"get",a));const{has:l}=oo(o),c=e?_l:n?ns:Fn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Vt(lt(r),"iterate",vr),r.size},has(r){const s=this.__v_raw,o=lt(s),a=lt(r);return n||(Yn(r,a)&&Vt(o,"has",r),Vt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=lt(a),c=e?_l:n?ns:Fn;return!n&&Vt(l,"iterate",vr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Dt(t,n?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(r){const s=lt(this),o=oo(s),a=lt(r),l=!e&&!yn(r)&&!xi(r)?a:r;return o.has.call(s,l)||Yn(r,l)&&o.has.call(s,r)||Yn(a,l)&&o.has.call(s,a)||(s.add(l),ui(s,"add",l,l)),this},set(r,s){!e&&!yn(s)&&!xi(s)&&(s=lt(s));const o=lt(this),{has:a,get:l}=oo(o);let c=a.call(o,r);c||(r=lt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Yn(s,u)&&ui(o,"set",r,s):ui(o,"add",r,s),this},delete(r){const s=lt(this),{has:o,get:a}=oo(s);let l=o.call(s,r);l||(r=lt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ui(s,"delete",r,void 0),c},clear(){const r=lt(this),s=r.size!==0,o=r.clear();return s&&ui(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_p(r,n,e)}),t}function Ac(n,e){const t=xp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ft(t,r)&&r in i?t:i,r,s)}const Mp={get:Ac(!1,!1)},Sp={get:Ac(!1,!0)},yp={get:Ac(!0,!1)};const md=new WeakMap,gd=new WeakMap,vd=new WeakMap,Ep=new WeakMap;function bp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tp(n){return n.__v_skip||!Object.isExtensible(n)?0:bp(Kh(n))}function Kr(n){return xi(n)?n:Cc(n,!1,mp,Mp,md)}function wp(n){return Cc(n,!1,vp,Sp,gd)}function xl(n){return Cc(n,!0,gp,yp,vd)}function Cc(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Tp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function _r(n){return xi(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function xi(n){return!!(n&&n.__v_isReadonly)}function yn(n){return!!(n&&n.__v_isShallow)}function Rc(n){return n?!!n.__v_raw:!1}function lt(n){const e=n&&n.__v_raw;return e?lt(e):n}function Ap(n){return!ft(n,"__v_skip")&&Object.isExtensible(n)&&ed(n,"__v_skip",!0),n}const Fn=n=>ht(n)?Kr(n):n,ns=n=>ht(n)?xl(n):n;function Xt(n){return n?n.__v_isRef===!0:!1}function Ie(n){return Cp(n,!1)}function Cp(n,e){return Xt(n)?n:new Rp(n,e)}class Rp{constructor(e,t){this.dep=new wc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:lt(e),this._value=t?e:Fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||yn(e)||xi(e);e=i?e:lt(e),Yn(e,t)&&(this._rawValue=e,this._value=i?e:Fn(e),this.dep.trigger())}}function _d(n){return Xt(n)?n.value:n}const Pp={get:(n,e,t)=>e==="__v_raw"?n:_d(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Xt(r)&&!Xt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function xd(n){return _r(n)?n:new Proxy(n,Pp)}class Lp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return od(this,!0),!0}get value(){const e=this.dep.track();return cd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Dp(n,e,t=!1){let i,r;return Je(n)?i=n:(i=n.get,r=n.set),new Lp(i,r,t)}const lo={},Go=new WeakMap;let ar;function Ip(n,e=!1,t=ar){if(t){let i=Go.get(t);i||Go.set(t,i=[]),i.push(n)}}function Up(n,e,t=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:yn(E)||r===!1||r===0?fi(E,1):fi(E);let u,f,h,v,_=!1,x=!1;if(Xt(n)?(f=()=>n.value,_=yn(n)):_r(n)?(f=()=>c(n),_=!0):$e(n)?(x=!0,_=n.some(E=>_r(E)||yn(E)),f=()=>n.map(E=>{if(Xt(E))return E.value;if(_r(E))return c(E);if(Je(E))return l?l(E,2):E()})):Je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){vi();try{h()}finally{_i()}}const E=ar;ar=u;try{return l?l(n,3,[v]):n(v)}finally{ar=E}}:f=qn,e&&r){const E=f,C=r===!0?1/0:r;f=()=>fi(E(),C)}const p=ap(),d=()=>{u.stop(),p&&p.active&&Mc(p.effects,u)};if(s&&e){const E=e;e=(...C)=>{E(...C),d()}}let A=x?new Array(n.length).fill(lo):lo;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const C=u.run();if(r||_||(x?C.some((P,R)=>Yn(P,A[R])):Yn(C,A))){h&&h();const P=ar;ar=u;try{const R=[C,A===lo?void 0:x&&A[0]===lo?[]:A,v];A=C,l?l(e,3,R):e(...R)}finally{ar=P}}}else u.run()};return a&&a(b),u=new rd(f),u.scheduler=o?()=>o(b,!1):b,v=E=>Ip(E,!1,u),h=u.onStop=()=>{const E=Go.get(u);if(E){if(l)l(E,4);else for(const C of E)C();Go.delete(u)}},e?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function fi(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Xt(n))fi(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)fi(n[i],e,t);else if(us(n)||qr(n))n.forEach(i=>{fi(i,e,t)});else if(Jf(n)){for(const i in n)fi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&fi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function js(n,e,t,i){try{return i?n(...i):n()}catch(r){ca(r,e,t)}}function On(n,e,t,i){if(Je(n)){const r=js(n,e,t,i);return r&&jf(r)&&r.catch(s=>{ca(s,e,t)}),r}if($e(n)){const r=[];for(let s=0;s<n.length;s++)r.push(On(n[s],e,t,i));return r}}function ca(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){vi(),js(s,null,10,[n,l,c]),_i();return}}Np(n,t,r,i,o)}function Np(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Kt=[];let Hn=-1;const jr=[];let Ui=null,Gr=0;const Md=Promise.resolve();let Wo=null;function En(n){const e=Wo||Md;return n?e.then(this?n.bind(this):n):e}function Fp(n){let e=Hn+1,t=Kt.length;for(;e<t;){const i=e+t>>>1,r=Kt[i],s=Hs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Pc(n){if(!(n.flags&1)){const e=Hs(n),t=Kt[Kt.length-1];!t||!(n.flags&2)&&e>=Hs(t)?Kt.push(n):Kt.splice(Fp(e),0,n),n.flags|=1,Sd()}}function Sd(){Wo||(Wo=Md.then(Ed))}function Op(n){$e(n)?jr.push(...n):Ui&&n.id===-1?Ui.splice(Gr+1,0,n):n.flags&1||(jr.push(n),n.flags|=1),Sd()}function ru(n,e,t=Hn+1){for(;t<Kt.length;t++){const i=Kt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Kt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function yd(n){if(jr.length){const e=[...new Set(jr)].sort((t,i)=>Hs(t)-Hs(i));if(jr.length=0,Ui){Ui.push(...e);return}for(Ui=e,Gr=0;Gr<Ui.length;Gr++){const t=Ui[Gr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ui=null,Gr=0}}const Hs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ed(n){try{for(Hn=0;Hn<Kt.length;Hn++){const e=Kt[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),js(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<Kt.length;Hn++){const e=Kt[Hn];e&&(e.flags&=-2)}Hn=-1,Kt.length=0,yd(),Wo=null,(Kt.length||jr.length)&&Ed()}}let Wt=null,bd=null;function Xo(n){const e=Wt;return Wt=n,bd=n&&n.type.__scopeId||null,e}function ur(n,e=Wt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&qo(-1);const s=Xo(e);let o;try{o=n(...r)}finally{Xo(s),i._d&&qo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ht(n,e){if(Wt===null)return n;const t=pa(Wt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=vt]=e[r];s&&(Je(s)&&(s={mounted:s,updated:s}),s.deep&&fi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ji(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(vi(),On(l,t,8,[n.el,a,n,e]),_i())}}function Ml(n,e){if(Jt){let t=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===t&&(t=Jt.provides=Object.create(i)),t[n]=e}}function Bi(n,e,t=!1){const i=nh();if(i||Jr){let r=Jr?Jr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const Bp=Symbol.for("v-scx"),kp=()=>Bi(Bp);function Ye(n,e,t){return Td(n,e,t)}function Td(n,e,t=vt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Dt({},t),l=e&&i||!e&&s!=="post";let c;if(Xs){if(s==="sync"){const v=kp();c=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=qn,v.resume=qn,v.pause=qn,v}}const u=Jt;a.call=(v,_,x)=>On(v,u,_,x);let f=!1;s==="post"?a.scheduler=v=>{rn(v,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(v,_)=>{_?v():Pc(v)}),a.augmentJob=v=>{e&&(v.flags|=4),f&&(v.flags|=2,u&&(v.id=u.uid,v.i=u))};const h=Up(n,e,a);return Xs&&(c?c.push(h):l&&h()),h}function zp(n,e,t){const i=this.proxy,r=At(n)?n.includes(".")?wd(i,n):()=>i[n]:n.bind(i,i);let s;Je(e)?s=e:(s=e.handler,t=e);const o=Zs(this),a=Td(r,s.bind(i),t);return o(),a}function wd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Hp=Symbol("_vte"),Ad=n=>n.__isTeleport,Vn=Symbol("_leaveCb"),Ms=Symbol("_enterCb");function Vp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bn(()=>{n.isMounted=!0}),Nd(()=>{n.isUnmounting=!0}),n}const _n=[Function,Array],Cd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_n,onEnter:_n,onAfterEnter:_n,onEnterCancelled:_n,onBeforeLeave:_n,onLeave:_n,onAfterLeave:_n,onLeaveCancelled:_n,onBeforeAppear:_n,onAppear:_n,onAfterAppear:_n,onAppearCancelled:_n},Rd=n=>{const e=n.subTree;return e.component?Rd(e.component):e},Gp={name:"BaseTransition",props:Cd,setup(n,{slots:e}){const t=nh(),i=Vp();return()=>{const r=e.default&&Dd(e.default(),!0);if(!r||!r.length)return;const s=Pd(r),o=lt(n),{mode:a}=o;if(i.isLeaving)return wa(s);const l=su(s);if(!l)return wa(s);let c=Sl(l,o,i,t,f=>c=f);l.type!==Gt&&Vs(l,c);let u=t.subTree&&su(t.subTree);if(u&&u.type!==Gt&&!fr(u,l)&&Rd(t).type!==Gt){let f=Sl(u,o,i,t);if(Vs(u,f),a==="out-in"&&l.type!==Gt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},wa(s);a==="in-out"&&l.type!==Gt?f.delayLeave=(h,v,_)=>{const x=Ld(i,u);x[String(u.key)]=u,h[Vn]=()=>{v(),h[Vn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Pd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Gt){e=t;break}}return e}const Wp=Gp;function Ld(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Sl(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:v,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:p,onAppear:d,onAfterAppear:A,onAppearCancelled:b}=e,E=String(n.key),C=Ld(t,n),P=(M,S)=>{M&&On(M,i,9,S)},R=(M,S)=>{const D=S[1];P(M,S),$e(M)?M.every(I=>I.length<=1)&&D():M.length<=1&&D()},U={mode:o,persisted:a,beforeEnter(M){let S=l;if(!t.isMounted)if(s)S=p||l;else return;M[Vn]&&M[Vn](!0);const D=C[E];D&&fr(n,D)&&D.el[Vn]&&D.el[Vn](),P(S,[M])},enter(M){if(C[E]===n)return;let S=c,D=u,I=f;if(!t.isMounted)if(s)S=d||c,D=A||u,I=b||f;else return;let k=!1;M[Ms]=K=>{k||(k=!0,K?P(I,[M]):P(D,[M]),U.delayedLeave&&U.delayedLeave(),M[Ms]=void 0)};const X=M[Ms].bind(null,!1);S?R(S,[M,X]):X()},leave(M,S){const D=String(n.key);if(M[Ms]&&M[Ms](!0),t.isUnmounting)return S();P(h,[M]);let I=!1;M[Vn]=X=>{I||(I=!0,S(),X?P(x,[M]):P(_,[M]),M[Vn]=void 0,C[D]===n&&delete C[D])};const k=M[Vn].bind(null,!1);C[D]=n,v?R(v,[M,k]):k()},clone(M){const S=Sl(M,e,t,i,r);return r&&r(S),S}};return U}function wa(n){if(ua(n))return n=Hi(n),n.children=null,n}function su(n){if(!ua(n))return Ad(n.type)&&n.children?Pd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Je(t.default))return t.default()}}function Vs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Dd(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===jt?(o.patchFlag&128&&r++,i=i.concat(Dd(o.children,e,a))):(e||o.type!==Gt)&&i.push(a!=null?Hi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Yi(n,e){return Je(n)?Dt({name:n.name},e,{setup:n}):n}function Id(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ou(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Yo=new WeakMap;function Ns(n,e,t,i,r=!1){if($e(n)){n.forEach((x,p)=>Ns(x,e&&($e(e)?e[p]:e),t,i,r));return}if(Zr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ns(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?pa(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,f=a.setupState,h=lt(f),v=f===vt?Kf:x=>ou(u,x)?!1:ft(h,x),_=(x,p)=>!(p&&ou(u,p));if(c!=null&&c!==l){if(au(e),At(c))u[c]=null,v(c)&&(f[c]=null);else if(Xt(c)){const x=e;_(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Je(l))js(l,a,12,[o,u]);else{const x=At(l),p=Xt(l);if(x||p){const d=()=>{if(n.f){const A=x?v(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)$e(A)&&Mc(A,s);else if($e(A))A.includes(s)||A.push(s);else if(x)u[l]=[s],v(l)&&(f[l]=u[l]);else{const b=[s];_(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else x?(u[l]=o,v(l)&&(f[l]=o)):p&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const A=()=>{d(),Yo.delete(n)};A.id=-1,Yo.set(n,A),rn(A,t)}else au(n),d()}}}function au(n){const e=Yo.get(n);e&&(e.flags|=8,Yo.delete(n))}aa().requestIdleCallback;aa().cancelIdleCallback;const Zr=n=>!!n.type.__asyncLoader,ua=n=>n.type.__isKeepAlive;function Xp(n,e){Ud(n,"a",e)}function Yp(n,e){Ud(n,"da",e)}function Ud(n,e,t=Jt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(fa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ua(r.parent.vnode)&&$p(i,e,t,r),r=r.parent}}function $p(n,e,t,i){const r=fa(e,n,i,!0);jn(()=>{Mc(i[e],r)},t)}function fa(n,e,t=Jt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{vi();const a=Zs(t),l=On(e,t,n,o);return a(),_i(),l});return i?r.unshift(s):r.push(s),s}}const Ei=n=>(e,t=Jt)=>{(!Xs||n==="sp")&&fa(n,(...i)=>e(...i),t)},qp=Ei("bm"),Bn=Ei("m"),Kp=Ei("bu"),jp=Ei("u"),Nd=Ei("bum"),jn=Ei("um"),Zp=Ei("sp"),Jp=Ei("rtg"),Qp=Ei("rtc");function em(n,e=Jt){fa("ec",n,e)}const tm=Symbol.for("v-ndc");function nm(n,e,t,i){let r;const s=t,o=$e(n);if(o||At(n)){const a=o&&_r(n);let l=!1,c=!1;a&&(l=!yn(n),c=xi(n),n=la(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ns(Fn(n[u])):Fn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function yl(n,e,t={},i,r){if(Wt.ce||Wt.parent&&Zr(Wt.parent)&&Wt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Ze(),Pt(jt,null,[Tt("slot",t,i)],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),Ze();const o=s&&Fd(s(t)),a=t.key||o&&o.key,l=Pt(jt,{key:(a&&!Nn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Fd(n){return n.some(e=>Ws(e)?!(e.type===Gt||e.type===jt&&!Fd(e.children)):!0)?n:null}const El=n=>n?ih(n)?pa(n):El(n.parent):null,Fs=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>El(n.parent),$root:n=>El(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bd(n),$forceUpdate:n=>n.f||(n.f=()=>{Pc(n.update)}),$nextTick:n=>n.n||(n.n=En.bind(n.proxy)),$watch:n=>zp.bind(n)}),Aa=(n,e)=>n!==vt&&!n.__isScriptSetup&&ft(n,e),im={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Aa(i,e))return o[e]=1,i[e];if(r!==vt&&ft(r,e))return o[e]=2,r[e];if(ft(s,e))return o[e]=3,s[e];if(t!==vt&&ft(t,e))return o[e]=4,t[e];bl&&(o[e]=0)}}const c=Fs[e];let u,f;if(c)return e==="$attrs"&&Vt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==vt&&ft(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ft(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Aa(r,e)?(r[e]=t,!0):i!==vt&&ft(i,e)?(i[e]=t,!0):ft(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==vt&&a[0]!=="$"&&ft(n,a)||Aa(e,a)||ft(s,a)||ft(i,a)||ft(Fs,a)||ft(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ft(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bl=!0;function rm(n){const e=Bd(n),t=n.proxy,i=n.ctx;bl=!1,e.beforeCreate&&cu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:v,updated:_,activated:x,deactivated:p,beforeDestroy:d,beforeUnmount:A,destroyed:b,unmounted:E,render:C,renderTracked:P,renderTriggered:R,errorCaptured:U,serverPrefetch:M,expose:S,inheritAttrs:D,components:I,directives:k,filters:X}=e;if(c&&sm(c,i,null),o)for(const $ in o){const B=o[$];Je(B)&&(i[$]=B.bind(t))}if(r){const $=r.call(t,t);ht($)&&(n.data=Kr($))}if(bl=!0,s)for(const $ in s){const B=s[$],ce=Je(B)?B.bind(t,t):Je(B.get)?B.get.bind(t,t):qn,Z=!Je(B)&&Je(B.set)?B.set.bind(t):qn,me=it({get:ce,set:Z});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>me.value,set:we=>me.value=we})}if(a)for(const $ in a)Od(a[$],i,t,$);if(l){const $=Je(l)?l.call(t):l;Reflect.ownKeys($).forEach(B=>{Ml(B,$[B])})}u&&cu(u,n,"c");function W($,B){$e(B)?B.forEach(ce=>$(ce.bind(t))):B&&$(B.bind(t))}if(W(qp,f),W(Bn,h),W(Kp,v),W(jp,_),W(Xp,x),W(Yp,p),W(em,U),W(Qp,P),W(Jp,R),W(Nd,A),W(jn,E),W(Zp,M),$e(S))if(S.length){const $=n.exposed||(n.exposed={});S.forEach(B=>{Object.defineProperty($,B,{get:()=>t[B],set:ce=>t[B]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===qn&&(n.render=C),D!=null&&(n.inheritAttrs=D),I&&(n.components=I),k&&(n.directives=k),M&&Id(n)}function sm(n,e,t=qn){$e(n)&&(n=Tl(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=Bi(r.from||i,r.default,!0):s=Bi(r.from||i):s=Bi(r),Xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function cu(n,e,t){On($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Od(n,e,t,i){let r=i.includes(".")?wd(t,i):()=>t[i];if(At(n)){const s=e[n];Je(s)&&Ye(r,s)}else if(Je(n))Ye(r,n.bind(t));else if(ht(n))if($e(n))n.forEach(s=>Od(s,e,t,i));else{const s=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(s)&&Ye(r,s,n)}}function Bd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>$o(l,c,o,!0)),$o(l,e,o)),ht(e)&&s.set(e,l),l}function $o(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&$o(n,s,t,!0),r&&r.forEach(o=>$o(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=om[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const om={data:uu,props:fu,emits:fu,methods:Rs,computed:Rs,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:Rs,directives:Rs,watch:lm,provide:uu,inject:am};function uu(n,e){return e?n?function(){return Dt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function am(n,e){return Rs(Tl(n),Tl(e))}function Tl(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function $t(n,e){return n?[...new Set([].concat(n,e))]:e}function Rs(n,e){return n?Dt(Object.create(null),n,e):e}function fu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Dt(Object.create(null),lu(n),lu(e??{})):e}function lm(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=$t(n[i],e[i]);return t}function kd(){return{app:null,config:{isNativeTag:Kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function um(n,e){return function(i,r=null){Je(i)||(i=Dt({},i)),r!=null&&!ht(r)&&(r=null);const s=kd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:cm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...f)):Je(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const v=c._ceVNode||Tt(i,r);return v.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(v,u,h),l=!0,c._container=u,u.__vue_app__=c,pa(v.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Jr;Jr=c;try{return u()}finally{Jr=f}}};return c}}let Jr=null;const fm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dn(e)}Modifiers`]||n[`${Xi(e)}Modifiers`];function dm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||vt;let r=t;const s=e.startsWith("update:"),o=s&&fm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>At(u)?u.trim():u)),o.number&&(r=t.map(oa)));let a,l=i[a=Sa(e)]||i[a=Sa(Dn(e))];!l&&s&&(l=i[a=Sa(Xi(e))]),l&&On(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,r)}}const hm=new WeakMap;function zd(n,e,t=!1){const i=t?hm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Je(n)){const l=c=>{const u=zd(c,e,!0);u&&(a=!0,Dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):($e(s)?s.forEach(l=>o[l]=null):Dt(o,s),ht(n)&&i.set(n,o),o)}function da(n,e){return!n||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),ft(n,e[0].toLowerCase()+e.slice(1))||ft(n,Xi(e))||ft(n,e))}function du(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:v,ctx:_,inheritAttrs:x}=n,p=Xo(n);let d,A;try{if(t.shapeFlag&4){const E=r||i,C=E;d=Wn(c.call(C,E,u,f,v,h,_)),A=a}else{const E=e;d=Wn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),A=e.props?a:pm(a)}}catch(E){Os.length=0,ca(E,n,1),d=Tt(Gt)}let b=d;if(A&&x!==!1){const E=Object.keys(A),{shapeFlag:C}=b;E.length&&C&7&&(s&&E.some(ra)&&(A=mm(A,s)),b=Hi(b,A,!1,!0))}return t.dirs&&(b=Hi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Vs(b,t.transition),d=b,Xo(p),d}const pm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ia(t))&&((e||(e={}))[t]=n[t]);return e},mm=(n,e)=>{const t={};for(const i in n)(!ra(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function gm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Hd(o,i,h)&&!da(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hu(i,o,c):!0:!!o;return!1}function hu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Hd(e,n,s)&&!da(t,s))return!0}return!1}function Hd(n,e,t){const i=n[t],r=e[t];return t==="style"&&ht(i)&&ht(r)?!fs(i,r):i!==r}function vm({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Vd={},Gd=()=>Object.create(Vd),Wd=n=>Object.getPrototypeOf(n)===Vd;function _m(n,e,t,i=!1){const r={},s=Gd();n.propsDefaults=Object.create(null),Xd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:wp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function xm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=lt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(da(n.emitsOptions,h))continue;const v=e[h];if(l)if(ft(s,h))v!==s[h]&&(s[h]=v,c=!0);else{const _=Dn(h);r[_]=wl(l,a,_,v,n,!1)}else v!==s[h]&&(s[h]=v,c=!0)}}}else{Xd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ft(e,f)&&((u=Xi(f))===f||!ft(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=wl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ft(e,f))&&(delete s[f],c=!0)}c&&ui(n.attrs,"set","")}function Xd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ds(l))continue;const c=e[l];let u;r&&ft(r,u=Dn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:da(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=lt(t),c=a||vt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=wl(r,l,f,c[f],n,!ft(c,f))}}return o}function wl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ft(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Zs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Xi(t))&&(i=!0))}return i}const Mm=new WeakMap;function Yd(n,e,t=!1){const i=t?Mm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Je(n)){const u=f=>{l=!0;const[h,v]=Yd(f,e,!0);Dt(o,h),v&&a.push(...v)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,$r),$r;if($e(s))for(let u=0;u<s.length;u++){const f=Dn(s[u]);pu(f)&&(o[f]=vt)}else if(s)for(const u in s){const f=Dn(u);if(pu(f)){const h=s[u],v=o[f]=$e(h)||Je(h)?{type:h}:Dt({},h),_=v.type;let x=!1,p=!0;if($e(_))for(let d=0;d<_.length;++d){const A=_[d],b=Je(A)&&A.name;if(b==="Boolean"){x=!0;break}else b==="String"&&(p=!1)}else x=Je(_)&&_.name==="Boolean";v[0]=x,v[1]=p,(x||ft(v,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function pu(n){return n[0]!=="$"&&!Ds(n)}const Lc=n=>n==="_"||n==="_ctx"||n==="$stable",Dc=n=>$e(n)?n.map(Wn):[Wn(n)],Sm=(n,e,t)=>{if(e._n)return e;const i=ur((...r)=>Dc(e(...r)),t);return i._c=!1,i},$d=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Lc(r))continue;const s=n[r];if(Je(s))e[r]=Sm(r,s,i);else if(s!=null){const o=Dc(s);e[r]=()=>o}}},qd=(n,e)=>{const t=Dc(e);n.slots.default=()=>t},Kd=(n,e,t)=>{for(const i in e)(t||!Lc(i))&&(n[i]=e[i])},ym=(n,e,t)=>{const i=n.slots=Gd();if(n.vnode.shapeFlag&32){const r=e._;r?(Kd(i,e,t),t&&ed(i,"_",r,!0)):$d(e,i)}else e&&qd(n,e)},Em=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Kd(r,e,t):(s=!e.$stable,$d(e,r)),o=e}else e&&(qd(n,e),o={default:1});if(s)for(const a in r)!Lc(a)&&o[a]==null&&delete r[a]},rn=Cm;function bm(n){return Tm(n)}function Tm(n,e){const t=aa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:v=qn,insertStaticContent:_}=n,x=(L,F,w,he=null,te=null,ne=null,oe=void 0,re=null,ie=!!F.dynamicChildren)=>{if(L===F)return;L&&!fr(L,F)&&(he=_e(L),we(L,te,ne,!0),L=null),F.patchFlag===-2&&(ie=!1,F.dynamicChildren=null);const{type:g,ref:m,shapeFlag:T}=F;switch(g){case ha:p(L,F,w,he);break;case Gt:d(L,F,w,he);break;case Ra:L==null&&A(F,w,he,oe);break;case jt:I(L,F,w,he,te,ne,oe,re,ie);break;default:T&1?C(L,F,w,he,te,ne,oe,re,ie):T&6?k(L,F,w,he,te,ne,oe,re,ie):(T&64||T&128)&&g.process(L,F,w,he,te,ne,oe,re,ie,Re)}m!=null&&te?Ns(m,L&&L.ref,ne,F||L,!F):m==null&&L&&L.ref!=null&&Ns(L.ref,null,ne,L,!0)},p=(L,F,w,he)=>{if(L==null)i(F.el=a(F.children),w,he);else{const te=F.el=L.el;F.children!==L.children&&c(te,F.children)}},d=(L,F,w,he)=>{L==null?i(F.el=l(F.children||""),w,he):F.el=L.el},A=(L,F,w,he)=>{[L.el,L.anchor]=_(L.children,F,w,he,L.el,L.anchor)},b=({el:L,anchor:F},w,he)=>{let te;for(;L&&L!==F;)te=h(L),i(L,w,he),L=te;i(F,w,he)},E=({el:L,anchor:F})=>{let w;for(;L&&L!==F;)w=h(L),r(L),L=w;r(F)},C=(L,F,w,he,te,ne,oe,re,ie)=>{if(F.type==="svg"?oe="svg":F.type==="math"&&(oe="mathml"),L==null)P(F,w,he,te,ne,oe,re,ie);else{const g=L.el&&L.el._isVueCE?L.el:null;try{g&&g._beginPatch(),M(L,F,te,ne,oe,re,ie)}finally{g&&g._endPatch()}}},P=(L,F,w,he,te,ne,oe,re)=>{let ie,g;const{props:m,shapeFlag:T,transition:O,dirs:H}=L;if(ie=L.el=o(L.type,ne,m&&m.is,m),T&8?u(ie,L.children):T&16&&U(L.children,ie,null,he,te,Ca(L,ne),oe,re),H&&ji(L,null,he,"created"),R(ie,L,L.scopeId,oe,he),m){for(const ae in m)ae!=="value"&&!Ds(ae)&&s(ie,ae,null,m[ae],ne,he);"value"in m&&s(ie,"value",null,m.value,ne),(g=m.onVnodeBeforeMount)&&zn(g,he,L)}H&&ji(L,null,he,"beforeMount");const V=wm(te,O);V&&O.beforeEnter(ie),i(ie,F,w),((g=m&&m.onVnodeMounted)||V||H)&&rn(()=>{try{g&&zn(g,he,L),V&&O.enter(ie),H&&ji(L,null,he,"mounted")}finally{}},te)},R=(L,F,w,he,te)=>{if(w&&v(L,w),he)for(let ne=0;ne<he.length;ne++)v(L,he[ne]);if(te){let ne=te.subTree;if(F===ne||Qd(ne.type)&&(ne.ssContent===F||ne.ssFallback===F)){const oe=te.vnode;R(L,oe,oe.scopeId,oe.slotScopeIds,te.parent)}}},U=(L,F,w,he,te,ne,oe,re,ie=0)=>{for(let g=ie;g<L.length;g++){const m=L[g]=re?ci(L[g]):Wn(L[g]);x(null,m,F,w,he,te,ne,oe,re)}},M=(L,F,w,he,te,ne,oe)=>{const re=F.el=L.el;let{patchFlag:ie,dynamicChildren:g,dirs:m}=F;ie|=L.patchFlag&16;const T=L.props||vt,O=F.props||vt;let H;if(w&&Zi(w,!1),(H=O.onVnodeBeforeUpdate)&&zn(H,w,F,L),m&&ji(F,L,w,"beforeUpdate"),w&&Zi(w,!0),(T.innerHTML&&O.innerHTML==null||T.textContent&&O.textContent==null)&&u(re,""),g?S(L.dynamicChildren,g,re,w,he,Ca(F,te),ne):oe||B(L,F,re,null,w,he,Ca(F,te),ne,!1),ie>0){if(ie&16)D(re,T,O,w,te);else if(ie&2&&T.class!==O.class&&s(re,"class",null,O.class,te),ie&4&&s(re,"style",T.style,O.style,te),ie&8){const V=F.dynamicProps;for(let ae=0;ae<V.length;ae++){const N=V[ae],J=T[N],xe=O[N];(xe!==J||N==="value")&&s(re,N,J,xe,te,w)}}ie&1&&L.children!==F.children&&u(re,F.children)}else!oe&&g==null&&D(re,T,O,w,te);((H=O.onVnodeUpdated)||m)&&rn(()=>{H&&zn(H,w,F,L),m&&ji(F,L,w,"updated")},he)},S=(L,F,w,he,te,ne,oe)=>{for(let re=0;re<F.length;re++){const ie=L[re],g=F[re],m=ie.el&&(ie.type===jt||!fr(ie,g)||ie.shapeFlag&198)?f(ie.el):w;x(ie,g,m,null,he,te,ne,oe,!0)}},D=(L,F,w,he,te)=>{if(F!==w){if(F!==vt)for(const ne in F)!Ds(ne)&&!(ne in w)&&s(L,ne,F[ne],null,te,he);for(const ne in w){if(Ds(ne))continue;const oe=w[ne],re=F[ne];oe!==re&&ne!=="value"&&s(L,ne,re,oe,te,he)}"value"in w&&s(L,"value",F.value,w.value,te)}},I=(L,F,w,he,te,ne,oe,re,ie)=>{const g=F.el=L?L.el:a(""),m=F.anchor=L?L.anchor:a("");let{patchFlag:T,dynamicChildren:O,slotScopeIds:H}=F;H&&(re=re?re.concat(H):H),L==null?(i(g,w,he),i(m,w,he),U(F.children||[],w,m,te,ne,oe,re,ie)):T>0&&T&64&&O&&L.dynamicChildren&&L.dynamicChildren.length===O.length?(S(L.dynamicChildren,O,w,te,ne,oe,re),(F.key!=null||te&&F===te.subTree)&&jd(L,F,!0)):B(L,F,w,m,te,ne,oe,re,ie)},k=(L,F,w,he,te,ne,oe,re,ie)=>{F.slotScopeIds=re,L==null?F.shapeFlag&512?te.ctx.activate(F,w,he,oe,ie):X(F,w,he,te,ne,oe,ie):K(L,F,ie)},X=(L,F,w,he,te,ne,oe)=>{const re=L.component=Nm(L,he,te);if(ua(L)&&(re.ctx.renderer=Re),Fm(re,!1,oe),re.asyncDep){if(te&&te.registerDep(re,W,oe),!L.el){const ie=re.subTree=Tt(Gt);d(null,ie,F,w),L.placeholder=ie.el}}else W(re,L,F,w,te,ne,oe)},K=(L,F,w)=>{const he=F.component=L.component;if(gm(L,F,w))if(he.asyncDep&&!he.asyncResolved){$(he,F,w);return}else he.next=F,he.update();else F.el=L.el,he.vnode=F},W=(L,F,w,he,te,ne,oe)=>{const re=()=>{if(L.isMounted){let{next:T,bu:O,u:H,parent:V,vnode:ae}=L;{const Ee=Zd(L);if(Ee){T&&(T.el=ae.el,$(L,T,oe)),Ee.asyncDep.then(()=>{rn(()=>{L.isUnmounted||g()},te)});return}}let N=T,J;Zi(L,!1),T?(T.el=ae.el,$(L,T,oe)):T=ae,O&&Uo(O),(J=T.props&&T.props.onVnodeBeforeUpdate)&&zn(J,V,T,ae),Zi(L,!0);const xe=du(L),ue=L.subTree;L.subTree=xe,x(ue,xe,f(ue.el),_e(ue),L,te,ne),T.el=xe.el,N===null&&vm(L,xe.el),H&&rn(H,te),(J=T.props&&T.props.onVnodeUpdated)&&rn(()=>zn(J,V,T,ae),te)}else{let T;const{el:O,props:H}=F,{bm:V,m:ae,parent:N,root:J,type:xe}=L,ue=Zr(F);Zi(L,!1),V&&Uo(V),!ue&&(T=H&&H.onVnodeBeforeMount)&&zn(T,N,F),Zi(L,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(xe,L.parent?L.parent.type:void 0);const Ee=L.subTree=du(L);x(null,Ee,w,he,L,te,ne),F.el=Ee.el}if(ae&&rn(ae,te),!ue&&(T=H&&H.onVnodeMounted)){const Ee=F;rn(()=>zn(T,N,Ee),te)}(F.shapeFlag&256||N&&Zr(N.vnode)&&N.vnode.shapeFlag&256)&&L.a&&rn(L.a,te),L.isMounted=!0,F=w=he=null}};L.scope.on();const ie=L.effect=new rd(re);L.scope.off();const g=L.update=ie.run.bind(ie),m=L.job=ie.runIfDirty.bind(ie);m.i=L,m.id=L.uid,ie.scheduler=()=>Pc(m),Zi(L,!0),g()},$=(L,F,w)=>{F.component=L;const he=L.vnode.props;L.vnode=F,L.next=null,xm(L,F.props,he,w),Em(L,F.children,w),vi(),ru(L),_i()},B=(L,F,w,he,te,ne,oe,re,ie=!1)=>{const g=L&&L.children,m=L?L.shapeFlag:0,T=F.children,{patchFlag:O,shapeFlag:H}=F;if(O>0){if(O&128){Z(g,T,w,he,te,ne,oe,re,ie);return}else if(O&256){ce(g,T,w,he,te,ne,oe,re,ie);return}}H&8?(m&16&&Se(g,te,ne),T!==g&&u(w,T)):m&16?H&16?Z(g,T,w,he,te,ne,oe,re,ie):Se(g,te,ne,!0):(m&8&&u(w,""),H&16&&U(T,w,he,te,ne,oe,re,ie))},ce=(L,F,w,he,te,ne,oe,re,ie)=>{L=L||$r,F=F||$r;const g=L.length,m=F.length,T=Math.min(g,m);let O;for(O=0;O<T;O++){const H=F[O]=ie?ci(F[O]):Wn(F[O]);x(L[O],H,w,null,te,ne,oe,re,ie)}g>m?Se(L,te,ne,!0,!1,T):U(F,w,he,te,ne,oe,re,ie,T)},Z=(L,F,w,he,te,ne,oe,re,ie)=>{let g=0;const m=F.length;let T=L.length-1,O=m-1;for(;g<=T&&g<=O;){const H=L[g],V=F[g]=ie?ci(F[g]):Wn(F[g]);if(fr(H,V))x(H,V,w,null,te,ne,oe,re,ie);else break;g++}for(;g<=T&&g<=O;){const H=L[T],V=F[O]=ie?ci(F[O]):Wn(F[O]);if(fr(H,V))x(H,V,w,null,te,ne,oe,re,ie);else break;T--,O--}if(g>T){if(g<=O){const H=O+1,V=H<m?F[H].el:he;for(;g<=O;)x(null,F[g]=ie?ci(F[g]):Wn(F[g]),w,V,te,ne,oe,re,ie),g++}}else if(g>O)for(;g<=T;)we(L[g],te,ne,!0),g++;else{const H=g,V=g,ae=new Map;for(g=V;g<=O;g++){const be=F[g]=ie?ci(F[g]):Wn(F[g]);be.key!=null&&ae.set(be.key,g)}let N,J=0;const xe=O-V+1;let ue=!1,Ee=0;const De=new Array(xe);for(g=0;g<xe;g++)De[g]=0;for(g=H;g<=T;g++){const be=L[g];if(J>=xe){we(be,te,ne,!0);continue}let Ge;if(be.key!=null)Ge=ae.get(be.key);else for(N=V;N<=O;N++)if(De[N-V]===0&&fr(be,F[N])){Ge=N;break}Ge===void 0?we(be,te,ne,!0):(De[Ge-V]=g+1,Ge>=Ee?Ee=Ge:ue=!0,x(be,F[Ge],w,null,te,ne,oe,re,ie),J++)}const Oe=ue?Am(De):$r;for(N=Oe.length-1,g=xe-1;g>=0;g--){const be=V+g,Ge=F[be],qe=F[be+1],rt=be+1<m?qe.el||Jd(qe):he;De[g]===0?x(null,Ge,w,rt,te,ne,oe,re,ie):ue&&(N<0||g!==Oe[N]?me(Ge,w,rt,2):N--)}}},me=(L,F,w,he,te=null)=>{const{el:ne,type:oe,transition:re,children:ie,shapeFlag:g}=L;if(g&6){me(L.component.subTree,F,w,he);return}if(g&128){L.suspense.move(F,w,he);return}if(g&64){oe.move(L,F,w,Re);return}if(oe===jt){i(ne,F,w);for(let T=0;T<ie.length;T++)me(ie[T],F,w,he);i(L.anchor,F,w);return}if(oe===Ra){b(L,F,w);return}if(he!==2&&g&1&&re)if(he===0)re.beforeEnter(ne),i(ne,F,w),rn(()=>re.enter(ne),te);else{const{leave:T,delayLeave:O,afterLeave:H}=re,V=()=>{L.ctx.isUnmounted?r(ne):i(ne,F,w)},ae=()=>{ne._isLeaving&&ne[Vn](!0),T(ne,()=>{V(),H&&H()})};O?O(ne,V,ae):ae()}else i(ne,F,w)},we=(L,F,w,he=!1,te=!1)=>{const{type:ne,props:oe,ref:re,children:ie,dynamicChildren:g,shapeFlag:m,patchFlag:T,dirs:O,cacheIndex:H,memo:V}=L;if(T===-2&&(te=!1),re!=null&&(vi(),Ns(re,null,w,L,!0),_i()),H!=null&&(F.renderCache[H]=void 0),m&256){F.ctx.deactivate(L);return}const ae=m&1&&O,N=!Zr(L);let J;if(N&&(J=oe&&oe.onVnodeBeforeUnmount)&&zn(J,F,L),m&6)ge(L.component,w,he);else{if(m&128){L.suspense.unmount(w,he);return}ae&&ji(L,null,F,"beforeUnmount"),m&64?L.type.remove(L,F,w,Re,he):g&&!g.hasOnce&&(ne!==jt||T>0&&T&64)?Se(g,F,w,!1,!0):(ne===jt&&T&384||!te&&m&16)&&Se(ie,F,w),he&&Xe(L)}const xe=V!=null&&H==null;(N&&(J=oe&&oe.onVnodeUnmounted)||ae||xe)&&rn(()=>{J&&zn(J,F,L),ae&&ji(L,null,F,"unmounted"),xe&&(L.el=null)},w)},Xe=L=>{const{type:F,el:w,anchor:he,transition:te}=L;if(F===jt){se(w,he);return}if(F===Ra){E(L);return}const ne=()=>{r(w),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(L.shapeFlag&1&&te&&!te.persisted){const{leave:oe,delayLeave:re}=te,ie=()=>oe(w,ne);re?re(L.el,ne,ie):ie()}else ne()},se=(L,F)=>{let w;for(;L!==F;)w=h(L),r(L),L=w;r(F)},ge=(L,F,w)=>{const{bum:he,scope:te,job:ne,subTree:oe,um:re,m:ie,a:g}=L;mu(ie),mu(g),he&&Uo(he),te.stop(),ne&&(ne.flags|=8,we(oe,L,F,w)),re&&rn(re,F),rn(()=>{L.isUnmounted=!0},F)},Se=(L,F,w,he=!1,te=!1,ne=0)=>{for(let oe=ne;oe<L.length;oe++)we(L[oe],F,w,he,te)},_e=L=>{if(L.shapeFlag&6)return _e(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const F=h(L.anchor||L.el),w=F&&F[Hp];return w?h(w):F};let de=!1;const ve=(L,F,w)=>{let he;L==null?F._vnode&&(we(F._vnode,null,null,!0),he=F._vnode.component):x(F._vnode||null,L,F,null,null,null,w),F._vnode=L,de||(de=!0,ru(he),yd(),de=!1)},Re={p:x,um:we,m:me,r:Xe,mt:X,mc:U,pc:B,pbc:S,n:_e,o:n};return{render:ve,hydrate:void 0,createApp:um(ve)}}function Ca({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Zi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function wm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function jd(n,e,t=!1){const i=n.children,r=e.children;if($e(i)&&$e(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ci(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&jd(o,a)),a.type===ha&&(a.patchFlag===-1&&(a=r[s]=ci(a)),a.el=o.el),a.type===Gt&&!a.el&&(a.el=o.el)}}function Am(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Zd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zd(e)}function mu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Jd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Jd(e.subTree):null}const Qd=n=>n.__isSuspense;function Cm(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Op(n)}const jt=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),Os=[];let hn=null;function Ze(n=!1){Os.push(hn=n?null:[])}function Rm(){Os.pop(),hn=Os[Os.length-1]||null}let Gs=1;function qo(n,e=!1){Gs+=n,n<0&&hn&&e&&(hn.hasOnce=!0)}function eh(n){return n.dynamicChildren=Gs>0?hn||$r:null,Rm(),Gs>0&&hn&&hn.push(n),n}function yt(n,e,t,i,r,s){return eh(ke(n,e,t,i,r,s,!0))}function Pt(n,e,t,i,r){return eh(Tt(n,e,t,i,r,!0))}function Ws(n){return n?n.__v_isVNode===!0:!1}function fr(n,e){return n.type===e.type&&n.key===e.key}const th=({key:n})=>n??null,No=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Xt(n)||Je(n)?{i:Wt,r:n,k:e,f:!!t}:n:null);function ke(n,e=null,t=null,i=0,r=null,s=n===jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&th(e),ref:e&&No(e),scopeId:bd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Wt};return a?(Ic(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Gs>0&&!o&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const Tt=Pm;function Pm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===tm)&&(n=Gt),Ws(n)){const a=Hi(n,e,!0);return t&&Ic(a,t),Gs>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(zm(n)&&(n=n.__vccOpts),e){e=Lm(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=dn(a)),ht(l)&&(Rc(l)&&!$e(l)&&(l=Dt({},l)),e.style=on(l))}const o=At(n)?1:Qd(n)?128:Ad(n)?64:ht(n)?4:Je(n)?2:0;return ke(n,e,t,i,r,o,s,!0)}function Lm(n){return n?Rc(n)||Wd(n)?Dt({},n):n:null}function Hi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Dm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&th(c),ref:e&&e.ref?t&&s?$e(s)?s.concat(No(e)):[s,No(e)]:No(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hi(n.ssContent),ssFallback:n.ssFallback&&Hi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Vs(u,l.clone(u)),u}function ai(n=" ",e=0){return Tt(ha,null,n,e)}function Zt(n="",e=!1){return e?(Ze(),Pt(Gt,null,n)):Tt(Gt,null,n)}function Wn(n){return n==null||typeof n=="boolean"?Tt(Gt):$e(n)?Tt(jt,null,n.slice()):Ws(n)?ci(n):Tt(ha,null,String(n))}function ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hi(n)}function Ic(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ic(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Wd(e)?e._ctx=Wt:r===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:Wt},t=32):(e=String(e),i&64?(t=16,e=[ai(e)]):t=8);n.children=e,n.shapeFlag|=t}function Dm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=dn([e.class,i.class]));else if(r==="style")e.style=on([e.style,i.style]);else if(ia(r)){const s=e[r],o=i[r];o&&s!==o&&!($e(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!ra(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function zn(n,e,t,i=null){On(n,e,7,[t,i])}const Im=kd();let Um=0;function Nm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Im,s={uid:Um++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yd(i,r),emitsOptions:zd(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dm.bind(null,s),n.ce&&n.ce(s),s}let Jt=null;const nh=()=>Jt||Wt;let Ko,Al;{const n=aa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ko=e("__VUE_INSTANCE_SETTERS__",t=>Jt=t),Al=e("__VUE_SSR_SETTERS__",t=>Xs=t)}const Zs=n=>{const e=Jt;return Ko(n),n.scope.on(),()=>{n.scope.off(),Ko(e)}},gu=()=>{Jt&&Jt.scope.off(),Ko(null)};function ih(n){return n.vnode.shapeFlag&4}let Xs=!1;function Fm(n,e=!1,t=!1){e&&Al(e);const{props:i,children:r}=n.vnode,s=ih(n);_m(n,i,s,e),ym(n,r,t||e);const o=s?Om(n,e):void 0;return e&&Al(!1),o}function Om(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,im);const{setup:i}=t;if(i){vi();const r=n.setupContext=i.length>1?km(n):null,s=Zs(n),o=js(i,n,0,[n.props,r]),a=jf(o);if(_i(),s(),(a||n.sp)&&!Zr(n)&&Id(n),a){if(o.then(gu,gu),e)return o.then(l=>{vu(n,l)}).catch(l=>{ca(l,n,0)});n.asyncDep=o}else vu(n,o)}else rh(n)}function vu(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=xd(e)),rh(n)}function rh(n,e,t){const i=n.type;n.render||(n.render=i.render||qn);{const r=Zs(n);vi();try{rm(n)}finally{_i(),r()}}}const Bm={get(n,e){return Vt(n,"get",""),n[e]}};function km(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Bm),slots:n.slots,emit:n.emit,expose:e}}function pa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xd(Ap(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fs)return Fs[t](n)},has(e,t){return t in e||t in Fs}})):n.proxy}function zm(n){return Je(n)&&"__vccOpts"in n}const it=(n,e)=>Dp(n,e,Xs);function Hm(n,e,t){try{qo(-1);const i=arguments.length;return i===2?ht(e)&&!$e(e)?Ws(e)?Tt(n,null,[e]):Tt(n,e):Tt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ws(t)&&(t=[t]),Tt(n,e,t))}finally{qo(1)}}const Vm="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const _u=typeof window<"u"&&window.trustedTypes;if(_u)try{Cl=_u.createPolicy("vue",{createHTML:n=>n})}catch{}const sh=Cl?n=>Cl.createHTML(n):n=>n,Gm="http://www.w3.org/2000/svg",Wm="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,xu=li&&li.createElement("template"),Xm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?li.createElementNS(Gm,n):e==="mathml"?li.createElementNS(Wm,n):t?li.createElement(n,{is:t}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{xu.innerHTML=sh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},wi="transition",Ss="animation",Ys=Symbol("_vtc"),oh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ym=Dt({},Cd,oh),$m=n=>(n.displayName="Transition",n.props=Ym,n),qm=$m((n,{slots:e})=>Hm(Wp,Km(n),e)),Ji=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},Mu=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function Km(n){const e={};for(const I in n)I in oh||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:v=`${t}-leave-to`}=n,_=jm(r),x=_&&_[0],p=_&&_[1],{onBeforeEnter:d,onEnter:A,onEnterCancelled:b,onLeave:E,onLeaveCancelled:C,onBeforeAppear:P=d,onAppear:R=A,onAppearCancelled:U=b}=e,M=(I,k,X,K)=>{I._enterCancelled=K,Qi(I,k?u:a),Qi(I,k?c:o),X&&X()},S=(I,k)=>{I._isLeaving=!1,Qi(I,f),Qi(I,v),Qi(I,h),k&&k()},D=I=>(k,X)=>{const K=I?R:A,W=()=>M(k,I,X);Ji(K,[k,W]),Su(()=>{Qi(k,I?l:s),ei(k,I?u:a),Mu(K)||yu(k,i,x,W)})};return Dt(e,{onBeforeEnter(I){Ji(d,[I]),ei(I,s),ei(I,o)},onBeforeAppear(I){Ji(P,[I]),ei(I,l),ei(I,c)},onEnter:D(!1),onAppear:D(!0),onLeave(I,k){I._isLeaving=!0;const X=()=>S(I,k);ei(I,f),I._enterCancelled?(ei(I,h),Tu(I)):(Tu(I),ei(I,h)),Su(()=>{I._isLeaving&&(Qi(I,f),ei(I,v),Mu(E)||yu(I,i,p,X))}),Ji(E,[I,X])},onEnterCancelled(I){M(I,!1,void 0,!0),Ji(b,[I])},onAppearCancelled(I){M(I,!0,void 0,!0),Ji(U,[I])},onLeaveCancelled(I){S(I),Ji(C,[I])}})}function jm(n){if(n==null)return null;if(ht(n))return[Pa(n.enter),Pa(n.leave)];{const e=Pa(n);return[e,e]}}function Pa(n){return Jh(n)}function ei(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ys]||(n[Ys]=new Set)).add(e)}function Qi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ys];t&&(t.delete(e),t.size||(n[Ys]=void 0))}function Su(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Zm=0;function yu(n,e,t,i){const r=n._endId=++Zm,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Jm(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=v=>{v.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Jm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${wi}Delay`),s=i(`${wi}Duration`),o=Eu(r,s),a=i(`${Ss}Delay`),l=i(`${Ss}Duration`),c=Eu(a,l);let u=null,f=0,h=0;e===wi?o>0&&(u=wi,f=o,h=s.length):e===Ss?c>0&&(u=Ss,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?wi:Ss:null,h=u?u===wi?s.length:l.length:0);const v=u===wi&&/\b(?:transform|all)(?:,|$)/.test(i(`${wi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:v}}function Eu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>bu(t)+bu(n[i])))}function bu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Tu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Qm(n,e,t){const i=n[Ys];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const jo=Symbol("_vod"),ah=Symbol("_vsh"),Wr={name:"show",beforeMount(n,{value:e},{transition:t}){n[jo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ys(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ys(n,!0),i.enter(n)):i.leave(n,()=>{ys(n,!1)}):ys(n,e))},beforeUnmount(n,{value:e}){ys(n,e)}};function ys(n,e){n.style.display=e?n[jo]:"none",n[ah]=!e}const eg=Symbol(""),tg=/(?:^|;)\s*display\s*:/;function ng(n,e,t){const i=n.style,r=At(t);let s=!1;if(t&&!r){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Fo(i,a,"")}else for(const o in e)t[o]==null&&Fo(i,o,"");for(const o in t)o==="display"&&(s=!0),Fo(i,o,t[o])}else if(r){if(e!==t){const o=i[eg];o&&(t+=";"+o),i.cssText=t,s=tg.test(t)}}else e&&n.removeAttribute("style");jo in n&&(n[jo]=s?i.display:"",n[ah]&&(i.display="none"))}const wu=/\s*!important$/;function Fo(n,e,t){if($e(t))t.forEach(i=>Fo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ig(n,e);wu.test(t)?n.setProperty(Xi(i),t.replace(wu,""),"important"):n[i]=t}}const Au=["Webkit","Moz","ms"],La={};function ig(n,e){const t=La[e];if(t)return t;let i=Dn(e);if(i!=="filter"&&i in n)return La[e]=i;i=Qf(i);for(let r=0;r<Au.length;r++){const s=Au[r]+i;if(s in n)return La[e]=s}return e}const Cu="http://www.w3.org/1999/xlink";function Ru(n,e,t,i,r,s=rp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cu,e.slice(6,e.length)):n.setAttributeNS(Cu,e,t):t==null||s&&!td(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Nn(t)?String(t):t)}function Pu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=td(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Ni(n,e,t,i){n.addEventListener(e,t,i)}function rg(n,e,t,i){n.removeEventListener(e,t,i)}const Lu=Symbol("_vei");function sg(n,e,t,i,r=null){const s=n[Lu]||(n[Lu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=og(e);if(i){const c=s[e]=cg(i,r);Ni(n,a,c,l)}else o&&(rg(n,a,o,l),s[e]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function og(n){let e;if(Du.test(n)){e={};let i;for(;i=n.match(Du);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xi(n.slice(2)),e]}let Da=0;const ag=Promise.resolve(),lg=()=>Da||(ag.then(()=>Da=0),Da=Date.now());function cg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;On(ug(i,t.value),e,5,[i])};return t.value=n,t.attached=lg(),t}function ug(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Iu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,fg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Qm(n,i,o):e==="style"?ng(n,t,i):ia(e)?ra(e)||sg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dg(n,e,i,o))?(Pu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ru(n,e,i,o,s,e!=="value")):n._isVueCE&&(hg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!At(i)))?Pu(n,Dn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ru(n,e,i,o))};function dg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Iu(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Iu(e)&&At(t)?!1:e in n}function hg(n,e){const t=n._def.props;if(!t)return!1;const i=Dn(e);return Array.isArray(t)?t.some(r=>Dn(r)===i):Object.keys(t).some(r=>Dn(r)===i)}const is=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>Uo(e,t):e};function pg(n){n.target.composing=!0}function Uu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mi=Symbol("_assign");function Nu(n,e,t){return e&&(n=n.trim()),t&&(n=oa(n)),n}const lh={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[mi]=is(r);const s=i||r.props&&r.props.type==="number";Ni(n,e?"change":"input",o=>{o.target.composing||n[mi](Nu(n.value,t,s))}),(t||s)&&Ni(n,"change",()=>{n.value=Nu(n.value,t,s)}),e||(Ni(n,"compositionstart",pg),Ni(n,"compositionend",Uu),Ni(n,"change",Uu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[mi]=is(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?oa(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},er={deep:!0,created(n,e,t){n[mi]=is(t),Ni(n,"change",()=>{const i=n._modelValue,r=$s(n),s=n.checked,o=n[mi];if($e(i)){const a=yc(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(us(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(ch(n,s))})},mounted:Fu,beforeUpdate(n,e,t){n[mi]=is(t),Fu(n,e,t)}};function Fu(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if($e(e))r=yc(e,i.props.value)>-1;else if(us(e))r=e.has(i.props.value);else{if(e===t)return;r=fs(e,ch(n,!0))}n.checked!==r&&(n.checked=r)}const mg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=us(e);Ni(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?oa($s(o)):$s(o));n[mi](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,En(()=>{n._assigning=!1})}),n[mi]=is(i)},mounted(n,{value:e}){Ou(n,e)},beforeUpdate(n,e,t){n[mi]=is(t)},updated(n,{value:e}){n._assigning||Ou(n,e)}};function Ou(n,e){const t=n.multiple,i=$e(e);if(!(t&&!i&&!us(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=$s(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=yc(e,a)>-1}else o.selected=e.has(a);else if(fs($s(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function $s(n){return"_value"in n?n._value:n.value}function ch(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const gg=["ctrl","shift","alt","meta"],vg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>gg.some(t=>n[`${t}Key`]&&!e.includes(t))},Oi=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=vg[e[o]];if(a&&a(r,e))return}return n(r,...s)})},_g={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xg=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=Xi(r.key);if(e.some(o=>o===s||_g[o]===s))return n(r)})},Mg=Dt({patchProp:fg},Xm);let Bu;function Sg(){return Bu||(Bu=bm(Mg))}const yg=(...n)=>{const e=Sg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=bg(i);if(!r)return;const s=e._component;!Je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Eg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Eg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bg(n){return At(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="170",Tg=0,ku=1,wg=2,uh=1,Ag=2,oi=3,Vi=0,ln=1,di=2,ki=0,Qr=1,zu=2,Hu=3,Vu=4,Cg=5,dr=100,Rg=101,Pg=102,Lg=103,Dg=104,Ig=200,Ug=201,Ng=202,Fg=203,Rl=204,Pl=205,Og=206,Bg=207,kg=208,zg=209,Hg=210,Vg=211,Gg=212,Wg=213,Xg=214,Ll=0,Dl=1,Il=2,rs=3,Ul=4,Nl=5,Fl=6,Ol=7,fh=0,Yg=1,$g=2,zi=0,qg=1,Kg=2,jg=3,Zg=4,Jg=5,Qg=6,ev=7,dh=300,ss=301,os=302,Bl=303,kl=304,ma=306,zl=1e3,pr=1001,Hl=1002,Un=1003,tv=1004,co=1005,Et=1006,Ia=1007,mr=1008,Mi=1009,hh=1010,ph=1011,qs=1012,Nc=1013,yr=1014,hi=1015,Js=1016,Fc=1017,Oc=1018,as=1020,mh=35902,gh=1021,vh=1022,Ln=1023,_h=1024,xh=1025,es=1026,ls=1027,Mh=1028,Bc=1029,Sh=1030,kc=1031,zc=1033,Oo=33776,Bo=33777,ko=33778,zo=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,Yl=36196,$l=37492,ql=37496,Kl=37808,jl=37809,Zl=37810,Jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,rc=37817,sc=37818,oc=37819,ac=37820,lc=37821,Ho=36492,cc=36494,uc=36495,yh=36283,fc=36284,dc=36285,hc=36286,nv=3200,iv=3201,rv=0,sv=1,Fi="",Mn="srgb",ds="srgb-linear",ga="linear",mt="srgb",Rr=7680,Gu=519,ov=512,av=513,lv=514,Eh=515,cv=516,uv=517,fv=518,dv=519,Wu=35044,Xu="300 es",pi=2e3,Zo=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ua=Math.PI/180,pc=180/Math.PI;function Qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function hv(n,e){return(n%e+e)%e}function Na(n,e,t){return(1-t)*n+t*e}function Es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],v=i[5],_=i[8],x=r[0],p=r[3],d=r[6],A=r[1],b=r[4],E=r[7],C=r[2],P=r[5],R=r[8];return s[0]=o*x+a*A+l*C,s[3]=o*p+a*b+l*P,s[6]=o*d+a*E+l*R,s[1]=c*x+u*A+f*C,s[4]=c*p+u*b+f*P,s[7]=c*d+u*E+f*R,s[2]=h*x+v*A+_*C,s[5]=h*p+v*b+_*P,s[8]=h*d+v*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,v=c*s-o*l,_=t*f+i*h+r*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=v*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new tt;function bh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pv(){const n=Jo("canvas");return n.style.display="block",n}const Yu={};function Ps(n){n in Yu||(Yu[n]=!0,console.warn(n))}function mv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function gv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(n.r=gi(n.r),n.g=gi(n.g),n.b=gi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(n.r=ts(n.r),n.g=ts(n.g),n.b=ts(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Fi?ga:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const $u=[.64,.33,.3,.6,.15,.06],qu=[.2126,.7152,.0722],Ku=[.3127,.329],ju=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[ds]:{primaries:$u,whitePoint:Ku,transfer:ga,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:qu,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:$u,whitePoint:Ku,transfer:mt,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:qu,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let Pr;class _v{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=Jo("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xv=0;class Th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_v.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mv=0;class en extends hs{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=pr,r=pr,s=Et,o=mr,a=Ln,l=Mi,c=en.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Qs(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=dh;en.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],v=l[5],_=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+v+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(v+1)/2,C=(d+1)/2,P=(u+h)/4,R=(f+x)/4,U=(_+p)/4;return b>E&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=P/i,s=R/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=U/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+v+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sv extends hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Th(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends Sv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wh extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yv extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],v=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=v,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==v||u!==_){let p=1-a;const d=l*h+c*v+u*_+f*x,A=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const C=Math.sqrt(b),P=Math.atan2(C,d*A);p=Math.sin(p*P)/C,a=Math.sin(a*P)/C}const E=a*A;if(l=l*p+h*E,c=c*p+v*E,u=u*p+_*E,f=f*p+x*E,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],v=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*v-c*h,e[t+1]=l*_+u*h+c*f-a*v,e[t+2]=c*_+u*v+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),v=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*v*_,this._y=c*v*f-h*u*_,this._z=c*u*_+h*v*f,this._w=c*u*f-h*v*_;break;case"YXZ":this._x=h*u*f+c*v*_,this._y=c*v*f-h*u*_,this._z=c*u*_-h*v*f,this._w=c*u*f+h*v*_;break;case"ZXY":this._x=h*u*f-c*v*_,this._y=c*v*f+h*u*_,this._z=c*u*_+h*v*f,this._w=c*u*f-h*v*_;break;case"ZYX":this._x=h*u*f-c*v*_,this._y=c*v*f+h*u*_,this._z=c*u*_-h*v*f,this._w=c*u*f+h*v*_;break;case"YZX":this._x=h*u*f+c*v*_,this._y=c*v*f+h*u*_,this._z=c*u*_-h*v*f,this._w=c*u*f-h*v*_;break;case"XZY":this._x=h*u*f-c*v*_,this._y=c*v*f-h*u*_,this._z=c*u*_+h*v*f,this._w=c*u*f+h*v*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(u-l)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(i>a&&i>f){const v=2*Math.sqrt(1+i-a-f);this._w=(u-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>f){const v=2*Math.sqrt(1+a-i-f);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+u)/v}else{const v=2*Math.sqrt(1+f-i-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(l+u)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,i=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new le,Ju=new eo;class to{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),fo.subVectors(this.max,bs),Lr.subVectors(e.a,bs),Dr.subVectors(e.b,bs),Ir.subVectors(e.c,bs),Ai.subVectors(Dr,Lr),Ci.subVectors(Ir,Dr),tr.subVectors(Lr,Ir);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-tr.z,tr.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,tr.z,0,-tr.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-tr.y,tr.x,0];return!ka(t,Lr,Dr,Ir,fo)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Lr,Dr,Ir,fo))?!1:(ho.crossVectors(Ai,Ci),t=[ho.x,ho.y,ho.z],ka(t,Lr,Dr,Ir,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new le,new le,new le,new le,new le,new le,new le,new le],wn=new le,uo=new to,Lr=new le,Dr=new le,Ir=new le,Ai=new le,Ci=new le,tr=new le,bs=new le,fo=new le,ho=new le,nr=new le;function ka(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){nr.fromArray(n,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ev=new to,Ts=new le,za=new le;class Hc{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ev.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(za)),this.expandByPoint(Ts.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new le,Ha=new le,po=new le,Ri=new le,Va=new le,mo=new le,Ga=new le;class bv{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ha.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=Ri.dot(this.direction),l=-Ri.dot(po),c=Ri.lengthSq(),u=Math.abs(1-o*o);let f,h,v,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,v=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),v=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),v=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),v=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ha).addScaledVector(po,h),v}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,r,s){Va.subVectors(t,e),mo.subVectors(i,e),Ga.crossVectors(Va,mo);let o=this.direction.dot(Ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(mo.crossVectors(Ri,mo));if(l<0)return null;const c=a*this.direction.dot(Va.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(Ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,v,_,x,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,v,_,x,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,v,_,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=v,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,v=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=v+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+v*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,v=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-v,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=v*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,v=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+v*a,t[1]=v+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,v=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-v,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=v*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,v=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+v,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=v*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,v=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=v*f-_,t[2]=_*f-v,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,wv)}lookAt(e,t,i){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Pi.crossVectors(i,un),Pi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Pi.crossVectors(i,un)),Pi.normalize(),go.crossVectors(un,Pi),r[0]=Pi.x,r[4]=go.x,r[8]=un.x,r[1]=Pi.y,r[5]=go.y,r[9]=un.y,r[2]=Pi.z,r[6]=go.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],v=i[13],_=i[2],x=i[6],p=i[10],d=i[14],A=i[3],b=i[7],E=i[11],C=i[15],P=r[0],R=r[4],U=r[8],M=r[12],S=r[1],D=r[5],I=r[9],k=r[13],X=r[2],K=r[6],W=r[10],$=r[14],B=r[3],ce=r[7],Z=r[11],me=r[15];return s[0]=o*P+a*S+l*X+c*B,s[4]=o*R+a*D+l*K+c*ce,s[8]=o*U+a*I+l*W+c*Z,s[12]=o*M+a*k+l*$+c*me,s[1]=u*P+f*S+h*X+v*B,s[5]=u*R+f*D+h*K+v*ce,s[9]=u*U+f*I+h*W+v*Z,s[13]=u*M+f*k+h*$+v*me,s[2]=_*P+x*S+p*X+d*B,s[6]=_*R+x*D+p*K+d*ce,s[10]=_*U+x*I+p*W+d*Z,s[14]=_*M+x*k+p*$+d*me,s[3]=A*P+b*S+E*X+C*B,s[7]=A*R+b*D+E*K+C*ce,s[11]=A*U+b*I+E*W+C*Z,s[15]=A*M+b*k+E*$+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],v=e[14],_=e[3],x=e[7],p=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*v-i*l*v)+x*(+t*l*v-t*c*h+s*o*h-r*o*v+r*c*u-s*l*u)+p*(+t*c*f-t*a*v-s*o*f+i*o*v+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],v=e[11],_=e[12],x=e[13],p=e[14],d=e[15],A=f*p*c-x*h*c+x*l*v-a*p*v-f*l*d+a*h*d,b=_*h*c-u*p*c-_*l*v+o*p*v+u*l*d-o*h*d,E=u*x*c-_*f*c+_*a*v-o*x*v-u*a*d+o*f*d,C=_*f*l-u*x*l-_*a*h+o*x*h+u*a*p-o*f*p,P=t*A+i*b+r*E+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=A*R,e[1]=(x*h*s-f*p*s-x*r*v+i*p*v+f*r*d-i*h*d)*R,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*v-i*l*v)*R,e[4]=b*R,e[5]=(u*p*s-_*h*s+_*r*v-t*p*v-u*r*d+t*h*d)*R,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*d-t*l*d)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*v+t*l*v)*R,e[8]=E*R,e[9]=(_*f*s-u*x*s-_*i*v+t*x*v+u*i*d-t*f*d)*R,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*d+t*a*d)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*v-t*a*v)*R,e[12]=C*R,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*p+t*f*p)*R,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*p-t*a*p)*R,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,v=s*u,_=s*f,x=o*u,p=o*f,d=a*f,A=l*c,b=l*u,E=l*f,C=i.x,P=i.y,R=i.z;return r[0]=(1-(x+d))*C,r[1]=(v+E)*C,r[2]=(_-b)*C,r[3]=0,r[4]=(v-E)*P,r[5]=(1-(h+d))*P,r[6]=(p+A)*P,r[7]=0,r[8]=(_+b)*R,r[9]=(p-A)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const c=1/s,u=1/o,f=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=pi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let v,_;if(a===pi)v=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Zo)v=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=pi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,v=(i+r)*u;let _,x;if(a===pi)_=(o+s)*f,x=-2*f;else if(a===Zo)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ur=new le,An=new Rt,Tv=new le(0,0,0),wv=new le(1,1,1),Pi=new le,go=new le,un=new le,Qu=new Rt,ef=new eo;class Si{constructor(e=0,t=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Av=0;const tf=new le,Nr=new eo,ii=new Rt,vo=new le,ws=new le,Cv=new le,Rv=new eo,nf=new le(1,0,0),rf=new le(0,1,0),sf=new le(0,0,1),of={type:"added"},Pv={type:"removed"},Fr={type:"childadded",child:null},Wa={type:"childremoved",child:null};class mn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new le,t=new Si,i=new eo,r=new le(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new tt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ws,vo,this.up):ii.lookAt(vo,ws,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(ii),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(of),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pv),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(of),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),v=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),v.length>0&&(i.animations=v),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new le(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new le,ri=new le,Xa=new le,si=new le,Or=new le,Br=new le,af=new le,Ya=new le,$a=new le,qa=new le,Ka=new wt,ja=new wt,Za=new wt;class Pn{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Cn.subVectors(e,t),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Cn.subVectors(r,t),ri.subVectors(i,t),Xa.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(ri),l=Cn.dot(Xa),c=ri.dot(ri),u=ri.dot(Xa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,v=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-v-_,_,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ka.setScalar(0),ja.setScalar(0),Za.setScalar(0),Ka.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,i),Za.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ka,s.x),o.addScaledVector(ja,s.y),o.addScaledVector(Za,s.z),o}static isFrontFacing(e,t,i,r){return Cn.subVectors(i,t),ri.subVectors(e,t),Cn.cross(ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Cn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),Br.subVectors(s,i),Ya.subVectors(e,i);const l=Or.dot(Ya),c=Br.dot(Ya);if(l<=0&&c<=0)return t.copy(i);$a.subVectors(e,r);const u=Or.dot($a),f=Br.dot($a);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Or,o);qa.subVectors(e,s);const v=Or.dot(qa),_=Br.dot(qa);if(_>=0&&v<=_)return t.copy(s);const x=v*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Br,a);const p=u*_-v*f;if(p<=0&&f-u>=0&&v-_>=0)return af.subVectors(s,r),a=(f-u)/(f-u+(v-_)),t.copy(r).addScaledVector(af,a);const d=1/(p+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(Or,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=hv(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ja(o,s,e+1/3),this.g=Ja(o,s,e),this.b=Ja(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const i=Ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return ot.fromWorkingColorSpace(zt.copy(this),e),Math.round(an(zt.r*255,0,255))*65536+Math.round(an(zt.g*255,0,255))*256+Math.round(an(zt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Mn){ot.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(_o);const i=Na(Li.h,_o.h,t),r=Na(Li.s,_o.s,t),s=Na(Li.l,_o.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new dt;dt.NAMES=Ch;let Lv=0;class va extends hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Qs(),this.name="",this.blending=Qr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rh extends va{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new le,xo=new gt;class Kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wu,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wu&&(e.usage=this.usage),e}}class Ph extends Kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lh extends Kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xr extends Kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dv=0;const xn=new Rt,Qa=new mn,kr=new le,fn=new to,As=new to,Ft=new le;class Tr extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bh(e)?Lh:Ph)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xr(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(fn.min,As.min),fn.expandByPoint(Ft),Ft.addVectors(fn.max,As.max),fn.expandByPoint(Ft)):(fn.expandByPoint(As.min),fn.expandByPoint(As.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),Ft.add(kr)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new le,l[U]=new le;const c=new le,u=new le,f=new le,h=new gt,v=new gt,_=new gt,x=new le,p=new le;function d(U,M,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,U),v.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),u.sub(c),f.sub(c),v.sub(h),_.sub(h);const D=1/(v.x*_.y-_.x*v.y);isFinite(D)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-v.y).multiplyScalar(D),p.copy(f).multiplyScalar(v.x).addScaledVector(u,-_.x).multiplyScalar(D),a[U].add(x),a[M].add(x),a[S].add(x),l[U].add(p),l[M].add(p),l[S].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,M=A.length;U<M;++U){const S=A[U],D=S.start,I=S.count;for(let k=D,X=D+I;k<X;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new le,E=new le,C=new le,P=new le;function R(U){C.fromBufferAttribute(r,U),P.copy(C);const M=a[U];b.copy(M),b.sub(C.multiplyScalar(C.dot(M))).normalize(),E.crossVectors(P,M);const D=E.dot(l[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,D)}for(let U=0,M=A.length;U<M;++U){const S=A[U],D=S.start,I=S.count;for(let k=D,X=D+I;k<X;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,v=i.count;h<v;h++)i.setXYZ(h,0,0,0);const r=new le,s=new le,o=new le,a=new le,l=new le,c=new le,u=new le,f=new le;if(e)for(let h=0,v=e.count;h<v;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,v=t.count;h<v;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let v=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?v=l[x]*a.data.stride+a.offset:v=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[v++]}return new Kn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],v=e(h,i);l.push(v)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const v=c[f];u.push(v.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,v=f.length;h<v;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lf=new Rt,ir=new bv,Mo=new Hc,cf=new le,So=new le,yo=new le,Eo=new le,el=new le,bo=new le,uf=new le,To=new le;class pn extends mn{constructor(e=new Tr,t=new Rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(el.fromBufferAttribute(f,e),o?bo.addScaledVector(el,u):bo.addScaledVector(el.sub(t),u))}t.add(bo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(Mo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Mo,cf)===null||ir.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(s).invert(),ir.copy(e.ray).applyMatrix4(lf),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=o[p.materialIndex],A=Math.max(p.start,v.start),b=Math.min(a.count,Math.min(p.start+p.count,v.start+v.count));for(let E=A,C=b;E<C;E+=3){const P=a.getX(E),R=a.getX(E+1),U=a.getX(E+2);r=wo(this,d,e,i,c,u,f,P,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,v.start),x=Math.min(a.count,v.start+v.count);for(let p=_,d=x;p<d;p+=3){const A=a.getX(p),b=a.getX(p+1),E=a.getX(p+2);r=wo(this,o,e,i,c,u,f,A,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=o[p.materialIndex],A=Math.max(p.start,v.start),b=Math.min(l.count,Math.min(p.start+p.count,v.start+v.count));for(let E=A,C=b;E<C;E+=3){const P=E,R=E+1,U=E+2;r=wo(this,d,e,i,c,u,f,P,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,v.start),x=Math.min(l.count,v.start+v.count);for(let p=_,d=x;p<d;p+=3){const A=p,b=p+1,E=p+2;r=wo(this,o,e,i,c,u,f,A,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Iv(n,e,t,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:n}}function wo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,So),n.getVertexPosition(l,yo),n.getVertexPosition(c,Eo);const u=Iv(n,e,t,i,So,yo,Eo,uf);if(u){const f=new le;Pn.getBarycoord(uf,So,yo,Eo,f),r&&(u.uv=Pn.getInterpolatedAttribute(r,a,l,c,f,new gt)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,a,l,c,f,new gt)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,l,c,f,new le),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new le,materialIndex:0};Pn.getNormal(So,yo,Eo,h.normal),u.face=h,u.barycoord=f}return u}class no extends Tr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,v=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xr(c,3)),this.setAttribute("normal",new xr(u,3)),this.setAttribute("uv",new xr(f,2));function _(x,p,d,A,b,E,C,P,R,U,M){const S=E/R,D=C/U,I=E/2,k=C/2,X=P/2,K=R+1,W=U+1;let $=0,B=0;const ce=new le;for(let Z=0;Z<W;Z++){const me=Z*D-k;for(let we=0;we<K;we++){const Xe=we*S-I;ce[x]=Xe*A,ce[p]=me*b,ce[d]=X,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[p]=0,ce[d]=P>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(we/R),f.push(1-Z/U),$+=1}}for(let Z=0;Z<U;Z++)for(let me=0;me<R;me++){const we=h+me+K*Z,Xe=h+me+K*(Z+1),se=h+(me+1)+K*(Z+1),ge=h+(me+1)+K*Z;l.push(we,Xe,ge),l.push(Xe,se,ge),B+=6}a.addGroup(v,B,M),v+=B,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=cs(n[t]);for(const r in i)e[r]=i[r]}return e}function Uv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Nv={clone:cs,merge:qt};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends va{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=Uv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ih extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new le,ff=new gt,df=new gt;class Rn extends Ih{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,ff,df),t.subVectors(df,ff)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Hr=1;class Bv extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(zr,Hr,e,t);r.layers=this.layers,this.add(r);const s=new Rn(zr,Hr,e,t);s.layers=this.layers,this.add(s);const o=new Rn(zr,Hr,e,t);o.layers=this.layers,this.add(o);const a=new Rn(zr,Hr,e,t);a.layers=this.layers,this.add(a);const l=new Rn(zr,Hr,e,t);l.layers=this.layers,this.add(l);const c=new Rn(zr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,v),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Uh extends en{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kv extends Er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new no(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ki});s.uniforms.tEquirect.value=t;const o=new pn(r,s),a=t.minFilter;return t.minFilter===mr&&(t.minFilter=Et),new Bv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const tl=new le,zv=new le,Hv=new tt;class lr{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=tl.subVectors(i,t).cross(zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hv.getNormalMatrix(e),r=this.coplanarPoint(tl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Hc,Ao=new le;class Nh{constructor(e=new lr,t=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],v=r[8],_=r[9],x=r[10],p=r[11],d=r[12],A=r[13],b=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,p-v,E-d).normalize(),i[1].setComponents(l+s,h+c,p+v,E+d).normalize(),i[2].setComponents(l+o,h+u,p+_,E+A).normalize(),i[3].setComponents(l-o,h-u,p-_,E-A).normalize(),i[4].setComponents(l-a,h-f,p-x,E-b).normalize(),t===pi)i[5].setComponents(l+a,h+f,p+x,E+b).normalize();else if(t===Zo)i[5].setComponents(a,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let v;if(c instanceof Float32Array)v=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=n.SHORT;else if(c instanceof Uint32Array)v=n.UNSIGNED_INT;else if(c instanceof Int32Array)v=n.INT;else if(c instanceof Int8Array)v=n.BYTE;else if(c instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((v,_)=>v.start-_.start);let h=0;for(let v=1;v<f.length;v++){const _=f[h],x=f[v];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let v=0,_=f.length;v<_;v++){const x=f[v];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class $i extends Tr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,v=[],_=[],x=[],p=[];for(let d=0;d<u;d++){const A=d*h-o;for(let b=0;b<c;b++){const E=b*f-s;_.push(E,-A,0),x.push(0,0,1),p.push(b/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const b=A+c*d,E=A+c*(d+1),C=A+1+c*(d+1),P=A+1+c*d;v.push(b,E,P),v.push(E,C,P)}this.setIndex(v),this.setAttribute("position",new xr(_,3)),this.setAttribute("normal",new xr(x,3)),this.setAttribute("uv",new xr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
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
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kv=`#ifdef USE_AOMAP
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
#endif`,jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
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
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n_=`#ifdef USE_IRIDESCENCE
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
#endif`,i_=`#ifdef USE_BUMPMAP
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d_=`#define PI 3.141592653589793
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
} // validated`,h_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p_=`vec3 transformedNormal = objectNormal;
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
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
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
}`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U_=`uniform bool receiveShadow;
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
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,F_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#endif`,H_=`struct PhysicalMaterial {
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
}`,V_=`
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
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
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J_=`#if defined( USE_POINTS_UV )
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
#endif`,Q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A0=`float getShadowMask() {
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
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
}`,K0=`#if DEPTH_PACKING == 3200
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
}`,j0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,sx=`#define LAMBERT
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
}`,ox=`#define MATCAP
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
}`,ax=`#define MATCAP
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
}`,lx=`#define NORMAL
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
}`,cx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,dx=`#define STANDARD
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
}`,hx=`#define STANDARD
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
}`,px=`#define TOON
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
}`,mx=`#define TOON
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
}`,gx=`uniform float size;
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
}`,vx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,xx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Gv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:Yv,alphatest_fragment:$v,alphatest_pars_fragment:qv,aomap_fragment:Kv,aomap_pars_fragment:jv,batching_pars_vertex:Zv,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:e_,bsdfs:t_,iridescence_fragment:n_,bumpmap_pars_fragment:i_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:a_,color_fragment:l_,color_pars_fragment:c_,color_pars_vertex:u_,color_vertex:f_,common:d_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:g_,emissivemap_fragment:v_,emissivemap_pars_fragment:__,colorspace_fragment:x_,colorspace_pars_fragment:M_,envmap_fragment:S_,envmap_common_pars_fragment:y_,envmap_pars_fragment:E_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:N_,envmap_vertex:T_,fog_vertex:w_,fog_pars_vertex:A_,fog_fragment:C_,fog_pars_fragment:R_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:L_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:I_,lights_pars_begin:U_,lights_toon_fragment:F_,lights_toon_pars_fragment:O_,lights_phong_fragment:B_,lights_phong_pars_fragment:k_,lights_physical_fragment:z_,lights_physical_pars_fragment:H_,lights_fragment_begin:V_,lights_fragment_maps:G_,lights_fragment_end:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:q_,map_fragment:K_,map_pars_fragment:j_,map_particle_fragment:Z_,map_particle_pars_fragment:J_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:e0,morphinstance_vertex:t0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:r0,morphtarget_vertex:s0,normal_fragment_begin:o0,normal_fragment_maps:a0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:u0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:v0,premultiplied_alpha_fragment:_0,project_vertex:x0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:T0,shadowmap_vertex:w0,shadowmask_pars_fragment:A0,skinbase_vertex:C0,skinning_pars_vertex:R0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:I0,tonemapping_fragment:U0,tonemapping_pars_fragment:N0,transmission_fragment:F0,transmission_pars_fragment:O0,uv_pars_fragment:B0,uv_pars_vertex:k0,uv_vertex:z0,worldpos_vertex:H0,background_vert:V0,background_frag:G0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:Y0,cube_frag:$0,depth_vert:q0,depth_frag:K0,distanceRGBA_vert:j0,distanceRGBA_frag:Z0,equirect_vert:J0,equirect_frag:Q0,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:rx,meshlambert_frag:sx,meshmatcap_vert:ox,meshmatcap_frag:ax,meshnormal_vert:lx,meshnormal_frag:cx,meshphong_vert:ux,meshphong_frag:fx,meshphysical_vert:dx,meshphysical_frag:hx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:vx,shadow_vert:_x,shadow_frag:xx,sprite_vert:Mx,sprite_frag:Sx},Le={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Xn={basic:{uniforms:qt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:qt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new dt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:qt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:qt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:qt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new dt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:qt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:qt([Le.points,Le.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:qt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:qt([Le.common,Le.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:qt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:qt([Le.sprite,Le.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:qt([Le.common,Le.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:qt([Le.lights,Le.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Xn.physical={uniforms:qt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Co={r:0,b:0,g:0},sr=new Si,yx=new Rt;function Ex(n,e,t,i,r,s,o){const a=new dt(0);let l=s===!0?0:1,c,u,f=null,h=0,v=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function x(A){let b=!1;const E=_(A);E===null?d(a,l):E&&E.isColor&&(d(E,1),b=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,b){const E=_(b);E&&(E.isCubeTexture||E.mapping===ma)?(u===void 0&&(u=new pn(new no(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:cs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),sr.copy(b.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(sr)),u.material.toneMapped=ot.getTransfer(E.colorSpace)!==mt,(f!==E||h!==E.version||v!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,v=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new pn(new $i(2,2),new bn({name:"BackgroundMaterial",uniforms:cs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ot.getTransfer(E.colorSpace)!==mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||v!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,v=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,b){A.getRGB(Co,Dh(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:x,addToRenderList:p}}function bx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,I,k,X){let K=!1;const W=f(k,I,D);s!==W&&(s=W,c(s.object)),K=v(S,k,I,X),K&&_(S,k,I,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,E(S,D,I,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,D,I){const k=I.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let K=X[D.id];K===void 0&&(K={},X[D.id]=K);let W=K[k];return W===void 0&&(W=h(l()),K[k]=W),W}function h(S){const D=[],I=[],k=[];for(let X=0;X<t;X++)D[X]=0,I[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:k,object:S,attributes:{},index:null}}function v(S,D,I,k){const X=s.attributes,K=D.attributes;let W=0;const $=I.getAttributes();for(const B in $)if($[B].location>=0){const Z=X[B];let me=K[B];if(me===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),Z===void 0||Z.attribute!==me||me&&Z.data!==me.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function _(S,D,I,k){const X={},K=D.attributes;let W=0;const $=I.getAttributes();for(const B in $)if($[B].location>=0){let Z=K[B];Z===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const me={};me.attribute=Z,Z&&Z.data&&(me.data=Z.data),X[B]=me,W++}s.attributes=X,s.attributesNum=W,s.index=k}function x(){const S=s.newAttributes;for(let D=0,I=S.length;D<I;D++)S[D]=0}function p(S){d(S,0)}function d(S,D){const I=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;I[S]=1,k[S]===0&&(n.enableVertexAttribArray(S),k[S]=1),X[S]!==D&&(n.vertexAttribDivisor(S,D),X[S]=D)}function A(){const S=s.newAttributes,D=s.enabledAttributes;for(let I=0,k=D.length;I<k;I++)D[I]!==S[I]&&(n.disableVertexAttribArray(I),D[I]=0)}function b(S,D,I,k,X,K,W){W===!0?n.vertexAttribIPointer(S,D,I,X,K):n.vertexAttribPointer(S,D,I,k,X,K)}function E(S,D,I,k){x();const X=k.attributes,K=I.getAttributes(),W=D.defaultAttributeValues;for(const $ in K){const B=K[$];if(B.location>=0){let ce=X[$];if(ce===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){const Z=ce.normalized,me=ce.itemSize,we=e.get(ce);if(we===void 0)continue;const Xe=we.buffer,se=we.type,ge=we.bytesPerElement,Se=se===n.INT||se===n.UNSIGNED_INT||ce.gpuType===Nc;if(ce.isInterleavedBufferAttribute){const _e=ce.data,de=_e.stride,ve=ce.offset;if(_e.isInstancedInterleavedBuffer){for(let Re=0;Re<B.locationSize;Re++)d(B.location+Re,_e.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Re=0;Re<B.locationSize;Re++)p(B.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let Re=0;Re<B.locationSize;Re++)b(B.location+Re,me/B.locationSize,se,Z,de*ge,(ve+me/B.locationSize*Re)*ge,Se)}else{if(ce.isInstancedBufferAttribute){for(let _e=0;_e<B.locationSize;_e++)d(B.location+_e,ce.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<B.locationSize;_e++)p(B.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let _e=0;_e<B.locationSize;_e++)b(B.location+_e,me/B.locationSize,se,Z,me*ge,me/B.locationSize*_e*ge,Se)}}else if(W!==void 0){const Z=W[$];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(B.location,Z);break;case 3:n.vertexAttrib3fv(B.location,Z);break;case 4:n.vertexAttrib4fv(B.location,Z);break;default:n.vertexAttrib1fv(B.location,Z)}}}}A()}function C(){U();for(const S in i){const D=i[S];for(const I in D){const k=D[I];for(const X in k)u(k[X].object),delete k[X];delete D[I]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const I in D){const k=D[I];for(const X in k)u(k[X].object),delete k[X];delete D[I]}delete i[S.id]}function R(S){for(const D in i){const I=i[D];if(I[S.id]===void 0)continue;const k=I[S.id];for(const X in k)u(k[X].object),delete k[X];delete I[S.id]}}function U(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:A}}function Tx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let v=0;for(let _=0;_<f;_++)v+=u[_];t.update(v,i,1)}function l(c,u,f,h){if(f===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{v.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Mi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hi&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:v,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:C,maxSamples:P}}function Ax(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new lr,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const v=f.length!==0||h||i!==0||r;return r=h,i=f.length,v},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,v){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const A=s?0:i,b=A*4;let E=d.clippingState||null;l.value=E,E=u(_,h,b,v);for(let C=0;C!==b;++C)E[C]=t[C];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,v,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const d=v+x*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,E=v;b!==x;++b,E+=4)o.copy(f[b]).applyMatrix4(A,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Cx(n){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=ss:a===kl&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class io extends Ih{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,hf=[.125,.215,.35,.446,.526,.582],hr=20,nl=new io,pf=new dt;let il=null,rl=0,sl=0,ol=!1;const cr=(1+Math.sqrt(5))/2,Vr=1/cr,mf=[new le(-cr,Vr,0),new le(cr,Vr,0),new le(-Vr,0,cr),new le(Vr,0,cr),new le(0,cr,-Vr),new le(0,cr,Vr),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class gf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,rl,sl),this._renderer.xr.enabled=ol,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Js,format:Ln,colorSpace:ds,depthBuffer:!1},r=vf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rx(s)),this._blurMaterial=Px(s,e,t)}return r}_compileMaterial(e){const t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,r){const a=new Rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(pf),u.toneMapping=zi,u.autoClear=!1;const v=new Rh({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new pn(new no,v);let x=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,x=!0):(v.color.copy(pf),x=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const b=this._cubeSize;Ro(r,A*b,d>2?b:0,b,b),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ro(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mf[(r-s-1)%mf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pn(this._lodPlanes[r],c),h=c.uniforms,v=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*hr-1),x=s/_,p=isFinite(s)?1+Math.floor(u*x):hr;p>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const d=[];let A=0;for(let R=0;R<hr;++R){const U=R/x,M=Math.exp(-U*U/2);d.push(M),R===0?A+=M:R<p&&(A+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/A;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const E=this._sizeLods[r],C=3*E*(r>b-Xr?r-b+Xr:0),P=4*(this._cubeSize-E);Ro(t,C,P,3*E,2*E),l.setRenderTarget(t),l.render(f,nl)}}function Rx(n){const e=[],t=[],i=[];let r=n;const s=n-Xr+1+hf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Xr?l=hf[o-n+Xr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],v=6,_=6,x=3,p=2,d=1,A=new Float32Array(x*_*v),b=new Float32Array(p*_*v),E=new Float32Array(d*_*v);for(let P=0;P<v;P++){const R=P%3*2/3-1,U=P>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];A.set(M,x*_*P),b.set(h,p*_*P);const S=[P,P,P,P,P,P];E.set(S,d*_*P)}const C=new Tr;C.setAttribute("position",new Kn(A,x)),C.setAttribute("uv",new Kn(b,p)),C.setAttribute("faceIndex",new Kn(E,d)),e.push(C),r>Xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vf(n,e,t){const i=new Er(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Px(n,e,t){const i=new Float32Array(hr),r=new le(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function _f(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function xf(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function Lx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bl||l===kl,u=l===ss||l===os;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new gf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const v=a.image;return c&&v&&v.height>0||u&&v&&r(v)?(t===null&&(t=new gf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Dx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ps("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ix(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const v=s.get(h);v&&(e.remove(v),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const v=f.morphAttributes;for(const _ in v){const x=v[_];for(let p=0,d=x.length;p<d;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(f){const h=[],v=f.index,_=f.attributes.position;let x=0;if(v!==null){const A=v.array;x=v.version;for(let b=0,E=A.length;b<E;b+=3){const C=A[b+0],P=A[b+1],R=A[b+2];h.push(C,P,P,R,R,C)}}else if(_!==void 0){const A=_.array;x=_.version;for(let b=0,E=A.length/3-1;b<E;b+=3){const C=b+0,P=b+1,R=b+2;h.push(C,P,P,R,R,C)}}else return;const p=new(bh(h)?Lh:Ph)(h,1);p.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const v=f.index;v!==null&&h.version<v.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ux(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,v){n.drawElements(i,v,s,h*o),t.update(v,i,1)}function c(h,v,_){_!==0&&(n.drawElementsInstanced(i,v,s,h*o,_),t.update(v,i,_))}function u(h,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,s,h,0,_);let p=0;for(let d=0;d<_;d++)p+=v[d];t.update(p,i,1)}function f(h,v,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,v[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(i,v,0,s,h,0,x,0,_);let d=0;for(let A=0;A<_;A++)d+=v[A]*x[A];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Nx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Fx(n,e,t){const i=new WeakMap,r=new wt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var v=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let C=a.attributes.position.count*E,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*P*4*f),U=new wh(R,C,P,f);U.type=hi,U.needsUpdate=!0;const M=E*4;for(let D=0;D<f;D++){const I=d[D],k=A[D],X=b[D],K=C*P*4*D;for(let W=0;W<I.count;W++){const $=W*M;_===!0&&(r.fromBufferAttribute(I,W),R[K+$+0]=r.x,R[K+$+1]=r.y,R[K+$+2]=r.z,R[K+$+3]=0),x===!0&&(r.fromBufferAttribute(k,W),R[K+$+4]=r.x,R[K+$+5]=r.y,R[K+$+6]=r.z,R[K+$+7]=0),p===!0&&(r.fromBufferAttribute(X,W),R[K+$+8]=r.x,R[K+$+9]=r.y,R[K+$+10]=r.z,R[K+$+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:U,size:new gt(C,P)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ox(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Oh extends en{constructor(e,t,i,r,s,o,a,l,c,u=es){if(u!==es&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===es&&(i=yr),i===void 0&&u===ls&&(i=as),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bh=new en,Mf=new Oh(1,1),kh=new wh,zh=new yv,Hh=new Uh,Sf=[],yf=[],Ef=new Float32Array(16),bf=new Float32Array(9),Tf=new Float32Array(4);function ps(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sf[r];if(s===void 0&&(s=new Float32Array(r),Sf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Tf.set(i),n.uniformMatrix2fv(this.addr,!1,Tf),Ut(t,i)}}function Gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;bf.set(i),n.uniformMatrix3fv(this.addr,!1,bf),Ut(t,i)}}function Wx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Ef.set(i),n.uniformMatrix4fv(this.addr,!1,Ef),Ut(t,i)}}function Xx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mf.compareFunction=Eh,s=Mf):s=Bh,t.setTexture2D(e||s,r)}function eM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zh,r)}function tM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hh,r)}function nM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kh,r)}function iM(n){switch(n){case 5126:return Bx;case 35664:return kx;case 35665:return zx;case 35666:return Hx;case 35674:return Vx;case 35675:return Gx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return Yx;case 35668:case 35672:return $x;case 35669:case 35673:return qx;case 5125:return Kx;case 36294:return jx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function rM(n,e){n.uniform1fv(this.addr,e)}function sM(n,e){const t=ps(e,this.size,2);n.uniform2fv(this.addr,t)}function oM(n,e){const t=ps(e,this.size,3);n.uniform3fv(this.addr,t)}function aM(n,e){const t=ps(e,this.size,4);n.uniform4fv(this.addr,t)}function lM(n,e){const t=ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cM(n,e){const t=ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uM(n,e){const t=ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fM(n,e){n.uniform1iv(this.addr,e)}function dM(n,e){n.uniform2iv(this.addr,e)}function hM(n,e){n.uniform3iv(this.addr,e)}function pM(n,e){n.uniform4iv(this.addr,e)}function mM(n,e){n.uniform1uiv(this.addr,e)}function gM(n,e){n.uniform2uiv(this.addr,e)}function vM(n,e){n.uniform3uiv(this.addr,e)}function _M(n,e){n.uniform4uiv(this.addr,e)}function xM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bh,s[o])}function MM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zh,s[o])}function SM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hh,s[o])}function yM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kh,s[o])}function EM(n){switch(n){case 5126:return rM;case 35664:return sM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return fM;case 35667:case 35671:return dM;case 35668:case 35672:return hM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return yM}}class bM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iM(t.type)}}class TM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EM(t.type)}}class wM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const al=/(\w+)(\])?(\[|\.)?/g;function wf(n,e){n.seq.push(e),n.map[e.id]=e}function AM(n,e,t){const i=n.name,r=i.length;for(al.lastIndex=0;;){const s=al.exec(i),o=al.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wf(t,c===void 0?new bM(a,n,e):new TM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new wM(a),wf(t,f)),t=f}}}class Vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);AM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Af(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const CM=37297;let RM=0;function PM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Cf=new tt;function LM(n){ot._getMatrix(Cf,ot.workingColorSpace,n);const e=`mat3( ${Cf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+PM(n.getShaderSource(e),o)}else return r}function DM(n,e){const t=LM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function IM(n,e){let t;switch(e){case qg:t="Linear";break;case Kg:t="Reinhard";break;case jg:t="Cineon";break;case Zg:t="ACESFilmic";break;case Qg:t="AgX";break;case ev:t="Neutral";break;case Jg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new le;function UM(){ot.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function FM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ls(n){return n!==""}function Pf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(BM,zM)}const kM=new Map;function zM(n,e){let t=nt[e];if(t===void 0){const i=kM.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(n){return n.replace(HM,VM)}function VM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function If(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function GM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ag?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function WM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function YM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fh:e="ENVMAP_BLENDING_MULTIPLY";break;case Yg:e="ENVMAP_BLENDING_MIX";break;case $g:e="ENVMAP_BLENDING_ADD";break}return e}function $M(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=GM(t),c=WM(t),u=XM(t),f=YM(t),h=$M(t),v=NM(t),_=FM(s),x=r.createProgram();let p,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ls).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ls).join(`
`),d.length>0&&(d+=`
`)):(p=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),d=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?nt.tonemapping_pars_fragment:"",t.toneMapping!==zi?IM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,DM("linearToOutputTexel",t.outputColorSpace),UM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=mc(o),o=Pf(o,t),o=Lf(o,t),a=mc(a),a=Pf(a,t),a=Lf(a,t),o=Df(o),a=Df(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=A+p+o,E=A+d+a,C=Af(r,r.VERTEX_SHADER,b),P=Af(r,r.FRAGMENT_SHADER,E);r.attachShader(x,C),r.attachShader(x,P),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(D){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(P).trim();let K=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,P);else{const $=Rf(r,C,"vertex"),B=Rf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+$+`
`+B)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||X==="")&&(W=!1);W&&(D.diagnostics={runnable:K,programLog:I,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:d}})}r.deleteShader(C),r.deleteShader(P),U=new Vo(r,x),M=OM(r,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,CM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=P,this}let KM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZM(e),t.set(e,i)),i}}class ZM{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}}function JM(n,e,t,i,r,s,o){const a=new Ah,l=new jM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,D,I,k){const X=I.fog,K=k.geometry,W=M.isMeshStandardMaterial?I.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),B=$&&$.mapping===ma?$.image.height:null,ce=_[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const Z=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,me=Z!==void 0?Z.length:0;let we=0;K.morphAttributes.position!==void 0&&(we=1),K.morphAttributes.normal!==void 0&&(we=2),K.morphAttributes.color!==void 0&&(we=3);let Xe,se,ge,Se;if(ce){const st=Xn[ce];Xe=st.vertexShader,se=st.fragmentShader}else Xe=M.vertexShader,se=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),Se=l.getFragmentShaderID(M);const _e=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),ve=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,Qe=!!M.map,L=!!M.matcap,F=!!$,w=!!M.aoMap,he=!!M.lightMap,te=!!M.bumpMap,ne=!!M.normalMap,oe=!!M.displacementMap,re=!!M.emissiveMap,ie=!!M.metalnessMap,g=!!M.roughnessMap,m=M.anisotropy>0,T=M.clearcoat>0,O=M.dispersion>0,H=M.iridescence>0,V=M.sheen>0,ae=M.transmission>0,N=m&&!!M.anisotropyMap,J=T&&!!M.clearcoatMap,xe=T&&!!M.clearcoatNormalMap,ue=T&&!!M.clearcoatRoughnessMap,Ee=H&&!!M.iridescenceMap,De=H&&!!M.iridescenceThicknessMap,Oe=V&&!!M.sheenColorMap,be=V&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,qe=!!M.specularColorMap,rt=!!M.specularIntensityMap,G=ae&&!!M.transmissionMap,Te=ae&&!!M.thicknessMap,fe=!!M.gradientMap,pe=!!M.alphaMap,Ue=M.alphaTest>0,Pe=!!M.alphaHash,Ke=!!M.extensions;let pt=zi;M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(pt=n.toneMapping);const bt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:se,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:ve,instancingColor:ve&&k.instanceColor!==null,instancingMorph:ve&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:ds,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:L,envMap:F,envMapMode:F&&$.mapping,envMapCubeUVHeight:B,aoMap:w,lightMap:he,bumpMap:te,normalMap:ne,displacementMap:h&&oe,emissiveMap:re,normalMapObjectSpace:ne&&M.normalMapType===sv,normalMapTangentSpace:ne&&M.normalMapType===rv,metalnessMap:ie,roughnessMap:g,anisotropy:m,anisotropyMap:N,clearcoat:T,clearcoatMap:J,clearcoatNormalMap:xe,clearcoatRoughnessMap:ue,dispersion:O,iridescence:H,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:V,sheenColorMap:Oe,sheenRoughnessMap:be,specularMap:Ge,specularColorMap:qe,specularIntensityMap:rt,transmission:ae,transmissionMap:G,thicknessMap:Te,gradientMap:fe,opaque:M.transparent===!1&&M.blending===Qr&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ue,alphaHash:Pe,combine:M.combine,mapUv:Qe&&x(M.map.channel),aoMapUv:w&&x(M.aoMap.channel),lightMapUv:he&&x(M.lightMap.channel),bumpMapUv:te&&x(M.bumpMap.channel),normalMapUv:ne&&x(M.normalMap.channel),displacementMapUv:oe&&x(M.displacementMap.channel),emissiveMapUv:re&&x(M.emissiveMap.channel),metalnessMapUv:ie&&x(M.metalnessMap.channel),roughnessMapUv:g&&x(M.roughnessMap.channel),anisotropyMapUv:N&&x(M.anisotropyMap.channel),clearcoatMapUv:J&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(M.sheenRoughnessMap.channel),specularMapUv:Ge&&x(M.specularMap.channel),specularColorMapUv:qe&&x(M.specularColorMap.channel),specularIntensityMapUv:rt&&x(M.specularIntensityMap.channel),transmissionMapUv:G&&x(M.transmissionMap.channel),thicknessMapUv:Te&&x(M.thicknessMap.channel),alphaMapUv:pe&&x(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ne||m),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(Qe||pe),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:de,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===di,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ke&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&M.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(A(S,M),b(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function A(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function b(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){const S=_[M.type];let D;if(S){const I=Xn[S];D=Nv.clone(I.uniforms)}else D=M.uniforms;return D}function C(M,S){let D;for(let I=0,k=u.length;I<k;I++){const X=u[I];if(X.cacheKey===S){D=X,++D.usedTimes;break}}return D===void 0&&(D=new qM(n,S,M,s),u.push(D)),D}function P(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:C,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:U}}function QM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function eS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,v,_,x,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:v,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=v,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function a(f,h,v,_,x,p){const d=o(f,h,v,_,x,p);v.transmission>0?i.push(d):v.transparent===!0?r.push(d):t.push(d)}function l(f,h,v,_,x,p){const d=o(f,h,v,_,x,p);v.transmission>0?i.unshift(d):v.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||eS),i.length>1&&i.sort(h||Uf),r.length>1&&r.sort(h||Uf)}function u(){for(let f=e,h=n.length;f<h;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function tS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Nf,n.set(i,[o])):r>=s.length?(o=new Nf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new dt};break;case"SpotLight":t={position:new le,direction:new le,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function iS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rS=0;function sS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oS(n){const e=new nS,t=iS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new le);const r=new le,s=new Rt,o=new Rt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let v=0,_=0,x=0,p=0,d=0,A=0,b=0,E=0,C=0,P=0,R=0;c.sort(sS);for(let M=0,S=c.length;M<S;M++){const D=c[M],I=D.color,k=D.intensity,X=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=I.r*k,f+=I.g*k,h+=I.b*k;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],k);R++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,B=t.get(D);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.directionalShadow[v]=B,i.directionalShadowMap[v]=K,i.directionalShadowMatrix[v]=D.shadow.matrix,A++}i.directional[v]=W,v++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(I).multiplyScalar(k),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[x]=W;const $=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,$.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[x]=$.matrix,D.castShadow){const B=t.get(D);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=K,E++}x++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(I).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=W,p++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const $=D.shadow,B=t.get(D);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=D.shadow.matrix,b++}i.point[_]=W,_++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(k),W.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[d]=W,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==v||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==A||U.numPointShadows!==b||U.numSpotShadows!==E||U.numSpotMaps!==C||U.numLightProbes!==R)&&(i.directional.length=v,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,U.directionalLength=v,U.pointLength=_,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=A,U.numPointShadows=b,U.numSpotShadows=E,U.numSpotMaps=C,U.numLightProbes=R,i.version=rS++)}function l(c,u){let f=0,h=0,v=0,_=0,x=0;const p=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const b=c[d];if(b.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(b.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),v++}else if(b.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Ff(n){const e=new oS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function aS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ff(n),e.set(r,[a])):s>=o.length?(a=new Ff(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class lS extends va{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cS extends va{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fS=`uniform sampler2D shadow_pass;
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
}`;function dS(n,e,t){let i=new Nh;const r=new gt,s=new gt,o=new wt,a=new lS({depthPacking:iv}),l=new cS,c={},u=t.maxTextureSize,f={[Vi]:ln,[ln]:Vi,[di]:di},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:uS,fragmentShader:fS}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const _=new Tr;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let d=this.type;this.render=function(P,R,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ki),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=d!==oi&&this.type===oi,X=d===oi&&this.type!==oi;for(let K=0,W=P.length;K<W;K++){const $=P[K],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ce=B.getFrameExtents();if(r.multiply(ce),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,B.mapSize.y=s.y)),B.map===null||k===!0||X===!0){const me=this.type!==oi?{minFilter:Un,magFilter:Un}:{};B.map!==null&&B.map.dispose(),B.map=new Er(r.x,r.y,me),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const Z=B.getViewportCount();for(let me=0;me<Z;me++){const we=B.getViewport(me);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),I.viewport(o),B.updateMatrices($,me),i=B.getFrustum(),E(R,U,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===oi&&A(B,U),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(M,S,D)};function A(P,R){const U=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Er(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,U,h,x,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,U,v,x,null)}function b(P,R,U,M){let S=null;const D=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const I=S.uuid,k=R.uuid;let X=c[I];X===void 0&&(X={},c[I]=X);let K=X[k];K===void 0&&(K=S.clone(),X[k]=K,R.addEventListener("dispose",C)),S=K}if(S.visible=R.visible,S.wireframe=R.wireframe,M===oi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=U}return S}function E(P,R,U,M,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===oi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const k=e.update(P),X=P.material;if(Array.isArray(X)){const K=k.groups;for(let W=0,$=K.length;W<$;W++){const B=K[W],ce=X[B.materialIndex];if(ce&&ce.visible){const Z=b(P,ce,M,S);P.onBeforeShadow(n,P,R,U,k,Z,B),n.renderBufferDirect(U,null,k,Z,P,B),P.onAfterShadow(n,P,R,U,k,Z,B)}}}else if(X.visible){const K=b(P,X,M,S);P.onBeforeShadow(n,P,R,U,k,K,null),n.renderBufferDirect(U,null,k,K,P,null),P.onAfterShadow(n,P,R,U,k,K,null)}}const I=P.children;for(let k=0,X=I.length;k<X;k++)E(I[k],R,U,M,S)}function C(P){P.target.removeEventListener("dispose",C);for(const U in c){const M=c[U],S=P.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const hS={[Ll]:Dl,[Il]:Fl,[Ul]:Ol,[rs]:Nl,[Dl]:Ll,[Fl]:Il,[Ol]:Ul,[Nl]:rs};function pS(n,e){function t(){let G=!1;const Te=new wt;let fe=null;const pe=new wt(0,0,0,0);return{setMask:function(Ue){fe!==Ue&&!G&&(n.colorMask(Ue,Ue,Ue,Ue),fe=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,Pe,Ke,pt,bt){bt===!0&&(Ue*=pt,Pe*=pt,Ke*=pt),Te.set(Ue,Pe,Ke,pt),pe.equals(Te)===!1&&(n.clearColor(Ue,Pe,Ke,pt),pe.copy(Te))},reset:function(){G=!1,fe=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,Te=!1,fe=null,pe=null,Ue=null;return{setReversed:function(Pe){if(Te!==Pe){const Ke=e.get("EXT_clip_control");Te?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const pt=Ue;Ue=null,this.setClear(pt)}Te=Pe},getReversed:function(){return Te},setTest:function(Pe){Pe?_e(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(Pe){fe!==Pe&&!G&&(n.depthMask(Pe),fe=Pe)},setFunc:function(Pe){if(Te&&(Pe=hS[Pe]),pe!==Pe){switch(Pe){case Ll:n.depthFunc(n.NEVER);break;case Dl:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case rs:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Ue!==Pe&&(Te&&(Pe=1-Pe),n.clearDepth(Pe),Ue=Pe)},reset:function(){G=!1,fe=null,pe=null,Ue=null,Te=!1}}}function r(){let G=!1,Te=null,fe=null,pe=null,Ue=null,Pe=null,Ke=null,pt=null,bt=null;return{setTest:function(st){G||(st?_e(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(st){Te!==st&&!G&&(n.stencilMask(st),Te=st)},setFunc:function(st,Nt,gn){(fe!==st||pe!==Nt||Ue!==gn)&&(n.stencilFunc(st,Nt,gn),fe=st,pe=Nt,Ue=gn)},setOp:function(st,Nt,gn){(Pe!==st||Ke!==Nt||pt!==gn)&&(n.stencilOp(st,Nt,gn),Pe=st,Ke=Nt,pt=gn)},setLocked:function(st){G=st},setClear:function(st){bt!==st&&(n.clearStencil(st),bt=st)},reset:function(){G=!1,Te=null,fe=null,pe=null,Ue=null,Pe=null,Ke=null,pt=null,bt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,v=[],_=null,x=!1,p=null,d=null,A=null,b=null,E=null,C=null,P=null,R=new dt(0,0,0),U=0,M=!1,S=null,D=null,I=null,k=null,X=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=$>=2);let ce=null,Z={};const me=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Xe=new wt().fromArray(me),se=new wt().fromArray(we);function ge(G,Te,fe,pe){const Ue=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(G,Pe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<fe;Ke++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(Te+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Pe}const Se={};Se[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),o.setFunc(rs),te(!1),ne(ku),_e(n.CULL_FACE),w(ki);function _e(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function de(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function ve(G,Te){return f[G]!==Te?(n.bindFramebuffer(G,Te),f[G]=Te,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Te),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Re(G,Te){let fe=v,pe=!1;if(G){fe=h.get(Te),fe===void 0&&(fe=[],h.set(Te,fe));const Ue=G.textures;if(fe.length!==Ue.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,Ke=Ue.length;Pe<Ke;Pe++)fe[Pe]=n.COLOR_ATTACHMENT0+Pe;fe.length=Ue.length,pe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,pe=!0);pe&&n.drawBuffers(fe)}function Qe(G){return _!==G?(n.useProgram(G),_=G,!0):!1}const L={[dr]:n.FUNC_ADD,[Rg]:n.FUNC_SUBTRACT,[Pg]:n.FUNC_REVERSE_SUBTRACT};L[Lg]=n.MIN,L[Dg]=n.MAX;const F={[Ig]:n.ZERO,[Ug]:n.ONE,[Ng]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[Hg]:n.SRC_ALPHA_SATURATE,[kg]:n.DST_COLOR,[Og]:n.DST_ALPHA,[Fg]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[zg]:n.ONE_MINUS_DST_COLOR,[Bg]:n.ONE_MINUS_DST_ALPHA,[Vg]:n.CONSTANT_COLOR,[Gg]:n.ONE_MINUS_CONSTANT_COLOR,[Wg]:n.CONSTANT_ALPHA,[Xg]:n.ONE_MINUS_CONSTANT_ALPHA};function w(G,Te,fe,pe,Ue,Pe,Ke,pt,bt,st){if(G===ki){x===!0&&(de(n.BLEND),x=!1);return}if(x===!1&&(_e(n.BLEND),x=!0),G!==Cg){if(G!==p||st!==M){if((d!==dr||E!==dr)&&(n.blendEquation(n.FUNC_ADD),d=dr,E=dr),st)switch(G){case Qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.ONE,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}A=null,b=null,C=null,P=null,R.set(0,0,0),U=0,p=G,M=st}return}Ue=Ue||Te,Pe=Pe||fe,Ke=Ke||pe,(Te!==d||Ue!==E)&&(n.blendEquationSeparate(L[Te],L[Ue]),d=Te,E=Ue),(fe!==A||pe!==b||Pe!==C||Ke!==P)&&(n.blendFuncSeparate(F[fe],F[pe],F[Pe],F[Ke]),A=fe,b=pe,C=Pe,P=Ke),(pt.equals(R)===!1||bt!==U)&&(n.blendColor(pt.r,pt.g,pt.b,bt),R.copy(pt),U=bt),p=G,M=!1}function he(G,Te){G.side===di?de(n.CULL_FACE):_e(n.CULL_FACE);let fe=G.side===ln;Te&&(fe=!fe),te(fe),G.blending===Qr&&G.transparent===!1?w(ki):w(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const pe=G.stencilWrite;a.setTest(pe),pe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),re(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(G){S!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),S=G)}function ne(G){G!==Tg?(_e(n.CULL_FACE),G!==D&&(G===ku?n.cullFace(n.BACK):G===wg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),D=G}function oe(G){G!==I&&(W&&n.lineWidth(G),I=G)}function re(G,Te,fe){G?(_e(n.POLYGON_OFFSET_FILL),(k!==Te||X!==fe)&&(n.polygonOffset(Te,fe),k=Te,X=fe)):de(n.POLYGON_OFFSET_FILL)}function ie(G){G?_e(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function g(G){G===void 0&&(G=n.TEXTURE0+K-1),ce!==G&&(n.activeTexture(G),ce=G)}function m(G,Te,fe){fe===void 0&&(ce===null?fe=n.TEXTURE0+K-1:fe=ce);let pe=Z[fe];pe===void 0&&(pe={type:void 0,texture:void 0},Z[fe]=pe),(pe.type!==G||pe.texture!==Te)&&(ce!==fe&&(n.activeTexture(fe),ce=fe),n.bindTexture(G,Te||Se[G]),pe.type=G,pe.texture=Te)}function T(){const G=Z[ce];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function N(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(G){Xe.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Xe.copy(G))}function be(G){se.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),se.copy(G))}function Ge(G,Te){let fe=c.get(Te);fe===void 0&&(fe=new WeakMap,c.set(Te,fe));let pe=fe.get(G);pe===void 0&&(pe=n.getUniformBlockIndex(Te,G.name),fe.set(G,pe))}function qe(G,Te){const pe=c.get(Te).get(G);l.get(Te)!==pe&&(n.uniformBlockBinding(Te,pe,G.__bindingPointIndex),l.set(Te,pe))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,Z={},f={},h=new WeakMap,v=[],_=null,x=!1,p=null,d=null,A=null,b=null,E=null,C=null,P=null,R=new dt(0,0,0),U=0,M=!1,S=null,D=null,I=null,k=null,X=null,Xe.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_e,disable:de,bindFramebuffer:ve,drawBuffers:Re,useProgram:Qe,setBlending:w,setMaterial:he,setFlipSided:te,setCullFace:ne,setLineWidth:oe,setPolygonOffset:re,setScissorTest:ie,activeTexture:g,bindTexture:m,unbindTexture:T,compressedTexImage2D:O,compressedTexImage3D:H,texImage2D:Ee,texImage3D:De,updateUBOMapping:Ge,uniformBlockBinding:qe,texStorage2D:xe,texStorage3D:ue,texSubImage2D:V,texSubImage3D:ae,compressedTexSubImage2D:N,compressedTexSubImage3D:J,scissor:Oe,viewport:be,reset:rt}}function Of(n,e,t,i){const r=mS(i);switch(t){case gh:return n*e;case _h:return n*e;case xh:return n*e*2;case Mh:return n*e/r.components*r.byteLength;case Bc:return n*e/r.components*r.byteLength;case Sh:return n*e*2/r.components*r.byteLength;case kc:return n*e*2/r.components*r.byteLength;case vh:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case zc:return n*e*4/r.components*r.byteLength;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case Yl:case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ho:case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yh:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mS(n){switch(n){case Mi:case hh:return{byteLength:1,components:1};case qs:case ph:case Js:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case yr:case Nc:case hi:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let f;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(g,m){return v?new OffscreenCanvas(g,m):Jo("canvas")}function x(g,m,T){let O=1;const H=ie(g);if((H.width>T||H.height>T)&&(O=T/Math.max(H.width,H.height)),O<1)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap||typeof VideoFrame<"u"&&g instanceof VideoFrame){const V=Math.floor(O*H.width),ae=Math.floor(O*H.height);f===void 0&&(f=_(V,ae));const N=m?_(V,ae):f;return N.width=V,N.height=ae,N.getContext("2d").drawImage(g,0,0,V,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+V+"x"+ae+")."),N}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),g;return g}function p(g){return g.generateMipmaps}function d(g){n.generateMipmap(g)}function A(g){return g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:g.isWebGL3DRenderTarget?n.TEXTURE_3D:g.isWebGLArrayRenderTarget||g.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(g,m,T,O,H=!1){if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let V=m;if(m===n.RED&&(T===n.FLOAT&&(V=n.R32F),T===n.HALF_FLOAT&&(V=n.R16F),T===n.UNSIGNED_BYTE&&(V=n.R8)),m===n.RED_INTEGER&&(T===n.UNSIGNED_BYTE&&(V=n.R8UI),T===n.UNSIGNED_SHORT&&(V=n.R16UI),T===n.UNSIGNED_INT&&(V=n.R32UI),T===n.BYTE&&(V=n.R8I),T===n.SHORT&&(V=n.R16I),T===n.INT&&(V=n.R32I)),m===n.RG&&(T===n.FLOAT&&(V=n.RG32F),T===n.HALF_FLOAT&&(V=n.RG16F),T===n.UNSIGNED_BYTE&&(V=n.RG8)),m===n.RG_INTEGER&&(T===n.UNSIGNED_BYTE&&(V=n.RG8UI),T===n.UNSIGNED_SHORT&&(V=n.RG16UI),T===n.UNSIGNED_INT&&(V=n.RG32UI),T===n.BYTE&&(V=n.RG8I),T===n.SHORT&&(V=n.RG16I),T===n.INT&&(V=n.RG32I)),m===n.RGB_INTEGER&&(T===n.UNSIGNED_BYTE&&(V=n.RGB8UI),T===n.UNSIGNED_SHORT&&(V=n.RGB16UI),T===n.UNSIGNED_INT&&(V=n.RGB32UI),T===n.BYTE&&(V=n.RGB8I),T===n.SHORT&&(V=n.RGB16I),T===n.INT&&(V=n.RGB32I)),m===n.RGBA_INTEGER&&(T===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),T===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),T===n.UNSIGNED_INT&&(V=n.RGBA32UI),T===n.BYTE&&(V=n.RGBA8I),T===n.SHORT&&(V=n.RGBA16I),T===n.INT&&(V=n.RGBA32I)),m===n.RGB&&T===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),m===n.RGBA){const ae=H?ga:ot.getTransfer(O);T===n.FLOAT&&(V=n.RGBA32F),T===n.HALF_FLOAT&&(V=n.RGBA16F),T===n.UNSIGNED_BYTE&&(V=ae===mt?n.SRGB8_ALPHA8:n.RGBA8),T===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),T===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(g,m){let T;return g?m===null||m===yr||m===as?T=n.DEPTH24_STENCIL8:m===hi?T=n.DEPTH32F_STENCIL8:m===qs&&(T=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===yr||m===as?T=n.DEPTH_COMPONENT24:m===hi?T=n.DEPTH_COMPONENT32F:m===qs&&(T=n.DEPTH_COMPONENT16),T}function C(g,m){return p(g)===!0||g.isFramebufferTexture&&g.minFilter!==Un&&g.minFilter!==Et?Math.log2(Math.max(m.width,m.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?m.mipmaps.length:1}function P(g){const m=g.target;m.removeEventListener("dispose",P),U(m),m.isVideoTexture&&u.delete(m)}function R(g){const m=g.target;m.removeEventListener("dispose",R),S(m)}function U(g){const m=i.get(g);if(m.__webglInit===void 0)return;const T=g.source,O=h.get(T);if(O){const H=O[m.__cacheKey];H.usedTimes--,H.usedTimes===0&&M(g),Object.keys(O).length===0&&h.delete(T)}i.remove(g)}function M(g){const m=i.get(g);n.deleteTexture(m.__webglTexture);const T=g.source,O=h.get(T);delete O[m.__cacheKey],o.memory.textures--}function S(g){const m=i.get(g);if(g.depthTexture&&(g.depthTexture.dispose(),i.remove(g.depthTexture)),g.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(m.__webglFramebuffer[O]))for(let H=0;H<m.__webglFramebuffer[O].length;H++)n.deleteFramebuffer(m.__webglFramebuffer[O][H]);else n.deleteFramebuffer(m.__webglFramebuffer[O]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[O])}else{if(Array.isArray(m.__webglFramebuffer))for(let O=0;O<m.__webglFramebuffer.length;O++)n.deleteFramebuffer(m.__webglFramebuffer[O]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let O=0;O<m.__webglColorRenderbuffer.length;O++)m.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[O]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const T=g.textures;for(let O=0,H=T.length;O<H;O++){const V=i.get(T[O]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(T[O])}i.remove(g)}let D=0;function I(){D=0}function k(){const g=D;return g>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+r.maxTextures),D+=1,g}function X(g){const m=[];return m.push(g.wrapS),m.push(g.wrapT),m.push(g.wrapR||0),m.push(g.magFilter),m.push(g.minFilter),m.push(g.anisotropy),m.push(g.internalFormat),m.push(g.format),m.push(g.type),m.push(g.generateMipmaps),m.push(g.premultiplyAlpha),m.push(g.flipY),m.push(g.unpackAlignment),m.push(g.colorSpace),m.join()}function K(g,m){const T=i.get(g);if(g.isVideoTexture&&oe(g),g.isRenderTargetTexture===!1&&g.version>0&&T.__version!==g.version){const O=g.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(T,g,m);return}}t.bindTexture(n.TEXTURE_2D,T.__webglTexture,n.TEXTURE0+m)}function W(g,m){const T=i.get(g);if(g.version>0&&T.__version!==g.version){se(T,g,m);return}t.bindTexture(n.TEXTURE_2D_ARRAY,T.__webglTexture,n.TEXTURE0+m)}function $(g,m){const T=i.get(g);if(g.version>0&&T.__version!==g.version){se(T,g,m);return}t.bindTexture(n.TEXTURE_3D,T.__webglTexture,n.TEXTURE0+m)}function B(g,m){const T=i.get(g);if(g.version>0&&T.__version!==g.version){ge(T,g,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+m)}const ce={[zl]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},Z={[Un]:n.NEAREST,[tv]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[Et]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[mr]:n.LINEAR_MIPMAP_LINEAR},me={[ov]:n.NEVER,[dv]:n.ALWAYS,[av]:n.LESS,[Eh]:n.LEQUAL,[lv]:n.EQUAL,[fv]:n.GEQUAL,[cv]:n.GREATER,[uv]:n.NOTEQUAL};function we(g,m){if(m.type===hi&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Et||m.magFilter===Ia||m.magFilter===co||m.magFilter===mr||m.minFilter===Et||m.minFilter===Ia||m.minFilter===co||m.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(g,n.TEXTURE_WRAP_S,ce[m.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,ce[m.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,ce[m.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,Z[m.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,Z[m.minFilter]),m.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,me[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Un||m.minFilter!==co&&m.minFilter!==mr||m.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const T=e.get("EXT_texture_filter_anisotropic");n.texParameterf(g,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Xe(g,m){let T=!1;g.__webglInit===void 0&&(g.__webglInit=!0,m.addEventListener("dispose",P));const O=m.source;let H=h.get(O);H===void 0&&(H={},h.set(O,H));const V=X(m);if(V!==g.__cacheKey){H[V]===void 0&&(H[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,T=!0),H[V].usedTimes++;const ae=H[g.__cacheKey];ae!==void 0&&(H[g.__cacheKey].usedTimes--,ae.usedTimes===0&&M(m)),g.__cacheKey=V,g.__webglTexture=H[V].texture}return T}function se(g,m,T){let O=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(O=n.TEXTURE_3D);const H=Xe(g,m),V=m.source;t.bindTexture(O,g.__webglTexture,n.TEXTURE0+T);const ae=i.get(V);if(V.version!==ae.__version||H===!0){t.activeTexture(n.TEXTURE0+T);const N=ot.getPrimaries(ot.workingColorSpace),J=m.colorSpace===Fi?null:ot.getPrimaries(m.colorSpace),xe=m.colorSpace===Fi||N===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ue=x(m.image,!1,r.maxTextureSize);ue=re(m,ue);const Ee=s.convert(m.format,m.colorSpace),De=s.convert(m.type);let Oe=b(m.internalFormat,Ee,De,m.colorSpace,m.isVideoTexture);we(O,m);let be;const Ge=m.mipmaps,qe=m.isVideoTexture!==!0,rt=ae.__version===void 0||H===!0,G=V.dataReady,Te=C(m,ue);if(m.isDepthTexture)Oe=E(m.format===ls,m.type),rt&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Oe,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ue.width,ue.height,0,Ee,De,null));else if(m.isDataTexture)if(Ge.length>0){qe&&rt&&t.texStorage2D(n.TEXTURE_2D,Te,Oe,Ge[0].width,Ge[0].height);for(let fe=0,pe=Ge.length;fe<pe;fe++)be=Ge[fe],qe?G&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,be.width,be.height,Ee,De,be.data):t.texImage2D(n.TEXTURE_2D,fe,Oe,be.width,be.height,0,Ee,De,be.data);m.generateMipmaps=!1}else qe?(rt&&t.texStorage2D(n.TEXTURE_2D,Te,Oe,ue.width,ue.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Ee,De,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,ue.width,ue.height,0,Ee,De,ue.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){qe&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Oe,Ge[0].width,Ge[0].height,ue.depth);for(let fe=0,pe=Ge.length;fe<pe;fe++)if(be=Ge[fe],m.format!==Ln)if(Ee!==null)if(qe){if(G)if(m.layerUpdates.size>0){const Ue=Of(be.width,be.height,m.format,m.type);for(const Pe of m.layerUpdates){const Ke=be.data.subarray(Pe*Ue/be.data.BYTES_PER_ELEMENT,(Pe+1)*Ue/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Pe,be.width,be.height,1,Ee,Ke)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,ue.depth,Ee,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Oe,be.width,be.height,ue.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,ue.depth,Ee,De,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Oe,be.width,be.height,ue.depth,0,Ee,De,be.data)}else{qe&&rt&&t.texStorage2D(n.TEXTURE_2D,Te,Oe,Ge[0].width,Ge[0].height);for(let fe=0,pe=Ge.length;fe<pe;fe++)be=Ge[fe],m.format!==Ln?Ee!==null?qe?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Oe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?G&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,be.width,be.height,Ee,De,be.data):t.texImage2D(n.TEXTURE_2D,fe,Oe,be.width,be.height,0,Ee,De,be.data)}else if(m.isDataArrayTexture)if(qe){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Oe,ue.width,ue.height,ue.depth),G)if(m.layerUpdates.size>0){const fe=Of(ue.width,ue.height,m.format,m.type);for(const pe of m.layerUpdates){const Ue=ue.data.subarray(pe*fe/ue.data.BYTES_PER_ELEMENT,(pe+1)*fe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,ue.width,ue.height,1,Ee,De,Ue)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,De,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ue.width,ue.height,ue.depth,0,Ee,De,ue.data);else if(m.isData3DTexture)qe?(rt&&t.texStorage3D(n.TEXTURE_3D,Te,Oe,ue.width,ue.height,ue.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,De,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ue.width,ue.height,ue.depth,0,Ee,De,ue.data);else if(m.isFramebufferTexture){if(rt)if(qe)t.texStorage2D(n.TEXTURE_2D,Te,Oe,ue.width,ue.height);else{let fe=ue.width,pe=ue.height;for(let Ue=0;Ue<Te;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Oe,fe,pe,0,Ee,De,null),fe>>=1,pe>>=1}}else if(Ge.length>0){if(qe&&rt){const fe=ie(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Te,Oe,fe.width,fe.height)}for(let fe=0,pe=Ge.length;fe<pe;fe++)be=Ge[fe],qe?G&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ee,De,be):t.texImage2D(n.TEXTURE_2D,fe,Oe,Ee,De,be);m.generateMipmaps=!1}else if(qe){if(rt){const fe=ie(ue);t.texStorage2D(n.TEXTURE_2D,Te,Oe,fe.width,fe.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,De,ue)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Ee,De,ue);p(m)&&d(O),ae.__version=V.version,m.onUpdate&&m.onUpdate(m)}g.__version=m.version}function ge(g,m,T){if(m.image.length!==6)return;const O=Xe(g,m),H=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+T);const V=i.get(H);if(H.version!==V.__version||O===!0){t.activeTexture(n.TEXTURE0+T);const ae=ot.getPrimaries(ot.workingColorSpace),N=m.colorSpace===Fi?null:ot.getPrimaries(m.colorSpace),J=m.colorSpace===Fi||ae===N?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const xe=m.isCompressedTexture||m.image[0].isCompressedTexture,ue=m.image[0]&&m.image[0].isDataTexture,Ee=[];for(let pe=0;pe<6;pe++)!xe&&!ue?Ee[pe]=x(m.image[pe],!0,r.maxCubemapSize):Ee[pe]=ue?m.image[pe].image:m.image[pe],Ee[pe]=re(m,Ee[pe]);const De=Ee[0],Oe=s.convert(m.format,m.colorSpace),be=s.convert(m.type),Ge=b(m.internalFormat,Oe,be,m.colorSpace),qe=m.isVideoTexture!==!0,rt=V.__version===void 0||O===!0,G=H.dataReady;let Te=C(m,De);we(n.TEXTURE_CUBE_MAP,m);let fe;if(xe){qe&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ge,De.width,De.height);for(let pe=0;pe<6;pe++){fe=Ee[pe].mipmaps;for(let Ue=0;Ue<fe.length;Ue++){const Pe=fe[Ue];m.format!==Ln?Oe!==null?qe?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Pe.width,Pe.height,Oe,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,Ge,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,Pe.width,Pe.height,Oe,be,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,Ge,Pe.width,Pe.height,0,Oe,be,Pe.data)}}}else{if(fe=m.mipmaps,qe&&rt){fe.length>0&&Te++;const pe=ie(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ge,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ue){qe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ee[pe].width,Ee[pe].height,Oe,be,Ee[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ge,Ee[pe].width,Ee[pe].height,0,Oe,be,Ee[pe].data);for(let Ue=0;Ue<fe.length;Ue++){const Ke=fe[Ue].image[pe].image;qe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,Ke.width,Ke.height,Oe,be,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,Ge,Ke.width,Ke.height,0,Oe,be,Ke.data)}}else{qe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe,be,Ee[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ge,Oe,be,Ee[pe]);for(let Ue=0;Ue<fe.length;Ue++){const Pe=fe[Ue];qe?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,Oe,be,Pe.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,Ge,Oe,be,Pe.image[pe])}}}p(m)&&d(n.TEXTURE_CUBE_MAP),V.__version=H.version,m.onUpdate&&m.onUpdate(m)}g.__version=m.version}function Se(g,m,T,O,H,V){const ae=s.convert(T.format,T.colorSpace),N=s.convert(T.type),J=b(T.internalFormat,ae,N,T.colorSpace),xe=i.get(m),ue=i.get(T);if(ue.__renderTarget=m,!xe.__hasExternalTextures){const Ee=Math.max(1,m.width>>V),De=Math.max(1,m.height>>V);H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?t.texImage3D(H,V,J,Ee,De,m.depth,0,ae,N,null):t.texImage2D(H,V,J,Ee,De,0,ae,N,null)}t.bindFramebuffer(n.FRAMEBUFFER,g),ne(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,H,ue.__webglTexture,0,te(m)):(H===n.TEXTURE_2D||H>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,H,ue.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(g,m,T){if(n.bindRenderbuffer(n.RENDERBUFFER,g),m.depthBuffer){const O=m.depthTexture,H=O&&O.isDepthTexture?O.type:null,V=E(m.stencilBuffer,H),ae=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=te(m);ne(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,V,m.width,m.height):T?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,V,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,V,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,g)}else{const O=m.textures;for(let H=0;H<O.length;H++){const V=O[H],ae=s.convert(V.format,V.colorSpace),N=s.convert(V.type),J=b(V.internalFormat,ae,N,V.colorSpace),xe=te(m);T&&ne(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,J,m.width,m.height):ne(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,J,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,J,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(g,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,g),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(m.depthTexture);O.__renderTarget=m,(!O.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),K(m.depthTexture,0);const H=O.__webglTexture,V=te(m);if(m.depthTexture.format===es)ne(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0);else if(m.depthTexture.format===ls)ne(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function ve(g){const m=i.get(g),T=g.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==g.depthTexture){const O=g.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),O){const H=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,O.removeEventListener("dispose",H)};O.addEventListener("dispose",H),m.__depthDisposeCallback=H}m.__boundDepthTexture=O}if(g.depthTexture&&!m.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");de(m.__webglFramebuffer,g)}else if(T){m.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[O]),m.__webglDepthbuffer[O]===void 0)m.__webglDepthbuffer[O]=n.createRenderbuffer(),_e(m.__webglDepthbuffer[O],g,!1);else{const H=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=m.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),_e(m.__webglDepthbuffer,g,!1);else{const O=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,H)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(g,m,T){const O=i.get(g);m!==void 0&&Se(O.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),T!==void 0&&ve(g)}function Qe(g){const m=g.texture,T=i.get(g),O=i.get(m);g.addEventListener("dispose",R);const H=g.textures,V=g.isWebGLCubeRenderTarget===!0,ae=H.length>1;if(ae||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=m.version,o.memory.textures++),V){T.__webglFramebuffer=[];for(let N=0;N<6;N++)if(m.mipmaps&&m.mipmaps.length>0){T.__webglFramebuffer[N]=[];for(let J=0;J<m.mipmaps.length;J++)T.__webglFramebuffer[N][J]=n.createFramebuffer()}else T.__webglFramebuffer[N]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){T.__webglFramebuffer=[];for(let N=0;N<m.mipmaps.length;N++)T.__webglFramebuffer[N]=n.createFramebuffer()}else T.__webglFramebuffer=n.createFramebuffer();if(ae)for(let N=0,J=H.length;N<J;N++){const xe=i.get(H[N]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(g.samples>0&&ne(g)===!1){T.__webglMultisampledFramebuffer=n.createFramebuffer(),T.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let N=0;N<H.length;N++){const J=H[N];T.__webglColorRenderbuffer[N]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,T.__webglColorRenderbuffer[N]);const xe=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),Ee=b(J.internalFormat,xe,ue,J.colorSpace,g.isXRRenderTarget===!0),De=te(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ee,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.RENDERBUFFER,T.__webglColorRenderbuffer[N])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(T.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(T.__webglDepthRenderbuffer,g,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),we(n.TEXTURE_CUBE_MAP,m);for(let N=0;N<6;N++)if(m.mipmaps&&m.mipmaps.length>0)for(let J=0;J<m.mipmaps.length;J++)Se(T.__webglFramebuffer[N][J],g,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,J);else Se(T.__webglFramebuffer[N],g,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);p(m)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let N=0,J=H.length;N<J;N++){const xe=H[N],ue=i.get(xe);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),we(n.TEXTURE_2D,xe),Se(T.__webglFramebuffer,g,xe,n.COLOR_ATTACHMENT0+N,n.TEXTURE_2D,0),p(xe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let N=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(N=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(N,O.__webglTexture),we(N,m),m.mipmaps&&m.mipmaps.length>0)for(let J=0;J<m.mipmaps.length;J++)Se(T.__webglFramebuffer[J],g,m,n.COLOR_ATTACHMENT0,N,J);else Se(T.__webglFramebuffer,g,m,n.COLOR_ATTACHMENT0,N,0);p(m)&&d(N),t.unbindTexture()}g.depthBuffer&&ve(g)}function L(g){const m=g.textures;for(let T=0,O=m.length;T<O;T++){const H=m[T];if(p(H)){const V=A(g),ae=i.get(H).__webglTexture;t.bindTexture(V,ae),d(V),t.unbindTexture()}}}const F=[],w=[];function he(g){if(g.samples>0){if(ne(g)===!1){const m=g.textures,T=g.width,O=g.height;let H=n.COLOR_BUFFER_BIT;const V=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(g),N=m.length>1;if(N)for(let J=0;J<m.length;J++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let J=0;J<m.length;J++){if(g.resolveDepthBuffer&&(g.depthBuffer&&(H|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&g.resolveStencilBuffer&&(H|=n.STENCIL_BUFFER_BIT)),N){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[J]);const xe=i.get(m[J]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,T,O,0,0,T,O,H,n.NEAREST),l===!0&&(F.length=0,w.length=0,F.push(n.COLOR_ATTACHMENT0+J),g.depthBuffer&&g.resolveDepthBuffer===!1&&(F.push(V),w.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),N)for(let J=0;J<m.length;J++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,ae.__webglColorRenderbuffer[J]);const xe=i.get(m[J]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(g.depthBuffer&&g.resolveDepthBuffer===!1&&l){const m=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function te(g){return Math.min(r.maxSamples,g.samples)}function ne(g){const m=i.get(g);return g.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function oe(g){const m=o.render.frame;u.get(g)!==m&&(u.set(g,m),g.update())}function re(g,m){const T=g.colorSpace,O=g.format,H=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||T!==ds&&T!==Fi&&(ot.getTransfer(T)===mt?(O!==Ln||H!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),m}function ie(g){return typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement?(c.width=g.naturalWidth||g.width,c.height=g.naturalHeight||g.height):typeof VideoFrame<"u"&&g instanceof VideoFrame?(c.width=g.displayWidth,c.height=g.displayHeight):(c.width=g.width,c.height=g.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Re,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ne}function vS(n,e){function t(i,r=Fi){let s;const o=ot.getTransfer(r);if(i===Mi)return n.UNSIGNED_BYTE;if(i===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hh)return n.BYTE;if(i===ph)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===yr)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===Js)return n.HALF_FLOAT;if(i===gh)return n.ALPHA;if(i===vh)return n.RGB;if(i===Ln)return n.RGBA;if(i===_h)return n.LUMINANCE;if(i===xh)return n.LUMINANCE_ALPHA;if(i===es)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===Mh)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Sh)return n.RG;if(i===kc)return n.RG_INTEGER;if(i===zc)return n.RGBA_INTEGER;if(i===Oo||i===Bo||i===ko||i===zo)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yl||i===$l||i===ql)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yl||i===$l)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ql)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kl||i===jl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===cc||i===uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ho)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===fc||i===dc||i===hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ho)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class _S extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lo extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),v=.02,_=.005;c.inputState.pinching&&h>v+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=v-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const MS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SS=`
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

}`;class yS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:MS,fragmentShader:SS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ES extends hs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,v=null,_=null;const x=new yS,p=t.getContextAttributes();let d=null,A=null;const b=[],E=[],C=new gt;let P=null;const R=new Rn;R.viewport=new wt;const U=new Rn;U.viewport=new wt;const M=[R,U],S=new _S;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=b[se];return ge===void 0&&(ge=new ll,b[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=b[se];return ge===void 0&&(ge=new ll,b[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=b[se];return ge===void 0&&(ge=new ll,b[se]=ge),ge.getHandSpace()};function k(se){const ge=E.indexOf(se.inputSource);if(ge===-1)return;const Se=b[ge];Se!==void 0&&(Se.update(se.inputSource,se.frame,c||o),Se.dispatchEvent({type:se.type,data:se.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",K);for(let se=0;se<b.length;se++){const ge=E[se];ge!==null&&(E[se]=null,b[se].disconnect(ge))}D=null,I=null,x.reset(),e.setRenderTarget(d),v=null,h=null,f=null,r=null,A=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ge={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),A=new Er(v.framebufferWidth,v.framebufferHeight,{format:Ln,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ge=null,Se=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=p.stencil?ls:es,Se=p.stencil?as:yr);const de={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Er(h.textureWidth,h.textureHeight,{format:Ln,type:Mi,depthTexture:new Oh(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(se){for(let ge=0;ge<se.removed.length;ge++){const Se=se.removed[ge],_e=E.indexOf(Se);_e>=0&&(E[_e]=null,b[_e].disconnect(Se))}for(let ge=0;ge<se.added.length;ge++){const Se=se.added[ge];let _e=E.indexOf(Se);if(_e===-1){for(let ve=0;ve<b.length;ve++)if(ve>=E.length){E.push(Se),_e=ve;break}else if(E[ve]===null){E[ve]=Se,_e=ve;break}if(_e===-1)break}const de=b[_e];de&&de.connect(Se)}}const W=new le,$=new le;function B(se,ge,Se){W.setFromMatrixPosition(ge.matrixWorld),$.setFromMatrixPosition(Se.matrixWorld);const _e=W.distanceTo($),de=ge.projectionMatrix.elements,ve=Se.projectionMatrix.elements,Re=de[14]/(de[10]-1),Qe=de[14]/(de[10]+1),L=(de[9]+1)/de[5],F=(de[9]-1)/de[5],w=(de[8]-1)/de[0],he=(ve[8]+1)/ve[0],te=Re*w,ne=Re*he,oe=_e/(-w+he),re=oe*-w;if(ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(re),se.translateZ(oe),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),de[10]===-1)se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const ie=Re+oe,g=Qe+oe,m=te-re,T=ne+(_e-re),O=L*Qe/g*ie,H=F*Qe/g*ie;se.projectionMatrix.makePerspective(m,T,O,H,ie,g),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ce(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let ge=se.near,Se=se.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),S.near=U.near=R.near=ge,S.far=U.far=R.far=Se,(D!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,I=S.far),R.layers.mask=se.layers.mask|2,U.layers.mask=se.layers.mask|4,S.layers.mask=R.layers.mask|U.layers.mask;const _e=se.parent,de=S.cameras;ce(S,_e);for(let ve=0;ve<de.length;ve++)ce(de[ve],_e);de.length===2?B(S,R,U):S.projectionMatrix.copy(R.projectionMatrix),Z(se,S,_e)};function Z(se,ge,Se){Se===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy(Se.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=pc*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&v===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let me=null;function we(se,ge){if(u=ge.getViewerPose(c||o),_=ge,u!==null){const Se=u.views;v!==null&&(e.setRenderTargetFramebuffer(A,v.framebuffer),e.setRenderTarget(A));let _e=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let ve=0;ve<Se.length;ve++){const Re=Se[ve];let Qe=null;if(v!==null)Qe=v.getViewport(Re);else{const F=f.getViewSubImage(h,Re);Qe=F.viewport,ve===0&&(e.setRenderTargetTextures(A,F.colorTexture,h.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(A))}let L=M[ve];L===void 0&&(L=new Rn,L.layers.enable(ve),L.viewport=new wt,M[ve]=L),L.matrix.fromArray(Re.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Re.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),ve===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(L)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")){const ve=f.getDepthInformation(Se[0]);ve&&ve.isValid&&ve.texture&&x.init(e,ve,r.renderState)}}for(let Se=0;Se<b.length;Se++){const _e=E[Se],de=b[Se];_e!==null&&de!==void 0&&de.update(_e,ge,c||o)}me&&me(se,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),_=null}const Xe=new Fh;Xe.setAnimationLoop(we),this.setAnimationLoop=function(se){me=se},this.dispose=function(){}}}const or=new Si,bS=new Rt;function TS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Dh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,A,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&v(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,A,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ln&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ln&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const A=e.get(d),b=A.envMap,E=A.envMapRotation;b&&(p.envMap.value=b,or.copy(E),or.x*=-1,or.y*=-1,or.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),p.envMapRotation.value.setFromMatrix4(bS.makeRotationFromEuler(or)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,A,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function v(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const A=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const E=b.program;i.uniformBlockBinding(A,E)}function c(A,b){let E=r[A.id];E===void 0&&(_(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",p));const C=b.program;i.updateUBOMapping(A,C);const P=e.render.frame;s[A.id]!==P&&(h(A),s[A.id]=P)}function u(A){const b=f();A.__bindingPointIndex=b;const E=n.createBuffer(),C=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const b=r[A.id],E=A.uniforms,C=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let P=0,R=E.length;P<R;P++){const U=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,S=U.length;M<S;M++){const D=U[M];if(v(D,P,M,C)===!0){const I=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let K=0;K<k.length;K++){const W=k[K],$=x(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,I+X,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(A,b,E,C){const P=A.value,R=b+"_"+E;if(C[R]===void 0)return typeof P=="number"||typeof P=="boolean"?C[R]=P:C[R]=P.clone(),!0;{const U=C[R];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return C[R]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function _(A){const b=A.uniforms;let E=0;const C=16;for(let R=0,U=b.length;R<U;R++){const M=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,D=M.length;S<D;S++){const I=M[S],k=Array.isArray(I.value)?I.value:[I.value];for(let X=0,K=k.length;X<K;X++){const W=k[X],$=x(W),B=E%C,ce=B%$.boundary,Z=B+ce;E+=ce,Z!==0&&C-Z<$.storage&&(E+=C-Z),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=$.storage}}}const P=E%C;return P>0&&(E+=C-P),A.__size=E,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function p(A){const b=A.target;b.removeEventListener("dispose",p);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class xa{constructor(e={}){const{canvas:t=pv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,d=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=zi,this.toneMappingExposure=1;const E=this;let C=!1,P=0,R=0,U=null,M=-1,S=null;const D=new wt,I=new wt;let k=null;const X=new dt(0);let K=0,W=t.width,$=t.height,B=1,ce=null,Z=null;const me=new wt(0,0,W,$),we=new wt(0,0,W,$);let Xe=!1;const se=new Nh;let ge=!1,Se=!1;const _e=new Rt,de=new Rt,ve=new le,Re=new wt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function F(){return U===null?B:1}let w=i;function he(y,z){return t.getContext(y,z)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),w===null){const z="webgl2";if(w=he(z,y),w===null)throw he(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let te,ne,oe,re,ie,g,m,T,O,H,V,ae,N,J,xe,ue,Ee,De,Oe,be,Ge,qe,rt,G;function Te(){te=new Dx(w),te.init(),qe=new vS(w,te),ne=new wx(w,te,e,qe),oe=new pS(w,te),ne.reverseDepthBuffer&&h&&oe.buffers.depth.setReversed(!0),re=new Nx(w),ie=new QM,g=new gS(w,te,oe,ie,ne,qe,re),m=new Cx(E),T=new Lx(E),O=new Vv(w),rt=new bx(w,O),H=new Ix(w,O,re,rt),V=new Ox(w,H,O,re),Oe=new Fx(w,ne,g),ue=new Ax(ie),ae=new JM(E,m,T,te,ne,rt,ue),N=new TS(E,ie),J=new tS,xe=new aS(te),De=new Ex(E,m,T,oe,V,v,l),Ee=new dS(E,V,ne),G=new wS(w,re,ne,oe),be=new Tx(w,te,re),Ge=new Ux(w,te,re),re.programs=ae.programs,E.capabilities=ne,E.extensions=te,E.properties=ie,E.renderLists=J,E.shadowMap=Ee,E.state=oe,E.info=re}Te();const fe=new ES(E,w);this.xr=fe,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(y){y!==void 0&&(B=y,this.setSize(W,$,!1))},this.getSize=function(y){return y.set(W,$)},this.setSize=function(y,z,j=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,$=z,t.width=Math.floor(y*B),t.height=Math.floor(z*B),j===!0&&(t.style.width=y+"px",t.style.height=z+"px"),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(W*B,$*B).floor()},this.setDrawingBufferSize=function(y,z,j){W=y,$=z,B=j,t.width=Math.floor(y*j),t.height=Math.floor(z*j),this.setViewport(0,0,y,z)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(me)},this.setViewport=function(y,z,j,Q){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,z,j,Q),oe.viewport(D.copy(me).multiplyScalar(B).round())},this.getScissor=function(y){return y.copy(we)},this.setScissor=function(y,z,j,Q){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,z,j,Q),oe.scissor(I.copy(we).multiplyScalar(B).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(y){oe.setScissorTest(Xe=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){Z=y},this.getClearColor=function(y){return y.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(y=!0,z=!0,j=!0){let Q=0;if(y){let q=!1;if(U!==null){const ye=U.texture.format;q=ye===zc||ye===kc||ye===Bc}if(q){const ye=U.texture.type,Ce=ye===Mi||ye===yr||ye===qs||ye===as||ye===Fc||ye===Oc,Be=De.getClearColor(),He=De.getClearAlpha(),je=Be.r,et=Be.g,Ve=Be.b;Ce?(_[0]=je,_[1]=et,_[2]=Ve,_[3]=He,w.clearBufferuiv(w.COLOR,0,_)):(x[0]=je,x[1]=et,x[2]=Ve,x[3]=He,w.clearBufferiv(w.COLOR,0,x))}else Q|=w.COLOR_BUFFER_BIT}z&&(Q|=w.DEPTH_BUFFER_BIT),j&&(Q|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),J.dispose(),xe.dispose(),ie.dispose(),m.dispose(),T.dispose(),V.dispose(),rt.dispose(),G.dispose(),ae.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ms),fe.removeEventListener("sessionend",Yt),Zn.stop()};function pe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=re.autoReset,z=Ee.enabled,j=Ee.autoUpdate,Q=Ee.needsUpdate,q=Ee.type;Te(),re.autoReset=y,Ee.enabled=z,Ee.autoUpdate=j,Ee.needsUpdate=Q,Ee.type=q}function Pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ke(y){const z=y.target;z.removeEventListener("dispose",Ke),pt(z)}function pt(y){bt(y),ie.remove(y)}function bt(y){const z=ie.get(y).programs;z!==void 0&&(z.forEach(function(j){ae.releaseProgram(j)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,j,Q,q,ye){z===null&&(z=Qe);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Be=Ae(y,z,j,Q,q);oe.setMaterial(Q,Ce);let He=j.index,je=1;if(Q.wireframe===!0){if(He=H.getWireframeAttribute(j),He===void 0)return;je=2}const et=j.drawRange,Ve=j.attributes.position;let at=et.start*je,_t=(et.start+et.count)*je;ye!==null&&(at=Math.max(at,ye.start*je),_t=Math.min(_t,(ye.start+ye.count)*je)),He!==null?(at=Math.max(at,0),_t=Math.min(_t,He.count)):Ve!=null&&(at=Math.max(at,0),_t=Math.min(_t,Ve.count));const Mt=_t-at;if(Mt<0||Mt===1/0)return;rt.setup(q,Q,Be,j,He);let tn,ct=be;if(He!==null&&(tn=O.get(He),ct=Ge,ct.setIndex(tn)),q.isMesh)Q.wireframe===!0?(oe.setLineWidth(Q.wireframeLinewidth*F()),ct.setMode(w.LINES)):ct.setMode(w.TRIANGLES);else if(q.isLine){let We=Q.linewidth;We===void 0&&(We=1),oe.setLineWidth(We*F()),q.isLineSegments?ct.setMode(w.LINES):q.isLineLoop?ct.setMode(w.LINE_LOOP):ct.setMode(w.LINE_STRIP)}else q.isPoints?ct.setMode(w.POINTS):q.isSprite&&ct.setMode(w.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ct.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))ct.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const We=q._multiDrawStarts,Jn=q._multiDrawCounts,ut=q._multiDrawCount,Tn=He?O.get(He).bytesPerElement:1,Ar=ie.get(Q).currentProgram.getUniforms();for(let cn=0;cn<ut;cn++)Ar.setValue(w,"_gl_DrawID",cn),ct.render(We[cn]/Tn,Jn[cn])}else if(q.isInstancedMesh)ct.renderInstances(at,Mt,q.count);else if(j.isInstancedBufferGeometry){const We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Jn=Math.min(j.instanceCount,We);ct.renderInstances(at,Mt,Jn)}else ct.render(at,Mt)};function st(y,z,j){y.transparent===!0&&y.side===di&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,ee(y,z,j),y.side=Vi,y.needsUpdate=!0,ee(y,z,j),y.side=di):ee(y,z,j)}this.compile=function(y,z,j=null){j===null&&(j=y),d=xe.get(j),d.init(z),b.push(d),j.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),y!==j&&y.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights();const Q=new Set;return y.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const Be=ye[Ce];st(Be,j,q),Q.add(Be)}else st(ye,j,q),Q.add(ye)}),b.pop(),d=null,Q},this.compileAsync=function(y,z,j=null){const Q=this.compile(y,z,j);return new Promise(q=>{function ye(){if(Q.forEach(function(Ce){ie.get(Ce).currentProgram.isReady()&&Q.delete(Ce)}),Q.size===0){q(y);return}setTimeout(ye,10)}te.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Nt=null;function gn(y){Nt&&Nt(y)}function ms(){Zn.stop()}function Yt(){Zn.start()}const Zn=new Fh;Zn.setAnimationLoop(gn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(y){Nt=y,fe.setAnimationLoop(y),y===null?Zn.stop():Zn.start()},fe.addEventListener("sessionstart",ms),fe.addEventListener("sessionend",Yt),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(z),z=fe.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,z,U),d=xe.get(y,b.length),d.init(z),b.push(d),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(de),Se=this.localClippingEnabled,ge=ue.init(this.clippingPlanes,Se),p=J.get(y,A.length),p.init(),A.push(p),fe.enabled===!0&&fe.isPresenting===!0){const ye=E.xr.getDepthSensingMesh();ye!==null&&gs(ye,z,-1/0,E.sortObjects)}gs(y,z,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(ce,Z),L=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,L&&De.addToRenderList(p,y),this.info.render.frame++,ge===!0&&ue.beginShadows();const j=d.state.shadowsArray;Ee.render(j,y,z),ge===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=p.opaque,q=p.transmissive;if(d.setupLights(),z.isArrayCamera){const ye=z.cameras;if(q.length>0)for(let Ce=0,Be=ye.length;Ce<Be;Ce++){const He=ye[Ce];so(Q,q,y,He)}L&&De.render(y);for(let Ce=0,Be=ye.length;Ce<Be;Ce++){const He=ye[Ce];ro(p,y,He,He.viewport)}}else q.length>0&&so(Q,q,y,z),L&&De.render(y),ro(p,y,z);U!==null&&(g.updateMultisampleRenderTarget(U),g.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(E,y,z),rt.resetDefaultState(),M=-1,S=null,b.pop(),b.length>0?(d=b[b.length-1],ge===!0&&ue.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function gs(y,z,j,Q){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)j=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||se.intersectsSprite(y)){Q&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(de);const Ce=V.update(y),Be=y.material;Be.visible&&p.push(y,Ce,Be,j,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||se.intersectsObject(y))){const Ce=V.update(y),Be=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Re.copy(Ce.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(de)),Array.isArray(Be)){const He=Ce.groups;for(let je=0,et=He.length;je<et;je++){const Ve=He[je],at=Be[Ve.materialIndex];at&&at.visible&&p.push(y,Ce,at,j,Re.z,Ve)}}else Be.visible&&p.push(y,Ce,Be,j,Re.z,null)}}const ye=y.children;for(let Ce=0,Be=ye.length;Ce<Be;Ce++)gs(ye[Ce],z,j,Q)}function ro(y,z,j,Q){const q=y.opaque,ye=y.transmissive,Ce=y.transparent;d.setupLightsView(j),ge===!0&&ue.setGlobalState(E.clippingPlanes,j),Q&&oe.viewport(D.copy(Q)),q.length>0&&Ki(q,z,j),ye.length>0&&Ki(ye,z,j),Ce.length>0&&Ki(Ce,z,j),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function so(y,z,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Q.id]===void 0&&(d.state.transmissionRenderTarget[Q.id]=new Er(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Js:Mi,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ye=d.state.transmissionRenderTarget[Q.id],Ce=Q.viewport||D;ye.setSize(Ce.z,Ce.w);const Be=E.getRenderTarget();E.setRenderTarget(ye),E.getClearColor(X),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),L&&De.render(j);const He=E.toneMapping;E.toneMapping=zi;const je=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),d.setupLightsView(Q),ge===!0&&ue.setGlobalState(E.clippingPlanes,Q),Ki(y,j,Q),g.updateMultisampleRenderTarget(ye),g.updateRenderTargetMipmap(ye),te.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ve=0,at=z.length;Ve<at;Ve++){const _t=z[Ve],Mt=_t.object,tn=_t.geometry,ct=_t.material,We=_t.group;if(ct.side===di&&Mt.layers.test(Q.layers)){const Jn=ct.side;ct.side=ln,ct.needsUpdate=!0,Y(Mt,j,Q,tn,ct,We),ct.side=Jn,ct.needsUpdate=!0,et=!0}}et===!0&&(g.updateMultisampleRenderTarget(ye),g.updateRenderTargetMipmap(ye))}E.setRenderTarget(Be),E.setClearColor(X,K),je!==void 0&&(Q.viewport=je),E.toneMapping=He}function Ki(y,z,j){const Q=z.isScene===!0?z.overrideMaterial:null;for(let q=0,ye=y.length;q<ye;q++){const Ce=y[q],Be=Ce.object,He=Ce.geometry,je=Q===null?Ce.material:Q,et=Ce.group;Be.layers.test(j.layers)&&Y(Be,z,j,He,je,et)}}function Y(y,z,j,Q,q,ye){y.onBeforeRender(E,z,j,Q,q,ye),y.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(E,z,j,Q,y,ye),q.transparent===!0&&q.side===di&&q.forceSinglePass===!1?(q.side=ln,q.needsUpdate=!0,E.renderBufferDirect(j,z,Q,q,y,ye),q.side=Vi,q.needsUpdate=!0,E.renderBufferDirect(j,z,Q,q,y,ye),q.side=di):E.renderBufferDirect(j,z,Q,q,y,ye),y.onAfterRender(E,z,j,Q,q,ye)}function ee(y,z,j){z.isScene!==!0&&(z=Qe);const Q=ie.get(y),q=d.state.lights,ye=d.state.shadowsArray,Ce=q.state.version,Be=ae.getParameters(y,q.state,ye,z,j),He=ae.getProgramCacheKey(Be);let je=Q.programs;Q.environment=y.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(y.isMeshStandardMaterial?T:m).get(y.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&y.envMap===null?z.environmentRotation:y.envMapRotation,je===void 0&&(y.addEventListener("dispose",Ke),je=new Map,Q.programs=je);let et=je.get(He);if(et!==void 0){if(Q.currentProgram===et&&Q.lightsStateVersion===Ce)return Ne(y,Be),et}else Be.uniforms=ae.getUniforms(y),y.onBeforeCompile(Be,E),et=ae.acquireProgram(Be,He),je.set(He,et),Q.uniforms=Be.uniforms;const Ve=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=ue.uniform),Ne(y,Be),Q.needsLights=ze(y),Q.lightsStateVersion=Ce,Q.needsLights&&(Ve.ambientLightColor.value=q.state.ambient,Ve.lightProbe.value=q.state.probe,Ve.directionalLights.value=q.state.directional,Ve.directionalLightShadows.value=q.state.directionalShadow,Ve.spotLights.value=q.state.spot,Ve.spotLightShadows.value=q.state.spotShadow,Ve.rectAreaLights.value=q.state.rectArea,Ve.ltc_1.value=q.state.rectAreaLTC1,Ve.ltc_2.value=q.state.rectAreaLTC2,Ve.pointLights.value=q.state.point,Ve.pointLightShadows.value=q.state.pointShadow,Ve.hemisphereLights.value=q.state.hemi,Ve.directionalShadowMap.value=q.state.directionalShadowMap,Ve.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ve.spotShadowMap.value=q.state.spotShadowMap,Ve.spotLightMatrix.value=q.state.spotLightMatrix,Ve.spotLightMap.value=q.state.spotLightMap,Ve.pointShadowMap.value=q.state.pointShadowMap,Ve.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=et,Q.uniformsList=null,et}function Me(y){if(y.uniformsList===null){const z=y.currentProgram.getUniforms();y.uniformsList=Vo.seqWithValue(z.seq,y.uniforms)}return y.uniformsList}function Ne(y,z){const j=ie.get(y);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Ae(y,z,j,Q,q){z.isScene!==!0&&(z=Qe),g.resetTextureUnits();const ye=z.fog,Ce=Q.isMeshStandardMaterial?z.environment:null,Be=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ds,He=(Q.isMeshStandardMaterial?T:m).get(Q.envMap||Ce),je=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,et=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ve=!!j.morphAttributes.position,at=!!j.morphAttributes.normal,_t=!!j.morphAttributes.color;let Mt=zi;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Mt=E.toneMapping);const tn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ct=tn!==void 0?tn.length:0,We=ie.get(Q),Jn=d.state.lights;if(ge===!0&&(Se===!0||y!==S)){const vn=y===S&&Q.id===M;ue.setState(Q,y,vn)}let ut=!1;Q.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Jn.state.version||We.outputColorSpace!==Be||q.isBatchedMesh&&We.batching===!1||!q.isBatchedMesh&&We.batching===!0||q.isBatchedMesh&&We.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&We.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&We.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&We.instancingMorph===!1&&q.morphTexture!==null||We.envMap!==He||Q.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ue.numPlanes||We.numIntersection!==ue.numIntersection)||We.vertexAlphas!==je||We.vertexTangents!==et||We.morphTargets!==Ve||We.morphNormals!==at||We.morphColors!==_t||We.toneMapping!==Mt||We.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,We.__version=Q.version);let Tn=We.currentProgram;ut===!0&&(Tn=ee(Q,z,q));let Ar=!1,cn=!1,vs=!1;const St=Tn.getUniforms(),kn=We.uniforms;if(oe.useProgram(Tn.program)&&(Ar=!0,cn=!0,vs=!0),Q.id!==M&&(M=Q.id,cn=!0),Ar||S!==y){oe.buffers.depth.getReversed()?(_e.copy(y.projectionMatrix),gv(_e),vv(_e),St.setValue(w,"projectionMatrix",_e)):St.setValue(w,"projectionMatrix",y.projectionMatrix),St.setValue(w,"viewMatrix",y.matrixWorldInverse);const bi=St.map.cameraPosition;bi!==void 0&&bi.setValue(w,ve.setFromMatrixPosition(y.matrixWorld)),ne.logarithmicDepthBuffer&&St.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&St.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,cn=!0,vs=!0)}if(q.isSkinnedMesh){St.setOptional(w,q,"bindMatrix"),St.setOptional(w,q,"bindMatrixInverse");const vn=q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),St.setValue(w,"boneTexture",vn.boneTexture,g))}q.isBatchedMesh&&(St.setOptional(w,q,"batchingTexture"),St.setValue(w,"batchingTexture",q._matricesTexture,g),St.setOptional(w,q,"batchingIdTexture"),St.setValue(w,"batchingIdTexture",q._indirectTexture,g),St.setOptional(w,q,"batchingColorTexture"),q._colorsTexture!==null&&St.setValue(w,"batchingColorTexture",q._colorsTexture,g));const _s=j.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&Oe.update(q,j,Tn),(cn||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,St.setValue(w,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(kn.envMap.value=He,kn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&z.environment!==null&&(kn.envMapIntensity.value=z.environmentIntensity),cn&&(St.setValue(w,"toneMappingExposure",E.toneMappingExposure),We.needsLights&&Fe(kn,vs),ye&&Q.fog===!0&&N.refreshFogUniforms(kn,ye),N.refreshMaterialUniforms(kn,Q,B,$,d.state.transmissionRenderTarget[y.id]),Vo.upload(w,Me(We),kn,g)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Vo.upload(w,Me(We),kn,g),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&St.setValue(w,"center",q.center),St.setValue(w,"modelViewMatrix",q.modelViewMatrix),St.setValue(w,"normalMatrix",q.normalMatrix),St.setValue(w,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const vn=Q.uniformsGroups;for(let bi=0,Ti=vn.length;bi<Ti;bi++){const Qc=vn[bi];G.update(Qc,Tn),G.bind(Qc,Tn)}}return Tn}function Fe(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function ze(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,z,j){ie.get(y.texture).__webglTexture=z,ie.get(y.depthTexture).__webglTexture=j;const Q=ie.get(y);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,z){const j=ie.get(y);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(y,z=0,j=0){U=y,P=z,R=j;let Q=!0,q=null,ye=!1,Ce=!1;if(y){const He=ie.get(y);if(He.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(w.FRAMEBUFFER,null),Q=!1;else if(He.__webglFramebuffer===void 0)g.setupRenderTarget(y);else if(He.__hasExternalTextures)g.rebindTextures(y,ie.get(y.texture).__webglTexture,ie.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ve=y.depthTexture;if(He.__boundDepthTexture!==Ve){if(Ve!==null&&ie.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(y)}}const je=y.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ce=!0);const et=ie.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(et[z])?q=et[z][j]:q=et[z],ye=!0):y.samples>0&&g.useMultisampledRTT(y)===!1?q=ie.get(y).__webglMultisampledFramebuffer:Array.isArray(et)?q=et[j]:q=et,D.copy(y.viewport),I.copy(y.scissor),k=y.scissorTest}else D.copy(me).multiplyScalar(B).floor(),I.copy(we).multiplyScalar(B).floor(),k=Xe;if(oe.bindFramebuffer(w.FRAMEBUFFER,q)&&Q&&oe.drawBuffers(y,q),oe.viewport(D),oe.scissor(I),oe.setScissorTest(k),ye){const He=ie.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,He.__webglTexture,j)}else if(Ce){const He=ie.get(y.texture),je=z||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,He.__webglTexture,j||0,je)}M=-1},this.readRenderTargetPixels=function(y,z,j,Q,q,ye,Ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be){oe.bindFramebuffer(w.FRAMEBUFFER,Be);try{const He=y.texture,je=He.format,et=He.type;if(!ne.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-Q&&j>=0&&j<=y.height-q&&w.readPixels(z,j,Q,q,qe.convert(je),qe.convert(et),ye)}finally{const He=U!==null?ie.get(U).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(y,z,j,Q,q,ye,Ce){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be){const He=y.texture,je=He.format,et=He.type;if(!ne.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=y.width-Q&&j>=0&&j<=y.height-q){oe.bindFramebuffer(w.FRAMEBUFFER,Be);const Ve=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.bufferData(w.PIXEL_PACK_BUFFER,ye.byteLength,w.STREAM_READ),w.readPixels(z,j,Q,q,qe.convert(je),qe.convert(et),0);const at=U!==null?ie.get(U).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,at);const _t=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await mv(w,_t,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ye),w.deleteBuffer(Ve),w.deleteSync(_t),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,z=null,j=0){y.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1]);const Q=Math.pow(2,-j),q=Math.floor(y.image.width*Q),ye=Math.floor(y.image.height*Q),Ce=z!==null?z.x:0,Be=z!==null?z.y:0;g.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,j,0,0,Ce,Be,q,ye),oe.unbindTexture()},this.copyTextureToTexture=function(y,z,j=null,Q=null,q=0){y.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,y=arguments[1],z=arguments[2],q=arguments[3]||0,j=null);let ye,Ce,Be,He,je,et,Ve,at,_t;const Mt=y.isCompressedTexture?y.mipmaps[q]:y.image;j!==null?(ye=j.max.x-j.min.x,Ce=j.max.y-j.min.y,Be=j.isBox3?j.max.z-j.min.z:1,He=j.min.x,je=j.min.y,et=j.isBox3?j.min.z:0):(ye=Mt.width,Ce=Mt.height,Be=Mt.depth||1,He=0,je=0,et=0),Q!==null?(Ve=Q.x,at=Q.y,_t=Q.z):(Ve=0,at=0,_t=0);const tn=qe.convert(z.format),ct=qe.convert(z.type);let We;z.isData3DTexture?(g.setTexture3D(z,0),We=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(g.setTexture2DArray(z,0),We=w.TEXTURE_2D_ARRAY):(g.setTexture2D(z,0),We=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);const Jn=w.getParameter(w.UNPACK_ROW_LENGTH),ut=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Tn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ar=w.getParameter(w.UNPACK_SKIP_ROWS),cn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Mt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Mt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,He),w.pixelStorei(w.UNPACK_SKIP_ROWS,je),w.pixelStorei(w.UNPACK_SKIP_IMAGES,et);const vs=y.isDataArrayTexture||y.isData3DTexture,St=z.isDataArrayTexture||z.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const kn=ie.get(y),_s=ie.get(z),vn=ie.get(kn.__renderTarget),bi=ie.get(_s.__renderTarget);oe.bindFramebuffer(w.READ_FRAMEBUFFER,vn.__webglFramebuffer),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ti=0;Ti<Be;Ti++)vs&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ie.get(y).__webglTexture,q,et+Ti),y.isDepthTexture?(St&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ie.get(z).__webglTexture,q,_t+Ti),w.blitFramebuffer(He,je,ye,Ce,Ve,at,ye,Ce,w.DEPTH_BUFFER_BIT,w.NEAREST)):St?w.copyTexSubImage3D(We,q,Ve,at,_t+Ti,He,je,ye,Ce):w.copyTexSubImage2D(We,q,Ve,at,_t+Ti,He,je,ye,Ce);oe.bindFramebuffer(w.READ_FRAMEBUFFER,null),oe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else St?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(We,q,Ve,at,_t,ye,Ce,Be,tn,ct,Mt.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(We,q,Ve,at,_t,ye,Ce,Be,tn,Mt.data):w.texSubImage3D(We,q,Ve,at,_t,ye,Ce,Be,tn,ct,Mt):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,q,Ve,at,ye,Ce,tn,ct,Mt.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,q,Ve,at,Mt.width,Mt.height,tn,Mt.data):w.texSubImage2D(w.TEXTURE_2D,q,Ve,at,ye,Ce,tn,ct,Mt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Jn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ut),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ar),w.pixelStorei(w.UNPACK_SKIP_IMAGES,cn),q===0&&z.generateMipmaps&&w.generateMipmap(We),oe.unbindTexture()},this.copyTextureToTexture3D=function(y,z,j=null,Q=null,q=0){return y.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,y=arguments[2],z=arguments[3],q=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,z,j,Q,q)},this.initRenderTarget=function(y){ie.get(y).__webglFramebuffer===void 0&&g.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?g.setTextureCube(y,0):y.isData3DTexture?g.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?g.setTexture2DArray(y,0):g.setTexture2D(y,0),oe.unbindTexture()},this.resetState=function(){P=0,R=0,U=null,oe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}class Ma extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class br extends en{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);const Yr={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},Lt=30,cl=12,AS=10,Vh=28;function CS(n,e){if(typeof e=="function")return e(n);const t=n.filter(r=>r!=null&&r!=="");if(e==="count")return t.length;const i=t.map(r=>Number(r)).filter(r=>!Number.isNaN(r));if(i.length===0)return null;switch(e){case"sum":return i.reduce((r,s)=>r+s,0);case"avg":return i.reduce((r,s)=>r+s,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Bf(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=Yr[e.theme]??Yr.none,{cols:o,rows:a,pinnedRows:l,rowHeight:c,scrollY:u,scrollX:f,glow:h}=e;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const v=l.length*c,_=e.aggregateRow?Vh:0,x=r-Lt-v-_;t.fillStyle=s.headerBg,t.fillRect(0,0,i,Lt),t.textBaseline="middle",t.textAlign="left";let p=-f;for(let X=0;X<o.length;X++){const K=o[X];if(p+K.width<=0){p+=K.width;continue}if(p>=i)break;const W=!!e.colFilters[K.colId],$=e.sortColId===K.colId,B=(K.colDef.headerName??K.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(p,0,K.width,Lt),t.clip(),t.font=`bold ${AS}px system-ui, -apple-system, sans-serif`,t.fillStyle=W?s.accent:s.textHeader,h?(t.shadowColor=s.textHeader,t.shadowBlur=10,t.fillText(B,p+8,Lt/2),t.shadowBlur=4,t.fillText(B,p+8,Lt/2),t.shadowBlur=0):t.fillText(B,p+8,Lt/2),$){const ce=t.measureText(B).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=s.accent,t.fillText(e.sortDir==="asc"?"▲":"▼",p+8+ce+4,Lt/2)}K.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=W?s.accent:s.textHeader,t.globalAlpha=W?1:.38,t.fillText("⌕",p+K.width-20,Lt/2),t.globalAlpha=1),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(p+K.width-.5,0),t.lineTo(p+K.width-.5,Lt),t.stroke(),p+=K.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,Lt-.5),t.lineTo(i,Lt-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,Lt,i,x),t.clip();const d=Math.max(0,Math.floor(u/c)),A=Math.min(a.length,Math.ceil((u+x)/c)),b=e.selectionAnchorRow??e.selectedRow,E=e.selectionAnchorCol??e.selectedCol,C=e.selectedRow>=0&&b>=0?Math.min(e.selectedRow,b):-1,P=e.selectedRow>=0&&b>=0?Math.max(e.selectedRow,b):-1,R=e.selectedCol>=0&&E>=0?Math.min(e.selectedCol,E):-1,U=e.selectedCol>=0&&E>=0?Math.max(e.selectedCol,E):-1,M=P>C||U>R;let S=Number.POSITIVE_INFINITY,D=Number.NEGATIVE_INFINITY,I=Number.POSITIVE_INFINITY,k=Number.NEGATIVE_INFINITY;for(let X=d;X<A;X++){const K=a[X],W=Lt+X*c-u;X%2===1&&(t.fillStyle=s.rowAlt,t.fillRect(0,W,i,c));const $=X>=C&&X<=P;X===e.hoveredRow&&!$&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,W,i,c)),$&&!M&&(t.fillStyle=ul(s.accent,.1),t.fillRect(0,W,i,c)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,W+c-.5),t.lineTo(i,W+c-.5),t.stroke();let B=-f;for(let ce=0;ce<o.length;ce++){const Z=o[ce];if(B+Z.width<=0){B+=Z.width;continue}if(B>=i)break;const me=$&&ce>=R&&ce<=U;me&&M&&(t.fillStyle=ul(s.accent,.14),t.fillRect(B,W,Z.width,c)),me&&(B<S&&(S=B),B+Z.width>D&&(D=B+Z.width),W<I&&(I=W),W+c>k&&(k=W+c));const we=e.getCellStyle(Z,K),Xe=we.color??s.text,se=we.textAlign??"left",ge=e.formatCell(Z,K);t.save(),t.beginPath(),t.rect(B+1,W,Z.width-2,c),t.clip(),t.font=`${cl}px system-ui, -apple-system, sans-serif`,t.fillStyle=Xe,t.textBaseline="middle";const Se=se==="right"?B+Z.width-8:B+8;t.textAlign=se==="right"?"right":"left";const _e=W+c/2;h?(t.shadowColor=Xe,t.shadowBlur=12,t.fillText(ge,Se,_e),t.shadowBlur=6,t.fillText(ge,Se,_e),t.shadowBlur=2,t.fillText(ge,Se,_e),t.shadowBlur=0):t.fillText(ge,Se,_e),t.restore(),X===e.selectedRow&&ce===e.selectedCol&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect(B+1.5,W+1.5,Z.width-3,c-3)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(B+Z.width-.5,W),t.lineTo(B+Z.width-.5,W+c),t.stroke(),B+=Z.width}}if(M&&S<D&&I<k&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect(S+.5,I+.5,D-S-1,k-I-1)),t.restore(),l.length>0){const X=r-v-_;t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,X-.5),t.lineTo(i,X-.5),t.stroke();for(let K=0;K<l.length;K++){const W=l[K],$=X+K*c;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,$,i,c);let B=-f;for(let ce=0;ce<o.length;ce++){const Z=o[ce];if(B+Z.width<=0){B+=Z.width;continue}if(B>=i)break;const me=e.getCellStyle(Z,W),we=me.color??s.text,Xe=me.textAlign??"left",se=e.formatCell(Z,W);t.save(),t.beginPath(),t.rect(B+1,$,Z.width-2,c),t.clip(),t.font=`bold ${cl}px system-ui, -apple-system, sans-serif`,t.fillStyle=we,t.textBaseline="middle",Xe==="right"?(t.textAlign="right",t.fillText(se,B+Z.width-8,$+c/2)):(t.textAlign="left",t.fillText(se,B+8,$+c/2)),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(B+Z.width-.5,$),t.lineTo(B+Z.width-.5,$+c),t.stroke(),B+=Z.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,$+c-.5),t.lineTo(i,$+c-.5),t.stroke()}}if(e.aggregateRow){const X=r-_;t.fillStyle=ul(s.accent,.1),t.fillRect(0,X,i,_),t.strokeStyle=s.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,X-.5),t.lineTo(i,X-.5),t.stroke();let K=-f;for(let W=0;W<o.length;W++){const $=o[W];if(K+$.width<=0){K+=$.width;continue}if(K>=i)break;const ce=e.getCellStyle($,e.aggregateRow).textAlign??"left",Z=e.aggregateRow[$.colId]??"";t.save(),t.beginPath(),t.rect(K+1,X,$.width-2,_),t.clip(),t.font=`bold ${cl}px system-ui, -apple-system, sans-serif`,t.fillStyle=s.accent,t.textBaseline="middle",h&&(t.shadowColor=s.accent,t.shadowBlur=8),ce==="right"?(t.textAlign="right",t.fillText(Z,K+$.width-8,X+_/2)):(t.textAlign="left",t.fillText(Z,K+8,X+_/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=s.border,t.lineWidth=1,t.beginPath(),t.moveTo(K+$.width-.5,X),t.lineTo(K+$.width-.5,X+_),t.stroke(),K+=$.width}}t.restore()}function ul(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${r},${e})`}function RS(n,e,t){const i=n-.5,r=e-.5,s=(i*i+r*r)*t,o=i*(1+s)*s,a=r*(1+s)*s;return[n+o,e+a*.15]}function PS(n,e,t,i,r){const s=n/t,o=1-e/i,[a,l]=RS(s,o,r);return a<0||a>1||l<0||l>1?[-1,-1]:[a*t,(1-l)*i]}function fl(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function LS(n,e,t){return n>=e+t-24&&n<e+t}function kf(n,e,t){const i=e+t;return n>=i-6&&n<=i+1}function zf(n,e,t,i,r,s,o,a,l,c=!1){const u=n+l;let f=-1,h=0;for(let d=0;d<t.length;d++){if(u>=h&&u<h+t[d].width){f=d;break}h+=t[d].width}if(e<Lt)return{area:"header",colIdx:f,rowIdx:-1};const v=c?Vh:0;if(v>0&&e>=o-v)return{area:"agg",colIdx:f,rowIdx:-1};const _=a*r;if(_>0&&e>=o-_-v){const d=Math.floor((e-(o-_-v))/r);return{area:"pinned",colIdx:f,rowIdx:d}}const x=e-Lt+s,p=Math.floor(x/r);return p>=0&&p<i?{area:"body",colIdx:f,rowIdx:p}:{area:"none",colIdx:-1,rowIdx:-1}}const DS=500,IS=DS/2,US=1.6,Gc=`
  uniform vec2  uMouseUV;    // mouse position in UV space; (-999,-999) = lens off
  uniform float uLensR;      // lens radius in aspect-corrected units (0 = disabled)
  uniform float uLensZoom;   // lens magnification factor (~1.6)
  uniform vec3  uLensTint;   // ring tint (phosphor accent)
  uniform float uAspect;     // canvas W / H — needed to draw a circular lens
`,Wc=`
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
`,Xc=`
    // Lens ring — visually masks the magnification seam at the rim.
    if (uLensR > 0.0) {
      vec2  rd       = (vUv - uMouseUV) * vec2(uAspect, 1.0);
      float ringDist = abs(length(rd) - uLensR);
      float ring     = 1.0 - smoothstep(0.002, 0.012, ringDist);
      color.rgb     += uLensTint * ring * 0.32;
    }
`;function Yc(){return{uMouseUV:{value:new gt(-999,-999)},uLensR:{value:0},uLensZoom:{value:US},uLensTint:{value:new dt(7268263)},uAspect:{value:1}}}const Qt={x:-999,y:-999};function $c(n,e,t,i,r){const s=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=s&&r>0?IS/r:0,n.uniforms.uAspect.value=r>0?i/r:1}function qc(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const NS=["value"],FS=["disabled"],OS=["disabled"],BS=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,kS=28,zS=600,HS=Yi({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,r=Ie(t.rowData??[]),s=Ie(t.pinnedBottomRowData??[]),o=Ie(""),a=Ie(null),l=Kr({}),c=Kr({}),u=Kr(new Set),f=Ie(0),h=Ie(0),v=Ie(0),_=Ie(0),x=Ie(0),p=Ie(-1),d=Ie(null),A=Ie(null),b=Ie(null),E={...Qt},C=Ie({x:0,y:Lt}),P=Ie("");function R(Y){return Y.colId??Y.field??(Y.headerName?Y.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const U=it(()=>{const Y=t.defaultColDef??{};return t.columnDefs.filter(ee=>!u.has(R(ee))).map(ee=>{const Me=R(ee),Ne={...Y,...ee};return{colId:Me,colDef:Ne,width:c[Me]??Ne.width??100}})}),M=it(()=>{const Y=h.value;if(!Y)return U.value;const ee=U.value.reduce((Ae,Fe)=>Ae+Fe.width,0);if(!ee||ee>=Y)return U.value;const Me=Y/ee;let Ne=0;return U.value.map((Ae,Fe)=>{const y=Fe===U.value.length-1?Y-Ne:Math.max(8,Math.round(Ae.width*Me));return Ne+=y,{...Ae,width:y}})}),S=it(()=>{const Y=M.value.reduce((ee,Me)=>ee+Me.width,0);return Math.max(0,Y-h.value)}),D=it(()=>{const Y=s.value.length*t.rowHeight;return Math.max(0,v.value-Lt-Y)}),I=it(()=>Math.max(0,ce.value.length*t.rowHeight-D.value)),k=it(()=>Math.max(1,Math.floor(D.value/t.rowHeight))),X=it(()=>ce.value.length===0?0:Math.min(ce.value.length-1,Math.floor(_.value/t.rowHeight))),K=it(()=>Math.min(ce.value.length-1,X.value+k.value-1));function W(Y,ee){if(ee.colDef.valueGetter)return ee.colDef.valueGetter({data:Y,colDef:ee.colDef});if(ee.colDef.field)return Y[ee.colDef.field]}function $(Y,ee){const Me=W(ee,Y);return Y.colDef.valueFormatter?Y.colDef.valueFormatter({value:Me,data:ee,colDef:Y.colDef})??"":Y.colDef.cellRenderer?(Y.colDef.cellRenderer({value:Me,data:ee,colDef:Y.colDef})??"").replace(/<[^>]+>/g,""):Me==null?"":String(Me)}function B(Y,ee){return Y.colDef.cellStyle?typeof Y.colDef.cellStyle=="function"?Y.colDef.cellStyle({value:W(ee,Y),data:ee,colDef:Y.colDef})??{}:Y.colDef.cellStyle:{}}const ce=it(()=>{f.value;let Y=r.value;const ee=o.value.trim().toLowerCase();ee&&(Y=Y.filter(Me=>U.value.some(Ne=>String(W(Me,Ne)??"").toLowerCase().includes(ee))));for(const[Me,Ne]of Object.entries(l)){if(!Ne)continue;const Ae=U.value.find(Fe=>Fe.colId===Me);if(Ae)if(Ne.startsWith("__eq__")){const Fe=Ne.slice(6).toLowerCase();Y=Y.filter(ze=>String(W(ze,Ae)??"").toLowerCase()===Fe)}else{const Fe=Ne.toLowerCase();Y=Y.filter(ze=>String(W(ze,Ae)??"").toLowerCase().includes(Fe))}}if(a.value){const{colId:Me,dir:Ne}=a.value,Ae=U.value.find(Fe=>Fe.colId===Me);Ae&&(Y=[...Y].sort((Fe,ze)=>{const y=W(Fe,Ae),z=W(ze,Ae);let j=0;return Ae.colDef.comparator?j=Ae.colDef.comparator(y,z):typeof y=="number"&&typeof z=="number"?j=y-z:j=String(y??"").localeCompare(String(z??""),void 0,{numeric:!0}),Ne==="asc"?j:-j}))}return Y}),Z=it(()=>{const Y=U.value.filter(Ae=>Ae.colDef.aggFunc!=null);if(Y.length===0)return null;const ee=ce.value,Me={};for(const Ae of Y){const Fe=ee.map(y=>W(y,Ae)),ze=CS(Fe,Ae.colDef.aggFunc);if(ze==null){Me[Ae.colId]="";continue}Me[Ae.colId]=Ae.colDef.aggValueFormatter?Ae.colDef.aggValueFormatter(ze):String(ze)}const Ne=Y[0].colId;return Me[Ne]===""&&(Me[Ne]="Σ"),Me});Ye(ce,()=>{_.value=0,d.value=null}),Ye(S,()=>{x.value=Math.min(x.value,S.value)}),Ye(I,()=>{_.value=Math.min(_.value,I.value)});function me(Y){const ee=Y*t.rowHeight,Me=ee+t.rowHeight;ee<_.value?_.value=ee:Me>_.value+D.value&&(_.value=Math.min(I.value,Me-D.value))}function we(){_.value=Math.max(0,_.value-D.value),ue()}function Xe(){_.value=Math.min(I.value,_.value+D.value),ue()}let se=!1,ge="",Se=0,_e=0,de=!1,ve=!1,Re=0,Qe=0,L=0,F=0,w=!1;function he(Y,ee){var Me;se=!0,ge=Y,Se=ee,_e=((Me=M.value.find(Ne=>Ne.colId===Y))==null?void 0:Me.width)??100,de=!1}function te(Y){if(ve){const Fe=Re-Y.clientX,ze=Qe-Y.clientY;(Math.abs(Fe)>4||Math.abs(ze)>4)&&(w=!0),x.value=Math.max(0,Math.min(S.value,L+Fe)),_.value=Math.max(0,Math.min(I.value,F+ze)),ue();return}if(!se)return;const ee=h.value,Me=Math.max(30,_e+(Y.clientX-Se)),Ne=U.value.filter(Fe=>Fe.colId!==ge).reduce((Fe,ze)=>Fe+ze.width,0),Ae=ee-Me;Ae>10&&(c[ge]=Math.max(10,Math.round(Me*Ne/Ae))),ue()}function ne(){ve&&(w&&(de=!0),ve=!1),se&&(se=!1,de=!0,i("column-resized"))}const oe=Ie(null),re=Ie(null),ie=Bi("cathodeResetTick",Ie(0));Ye(ie,()=>Nt());let g=null,m=!1,T,O,H,V,ae;const N=`
  uniform sampler2D uTex;
  uniform float     uStrength;   // barrel strength 0..~0.55
  uniform float     uScanlines;  // 1.0 = on
  uniform float     uVignette;   // 1.0 = on  (off for paper theme)
  uniform vec3      uBezel;      // bezel / outside-screen colour
  ${Gc}

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    vec2  cc   = uv - 0.5;
    float dist = dot(cc, cc) * uStrength;
    vec2  d    = cc * (1.0 + dist) * dist;
    return uv + d;
  }

  ${Wc}

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

    ${Xc}

    gl_FragColor = color;
  }
`;function J(){if(!(!re.value||!oe.value)){ae=document.createElement("canvas");try{g=new xa({canvas:re.value,antialias:!1,alpha:!0})}catch{m=!0}if(!m&&!g.getContext()&&(g.dispose(),g=null,m=!0),m){xe();return}g.setPixelRatio(1),g.setClearColor(0,0),T=new Ma,O=new io(-1,1,1,-1,0,1),V=new br(ae),V.minFilter=Et,V.magFilter=Et,H=new bn({uniforms:{uTex:{value:V},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},uBezel:{value:new dt(0)},...Yc()},vertexShader:BS,fragmentShader:N,transparent:!0}),T.add(new pn(new $i(2,2),H)),xe()}}function xe(){if(!oe.value||!g&&!m)return;const Y=oe.value.clientWidth,ee=oe.value.clientHeight-(t.pagination?kS:0);if(!Y||!ee)return;const Me=ae.width!==Y||ae.height!==ee;ae.width=Y,ae.height=ee,h.value=Y,v.value=ee,x.value=Math.max(0,Math.min(S.value,x.value)),_.value=Math.max(0,Math.min(I.value,_.value)),g?(Me&&V&&(V.dispose(),V=new br(ae),V.minFilter=Et,V.magFilter=Et,H&&(H.uniforms.uTex.value=V)),g.setPixelRatio(window.devicePixelRatio||1),g.setSize(Y,ee)):re.value&&(re.value.width=Y,re.value.height=ee,re.value.style.width=Y+"px",re.value.style.height=ee+"px"),ue()}function ue(){var Me,Ne,Ae,Fe,ze,y,z,j,Q,q,ye,Ce;if(!(ae!=null&&ae.width))return;if(m){if(!re.value)return;Bf(ae,{cols:M.value,rows:ce.value,pinnedRows:s.value,rowHeight:t.rowHeight,scrollY:_.value,scrollX:x.value,theme:t.theme,glow:!1,sortColId:((Me=a.value)==null?void 0:Me.colId)??null,sortDir:((Ne=a.value)==null?void 0:Ne.dir)??null,colFilters:l,hoveredRow:p.value,selectedRow:((Ae=d.value)==null?void 0:Ae.row)??-1,selectedCol:((Fe=d.value)==null?void 0:Fe.col)??-1,selectionAnchorRow:((ze=A.value)==null?void 0:ze.row)??-1,selectionAnchorCol:((y=A.value)==null?void 0:y.col)??-1,formatCell:$,getCellStyle:B});const Be=re.value.getContext("2d");Be&&Be.drawImage(ae,0,0);return}if(!g||!H||!V)return;const Y=Yr[t.theme]??Yr.none,ee=t.theme==="paper";H.uniforms.uStrength.value=t.curvature/45*.55,H.uniforms.uScanlines.value=t.scanlines&&!ee?1:0,H.uniforms.uVignette.value=ee?0:1,H.uniforms.uBezel.value.set(Y.bg),$c(H,t.magnify,E,ae.width,ae.height),Bf(ae,{cols:M.value,rows:ce.value,pinnedRows:s.value,rowHeight:t.rowHeight,scrollY:_.value,scrollX:x.value,theme:t.theme,glow:t.glow,sortColId:((z=a.value)==null?void 0:z.colId)??null,sortDir:((j=a.value)==null?void 0:j.dir)??null,colFilters:l,hoveredRow:p.value,selectedRow:((Q=d.value)==null?void 0:Q.row)??-1,selectedCol:((q=d.value)==null?void 0:q.col)??-1,selectionAnchorRow:((ye=A.value)==null?void 0:ye.row)??-1,selectionAnchorCol:((Ce=A.value)==null?void 0:Ce.col)??-1,formatCell:$,getCellStyle:B,aggregateRow:Z.value}),V.needsUpdate=!0,g.render(T,O)}function Ee(Y){if(!re.value)return[-1,-1];const ee=re.value.getBoundingClientRect(),Me=Y.clientX-ee.left,Ne=Y.clientY-ee.top,Ae=re.value.width||ee.width,Fe=re.value.height||ee.height,ze=t.curvature/45*.55,[y,z]=PS(Me,Ne,Ae,Fe,ze);return y<0?[-1,-1]:[y,z]}let De=0;function Oe(Y){b.value=null;const ee=Date.now();if(Y.deltaX!==0){De=ee,x.value=Math.max(0,Math.min(S.value,x.value+Y.deltaX)),ue();return}if(Y.shiftKey&&Y.deltaY!==0){De=ee,x.value=Math.max(0,Math.min(S.value,x.value+Y.deltaY)),ue();return}ee-De<zS||(_.value=Math.max(0,Math.min(I.value,_.value+Y.deltaY)),ue())}function be(Y){if(se)return;if(t.magnify&&re.value){const Ae=qc(Y,re.value);E.x=Ae.x,E.y=Ae.y}const[ee,Me]=Ee(Y);if(ee<0){p.value=-1,ue();return}const Ne=zf(ee,Me,M.value,ce.value.length,t.rowHeight,_.value,ae.height,s.value.length,x.value,Z.value!==null);if(p.value=Ne.area==="body"?Ne.rowIdx:-1,Ne.area==="header"&&Ne.colIdx>=0){const Ae=M.value[Ne.colIdx],Fe=fl(Ne.colIdx,M.value),ze=ee+x.value;re.value.style.cursor=Ae&&kf(ze,Fe,Ae.width)?"col-resize":"pointer"}else Ne.area==="body"?re.value.style.cursor="pointer":re.value.style.cursor="default";ue()}function Ge(){p.value=-1,E.x=Qt.x,E.y=Qt.y,ue()}function qe(Y){const[ee,Me]=Ee(Y);if(ee<0)return;if(Me>=Lt){ve=!0,w=!1,Re=Y.clientX,Qe=Y.clientY,L=x.value,F=_.value;return}const Ne=ee+x.value;for(let Ae=0;Ae<M.value.length;Ae++){const Fe=M.value[Ae],ze=fl(Ae,M.value);if(Fe.colDef.resizable!==!1&&kf(Ne,ze,Fe.width)){he(Fe.colId,Y.clientX);return}}}function rt(Y){var Ae,Fe,ze;if(de){de=!1;return}if(se)return;const[ee,Me]=Ee(Y);if(ee<0){b.value=null;return}const Ne=zf(ee,Me,M.value,ce.value.length,t.rowHeight,_.value,ae.height,s.value.length,x.value,Z.value!==null);if(Ne.area==="header"&&Ne.colIdx>=0){const y=M.value[Ne.colIdx],z=fl(Ne.colIdx,M.value),j=ee+x.value;y.colDef.filter&&LS(j,z,y.width)?(Y.stopPropagation(),b.value===y.colId?b.value=null:(b.value=y.colId,P.value=(Ae=l[y.colId])!=null&&Ae.startsWith("__eq__")?l[y.colId].slice(6):l[y.colId]??"",C.value={x:Math.max(0,z-x.value),y:Lt})):y.colDef.sortable!==!1&&(b.value=null,a.value=((Fe=a.value)==null?void 0:Fe.colId)===y.colId?a.value.dir==="asc"?{colId:y.colId,dir:"desc"}:null:{colId:y.colId,dir:"asc"},i("sort-changed"));return}if(b.value=null,Ne.area==="body"&&Ne.rowIdx>=0&&Ne.colIdx>=0){const y=Ne.rowIdx;Y.shiftKey&&d.value?(A.value||(A.value={...d.value}),d.value={row:y,col:Ne.colIdx}):(d.value={row:y,col:Ne.colIdx},A.value={row:y,col:Ne.colIdx}),(ze=re.value)==null||ze.focus();const z=ce.value[y],j=M.value[Ne.colIdx];z&&j&&(i("row-clicked",{data:z,event:Y}),i("cell-selected",{data:z,row:y,col:Ne.colIdx,colId:j.colId}))}}function G(Y){var ee,Me;b.value&&((Me=(ee=Y.target).closest)!=null&&Me.call(ee,".cathode-filter-popup")||(b.value=null))}function Te(Y){var Ae;if(!h.value)return;let ee=0;for(let Fe=0;Fe<Y;Fe++)ee+=M.value[Fe].width;const Me=((Ae=M.value[Y])==null?void 0:Ae.width)??0,Ne=ee-x.value;Ne<0?x.value=Math.max(0,ee):Ne+Me>h.value&&(x.value=Math.min(S.value,ee+Me-h.value))}function fe(Y){const Me=M.value.length-1,Ne=ce.value.length-1;if(!d.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(Y.key)&&(Y.preventDefault(),d.value={row:X.value,col:0},A.value={row:X.value,col:0});return}let{row:Ae,col:Fe}=d.value;const ze=(y,z,j=!1)=>{Ae=Math.max(0,Math.min(Ne,y)),Fe=Math.max(0,Math.min(Me,z)),d.value={row:Ae,col:Fe},j||(A.value={row:Ae,col:Fe}),me(Ae),Te(Fe)};switch(Y.key){case"ArrowDown":Y.preventDefault(),ze(Ae+1,Fe,Y.shiftKey);break;case"ArrowUp":Y.preventDefault(),ze(Ae-1,Fe,Y.shiftKey);break;case"ArrowRight":Y.preventDefault(),Y.shiftKey?ze(Ae,Fe+1,!0):Fe<Me?ze(Ae,Fe+1):ze(Ae+1,0);break;case"ArrowLeft":Y.preventDefault(),Y.shiftKey?ze(Ae,Fe-1,!0):Fe>0?ze(Ae,Fe-1):ze(Ae-1,Me);break;case"Tab":Y.preventDefault(),Y.shiftKey?Fe>0?ze(Ae,Fe-1):ze(Ae-1,Me):Fe<Me?ze(Ae,Fe+1):ze(Ae+1,0);break;case"Enter":Y.preventDefault(),Y.shiftKey?ze(Ae-1,Fe):ze(Ae+1,Fe);break;case"Home":Y.preventDefault(),Y.ctrlKey||Y.metaKey?ze(0,0,Y.shiftKey):ze(Ae,0,Y.shiftKey);break;case"End":Y.preventDefault(),Y.ctrlKey||Y.metaKey?ze(Ne,Me,Y.shiftKey):ze(Ae,Me,Y.shiftKey);break;case"PageDown":Y.preventDefault(),ze(Math.min(Ne,Ae+k.value),Fe,Y.shiftKey);break;case"PageUp":Y.preventDefault(),ze(Math.max(0,Ae-k.value),Fe,Y.shiftKey);break;case"Escape":d.value=null,A.value=null;break;case"c":case"C":(Y.ctrlKey||Y.metaKey)&&(Y.preventDefault(),pe());break}}function pe(){var j;if(!d.value)return;const Y=M.value,ee=ce.value,Me=A.value??d.value,Ne=Math.min(Me.row,d.value.row),Ae=Math.max(Me.row,d.value.row),Fe=Math.min(Me.col,d.value.col),ze=Math.max(Me.col,d.value.col),y=[];for(let Q=Ne;Q<=Ae;Q++){const q=ee[Q];if(!q)continue;const ye=[];for(let Ce=Fe;Ce<=ze;Ce++){const Be=Y[Ce];Be&&ye.push($(Be,q).replace(/[\t\r\n]+/g," "))}y.push(ye.join("	"))}const z=y.join(`
`);(j=navigator.clipboard)==null||j.writeText(z).catch(()=>{})}function Ue(Y){const ee=Y.target.value;P.value=ee,ee?l[b.value]=ee:delete l[b.value],i("filter-changed")}function Pe(){b.value&&delete l[b.value],P.value="",b.value=null,i("filter-changed")}const Ke={setGridOption(Y,ee){Y==="rowData"?r.value=ee:Y==="pinnedBottomRowData"?s.value=ee:Y==="quickFilterText"&&(o.value=ee)},getColumnState(){return t.columnDefs.map(Y=>{var Me,Ne;const ee=R(Y);return{colId:ee,hide:u.has(ee),sort:((Me=a.value)==null?void 0:Me.colId)===ee?a.value.dir:null,sortIndex:((Ne=a.value)==null?void 0:Ne.colId)===ee?0:null,width:c[ee]??Y.width}})},applyColumnState({state:Y}){for(const ee of Y)ee.hide===!0&&u.add(ee.colId),ee.hide===!1&&u.delete(ee.colId),ee.sort&&(a.value={colId:ee.colId,dir:ee.sort}),ee.width&&(c[ee.colId]=ee.width)},setFilterModel(Y){for(const ee of Object.keys(l))delete l[ee];if(Y)for(const[ee,Me]of Object.entries(Y))(Me==null?void 0:Me.type)==="equals"?l[ee]=`__eq__${Me.filter}`:Me!=null&&Me.filter&&(l[ee]=Me.filter)},getFilterModel(){const Y={};for(const[ee,Me]of Object.entries(l))Me&&(Y[ee]=Me.startsWith("__eq__")?{type:"equals",filter:Me.slice(6)}:{type:"contains",filter:Me});return Y},async setColumnFilterModel(Y,ee){ee?ee.type==="equals"?l[Y]=`__eq__${ee.filter}`:l[Y]=ee.filter??"":delete l[Y]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:Y="export.csv"}={}){const ee=U.value,Me=ee.map(ze=>ze.colDef.headerName??ze.colId).join(","),Ne=ce.value.map(ze=>ee.map(y=>`"${String($(y,ze)).replace(/"/g,'""')}"`).join(",")),Ae=new Blob([[Me,...Ne].join(`
`)],{type:"text/csv"}),Fe=URL.createObjectURL(Ae);Object.assign(document.createElement("a"),{href:Fe,download:Y}).click(),URL.revokeObjectURL(Fe)},resize(){xe()},resetColumnState(){u.clear();for(const ee of t.columnDefs)ee.hide&&u.add(R(ee));const Y=t.columnDefs.find(ee=>ee.sort);a.value=Y?{colId:R(Y),dir:Y.sort}:null;for(const ee of Object.keys(c))delete c[ee];for(const ee of Object.keys(l))delete l[ee];o.value="",_.value=0,d.value=null,b.value=null}};Ye([ce,()=>s.value,M,_,p,d],()=>En(ue)),Ye(()=>t.theme,()=>ue()),Ye(()=>t.curvature,()=>En(xe)),Ye(()=>t.scanlines,()=>ue()),Ye(()=>t.glow,()=>ue()),Ye(()=>t.magnify,Y=>{Y||(E.x=Qt.x,E.y=Qt.y),ue()}),Ye(d,Y=>{if(!Y)return;const ee=ce.value[Y.row],Me=M.value[Y.col];ee&&Me&&i("cell-selected",{data:ee,row:Y.row,col:Y.col,colId:Me.colId})});let pt=null,bt=null,st=0;function Nt(){cancelAnimationFrame(st),st=requestAnimationFrame(xe)}function gn(Y){Y.preventDefault()}function ms(){g==null||g.dispose(),g=null,m=!1,J()}Bn(()=>{for(const Y of t.columnDefs)Y.hide&&u.add(R(Y)),Y.sort&&!a.value&&(a.value={colId:R(Y),dir:Y.sort});r.value=t.rowData??[],s.value=t.pinnedBottomRowData??[],document.addEventListener("click",G),document.addEventListener("mousemove",te),document.addEventListener("mouseup",ne),En(()=>{var Y;J(),re.value&&(re.value.addEventListener("webglcontextlost",gn),re.value.addEventListener("webglcontextrestored",ms)),oe.value&&(pt=new ResizeObserver(()=>xe()),pt.observe(oe.value),bt=new IntersectionObserver(ee=>{ee.some(Me=>Me.isIntersecting)&&Nt()}),bt.observe(oe.value)),window.addEventListener("resize",Nt),(Y=window.visualViewport)==null||Y.addEventListener("resize",Nt),i("grid-ready",{api:Ke})})}),jn(()=>{var Y,ee,Me;document.removeEventListener("click",G,!0),document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",ne),(Y=re.value)==null||Y.removeEventListener("webglcontextlost",gn),(ee=re.value)==null||ee.removeEventListener("webglcontextrestored",ms),pt==null||pt.disconnect(),bt==null||bt.disconnect(),window.removeEventListener("resize",Nt),(Me=window.visualViewport)==null||Me.removeEventListener("resize",Nt),cancelAnimationFrame(st),g==null||g.dispose()});const Yt=it(()=>Yr[t.theme]??Yr.none),Zn=it(()=>({position:"absolute",left:`${C.value.x}px`,top:`${C.value.y}px`,zIndex:100,background:Yt.value.headerBg,border:`1px solid ${Yt.value.accent}`,color:Yt.value.text,boxShadow:"0 4px 14px rgba(0,0,0,0.55)",borderRadius:"3px",display:"flex",alignItems:"center",gap:"4px",padding:"5px",minWidth:"160px"})),gs=it(()=>({background:Yt.value.bg,border:`1px solid ${Yt.value.border}`,color:Yt.value.text,fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"11px",padding:"3px 7px",borderRadius:"2px",outline:"none",flex:"1"})),ro=it(()=>({background:Yt.value.headerBg,borderTop:`1px solid ${Yt.value.border}`,color:Yt.value.text})),so=it(()=>({background:Yt.value.bg})),Ki=it(()=>Yt.value.accent);return(Y,ee)=>{var Me,Ne;return Ze(),yt("div",{ref_key:"wrapEl",ref:oe,class:"cathode-wrap",style:on(so.value)},[ke("canvas",{ref_key:"canvasEl",ref:re,class:"cathode-canvas",tabindex:"0",onWheel:Oi(Oe,["prevent"]),onMousemove:be,onMouseleave:Ge,onMousedown:qe,onClick:rt,onKeydown:fe},null,544),b.value?(Ze(),yt("div",{key:0,class:"cathode-filter-popup",style:on(Zn.value),onClick:ee[0]||(ee[0]=Oi(()=>{},["stop"]))},[ke("input",{style:on(gs.value),value:P.value,placeholder:"Filter…",autofocus:"",onInput:Ue,onKeydown:xg(Pe,["escape"])},null,44,NS),P.value?(Ze(),yt("button",{key:0,style:on({background:"none",border:"none",color:Yt.value.text,opacity:"0.55",cursor:"pointer",fontSize:"11px",padding:"0 4px"}),onClick:Pe},"✕",4)):Zt("",!0)],4)):Zt("",!0),n.pagination?(Ze(),yt("div",{key:1,class:"cathode-pagination",style:on(ro.value)},[ke("button",{disabled:_.value<=0,onClick:ee[1]||(ee[1]=Ae=>we())},"◀",8,FS),ke("span",null,Sn((X.value+1).toLocaleString())+"–"+Sn(Math.min(ce.value.length,K.value+1).toLocaleString())+" / "+Sn(ce.value.length.toLocaleString()),1),ke("button",{disabled:_.value>=I.value,onClick:ee[2]||(ee[2]=Ae=>Xe())},"▶",8,OS),ke("span",{class:"cathode-page-info",style:on({color:Ki.value})},Sn(ce.value.length.toLocaleString())+" rows ",5),d.value?(Ze(),yt("span",{key:0,class:"cathode-sel-readout",style:on({color:Ki.value})},Sn(((Me=M.value[d.value.col])==null?void 0:Me.colDef.headerName)??((Ne=M.value[d.value.col])==null?void 0:Ne.colId))+" : "+Sn($(M.value[d.value.col],ce.value[d.value.row])),5)):Zt("",!0)],4)):Zt("",!0)],4)}}}),qi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Hf=qi(HS,[["__scopeId","data-v-b951b247"]]),Qo={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function VS(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const GS=12,Ot=18,Bs=10,Mr=6,Kc=`${GS}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function WS(n,e,t){if(t<=0||!e)return[e];const i=[];for(const r of e.split(`
`)){if(!r){i.push("");continue}if(n.measureText(r).width<=t){i.push(r);continue}const s=r.split(/(\s+)/);let o="";for(const a of s){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function Gh(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),r=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${r}`}return n}function XS(n,e){return Math.ceil(n.measureText(e).width)+12}function YS(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:r,wordWrap:s}=n,o=n.formatTs??Gh;t.font=Kc;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=r&&c.ts!=null?o(c.ts):"",h=s?WS(t,c.text,i):c.text.split(`
`);for(let v=0;v<h.length;v++)a.push({entryIdx:l,text:h[v],level:u,timestamp:v===0?f:"",isFirstFrag:v===0,widthPx:t.measureText(h[v]).width})}return a}function Vf(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=Qo[e.theme]??Qo.none;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip(),t.font=Kc,t.textBaseline="middle";const o=e.visualLines,a=Bs-e.scrollX,l=(e.showTimestamps?Bs+e.timestampWidth:Bs)-e.scrollX,c=Math.max(0,Math.floor((e.scrollY-Mr)/Ot)),u=Math.min(o.length,Math.ceil((e.scrollY+r-Mr)/Ot)+1);for(let f=c;f<u;f++){const h=o[f],v=Mr+f*Ot-e.scrollY+Ot/2;if(h.entryIdx%2===1&&h.isFirstFrag){t.fillStyle=s.rowAlt;let x=1;for(;f+x<u&&o[f+x].entryIdx===h.entryIdx;)x++;t.fillRect(0,v-Ot/2,i,Ot*x)}e.selectionStart>=0&&f>=e.selectionStart&&f<=e.selectionEnd&&(t.fillStyle=s.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,v-Ot/2,i,Ot)),f===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,v-Ot/2,i,Ot)),e.showTimestamps&&h.timestamp&&(t.fillStyle=s.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=s.timestamp),t.fillText(h.timestamp,a,v),t.shadowBlur=0);const _=VS(s,h.level);t.fillStyle=_,t.textAlign="left",e.glow?(t.shadowColor=_,t.shadowBlur=14,t.fillText(h.text,l,v),t.shadowBlur=7,t.fillText(h.text,l,v),t.shadowBlur=3,t.fillText(h.text,l,v),t.shadowBlur=0):t.fillText(h.text,l,v)}t.restore()}function Gf(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-Mr)/Ot);return i<0||i>=t?-1:i}function $S(n){return Mr*2+n*Ot}const qS=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,KS=Yi({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=Ie(null),r=Ie(null),s={...Qt},o=Ie(0),a=Ie(0),l=Ie(0),c=Ie(-1),u=Ie(!0),f=Ie(-1),h=Ie(-1),v=it(()=>{const N=t.entries??[];return t.maxLines>0&&N.length>t.maxLines?N.slice(N.length-t.maxLines):N}),_=it(()=>{if(!t.showTimestamps)return"";const N=t.formatTs??Gh;let J="00:00:00";for(const xe of v.value){if(xe.ts==null)continue;const ue=N(xe.ts);ue.length>J.length&&(J=ue)}return J}),x=Ie(0),p=Ie([]);function d(){if(!k)return;const N=k.getContext("2d");if(!N)return;N.font=Kc;const J=t.showTimestamps?XS(N,_.value):0;x.value=J;const xe=Math.max(1,o.value-Bs*2-J);p.value=YS({entries:v.value,ctx:N,textMaxWidth:xe,showTimestamps:t.showTimestamps,formatTs:t.formatTs,wordWrap:t.wordWrap})}const A=it(()=>$S(p.value.length)),b=it(()=>Math.max(0,A.value-a.value)),E=it(()=>{let N=0;for(const J of p.value)J.widthPx>N&&(N=J.widthPx);return Bs*2+x.value+N}),C=it(()=>Math.max(0,E.value-o.value)),P=Ie(0);Ye(b,()=>{u.value?l.value=b.value:l.value=Math.min(l.value,b.value)}),Ye(C,()=>{P.value=Math.min(P.value,C.value)}),Ye([v,o,()=>t.showTimestamps,()=>t.wordWrap,_],()=>{d(),En($)},{deep:!1});let R=null,U=!1,M,S,D,I,k;const X=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${Gc}

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    vec2  cc   = uv - 0.5;
    float dist = dot(cc, cc) * uStrength;
    vec2  d    = cc * (1.0 + dist) * dist;
    return uv + d;
  }

  ${Wc}

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

    ${Xc}

    gl_FragColor = color;
  }
`;function K(){if(!(!r.value||!i.value)){k=document.createElement("canvas");try{R=new xa({canvas:r.value,antialias:!1,alpha:!0})}catch{U=!0}if(!U&&!R.getContext()&&(R.dispose(),R=null,U=!0),U){W();return}R.setPixelRatio(1),R.setClearColor(0,0),M=new Ma,S=new io(-1,1,1,-1,0,1),I=new br(k),I.minFilter=Et,I.magFilter=Et,D=new bn({uniforms:{uTex:{value:I},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...Yc()},vertexShader:qS,fragmentShader:X,transparent:!0}),M.add(new pn(new $i(2,2),D)),W()}}function W(){if(!i.value||!R&&!U)return;const N=i.value.clientWidth,J=i.value.clientHeight;if(!N||!J)return;const xe=k.width!==N||k.height!==J;xe&&(k.width=N,k.height=J,o.value=N,a.value=J,d(),R?(xe&&I&&(I.dispose(),I=new br(k),I.minFilter=Et,I.magFilter=Et,D&&(D.uniforms.uTex.value=I)),R.setPixelRatio(window.devicePixelRatio||1),R.setSize(N,J)):r.value&&(r.value.width=N,r.value.height=J,r.value.style.width=N+"px",r.value.style.height=J+"px"),u.value&&(l.value=Math.max(0,A.value-a.value)),$())}function $(){if(!(k!=null&&k.width))return;if(U){if(!r.value)return;Vf(k,{visualLines:p.value,scrollY:l.value,scrollX:P.value,theme:t.theme,glow:!1,showTimestamps:t.showTimestamps,timestampWidth:x.value,hoveredLine:c.value,selectionStart:Math.min(f.value,h.value),selectionEnd:Math.max(f.value,h.value)});const J=r.value.getContext("2d");J&&J.drawImage(k,0,0);return}if(!R||!D||!I)return;const N=t.theme==="paper";D.uniforms.uStrength.value=t.curvature/45*.55,D.uniforms.uScanlines.value=t.scanlines&&!N?1:0,D.uniforms.uVignette.value=N?0:1,$c(D,t.magnify,s,k.width,k.height),Vf(k,{visualLines:p.value,scrollY:l.value,scrollX:P.value,theme:t.theme,glow:t.glow,showTimestamps:t.showTimestamps,timestampWidth:x.value,hoveredLine:c.value,selectionStart:Math.min(f.value,h.value),selectionEnd:Math.max(f.value,h.value)}),I.needsUpdate=!0,R.render(M,S)}Ye(()=>t.theme,()=>$()),Ye(()=>t.curvature,()=>$()),Ye(()=>t.scanlines,()=>$()),Ye(()=>t.glow,()=>$()),Ye(()=>t.magnify,N=>{N||(s.x=Qt.x,s.y=Qt.y),$()}),Ye(l,()=>$()),Ye(P,()=>$()),Ye(c,()=>$()),Ye([f,h],()=>$());function B(N){if(!r.value)return[-1,-1];const J=r.value.getBoundingClientRect();return[N.clientX-J.left,N.clientY-J.top]}function ce(N){l.value=Math.max(0,Math.min(b.value,N)),u.value=l.value>=b.value-4}function Z(N){P.value=Math.max(0,Math.min(C.value,N))}function me(N){N.shiftKey?Z(P.value+N.deltaY):Math.abs(N.deltaX)>Math.abs(N.deltaY)?Z(P.value+N.deltaX):ce(l.value+N.deltaY)}let we=!1,Xe=0,se=0,ge=0,Se=0,_e=!1;function de(N){we=!0,_e=!1,Xe=N.clientX,se=N.clientY,ge=P.value,Se=l.value,i.value&&i.value.focus()}function ve(N){if(we){const J=Xe-N.clientX,xe=se-N.clientY;(Math.abs(J)>4||Math.abs(xe)>4)&&(_e=!0),Z(ge+J),ce(Se+xe)}}function Re(){we&&(we=!1,_e&&(_e=!1))}function Qe(N){const[,J]=B(N);return J<0?-1:Gf(J,l.value,p.value.length)}function L(N){if(_e){_e=!1;return}const J=Qe(N);if(J<0){f.value=-1,h.value=-1;return}N.shiftKey&&f.value>=0||(f.value=J),h.value=J}function F(N,J){const xe=p.value.length;if(xe===0)return;const ue=h.value<0?0:h.value;let Ee=Math.max(0,Math.min(xe-1,ue+N));h.value=Ee,(!J||f.value<0)&&(f.value=Ee),c.value=Ee;const De=Mr+Ee*Ot,Oe=De+Ot;De<l.value?ce(De):Oe>l.value+a.value&&ce(Oe-a.value)}function w(){const N=Math.min(f.value,h.value),J=Math.max(f.value,h.value);if(N<0)return"";const xe=p.value,ue=new Set,Ee=[];for(let De=N;De<=J&&De<xe.length;De++){const Oe=xe[De];if(ue.has(Oe.entryIdx))continue;ue.add(Oe.entryIdx);let be="";for(let Ge=0;Ge<xe.length;Ge++)xe[Ge].entryIdx===Oe.entryIdx&&(be+=(be&&!xe[Ge].isFirstFrag?" ":"")+xe[Ge].text);Ee.push(Oe.timestamp?`${Oe.timestamp}  ${be}`:be)}return Ee.join(`
`)}async function he(){const N=w();if(N)try{await navigator.clipboard.writeText(N)}catch{const J=document.createElement("textarea");J.value=N,J.style.position="fixed",J.style.opacity="0",document.body.appendChild(J),J.select();try{document.execCommand("copy")}catch{}document.body.removeChild(J)}}function te(N){if((N.metaKey||N.ctrlKey)&&(N.key==="c"||N.key==="C")){f.value>=0&&(N.preventDefault(),he());return}if((N.metaKey||N.ctrlKey)&&(N.key==="a"||N.key==="A")){N.preventDefault(),f.value=0,h.value=p.value.length-1;return}switch(N.key){case"ArrowDown":N.preventDefault(),F(1,N.shiftKey);break;case"ArrowUp":N.preventDefault(),F(-1,N.shiftKey);break;case"ArrowRight":N.preventDefault(),Z(P.value+Ot*2);break;case"ArrowLeft":N.preventDefault(),Z(P.value-Ot*2);break;case"PageDown":N.preventDefault(),ce(l.value+a.value);break;case"PageUp":N.preventDefault(),ce(l.value-a.value);break;case"Home":N.preventDefault(),ce(0),Z(0);break;case"End":N.preventDefault(),ce(b.value);break;case"Escape":f.value=-1,h.value=-1;break}}function ne(N){if(t.magnify&&r.value){const xe=qc(N,r.value);s.x=xe.x,s.y=xe.y,$()}const[,J]=B(N);if(J<0){c.value=-1;return}c.value=Gf(J,l.value,p.value.length)}function oe(){c.value=-1,s.x=Qt.x,s.y=Qt.y,$()}e({scrollToBottom(){u.value=!0,l.value=b.value},scrollToLine(N){ce(Mr+N*Ot)}});let re=null,ie=null,g=0;const m=Bi("cathodeResetTick",Ie(0));Ye(m,()=>T());function T(){cancelAnimationFrame(g),g=requestAnimationFrame(W)}function O(N){N.preventDefault()}function H(){R==null||R.dispose(),R=null,U=!1,K()}Bn(()=>{document.addEventListener("mousemove",ve),document.addEventListener("mouseup",Re),En(()=>{var N;K(),r.value&&(r.value.addEventListener("webglcontextlost",O),r.value.addEventListener("webglcontextrestored",H)),i.value&&(re=new ResizeObserver(()=>W()),re.observe(i.value),ie=new IntersectionObserver(J=>{J.some(xe=>xe.isIntersecting)&&T()}),ie.observe(i.value)),window.addEventListener("resize",T),(N=window.visualViewport)==null||N.addEventListener("resize",T),l.value=b.value})}),jn(()=>{var N,J,xe;document.removeEventListener("mousemove",ve),document.removeEventListener("mouseup",Re),(N=r.value)==null||N.removeEventListener("webglcontextlost",O),(J=r.value)==null||J.removeEventListener("webglcontextrestored",H),re==null||re.disconnect(),ie==null||ie.disconnect(),window.removeEventListener("resize",T),(xe=window.visualViewport)==null||xe.removeEventListener("resize",T),cancelAnimationFrame(g),R==null||R.dispose()});const V=it(()=>Qo[t.theme]??Qo.none),ae=it(()=>({background:V.value.bg}));return(N,J)=>(Ze(),yt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:on(ae.value),tabindex:"0",onKeydown:te},[ke("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-log-canvas",onWheel:Oi(me,["prevent"]),onMousemove:ne,onMouseleave:oe,onMousedown:de,onClick:L},null,544)],36))}}),gc=qi(KS,[["__scopeId","data-v-50995a41"]]),ea={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},jS=.18,Cs=8,jc=22,ZS=4,yi=8,Sr=56,Wh=42,Gi="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",JS="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",dl=4,QS=1,ey=1;function ty(n,e,t,i=0,r=!1){const s=r?Wh:Sr,o=Math.max(0,e-yi-s),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function ny(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,r=-1/0,s=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>r&&(r=c.high),c.volume>s&&(s=c.volume))}if(!isFinite(i)||!isFinite(r)||i===r){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,s)}}const a=(r-i)*.04;return{min:i-a,max:r+a,maxVol:Math.max(1,s)}}function iy(n,e,t=!1){const i=t?ZS:jc,r=Math.max(1,n-Cs-i-dl),s=Math.max(0,Math.round(r*e)),o=r-s;return{priceY0:Cs,priceY1:Cs+o,volumeY0:Cs+o+dl,volumeY1:Cs+o+dl+s}}function $n(n,e,t,i){const r=e.max-e.min;return r<=0?(t+i)/2:t+(1-(n-e.min)/r)*(i-t)}function Wi(n,e,t){return yi+(n-e+.5)*t}function gr(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function Zc(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${r}:${s}`}function ry(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),r=t/i;let s;return r<1.5?s=1:r<3?s=2:r<7?s=5:s=10,s*i}function Wf(n,e){var v,_,x,p,d;const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=ea[e.theme]??ea.none,o=e.colors?{...s,...e.colors}:s,a=!!e.compact;if(t.clearRect(0,0,i,r),t.fillStyle=o.bg,t.fillRect(0,0,i,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const l=ty(e.candles.length,i,e.slotW,e.scrollX,a),c=ny(e.candles,l.firstIdx,l.count),u=iy(r,e.showVolume?e.volumeFraction:0,a),f=Math.max(QS,Math.floor(e.slotW*.7)),h=Math.min(e.candles.length,l.firstIdx+l.count);for(let A=l.firstIdx;A<h;A++){const b=e.candles[A];if(!b)continue;const E=Wi(A,l.firstIdx,e.slotW),C=$n(b.open,c,u.priceY0,u.priceY1),P=$n(b.close,c,u.priceY0,u.priceY1),R=$n(b.high,c,u.priceY0,u.priceY1),U=$n(b.low,c,u.priceY0,u.priceY1),M=b.close>=b.open,S=M?o.wickBull:o.wickBear,D=M?o.candleBull:o.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=D),t.strokeStyle=S,t.lineWidth=ey,t.beginPath(),t.moveTo(Math.round(E)+.5,R),t.lineTo(Math.round(E)+.5,U),t.stroke(),t.fillStyle=D;const I=Math.min(C,P),k=Math.max(1,Math.abs(P-C)),X=Math.round(E-f/2),K=Math.round(I),W=Math.round(k);if(t.fillRect(X,K,f,W),e.glow&&(t.shadowBlur=4,t.fillRect(X,K,f,W)),t.shadowBlur=0,e.showVolume&&c.maxVol>0){const $=Math.round(b.volume/c.maxVol*(u.volumeY1-u.volumeY0));$>0&&(t.fillStyle=M?o.volumeBull:o.volumeBear,t.fillRect(Math.round(E-f/2),u.volumeY1-$,f,$))}}if((v=e.overlays)!=null&&v.length)for(const A of e.overlays)sy(t,A,l,c,u,e.slotW);(_=e.markers)!=null&&_.length&&hy(t,o,e.markers,e.candles,l,c,u,e.slotW),py(t,o,c,u,i,a),a||(my(t,o,e.candles,l,e.slotW,r),fy(t,o,e.candles,i,r)),(x=e.overlays)!=null&&x.length&&ay(t,o,e.overlays,u),e.hover&&(gy(t,o,e.candles,l,c,u,e.slotW,e.hover,i),ly(t,o,e.candles,l,e.slotW,e.hover,u,((p=e.overlays)==null?void 0:p.length)??0),(d=e.markers)!=null&&d.length&&uy(t,o,e.markers,e.candles,l,c,u,e.slotW,e.hover,i)),t.restore()}function sy(n,e,t,i,r,s){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(yi,r.priceY0,999999,r.priceY1-r.priceY0),n.clip(),e.kind==="line")Do(n,e.data,t.firstIdx,o,s,i,r,e.color,e.lineWidth??1,e.dashed===!0);else{const l=Xh(e.color,e.fillAlpha??.08);oy(n,e.upper,e.lower,t.firstIdx,o,s,i,r,l),Do(n,e.upper,t.firstIdx,o,s,i,r,e.color,1,!1),Do(n,e.lower,t.firstIdx,o,s,i,r,e.color,1,!1),(a=e.middle)!=null&&a.length&&Do(n,e.middle,t.firstIdx,o,s,i,r,e.color,1,e.middleDashed!==!1)}n.restore()}function Do(n,e,t,i,r,s,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const h=e[f];if(typeof h!="number"||!isFinite(h)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const v=Wi(f,t,r),_=$n(h,s,o.priceY0,o.priceY1);u?n.lineTo(v,_):(n.moveTo(v,_),u=!0)}u&&n.stroke(),n.setLineDash([])}function oy(n,e,t,i,r,s,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=r;f++){const h=e[f],v=t[f],_=f<r&&typeof h=="number"&&typeof v=="number"&&isFinite(h)&&isFinite(v);if(_&&!c&&(u=f,c=!0),!_&&c||f===r&&c){const x=_?f+1:f;n.beginPath();for(let p=u;p<x;p++){const d=Wi(p,i,s),A=$n(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(d,A):n.lineTo(d,A)}for(let p=x-1;p>=u;p--){const d=Wi(p,i,s),A=$n(t[p],o,a.priceY0,a.priceY1);n.lineTo(d,A)}n.closePath(),n.fill(),c=!1}}}function Xh(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),r=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${i},${r},${s},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function ay(n,e,t,i){const r=t.filter(x=>!!x.label);if(!r.length)return;n.save(),n.font=Gi;const s=8,o=5,a=12,l=6,c=14;let u=0;for(const x of r){const p=n.measureText(x.label).width;p>u&&(u=p)}const f=s*2+a+l+u,h=o*2+c*r.length,v=yi+4,_=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(v,_,f,h),n.textBaseline="middle",n.textAlign="left";for(let x=0;x<r.length;x++){const p=r[x],d=_+o+c*(x+.5),A=v+s;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(A,d),n.lineTo(A+a,d),n.stroke(),n.setLineDash([])):(n.fillStyle=Xh(p.color,p.fillAlpha??.2),n.fillRect(A,d-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(A+.5,d-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,A+a+l,d)}n.restore()}function ly(n,e,t,i,r,s,o,a){const l=Math.floor((s.x-yi)/r),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,h=u.open!==0?f/u.open*100:0,v=f>=0?"+":"",_=[["O",gr(u.open),void 0],["H",gr(u.high),void 0],["L",gr(u.low),void 0],["C",gr(u.close),void 0],["V",cy(u.volume),void 0],["",`${v}${h.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=Gi,n.textBaseline="middle",n.textAlign="left";const x=8,p=4,d=14;let A=x;for(const[P,R]of _){const U=P?`${P} ${R}`:R,M=n.measureText(U).width+12;A+=M}A+=x-12;const b=o.priceY0+4+(a>0?p*2+14*a+4:0),E=yi+4;n.fillStyle=e.panelBg,n.fillRect(E,b,A,d+p*2);let C=E+x;for(let P=0;P<_.length;P++){const[R,U,M]=_[P];n.fillStyle=e.text,R&&(n.globalAlpha=.6,n.fillText(R+" ",C,b+p+d/2),n.globalAlpha=1,C+=n.measureText(R+" ").width),M&&(n.fillStyle=M),n.fillText(U,C,b+p+d/2),C+=n.measureText(U).width+12}n.restore()}function cy(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function uy(n,e,t,i,r,s,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),h=Math.min(i.length,r.firstIdx+r.count),v=9;let _=null;for(const U of t){let M=0,S=i.length-1,D=-1;for(;M<=S;){const X=M+S>>1,K=i[X].start-U.timestamp;if(Math.abs(K)<=f){D=X;break}K<0?M=X+1:S=X-1}if(D<0||D<r.firstIdx||D>=h)continue;const I=Wi(D,r.firstIdx,a),k=$n(U.price,s,o.priceY0,o.priceY1);if(Math.abs(l.x-I)<=v&&Math.abs(l.y-k)<=v){_={m:U,x:I,y:k};break}}if(!_)return;const x=Zc(_.m.timestamp),p=[`${_.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${x}`,`@ ${gr(_.m.price)}`];_.m.label&&p.push(_.m.label),n.save(),n.font=Gi,n.textBaseline="top",n.textAlign="left";const d=6,A=14;let b=0;for(const U of p){const M=n.measureText(U).width;M>b&&(b=M)}const E=b+d*2,C=p.length*A+d*2;let P=_.x+12;P+E>c-Sr&&(P=_.x-12-E);let R=_.y-C/2;R<o.priceY0&&(R=o.priceY0),R+C>o.priceY1&&(R=o.priceY1-C),n.fillStyle=e.panelBgSolid,n.strokeStyle=_.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(P,R,E,C),n.strokeRect(P+.5,R+.5,E-1,C-1);for(let U=0;U<p.length;U++){const M=p[U];n.fillStyle=U===0?_.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(M,P+d,R+d+U*A)}n.restore()}function fy(n,e,t,i,r){if(t.length<2)return;const s=t[1].start-t[0].start,o=dy(s);if(!o)return;n.save(),n.font=Gi,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-Sr-a,f=r-jc+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function dy(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,r=24*i,s=7*r;return n>=s&&n%s===0?n/s+"W":n>=r&&n%r===0?n/r+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function hy(n,e,t,i,r,s,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,r.firstIdx+r.count),f=v=>{let _=0,x=i.length-1;for(;_<=x;){const p=_+x>>1,d=i[p].start-v;if(Math.abs(d)<=c)return p;d<0?_=p+1:x=p-1}return-1},h=7;for(const v of t){const _=f(v.timestamp);if(_<0||_<r.firstIdx||_>=u)continue;const x=Wi(_,r.firstIdx,a),p=$n(v.price,s,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const d=v.color??(v.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=d,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),v.kind==="entry"?(n.moveTo(x,p-h),n.lineTo(x-h,p+h-1),n.lineTo(x+h,p+h-1)):(n.moveTo(x,p+h),n.lineTo(x-h,p-h+1),n.lineTo(x+h,p-h+1)),n.closePath(),n.fill(),n.stroke()}}function py(n,e,t,i,r,s=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=s?Math.max(2,Math.min(4,Math.round(a/36))):6,c=ry(o,l),u=Math.ceil(t.min/c)*c,f=s?Wh:Sr;n.font=s?JS:Gi,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let h=u;h<=t.max;h+=c){const v=$n(h,t,i.priceY0,i.priceY1);v<i.priceY0||v>i.priceY1||(n.beginPath(),n.moveTo(yi,Math.round(v)+.5),n.lineTo(r-f,Math.round(v)+.5),n.stroke(),n.fillText(gr(h),r-f+3,v))}n.globalAlpha=1}function my(n,e,t,i,r,s){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=Gi,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=Wi(c,i.firstIdx,r);n.fillText(Zc(u.start),f,s-jc+4)}n.globalAlpha=1}function gy(n,e,t,i,r,s,o,a,l){const c=Math.floor((a.x-yi)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const h=Wi(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(h)+.5,s.priceY0),n.lineTo(Math.round(h)+.5,s.volumeY1||s.priceY1),n.stroke();const v=Math.max(s.priceY0,Math.min(s.priceY1,a.y));n.beginPath(),n.moveTo(yi,Math.round(v)+.5),n.lineTo(l-Sr,Math.round(v)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const _=r.max-r.min;if(_>0){const d=r.max-(v-s.priceY0)/(s.priceY1-s.priceY0)*_,A=gr(d);n.font=Gi,n.textBaseline="middle",n.textAlign="left";const b=n.measureText(A).width,E=4,C=2;n.fillStyle=e.accent,n.fillRect(l-Sr+2,v-7-C,b+E*2,14+C*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(A,l-Sr+2+E,v)}n.font=Gi,n.textBaseline="top",n.textAlign="center";const x=Zc(f.start),p=n.measureText(x).width;n.fillStyle=e.accent,n.fillRect(h-p/2-4,s.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(x,h,s.volumeY1+4),n.restore()}const hl=.25,pl=6,vy=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,_y=Yi({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:jS},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=Ie(null),i=Ie(null),r={...Qt},s=Ie(0),o=Ie(0),a=Ie(0),l=Ie(1),c=Ie(null),u=it(()=>Math.max(1,e.slotW*l.value));let f=null,h=!1,v,_,x,p,d;const A=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;
  ${Gc}

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    vec2  cc   = uv - 0.5;
    float dist = dot(cc, cc) * uStrength;
    vec2  d    = cc * (1.0 + dist) * dist;
    return uv + d;
  }

  ${Wc}

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

    ${Xc}

    gl_FragColor = color;
  }
`;function b(){if(!(!i.value||!t.value)){if(d=document.createElement("canvas"),e.flat){h=!0,E();return}try{f=new xa({canvas:i.value,antialias:!1,alpha:!0})}catch{h=!0}if(!h&&!f.getContext()&&(f.dispose(),f=null,h=!0),h){E();return}f.setPixelRatio(1),f.setClearColor(0,0),v=new Ma,_=new io(-1,1,1,-1,0,1),p=new br(d),p.minFilter=Et,p.magFilter=Et,x=new bn({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...Yc()},vertexShader:vy,fragmentShader:A,transparent:!0}),v.add(new pn(new $i(2,2),x)),E()}}function E(){if(!t.value||!f&&!h)return;const de=t.value.clientWidth,ve=t.value.clientHeight;!de||!ve||!(d.width!==de||d.height!==ve)||(d.width=de,d.height=ve,s.value=de,o.value=ve,f?(p&&(p.dispose(),p=new br(d),p.minFilter=Et,p.magFilter=Et,x&&(x.uniforms.uTex.value=p)),f.setPixelRatio(window.devicePixelRatio||1),f.setSize(de,ve)):i.value&&(i.value.width=de,i.value.height=ve,i.value.style.width=de+"px",i.value.style.height=ve+"px"),C())}function C(){if(!(d!=null&&d.width))return;if(h){if(!i.value)return;Wf(d,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:!1,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors});const ve=i.value.getContext("2d");ve&&(ve.clearRect(0,0,i.value.width,i.value.height),ve.drawImage(d,0,0));return}if(!f||!x||!p)return;const de=e.theme==="paper";x.uniforms.uStrength.value=e.curvature/45*.55,x.uniforms.uScanlines.value=e.scanlines&&!de?1:0,x.uniforms.uVignette.value=de?0:1,$c(x,e.magnify,r,d.width,d.height),Wf(d,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors}),p.needsUpdate=!0,f.render(v,_)}Ye(()=>e.theme,()=>C()),Ye(()=>e.curvature,()=>C()),Ye(()=>e.scanlines,()=>C()),Ye(()=>e.glow,()=>C()),Ye(()=>e.showVolume,()=>C()),Ye(()=>e.volumeFraction,()=>C()),Ye(()=>e.slotW,()=>C()),Ye(()=>e.candles,()=>C(),{deep:!1}),Ye(()=>e.overlays,()=>C(),{deep:!1}),Ye(()=>e.markers,()=>C(),{deep:!1}),Ye(()=>e.compact,()=>C()),Ye(()=>e.magnify,de=>{de||(r.x=Qt.x,r.y=Qt.y),C()}),Ye(()=>e.colors,()=>C(),{deep:!0}),Ye(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")}),Ye(a,()=>C()),Ye(l,()=>C()),Ye(c,()=>C()),Ye(u,()=>C());let P=null,R=null,U=0;const M=Bi("cathodeResetTick",Ie(0));Ye(M,()=>S());function S(){cancelAnimationFrame(U),U=requestAnimationFrame(E)}function D(de){de.preventDefault()}function I(){f==null||f.dispose(),f=null,h=!1,b()}function k(de){if(!i.value)return[-1,-1];const ve=i.value.getBoundingClientRect();return[de.clientX-ve.left,de.clientY-ve.top]}function X(de){var F;const ve=u.value;if(ve<=0)return 0;const Re=((F=e.candles)==null?void 0:F.length)??0,Qe=Math.max(1,Math.floor((s.value||1)/ve)),L=Math.max(0,Re-Qe);return Math.max(0,Math.min(de,L*ve))}function K(de){var Qe;if(de.deltaX!==0||de.shiftKey&&de.deltaY!==0){const L=de.deltaX!==0?de.deltaX:de.deltaY;a.value=X(a.value+L);return}if(de.deltaY===0)return;const[ve]=k(de),Re=u.value;if(ve>=0&&Re>0&&((Qe=e.candles)!=null&&Qe.length)){const L=Math.max(1,Math.floor((s.value||1)/Re)),w=Math.max(0,e.candles.length-L-Math.floor(a.value/Re))+(ve-8)/Re,he=Math.exp(-de.deltaY*.0015),te=Math.max(hl,Math.min(pl,l.value*he));l.value=te;const ne=e.slotW*te,oe=Math.max(1,Math.floor((s.value||1)/ne)),re=w-(ve-8)/ne,ie=Math.max(0,e.candles.length-oe-re);a.value=X(ie*ne)}else{const L=Math.exp(-de.deltaY*.0015);l.value=Math.max(hl,Math.min(pl,l.value*L))}}let W=!1,$=0,B=0;function ce(de){de.button===0&&(W=!0,$=de.clientX,B=a.value,c.value=null,t.value&&t.value.focus())}function Z(de){const ve=Math.exp(de*.18);l.value=Math.max(hl,Math.min(pl,l.value*ve)),a.value=X(a.value)}function me(de){const ve=u.value,Re=de.shiftKey?20:3;switch(de.key){case"ArrowLeft":de.preventDefault(),a.value=X(a.value+ve*Re);break;case"ArrowRight":de.preventDefault(),a.value=X(a.value-ve*Re);break;case"ArrowUp":de.preventDefault(),Z(1);break;case"ArrowDown":de.preventDefault(),Z(-1);break;case"Home":de.preventDefault(),a.value=X(Number.MAX_SAFE_INTEGER);break;case"End":de.preventDefault(),a.value=0;break}}function we(de){if(W){const ve=de.clientX-$;a.value=X(B+ve);return}}function Xe(){W=!1}function se(de){if(e.magnify&&i.value){const Qe=qc(de,i.value);r.x=Qe.x,r.y=Qe.y,C()}if(W)return;const[ve,Re]=k(de);if(ve<0||Re<0){c.value=null;return}c.value={x:ve,y:Re}}function ge(){c.value=null,r.x=Qt.x,r.y=Qt.y,C()}Bn(()=>{document.addEventListener("mousemove",we),document.addEventListener("mouseup",Xe),En(()=>{var de;b(),i.value&&(i.value.addEventListener("webglcontextlost",D),i.value.addEventListener("webglcontextrestored",I)),t.value&&(P=new ResizeObserver(()=>E()),P.observe(t.value),R=new IntersectionObserver(ve=>{ve.some(Re=>Re.isIntersecting)&&S()}),R.observe(t.value)),window.addEventListener("resize",S),(de=window.visualViewport)==null||de.addEventListener("resize",S)})}),jn(()=>{var de,ve,Re;document.removeEventListener("mousemove",we),document.removeEventListener("mouseup",Xe),(de=i.value)==null||de.removeEventListener("webglcontextlost",D),(ve=i.value)==null||ve.removeEventListener("webglcontextrestored",I),P==null||P.disconnect(),R==null||R.disconnect(),window.removeEventListener("resize",S),(Re=window.visualViewport)==null||Re.removeEventListener("resize",S),cancelAnimationFrame(U),f==null||f.dispose()});const Se=it(()=>ea[e.theme]??ea.none),_e=it(()=>({background:Se.value.bg}));return(de,ve)=>(Ze(),yt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:on(_e.value),tabindex:"0",onKeydown:me},[ke("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:Oi(K,["prevent"]),onMousedown:ce,onMousemove:se,onMouseleave:ge},null,544)],36))}}),Xf=qi(_y,[["__scopeId","data-v-1752ef06"]]),xy=["disabled"],My=Yi({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100},magnify:{type:Boolean,default:!1}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=Ie(null),o=Ie(null),a=Ie(""),l=Ie([]),c=Ie(-1);let u="";function f(C){C.trim()&&(l.value.length&&l.value[l.value.length-1]===C||(l.value.push(C),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function h(C){if(!i.disabled){if(C.key==="Enter"){C.preventDefault();const P=a.value;P.trim()&&f(P),c.value=-1,a.value="",r("submit",P);return}if(C.key==="ArrowUp"){if(!l.value.length)return;C.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(C.key==="ArrowDown"){if(c.value===-1)return;C.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const v=Ie(!0);let _=null;function x(){_||(_=setInterval(()=>{v.value=!v.value},530))}function p(){_&&(clearInterval(_),_=null),v.value=!0}const d=it(()=>{let C;return i.disabled?C=" ":i.busy?C="█":C=v.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${C}`}}),A=it(()=>[...i.entries,d.value]);function b(){var C;i.disabled||(C=o.value)==null||C.focus()}Ye(()=>i.busy,(C,P)=>{P&&!C&&!i.disabled&&En(()=>{var R;return(R=o.value)==null?void 0:R.focus()})});function E(){var C;(C=o.value)==null||C.focus()}return e({focus:E}),Bn(()=>{x(),i.disabled||requestAnimationFrame(()=>{var C;return(C=o.value)==null?void 0:C.focus()})}),jn(()=>{p()}),(C,P)=>(Ze(),yt("div",{ref_key:"wrapEl",ref:s,class:"cathode-terminal-wrap",onClick:b},[Tt(gc,{entries:A.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,magnify:n.magnify,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","magnify","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Ht(ke("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":P[0]||(P[0]=R=>a.value=R),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:h},null,40,xy),[[lh,a.value]])],512))}}),Yf=qi(My,[["__scopeId","data-v-a2b39934"]]),Jc=Ie(0),vc=28;let _c=10,ta="cathode.layout",na=!1;const Bt=Ie({});function Sy(n,e="cathode.layout"){if(!na){na=!0,ta=e;try{const t=localStorage.getItem(ta);if(t){Bt.value=JSON.parse(t),$f();return}}catch{}Bt.value={...n},$f()}}function $f(){let n=10;for(const e of Object.values(Bt.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);_c=n}function wr(){localStorage.setItem(ta,JSON.stringify(Bt.value))}function yy(n){na=!1,localStorage.removeItem(ta),Bt.value={...n},wr(),na=!0,Jc.value++}function Yh(n){_c++,Bt.value[n]&&(Bt.value[n].zIndex=_c)}function Ey(n,e){Bt.value[n].visible=e,wr()}function by(n,e){Bt.value[n].minimized=e,e&&(Bt.value[n].maximized=!1),wr()}function Ty(n,e){Bt.value[n].maximized=e,e&&(Bt.value[n].minimized=!1,Yh(n)),wr()}function wy(n,e,t){Bt.value[n].x=Math.round(e),Bt.value[n].y=Math.round(t),wr()}function Ay(n,e,t){Bt.value[n].w=Math.round(e),Bt.value[n].h=Math.round(t),wr()}function $h(){return{containers:Bt,TITLEBAR_H:vc,load:Sy,save:wr,reset:yy,bringToFront:Yh,setVisible:Ey,setMinimized:by,setMaximized:Ty,updatePos:wy,updateSize:Ay}}const Cy={class:"ws-toolbar"},Ry={key:0,class:"ws-restore-menu"},Py={key:0,class:"ws-restore-empty"},Ly=["onClick"],Dy=Yi({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:r,setVisible:s}=$h(),o=Ie(null);Ml("cathodeWorkspace",o),Ml("cathodeResetTick",Jc),Bn(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:d}=o.value,A=e.initialLayout??{};i(A,e.storageKey??"cathode.layout");const b=Object.keys(t.value)[0];b&&a(b)});function a(p){var A;document.querySelectorAll(".cc").forEach(b=>b.classList.remove("cc-focused"));const d=(A=o.value)==null?void 0:A.querySelector(`#cc-${p}`);d&&d.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||r(e.initialLayout)}function c(p){const d=p.target.closest(".cc");d&&(document.querySelectorAll(".cc").forEach(A=>A.classList.remove("cc-focused")),d.classList.add("cc-focused"))}const u=Ie(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function h(p){s(p,!0),u.value=!1}function v(p){if(!u.value)return;const d=p.target;!d.closest(".ws-restore-menu")&&!d.closest(".ws-btn-restore")&&(u.value=!1)}function _(p){p.key==="Escape"&&(u.value=!1)}Bn(()=>{document.addEventListener("click",v),document.addEventListener("keydown",_)}),jn(()=>{document.removeEventListener("click",v),document.removeEventListener("keydown",_)});function x(p){var d;return((d=e.containerTitles)==null?void 0:d[p])??p}return(p,d)=>(Ze(),yt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[yl(p.$slots,"default",{},void 0),yl(p.$slots,"overlay",{},void 0),ke("div",Cy,[n.initialLayout?(Ze(),yt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):Zt("",!0),d[1]||(d[1]=ke("div",{class:"ws-sep"},null,-1)),ke("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:d[0]||(d[0]=A=>u.value=!u.value)}," ⊞ Restore Panel ")]),Tt(qm,{name:"menu"},{default:ur(()=>[u.value?(Ze(),yt("div",Ry,[d[3]||(d[3]=ke("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?Zt("",!0):(Ze(),yt("div",Py," No closed panels ")),(Ze(!0),yt(jt,null,nm(f(),A=>(Ze(),yt("div",{key:A,class:"ws-restore-item",onClick:b=>h(A)},[d[2]||(d[2]=ke("span",{class:"ws-restore-icon"},"⊞",-1)),ai(" "+Sn(x(A)),1)],8,Ly))),128))])):Zt("",!0)]),_:1})],544))}}),Iy=qi(Dy,[["__scopeId","data-v-5838d04b"]]),Uy=["id"],Ny={class:"cc-title"},Fy={key:0,class:"cc-size-badge"},Oy={class:"cc-controls"},By=["title"],ky={class:"cc-body"},zy=200,Hy=80,qf=60,Vy=Yi({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:r,setMinimized:s,setMaximized:o,updatePos:a,updateSize:l}=$h(),c=Bi("cathodeWorkspace",Ie(null)),u=it(()=>t.value[e.id]),f=it(()=>{const Z=u.value,me=e.curvature??0;if(!Z)return{};const we={"--curvature":me};return Z.maximized?{...we,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:Z.zIndex}:{...we,left:Z.x+"px",top:Z.y+"px",width:Z.w+"px",height:Z.minimized?vc+"px":Z.h+"px",zIndex:Z.zIndex,display:Z.visible?"flex":"none"}});let h=!1,v=0,_=0;function x(Z){var Xe;if(Z.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),h=!0;const me=(Xe=c.value)==null?void 0:Xe.querySelector(`#cc-${e.id}`);if(!me)return;const we=me.getBoundingClientRect();v=Z.clientX-we.left,_=Z.clientY-we.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),Z.preventDefault()}function p(Z){var ge;if(!h||!c.value)return;const me=c.value.getBoundingClientRect(),we=((ge=u.value)==null?void 0:ge.w)??300;let Xe=Z.clientX-me.left-v,se=Z.clientY-me.top-_;Xe=Math.max(qf-we,Math.min(me.width-qf,Xe)),se=Math.max(0,Math.min(me.height-vc,se)),a(e.id,Xe,se)}function d(){h=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d)}let A=!1,b=0,E=0,C=0,P=0;const R=Ie("");function U(Z){u.value.maximized||(i(e.id),A=!0,b=Z.clientX,E=Z.clientY,C=u.value.w,P=u.value.h,document.addEventListener("mousemove",M),document.addEventListener("mouseup",S),Z.preventDefault(),Z.stopPropagation())}function M(Z){if(!A)return;const me=Math.max(zy,C+(Z.clientX-b)),we=Math.max(Hy,P+(Z.clientY-E));l(e.id,me,we),R.value=`${Math.round(me)}×${Math.round(we)}`}function S(){A=!1,R.value="",document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",S),D.value++}const D=Ie(0);Ye(Jc,()=>{D.value++}),jn(()=>{var Z;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",S),(Z=I.value)==null||Z.removeEventListener("scroll",X),K()});const I=Ie(null);function k(Z){if(e.canvas)return[];const me=Z.children[0];return me?Array.from(me.children):[]}function X(){const Z=I.value,me=e.curvature??0;if(!Z)return;const we=k(Z);if(!we.length)return;const Xe=Z.clientHeight,se=Xe/2,ge=me*.0038;we.forEach(Se=>{if(!Se.dataset.origFs){const he=getComputedStyle(Se);Se.dataset.origFs=he.fontSize,Se.dataset.origLh=he.lineHeight}if(me===0){Se.style.fontSize="",Se.style.lineHeight="";return}const _e=Se.getBoundingClientRect(),de=Z.getBoundingClientRect(),ve=_e.top-de.top+_e.height/2,Re=Math.min(1,Math.abs(ve-se)/(Xe/2)),Qe=1+ge*Math.cos(Re*Math.PI/2),L=parseFloat(Se.dataset.origFs),F=Se.dataset.origLh,w=F==="normal"?L*1.4:parseFloat(F);isNaN(L)||(Se.style.fontSize=`${(L*Qe).toFixed(2)}px`),isNaN(w)||(Se.style.lineHeight=`${(w*Qe).toFixed(2)}px`)})}function K(){const Z=I.value;Z&&k(Z).forEach(me=>{me.style.fontSize="",me.style.lineHeight="",delete me.dataset.origFs,delete me.dataset.origLh})}Ye(()=>e.curvature,Z=>{(Z??0)===0?K():X()}),Bn(()=>{var Z;(Z=I.value)==null||Z.addEventListener("scroll",X,{passive:!0}),En(X)});function W(){s(e.id,!u.value.minimized),En(()=>{D.value++})}function $(){o(e.id,!u.value.maximized),En(()=>{D.value++})}function B(){r(e.id,!1)}function ce(){i(e.id)}return(Z,me)=>u.value&&u.value.visible?(Ze(),yt("div",{key:0,id:`cc-${n.id}`,class:dn(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:on(f.value),onMousedown:ce},[ke("div",{class:"cc-titlebar",onMousedown:x},[me[0]||(me[0]=ke("span",{class:"cc-status-dot"},null,-1)),ke("span",Ny,Sn(n.title),1),R.value?(Ze(),yt("span",Fy,Sn(R.value),1)):Zt("",!0),ke("div",Oy,[ke("button",{class:"cc-btn",title:"Minimize",onClick:Oi(W,["stop"])},"─"),ke("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:Oi($,["stop"])},Sn(u.value.maximized?"⤡":"⤢"),9,By),ke("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:Oi(B,["stop"])},"✕")])],32),Ht(ke("div",ky,[ke("div",{ref_key:"bodyEl",ref:I,class:"cc-screen",onScroll:X},[yl(Z.$slots,"default",{resizeKey:D.value},void 0),me[1]||(me[1]=ke("div",{class:"cc-shine"},null,-1))],544)],512),[[Wr,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(Ze(),yt("div",{key:0,class:"cc-resize",onMousedown:Oi(U,["stop"])},null,32)):Zt("",!0)],46,Uy)):Zt("",!0)}}),Io=qi(Vy,[["__scopeId","data-v-d8a49f79"]]),Gy=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Wy=`
  uniform sampler2D uTex;
  uniform float     uStrength;
  uniform float     uScanlines;
  uniform float     uVignette;

  varying vec2 vUv;

  vec2 barrel(vec2 uv) {
    vec2  cc   = uv - 0.5;
    float dist = dot(cc, cc) * uStrength;
    vec2  d    = cc * (1.0 + dist) * dist;
    return uv + d;
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
`,Xy=100,Yy=Yi({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=Ie(null),r=Ie(null);let s=null,o=!1,a,l,c,u,f,h=null,v=0;function _(C){C-v>=Xy&&(d(),v=C),h=requestAnimationFrame(_)}function x(){if(!i.value||!f)return;const C=i.value.clientWidth,P=i.value.clientHeight;C<=0||P<=0||f.width===C&&f.height===P||(f.width=C,f.height=P,s&&s.setSize(C,P,!1),r.value&&(r.value.width=C,r.value.height=P,r.value.style.width=C+"px",r.value.style.height=P+"px"))}function p(){if(!(f!=null&&f.width))return;const C=f.getContext("2d");if(!C)return;const P=f.width,R=f.height,U=t[e.theme]??t.none;C.clearRect(0,0,P,R),C.fillStyle=U.bg,C.fillRect(0,0,P,R);const M=Date.now(),S=(M/500|0)%2===0,D=(M/400|0)%4;C.font=`bold ${Math.max(14,Math.min(P,R)*.06)}px monospace`,C.textAlign="center",C.textBaseline="middle",C.fillStyle=U.text,e.glow&&(C.shadowColor=U.text,C.shadowBlur=14);const I=".".repeat(D).padEnd(3," "),k=`${e.label}${I}`;if(C.fillText(k,P/2,R/2),C.shadowBlur=0,S){const X=C.measureText(k),K=C.measureText("M").width,W=parseFloat(C.font),$=P/2+X.width/2+4,B=R/2-W/2+2;C.fillStyle=U.cursor,e.glow&&(C.shadowColor=U.cursor,C.shadowBlur=12),C.fillRect($,B,K*.7,W*.95),C.shadowBlur=0}}function d(){if(!f)return;if(p(),o){if(!r.value)return;const P=r.value.getContext("2d");P&&P.drawImage(f,0,0);return}if(!s||!c||!u)return;const C=e.theme==="paper";c.uniforms.uStrength.value=e.curvature/45*.55,c.uniforms.uScanlines.value=e.scanlines&&!C?1:0,c.uniforms.uVignette.value=C?0:1,u.needsUpdate=!0,s.render(a,l)}function A(){if(!(!r.value||!i.value)){f=document.createElement("canvas");try{s=new xa({canvas:r.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!s.getContext()&&(s.dispose(),s=null,o=!0),o){x();return}s.setPixelRatio(1),s.setClearColor(0,0),a=new Ma,l=new io(-1,1,1,-1,0,1),u=new br(f),u.minFilter=Et,u.magFilter=Et,c=new bn({uniforms:{uTex:{value:u},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:Gy,fragmentShader:Wy,transparent:!0}),a.add(new pn(new $i(2,2),c)),x()}}let b=null;Bn(()=>{A(),d(),h=requestAnimationFrame(_),i.value&&(b=new ResizeObserver(()=>x()),b.observe(i.value))}),jn(()=>{h!==null&&cancelAnimationFrame(h),b==null||b.disconnect(),s&&s.dispose(),u==null||u.dispose(),c==null||c.dispose()}),Ye(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>d());const E=it(()=>({background:(t[e.theme]??t.none).bg}));return(C,P)=>(Ze(),yt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:on(E.value)},[ke("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-loader-canvas"},null,512)],4))}}),Ii=qi(Yy,[["__scopeId","data-v-2be1f107"]]),$y={class:"demo-bar"},qy={class:"demo-tabs"},Ky={key:0},jy={key:1},Zy={key:2},Jy={class:"demo-btns"},Qy=["value"],eE={class:"tab-content"},tE={class:"tab-content"},nE={class:"tab-content"},iE={class:"tab-content"},rE=720,sE=Yi({__name:"App",setup(n){const e=Ie("workspace"),t=Ie("none"),i=it(()=>t.value!=="paper"),r=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],s=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(g,m){return+(Math.random()*(m-g)+g).toFixed(4)}function l(g){return g[Math.floor(Math.random()*g.length)]}function c(g){return g.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],h=["NY","London","Tokyo","AH"],v=Array.from({length:240},(g,m)=>{const T=m%s.length,O=s[T],H=o[T],V=l(r),ae=u-Math.floor(Math.random()*30*24*36e5),N=Math.random()<.15,J=a(10,3e3),xe=a(-8,22),ue=+(xe-.12).toFixed(4),Ee=+(J*a(.2,2)).toFixed(2),De=N?null:ae+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(ae)),entry_timestamp:c(new Date(ae)),exit_timestamp:De?c(new Date(De)):"",product:O,strategy:V,exchange:H,status:N?"open":"closed",entry_price:J.toFixed(4),exit_price:N?"":a(J*.92,J*1.25).toFixed(4),pnl_pct:xe.toFixed(4),net_pnl_pct:ue.toFixed(4),size_base:a(.001,2).toFixed(6),notional:Ee.toFixed(2),reason:N?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(h)}}),_=g=>m=>m.value!==""&&m.value!=null&&!isNaN(Number(m.value))?Number(m.value).toFixed(g):"",x=g=>g.value!==""&&g.value!=null&&!isNaN(Number(g.value))?Number(g.value).toFixed(2)+"%":"—",p={textAlign:"right"};function d(g){var ae,N;const m=(ae=g.data)==null?void 0:ae.entry_timestamp,T=(N=g.data)==null?void 0:N.exit_timestamp;if(!m||!T)return"—";const O=new Date(T).getTime()-new Date(m).getTime();if(O<0)return"—";const H=Math.floor(O/36e5),V=Math.floor(O%36e5/6e4);return H>0?`${H}h ${V}m`:`${V}m`}const A=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:g=>g.data.entry_timestamp||g.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:g=>g.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:d,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:g=>g.data.status??"closed",cellStyle:g=>({color:g.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:g=>`${g} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:_(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:_(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:_(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:_(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:g=>Number(g).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:x,cellStyle:g=>({...p,color:Number(g.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:g=>`${Number(g).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:x,cellStyle:g=>({...p,color:Number(g.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:g=>`${Number(g).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:x,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:_(1),cellStyle:g=>({...p,color:Number(g.value)>65?"#e74c3c":Number(g.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:g=>Number(g).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:g=>(Number(g.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:g=>Number(g).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:g=>`${Number(g).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:g=>`${Number(g).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:g=>`${Number(g).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:g=>Number(g).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],b={resizable:!0,sortable:!0},E=Ie(null),C=Ie(25),P=Ie(!0),R=Ie(!1),U=Ie(!1),M=Ie(typeof window<"u"?window.innerWidth:1200),S=it(()=>M.value<rE);function D(){M.value=window.innerWidth}Bn(()=>window.addEventListener("resize",D)),jn(()=>window.removeEventListener("resize",D)),Ye(S,g=>{g&&e.value==="workspace"&&(e.value="grid")},{immediate:!0});const I=Ie(!1),k=Ie(""),X=Ie("all"),K=Ie(0),W=Ie(!0),$=Ie(!1),B=Ie(!1);Ye(e,g=>{g==="grid"&&K.value++});function ce(g){E.value=g.api,g.api.setGridOption("rowData",v),X.value!=="all"&&me(X.value)}function Z(g){var T;const m=g.target.value;k.value=m,(T=E.value)==null||T.setGridOption("quickFilterText",m)}function me(g){var m,T,O;X.value=g,g==="all"?(m=E.value)==null||m.setFilterModel(null):(T=E.value)==null||T.setFilterModel({status:{type:"equals",filter:g}}),(O=E.value)==null||O.onFilterChanged()}const we={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function Xe(g,m){const O=Math.round(g*.62)-12,H=O+12*2,V=g-H-12,ae=Math.round(m*.62),N=ae+12*2,J=m-N-12;return{trades:{x:12,y:12,w:O,h:ae,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:H,y:12,w:V,h:ae,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:N,w:O,h:J,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:H,y:N,w:V,h:J,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const se=Xe(window.innerWidth,window.innerHeight-88),ge=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const g=[],m=Date.now()-45e5;for(let T=0;T<140;T++){const O=ge[T%ge.length];g.push({ts:m+T*32e3,text:O.text,level:O.level})}return g})();const Se=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],_e=Ie([]),de=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],ve=Ie([{level:"info",text:"CathodeTerminal demo"},...de]),Re=Ie(!1),Qe={help:()=>de,echo:g=>({level:"info",text:g||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:g=>{const m=g.trim();return m?m==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:m==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${m}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:g=>{const m=g.trim()||"localhost",T=[{level:"info",text:`PING ${m}: 56 data bytes`}];for(let O=0;O<4;O++){const H=(12+Math.random()*18).toFixed(1);T.push({level:"success",text:`64 bytes from ${m}: icmp_seq=${O} ttl=64 time=${H} ms`})}return T},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:g=>{const m=g.trim()||"moo",T="─".repeat(Math.max(2,m.length+2));return[{level:"info",text:` ╭${T}╮`},{level:"info",text:` │ ${m} │`},{level:"info",text:` ╰${T}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const g=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:g[Math.floor(Math.random()*g.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function L(g){ve.value=[...ve.value,{level:"info",text:`→ ${g}`}];const m=g.trim();if(!m)return;if(m==="clear"){ve.value=[];return}const T=m.indexOf(" "),O=T===-1?m:m.slice(0,T),H=T===-1?"":m.slice(T+1),V=Qe[O];let ae;V?ae=V(H):ae={level:"warn",text:`unknown command: ${O} — type 'help' for the demo vocabulary`},Re.value=!0,setTimeout(()=>{if(ae!==null){const N=Array.isArray(ae)?ae:[ae];ve.value=[...ve.value,...N]}Re.value=!1},180)}function F(g){const m=[];let T=6e4;const O=Date.now()-g*36e5;for(let H=0;H<g;H++){const V=(Math.random()-.495)*T*.012,ae=T,N=Math.max(1,T+V),J=Math.max(ae,N)*(1+Math.random()*.005),xe=Math.min(ae,N)*(1-Math.random()*.005),ue=Math.round(20+Math.random()*80);m.push({start:O+H*36e5,open:ae,close:N,high:J,low:xe,volume:ue}),T=N}return m}const w=Ie(F(300));function he(g,m){const T=new Array(g.length).fill(NaN);let O=0;for(let H=0;H<g.length;H++)O+=g[H],H>=m&&(O-=g[H-m]),H+1>=m&&(T[H]=O/m);return T}function te(g,m){const T=new Array(g.length).fill(NaN);if(!g.length)return T;const O=2/(m+1);let H=g[0];T[0]=H;for(let V=1;V<g.length;V++)H=g[V]*O+H*(1-O),T[V]=H;for(let V=0;V<Math.min(m-1,g.length);V++)T[V]=NaN;return T}function ne(g,m=20,T=2){const O=he(g,m),H=new Array(g.length).fill(NaN),V=new Array(g.length).fill(NaN);for(let ae=m-1;ae<g.length;ae++){let N=0;for(let xe=ae-m+1;xe<=ae;xe++){const ue=g[xe]-O[ae];N+=ue*ue}const J=Math.sqrt(N/m);H[ae]=O[ae]+T*J,V[ae]=O[ae]-T*J}return{upper:H,middle:O,lower:V}}const oe=it(()=>{const g=w.value.map(T=>T.close),m=ne(g,20,2);return[{kind:"band",upper:m.upper,middle:m.middle,lower:m.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:te(g,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:te(g,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),re=it(()=>{const g=w.value;if(g.length<130)return[];const m=T=>g[T];return[{timestamp:m(g.length-120).start,price:m(g.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:m(g.length-100).start,price:m(g.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:m(g.length-80).start,price:m(g.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:m(g.length-60).start,price:m(g.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:m(g.length-40).start,price:m(g.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:m(g.length-20).start,price:m(g.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const g=w.value,m=re.value;if(!g.length||!m.length)return[];const T=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!T)return[];const O=T.width/(window.devicePixelRatio||1),H=T.height/(window.devicePixelRatio||1),V=8,ae=56,N=8,J=22,xe=8,ue=O-V-ae,Ee=Math.max(1,Math.floor(ue/xe)),De=Math.max(0,g.length-Ee);let Oe=1/0,be=-1/0;for(let Te=De;Te<g.length;Te++)g[Te].low<Oe&&(Oe=g[Te].low),g[Te].high>be&&(be=g[Te].high);const Ge=(be-Oe)*.04;Oe-=Ge,be+=Ge;const qe=N,rt=N+(H-N-J-4)*(1-.18),G=[];for(const Te of m){const fe=g[1].start-g[0].start;let pe=-1;for(let Ke=0;Ke<g.length;Ke++)if(Math.abs(g[Ke].start-Te.timestamp)<=fe*.5){pe=Ke;break}if(pe<De||pe>=g.length)continue;const Ue=V+(pe-De+.5)*xe,Pe=qe+(1-(Te.price-Oe)/(be-Oe))*(rt-qe);G.push({x:Ue,y:Pe,kind:Te.kind,label:Te.label||""})}return G}});function ie(){const g=[],m=Date.now()-54e5;for(let T=0;T<320;T++){const O=Se[T%Se.length];g.push({ts:m+T*16e3,text:O.text,level:O.level})}_e.value=g}return ie(),(g,m)=>(Ze(),yt("div",{class:dn(["demo-shell",{"cathode-light":!i.value,mobile:S.value}])},[ke("div",$y,[m[25]||(m[25]=ke("span",{class:"demo-title"},"⬛ CATHODE",-1)),ke("div",qy,[S.value?Zt("",!0):(Ze(),yt("button",{key:0,class:dn(["tab-btn",{active:e.value==="workspace"}]),onClick:m[0]||(m[0]=T=>e.value="workspace")}," Workspace ",2)),ke("button",{class:dn(["tab-btn",{active:e.value==="grid"}]),onClick:m[1]||(m[1]=T=>e.value="grid")}," Grid ",2),ke("button",{class:dn(["tab-btn",{active:e.value==="log"}]),onClick:m[2]||(m[2]=T=>e.value="log")}," Log ",2),ke("button",{class:dn(["tab-btn",{active:e.value==="candle"}]),onClick:m[3]||(m[3]=T=>e.value="candle")}," Candle ",2),ke("button",{class:dn(["tab-btn",{active:e.value==="terminal"}]),onClick:m[4]||(m[4]=T=>e.value="terminal")}," Terminal ",2)]),m[26]||(m[26]=ke("label",null,"Theme",-1)),Ht(ke("select",{"onUpdate:modelValue":m[5]||(m[5]=T=>t.value=T)},[...m[17]||(m[17]=[ke("option",{value:"none"},"Default (dark)",-1),ke("option",{value:"phosphor"},"Phosphor Green",-1),ke("option",{value:"amber"},"Amber",-1),ke("option",{value:"paper"},"Paper (light)",-1)])],512),[[mg,t.value]]),ke("label",null,"Curve "+Sn(C.value),1),Ht(ke("input",{type:"range",min:"0",max:"45",step:"1","onUpdate:modelValue":m[6]||(m[6]=T=>C.value=T),style:{width:"110px"}},null,512),[[lh,C.value,void 0,{number:!0}]]),ke("label",null,[Ht(ke("input",{type:"checkbox","onUpdate:modelValue":m[7]||(m[7]=T=>P.value=T)},null,512),[[er,P.value]]),m[18]||(m[18]=ai(" Scanlines",-1))]),ke("label",null,[Ht(ke("input",{type:"checkbox","onUpdate:modelValue":m[8]||(m[8]=T=>I.value=T)},null,512),[[er,I.value]]),m[19]||(m[19]=ai(" Glow",-1))]),ke("label",null,[Ht(ke("input",{type:"checkbox","onUpdate:modelValue":m[9]||(m[9]=T=>R.value=T),"data-testid":"cf-magnify"},null,512),[[er,R.value]]),m[20]||(m[20]=ai(" Magnify ",-1))]),ke("label",null,[Ht(ke("input",{type:"checkbox","onUpdate:modelValue":m[10]||(m[10]=T=>U.value=T),"data-testid":"cf-show-loaders"},null,512),[[er,U.value]]),m[21]||(m[21]=ai(" Show loaders ",-1))]),e.value==="candle"?(Ze(),yt("label",Ky,[Ht(ke("input",{type:"checkbox","onUpdate:modelValue":m[11]||(m[11]=T=>W.value=T),"data-testid":"cf-show-indicators"},null,512),[[er,W.value]]),m[22]||(m[22]=ai(" Indicators ",-1))])):Zt("",!0),e.value==="candle"?(Ze(),yt("label",jy,[Ht(ke("input",{type:"checkbox","onUpdate:modelValue":m[12]||(m[12]=T=>$.value=T),"data-testid":"cf-flat"},null,512),[[er,$.value]]),m[23]||(m[23]=ai(" Flat (no GL) ",-1))])):Zt("",!0),e.value==="candle"?(Ze(),yt("label",Zy,[Ht(ke("input",{type:"checkbox","onUpdate:modelValue":m[13]||(m[13]=T=>B.value=T),"data-testid":"cf-compact"},null,512),[[er,B.value]]),m[24]||(m[24]=ai(" Compact ",-1))])):Zt("",!0),m[27]||(m[27]=ke("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(Ze(),yt(jt,{key:3},[ke("div",Jy,[ke("button",{class:dn({active:X.value==="all"}),onClick:m[14]||(m[14]=T=>me("all"))},"All",2),ke("button",{class:dn({active:X.value==="open"}),onClick:m[15]||(m[15]=T=>me("open"))},"Open",2),ke("button",{class:dn({active:X.value==="closed"}),onClick:m[16]||(m[16]=T=>me("closed"))},"Closed",2)]),ke("input",{class:"demo-filter",placeholder:"Quick filter…",value:k.value,onInput:Z},null,40,Qy)],64)):Zt("",!0)]),Ht(ke("div",eE,[U.value?(Ze(),Pt(Ii,{key:0,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow"])):(Ze(),Pt(Hf,{key:K.value,"column-defs":A,"default-col-def":b,"row-height":28,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,magnify:R.value,pagination:!0,"pagination-page-size":50,onGridReady:ce},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[Wr,e.value==="grid"]]),Ht(ke("div",tE,[U.value?(Ze(),Pt(Ii,{key:0,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow"])):(Ze(),Pt(gc,{key:1,entries:_e.value,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,magnify:R.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[Wr,e.value==="log"]]),Ht(ke("div",nE,[U.value?(Ze(),Pt(Ii,{key:0,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow"])):(Ze(),Pt(Xf,{key:`cf-${$.value}`,candles:w.value,overlays:W.value?oe.value:[],markers:W.value?re.value:[],theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,flat:$.value,compact:B.value,magnify:R.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[Wr,e.value==="candle"]]),Ht(ke("div",iE,[U.value?(Ze(),Pt(Ii,{key:0,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow"])):(Ze(),Pt(Yf,{key:1,entries:ve.value,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,magnify:R.value,busy:Re.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:L},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))],512),[[Wr,e.value==="terminal"]]),Ht(Tt(Iy,{"storage-key":"cathode.demo.layout","initial-layout":_d(se),"container-titles":we},{default:ur(()=>[Tt(Io,{id:"trades",title:"Trades",curvature:C.value,canvas:""},{default:ur(({resizeKey:T})=>[U.value?(Ze(),Pt(Ii,{key:0,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow"])):(Ze(),Pt(Hf,{key:T,"column-defs":A,"default-col-def":b,"row-height":26,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,magnify:R.value,pagination:!0,"pagination-page-size":50,onGridReady:ce},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Tt(Io,{id:"chart",title:"Chart",curvature:C.value,canvas:""},{default:ur(({resizeKey:T})=>[U.value?(Ze(),Pt(Ii,{key:0,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow"])):(Ze(),Pt(Xf,{key:T,candles:w.value,overlays:oe.value,markers:re.value,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,magnify:R.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Tt(Io,{id:"log",title:"Log",curvature:C.value,canvas:""},{default:ur(()=>[U.value?(Ze(),Pt(Ii,{key:0,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow"])):(Ze(),Pt(gc,{key:1,entries:_e.value,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,magnify:R.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Tt(Io,{id:"terminal",title:"Terminal",curvature:C.value,canvas:""},{default:ur(()=>[U.value?(Ze(),Pt(Ii,{key:0,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow"])):(Ze(),Pt(Yf,{key:1,entries:ve.value,theme:t.value,curvature:C.value,scanlines:P.value,glow:I.value,magnify:R.value,busy:Re.value,prompt:"→ ",onSubmit:L},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[Wr,e.value==="workspace"]])],2))}}),oE=qi(sE,[["__scopeId","data-v-185622a8"]]);yg(oE).mount("#app");
