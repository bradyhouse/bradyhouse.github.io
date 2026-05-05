(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const vt={},$r=[],$n=()=>{},Kf=()=>!1,ia=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ra=n=>n.startsWith("onUpdate:"),Lt=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qh=Object.prototype.hasOwnProperty,ft=(n,e)=>qh.call(n,e),$e=Array.isArray,qr=n=>Ks(n)==="[object Map]",us=n=>Ks(n)==="[object Set]",eu=n=>Ks(n)==="[object Date]",Qe=n=>typeof n=="function",At=n=>typeof n=="string",Nn=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",jf=n=>(ht(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),Zf=Object.prototype.toString,Ks=n=>Zf.call(n),Kh=n=>Ks(n).slice(8,-1),Jf=n=>Ks(n)==="[object Object]",Sc=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ls=xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},jh=/-\w/g,Ln=sa(n=>n.replace(jh,e=>e.slice(1).toUpperCase())),Zh=/\B([A-Z])/g,Xi=sa(n=>n.replace(Zh,"-$1").toLowerCase()),Qf=sa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sa=sa(n=>n?`on${Qf(n)}`:""),Xn=(n,e)=>!Object.is(n,e),Uo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ed=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},oa=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Jh=n=>{const e=At(n)?Number(n):NaN;return isNaN(e)?n:e};let tu;const aa=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function on(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=At(i)?np(i):on(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(n)||ht(n))return n}const Qh=/;(?![^(]*\))/g,ep=/:([^]+)/,tp=/\/\*[^]*?\*\//g;function np(n){const e={};return n.replace(tp,"").split(Qh).forEach(t=>{if(t){const i=t.split(ep);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function dn(n){let e="";if(At(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=dn(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rp=xc(ip);function td(n){return!!n||n===""}function sp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=fs(n[i],e[i]);return t}function fs(n,e){if(n===e)return!0;let t=eu(n),i=eu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Nn(n),i=Nn(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?sp(n,e):!1;if(t=ht(n),i=ht(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!fs(n[o],e[o]))return!1}}return String(n)===String(e)}function yc(n,e){return n.findIndex(t=>fs(t,e))}const nd=n=>!!(n&&n.__v_isRef===!0),Sn=n=>At(n)?n:n==null?"":$e(n)||ht(n)&&(n.toString===Zf||!Qe(n.toString))?nd(n)?Sn(n.value):JSON.stringify(n,id,2):String(n),id=(n,e)=>nd(e)?id(n,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[ya(i,s)+" =>"]=r,t),{})}:us(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ya(t))}:Nn(e)?ya(e):ht(e)&&!$e(e)&&!Jf(e)?String(e):e,ya=(n,e="")=>{var t;return Nn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class op{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){++this._on===1&&(this.prevScope=sn,sn=this)}off(){this._on>0&&--this._on===0&&(sn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ap(){return sn}let xt;const Ea=new WeakSet;class rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,sn&&sn.active&&sn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nu(this),ad(this);const e=xt,t=In;xt=this,In=!0;try{return this.fn()}finally{ld(this),xt=e,In=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tc(e);this.deps=this.depsTail=void 0,nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ml(this)&&this.run()}get dirty(){return ml(this)}}let sd=0,Is,Us;function od(n,e=!1){if(n.flags|=8,e){n.next=Us,Us=n;return}n.next=Is,Is=n}function Ec(){sd++}function bc(){if(--sd>0)return;if(Us){let e=Us;for(Us=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Is;){let e=Is;for(Is=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ad(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ld(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Tc(i),lp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ml(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function cd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ks)||(n.globalVersion=ks,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ml(n))))return;n.flags|=2;const e=n.dep,t=xt,i=In;xt=n,In=!0;try{ad(n);const r=n.fn(n._value);(e.version===0||Xn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{xt=t,In=i,ld(n),n.flags&=-3}}function Tc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Tc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function lp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let In=!0;const ud=[];function gi(){ud.push(In),In=!1}function vi(){const n=ud.pop();In=n===void 0?!0:n}function nu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=xt;xt=void 0;try{e()}finally{xt=t}}}let ks=0;class cp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!In||xt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==xt)t=this.activeLink=new cp(xt,this),xt.deps?(t.prevDep=xt.depsTail,xt.depsTail.nextDep=t,xt.depsTail=t):xt.deps=xt.depsTail=t,fd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=xt.depsTail,t.nextDep=void 0,xt.depsTail.nextDep=t,xt.depsTail=t,xt.deps===t&&(xt.deps=i)}return t}trigger(e){this.version++,ks++,this.notify(e)}notify(e){Ec();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bc()}}}function fd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)fd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const gl=new WeakMap,vr=Symbol(""),vl=Symbol(""),zs=Symbol("");function Vt(n,e,t){if(In&&xt){let i=gl.get(n);i||gl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new wc),r.map=i,r.key=t),r.track()}}function ci(n,e,t,i,r,s){const o=gl.get(n);if(!o){ks++;return}const a=l=>{l&&l.trigger()};if(Ec(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&Sc(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===zs||!Nn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(zs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(vr)),qr(n)&&a(o.get(vl)));break;case"delete":l||(a(o.get(vr)),qr(n)&&a(o.get(vl)));break;case"set":qr(n)&&a(o.get(vr));break}}bc()}function Cr(n){const e=lt(n);return e===n?e:(Vt(e,"iterate",zs),yn(n)?e:e.map(Fn))}function la(n){return Vt(n=lt(n),"iterate",zs),n}function Vn(n,e){return _i(n)?ns(_r(n)?Fn(e):e):Fn(e)}const up={__proto__:null,[Symbol.iterator](){return ba(this,Symbol.iterator,n=>Vn(this,n))},concat(...n){return Cr(this).concat(...n.map(e=>$e(e)?Cr(e):e))},entries(){return ba(this,"entries",n=>(n[1]=Vn(this,n[1]),n))},every(n,e){return Jn(this,"every",n,e,void 0,arguments)},filter(n,e){return Jn(this,"filter",n,e,t=>t.map(i=>Vn(this,i)),arguments)},find(n,e){return Jn(this,"find",n,e,t=>Vn(this,t),arguments)},findIndex(n,e){return Jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Jn(this,"findLast",n,e,t=>Vn(this,t),arguments)},findLastIndex(n,e){return Jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ta(this,"includes",n)},indexOf(...n){return Ta(this,"indexOf",n)},join(n){return Cr(this).join(n)},lastIndexOf(...n){return Ta(this,"lastIndexOf",n)},map(n,e){return Jn(this,"map",n,e,void 0,arguments)},pop(){return xs(this,"pop")},push(...n){return xs(this,"push",n)},reduce(n,...e){return iu(this,"reduce",n,e)},reduceRight(n,...e){return iu(this,"reduceRight",n,e)},shift(){return xs(this,"shift")},some(n,e){return Jn(this,"some",n,e,void 0,arguments)},splice(...n){return xs(this,"splice",n)},toReversed(){return Cr(this).toReversed()},toSorted(n){return Cr(this).toSorted(n)},toSpliced(...n){return Cr(this).toSpliced(...n)},unshift(...n){return xs(this,"unshift",n)},values(){return ba(this,"values",n=>Vn(this,n))}};function ba(n,e,t){const i=la(n),r=i[e]();return i!==n&&!yn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const fp=Array.prototype;function Jn(n,e,t,i,r,s){const o=la(n),a=o!==n&&!yn(n),l=o[e];if(l!==fp[e]){const f=l.apply(n,s);return a?Fn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Vn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function iu(n,e,t,i){const r=la(n),s=r!==n&&!yn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Vn(n,c)),t.call(this,c,Vn(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?Vn(n,l):l}function Ta(n,e,t){const i=lt(n);Vt(i,"iterate",zs);const r=i[e](...t);return(r===-1||r===!1)&&Rc(t[0])?(t[0]=lt(t[0]),i[e](...t)):r}function xs(n,e,t=[]){gi(),Ec();const i=lt(n)[e].apply(n,t);return bc(),vi(),i}const dp=xc("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Nn));function hp(n){Nn(n)||(n=String(n));const e=lt(this);return Vt(e,"has",n),e.hasOwnProperty(n)}class hd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ep:vd:s?gd:md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!r){let l;if(o&&(l=up[t]))return l;if(t==="hasOwnProperty")return hp}const a=Reflect.get(e,t,Xt(e)?e:i);if((Nn(t)?dd.has(t):dp(t))||(r||Vt(e,"get",t),s))return a;if(Xt(a)){const l=o&&Sc(t)?a:a.value;return r&&ht(l)?xl(l):l}return ht(a)?r?xl(a):Kr(a):a}}class pd extends hd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=$e(e)&&Sc(t);if(!this._isShallow){const c=_i(s);if(!yn(i)&&!_i(i)&&(s=lt(s),i=lt(i)),!o&&Xt(s)&&!Xt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:ft(e,t),l=Reflect.set(e,t,i,Xt(e)?e:r);return e===lt(r)&&(a?Xn(i,s)&&ci(e,"set",t,i):ci(e,"add",t,i)),l}deleteProperty(e,t){const i=ft(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ci(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Nn(t)||!dd.has(t))&&Vt(e,"has",t),i}ownKeys(e){return Vt(e,"iterate",$e(e)?"length":vr),Reflect.ownKeys(e)}}class pp extends hd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mp=new pd,gp=new pp,vp=new pd(!0);const _l=n=>n,oo=n=>Reflect.getPrototypeOf(n);function _p(n,e,t){return function(...i){const r=this.__v_raw,s=lt(r),o=qr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?_l:e?ns:Fn;return!e&&Vt(s,"iterate",l?vl:vr),Lt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function ao(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function xp(n,e){const t={get(r){const s=this.__v_raw,o=lt(s),a=lt(r);n||(Xn(r,a)&&Vt(o,"get",r),Vt(o,"get",a));const{has:l}=oo(o),c=e?_l:n?ns:Fn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Vt(lt(r),"iterate",vr),r.size},has(r){const s=this.__v_raw,o=lt(s),a=lt(r);return n||(Xn(r,a)&&Vt(o,"has",r),Vt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=lt(a),c=e?_l:n?ns:Fn;return!n&&Vt(l,"iterate",vr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Lt(t,n?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(r){const s=lt(this),o=oo(s),a=lt(r),l=!e&&!yn(r)&&!_i(r)?a:r;return o.has.call(s,l)||Xn(r,l)&&o.has.call(s,r)||Xn(a,l)&&o.has.call(s,a)||(s.add(l),ci(s,"add",l,l)),this},set(r,s){!e&&!yn(s)&&!_i(s)&&(s=lt(s));const o=lt(this),{has:a,get:l}=oo(o);let c=a.call(o,r);c||(r=lt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Xn(s,u)&&ci(o,"set",r,s):ci(o,"add",r,s),this},delete(r){const s=lt(this),{has:o,get:a}=oo(s);let l=o.call(s,r);l||(r=lt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ci(s,"delete",r,void 0),c},clear(){const r=lt(this),s=r.size!==0,o=r.clear();return s&&ci(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_p(r,n,e)}),t}function Ac(n,e){const t=xp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ft(t,r)&&r in i?t:i,r,s)}const Mp={get:Ac(!1,!1)},Sp={get:Ac(!1,!0)},yp={get:Ac(!0,!1)};const md=new WeakMap,gd=new WeakMap,vd=new WeakMap,Ep=new WeakMap;function bp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tp(n){return n.__v_skip||!Object.isExtensible(n)?0:bp(Kh(n))}function Kr(n){return _i(n)?n:Cc(n,!1,mp,Mp,md)}function wp(n){return Cc(n,!1,vp,Sp,gd)}function xl(n){return Cc(n,!0,gp,yp,vd)}function Cc(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Tp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function _r(n){return _i(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function _i(n){return!!(n&&n.__v_isReadonly)}function yn(n){return!!(n&&n.__v_isShallow)}function Rc(n){return n?!!n.__v_raw:!1}function lt(n){const e=n&&n.__v_raw;return e?lt(e):n}function Ap(n){return!ft(n,"__v_skip")&&Object.isExtensible(n)&&ed(n,"__v_skip",!0),n}const Fn=n=>ht(n)?Kr(n):n,ns=n=>ht(n)?xl(n):n;function Xt(n){return n?n.__v_isRef===!0:!1}function De(n){return Cp(n,!1)}function Cp(n,e){return Xt(n)?n:new Rp(n,e)}class Rp{constructor(e,t){this.dep=new wc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:lt(e),this._value=t?e:Fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||yn(e)||_i(e);e=i?e:lt(e),Xn(e,t)&&(this._rawValue=e,this._value=i?e:Fn(e),this.dep.trigger())}}function _d(n){return Xt(n)?n.value:n}const Pp={get:(n,e,t)=>e==="__v_raw"?n:_d(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Xt(r)&&!Xt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function xd(n){return _r(n)?n:new Proxy(n,Pp)}class Dp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return od(this,!0),!0}get value(){const e=this.dep.track();return cd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Lp(n,e,t=!1){let i,r;return Qe(n)?i=n:(i=n.get,r=n.set),new Dp(i,r,t)}const lo={},Go=new WeakMap;let ar;function Ip(n,e=!1,t=ar){if(t){let i=Go.get(t);i||Go.set(t,i=[]),i.push(n)}}function Up(n,e,t=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:yn(E)||r===!1||r===0?ui(E,1):ui(E);let u,f,h,m,g=!1,x=!1;if(Xt(n)?(f=()=>n.value,g=yn(n)):_r(n)?(f=()=>c(n),g=!0):$e(n)?(x=!0,g=n.some(E=>_r(E)||yn(E)),f=()=>n.map(E=>{if(Xt(E))return E.value;if(_r(E))return c(E);if(Qe(E))return l?l(E,2):E()})):Qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){gi();try{h()}finally{vi()}}const E=ar;ar=u;try{return l?l(n,3,[m]):n(m)}finally{ar=E}}:f=$n,e&&r){const E=f,A=r===!0?1/0:r;f=()=>ui(E(),A)}const p=ap(),d=()=>{u.stop(),p&&p.active&&Mc(p.effects,u)};if(s&&e){const E=e;e=(...A)=>{E(...A),d()}}let T=x?new Array(n.length).fill(lo):lo;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const A=u.run();if(r||g||(x?A.some((R,C)=>Xn(R,T[C])):Xn(A,T))){h&&h();const R=ar;ar=u;try{const C=[A,T===lo?void 0:x&&T[0]===lo?[]:T,m];T=A,l?l(e,3,C):e(...C)}finally{ar=R}}}else u.run()};return a&&a(b),u=new rd(f),u.scheduler=o?()=>o(b,!1):b,m=E=>Ip(E,!1,u),h=u.onStop=()=>{const E=Go.get(u);if(E){if(l)l(E,4);else for(const A of E)A();Go.delete(u)}},e?i?b(!0):T=u.run():o?o(b.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ui(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Xt(n))ui(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)ui(n[i],e,t);else if(us(n)||qr(n))n.forEach(i=>{ui(i,e,t)});else if(Jf(n)){for(const i in n)ui(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function js(n,e,t,i){try{return i?n(...i):n()}catch(r){ca(r,e,t)}}function On(n,e,t,i){if(Qe(n)){const r=js(n,e,t,i);return r&&jf(r)&&r.catch(s=>{ca(s,e,t)}),r}if($e(n)){const r=[];for(let s=0;s<n.length;s++)r.push(On(n[s],e,t,i));return r}}function ca(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){gi(),js(s,null,10,[n,l,c]),vi();return}}Np(n,t,r,i,o)}function Np(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Kt=[];let zn=-1;const jr=[];let Ui=null,Gr=0;const Md=Promise.resolve();let Wo=null;function En(n){const e=Wo||Md;return n?e.then(this?n.bind(this):n):e}function Fp(n){let e=zn+1,t=Kt.length;for(;e<t;){const i=e+t>>>1,r=Kt[i],s=Hs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Pc(n){if(!(n.flags&1)){const e=Hs(n),t=Kt[Kt.length-1];!t||!(n.flags&2)&&e>=Hs(t)?Kt.push(n):Kt.splice(Fp(e),0,n),n.flags|=1,Sd()}}function Sd(){Wo||(Wo=Md.then(Ed))}function Op(n){$e(n)?jr.push(...n):Ui&&n.id===-1?Ui.splice(Gr+1,0,n):n.flags&1||(jr.push(n),n.flags|=1),Sd()}function ru(n,e,t=zn+1){for(;t<Kt.length;t++){const i=Kt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Kt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function yd(n){if(jr.length){const e=[...new Set(jr)].sort((t,i)=>Hs(t)-Hs(i));if(jr.length=0,Ui){Ui.push(...e);return}for(Ui=e,Gr=0;Gr<Ui.length;Gr++){const t=Ui[Gr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ui=null,Gr=0}}const Hs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ed(n){try{for(zn=0;zn<Kt.length;zn++){const e=Kt[zn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),js(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;zn<Kt.length;zn++){const e=Kt[zn];e&&(e.flags&=-2)}zn=-1,Kt.length=0,yd(),Wo=null,(Kt.length||jr.length)&&Ed()}}let Wt=null,bd=null;function Xo(n){const e=Wt;return Wt=n,bd=n&&n.type.__scopeId||null,e}function ur(n,e=Wt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&qo(-1);const s=Xo(e);let o;try{o=n(...r)}finally{Xo(s),i._d&&qo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ht(n,e){if(Wt===null)return n;const t=pa(Wt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=vt]=e[r];s&&(Qe(s)&&(s={mounted:s,updated:s}),s.deep&&ui(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ji(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(gi(),On(l,t,8,[n.el,a,n,e]),vi())}}function Ml(n,e){if(Jt){let t=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===t&&(t=Jt.provides=Object.create(i)),t[n]=e}}function Bi(n,e,t=!1){const i=nh();if(i||Jr){let r=Jr?Jr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const Bp=Symbol.for("v-scx"),kp=()=>Bi(Bp);function qe(n,e,t){return Td(n,e,t)}function Td(n,e,t=vt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t),l=e&&i||!e&&s!=="post";let c;if(Xs){if(s==="sync"){const m=kp();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=$n,m.resume=$n,m.pause=$n,m}}const u=Jt;a.call=(m,g,x)=>On(m,u,g,x);let f=!1;s==="post"?a.scheduler=m=>{rn(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Pc(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Up(n,e,a);return Xs&&(c?c.push(h):l&&h()),h}function zp(n,e,t){const i=this.proxy,r=At(n)?n.includes(".")?wd(i,n):()=>i[n]:n.bind(i,i);let s;Qe(e)?s=e:(s=e.handler,t=e);const o=Zs(this),a=Td(r,s.bind(i),t);return o(),a}function wd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Hp=Symbol("_vte"),Ad=n=>n.__isTeleport,Hn=Symbol("_leaveCb"),Ms=Symbol("_enterCb");function Vp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kn(()=>{n.isMounted=!0}),Nd(()=>{n.isUnmounting=!0}),n}const _n=[Function,Array],Cd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_n,onEnter:_n,onAfterEnter:_n,onEnterCancelled:_n,onBeforeLeave:_n,onLeave:_n,onAfterLeave:_n,onLeaveCancelled:_n,onBeforeAppear:_n,onAppear:_n,onAfterAppear:_n,onAppearCancelled:_n},Rd=n=>{const e=n.subTree;return e.component?Rd(e.component):e},Gp={name:"BaseTransition",props:Cd,setup(n,{slots:e}){const t=nh(),i=Vp();return()=>{const r=e.default&&Ld(e.default(),!0);if(!r||!r.length)return;const s=Pd(r),o=lt(n),{mode:a}=o;if(i.isLeaving)return wa(s);const l=su(s);if(!l)return wa(s);let c=Sl(l,o,i,t,f=>c=f);l.type!==Gt&&Vs(l,c);let u=t.subTree&&su(t.subTree);if(u&&u.type!==Gt&&!fr(u,l)&&Rd(t).type!==Gt){let f=Sl(u,o,i,t);if(Vs(u,f),a==="out-in"&&l.type!==Gt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},wa(s);a==="in-out"&&l.type!==Gt?f.delayLeave=(h,m,g)=>{const x=Dd(i,u);x[String(u.key)]=u,h[Hn]=()=>{m(),h[Hn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Pd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Gt){e=t;break}}return e}const Wp=Gp;function Dd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Sl(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:p,onAppear:d,onAfterAppear:T,onAppearCancelled:b}=e,E=String(n.key),A=Dd(t,n),R=(M,S)=>{M&&On(M,i,9,S)},C=(M,S)=>{const I=S[1];R(M,S),$e(M)?M.every(B=>B.length<=1)&&I():M.length<=1&&I()},N={mode:o,persisted:a,beforeEnter(M){let S=l;if(!t.isMounted)if(s)S=p||l;else return;M[Hn]&&M[Hn](!0);const I=A[E];I&&fr(n,I)&&I.el[Hn]&&I.el[Hn](),R(S,[M])},enter(M){if(A[E]===n)return;let S=c,I=u,B=f;if(!t.isMounted)if(s)S=d||c,I=T||u,B=b||f;else return;let H=!1;M[Ms]=J=>{H||(H=!0,J?R(B,[M]):R(I,[M]),N.delayedLeave&&N.delayedLeave(),M[Ms]=void 0)};const q=M[Ms].bind(null,!1);S?C(S,[M,q]):q()},leave(M,S){const I=String(n.key);if(M[Ms]&&M[Ms](!0),t.isUnmounting)return S();R(h,[M]);let B=!1;M[Hn]=q=>{B||(B=!0,S(),q?R(x,[M]):R(g,[M]),M[Hn]=void 0,A[I]===n&&delete A[I])};const H=M[Hn].bind(null,!1);A[I]=n,m?C(m,[M,H]):H()},clone(M){const S=Sl(M,e,t,i,r);return r&&r(S),S}};return N}function wa(n){if(ua(n))return n=Hi(n),n.children=null,n}function su(n){if(!ua(n))return Ad(n.type)&&n.children?Pd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Qe(t.default))return t.default()}}function Vs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ld(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===jt?(o.patchFlag&128&&r++,i=i.concat(Ld(o.children,e,a))):(e||o.type!==Gt)&&i.push(a!=null?Hi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Yi(n,e){return Qe(n)?Lt({name:n.name},e,{setup:n}):n}function Id(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ou(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Yo=new WeakMap;function Ns(n,e,t,i,r=!1){if($e(n)){n.forEach((x,p)=>Ns(x,e&&($e(e)?e[p]:e),t,i,r));return}if(Zr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ns(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?pa(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,f=a.setupState,h=lt(f),m=f===vt?Kf:x=>ou(u,x)?!1:ft(h,x),g=(x,p)=>!(p&&ou(u,p));if(c!=null&&c!==l){if(au(e),At(c))u[c]=null,m(c)&&(f[c]=null);else if(Xt(c)){const x=e;g(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Qe(l))js(l,a,12,[o,u]);else{const x=At(l),p=Xt(l);if(x||p){const d=()=>{if(n.f){const T=x?m(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)$e(T)&&Mc(T,s);else if($e(T))T.includes(s)||T.push(s);else if(x)u[l]=[s],m(l)&&(f[l]=u[l]);else{const b=[s];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else x?(u[l]=o,m(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const T=()=>{d(),Yo.delete(n)};T.id=-1,Yo.set(n,T),rn(T,t)}else au(n),d()}}}function au(n){const e=Yo.get(n);e&&(e.flags|=8,Yo.delete(n))}aa().requestIdleCallback;aa().cancelIdleCallback;const Zr=n=>!!n.type.__asyncLoader,ua=n=>n.type.__isKeepAlive;function Xp(n,e){Ud(n,"a",e)}function Yp(n,e){Ud(n,"da",e)}function Ud(n,e,t=Jt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(fa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ua(r.parent.vnode)&&$p(i,e,t,r),r=r.parent}}function $p(n,e,t,i){const r=fa(e,n,i,!0);Ei(()=>{Mc(i[e],r)},t)}function fa(n,e,t=Jt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{gi();const a=Zs(t),l=On(e,t,n,o);return a(),vi(),l});return i?r.unshift(s):r.push(s),s}}const yi=n=>(e,t=Jt)=>{(!Xs||n==="sp")&&fa(n,(...i)=>e(...i),t)},qp=yi("bm"),Kn=yi("m"),Kp=yi("bu"),jp=yi("u"),Nd=yi("bum"),Ei=yi("um"),Zp=yi("sp"),Jp=yi("rtg"),Qp=yi("rtc");function em(n,e=Jt){fa("ec",n,e)}const tm=Symbol.for("v-ndc");function nm(n,e,t,i){let r;const s=t,o=$e(n);if(o||At(n)){const a=o&&_r(n);let l=!1,c=!1;a&&(l=!yn(n),c=_i(n),n=la(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ns(Fn(n[u])):Fn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function yl(n,e,t={},i,r){if(Wt.ce||Wt.parent&&Zr(Wt.parent)&&Wt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Je(),Pt(jt,null,[Tt("slot",t,i)],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),Je();const o=s&&Fd(s(t)),a=t.key||o&&o.key,l=Pt(jt,{key:(a&&!Nn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Fd(n){return n.some(e=>Ws(e)?!(e.type===Gt||e.type===jt&&!Fd(e.children)):!0)?n:null}const El=n=>n?ih(n)?pa(n):El(n.parent):null,Fs=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>El(n.parent),$root:n=>El(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bd(n),$forceUpdate:n=>n.f||(n.f=()=>{Pc(n.update)}),$nextTick:n=>n.n||(n.n=En.bind(n.proxy)),$watch:n=>zp.bind(n)}),Aa=(n,e)=>n!==vt&&!n.__isScriptSetup&&ft(n,e),im={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Aa(i,e))return o[e]=1,i[e];if(r!==vt&&ft(r,e))return o[e]=2,r[e];if(ft(s,e))return o[e]=3,s[e];if(t!==vt&&ft(t,e))return o[e]=4,t[e];bl&&(o[e]=0)}}const c=Fs[e];let u,f;if(c)return e==="$attrs"&&Vt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==vt&&ft(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ft(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Aa(r,e)?(r[e]=t,!0):i!==vt&&ft(i,e)?(i[e]=t,!0):ft(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==vt&&a[0]!=="$"&&ft(n,a)||Aa(e,a)||ft(s,a)||ft(i,a)||ft(Fs,a)||ft(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ft(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bl=!0;function rm(n){const e=Bd(n),t=n.proxy,i=n.ctx;bl=!1,e.beforeCreate&&cu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:x,deactivated:p,beforeDestroy:d,beforeUnmount:T,destroyed:b,unmounted:E,render:A,renderTracked:R,renderTriggered:C,errorCaptured:N,serverPrefetch:M,expose:S,inheritAttrs:I,components:B,directives:H,filters:q}=e;if(c&&sm(c,i,null),o)for(const j in o){const z=o[j];Qe(z)&&(i[j]=z.bind(t))}if(r){const j=r.call(t,t);ht(j)&&(n.data=Kr(j))}if(bl=!0,s)for(const j in s){const z=s[j],le=Qe(z)?z.bind(t,t):Qe(z.get)?z.get.bind(t,t):$n,ee=!Qe(z)&&Qe(z.set)?z.set.bind(t):$n,ge=it({get:le,set:ee});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Te=>ge.value=Te})}if(a)for(const j in a)Od(a[j],i,t,j);if(l){const j=Qe(l)?l.call(t):l;Reflect.ownKeys(j).forEach(z=>{Ml(z,j[z])})}u&&cu(u,n,"c");function Y(j,z){$e(z)?z.forEach(le=>j(le.bind(t))):z&&j(z.bind(t))}if(Y(qp,f),Y(Kn,h),Y(Kp,m),Y(jp,g),Y(Xp,x),Y(Yp,p),Y(em,N),Y(Qp,R),Y(Jp,C),Y(Nd,T),Y(Ei,E),Y(Zp,M),$e(S))if(S.length){const j=n.exposed||(n.exposed={});S.forEach(z=>{Object.defineProperty(j,z,{get:()=>t[z],set:le=>t[z]=le,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===$n&&(n.render=A),I!=null&&(n.inheritAttrs=I),B&&(n.components=B),H&&(n.directives=H),M&&Id(n)}function sm(n,e,t=$n){$e(n)&&(n=Tl(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=Bi(r.from||i,r.default,!0):s=Bi(r.from||i):s=Bi(r),Xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function cu(n,e,t){On($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Od(n,e,t,i){let r=i.includes(".")?wd(t,i):()=>t[i];if(At(n)){const s=e[n];Qe(s)&&qe(r,s)}else if(Qe(n))qe(r,n.bind(t));else if(ht(n))if($e(n))n.forEach(s=>Od(s,e,t,i));else{const s=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(s)&&qe(r,s,n)}}function Bd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>$o(l,c,o,!0)),$o(l,e,o)),ht(e)&&s.set(e,l),l}function $o(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&$o(n,s,t,!0),r&&r.forEach(o=>$o(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=om[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const om={data:uu,props:fu,emits:fu,methods:Rs,computed:Rs,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:Rs,directives:Rs,watch:lm,provide:uu,inject:am};function uu(n,e){return e?n?function(){return Lt(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function am(n,e){return Rs(Tl(n),Tl(e))}function Tl(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function $t(n,e){return n?[...new Set([].concat(n,e))]:e}function Rs(n,e){return n?Lt(Object.create(null),n,e):e}function fu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Lt(Object.create(null),lu(n),lu(e??{})):e}function lm(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=$t(n[i],e[i]);return t}function kd(){return{app:null,config:{isNativeTag:Kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function um(n,e){return function(i,r=null){Qe(i)||(i=Lt({},i)),r!=null&&!ht(r)&&(r=null);const s=kd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:cm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...f)):Qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||Tt(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,pa(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Jr;Jr=c;try{return u()}finally{Jr=f}}};return c}}let Jr=null;const fm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ln(e)}Modifiers`]||n[`${Xi(e)}Modifiers`];function dm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||vt;let r=t;const s=e.startsWith("update:"),o=s&&fm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>At(u)?u.trim():u)),o.number&&(r=t.map(oa)));let a,l=i[a=Sa(e)]||i[a=Sa(Ln(e))];!l&&s&&(l=i[a=Sa(Xi(e))]),l&&On(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,r)}}const hm=new WeakMap;function zd(n,e,t=!1){const i=t?hm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Qe(n)){const l=c=>{const u=zd(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):($e(s)?s.forEach(l=>o[l]=null):Lt(o,s),ht(n)&&i.set(n,o),o)}function da(n,e){return!n||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),ft(n,e[0].toLowerCase()+e.slice(1))||ft(n,Xi(e))||ft(n,e))}function du(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:g,inheritAttrs:x}=n,p=Xo(n);let d,T;try{if(t.shapeFlag&4){const E=r||i,A=E;d=Gn(c.call(A,E,u,f,m,h,g)),T=a}else{const E=e;d=Gn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),T=e.props?a:pm(a)}}catch(E){Os.length=0,ca(E,n,1),d=Tt(Gt)}let b=d;if(T&&x!==!1){const E=Object.keys(T),{shapeFlag:A}=b;E.length&&A&7&&(s&&E.some(ra)&&(T=mm(T,s)),b=Hi(b,T,!1,!0))}return t.dirs&&(b=Hi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Vs(b,t.transition),d=b,Xo(p),d}const pm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ia(t))&&((e||(e={}))[t]=n[t]);return e},mm=(n,e)=>{const t={};for(const i in n)(!ra(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function gm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Hd(o,i,h)&&!da(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hu(i,o,c):!0:!!o;return!1}function hu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Hd(e,n,s)&&!da(t,s))return!0}return!1}function Hd(n,e,t){const i=n[t],r=e[t];return t==="style"&&ht(i)&&ht(r)?!fs(i,r):i!==r}function vm({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Vd={},Gd=()=>Object.create(Vd),Wd=n=>Object.getPrototypeOf(n)===Vd;function _m(n,e,t,i=!1){const r={},s=Gd();n.propsDefaults=Object.create(null),Xd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:wp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function xm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=lt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(da(n.emitsOptions,h))continue;const m=e[h];if(l)if(ft(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=Ln(h);r[g]=wl(l,a,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Xd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ft(e,f)&&((u=Xi(f))===f||!ft(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=wl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ft(e,f))&&(delete s[f],c=!0)}c&&ci(n.attrs,"set","")}function Xd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ls(l))continue;const c=e[l];let u;r&&ft(r,u=Ln(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:da(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=lt(t),c=a||vt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=wl(r,l,f,c[f],n,!ft(c,f))}}return o}function wl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ft(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Zs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Xi(t))&&(i=!0))}return i}const Mm=new WeakMap;function Yd(n,e,t=!1){const i=t?Mm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Qe(n)){const u=f=>{l=!0;const[h,m]=Yd(f,e,!0);Lt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,$r),$r;if($e(s))for(let u=0;u<s.length;u++){const f=Ln(s[u]);pu(f)&&(o[f]=vt)}else if(s)for(const u in s){const f=Ln(u);if(pu(f)){const h=s[u],m=o[f]=$e(h)||Qe(h)?{type:h}:Lt({},h),g=m.type;let x=!1,p=!0;if($e(g))for(let d=0;d<g.length;++d){const T=g[d],b=Qe(T)&&T.name;if(b==="Boolean"){x=!0;break}else b==="String"&&(p=!1)}else x=Qe(g)&&g.name==="Boolean";m[0]=x,m[1]=p,(x||ft(m,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function pu(n){return n[0]!=="$"&&!Ls(n)}const Dc=n=>n==="_"||n==="_ctx"||n==="$stable",Lc=n=>$e(n)?n.map(Gn):[Gn(n)],Sm=(n,e,t)=>{if(e._n)return e;const i=ur((...r)=>Lc(e(...r)),t);return i._c=!1,i},$d=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Dc(r))continue;const s=n[r];if(Qe(s))e[r]=Sm(r,s,i);else if(s!=null){const o=Lc(s);e[r]=()=>o}}},qd=(n,e)=>{const t=Lc(e);n.slots.default=()=>t},Kd=(n,e,t)=>{for(const i in e)(t||!Dc(i))&&(n[i]=e[i])},ym=(n,e,t)=>{const i=n.slots=Gd();if(n.vnode.shapeFlag&32){const r=e._;r?(Kd(i,e,t),t&&ed(i,"_",r,!0)):$d(e,i)}else e&&qd(n,e)},Em=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Kd(r,e,t):(s=!e.$stable,$d(e,r)),o=e}else e&&(qd(n,e),o={default:1});if(s)for(const a in r)!Dc(a)&&o[a]==null&&delete r[a]},rn=Cm;function bm(n){return Tm(n)}function Tm(n,e){const t=aa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=$n,insertStaticContent:g}=n,x=(D,O,w,de=null,ne=null,se=null,P=void 0,L=null,F=!!O.dynamicChildren)=>{if(D===O)return;D&&!fr(D,O)&&(de=ve(D),Te(D,ne,se,!0),D=null),O.patchFlag===-2&&(F=!1,O.dynamicChildren=null);const{type:_,ref:v,shapeFlag:U}=O;switch(_){case ha:p(D,O,w,de);break;case Gt:d(D,O,w,de);break;case Ra:D==null&&T(O,w,de,P);break;case jt:B(D,O,w,de,ne,se,P,L,F);break;default:U&1?A(D,O,w,de,ne,se,P,L,F):U&6?H(D,O,w,de,ne,se,P,L,F):(U&64||U&128)&&_.process(D,O,w,de,ne,se,P,L,F,Le)}v!=null&&ne?Ns(v,D&&D.ref,se,O||D,!O):v==null&&D&&D.ref!=null&&Ns(D.ref,null,se,D,!0)},p=(D,O,w,de)=>{if(D==null)i(O.el=a(O.children),w,de);else{const ne=O.el=D.el;O.children!==D.children&&c(ne,O.children)}},d=(D,O,w,de)=>{D==null?i(O.el=l(O.children||""),w,de):O.el=D.el},T=(D,O,w,de)=>{[D.el,D.anchor]=g(D.children,O,w,de,D.el,D.anchor)},b=({el:D,anchor:O},w,de)=>{let ne;for(;D&&D!==O;)ne=h(D),i(D,w,de),D=ne;i(O,w,de)},E=({el:D,anchor:O})=>{let w;for(;D&&D!==O;)w=h(D),r(D),D=w;r(O)},A=(D,O,w,de,ne,se,P,L,F)=>{if(O.type==="svg"?P="svg":O.type==="math"&&(P="mathml"),D==null)R(O,w,de,ne,se,P,L,F);else{const _=D.el&&D.el._isVueCE?D.el:null;try{_&&_._beginPatch(),M(D,O,ne,se,P,L,F)}finally{_&&_._endPatch()}}},R=(D,O,w,de,ne,se,P,L)=>{let F,_;const{props:v,shapeFlag:U,transition:V,dirs:X}=D;if(F=D.el=o(D.type,se,v&&v.is,v),U&8?u(F,D.children):U&16&&N(D.children,F,null,de,ne,Ca(D,se),P,L),X&&ji(D,null,de,"created"),C(F,D,D.scopeId,P,de),v){for(const he in v)he!=="value"&&!Ls(he)&&s(F,he,null,v[he],se,de);"value"in v&&s(F,"value",null,v.value,se),(_=v.onVnodeBeforeMount)&&kn(_,de,D)}X&&ji(D,null,de,"beforeMount");const Z=wm(ne,V);Z&&V.beforeEnter(F),i(F,O,w),((_=v&&v.onVnodeMounted)||Z||X)&&rn(()=>{try{_&&kn(_,de,D),Z&&V.enter(F),X&&ji(D,null,de,"mounted")}finally{}},ne)},C=(D,O,w,de,ne)=>{if(w&&m(D,w),de)for(let se=0;se<de.length;se++)m(D,de[se]);if(ne){let se=ne.subTree;if(O===se||Qd(se.type)&&(se.ssContent===O||se.ssFallback===O)){const P=ne.vnode;C(D,P,P.scopeId,P.slotScopeIds,ne.parent)}}},N=(D,O,w,de,ne,se,P,L,F=0)=>{for(let _=F;_<D.length;_++){const v=D[_]=L?li(D[_]):Gn(D[_]);x(null,v,O,w,de,ne,se,P,L)}},M=(D,O,w,de,ne,se,P)=>{const L=O.el=D.el;let{patchFlag:F,dynamicChildren:_,dirs:v}=O;F|=D.patchFlag&16;const U=D.props||vt,V=O.props||vt;let X;if(w&&Zi(w,!1),(X=V.onVnodeBeforeUpdate)&&kn(X,w,O,D),v&&ji(O,D,w,"beforeUpdate"),w&&Zi(w,!0),(U.innerHTML&&V.innerHTML==null||U.textContent&&V.textContent==null)&&u(L,""),_?S(D.dynamicChildren,_,L,w,de,Ca(O,ne),se):P||z(D,O,L,null,w,de,Ca(O,ne),se,!1),F>0){if(F&16)I(L,U,V,w,ne);else if(F&2&&U.class!==V.class&&s(L,"class",null,V.class,ne),F&4&&s(L,"style",U.style,V.style,ne),F&8){const Z=O.dynamicProps;for(let he=0;he<Z.length;he++){const k=Z[he],ie=U[k],Se=V[k];(Se!==ie||k==="value")&&s(L,k,ie,Se,ne,w)}}F&1&&D.children!==O.children&&u(L,O.children)}else!P&&_==null&&I(L,U,V,w,ne);((X=V.onVnodeUpdated)||v)&&rn(()=>{X&&kn(X,w,O,D),v&&ji(O,D,w,"updated")},de)},S=(D,O,w,de,ne,se,P)=>{for(let L=0;L<O.length;L++){const F=D[L],_=O[L],v=F.el&&(F.type===jt||!fr(F,_)||F.shapeFlag&198)?f(F.el):w;x(F,_,v,null,de,ne,se,P,!0)}},I=(D,O,w,de,ne)=>{if(O!==w){if(O!==vt)for(const se in O)!Ls(se)&&!(se in w)&&s(D,se,O[se],null,ne,de);for(const se in w){if(Ls(se))continue;const P=w[se],L=O[se];P!==L&&se!=="value"&&s(D,se,L,P,ne,de)}"value"in w&&s(D,"value",O.value,w.value,ne)}},B=(D,O,w,de,ne,se,P,L,F)=>{const _=O.el=D?D.el:a(""),v=O.anchor=D?D.anchor:a("");let{patchFlag:U,dynamicChildren:V,slotScopeIds:X}=O;X&&(L=L?L.concat(X):X),D==null?(i(_,w,de),i(v,w,de),N(O.children||[],w,v,ne,se,P,L,F)):U>0&&U&64&&V&&D.dynamicChildren&&D.dynamicChildren.length===V.length?(S(D.dynamicChildren,V,w,ne,se,P,L),(O.key!=null||ne&&O===ne.subTree)&&jd(D,O,!0)):z(D,O,w,v,ne,se,P,L,F)},H=(D,O,w,de,ne,se,P,L,F)=>{O.slotScopeIds=L,D==null?O.shapeFlag&512?ne.ctx.activate(O,w,de,P,F):q(O,w,de,ne,se,P,F):J(D,O,F)},q=(D,O,w,de,ne,se,P)=>{const L=D.component=Nm(D,de,ne);if(ua(D)&&(L.ctx.renderer=Le),Fm(L,!1,P),L.asyncDep){if(ne&&ne.registerDep(L,Y,P),!D.el){const F=L.subTree=Tt(Gt);d(null,F,O,w),D.placeholder=F.el}}else Y(L,D,O,w,ne,se,P)},J=(D,O,w)=>{const de=O.component=D.component;if(gm(D,O,w))if(de.asyncDep&&!de.asyncResolved){j(de,O,w);return}else de.next=O,de.update();else O.el=D.el,de.vnode=O},Y=(D,O,w,de,ne,se,P)=>{const L=()=>{if(D.isMounted){let{next:U,bu:V,u:X,parent:Z,vnode:he}=D;{const ye=Zd(D);if(ye){U&&(U.el=he.el,j(D,U,P)),ye.asyncDep.then(()=>{rn(()=>{D.isUnmounted||_()},ne)});return}}let k=U,ie;Zi(D,!1),U?(U.el=he.el,j(D,U,P)):U=he,V&&Uo(V),(ie=U.props&&U.props.onVnodeBeforeUpdate)&&kn(ie,Z,U,he),Zi(D,!0);const Se=du(D),ue=D.subTree;D.subTree=Se,x(ue,Se,f(ue.el),ve(ue),D,ne,se),U.el=Se.el,k===null&&vm(D,Se.el),X&&rn(X,ne),(ie=U.props&&U.props.onVnodeUpdated)&&rn(()=>kn(ie,Z,U,he),ne)}else{let U;const{el:V,props:X}=O,{bm:Z,m:he,parent:k,root:ie,type:Se}=D,ue=Zr(O);Zi(D,!1),Z&&Uo(Z),!ue&&(U=X&&X.onVnodeBeforeMount)&&kn(U,k,O),Zi(D,!0);{ie.ce&&ie.ce._hasShadowRoot()&&ie.ce._injectChildStyle(Se,D.parent?D.parent.type:void 0);const ye=D.subTree=du(D);x(null,ye,w,de,D,ne,se),O.el=ye.el}if(he&&rn(he,ne),!ue&&(U=X&&X.onVnodeMounted)){const ye=O;rn(()=>kn(U,k,ye),ne)}(O.shapeFlag&256||k&&Zr(k.vnode)&&k.vnode.shapeFlag&256)&&D.a&&rn(D.a,ne),D.isMounted=!0,O=w=de=null}};D.scope.on();const F=D.effect=new rd(L);D.scope.off();const _=D.update=F.run.bind(F),v=D.job=F.runIfDirty.bind(F);v.i=D,v.id=D.uid,F.scheduler=()=>Pc(v),Zi(D,!0),_()},j=(D,O,w)=>{O.component=D;const de=D.vnode.props;D.vnode=O,D.next=null,xm(D,O.props,de,w),Em(D,O.children,w),gi(),ru(D),vi()},z=(D,O,w,de,ne,se,P,L,F=!1)=>{const _=D&&D.children,v=D?D.shapeFlag:0,U=O.children,{patchFlag:V,shapeFlag:X}=O;if(V>0){if(V&128){ee(_,U,w,de,ne,se,P,L,F);return}else if(V&256){le(_,U,w,de,ne,se,P,L,F);return}}X&8?(v&16&&Me(_,ne,se),U!==_&&u(w,U)):v&16?X&16?ee(_,U,w,de,ne,se,P,L,F):Me(_,ne,se,!0):(v&8&&u(w,""),X&16&&N(U,w,de,ne,se,P,L,F))},le=(D,O,w,de,ne,se,P,L,F)=>{D=D||$r,O=O||$r;const _=D.length,v=O.length,U=Math.min(_,v);let V;for(V=0;V<U;V++){const X=O[V]=F?li(O[V]):Gn(O[V]);x(D[V],X,w,null,ne,se,P,L,F)}_>v?Me(D,ne,se,!0,!1,U):N(O,w,de,ne,se,P,L,F,U)},ee=(D,O,w,de,ne,se,P,L,F)=>{let _=0;const v=O.length;let U=D.length-1,V=v-1;for(;_<=U&&_<=V;){const X=D[_],Z=O[_]=F?li(O[_]):Gn(O[_]);if(fr(X,Z))x(X,Z,w,null,ne,se,P,L,F);else break;_++}for(;_<=U&&_<=V;){const X=D[U],Z=O[V]=F?li(O[V]):Gn(O[V]);if(fr(X,Z))x(X,Z,w,null,ne,se,P,L,F);else break;U--,V--}if(_>U){if(_<=V){const X=V+1,Z=X<v?O[X].el:de;for(;_<=V;)x(null,O[_]=F?li(O[_]):Gn(O[_]),w,Z,ne,se,P,L,F),_++}}else if(_>V)for(;_<=U;)Te(D[_],ne,se,!0),_++;else{const X=_,Z=_,he=new Map;for(_=Z;_<=V;_++){const be=O[_]=F?li(O[_]):Gn(O[_]);be.key!=null&&he.set(be.key,_)}let k,ie=0;const Se=V-Z+1;let ue=!1,ye=0;const Ne=new Array(Se);for(_=0;_<Se;_++)Ne[_]=0;for(_=X;_<=U;_++){const be=D[_];if(ie>=Se){Te(be,ne,se,!0);continue}let Xe;if(be.key!=null)Xe=he.get(be.key);else for(k=Z;k<=V;k++)if(Ne[k-Z]===0&&fr(be,O[k])){Xe=k;break}Xe===void 0?Te(be,ne,se,!0):(Ne[Xe-Z]=_+1,Xe>=ye?ye=Xe:ue=!0,x(be,O[Xe],w,null,ne,se,P,L,F),ie++)}const ke=ue?Am(Ne):$r;for(k=ke.length-1,_=Se-1;_>=0;_--){const be=Z+_,Xe=O[be],Ge=O[be+1],rt=be+1<v?Ge.el||Jd(Ge):de;Ne[_]===0?x(null,Xe,w,rt,ne,se,P,L,F):ue&&(k<0||_!==ke[k]?ge(Xe,w,rt,2):k--)}}},ge=(D,O,w,de,ne=null)=>{const{el:se,type:P,transition:L,children:F,shapeFlag:_}=D;if(_&6){ge(D.component.subTree,O,w,de);return}if(_&128){D.suspense.move(O,w,de);return}if(_&64){P.move(D,O,w,Le);return}if(P===jt){i(se,O,w);for(let U=0;U<F.length;U++)ge(F[U],O,w,de);i(D.anchor,O,w);return}if(P===Ra){b(D,O,w);return}if(de!==2&&_&1&&L)if(de===0)L.beforeEnter(se),i(se,O,w),rn(()=>L.enter(se),ne);else{const{leave:U,delayLeave:V,afterLeave:X}=L,Z=()=>{D.ctx.isUnmounted?r(se):i(se,O,w)},he=()=>{se._isLeaving&&se[Hn](!0),U(se,()=>{Z(),X&&X()})};V?V(se,Z,he):he()}else i(se,O,w)},Te=(D,O,w,de=!1,ne=!1)=>{const{type:se,props:P,ref:L,children:F,dynamicChildren:_,shapeFlag:v,patchFlag:U,dirs:V,cacheIndex:X,memo:Z}=D;if(U===-2&&(ne=!1),L!=null&&(gi(),Ns(L,null,w,D,!0),vi()),X!=null&&(O.renderCache[X]=void 0),v&256){O.ctx.deactivate(D);return}const he=v&1&&V,k=!Zr(D);let ie;if(k&&(ie=P&&P.onVnodeBeforeUnmount)&&kn(ie,O,D),v&6)me(D.component,w,de);else{if(v&128){D.suspense.unmount(w,de);return}he&&ji(D,null,O,"beforeUnmount"),v&64?D.type.remove(D,O,w,Le,de):_&&!_.hasOnce&&(se!==jt||U>0&&U&64)?Me(_,O,w,!1,!0):(se===jt&&U&384||!ne&&v&16)&&Me(F,O,w),de&&We(D)}const Se=Z!=null&&X==null;(k&&(ie=P&&P.onVnodeUnmounted)||he||Se)&&rn(()=>{ie&&kn(ie,O,D),he&&ji(D,null,O,"unmounted"),Se&&(D.el=null)},w)},We=D=>{const{type:O,el:w,anchor:de,transition:ne}=D;if(O===jt){oe(w,de);return}if(O===Ra){E(D);return}const se=()=>{r(w),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(D.shapeFlag&1&&ne&&!ne.persisted){const{leave:P,delayLeave:L}=ne,F=()=>P(w,se);L?L(D.el,se,F):F()}else se()},oe=(D,O)=>{let w;for(;D!==O;)w=h(D),r(D),D=w;r(O)},me=(D,O,w)=>{const{bum:de,scope:ne,job:se,subTree:P,um:L,m:F,a:_}=D;mu(F),mu(_),de&&Uo(de),ne.stop(),se&&(se.flags|=8,Te(P,D,O,w)),L&&rn(L,O),rn(()=>{D.isUnmounted=!0},O)},Me=(D,O,w,de=!1,ne=!1,se=0)=>{for(let P=se;P<D.length;P++)Te(D[P],O,w,de,ne)},ve=D=>{if(D.shapeFlag&6)return ve(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const O=h(D.anchor||D.el),w=O&&O[Hp];return w?h(w):O};let fe=!1;const _e=(D,O,w)=>{let de;D==null?O._vnode&&(Te(O._vnode,null,null,!0),de=O._vnode.component):x(O._vnode||null,D,O,null,null,null,w),O._vnode=D,fe||(fe=!0,ru(de),yd(),fe=!1)},Le={p:x,um:Te,m:ge,r:We,mt:q,mc:N,pc:z,pbc:S,n:ve,o:n};return{render:_e,hydrate:void 0,createApp:um(_e)}}function Ca({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Zi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function wm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function jd(n,e,t=!1){const i=n.children,r=e.children;if($e(i)&&$e(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=li(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&jd(o,a)),a.type===ha&&(a.patchFlag===-1&&(a=r[s]=li(a)),a.el=o.el),a.type===Gt&&!a.el&&(a.el=o.el)}}function Am(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Zd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zd(e)}function mu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Jd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Jd(e.subTree):null}const Qd=n=>n.__isSuspense;function Cm(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Op(n)}const jt=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),Os=[];let hn=null;function Je(n=!1){Os.push(hn=n?null:[])}function Rm(){Os.pop(),hn=Os[Os.length-1]||null}let Gs=1;function qo(n,e=!1){Gs+=n,n<0&&hn&&e&&(hn.hasOnce=!0)}function eh(n){return n.dynamicChildren=Gs>0?hn||$r:null,Rm(),Gs>0&&hn&&hn.push(n),n}function yt(n,e,t,i,r,s){return eh(Be(n,e,t,i,r,s,!0))}function Pt(n,e,t,i,r){return eh(Tt(n,e,t,i,r,!0))}function Ws(n){return n?n.__v_isVNode===!0:!1}function fr(n,e){return n.type===e.type&&n.key===e.key}const th=({key:n})=>n??null,No=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Xt(n)||Qe(n)?{i:Wt,r:n,k:e,f:!!t}:n:null);function Be(n,e=null,t=null,i=0,r=null,s=n===jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&th(e),ref:e&&No(e),scopeId:bd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Wt};return a?(Ic(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Gs>0&&!o&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const Tt=Pm;function Pm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===tm)&&(n=Gt),Ws(n)){const a=Hi(n,e,!0);return t&&Ic(a,t),Gs>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(zm(n)&&(n=n.__vccOpts),e){e=Dm(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=dn(a)),ht(l)&&(Rc(l)&&!$e(l)&&(l=Lt({},l)),e.style=on(l))}const o=At(n)?1:Qd(n)?128:Ad(n)?64:ht(n)?4:Qe(n)?2:0;return Be(n,e,t,i,r,o,s,!0)}function Dm(n){return n?Rc(n)||Wd(n)?Lt({},n):n:null}function Hi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Lm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&th(c),ref:e&&e.ref?t&&s?$e(s)?s.concat(No(e)):[s,No(e)]:No(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hi(n.ssContent),ssFallback:n.ssFallback&&Hi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Vs(u,l.clone(u)),u}function oi(n=" ",e=0){return Tt(ha,null,n,e)}function Zt(n="",e=!1){return e?(Je(),Pt(Gt,null,n)):Tt(Gt,null,n)}function Gn(n){return n==null||typeof n=="boolean"?Tt(Gt):$e(n)?Tt(jt,null,n.slice()):Ws(n)?li(n):Tt(ha,null,String(n))}function li(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hi(n)}function Ic(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ic(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Wd(e)?e._ctx=Wt:r===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:Wt},t=32):(e=String(e),i&64?(t=16,e=[oi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Lm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=dn([e.class,i.class]));else if(r==="style")e.style=on([e.style,i.style]);else if(ia(r)){const s=e[r],o=i[r];o&&s!==o&&!($e(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!ra(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function kn(n,e,t,i=null){On(n,e,7,[t,i])}const Im=kd();let Um=0;function Nm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Im,s={uid:Um++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yd(i,r),emitsOptions:zd(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dm.bind(null,s),n.ce&&n.ce(s),s}let Jt=null;const nh=()=>Jt||Wt;let Ko,Al;{const n=aa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ko=e("__VUE_INSTANCE_SETTERS__",t=>Jt=t),Al=e("__VUE_SSR_SETTERS__",t=>Xs=t)}const Zs=n=>{const e=Jt;return Ko(n),n.scope.on(),()=>{n.scope.off(),Ko(e)}},gu=()=>{Jt&&Jt.scope.off(),Ko(null)};function ih(n){return n.vnode.shapeFlag&4}let Xs=!1;function Fm(n,e=!1,t=!1){e&&Al(e);const{props:i,children:r}=n.vnode,s=ih(n);_m(n,i,s,e),ym(n,r,t||e);const o=s?Om(n,e):void 0;return e&&Al(!1),o}function Om(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,im);const{setup:i}=t;if(i){gi();const r=n.setupContext=i.length>1?km(n):null,s=Zs(n),o=js(i,n,0,[n.props,r]),a=jf(o);if(vi(),s(),(a||n.sp)&&!Zr(n)&&Id(n),a){if(o.then(gu,gu),e)return o.then(l=>{vu(n,l)}).catch(l=>{ca(l,n,0)});n.asyncDep=o}else vu(n,o)}else rh(n)}function vu(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=xd(e)),rh(n)}function rh(n,e,t){const i=n.type;n.render||(n.render=i.render||$n);{const r=Zs(n);gi();try{rm(n)}finally{vi(),r()}}}const Bm={get(n,e){return Vt(n,"get",""),n[e]}};function km(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Bm),slots:n.slots,emit:n.emit,expose:e}}function pa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xd(Ap(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fs)return Fs[t](n)},has(e,t){return t in e||t in Fs}})):n.proxy}function zm(n){return Qe(n)&&"__vccOpts"in n}const it=(n,e)=>Lp(n,e,Xs);function Hm(n,e,t){try{qo(-1);const i=arguments.length;return i===2?ht(e)&&!$e(e)?Ws(e)?Tt(n,null,[e]):Tt(n,e):Tt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ws(t)&&(t=[t]),Tt(n,e,t))}finally{qo(1)}}const Vm="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const _u=typeof window<"u"&&window.trustedTypes;if(_u)try{Cl=_u.createPolicy("vue",{createHTML:n=>n})}catch{}const sh=Cl?n=>Cl.createHTML(n):n=>n,Gm="http://www.w3.org/2000/svg",Wm="http://www.w3.org/1998/Math/MathML",ai=typeof document<"u"?document:null,xu=ai&&ai.createElement("template"),Xm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ai.createElementNS(Gm,n):e==="mathml"?ai.createElementNS(Wm,n):t?ai.createElement(n,{is:t}):ai.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ai.createTextNode(n),createComment:n=>ai.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ai.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{xu.innerHTML=sh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},wi="transition",Ss="animation",Ys=Symbol("_vtc"),oh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ym=Lt({},Cd,oh),$m=n=>(n.displayName="Transition",n.props=Ym,n),qm=$m((n,{slots:e})=>Hm(Wp,Km(n),e)),Ji=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},Mu=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function Km(n){const e={};for(const B in n)B in oh||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=jm(r),x=g&&g[0],p=g&&g[1],{onBeforeEnter:d,onEnter:T,onEnterCancelled:b,onLeave:E,onLeaveCancelled:A,onBeforeAppear:R=d,onAppear:C=T,onAppearCancelled:N=b}=e,M=(B,H,q,J)=>{B._enterCancelled=J,Qi(B,H?u:a),Qi(B,H?c:o),q&&q()},S=(B,H)=>{B._isLeaving=!1,Qi(B,f),Qi(B,m),Qi(B,h),H&&H()},I=B=>(H,q)=>{const J=B?C:T,Y=()=>M(H,B,q);Ji(J,[H,Y]),Su(()=>{Qi(H,B?l:s),Qn(H,B?u:a),Mu(J)||yu(H,i,x,Y)})};return Lt(e,{onBeforeEnter(B){Ji(d,[B]),Qn(B,s),Qn(B,o)},onBeforeAppear(B){Ji(R,[B]),Qn(B,l),Qn(B,c)},onEnter:I(!1),onAppear:I(!0),onLeave(B,H){B._isLeaving=!0;const q=()=>S(B,H);Qn(B,f),B._enterCancelled?(Qn(B,h),Tu(B)):(Tu(B),Qn(B,h)),Su(()=>{B._isLeaving&&(Qi(B,f),Qn(B,m),Mu(E)||yu(B,i,p,q))}),Ji(E,[B,q])},onEnterCancelled(B){M(B,!1,void 0,!0),Ji(b,[B])},onAppearCancelled(B){M(B,!0,void 0,!0),Ji(N,[B])},onLeaveCancelled(B){S(B),Ji(A,[B])}})}function jm(n){if(n==null)return null;if(ht(n))return[Pa(n.enter),Pa(n.leave)];{const e=Pa(n);return[e,e]}}function Pa(n){return Jh(n)}function Qn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ys]||(n[Ys]=new Set)).add(e)}function Qi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ys];t&&(t.delete(e),t.size||(n[Ys]=void 0))}function Su(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Zm=0;function yu(n,e,t,i){const r=n._endId=++Zm,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Jm(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Jm(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${wi}Delay`),s=i(`${wi}Duration`),o=Eu(r,s),a=i(`${Ss}Delay`),l=i(`${Ss}Duration`),c=Eu(a,l);let u=null,f=0,h=0;e===wi?o>0&&(u=wi,f=o,h=s.length):e===Ss?c>0&&(u=Ss,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?wi:Ss:null,h=u?u===wi?s.length:l.length:0);const m=u===wi&&/\b(?:transform|all)(?:,|$)/.test(i(`${wi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function Eu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>bu(t)+bu(n[i])))}function bu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Tu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Qm(n,e,t){const i=n[Ys];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const jo=Symbol("_vod"),ah=Symbol("_vsh"),Wr={name:"show",beforeMount(n,{value:e},{transition:t}){n[jo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ys(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ys(n,!0),i.enter(n)):i.leave(n,()=>{ys(n,!1)}):ys(n,e))},beforeUnmount(n,{value:e}){ys(n,e)}};function ys(n,e){n.style.display=e?n[jo]:"none",n[ah]=!e}const eg=Symbol(""),tg=/(?:^|;)\s*display\s*:/;function ng(n,e,t){const i=n.style,r=At(t);let s=!1;if(t&&!r){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Fo(i,a,"")}else for(const o in e)t[o]==null&&Fo(i,o,"");for(const o in t)o==="display"&&(s=!0),Fo(i,o,t[o])}else if(r){if(e!==t){const o=i[eg];o&&(t+=";"+o),i.cssText=t,s=tg.test(t)}}else e&&n.removeAttribute("style");jo in n&&(n[jo]=s?i.display:"",n[ah]&&(i.display="none"))}const wu=/\s*!important$/;function Fo(n,e,t){if($e(t))t.forEach(i=>Fo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ig(n,e);wu.test(t)?n.setProperty(Xi(i),t.replace(wu,""),"important"):n[i]=t}}const Au=["Webkit","Moz","ms"],Da={};function ig(n,e){const t=Da[e];if(t)return t;let i=Ln(e);if(i!=="filter"&&i in n)return Da[e]=i;i=Qf(i);for(let r=0;r<Au.length;r++){const s=Au[r]+i;if(s in n)return Da[e]=s}return e}const Cu="http://www.w3.org/1999/xlink";function Ru(n,e,t,i,r,s=rp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cu,e.slice(6,e.length)):n.setAttributeNS(Cu,e,t):t==null||s&&!td(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Nn(t)?String(t):t)}function Pu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=td(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Ni(n,e,t,i){n.addEventListener(e,t,i)}function rg(n,e,t,i){n.removeEventListener(e,t,i)}const Du=Symbol("_vei");function sg(n,e,t,i,r=null){const s=n[Du]||(n[Du]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=og(e);if(i){const c=s[e]=cg(i,r);Ni(n,a,c,l)}else o&&(rg(n,a,o,l),s[e]=void 0)}}const Lu=/(?:Once|Passive|Capture)$/;function og(n){let e;if(Lu.test(n)){e={};let i;for(;i=n.match(Lu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xi(n.slice(2)),e]}let La=0;const ag=Promise.resolve(),lg=()=>La||(ag.then(()=>La=0),La=Date.now());function cg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;On(ug(i,t.value),e,5,[i])};return t.value=n,t.attached=lg(),t}function ug(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Iu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,fg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Qm(n,i,o):e==="style"?ng(n,t,i):ia(e)?ra(e)||sg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dg(n,e,i,o))?(Pu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ru(n,e,i,o,s,e!=="value")):n._isVueCE&&(hg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!At(i)))?Pu(n,Ln(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ru(n,e,i,o))};function dg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Iu(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Iu(e)&&At(t)?!1:e in n}function hg(n,e){const t=n._def.props;if(!t)return!1;const i=Ln(e);return Array.isArray(t)?t.some(r=>Ln(r)===i):Object.keys(t).some(r=>Ln(r)===i)}const is=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>Uo(e,t):e};function pg(n){n.target.composing=!0}function Uu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pi=Symbol("_assign");function Nu(n,e,t){return e&&(n=n.trim()),t&&(n=oa(n)),n}const lh={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[pi]=is(r);const s=i||r.props&&r.props.type==="number";Ni(n,e?"change":"input",o=>{o.target.composing||n[pi](Nu(n.value,t,s))}),(t||s)&&Ni(n,"change",()=>{n.value=Nu(n.value,t,s)}),e||(Ni(n,"compositionstart",pg),Ni(n,"compositionend",Uu),Ni(n,"change",Uu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[pi]=is(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?oa(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},er={deep:!0,created(n,e,t){n[pi]=is(t),Ni(n,"change",()=>{const i=n._modelValue,r=$s(n),s=n.checked,o=n[pi];if($e(i)){const a=yc(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(us(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(ch(n,s))})},mounted:Fu,beforeUpdate(n,e,t){n[pi]=is(t),Fu(n,e,t)}};function Fu(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if($e(e))r=yc(e,i.props.value)>-1;else if(us(e))r=e.has(i.props.value);else{if(e===t)return;r=fs(e,ch(n,!0))}n.checked!==r&&(n.checked=r)}const mg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=us(e);Ni(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?oa($s(o)):$s(o));n[pi](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,En(()=>{n._assigning=!1})}),n[pi]=is(i)},mounted(n,{value:e}){Ou(n,e)},beforeUpdate(n,e,t){n[pi]=is(t)},updated(n,{value:e}){n._assigning||Ou(n,e)}};function Ou(n,e){const t=n.multiple,i=$e(e);if(!(t&&!i&&!us(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=$s(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=yc(e,a)>-1}else o.selected=e.has(a);else if(fs($s(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function $s(n){return"_value"in n?n._value:n.value}function ch(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const gg=["ctrl","shift","alt","meta"],vg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>gg.some(t=>n[`${t}Key`]&&!e.includes(t))},Oi=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=vg[e[o]];if(a&&a(r,e))return}return n(r,...s)})},_g={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xg=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=Xi(r.key);if(e.some(o=>o===s||_g[o]===s))return n(r)})},Mg=Lt({patchProp:fg},Xm);let Bu;function Sg(){return Bu||(Bu=bm(Mg))}const yg=(...n)=>{const e=Sg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=bg(i);if(!r)return;const s=e._component;!Qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Eg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Eg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bg(n){return At(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="170",Tg=0,ku=1,wg=2,uh=1,Ag=2,si=3,Vi=0,ln=1,fi=2,ki=0,Qr=1,zu=2,Hu=3,Vu=4,Cg=5,dr=100,Rg=101,Pg=102,Dg=103,Lg=104,Ig=200,Ug=201,Ng=202,Fg=203,Rl=204,Pl=205,Og=206,Bg=207,kg=208,zg=209,Hg=210,Vg=211,Gg=212,Wg=213,Xg=214,Dl=0,Ll=1,Il=2,rs=3,Ul=4,Nl=5,Fl=6,Ol=7,fh=0,Yg=1,$g=2,zi=0,qg=1,Kg=2,jg=3,Zg=4,Jg=5,Qg=6,ev=7,dh=300,ss=301,os=302,Bl=303,kl=304,ma=306,zl=1e3,pr=1001,Hl=1002,Un=1003,tv=1004,co=1005,Et=1006,Ia=1007,mr=1008,xi=1009,hh=1010,ph=1011,qs=1012,Nc=1013,yr=1014,di=1015,Js=1016,Fc=1017,Oc=1018,as=1020,mh=35902,gh=1021,vh=1022,Dn=1023,_h=1024,xh=1025,es=1026,ls=1027,Mh=1028,Bc=1029,Sh=1030,kc=1031,zc=1033,Oo=33776,Bo=33777,ko=33778,zo=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,Yl=36196,$l=37492,ql=37496,Kl=37808,jl=37809,Zl=37810,Jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,rc=37817,sc=37818,oc=37819,ac=37820,lc=37821,Ho=36492,cc=36494,uc=36495,yh=36283,fc=36284,dc=36285,hc=36286,nv=3200,iv=3201,rv=0,sv=1,Fi="",Mn="srgb",ds="srgb-linear",ga="linear",mt="srgb",Rr=7680,Gu=519,ov=512,av=513,lv=514,Eh=515,cv=516,uv=517,fv=518,dv=519,Wu=35044,Xu="300 es",hi=2e3,Zo=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ua=Math.PI/180,pc=180/Math.PI;function Qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function hv(n,e){return(n%e+e)%e}function Na(n,e,t){return(1-t)*n+t*e}function Es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],x=r[0],p=r[3],d=r[6],T=r[1],b=r[4],E=r[7],A=r[2],R=r[5],C=r[8];return s[0]=o*x+a*T+l*A,s[3]=o*p+a*b+l*R,s[6]=o*d+a*E+l*C,s[1]=c*x+u*T+f*A,s[4]=c*p+u*b+f*R,s[7]=c*d+u*E+f*C,s[2]=h*x+m*T+g*A,s[5]=h*p+m*b+g*R,s[8]=h*d+m*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new tt;function bh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pv(){const n=Jo("canvas");return n.style.display="block",n}const Yu={};function Ps(n){n in Yu||(Yu[n]=!0,console.warn(n))}function mv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function gv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(n.r=mi(n.r),n.g=mi(n.g),n.b=mi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(n.r=ts(n.r),n.g=ts(n.g),n.b=ts(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Fi?ga:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const $u=[.64,.33,.3,.6,.15,.06],qu=[.2126,.7152,.0722],Ku=[.3127,.329],ju=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[ds]:{primaries:$u,whitePoint:Ku,transfer:ga,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:qu,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:$u,whitePoint:Ku,transfer:mt,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:qu,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let Pr;class _v{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=Jo("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xv=0;class Th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_v.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mv=0;class en extends hs{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=pr,r=pr,s=Et,o=mr,a=Dn,l=xi,c=en.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Qs(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=dh;en.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(m+1)/2,A=(d+1)/2,R=(u+h)/4,C=(f+x)/4,N=(g+p)/4;return b>E&&b>A?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=C/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=N/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-x)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sv extends hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Th(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends Sv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wh extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yv extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==h||c!==m||u!==g){let p=1-a;const d=l*h+c*m+u*g+f*x,T=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const A=Math.sqrt(b),R=Math.atan2(A,d*T);p=Math.sin(p*R)/A,a=Math.sin(a*R)/A}const E=a*T;if(l=l*p+h*E,c=c*p+m*E,u=u*p+g*E,f=f*p+x*E,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,i=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new ae,Ju=new eo;class to{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),fo.subVectors(this.max,bs),Dr.subVectors(e.a,bs),Lr.subVectors(e.b,bs),Ir.subVectors(e.c,bs),Ai.subVectors(Lr,Dr),Ci.subVectors(Ir,Lr),tr.subVectors(Dr,Ir);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-tr.z,tr.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,tr.z,0,-tr.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-tr.y,tr.x,0];return!ka(t,Dr,Lr,Ir,fo)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Dr,Lr,Ir,fo))?!1:(ho.crossVectors(Ai,Ci),t=[ho.x,ho.y,ho.z],ka(t,Dr,Lr,Ir,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],wn=new ae,uo=new to,Dr=new ae,Lr=new ae,Ir=new ae,Ai=new ae,Ci=new ae,tr=new ae,bs=new ae,fo=new ae,ho=new ae,nr=new ae;function ka(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){nr.fromArray(n,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ev=new to,Ts=new ae,za=new ae;class Hc{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ev.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(za)),this.expandByPoint(Ts.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new ae,Ha=new ae,po=new ae,Ri=new ae,Va=new ae,mo=new ae,Ga=new ae;class bv{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ha.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=Ri.dot(this.direction),l=-Ri.dot(po),c=Ri.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ha).addScaledVector(po,h),m}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,r,s){Va.subVectors(t,e),mo.subVectors(i,e),Ga.crossVectors(Va,mo);let o=this.direction.dot(Ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(mo.crossVectors(Ri,mo));if(l<0)return null;const c=a*this.direction.dot(Va.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(Ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,m,g,x,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,x,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,x=c*f;t[0]=h+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,wv)}lookAt(e,t,i){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Pi.crossVectors(i,un),Pi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Pi.crossVectors(i,un)),Pi.normalize(),go.crossVectors(un,Pi),r[0]=Pi.x,r[4]=go.x,r[8]=un.x,r[1]=Pi.y,r[5]=go.y,r[9]=un.y,r[2]=Pi.z,r[6]=go.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],x=i[6],p=i[10],d=i[14],T=i[3],b=i[7],E=i[11],A=i[15],R=r[0],C=r[4],N=r[8],M=r[12],S=r[1],I=r[5],B=r[9],H=r[13],q=r[2],J=r[6],Y=r[10],j=r[14],z=r[3],le=r[7],ee=r[11],ge=r[15];return s[0]=o*R+a*S+l*q+c*z,s[4]=o*C+a*I+l*J+c*le,s[8]=o*N+a*B+l*Y+c*ee,s[12]=o*M+a*H+l*j+c*ge,s[1]=u*R+f*S+h*q+m*z,s[5]=u*C+f*I+h*J+m*le,s[9]=u*N+f*B+h*Y+m*ee,s[13]=u*M+f*H+h*j+m*ge,s[2]=g*R+x*S+p*q+d*z,s[6]=g*C+x*I+p*J+d*le,s[10]=g*N+x*B+p*Y+d*ee,s[14]=g*M+x*H+p*j+d*ge,s[3]=T*R+b*S+E*q+A*z,s[7]=T*C+b*I+E*J+A*le,s[11]=T*N+b*B+E*Y+A*ee,s[15]=T*M+b*H+E*j+A*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],x=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],x=e[13],p=e[14],d=e[15],T=f*p*c-x*h*c+x*l*m-a*p*m-f*l*d+a*h*d,b=g*h*c-u*p*c-g*l*m+o*p*m+u*l*d-o*h*d,E=u*x*c-g*f*c+g*a*m-o*x*m-u*a*d+o*f*d,A=g*f*l-u*x*l-g*a*h+o*x*h+u*a*p-o*f*p,R=t*T+i*b+r*E+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=T*C,e[1]=(x*h*s-f*p*s-x*r*m+i*p*m+f*r*d-i*h*d)*C,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*C,e[4]=b*C,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*d+t*h*d)*C,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*d-t*l*d)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*C,e[8]=E*C,e[9]=(g*f*s-u*x*s-g*i*m+t*x*m+u*i*d-t*f*d)*C,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*d+t*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*C,e[12]=A*C,e[13]=(u*x*r-g*f*r+g*i*h-t*x*h-u*i*p+t*f*p)*C,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*p-t*a*p)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,x=o*u,p=o*f,d=a*f,T=l*c,b=l*u,E=l*f,A=i.x,R=i.y,C=i.z;return r[0]=(1-(x+d))*A,r[1]=(m+E)*A,r[2]=(g-b)*A,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(h+d))*R,r[6]=(p+T)*R,r[7]=0,r[8]=(g+b)*C,r[9]=(p-T)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const c=1/s,u=1/o,f=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=hi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,g;if(a===hi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Zo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=hi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,m=(i+r)*u;let g,x;if(a===hi)g=(o+s)*f,x=-2*f;else if(a===Zo)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ur=new ae,An=new Rt,Tv=new ae(0,0,0),wv=new ae(1,1,1),Pi=new ae,go=new ae,un=new ae,Qu=new Rt,ef=new eo;class Mi{constructor(e=0,t=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Av=0;const tf=new ae,Nr=new eo,ni=new Rt,vo=new ae,ws=new ae,Cv=new ae,Rv=new eo,nf=new ae(1,0,0),rf=new ae(0,1,0),sf=new ae(0,0,1),of={type:"added"},Pv={type:"removed"},Fr={type:"childadded",child:null},Wa={type:"childremoved",child:null};class mn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new ae,t=new Mi,i=new eo,r=new ae(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new tt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ws,vo,this.up):ni.lookAt(vo,ws,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(ni),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(of),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pv),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(of),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new ae(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new ae,ii=new ae,Xa=new ae,ri=new ae,Or=new ae,Br=new ae,af=new ae,Ya=new ae,$a=new ae,qa=new ae,Ka=new wt,ja=new wt,Za=new wt;class Pn{constructor(e=new ae,t=new ae,i=new ae){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Cn.subVectors(e,t),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Cn.subVectors(r,t),ii.subVectors(i,t),Xa.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(ii),l=Cn.dot(Xa),c=ii.dot(ii),u=ii.dot(Xa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ka.setScalar(0),ja.setScalar(0),Za.setScalar(0),Ka.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,i),Za.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ka,s.x),o.addScaledVector(ja,s.y),o.addScaledVector(Za,s.z),o}static isFrontFacing(e,t,i,r){return Cn.subVectors(i,t),ii.subVectors(e,t),Cn.cross(ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Cn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),Br.subVectors(s,i),Ya.subVectors(e,i);const l=Or.dot(Ya),c=Br.dot(Ya);if(l<=0&&c<=0)return t.copy(i);$a.subVectors(e,r);const u=Or.dot($a),f=Br.dot($a);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Or,o);qa.subVectors(e,s);const m=Or.dot(qa),g=Br.dot(qa);if(g>=0&&m<=g)return t.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Br,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return af.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(af,a);const d=1/(p+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(Or,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=hv(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ja(o,s,e+1/3),this.g=Ja(o,s,e),this.b=Ja(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const i=Ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return ot.fromWorkingColorSpace(zt.copy(this),e),Math.round(an(zt.r*255,0,255))*65536+Math.round(an(zt.g*255,0,255))*256+Math.round(an(zt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Mn){ot.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(_o);const i=Na(Di.h,_o.h,t),r=Na(Di.s,_o.s,t),s=Na(Di.l,_o.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new dt;dt.NAMES=Ch;let Dv=0;class va extends hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Qs(),this.name="",this.blending=Qr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rh extends va{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new ae,xo=new gt;class qn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wu&&(e.usage=this.usage),e}}class Ph extends qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dh extends qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xr extends qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lv=0;const xn=new Rt,Qa=new mn,kr=new ae,fn=new to,As=new to,Ft=new ae;class Tr extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bh(e)?Dh:Ph)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xr(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(fn.min,As.min),fn.expandByPoint(Ft),Ft.addVectors(fn.max,As.max),fn.expandByPoint(Ft)):(fn.expandByPoint(As.min),fn.expandByPoint(As.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),Ft.add(kr)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new ae,l[N]=new ae;const c=new ae,u=new ae,f=new ae,h=new gt,m=new gt,g=new gt,x=new ae,p=new ae;function d(N,M,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),m.sub(h),g.sub(h);const I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(I),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(I),a[N].add(x),a[M].add(x),a[S].add(x),l[N].add(p),l[M].add(p),l[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,M=T.length;N<M;++N){const S=T[N],I=S.start,B=S.count;for(let H=I,q=I+B;H<q;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new ae,E=new ae,A=new ae,R=new ae;function C(N){A.fromBufferAttribute(r,N),R.copy(A);const M=a[N];b.copy(M),b.sub(A.multiplyScalar(A.dot(M))).normalize(),E.crossVectors(R,M);const I=E.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,I)}for(let N=0,M=T.length;N<M;++N){const S=T[N],I=S.start,B=S.count;for(let H=I,q=I+B;H<q;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new ae,s=new ae,o=new ae,a=new ae,l=new ae,c=new ae,u=new ae,f=new ae;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new qn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lf=new Rt,ir=new bv,Mo=new Hc,cf=new ae,So=new ae,yo=new ae,Eo=new ae,el=new ae,bo=new ae,uf=new ae,To=new ae;class pn extends mn{constructor(e=new Tr,t=new Rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(el.fromBufferAttribute(f,e),o?bo.addScaledVector(el,u):bo.addScaledVector(el.sub(t),u))}t.add(bo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(Mo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Mo,cf)===null||ir.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(s).invert(),ir.copy(e.ray).applyMatrix4(lf),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],d=o[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,A=b;E<A;E+=3){const R=a.getX(E),C=a.getX(E+1),N=a.getX(E+2);r=wo(this,d,e,i,c,u,f,R,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){const T=a.getX(p),b=a.getX(p+1),E=a.getX(p+2);r=wo(this,o,e,i,c,u,f,T,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],d=o[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,A=b;E<A;E+=3){const R=E,C=E+1,N=E+2;r=wo(this,d,e,i,c,u,f,R,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){const T=p,b=p+1,E=p+2;r=wo(this,o,e,i,c,u,f,T,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Iv(n,e,t,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:n}}function wo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,So),n.getVertexPosition(l,yo),n.getVertexPosition(c,Eo);const u=Iv(n,e,t,i,So,yo,Eo,uf);if(u){const f=new ae;Pn.getBarycoord(uf,So,yo,Eo,f),r&&(u.uv=Pn.getInterpolatedAttribute(r,a,l,c,f,new gt)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,a,l,c,f,new gt)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,l,c,f,new ae),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new ae,materialIndex:0};Pn.getNormal(So,yo,Eo,h.normal),u.face=h,u.barycoord=f}return u}class no extends Tr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xr(c,3)),this.setAttribute("normal",new xr(u,3)),this.setAttribute("uv",new xr(f,2));function g(x,p,d,T,b,E,A,R,C,N,M){const S=E/C,I=A/N,B=E/2,H=A/2,q=R/2,J=C+1,Y=N+1;let j=0,z=0;const le=new ae;for(let ee=0;ee<Y;ee++){const ge=ee*I-H;for(let Te=0;Te<J;Te++){const We=Te*S-B;le[x]=We*T,le[p]=ge*b,le[d]=q,c.push(le.x,le.y,le.z),le[x]=0,le[p]=0,le[d]=R>0?1:-1,u.push(le.x,le.y,le.z),f.push(Te/C),f.push(1-ee/N),j+=1}}for(let ee=0;ee<N;ee++)for(let ge=0;ge<C;ge++){const Te=h+ge+J*ee,We=h+ge+J*(ee+1),oe=h+(ge+1)+J*(ee+1),me=h+(ge+1)+J*ee;l.push(Te,We,me),l.push(We,oe,me),z+=6}a.addGroup(m,z,M),m+=z,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=cs(n[t]);for(const r in i)e[r]=i[r]}return e}function Uv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Nv={clone:cs,merge:qt};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends va{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=Uv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ih extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new ae,ff=new gt,df=new gt;class Rn extends Ih{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,ff,df),t.subVectors(df,ff)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Hr=1;class Bv extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(zr,Hr,e,t);r.layers=this.layers,this.add(r);const s=new Rn(zr,Hr,e,t);s.layers=this.layers,this.add(s);const o=new Rn(zr,Hr,e,t);o.layers=this.layers,this.add(o);const a=new Rn(zr,Hr,e,t);a.layers=this.layers,this.add(a);const l=new Rn(zr,Hr,e,t);l.layers=this.layers,this.add(l);const c=new Rn(zr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Uh extends en{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kv extends Er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new no(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ki});s.uniforms.tEquirect.value=t;const o=new pn(r,s),a=t.minFilter;return t.minFilter===mr&&(t.minFilter=Et),new Bv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const tl=new ae,zv=new ae,Hv=new tt;class lr{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=tl.subVectors(i,t).cross(zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hv.getNormalMatrix(e),r=this.coplanarPoint(tl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Hc,Ao=new ae;class Nh{constructor(e=new lr,t=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],g=r[9],x=r[10],p=r[11],d=r[12],T=r[13],b=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,p-m,E-d).normalize(),i[1].setComponents(l+s,h+c,p+m,E+d).normalize(),i[2].setComponents(l+o,h+u,p+g,E+T).normalize(),i[3].setComponents(l-o,h-u,p-g,E-T).normalize(),i[4].setComponents(l-a,h-f,p-x,E-b).normalize(),t===hi)i[5].setComponents(l+a,h+f,p+x,E+b).normalize();else if(t===Zo)i[5].setComponents(a,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const x=f[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class $i extends Tr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],x=[],p=[];for(let d=0;d<u;d++){const T=d*h-o;for(let b=0;b<c;b++){const E=b*f-s;g.push(E,-T,0),x.push(0,0,1),p.push(b/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const b=T+c*d,E=T+c*(d+1),A=T+1+c*(d+1),R=T+1+c*d;m.push(b,E,R),m.push(E,A,R)}this.setIndex(m),this.setAttribute("position",new xr(g,3)),this.setAttribute("normal",new xr(x,3)),this.setAttribute("uv",new xr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gv=`#ifdef USE_ALPHAHASH
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
}`,D_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
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
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
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
}`,nt={alphahash_fragment:Gv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:Yv,alphatest_fragment:$v,alphatest_pars_fragment:qv,aomap_fragment:Kv,aomap_pars_fragment:jv,batching_pars_vertex:Zv,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:e_,bsdfs:t_,iridescence_fragment:n_,bumpmap_pars_fragment:i_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:a_,color_fragment:l_,color_pars_fragment:c_,color_pars_vertex:u_,color_vertex:f_,common:d_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:g_,emissivemap_fragment:v_,emissivemap_pars_fragment:__,colorspace_fragment:x_,colorspace_pars_fragment:M_,envmap_fragment:S_,envmap_common_pars_fragment:y_,envmap_pars_fragment:E_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:N_,envmap_vertex:T_,fog_vertex:w_,fog_pars_vertex:A_,fog_fragment:C_,fog_pars_fragment:R_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:D_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:I_,lights_pars_begin:U_,lights_toon_fragment:F_,lights_toon_pars_fragment:O_,lights_phong_fragment:B_,lights_phong_pars_fragment:k_,lights_physical_fragment:z_,lights_physical_pars_fragment:H_,lights_fragment_begin:V_,lights_fragment_maps:G_,lights_fragment_end:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:q_,map_fragment:K_,map_pars_fragment:j_,map_particle_fragment:Z_,map_particle_pars_fragment:J_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:e0,morphinstance_vertex:t0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:r0,morphtarget_vertex:s0,normal_fragment_begin:o0,normal_fragment_maps:a0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:u0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:v0,premultiplied_alpha_fragment:_0,project_vertex:x0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:T0,shadowmap_vertex:w0,shadowmask_pars_fragment:A0,skinbase_vertex:C0,skinning_pars_vertex:R0,skinning_vertex:P0,skinnormal_vertex:D0,specularmap_fragment:L0,specularmap_pars_fragment:I0,tonemapping_fragment:U0,tonemapping_pars_fragment:N0,transmission_fragment:F0,transmission_pars_fragment:O0,uv_pars_fragment:B0,uv_pars_vertex:k0,uv_vertex:z0,worldpos_vertex:H0,background_vert:V0,background_frag:G0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:Y0,cube_frag:$0,depth_vert:q0,depth_frag:K0,distanceRGBA_vert:j0,distanceRGBA_frag:Z0,equirect_vert:J0,equirect_frag:Q0,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:rx,meshlambert_frag:sx,meshmatcap_vert:ox,meshmatcap_frag:ax,meshnormal_vert:lx,meshnormal_frag:cx,meshphong_vert:ux,meshphong_frag:fx,meshphysical_vert:dx,meshphysical_frag:hx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:vx,shadow_vert:_x,shadow_frag:xx,sprite_vert:Mx,sprite_frag:Sx},Re={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Wn={basic:{uniforms:qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:qt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:qt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:qt([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:qt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:qt([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:qt([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:qt([Re.common,Re.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:qt([Re.lights,Re.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Wn.physical={uniforms:qt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Co={r:0,b:0,g:0},sr=new Mi,yx=new Rt;function Ex(n,e,t,i,r,s,o){const a=new dt(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function x(T){let b=!1;const E=g(T);E===null?d(a,l):E&&E.isColor&&(d(E,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,b){const E=g(b);E&&(E.isCubeTexture||E.mapping===ma)?(u===void 0&&(u=new pn(new no(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:cs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),sr.copy(b.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(sr)),u.material.toneMapped=ot.getTransfer(E.colorSpace)!==mt,(f!==E||h!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,m=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new pn(new $i(2,2),new bn({name:"BackgroundMaterial",uniforms:cs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ot.getTransfer(E.colorSpace)!==mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,b){T.getRGB(Co,Lh(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:x,addToRenderList:p}}function bx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,I,B,H,q){let J=!1;const Y=f(H,B,I);s!==Y&&(s=Y,c(s.object)),J=m(S,H,B,q),J&&g(S,H,B,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,E(S,I,B,H),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,I,B){const H=B.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let J=q[I.id];J===void 0&&(J={},q[I.id]=J);let Y=J[H];return Y===void 0&&(Y=h(l()),J[H]=Y),Y}function h(S){const I=[],B=[],H=[];for(let q=0;q<t;q++)I[q]=0,B[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:H,object:S,attributes:{},index:null}}function m(S,I,B,H){const q=s.attributes,J=I.attributes;let Y=0;const j=B.getAttributes();for(const z in j)if(j[z].location>=0){const ee=q[z];let ge=J[z];if(ge===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ee===void 0||ee.attribute!==ge||ge&&ee.data!==ge.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function g(S,I,B,H){const q={},J=I.attributes;let Y=0;const j=B.getAttributes();for(const z in j)if(j[z].location>=0){let ee=J[z];ee===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));const ge={};ge.attribute=ee,ee&&ee.data&&(ge.data=ee.data),q[z]=ge,Y++}s.attributes=q,s.attributesNum=Y,s.index=H}function x(){const S=s.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function p(S){d(S,0)}function d(S,I){const B=s.newAttributes,H=s.enabledAttributes,q=s.attributeDivisors;B[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),q[S]!==I&&(n.vertexAttribDivisor(S,I),q[S]=I)}function T(){const S=s.newAttributes,I=s.enabledAttributes;for(let B=0,H=I.length;B<H;B++)I[B]!==S[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function b(S,I,B,H,q,J,Y){Y===!0?n.vertexAttribIPointer(S,I,B,q,J):n.vertexAttribPointer(S,I,B,H,q,J)}function E(S,I,B,H){x();const q=H.attributes,J=B.getAttributes(),Y=I.defaultAttributeValues;for(const j in J){const z=J[j];if(z.location>=0){let le=q[j];if(le===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const ee=le.normalized,ge=le.itemSize,Te=e.get(le);if(Te===void 0)continue;const We=Te.buffer,oe=Te.type,me=Te.bytesPerElement,Me=oe===n.INT||oe===n.UNSIGNED_INT||le.gpuType===Nc;if(le.isInterleavedBufferAttribute){const ve=le.data,fe=ve.stride,_e=le.offset;if(ve.isInstancedInterleavedBuffer){for(let Le=0;Le<z.locationSize;Le++)d(z.location+Le,ve.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Le=0;Le<z.locationSize;Le++)p(z.location+Le);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Le=0;Le<z.locationSize;Le++)b(z.location+Le,ge/z.locationSize,oe,ee,fe*me,(_e+ge/z.locationSize*Le)*me,Me)}else{if(le.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)d(z.location+ve,le.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<z.locationSize;ve++)p(z.location+ve);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ve=0;ve<z.locationSize;ve++)b(z.location+ve,ge/z.locationSize,oe,ee,ge*me,ge/z.locationSize*ve*me,Me)}}else if(Y!==void 0){const ee=Y[j];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(z.location,ee);break;case 3:n.vertexAttrib3fv(z.location,ee);break;case 4:n.vertexAttrib4fv(z.location,ee);break;default:n.vertexAttrib1fv(z.location,ee)}}}}T()}function A(){N();for(const S in i){const I=i[S];for(const B in I){const H=I[B];for(const q in H)u(H[q].object),delete H[q];delete I[B]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const B in I){const H=I[B];for(const q in H)u(H[q].object),delete H[q];delete I[B]}delete i[S.id]}function C(S){for(const I in i){const B=i[I];if(B[S.id]===void 0)continue;const H=B[S.id];for(const q in H)u(H[q].object),delete H[q];delete B[S.id]}}function N(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function Tx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*h[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Dn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==xi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==di&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:A,maxSamples:R}}function Ax(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new lr,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const T=s?0:i,b=T*4;let E=d.clippingState||null;l.value=E,E=u(g,h,b,m);for(let A=0;A!==b;++A)E[A]=t[A];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const d=m+x*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,E=m;b!==x;++b,E+=4)o.copy(f[b]).applyMatrix4(T,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Cx(n){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=ss:a===kl&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class io extends Ih{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,hf=[.125,.215,.35,.446,.526,.582],hr=20,nl=new io,pf=new dt;let il=null,rl=0,sl=0,ol=!1;const cr=(1+Math.sqrt(5))/2,Vr=1/cr,mf=[new ae(-cr,Vr,0),new ae(cr,Vr,0),new ae(-Vr,0,cr),new ae(Vr,0,cr),new ae(0,cr,-Vr),new ae(0,cr,Vr),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)];class gf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,rl,sl),this._renderer.xr.enabled=ol,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Js,format:Dn,colorSpace:ds,depthBuffer:!1},r=vf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rx(s)),this._blurMaterial=Px(s,e,t)}return r}_compileMaterial(e){const t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,r){const a=new Rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(pf),u.toneMapping=zi,u.autoClear=!1;const m=new Rh({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new pn(new no,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(pf),x=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const b=this._cubeSize;Ro(r,T*b,d>2?b:0,b,b),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ro(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mf[(r-s-1)%mf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hr-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):hr;p>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const d=[];let T=0;for(let C=0;C<hr;++C){const N=C/x,M=Math.exp(-N*N/2);d.push(M),C===0?T+=M:C<p&&(T+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const E=this._sizeLods[r],A=3*E*(r>b-Xr?r-b+Xr:0),R=4*(this._cubeSize-E);Ro(t,A,R,3*E,2*E),l.setRenderTarget(t),l.render(f,nl)}}function Rx(n){const e=[],t=[],i=[];let r=n;const s=n-Xr+1+hf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Xr?l=hf[o-n+Xr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,x=3,p=2,d=1,T=new Float32Array(x*g*m),b=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,N=R>2?0:-1,M=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];T.set(M,x*g*R),b.set(h,p*g*R);const S=[R,R,R,R,R,R];E.set(S,d*g*R)}const A=new Tr;A.setAttribute("position",new qn(T,x)),A.setAttribute("uv",new qn(b,p)),A.setAttribute("faceIndex",new qn(E,d)),e.push(A),r>Xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vf(n,e,t){const i=new Er(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Px(n,e,t){const i=new Float32Array(hr),r=new ae(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

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
	`}function Dx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bl||l===kl,u=l===ss||l===os;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new gf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new gf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Lx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ps("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ix(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const x=m[g];for(let p=0,d=x.length;p<d;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let b=0,E=T.length;b<E;b+=3){const A=T[b+0],R=T[b+1],C=T[b+2];h.push(A,R,R,C,C,A)}}else if(g!==void 0){const T=g.array;x=g.version;for(let b=0,E=T.length/3-1;b<E;b+=3){const A=b+0,R=b+1,C=b+2;h.push(A,R,R,C,C,A)}}else return;const p=new(bh(h)?Dh:Ph)(h,1);p.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ux(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function c(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,h*o,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}function f(h,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,g);let d=0;for(let T=0;T<g;T++)d+=m[T]*x[T];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Nx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Fx(n,e,t){const i=new WeakMap,r=new wt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let A=a.attributes.position.count*E,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*f),N=new wh(C,A,R,f);N.type=di,N.needsUpdate=!0;const M=E*4;for(let I=0;I<f;I++){const B=d[I],H=T[I],q=b[I],J=A*R*4*I;for(let Y=0;Y<B.count;Y++){const j=Y*M;g===!0&&(r.fromBufferAttribute(B,Y),C[J+j+0]=r.x,C[J+j+1]=r.y,C[J+j+2]=r.z,C[J+j+3]=0),x===!0&&(r.fromBufferAttribute(H,Y),C[J+j+4]=r.x,C[J+j+5]=r.y,C[J+j+6]=r.z,C[J+j+7]=0),p===!0&&(r.fromBufferAttribute(q,Y),C[J+j+8]=r.x,C[J+j+9]=r.y,C[J+j+10]=r.z,C[J+j+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new gt(A,R)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ox(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Oh extends en{constructor(e,t,i,r,s,o,a,l,c,u=es){if(u!==es&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===es&&(i=yr),i===void 0&&u===ls&&(i=as),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bh=new en,Mf=new Oh(1,1),kh=new wh,zh=new yv,Hh=new Uh,Sf=[],yf=[],Ef=new Float32Array(16),bf=new Float32Array(9),Tf=new Float32Array(4);function ps(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sf[r];if(s===void 0&&(s=new Float32Array(r),Sf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Tf.set(i),n.uniformMatrix2fv(this.addr,!1,Tf),Ut(t,i)}}function Gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;bf.set(i),n.uniformMatrix3fv(this.addr,!1,bf),Ut(t,i)}}function Wx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;Ef.set(i),n.uniformMatrix4fv(this.addr,!1,Ef),Ut(t,i)}}function Xx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mf.compareFunction=Eh,s=Mf):s=Bh,t.setTexture2D(e||s,r)}function eM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zh,r)}function tM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hh,r)}function nM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kh,r)}function iM(n){switch(n){case 5126:return Bx;case 35664:return kx;case 35665:return zx;case 35666:return Hx;case 35674:return Vx;case 35675:return Gx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return Yx;case 35668:case 35672:return $x;case 35669:case 35673:return qx;case 5125:return Kx;case 36294:return jx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function rM(n,e){n.uniform1fv(this.addr,e)}function sM(n,e){const t=ps(e,this.size,2);n.uniform2fv(this.addr,t)}function oM(n,e){const t=ps(e,this.size,3);n.uniform3fv(this.addr,t)}function aM(n,e){const t=ps(e,this.size,4);n.uniform4fv(this.addr,t)}function lM(n,e){const t=ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cM(n,e){const t=ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uM(n,e){const t=ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fM(n,e){n.uniform1iv(this.addr,e)}function dM(n,e){n.uniform2iv(this.addr,e)}function hM(n,e){n.uniform3iv(this.addr,e)}function pM(n,e){n.uniform4iv(this.addr,e)}function mM(n,e){n.uniform1uiv(this.addr,e)}function gM(n,e){n.uniform2uiv(this.addr,e)}function vM(n,e){n.uniform3uiv(this.addr,e)}function _M(n,e){n.uniform4uiv(this.addr,e)}function xM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bh,s[o])}function MM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zh,s[o])}function SM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hh,s[o])}function yM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kh,s[o])}function EM(n){switch(n){case 5126:return rM;case 35664:return sM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return fM;case 35667:case 35671:return dM;case 35668:case 35672:return hM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return yM}}class bM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iM(t.type)}}class TM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EM(t.type)}}class wM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const al=/(\w+)(\])?(\[|\.)?/g;function wf(n,e){n.seq.push(e),n.map[e.id]=e}function AM(n,e,t){const i=n.name,r=i.length;for(al.lastIndex=0;;){const s=al.exec(i),o=al.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wf(t,c===void 0?new bM(a,n,e):new TM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new wM(a),wf(t,f)),t=f}}}class Vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);AM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Af(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const CM=37297;let RM=0;function PM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Cf=new tt;function DM(n){ot._getMatrix(Cf,ot.workingColorSpace,n);const e=`mat3( ${Cf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+PM(n.getShaderSource(e),o)}else return r}function LM(n,e){const t=DM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function IM(n,e){let t;switch(e){case qg:t="Linear";break;case Kg:t="Reinhard";break;case jg:t="Cineon";break;case Zg:t="ACESFilmic";break;case Qg:t="AgX";break;case ev:t="Neutral";break;case Jg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new ae;function UM(){ot.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function FM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ds(n){return n!==""}function Pf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(BM,zM)}const kM=new Map;function zM(n,e){let t=nt[e];if(t===void 0){const i=kM.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(n){return n.replace(HM,VM)}function VM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function If(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function GM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ag?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function WM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function YM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fh:e="ENVMAP_BLENDING_MULTIPLY";break;case Yg:e="ENVMAP_BLENDING_MIX";break;case $g:e="ENVMAP_BLENDING_ADD";break}return e}function $M(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=GM(t),c=WM(t),u=XM(t),f=YM(t),h=$M(t),m=NM(t),g=FM(s),x=r.createProgram();let p,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),d.length>0&&(d+=`
`)):(p=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),d=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?nt.tonemapping_pars_fragment:"",t.toneMapping!==zi?IM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,LM("linearToOutputTexel",t.outputColorSpace),UM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=mc(o),o=Pf(o,t),o=Df(o,t),a=mc(a),a=Pf(a,t),a=Df(a,t),o=Lf(o),a=Lf(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=T+p+o,E=T+d+a,A=Af(r,r.VERTEX_SHADER,b),R=Af(r,r.FRAGMENT_SHADER,E);r.attachShader(x,A),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(I){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(R).trim();let J=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,R);else{const j=Rf(r,A,"vertex"),z=Rf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+j+`
`+z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||q==="")&&(Y=!1);Y&&(I.diagnostics={runnable:J,programLog:B,vertexShader:{log:H,prefix:p},fragmentShader:{log:q,prefix:d}})}r.deleteShader(A),r.deleteShader(R),N=new Vo(r,x),M=OM(r,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,CM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let KM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZM(e),t.set(e,i)),i}}class ZM{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}}function JM(n,e,t,i,r,s,o){const a=new Ah,l=new jM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,I,B,H){const q=B.fog,J=H.geometry,Y=M.isMeshStandardMaterial?B.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),z=j&&j.mapping===ma?j.image.height:null,le=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ee=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ge=ee!==void 0?ee.length:0;let Te=0;J.morphAttributes.position!==void 0&&(Te=1),J.morphAttributes.normal!==void 0&&(Te=2),J.morphAttributes.color!==void 0&&(Te=3);let We,oe,me,Me;if(le){const st=Wn[le];We=st.vertexShader,oe=st.fragmentShader}else We=M.vertexShader,oe=M.fragmentShader,l.update(M),me=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const ve=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),_e=H.isInstancedMesh===!0,Le=H.isBatchedMesh===!0,Ke=!!M.map,D=!!M.matcap,O=!!j,w=!!M.aoMap,de=!!M.lightMap,ne=!!M.bumpMap,se=!!M.normalMap,P=!!M.displacementMap,L=!!M.emissiveMap,F=!!M.metalnessMap,_=!!M.roughnessMap,v=M.anisotropy>0,U=M.clearcoat>0,V=M.dispersion>0,X=M.iridescence>0,Z=M.sheen>0,he=M.transmission>0,k=v&&!!M.anisotropyMap,ie=U&&!!M.clearcoatMap,Se=U&&!!M.clearcoatNormalMap,ue=U&&!!M.clearcoatRoughnessMap,ye=X&&!!M.iridescenceMap,Ne=X&&!!M.iridescenceThicknessMap,ke=Z&&!!M.sheenColorMap,be=Z&&!!M.sheenRoughnessMap,Xe=!!M.specularMap,Ge=!!M.specularColorMap,rt=!!M.specularIntensityMap,W=he&&!!M.transmissionMap,Ce=he&&!!M.thicknessMap,ce=!!M.gradientMap,pe=!!M.alphaMap,Ie=M.alphaTest>0,Pe=!!M.alphaHash,Ze=!!M.extensions;let pt=zi;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(pt=n.toneMapping);const bt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:oe,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Le,batchingColor:Le&&H._colorsTexture!==null,instancing:_e,instancingColor:_e&&H.instanceColor!==null,instancingMorph:_e&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ds,alphaToCoverage:!!M.alphaToCoverage,map:Ke,matcap:D,envMap:O,envMapMode:O&&j.mapping,envMapCubeUVHeight:z,aoMap:w,lightMap:de,bumpMap:ne,normalMap:se,displacementMap:h&&P,emissiveMap:L,normalMapObjectSpace:se&&M.normalMapType===sv,normalMapTangentSpace:se&&M.normalMapType===rv,metalnessMap:F,roughnessMap:_,anisotropy:v,anisotropyMap:k,clearcoat:U,clearcoatMap:ie,clearcoatNormalMap:Se,clearcoatRoughnessMap:ue,dispersion:V,iridescence:X,iridescenceMap:ye,iridescenceThicknessMap:Ne,sheen:Z,sheenColorMap:ke,sheenRoughnessMap:be,specularMap:Xe,specularColorMap:Ge,specularIntensityMap:rt,transmission:he,transmissionMap:W,thicknessMap:Ce,gradientMap:ce,opaque:M.transparent===!1&&M.blending===Qr&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ie,alphaHash:Pe,combine:M.combine,mapUv:Ke&&x(M.map.channel),aoMapUv:w&&x(M.aoMap.channel),lightMapUv:de&&x(M.lightMap.channel),bumpMapUv:ne&&x(M.bumpMap.channel),normalMapUv:se&&x(M.normalMap.channel),displacementMapUv:P&&x(M.displacementMap.channel),emissiveMapUv:L&&x(M.emissiveMap.channel),metalnessMapUv:F&&x(M.metalnessMap.channel),roughnessMapUv:_&&x(M.roughnessMap.channel),anisotropyMapUv:k&&x(M.anisotropyMap.channel),clearcoatMapUv:ie&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(M.sheenRoughnessMap.channel),specularMapUv:Xe&&x(M.specularMap.channel),specularColorMapUv:Ge&&x(M.specularColorMap.channel),specularIntensityMapUv:rt&&x(M.specularIntensityMap.channel),transmissionMapUv:W&&x(M.transmissionMap.channel),thicknessMapUv:Ce&&x(M.thicknessMap.channel),alphaMapUv:pe&&x(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(se||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Ke||pe),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:fe,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:Ke&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:L&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fi,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ze&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&M.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(T(S,M),b(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function b(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){const S=g[M.type];let I;if(S){const B=Wn[S];I=Nv.clone(B.uniforms)}else I=M.uniforms;return I}function A(M,S){let I;for(let B=0,H=u.length;B<H;B++){const q=u[B];if(q.cacheKey===S){I=q,++I.usedTimes;break}}return I===void 0&&(I=new qM(n,S,M,s),u.push(I)),I}function R(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function C(M){l.remove(M)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:N}}function QM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function eS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,g,x,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function a(f,h,m,g,x,p){const d=o(f,h,m,g,x,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,g,x,p){const d=o(f,h,m,g,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||eS),i.length>1&&i.sort(h||Uf),r.length>1&&r.sort(h||Uf)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function tS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Nf,n.set(i,[o])):r>=s.length?(o=new Nf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new dt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function iS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rS=0;function sS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oS(n){const e=new nS,t=iS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ae);const r=new ae,s=new Rt,o=new Rt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,x=0,p=0,d=0,T=0,b=0,E=0,A=0,R=0,C=0;c.sort(sS);for(let M=0,S=c.length;M<S;M++){const I=c[M],B=I.color,H=I.intensity,q=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*H,f+=B.g*H,h+=B.b*H;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],H);C++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,z=t.get(I);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(B).multiplyScalar(H),Y.distance=q,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[x]=Y;const j=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,j.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[x]=j.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=J,E++}x++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(B).multiplyScalar(H),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=Y,p++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const j=I.shadow,z=t.get(I);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(H),Y.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[d]=Y,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==d||N.numDirectionalShadows!==T||N.numPointShadows!==b||N.numSpotShadows!==E||N.numSpotMaps!==A||N.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,N.directionalLength=m,N.pointLength=g,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=d,N.numDirectionalShadows=T,N.numPointShadows=b,N.numSpotShadows=E,N.numSpotMaps=A,N.numLightProbes=C,i.version=rS++)}function l(c,u){let f=0,h=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const b=c[d];if(b.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(b.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Ff(n){const e=new oS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function aS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ff(n),e.set(r,[a])):s>=o.length?(a=new Ff(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class lS extends va{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cS extends va{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uS=`void main() {
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
}`;function dS(n,e,t){let i=new Nh;const r=new gt,s=new gt,o=new wt,a=new lS({depthPacking:iv}),l=new cS,c={},u=t.maxTextureSize,f={[Vi]:ln,[ln]:Vi,[fi]:fi},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:uS,fragmentShader:fS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Tr;g.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let d=this.type;this.render=function(R,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ki),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=d!==si&&this.type===si,q=d===si&&this.type!==si;for(let J=0,Y=R.length;J<Y;J++){const j=R[J],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const le=z.getFrameExtents();if(r.multiply(le),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,z.mapSize.y=s.y)),z.map===null||H===!0||q===!0){const ge=this.type!==si?{minFilter:Un,magFilter:Un}:{};z.map!==null&&z.map.dispose(),z.map=new Er(r.x,r.y,ge),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ee=z.getViewportCount();for(let ge=0;ge<ee;ge++){const Te=z.getViewport(ge);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),B.viewport(o),z.updateMatrices(j,ge),i=z.getFrustum(),E(C,N,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===si&&T(z,N),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(M,S,I)};function T(R,C){const N=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Er(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,N,h,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,N,m,x,null)}function b(R,C,N,M){let S=null;const I=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=S.uuid,H=C.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let J=q[H];J===void 0&&(J=S.clone(),q[H]=J,C.addEventListener("dispose",A)),S=J}if(S.visible=C.visible,S.wireframe=C.wireframe,M===si?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=N}return S}function E(R,C,N,M,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===si)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const H=e.update(R),q=R.material;if(Array.isArray(q)){const J=H.groups;for(let Y=0,j=J.length;Y<j;Y++){const z=J[Y],le=q[z.materialIndex];if(le&&le.visible){const ee=b(R,le,M,S);R.onBeforeShadow(n,R,C,N,H,ee,z),n.renderBufferDirect(N,null,H,ee,R,z),R.onAfterShadow(n,R,C,N,H,ee,z)}}}else if(q.visible){const J=b(R,q,M,S);R.onBeforeShadow(n,R,C,N,H,J,null),n.renderBufferDirect(N,null,H,J,R,null),R.onAfterShadow(n,R,C,N,H,J,null)}}const B=R.children;for(let H=0,q=B.length;H<q;H++)E(B[H],C,N,M,S)}function A(R){R.target.removeEventListener("dispose",A);for(const N in c){const M=c[N],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const hS={[Dl]:Ll,[Il]:Fl,[Ul]:Ol,[rs]:Nl,[Ll]:Dl,[Fl]:Il,[Ol]:Ul,[Nl]:rs};function pS(n,e){function t(){let W=!1;const Ce=new wt;let ce=null;const pe=new wt(0,0,0,0);return{setMask:function(Ie){ce!==Ie&&!W&&(n.colorMask(Ie,Ie,Ie,Ie),ce=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,Pe,Ze,pt,bt){bt===!0&&(Ie*=pt,Pe*=pt,Ze*=pt),Ce.set(Ie,Pe,Ze,pt),pe.equals(Ce)===!1&&(n.clearColor(Ie,Pe,Ze,pt),pe.copy(Ce))},reset:function(){W=!1,ce=null,pe.set(-1,0,0,0)}}}function i(){let W=!1,Ce=!1,ce=null,pe=null,Ie=null;return{setReversed:function(Pe){if(Ce!==Pe){const Ze=e.get("EXT_clip_control");Ce?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const pt=Ie;Ie=null,this.setClear(pt)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?ve(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(Pe){ce!==Pe&&!W&&(n.depthMask(Pe),ce=Pe)},setFunc:function(Pe){if(Ce&&(Pe=hS[Pe]),pe!==Pe){switch(Pe){case Dl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case rs:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){Ie!==Pe&&(Ce&&(Pe=1-Pe),n.clearDepth(Pe),Ie=Pe)},reset:function(){W=!1,ce=null,pe=null,Ie=null,Ce=!1}}}function r(){let W=!1,Ce=null,ce=null,pe=null,Ie=null,Pe=null,Ze=null,pt=null,bt=null;return{setTest:function(st){W||(st?ve(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(st){Ce!==st&&!W&&(n.stencilMask(st),Ce=st)},setFunc:function(st,Nt,gn){(ce!==st||pe!==Nt||Ie!==gn)&&(n.stencilFunc(st,Nt,gn),ce=st,pe=Nt,Ie=gn)},setOp:function(st,Nt,gn){(Pe!==st||Ze!==Nt||pt!==gn)&&(n.stencilOp(st,Nt,gn),Pe=st,Ze=Nt,pt=gn)},setLocked:function(st){W=st},setClear:function(st){bt!==st&&(n.clearStencil(st),bt=st)},reset:function(){W=!1,Ce=null,ce=null,pe=null,Ie=null,Pe=null,Ze=null,pt=null,bt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],g=null,x=!1,p=null,d=null,T=null,b=null,E=null,A=null,R=null,C=new dt(0,0,0),N=0,M=!1,S=null,I=null,B=null,H=null,q=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=j>=2);let le=null,ee={};const ge=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),We=new wt().fromArray(ge),oe=new wt().fromArray(Te);function me(W,Ce,ce,pe){const Ie=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(W,Pe),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ce;Ze++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Ce+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return Pe}const Me={};Me[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(rs),ne(!1),se(ku),ve(n.CULL_FACE),w(ki);function ve(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function fe(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function _e(W,Ce){return f[W]!==Ce?(n.bindFramebuffer(W,Ce),f[W]=Ce,W===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ce),W===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Le(W,Ce){let ce=m,pe=!1;if(W){ce=h.get(Ce),ce===void 0&&(ce=[],h.set(Ce,ce));const Ie=W.textures;if(ce.length!==Ie.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,Ze=Ie.length;Pe<Ze;Pe++)ce[Pe]=n.COLOR_ATTACHMENT0+Pe;ce.length=Ie.length,pe=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ce)}function Ke(W){return g!==W?(n.useProgram(W),g=W,!0):!1}const D={[dr]:n.FUNC_ADD,[Rg]:n.FUNC_SUBTRACT,[Pg]:n.FUNC_REVERSE_SUBTRACT};D[Dg]=n.MIN,D[Lg]=n.MAX;const O={[Ig]:n.ZERO,[Ug]:n.ONE,[Ng]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[Hg]:n.SRC_ALPHA_SATURATE,[kg]:n.DST_COLOR,[Og]:n.DST_ALPHA,[Fg]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[zg]:n.ONE_MINUS_DST_COLOR,[Bg]:n.ONE_MINUS_DST_ALPHA,[Vg]:n.CONSTANT_COLOR,[Gg]:n.ONE_MINUS_CONSTANT_COLOR,[Wg]:n.CONSTANT_ALPHA,[Xg]:n.ONE_MINUS_CONSTANT_ALPHA};function w(W,Ce,ce,pe,Ie,Pe,Ze,pt,bt,st){if(W===ki){x===!0&&(fe(n.BLEND),x=!1);return}if(x===!1&&(ve(n.BLEND),x=!0),W!==Cg){if(W!==p||st!==M){if((d!==dr||E!==dr)&&(n.blendEquation(n.FUNC_ADD),d=dr,E=dr),st)switch(W){case Qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.ONE,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}T=null,b=null,A=null,R=null,C.set(0,0,0),N=0,p=W,M=st}return}Ie=Ie||Ce,Pe=Pe||ce,Ze=Ze||pe,(Ce!==d||Ie!==E)&&(n.blendEquationSeparate(D[Ce],D[Ie]),d=Ce,E=Ie),(ce!==T||pe!==b||Pe!==A||Ze!==R)&&(n.blendFuncSeparate(O[ce],O[pe],O[Pe],O[Ze]),T=ce,b=pe,A=Pe,R=Ze),(pt.equals(C)===!1||bt!==N)&&(n.blendColor(pt.r,pt.g,pt.b,bt),C.copy(pt),N=bt),p=W,M=!1}function de(W,Ce){W.side===fi?fe(n.CULL_FACE):ve(n.CULL_FACE);let ce=W.side===ln;Ce&&(ce=!ce),ne(ce),W.blending===Qr&&W.transparent===!1?w(ki):w(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const pe=W.stencilWrite;a.setTest(pe),pe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),L(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){S!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),S=W)}function se(W){W!==Tg?(ve(n.CULL_FACE),W!==I&&(W===ku?n.cullFace(n.BACK):W===wg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),I=W}function P(W){W!==B&&(Y&&n.lineWidth(W),B=W)}function L(W,Ce,ce){W?(ve(n.POLYGON_OFFSET_FILL),(H!==Ce||q!==ce)&&(n.polygonOffset(Ce,ce),H=Ce,q=ce)):fe(n.POLYGON_OFFSET_FILL)}function F(W){W?ve(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function _(W){W===void 0&&(W=n.TEXTURE0+J-1),le!==W&&(n.activeTexture(W),le=W)}function v(W,Ce,ce){ce===void 0&&(le===null?ce=n.TEXTURE0+J-1:ce=le);let pe=ee[ce];pe===void 0&&(pe={type:void 0,texture:void 0},ee[ce]=pe),(pe.type!==W||pe.texture!==Ce)&&(le!==ce&&(n.activeTexture(ce),le=ce),n.bindTexture(W,Ce||Me[W]),pe.type=W,pe.texture=Ce)}function U(){const W=ee[le];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function k(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(W){We.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),We.copy(W))}function be(W){oe.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),oe.copy(W))}function Xe(W,Ce){let ce=c.get(Ce);ce===void 0&&(ce=new WeakMap,c.set(Ce,ce));let pe=ce.get(W);pe===void 0&&(pe=n.getUniformBlockIndex(Ce,W.name),ce.set(W,pe))}function Ge(W,Ce){const pe=c.get(Ce).get(W);l.get(Ce)!==pe&&(n.uniformBlockBinding(Ce,pe,W.__bindingPointIndex),l.set(Ce,pe))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,ee={},f={},h=new WeakMap,m=[],g=null,x=!1,p=null,d=null,T=null,b=null,E=null,A=null,R=null,C=new dt(0,0,0),N=0,M=!1,S=null,I=null,B=null,H=null,q=null,We.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:fe,bindFramebuffer:_e,drawBuffers:Le,useProgram:Ke,setBlending:w,setMaterial:de,setFlipSided:ne,setCullFace:se,setLineWidth:P,setPolygonOffset:L,setScissorTest:F,activeTexture:_,bindTexture:v,unbindTexture:U,compressedTexImage2D:V,compressedTexImage3D:X,texImage2D:ye,texImage3D:Ne,updateUBOMapping:Xe,uniformBlockBinding:Ge,texStorage2D:Se,texStorage3D:ue,texSubImage2D:Z,texSubImage3D:he,compressedTexSubImage2D:k,compressedTexSubImage3D:ie,scissor:ke,viewport:be,reset:rt}}function Of(n,e,t,i){const r=mS(i);switch(t){case gh:return n*e;case _h:return n*e;case xh:return n*e*2;case Mh:return n*e/r.components*r.byteLength;case Bc:return n*e/r.components*r.byteLength;case Sh:return n*e*2/r.components*r.byteLength;case kc:return n*e*2/r.components*r.byteLength;case vh:return n*e*3/r.components*r.byteLength;case Dn:return n*e*4/r.components*r.byteLength;case zc:return n*e*4/r.components*r.byteLength;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case Yl:case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ho:case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yh:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mS(n){switch(n){case xi:case hh:return{byteLength:1,components:1};case qs:case ph:case Js:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case yr:case Nc:case di:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(_,v){return m?new OffscreenCanvas(_,v):Jo("canvas")}function x(_,v,U){let V=1;const X=F(_);if((X.width>U||X.height>U)&&(V=U/Math.max(X.width,X.height)),V<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const Z=Math.floor(V*X.width),he=Math.floor(V*X.height);f===void 0&&(f=g(Z,he));const k=v?g(Z,he):f;return k.width=Z,k.height=he,k.getContext("2d").drawImage(_,0,0,Z,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Z+"x"+he+")."),k}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),_;return _}function p(_){return _.generateMipmaps}function d(_){n.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?n.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(_,v,U,V,X=!1){if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let Z=v;if(v===n.RED&&(U===n.FLOAT&&(Z=n.R32F),U===n.HALF_FLOAT&&(Z=n.R16F),U===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.R8UI),U===n.UNSIGNED_SHORT&&(Z=n.R16UI),U===n.UNSIGNED_INT&&(Z=n.R32UI),U===n.BYTE&&(Z=n.R8I),U===n.SHORT&&(Z=n.R16I),U===n.INT&&(Z=n.R32I)),v===n.RG&&(U===n.FLOAT&&(Z=n.RG32F),U===n.HALF_FLOAT&&(Z=n.RG16F),U===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RG8UI),U===n.UNSIGNED_SHORT&&(Z=n.RG16UI),U===n.UNSIGNED_INT&&(Z=n.RG32UI),U===n.BYTE&&(Z=n.RG8I),U===n.SHORT&&(Z=n.RG16I),U===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),U===n.UNSIGNED_INT&&(Z=n.RGB32UI),U===n.BYTE&&(Z=n.RGB8I),U===n.SHORT&&(Z=n.RGB16I),U===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),U===n.UNSIGNED_INT&&(Z=n.RGBA32UI),U===n.BYTE&&(Z=n.RGBA8I),U===n.SHORT&&(Z=n.RGBA16I),U===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),v===n.RGBA){const he=X?ga:ot.getTransfer(V);U===n.FLOAT&&(Z=n.RGBA32F),U===n.HALF_FLOAT&&(Z=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Z=he===mt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(_,v){let U;return _?v===null||v===yr||v===as?U=n.DEPTH24_STENCIL8:v===di?U=n.DEPTH32F_STENCIL8:v===qs&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yr||v===as?U=n.DEPTH_COMPONENT24:v===di?U=n.DEPTH_COMPONENT32F:v===qs&&(U=n.DEPTH_COMPONENT16),U}function A(_,v){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==Un&&_.minFilter!==Et?Math.log2(Math.max(v.width,v.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?v.mipmaps.length:1}function R(_){const v=_.target;v.removeEventListener("dispose",R),N(v),v.isVideoTexture&&u.delete(v)}function C(_){const v=_.target;v.removeEventListener("dispose",C),S(v)}function N(_){const v=i.get(_);if(v.__webglInit===void 0)return;const U=_.source,V=h.get(U);if(V){const X=V[v.__cacheKey];X.usedTimes--,X.usedTimes===0&&M(_),Object.keys(V).length===0&&h.delete(U)}i.remove(_)}function M(_){const v=i.get(_);n.deleteTexture(v.__webglTexture);const U=_.source,V=h.get(U);delete V[v.__cacheKey],o.memory.textures--}function S(_){const v=i.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),i.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let X=0;X<v.__webglFramebuffer[V].length;X++)n.deleteFramebuffer(v.__webglFramebuffer[V][X]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=_.textures;for(let V=0,X=U.length;V<X;V++){const Z=i.get(U[V]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(U[V])}i.remove(_)}let I=0;function B(){I=0}function H(){const _=I;return _>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),I+=1,_}function q(_){const v=[];return v.push(_.wrapS),v.push(_.wrapT),v.push(_.wrapR||0),v.push(_.magFilter),v.push(_.minFilter),v.push(_.anisotropy),v.push(_.internalFormat),v.push(_.format),v.push(_.type),v.push(_.generateMipmaps),v.push(_.premultiplyAlpha),v.push(_.flipY),v.push(_.unpackAlignment),v.push(_.colorSpace),v.join()}function J(_,v){const U=i.get(_);if(_.isVideoTexture&&P(_),_.isRenderTargetTexture===!1&&_.version>0&&U.__version!==_.version){const V=_.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(U,_,v);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function Y(_,v){const U=i.get(_);if(_.version>0&&U.__version!==_.version){oe(U,_,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function j(_,v){const U=i.get(_);if(_.version>0&&U.__version!==_.version){oe(U,_,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function z(_,v){const U=i.get(_);if(_.version>0&&U.__version!==_.version){me(U,_,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const le={[zl]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},ee={[Un]:n.NEAREST,[tv]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[Et]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[mr]:n.LINEAR_MIPMAP_LINEAR},ge={[ov]:n.NEVER,[dv]:n.ALWAYS,[av]:n.LESS,[Eh]:n.LEQUAL,[lv]:n.EQUAL,[fv]:n.GEQUAL,[cv]:n.GREATER,[uv]:n.NOTEQUAL};function Te(_,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Et||v.magFilter===Ia||v.magFilter===co||v.magFilter===mr||v.minFilter===Et||v.minFilter===Ia||v.minFilter===co||v.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,le[v.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,le[v.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,le[v.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,ee[v.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,ee[v.minFilter]),v.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Un||v.minFilter!==co&&v.minFilter!==mr||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function We(_,v){let U=!1;_.__webglInit===void 0&&(_.__webglInit=!0,v.addEventListener("dispose",R));const V=v.source;let X=h.get(V);X===void 0&&(X={},h.set(V,X));const Z=q(v);if(Z!==_.__cacheKey){X[Z]===void 0&&(X[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),X[Z].usedTimes++;const he=X[_.__cacheKey];he!==void 0&&(X[_.__cacheKey].usedTimes--,he.usedTimes===0&&M(v)),_.__cacheKey=Z,_.__webglTexture=X[Z].texture}return U}function oe(_,v,U){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const X=We(_,v),Z=v.source;t.bindTexture(V,_.__webglTexture,n.TEXTURE0+U);const he=i.get(Z);if(Z.version!==he.__version||X===!0){t.activeTexture(n.TEXTURE0+U);const k=ot.getPrimaries(ot.workingColorSpace),ie=v.colorSpace===Fi?null:ot.getPrimaries(v.colorSpace),Se=v.colorSpace===Fi||k===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ue=x(v.image,!1,r.maxTextureSize);ue=L(v,ue);const ye=s.convert(v.format,v.colorSpace),Ne=s.convert(v.type);let ke=b(v.internalFormat,ye,Ne,v.colorSpace,v.isVideoTexture);Te(V,v);let be;const Xe=v.mipmaps,Ge=v.isVideoTexture!==!0,rt=he.__version===void 0||X===!0,W=Z.dataReady,Ce=A(v,ue);if(v.isDepthTexture)ke=E(v.format===ls,v.type),rt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,ke,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,ke,ue.width,ue.height,0,ye,Ne,null));else if(v.isDataTexture)if(Xe.length>0){Ge&&rt&&t.texStorage2D(n.TEXTURE_2D,Ce,ke,Xe[0].width,Xe[0].height);for(let ce=0,pe=Xe.length;ce<pe;ce++)be=Xe[ce],Ge?W&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,be.width,be.height,ye,Ne,be.data):t.texImage2D(n.TEXTURE_2D,ce,ke,be.width,be.height,0,ye,Ne,be.data);v.generateMipmaps=!1}else Ge?(rt&&t.texStorage2D(n.TEXTURE_2D,Ce,ke,ue.width,ue.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ye,Ne,ue.data)):t.texImage2D(n.TEXTURE_2D,0,ke,ue.width,ue.height,0,ye,Ne,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ge&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,ke,Xe[0].width,Xe[0].height,ue.depth);for(let ce=0,pe=Xe.length;ce<pe;ce++)if(be=Xe[ce],v.format!==Dn)if(ye!==null)if(Ge){if(W)if(v.layerUpdates.size>0){const Ie=Of(be.width,be.height,v.format,v.type);for(const Pe of v.layerUpdates){const Ze=be.data.subarray(Pe*Ie/be.data.BYTES_PER_ELEMENT,(Pe+1)*Ie/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Pe,be.width,be.height,1,ye,Ze)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ue.depth,ye,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ke,be.width,be.height,ue.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ue.depth,ye,Ne,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ke,be.width,be.height,ue.depth,0,ye,Ne,be.data)}else{Ge&&rt&&t.texStorage2D(n.TEXTURE_2D,Ce,ke,Xe[0].width,Xe[0].height);for(let ce=0,pe=Xe.length;ce<pe;ce++)be=Xe[ce],v.format!==Dn?ye!==null?Ge?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,be.width,be.height,ye,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?W&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,be.width,be.height,ye,Ne,be.data):t.texImage2D(n.TEXTURE_2D,ce,ke,be.width,be.height,0,ye,Ne,be.data)}else if(v.isDataArrayTexture)if(Ge){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,ke,ue.width,ue.height,ue.depth),W)if(v.layerUpdates.size>0){const ce=Of(ue.width,ue.height,v.format,v.type);for(const pe of v.layerUpdates){const Ie=ue.data.subarray(pe*ce/ue.data.BYTES_PER_ELEMENT,(pe+1)*ce/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,ue.width,ue.height,1,ye,Ne,Ie)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ye,Ne,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,ue.width,ue.height,ue.depth,0,ye,Ne,ue.data);else if(v.isData3DTexture)Ge?(rt&&t.texStorage3D(n.TEXTURE_3D,Ce,ke,ue.width,ue.height,ue.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ye,Ne,ue.data)):t.texImage3D(n.TEXTURE_3D,0,ke,ue.width,ue.height,ue.depth,0,ye,Ne,ue.data);else if(v.isFramebufferTexture){if(rt)if(Ge)t.texStorage2D(n.TEXTURE_2D,Ce,ke,ue.width,ue.height);else{let ce=ue.width,pe=ue.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,ke,ce,pe,0,ye,Ne,null),ce>>=1,pe>>=1}}else if(Xe.length>0){if(Ge&&rt){const ce=F(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ce,ke,ce.width,ce.height)}for(let ce=0,pe=Xe.length;ce<pe;ce++)be=Xe[ce],Ge?W&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ye,Ne,be):t.texImage2D(n.TEXTURE_2D,ce,ke,ye,Ne,be);v.generateMipmaps=!1}else if(Ge){if(rt){const ce=F(ue);t.texStorage2D(n.TEXTURE_2D,Ce,ke,ce.width,ce.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ne,ue)}else t.texImage2D(n.TEXTURE_2D,0,ke,ye,Ne,ue);p(v)&&d(V),he.__version=Z.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function me(_,v,U){if(v.image.length!==6)return;const V=We(_,v),X=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+U);const Z=i.get(X);if(X.version!==Z.__version||V===!0){t.activeTexture(n.TEXTURE0+U);const he=ot.getPrimaries(ot.workingColorSpace),k=v.colorSpace===Fi?null:ot.getPrimaries(v.colorSpace),ie=v.colorSpace===Fi||he===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let pe=0;pe<6;pe++)!Se&&!ue?ye[pe]=x(v.image[pe],!0,r.maxCubemapSize):ye[pe]=ue?v.image[pe].image:v.image[pe],ye[pe]=L(v,ye[pe]);const Ne=ye[0],ke=s.convert(v.format,v.colorSpace),be=s.convert(v.type),Xe=b(v.internalFormat,ke,be,v.colorSpace),Ge=v.isVideoTexture!==!0,rt=Z.__version===void 0||V===!0,W=X.dataReady;let Ce=A(v,Ne);Te(n.TEXTURE_CUBE_MAP,v);let ce;if(Se){Ge&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Xe,Ne.width,Ne.height);for(let pe=0;pe<6;pe++){ce=ye[pe].mipmaps;for(let Ie=0;Ie<ce.length;Ie++){const Pe=ce[Ie];v.format!==Dn?ke!==null?Ge?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,0,0,Pe.width,Pe.height,ke,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,Xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,0,0,Pe.width,Pe.height,ke,be,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,Xe,Pe.width,Pe.height,0,ke,be,Pe.data)}}}else{if(ce=v.mipmaps,Ge&&rt){ce.length>0&&Ce++;const pe=F(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Xe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ue){Ge?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ye[pe].width,ye[pe].height,ke,be,ye[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Xe,ye[pe].width,ye[pe].height,0,ke,be,ye[pe].data);for(let Ie=0;Ie<ce.length;Ie++){const Ze=ce[Ie].image[pe].image;Ge?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,0,0,Ze.width,Ze.height,ke,be,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,Xe,Ze.width,Ze.height,0,ke,be,Ze.data)}}else{Ge?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke,be,ye[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Xe,ke,be,ye[pe]);for(let Ie=0;Ie<ce.length;Ie++){const Pe=ce[Ie];Ge?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,0,0,ke,be,Pe.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,Xe,ke,be,Pe.image[pe])}}}p(v)&&d(n.TEXTURE_CUBE_MAP),Z.__version=X.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function Me(_,v,U,V,X,Z){const he=s.convert(U.format,U.colorSpace),k=s.convert(U.type),ie=b(U.internalFormat,he,k,U.colorSpace),Se=i.get(v),ue=i.get(U);if(ue.__renderTarget=v,!Se.__hasExternalTextures){const ye=Math.max(1,v.width>>Z),Ne=Math.max(1,v.height>>Z);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,Z,ie,ye,Ne,v.depth,0,he,k,null):t.texImage2D(X,Z,ie,ye,Ne,0,he,k,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),se(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,X,ue.__webglTexture,0,ne(v)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,X,ue.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(_,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,_),v.depthBuffer){const V=v.depthTexture,X=V&&V.isDepthTexture?V.type:null,Z=E(v.stencilBuffer,X),he=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=ne(v);se(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,Z,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,k,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,_)}else{const V=v.textures;for(let X=0;X<V.length;X++){const Z=V[X],he=s.convert(Z.format,Z.colorSpace),k=s.convert(Z.type),ie=b(Z.internalFormat,he,k,Z.colorSpace),Se=ne(v);U&&se(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ie,v.width,v.height):se(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ie,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ie,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(_,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const X=V.__webglTexture,Z=ne(v);if(v.depthTexture.format===es)se(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(v.depthTexture.format===ls)se(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function _e(_){const v=i.get(_),U=_.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==_.depthTexture){const V=_.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const X=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",X)};V.addEventListener("dispose",X),v.__depthDisposeCallback=X}v.__boundDepthTexture=V}if(_.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");fe(v.__webglFramebuffer,_)}else if(U){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),ve(v.__webglDepthbuffer[V],_,!1);else{const X=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ve(v.__webglDepthbuffer,_,!1);else{const V=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,X)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(_,v,U){const V=i.get(_);v!==void 0&&Me(V.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&_e(_)}function Ke(_){const v=_.texture,U=i.get(_),V=i.get(v);_.addEventListener("dispose",C);const X=_.textures,Z=_.isWebGLCubeRenderTarget===!0,he=X.length>1;if(he||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),Z){U.__webglFramebuffer=[];for(let k=0;k<6;k++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[k]=[];for(let ie=0;ie<v.mipmaps.length;ie++)U.__webglFramebuffer[k][ie]=n.createFramebuffer()}else U.__webglFramebuffer[k]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let k=0;k<v.mipmaps.length;k++)U.__webglFramebuffer[k]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(he)for(let k=0,ie=X.length;k<ie;k++){const Se=i.get(X[k]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(_.samples>0&&se(_)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let k=0;k<X.length;k++){const ie=X[k];U.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[k]);const Se=s.convert(ie.format,ie.colorSpace),ue=s.convert(ie.type),ye=b(ie.internalFormat,Se,ue,ie.colorSpace,_.isXRRenderTarget===!0),Ne=ne(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ye,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,U.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(U.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Te(n.TEXTURE_CUBE_MAP,v);for(let k=0;k<6;k++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Me(U.__webglFramebuffer[k][ie],_,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ie);else Me(U.__webglFramebuffer[k],_,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);p(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let k=0,ie=X.length;k<ie;k++){const Se=X[k],ue=i.get(Se);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Te(n.TEXTURE_2D,Se),Me(U.__webglFramebuffer,_,Se,n.COLOR_ATTACHMENT0+k,n.TEXTURE_2D,0),p(Se)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let k=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(k=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(k,V.__webglTexture),Te(k,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Me(U.__webglFramebuffer[ie],_,v,n.COLOR_ATTACHMENT0,k,ie);else Me(U.__webglFramebuffer,_,v,n.COLOR_ATTACHMENT0,k,0);p(v)&&d(k),t.unbindTexture()}_.depthBuffer&&_e(_)}function D(_){const v=_.textures;for(let U=0,V=v.length;U<V;U++){const X=v[U];if(p(X)){const Z=T(_),he=i.get(X).__webglTexture;t.bindTexture(Z,he),d(Z),t.unbindTexture()}}}const O=[],w=[];function de(_){if(_.samples>0){if(se(_)===!1){const v=_.textures,U=_.width,V=_.height;let X=n.COLOR_BUFFER_BIT;const Z=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(_),k=v.length>1;if(k)for(let ie=0;ie<v.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ie=0;ie<v.length;ie++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),k){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ie]);const Se=i.get(v[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,U,V,0,0,U,V,X,n.NEAREST),l===!0&&(O.length=0,w.length=0,O.push(n.COLOR_ATTACHMENT0+ie),_.depthBuffer&&_.resolveDepthBuffer===!1&&(O.push(Z),w.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let ie=0;ie<v.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,he.__webglColorRenderbuffer[ie]);const Se=i.get(v[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const v=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ne(_){return Math.min(r.maxSamples,_.samples)}function se(_){const v=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function P(_){const v=o.render.frame;u.get(_)!==v&&(u.set(_,v),_.update())}function L(_,v){const U=_.colorSpace,V=_.format,X=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||U!==ds&&U!==Fi&&(ot.getTransfer(U)===mt?(V!==Dn||X!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function F(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=Le,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=se}function vS(n,e){function t(i,r=Fi){let s;const o=ot.getTransfer(r);if(i===xi)return n.UNSIGNED_BYTE;if(i===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hh)return n.BYTE;if(i===ph)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===yr)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===Js)return n.HALF_FLOAT;if(i===gh)return n.ALPHA;if(i===vh)return n.RGB;if(i===Dn)return n.RGBA;if(i===_h)return n.LUMINANCE;if(i===xh)return n.LUMINANCE_ALPHA;if(i===es)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===Mh)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Sh)return n.RG;if(i===kc)return n.RG_INTEGER;if(i===zc)return n.RGBA_INTEGER;if(i===Oo||i===Bo||i===ko||i===zo)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yl||i===$l||i===ql)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yl||i===$l)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ql)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kl||i===jl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===cc||i===uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ho)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===fc||i===dc||i===hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ho)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class _S extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Do extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const MS=`
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

}`;class yS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:MS,fragmentShader:SS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ES extends hs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const x=new yS,p=t.getContextAttributes();let d=null,T=null;const b=[],E=[],A=new gt;let R=null;const C=new Rn;C.viewport=new wt;const N=new Rn;N.viewport=new wt;const M=[C,N],S=new _S;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let me=b[oe];return me===void 0&&(me=new ll,b[oe]=me),me.getTargetRaySpace()},this.getControllerGrip=function(oe){let me=b[oe];return me===void 0&&(me=new ll,b[oe]=me),me.getGripSpace()},this.getHand=function(oe){let me=b[oe];return me===void 0&&(me=new ll,b[oe]=me),me.getHandSpace()};function H(oe){const me=E.indexOf(oe.inputSource);if(me===-1)return;const Me=b[me];Me!==void 0&&(Me.update(oe.inputSource,oe.frame,c||o),Me.dispatchEvent({type:oe.type,data:oe.inputSource}))}function q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",J);for(let oe=0;oe<b.length;oe++){const me=E[oe];me!==null&&(E[oe]=null,b[oe].disconnect(me))}I=null,B=null,x.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,T=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",q),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Er(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let me=null,Me=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=p.stencil?ls:es,Me=p.stencil?as:yr);const fe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Er(h.textureWidth,h.textureHeight,{format:Dn,type:xi,depthTexture:new Oh(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(oe){for(let me=0;me<oe.removed.length;me++){const Me=oe.removed[me],ve=E.indexOf(Me);ve>=0&&(E[ve]=null,b[ve].disconnect(Me))}for(let me=0;me<oe.added.length;me++){const Me=oe.added[me];let ve=E.indexOf(Me);if(ve===-1){for(let _e=0;_e<b.length;_e++)if(_e>=E.length){E.push(Me),ve=_e;break}else if(E[_e]===null){E[_e]=Me,ve=_e;break}if(ve===-1)break}const fe=b[ve];fe&&fe.connect(Me)}}const Y=new ae,j=new ae;function z(oe,me,Me){Y.setFromMatrixPosition(me.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);const ve=Y.distanceTo(j),fe=me.projectionMatrix.elements,_e=Me.projectionMatrix.elements,Le=fe[14]/(fe[10]-1),Ke=fe[14]/(fe[10]+1),D=(fe[9]+1)/fe[5],O=(fe[9]-1)/fe[5],w=(fe[8]-1)/fe[0],de=(_e[8]+1)/_e[0],ne=Le*w,se=Le*de,P=ve/(-w+de),L=P*-w;if(me.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(L),oe.translateZ(P),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),fe[10]===-1)oe.projectionMatrix.copy(me.projectionMatrix),oe.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const F=Le+P,_=Ke+P,v=ne-L,U=se+(ve-L),V=D*Ke/_*F,X=O*Ke/_*F;oe.projectionMatrix.makePerspective(v,U,V,X,F,_),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function le(oe,me){me===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(me.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let me=oe.near,Me=oe.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),S.near=N.near=C.near=me,S.far=N.far=C.far=Me,(I!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,B=S.far),C.layers.mask=oe.layers.mask|2,N.layers.mask=oe.layers.mask|4,S.layers.mask=C.layers.mask|N.layers.mask;const ve=oe.parent,fe=S.cameras;le(S,ve);for(let _e=0;_e<fe.length;_e++)le(fe[_e],ve);fe.length===2?z(S,C,N):S.projectionMatrix.copy(C.projectionMatrix),ee(oe,S,ve)};function ee(oe,me,Me){Me===null?oe.matrix.copy(me.matrixWorld):(oe.matrix.copy(Me.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(me.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(me.projectionMatrix),oe.projectionMatrixInverse.copy(me.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=pc*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(oe){l=oe,h!==null&&(h.fixedFoveation=oe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ge=null;function Te(oe,me){if(u=me.getViewerPose(c||o),g=me,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ve=!1;Me.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let _e=0;_e<Me.length;_e++){const Le=Me[_e];let Ke=null;if(m!==null)Ke=m.getViewport(Le);else{const O=f.getViewSubImage(h,Le);Ke=O.viewport,_e===0&&(e.setRenderTargetTextures(T,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(T))}let D=M[_e];D===void 0&&(D=new Rn,D.layers.enable(_e),D.viewport=new wt,M[_e]=D),D.matrix.fromArray(Le.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Le.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),_e===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(D)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const _e=f.getDepthInformation(Me[0]);_e&&_e.isValid&&_e.texture&&x.init(e,_e,r.renderState)}}for(let Me=0;Me<b.length;Me++){const ve=E[Me],fe=b[Me];ve!==null&&fe!==void 0&&fe.update(ve,me,c||o)}ge&&ge(oe,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}const We=new Fh;We.setAnimationLoop(Te),this.setAnimationLoop=function(oe){ge=oe},this.dispose=function(){}}}const or=new Mi,bS=new Rt;function TS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Lh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,T,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,T,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ln&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ln&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const T=e.get(d),b=T.envMap,E=T.envMapRotation;b&&(p.envMap.value=b,or.copy(E),or.x*=-1,or.y*=-1,or.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),p.envMapRotation.value.setFromMatrix4(bS.makeRotationFromEuler(or)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const E=b.program;i.uniformBlockBinding(T,E)}function c(T,b){let E=r[T.id];E===void 0&&(g(T),E=u(T),r[T.id]=E,T.addEventListener("dispose",p));const A=b.program;i.updateUBOMapping(T,A);const R=e.render.frame;s[T.id]!==R&&(h(T),s[T.id]=R)}function u(T){const b=f();T.__bindingPointIndex=b;const E=n.createBuffer(),A=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const b=r[T.id],E=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,C=E.length;R<C;R++){const N=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,S=N.length;M<S;M++){const I=N[M];if(m(I,R,M,A)===!0){const B=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let J=0;J<H.length;J++){const Y=H[J],j=x(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,B+q,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,b,E,A){const R=T.value,C=b+"_"+E;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const N=A[C];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[C]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(T){const b=T.uniforms;let E=0;const A=16;for(let C=0,N=b.length;C<N;C++){const M=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,I=M.length;S<I;S++){const B=M[S],H=Array.isArray(B.value)?B.value:[B.value];for(let q=0,J=H.length;q<J;q++){const Y=H[q],j=x(Y),z=E%A,le=z%j.boundary,ee=z+le;E+=le,ee!==0&&A-ee<j.storage&&(E+=A-ee),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=j.storage}}}const R=E%A;return R>0&&(E+=A-R),T.__size=E,T.__cache={},this}function x(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function p(T){const b=T.target;b.removeEventListener("dispose",p);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class xa{constructor(e={}){const{canvas:t=pv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,d=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=zi,this.toneMappingExposure=1;const E=this;let A=!1,R=0,C=0,N=null,M=-1,S=null;const I=new wt,B=new wt;let H=null;const q=new dt(0);let J=0,Y=t.width,j=t.height,z=1,le=null,ee=null;const ge=new wt(0,0,Y,j),Te=new wt(0,0,Y,j);let We=!1;const oe=new Nh;let me=!1,Me=!1;const ve=new Rt,fe=new Rt,_e=new ae,Le=new wt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function O(){return N===null?z:1}let w=i;function de(y,G){return t.getContext(y,G)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),w===null){const G="webgl2";if(w=de(G,y),w===null)throw de(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ne,se,P,L,F,_,v,U,V,X,Z,he,k,ie,Se,ue,ye,Ne,ke,be,Xe,Ge,rt,W;function Ce(){ne=new Lx(w),ne.init(),Ge=new vS(w,ne),se=new wx(w,ne,e,Ge),P=new pS(w,ne),se.reverseDepthBuffer&&h&&P.buffers.depth.setReversed(!0),L=new Nx(w),F=new QM,_=new gS(w,ne,P,F,se,Ge,L),v=new Cx(E),U=new Dx(E),V=new Vv(w),rt=new bx(w,V),X=new Ix(w,V,L,rt),Z=new Ox(w,X,V,L),ke=new Fx(w,se,_),ue=new Ax(F),he=new JM(E,v,U,ne,se,rt,ue),k=new TS(E,F),ie=new tS,Se=new aS(ne),Ne=new Ex(E,v,U,P,Z,m,l),ye=new dS(E,Z,se),W=new wS(w,L,se,P),be=new Tx(w,ne,L),Xe=new Ux(w,ne,L),L.programs=he.programs,E.capabilities=se,E.extensions=ne,E.properties=F,E.renderLists=ie,E.shadowMap=ye,E.state=P,E.info=L}Ce();const ce=new ES(E,w);this.xr=ce,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(Y,j,!1))},this.getSize=function(y){return y.set(Y,j)},this.setSize=function(y,G,Q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,j=G,t.width=Math.floor(y*z),t.height=Math.floor(G*z),Q===!0&&(t.style.width=y+"px",t.style.height=G+"px"),this.setViewport(0,0,y,G)},this.getDrawingBufferSize=function(y){return y.set(Y*z,j*z).floor()},this.setDrawingBufferSize=function(y,G,Q){Y=y,j=G,z=Q,t.width=Math.floor(y*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,y,G)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(ge)},this.setViewport=function(y,G,Q,te){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,G,Q,te),P.viewport(I.copy(ge).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(Te)},this.setScissor=function(y,G,Q,te){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,G,Q,te),P.scissor(B.copy(Te).multiplyScalar(z).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(y){P.setScissorTest(We=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){ee=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(y=!0,G=!0,Q=!0){let te=0;if(y){let K=!1;if(N!==null){const Ee=N.texture.format;K=Ee===zc||Ee===kc||Ee===Bc}if(K){const Ee=N.texture.type,Ae=Ee===xi||Ee===yr||Ee===qs||Ee===as||Ee===Fc||Ee===Oc,Oe=Ne.getClearColor(),He=Ne.getClearAlpha(),je=Oe.r,et=Oe.g,Ve=Oe.b;Ae?(g[0]=je,g[1]=et,g[2]=Ve,g[3]=He,w.clearBufferuiv(w.COLOR,0,g)):(x[0]=je,x[1]=et,x[2]=Ve,x[3]=He,w.clearBufferiv(w.COLOR,0,x))}else te|=w.COLOR_BUFFER_BIT}G&&(te|=w.DEPTH_BUFFER_BIT),Q&&(te|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ie.dispose(),Se.dispose(),F.dispose(),v.dispose(),U.dispose(),Z.dispose(),rt.dispose(),W.dispose(),he.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ms),ce.removeEventListener("sessionend",Yt),jn.stop()};function pe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=L.autoReset,G=ye.enabled,Q=ye.autoUpdate,te=ye.needsUpdate,K=ye.type;Ce(),L.autoReset=y,ye.enabled=G,ye.autoUpdate=Q,ye.needsUpdate=te,ye.type=K}function Pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ze(y){const G=y.target;G.removeEventListener("dispose",Ze),pt(G)}function pt(y){bt(y),F.remove(y)}function bt(y){const G=F.get(y).programs;G!==void 0&&(G.forEach(function(Q){he.releaseProgram(Q)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,G,Q,te,K,Ee){G===null&&(G=Ke);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Oe=we(y,G,Q,te,K);P.setMaterial(te,Ae);let He=Q.index,je=1;if(te.wireframe===!0){if(He=X.getWireframeAttribute(Q),He===void 0)return;je=2}const et=Q.drawRange,Ve=Q.attributes.position;let at=et.start*je,_t=(et.start+et.count)*je;Ee!==null&&(at=Math.max(at,Ee.start*je),_t=Math.min(_t,(Ee.start+Ee.count)*je)),He!==null?(at=Math.max(at,0),_t=Math.min(_t,He.count)):Ve!=null&&(at=Math.max(at,0),_t=Math.min(_t,Ve.count));const Mt=_t-at;if(Mt<0||Mt===1/0)return;rt.setup(K,te,Oe,Q,He);let tn,ct=be;if(He!==null&&(tn=V.get(He),ct=Xe,ct.setIndex(tn)),K.isMesh)te.wireframe===!0?(P.setLineWidth(te.wireframeLinewidth*O()),ct.setMode(w.LINES)):ct.setMode(w.TRIANGLES);else if(K.isLine){let Ye=te.linewidth;Ye===void 0&&(Ye=1),P.setLineWidth(Ye*O()),K.isLineSegments?ct.setMode(w.LINES):K.isLineLoop?ct.setMode(w.LINE_LOOP):ct.setMode(w.LINE_STRIP)}else K.isPoints?ct.setMode(w.POINTS):K.isSprite&&ct.setMode(w.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ct.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ct.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ye=K._multiDrawStarts,Zn=K._multiDrawCounts,ut=K._multiDrawCount,Tn=He?V.get(He).bytesPerElement:1,Ar=F.get(te).currentProgram.getUniforms();for(let cn=0;cn<ut;cn++)Ar.setValue(w,"_gl_DrawID",cn),ct.render(Ye[cn]/Tn,Zn[cn])}else if(K.isInstancedMesh)ct.renderInstances(at,Mt,K.count);else if(Q.isInstancedBufferGeometry){const Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Zn=Math.min(Q.instanceCount,Ye);ct.renderInstances(at,Mt,Zn)}else ct.render(at,Mt)};function st(y,G,Q){y.transparent===!0&&y.side===fi&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,re(y,G,Q),y.side=Vi,y.needsUpdate=!0,re(y,G,Q),y.side=fi):re(y,G,Q)}this.compile=function(y,G,Q=null){Q===null&&(Q=y),d=Se.get(Q),d.init(G),b.push(d),Q.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),y!==Q&&y.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),d.setupLights();const te=new Set;return y.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Ae=0;Ae<Ee.length;Ae++){const Oe=Ee[Ae];st(Oe,Q,K),te.add(Oe)}else st(Ee,Q,K),te.add(Ee)}),b.pop(),d=null,te},this.compileAsync=function(y,G,Q=null){const te=this.compile(y,G,Q);return new Promise(K=>{function Ee(){if(te.forEach(function(Ae){F.get(Ae).currentProgram.isReady()&&te.delete(Ae)}),te.size===0){K(y);return}setTimeout(Ee,10)}ne.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Nt=null;function gn(y){Nt&&Nt(y)}function ms(){jn.stop()}function Yt(){jn.start()}const jn=new Fh;jn.setAnimationLoop(gn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(y){Nt=y,ce.setAnimationLoop(y),y===null?jn.stop():jn.start()},ce.addEventListener("sessionstart",ms),ce.addEventListener("sessionend",Yt),this.render=function(y,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(G),G=ce.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,G,N),d=Se.get(y,b.length),d.init(G),b.push(d),fe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),oe.setFromProjectionMatrix(fe),Me=this.localClippingEnabled,me=ue.init(this.clippingPlanes,Me),p=ie.get(y,T.length),p.init(),T.push(p),ce.enabled===!0&&ce.isPresenting===!0){const Ee=E.xr.getDepthSensingMesh();Ee!==null&&gs(Ee,G,-1/0,E.sortObjects)}gs(y,G,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(le,ee),D=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,D&&Ne.addToRenderList(p,y),this.info.render.frame++,me===!0&&ue.beginShadows();const Q=d.state.shadowsArray;ye.render(Q,y,G),me===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=p.opaque,K=p.transmissive;if(d.setupLights(),G.isArrayCamera){const Ee=G.cameras;if(K.length>0)for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const He=Ee[Ae];so(te,K,y,He)}D&&Ne.render(y);for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const He=Ee[Ae];ro(p,y,He,He.viewport)}}else K.length>0&&so(te,K,y,G),D&&Ne.render(y),ro(p,y,G);N!==null&&(_.updateMultisampleRenderTarget(N),_.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(E,y,G),rt.resetDefaultState(),M=-1,S=null,b.pop(),b.length>0?(d=b[b.length-1],me===!0&&ue.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function gs(y,G,Q,te){if(y.visible===!1)return;if(y.layers.test(G.layers)){if(y.isGroup)Q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(G);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||oe.intersectsSprite(y)){te&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);const Ae=Z.update(y),Oe=y.material;Oe.visible&&p.push(y,Ae,Oe,Q,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||oe.intersectsObject(y))){const Ae=Z.update(y),Oe=y.material;if(te&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Le.copy(Ae.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(fe)),Array.isArray(Oe)){const He=Ae.groups;for(let je=0,et=He.length;je<et;je++){const Ve=He[je],at=Oe[Ve.materialIndex];at&&at.visible&&p.push(y,Ae,at,Q,Le.z,Ve)}}else Oe.visible&&p.push(y,Ae,Oe,Q,Le.z,null)}}const Ee=y.children;for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++)gs(Ee[Ae],G,Q,te)}function ro(y,G,Q,te){const K=y.opaque,Ee=y.transmissive,Ae=y.transparent;d.setupLightsView(Q),me===!0&&ue.setGlobalState(E.clippingPlanes,Q),te&&P.viewport(I.copy(te)),K.length>0&&Ki(K,G,Q),Ee.length>0&&Ki(Ee,G,Q),Ae.length>0&&Ki(Ae,G,Q),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function so(y,G,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[te.id]===void 0&&(d.state.transmissionRenderTarget[te.id]=new Er(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Js:xi,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const Ee=d.state.transmissionRenderTarget[te.id],Ae=te.viewport||I;Ee.setSize(Ae.z,Ae.w);const Oe=E.getRenderTarget();E.setRenderTarget(Ee),E.getClearColor(q),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),D&&Ne.render(Q);const He=E.toneMapping;E.toneMapping=zi;const je=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),d.setupLightsView(te),me===!0&&ue.setGlobalState(E.clippingPlanes,te),Ki(y,Q,te),_.updateMultisampleRenderTarget(Ee),_.updateRenderTargetMipmap(Ee),ne.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ve=0,at=G.length;Ve<at;Ve++){const _t=G[Ve],Mt=_t.object,tn=_t.geometry,ct=_t.material,Ye=_t.group;if(ct.side===fi&&Mt.layers.test(te.layers)){const Zn=ct.side;ct.side=ln,ct.needsUpdate=!0,$(Mt,Q,te,tn,ct,Ye),ct.side=Zn,ct.needsUpdate=!0,et=!0}}et===!0&&(_.updateMultisampleRenderTarget(Ee),_.updateRenderTargetMipmap(Ee))}E.setRenderTarget(Oe),E.setClearColor(q,J),je!==void 0&&(te.viewport=je),E.toneMapping=He}function Ki(y,G,Q){const te=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Ee=y.length;K<Ee;K++){const Ae=y[K],Oe=Ae.object,He=Ae.geometry,je=te===null?Ae.material:te,et=Ae.group;Oe.layers.test(Q.layers)&&$(Oe,G,Q,He,je,et)}}function $(y,G,Q,te,K,Ee){y.onBeforeRender(E,G,Q,te,K,Ee),y.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),K.onBeforeRender(E,G,Q,te,y,Ee),K.transparent===!0&&K.side===fi&&K.forceSinglePass===!1?(K.side=ln,K.needsUpdate=!0,E.renderBufferDirect(Q,G,te,K,y,Ee),K.side=Vi,K.needsUpdate=!0,E.renderBufferDirect(Q,G,te,K,y,Ee),K.side=fi):E.renderBufferDirect(Q,G,te,K,y,Ee),y.onAfterRender(E,G,Q,te,K,Ee)}function re(y,G,Q){G.isScene!==!0&&(G=Ke);const te=F.get(y),K=d.state.lights,Ee=d.state.shadowsArray,Ae=K.state.version,Oe=he.getParameters(y,K.state,Ee,G,Q),He=he.getProgramCacheKey(Oe);let je=te.programs;te.environment=y.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(y.isMeshStandardMaterial?U:v).get(y.envMap||te.environment),te.envMapRotation=te.environment!==null&&y.envMap===null?G.environmentRotation:y.envMapRotation,je===void 0&&(y.addEventListener("dispose",Ze),je=new Map,te.programs=je);let et=je.get(He);if(et!==void 0){if(te.currentProgram===et&&te.lightsStateVersion===Ae)return Ue(y,Oe),et}else Oe.uniforms=he.getUniforms(y),y.onBeforeCompile(Oe,E),et=he.acquireProgram(Oe,He),je.set(He,et),te.uniforms=Oe.uniforms;const Ve=te.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=ue.uniform),Ue(y,Oe),te.needsLights=ze(y),te.lightsStateVersion=Ae,te.needsLights&&(Ve.ambientLightColor.value=K.state.ambient,Ve.lightProbe.value=K.state.probe,Ve.directionalLights.value=K.state.directional,Ve.directionalLightShadows.value=K.state.directionalShadow,Ve.spotLights.value=K.state.spot,Ve.spotLightShadows.value=K.state.spotShadow,Ve.rectAreaLights.value=K.state.rectArea,Ve.ltc_1.value=K.state.rectAreaLTC1,Ve.ltc_2.value=K.state.rectAreaLTC2,Ve.pointLights.value=K.state.point,Ve.pointLightShadows.value=K.state.pointShadow,Ve.hemisphereLights.value=K.state.hemi,Ve.directionalShadowMap.value=K.state.directionalShadowMap,Ve.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ve.spotShadowMap.value=K.state.spotShadowMap,Ve.spotLightMatrix.value=K.state.spotLightMatrix,Ve.spotLightMap.value=K.state.spotLightMap,Ve.pointShadowMap.value=K.state.pointShadowMap,Ve.pointShadowMatrix.value=K.state.pointShadowMatrix),te.currentProgram=et,te.uniformsList=null,et}function xe(y){if(y.uniformsList===null){const G=y.currentProgram.getUniforms();y.uniformsList=Vo.seqWithValue(G.seq,y.uniforms)}return y.uniformsList}function Ue(y,G){const Q=F.get(y);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function we(y,G,Q,te,K){G.isScene!==!0&&(G=Ke),_.resetTextureUnits();const Ee=G.fog,Ae=te.isMeshStandardMaterial?G.environment:null,Oe=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ds,He=(te.isMeshStandardMaterial?U:v).get(te.envMap||Ae),je=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,et=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!Q.morphAttributes.position,at=!!Q.morphAttributes.normal,_t=!!Q.morphAttributes.color;let Mt=zi;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=E.toneMapping);const tn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ct=tn!==void 0?tn.length:0,Ye=F.get(te),Zn=d.state.lights;if(me===!0&&(Me===!0||y!==S)){const vn=y===S&&te.id===M;ue.setState(te,y,vn)}let ut=!1;te.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Zn.state.version||Ye.outputColorSpace!==Oe||K.isBatchedMesh&&Ye.batching===!1||!K.isBatchedMesh&&Ye.batching===!0||K.isBatchedMesh&&Ye.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ye.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ye.instancing===!1||!K.isInstancedMesh&&Ye.instancing===!0||K.isSkinnedMesh&&Ye.skinning===!1||!K.isSkinnedMesh&&Ye.skinning===!0||K.isInstancedMesh&&Ye.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ye.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ye.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ye.instancingMorph===!1&&K.morphTexture!==null||Ye.envMap!==He||te.fog===!0&&Ye.fog!==Ee||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ue.numPlanes||Ye.numIntersection!==ue.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==et||Ye.morphTargets!==Ve||Ye.morphNormals!==at||Ye.morphColors!==_t||Ye.toneMapping!==Mt||Ye.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Ye.__version=te.version);let Tn=Ye.currentProgram;ut===!0&&(Tn=re(te,G,K));let Ar=!1,cn=!1,vs=!1;const St=Tn.getUniforms(),Bn=Ye.uniforms;if(P.useProgram(Tn.program)&&(Ar=!0,cn=!0,vs=!0),te.id!==M&&(M=te.id,cn=!0),Ar||S!==y){P.buffers.depth.getReversed()?(ve.copy(y.projectionMatrix),gv(ve),vv(ve),St.setValue(w,"projectionMatrix",ve)):St.setValue(w,"projectionMatrix",y.projectionMatrix),St.setValue(w,"viewMatrix",y.matrixWorldInverse);const bi=St.map.cameraPosition;bi!==void 0&&bi.setValue(w,_e.setFromMatrixPosition(y.matrixWorld)),se.logarithmicDepthBuffer&&St.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&St.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,cn=!0,vs=!0)}if(K.isSkinnedMesh){St.setOptional(w,K,"bindMatrix"),St.setOptional(w,K,"bindMatrixInverse");const vn=K.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),St.setValue(w,"boneTexture",vn.boneTexture,_))}K.isBatchedMesh&&(St.setOptional(w,K,"batchingTexture"),St.setValue(w,"batchingTexture",K._matricesTexture,_),St.setOptional(w,K,"batchingIdTexture"),St.setValue(w,"batchingIdTexture",K._indirectTexture,_),St.setOptional(w,K,"batchingColorTexture"),K._colorsTexture!==null&&St.setValue(w,"batchingColorTexture",K._colorsTexture,_));const _s=Q.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&ke.update(K,Q,Tn),(cn||Ye.receiveShadow!==K.receiveShadow)&&(Ye.receiveShadow=K.receiveShadow,St.setValue(w,"receiveShadow",K.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Bn.envMap.value=He,Bn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(Bn.envMapIntensity.value=G.environmentIntensity),cn&&(St.setValue(w,"toneMappingExposure",E.toneMappingExposure),Ye.needsLights&&Fe(Bn,vs),Ee&&te.fog===!0&&k.refreshFogUniforms(Bn,Ee),k.refreshMaterialUniforms(Bn,te,z,j,d.state.transmissionRenderTarget[y.id]),Vo.upload(w,xe(Ye),Bn,_)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Vo.upload(w,xe(Ye),Bn,_),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&St.setValue(w,"center",K.center),St.setValue(w,"modelViewMatrix",K.modelViewMatrix),St.setValue(w,"normalMatrix",K.normalMatrix),St.setValue(w,"modelMatrix",K.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const vn=te.uniformsGroups;for(let bi=0,Ti=vn.length;bi<Ti;bi++){const Qc=vn[bi];W.update(Qc,Tn),W.bind(Qc,Tn)}}return Tn}function Fe(y,G){y.ambientLightColor.needsUpdate=G,y.lightProbe.needsUpdate=G,y.directionalLights.needsUpdate=G,y.directionalLightShadows.needsUpdate=G,y.pointLights.needsUpdate=G,y.pointLightShadows.needsUpdate=G,y.spotLights.needsUpdate=G,y.spotLightShadows.needsUpdate=G,y.rectAreaLights.needsUpdate=G,y.hemisphereLights.needsUpdate=G}function ze(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,G,Q){F.get(y.texture).__webglTexture=G,F.get(y.depthTexture).__webglTexture=Q;const te=F.get(y);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,G){const Q=F.get(y);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(y,G=0,Q=0){N=y,R=G,C=Q;let te=!0,K=null,Ee=!1,Ae=!1;if(y){const He=F.get(y);if(He.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(w.FRAMEBUFFER,null),te=!1;else if(He.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(He.__hasExternalTextures)_.rebindTextures(y,F.get(y.texture).__webglTexture,F.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ve=y.depthTexture;if(He.__boundDepthTexture!==Ve){if(Ve!==null&&F.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}const je=y.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ae=!0);const et=F.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(et[G])?K=et[G][Q]:K=et[G],Ee=!0):y.samples>0&&_.useMultisampledRTT(y)===!1?K=F.get(y).__webglMultisampledFramebuffer:Array.isArray(et)?K=et[Q]:K=et,I.copy(y.viewport),B.copy(y.scissor),H=y.scissorTest}else I.copy(ge).multiplyScalar(z).floor(),B.copy(Te).multiplyScalar(z).floor(),H=We;if(P.bindFramebuffer(w.FRAMEBUFFER,K)&&te&&P.drawBuffers(y,K),P.viewport(I),P.scissor(B),P.setScissorTest(H),Ee){const He=F.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+G,He.__webglTexture,Q)}else if(Ae){const He=F.get(y.texture),je=G||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,He.__webglTexture,Q||0,je)}M=-1},this.readRenderTargetPixels=function(y,G,Q,te,K,Ee,Ae){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=F.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){P.bindFramebuffer(w.FRAMEBUFFER,Oe);try{const He=y.texture,je=He.format,et=He.type;if(!se.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=y.width-te&&Q>=0&&Q<=y.height-K&&w.readPixels(G,Q,te,K,Ge.convert(je),Ge.convert(et),Ee)}finally{const He=N!==null?F.get(N).__webglFramebuffer:null;P.bindFramebuffer(w.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(y,G,Q,te,K,Ee,Ae){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=F.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){const He=y.texture,je=He.format,et=He.type;if(!se.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=y.width-te&&Q>=0&&Q<=y.height-K){P.bindFramebuffer(w.FRAMEBUFFER,Oe);const Ve=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.bufferData(w.PIXEL_PACK_BUFFER,Ee.byteLength,w.STREAM_READ),w.readPixels(G,Q,te,K,Ge.convert(je),Ge.convert(et),0);const at=N!==null?F.get(N).__webglFramebuffer:null;P.bindFramebuffer(w.FRAMEBUFFER,at);const _t=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await mv(w,_t,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Ee),w.deleteBuffer(Ve),w.deleteSync(_t),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,G=null,Q=0){y.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1]);const te=Math.pow(2,-Q),K=Math.floor(y.image.width*te),Ee=Math.floor(y.image.height*te),Ae=G!==null?G.x:0,Oe=G!==null?G.y:0;_.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,Q,0,0,Ae,Oe,K,Ee),P.unbindTexture()},this.copyTextureToTexture=function(y,G,Q=null,te=null,K=0){y.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,y=arguments[1],G=arguments[2],K=arguments[3]||0,Q=null);let Ee,Ae,Oe,He,je,et,Ve,at,_t;const Mt=y.isCompressedTexture?y.mipmaps[K]:y.image;Q!==null?(Ee=Q.max.x-Q.min.x,Ae=Q.max.y-Q.min.y,Oe=Q.isBox3?Q.max.z-Q.min.z:1,He=Q.min.x,je=Q.min.y,et=Q.isBox3?Q.min.z:0):(Ee=Mt.width,Ae=Mt.height,Oe=Mt.depth||1,He=0,je=0,et=0),te!==null?(Ve=te.x,at=te.y,_t=te.z):(Ve=0,at=0,_t=0);const tn=Ge.convert(G.format),ct=Ge.convert(G.type);let Ye;G.isData3DTexture?(_.setTexture3D(G,0),Ye=w.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(_.setTexture2DArray(G,0),Ye=w.TEXTURE_2D_ARRAY):(_.setTexture2D(G,0),Ye=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,G.unpackAlignment);const Zn=w.getParameter(w.UNPACK_ROW_LENGTH),ut=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Tn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ar=w.getParameter(w.UNPACK_SKIP_ROWS),cn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Mt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Mt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,He),w.pixelStorei(w.UNPACK_SKIP_ROWS,je),w.pixelStorei(w.UNPACK_SKIP_IMAGES,et);const vs=y.isDataArrayTexture||y.isData3DTexture,St=G.isDataArrayTexture||G.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Bn=F.get(y),_s=F.get(G),vn=F.get(Bn.__renderTarget),bi=F.get(_s.__renderTarget);P.bindFramebuffer(w.READ_FRAMEBUFFER,vn.__webglFramebuffer),P.bindFramebuffer(w.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ti=0;Ti<Oe;Ti++)vs&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,F.get(y).__webglTexture,K,et+Ti),y.isDepthTexture?(St&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,F.get(G).__webglTexture,K,_t+Ti),w.blitFramebuffer(He,je,Ee,Ae,Ve,at,Ee,Ae,w.DEPTH_BUFFER_BIT,w.NEAREST)):St?w.copyTexSubImage3D(Ye,K,Ve,at,_t+Ti,He,je,Ee,Ae):w.copyTexSubImage2D(Ye,K,Ve,at,_t+Ti,He,je,Ee,Ae);P.bindFramebuffer(w.READ_FRAMEBUFFER,null),P.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else St?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(Ye,K,Ve,at,_t,Ee,Ae,Oe,tn,ct,Mt.data):G.isCompressedArrayTexture?w.compressedTexSubImage3D(Ye,K,Ve,at,_t,Ee,Ae,Oe,tn,Mt.data):w.texSubImage3D(Ye,K,Ve,at,_t,Ee,Ae,Oe,tn,ct,Mt):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,K,Ve,at,Ee,Ae,tn,ct,Mt.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,K,Ve,at,Mt.width,Mt.height,tn,Mt.data):w.texSubImage2D(w.TEXTURE_2D,K,Ve,at,Ee,Ae,tn,ct,Mt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Zn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ut),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ar),w.pixelStorei(w.UNPACK_SKIP_IMAGES,cn),K===0&&G.generateMipmaps&&w.generateMipmap(Ye),P.unbindTexture()},this.copyTextureToTexture3D=function(y,G,Q=null,te=null,K=0){return y.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,te=arguments[1]||null,y=arguments[2],G=arguments[3],K=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,G,Q,te,K)},this.initRenderTarget=function(y){F.get(y).__webglFramebuffer===void 0&&_.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_.setTextureCube(y,0):y.isData3DTexture?_.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_.setTexture2DArray(y,0):_.setTexture2D(y,0),P.unbindTexture()},this.resetState=function(){R=0,C=0,N=null,P.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}class Ma extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class br extends en{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);const Yr={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},Dt=30,cl=12,AS=10,Vh=28;function CS(n,e){if(typeof e=="function")return e(n);const t=n.filter(r=>r!=null&&r!=="");if(e==="count")return t.length;const i=t.map(r=>Number(r)).filter(r=>!Number.isNaN(r));if(i.length===0)return null;switch(e){case"sum":return i.reduce((r,s)=>r+s,0);case"avg":return i.reduce((r,s)=>r+s,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Bf(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=Yr[e.theme]??Yr.none,{cols:o,rows:a,pinnedRows:l,rowHeight:c,scrollY:u,scrollX:f,glow:h}=e;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const m=l.length*c,g=e.aggregateRow?Vh:0,x=r-Dt-m-g;t.fillStyle=s.headerBg,t.fillRect(0,0,i,Dt),t.textBaseline="middle",t.textAlign="left";let p=-f;for(let q=0;q<o.length;q++){const J=o[q];if(p+J.width<=0){p+=J.width;continue}if(p>=i)break;const Y=!!e.colFilters[J.colId],j=e.sortColId===J.colId,z=(J.colDef.headerName??J.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(p,0,J.width,Dt),t.clip(),t.font=`bold ${AS}px system-ui, -apple-system, sans-serif`,t.fillStyle=Y?s.accent:s.textHeader,h?(t.shadowColor=s.textHeader,t.shadowBlur=10,t.fillText(z,p+8,Dt/2),t.shadowBlur=4,t.fillText(z,p+8,Dt/2),t.shadowBlur=0):t.fillText(z,p+8,Dt/2),j){const le=t.measureText(z).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=s.accent,t.fillText(e.sortDir==="asc"?"▲":"▼",p+8+le+4,Dt/2)}J.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=Y?s.accent:s.textHeader,t.globalAlpha=Y?1:.38,t.fillText("⌕",p+J.width-20,Dt/2),t.globalAlpha=1),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(p+J.width-.5,0),t.lineTo(p+J.width-.5,Dt),t.stroke(),p+=J.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,Dt-.5),t.lineTo(i,Dt-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,Dt,i,x),t.clip();const d=Math.max(0,Math.floor(u/c)),T=Math.min(a.length,Math.ceil((u+x)/c)),b=e.selectionAnchorRow??e.selectedRow,E=e.selectionAnchorCol??e.selectedCol,A=e.selectedRow>=0&&b>=0?Math.min(e.selectedRow,b):-1,R=e.selectedRow>=0&&b>=0?Math.max(e.selectedRow,b):-1,C=e.selectedCol>=0&&E>=0?Math.min(e.selectedCol,E):-1,N=e.selectedCol>=0&&E>=0?Math.max(e.selectedCol,E):-1,M=R>A||N>C;let S=Number.POSITIVE_INFINITY,I=Number.NEGATIVE_INFINITY,B=Number.POSITIVE_INFINITY,H=Number.NEGATIVE_INFINITY;for(let q=d;q<T;q++){const J=a[q],Y=Dt+q*c-u;q%2===1&&(t.fillStyle=s.rowAlt,t.fillRect(0,Y,i,c));const j=q>=A&&q<=R;q===e.hoveredRow&&!j&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,Y,i,c)),j&&!M&&(t.fillStyle=ul(s.accent,.1),t.fillRect(0,Y,i,c)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,Y+c-.5),t.lineTo(i,Y+c-.5),t.stroke();let z=-f;for(let le=0;le<o.length;le++){const ee=o[le];if(z+ee.width<=0){z+=ee.width;continue}if(z>=i)break;const ge=j&&le>=C&&le<=N;ge&&M&&(t.fillStyle=ul(s.accent,.14),t.fillRect(z,Y,ee.width,c)),ge&&(z<S&&(S=z),z+ee.width>I&&(I=z+ee.width),Y<B&&(B=Y),Y+c>H&&(H=Y+c));const Te=e.getCellStyle(ee,J),We=Te.color??s.text,oe=Te.textAlign??"left",me=e.formatCell(ee,J);t.save(),t.beginPath(),t.rect(z+1,Y,ee.width-2,c),t.clip(),t.font=`${cl}px system-ui, -apple-system, sans-serif`,t.fillStyle=We,t.textBaseline="middle";const Me=oe==="right"?z+ee.width-8:z+8;t.textAlign=oe==="right"?"right":"left";const ve=Y+c/2;h?(t.shadowColor=We,t.shadowBlur=12,t.fillText(me,Me,ve),t.shadowBlur=6,t.fillText(me,Me,ve),t.shadowBlur=2,t.fillText(me,Me,ve),t.shadowBlur=0):t.fillText(me,Me,ve),t.restore(),q===e.selectedRow&&le===e.selectedCol&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect(z+1.5,Y+1.5,ee.width-3,c-3)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(z+ee.width-.5,Y),t.lineTo(z+ee.width-.5,Y+c),t.stroke(),z+=ee.width}}if(M&&S<I&&B<H&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect(S+.5,B+.5,I-S-1,H-B-1)),t.restore(),l.length>0){const q=r-m-g;t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,q-.5),t.lineTo(i,q-.5),t.stroke();for(let J=0;J<l.length;J++){const Y=l[J],j=q+J*c;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,j,i,c);let z=-f;for(let le=0;le<o.length;le++){const ee=o[le];if(z+ee.width<=0){z+=ee.width;continue}if(z>=i)break;const ge=e.getCellStyle(ee,Y),Te=ge.color??s.text,We=ge.textAlign??"left",oe=e.formatCell(ee,Y);t.save(),t.beginPath(),t.rect(z+1,j,ee.width-2,c),t.clip(),t.font=`bold ${cl}px system-ui, -apple-system, sans-serif`,t.fillStyle=Te,t.textBaseline="middle",We==="right"?(t.textAlign="right",t.fillText(oe,z+ee.width-8,j+c/2)):(t.textAlign="left",t.fillText(oe,z+8,j+c/2)),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(z+ee.width-.5,j),t.lineTo(z+ee.width-.5,j+c),t.stroke(),z+=ee.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,j+c-.5),t.lineTo(i,j+c-.5),t.stroke()}}if(e.aggregateRow){const q=r-g;t.fillStyle=ul(s.accent,.1),t.fillRect(0,q,i,g),t.strokeStyle=s.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,q-.5),t.lineTo(i,q-.5),t.stroke();let J=-f;for(let Y=0;Y<o.length;Y++){const j=o[Y];if(J+j.width<=0){J+=j.width;continue}if(J>=i)break;const le=e.getCellStyle(j,e.aggregateRow).textAlign??"left",ee=e.aggregateRow[j.colId]??"";t.save(),t.beginPath(),t.rect(J+1,q,j.width-2,g),t.clip(),t.font=`bold ${cl}px system-ui, -apple-system, sans-serif`,t.fillStyle=s.accent,t.textBaseline="middle",h&&(t.shadowColor=s.accent,t.shadowBlur=8),le==="right"?(t.textAlign="right",t.fillText(ee,J+j.width-8,q+g/2)):(t.textAlign="left",t.fillText(ee,J+8,q+g/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=s.border,t.lineWidth=1,t.beginPath(),t.moveTo(J+j.width-.5,q),t.lineTo(J+j.width-.5,q+g),t.stroke(),J+=j.width}}t.restore()}function ul(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${r},${e})`}function RS(n,e,t){const i=n-.5,r=e-.5,s=(i*i+r*r)*t,o=i*(1+s)*s,a=r*(1+s)*s;return[n+o,e+a*.15]}function PS(n,e,t,i,r){const s=n/t,o=1-e/i,[a,l]=RS(s,o,r);return a<0||a>1||l<0||l>1?[-1,-1]:[a*t,(1-l)*i]}function fl(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function DS(n,e,t){return n>=e+t-24&&n<e+t}function kf(n,e,t){const i=e+t;return n>=i-6&&n<=i+1}function zf(n,e,t,i,r,s,o,a,l,c=!1){const u=n+l;let f=-1,h=0;for(let d=0;d<t.length;d++){if(u>=h&&u<h+t[d].width){f=d;break}h+=t[d].width}if(e<Dt)return{area:"header",colIdx:f,rowIdx:-1};const m=c?Vh:0;if(m>0&&e>=o-m)return{area:"agg",colIdx:f,rowIdx:-1};const g=a*r;if(g>0&&e>=o-g-m){const d=Math.floor((e-(o-g-m))/r);return{area:"pinned",colIdx:f,rowIdx:d}}const x=e-Dt+s,p=Math.floor(x/r);return p>=0&&p<i?{area:"body",colIdx:f,rowIdx:p}:{area:"none",colIdx:-1,rowIdx:-1}}const LS=500,IS=LS/2,US=1.6,Gc=`
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
`,kS=28,zS=600,HS=Yi({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,r=De(t.rowData??[]),s=De(t.pinnedBottomRowData??[]),o=De(""),a=De(null),l=Kr({}),c=Kr({}),u=Kr(new Set),f=De(0),h=De(0),m=De(0),g=De(0),x=De(0),p=De(-1),d=De(null),T=De(null),b=De(null),E={...Qt},A=De({x:0,y:Dt}),R=De("");function C($){return $.colId??$.field??($.headerName?$.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const N=it(()=>{const $=t.defaultColDef??{};return t.columnDefs.filter(re=>!u.has(C(re))).map(re=>{const xe=C(re),Ue={...$,...re};return{colId:xe,colDef:Ue,width:c[xe]??Ue.width??100}})}),M=it(()=>{const $=h.value;if(!$)return N.value;const re=N.value.reduce((we,Fe)=>we+Fe.width,0);if(!re||re>=$)return N.value;const xe=$/re;let Ue=0;return N.value.map((we,Fe)=>{const y=Fe===N.value.length-1?$-Ue:Math.max(8,Math.round(we.width*xe));return Ue+=y,{...we,width:y}})}),S=it(()=>{const $=M.value.reduce((re,xe)=>re+xe.width,0);return Math.max(0,$-h.value)}),I=it(()=>{const $=s.value.length*t.rowHeight;return Math.max(0,m.value-Dt-$)}),B=it(()=>Math.max(0,le.value.length*t.rowHeight-I.value)),H=it(()=>Math.max(1,Math.floor(I.value/t.rowHeight))),q=it(()=>le.value.length===0?0:Math.min(le.value.length-1,Math.floor(g.value/t.rowHeight))),J=it(()=>Math.min(le.value.length-1,q.value+H.value-1));function Y($,re){if(re.colDef.valueGetter)return re.colDef.valueGetter({data:$,colDef:re.colDef});if(re.colDef.field)return $[re.colDef.field]}function j($,re){const xe=Y(re,$);return $.colDef.valueFormatter?$.colDef.valueFormatter({value:xe,data:re,colDef:$.colDef})??"":$.colDef.cellRenderer?($.colDef.cellRenderer({value:xe,data:re,colDef:$.colDef})??"").replace(/<[^>]+>/g,""):xe==null?"":String(xe)}function z($,re){return $.colDef.cellStyle?typeof $.colDef.cellStyle=="function"?$.colDef.cellStyle({value:Y(re,$),data:re,colDef:$.colDef})??{}:$.colDef.cellStyle:{}}const le=it(()=>{f.value;let $=r.value;const re=o.value.trim().toLowerCase();re&&($=$.filter(xe=>N.value.some(Ue=>String(Y(xe,Ue)??"").toLowerCase().includes(re))));for(const[xe,Ue]of Object.entries(l)){if(!Ue)continue;const we=N.value.find(Fe=>Fe.colId===xe);if(we)if(Ue.startsWith("__eq__")){const Fe=Ue.slice(6).toLowerCase();$=$.filter(ze=>String(Y(ze,we)??"").toLowerCase()===Fe)}else{const Fe=Ue.toLowerCase();$=$.filter(ze=>String(Y(ze,we)??"").toLowerCase().includes(Fe))}}if(a.value){const{colId:xe,dir:Ue}=a.value,we=N.value.find(Fe=>Fe.colId===xe);we&&($=[...$].sort((Fe,ze)=>{const y=Y(Fe,we),G=Y(ze,we);let Q=0;return we.colDef.comparator?Q=we.colDef.comparator(y,G):typeof y=="number"&&typeof G=="number"?Q=y-G:Q=String(y??"").localeCompare(String(G??""),void 0,{numeric:!0}),Ue==="asc"?Q:-Q}))}return $}),ee=it(()=>{const $=N.value.filter(we=>we.colDef.aggFunc!=null);if($.length===0)return null;const re=le.value,xe={};for(const we of $){const Fe=re.map(y=>Y(y,we)),ze=CS(Fe,we.colDef.aggFunc);if(ze==null){xe[we.colId]="";continue}xe[we.colId]=we.colDef.aggValueFormatter?we.colDef.aggValueFormatter(ze):String(ze)}const Ue=$[0].colId;return xe[Ue]===""&&(xe[Ue]="Σ"),xe});qe(le,()=>{g.value=0,d.value=null}),qe(S,()=>{x.value=Math.min(x.value,S.value)}),qe(B,()=>{g.value=Math.min(g.value,B.value)});function ge($){const re=$*t.rowHeight,xe=re+t.rowHeight;re<g.value?g.value=re:xe>g.value+I.value&&(g.value=Math.min(B.value,xe-I.value))}function Te(){g.value=Math.max(0,g.value-I.value),ue()}function We(){g.value=Math.min(B.value,g.value+I.value),ue()}let oe=!1,me="",Me=0,ve=0,fe=!1,_e=!1,Le=0,Ke=0,D=0,O=0,w=!1;function de($,re){var xe;oe=!0,me=$,Me=re,ve=((xe=M.value.find(Ue=>Ue.colId===$))==null?void 0:xe.width)??100,fe=!1}function ne($){if(_e){const Fe=Le-$.clientX,ze=Ke-$.clientY;(Math.abs(Fe)>4||Math.abs(ze)>4)&&(w=!0),x.value=Math.max(0,Math.min(S.value,D+Fe)),g.value=Math.max(0,Math.min(B.value,O+ze)),ue();return}if(!oe)return;const re=h.value,xe=Math.max(30,ve+($.clientX-Me)),Ue=N.value.filter(Fe=>Fe.colId!==me).reduce((Fe,ze)=>Fe+ze.width,0),we=re-xe;we>10&&(c[me]=Math.max(10,Math.round(xe*Ue/we))),ue()}function se(){_e&&(w&&(fe=!0),_e=!1),oe&&(oe=!1,fe=!0,i("column-resized"))}const P=De(null),L=De(null),F=Bi("cathodeResetTick",De(0));qe(F,()=>Nt());let _=null,v=!1,U,V,X,Z,he;const k=`
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
`;function ie(){if(!(!L.value||!P.value)){he=document.createElement("canvas");try{_=new xa({canvas:L.value,antialias:!1,alpha:!0})}catch{v=!0}if(!v&&!_.getContext()&&(_.dispose(),_=null,v=!0),v){Se();return}_.setPixelRatio(1),_.setClearColor(0,0),U=new Ma,V=new io(-1,1,1,-1,0,1),Z=new br(he),Z.minFilter=Et,Z.magFilter=Et,X=new bn({uniforms:{uTex:{value:Z},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},uBezel:{value:new dt(0)},...Yc()},vertexShader:BS,fragmentShader:k,transparent:!0}),U.add(new pn(new $i(2,2),X)),Se()}}function Se(){if(!P.value||!_&&!v)return;const $=P.value.clientWidth,re=P.value.clientHeight-(t.pagination?kS:0);if(!$||!re)return;const xe=he.width!==$||he.height!==re;he.width=$,he.height=re,h.value=$,m.value=re,x.value=Math.max(0,Math.min(S.value,x.value)),g.value=Math.max(0,Math.min(B.value,g.value)),_?(xe&&Z&&(Z.dispose(),Z=new br(he),Z.minFilter=Et,Z.magFilter=Et,X&&(X.uniforms.uTex.value=Z)),_.setPixelRatio(window.devicePixelRatio||1),_.setSize($,re)):L.value&&(L.value.width=$,L.value.height=re,L.value.style.width=$+"px",L.value.style.height=re+"px"),ue()}function ue(){var xe,Ue,we,Fe,ze,y,G,Q,te,K,Ee,Ae;if(!(he!=null&&he.width))return;if(v){if(!L.value)return;Bf(he,{cols:M.value,rows:le.value,pinnedRows:s.value,rowHeight:t.rowHeight,scrollY:g.value,scrollX:x.value,theme:t.theme,glow:!1,sortColId:((xe=a.value)==null?void 0:xe.colId)??null,sortDir:((Ue=a.value)==null?void 0:Ue.dir)??null,colFilters:l,hoveredRow:p.value,selectedRow:((we=d.value)==null?void 0:we.row)??-1,selectedCol:((Fe=d.value)==null?void 0:Fe.col)??-1,selectionAnchorRow:((ze=T.value)==null?void 0:ze.row)??-1,selectionAnchorCol:((y=T.value)==null?void 0:y.col)??-1,formatCell:j,getCellStyle:z});const Oe=L.value.getContext("2d");Oe&&Oe.drawImage(he,0,0);return}if(!_||!X||!Z)return;const $=Yr[t.theme]??Yr.none,re=t.theme==="paper";X.uniforms.uStrength.value=t.curvature/45*.55,X.uniforms.uScanlines.value=t.scanlines&&!re?1:0,X.uniforms.uVignette.value=re?0:1,X.uniforms.uBezel.value.set($.bg),$c(X,t.magnify,E,he.width,he.height),Bf(he,{cols:M.value,rows:le.value,pinnedRows:s.value,rowHeight:t.rowHeight,scrollY:g.value,scrollX:x.value,theme:t.theme,glow:t.glow,sortColId:((G=a.value)==null?void 0:G.colId)??null,sortDir:((Q=a.value)==null?void 0:Q.dir)??null,colFilters:l,hoveredRow:p.value,selectedRow:((te=d.value)==null?void 0:te.row)??-1,selectedCol:((K=d.value)==null?void 0:K.col)??-1,selectionAnchorRow:((Ee=T.value)==null?void 0:Ee.row)??-1,selectionAnchorCol:((Ae=T.value)==null?void 0:Ae.col)??-1,formatCell:j,getCellStyle:z,aggregateRow:ee.value}),Z.needsUpdate=!0,_.render(U,V)}function ye($){if(!L.value)return[-1,-1];const re=L.value.getBoundingClientRect(),xe=$.clientX-re.left,Ue=$.clientY-re.top,we=L.value.width||re.width,Fe=L.value.height||re.height,ze=t.curvature/45*.55,[y,G]=PS(xe,Ue,we,Fe,ze);return y<0?[-1,-1]:[y,G]}let Ne=0;function ke($){b.value=null;const re=Date.now();if($.deltaX!==0){Ne=re,x.value=Math.max(0,Math.min(S.value,x.value+$.deltaX)),ue();return}if($.shiftKey&&$.deltaY!==0){Ne=re,x.value=Math.max(0,Math.min(S.value,x.value+$.deltaY)),ue();return}re-Ne<zS||(g.value=Math.max(0,Math.min(B.value,g.value+$.deltaY)),ue())}function be($){if(oe)return;if(t.magnify&&L.value){const we=qc($,L.value);E.x=we.x,E.y=we.y}const[re,xe]=ye($);if(re<0){p.value=-1,ue();return}const Ue=zf(re,xe,M.value,le.value.length,t.rowHeight,g.value,he.height,s.value.length,x.value,ee.value!==null);if(p.value=Ue.area==="body"?Ue.rowIdx:-1,Ue.area==="header"&&Ue.colIdx>=0){const we=M.value[Ue.colIdx],Fe=fl(Ue.colIdx,M.value),ze=re+x.value;L.value.style.cursor=we&&kf(ze,Fe,we.width)?"col-resize":"pointer"}else Ue.area==="body"?L.value.style.cursor="pointer":L.value.style.cursor="default";ue()}function Xe(){p.value=-1,E.x=Qt.x,E.y=Qt.y,ue()}function Ge($){const[re,xe]=ye($);if(re<0)return;if(xe>=Dt){_e=!0,w=!1,Le=$.clientX,Ke=$.clientY,D=x.value,O=g.value;return}const Ue=re+x.value;for(let we=0;we<M.value.length;we++){const Fe=M.value[we],ze=fl(we,M.value);if(Fe.colDef.resizable!==!1&&kf(Ue,ze,Fe.width)){de(Fe.colId,$.clientX);return}}}function rt($){var we,Fe,ze;if(fe){fe=!1;return}if(oe)return;const[re,xe]=ye($);if(re<0){b.value=null;return}const Ue=zf(re,xe,M.value,le.value.length,t.rowHeight,g.value,he.height,s.value.length,x.value,ee.value!==null);if(Ue.area==="header"&&Ue.colIdx>=0){const y=M.value[Ue.colIdx],G=fl(Ue.colIdx,M.value),Q=re+x.value;y.colDef.filter&&DS(Q,G,y.width)?($.stopPropagation(),b.value===y.colId?b.value=null:(b.value=y.colId,R.value=(we=l[y.colId])!=null&&we.startsWith("__eq__")?l[y.colId].slice(6):l[y.colId]??"",A.value={x:Math.max(0,G-x.value),y:Dt})):y.colDef.sortable!==!1&&(b.value=null,a.value=((Fe=a.value)==null?void 0:Fe.colId)===y.colId?a.value.dir==="asc"?{colId:y.colId,dir:"desc"}:null:{colId:y.colId,dir:"asc"},i("sort-changed"));return}if(b.value=null,Ue.area==="body"&&Ue.rowIdx>=0&&Ue.colIdx>=0){const y=Ue.rowIdx;$.shiftKey&&d.value?(T.value||(T.value={...d.value}),d.value={row:y,col:Ue.colIdx}):(d.value={row:y,col:Ue.colIdx},T.value={row:y,col:Ue.colIdx}),(ze=L.value)==null||ze.focus();const G=le.value[y],Q=M.value[Ue.colIdx];G&&Q&&(i("row-clicked",{data:G,event:$}),i("cell-selected",{data:G,row:y,col:Ue.colIdx,colId:Q.colId}))}}function W($){var re,xe;b.value&&((xe=(re=$.target).closest)!=null&&xe.call(re,".cathode-filter-popup")||(b.value=null))}function Ce($){var we;if(!h.value)return;let re=0;for(let Fe=0;Fe<$;Fe++)re+=M.value[Fe].width;const xe=((we=M.value[$])==null?void 0:we.width)??0,Ue=re-x.value;Ue<0?x.value=Math.max(0,re):Ue+xe>h.value&&(x.value=Math.min(S.value,re+xe-h.value))}function ce($){const xe=M.value.length-1,Ue=le.value.length-1;if(!d.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes($.key)&&($.preventDefault(),d.value={row:q.value,col:0},T.value={row:q.value,col:0});return}let{row:we,col:Fe}=d.value;const ze=(y,G,Q=!1)=>{we=Math.max(0,Math.min(Ue,y)),Fe=Math.max(0,Math.min(xe,G)),d.value={row:we,col:Fe},Q||(T.value={row:we,col:Fe}),ge(we),Ce(Fe)};switch($.key){case"ArrowDown":$.preventDefault(),ze(we+1,Fe,$.shiftKey);break;case"ArrowUp":$.preventDefault(),ze(we-1,Fe,$.shiftKey);break;case"ArrowRight":$.preventDefault(),$.shiftKey?ze(we,Fe+1,!0):Fe<xe?ze(we,Fe+1):ze(we+1,0);break;case"ArrowLeft":$.preventDefault(),$.shiftKey?ze(we,Fe-1,!0):Fe>0?ze(we,Fe-1):ze(we-1,xe);break;case"Tab":$.preventDefault(),$.shiftKey?Fe>0?ze(we,Fe-1):ze(we-1,xe):Fe<xe?ze(we,Fe+1):ze(we+1,0);break;case"Enter":$.preventDefault(),$.shiftKey?ze(we-1,Fe):ze(we+1,Fe);break;case"Home":$.preventDefault(),$.ctrlKey||$.metaKey?ze(0,0,$.shiftKey):ze(we,0,$.shiftKey);break;case"End":$.preventDefault(),$.ctrlKey||$.metaKey?ze(Ue,xe,$.shiftKey):ze(we,xe,$.shiftKey);break;case"PageDown":$.preventDefault(),ze(Math.min(Ue,we+H.value),Fe,$.shiftKey);break;case"PageUp":$.preventDefault(),ze(Math.max(0,we-H.value),Fe,$.shiftKey);break;case"Escape":d.value=null,T.value=null;break;case"c":case"C":($.ctrlKey||$.metaKey)&&($.preventDefault(),pe());break}}function pe(){var Q;if(!d.value)return;const $=M.value,re=le.value,xe=T.value??d.value,Ue=Math.min(xe.row,d.value.row),we=Math.max(xe.row,d.value.row),Fe=Math.min(xe.col,d.value.col),ze=Math.max(xe.col,d.value.col),y=[];for(let te=Ue;te<=we;te++){const K=re[te];if(!K)continue;const Ee=[];for(let Ae=Fe;Ae<=ze;Ae++){const Oe=$[Ae];Oe&&Ee.push(j(Oe,K).replace(/[\t\r\n]+/g," "))}y.push(Ee.join("	"))}const G=y.join(`
`);(Q=navigator.clipboard)==null||Q.writeText(G).catch(()=>{})}function Ie($){const re=$.target.value;R.value=re,re?l[b.value]=re:delete l[b.value],i("filter-changed")}function Pe(){b.value&&delete l[b.value],R.value="",b.value=null,i("filter-changed")}const Ze={setGridOption($,re){$==="rowData"?r.value=re:$==="pinnedBottomRowData"?s.value=re:$==="quickFilterText"&&(o.value=re)},getColumnState(){return t.columnDefs.map($=>{var xe,Ue;const re=C($);return{colId:re,hide:u.has(re),sort:((xe=a.value)==null?void 0:xe.colId)===re?a.value.dir:null,sortIndex:((Ue=a.value)==null?void 0:Ue.colId)===re?0:null,width:c[re]??$.width}})},applyColumnState({state:$}){for(const re of $)re.hide===!0&&u.add(re.colId),re.hide===!1&&u.delete(re.colId),re.sort&&(a.value={colId:re.colId,dir:re.sort}),re.width&&(c[re.colId]=re.width)},setFilterModel($){for(const re of Object.keys(l))delete l[re];if($)for(const[re,xe]of Object.entries($))(xe==null?void 0:xe.type)==="equals"?l[re]=`__eq__${xe.filter}`:xe!=null&&xe.filter&&(l[re]=xe.filter)},getFilterModel(){const $={};for(const[re,xe]of Object.entries(l))xe&&($[re]=xe.startsWith("__eq__")?{type:"equals",filter:xe.slice(6)}:{type:"contains",filter:xe});return $},async setColumnFilterModel($,re){re?re.type==="equals"?l[$]=`__eq__${re.filter}`:l[$]=re.filter??"":delete l[$]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:$="export.csv"}={}){const re=N.value,xe=re.map(ze=>ze.colDef.headerName??ze.colId).join(","),Ue=le.value.map(ze=>re.map(y=>`"${String(j(y,ze)).replace(/"/g,'""')}"`).join(",")),we=new Blob([[xe,...Ue].join(`
`)],{type:"text/csv"}),Fe=URL.createObjectURL(we);Object.assign(document.createElement("a"),{href:Fe,download:$}).click(),URL.revokeObjectURL(Fe)},resize(){Se()},resetColumnState(){u.clear();for(const re of t.columnDefs)re.hide&&u.add(C(re));const $=t.columnDefs.find(re=>re.sort);a.value=$?{colId:C($),dir:$.sort}:null;for(const re of Object.keys(c))delete c[re];for(const re of Object.keys(l))delete l[re];o.value="",g.value=0,d.value=null,b.value=null}};qe([le,()=>s.value,M,g,p,d],()=>En(ue)),qe(()=>t.theme,()=>ue()),qe(()=>t.curvature,()=>En(Se)),qe(()=>t.scanlines,()=>ue()),qe(()=>t.glow,()=>ue()),qe(()=>t.magnify,$=>{$||(E.x=Qt.x,E.y=Qt.y),ue()}),qe(d,$=>{if(!$)return;const re=le.value[$.row],xe=M.value[$.col];re&&xe&&i("cell-selected",{data:re,row:$.row,col:$.col,colId:xe.colId})});let pt=null,bt=null,st=0;function Nt(){cancelAnimationFrame(st),st=requestAnimationFrame(Se)}function gn($){$.preventDefault()}function ms(){_==null||_.dispose(),_=null,v=!1,ie()}Kn(()=>{for(const $ of t.columnDefs)$.hide&&u.add(C($)),$.sort&&!a.value&&(a.value={colId:C($),dir:$.sort});r.value=t.rowData??[],s.value=t.pinnedBottomRowData??[],document.addEventListener("click",W),document.addEventListener("mousemove",ne),document.addEventListener("mouseup",se),En(()=>{var $;ie(),L.value&&(L.value.addEventListener("webglcontextlost",gn),L.value.addEventListener("webglcontextrestored",ms)),P.value&&(pt=new ResizeObserver(()=>Se()),pt.observe(P.value),bt=new IntersectionObserver(re=>{re.some(xe=>xe.isIntersecting)&&Nt()}),bt.observe(P.value)),window.addEventListener("resize",Nt),($=window.visualViewport)==null||$.addEventListener("resize",Nt),i("grid-ready",{api:Ze})})}),Ei(()=>{var $,re,xe;document.removeEventListener("click",W,!0),document.removeEventListener("mousemove",ne),document.removeEventListener("mouseup",se),($=L.value)==null||$.removeEventListener("webglcontextlost",gn),(re=L.value)==null||re.removeEventListener("webglcontextrestored",ms),pt==null||pt.disconnect(),bt==null||bt.disconnect(),window.removeEventListener("resize",Nt),(xe=window.visualViewport)==null||xe.removeEventListener("resize",Nt),cancelAnimationFrame(st),_==null||_.dispose()});const Yt=it(()=>Yr[t.theme]??Yr.none),jn=it(()=>({position:"absolute",left:`${A.value.x}px`,top:`${A.value.y}px`,zIndex:100,background:Yt.value.headerBg,border:`1px solid ${Yt.value.accent}`,color:Yt.value.text,boxShadow:"0 4px 14px rgba(0,0,0,0.55)",borderRadius:"3px",display:"flex",alignItems:"center",gap:"4px",padding:"5px",minWidth:"160px"})),gs=it(()=>({background:Yt.value.bg,border:`1px solid ${Yt.value.border}`,color:Yt.value.text,fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"11px",padding:"3px 7px",borderRadius:"2px",outline:"none",flex:"1"})),ro=it(()=>({background:Yt.value.headerBg,borderTop:`1px solid ${Yt.value.border}`,color:Yt.value.text})),so=it(()=>({background:Yt.value.bg})),Ki=it(()=>Yt.value.accent);return($,re)=>{var xe,Ue;return Je(),yt("div",{ref_key:"wrapEl",ref:P,class:"cathode-wrap",style:on(so.value)},[Be("canvas",{ref_key:"canvasEl",ref:L,class:"cathode-canvas",tabindex:"0",onWheel:Oi(ke,["prevent"]),onMousemove:be,onMouseleave:Xe,onMousedown:Ge,onClick:rt,onKeydown:ce},null,544),b.value?(Je(),yt("div",{key:0,class:"cathode-filter-popup",style:on(jn.value),onClick:re[0]||(re[0]=Oi(()=>{},["stop"]))},[Be("input",{style:on(gs.value),value:R.value,placeholder:"Filter…",autofocus:"",onInput:Ie,onKeydown:xg(Pe,["escape"])},null,44,NS),R.value?(Je(),yt("button",{key:0,style:on({background:"none",border:"none",color:Yt.value.text,opacity:"0.55",cursor:"pointer",fontSize:"11px",padding:"0 4px"}),onClick:Pe},"✕",4)):Zt("",!0)],4)):Zt("",!0),n.pagination?(Je(),yt("div",{key:1,class:"cathode-pagination",style:on(ro.value)},[Be("button",{disabled:g.value<=0,onClick:re[1]||(re[1]=we=>Te())},"◀",8,FS),Be("span",null,Sn((q.value+1).toLocaleString())+"–"+Sn(Math.min(le.value.length,J.value+1).toLocaleString())+" / "+Sn(le.value.length.toLocaleString()),1),Be("button",{disabled:g.value>=B.value,onClick:re[2]||(re[2]=we=>We())},"▶",8,OS),Be("span",{class:"cathode-page-info",style:on({color:Ki.value})},Sn(le.value.length.toLocaleString())+" rows ",5),d.value?(Je(),yt("span",{key:0,class:"cathode-sel-readout",style:on({color:Ki.value})},Sn(((xe=M.value[d.value.col])==null?void 0:xe.colDef.headerName)??((Ue=M.value[d.value.col])==null?void 0:Ue.colId))+" : "+Sn(j(M.value[d.value.col],le.value[d.value.row])),5)):Zt("",!0)],4)):Zt("",!0)],4)}}}),qi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Hf=qi(HS,[["__scopeId","data-v-b951b247"]]),Qo={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function VS(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const GS=12,Ot=18,Bs=10,Mr=6,Kc=`${GS}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function WS(n,e,t){if(t<=0||!e)return[e];const i=[];for(const r of e.split(`
`)){if(!r){i.push("");continue}if(n.measureText(r).width<=t){i.push(r);continue}const s=r.split(/(\s+)/);let o="";for(const a of s){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function Gh(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),r=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${r}`}return n}function XS(n,e){return Math.ceil(n.measureText(e).width)+12}function YS(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:r,wordWrap:s}=n,o=n.formatTs??Gh;t.font=Kc;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=r&&c.ts!=null?o(c.ts):"",h=s?WS(t,c.text,i):c.text.split(`
`);for(let m=0;m<h.length;m++)a.push({entryIdx:l,text:h[m],level:u,timestamp:m===0?f:"",isFirstFrag:m===0,widthPx:t.measureText(h[m]).width})}return a}function Vf(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=Qo[e.theme]??Qo.none;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip(),t.font=Kc,t.textBaseline="middle";const o=e.visualLines,a=Bs-e.scrollX,l=(e.showTimestamps?Bs+e.timestampWidth:Bs)-e.scrollX,c=Math.max(0,Math.floor((e.scrollY-Mr)/Ot)),u=Math.min(o.length,Math.ceil((e.scrollY+r-Mr)/Ot)+1);for(let f=c;f<u;f++){const h=o[f],m=Mr+f*Ot-e.scrollY+Ot/2;if(h.entryIdx%2===1&&h.isFirstFrag){t.fillStyle=s.rowAlt;let x=1;for(;f+x<u&&o[f+x].entryIdx===h.entryIdx;)x++;t.fillRect(0,m-Ot/2,i,Ot*x)}e.selectionStart>=0&&f>=e.selectionStart&&f<=e.selectionEnd&&(t.fillStyle=s.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,m-Ot/2,i,Ot)),f===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,m-Ot/2,i,Ot)),e.showTimestamps&&h.timestamp&&(t.fillStyle=s.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=s.timestamp),t.fillText(h.timestamp,a,m),t.shadowBlur=0);const g=VS(s,h.level);t.fillStyle=g,t.textAlign="left",e.glow?(t.shadowColor=g,t.shadowBlur=14,t.fillText(h.text,l,m),t.shadowBlur=7,t.fillText(h.text,l,m),t.shadowBlur=3,t.fillText(h.text,l,m),t.shadowBlur=0):t.fillText(h.text,l,m)}t.restore()}function Gf(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-Mr)/Ot);return i<0||i>=t?-1:i}function $S(n){return Mr*2+n*Ot}const qS=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,KS=Yi({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=De(null),r=De(null),s={...Qt},o=De(0),a=De(0),l=De(0),c=De(-1),u=De(!0),f=De(-1),h=De(-1),m=it(()=>{const k=t.entries??[];return t.maxLines>0&&k.length>t.maxLines?k.slice(k.length-t.maxLines):k}),g=it(()=>{if(!t.showTimestamps)return"";const k=t.formatTs??Gh;let ie="00:00:00";for(const Se of m.value){if(Se.ts==null)continue;const ue=k(Se.ts);ue.length>ie.length&&(ie=ue)}return ie}),x=De(0),p=De([]);function d(){if(!H)return;const k=H.getContext("2d");if(!k)return;k.font=Kc;const ie=t.showTimestamps?XS(k,g.value):0;x.value=ie;const Se=Math.max(1,o.value-Bs*2-ie);p.value=YS({entries:m.value,ctx:k,textMaxWidth:Se,showTimestamps:t.showTimestamps,formatTs:t.formatTs,wordWrap:t.wordWrap})}const T=it(()=>$S(p.value.length)),b=it(()=>Math.max(0,T.value-a.value)),E=it(()=>{let k=0;for(const ie of p.value)ie.widthPx>k&&(k=ie.widthPx);return Bs*2+x.value+k}),A=it(()=>Math.max(0,E.value-o.value)),R=De(0);qe(b,()=>{u.value?l.value=b.value:l.value=Math.min(l.value,b.value)}),qe(A,()=>{R.value=Math.min(R.value,A.value)}),qe([m,o,()=>t.showTimestamps,()=>t.wordWrap,g],()=>{d(),En(j)},{deep:!1});let C=null,N=!1,M,S,I,B,H;const q=`
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
`;function J(){if(!(!r.value||!i.value)){H=document.createElement("canvas");try{C=new xa({canvas:r.value,antialias:!1,alpha:!0})}catch{N=!0}if(!N&&!C.getContext()&&(C.dispose(),C=null,N=!0),N){Y();return}C.setPixelRatio(1),C.setClearColor(0,0),M=new Ma,S=new io(-1,1,1,-1,0,1),B=new br(H),B.minFilter=Et,B.magFilter=Et,I=new bn({uniforms:{uTex:{value:B},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...Yc()},vertexShader:qS,fragmentShader:q,transparent:!0}),M.add(new pn(new $i(2,2),I)),Y()}}function Y(){if(!i.value||!C&&!N)return;const k=i.value.clientWidth,ie=i.value.clientHeight;if(!k||!ie)return;const Se=H.width!==k||H.height!==ie;Se&&(H.width=k,H.height=ie,o.value=k,a.value=ie,d(),C?(Se&&B&&(B.dispose(),B=new br(H),B.minFilter=Et,B.magFilter=Et,I&&(I.uniforms.uTex.value=B)),C.setPixelRatio(window.devicePixelRatio||1),C.setSize(k,ie)):r.value&&(r.value.width=k,r.value.height=ie,r.value.style.width=k+"px",r.value.style.height=ie+"px"),u.value&&(l.value=Math.max(0,T.value-a.value)),j())}function j(){if(!(H!=null&&H.width))return;if(N){if(!r.value)return;Vf(H,{visualLines:p.value,scrollY:l.value,scrollX:R.value,theme:t.theme,glow:!1,showTimestamps:t.showTimestamps,timestampWidth:x.value,hoveredLine:c.value,selectionStart:Math.min(f.value,h.value),selectionEnd:Math.max(f.value,h.value)});const ie=r.value.getContext("2d");ie&&ie.drawImage(H,0,0);return}if(!C||!I||!B)return;const k=t.theme==="paper";I.uniforms.uStrength.value=t.curvature/45*.55,I.uniforms.uScanlines.value=t.scanlines&&!k?1:0,I.uniforms.uVignette.value=k?0:1,$c(I,t.magnify,s,H.width,H.height),Vf(H,{visualLines:p.value,scrollY:l.value,scrollX:R.value,theme:t.theme,glow:t.glow,showTimestamps:t.showTimestamps,timestampWidth:x.value,hoveredLine:c.value,selectionStart:Math.min(f.value,h.value),selectionEnd:Math.max(f.value,h.value)}),B.needsUpdate=!0,C.render(M,S)}qe(()=>t.theme,()=>j()),qe(()=>t.curvature,()=>j()),qe(()=>t.scanlines,()=>j()),qe(()=>t.glow,()=>j()),qe(()=>t.magnify,k=>{k||(s.x=Qt.x,s.y=Qt.y),j()}),qe(l,()=>j()),qe(R,()=>j()),qe(c,()=>j()),qe([f,h],()=>j());function z(k){if(!r.value)return[-1,-1];const ie=r.value.getBoundingClientRect();return[k.clientX-ie.left,k.clientY-ie.top]}function le(k){l.value=Math.max(0,Math.min(b.value,k)),u.value=l.value>=b.value-4}function ee(k){R.value=Math.max(0,Math.min(A.value,k))}function ge(k){k.shiftKey?ee(R.value+k.deltaY):Math.abs(k.deltaX)>Math.abs(k.deltaY)?ee(R.value+k.deltaX):le(l.value+k.deltaY)}let Te=!1,We=0,oe=0,me=0,Me=0,ve=!1;function fe(k){Te=!0,ve=!1,We=k.clientX,oe=k.clientY,me=R.value,Me=l.value,i.value&&i.value.focus()}function _e(k){if(Te){const ie=We-k.clientX,Se=oe-k.clientY;(Math.abs(ie)>4||Math.abs(Se)>4)&&(ve=!0),ee(me+ie),le(Me+Se)}}function Le(){Te&&(Te=!1,ve&&(ve=!1))}function Ke(k){const[,ie]=z(k);return ie<0?-1:Gf(ie,l.value,p.value.length)}function D(k){if(ve){ve=!1;return}const ie=Ke(k);if(ie<0){f.value=-1,h.value=-1;return}k.shiftKey&&f.value>=0||(f.value=ie),h.value=ie}function O(k,ie){const Se=p.value.length;if(Se===0)return;const ue=h.value<0?0:h.value;let ye=Math.max(0,Math.min(Se-1,ue+k));h.value=ye,(!ie||f.value<0)&&(f.value=ye),c.value=ye;const Ne=Mr+ye*Ot,ke=Ne+Ot;Ne<l.value?le(Ne):ke>l.value+a.value&&le(ke-a.value)}function w(){const k=Math.min(f.value,h.value),ie=Math.max(f.value,h.value);if(k<0)return"";const Se=p.value,ue=new Set,ye=[];for(let Ne=k;Ne<=ie&&Ne<Se.length;Ne++){const ke=Se[Ne];if(ue.has(ke.entryIdx))continue;ue.add(ke.entryIdx);let be="";for(let Xe=0;Xe<Se.length;Xe++)Se[Xe].entryIdx===ke.entryIdx&&(be+=(be&&!Se[Xe].isFirstFrag?" ":"")+Se[Xe].text);ye.push(ke.timestamp?`${ke.timestamp}  ${be}`:be)}return ye.join(`
`)}async function de(){const k=w();if(k)try{await navigator.clipboard.writeText(k)}catch{const ie=document.createElement("textarea");ie.value=k,ie.style.position="fixed",ie.style.opacity="0",document.body.appendChild(ie),ie.select();try{document.execCommand("copy")}catch{}document.body.removeChild(ie)}}function ne(k){if((k.metaKey||k.ctrlKey)&&(k.key==="c"||k.key==="C")){f.value>=0&&(k.preventDefault(),de());return}if((k.metaKey||k.ctrlKey)&&(k.key==="a"||k.key==="A")){k.preventDefault(),f.value=0,h.value=p.value.length-1;return}switch(k.key){case"ArrowDown":k.preventDefault(),O(1,k.shiftKey);break;case"ArrowUp":k.preventDefault(),O(-1,k.shiftKey);break;case"ArrowRight":k.preventDefault(),ee(R.value+Ot*2);break;case"ArrowLeft":k.preventDefault(),ee(R.value-Ot*2);break;case"PageDown":k.preventDefault(),le(l.value+a.value);break;case"PageUp":k.preventDefault(),le(l.value-a.value);break;case"Home":k.preventDefault(),le(0),ee(0);break;case"End":k.preventDefault(),le(b.value);break;case"Escape":f.value=-1,h.value=-1;break}}function se(k){if(t.magnify&&r.value){const Se=qc(k,r.value);s.x=Se.x,s.y=Se.y,j()}const[,ie]=z(k);if(ie<0){c.value=-1;return}c.value=Gf(ie,l.value,p.value.length)}function P(){c.value=-1,s.x=Qt.x,s.y=Qt.y,j()}e({scrollToBottom(){u.value=!0,l.value=b.value},scrollToLine(k){le(Mr+k*Ot)}});let L=null,F=null,_=0;const v=Bi("cathodeResetTick",De(0));qe(v,()=>U());function U(){cancelAnimationFrame(_),_=requestAnimationFrame(Y)}function V(k){k.preventDefault()}function X(){C==null||C.dispose(),C=null,N=!1,J()}Kn(()=>{document.addEventListener("mousemove",_e),document.addEventListener("mouseup",Le),En(()=>{var k;J(),r.value&&(r.value.addEventListener("webglcontextlost",V),r.value.addEventListener("webglcontextrestored",X)),i.value&&(L=new ResizeObserver(()=>Y()),L.observe(i.value),F=new IntersectionObserver(ie=>{ie.some(Se=>Se.isIntersecting)&&U()}),F.observe(i.value)),window.addEventListener("resize",U),(k=window.visualViewport)==null||k.addEventListener("resize",U),l.value=b.value})}),Ei(()=>{var k,ie,Se;document.removeEventListener("mousemove",_e),document.removeEventListener("mouseup",Le),(k=r.value)==null||k.removeEventListener("webglcontextlost",V),(ie=r.value)==null||ie.removeEventListener("webglcontextrestored",X),L==null||L.disconnect(),F==null||F.disconnect(),window.removeEventListener("resize",U),(Se=window.visualViewport)==null||Se.removeEventListener("resize",U),cancelAnimationFrame(_),C==null||C.dispose()});const Z=it(()=>Qo[t.theme]??Qo.none),he=it(()=>({background:Z.value.bg}));return(k,ie)=>(Je(),yt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:on(he.value),tabindex:"0",onKeydown:ne},[Be("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-log-canvas",onWheel:Oi(ge,["prevent"]),onMousemove:se,onMouseleave:P,onMousedown:fe,onClick:D},null,544)],36))}}),gc=qi(KS,[["__scopeId","data-v-50995a41"]]),ea={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},jS=.18,Cs=8,jc=22,ZS=4,Si=8,Sr=56,Wh=42,Gi="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",JS="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",dl=4,QS=1,ey=1;function ty(n,e,t,i=0,r=!1){const s=r?Wh:Sr,o=Math.max(0,e-Si-s),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function ny(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,r=-1/0,s=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>r&&(r=c.high),c.volume>s&&(s=c.volume))}if(!isFinite(i)||!isFinite(r)||i===r){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,s)}}const a=(r-i)*.04;return{min:i-a,max:r+a,maxVol:Math.max(1,s)}}function iy(n,e,t=!1){const i=t?ZS:jc,r=Math.max(1,n-Cs-i-dl),s=Math.max(0,Math.round(r*e)),o=r-s;return{priceY0:Cs,priceY1:Cs+o,volumeY0:Cs+o+dl,volumeY1:Cs+o+dl+s}}function Yn(n,e,t,i){const r=e.max-e.min;return r<=0?(t+i)/2:t+(1-(n-e.min)/r)*(i-t)}function Wi(n,e,t){return Si+(n-e+.5)*t}function gr(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function Zc(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${r}:${s}`}function ry(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),r=t/i;let s;return r<1.5?s=1:r<3?s=2:r<7?s=5:s=10,s*i}function Wf(n,e){var m,g,x,p,d;const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=ea[e.theme]??ea.none,o=e.colors?{...s,...e.colors}:s,a=!!e.compact;if(t.clearRect(0,0,i,r),t.fillStyle=o.bg,t.fillRect(0,0,i,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const l=ty(e.candles.length,i,e.slotW,e.scrollX,a),c=ny(e.candles,l.firstIdx,l.count),u=iy(r,e.showVolume?e.volumeFraction:0,a),f=Math.max(QS,Math.floor(e.slotW*.7)),h=Math.min(e.candles.length,l.firstIdx+l.count);for(let T=l.firstIdx;T<h;T++){const b=e.candles[T];if(!b)continue;const E=Wi(T,l.firstIdx,e.slotW),A=Yn(b.open,c,u.priceY0,u.priceY1),R=Yn(b.close,c,u.priceY0,u.priceY1),C=Yn(b.high,c,u.priceY0,u.priceY1),N=Yn(b.low,c,u.priceY0,u.priceY1),M=b.close>=b.open,S=M?o.wickBull:o.wickBear,I=M?o.candleBull:o.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=I),t.strokeStyle=S,t.lineWidth=ey,t.beginPath(),t.moveTo(Math.round(E)+.5,C),t.lineTo(Math.round(E)+.5,N),t.stroke(),t.fillStyle=I;const B=Math.min(A,R),H=Math.max(1,Math.abs(R-A)),q=Math.round(E-f/2),J=Math.round(B),Y=Math.round(H);if(t.fillRect(q,J,f,Y),e.glow&&(t.shadowBlur=4,t.fillRect(q,J,f,Y)),t.shadowBlur=0,e.showVolume&&c.maxVol>0){const j=Math.round(b.volume/c.maxVol*(u.volumeY1-u.volumeY0));j>0&&(t.fillStyle=M?o.volumeBull:o.volumeBear,t.fillRect(Math.round(E-f/2),u.volumeY1-j,f,j))}}if((m=e.overlays)!=null&&m.length)for(const T of e.overlays)sy(t,T,l,c,u,e.slotW);(g=e.markers)!=null&&g.length&&hy(t,o,e.markers,e.candles,l,c,u,e.slotW),py(t,o,c,u,i,a),a||(my(t,o,e.candles,l,e.slotW,r),fy(t,o,e.candles,i,r)),(x=e.overlays)!=null&&x.length&&ay(t,o,e.overlays,u),e.hover&&(gy(t,o,e.candles,l,c,u,e.slotW,e.hover,i),ly(t,o,e.candles,l,e.slotW,e.hover,u,((p=e.overlays)==null?void 0:p.length)??0),(d=e.markers)!=null&&d.length&&uy(t,o,e.markers,e.candles,l,c,u,e.slotW,e.hover,i)),t.restore()}function sy(n,e,t,i,r,s){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(Si,r.priceY0,999999,r.priceY1-r.priceY0),n.clip(),e.kind==="line")Lo(n,e.data,t.firstIdx,o,s,i,r,e.color,e.lineWidth??1,e.dashed===!0);else{const l=Xh(e.color,e.fillAlpha??.08);oy(n,e.upper,e.lower,t.firstIdx,o,s,i,r,l),Lo(n,e.upper,t.firstIdx,o,s,i,r,e.color,1,!1),Lo(n,e.lower,t.firstIdx,o,s,i,r,e.color,1,!1),(a=e.middle)!=null&&a.length&&Lo(n,e.middle,t.firstIdx,o,s,i,r,e.color,1,e.middleDashed!==!1)}n.restore()}function Lo(n,e,t,i,r,s,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const h=e[f];if(typeof h!="number"||!isFinite(h)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const m=Wi(f,t,r),g=Yn(h,s,o.priceY0,o.priceY1);u?n.lineTo(m,g):(n.moveTo(m,g),u=!0)}u&&n.stroke(),n.setLineDash([])}function oy(n,e,t,i,r,s,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=r;f++){const h=e[f],m=t[f],g=f<r&&typeof h=="number"&&typeof m=="number"&&isFinite(h)&&isFinite(m);if(g&&!c&&(u=f,c=!0),!g&&c||f===r&&c){const x=g?f+1:f;n.beginPath();for(let p=u;p<x;p++){const d=Wi(p,i,s),T=Yn(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(d,T):n.lineTo(d,T)}for(let p=x-1;p>=u;p--){const d=Wi(p,i,s),T=Yn(t[p],o,a.priceY0,a.priceY1);n.lineTo(d,T)}n.closePath(),n.fill(),c=!1}}}function Xh(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),r=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${i},${r},${s},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function ay(n,e,t,i){const r=t.filter(x=>!!x.label);if(!r.length)return;n.save(),n.font=Gi;const s=8,o=5,a=12,l=6,c=14;let u=0;for(const x of r){const p=n.measureText(x.label).width;p>u&&(u=p)}const f=s*2+a+l+u,h=o*2+c*r.length,m=Si+4,g=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(m,g,f,h),n.textBaseline="middle",n.textAlign="left";for(let x=0;x<r.length;x++){const p=r[x],d=g+o+c*(x+.5),T=m+s;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(T,d),n.lineTo(T+a,d),n.stroke(),n.setLineDash([])):(n.fillStyle=Xh(p.color,p.fillAlpha??.2),n.fillRect(T,d-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(T+.5,d-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,T+a+l,d)}n.restore()}function ly(n,e,t,i,r,s,o,a){const l=Math.floor((s.x-Si)/r),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,h=u.open!==0?f/u.open*100:0,m=f>=0?"+":"",g=[["O",gr(u.open),void 0],["H",gr(u.high),void 0],["L",gr(u.low),void 0],["C",gr(u.close),void 0],["V",cy(u.volume),void 0],["",`${m}${h.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=Gi,n.textBaseline="middle",n.textAlign="left";const x=8,p=4,d=14;let T=x;for(const[R,C]of g){const N=R?`${R} ${C}`:C,M=n.measureText(N).width+12;T+=M}T+=x-12;const b=o.priceY0+4+(a>0?p*2+14*a+4:0),E=Si+4;n.fillStyle=e.panelBg,n.fillRect(E,b,T,d+p*2);let A=E+x;for(let R=0;R<g.length;R++){const[C,N,M]=g[R];n.fillStyle=e.text,C&&(n.globalAlpha=.6,n.fillText(C+" ",A,b+p+d/2),n.globalAlpha=1,A+=n.measureText(C+" ").width),M&&(n.fillStyle=M),n.fillText(N,A,b+p+d/2),A+=n.measureText(N).width+12}n.restore()}function cy(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function uy(n,e,t,i,r,s,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),h=Math.min(i.length,r.firstIdx+r.count),m=9;let g=null;for(const N of t){let M=0,S=i.length-1,I=-1;for(;M<=S;){const q=M+S>>1,J=i[q].start-N.timestamp;if(Math.abs(J)<=f){I=q;break}J<0?M=q+1:S=q-1}if(I<0||I<r.firstIdx||I>=h)continue;const B=Wi(I,r.firstIdx,a),H=Yn(N.price,s,o.priceY0,o.priceY1);if(Math.abs(l.x-B)<=m&&Math.abs(l.y-H)<=m){g={m:N,x:B,y:H};break}}if(!g)return;const x=Zc(g.m.timestamp),p=[`${g.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${x}`,`@ ${gr(g.m.price)}`];g.m.label&&p.push(g.m.label),n.save(),n.font=Gi,n.textBaseline="top",n.textAlign="left";const d=6,T=14;let b=0;for(const N of p){const M=n.measureText(N).width;M>b&&(b=M)}const E=b+d*2,A=p.length*T+d*2;let R=g.x+12;R+E>c-Sr&&(R=g.x-12-E);let C=g.y-A/2;C<o.priceY0&&(C=o.priceY0),C+A>o.priceY1&&(C=o.priceY1-A),n.fillStyle=e.panelBgSolid,n.strokeStyle=g.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(R,C,E,A),n.strokeRect(R+.5,C+.5,E-1,A-1);for(let N=0;N<p.length;N++){const M=p[N];n.fillStyle=N===0?g.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(M,R+d,C+d+N*T)}n.restore()}function fy(n,e,t,i,r){if(t.length<2)return;const s=t[1].start-t[0].start,o=dy(s);if(!o)return;n.save(),n.font=Gi,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-Sr-a,f=r-jc+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function dy(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,r=24*i,s=7*r;return n>=s&&n%s===0?n/s+"W":n>=r&&n%r===0?n/r+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function hy(n,e,t,i,r,s,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,r.firstIdx+r.count),f=m=>{let g=0,x=i.length-1;for(;g<=x;){const p=g+x>>1,d=i[p].start-m;if(Math.abs(d)<=c)return p;d<0?g=p+1:x=p-1}return-1},h=7;for(const m of t){const g=f(m.timestamp);if(g<0||g<r.firstIdx||g>=u)continue;const x=Wi(g,r.firstIdx,a),p=Yn(m.price,s,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const d=m.color??(m.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=d,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),m.kind==="entry"?(n.moveTo(x,p-h),n.lineTo(x-h,p+h-1),n.lineTo(x+h,p+h-1)):(n.moveTo(x,p+h),n.lineTo(x-h,p-h+1),n.lineTo(x+h,p-h+1)),n.closePath(),n.fill(),n.stroke()}}function py(n,e,t,i,r,s=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=s?Math.max(2,Math.min(4,Math.round(a/36))):6,c=ry(o,l),u=Math.ceil(t.min/c)*c,f=s?Wh:Sr;n.font=s?JS:Gi,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let h=u;h<=t.max;h+=c){const m=Yn(h,t,i.priceY0,i.priceY1);m<i.priceY0||m>i.priceY1||(n.beginPath(),n.moveTo(Si,Math.round(m)+.5),n.lineTo(r-f,Math.round(m)+.5),n.stroke(),n.fillText(gr(h),r-f+3,m))}n.globalAlpha=1}function my(n,e,t,i,r,s){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=Gi,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=Wi(c,i.firstIdx,r);n.fillText(Zc(u.start),f,s-jc+4)}n.globalAlpha=1}function gy(n,e,t,i,r,s,o,a,l){const c=Math.floor((a.x-Si)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const h=Wi(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(h)+.5,s.priceY0),n.lineTo(Math.round(h)+.5,s.volumeY1||s.priceY1),n.stroke();const m=Math.max(s.priceY0,Math.min(s.priceY1,a.y));n.beginPath(),n.moveTo(Si,Math.round(m)+.5),n.lineTo(l-Sr,Math.round(m)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const g=r.max-r.min;if(g>0){const d=r.max-(m-s.priceY0)/(s.priceY1-s.priceY0)*g,T=gr(d);n.font=Gi,n.textBaseline="middle",n.textAlign="left";const b=n.measureText(T).width,E=4,A=2;n.fillStyle=e.accent,n.fillRect(l-Sr+2,m-7-A,b+E*2,14+A*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(T,l-Sr+2+E,m)}n.font=Gi,n.textBaseline="top",n.textAlign="center";const x=Zc(f.start),p=n.measureText(x).width;n.fillStyle=e.accent,n.fillRect(h-p/2-4,s.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(x,h,s.volumeY1+4),n.restore()}const hl=.25,pl=6,vy=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,_y=Yi({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:jS},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=De(null),i=De(null),r={...Qt},s=De(0),o=De(0),a=De(0),l=De(1),c=De(null),u=it(()=>Math.max(1,e.slotW*l.value));let f=null,h=!1,m,g,x,p,d;const T=`
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
`;function b(){if(!(!i.value||!t.value)){if(d=document.createElement("canvas"),e.flat){h=!0,E();return}try{f=new xa({canvas:i.value,antialias:!1,alpha:!0})}catch{h=!0}if(!h&&!f.getContext()&&(f.dispose(),f=null,h=!0),h){E();return}f.setPixelRatio(1),f.setClearColor(0,0),m=new Ma,g=new io(-1,1,1,-1,0,1),p=new br(d),p.minFilter=Et,p.magFilter=Et,x=new bn({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...Yc()},vertexShader:vy,fragmentShader:T,transparent:!0}),m.add(new pn(new $i(2,2),x)),E()}}function E(){if(!t.value||!f&&!h)return;const fe=t.value.clientWidth,_e=t.value.clientHeight;!fe||!_e||!(d.width!==fe||d.height!==_e)||(d.width=fe,d.height=_e,s.value=fe,o.value=_e,f?(p&&(p.dispose(),p=new br(d),p.minFilter=Et,p.magFilter=Et,x&&(x.uniforms.uTex.value=p)),f.setPixelRatio(window.devicePixelRatio||1),f.setSize(fe,_e)):i.value&&(i.value.width=fe,i.value.height=_e,i.value.style.width=fe+"px",i.value.style.height=_e+"px"),A())}function A(){if(!(d!=null&&d.width))return;if(h){if(!i.value)return;Wf(d,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:!1,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors});const _e=i.value.getContext("2d");_e&&(_e.clearRect(0,0,i.value.width,i.value.height),_e.drawImage(d,0,0));return}if(!f||!x||!p)return;const fe=e.theme==="paper";x.uniforms.uStrength.value=e.curvature/45*.55,x.uniforms.uScanlines.value=e.scanlines&&!fe?1:0,x.uniforms.uVignette.value=fe?0:1,$c(x,e.magnify,r,d.width,d.height),Wf(d,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors}),p.needsUpdate=!0,f.render(m,g)}qe(()=>e.theme,()=>A()),qe(()=>e.curvature,()=>A()),qe(()=>e.scanlines,()=>A()),qe(()=>e.glow,()=>A()),qe(()=>e.showVolume,()=>A()),qe(()=>e.volumeFraction,()=>A()),qe(()=>e.slotW,()=>A()),qe(()=>e.candles,()=>A(),{deep:!1}),qe(()=>e.overlays,()=>A(),{deep:!1}),qe(()=>e.markers,()=>A(),{deep:!1}),qe(()=>e.compact,()=>A()),qe(()=>e.magnify,fe=>{fe||(r.x=Qt.x,r.y=Qt.y),A()}),qe(()=>e.colors,()=>A(),{deep:!0}),qe(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")}),qe(a,()=>A()),qe(l,()=>A()),qe(c,()=>A()),qe(u,()=>A());let R=null,C=null,N=0;const M=Bi("cathodeResetTick",De(0));qe(M,()=>S());function S(){cancelAnimationFrame(N),N=requestAnimationFrame(E)}function I(fe){fe.preventDefault()}function B(){f==null||f.dispose(),f=null,h=!1,b()}function H(fe){if(!i.value)return[-1,-1];const _e=i.value.getBoundingClientRect();return[fe.clientX-_e.left,fe.clientY-_e.top]}function q(fe){var O;const _e=u.value;if(_e<=0)return 0;const Le=((O=e.candles)==null?void 0:O.length)??0,Ke=Math.max(1,Math.floor((s.value||1)/_e)),D=Math.max(0,Le-Ke);return Math.max(0,Math.min(fe,D*_e))}function J(fe){var Ke;if(fe.deltaX!==0||fe.shiftKey&&fe.deltaY!==0){const D=fe.deltaX!==0?fe.deltaX:fe.deltaY;a.value=q(a.value+D);return}if(fe.deltaY===0)return;const[_e]=H(fe),Le=u.value;if(_e>=0&&Le>0&&((Ke=e.candles)!=null&&Ke.length)){const D=Math.max(1,Math.floor((s.value||1)/Le)),w=Math.max(0,e.candles.length-D-Math.floor(a.value/Le))+(_e-8)/Le,de=Math.exp(-fe.deltaY*.0015),ne=Math.max(hl,Math.min(pl,l.value*de));l.value=ne;const se=e.slotW*ne,P=Math.max(1,Math.floor((s.value||1)/se)),L=w-(_e-8)/se,F=Math.max(0,e.candles.length-P-L);a.value=q(F*se)}else{const D=Math.exp(-fe.deltaY*.0015);l.value=Math.max(hl,Math.min(pl,l.value*D))}}let Y=!1,j=0,z=0;function le(fe){fe.button===0&&(Y=!0,j=fe.clientX,z=a.value,c.value=null,t.value&&t.value.focus())}function ee(fe){const _e=Math.exp(fe*.18);l.value=Math.max(hl,Math.min(pl,l.value*_e)),a.value=q(a.value)}function ge(fe){const _e=u.value,Le=fe.shiftKey?20:3;switch(fe.key){case"ArrowLeft":fe.preventDefault(),a.value=q(a.value+_e*Le);break;case"ArrowRight":fe.preventDefault(),a.value=q(a.value-_e*Le);break;case"ArrowUp":fe.preventDefault(),ee(1);break;case"ArrowDown":fe.preventDefault(),ee(-1);break;case"Home":fe.preventDefault(),a.value=q(Number.MAX_SAFE_INTEGER);break;case"End":fe.preventDefault(),a.value=0;break}}function Te(fe){if(Y){const _e=fe.clientX-j;a.value=q(z+_e);return}}function We(){Y=!1}function oe(fe){if(e.magnify&&i.value){const Ke=qc(fe,i.value);r.x=Ke.x,r.y=Ke.y,A()}if(Y)return;const[_e,Le]=H(fe);if(_e<0||Le<0){c.value=null;return}c.value={x:_e,y:Le}}function me(){c.value=null,r.x=Qt.x,r.y=Qt.y,A()}Kn(()=>{document.addEventListener("mousemove",Te),document.addEventListener("mouseup",We),En(()=>{var fe;b(),i.value&&(i.value.addEventListener("webglcontextlost",I),i.value.addEventListener("webglcontextrestored",B)),t.value&&(R=new ResizeObserver(()=>E()),R.observe(t.value),C=new IntersectionObserver(_e=>{_e.some(Le=>Le.isIntersecting)&&S()}),C.observe(t.value)),window.addEventListener("resize",S),(fe=window.visualViewport)==null||fe.addEventListener("resize",S)})}),Ei(()=>{var fe,_e,Le;document.removeEventListener("mousemove",Te),document.removeEventListener("mouseup",We),(fe=i.value)==null||fe.removeEventListener("webglcontextlost",I),(_e=i.value)==null||_e.removeEventListener("webglcontextrestored",B),R==null||R.disconnect(),C==null||C.disconnect(),window.removeEventListener("resize",S),(Le=window.visualViewport)==null||Le.removeEventListener("resize",S),cancelAnimationFrame(N),f==null||f.dispose()});const Me=it(()=>ea[e.theme]??ea.none),ve=it(()=>({background:Me.value.bg}));return(fe,_e)=>(Je(),yt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:on(ve.value),tabindex:"0",onKeydown:ge},[Be("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:Oi(J,["prevent"]),onMousedown:le,onMousemove:oe,onMouseleave:me},null,544)],36))}}),Xf=qi(_y,[["__scopeId","data-v-1752ef06"]]),xy=["disabled"],My=Yi({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=De(null),o=De(null),a=De(""),l=De([]),c=De(-1);let u="";function f(A){A.trim()&&(l.value.length&&l.value[l.value.length-1]===A||(l.value.push(A),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function h(A){if(!i.disabled){if(A.key==="Enter"){A.preventDefault();const R=a.value;R.trim()&&f(R),c.value=-1,a.value="",r("submit",R);return}if(A.key==="ArrowUp"){if(!l.value.length)return;A.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(A.key==="ArrowDown"){if(c.value===-1)return;A.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const m=De(!0);let g=null;function x(){g||(g=setInterval(()=>{m.value=!m.value},530))}function p(){g&&(clearInterval(g),g=null),m.value=!0}const d=it(()=>{let A;return i.disabled?A=" ":i.busy?A="█":A=m.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${A}`}}),T=it(()=>[...i.entries,d.value]);function b(){var A;i.disabled||(A=o.value)==null||A.focus()}qe(()=>i.busy,(A,R)=>{R&&!A&&!i.disabled&&En(()=>{var C;return(C=o.value)==null?void 0:C.focus()})});function E(){var A;(A=o.value)==null||A.focus()}return e({focus:E}),Kn(()=>{x(),i.disabled||requestAnimationFrame(()=>{var A;return(A=o.value)==null?void 0:A.focus()})}),Ei(()=>{p()}),(A,R)=>(Je(),yt("div",{ref_key:"wrapEl",ref:s,class:"cathode-terminal-wrap",onClick:b},[Tt(gc,{entries:T.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Ht(Be("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":R[0]||(R[0]=C=>a.value=C),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:h},null,40,xy),[[lh,a.value]])],512))}}),Yf=qi(My,[["__scopeId","data-v-90cf2990"]]),Jc=De(0),vc=28;let _c=10,ta="cathode.layout",na=!1;const Bt=De({});function Sy(n,e="cathode.layout"){if(!na){na=!0,ta=e;try{const t=localStorage.getItem(ta);if(t){Bt.value=JSON.parse(t),$f();return}}catch{}Bt.value={...n},$f()}}function $f(){let n=10;for(const e of Object.values(Bt.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);_c=n}function wr(){localStorage.setItem(ta,JSON.stringify(Bt.value))}function yy(n){na=!1,localStorage.removeItem(ta),Bt.value={...n},wr(),na=!0,Jc.value++}function Yh(n){_c++,Bt.value[n]&&(Bt.value[n].zIndex=_c)}function Ey(n,e){Bt.value[n].visible=e,wr()}function by(n,e){Bt.value[n].minimized=e,e&&(Bt.value[n].maximized=!1),wr()}function Ty(n,e){Bt.value[n].maximized=e,e&&(Bt.value[n].minimized=!1,Yh(n)),wr()}function wy(n,e,t){Bt.value[n].x=Math.round(e),Bt.value[n].y=Math.round(t),wr()}function Ay(n,e,t){Bt.value[n].w=Math.round(e),Bt.value[n].h=Math.round(t),wr()}function $h(){return{containers:Bt,TITLEBAR_H:vc,load:Sy,save:wr,reset:yy,bringToFront:Yh,setVisible:Ey,setMinimized:by,setMaximized:Ty,updatePos:wy,updateSize:Ay}}const Cy={class:"ws-toolbar"},Ry={key:0,class:"ws-restore-menu"},Py={key:0,class:"ws-restore-empty"},Dy=["onClick"],Ly=Yi({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:r,setVisible:s}=$h(),o=De(null);Ml("cathodeWorkspace",o),Ml("cathodeResetTick",Jc),Kn(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:d}=o.value,T=e.initialLayout??{};i(T,e.storageKey??"cathode.layout");const b=Object.keys(t.value)[0];b&&a(b)});function a(p){var T;document.querySelectorAll(".cc").forEach(b=>b.classList.remove("cc-focused"));const d=(T=o.value)==null?void 0:T.querySelector(`#cc-${p}`);d&&d.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||r(e.initialLayout)}function c(p){const d=p.target.closest(".cc");d&&(document.querySelectorAll(".cc").forEach(T=>T.classList.remove("cc-focused")),d.classList.add("cc-focused"))}const u=De(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function h(p){s(p,!0),u.value=!1}function m(p){if(!u.value)return;const d=p.target;!d.closest(".ws-restore-menu")&&!d.closest(".ws-btn-restore")&&(u.value=!1)}function g(p){p.key==="Escape"&&(u.value=!1)}Kn(()=>{document.addEventListener("click",m),document.addEventListener("keydown",g)}),Ei(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",g)});function x(p){var d;return((d=e.containerTitles)==null?void 0:d[p])??p}return(p,d)=>(Je(),yt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[yl(p.$slots,"default",{},void 0),yl(p.$slots,"overlay",{},void 0),Be("div",Cy,[n.initialLayout?(Je(),yt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):Zt("",!0),d[1]||(d[1]=Be("div",{class:"ws-sep"},null,-1)),Be("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:d[0]||(d[0]=T=>u.value=!u.value)}," ⊞ Restore Panel ")]),Tt(qm,{name:"menu"},{default:ur(()=>[u.value?(Je(),yt("div",Ry,[d[3]||(d[3]=Be("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?Zt("",!0):(Je(),yt("div",Py," No closed panels ")),(Je(!0),yt(jt,null,nm(f(),T=>(Je(),yt("div",{key:T,class:"ws-restore-item",onClick:b=>h(T)},[d[2]||(d[2]=Be("span",{class:"ws-restore-icon"},"⊞",-1)),oi(" "+Sn(x(T)),1)],8,Dy))),128))])):Zt("",!0)]),_:1})],544))}}),Iy=qi(Ly,[["__scopeId","data-v-5838d04b"]]),Uy=["id"],Ny={class:"cc-title"},Fy={key:0,class:"cc-size-badge"},Oy={class:"cc-controls"},By=["title"],ky={class:"cc-body"},zy=200,Hy=80,qf=60,Vy=Yi({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:r,setMinimized:s,setMaximized:o,updatePos:a,updateSize:l}=$h(),c=Bi("cathodeWorkspace",De(null)),u=it(()=>t.value[e.id]),f=it(()=>{const ee=u.value,ge=e.curvature??0;if(!ee)return{};const Te={"--curvature":ge};return ee.maximized?{...Te,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:ee.zIndex}:{...Te,left:ee.x+"px",top:ee.y+"px",width:ee.w+"px",height:ee.minimized?vc+"px":ee.h+"px",zIndex:ee.zIndex,display:ee.visible?"flex":"none"}});let h=!1,m=0,g=0;function x(ee){var We;if(ee.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),h=!0;const ge=(We=c.value)==null?void 0:We.querySelector(`#cc-${e.id}`);if(!ge)return;const Te=ge.getBoundingClientRect();m=ee.clientX-Te.left,g=ee.clientY-Te.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),ee.preventDefault()}function p(ee){var me;if(!h||!c.value)return;const ge=c.value.getBoundingClientRect(),Te=((me=u.value)==null?void 0:me.w)??300;let We=ee.clientX-ge.left-m,oe=ee.clientY-ge.top-g;We=Math.max(qf-Te,Math.min(ge.width-qf,We)),oe=Math.max(0,Math.min(ge.height-vc,oe)),a(e.id,We,oe)}function d(){h=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d)}let T=!1,b=0,E=0,A=0,R=0;const C=De("");function N(ee){u.value.maximized||(i(e.id),T=!0,b=ee.clientX,E=ee.clientY,A=u.value.w,R=u.value.h,document.addEventListener("mousemove",M),document.addEventListener("mouseup",S),ee.preventDefault(),ee.stopPropagation())}function M(ee){if(!T)return;const ge=Math.max(zy,A+(ee.clientX-b)),Te=Math.max(Hy,R+(ee.clientY-E));l(e.id,ge,Te),C.value=`${Math.round(ge)}×${Math.round(Te)}`}function S(){T=!1,C.value="",document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",S),I.value++}const I=De(0);qe(Jc,()=>{I.value++}),Ei(()=>{var ee;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",S),(ee=B.value)==null||ee.removeEventListener("scroll",q),J()});const B=De(null);function H(ee){if(e.canvas)return[];const ge=ee.children[0];return ge?Array.from(ge.children):[]}function q(){const ee=B.value,ge=e.curvature??0;if(!ee)return;const Te=H(ee);if(!Te.length)return;const We=ee.clientHeight,oe=We/2,me=ge*.0038;Te.forEach(Me=>{if(!Me.dataset.origFs){const de=getComputedStyle(Me);Me.dataset.origFs=de.fontSize,Me.dataset.origLh=de.lineHeight}if(ge===0){Me.style.fontSize="",Me.style.lineHeight="";return}const ve=Me.getBoundingClientRect(),fe=ee.getBoundingClientRect(),_e=ve.top-fe.top+ve.height/2,Le=Math.min(1,Math.abs(_e-oe)/(We/2)),Ke=1+me*Math.cos(Le*Math.PI/2),D=parseFloat(Me.dataset.origFs),O=Me.dataset.origLh,w=O==="normal"?D*1.4:parseFloat(O);isNaN(D)||(Me.style.fontSize=`${(D*Ke).toFixed(2)}px`),isNaN(w)||(Me.style.lineHeight=`${(w*Ke).toFixed(2)}px`)})}function J(){const ee=B.value;ee&&H(ee).forEach(ge=>{ge.style.fontSize="",ge.style.lineHeight="",delete ge.dataset.origFs,delete ge.dataset.origLh})}qe(()=>e.curvature,ee=>{(ee??0)===0?J():q()}),Kn(()=>{var ee;(ee=B.value)==null||ee.addEventListener("scroll",q,{passive:!0}),En(q)});function Y(){s(e.id,!u.value.minimized),En(()=>{I.value++})}function j(){o(e.id,!u.value.maximized),En(()=>{I.value++})}function z(){r(e.id,!1)}function le(){i(e.id)}return(ee,ge)=>u.value&&u.value.visible?(Je(),yt("div",{key:0,id:`cc-${n.id}`,class:dn(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:on(f.value),onMousedown:le},[Be("div",{class:"cc-titlebar",onMousedown:x},[ge[0]||(ge[0]=Be("span",{class:"cc-status-dot"},null,-1)),Be("span",Ny,Sn(n.title),1),C.value?(Je(),yt("span",Fy,Sn(C.value),1)):Zt("",!0),Be("div",Oy,[Be("button",{class:"cc-btn",title:"Minimize",onClick:Oi(Y,["stop"])},"─"),Be("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:Oi(j,["stop"])},Sn(u.value.maximized?"⤡":"⤢"),9,By),Be("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:Oi(z,["stop"])},"✕")])],32),Ht(Be("div",ky,[Be("div",{ref_key:"bodyEl",ref:B,class:"cc-screen",onScroll:q},[yl(ee.$slots,"default",{resizeKey:I.value},void 0),ge[1]||(ge[1]=Be("div",{class:"cc-shine"},null,-1))],544)],512),[[Wr,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(Je(),yt("div",{key:0,class:"cc-resize",onMousedown:Oi(N,["stop"])},null,32)):Zt("",!0)],46,Uy)):Zt("",!0)}}),Io=qi(Vy,[["__scopeId","data-v-d8a49f79"]]),Gy=`
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
`,Xy=100,Yy=Yi({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=De(null),r=De(null);let s=null,o=!1,a,l,c,u,f,h=null,m=0;function g(A){A-m>=Xy&&(d(),m=A),h=requestAnimationFrame(g)}function x(){if(!i.value||!f)return;const A=i.value.clientWidth,R=i.value.clientHeight;A<=0||R<=0||f.width===A&&f.height===R||(f.width=A,f.height=R,s&&s.setSize(A,R,!1),r.value&&(r.value.width=A,r.value.height=R,r.value.style.width=A+"px",r.value.style.height=R+"px"))}function p(){if(!(f!=null&&f.width))return;const A=f.getContext("2d");if(!A)return;const R=f.width,C=f.height,N=t[e.theme]??t.none;A.clearRect(0,0,R,C),A.fillStyle=N.bg,A.fillRect(0,0,R,C);const M=Date.now(),S=(M/500|0)%2===0,I=(M/400|0)%4;A.font=`bold ${Math.max(14,Math.min(R,C)*.06)}px monospace`,A.textAlign="center",A.textBaseline="middle",A.fillStyle=N.text,e.glow&&(A.shadowColor=N.text,A.shadowBlur=14);const B=".".repeat(I).padEnd(3," "),H=`${e.label}${B}`;if(A.fillText(H,R/2,C/2),A.shadowBlur=0,S){const q=A.measureText(H),J=A.measureText("M").width,Y=parseFloat(A.font),j=R/2+q.width/2+4,z=C/2-Y/2+2;A.fillStyle=N.cursor,e.glow&&(A.shadowColor=N.cursor,A.shadowBlur=12),A.fillRect(j,z,J*.7,Y*.95),A.shadowBlur=0}}function d(){if(!f)return;if(p(),o){if(!r.value)return;const R=r.value.getContext("2d");R&&R.drawImage(f,0,0);return}if(!s||!c||!u)return;const A=e.theme==="paper";c.uniforms.uStrength.value=e.curvature/45*.55,c.uniforms.uScanlines.value=e.scanlines&&!A?1:0,c.uniforms.uVignette.value=A?0:1,u.needsUpdate=!0,s.render(a,l)}function T(){if(!(!r.value||!i.value)){f=document.createElement("canvas");try{s=new xa({canvas:r.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!s.getContext()&&(s.dispose(),s=null,o=!0),o){x();return}s.setPixelRatio(1),s.setClearColor(0,0),a=new Ma,l=new io(-1,1,1,-1,0,1),u=new br(f),u.minFilter=Et,u.magFilter=Et,c=new bn({uniforms:{uTex:{value:u},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:Gy,fragmentShader:Wy,transparent:!0}),a.add(new pn(new $i(2,2),c)),x()}}let b=null;Kn(()=>{T(),d(),h=requestAnimationFrame(g),i.value&&(b=new ResizeObserver(()=>x()),b.observe(i.value))}),Ei(()=>{h!==null&&cancelAnimationFrame(h),b==null||b.disconnect(),s&&s.dispose(),u==null||u.dispose(),c==null||c.dispose()}),qe(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>d());const E=it(()=>({background:(t[e.theme]??t.none).bg}));return(A,R)=>(Je(),yt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:on(E.value)},[Be("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-loader-canvas"},null,512)],4))}}),Ii=qi(Yy,[["__scopeId","data-v-2be1f107"]]),$y={class:"demo-bar"},qy={class:"demo-tabs"},Ky={key:0},jy={key:1},Zy={key:2},Jy={key:3},Qy={class:"demo-btns"},eE=["value"],tE={class:"tab-content"},nE={class:"tab-content"},iE={class:"tab-content"},rE={class:"tab-content"},sE=Yi({__name:"App",setup(n){const e=De("workspace"),t=De("none"),i=it(()=>t.value!=="paper"),r=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],s=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(P,L){return+(Math.random()*(L-P)+P).toFixed(4)}function l(P){return P[Math.floor(Math.random()*P.length)]}function c(P){return P.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],h=["NY","London","Tokyo","AH"],m=Array.from({length:240},(P,L)=>{const F=L%s.length,_=s[F],v=o[F],U=l(r),V=u-Math.floor(Math.random()*30*24*36e5),X=Math.random()<.15,Z=a(10,3e3),he=a(-8,22),k=+(he-.12).toFixed(4),ie=+(Z*a(.2,2)).toFixed(2),Se=X?null:V+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(V)),entry_timestamp:c(new Date(V)),exit_timestamp:Se?c(new Date(Se)):"",product:_,strategy:U,exchange:v,status:X?"open":"closed",entry_price:Z.toFixed(4),exit_price:X?"":a(Z*.92,Z*1.25).toFixed(4),pnl_pct:he.toFixed(4),net_pnl_pct:k.toFixed(4),size_base:a(.001,2).toFixed(6),notional:ie.toFixed(2),reason:X?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(h)}}),g=P=>L=>L.value!==""&&L.value!=null&&!isNaN(Number(L.value))?Number(L.value).toFixed(P):"",x=P=>P.value!==""&&P.value!=null&&!isNaN(Number(P.value))?Number(P.value).toFixed(2)+"%":"—",p={textAlign:"right"};function d(P){var V,X;const L=(V=P.data)==null?void 0:V.entry_timestamp,F=(X=P.data)==null?void 0:X.exit_timestamp;if(!L||!F)return"—";const _=new Date(F).getTime()-new Date(L).getTime();if(_<0)return"—";const v=Math.floor(_/36e5),U=Math.floor(_%36e5/6e4);return v>0?`${v}h ${U}m`:`${U}m`}const T=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:P=>P.data.entry_timestamp||P.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:P=>P.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:d,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:P=>P.data.status??"closed",cellStyle:P=>({color:P.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:P=>`${P} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:g(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:g(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:g(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:g(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:P=>Number(P).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:x,cellStyle:P=>({...p,color:Number(P.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:P=>`${Number(P).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:x,cellStyle:P=>({...p,color:Number(P.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:P=>`${Number(P).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:x,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:g(1),cellStyle:P=>({...p,color:Number(P.value)>65?"#e74c3c":Number(P.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:P=>Number(P).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:P=>(Number(P.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:P=>Number(P).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:P=>`${Number(P).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:P=>`${Number(P).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:P=>`${Number(P).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:P=>Number(P).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],b={resizable:!0,sortable:!0},E=De(null),A=De(25),R=De(!0),C=De(!1),N=De(!1),M=De(!1),S=De(""),I=De("all"),B=De(0),H=De(!0),q=De(!1),J=De(!1);qe(e,P=>{P==="grid"&&B.value++});function Y(P){E.value=P.api,P.api.setGridOption("rowData",m),I.value!=="all"&&z(I.value)}function j(P){var F;const L=P.target.value;S.value=L,(F=E.value)==null||F.setGridOption("quickFilterText",L)}function z(P){var L,F,_;I.value=P,P==="all"?(L=E.value)==null||L.setFilterModel(null):(F=E.value)==null||F.setFilterModel({status:{type:"equals",filter:P}}),(_=E.value)==null||_.onFilterChanged()}const le={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function ee(P,L){const _=Math.round(P*.62)-12,v=_+12*2,U=P-v-12,V=Math.round(L*.62),X=V+12*2,Z=L-X-12;return{trades:{x:12,y:12,w:_,h:V,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:v,y:12,w:U,h:V,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:X,w:_,h:Z,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:v,y:X,w:U,h:Z,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const ge=ee(window.innerWidth,window.innerHeight-88),Te=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const P=[],L=Date.now()-45e5;for(let F=0;F<140;F++){const _=Te[F%Te.length];P.push({ts:L+F*32e3,text:_.text,level:_.level})}return P})();const We=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],oe=De([]),me=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],Me=De([{level:"info",text:"CathodeTerminal demo"},...me]),ve=De(!1),fe={help:()=>me,echo:P=>({level:"info",text:P||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:P=>{const L=P.trim();return L?L==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:L==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${L}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:P=>{const L=P.trim()||"localhost",F=[{level:"info",text:`PING ${L}: 56 data bytes`}];for(let _=0;_<4;_++){const v=(12+Math.random()*18).toFixed(1);F.push({level:"success",text:`64 bytes from ${L}: icmp_seq=${_} ttl=64 time=${v} ms`})}return F},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:P=>{const L=P.trim()||"moo",F="─".repeat(Math.max(2,L.length+2));return[{level:"info",text:` ╭${F}╮`},{level:"info",text:` │ ${L} │`},{level:"info",text:` ╰${F}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const P=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:P[Math.floor(Math.random()*P.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function _e(P){Me.value=[...Me.value,{level:"info",text:`→ ${P}`}];const L=P.trim();if(!L)return;if(L==="clear"){Me.value=[];return}const F=L.indexOf(" "),_=F===-1?L:L.slice(0,F),v=F===-1?"":L.slice(F+1),U=fe[_];let V;U?V=U(v):V={level:"warn",text:`unknown command: ${_} — type 'help' for the demo vocabulary`},ve.value=!0,setTimeout(()=>{if(V!==null){const X=Array.isArray(V)?V:[V];Me.value=[...Me.value,...X]}ve.value=!1},180)}function Le(P){const L=[];let F=6e4;const _=Date.now()-P*36e5;for(let v=0;v<P;v++){const U=(Math.random()-.495)*F*.012,V=F,X=Math.max(1,F+U),Z=Math.max(V,X)*(1+Math.random()*.005),he=Math.min(V,X)*(1-Math.random()*.005),k=Math.round(20+Math.random()*80);L.push({start:_+v*36e5,open:V,close:X,high:Z,low:he,volume:k}),F=X}return L}const Ke=De(Le(300));function D(P,L){const F=new Array(P.length).fill(NaN);let _=0;for(let v=0;v<P.length;v++)_+=P[v],v>=L&&(_-=P[v-L]),v+1>=L&&(F[v]=_/L);return F}function O(P,L){const F=new Array(P.length).fill(NaN);if(!P.length)return F;const _=2/(L+1);let v=P[0];F[0]=v;for(let U=1;U<P.length;U++)v=P[U]*_+v*(1-_),F[U]=v;for(let U=0;U<Math.min(L-1,P.length);U++)F[U]=NaN;return F}function w(P,L=20,F=2){const _=D(P,L),v=new Array(P.length).fill(NaN),U=new Array(P.length).fill(NaN);for(let V=L-1;V<P.length;V++){let X=0;for(let he=V-L+1;he<=V;he++){const k=P[he]-_[V];X+=k*k}const Z=Math.sqrt(X/L);v[V]=_[V]+F*Z,U[V]=_[V]-F*Z}return{upper:v,middle:_,lower:U}}const de=it(()=>{const P=Ke.value.map(F=>F.close),L=w(P,20,2);return[{kind:"band",upper:L.upper,middle:L.middle,lower:L.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:O(P,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:O(P,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),ne=it(()=>{const P=Ke.value;if(P.length<130)return[];const L=F=>P[F];return[{timestamp:L(P.length-120).start,price:L(P.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:L(P.length-100).start,price:L(P.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:L(P.length-80).start,price:L(P.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:L(P.length-60).start,price:L(P.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:L(P.length-40).start,price:L(P.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:L(P.length-20).start,price:L(P.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const P=Ke.value,L=ne.value;if(!P.length||!L.length)return[];const F=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!F)return[];const _=F.width/(window.devicePixelRatio||1),v=F.height/(window.devicePixelRatio||1),U=8,V=56,X=8,Z=22,he=8,k=_-U-V,ie=Math.max(1,Math.floor(k/he)),Se=Math.max(0,P.length-ie);let ue=1/0,ye=-1/0;for(let Ge=Se;Ge<P.length;Ge++)P[Ge].low<ue&&(ue=P[Ge].low),P[Ge].high>ye&&(ye=P[Ge].high);const Ne=(ye-ue)*.04;ue-=Ne,ye+=Ne;const ke=X,be=X+(v-X-Z-4)*(1-.18),Xe=[];for(const Ge of L){const rt=P[1].start-P[0].start;let W=-1;for(let pe=0;pe<P.length;pe++)if(Math.abs(P[pe].start-Ge.timestamp)<=rt*.5){W=pe;break}if(W<Se||W>=P.length)continue;const Ce=U+(W-Se+.5)*he,ce=ke+(1-(Ge.price-ue)/(ye-ue))*(be-ke);Xe.push({x:Ce,y:ce,kind:Ge.kind,label:Ge.label||""})}return Xe}});function se(){const P=[],L=Date.now()-54e5;for(let F=0;F<320;F++){const _=We[F%We.length];P.push({ts:L+F*16e3,text:_.text,level:_.level})}oe.value=P}return se(),(P,L)=>(Je(),yt("div",{class:dn(["demo-shell",{"cathode-light":!i.value}])},[Be("div",$y,[L[25]||(L[25]=Be("span",{class:"demo-title"},"⬛ CATHODE",-1)),Be("div",qy,[Be("button",{class:dn(["tab-btn",{active:e.value==="workspace"}]),onClick:L[0]||(L[0]=F=>e.value="workspace")}," Workspace ",2),Be("button",{class:dn(["tab-btn",{active:e.value==="grid"}]),onClick:L[1]||(L[1]=F=>e.value="grid")}," Grid ",2),Be("button",{class:dn(["tab-btn",{active:e.value==="log"}]),onClick:L[2]||(L[2]=F=>e.value="log")}," Log ",2),Be("button",{class:dn(["tab-btn",{active:e.value==="candle"}]),onClick:L[3]||(L[3]=F=>e.value="candle")}," Candle ",2),Be("button",{class:dn(["tab-btn",{active:e.value==="terminal"}]),onClick:L[4]||(L[4]=F=>e.value="terminal")}," Terminal ",2)]),L[26]||(L[26]=Be("label",null,"Theme",-1)),Ht(Be("select",{"onUpdate:modelValue":L[5]||(L[5]=F=>t.value=F)},[...L[17]||(L[17]=[Be("option",{value:"none"},"Default (dark)",-1),Be("option",{value:"phosphor"},"Phosphor Green",-1),Be("option",{value:"amber"},"Amber",-1),Be("option",{value:"paper"},"Paper (light)",-1)])],512),[[mg,t.value]]),Be("label",null,"Curve "+Sn(A.value),1),Ht(Be("input",{type:"range",min:"0",max:"45",step:"1","onUpdate:modelValue":L[6]||(L[6]=F=>A.value=F),style:{width:"110px"}},null,512),[[lh,A.value,void 0,{number:!0}]]),Be("label",null,[Ht(Be("input",{type:"checkbox","onUpdate:modelValue":L[7]||(L[7]=F=>R.value=F)},null,512),[[er,R.value]]),L[18]||(L[18]=oi(" Scanlines",-1))]),Be("label",null,[Ht(Be("input",{type:"checkbox","onUpdate:modelValue":L[8]||(L[8]=F=>M.value=F)},null,512),[[er,M.value]]),L[19]||(L[19]=oi(" Glow",-1))]),e.value!=="terminal"?(Je(),yt("label",Ky,[Ht(Be("input",{type:"checkbox","onUpdate:modelValue":L[9]||(L[9]=F=>C.value=F),"data-testid":"cf-magnify"},null,512),[[er,C.value]]),L[20]||(L[20]=oi(" Magnify ",-1))])):Zt("",!0),Be("label",null,[Ht(Be("input",{type:"checkbox","onUpdate:modelValue":L[10]||(L[10]=F=>N.value=F),"data-testid":"cf-show-loaders"},null,512),[[er,N.value]]),L[21]||(L[21]=oi(" Show loaders ",-1))]),e.value==="candle"?(Je(),yt("label",jy,[Ht(Be("input",{type:"checkbox","onUpdate:modelValue":L[11]||(L[11]=F=>H.value=F),"data-testid":"cf-show-indicators"},null,512),[[er,H.value]]),L[22]||(L[22]=oi(" Indicators ",-1))])):Zt("",!0),e.value==="candle"?(Je(),yt("label",Zy,[Ht(Be("input",{type:"checkbox","onUpdate:modelValue":L[12]||(L[12]=F=>q.value=F),"data-testid":"cf-flat"},null,512),[[er,q.value]]),L[23]||(L[23]=oi(" Flat (no GL) ",-1))])):Zt("",!0),e.value==="candle"?(Je(),yt("label",Jy,[Ht(Be("input",{type:"checkbox","onUpdate:modelValue":L[13]||(L[13]=F=>J.value=F),"data-testid":"cf-compact"},null,512),[[er,J.value]]),L[24]||(L[24]=oi(" Compact ",-1))])):Zt("",!0),L[27]||(L[27]=Be("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(Je(),yt(jt,{key:4},[Be("div",Qy,[Be("button",{class:dn({active:I.value==="all"}),onClick:L[14]||(L[14]=F=>z("all"))},"All",2),Be("button",{class:dn({active:I.value==="open"}),onClick:L[15]||(L[15]=F=>z("open"))},"Open",2),Be("button",{class:dn({active:I.value==="closed"}),onClick:L[16]||(L[16]=F=>z("closed"))},"Closed",2)]),Be("input",{class:"demo-filter",placeholder:"Quick filter…",value:S.value,onInput:j},null,40,eE)],64)):Zt("",!0)]),Ht(Be("div",tE,[N.value?(Je(),Pt(Ii,{key:0,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow"])):(Je(),Pt(Hf,{key:B.value,"column-defs":T,"default-col-def":b,"row-height":28,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,magnify:C.value,pagination:!0,"pagination-page-size":50,onGridReady:Y},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[Wr,e.value==="grid"]]),Ht(Be("div",nE,[N.value?(Je(),Pt(Ii,{key:0,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow"])):(Je(),Pt(gc,{key:1,entries:oe.value,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,magnify:C.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[Wr,e.value==="log"]]),Ht(Be("div",iE,[N.value?(Je(),Pt(Ii,{key:0,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow"])):(Je(),Pt(Xf,{key:`cf-${q.value}`,candles:Ke.value,overlays:H.value?de.value:[],markers:H.value?ne.value:[],theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,flat:q.value,compact:J.value,magnify:C.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[Wr,e.value==="candle"]]),Ht(Be("div",rE,[N.value?(Je(),Pt(Ii,{key:0,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow"])):(Je(),Pt(Yf,{key:1,entries:Me.value,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,busy:ve.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:_e},null,8,["entries","theme","curvature","scanlines","glow","busy"]))],512),[[Wr,e.value==="terminal"]]),Ht(Tt(Iy,{"storage-key":"cathode.demo.layout","initial-layout":_d(ge),"container-titles":le},{default:ur(()=>[Tt(Io,{id:"trades",title:"Trades",curvature:A.value,canvas:""},{default:ur(({resizeKey:F})=>[N.value?(Je(),Pt(Ii,{key:0,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow"])):(Je(),Pt(Hf,{key:F,"column-defs":T,"default-col-def":b,"row-height":26,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,magnify:C.value,pagination:!0,"pagination-page-size":50,onGridReady:Y},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Tt(Io,{id:"chart",title:"Chart",curvature:A.value,canvas:""},{default:ur(({resizeKey:F})=>[N.value?(Je(),Pt(Ii,{key:0,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow"])):(Je(),Pt(Xf,{key:F,candles:Ke.value,overlays:de.value,markers:ne.value,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,magnify:C.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Tt(Io,{id:"log",title:"Log",curvature:A.value,canvas:""},{default:ur(()=>[N.value?(Je(),Pt(Ii,{key:0,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow"])):(Je(),Pt(gc,{key:1,entries:oe.value,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,magnify:C.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),Tt(Io,{id:"terminal",title:"Terminal",curvature:A.value,canvas:""},{default:ur(()=>[N.value?(Je(),Pt(Ii,{key:0,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow"])):(Je(),Pt(Yf,{key:1,entries:Me.value,theme:t.value,curvature:A.value,scanlines:R.value,glow:M.value,busy:ve.value,prompt:"→ ",onSubmit:_e},null,8,["entries","theme","curvature","scanlines","glow","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[Wr,e.value==="workspace"]])],2))}}),oE=qi(sE,[["__scopeId","data-v-0336853a"]]);yg(oE).mount("#app");
