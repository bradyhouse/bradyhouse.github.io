(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},qr=[],Yn=()=>{},Kf=()=>!1,ia=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ra=n=>n.startsWith("onUpdate:"),Rt=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qh=Object.prototype.hasOwnProperty,lt=(n,e)=>qh.call(n,e),Ye=Array.isArray,Kr=n=>Ks(n)==="[object Map]",fs=n=>Ks(n)==="[object Set]",eu=n=>Ks(n)==="[object Date]",Ze=n=>typeof n=="function",Et=n=>typeof n=="string",Ln=n=>typeof n=="symbol",ut=n=>n!==null&&typeof n=="object",jf=n=>(ut(n)||Ze(n))&&Ze(n.then)&&Ze(n.catch),Zf=Object.prototype.toString,Ks=n=>Zf.call(n),Kh=n=>Ks(n).slice(8,-1),Jf=n=>Ks(n)==="[object Object]",Sc=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ls=xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},jh=/-\w/g,Rn=sa(n=>n.replace(jh,e=>e.slice(1).toUpperCase())),Zh=/\B([A-Z])/g,Gi=sa(n=>n.replace(Zh,"-$1").toLowerCase()),Qf=sa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sa=sa(n=>n?`on${Qf(n)}`:""),Wn=(n,e)=>!Object.is(n,e),Uo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ed=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},oa=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Jh=n=>{const e=Et(n)?Number(n):NaN;return isNaN(e)?n:e};let tu;const aa=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rn(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Et(i)?np(i):rn(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(n)||ut(n))return n}const Qh=/;(?![^(]*\))/g,ep=/:([^]+)/,tp=/\/\*[^]*?\*\//g;function np(n){const e={};return n.replace(tp,"").split(Qh).forEach(t=>{if(t){const i=t.split(ep);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function un(n){let e="";if(Et(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=un(n[t]);i&&(e+=i+" ")}else if(ut(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rp=xc(ip);function td(n){return!!n||n===""}function sp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ds(n[i],e[i]);return t}function ds(n,e){if(n===e)return!0;let t=eu(n),i=eu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Ln(n),i=Ln(e),t||i)return n===e;if(t=Ye(n),i=Ye(e),t||i)return t&&i?sp(n,e):!1;if(t=ut(n),i=ut(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ds(n[o],e[o]))return!1}}return String(n)===String(e)}function yc(n,e){return n.findIndex(t=>ds(t,e))}const nd=n=>!!(n&&n.__v_isRef===!0),_n=n=>Et(n)?n:n==null?"":Ye(n)||ut(n)&&(n.toString===Zf||!Ze(n.toString))?nd(n)?_n(n.value):JSON.stringify(n,id,2):String(n),id=(n,e)=>nd(e)?id(n,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[ya(i,s)+" =>"]=r,t),{})}:fs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ya(t))}:Ln(e)?ya(e):ut(e)&&!Ye(e)&&!Jf(e)?String(e):e,ya=(n,e="")=>{var t;return Ln(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class op{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){++this._on===1&&(this.prevScope=nn,nn=this)}off(){this._on>0&&--this._on===0&&(nn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ap(){return nn}let mt;const Ea=new WeakSet;class rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nu(this),ad(this);const e=mt,t=Pn;mt=this,Pn=!0;try{return this.fn()}finally{ld(this),mt=e,Pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tc(e);this.deps=this.depsTail=void 0,nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ml(this)&&this.run()}get dirty(){return ml(this)}}let sd=0,Is,Us;function od(n,e=!1){if(n.flags|=8,e){n.next=Us,Us=n;return}n.next=Is,Is=n}function Ec(){sd++}function bc(){if(--sd>0)return;if(Us){let e=Us;for(Us=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Is;){let e=Is;for(Is=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ad(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ld(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Tc(i),lp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ml(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function cd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ks)||(n.globalVersion=ks,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ml(n))))return;n.flags|=2;const e=n.dep,t=mt,i=Pn;mt=n,Pn=!0;try{ad(n);const r=n.fn(n._value);(e.version===0||Wn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{mt=t,Pn=i,ld(n),n.flags&=-3}}function Tc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Tc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function lp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Pn=!0;const ud=[];function mi(){ud.push(Pn),Pn=!1}function gi(){const n=ud.pop();Pn=n===void 0?!0:n}function nu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=mt;mt=void 0;try{e()}finally{mt=t}}}let ks=0;class cp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!mt||!Pn||mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==mt)t=this.activeLink=new cp(mt,this),mt.deps?(t.prevDep=mt.depsTail,mt.depsTail.nextDep=t,mt.depsTail=t):mt.deps=mt.depsTail=t,fd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=mt.depsTail,t.nextDep=void 0,mt.depsTail.nextDep=t,mt.depsTail=t,mt.deps===t&&(mt.deps=i)}return t}trigger(e){this.version++,ks++,this.notify(e)}notify(e){Ec();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bc()}}}function fd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)fd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const gl=new WeakMap,pr=Symbol(""),vl=Symbol(""),zs=Symbol("");function kt(n,e,t){if(Pn&&mt){let i=gl.get(n);i||gl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new wc),r.map=i,r.key=t),r.track()}}function li(n,e,t,i,r,s){const o=gl.get(n);if(!o){ks++;return}const a=l=>{l&&l.trigger()};if(Ec(),e==="clear")o.forEach(a);else{const l=Ye(n),c=l&&Sc(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===zs||!Ln(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(zs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(pr)),Kr(n)&&a(o.get(vl)));break;case"delete":l||(a(o.get(pr)),Kr(n)&&a(o.get(vl)));break;case"set":Kr(n)&&a(o.get(pr));break}}bc()}function Rr(n){const e=st(n);return e===n?e:(kt(e,"iterate",zs),xn(n)?e:e.map(In))}function la(n){return kt(n=st(n),"iterate",zs),n}function Hn(n,e){return vi(n)?is(mr(n)?In(e):e):In(e)}const up={__proto__:null,[Symbol.iterator](){return ba(this,Symbol.iterator,n=>Hn(this,n))},concat(...n){return Rr(this).concat(...n.map(e=>Ye(e)?Rr(e):e))},entries(){return ba(this,"entries",n=>(n[1]=Hn(this,n[1]),n))},every(n,e){return Zn(this,"every",n,e,void 0,arguments)},filter(n,e){return Zn(this,"filter",n,e,t=>t.map(i=>Hn(this,i)),arguments)},find(n,e){return Zn(this,"find",n,e,t=>Hn(this,t),arguments)},findIndex(n,e){return Zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Zn(this,"findLast",n,e,t=>Hn(this,t),arguments)},findLastIndex(n,e){return Zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ta(this,"includes",n)},indexOf(...n){return Ta(this,"indexOf",n)},join(n){return Rr(this).join(n)},lastIndexOf(...n){return Ta(this,"lastIndexOf",n)},map(n,e){return Zn(this,"map",n,e,void 0,arguments)},pop(){return xs(this,"pop")},push(...n){return xs(this,"push",n)},reduce(n,...e){return iu(this,"reduce",n,e)},reduceRight(n,...e){return iu(this,"reduceRight",n,e)},shift(){return xs(this,"shift")},some(n,e){return Zn(this,"some",n,e,void 0,arguments)},splice(...n){return xs(this,"splice",n)},toReversed(){return Rr(this).toReversed()},toSorted(n){return Rr(this).toSorted(n)},toSpliced(...n){return Rr(this).toSpliced(...n)},unshift(...n){return xs(this,"unshift",n)},values(){return ba(this,"values",n=>Hn(this,n))}};function ba(n,e,t){const i=la(n),r=i[e]();return i!==n&&!xn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const fp=Array.prototype;function Zn(n,e,t,i,r,s){const o=la(n),a=o!==n&&!xn(n),l=o[e];if(l!==fp[e]){const f=l.apply(n,s);return a?In(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Hn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function iu(n,e,t,i){const r=la(n),s=r!==n&&!xn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Hn(n,c)),t.call(this,c,Hn(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?Hn(n,l):l}function Ta(n,e,t){const i=st(n);kt(i,"iterate",zs);const r=i[e](...t);return(r===-1||r===!1)&&Rc(t[0])?(t[0]=st(t[0]),i[e](...t)):r}function xs(n,e,t=[]){mi(),Ec();const i=st(n)[e].apply(n,t);return bc(),gi(),i}const dp=xc("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ln));function hp(n){Ln(n)||(n=String(n));const e=st(this);return kt(e,"has",n),e.hasOwnProperty(n)}class hd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ep:vd:s?gd:md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!r){let l;if(o&&(l=up[t]))return l;if(t==="hasOwnProperty")return hp}const a=Reflect.get(e,t,Vt(e)?e:i);if((Ln(t)?dd.has(t):dp(t))||(r||kt(e,"get",t),s))return a;if(Vt(a)){const l=o&&Sc(t)?a:a.value;return r&&ut(l)?xl(l):l}return ut(a)?r?xl(a):jr(a):a}}class pd extends hd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ye(e)&&Sc(t);if(!this._isShallow){const c=vi(s);if(!xn(i)&&!vi(i)&&(s=st(s),i=st(i)),!o&&Vt(s)&&!Vt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:lt(e,t),l=Reflect.set(e,t,i,Vt(e)?e:r);return e===st(r)&&(a?Wn(i,s)&&li(e,"set",t,i):li(e,"add",t,i)),l}deleteProperty(e,t){const i=lt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&li(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ln(t)||!dd.has(t))&&kt(e,"has",t),i}ownKeys(e){return kt(e,"iterate",Ye(e)?"length":pr),Reflect.ownKeys(e)}}class pp extends hd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mp=new pd,gp=new pp,vp=new pd(!0);const _l=n=>n,oo=n=>Reflect.getPrototypeOf(n);function _p(n,e,t){return function(...i){const r=this.__v_raw,s=st(r),o=Kr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?_l:e?is:In;return!e&&kt(s,"iterate",l?vl:pr),Rt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function ao(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function xp(n,e){const t={get(r){const s=this.__v_raw,o=st(s),a=st(r);n||(Wn(r,a)&&kt(o,"get",r),kt(o,"get",a));const{has:l}=oo(o),c=e?_l:n?is:In;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&kt(st(r),"iterate",pr),r.size},has(r){const s=this.__v_raw,o=st(s),a=st(r);return n||(Wn(r,a)&&kt(o,"has",r),kt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=st(a),c=e?_l:n?is:In;return!n&&kt(l,"iterate",pr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Rt(t,n?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(r){const s=st(this),o=oo(s),a=st(r),l=!e&&!xn(r)&&!vi(r)?a:r;return o.has.call(s,l)||Wn(r,l)&&o.has.call(s,r)||Wn(a,l)&&o.has.call(s,a)||(s.add(l),li(s,"add",l,l)),this},set(r,s){!e&&!xn(s)&&!vi(s)&&(s=st(s));const o=st(this),{has:a,get:l}=oo(o);let c=a.call(o,r);c||(r=st(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Wn(s,u)&&li(o,"set",r,s):li(o,"add",r,s),this},delete(r){const s=st(this),{has:o,get:a}=oo(s);let l=o.call(s,r);l||(r=st(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&li(s,"delete",r,void 0),c},clear(){const r=st(this),s=r.size!==0,o=r.clear();return s&&li(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_p(r,n,e)}),t}function Ac(n,e){const t=xp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(lt(t,r)&&r in i?t:i,r,s)}const Mp={get:Ac(!1,!1)},Sp={get:Ac(!1,!0)},yp={get:Ac(!0,!1)};const md=new WeakMap,gd=new WeakMap,vd=new WeakMap,Ep=new WeakMap;function bp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tp(n){return n.__v_skip||!Object.isExtensible(n)?0:bp(Kh(n))}function jr(n){return vi(n)?n:Cc(n,!1,mp,Mp,md)}function wp(n){return Cc(n,!1,vp,Sp,gd)}function xl(n){return Cc(n,!0,gp,yp,vd)}function Cc(n,e,t,i,r){if(!ut(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Tp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function mr(n){return vi(n)?mr(n.__v_raw):!!(n&&n.__v_isReactive)}function vi(n){return!!(n&&n.__v_isReadonly)}function xn(n){return!!(n&&n.__v_isShallow)}function Rc(n){return n?!!n.__v_raw:!1}function st(n){const e=n&&n.__v_raw;return e?st(e):n}function Ap(n){return!lt(n,"__v_skip")&&Object.isExtensible(n)&&ed(n,"__v_skip",!0),n}const In=n=>ut(n)?jr(n):n,is=n=>ut(n)?xl(n):n;function Vt(n){return n?n.__v_isRef===!0:!1}function De(n){return Cp(n,!1)}function Cp(n,e){return Vt(n)?n:new Rp(n,e)}class Rp{constructor(e,t){this.dep=new wc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:st(e),this._value=t?e:In(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||xn(e)||vi(e);e=i?e:st(e),Wn(e,t)&&(this._rawValue=e,this._value=i?e:In(e),this.dep.trigger())}}function _d(n){return Vt(n)?n.value:n}const Pp={get:(n,e,t)=>e==="__v_raw"?n:_d(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Vt(r)&&!Vt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function xd(n){return mr(n)?n:new Proxy(n,Pp)}class Dp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return od(this,!0),!0}get value(){const e=this.dep.track();return cd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Lp(n,e,t=!1){let i,r;return Ze(n)?i=n:(i=n.get,r=n.set),new Dp(i,r,t)}const lo={},Go=new WeakMap;let rr;function Ip(n,e=!1,t=rr){if(t){let i=Go.get(t);i||Go.set(t,i=[]),i.push(n)}}function Up(n,e,t=ht){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:xn(E)||r===!1||r===0?ci(E,1):ci(E);let u,f,h,g,_=!1,x=!1;if(Vt(n)?(f=()=>n.value,_=xn(n)):mr(n)?(f=()=>c(n),_=!0):Ye(n)?(x=!0,_=n.some(E=>mr(E)||xn(E)),f=()=>n.map(E=>{if(Vt(E))return E.value;if(mr(E))return c(E);if(Ze(E))return l?l(E,2):E()})):Ze(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){mi();try{h()}finally{gi()}}const E=rr;rr=u;try{return l?l(n,3,[g]):n(g)}finally{rr=E}}:f=Yn,e&&r){const E=f,R=r===!0?1/0:r;f=()=>ci(E(),R)}const p=ap(),d=()=>{u.stop(),p&&p.active&&Mc(p.effects,u)};if(s&&e){const E=e;e=(...R)=>{E(...R),d()}}let C=x?new Array(n.length).fill(lo):lo;const T=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const R=u.run();if(r||_||(x?R.some((D,P)=>Wn(D,C[P])):Wn(R,C))){h&&h();const D=rr;rr=u;try{const P=[R,C===lo?void 0:x&&C[0]===lo?[]:C,g];C=R,l?l(e,3,P):e(...P)}finally{rr=D}}}else u.run()};return a&&a(T),u=new rd(f),u.scheduler=o?()=>o(T,!1):T,g=E=>Ip(E,!1,u),h=u.onStop=()=>{const E=Go.get(u);if(E){if(l)l(E,4);else for(const R of E)R();Go.delete(u)}},e?i?T(!0):C=u.run():o?o(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ci(n,e=1/0,t){if(e<=0||!ut(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Vt(n))ci(n.value,e,t);else if(Ye(n))for(let i=0;i<n.length;i++)ci(n[i],e,t);else if(fs(n)||Kr(n))n.forEach(i=>{ci(i,e,t)});else if(Jf(n)){for(const i in n)ci(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ci(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function js(n,e,t,i){try{return i?n(...i):n()}catch(r){ca(r,e,t)}}function Un(n,e,t,i){if(Ze(n)){const r=js(n,e,t,i);return r&&jf(r)&&r.catch(s=>{ca(s,e,t)}),r}if(Ye(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Un(n[s],e,t,i));return r}}function ca(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){mi(),js(s,null,10,[n,l,c]),gi();return}}Np(n,t,r,i,o)}function Np(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const $t=[];let kn=-1;const Zr=[];let Li=null,Wr=0;const Md=Promise.resolve();let Wo=null;function Mn(n){const e=Wo||Md;return n?e.then(this?n.bind(this):n):e}function Fp(n){let e=kn+1,t=$t.length;for(;e<t;){const i=e+t>>>1,r=$t[i],s=Hs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Pc(n){if(!(n.flags&1)){const e=Hs(n),t=$t[$t.length-1];!t||!(n.flags&2)&&e>=Hs(t)?$t.push(n):$t.splice(Fp(e),0,n),n.flags|=1,Sd()}}function Sd(){Wo||(Wo=Md.then(Ed))}function Op(n){Ye(n)?Zr.push(...n):Li&&n.id===-1?Li.splice(Wr+1,0,n):n.flags&1||(Zr.push(n),n.flags|=1),Sd()}function ru(n,e,t=kn+1){for(;t<$t.length;t++){const i=$t[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;$t.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function yd(n){if(Zr.length){const e=[...new Set(Zr)].sort((t,i)=>Hs(t)-Hs(i));if(Zr.length=0,Li){Li.push(...e);return}for(Li=e,Wr=0;Wr<Li.length;Wr++){const t=Li[Wr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Li=null,Wr=0}}const Hs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ed(n){try{for(kn=0;kn<$t.length;kn++){const e=$t[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),js(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<$t.length;kn++){const e=$t[kn];e&&(e.flags&=-2)}kn=-1,$t.length=0,yd(),Wo=null,($t.length||Zr.length)&&Ed()}}let Ht=null,bd=null;function Xo(n){const e=Ht;return Ht=n,bd=n&&n.type.__scopeId||null,e}function ar(n,e=Ht,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&qo(-1);const s=Xo(e);let o;try{o=n(...r)}finally{Xo(s),i._d&&qo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Bt(n,e){if(Ht===null)return n;const t=pa(Ht),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ht]=e[r];s&&(Ze(s)&&(s={mounted:s,updated:s}),s.deep&&ci(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function $i(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(mi(),Un(l,t,8,[n.el,a,n,e]),gi())}}function Ml(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function Fi(n,e,t=!1){const i=nh();if(i||Qr){let r=Qr?Qr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ze(e)?e.call(i&&i.proxy):e}}const Bp=Symbol.for("v-scx"),kp=()=>Fi(Bp);function Xe(n,e,t){return Td(n,e,t)}function Td(n,e,t=ht){const{immediate:i,deep:r,flush:s,once:o}=t,a=Rt({},t),l=e&&i||!e&&s!=="post";let c;if(Xs){if(s==="sync"){const g=kp();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Yn,g.resume=Yn,g.pause=Yn,g}}const u=jt;a.call=(g,_,x)=>Un(g,u,_,x);let f=!1;s==="post"?a.scheduler=g=>{tn(g,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(g,_)=>{_?g():Pc(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=Up(n,e,a);return Xs&&(c?c.push(h):l&&h()),h}function zp(n,e,t){const i=this.proxy,r=Et(n)?n.includes(".")?wd(i,n):()=>i[n]:n.bind(i,i);let s;Ze(e)?s=e:(s=e.handler,t=e);const o=Zs(this),a=Td(r,s.bind(i),t);return o(),a}function wd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Hp=Symbol("_vte"),Ad=n=>n.__isTeleport,zn=Symbol("_leaveCb"),Ms=Symbol("_enterCb");function Vp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nn(()=>{n.isMounted=!0}),Nd(()=>{n.isUnmounting=!0}),n}const mn=[Function,Array],Cd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},Rd=n=>{const e=n.subTree;return e.component?Rd(e.component):e},Gp={name:"BaseTransition",props:Cd,setup(n,{slots:e}){const t=nh(),i=Vp();return()=>{const r=e.default&&Ld(e.default(),!0);if(!r||!r.length)return;const s=Pd(r),o=st(n),{mode:a}=o;if(i.isLeaving)return wa(s);const l=su(s);if(!l)return wa(s);let c=Sl(l,o,i,t,f=>c=f);l.type!==zt&&Vs(l,c);let u=t.subTree&&su(t.subTree);if(u&&u.type!==zt&&!lr(u,l)&&Rd(t).type!==zt){let f=Sl(u,o,i,t);if(Vs(u,f),a==="out-in"&&l.type!==zt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},wa(s);a==="in-out"&&l.type!==zt?f.delayLeave=(h,g,_)=>{const x=Dd(i,u);x[String(u.key)]=u,h[zn]=()=>{g(),h[zn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Pd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==zt){e=t;break}}return e}const Wp=Gp;function Dd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Sl(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:p,onAppear:d,onAfterAppear:C,onAppearCancelled:T}=e,E=String(n.key),R=Dd(t,n),D=(S,y)=>{S&&Un(S,i,9,y)},P=(S,y)=>{const L=y[1];D(S,y),Ye(S)?S.every(N=>N.length<=1)&&L():S.length<=1&&L()},F={mode:o,persisted:a,beforeEnter(S){let y=l;if(!t.isMounted)if(s)y=p||l;else return;S[zn]&&S[zn](!0);const L=R[E];L&&lr(n,L)&&L.el[zn]&&L.el[zn](),D(y,[S])},enter(S){if(R[E]===n)return;let y=c,L=u,N=f;if(!t.isMounted)if(s)y=d||c,L=C||u,N=T||f;else return;let H=!1;S[Ms]=Z=>{H||(H=!0,Z?D(N,[S]):D(L,[S]),F.delayedLeave&&F.delayedLeave(),S[Ms]=void 0)};const $=S[Ms].bind(null,!1);y?P(y,[S,$]):$()},leave(S,y){const L=String(n.key);if(S[Ms]&&S[Ms](!0),t.isUnmounting)return y();D(h,[S]);let N=!1;S[zn]=$=>{N||(N=!0,y(),$?D(x,[S]):D(_,[S]),S[zn]=void 0,R[L]===n&&delete R[L])};const H=S[zn].bind(null,!1);R[L]=n,g?P(g,[S,H]):H()},clone(S){const y=Sl(S,e,t,i,r);return r&&r(y),y}};return F}function wa(n){if(ua(n))return n=ki(n),n.children=null,n}function su(n){if(!ua(n))return Ad(n.type)&&n.children?Pd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ze(t.default))return t.default()}}function Vs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ld(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===qt?(o.patchFlag&128&&r++,i=i.concat(Ld(o.children,e,a))):(e||o.type!==zt)&&i.push(a!=null?ki(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Wi(n,e){return Ze(n)?Rt({name:n.name},e,{setup:n}):n}function Id(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ou(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Yo=new WeakMap;function Ns(n,e,t,i,r=!1){if(Ye(n)){n.forEach((x,p)=>Ns(x,e&&(Ye(e)?e[p]:e),t,i,r));return}if(Jr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ns(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?pa(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,f=a.setupState,h=st(f),g=f===ht?Kf:x=>ou(u,x)?!1:lt(h,x),_=(x,p)=>!(p&&ou(u,p));if(c!=null&&c!==l){if(au(e),Et(c))u[c]=null,g(c)&&(f[c]=null);else if(Vt(c)){const x=e;_(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Ze(l))js(l,a,12,[o,u]);else{const x=Et(l),p=Vt(l);if(x||p){const d=()=>{if(n.f){const C=x?g(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)Ye(C)&&Mc(C,s);else if(Ye(C))C.includes(s)||C.push(s);else if(x)u[l]=[s],g(l)&&(f[l]=u[l]);else{const T=[s];_(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else x?(u[l]=o,g(l)&&(f[l]=o)):p&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const C=()=>{d(),Yo.delete(n)};C.id=-1,Yo.set(n,C),tn(C,t)}else au(n),d()}}}function au(n){const e=Yo.get(n);e&&(e.flags|=8,Yo.delete(n))}aa().requestIdleCallback;aa().cancelIdleCallback;const Jr=n=>!!n.type.__asyncLoader,ua=n=>n.type.__isKeepAlive;function Xp(n,e){Ud(n,"a",e)}function Yp(n,e){Ud(n,"da",e)}function Ud(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(fa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ua(r.parent.vnode)&&$p(i,e,t,r),r=r.parent}}function $p(n,e,t,i){const r=fa(e,n,i,!0);qn(()=>{Mc(i[e],r)},t)}function fa(n,e,t=jt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{mi();const a=Zs(t),l=Un(e,t,n,o);return a(),gi(),l});return i?r.unshift(s):r.push(s),s}}const Si=n=>(e,t=jt)=>{(!Xs||n==="sp")&&fa(n,(...i)=>e(...i),t)},qp=Si("bm"),Nn=Si("m"),Kp=Si("bu"),jp=Si("u"),Nd=Si("bum"),qn=Si("um"),Zp=Si("sp"),Jp=Si("rtg"),Qp=Si("rtc");function em(n,e=jt){fa("ec",n,e)}const tm=Symbol.for("v-ndc");function nm(n,e,t,i){let r;const s=t,o=Ye(n);if(o||Et(n)){const a=o&&mr(n);let l=!1,c=!1;a&&(l=!xn(n),c=vi(n),n=la(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?is(In(n[u])):In(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ut(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function yl(n,e,t={},i,r){if(Ht.ce||Ht.parent&&Jr(Ht.parent)&&Ht.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),je(),At(qt,null,[St("slot",t,i)],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),je();const o=s&&Fd(s(t)),a=t.key||o&&o.key,l=At(qt,{key:(a&&!Ln(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Fd(n){return n.some(e=>Ws(e)?!(e.type===zt||e.type===qt&&!Fd(e.children)):!0)?n:null}const El=n=>n?ih(n)?pa(n):El(n.parent):null,Fs=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>El(n.parent),$root:n=>El(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bd(n),$forceUpdate:n=>n.f||(n.f=()=>{Pc(n.update)}),$nextTick:n=>n.n||(n.n=Mn.bind(n.proxy)),$watch:n=>zp.bind(n)}),Aa=(n,e)=>n!==ht&&!n.__isScriptSetup&&lt(n,e),im={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Aa(i,e))return o[e]=1,i[e];if(r!==ht&&lt(r,e))return o[e]=2,r[e];if(lt(s,e))return o[e]=3,s[e];if(t!==ht&&lt(t,e))return o[e]=4,t[e];bl&&(o[e]=0)}}const c=Fs[e];let u,f;if(c)return e==="$attrs"&&kt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ht&&lt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Aa(r,e)?(r[e]=t,!0):i!==ht&&lt(i,e)?(i[e]=t,!0):lt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==ht&&a[0]!=="$"&&lt(n,a)||Aa(e,a)||lt(s,a)||lt(i,a)||lt(Fs,a)||lt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:lt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lu(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bl=!0;function rm(n){const e=Bd(n),t=n.proxy,i=n.ctx;bl=!1,e.beforeCreate&&cu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:_,activated:x,deactivated:p,beforeDestroy:d,beforeUnmount:C,destroyed:T,unmounted:E,render:R,renderTracked:D,renderTriggered:P,errorCaptured:F,serverPrefetch:S,expose:y,inheritAttrs:L,components:N,directives:H,filters:$}=e;if(c&&sm(c,i,null),o)for(const K in o){const k=o[K];Ze(k)&&(i[K]=k.bind(t))}if(r){const K=r.call(t,t);ut(K)&&(n.data=jr(K))}if(bl=!0,s)for(const K in s){const k=s[K],ae=Ze(k)?k.bind(t,t):Ze(k.get)?k.get.bind(t,t):Yn,J=!Ze(k)&&Ze(k.set)?k.set.bind(t):Yn,ge=tt({get:ae,set:J});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>ge.value,set:we=>ge.value=we})}if(a)for(const K in a)Od(a[K],i,t,K);if(l){const K=Ze(l)?l.call(t):l;Reflect.ownKeys(K).forEach(k=>{Ml(k,K[k])})}u&&cu(u,n,"c");function X(K,k){Ye(k)?k.forEach(ae=>K(ae.bind(t))):k&&K(k.bind(t))}if(X(qp,f),X(Nn,h),X(Kp,g),X(jp,_),X(Xp,x),X(Yp,p),X(em,F),X(Qp,D),X(Jp,P),X(Nd,C),X(qn,E),X(Zp,S),Ye(y))if(y.length){const K=n.exposed||(n.exposed={});y.forEach(k=>{Object.defineProperty(K,k,{get:()=>t[k],set:ae=>t[k]=ae,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Yn&&(n.render=R),L!=null&&(n.inheritAttrs=L),N&&(n.components=N),H&&(n.directives=H),S&&Id(n)}function sm(n,e,t=Yn){Ye(n)&&(n=Tl(n));for(const i in n){const r=n[i];let s;ut(r)?"default"in r?s=Fi(r.from||i,r.default,!0):s=Fi(r.from||i):s=Fi(r),Vt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function cu(n,e,t){Un(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Od(n,e,t,i){let r=i.includes(".")?wd(t,i):()=>t[i];if(Et(n)){const s=e[n];Ze(s)&&Xe(r,s)}else if(Ze(n))Xe(r,n.bind(t));else if(ut(n))if(Ye(n))n.forEach(s=>Od(s,e,t,i));else{const s=Ze(n.handler)?n.handler.bind(t):e[n.handler];Ze(s)&&Xe(r,s,n)}}function Bd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>$o(l,c,o,!0)),$o(l,e,o)),ut(e)&&s.set(e,l),l}function $o(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&$o(n,s,t,!0),r&&r.forEach(o=>$o(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=om[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const om={data:uu,props:fu,emits:fu,methods:Rs,computed:Rs,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Rs,directives:Rs,watch:lm,provide:uu,inject:am};function uu(n,e){return e?n?function(){return Rt(Ze(n)?n.call(this,this):n,Ze(e)?e.call(this,this):e)}:e:n}function am(n,e){return Rs(Tl(n),Tl(e))}function Tl(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function Rs(n,e){return n?Rt(Object.create(null),n,e):e}function fu(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:Rt(Object.create(null),lu(n),lu(e??{})):e}function lm(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function kd(){return{app:null,config:{isNativeTag:Kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function um(n,e){return function(i,r=null){Ze(i)||(i=Rt({},i)),r!=null&&!ut(r)&&(r=null);const s=kd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:cm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(c,...f)):Ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const g=c._ceVNode||St(i,r);return g.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(g,u,h),l=!0,c._container=u,u.__vue_app__=c,pa(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Un(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Qr;Qr=c;try{return u()}finally{Qr=f}}};return c}}let Qr=null;const fm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Rn(e)}Modifiers`]||n[`${Gi(e)}Modifiers`];function dm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let r=t;const s=e.startsWith("update:"),o=s&&fm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Et(u)?u.trim():u)),o.number&&(r=t.map(oa)));let a,l=i[a=Sa(e)]||i[a=Sa(Rn(e))];!l&&s&&(l=i[a=Sa(Gi(e))]),l&&Un(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Un(c,n,6,r)}}const hm=new WeakMap;function zd(n,e,t=!1){const i=t?hm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ze(n)){const l=c=>{const u=zd(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ut(n)&&i.set(n,null),null):(Ye(s)?s.forEach(l=>o[l]=null):Rt(o,s),ut(n)&&i.set(n,o),o)}function da(n,e){return!n||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(n,e[0].toLowerCase()+e.slice(1))||lt(n,Gi(e))||lt(n,e))}function du(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:g,ctx:_,inheritAttrs:x}=n,p=Xo(n);let d,C;try{if(t.shapeFlag&4){const E=r||i,R=E;d=Vn(c.call(R,E,u,f,g,h,_)),C=a}else{const E=e;d=Vn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),C=e.props?a:pm(a)}}catch(E){Os.length=0,ca(E,n,1),d=St(zt)}let T=d;if(C&&x!==!1){const E=Object.keys(C),{shapeFlag:R}=T;E.length&&R&7&&(s&&E.some(ra)&&(C=mm(C,s)),T=ki(T,C,!1,!0))}return t.dirs&&(T=ki(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Vs(T,t.transition),d=T,Xo(p),d}const pm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ia(t))&&((e||(e={}))[t]=n[t]);return e},mm=(n,e)=>{const t={};for(const i in n)(!ra(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function gm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Hd(o,i,h)&&!da(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hu(i,o,c):!0:!!o;return!1}function hu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Hd(e,n,s)&&!da(t,s))return!0}return!1}function Hd(n,e,t){const i=n[t],r=e[t];return t==="style"&&ut(i)&&ut(r)?!ds(i,r):i!==r}function vm({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Vd={},Gd=()=>Object.create(Vd),Wd=n=>Object.getPrototypeOf(n)===Vd;function _m(n,e,t,i=!1){const r={},s=Gd();n.propsDefaults=Object.create(null),Xd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:wp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function xm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=st(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(da(n.emitsOptions,h))continue;const g=e[h];if(l)if(lt(s,h))g!==s[h]&&(s[h]=g,c=!0);else{const _=Rn(h);r[_]=wl(l,a,_,g,n,!1)}else g!==s[h]&&(s[h]=g,c=!0)}}}else{Xd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!lt(e,f)&&((u=Gi(f))===f||!lt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=wl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!lt(e,f))&&(delete s[f],c=!0)}c&&li(n.attrs,"set","")}function Xd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ls(l))continue;const c=e[l];let u;r&&lt(r,u=Rn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:da(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=st(t),c=a||ht;for(let u=0;u<s.length;u++){const f=s[u];t[f]=wl(r,l,f,c[f],n,!lt(c,f))}}return o}function wl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Zs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Gi(t))&&(i=!0))}return i}const Mm=new WeakMap;function Yd(n,e,t=!1){const i=t?Mm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ze(n)){const u=f=>{l=!0;const[h,g]=Yd(f,e,!0);Rt(o,h),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ut(n)&&i.set(n,qr),qr;if(Ye(s))for(let u=0;u<s.length;u++){const f=Rn(s[u]);pu(f)&&(o[f]=ht)}else if(s)for(const u in s){const f=Rn(u);if(pu(f)){const h=s[u],g=o[f]=Ye(h)||Ze(h)?{type:h}:Rt({},h),_=g.type;let x=!1,p=!0;if(Ye(_))for(let d=0;d<_.length;++d){const C=_[d],T=Ze(C)&&C.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(p=!1)}else x=Ze(_)&&_.name==="Boolean";g[0]=x,g[1]=p,(x||lt(g,"default"))&&a.push(f)}}const c=[o,a];return ut(n)&&i.set(n,c),c}function pu(n){return n[0]!=="$"&&!Ls(n)}const Dc=n=>n==="_"||n==="_ctx"||n==="$stable",Lc=n=>Ye(n)?n.map(Vn):[Vn(n)],Sm=(n,e,t)=>{if(e._n)return e;const i=ar((...r)=>Lc(e(...r)),t);return i._c=!1,i},$d=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Dc(r))continue;const s=n[r];if(Ze(s))e[r]=Sm(r,s,i);else if(s!=null){const o=Lc(s);e[r]=()=>o}}},qd=(n,e)=>{const t=Lc(e);n.slots.default=()=>t},Kd=(n,e,t)=>{for(const i in e)(t||!Dc(i))&&(n[i]=e[i])},ym=(n,e,t)=>{const i=n.slots=Gd();if(n.vnode.shapeFlag&32){const r=e._;r?(Kd(i,e,t),t&&ed(i,"_",r,!0)):$d(e,i)}else e&&qd(n,e)},Em=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Kd(r,e,t):(s=!e.$stable,$d(e,r)),o=e}else e&&(qd(n,e),o={default:1});if(s)for(const a in r)!Dc(a)&&o[a]==null&&delete r[a]},tn=Cm;function bm(n){return Tm(n)}function Tm(n,e){const t=aa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=Yn,insertStaticContent:_}=n,x=(A,U,b,ue=null,ee=null,ne=null,le=void 0,he=null,te=!!U.dynamicChildren)=>{if(A===U)return;A&&!lr(A,U)&&(ue=ve(A),we(A,ee,ne,!0),A=null),U.patchFlag===-2&&(te=!1,U.dynamicChildren=null);const{type:v,ref:m,shapeFlag:w}=U;switch(v){case ha:p(A,U,b,ue);break;case zt:d(A,U,b,ue);break;case Ra:A==null&&C(U,b,ue,le);break;case qt:N(A,U,b,ue,ee,ne,le,he,te);break;default:w&1?R(A,U,b,ue,ee,ne,le,he,te):w&6?H(A,U,b,ue,ee,ne,le,he,te):(w&64||w&128)&&v.process(A,U,b,ue,ee,ne,le,he,te,ze)}m!=null&&ee?Ns(m,A&&A.ref,ne,U||A,!U):m==null&&A&&A.ref!=null&&Ns(A.ref,null,ne,A,!0)},p=(A,U,b,ue)=>{if(A==null)i(U.el=a(U.children),b,ue);else{const ee=U.el=A.el;U.children!==A.children&&c(ee,U.children)}},d=(A,U,b,ue)=>{A==null?i(U.el=l(U.children||""),b,ue):U.el=A.el},C=(A,U,b,ue)=>{[A.el,A.anchor]=_(A.children,U,b,ue,A.el,A.anchor)},T=({el:A,anchor:U},b,ue)=>{let ee;for(;A&&A!==U;)ee=h(A),i(A,b,ue),A=ee;i(U,b,ue)},E=({el:A,anchor:U})=>{let b;for(;A&&A!==U;)b=h(A),r(A),A=b;r(U)},R=(A,U,b,ue,ee,ne,le,he,te)=>{if(U.type==="svg"?le="svg":U.type==="math"&&(le="mathml"),A==null)D(U,b,ue,ee,ne,le,he,te);else{const v=A.el&&A.el._isVueCE?A.el:null;try{v&&v._beginPatch(),S(A,U,ee,ne,le,he,te)}finally{v&&v._endPatch()}}},D=(A,U,b,ue,ee,ne,le,he)=>{let te,v;const{props:m,shapeFlag:w,transition:O,dirs:W}=A;if(te=A.el=o(A.type,ne,m&&m.is,m),w&8?u(te,A.children):w&16&&F(A.children,te,null,ue,ee,Ca(A,ne),le,he),W&&$i(A,null,ue,"created"),P(te,A,A.scopeId,le,ue),m){for(const fe in m)fe!=="value"&&!Ls(fe)&&s(te,fe,null,m[fe],ne,ue);"value"in m&&s(te,"value",null,m.value,ne),(v=m.onVnodeBeforeMount)&&Bn(v,ue,A)}W&&$i(A,null,ue,"beforeMount");const q=wm(ee,O);q&&O.beforeEnter(te),i(te,U,b),((v=m&&m.onVnodeMounted)||q||W)&&tn(()=>{try{v&&Bn(v,ue,A),q&&O.enter(te),W&&$i(A,null,ue,"mounted")}finally{}},ee)},P=(A,U,b,ue,ee)=>{if(b&&g(A,b),ue)for(let ne=0;ne<ue.length;ne++)g(A,ue[ne]);if(ee){let ne=ee.subTree;if(U===ne||Qd(ne.type)&&(ne.ssContent===U||ne.ssFallback===U)){const le=ee.vnode;P(A,le,le.scopeId,le.slotScopeIds,ee.parent)}}},F=(A,U,b,ue,ee,ne,le,he,te=0)=>{for(let v=te;v<A.length;v++){const m=A[v]=he?ai(A[v]):Vn(A[v]);x(null,m,U,b,ue,ee,ne,le,he)}},S=(A,U,b,ue,ee,ne,le)=>{const he=U.el=A.el;let{patchFlag:te,dynamicChildren:v,dirs:m}=U;te|=A.patchFlag&16;const w=A.props||ht,O=U.props||ht;let W;if(b&&qi(b,!1),(W=O.onVnodeBeforeUpdate)&&Bn(W,b,U,A),m&&$i(U,A,b,"beforeUpdate"),b&&qi(b,!0),(w.innerHTML&&O.innerHTML==null||w.textContent&&O.textContent==null)&&u(he,""),v?y(A.dynamicChildren,v,he,b,ue,Ca(U,ee),ne):le||k(A,U,he,null,b,ue,Ca(U,ee),ne,!1),te>0){if(te&16)L(he,w,O,b,ee);else if(te&2&&w.class!==O.class&&s(he,"class",null,O.class,ee),te&4&&s(he,"style",w.style,O.style,ee),te&8){const q=U.dynamicProps;for(let fe=0;fe<q.length;fe++){const se=q[fe],de=w[se],Ae=O[se];(Ae!==de||se==="value")&&s(he,se,de,Ae,ee,b)}}te&1&&A.children!==U.children&&u(he,U.children)}else!le&&v==null&&L(he,w,O,b,ee);((W=O.onVnodeUpdated)||m)&&tn(()=>{W&&Bn(W,b,U,A),m&&$i(U,A,b,"updated")},ue)},y=(A,U,b,ue,ee,ne,le)=>{for(let he=0;he<U.length;he++){const te=A[he],v=U[he],m=te.el&&(te.type===qt||!lr(te,v)||te.shapeFlag&198)?f(te.el):b;x(te,v,m,null,ue,ee,ne,le,!0)}},L=(A,U,b,ue,ee)=>{if(U!==b){if(U!==ht)for(const ne in U)!Ls(ne)&&!(ne in b)&&s(A,ne,U[ne],null,ee,ue);for(const ne in b){if(Ls(ne))continue;const le=b[ne],he=U[ne];le!==he&&ne!=="value"&&s(A,ne,he,le,ee,ue)}"value"in b&&s(A,"value",U.value,b.value,ee)}},N=(A,U,b,ue,ee,ne,le,he,te)=>{const v=U.el=A?A.el:a(""),m=U.anchor=A?A.anchor:a("");let{patchFlag:w,dynamicChildren:O,slotScopeIds:W}=U;W&&(he=he?he.concat(W):W),A==null?(i(v,b,ue),i(m,b,ue),F(U.children||[],b,m,ee,ne,le,he,te)):w>0&&w&64&&O&&A.dynamicChildren&&A.dynamicChildren.length===O.length?(y(A.dynamicChildren,O,b,ee,ne,le,he),(U.key!=null||ee&&U===ee.subTree)&&jd(A,U,!0)):k(A,U,b,m,ee,ne,le,he,te)},H=(A,U,b,ue,ee,ne,le,he,te)=>{U.slotScopeIds=he,A==null?U.shapeFlag&512?ee.ctx.activate(U,b,ue,le,te):$(U,b,ue,ee,ne,le,te):Z(A,U,te)},$=(A,U,b,ue,ee,ne,le)=>{const he=A.component=Nm(A,ue,ee);if(ua(A)&&(he.ctx.renderer=ze),Fm(he,!1,le),he.asyncDep){if(ee&&ee.registerDep(he,X,le),!A.el){const te=he.subTree=St(zt);d(null,te,U,b),A.placeholder=te.el}}else X(he,A,U,b,ee,ne,le)},Z=(A,U,b)=>{const ue=U.component=A.component;if(gm(A,U,b))if(ue.asyncDep&&!ue.asyncResolved){K(ue,U,b);return}else ue.next=U,ue.update();else U.el=A.el,ue.vnode=U},X=(A,U,b,ue,ee,ne,le)=>{const he=()=>{if(A.isMounted){let{next:w,bu:O,u:W,parent:q,vnode:fe}=A;{const ie=Zd(A);if(ie){w&&(w.el=fe.el,K(A,w,le)),ie.asyncDep.then(()=>{tn(()=>{A.isUnmounted||v()},ee)});return}}let se=w,de;qi(A,!1),w?(w.el=fe.el,K(A,w,le)):w=fe,O&&Uo(O),(de=w.props&&w.props.onVnodeBeforeUpdate)&&Bn(de,q,w,fe),qi(A,!0);const Ae=du(A),B=A.subTree;A.subTree=Ae,x(B,Ae,f(B.el),ve(B),A,ee,ne),w.el=Ae.el,se===null&&vm(A,Ae.el),W&&tn(W,ee),(de=w.props&&w.props.onVnodeUpdated)&&tn(()=>Bn(de,q,w,fe),ee)}else{let w;const{el:O,props:W}=U,{bm:q,m:fe,parent:se,root:de,type:Ae}=A,B=Jr(U);qi(A,!1),q&&Uo(q),!B&&(w=W&&W.onVnodeBeforeMount)&&Bn(w,se,U),qi(A,!0);{de.ce&&de.ce._hasShadowRoot()&&de.ce._injectChildStyle(Ae,A.parent?A.parent.type:void 0);const ie=A.subTree=du(A);x(null,ie,b,ue,A,ee,ne),U.el=ie.el}if(fe&&tn(fe,ee),!B&&(w=W&&W.onVnodeMounted)){const ie=U;tn(()=>Bn(w,se,ie),ee)}(U.shapeFlag&256||se&&Jr(se.vnode)&&se.vnode.shapeFlag&256)&&A.a&&tn(A.a,ee),A.isMounted=!0,U=b=ue=null}};A.scope.on();const te=A.effect=new rd(he);A.scope.off();const v=A.update=te.run.bind(te),m=A.job=te.runIfDirty.bind(te);m.i=A,m.id=A.uid,te.scheduler=()=>Pc(m),qi(A,!0),v()},K=(A,U,b)=>{U.component=A;const ue=A.vnode.props;A.vnode=U,A.next=null,xm(A,U.props,ue,b),Em(A,U.children,b),mi(),ru(A),gi()},k=(A,U,b,ue,ee,ne,le,he,te=!1)=>{const v=A&&A.children,m=A?A.shapeFlag:0,w=U.children,{patchFlag:O,shapeFlag:W}=U;if(O>0){if(O&128){J(v,w,b,ue,ee,ne,le,he,te);return}else if(O&256){ae(v,w,b,ue,ee,ne,le,he,te);return}}W&8?(m&16&&Ee(v,ee,ne),w!==v&&u(b,w)):m&16?W&16?J(v,w,b,ue,ee,ne,le,he,te):Ee(v,ee,ne,!0):(m&8&&u(b,""),W&16&&F(w,b,ue,ee,ne,le,he,te))},ae=(A,U,b,ue,ee,ne,le,he,te)=>{A=A||qr,U=U||qr;const v=A.length,m=U.length,w=Math.min(v,m);let O;for(O=0;O<w;O++){const W=U[O]=te?ai(U[O]):Vn(U[O]);x(A[O],W,b,null,ee,ne,le,he,te)}v>m?Ee(A,ee,ne,!0,!1,w):F(U,b,ue,ee,ne,le,he,te,w)},J=(A,U,b,ue,ee,ne,le,he,te)=>{let v=0;const m=U.length;let w=A.length-1,O=m-1;for(;v<=w&&v<=O;){const W=A[v],q=U[v]=te?ai(U[v]):Vn(U[v]);if(lr(W,q))x(W,q,b,null,ee,ne,le,he,te);else break;v++}for(;v<=w&&v<=O;){const W=A[w],q=U[O]=te?ai(U[O]):Vn(U[O]);if(lr(W,q))x(W,q,b,null,ee,ne,le,he,te);else break;w--,O--}if(v>w){if(v<=O){const W=O+1,q=W<m?U[W].el:ue;for(;v<=O;)x(null,U[v]=te?ai(U[v]):Vn(U[v]),b,q,ee,ne,le,he,te),v++}}else if(v>O)for(;v<=w;)we(A[v],ee,ne,!0),v++;else{const W=v,q=v,fe=new Map;for(v=q;v<=O;v++){const ye=U[v]=te?ai(U[v]):Vn(U[v]);ye.key!=null&&fe.set(ye.key,v)}let se,de=0;const Ae=O-q+1;let B=!1,ie=0;const Me=new Array(Ae);for(v=0;v<Ae;v++)Me[v]=0;for(v=W;v<=w;v++){const ye=A[v];if(de>=Ae){we(ye,ee,ne,!0);continue}let ke;if(ye.key!=null)ke=fe.get(ye.key);else for(se=q;se<=O;se++)if(Me[se-q]===0&&lr(ye,U[se])){ke=se;break}ke===void 0?we(ye,ee,ne,!0):(Me[ke-q]=v+1,ke>=ie?ie=ke:B=!0,x(ye,U[ke],b,null,ee,ne,le,he,te),de++)}const Te=B?Am(Me):qr;for(se=Te.length-1,v=Ae-1;v>=0;v--){const ye=q+v,ke=U[ye],Ge=U[ye+1],et=ye+1<m?Ge.el||Jd(Ge):ue;Me[v]===0?x(null,ke,b,et,ee,ne,le,he,te):B&&(se<0||v!==Te[se]?ge(ke,b,et,2):se--)}}},ge=(A,U,b,ue,ee=null)=>{const{el:ne,type:le,transition:he,children:te,shapeFlag:v}=A;if(v&6){ge(A.component.subTree,U,b,ue);return}if(v&128){A.suspense.move(U,b,ue);return}if(v&64){le.move(A,U,b,ze);return}if(le===qt){i(ne,U,b);for(let w=0;w<te.length;w++)ge(te[w],U,b,ue);i(A.anchor,U,b);return}if(le===Ra){T(A,U,b);return}if(ue!==2&&v&1&&he)if(ue===0)he.beforeEnter(ne),i(ne,U,b),tn(()=>he.enter(ne),ee);else{const{leave:w,delayLeave:O,afterLeave:W}=he,q=()=>{A.ctx.isUnmounted?r(ne):i(ne,U,b)},fe=()=>{ne._isLeaving&&ne[zn](!0),w(ne,()=>{q(),W&&W()})};O?O(ne,q,fe):fe()}else i(ne,U,b)},we=(A,U,b,ue=!1,ee=!1)=>{const{type:ne,props:le,ref:he,children:te,dynamicChildren:v,shapeFlag:m,patchFlag:w,dirs:O,cacheIndex:W,memo:q}=A;if(w===-2&&(ee=!1),he!=null&&(mi(),Ns(he,null,b,A,!0),gi()),W!=null&&(U.renderCache[W]=void 0),m&256){U.ctx.deactivate(A);return}const fe=m&1&&O,se=!Jr(A);let de;if(se&&(de=le&&le.onVnodeBeforeUnmount)&&Bn(de,U,A),m&6)me(A.component,b,ue);else{if(m&128){A.suspense.unmount(b,ue);return}fe&&$i(A,null,U,"beforeUnmount"),m&64?A.type.remove(A,U,b,ze,ue):v&&!v.hasOnce&&(ne!==qt||w>0&&w&64)?Ee(v,U,b,!1,!0):(ne===qt&&w&384||!ee&&m&16)&&Ee(te,U,b),ue&&Ve(A)}const Ae=q!=null&&W==null;(se&&(de=le&&le.onVnodeUnmounted)||fe||Ae)&&tn(()=>{de&&Bn(de,U,A),fe&&$i(A,null,U,"unmounted"),Ae&&(A.el=null)},b)},Ve=A=>{const{type:U,el:b,anchor:ue,transition:ee}=A;if(U===qt){re(b,ue);return}if(U===Ra){E(A);return}const ne=()=>{r(b),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(A.shapeFlag&1&&ee&&!ee.persisted){const{leave:le,delayLeave:he}=ee,te=()=>le(b,ne);he?he(A.el,ne,te):te()}else ne()},re=(A,U)=>{let b;for(;A!==U;)b=h(A),r(A),A=b;r(U)},me=(A,U,b)=>{const{bum:ue,scope:ee,job:ne,subTree:le,um:he,m:te,a:v}=A;mu(te),mu(v),ue&&Uo(ue),ee.stop(),ne&&(ne.flags|=8,we(le,A,U,b)),he&&tn(he,U),tn(()=>{A.isUnmounted=!0},U)},Ee=(A,U,b,ue=!1,ee=!1,ne=0)=>{for(let le=ne;le<A.length;le++)we(A[le],U,b,ue,ee)},ve=A=>{if(A.shapeFlag&6)return ve(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const U=h(A.anchor||A.el),b=U&&U[Hp];return b?h(b):U};let Ne=!1;const Ue=(A,U,b)=>{let ue;A==null?U._vnode&&(we(U._vnode,null,null,!0),ue=U._vnode.component):x(U._vnode||null,A,U,null,null,null,b),U._vnode=A,Ne||(Ne=!0,ru(ue),yd(),Ne=!1)},ze={p:x,um:we,m:ge,r:Ve,mt:$,mc:F,pc:k,pbc:y,n:ve,o:n};return{render:Ue,hydrate:void 0,createApp:um(Ue)}}function Ca({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function wm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function jd(n,e,t=!1){const i=n.children,r=e.children;if(Ye(i)&&Ye(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ai(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&jd(o,a)),a.type===ha&&(a.patchFlag===-1&&(a=r[s]=ai(a)),a.el=o.el),a.type===zt&&!a.el&&(a.el=o.el)}}function Am(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Zd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zd(e)}function mu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Jd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Jd(e.subTree):null}const Qd=n=>n.__isSuspense;function Cm(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):Op(n)}const qt=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),Os=[];let fn=null;function je(n=!1){Os.push(fn=n?null:[])}function Rm(){Os.pop(),fn=Os[Os.length-1]||null}let Gs=1;function qo(n,e=!1){Gs+=n,n<0&&fn&&e&&(fn.hasOnce=!0)}function eh(n){return n.dynamicChildren=Gs>0?fn||qr:null,Rm(),Gs>0&&fn&&fn.push(n),n}function xt(n,e,t,i,r,s){return eh(Be(n,e,t,i,r,s,!0))}function At(n,e,t,i,r){return eh(St(n,e,t,i,r,!0))}function Ws(n){return n?n.__v_isVNode===!0:!1}function lr(n,e){return n.type===e.type&&n.key===e.key}const th=({key:n})=>n??null,No=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||Vt(n)||Ze(n)?{i:Ht,r:n,k:e,f:!!t}:n:null);function Be(n,e=null,t=null,i=0,r=null,s=n===qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&th(e),ref:e&&No(e),scopeId:bd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ht};return a?(Ic(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),Gs>0&&!o&&fn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&fn.push(l),l}const St=Pm;function Pm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===tm)&&(n=zt),Ws(n)){const a=ki(n,e,!0);return t&&Ic(a,t),Gs>0&&!s&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if(zm(n)&&(n=n.__vccOpts),e){e=Dm(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=un(a)),ut(l)&&(Rc(l)&&!Ye(l)&&(l=Rt({},l)),e.style=rn(l))}const o=Et(n)?1:Qd(n)?128:Ad(n)?64:ut(n)?4:Ze(n)?2:0;return Be(n,e,t,i,r,o,s,!0)}function Dm(n){return n?Rc(n)||Wd(n)?Rt({},n):n:null}function ki(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Lm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&th(c),ref:e&&e.ref?t&&s?Ye(s)?s.concat(No(e)):[s,No(e)]:No(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==qt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ki(n.ssContent),ssFallback:n.ssFallback&&ki(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Vs(u,l.clone(u)),u}function si(n=" ",e=0){return St(ha,null,n,e)}function Kt(n="",e=!1){return e?(je(),At(zt,null,n)):St(zt,null,n)}function Vn(n){return n==null||typeof n=="boolean"?St(zt):Ye(n)?St(qt,null,n.slice()):Ws(n)?ai(n):St(ha,null,String(n))}function ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ki(n)}function Ic(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ic(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Wd(e)?e._ctx=Ht:r===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:Ht},t=32):(e=String(e),i&64?(t=16,e=[si(e)]):t=8);n.children=e,n.shapeFlag|=t}function Lm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=un([e.class,i.class]));else if(r==="style")e.style=rn([e.style,i.style]);else if(ia(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ye(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!ra(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Bn(n,e,t,i=null){Un(n,e,7,[t,i])}const Im=kd();let Um=0;function Nm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Im,s={uid:Um++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yd(i,r),emitsOptions:zd(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dm.bind(null,s),n.ce&&n.ce(s),s}let jt=null;const nh=()=>jt||Ht;let Ko,Al;{const n=aa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ko=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),Al=e("__VUE_SSR_SETTERS__",t=>Xs=t)}const Zs=n=>{const e=jt;return Ko(n),n.scope.on(),()=>{n.scope.off(),Ko(e)}},gu=()=>{jt&&jt.scope.off(),Ko(null)};function ih(n){return n.vnode.shapeFlag&4}let Xs=!1;function Fm(n,e=!1,t=!1){e&&Al(e);const{props:i,children:r}=n.vnode,s=ih(n);_m(n,i,s,e),ym(n,r,t||e);const o=s?Om(n,e):void 0;return e&&Al(!1),o}function Om(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,im);const{setup:i}=t;if(i){mi();const r=n.setupContext=i.length>1?km(n):null,s=Zs(n),o=js(i,n,0,[n.props,r]),a=jf(o);if(gi(),s(),(a||n.sp)&&!Jr(n)&&Id(n),a){if(o.then(gu,gu),e)return o.then(l=>{vu(n,l)}).catch(l=>{ca(l,n,0)});n.asyncDep=o}else vu(n,o)}else rh(n)}function vu(n,e,t){Ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ut(e)&&(n.setupState=xd(e)),rh(n)}function rh(n,e,t){const i=n.type;n.render||(n.render=i.render||Yn);{const r=Zs(n);mi();try{rm(n)}finally{gi(),r()}}}const Bm={get(n,e){return kt(n,"get",""),n[e]}};function km(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Bm),slots:n.slots,emit:n.emit,expose:e}}function pa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xd(Ap(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fs)return Fs[t](n)},has(e,t){return t in e||t in Fs}})):n.proxy}function zm(n){return Ze(n)&&"__vccOpts"in n}const tt=(n,e)=>Lp(n,e,Xs);function Hm(n,e,t){try{qo(-1);const i=arguments.length;return i===2?ut(e)&&!Ye(e)?Ws(e)?St(n,null,[e]):St(n,e):St(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ws(t)&&(t=[t]),St(n,e,t))}finally{qo(1)}}const Vm="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const _u=typeof window<"u"&&window.trustedTypes;if(_u)try{Cl=_u.createPolicy("vue",{createHTML:n=>n})}catch{}const sh=Cl?n=>Cl.createHTML(n):n=>n,Gm="http://www.w3.org/2000/svg",Wm="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,xu=oi&&oi.createElement("template"),Xm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?oi.createElementNS(Gm,n):e==="mathml"?oi.createElementNS(Wm,n):t?oi.createElement(n,{is:t}):oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{xu.innerHTML=sh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},bi="transition",Ss="animation",Ys=Symbol("_vtc"),oh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ym=Rt({},Cd,oh),$m=n=>(n.displayName="Transition",n.props=Ym,n),qm=$m((n,{slots:e})=>Hm(Wp,Km(n),e)),Ki=(n,e=[])=>{Ye(n)?n.forEach(t=>t(...e)):n&&n(...e)},Mu=n=>n?Ye(n)?n.some(e=>e.length>1):n.length>1:!1;function Km(n){const e={};for(const N in n)N in oh||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=n,_=jm(r),x=_&&_[0],p=_&&_[1],{onBeforeEnter:d,onEnter:C,onEnterCancelled:T,onLeave:E,onLeaveCancelled:R,onBeforeAppear:D=d,onAppear:P=C,onAppearCancelled:F=T}=e,S=(N,H,$,Z)=>{N._enterCancelled=Z,ji(N,H?u:a),ji(N,H?c:o),$&&$()},y=(N,H)=>{N._isLeaving=!1,ji(N,f),ji(N,g),ji(N,h),H&&H()},L=N=>(H,$)=>{const Z=N?P:C,X=()=>S(H,N,$);Ki(Z,[H,X]),Su(()=>{ji(H,N?l:s),Jn(H,N?u:a),Mu(Z)||yu(H,i,x,X)})};return Rt(e,{onBeforeEnter(N){Ki(d,[N]),Jn(N,s),Jn(N,o)},onBeforeAppear(N){Ki(D,[N]),Jn(N,l),Jn(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,H){N._isLeaving=!0;const $=()=>y(N,H);Jn(N,f),N._enterCancelled?(Jn(N,h),Tu(N)):(Tu(N),Jn(N,h)),Su(()=>{N._isLeaving&&(ji(N,f),Jn(N,g),Mu(E)||yu(N,i,p,$))}),Ki(E,[N,$])},onEnterCancelled(N){S(N,!1,void 0,!0),Ki(T,[N])},onAppearCancelled(N){S(N,!0,void 0,!0),Ki(F,[N])},onLeaveCancelled(N){y(N),Ki(R,[N])}})}function jm(n){if(n==null)return null;if(ut(n))return[Pa(n.enter),Pa(n.leave)];{const e=Pa(n);return[e,e]}}function Pa(n){return Jh(n)}function Jn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ys]||(n[Ys]=new Set)).add(e)}function ji(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ys];t&&(t.delete(e),t.size||(n[Ys]=void 0))}function Su(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Zm=0;function yu(n,e,t,i){const r=n._endId=++Zm,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Jm(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=g=>{g.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Jm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${bi}Delay`),s=i(`${bi}Duration`),o=Eu(r,s),a=i(`${Ss}Delay`),l=i(`${Ss}Duration`),c=Eu(a,l);let u=null,f=0,h=0;e===bi?o>0&&(u=bi,f=o,h=s.length):e===Ss?c>0&&(u=Ss,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?bi:Ss:null,h=u?u===bi?s.length:l.length:0);const g=u===bi&&/\b(?:transform|all)(?:,|$)/.test(i(`${bi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function Eu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>bu(t)+bu(n[i])))}function bu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Tu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Qm(n,e,t){const i=n[Ys];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const jo=Symbol("_vod"),ah=Symbol("_vsh"),Xr={name:"show",beforeMount(n,{value:e},{transition:t}){n[jo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ys(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ys(n,!0),i.enter(n)):i.leave(n,()=>{ys(n,!1)}):ys(n,e))},beforeUnmount(n,{value:e}){ys(n,e)}};function ys(n,e){n.style.display=e?n[jo]:"none",n[ah]=!e}const eg=Symbol(""),tg=/(?:^|;)\s*display\s*:/;function ng(n,e,t){const i=n.style,r=Et(t);let s=!1;if(t&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Fo(i,a,"")}else for(const o in e)t[o]==null&&Fo(i,o,"");for(const o in t)o==="display"&&(s=!0),Fo(i,o,t[o])}else if(r){if(e!==t){const o=i[eg];o&&(t+=";"+o),i.cssText=t,s=tg.test(t)}}else e&&n.removeAttribute("style");jo in n&&(n[jo]=s?i.display:"",n[ah]&&(i.display="none"))}const wu=/\s*!important$/;function Fo(n,e,t){if(Ye(t))t.forEach(i=>Fo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ig(n,e);wu.test(t)?n.setProperty(Gi(i),t.replace(wu,""),"important"):n[i]=t}}const Au=["Webkit","Moz","ms"],Da={};function ig(n,e){const t=Da[e];if(t)return t;let i=Rn(e);if(i!=="filter"&&i in n)return Da[e]=i;i=Qf(i);for(let r=0;r<Au.length;r++){const s=Au[r]+i;if(s in n)return Da[e]=s}return e}const Cu="http://www.w3.org/1999/xlink";function Ru(n,e,t,i,r,s=rp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cu,e.slice(6,e.length)):n.setAttributeNS(Cu,e,t):t==null||s&&!td(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ln(t)?String(t):t)}function Pu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=td(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Ii(n,e,t,i){n.addEventListener(e,t,i)}function rg(n,e,t,i){n.removeEventListener(e,t,i)}const Du=Symbol("_vei");function sg(n,e,t,i,r=null){const s=n[Du]||(n[Du]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=og(e);if(i){const c=s[e]=cg(i,r);Ii(n,a,c,l)}else o&&(rg(n,a,o,l),s[e]=void 0)}}const Lu=/(?:Once|Passive|Capture)$/;function og(n){let e;if(Lu.test(n)){e={};let i;for(;i=n.match(Lu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Gi(n.slice(2)),e]}let La=0;const ag=Promise.resolve(),lg=()=>La||(ag.then(()=>La=0),La=Date.now());function cg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Un(ug(i,t.value),e,5,[i])};return t.value=n,t.attached=lg(),t}function ug(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Iu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,fg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Qm(n,i,o):e==="style"?ng(n,t,i):ia(e)?ra(e)||sg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dg(n,e,i,o))?(Pu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ru(n,e,i,o,s,e!=="value")):n._isVueCE&&(hg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Et(i)))?Pu(n,Rn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ru(n,e,i,o))};function dg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Iu(e)&&Ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Iu(e)&&Et(t)?!1:e in n}function hg(n,e){const t=n._def.props;if(!t)return!1;const i=Rn(e);return Array.isArray(t)?t.some(r=>Rn(r)===i):Object.keys(t).some(r=>Rn(r)===i)}const rs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ye(e)?t=>Uo(e,t):e};function pg(n){n.target.composing=!0}function Uu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hi=Symbol("_assign");function Nu(n,e,t){return e&&(n=n.trim()),t&&(n=oa(n)),n}const lh={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[hi]=rs(r);const s=i||r.props&&r.props.type==="number";Ii(n,e?"change":"input",o=>{o.target.composing||n[hi](Nu(n.value,t,s))}),(t||s)&&Ii(n,"change",()=>{n.value=Nu(n.value,t,s)}),e||(Ii(n,"compositionstart",pg),Ii(n,"compositionend",Uu),Ii(n,"change",Uu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[hi]=rs(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?oa(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},Zi={deep:!0,created(n,e,t){n[hi]=rs(t),Ii(n,"change",()=>{const i=n._modelValue,r=$s(n),s=n.checked,o=n[hi];if(Ye(i)){const a=yc(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(fs(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(ch(n,s))})},mounted:Fu,beforeUpdate(n,e,t){n[hi]=rs(t),Fu(n,e,t)}};function Fu(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Ye(e))r=yc(e,i.props.value)>-1;else if(fs(e))r=e.has(i.props.value);else{if(e===t)return;r=ds(e,ch(n,!0))}n.checked!==r&&(n.checked=r)}const mg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=fs(e);Ii(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?oa($s(o)):$s(o));n[hi](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Mn(()=>{n._assigning=!1})}),n[hi]=rs(i)},mounted(n,{value:e}){Ou(n,e)},beforeUpdate(n,e,t){n[hi]=rs(t)},updated(n,{value:e}){n._assigning||Ou(n,e)}};function Ou(n,e){const t=n.multiple,i=Ye(e);if(!(t&&!i&&!fs(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=$s(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=yc(e,a)>-1}else o.selected=e.has(a);else if(ds($s(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function $s(n){return"_value"in n?n._value:n.value}function ch(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const gg=["ctrl","shift","alt","meta"],vg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>gg.some(t=>n[`${t}Key`]&&!e.includes(t))},Ni=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=vg[e[o]];if(a&&a(r,e))return}return n(r,...s)})},_g={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xg=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=Gi(r.key);if(e.some(o=>o===s||_g[o]===s))return n(r)})},Mg=Rt({patchProp:fg},Xm);let Bu;function Sg(){return Bu||(Bu=bm(Mg))}const yg=(...n)=>{const e=Sg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=bg(i);if(!r)return;const s=e._component;!Ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Eg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Eg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bg(n){return Et(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="170",Tg=0,ku=1,wg=2,uh=1,Ag=2,ri=3,zi=0,on=1,ui=2,Oi=0,es=1,zu=2,Hu=3,Vu=4,Cg=5,cr=100,Rg=101,Pg=102,Dg=103,Lg=104,Ig=200,Ug=201,Ng=202,Fg=203,Rl=204,Pl=205,Og=206,Bg=207,kg=208,zg=209,Hg=210,Vg=211,Gg=212,Wg=213,Xg=214,Dl=0,Ll=1,Il=2,ss=3,Ul=4,Nl=5,Fl=6,Ol=7,fh=0,Yg=1,$g=2,Bi=0,qg=1,Kg=2,jg=3,Zg=4,Jg=5,Qg=6,ev=7,dh=300,os=301,as=302,Bl=303,kl=304,ma=306,zl=1e3,fr=1001,Hl=1002,Dn=1003,tv=1004,co=1005,Mt=1006,Ia=1007,dr=1008,_i=1009,hh=1010,ph=1011,qs=1012,Nc=1013,xr=1014,fi=1015,Js=1016,Fc=1017,Oc=1018,ls=1020,mh=35902,gh=1021,vh=1022,Cn=1023,_h=1024,xh=1025,ts=1026,cs=1027,Mh=1028,Bc=1029,Sh=1030,kc=1031,zc=1033,Oo=33776,Bo=33777,ko=33778,zo=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,Yl=36196,$l=37492,ql=37496,Kl=37808,jl=37809,Zl=37810,Jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,rc=37817,sc=37818,oc=37819,ac=37820,lc=37821,Ho=36492,cc=36494,uc=36495,yh=36283,fc=36284,dc=36285,hc=36286,nv=3200,iv=3201,rv=0,sv=1,Ui="",vn="srgb",hs="srgb-linear",ga="linear",ft="srgb",Pr=7680,Gu=519,ov=512,av=513,lv=514,Eh=515,cv=516,uv=517,fv=518,dv=519,Wu=35044,Xu="300 es",di=2e3,Zo=2001;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ua=Math.PI/180,pc=180/Math.PI;function Qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function hv(n,e){return(n%e+e)%e}function Na(n,e,t){return(1-t)*n+t*e}function Es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],g=i[5],_=i[8],x=r[0],p=r[3],d=r[6],C=r[1],T=r[4],E=r[7],R=r[2],D=r[5],P=r[8];return s[0]=o*x+a*C+l*R,s[3]=o*p+a*T+l*D,s[6]=o*d+a*E+l*P,s[1]=c*x+u*C+f*R,s[4]=c*p+u*T+f*D,s[7]=c*d+u*E+f*P,s[2]=h*x+g*C+_*R,s[5]=h*p+g*T+_*D,s[8]=h*d+g*E+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,g=c*s-o*l,_=t*f+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=g*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Je;function bh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pv(){const n=Jo("canvas");return n.style.display="block",n}const Yu={};function Ps(n){n in Yu||(Yu[n]=!0,console.warn(n))}function mv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function gv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(n.r=pi(n.r),n.g=pi(n.g),n.b=pi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(n.r=ns(n.r),n.g=ns(n.g),n.b=ns(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ui?ga:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const $u=[.64,.33,.3,.6,.15,.06],qu=[.2126,.7152,.0722],Ku=[.3127,.329],ju=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[hs]:{primaries:$u,whitePoint:Ku,transfer:ga,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:qu,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:$u,whitePoint:Ku,transfer:ft,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:qu,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}});let Dr;class _v{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dr===void 0&&(Dr=Jo("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xv=0;class Th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_v.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mv=0;class Jt extends ps{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=fr,r=fr,s=Mt,o=dr,a=Cn,l=_i,c=Jt.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Qs(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=dh;Jt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],g=l[5],_=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(g+1)/2,R=(d+1)/2,D=(u+h)/4,P=(f+x)/4,F=(_+p)/4;return T>E&&T>R?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=D/i,s=P/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=F/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=F/s),this.set(i,r,s,t),this}let C=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(p-_)/C,this.y=(f-x)/C,this.z=(h-u)/C,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sv extends ps{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Th(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends Sv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wh extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yv extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=g,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==g||u!==_){let p=1-a;const d=l*h+c*g+u*_+f*x,C=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const R=Math.sqrt(T),D=Math.atan2(R,d*C);p=Math.sin(p*D)/R,a=Math.sin(a*D)/R}const E=a*C;if(l=l*p+h*E,c=c*p+g*E,u=u*p+_*E,f=f*p+x*E,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*g-c*h,e[t+1]=l*_+u*h+c*f-a*g,e[t+2]=c*_+u*g+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*g*_,this._y=c*g*f-h*u*_,this._z=c*u*_+h*g*f,this._w=c*u*f-h*g*_;break;case"YXZ":this._x=h*u*f+c*g*_,this._y=c*g*f-h*u*_,this._z=c*u*_-h*g*f,this._w=c*u*f+h*g*_;break;case"ZXY":this._x=h*u*f-c*g*_,this._y=c*g*f+h*u*_,this._z=c*u*_+h*g*f,this._w=c*u*f-h*g*_;break;case"ZYX":this._x=h*u*f-c*g*_,this._y=c*g*f+h*u*_,this._z=c*u*_-h*g*f,this._w=c*u*f+h*g*_;break;case"YZX":this._x=h*u*f+c*g*_,this._y=c*g*f+h*u*_,this._z=c*u*_-h*g*f,this._w=c*u*f-h*g*_;break;case"XZY":this._x=h*u*f-c*g*_,this._y=c*g*f-h*u*_,this._z=c*u*_+h*g*f,this._w=c*u*f+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,i=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new oe,Ju=new eo;class to{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),fo.subVectors(this.max,bs),Lr.subVectors(e.a,bs),Ir.subVectors(e.b,bs),Ur.subVectors(e.c,bs),Ti.subVectors(Ir,Lr),wi.subVectors(Ur,Ir),Ji.subVectors(Lr,Ur);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-Ji.z,Ji.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,Ji.z,0,-Ji.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-Ji.y,Ji.x,0];return!ka(t,Lr,Ir,Ur,fo)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Lr,Ir,Ur,fo))?!1:(ho.crossVectors(Ti,wi),t=[ho.x,ho.y,ho.z],ka(t,Lr,Ir,Ur,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],En=new oe,uo=new to,Lr=new oe,Ir=new oe,Ur=new oe,Ti=new oe,wi=new oe,Ji=new oe,bs=new oe,fo=new oe,ho=new oe,Qi=new oe;function ka(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qi.fromArray(n,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ev=new to,Ts=new oe,za=new oe;class Hc{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ev.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(za)),this.expandByPoint(Ts.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new oe,Ha=new oe,po=new oe,Ai=new oe,Va=new oe,mo=new oe,Ga=new oe;class bv{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ha.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=Ai.dot(this.direction),l=-Ai.dot(po),c=Ai.lengthSq(),u=Math.abs(1-o*o);let f,h,g,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ha).addScaledVector(po,h),g}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,r,s){Va.subVectors(t,e),mo.subVectors(i,e),Ga.crossVectors(Va,mo);let o=this.direction.dot(Ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(mo.crossVectors(Ai,mo));if(l<0)return null;const c=a*this.direction.dot(Va.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(Ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,g,_,x,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,g,_,x,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,g,_,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=g,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,g=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=g+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+g*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,g=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-g,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=g*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,g=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,g=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-g,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=g*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+g,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=g*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,g=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=g*f-_,t[2]=_*f-g,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,wv)}lookAt(e,t,i){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ci.crossVectors(i,ln),Ci.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ci.crossVectors(i,ln)),Ci.normalize(),go.crossVectors(ln,Ci),r[0]=Ci.x,r[4]=go.x,r[8]=ln.x,r[1]=Ci.y,r[5]=go.y,r[9]=ln.y,r[2]=Ci.z,r[6]=go.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],g=i[13],_=i[2],x=i[6],p=i[10],d=i[14],C=i[3],T=i[7],E=i[11],R=i[15],D=r[0],P=r[4],F=r[8],S=r[12],y=r[1],L=r[5],N=r[9],H=r[13],$=r[2],Z=r[6],X=r[10],K=r[14],k=r[3],ae=r[7],J=r[11],ge=r[15];return s[0]=o*D+a*y+l*$+c*k,s[4]=o*P+a*L+l*Z+c*ae,s[8]=o*F+a*N+l*X+c*J,s[12]=o*S+a*H+l*K+c*ge,s[1]=u*D+f*y+h*$+g*k,s[5]=u*P+f*L+h*Z+g*ae,s[9]=u*F+f*N+h*X+g*J,s[13]=u*S+f*H+h*K+g*ge,s[2]=_*D+x*y+p*$+d*k,s[6]=_*P+x*L+p*Z+d*ae,s[10]=_*F+x*N+p*X+d*J,s[14]=_*S+x*H+p*K+d*ge,s[3]=C*D+T*y+E*$+R*k,s[7]=C*P+T*L+E*Z+R*ae,s[11]=C*F+T*N+E*X+R*J,s[15]=C*S+T*H+E*K+R*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],g=e[14],_=e[3],x=e[7],p=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*g-i*l*g)+x*(+t*l*g-t*c*h+s*o*h-r*o*g+r*c*u-s*l*u)+p*(+t*c*f-t*a*g-s*o*f+i*o*g+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],g=e[11],_=e[12],x=e[13],p=e[14],d=e[15],C=f*p*c-x*h*c+x*l*g-a*p*g-f*l*d+a*h*d,T=_*h*c-u*p*c-_*l*g+o*p*g+u*l*d-o*h*d,E=u*x*c-_*f*c+_*a*g-o*x*g-u*a*d+o*f*d,R=_*f*l-u*x*l-_*a*h+o*x*h+u*a*p-o*f*p,D=t*C+i*T+r*E+s*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=C*P,e[1]=(x*h*s-f*p*s-x*r*g+i*p*g+f*r*d-i*h*d)*P,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*g-i*l*g)*P,e[4]=T*P,e[5]=(u*p*s-_*h*s+_*r*g-t*p*g-u*r*d+t*h*d)*P,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*d-t*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*g+t*l*g)*P,e[8]=E*P,e[9]=(_*f*s-u*x*s-_*i*g+t*x*g+u*i*d-t*f*d)*P,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*g-t*a*g)*P,e[12]=R*P,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*p+t*f*p)*P,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*p-t*a*p)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,g=s*u,_=s*f,x=o*u,p=o*f,d=a*f,C=l*c,T=l*u,E=l*f,R=i.x,D=i.y,P=i.z;return r[0]=(1-(x+d))*R,r[1]=(g+E)*R,r[2]=(_-T)*R,r[3]=0,r[4]=(g-E)*D,r[5]=(1-(h+d))*D,r[6]=(p+C)*D,r[7]=0,r[8]=(_+T)*P,r[9]=(p-C)*P,r[10]=(1-(h+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),a=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,u=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=di){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let g,_;if(a===di)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Zo)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=di){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,g=(i+r)*u;let _,x;if(a===di)_=(o+s)*f,x=-2*f;else if(a===Zo)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Nr=new oe,bn=new Tt,Tv=new oe(0,0,0),wv=new oe(1,1,1),Ci=new oe,go=new oe,ln=new oe,Qu=new Tt,ef=new eo;class xi{constructor(e=0,t=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Av=0;const tf=new oe,Fr=new eo,ti=new Tt,vo=new oe,ws=new oe,Cv=new oe,Rv=new eo,nf=new oe(1,0,0),rf=new oe(0,1,0),sf=new oe(0,0,1),of={type:"added"},Pv={type:"removed"},Or={type:"childadded",child:null},Wa={type:"childremoved",child:null};class hn extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new oe,t=new xi,i=new eo,r=new oe(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(ws,vo,this.up):ti.lookAt(vo,ws,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(ti),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(of),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pv),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(of),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new oe(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new oe,ni=new oe,Xa=new oe,ii=new oe,Br=new oe,kr=new oe,af=new oe,Ya=new oe,$a=new oe,qa=new oe,Ka=new yt,ja=new yt,Za=new yt;class An{constructor(e=new oe,t=new oe,i=new oe){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Tn.subVectors(e,t),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Tn.subVectors(r,t),ni.subVectors(i,t),Xa.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(ni),l=Tn.dot(Xa),c=ni.dot(ni),u=ni.dot(Xa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ka.setScalar(0),ja.setScalar(0),Za.setScalar(0),Ka.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,i),Za.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ka,s.x),o.addScaledVector(ja,s.y),o.addScaledVector(Za,s.z),o}static isFrontFacing(e,t,i,r){return Tn.subVectors(i,t),ni.subVectors(e,t),Tn.cross(ni).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Tn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Br.subVectors(r,i),kr.subVectors(s,i),Ya.subVectors(e,i);const l=Br.dot(Ya),c=kr.dot(Ya);if(l<=0&&c<=0)return t.copy(i);$a.subVectors(e,r);const u=Br.dot($a),f=kr.dot($a);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Br,o);qa.subVectors(e,s);const g=Br.dot(qa),_=kr.dot(qa);if(_>=0&&g<=_)return t.copy(s);const x=g*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(kr,a);const p=u*_-g*f;if(p<=0&&f-u>=0&&g-_>=0)return af.subVectors(s,r),a=(f-u)/(f-u+(g-_)),t.copy(r).addScaledVector(af,a);const d=1/(p+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(Br,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=hv(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ja(o,s,e+1/3),this.g=Ja(o,s,e),this.b=Ja(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=Ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return nt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(sn(Ot.r*255,0,255))*65536+Math.round(sn(Ot.g*255,0,255))*256+Math.round(sn(Ot.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=vn){nt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(_o);const i=Na(Ri.h,_o.h,t),r=Na(Ri.s,_o.s,t),s=Na(Ri.l,_o.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ct;ct.NAMES=Ch;let Dv=0;class va extends ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Qs(),this.name="",this.blending=es,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rh extends va{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new oe,xo=new dt;class $n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wu&&(e.usage=this.usage),e}}class Ph extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dh extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gr extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lv=0;const gn=new Tt,Qa=new hn,zr=new oe,cn=new to,As=new to,Lt=new oe;class yr extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bh(e)?Dh:Ph)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gr(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(cn.min,As.min),cn.expandByPoint(Lt),Lt.addVectors(cn.max,As.max),cn.expandByPoint(Lt)):(cn.expandByPoint(As.min),cn.expandByPoint(As.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(zr.fromBufferAttribute(e,c),Lt.add(zr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new oe,l[F]=new oe;const c=new oe,u=new oe,f=new oe,h=new dt,g=new dt,_=new dt,x=new oe,p=new oe;function d(F,S,y){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,F),g.fromBufferAttribute(s,S),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),g.sub(h),_.sub(h);const L=1/(g.x*_.y-_.x*g.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(L),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(L),a[F].add(x),a[S].add(x),a[y].add(x),l[F].add(p),l[S].add(p),l[y].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,S=C.length;F<S;++F){const y=C[F],L=y.start,N=y.count;for(let H=L,$=L+N;H<$;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new oe,E=new oe,R=new oe,D=new oe;function P(F){R.fromBufferAttribute(r,F),D.copy(R);const S=a[F];T.copy(S),T.sub(R.multiplyScalar(R.dot(S))).normalize(),E.crossVectors(D,S);const L=E.dot(l[F])<0?-1:1;o.setXYZW(F,T.x,T.y,T.z,L)}for(let F=0,S=C.length;F<S;++F){const y=C[F],L=y.start,N=y.count;for(let H=L,$=L+N;H<$;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new oe,s=new oe,o=new oe,a=new oe,l=new oe,c=new oe,u=new oe,f=new oe;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let g=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[g++]}return new $n(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],g=e(h,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,g=f.length;h<g;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lf=new Tt,er=new bv,Mo=new Hc,cf=new oe,So=new oe,yo=new oe,Eo=new oe,el=new oe,bo=new oe,uf=new oe,To=new oe;class dn extends hn{constructor(e=new yr,t=new Rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(el.fromBufferAttribute(f,e),o?bo.addScaledVector(el,u):bo.addScaledVector(el.sub(t),u))}t.add(bo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(Mo.containsPoint(er.origin)===!1&&(er.intersectSphere(Mo,cf)===null||er.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(s).invert(),er.copy(e.ray).applyMatrix4(lf),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=o[p.materialIndex],C=Math.max(p.start,g.start),T=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let E=C,R=T;E<R;E+=3){const D=a.getX(E),P=a.getX(E+1),F=a.getX(E+2);r=wo(this,d,e,i,c,u,f,D,P,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let p=_,d=x;p<d;p+=3){const C=a.getX(p),T=a.getX(p+1),E=a.getX(p+2);r=wo(this,o,e,i,c,u,f,C,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=o[p.materialIndex],C=Math.max(p.start,g.start),T=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=C,R=T;E<R;E+=3){const D=E,P=E+1,F=E+2;r=wo(this,d,e,i,c,u,f,D,P,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=_,d=x;p<d;p+=3){const C=p,T=p+1,E=p+2;r=wo(this,o,e,i,c,u,f,C,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Iv(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zi,a),l===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:n}}function wo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,So),n.getVertexPosition(l,yo),n.getVertexPosition(c,Eo);const u=Iv(n,e,t,i,So,yo,Eo,uf);if(u){const f=new oe;An.getBarycoord(uf,So,yo,Eo,f),r&&(u.uv=An.getInterpolatedAttribute(r,a,l,c,f,new dt)),s&&(u.uv1=An.getInterpolatedAttribute(s,a,l,c,f,new dt)),o&&(u.normal=An.getInterpolatedAttribute(o,a,l,c,f,new oe),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new oe,materialIndex:0};An.getNormal(So,yo,Eo,h.normal),u.face=h,u.barycoord=f}return u}class no extends yr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,g=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gr(c,3)),this.setAttribute("normal",new gr(u,3)),this.setAttribute("uv",new gr(f,2));function _(x,p,d,C,T,E,R,D,P,F,S){const y=E/P,L=R/F,N=E/2,H=R/2,$=D/2,Z=P+1,X=F+1;let K=0,k=0;const ae=new oe;for(let J=0;J<X;J++){const ge=J*L-H;for(let we=0;we<Z;we++){const Ve=we*y-N;ae[x]=Ve*C,ae[p]=ge*T,ae[d]=$,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[p]=0,ae[d]=D>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(we/P),f.push(1-J/F),K+=1}}for(let J=0;J<F;J++)for(let ge=0;ge<P;ge++){const we=h+ge+Z*J,Ve=h+ge+Z*(J+1),re=h+(ge+1)+Z*(J+1),me=h+(ge+1)+Z*J;l.push(we,Ve,me),l.push(Ve,re,me),k+=6}a.addGroup(g,k,S),g+=k,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=us(n[t]);for(const r in i)e[r]=i[r]}return e}function Uv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Nv={clone:us,merge:Yt};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends va{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Uv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ih extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new oe,ff=new dt,df=new dt;class wn extends Ih{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,ff,df),t.subVectors(df,ff)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hr=-90,Vr=1;class Bv extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Hr,Vr,e,t);r.layers=this.layers,this.add(r);const s=new wn(Hr,Vr,e,t);s.layers=this.layers,this.add(s);const o=new wn(Hr,Vr,e,t);o.layers=this.layers,this.add(o);const a=new wn(Hr,Vr,e,t);a.layers=this.layers,this.add(a);const l=new wn(Hr,Vr,e,t);l.layers=this.layers,this.add(l);const c=new wn(Hr,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Uh extends Jt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kv extends Mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new no(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Oi});s.uniforms.tEquirect.value=t;const o=new dn(r,s),a=t.minFilter;return t.minFilter===dr&&(t.minFilter=Mt),new Bv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const tl=new oe,zv=new oe,Hv=new Je;class sr{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=tl.subVectors(i,t).cross(zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hv.getNormalMatrix(e),r=this.coplanarPoint(tl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Hc,Ao=new oe;class Nh{constructor(e=new sr,t=new sr,i=new sr,r=new sr,s=new sr,o=new sr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],g=r[8],_=r[9],x=r[10],p=r[11],d=r[12],C=r[13],T=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,p-g,E-d).normalize(),i[1].setComponents(l+s,h+c,p+g,E+d).normalize(),i[2].setComponents(l+o,h+u,p+_,E+C).normalize(),i[3].setComponents(l-o,h-u,p-_,E-C).normalize(),i[4].setComponents(l-a,h-f,p-x,E-T).normalize(),t===di)i[5].setComponents(l+a,h+f,p+x,E+T).normalize();else if(t===Zo)i[5].setComponents(a,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((g,_)=>g.start-_.start);let h=0;for(let g=1;g<f.length;g++){const _=f[h],x=f[g];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let g=0,_=f.length;g<_;g++){const x=f[g];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Xi extends yr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,g=[],_=[],x=[],p=[];for(let d=0;d<u;d++){const C=d*h-o;for(let T=0;T<c;T++){const E=T*f-s;_.push(E,-C,0),x.push(0,0,1),p.push(T/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<a;C++){const T=C+c*d,E=C+c*(d+1),R=C+1+c*(d+1),D=C+1+c*d;g.push(T,E,D),g.push(E,R,D)}this.setIndex(g),this.setAttribute("position",new gr(_,3)),this.setAttribute("normal",new gr(x,3)),this.setAttribute("uv",new gr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gv=`#ifdef USE_ALPHAHASH
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
}`,Qe={alphahash_fragment:Gv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:Yv,alphatest_fragment:$v,alphatest_pars_fragment:qv,aomap_fragment:Kv,aomap_pars_fragment:jv,batching_pars_vertex:Zv,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:e_,bsdfs:t_,iridescence_fragment:n_,bumpmap_pars_fragment:i_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:a_,color_fragment:l_,color_pars_fragment:c_,color_pars_vertex:u_,color_vertex:f_,common:d_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:g_,emissivemap_fragment:v_,emissivemap_pars_fragment:__,colorspace_fragment:x_,colorspace_pars_fragment:M_,envmap_fragment:S_,envmap_common_pars_fragment:y_,envmap_pars_fragment:E_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:N_,envmap_vertex:T_,fog_vertex:w_,fog_pars_vertex:A_,fog_fragment:C_,fog_pars_fragment:R_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:D_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:I_,lights_pars_begin:U_,lights_toon_fragment:F_,lights_toon_pars_fragment:O_,lights_phong_fragment:B_,lights_phong_pars_fragment:k_,lights_physical_fragment:z_,lights_physical_pars_fragment:H_,lights_fragment_begin:V_,lights_fragment_maps:G_,lights_fragment_end:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:q_,map_fragment:K_,map_pars_fragment:j_,map_particle_fragment:Z_,map_particle_pars_fragment:J_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:e0,morphinstance_vertex:t0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:r0,morphtarget_vertex:s0,normal_fragment_begin:o0,normal_fragment_maps:a0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:u0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:v0,premultiplied_alpha_fragment:_0,project_vertex:x0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:T0,shadowmap_vertex:w0,shadowmask_pars_fragment:A0,skinbase_vertex:C0,skinning_pars_vertex:R0,skinning_vertex:P0,skinnormal_vertex:D0,specularmap_fragment:L0,specularmap_pars_fragment:I0,tonemapping_fragment:U0,tonemapping_pars_fragment:N0,transmission_fragment:F0,transmission_pars_fragment:O0,uv_pars_fragment:B0,uv_pars_vertex:k0,uv_vertex:z0,worldpos_vertex:H0,background_vert:V0,background_frag:G0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:Y0,cube_frag:$0,depth_vert:q0,depth_frag:K0,distanceRGBA_vert:j0,distanceRGBA_frag:Z0,equirect_vert:J0,equirect_frag:Q0,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:rx,meshlambert_frag:sx,meshmatcap_vert:ox,meshmatcap_frag:ax,meshnormal_vert:lx,meshnormal_frag:cx,meshphong_vert:ux,meshphong_frag:fx,meshphysical_vert:dx,meshphysical_frag:hx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:vx,shadow_vert:_x,shadow_frag:xx,sprite_vert:Mx,sprite_frag:Sx},Re={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Gn={basic:{uniforms:Yt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Yt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ct(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Yt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Yt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Yt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ct(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Yt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Yt([Re.points,Re.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Yt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Yt([Re.common,Re.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Yt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Yt([Re.sprite,Re.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Yt([Re.common,Re.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Yt([Re.lights,Re.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Gn.physical={uniforms:Yt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Co={r:0,b:0,g:0},nr=new xi,yx=new Tt;function Ex(n,e,t,i,r,s,o){const a=new ct(0);let l=s===!0?0:1,c,u,f=null,h=0,g=null;function _(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function x(C){let T=!1;const E=_(C);E===null?d(a,l):E&&E.isColor&&(d(E,1),T=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(C,T){const E=_(T);E&&(E.isCubeTexture||E.mapping===ma)?(u===void 0&&(u=new dn(new no(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:us(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),nr.copy(T.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(nr)),u.material.toneMapped=nt.getTransfer(E.colorSpace)!==ft,(f!==E||h!==E.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,g=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new dn(new Xi(2,2),new Sn({name:"BackgroundMaterial",uniforms:us(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=nt.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,g=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function d(C,T){C.getRGB(Co,Lh(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(C,T=1){a.set(C),l=T,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,d(a,l)},render:x,addToRenderList:p}}function bx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,L,N,H,$){let Z=!1;const X=f(H,N,L);s!==X&&(s=X,c(s.object)),Z=g(y,H,N,$),Z&&_(y,H,N,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(y,L,N,H),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,L,N){const H=N.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let Z=$[L.id];Z===void 0&&(Z={},$[L.id]=Z);let X=Z[H];return X===void 0&&(X=h(l()),Z[H]=X),X}function h(y){const L=[],N=[],H=[];for(let $=0;$<t;$++)L[$]=0,N[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:H,object:y,attributes:{},index:null}}function g(y,L,N,H){const $=s.attributes,Z=L.attributes;let X=0;const K=N.getAttributes();for(const k in K)if(K[k].location>=0){const J=$[k];let ge=Z[k];if(ge===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),J===void 0||J.attribute!==ge||ge&&J.data!==ge.data)return!0;X++}return s.attributesNum!==X||s.index!==H}function _(y,L,N,H){const $={},Z=L.attributes;let X=0;const K=N.getAttributes();for(const k in K)if(K[k].location>=0){let J=Z[k];J===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const ge={};ge.attribute=J,J&&J.data&&(ge.data=J.data),$[k]=ge,X++}s.attributes=$,s.attributesNum=X,s.index=H}function x(){const y=s.newAttributes;for(let L=0,N=y.length;L<N;L++)y[L]=0}function p(y){d(y,0)}function d(y,L){const N=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;N[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),$[y]!==L&&(n.vertexAttribDivisor(y,L),$[y]=L)}function C(){const y=s.newAttributes,L=s.enabledAttributes;for(let N=0,H=L.length;N<H;N++)L[N]!==y[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function T(y,L,N,H,$,Z,X){X===!0?n.vertexAttribIPointer(y,L,N,$,Z):n.vertexAttribPointer(y,L,N,H,$,Z)}function E(y,L,N,H){x();const $=H.attributes,Z=N.getAttributes(),X=L.defaultAttributeValues;for(const K in Z){const k=Z[K];if(k.location>=0){let ae=$[K];if(ae===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const J=ae.normalized,ge=ae.itemSize,we=e.get(ae);if(we===void 0)continue;const Ve=we.buffer,re=we.type,me=we.bytesPerElement,Ee=re===n.INT||re===n.UNSIGNED_INT||ae.gpuType===Nc;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Ne=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let ze=0;ze<k.locationSize;ze++)d(k.location+ze,ve.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ze=0;ze<k.locationSize;ze++)p(k.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let ze=0;ze<k.locationSize;ze++)T(k.location+ze,ge/k.locationSize,re,J,Ne*me,(Ue+ge/k.locationSize*ze)*me,Ee)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)d(k.location+ve,ae.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<k.locationSize;ve++)p(k.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let ve=0;ve<k.locationSize;ve++)T(k.location+ve,ge/k.locationSize,re,J,ge*me,ge/k.locationSize*ve*me,Ee)}}else if(X!==void 0){const J=X[K];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(k.location,J);break;case 3:n.vertexAttrib3fv(k.location,J);break;case 4:n.vertexAttrib4fv(k.location,J);break;default:n.vertexAttrib1fv(k.location,J)}}}}C()}function R(){F();for(const y in i){const L=i[y];for(const N in L){const H=L[N];for(const $ in H)u(H[$].object),delete H[$];delete L[N]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const N in L){const H=L[N];for(const $ in H)u(H[$].object),delete H[$];delete L[N]}delete i[y.id]}function P(y){for(const L in i){const N=i[L];if(N[y.id]===void 0)continue;const H=N[y.id];for(const $ in H)u(H[$].object),delete H[$];delete N[y.id]}}function F(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:C}}function Tx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,i,1)}function l(c,u,f,h){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Cn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==_i&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fi&&!F)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:C,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:R,maxSamples:D}}function Ax(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new sr,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,g){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const C=s?0:i,T=C*4;let E=d.clippingState||null;l.value=E,E=u(_,h,T,g);for(let R=0;R!==T;++R)E[R]=t[R];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,g,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const d=g+x*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,E=g;T!==x;++T,E+=4)o.copy(f[T]).applyMatrix4(C,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Cx(n){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=os:a===kl&&(o.mapping=as),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class io extends Ih{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yr=4,hf=[.125,.215,.35,.446,.526,.582],ur=20,nl=new io,pf=new ct;let il=null,rl=0,sl=0,ol=!1;const or=(1+Math.sqrt(5))/2,Gr=1/or,mf=[new oe(-or,Gr,0),new oe(or,Gr,0),new oe(-Gr,0,or),new oe(Gr,0,or),new oe(0,or,-Gr),new oe(0,or,Gr),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)];class gf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,rl,sl),this._renderer.xr.enabled=ol,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:Js,format:Cn,colorSpace:hs,depthBuffer:!1},r=vf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rx(s)),this._blurMaterial=Px(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,r){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(pf),u.toneMapping=Bi,u.autoClear=!1;const g=new Rh({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new dn(new no,g);let x=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,x=!0):(g.color.copy(pf),x=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):C===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const T=this._cubeSize;Ro(r,C*T,d>2?T:0,T,T),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===os||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ro(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mf[(r-s-1)%mf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ur-1),x=s/_,p=isFinite(s)?1+Math.floor(u*x):ur;p>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ur}`);const d=[];let C=0;for(let P=0;P<ur;++P){const F=P/x,S=Math.exp(-F*F/2);d.push(S),P===0?C+=S:P<p&&(C+=2*S)}for(let P=0;P<d.length;P++)d[P]=d[P]/C;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-i;const E=this._sizeLods[r],R=3*E*(r>T-Yr?r-T+Yr:0),D=4*(this._cubeSize-E);Ro(t,R,D,3*E,2*E),l.setRenderTarget(t),l.render(f,nl)}}function Rx(n){const e=[],t=[],i=[];let r=n;const s=n-Yr+1+hf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Yr?l=hf[o-n+Yr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,_=6,x=3,p=2,d=1,C=new Float32Array(x*_*g),T=new Float32Array(p*_*g),E=new Float32Array(d*_*g);for(let D=0;D<g;D++){const P=D%3*2/3-1,F=D>2?0:-1,S=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];C.set(S,x*_*D),T.set(h,p*_*D);const y=[D,D,D,D,D,D];E.set(y,d*_*D)}const R=new yr;R.setAttribute("position",new $n(C,x)),R.setAttribute("uv",new $n(T,p)),R.setAttribute("faceIndex",new $n(E,d)),e.push(R),r>Yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vf(n,e,t){const i=new Mr(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Px(n,e,t){const i=new Float32Array(ur),r=new oe(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function _f(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function xf(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function Dx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bl||l===kl,u=l===os||l===as;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new gf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return c&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new gf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Lx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ps("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ix(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const x=g[_];for(let p=0,d=x.length;p<d;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,_=f.attributes.position;let x=0;if(g!==null){const C=g.array;x=g.version;for(let T=0,E=C.length;T<E;T+=3){const R=C[T+0],D=C[T+1],P=C[T+2];h.push(R,D,D,P,P,R)}}else if(_!==void 0){const C=_.array;x=_.version;for(let T=0,E=C.length/3-1;T<E;T+=3){const R=T+0,D=T+1,P=T+2;h.push(R,D,D,P,P,R)}}else return;const p=new(bh(h)?Dh:Ph)(h,1);p.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ux(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,g){n.drawElements(i,g,s,h*o),t.update(g,i,1)}function c(h,g,_){_!==0&&(n.drawElementsInstanced(i,g,s,h*o,_),t.update(g,i,_))}function u(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,_);let p=0;for(let d=0;d<_;d++)p+=g[d];t.update(p,i,1)}function f(h,g,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,g[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,x,0,_);let d=0;for(let C=0;C<_;C++)d+=g[C]*x[C];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Nx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Fx(n,e,t){const i=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var g=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let R=a.attributes.position.count*E,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*D*4*f),F=new wh(P,R,D,f);F.type=fi,F.needsUpdate=!0;const S=E*4;for(let L=0;L<f;L++){const N=d[L],H=C[L],$=T[L],Z=R*D*4*L;for(let X=0;X<N.count;X++){const K=X*S;_===!0&&(r.fromBufferAttribute(N,X),P[Z+K+0]=r.x,P[Z+K+1]=r.y,P[Z+K+2]=r.z,P[Z+K+3]=0),x===!0&&(r.fromBufferAttribute(H,X),P[Z+K+4]=r.x,P[Z+K+5]=r.y,P[Z+K+6]=r.z,P[Z+K+7]=0),p===!0&&(r.fromBufferAttribute($,X),P[Z+K+8]=r.x,P[Z+K+9]=r.y,P[Z+K+10]=r.z,P[Z+K+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:F,size:new dt(R,D)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ox(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Oh extends Jt{constructor(e,t,i,r,s,o,a,l,c,u=ts){if(u!==ts&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ts&&(i=xr),i===void 0&&u===cs&&(i=ls),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bh=new Jt,Mf=new Oh(1,1),kh=new wh,zh=new yv,Hh=new Uh,Sf=[],yf=[],Ef=new Float32Array(16),bf=new Float32Array(9),Tf=new Float32Array(4);function ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sf[r];if(s===void 0&&(s=new Float32Array(r),Sf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Tf.set(i),n.uniformMatrix2fv(this.addr,!1,Tf),Dt(t,i)}}function Gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;bf.set(i),n.uniformMatrix3fv(this.addr,!1,bf),Dt(t,i)}}function Wx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Ef.set(i),n.uniformMatrix4fv(this.addr,!1,Ef),Dt(t,i)}}function Xx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function Qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mf.compareFunction=Eh,s=Mf):s=Bh,t.setTexture2D(e||s,r)}function eM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zh,r)}function tM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hh,r)}function nM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kh,r)}function iM(n){switch(n){case 5126:return Bx;case 35664:return kx;case 35665:return zx;case 35666:return Hx;case 35674:return Vx;case 35675:return Gx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return Yx;case 35668:case 35672:return $x;case 35669:case 35673:return qx;case 5125:return Kx;case 36294:return jx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function rM(n,e){n.uniform1fv(this.addr,e)}function sM(n,e){const t=ms(e,this.size,2);n.uniform2fv(this.addr,t)}function oM(n,e){const t=ms(e,this.size,3);n.uniform3fv(this.addr,t)}function aM(n,e){const t=ms(e,this.size,4);n.uniform4fv(this.addr,t)}function lM(n,e){const t=ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cM(n,e){const t=ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uM(n,e){const t=ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fM(n,e){n.uniform1iv(this.addr,e)}function dM(n,e){n.uniform2iv(this.addr,e)}function hM(n,e){n.uniform3iv(this.addr,e)}function pM(n,e){n.uniform4iv(this.addr,e)}function mM(n,e){n.uniform1uiv(this.addr,e)}function gM(n,e){n.uniform2uiv(this.addr,e)}function vM(n,e){n.uniform3uiv(this.addr,e)}function _M(n,e){n.uniform4uiv(this.addr,e)}function xM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bh,s[o])}function MM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zh,s[o])}function SM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hh,s[o])}function yM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kh,s[o])}function EM(n){switch(n){case 5126:return rM;case 35664:return sM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return fM;case 35667:case 35671:return dM;case 35668:case 35672:return hM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return yM}}class bM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iM(t.type)}}class TM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EM(t.type)}}class wM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const al=/(\w+)(\])?(\[|\.)?/g;function wf(n,e){n.seq.push(e),n.map[e.id]=e}function AM(n,e,t){const i=n.name,r=i.length;for(al.lastIndex=0;;){const s=al.exec(i),o=al.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wf(t,c===void 0?new bM(a,n,e):new TM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new wM(a),wf(t,f)),t=f}}}class Vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);AM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Af(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const CM=37297;let RM=0;function PM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Cf=new Je;function DM(n){nt._getMatrix(Cf,nt.workingColorSpace,n);const e=`mat3( ${Cf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+PM(n.getShaderSource(e),o)}else return r}function LM(n,e){const t=DM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function IM(n,e){let t;switch(e){case qg:t="Linear";break;case Kg:t="Reinhard";break;case jg:t="Cineon";break;case Zg:t="ACESFilmic";break;case Qg:t="AgX";break;case ev:t="Neutral";break;case Jg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new oe;function UM(){nt.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function FM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ds(n){return n!==""}function Pf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(BM,zM)}const kM=new Map;function zM(n,e){let t=Qe[e];if(t===void 0){const i=kM.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(n){return n.replace(HM,VM)}function VM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function If(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function GM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ag?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function WM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case as:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function YM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fh:e="ENVMAP_BLENDING_MULTIPLY";break;case Yg:e="ENVMAP_BLENDING_MIX";break;case $g:e="ENVMAP_BLENDING_ADD";break}return e}function $M(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=GM(t),c=WM(t),u=XM(t),f=YM(t),h=$M(t),g=NM(t),_=FM(s),x=r.createProgram();let p,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),d.length>0&&(d+=`
`)):(p=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),d=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Bi?IM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,LM("linearToOutputTexel",t.outputColorSpace),UM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=mc(o),o=Pf(o,t),o=Df(o,t),a=mc(a),a=Pf(a,t),a=Df(a,t),o=Lf(o),a=Lf(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=C+p+o,E=C+d+a,R=Af(r,r.VERTEX_SHADER,T),D=Af(r,r.FRAGMENT_SHADER,E);r.attachShader(x,R),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(D).trim();let Z=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,D);else{const K=Rf(r,R,"vertex"),k=Rf(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+K+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||$==="")&&(X=!1);X&&(L.diagnostics={runnable:Z,programLog:N,vertexShader:{log:H,prefix:p},fragmentShader:{log:$,prefix:d}})}r.deleteShader(R),r.deleteShader(D),F=new Vo(r,x),S=OM(r,x)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,CM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=D,this}let KM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZM(e),t.set(e,i)),i}}class ZM{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}}function JM(n,e,t,i,r,s,o){const a=new Ah,l=new jM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,y,L,N,H){const $=N.fog,Z=H.geometry,X=S.isMeshStandardMaterial?N.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),k=K&&K.mapping===ma?K.image.height:null,ae=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const J=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=J!==void 0?J.length:0;let we=0;Z.morphAttributes.position!==void 0&&(we=1),Z.morphAttributes.normal!==void 0&&(we=2),Z.morphAttributes.color!==void 0&&(we=3);let Ve,re,me,Ee;if(ae){const rt=Gn[ae];Ve=rt.vertexShader,re=rt.fragmentShader}else Ve=S.vertexShader,re=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const ve=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Ue=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,xe=!!S.map,A=!!S.matcap,U=!!K,b=!!S.aoMap,ue=!!S.lightMap,ee=!!S.bumpMap,ne=!!S.normalMap,le=!!S.displacementMap,he=!!S.emissiveMap,te=!!S.metalnessMap,v=!!S.roughnessMap,m=S.anisotropy>0,w=S.clearcoat>0,O=S.dispersion>0,W=S.iridescence>0,q=S.sheen>0,fe=S.transmission>0,se=m&&!!S.anisotropyMap,de=w&&!!S.clearcoatMap,Ae=w&&!!S.clearcoatNormalMap,B=w&&!!S.clearcoatRoughnessMap,ie=W&&!!S.iridescenceMap,Me=W&&!!S.iridescenceThicknessMap,Te=q&&!!S.sheenColorMap,ye=q&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Ge=!!S.specularColorMap,et=!!S.specularIntensityMap,G=fe&&!!S.transmissionMap,be=fe&&!!S.thicknessMap,ce=!!S.gradientMap,pe=!!S.alphaMap,Le=S.alphaTest>0,Pe=!!S.alphaHash,qe=!!S.extensions;let _t=Bi;S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(_t=n.toneMapping);const wt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Ve,fragmentShader:re,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:ze,batchingColor:ze&&H._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:hs,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:A,envMap:U,envMapMode:U&&K.mapping,envMapCubeUVHeight:k,aoMap:b,lightMap:ue,bumpMap:ee,normalMap:ne,displacementMap:h&&le,emissiveMap:he,normalMapObjectSpace:ne&&S.normalMapType===sv,normalMapTangentSpace:ne&&S.normalMapType===rv,metalnessMap:te,roughnessMap:v,anisotropy:m,anisotropyMap:se,clearcoat:w,clearcoatMap:de,clearcoatNormalMap:Ae,clearcoatRoughnessMap:B,dispersion:O,iridescence:W,iridescenceMap:ie,iridescenceThicknessMap:Me,sheen:q,sheenColorMap:Te,sheenRoughnessMap:ye,specularMap:ke,specularColorMap:Ge,specularIntensityMap:et,transmission:fe,transmissionMap:G,thicknessMap:be,gradientMap:ce,opaque:S.transparent===!1&&S.blending===es&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Pe,combine:S.combine,mapUv:xe&&x(S.map.channel),aoMapUv:b&&x(S.aoMap.channel),lightMapUv:ue&&x(S.lightMap.channel),bumpMapUv:ee&&x(S.bumpMap.channel),normalMapUv:ne&&x(S.normalMap.channel),displacementMapUv:le&&x(S.displacementMap.channel),emissiveMapUv:he&&x(S.emissiveMap.channel),metalnessMapUv:te&&x(S.metalnessMap.channel),roughnessMapUv:v&&x(S.roughnessMap.channel),anisotropyMapUv:se&&x(S.anisotropyMap.channel),clearcoatMapUv:de&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(S.sheenRoughnessMap.channel),specularMapUv:ke&&x(S.specularMap.channel),specularColorMapUv:Ge&&x(S.specularColorMap.channel),specularIntensityMapUv:et&&x(S.specularIntensityMap.channel),transmissionMapUv:G&&x(S.transmissionMap.channel),thicknessMapUv:be&&x(S.thicknessMap.channel),alphaMapUv:pe&&x(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ne||m),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(xe||pe),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ui,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&S.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function d(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)y.push(L),y.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(C(y,S),T(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function C(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function T(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){const y=_[S.type];let L;if(y){const N=Gn[y];L=Nv.clone(N.uniforms)}else L=S.uniforms;return L}function R(S,y){let L;for(let N=0,H=u.length;N<H;N++){const $=u[N];if($.cacheKey===y){L=$,++L.usedTimes;break}}return L===void 0&&(L=new qM(n,y,S,s),u.push(L)),L}function D(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:R,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:F}}function QM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function eS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,g,_,x,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:g,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=g,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function a(f,h,g,_,x,p){const d=o(f,h,g,_,x,p);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):t.push(d)}function l(f,h,g,_,x,p){const d=o(f,h,g,_,x,p);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||eS),i.length>1&&i.sort(h||Uf),r.length>1&&r.sort(h||Uf)}function u(){for(let f=e,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function tS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Nf,n.set(i,[o])):r>=s.length?(o=new Nf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new ct};break;case"SpotLight":t={position:new oe,direction:new oe,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return n[e.id]=t,t}}}function iS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rS=0;function sS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oS(n){const e=new nS,t=iS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new oe);const r=new oe,s=new Tt,o=new Tt;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let g=0,_=0,x=0,p=0,d=0,C=0,T=0,E=0,R=0,D=0,P=0;c.sort(sS);for(let S=0,y=c.length;S<y;S++){const L=c[S],N=L.color,H=L.intensity,$=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*H,f+=N.g*H,h+=N.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],H);P++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,k=t.get(L);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.directionalShadow[g]=k,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=L.shadow.matrix,C++}i.directional[g]=X,g++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(H),X.distance=$,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[x]=X;const K=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[x]=K.matrix,L.castShadow){const k=t.get(L);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=Z,E++}x++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(N).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=X,p++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const K=L.shadow,k=t.get(L);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=L.shadow.matrix,T++}i.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[d]=X,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const F=i.hash;(F.directionalLength!==g||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==p||F.hemiLength!==d||F.numDirectionalShadows!==C||F.numPointShadows!==T||F.numSpotShadows!==E||F.numSpotMaps!==R||F.numLightProbes!==P)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+R-D,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,F.directionalLength=g,F.pointLength=_,F.spotLength=x,F.rectAreaLength=p,F.hemiLength=d,F.numDirectionalShadows=C,F.numPointShadows=T,F.numSpotShadows=E,F.numSpotMaps=R,F.numLightProbes=P,i.version=rS++)}function l(c,u){let f=0,h=0,g=0,_=0,x=0;const p=u.matrixWorldInverse;for(let d=0,C=c.length;d<C;d++){const T=c[d];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(T.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(T.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(T.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Ff(n){const e=new oS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function aS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ff(n),e.set(r,[a])):s>=o.length?(a=new Ff(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class lS extends va{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cS extends va{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uS=`void main() {
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
}`;function dS(n,e,t){let i=new Nh;const r=new dt,s=new dt,o=new yt,a=new lS({depthPacking:iv}),l=new cS,c={},u=t.maxTextureSize,f={[zi]:on,[on]:zi,[ui]:ui},h=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:uS,fragmentShader:fS}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new yr;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let d=this.type;this.render=function(D,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Oi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=d!==ri&&this.type===ri,$=d===ri&&this.type!==ri;for(let Z=0,X=D.length;Z<X;Z++){const K=D[Z],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ae=k.getFrameExtents();if(r.multiply(ae),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,k.mapSize.y=s.y)),k.map===null||H===!0||$===!0){const ge=this.type!==ri?{minFilter:Dn,magFilter:Dn}:{};k.map!==null&&k.map.dispose(),k.map=new Mr(r.x,r.y,ge),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const J=k.getViewportCount();for(let ge=0;ge<J;ge++){const we=k.getViewport(ge);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),N.viewport(o),k.updateMatrices(K,ge),i=k.getFrustum(),E(P,F,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===ri&&C(k,F),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(S,y,L)};function C(D,P){const F=e.update(x);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Mr(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,F,h,x,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,F,g,x,null)}function T(D,P,F,S){let y=null;const L=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)y=L;else if(y=F.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const N=y.uuid,H=P.uuid;let $=c[N];$===void 0&&($={},c[N]=$);let Z=$[H];Z===void 0&&(Z=y.clone(),$[H]=Z,P.addEventListener("dispose",R)),y=Z}if(y.visible=P.visible,y.wireframe=P.wireframe,S===ri?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=n.properties.get(y);N.light=F}return y}function E(D,P,F,S,y){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===ri)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const H=e.update(D),$=D.material;if(Array.isArray($)){const Z=H.groups;for(let X=0,K=Z.length;X<K;X++){const k=Z[X],ae=$[k.materialIndex];if(ae&&ae.visible){const J=T(D,ae,S,y);D.onBeforeShadow(n,D,P,F,H,J,k),n.renderBufferDirect(F,null,H,J,D,k),D.onAfterShadow(n,D,P,F,H,J,k)}}}else if($.visible){const Z=T(D,$,S,y);D.onBeforeShadow(n,D,P,F,H,Z,null),n.renderBufferDirect(F,null,H,Z,D,null),D.onAfterShadow(n,D,P,F,H,Z,null)}}const N=D.children;for(let H=0,$=N.length;H<$;H++)E(N[H],P,F,S,y)}function R(D){D.target.removeEventListener("dispose",R);for(const F in c){const S=c[F],y=D.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const hS={[Dl]:Ll,[Il]:Fl,[Ul]:Ol,[ss]:Nl,[Ll]:Dl,[Fl]:Il,[Ol]:Ul,[Nl]:ss};function pS(n,e){function t(){let G=!1;const be=new yt;let ce=null;const pe=new yt(0,0,0,0);return{setMask:function(Le){ce!==Le&&!G&&(n.colorMask(Le,Le,Le,Le),ce=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,qe,_t,wt){wt===!0&&(Le*=_t,Pe*=_t,qe*=_t),be.set(Le,Pe,qe,_t),pe.equals(be)===!1&&(n.clearColor(Le,Pe,qe,_t),pe.copy(be))},reset:function(){G=!1,ce=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,be=!1,ce=null,pe=null,Le=null;return{setReversed:function(Pe){if(be!==Pe){const qe=e.get("EXT_clip_control");be?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const _t=Le;Le=null,this.setClear(_t)}be=Pe},getReversed:function(){return be},setTest:function(Pe){Pe?ve(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(Pe){ce!==Pe&&!G&&(n.depthMask(Pe),ce=Pe)},setFunc:function(Pe){if(be&&(Pe=hS[Pe]),pe!==Pe){switch(Pe){case Dl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(be&&(Pe=1-Pe),n.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,ce=null,pe=null,Le=null,be=!1}}}function r(){let G=!1,be=null,ce=null,pe=null,Le=null,Pe=null,qe=null,_t=null,wt=null;return{setTest:function(rt){G||(rt?ve(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(rt){be!==rt&&!G&&(n.stencilMask(rt),be=rt)},setFunc:function(rt,It,Gt){(ce!==rt||pe!==It||Le!==Gt)&&(n.stencilFunc(rt,It,Gt),ce=rt,pe=It,Le=Gt)},setOp:function(rt,It,Gt){(Pe!==rt||qe!==It||_t!==Gt)&&(n.stencilOp(rt,It,Gt),Pe=rt,qe=It,_t=Gt)},setLocked:function(rt){G=rt},setClear:function(rt){wt!==rt&&(n.clearStencil(rt),wt=rt)},reset:function(){G=!1,be=null,ce=null,pe=null,Le=null,Pe=null,qe=null,_t=null,wt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,g=[],_=null,x=!1,p=null,d=null,C=null,T=null,E=null,R=null,D=null,P=new ct(0,0,0),F=0,S=!1,y=null,L=null,N=null,H=null,$=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=K>=2);let ae=null,J={};const ge=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Ve=new yt().fromArray(ge),re=new yt().fromArray(we);function me(G,be,ce,pe){const Le=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(G,Pe),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ce;qe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(be+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(ss),ee(!1),ne(ku),ve(n.CULL_FACE),b(Oi);function ve(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Ne(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Ue(G,be){return f[G]!==be?(n.bindFramebuffer(G,be),f[G]=be,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be),!0):!1}function ze(G,be){let ce=g,pe=!1;if(G){ce=h.get(be),ce===void 0&&(ce=[],h.set(be,ce));const Le=G.textures;if(ce.length!==Le.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,qe=Le.length;Pe<qe;Pe++)ce[Pe]=n.COLOR_ATTACHMENT0+Pe;ce.length=Le.length,pe=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ce)}function xe(G){return _!==G?(n.useProgram(G),_=G,!0):!1}const A={[cr]:n.FUNC_ADD,[Rg]:n.FUNC_SUBTRACT,[Pg]:n.FUNC_REVERSE_SUBTRACT};A[Dg]=n.MIN,A[Lg]=n.MAX;const U={[Ig]:n.ZERO,[Ug]:n.ONE,[Ng]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[Hg]:n.SRC_ALPHA_SATURATE,[kg]:n.DST_COLOR,[Og]:n.DST_ALPHA,[Fg]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[zg]:n.ONE_MINUS_DST_COLOR,[Bg]:n.ONE_MINUS_DST_ALPHA,[Vg]:n.CONSTANT_COLOR,[Gg]:n.ONE_MINUS_CONSTANT_COLOR,[Wg]:n.CONSTANT_ALPHA,[Xg]:n.ONE_MINUS_CONSTANT_ALPHA};function b(G,be,ce,pe,Le,Pe,qe,_t,wt,rt){if(G===Oi){x===!0&&(Ne(n.BLEND),x=!1);return}if(x===!1&&(ve(n.BLEND),x=!0),G!==Cg){if(G!==p||rt!==S){if((d!==cr||E!==cr)&&(n.blendEquation(n.FUNC_ADD),d=cr,E=cr),rt)switch(G){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.ONE,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}C=null,T=null,R=null,D=null,P.set(0,0,0),F=0,p=G,S=rt}return}Le=Le||be,Pe=Pe||ce,qe=qe||pe,(be!==d||Le!==E)&&(n.blendEquationSeparate(A[be],A[Le]),d=be,E=Le),(ce!==C||pe!==T||Pe!==R||qe!==D)&&(n.blendFuncSeparate(U[ce],U[pe],U[Pe],U[qe]),C=ce,T=pe,R=Pe,D=qe),(_t.equals(P)===!1||wt!==F)&&(n.blendColor(_t.r,_t.g,_t.b,wt),P.copy(_t),F=wt),p=G,S=!1}function ue(G,be){G.side===ui?Ne(n.CULL_FACE):ve(n.CULL_FACE);let ce=G.side===on;be&&(ce=!ce),ee(ce),G.blending===es&&G.transparent===!1?b(Oi):b(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const pe=G.stencilWrite;a.setTest(pe),pe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),he(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(G){y!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),y=G)}function ne(G){G!==Tg?(ve(n.CULL_FACE),G!==L&&(G===ku?n.cullFace(n.BACK):G===wg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),L=G}function le(G){G!==N&&(X&&n.lineWidth(G),N=G)}function he(G,be,ce){G?(ve(n.POLYGON_OFFSET_FILL),(H!==be||$!==ce)&&(n.polygonOffset(be,ce),H=be,$=ce)):Ne(n.POLYGON_OFFSET_FILL)}function te(G){G?ve(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function v(G){G===void 0&&(G=n.TEXTURE0+Z-1),ae!==G&&(n.activeTexture(G),ae=G)}function m(G,be,ce){ce===void 0&&(ae===null?ce=n.TEXTURE0+Z-1:ce=ae);let pe=J[ce];pe===void 0&&(pe={type:void 0,texture:void 0},J[ce]=pe),(pe.type!==G||pe.texture!==be)&&(ae!==ce&&(n.activeTexture(ce),ae=ce),n.bindTexture(G,be||Ee[G]),pe.type=G,pe.texture=be)}function w(){const G=J[ae];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(G){Ve.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ve.copy(G))}function ye(G){re.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),re.copy(G))}function ke(G,be){let ce=c.get(be);ce===void 0&&(ce=new WeakMap,c.set(be,ce));let pe=ce.get(G);pe===void 0&&(pe=n.getUniformBlockIndex(be,G.name),ce.set(G,pe))}function Ge(G,be){const pe=c.get(be).get(G);l.get(be)!==pe&&(n.uniformBlockBinding(be,pe,G.__bindingPointIndex),l.set(be,pe))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,J={},f={},h=new WeakMap,g=[],_=null,x=!1,p=null,d=null,C=null,T=null,E=null,R=null,D=null,P=new ct(0,0,0),F=0,S=!1,y=null,L=null,N=null,H=null,$=null,Ve.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:Ne,bindFramebuffer:Ue,drawBuffers:ze,useProgram:xe,setBlending:b,setMaterial:ue,setFlipSided:ee,setCullFace:ne,setLineWidth:le,setPolygonOffset:he,setScissorTest:te,activeTexture:v,bindTexture:m,unbindTexture:w,compressedTexImage2D:O,compressedTexImage3D:W,texImage2D:ie,texImage3D:Me,updateUBOMapping:ke,uniformBlockBinding:Ge,texStorage2D:Ae,texStorage3D:B,texSubImage2D:q,texSubImage3D:fe,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:Te,viewport:ye,reset:et}}function Of(n,e,t,i){const r=mS(i);switch(t){case gh:return n*e;case _h:return n*e;case xh:return n*e*2;case Mh:return n*e/r.components*r.byteLength;case Bc:return n*e/r.components*r.byteLength;case Sh:return n*e*2/r.components*r.byteLength;case kc:return n*e*2/r.components*r.byteLength;case vh:return n*e*3/r.components*r.byteLength;case Cn:return n*e*4/r.components*r.byteLength;case zc:return n*e*4/r.components*r.byteLength;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case Yl:case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ho:case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yh:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mS(n){switch(n){case _i:case hh:return{byteLength:1,components:1};case qs:case ph:case Js:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case xr:case Nc:case fi:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(v,m){return g?new OffscreenCanvas(v,m):Jo("canvas")}function x(v,m,w){let O=1;const W=te(v);if((W.width>w||W.height>w)&&(O=w/Math.max(W.width,W.height)),O<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const q=Math.floor(O*W.width),fe=Math.floor(O*W.height);f===void 0&&(f=_(q,fe));const se=m?_(q,fe):f;return se.width=q,se.height=fe,se.getContext("2d").drawImage(v,0,0,q,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+q+"x"+fe+")."),se}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),v;return v}function p(v){return v.generateMipmaps}function d(v){n.generateMipmap(v)}function C(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(v,m,w,O,W=!1){if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let q=m;if(m===n.RED&&(w===n.FLOAT&&(q=n.R32F),w===n.HALF_FLOAT&&(q=n.R16F),w===n.UNSIGNED_BYTE&&(q=n.R8)),m===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(q=n.R8UI),w===n.UNSIGNED_SHORT&&(q=n.R16UI),w===n.UNSIGNED_INT&&(q=n.R32UI),w===n.BYTE&&(q=n.R8I),w===n.SHORT&&(q=n.R16I),w===n.INT&&(q=n.R32I)),m===n.RG&&(w===n.FLOAT&&(q=n.RG32F),w===n.HALF_FLOAT&&(q=n.RG16F),w===n.UNSIGNED_BYTE&&(q=n.RG8)),m===n.RG_INTEGER&&(w===n.UNSIGNED_BYTE&&(q=n.RG8UI),w===n.UNSIGNED_SHORT&&(q=n.RG16UI),w===n.UNSIGNED_INT&&(q=n.RG32UI),w===n.BYTE&&(q=n.RG8I),w===n.SHORT&&(q=n.RG16I),w===n.INT&&(q=n.RG32I)),m===n.RGB_INTEGER&&(w===n.UNSIGNED_BYTE&&(q=n.RGB8UI),w===n.UNSIGNED_SHORT&&(q=n.RGB16UI),w===n.UNSIGNED_INT&&(q=n.RGB32UI),w===n.BYTE&&(q=n.RGB8I),w===n.SHORT&&(q=n.RGB16I),w===n.INT&&(q=n.RGB32I)),m===n.RGBA_INTEGER&&(w===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),w===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),w===n.UNSIGNED_INT&&(q=n.RGBA32UI),w===n.BYTE&&(q=n.RGBA8I),w===n.SHORT&&(q=n.RGBA16I),w===n.INT&&(q=n.RGBA32I)),m===n.RGB&&w===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),m===n.RGBA){const fe=W?ga:nt.getTransfer(O);w===n.FLOAT&&(q=n.RGBA32F),w===n.HALF_FLOAT&&(q=n.RGBA16F),w===n.UNSIGNED_BYTE&&(q=fe===ft?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(v,m){let w;return v?m===null||m===xr||m===ls?w=n.DEPTH24_STENCIL8:m===fi?w=n.DEPTH32F_STENCIL8:m===qs&&(w=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===xr||m===ls?w=n.DEPTH_COMPONENT24:m===fi?w=n.DEPTH_COMPONENT32F:m===qs&&(w=n.DEPTH_COMPONENT16),w}function R(v,m){return p(v)===!0||v.isFramebufferTexture&&v.minFilter!==Dn&&v.minFilter!==Mt?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function D(v){const m=v.target;m.removeEventListener("dispose",D),F(m),m.isVideoTexture&&u.delete(m)}function P(v){const m=v.target;m.removeEventListener("dispose",P),y(m)}function F(v){const m=i.get(v);if(m.__webglInit===void 0)return;const w=v.source,O=h.get(w);if(O){const W=O[m.__cacheKey];W.usedTimes--,W.usedTimes===0&&S(v),Object.keys(O).length===0&&h.delete(w)}i.remove(v)}function S(v){const m=i.get(v);n.deleteTexture(m.__webglTexture);const w=v.source,O=h.get(w);delete O[m.__cacheKey],o.memory.textures--}function y(v){const m=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(m.__webglFramebuffer[O]))for(let W=0;W<m.__webglFramebuffer[O].length;W++)n.deleteFramebuffer(m.__webglFramebuffer[O][W]);else n.deleteFramebuffer(m.__webglFramebuffer[O]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[O])}else{if(Array.isArray(m.__webglFramebuffer))for(let O=0;O<m.__webglFramebuffer.length;O++)n.deleteFramebuffer(m.__webglFramebuffer[O]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let O=0;O<m.__webglColorRenderbuffer.length;O++)m.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[O]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const w=v.textures;for(let O=0,W=w.length;O<W;O++){const q=i.get(w[O]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(w[O])}i.remove(v)}let L=0;function N(){L=0}function H(){const v=L;return v>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),L+=1,v}function $(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function Z(v,m){const w=i.get(v);if(v.isVideoTexture&&le(v),v.isRenderTargetTexture===!1&&v.version>0&&w.__version!==v.version){const O=v.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(w,v,m);return}}t.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+m)}function X(v,m){const w=i.get(v);if(v.version>0&&w.__version!==v.version){re(w,v,m);return}t.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+m)}function K(v,m){const w=i.get(v);if(v.version>0&&w.__version!==v.version){re(w,v,m);return}t.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+m)}function k(v,m){const w=i.get(v);if(v.version>0&&w.__version!==v.version){me(w,v,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+m)}const ae={[zl]:n.REPEAT,[fr]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},J={[Dn]:n.NEAREST,[tv]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[Mt]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[dr]:n.LINEAR_MIPMAP_LINEAR},ge={[ov]:n.NEVER,[dv]:n.ALWAYS,[av]:n.LESS,[Eh]:n.LEQUAL,[lv]:n.EQUAL,[fv]:n.GEQUAL,[cv]:n.GREATER,[uv]:n.NOTEQUAL};function we(v,m){if(m.type===fi&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Mt||m.magFilter===Ia||m.magFilter===co||m.magFilter===dr||m.minFilter===Mt||m.minFilter===Ia||m.minFilter===co||m.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ae[m.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ae[m.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ae[m.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,J[m.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,J[m.minFilter]),m.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,ge[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Dn||m.minFilter!==co&&m.minFilter!==dr||m.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const w=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Ve(v,m){let w=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",D));const O=m.source;let W=h.get(O);W===void 0&&(W={},h.set(O,W));const q=$(m);if(q!==v.__cacheKey){W[q]===void 0&&(W[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,w=!0),W[q].usedTimes++;const fe=W[v.__cacheKey];fe!==void 0&&(W[v.__cacheKey].usedTimes--,fe.usedTimes===0&&S(m)),v.__cacheKey=q,v.__webglTexture=W[q].texture}return w}function re(v,m,w){let O=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(O=n.TEXTURE_3D);const W=Ve(v,m),q=m.source;t.bindTexture(O,v.__webglTexture,n.TEXTURE0+w);const fe=i.get(q);if(q.version!==fe.__version||W===!0){t.activeTexture(n.TEXTURE0+w);const se=nt.getPrimaries(nt.workingColorSpace),de=m.colorSpace===Ui?null:nt.getPrimaries(m.colorSpace),Ae=m.colorSpace===Ui||se===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let B=x(m.image,!1,r.maxTextureSize);B=he(m,B);const ie=s.convert(m.format,m.colorSpace),Me=s.convert(m.type);let Te=T(m.internalFormat,ie,Me,m.colorSpace,m.isVideoTexture);we(O,m);let ye;const ke=m.mipmaps,Ge=m.isVideoTexture!==!0,et=fe.__version===void 0||W===!0,G=q.dataReady,be=R(m,B);if(m.isDepthTexture)Te=E(m.format===cs,m.type),et&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Te,B.width,B.height):t.texImage2D(n.TEXTURE_2D,0,Te,B.width,B.height,0,ie,Me,null));else if(m.isDataTexture)if(ke.length>0){Ge&&et&&t.texStorage2D(n.TEXTURE_2D,be,Te,ke[0].width,ke[0].height);for(let ce=0,pe=ke.length;ce<pe;ce++)ye=ke[ce],Ge?G&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ye.width,ye.height,ie,Me,ye.data):t.texImage2D(n.TEXTURE_2D,ce,Te,ye.width,ye.height,0,ie,Me,ye.data);m.generateMipmaps=!1}else Ge?(et&&t.texStorage2D(n.TEXTURE_2D,be,Te,B.width,B.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,B.width,B.height,ie,Me,B.data)):t.texImage2D(n.TEXTURE_2D,0,Te,B.width,B.height,0,ie,Me,B.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ge&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Te,ke[0].width,ke[0].height,B.depth);for(let ce=0,pe=ke.length;ce<pe;ce++)if(ye=ke[ce],m.format!==Cn)if(ie!==null)if(Ge){if(G)if(m.layerUpdates.size>0){const Le=Of(ye.width,ye.height,m.format,m.type);for(const Pe of m.layerUpdates){const qe=ye.data.subarray(Pe*Le/ye.data.BYTES_PER_ELEMENT,(Pe+1)*Le/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Pe,ye.width,ye.height,1,ie,qe)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ye.width,ye.height,B.depth,ie,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Te,ye.width,ye.height,B.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ye.width,ye.height,B.depth,ie,Me,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Te,ye.width,ye.height,B.depth,0,ie,Me,ye.data)}else{Ge&&et&&t.texStorage2D(n.TEXTURE_2D,be,Te,ke[0].width,ke[0].height);for(let ce=0,pe=ke.length;ce<pe;ce++)ye=ke[ce],m.format!==Cn?ie!==null?Ge?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,ye.width,ye.height,ie,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Te,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?G&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ye.width,ye.height,ie,Me,ye.data):t.texImage2D(n.TEXTURE_2D,ce,Te,ye.width,ye.height,0,ie,Me,ye.data)}else if(m.isDataArrayTexture)if(Ge){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Te,B.width,B.height,B.depth),G)if(m.layerUpdates.size>0){const ce=Of(B.width,B.height,m.format,m.type);for(const pe of m.layerUpdates){const Le=B.data.subarray(pe*ce/B.data.BYTES_PER_ELEMENT,(pe+1)*ce/B.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,B.width,B.height,1,ie,Me,Le)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ie,Me,B.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,B.width,B.height,B.depth,0,ie,Me,B.data);else if(m.isData3DTexture)Ge?(et&&t.texStorage3D(n.TEXTURE_3D,be,Te,B.width,B.height,B.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ie,Me,B.data)):t.texImage3D(n.TEXTURE_3D,0,Te,B.width,B.height,B.depth,0,ie,Me,B.data);else if(m.isFramebufferTexture){if(et)if(Ge)t.texStorage2D(n.TEXTURE_2D,be,Te,B.width,B.height);else{let ce=B.width,pe=B.height;for(let Le=0;Le<be;Le++)t.texImage2D(n.TEXTURE_2D,Le,Te,ce,pe,0,ie,Me,null),ce>>=1,pe>>=1}}else if(ke.length>0){if(Ge&&et){const ce=te(ke[0]);t.texStorage2D(n.TEXTURE_2D,be,Te,ce.width,ce.height)}for(let ce=0,pe=ke.length;ce<pe;ce++)ye=ke[ce],Ge?G&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ie,Me,ye):t.texImage2D(n.TEXTURE_2D,ce,Te,ie,Me,ye);m.generateMipmaps=!1}else if(Ge){if(et){const ce=te(B);t.texStorage2D(n.TEXTURE_2D,be,Te,ce.width,ce.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie,Me,B)}else t.texImage2D(n.TEXTURE_2D,0,Te,ie,Me,B);p(m)&&d(O),fe.__version=q.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function me(v,m,w){if(m.image.length!==6)return;const O=Ve(v,m),W=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+w);const q=i.get(W);if(W.version!==q.__version||O===!0){t.activeTexture(n.TEXTURE0+w);const fe=nt.getPrimaries(nt.workingColorSpace),se=m.colorSpace===Ui?null:nt.getPrimaries(m.colorSpace),de=m.colorSpace===Ui||fe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ae=m.isCompressedTexture||m.image[0].isCompressedTexture,B=m.image[0]&&m.image[0].isDataTexture,ie=[];for(let pe=0;pe<6;pe++)!Ae&&!B?ie[pe]=x(m.image[pe],!0,r.maxCubemapSize):ie[pe]=B?m.image[pe].image:m.image[pe],ie[pe]=he(m,ie[pe]);const Me=ie[0],Te=s.convert(m.format,m.colorSpace),ye=s.convert(m.type),ke=T(m.internalFormat,Te,ye,m.colorSpace),Ge=m.isVideoTexture!==!0,et=q.__version===void 0||O===!0,G=W.dataReady;let be=R(m,Me);we(n.TEXTURE_CUBE_MAP,m);let ce;if(Ae){Ge&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ke,Me.width,Me.height);for(let pe=0;pe<6;pe++){ce=ie[pe].mipmaps;for(let Le=0;Le<ce.length;Le++){const Pe=ce[Le];m.format!==Cn?Te!==null?Ge?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Te,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Te,ye,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ke,Pe.width,Pe.height,0,Te,ye,Pe.data)}}}else{if(ce=m.mipmaps,Ge&&et){ce.length>0&&be++;const pe=te(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ke,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(B){Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ie[pe].width,ie[pe].height,Te,ye,ie[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ke,ie[pe].width,ie[pe].height,0,Te,ye,ie[pe].data);for(let Le=0;Le<ce.length;Le++){const qe=ce[Le].image[pe].image;Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,qe.width,qe.height,Te,ye,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ke,qe.width,qe.height,0,Te,ye,qe.data)}}else{Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te,ye,ie[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ke,Te,ye,ie[pe]);for(let Le=0;Le<ce.length;Le++){const Pe=ce[Le];Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,Te,ye,Pe.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ke,Te,ye,Pe.image[pe])}}}p(m)&&d(n.TEXTURE_CUBE_MAP),q.__version=W.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function Ee(v,m,w,O,W,q){const fe=s.convert(w.format,w.colorSpace),se=s.convert(w.type),de=T(w.internalFormat,fe,se,w.colorSpace),Ae=i.get(m),B=i.get(w);if(B.__renderTarget=m,!Ae.__hasExternalTextures){const ie=Math.max(1,m.width>>q),Me=Math.max(1,m.height>>q);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,q,de,ie,Me,m.depth,0,fe,se,null):t.texImage2D(W,q,de,ie,Me,0,fe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),ne(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,W,B.__webglTexture,0,ee(m)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,W,B.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(v,m,w){if(n.bindRenderbuffer(n.RENDERBUFFER,v),m.depthBuffer){const O=m.depthTexture,W=O&&O.isDepthTexture?O.type:null,q=E(m.stencilBuffer,W),fe=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=ee(m);ne(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,q,m.width,m.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,q,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,q,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,v)}else{const O=m.textures;for(let W=0;W<O.length;W++){const q=O[W],fe=s.convert(q.format,q.colorSpace),se=s.convert(q.type),de=T(q.internalFormat,fe,se,q.colorSpace),Ae=ee(m);w&&ne(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,de,m.width,m.height):ne(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,de,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,de,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(v,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(m.depthTexture);O.__renderTarget=m,(!O.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Z(m.depthTexture,0);const W=O.__webglTexture,q=ee(m);if(m.depthTexture.format===ts)ne(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(m.depthTexture.format===cs)ne(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ue(v){const m=i.get(v),w=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const O=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),O){const W=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,O.removeEventListener("dispose",W)};O.addEventListener("dispose",W),m.__depthDisposeCallback=W}m.__boundDepthTexture=O}if(v.depthTexture&&!m.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Ne(m.__webglFramebuffer,v)}else if(w){m.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[O]),m.__webglDepthbuffer[O]===void 0)m.__webglDepthbuffer[O]=n.createRenderbuffer(),ve(m.__webglDepthbuffer[O],v,!1);else{const W=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=m.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),ve(m.__webglDepthbuffer,v,!1);else{const O=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(v,m,w){const O=i.get(v);m!==void 0&&Ee(O.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&Ue(v)}function xe(v){const m=v.texture,w=i.get(v),O=i.get(m);v.addEventListener("dispose",P);const W=v.textures,q=v.isWebGLCubeRenderTarget===!0,fe=W.length>1;if(fe||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=m.version,o.memory.textures++),q){w.__webglFramebuffer=[];for(let se=0;se<6;se++)if(m.mipmaps&&m.mipmaps.length>0){w.__webglFramebuffer[se]=[];for(let de=0;de<m.mipmaps.length;de++)w.__webglFramebuffer[se][de]=n.createFramebuffer()}else w.__webglFramebuffer[se]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){w.__webglFramebuffer=[];for(let se=0;se<m.mipmaps.length;se++)w.__webglFramebuffer[se]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(fe)for(let se=0,de=W.length;se<de;se++){const Ae=i.get(W[se]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&ne(v)===!1){w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let se=0;se<W.length;se++){const de=W[se];w.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[se]);const Ae=s.convert(de.format,de.colorSpace),B=s.convert(de.type),ie=T(de.internalFormat,Ae,B,de.colorSpace,v.isXRRenderTarget===!0),Me=ee(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ie,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,w.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(w.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),we(n.TEXTURE_CUBE_MAP,m);for(let se=0;se<6;se++)if(m.mipmaps&&m.mipmaps.length>0)for(let de=0;de<m.mipmaps.length;de++)Ee(w.__webglFramebuffer[se][de],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else Ee(w.__webglFramebuffer[se],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(m)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let se=0,de=W.length;se<de;se++){const Ae=W[se],B=i.get(Ae);t.bindTexture(n.TEXTURE_2D,B.__webglTexture),we(n.TEXTURE_2D,Ae),Ee(w.__webglFramebuffer,v,Ae,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),p(Ae)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(se=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,O.__webglTexture),we(se,m),m.mipmaps&&m.mipmaps.length>0)for(let de=0;de<m.mipmaps.length;de++)Ee(w.__webglFramebuffer[de],v,m,n.COLOR_ATTACHMENT0,se,de);else Ee(w.__webglFramebuffer,v,m,n.COLOR_ATTACHMENT0,se,0);p(m)&&d(se),t.unbindTexture()}v.depthBuffer&&Ue(v)}function A(v){const m=v.textures;for(let w=0,O=m.length;w<O;w++){const W=m[w];if(p(W)){const q=C(v),fe=i.get(W).__webglTexture;t.bindTexture(q,fe),d(q),t.unbindTexture()}}}const U=[],b=[];function ue(v){if(v.samples>0){if(ne(v)===!1){const m=v.textures,w=v.width,O=v.height;let W=n.COLOR_BUFFER_BIT;const q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(v),se=m.length>1;if(se)for(let de=0;de<m.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<m.length;de++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ae=i.get(m[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,w,O,0,0,w,O,W,n.NEAREST),l===!0&&(U.length=0,b.length=0,U.push(n.COLOR_ATTACHMENT0+de),v.depthBuffer&&v.resolveDepthBuffer===!1&&(U.push(q),b.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<m.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ae=i.get(m[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const m=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function ee(v){return Math.min(r.maxSamples,v.samples)}function ne(v){const m=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function le(v){const m=o.render.frame;u.get(v)!==m&&(u.set(v,m),v.update())}function he(v,m){const w=v.colorSpace,O=v.format,W=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||w!==hs&&w!==Ui&&(nt.getTransfer(w)===ft?(O!==Cn||W!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),m}function te(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=ze,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ne}function vS(n,e){function t(i,r=Ui){let s;const o=nt.getTransfer(r);if(i===_i)return n.UNSIGNED_BYTE;if(i===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hh)return n.BYTE;if(i===ph)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===xr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Js)return n.HALF_FLOAT;if(i===gh)return n.ALPHA;if(i===vh)return n.RGB;if(i===Cn)return n.RGBA;if(i===_h)return n.LUMINANCE;if(i===xh)return n.LUMINANCE_ALPHA;if(i===ts)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===Mh)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Sh)return n.RG;if(i===kc)return n.RG_INTEGER;if(i===zc)return n.RGBA_INTEGER;if(i===Oo||i===Bo||i===ko||i===zo)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yl||i===$l||i===ql)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yl||i===$l)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ql)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kl||i===jl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===cc||i===uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ho)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===fc||i===dc||i===hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ho)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class _S extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Do extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const MS=`
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

}`;class yS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Sn({vertexShader:MS,fragmentShader:SS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new Xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ES extends ps{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,g=null,_=null;const x=new yS,p=t.getContextAttributes();let d=null,C=null;const T=[],E=[],R=new dt;let D=null;const P=new wn;P.viewport=new yt;const F=new wn;F.viewport=new yt;const S=[P,F],y=new _S;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=T[re];return me===void 0&&(me=new ll,T[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=T[re];return me===void 0&&(me=new ll,T[re]=me),me.getGripSpace()},this.getHand=function(re){let me=T[re];return me===void 0&&(me=new ll,T[re]=me),me.getHandSpace()};function H(re){const me=E.indexOf(re.inputSource);if(me===-1)return;const Ee=T[me];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,c||o),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let re=0;re<T.length;re++){const me=E[re];me!==null&&(E[re]=null,T[re].disconnect(me))}L=null,N=null,x.reset(),e.setRenderTarget(d),g=null,h=null,f=null,r=null,C=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new Mr(g.framebufferWidth,g.framebufferHeight,{format:Cn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let me=null,Ee=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=p.stencil?cs:ts,Ee=p.stencil?ls:xr);const Ne={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new Mr(h.textureWidth,h.textureHeight,{format:Cn,type:_i,depthTexture:new Oh(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(re){for(let me=0;me<re.removed.length;me++){const Ee=re.removed[me],ve=E.indexOf(Ee);ve>=0&&(E[ve]=null,T[ve].disconnect(Ee))}for(let me=0;me<re.added.length;me++){const Ee=re.added[me];let ve=E.indexOf(Ee);if(ve===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=E.length){E.push(Ee),ve=Ue;break}else if(E[Ue]===null){E[Ue]=Ee,ve=Ue;break}if(ve===-1)break}const Ne=T[ve];Ne&&Ne.connect(Ee)}}const X=new oe,K=new oe;function k(re,me,Ee){X.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(Ee.matrixWorld);const ve=X.distanceTo(K),Ne=me.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,ze=Ne[14]/(Ne[10]-1),xe=Ne[14]/(Ne[10]+1),A=(Ne[9]+1)/Ne[5],U=(Ne[9]-1)/Ne[5],b=(Ne[8]-1)/Ne[0],ue=(Ue[8]+1)/Ue[0],ee=ze*b,ne=ze*ue,le=ve/(-b+ue),he=le*-b;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(he),re.translateZ(le),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ne[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const te=ze+le,v=xe+le,m=ee-he,w=ne+(ve-he),O=A*xe/v*te,W=U*xe/v*te;re.projectionMatrix.makePerspective(m,w,O,W,te,v),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ae(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let me=re.near,Ee=re.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),y.near=F.near=P.near=me,y.far=F.far=P.far=Ee,(L!==y.near||N!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,N=y.far),P.layers.mask=re.layers.mask|2,F.layers.mask=re.layers.mask|4,y.layers.mask=P.layers.mask|F.layers.mask;const ve=re.parent,Ne=y.cameras;ae(y,ve);for(let Ue=0;Ue<Ne.length;Ue++)ae(Ne[Ue],ve);Ne.length===2?k(y,P,F):y.projectionMatrix.copy(P.projectionMatrix),J(re,y,ve)};function J(re,me,Ee){Ee===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=pc*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ge=null;function we(re,me){if(u=me.getViewerPose(c||o),_=me,u!==null){const Ee=u.views;g!==null&&(e.setRenderTargetFramebuffer(C,g.framebuffer),e.setRenderTarget(C));let ve=!1;Ee.length!==y.cameras.length&&(y.cameras.length=0,ve=!0);for(let Ue=0;Ue<Ee.length;Ue++){const ze=Ee[Ue];let xe=null;if(g!==null)xe=g.getViewport(ze);else{const U=f.getViewSubImage(h,ze);xe=U.viewport,Ue===0&&(e.setRenderTargetTextures(C,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(C))}let A=S[Ue];A===void 0&&(A=new wn,A.layers.enable(Ue),A.viewport=new yt,S[Ue]=A),A.matrix.fromArray(ze.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(ze.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(xe.x,xe.y,xe.width,xe.height),Ue===0&&(y.matrix.copy(A.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ve===!0&&y.cameras.push(A)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ue=f.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,r.renderState)}}for(let Ee=0;Ee<T.length;Ee++){const ve=E[Ee],Ne=T[Ee];ve!==null&&Ne!==void 0&&Ne.update(ve,me,c||o)}ge&&ge(re,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Ve=new Fh;Ve.setAnimationLoop(we),this.setAnimationLoop=function(re){ge=re},this.dispose=function(){}}}const ir=new xi,bS=new Tt;function TS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Lh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,C,T,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&g(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,C,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===on&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===on&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const C=e.get(d),T=C.envMap,E=C.envMapRotation;T&&(p.envMap.value=T,ir.copy(E),ir.x*=-1,ir.y*=-1,ir.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),p.envMapRotation.value.setFromMatrix4(bS.makeRotationFromEuler(ir)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,C,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*C,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,C){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const C=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,T){const E=T.program;i.uniformBlockBinding(C,E)}function c(C,T){let E=r[C.id];E===void 0&&(_(C),E=u(C),r[C.id]=E,C.addEventListener("dispose",p));const R=T.program;i.updateUBOMapping(C,R);const D=e.render.frame;s[C.id]!==D&&(h(C),s[C.id]=D)}function u(C){const T=f();C.__bindingPointIndex=T;const E=n.createBuffer(),R=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const T=r[C.id],E=C.uniforms,R=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,P=E.length;D<P;D++){const F=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,y=F.length;S<y;S++){const L=F[S];if(g(L,D,S,R)===!0){const N=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let Z=0;Z<H.length;Z++){const X=H[Z],K=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,N+$,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(C,T,E,R){const D=C.value,P=T+"_"+E;if(R[P]===void 0)return typeof D=="number"||typeof D=="boolean"?R[P]=D:R[P]=D.clone(),!0;{const F=R[P];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return R[P]=D,!0}else if(F.equals(D)===!1)return F.copy(D),!0}return!1}function _(C){const T=C.uniforms;let E=0;const R=16;for(let P=0,F=T.length;P<F;P++){const S=Array.isArray(T[P])?T[P]:[T[P]];for(let y=0,L=S.length;y<L;y++){const N=S[y],H=Array.isArray(N.value)?N.value:[N.value];for(let $=0,Z=H.length;$<Z;$++){const X=H[$],K=x(X),k=E%R,ae=k%K.boundary,J=k+ae;E+=ae,J!==0&&R-J<K.storage&&(E+=R-J),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=K.storage}}}const D=E%R;return D>0&&(E+=R-D),C.__size=E,C.__cache={},this}function x(C){const T={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(T.boundary=4,T.storage=4):C.isVector2?(T.boundary=8,T.storage=8):C.isVector3||C.isColor?(T.boundary=16,T.storage=12):C.isVector4?(T.boundary=16,T.storage=16):C.isMatrix3?(T.boundary=48,T.storage=48):C.isMatrix4?(T.boundary=64,T.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),T}function p(C){const T=C.target;T.removeEventListener("dispose",p);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class xa{constructor(e={}){const{canvas:t=pv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,d=null;const C=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=Bi,this.toneMappingExposure=1;const E=this;let R=!1,D=0,P=0,F=null,S=-1,y=null;const L=new yt,N=new yt;let H=null;const $=new ct(0);let Z=0,X=t.width,K=t.height,k=1,ae=null,J=null;const ge=new yt(0,0,X,K),we=new yt(0,0,X,K);let Ve=!1;const re=new Nh;let me=!1,Ee=!1;const ve=new Tt,Ne=new Tt,Ue=new oe,ze=new yt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function U(){return F===null?k:1}let b=i;function ue(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),b===null){const I="webgl2";if(b=ue(I,M),b===null)throw ue(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ee,ne,le,he,te,v,m,w,O,W,q,fe,se,de,Ae,B,ie,Me,Te,ye,ke,Ge,et,G;function be(){ee=new Lx(b),ee.init(),Ge=new vS(b,ee),ne=new wx(b,ee,e,Ge),le=new pS(b,ee),ne.reverseDepthBuffer&&h&&le.buffers.depth.setReversed(!0),he=new Nx(b),te=new QM,v=new gS(b,ee,le,te,ne,Ge,he),m=new Cx(E),w=new Dx(E),O=new Vv(b),et=new bx(b,O),W=new Ix(b,O,he,et),q=new Ox(b,W,O,he),Te=new Fx(b,ne,v),B=new Ax(te),fe=new JM(E,m,w,ee,ne,et,B),se=new TS(E,te),de=new tS,Ae=new aS(ee),Me=new Ex(E,m,w,le,q,g,l),ie=new dS(E,q,ne),G=new wS(b,he,ne,le),ye=new Tx(b,ee,he),ke=new Ux(b,ee,he),he.programs=fe.programs,E.capabilities=ne,E.extensions=ee,E.properties=te,E.renderLists=de,E.shadowMap=ie,E.state=le,E.info=he}be();const ce=new ES(E,b);this.xr=ce,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(X,K,!1))},this.getSize=function(M){return M.set(X,K)},this.setSize=function(M,I,z=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,K=I,t.width=Math.floor(M*k),t.height=Math.floor(I*k),z===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(X*k,K*k).floor()},this.setDrawingBufferSize=function(M,I,z){X=M,K=I,k=z,t.width=Math.floor(M*z),t.height=Math.floor(I*z),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(ge)},this.setViewport=function(M,I,z,j){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,I,z,j),le.viewport(L.copy(ge).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(we)},this.setScissor=function(M,I,z,j){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,I,z,j),le.scissor(N.copy(we).multiplyScalar(k).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(M){le.setScissorTest(Ve=M)},this.setOpaqueSort=function(M){ae=M},this.setTransparentSort=function(M){J=M},this.getClearColor=function(M){return M.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(M=!0,I=!0,z=!0){let j=0;if(M){let V=!1;if(F!==null){const _e=F.texture.format;V=_e===zc||_e===kc||_e===Bc}if(V){const _e=F.texture.type,Ce=_e===_i||_e===xr||_e===qs||_e===ls||_e===Fc||_e===Oc,Fe=Me.getClearColor(),Oe=Me.getClearAlpha(),$e=Fe.r,Ke=Fe.g,He=Fe.b;Ce?(_[0]=$e,_[1]=Ke,_[2]=He,_[3]=Oe,b.clearBufferuiv(b.COLOR,0,_)):(x[0]=$e,x[1]=Ke,x[2]=He,x[3]=Oe,b.clearBufferiv(b.COLOR,0,x))}else j|=b.COLOR_BUFFER_BIT}I&&(j|=b.DEPTH_BUFFER_BIT),z&&(j|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),de.dispose(),Ae.dispose(),te.dispose(),m.dispose(),w.dispose(),q.dispose(),et.dispose(),G.dispose(),fe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",br),ce.removeEventListener("sessionend",Kn),Fn.stop()};function pe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=he.autoReset,I=ie.enabled,z=ie.autoUpdate,j=ie.needsUpdate,V=ie.type;be(),he.autoReset=M,ie.enabled=I,ie.autoUpdate=z,ie.needsUpdate=j,ie.type=V}function Pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function qe(M){const I=M.target;I.removeEventListener("dispose",qe),_t(I)}function _t(M){wt(M),te.remove(M)}function wt(M){const I=te.get(M).programs;I!==void 0&&(I.forEach(function(z){fe.releaseProgram(z)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,z,j,V,_e){I===null&&(I=xe);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,Fe=Q(M,I,z,j,V);le.setMaterial(j,Ce);let Oe=z.index,$e=1;if(j.wireframe===!0){if(Oe=W.getWireframeAttribute(z),Oe===void 0)return;$e=2}const Ke=z.drawRange,He=z.attributes.position;let it=Ke.start*$e,pt=(Ke.start+Ke.count)*$e;_e!==null&&(it=Math.max(it,_e.start*$e),pt=Math.min(pt,(_e.start+_e.count)*$e)),Oe!==null?(it=Math.max(it,0),pt=Math.min(pt,Oe.count)):He!=null&&(it=Math.max(it,0),pt=Math.min(pt,He.count));const gt=pt-it;if(gt<0||gt===1/0)return;et.setup(V,j,Fe,z,Oe);let Qt,ot=ye;if(Oe!==null&&(Qt=O.get(Oe),ot=ke,ot.setIndex(Qt)),V.isMesh)j.wireframe===!0?(le.setLineWidth(j.wireframeLinewidth*U()),ot.setMode(b.LINES)):ot.setMode(b.TRIANGLES);else if(V.isLine){let We=j.linewidth;We===void 0&&(We=1),le.setLineWidth(We*U()),V.isLineSegments?ot.setMode(b.LINES):V.isLineLoop?ot.setMode(b.LINE_LOOP):ot.setMode(b.LINE_STRIP)}else V.isPoints?ot.setMode(b.POINTS):V.isSprite&&ot.setMode(b.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const We=V._multiDrawStarts,jn=V._multiDrawCounts,at=V._multiDrawCount,yn=Oe?O.get(Oe).bytesPerElement:1,Cr=te.get(j).currentProgram.getUniforms();for(let an=0;an<at;an++)Cr.setValue(b,"_gl_DrawID",an),ot.render(We[an]/yn,jn[an])}else if(V.isInstancedMesh)ot.renderInstances(it,gt,V.count);else if(z.isInstancedBufferGeometry){const We=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,jn=Math.min(z.instanceCount,We);ot.renderInstances(it,gt,jn)}else ot.render(it,gt)};function rt(M,I,z){M.transparent===!0&&M.side===ui&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,Ar(M,I,z),M.side=zi,M.needsUpdate=!0,Ar(M,I,z),M.side=ui):Ar(M,I,z)}this.compile=function(M,I,z=null){z===null&&(z=M),d=Ae.get(z),d.init(I),T.push(d),z.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),M!==z&&M.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();const j=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){const Fe=_e[Ce];rt(Fe,z,V),j.add(Fe)}else rt(_e,z,V),j.add(_e)}),T.pop(),d=null,j},this.compileAsync=function(M,I,z=null){const j=this.compile(M,I,z);return new Promise(V=>{function _e(){if(j.forEach(function(Ce){te.get(Ce).currentProgram.isReady()&&j.delete(Ce)}),j.size===0){V(M);return}setTimeout(_e,10)}ee.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let It=null;function Gt(M){It&&It(M)}function br(){Fn.stop()}function Kn(){Fn.start()}const Fn=new Fh;Fn.setAnimationLoop(Gt),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(M){It=M,ce.setAnimationLoop(M),M===null?Fn.stop():Fn.start()},ce.addEventListener("sessionstart",br),ce.addEventListener("sessionend",Kn),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(I),I=ce.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,I,F),d=Ae.get(M,T.length),d.init(I),T.push(d),Ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),re.setFromProjectionMatrix(Ne),Ee=this.localClippingEnabled,me=B.init(this.clippingPlanes,Ee),p=de.get(M,C.length),p.init(),C.push(p),ce.enabled===!0&&ce.isPresenting===!0){const _e=E.xr.getDepthSensingMesh();_e!==null&&Tr(_e,I,-1/0,E.sortObjects)}Tr(M,I,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(ae,J),A=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,A&&Me.addToRenderList(p,M),this.info.render.frame++,me===!0&&B.beginShadows();const z=d.state.shadowsArray;ie.render(z,M,I),me===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=p.opaque,V=p.transmissive;if(d.setupLights(),I.isArrayCamera){const _e=I.cameras;if(V.length>0)for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const Oe=_e[Ce];ro(j,V,M,Oe)}A&&Me.render(M);for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const Oe=_e[Ce];Wt(p,M,Oe,Oe.viewport)}}else V.length>0&&ro(j,V,M,I),A&&Me.render(M),Wt(p,M,I);F!==null&&(v.updateMultisampleRenderTarget(F),v.updateRenderTargetMipmap(F)),M.isScene===!0&&M.onAfterRender(E,M,I),et.resetDefaultState(),S=-1,y=null,T.pop(),T.length>0?(d=T[T.length-1],me===!0&&B.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?p=C[C.length-1]:p=null};function Tr(M,I,z,j){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||re.intersectsSprite(M)){j&&ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ne);const Ce=q.update(M),Fe=M.material;Fe.visible&&p.push(M,Ce,Fe,z,ze.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||re.intersectsObject(M))){const Ce=q.update(M),Fe=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ze.copy(M.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ze.copy(Ce.boundingSphere.center)),ze.applyMatrix4(M.matrixWorld).applyMatrix4(Ne)),Array.isArray(Fe)){const Oe=Ce.groups;for(let $e=0,Ke=Oe.length;$e<Ke;$e++){const He=Oe[$e],it=Fe[He.materialIndex];it&&it.visible&&p.push(M,Ce,it,z,ze.z,He)}}else Fe.visible&&p.push(M,Ce,Fe,z,ze.z,null)}}const _e=M.children;for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++)Tr(_e[Ce],I,z,j)}function Wt(M,I,z,j){const V=M.opaque,_e=M.transmissive,Ce=M.transparent;d.setupLightsView(z),me===!0&&B.setGlobalState(E.clippingPlanes,z),j&&le.viewport(L.copy(j)),V.length>0&&wr(V,I,z),_e.length>0&&wr(_e,I,z),Ce.length>0&&wr(Ce,I,z),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ro(M,I,z,j){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new Mr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Js:_i,minFilter:dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const _e=d.state.transmissionRenderTarget[j.id],Ce=j.viewport||L;_e.setSize(Ce.z,Ce.w);const Fe=E.getRenderTarget();E.setRenderTarget(_e),E.getClearColor($),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),A&&Me.render(z);const Oe=E.toneMapping;E.toneMapping=Bi;const $e=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),me===!0&&B.setGlobalState(E.clippingPlanes,j),wr(M,z,j),v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let He=0,it=I.length;He<it;He++){const pt=I[He],gt=pt.object,Qt=pt.geometry,ot=pt.material,We=pt.group;if(ot.side===ui&&gt.layers.test(j.layers)){const jn=ot.side;ot.side=on,ot.needsUpdate=!0,so(gt,z,j,Qt,ot,We),ot.side=jn,ot.needsUpdate=!0,Ke=!0}}Ke===!0&&(v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e))}E.setRenderTarget(Fe),E.setClearColor($,Z),$e!==void 0&&(j.viewport=$e),E.toneMapping=Oe}function wr(M,I,z){const j=I.isScene===!0?I.overrideMaterial:null;for(let V=0,_e=M.length;V<_e;V++){const Ce=M[V],Fe=Ce.object,Oe=Ce.geometry,$e=j===null?Ce.material:j,Ke=Ce.group;Fe.layers.test(z.layers)&&so(Fe,I,z,Oe,$e,Ke)}}function so(M,I,z,j,V,_e){M.onBeforeRender(E,I,z,j,V,_e),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(E,I,z,j,M,_e),V.transparent===!0&&V.side===ui&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,E.renderBufferDirect(z,I,j,V,M,_e),V.side=zi,V.needsUpdate=!0,E.renderBufferDirect(z,I,j,V,M,_e),V.side=ui):E.renderBufferDirect(z,I,j,V,M,_e),M.onAfterRender(E,I,z,j,V,_e)}function Ar(M,I,z){I.isScene!==!0&&(I=xe);const j=te.get(M),V=d.state.lights,_e=d.state.shadowsArray,Ce=V.state.version,Fe=fe.getParameters(M,V.state,_e,I,z),Oe=fe.getProgramCacheKey(Fe);let $e=j.programs;j.environment=M.isMeshStandardMaterial?I.environment:null,j.fog=I.fog,j.envMap=(M.isMeshStandardMaterial?w:m).get(M.envMap||j.environment),j.envMapRotation=j.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,$e===void 0&&(M.addEventListener("dispose",qe),$e=new Map,j.programs=$e);let Ke=$e.get(Oe);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===Ce)return Y(M,Fe),Ke}else Fe.uniforms=fe.getUniforms(M),M.onBeforeCompile(Fe,E),Ke=fe.acquireProgram(Fe,Oe),$e.set(Oe,Ke),j.uniforms=Fe.uniforms;const He=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=B.uniform),Y(M,Fe),j.needsLights=Ie(M),j.lightsStateVersion=Ce,j.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Ke,j.uniformsList=null,Ke}function gs(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Vo.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Y(M,I){const z=te.get(M);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Q(M,I,z,j,V){I.isScene!==!0&&(I=xe),v.resetTextureUnits();const _e=I.fog,Ce=j.isMeshStandardMaterial?I.environment:null,Fe=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:hs,Oe=(j.isMeshStandardMaterial?w:m).get(j.envMap||Ce),$e=j.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ke=!!z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!z.morphAttributes.position,it=!!z.morphAttributes.normal,pt=!!z.morphAttributes.color;let gt=Bi;j.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(gt=E.toneMapping);const Qt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=Qt!==void 0?Qt.length:0,We=te.get(j),jn=d.state.lights;if(me===!0&&(Ee===!0||M!==y)){const pn=M===y&&j.id===S;B.setState(j,M,pn)}let at=!1;j.version===We.__version?(We.needsLights&&We.lightsStateVersion!==jn.state.version||We.outputColorSpace!==Fe||V.isBatchedMesh&&We.batching===!1||!V.isBatchedMesh&&We.batching===!0||V.isBatchedMesh&&We.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&We.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&We.instancing===!1||!V.isInstancedMesh&&We.instancing===!0||V.isSkinnedMesh&&We.skinning===!1||!V.isSkinnedMesh&&We.skinning===!0||V.isInstancedMesh&&We.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&We.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&We.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&We.instancingMorph===!1&&V.morphTexture!==null||We.envMap!==Oe||j.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==B.numPlanes||We.numIntersection!==B.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==Ke||We.morphTargets!==He||We.morphNormals!==it||We.morphColors!==pt||We.toneMapping!==gt||We.morphTargetsCount!==ot)&&(at=!0):(at=!0,We.__version=j.version);let yn=We.currentProgram;at===!0&&(yn=Ar(j,I,V));let Cr=!1,an=!1,vs=!1;const vt=yn.getUniforms(),On=We.uniforms;if(le.useProgram(yn.program)&&(Cr=!0,an=!0,vs=!0),j.id!==S&&(S=j.id,an=!0),Cr||y!==M){le.buffers.depth.getReversed()?(ve.copy(M.projectionMatrix),gv(ve),vv(ve),vt.setValue(b,"projectionMatrix",ve)):vt.setValue(b,"projectionMatrix",M.projectionMatrix),vt.setValue(b,"viewMatrix",M.matrixWorldInverse);const yi=vt.map.cameraPosition;yi!==void 0&&yi.setValue(b,Ue.setFromMatrixPosition(M.matrixWorld)),ne.logarithmicDepthBuffer&&vt.setValue(b,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&vt.setValue(b,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,an=!0,vs=!0)}if(V.isSkinnedMesh){vt.setOptional(b,V,"bindMatrix"),vt.setOptional(b,V,"bindMatrixInverse");const pn=V.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),vt.setValue(b,"boneTexture",pn.boneTexture,v))}V.isBatchedMesh&&(vt.setOptional(b,V,"batchingTexture"),vt.setValue(b,"batchingTexture",V._matricesTexture,v),vt.setOptional(b,V,"batchingIdTexture"),vt.setValue(b,"batchingIdTexture",V._indirectTexture,v),vt.setOptional(b,V,"batchingColorTexture"),V._colorsTexture!==null&&vt.setValue(b,"batchingColorTexture",V._colorsTexture,v));const _s=z.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&Te.update(V,z,yn),(an||We.receiveShadow!==V.receiveShadow)&&(We.receiveShadow=V.receiveShadow,vt.setValue(b,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(On.envMap.value=Oe,On.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&I.environment!==null&&(On.envMapIntensity.value=I.environmentIntensity),an&&(vt.setValue(b,"toneMappingExposure",E.toneMappingExposure),We.needsLights&&Se(On,vs),_e&&j.fog===!0&&se.refreshFogUniforms(On,_e),se.refreshMaterialUniforms(On,j,k,K,d.state.transmissionRenderTarget[M.id]),Vo.upload(b,gs(We),On,v)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vo.upload(b,gs(We),On,v),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&vt.setValue(b,"center",V.center),vt.setValue(b,"modelViewMatrix",V.modelViewMatrix),vt.setValue(b,"normalMatrix",V.normalMatrix),vt.setValue(b,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const pn=j.uniformsGroups;for(let yi=0,Ei=pn.length;yi<Ei;yi++){const Qc=pn[yi];G.update(Qc,yn),G.bind(Qc,yn)}}return yn}function Se(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Ie(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,I,z){te.get(M.texture).__webglTexture=I,te.get(M.depthTexture).__webglTexture=z;const j=te.get(M);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=z===void 0,j.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const z=te.get(M);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,z=0){F=M,D=I,P=z;let j=!0,V=null,_e=!1,Ce=!1;if(M){const Oe=te.get(M);if(Oe.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(b.FRAMEBUFFER,null),j=!1;else if(Oe.__webglFramebuffer===void 0)v.setupRenderTarget(M);else if(Oe.__hasExternalTextures)v.rebindTextures(M,te.get(M.texture).__webglTexture,te.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const He=M.depthTexture;if(Oe.__boundDepthTexture!==He){if(He!==null&&te.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(M)}}const $e=M.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ce=!0);const Ke=te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ke[I])?V=Ke[I][z]:V=Ke[I],_e=!0):M.samples>0&&v.useMultisampledRTT(M)===!1?V=te.get(M).__webglMultisampledFramebuffer:Array.isArray(Ke)?V=Ke[z]:V=Ke,L.copy(M.viewport),N.copy(M.scissor),H=M.scissorTest}else L.copy(ge).multiplyScalar(k).floor(),N.copy(we).multiplyScalar(k).floor(),H=Ve;if(le.bindFramebuffer(b.FRAMEBUFFER,V)&&j&&le.drawBuffers(M,V),le.viewport(L),le.scissor(N),le.setScissorTest(H),_e){const Oe=te.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,Oe.__webglTexture,z)}else if(Ce){const Oe=te.get(M.texture),$e=I||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Oe.__webglTexture,z||0,$e)}S=-1},this.readRenderTargetPixels=function(M,I,z,j,V,_e,Ce){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){le.bindFramebuffer(b.FRAMEBUFFER,Fe);try{const Oe=M.texture,$e=Oe.format,Ke=Oe.type;if(!ne.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-j&&z>=0&&z<=M.height-V&&b.readPixels(I,z,j,V,Ge.convert($e),Ge.convert(Ke),_e)}finally{const Oe=F!==null?te.get(F).__webglFramebuffer:null;le.bindFramebuffer(b.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(M,I,z,j,V,_e,Ce){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){const Oe=M.texture,$e=Oe.format,Ke=Oe.type;if(!ne.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-j&&z>=0&&z<=M.height-V){le.bindFramebuffer(b.FRAMEBUFFER,Fe);const He=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,He),b.bufferData(b.PIXEL_PACK_BUFFER,_e.byteLength,b.STREAM_READ),b.readPixels(I,z,j,V,Ge.convert($e),Ge.convert(Ke),0);const it=F!==null?te.get(F).__webglFramebuffer:null;le.bindFramebuffer(b.FRAMEBUFFER,it);const pt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await mv(b,pt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,He),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,_e),b.deleteBuffer(He),b.deleteSync(pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,z=0){M.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const j=Math.pow(2,-z),V=Math.floor(M.image.width*j),_e=Math.floor(M.image.height*j),Ce=I!==null?I.x:0,Fe=I!==null?I.y:0;v.setTexture2D(M,0),b.copyTexSubImage2D(b.TEXTURE_2D,z,0,0,Ce,Fe,V,_e),le.unbindTexture()},this.copyTextureToTexture=function(M,I,z=null,j=null,V=0){M.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,M=arguments[1],I=arguments[2],V=arguments[3]||0,z=null);let _e,Ce,Fe,Oe,$e,Ke,He,it,pt;const gt=M.isCompressedTexture?M.mipmaps[V]:M.image;z!==null?(_e=z.max.x-z.min.x,Ce=z.max.y-z.min.y,Fe=z.isBox3?z.max.z-z.min.z:1,Oe=z.min.x,$e=z.min.y,Ke=z.isBox3?z.min.z:0):(_e=gt.width,Ce=gt.height,Fe=gt.depth||1,Oe=0,$e=0,Ke=0),j!==null?(He=j.x,it=j.y,pt=j.z):(He=0,it=0,pt=0);const Qt=Ge.convert(I.format),ot=Ge.convert(I.type);let We;I.isData3DTexture?(v.setTexture3D(I,0),We=b.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(v.setTexture2DArray(I,0),We=b.TEXTURE_2D_ARRAY):(v.setTexture2D(I,0),We=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const jn=b.getParameter(b.UNPACK_ROW_LENGTH),at=b.getParameter(b.UNPACK_IMAGE_HEIGHT),yn=b.getParameter(b.UNPACK_SKIP_PIXELS),Cr=b.getParameter(b.UNPACK_SKIP_ROWS),an=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,gt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,gt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Oe),b.pixelStorei(b.UNPACK_SKIP_ROWS,$e),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ke);const vs=M.isDataArrayTexture||M.isData3DTexture,vt=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const On=te.get(M),_s=te.get(I),pn=te.get(On.__renderTarget),yi=te.get(_s.__renderTarget);le.bindFramebuffer(b.READ_FRAMEBUFFER,pn.__webglFramebuffer),le.bindFramebuffer(b.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ei=0;Ei<Fe;Ei++)vs&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(M).__webglTexture,V,Ke+Ei),M.isDepthTexture?(vt&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(I).__webglTexture,V,pt+Ei),b.blitFramebuffer(Oe,$e,_e,Ce,He,it,_e,Ce,b.DEPTH_BUFFER_BIT,b.NEAREST)):vt?b.copyTexSubImage3D(We,V,He,it,pt+Ei,Oe,$e,_e,Ce):b.copyTexSubImage2D(We,V,He,it,pt+Ei,Oe,$e,_e,Ce);le.bindFramebuffer(b.READ_FRAMEBUFFER,null),le.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else vt?M.isDataTexture||M.isData3DTexture?b.texSubImage3D(We,V,He,it,pt,_e,Ce,Fe,Qt,ot,gt.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(We,V,He,it,pt,_e,Ce,Fe,Qt,gt.data):b.texSubImage3D(We,V,He,it,pt,_e,Ce,Fe,Qt,ot,gt):M.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,V,He,it,_e,Ce,Qt,ot,gt.data):M.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,V,He,it,gt.width,gt.height,Qt,gt.data):b.texSubImage2D(b.TEXTURE_2D,V,He,it,_e,Ce,Qt,ot,gt);b.pixelStorei(b.UNPACK_ROW_LENGTH,jn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,at),b.pixelStorei(b.UNPACK_SKIP_PIXELS,yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Cr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,an),V===0&&I.generateMipmaps&&b.generateMipmap(We),le.unbindTexture()},this.copyTextureToTexture3D=function(M,I,z=null,j=null,V=0){return M.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,j=arguments[1]||null,M=arguments[2],I=arguments[3],V=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,z,j,V)},this.initRenderTarget=function(M){te.get(M).__webglFramebuffer===void 0&&v.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?v.setTextureCube(M,0):M.isData3DTexture?v.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?v.setTexture2DArray(M,0):v.setTexture2D(M,0),le.unbindTexture()},this.resetState=function(){D=0,P=0,F=null,le.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Ma extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sr extends Jt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);const $r={none:{bg:"rgba(0,0,0,0)",headerBg:"rgba(18,18,42,0.65)",text:"#e8f2ff",textHeader:"#6a90b8",border:"#2a3a50",accent:"#40a0f0",rowAlt:"rgba(255,255,255,0.018)"},phosphor:{bg:"#060d06",headerBg:"#030703",text:"#33ff33",textHeader:"#00cc00",border:"#0a250a",accent:"#80ff80",rowAlt:"rgba(51,255,51,0.025)"},amber:{bg:"#0a0700",headerBg:"#060400",text:"#ffb000",textHeader:"#ffd000",border:"#2a1500",accent:"#ffd060",rowAlt:"rgba(255,176,0,0.025)"},paper:{bg:"rgba(0,0,0,0)",headerBg:"rgba(255,255,255,0.65)",text:"#222222",textHeader:"#158cba",border:"#bfc8d4",accent:"#158cba",rowAlt:"rgba(21,140,186,0.04)"}},Ct=30,cl=12,AS=10,Vh=28;function CS(n,e){if(typeof e=="function")return e(n);const t=n.filter(r=>r!=null&&r!=="");if(e==="count")return t.length;const i=t.map(r=>Number(r)).filter(r=>!Number.isNaN(r));if(i.length===0)return null;switch(e){case"sum":return i.reduce((r,s)=>r+s,0);case"avg":return i.reduce((r,s)=>r+s,0)/i.length;case"min":return Math.min(...i);case"max":return Math.max(...i)}}function Bf(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=$r[e.theme]??$r.none,{cols:o,rows:a,pinnedRows:l,rowHeight:c,scrollY:u,scrollX:f,glow:h}=e;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const g=l.length*c,_=e.aggregateRow?Vh:0,x=r-Ct-g-_;t.fillStyle=s.headerBg,t.fillRect(0,0,i,Ct),t.textBaseline="middle",t.textAlign="left";let p=-f;for(let $=0;$<o.length;$++){const Z=o[$];if(p+Z.width<=0){p+=Z.width;continue}if(p>=i)break;const X=!!e.colFilters[Z.colId],K=e.sortColId===Z.colId,k=(Z.colDef.headerName??Z.colId).toUpperCase();if(t.save(),t.beginPath(),t.rect(p,0,Z.width,Ct),t.clip(),t.font=`bold ${AS}px system-ui, -apple-system, sans-serif`,t.fillStyle=X?s.accent:s.textHeader,h?(t.shadowColor=s.textHeader,t.shadowBlur=10,t.fillText(k,p+8,Ct/2),t.shadowBlur=4,t.fillText(k,p+8,Ct/2),t.shadowBlur=0):t.fillText(k,p+8,Ct/2),K){const ae=t.measureText(k).width;t.font="8px system-ui, -apple-system, sans-serif",t.fillStyle=s.accent,t.fillText(e.sortDir==="asc"?"▲":"▼",p+8+ae+4,Ct/2)}Z.colDef.filter&&(t.font="13px system-ui, -apple-system, sans-serif",t.fillStyle=X?s.accent:s.textHeader,t.globalAlpha=X?1:.38,t.fillText("⌕",p+Z.width-20,Ct/2),t.globalAlpha=1),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(p+Z.width-.5,0),t.lineTo(p+Z.width-.5,Ct),t.stroke(),p+=Z.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,Ct-.5),t.lineTo(i,Ct-.5),t.stroke(),t.save(),t.beginPath(),t.rect(0,Ct,i,x),t.clip();const d=Math.max(0,Math.floor(u/c)),C=Math.min(a.length,Math.ceil((u+x)/c)),T=e.selectionAnchorRow??e.selectedRow,E=e.selectionAnchorCol??e.selectedCol,R=e.selectedRow>=0&&T>=0?Math.min(e.selectedRow,T):-1,D=e.selectedRow>=0&&T>=0?Math.max(e.selectedRow,T):-1,P=e.selectedCol>=0&&E>=0?Math.min(e.selectedCol,E):-1,F=e.selectedCol>=0&&E>=0?Math.max(e.selectedCol,E):-1,S=D>R||F>P;let y=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY,N=Number.POSITIVE_INFINITY,H=Number.NEGATIVE_INFINITY;for(let $=d;$<C;$++){const Z=a[$],X=Ct+$*c-u;$%2===1&&(t.fillStyle=s.rowAlt,t.fillRect(0,X,i,c));const K=$>=R&&$<=D;$===e.hoveredRow&&!K&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,X,i,c)),K&&!S&&(t.fillStyle=ul(s.accent,.1),t.fillRect(0,X,i,c)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,X+c-.5),t.lineTo(i,X+c-.5),t.stroke();let k=-f;for(let ae=0;ae<o.length;ae++){const J=o[ae];if(k+J.width<=0){k+=J.width;continue}if(k>=i)break;const ge=K&&ae>=P&&ae<=F;ge&&S&&(t.fillStyle=ul(s.accent,.14),t.fillRect(k,X,J.width,c)),ge&&(k<y&&(y=k),k+J.width>L&&(L=k+J.width),X<N&&(N=X),X+c>H&&(H=X+c));const we=e.getCellStyle(J,Z),Ve=we.color??s.text,re=we.textAlign??"left",me=e.formatCell(J,Z);t.save(),t.beginPath(),t.rect(k+1,X,J.width-2,c),t.clip(),t.font=`${cl}px system-ui, -apple-system, sans-serif`,t.fillStyle=Ve,t.textBaseline="middle";const Ee=re==="right"?k+J.width-8:k+8;t.textAlign=re==="right"?"right":"left";const ve=X+c/2;h?(t.shadowColor=Ve,t.shadowBlur=12,t.fillText(me,Ee,ve),t.shadowBlur=6,t.fillText(me,Ee,ve),t.shadowBlur=2,t.fillText(me,Ee,ve),t.shadowBlur=0):t.fillText(me,Ee,ve),t.restore(),$===e.selectedRow&&ae===e.selectedCol&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect(k+1.5,X+1.5,J.width-3,c-3)),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(k+J.width-.5,X),t.lineTo(k+J.width-.5,X+c),t.stroke(),k+=J.width}}if(S&&y<L&&N<H&&(t.strokeStyle=s.accent,t.lineWidth=2,t.strokeRect(y+.5,N+.5,L-y-1,H-N-1)),t.restore(),l.length>0){const $=r-g-_;t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,$-.5),t.lineTo(i,$-.5),t.stroke();for(let Z=0;Z<l.length;Z++){const X=l[Z],K=$+Z*c;t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(0,K,i,c);let k=-f;for(let ae=0;ae<o.length;ae++){const J=o[ae];if(k+J.width<=0){k+=J.width;continue}if(k>=i)break;const ge=e.getCellStyle(J,X),we=ge.color??s.text,Ve=ge.textAlign??"left",re=e.formatCell(J,X);t.save(),t.beginPath(),t.rect(k+1,K,J.width-2,c),t.clip(),t.font=`bold ${cl}px system-ui, -apple-system, sans-serif`,t.fillStyle=we,t.textBaseline="middle",Ve==="right"?(t.textAlign="right",t.fillText(re,k+J.width-8,K+c/2)):(t.textAlign="left",t.fillText(re,k+8,K+c/2)),t.restore(),t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(k+J.width-.5,K),t.lineTo(k+J.width-.5,K+c),t.stroke(),k+=J.width}t.strokeStyle=s.border,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,K+c-.5),t.lineTo(i,K+c-.5),t.stroke()}}if(e.aggregateRow){const $=r-_;t.fillStyle=ul(s.accent,.1),t.fillRect(0,$,i,_),t.strokeStyle=s.accent,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,$-.5),t.lineTo(i,$-.5),t.stroke();let Z=-f;for(let X=0;X<o.length;X++){const K=o[X];if(Z+K.width<=0){Z+=K.width;continue}if(Z>=i)break;const ae=e.getCellStyle(K,e.aggregateRow).textAlign??"left",J=e.aggregateRow[K.colId]??"";t.save(),t.beginPath(),t.rect(Z+1,$,K.width-2,_),t.clip(),t.font=`bold ${cl}px system-ui, -apple-system, sans-serif`,t.fillStyle=s.accent,t.textBaseline="middle",h&&(t.shadowColor=s.accent,t.shadowBlur=8),ae==="right"?(t.textAlign="right",t.fillText(J,Z+K.width-8,$+_/2)):(t.textAlign="left",t.fillText(J,Z+8,$+_/2)),t.shadowBlur=0,t.restore(),t.strokeStyle=s.border,t.lineWidth=1,t.beginPath(),t.moveTo(Z+K.width-.5,$),t.lineTo(Z+K.width-.5,$+_),t.stroke(),Z+=K.width}}t.restore()}function ul(n,e){if(n.startsWith("rgba")||n.startsWith("rgb"))return n.replace(/[\d.]+\)$/,`${e})`);const t=parseInt(n.slice(1,3),16),i=parseInt(n.slice(3,5),16),r=parseInt(n.slice(5,7),16);return`rgba(${t},${i},${r},${e})`}function RS(n,e,t){const i=n-.5,r=e-.5,s=(i*i+r*r)*t,o=i*(1+s)*s,a=r*(1+s)*s;return[n+o,e+a*.15]}function PS(n,e,t,i,r){const s=n/t,o=1-e/i,[a,l]=RS(s,o,r);return a<0||a>1||l<0||l>1?[-1,-1]:[a*t,(1-l)*i]}function fl(n,e){let t=0;for(let i=0;i<n;i++)t+=e[i].width;return t}function DS(n,e,t){return n>=e+t-24&&n<e+t}function kf(n,e,t){const i=e+t;return n>=i-6&&n<=i+1}function zf(n,e,t,i,r,s,o,a,l,c=!1){const u=n+l;let f=-1,h=0;for(let d=0;d<t.length;d++){if(u>=h&&u<h+t[d].width){f=d;break}h+=t[d].width}if(e<Ct)return{area:"header",colIdx:f,rowIdx:-1};const g=c?Vh:0;if(g>0&&e>=o-g)return{area:"agg",colIdx:f,rowIdx:-1};const _=a*r;if(_>0&&e>=o-_-g){const d=Math.floor((e-(o-_-g))/r);return{area:"pinned",colIdx:f,rowIdx:d}}const x=e-Ct+s,p=Math.floor(x/r);return p>=0&&p<i?{area:"body",colIdx:f,rowIdx:p}:{area:"none",colIdx:-1,rowIdx:-1}}const LS=500,IS=LS/2,US=1.6,Gc=`
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
`;function Yc(){return{uMouseUV:{value:new dt(-999,-999)},uLensR:{value:0},uLensZoom:{value:US},uLensTint:{value:new ct(7268263)},uAspect:{value:1}}}const Zt={x:-999,y:-999};function $c(n,e,t,i,r){const s=e&&t.x!==-999;n.uniforms.uMouseUV.value.set(t.x,t.y),n.uniforms.uLensR.value=s&&r>0?IS/r:0,n.uniforms.uAspect.value=r>0?i/r:1}function qc(n,e){const t=e.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width,y:1-(n.clientY-t.top)/t.height}}const NS=["value"],FS=["disabled"],OS=["disabled"],BS=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,kS=28,zS=600,HS=Wi({__name:"CathodeGrid",props:{columnDefs:{},rowData:{default:()=>[]},rowHeight:{default:28},defaultColDef:{},getRowStyle:{},pinnedBottomRowData:{},pagination:{type:Boolean,default:!0},paginationPageSize:{default:200},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},magnify:{type:Boolean,default:!1}},emits:["grid-ready","row-clicked","cell-selected","column-resized","sort-changed","filter-changed"],setup(n,{emit:e}){const t=n,i=e,r=De(t.rowData??[]),s=De(t.pinnedBottomRowData??[]),o=De(""),a=De(null),l=jr({}),c=jr({}),u=jr(new Set),f=De(0),h=De(0),g=De(0),_=De(0),x=De(0),p=De(-1),d=De(null),C=De(null),T=De(null),E={...Zt},R=De({x:0,y:Ct}),D=De("");function P(Y){return Y.colId??Y.field??(Y.headerName?Y.headerName.toLowerCase().replace(/\s+/g,"_"):void 0)??`col_${Math.random().toString(36).slice(2,7)}`}const F=tt(()=>{const Y=t.defaultColDef??{};return t.columnDefs.filter(Q=>!u.has(P(Q))).map(Q=>{const Se=P(Q),Ie={...Y,...Q};return{colId:Se,colDef:Ie,width:c[Se]??Ie.width??100}})}),S=tt(()=>{const Y=h.value;if(!Y)return F.value;const Q=F.value.reduce((M,I)=>M+I.width,0);if(!Q||Q>=Y)return F.value;const Se=Y/Q;let Ie=0;return F.value.map((M,I)=>{const j=I===F.value.length-1?Y-Ie:Math.max(8,Math.round(M.width*Se));return Ie+=j,{...M,width:j}})}),y=tt(()=>{const Y=S.value.reduce((Q,Se)=>Q+Se.width,0);return Math.max(0,Y-h.value)}),L=tt(()=>{const Y=s.value.length*t.rowHeight;return Math.max(0,g.value-Ct-Y)}),N=tt(()=>Math.max(0,ae.value.length*t.rowHeight-L.value)),H=tt(()=>Math.max(1,Math.floor(L.value/t.rowHeight))),$=tt(()=>ae.value.length===0?0:Math.min(ae.value.length-1,Math.floor(_.value/t.rowHeight))),Z=tt(()=>Math.min(ae.value.length-1,$.value+H.value-1));function X(Y,Q){if(Q.colDef.valueGetter)return Q.colDef.valueGetter({data:Y,colDef:Q.colDef});if(Q.colDef.field)return Y[Q.colDef.field]}function K(Y,Q){const Se=X(Q,Y);return Y.colDef.valueFormatter?Y.colDef.valueFormatter({value:Se,data:Q,colDef:Y.colDef})??"":Y.colDef.cellRenderer?(Y.colDef.cellRenderer({value:Se,data:Q,colDef:Y.colDef})??"").replace(/<[^>]+>/g,""):Se==null?"":String(Se)}function k(Y,Q){return Y.colDef.cellStyle?typeof Y.colDef.cellStyle=="function"?Y.colDef.cellStyle({value:X(Q,Y),data:Q,colDef:Y.colDef})??{}:Y.colDef.cellStyle:{}}const ae=tt(()=>{f.value;let Y=r.value;const Q=o.value.trim().toLowerCase();Q&&(Y=Y.filter(Se=>F.value.some(Ie=>String(X(Se,Ie)??"").toLowerCase().includes(Q))));for(const[Se,Ie]of Object.entries(l)){if(!Ie)continue;const M=F.value.find(I=>I.colId===Se);if(M)if(Ie.startsWith("__eq__")){const I=Ie.slice(6).toLowerCase();Y=Y.filter(z=>String(X(z,M)??"").toLowerCase()===I)}else{const I=Ie.toLowerCase();Y=Y.filter(z=>String(X(z,M)??"").toLowerCase().includes(I))}}if(a.value){const{colId:Se,dir:Ie}=a.value,M=F.value.find(I=>I.colId===Se);M&&(Y=[...Y].sort((I,z)=>{const j=X(I,M),V=X(z,M);let _e=0;return M.colDef.comparator?_e=M.colDef.comparator(j,V):typeof j=="number"&&typeof V=="number"?_e=j-V:_e=String(j??"").localeCompare(String(V??""),void 0,{numeric:!0}),Ie==="asc"?_e:-_e}))}return Y}),J=tt(()=>{const Y=F.value.filter(M=>M.colDef.aggFunc!=null);if(Y.length===0)return null;const Q=ae.value,Se={};for(const M of Y){const I=Q.map(j=>X(j,M)),z=CS(I,M.colDef.aggFunc);if(z==null){Se[M.colId]="";continue}Se[M.colId]=M.colDef.aggValueFormatter?M.colDef.aggValueFormatter(z):String(z)}const Ie=Y[0].colId;return Se[Ie]===""&&(Se[Ie]="Σ"),Se});Xe(ae,()=>{_.value=0,d.value=null}),Xe(y,()=>{x.value=Math.min(x.value,y.value)}),Xe(N,()=>{_.value=Math.min(_.value,N.value)});function ge(Y){const Q=Y*t.rowHeight,Se=Q+t.rowHeight;Q<_.value?_.value=Q:Se>_.value+L.value&&(_.value=Math.min(N.value,Se-L.value))}function we(){_.value=Math.max(0,_.value-L.value),Te()}function Ve(){_.value=Math.min(N.value,_.value+L.value),Te()}let re=!1,me="",Ee=0,ve=0,Ne=!1,Ue=!1,ze=0,xe=0,A=0,U=0,b=!1;function ue(Y,Q){var Se;re=!0,me=Y,Ee=Q,ve=((Se=S.value.find(Ie=>Ie.colId===Y))==null?void 0:Se.width)??100,Ne=!1}function ee(Y){if(Ue){const I=ze-Y.clientX,z=xe-Y.clientY;(Math.abs(I)>4||Math.abs(z)>4)&&(b=!0),x.value=Math.max(0,Math.min(y.value,A+I)),_.value=Math.max(0,Math.min(N.value,U+z)),Te();return}if(!re)return;const Q=h.value,Se=Math.max(30,ve+(Y.clientX-Ee)),Ie=F.value.filter(I=>I.colId!==me).reduce((I,z)=>I+z.width,0),M=Q-Se;M>10&&(c[me]=Math.max(10,Math.round(Se*Ie/M))),Te()}function ne(){Ue&&(b&&(Ne=!0),Ue=!1),re&&(re=!1,Ne=!0,i("column-resized"))}function le(Y){if(Y.touches.length!==1)return;const Q=Y.touches[0];Ue=!0,b=!1,ze=Q.clientX,xe=Q.clientY,A=x.value,U=_.value}function he(Y){if(!Ue||Y.touches.length!==1)return;Y.preventDefault();const Q=Y.touches[0],Se=ze-Q.clientX,Ie=xe-Q.clientY;(Math.abs(Se)>4||Math.abs(Ie)>4)&&(b=!0),x.value=Math.max(0,Math.min(y.value,A+Se)),_.value=Math.max(0,Math.min(N.value,U+Ie)),Te()}function te(){Ue&&(b&&(Ne=!0),Ue=!1)}const v=De(null),m=De(null),w=Fi("cathodeResetTick",De(0));Xe(w,()=>Kn());let O=null,W=!1,q,fe,se,de,Ae;const B=`
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
`;function ie(){if(!(!m.value||!v.value)){Ae=document.createElement("canvas");try{O=new xa({canvas:m.value,antialias:!1,alpha:!0})}catch{W=!0}if(!W&&!O.getContext()&&(O.dispose(),O=null,W=!0),W){Me();return}O.setPixelRatio(1),O.setClearColor(0,0),q=new Ma,fe=new io(-1,1,1,-1,0,1),de=new Sr(Ae),de.minFilter=Mt,de.magFilter=Mt,se=new Sn({uniforms:{uTex:{value:de},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},uBezel:{value:new ct(0)},...Yc()},vertexShader:BS,fragmentShader:B,transparent:!0}),q.add(new dn(new Xi(2,2),se)),Me()}}function Me(){if(!v.value||!O&&!W)return;const Y=v.value.clientWidth,Q=v.value.clientHeight-(t.pagination?kS:0);if(!Y||!Q)return;const Se=Ae.width!==Y||Ae.height!==Q;Ae.width=Y,Ae.height=Q,h.value=Y,g.value=Q,x.value=Math.max(0,Math.min(y.value,x.value)),_.value=Math.max(0,Math.min(N.value,_.value)),O?(Se&&de&&(de.dispose(),de=new Sr(Ae),de.minFilter=Mt,de.magFilter=Mt,se&&(se.uniforms.uTex.value=de)),O.setPixelRatio(window.devicePixelRatio||1),O.setSize(Y,Q)):m.value&&(m.value.width=Y,m.value.height=Q,m.value.style.width=Y+"px",m.value.style.height=Q+"px"),Te()}function Te(){var Se,Ie,M,I,z,j,V,_e,Ce,Fe,Oe,$e;if(!(Ae!=null&&Ae.width))return;if(W){if(!m.value)return;Bf(Ae,{cols:S.value,rows:ae.value,pinnedRows:s.value,rowHeight:t.rowHeight,scrollY:_.value,scrollX:x.value,theme:t.theme,glow:!1,sortColId:((Se=a.value)==null?void 0:Se.colId)??null,sortDir:((Ie=a.value)==null?void 0:Ie.dir)??null,colFilters:l,hoveredRow:p.value,selectedRow:((M=d.value)==null?void 0:M.row)??-1,selectedCol:((I=d.value)==null?void 0:I.col)??-1,selectionAnchorRow:((z=C.value)==null?void 0:z.row)??-1,selectionAnchorCol:((j=C.value)==null?void 0:j.col)??-1,formatCell:K,getCellStyle:k});const Ke=m.value.getContext("2d");Ke&&Ke.drawImage(Ae,0,0);return}if(!O||!se||!de)return;const Y=$r[t.theme]??$r.none,Q=t.theme==="paper";se.uniforms.uStrength.value=t.curvature/45*.55,se.uniforms.uScanlines.value=t.scanlines&&!Q?1:0,se.uniforms.uVignette.value=Q?0:1,se.uniforms.uBezel.value.set(Y.bg),$c(se,t.magnify,E,Ae.width,Ae.height),Bf(Ae,{cols:S.value,rows:ae.value,pinnedRows:s.value,rowHeight:t.rowHeight,scrollY:_.value,scrollX:x.value,theme:t.theme,glow:t.glow,sortColId:((V=a.value)==null?void 0:V.colId)??null,sortDir:((_e=a.value)==null?void 0:_e.dir)??null,colFilters:l,hoveredRow:p.value,selectedRow:((Ce=d.value)==null?void 0:Ce.row)??-1,selectedCol:((Fe=d.value)==null?void 0:Fe.col)??-1,selectionAnchorRow:((Oe=C.value)==null?void 0:Oe.row)??-1,selectionAnchorCol:(($e=C.value)==null?void 0:$e.col)??-1,formatCell:K,getCellStyle:k,aggregateRow:J.value}),de.needsUpdate=!0,O.render(q,fe)}function ye(Y){if(!m.value)return[-1,-1];const Q=m.value.getBoundingClientRect(),Se=Y.clientX-Q.left,Ie=Y.clientY-Q.top,M=m.value.width||Q.width,I=m.value.height||Q.height,z=t.curvature/45*.55,[j,V]=PS(Se,Ie,M,I,z);return j<0?[-1,-1]:[j,V]}let ke=0;function Ge(Y){T.value=null;const Q=Date.now();if(Y.deltaX!==0){ke=Q,x.value=Math.max(0,Math.min(y.value,x.value+Y.deltaX)),Te();return}if(Y.shiftKey&&Y.deltaY!==0){ke=Q,x.value=Math.max(0,Math.min(y.value,x.value+Y.deltaY)),Te();return}Q-ke<zS||(_.value=Math.max(0,Math.min(N.value,_.value+Y.deltaY)),Te())}function et(Y){if(re)return;if(t.magnify&&m.value){const M=qc(Y,m.value);E.x=M.x,E.y=M.y}const[Q,Se]=ye(Y);if(Q<0){p.value=-1,Te();return}const Ie=zf(Q,Se,S.value,ae.value.length,t.rowHeight,_.value,Ae.height,s.value.length,x.value,J.value!==null);if(p.value=Ie.area==="body"?Ie.rowIdx:-1,Ie.area==="header"&&Ie.colIdx>=0){const M=S.value[Ie.colIdx],I=fl(Ie.colIdx,S.value),z=Q+x.value;m.value.style.cursor=M&&kf(z,I,M.width)?"col-resize":"pointer"}else Ie.area==="body"?m.value.style.cursor="pointer":m.value.style.cursor="default";Te()}function G(){p.value=-1,E.x=Zt.x,E.y=Zt.y,Te()}function be(Y){const[Q,Se]=ye(Y);if(Q<0)return;if(Se>=Ct){Ue=!0,b=!1,ze=Y.clientX,xe=Y.clientY,A=x.value,U=_.value;return}const Ie=Q+x.value;for(let M=0;M<S.value.length;M++){const I=S.value[M],z=fl(M,S.value);if(I.colDef.resizable!==!1&&kf(Ie,z,I.width)){ue(I.colId,Y.clientX);return}}}function ce(Y){var M,I,z;if(Ne){Ne=!1;return}if(re)return;const[Q,Se]=ye(Y);if(Q<0){T.value=null;return}const Ie=zf(Q,Se,S.value,ae.value.length,t.rowHeight,_.value,Ae.height,s.value.length,x.value,J.value!==null);if(Ie.area==="header"&&Ie.colIdx>=0){const j=S.value[Ie.colIdx],V=fl(Ie.colIdx,S.value),_e=Q+x.value;j.colDef.filter&&DS(_e,V,j.width)?(Y.stopPropagation(),T.value===j.colId?T.value=null:(T.value=j.colId,D.value=(M=l[j.colId])!=null&&M.startsWith("__eq__")?l[j.colId].slice(6):l[j.colId]??"",R.value={x:Math.max(0,V-x.value),y:Ct})):j.colDef.sortable!==!1&&(T.value=null,a.value=((I=a.value)==null?void 0:I.colId)===j.colId?a.value.dir==="asc"?{colId:j.colId,dir:"desc"}:null:{colId:j.colId,dir:"asc"},i("sort-changed"));return}if(T.value=null,Ie.area==="body"&&Ie.rowIdx>=0&&Ie.colIdx>=0){const j=Ie.rowIdx;Y.shiftKey&&d.value?(C.value||(C.value={...d.value}),d.value={row:j,col:Ie.colIdx}):(d.value={row:j,col:Ie.colIdx},C.value={row:j,col:Ie.colIdx}),(z=m.value)==null||z.focus();const V=ae.value[j],_e=S.value[Ie.colIdx];V&&_e&&(i("row-clicked",{data:V,event:Y}),i("cell-selected",{data:V,row:j,col:Ie.colIdx,colId:_e.colId}))}}function pe(Y){var Q,Se;T.value&&((Se=(Q=Y.target).closest)!=null&&Se.call(Q,".cathode-filter-popup")||(T.value=null))}function Le(Y){var M;if(!h.value)return;let Q=0;for(let I=0;I<Y;I++)Q+=S.value[I].width;const Se=((M=S.value[Y])==null?void 0:M.width)??0,Ie=Q-x.value;Ie<0?x.value=Math.max(0,Q):Ie+Se>h.value&&(x.value=Math.min(y.value,Q+Se-h.value))}function Pe(Y){const Se=S.value.length-1,Ie=ae.value.length-1;if(!d.value){["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Tab","Enter"].includes(Y.key)&&(Y.preventDefault(),d.value={row:$.value,col:0},C.value={row:$.value,col:0});return}let{row:M,col:I}=d.value;const z=(j,V,_e=!1)=>{M=Math.max(0,Math.min(Ie,j)),I=Math.max(0,Math.min(Se,V)),d.value={row:M,col:I},_e||(C.value={row:M,col:I}),ge(M),Le(I)};switch(Y.key){case"ArrowDown":Y.preventDefault(),z(M+1,I,Y.shiftKey);break;case"ArrowUp":Y.preventDefault(),z(M-1,I,Y.shiftKey);break;case"ArrowRight":Y.preventDefault(),Y.shiftKey?z(M,I+1,!0):I<Se?z(M,I+1):z(M+1,0);break;case"ArrowLeft":Y.preventDefault(),Y.shiftKey?z(M,I-1,!0):I>0?z(M,I-1):z(M-1,Se);break;case"Tab":Y.preventDefault(),Y.shiftKey?I>0?z(M,I-1):z(M-1,Se):I<Se?z(M,I+1):z(M+1,0);break;case"Enter":Y.preventDefault(),Y.shiftKey?z(M-1,I):z(M+1,I);break;case"Home":Y.preventDefault(),Y.ctrlKey||Y.metaKey?z(0,0,Y.shiftKey):z(M,0,Y.shiftKey);break;case"End":Y.preventDefault(),Y.ctrlKey||Y.metaKey?z(Ie,Se,Y.shiftKey):z(M,Se,Y.shiftKey);break;case"PageDown":Y.preventDefault(),z(Math.min(Ie,M+H.value),I,Y.shiftKey);break;case"PageUp":Y.preventDefault(),z(Math.max(0,M-H.value),I,Y.shiftKey);break;case"Escape":d.value=null,C.value=null;break;case"c":case"C":(Y.ctrlKey||Y.metaKey)&&(Y.preventDefault(),qe());break}}function qe(){var _e;if(!d.value)return;const Y=S.value,Q=ae.value,Se=C.value??d.value,Ie=Math.min(Se.row,d.value.row),M=Math.max(Se.row,d.value.row),I=Math.min(Se.col,d.value.col),z=Math.max(Se.col,d.value.col),j=[];for(let Ce=Ie;Ce<=M;Ce++){const Fe=Q[Ce];if(!Fe)continue;const Oe=[];for(let $e=I;$e<=z;$e++){const Ke=Y[$e];Ke&&Oe.push(K(Ke,Fe).replace(/[\t\r\n]+/g," "))}j.push(Oe.join("	"))}const V=j.join(`
`);(_e=navigator.clipboard)==null||_e.writeText(V).catch(()=>{})}function _t(Y){const Q=Y.target.value;D.value=Q,Q?l[T.value]=Q:delete l[T.value],i("filter-changed")}function wt(){T.value&&delete l[T.value],D.value="",T.value=null,i("filter-changed")}const rt={setGridOption(Y,Q){Y==="rowData"?r.value=Q:Y==="pinnedBottomRowData"?s.value=Q:Y==="quickFilterText"&&(o.value=Q)},getColumnState(){return t.columnDefs.map(Y=>{var Se,Ie;const Q=P(Y);return{colId:Q,hide:u.has(Q),sort:((Se=a.value)==null?void 0:Se.colId)===Q?a.value.dir:null,sortIndex:((Ie=a.value)==null?void 0:Ie.colId)===Q?0:null,width:c[Q]??Y.width}})},applyColumnState({state:Y}){for(const Q of Y)Q.hide===!0&&u.add(Q.colId),Q.hide===!1&&u.delete(Q.colId),Q.sort&&(a.value={colId:Q.colId,dir:Q.sort}),Q.width&&(c[Q.colId]=Q.width)},setFilterModel(Y){for(const Q of Object.keys(l))delete l[Q];if(Y)for(const[Q,Se]of Object.entries(Y))(Se==null?void 0:Se.type)==="equals"?l[Q]=`__eq__${Se.filter}`:Se!=null&&Se.filter&&(l[Q]=Se.filter)},getFilterModel(){const Y={};for(const[Q,Se]of Object.entries(l))Se&&(Y[Q]=Se.startsWith("__eq__")?{type:"equals",filter:Se.slice(6)}:{type:"contains",filter:Se});return Y},async setColumnFilterModel(Y,Q){Q?Q.type==="equals"?l[Y]=`__eq__${Q.filter}`:l[Y]=Q.filter??"":delete l[Y]},onFilterChanged(){},refreshCells(){f.value++},exportDataAsCsv({fileName:Y="export.csv"}={}){const Q=F.value,Se=Q.map(z=>z.colDef.headerName??z.colId).join(","),Ie=ae.value.map(z=>Q.map(j=>`"${String(K(j,z)).replace(/"/g,'""')}"`).join(",")),M=new Blob([[Se,...Ie].join(`
`)],{type:"text/csv"}),I=URL.createObjectURL(M);Object.assign(document.createElement("a"),{href:I,download:Y}).click(),URL.revokeObjectURL(I)},resize(){Me()},resetColumnState(){u.clear();for(const Q of t.columnDefs)Q.hide&&u.add(P(Q));const Y=t.columnDefs.find(Q=>Q.sort);a.value=Y?{colId:P(Y),dir:Y.sort}:null;for(const Q of Object.keys(c))delete c[Q];for(const Q of Object.keys(l))delete l[Q];o.value="",_.value=0,d.value=null,T.value=null}};Xe([ae,()=>s.value,S,_,p,d],()=>Mn(Te)),Xe(()=>t.theme,()=>Te()),Xe(()=>t.curvature,()=>Mn(Me)),Xe(()=>t.scanlines,()=>Te()),Xe(()=>t.glow,()=>Te()),Xe(()=>t.magnify,Y=>{Y||(E.x=Zt.x,E.y=Zt.y),Te()}),Xe(d,Y=>{if(!Y)return;const Q=ae.value[Y.row],Se=S.value[Y.col];Q&&Se&&i("cell-selected",{data:Q,row:Y.row,col:Y.col,colId:Se.colId})});let It=null,Gt=null,br=0;function Kn(){cancelAnimationFrame(br),br=requestAnimationFrame(Me)}function Fn(Y){Y.preventDefault()}function Tr(){O==null||O.dispose(),O=null,W=!1,ie()}Nn(()=>{for(const Y of t.columnDefs)Y.hide&&u.add(P(Y)),Y.sort&&!a.value&&(a.value={colId:P(Y),dir:Y.sort});r.value=t.rowData??[],s.value=t.pinnedBottomRowData??[],document.addEventListener("click",pe),document.addEventListener("mousemove",ee),document.addEventListener("mouseup",ne),Mn(()=>{var Y;ie(),m.value&&(m.value.addEventListener("webglcontextlost",Fn),m.value.addEventListener("webglcontextrestored",Tr)),v.value&&(It=new ResizeObserver(()=>Me()),It.observe(v.value),Gt=new IntersectionObserver(Q=>{Q.some(Se=>Se.isIntersecting)&&Kn()}),Gt.observe(v.value)),window.addEventListener("resize",Kn),(Y=window.visualViewport)==null||Y.addEventListener("resize",Kn),i("grid-ready",{api:rt})})}),qn(()=>{var Y,Q,Se;document.removeEventListener("click",pe,!0),document.removeEventListener("mousemove",ee),document.removeEventListener("mouseup",ne),(Y=m.value)==null||Y.removeEventListener("webglcontextlost",Fn),(Q=m.value)==null||Q.removeEventListener("webglcontextrestored",Tr),It==null||It.disconnect(),Gt==null||Gt.disconnect(),window.removeEventListener("resize",Kn),(Se=window.visualViewport)==null||Se.removeEventListener("resize",Kn),cancelAnimationFrame(br),O==null||O.dispose()});const Wt=tt(()=>$r[t.theme]??$r.none),ro=tt(()=>({position:"absolute",left:`${R.value.x}px`,top:`${R.value.y}px`,zIndex:100,background:Wt.value.headerBg,border:`1px solid ${Wt.value.accent}`,color:Wt.value.text,boxShadow:"0 4px 14px rgba(0,0,0,0.55)",borderRadius:"3px",display:"flex",alignItems:"center",gap:"4px",padding:"5px",minWidth:"160px"})),wr=tt(()=>({background:Wt.value.bg,border:`1px solid ${Wt.value.border}`,color:Wt.value.text,fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"11px",padding:"3px 7px",borderRadius:"2px",outline:"none",flex:"1"})),so=tt(()=>({background:Wt.value.headerBg,borderTop:`1px solid ${Wt.value.border}`,color:Wt.value.text})),Ar=tt(()=>({background:Wt.value.bg})),gs=tt(()=>Wt.value.accent);return(Y,Q)=>{var Se,Ie;return je(),xt("div",{ref_key:"wrapEl",ref:v,class:"cathode-wrap",style:rn(Ar.value)},[Be("canvas",{ref_key:"canvasEl",ref:m,class:"cathode-canvas",tabindex:"0",onWheel:Ni(Ge,["prevent"]),onMousemove:et,onMouseleave:G,onMousedown:be,onClick:ce,onKeydown:Pe,onTouchstartPassive:le,onTouchmove:he,onTouchend:te,onTouchcancel:te},null,544),T.value?(je(),xt("div",{key:0,class:"cathode-filter-popup",style:rn(ro.value),onClick:Q[0]||(Q[0]=Ni(()=>{},["stop"]))},[Be("input",{style:rn(wr.value),value:D.value,placeholder:"Filter…",autofocus:"",onInput:_t,onKeydown:xg(wt,["escape"])},null,44,NS),D.value?(je(),xt("button",{key:0,style:rn({background:"none",border:"none",color:Wt.value.text,opacity:"0.55",cursor:"pointer",fontSize:"11px",padding:"0 4px"}),onClick:wt},"✕",4)):Kt("",!0)],4)):Kt("",!0),n.pagination?(je(),xt("div",{key:1,class:"cathode-pagination",style:rn(so.value)},[Be("button",{disabled:_.value<=0,onClick:Q[1]||(Q[1]=M=>we())},"◀",8,FS),Be("span",null,_n(($.value+1).toLocaleString())+"–"+_n(Math.min(ae.value.length,Z.value+1).toLocaleString())+" / "+_n(ae.value.length.toLocaleString()),1),Be("button",{disabled:_.value>=N.value,onClick:Q[2]||(Q[2]=M=>Ve())},"▶",8,OS),Be("span",{class:"cathode-page-info",style:rn({color:gs.value})},_n(ae.value.length.toLocaleString())+" rows ",5),d.value?(je(),xt("span",{key:0,class:"cathode-sel-readout",style:rn({color:gs.value})},_n(((Se=S.value[d.value.col])==null?void 0:Se.colDef.headerName)??((Ie=S.value[d.value.col])==null?void 0:Ie.colId))+" : "+_n(K(S.value[d.value.col],ae.value[d.value.row])),5)):Kt("",!0)],4)):Kt("",!0)],4)}}}),Yi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Hf=Yi(HS,[["__scopeId","data-v-e37eed70"]]),Qo={none:{bg:"rgba(0,0,0,0)",text:"#f0f8ff",border:"#2a3a50",accent:"#60c0ff",rowAlt:"rgba(255,255,255,0.018)",levelInfo:"#e0eaf4",levelWarn:"#ffd890",levelError:"#ff9a9a",levelDebug:"#a0b8d0",levelSuccess:"#a0e8c0",timestamp:"#90b8d8"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",border:"#dee2e6",accent:"#158cba",rowAlt:"rgba(0,0,0,0.020)",levelInfo:"#444444",levelWarn:"#a06000",levelError:"#c0392b",levelDebug:"#888888",levelSuccess:"#1a8038",timestamp:"#888888"},phosphor:{bg:"#060d06",text:"#80ff80",border:"#0a250a",accent:"#a0ffa0",rowAlt:"rgba(51,255,51,0.025)",levelInfo:"#80ff80",levelWarn:"#d0ff60",levelError:"#ff8080",levelDebug:"#5fcc5f",levelSuccess:"#80ffa0",timestamp:"#60dd60"},amber:{bg:"#0a0700",text:"#ffd060",border:"#2a1500",accent:"#ffe080",rowAlt:"rgba(255,176,0,0.025)",levelInfo:"#ffd060",levelWarn:"#ffe040",levelError:"#ff7030",levelDebug:"#cc9030",levelSuccess:"#ffe890",timestamp:"#ffe080"}};function VS(n,e){switch(e){case"warn":return n.levelWarn;case"error":return n.levelError;case"debug":return n.levelDebug;case"success":return n.levelSuccess;case"info":default:return n.levelInfo}}const GS=12,Ut=18,Bs=10,vr=6,Kc=`${GS}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;function WS(n,e,t){if(t<=0||!e)return[e];const i=[];for(const r of e.split(`
`)){if(!r){i.push("");continue}if(n.measureText(r).width<=t){i.push(r);continue}const s=r.split(/(\s+)/);let o="";for(const a of s){const l=o+a;if(n.measureText(l).width<=t)o=l;else if(o&&(i.push(o.replace(/\s+$/,"")),o=""),n.measureText(a).width>t){let c="";for(const u of a)n.measureText(c+u).width>t?(c&&i.push(c),c=u):c+=u;o=c}else o=a.replace(/^\s+/,"")}o&&i.push(o.replace(/\s+$/,""))}return i.length?i:[""]}function Gh(n){if(typeof n=="number"){const e=new Date(n),t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),r=String(e.getSeconds()).padStart(2,"0");return`${t}:${i}:${r}`}return n}function XS(n,e){return Math.ceil(n.measureText(e).width)+12}function YS(n){const{entries:e,ctx:t,textMaxWidth:i,showTimestamps:r,wordWrap:s}=n,o=n.formatTs??Gh;t.font=Kc;const a=[];for(let l=0;l<e.length;l++){const c=e[l],u=c.level??"info",f=r&&c.ts!=null?o(c.ts):"",h=s?WS(t,c.text,i):c.text.split(`
`);for(let g=0;g<h.length;g++)a.push({entryIdx:l,text:h[g],level:u,timestamp:g===0?f:"",isFirstFrag:g===0,widthPx:t.measureText(h[g]).width})}return a}function Vf(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=Qo[e.theme]??Qo.none;t.clearRect(0,0,i,r),t.fillStyle=s.bg,t.fillRect(0,0,i,r),t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip(),t.font=Kc,t.textBaseline="middle";const o=e.visualLines,a=Bs-e.scrollX,l=(e.showTimestamps?Bs+e.timestampWidth:Bs)-e.scrollX,c=Math.max(0,Math.floor((e.scrollY-vr)/Ut)),u=Math.min(o.length,Math.ceil((e.scrollY+r-vr)/Ut)+1);for(let f=c;f<u;f++){const h=o[f],g=vr+f*Ut-e.scrollY+Ut/2;if(h.entryIdx%2===1&&h.isFirstFrag){t.fillStyle=s.rowAlt;let x=1;for(;f+x<u&&o[f+x].entryIdx===h.entryIdx;)x++;t.fillRect(0,g-Ut/2,i,Ut*x)}e.selectionStart>=0&&f>=e.selectionStart&&f<=e.selectionEnd&&(t.fillStyle=s.selection??"rgba(110, 231, 167, 0.16)",t.fillRect(0,g-Ut/2,i,Ut)),f===e.hoveredLine&&(t.fillStyle="rgba(255,255,255,0.045)",t.fillRect(0,g-Ut/2,i,Ut)),e.showTimestamps&&h.timestamp&&(t.fillStyle=s.timestamp,t.textAlign="left",e.glow&&(t.shadowBlur=6,t.shadowColor=s.timestamp),t.fillText(h.timestamp,a,g),t.shadowBlur=0);const _=VS(s,h.level);t.fillStyle=_,t.textAlign="left",e.glow?(t.shadowColor=_,t.shadowBlur=14,t.fillText(h.text,l,g),t.shadowBlur=7,t.fillText(h.text,l,g),t.shadowBlur=3,t.fillText(h.text,l,g),t.shadowBlur=0):t.fillText(h.text,l,g)}t.restore()}function Gf(n,e,t){if(n<0)return-1;const i=Math.floor((n+e-vr)/Ut);return i<0||i>=t?-1:i}function $S(n){return vr*2+n*Ut}const qS=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,KS=Wi({__name:"CathodeLog",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},magnify:{type:Boolean,default:!1}},setup(n,{expose:e}){const t=n,i=De(null),r=De(null),s={...Zt},o=De(0),a=De(0),l=De(0),c=De(-1),u=De(!0),f=De(-1),h=De(-1),g=tt(()=>{const B=t.entries??[];return t.maxLines>0&&B.length>t.maxLines?B.slice(B.length-t.maxLines):B}),_=tt(()=>{if(!t.showTimestamps)return"";const B=t.formatTs??Gh;let ie="00:00:00";for(const Me of g.value){if(Me.ts==null)continue;const Te=B(Me.ts);Te.length>ie.length&&(ie=Te)}return ie}),x=De(0),p=De([]);function d(){if(!H)return;const B=H.getContext("2d");if(!B)return;B.font=Kc;const ie=t.showTimestamps?XS(B,_.value):0;x.value=ie;const Me=Math.max(1,o.value-Bs*2-ie);p.value=YS({entries:g.value,ctx:B,textMaxWidth:Me,showTimestamps:t.showTimestamps,formatTs:t.formatTs,wordWrap:t.wordWrap})}const C=tt(()=>$S(p.value.length)),T=tt(()=>Math.max(0,C.value-a.value)),E=tt(()=>{let B=0;for(const ie of p.value)ie.widthPx>B&&(B=ie.widthPx);return Bs*2+x.value+B}),R=tt(()=>Math.max(0,E.value-o.value)),D=De(0);Xe(T,()=>{u.value?l.value=T.value:l.value=Math.min(l.value,T.value)}),Xe(R,()=>{D.value=Math.min(D.value,R.value)}),Xe([g,o,()=>t.showTimestamps,()=>t.wordWrap,_],()=>{d(),Mn(K)},{deep:!1});let P=null,F=!1,S,y,L,N,H;const $=`
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
`;function Z(){if(!(!r.value||!i.value)){H=document.createElement("canvas");try{P=new xa({canvas:r.value,antialias:!1,alpha:!0})}catch{F=!0}if(!F&&!P.getContext()&&(P.dispose(),P=null,F=!0),F){X();return}P.setPixelRatio(1),P.setClearColor(0,0),S=new Ma,y=new io(-1,1,1,-1,0,1),N=new Sr(H),N.minFilter=Mt,N.magFilter=Mt,L=new Sn({uniforms:{uTex:{value:N},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...Yc()},vertexShader:qS,fragmentShader:$,transparent:!0}),S.add(new dn(new Xi(2,2),L)),X()}}function X(){if(!i.value||!P&&!F)return;const B=i.value.clientWidth,ie=i.value.clientHeight;if(!B||!ie)return;const Me=H.width!==B||H.height!==ie;Me&&(H.width=B,H.height=ie,o.value=B,a.value=ie,d(),P?(Me&&N&&(N.dispose(),N=new Sr(H),N.minFilter=Mt,N.magFilter=Mt,L&&(L.uniforms.uTex.value=N)),P.setPixelRatio(window.devicePixelRatio||1),P.setSize(B,ie)):r.value&&(r.value.width=B,r.value.height=ie,r.value.style.width=B+"px",r.value.style.height=ie+"px"),u.value&&(l.value=Math.max(0,C.value-a.value)),K())}function K(){if(!(H!=null&&H.width))return;if(F){if(!r.value)return;Vf(H,{visualLines:p.value,scrollY:l.value,scrollX:D.value,theme:t.theme,glow:!1,showTimestamps:t.showTimestamps,timestampWidth:x.value,hoveredLine:c.value,selectionStart:Math.min(f.value,h.value),selectionEnd:Math.max(f.value,h.value)});const ie=r.value.getContext("2d");ie&&ie.drawImage(H,0,0);return}if(!P||!L||!N)return;const B=t.theme==="paper";L.uniforms.uStrength.value=t.curvature/45*.55,L.uniforms.uScanlines.value=t.scanlines&&!B?1:0,L.uniforms.uVignette.value=B?0:1,$c(L,t.magnify,s,H.width,H.height),Vf(H,{visualLines:p.value,scrollY:l.value,scrollX:D.value,theme:t.theme,glow:t.glow,showTimestamps:t.showTimestamps,timestampWidth:x.value,hoveredLine:c.value,selectionStart:Math.min(f.value,h.value),selectionEnd:Math.max(f.value,h.value)}),N.needsUpdate=!0,P.render(S,y)}Xe(()=>t.theme,()=>K()),Xe(()=>t.curvature,()=>K()),Xe(()=>t.scanlines,()=>K()),Xe(()=>t.glow,()=>K()),Xe(()=>t.magnify,B=>{B||(s.x=Zt.x,s.y=Zt.y),K()}),Xe(l,()=>K()),Xe(D,()=>K()),Xe(c,()=>K()),Xe([f,h],()=>K());function k(B){if(!r.value)return[-1,-1];const ie=r.value.getBoundingClientRect();return[B.clientX-ie.left,B.clientY-ie.top]}function ae(B){l.value=Math.max(0,Math.min(T.value,B)),u.value=l.value>=T.value-4}function J(B){D.value=Math.max(0,Math.min(R.value,B))}function ge(B){B.shiftKey?J(D.value+B.deltaY):Math.abs(B.deltaX)>Math.abs(B.deltaY)?J(D.value+B.deltaX):ae(l.value+B.deltaY)}let we=!1,Ve=0,re=0,me=0,Ee=0,ve=!1;function Ne(B){we=!0,ve=!1,Ve=B.clientX,re=B.clientY,me=D.value,Ee=l.value,i.value&&i.value.focus()}function Ue(B){if(we){const ie=Ve-B.clientX,Me=re-B.clientY;(Math.abs(ie)>4||Math.abs(Me)>4)&&(ve=!0),J(me+ie),ae(Ee+Me)}}function ze(){we&&(we=!1,ve&&(ve=!1))}function xe(B){if(B.touches.length!==1)return;const ie=B.touches[0];we=!0,ve=!1,Ve=ie.clientX,re=ie.clientY,me=D.value,Ee=l.value,i.value&&i.value.focus()}function A(B){if(!we||B.touches.length!==1)return;B.preventDefault();const ie=B.touches[0],Me=Ve-ie.clientX,Te=re-ie.clientY;(Math.abs(Me)>4||Math.abs(Te)>4)&&(ve=!0),J(me+Me),ae(Ee+Te)}function U(){we&&(we=!1,ve&&(ve=!1))}function b(B){const[,ie]=k(B);return ie<0?-1:Gf(ie,l.value,p.value.length)}function ue(B){if(ve){ve=!1;return}const ie=b(B);if(ie<0){f.value=-1,h.value=-1;return}B.shiftKey&&f.value>=0||(f.value=ie),h.value=ie}function ee(B,ie){const Me=p.value.length;if(Me===0)return;const Te=h.value<0?0:h.value;let ye=Math.max(0,Math.min(Me-1,Te+B));h.value=ye,(!ie||f.value<0)&&(f.value=ye),c.value=ye;const ke=vr+ye*Ut,Ge=ke+Ut;ke<l.value?ae(ke):Ge>l.value+a.value&&ae(Ge-a.value)}function ne(){const B=Math.min(f.value,h.value),ie=Math.max(f.value,h.value);if(B<0)return"";const Me=p.value,Te=new Set,ye=[];for(let ke=B;ke<=ie&&ke<Me.length;ke++){const Ge=Me[ke];if(Te.has(Ge.entryIdx))continue;Te.add(Ge.entryIdx);let et="";for(let G=0;G<Me.length;G++)Me[G].entryIdx===Ge.entryIdx&&(et+=(et&&!Me[G].isFirstFrag?" ":"")+Me[G].text);ye.push(Ge.timestamp?`${Ge.timestamp}  ${et}`:et)}return ye.join(`
`)}async function le(){const B=ne();if(B)try{await navigator.clipboard.writeText(B)}catch{const ie=document.createElement("textarea");ie.value=B,ie.style.position="fixed",ie.style.opacity="0",document.body.appendChild(ie),ie.select();try{document.execCommand("copy")}catch{}document.body.removeChild(ie)}}function he(B){if((B.metaKey||B.ctrlKey)&&(B.key==="c"||B.key==="C")){f.value>=0&&(B.preventDefault(),le());return}if((B.metaKey||B.ctrlKey)&&(B.key==="a"||B.key==="A")){B.preventDefault(),f.value=0,h.value=p.value.length-1;return}switch(B.key){case"ArrowDown":B.preventDefault(),ee(1,B.shiftKey);break;case"ArrowUp":B.preventDefault(),ee(-1,B.shiftKey);break;case"ArrowRight":B.preventDefault(),J(D.value+Ut*2);break;case"ArrowLeft":B.preventDefault(),J(D.value-Ut*2);break;case"PageDown":B.preventDefault(),ae(l.value+a.value);break;case"PageUp":B.preventDefault(),ae(l.value-a.value);break;case"Home":B.preventDefault(),ae(0),J(0);break;case"End":B.preventDefault(),ae(T.value);break;case"Escape":f.value=-1,h.value=-1;break}}function te(B){if(t.magnify&&r.value){const Me=qc(B,r.value);s.x=Me.x,s.y=Me.y,K()}const[,ie]=k(B);if(ie<0){c.value=-1;return}c.value=Gf(ie,l.value,p.value.length)}function v(){c.value=-1,s.x=Zt.x,s.y=Zt.y,K()}e({scrollToBottom(){u.value=!0,l.value=T.value},scrollToLine(B){ae(vr+B*Ut)}});let m=null,w=null,O=0;const W=Fi("cathodeResetTick",De(0));Xe(W,()=>q());function q(){cancelAnimationFrame(O),O=requestAnimationFrame(X)}function fe(B){B.preventDefault()}function se(){P==null||P.dispose(),P=null,F=!1,Z()}Nn(()=>{document.addEventListener("mousemove",Ue),document.addEventListener("mouseup",ze),Mn(()=>{var B;Z(),r.value&&(r.value.addEventListener("webglcontextlost",fe),r.value.addEventListener("webglcontextrestored",se)),i.value&&(m=new ResizeObserver(()=>X()),m.observe(i.value),w=new IntersectionObserver(ie=>{ie.some(Me=>Me.isIntersecting)&&q()}),w.observe(i.value)),window.addEventListener("resize",q),(B=window.visualViewport)==null||B.addEventListener("resize",q),l.value=T.value})}),qn(()=>{var B,ie,Me;document.removeEventListener("mousemove",Ue),document.removeEventListener("mouseup",ze),(B=r.value)==null||B.removeEventListener("webglcontextlost",fe),(ie=r.value)==null||ie.removeEventListener("webglcontextrestored",se),m==null||m.disconnect(),w==null||w.disconnect(),window.removeEventListener("resize",q),(Me=window.visualViewport)==null||Me.removeEventListener("resize",q),cancelAnimationFrame(O),P==null||P.dispose()});const de=tt(()=>Qo[t.theme]??Qo.none),Ae=tt(()=>({background:de.value.bg}));return(B,ie)=>(je(),xt("div",{ref_key:"wrapEl",ref:i,class:"cathode-log-wrap",style:rn(Ae.value),tabindex:"0",onKeydown:he},[Be("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-log-canvas",onWheel:Ni(ge,["prevent"]),onMousemove:te,onMouseleave:v,onMousedown:Ne,onClick:ue,onTouchstartPassive:xe,onTouchmove:A,onTouchend:U,onTouchcancel:U},null,544)],36))}}),gc=Yi(KS,[["__scopeId","data-v-96a56f90"]]),ea={none:{bg:"rgba(0,0,0,0)",candleBull:"#26a69a",candleBear:"#ef5350",wickBull:"#26a69a",wickBear:"#ef5350",volumeBull:"rgba(38,166,154,0.45)",volumeBear:"rgba(239,83,80,0.45)",gridline:"rgba(255,255,255,0.06)",text:"#c0d0e0",accent:"#40a0f0",markerEntry:"#00cc55",markerExit:"#e74c3c",panelBg:"rgba(13,21,32,0.55)",panelBgSolid:"rgba(13,21,32,0.92)"},paper:{bg:"rgba(0,0,0,0)",candleBull:"#1a8038",candleBear:"#c0392b",wickBull:"#1a8038",wickBear:"#c0392b",volumeBull:"rgba(26,128,56,0.30)",volumeBear:"rgba(192,57,43,0.30)",gridline:"rgba(0,0,0,0.06)",text:"#222222",accent:"#158cba",markerEntry:"#1a9e3f",markerExit:"#d93025",panelBg:"rgba(255,255,255,0.78)",panelBgSolid:"rgba(255,255,255,0.96)"},phosphor:{bg:"#060d06",candleBull:"#33ff33",candleBear:"#ff5050",wickBull:"#33ff33",wickBear:"#ff5050",volumeBull:"rgba(51,255,51,0.35)",volumeBear:"rgba(255,80,80,0.35)",gridline:"rgba(51,255,51,0.10)",text:"#33ff33",accent:"#80ff80",markerEntry:"#80ff80",markerExit:"#ff8080",panelBg:"rgba(6,13,6,0.85)",panelBgSolid:"rgba(6,13,6,0.96)"},amber:{bg:"#0a0700",candleBull:"#ffd060",candleBear:"#ff5000",wickBull:"#ffd060",wickBear:"#ff5000",volumeBull:"rgba(255,208,96,0.35)",volumeBear:"rgba(255,80,0,0.35)",gridline:"rgba(255,176,0,0.10)",text:"#ffb000",accent:"#ffd060",markerEntry:"#ffe080",markerExit:"#ff7030",panelBg:"rgba(10,7,0,0.85)",panelBgSolid:"rgba(10,7,0,0.96)"}},jS=.18,Cs=8,jc=22,ZS=4,Mi=8,_r=56,Wh=42,Hi="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",JS="9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",dl=4,QS=1,ey=1;function ty(n,e,t,i=0,r=!1){const s=r?Wh:_r,o=Math.max(0,e-Mi-s),a=Math.max(1,Math.floor(o/t)),l=Math.min(a,n);return{firstIdx:Math.max(0,n-l-Math.floor(i/t)),count:l,slotW:t}}function ny(n,e,t){if(!n.length||t<=0)return{min:0,max:1,maxVol:1};let i=1/0,r=-1/0,s=0;const o=Math.min(n.length,e+t);for(let l=e;l<o;l++){const c=n[l];c&&(c.low<i&&(i=c.low),c.high>r&&(r=c.high),c.volume>s&&(s=c.volume))}if(!isFinite(i)||!isFinite(r)||i===r){const l=isFinite(i)?i:0;return{min:l-1,max:l+1,maxVol:Math.max(1,s)}}const a=(r-i)*.04;return{min:i-a,max:r+a,maxVol:Math.max(1,s)}}function iy(n,e,t=!1){const i=t?ZS:jc,r=Math.max(1,n-Cs-i-dl),s=Math.max(0,Math.round(r*e)),o=r-s;return{priceY0:Cs,priceY1:Cs+o,volumeY0:Cs+o+dl,volumeY1:Cs+o+dl+s}}function Xn(n,e,t,i){const r=e.max-e.min;return r<=0?(t+i)/2:t+(1-(n-e.min)/r)*(i-t)}function Vi(n,e,t){return Mi+(n-e+.5)*t}function hr(n){const e=Math.abs(n),t=e>=1e4?{minimumFractionDigits:0,maximumFractionDigits:0}:e>=100?{minimumFractionDigits:1,maximumFractionDigits:1}:e>=1?{minimumFractionDigits:2,maximumFractionDigits:2}:e>=.01?{minimumFractionDigits:4,maximumFractionDigits:4}:{minimumFractionDigits:6,maximumFractionDigits:6};return n.toLocaleString("en-US",t)}function Zc(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return`${t}-${i} ${r}:${s}`}function ry(n,e){if(n<=0||!isFinite(n))return 1;const t=n/Math.max(1,e),i=Math.pow(10,Math.floor(Math.log10(t))),r=t/i;let s;return r<1.5?s=1:r<3?s=2:r<7?s=5:s=10,s*i}function Wf(n,e){var g,_,x,p,d;const t=n.getContext("2d");if(!t)return;const i=n.width,r=n.height,s=ea[e.theme]??ea.none,o=e.colors?{...s,...e.colors}:s,a=!!e.compact;if(t.clearRect(0,0,i,r),t.fillStyle=o.bg,t.fillRect(0,0,i,r),!e.candles.length)return;t.save(),t.beginPath(),t.rect(0,0,i,r),t.clip();const l=ty(e.candles.length,i,e.slotW,e.scrollX,a),c=ny(e.candles,l.firstIdx,l.count),u=iy(r,e.showVolume?e.volumeFraction:0,a),f=Math.max(QS,Math.floor(e.slotW*.7)),h=Math.min(e.candles.length,l.firstIdx+l.count);for(let C=l.firstIdx;C<h;C++){const T=e.candles[C];if(!T)continue;const E=Vi(C,l.firstIdx,e.slotW),R=Xn(T.open,c,u.priceY0,u.priceY1),D=Xn(T.close,c,u.priceY0,u.priceY1),P=Xn(T.high,c,u.priceY0,u.priceY1),F=Xn(T.low,c,u.priceY0,u.priceY1),S=T.close>=T.open,y=S?o.wickBull:o.wickBear,L=S?o.candleBull:o.candleBear;e.glow&&(t.shadowBlur=10,t.shadowColor=L),t.strokeStyle=y,t.lineWidth=ey,t.beginPath(),t.moveTo(Math.round(E)+.5,P),t.lineTo(Math.round(E)+.5,F),t.stroke(),t.fillStyle=L;const N=Math.min(R,D),H=Math.max(1,Math.abs(D-R)),$=Math.round(E-f/2),Z=Math.round(N),X=Math.round(H);if(t.fillRect($,Z,f,X),e.glow&&(t.shadowBlur=4,t.fillRect($,Z,f,X)),t.shadowBlur=0,e.showVolume&&c.maxVol>0){const K=Math.round(T.volume/c.maxVol*(u.volumeY1-u.volumeY0));K>0&&(t.fillStyle=S?o.volumeBull:o.volumeBear,t.fillRect(Math.round(E-f/2),u.volumeY1-K,f,K))}}if((g=e.overlays)!=null&&g.length)for(const C of e.overlays)sy(t,C,l,c,u,e.slotW);(_=e.markers)!=null&&_.length&&hy(t,o,e.markers,e.candles,l,c,u,e.slotW),py(t,o,c,u,i,a),a||(my(t,o,e.candles,l,e.slotW,r),fy(t,o,e.candles,i,r)),(x=e.overlays)!=null&&x.length&&ay(t,o,e.overlays,u),e.hover&&(gy(t,o,e.candles,l,c,u,e.slotW,e.hover,i),ly(t,o,e.candles,l,e.slotW,e.hover,u,((p=e.overlays)==null?void 0:p.length)??0),(d=e.markers)!=null&&d.length&&uy(t,o,e.markers,e.candles,l,c,u,e.slotW,e.hover,i)),t.restore()}function sy(n,e,t,i,r,s){var a;const o=t.firstIdx+t.count;if(n.save(),n.beginPath(),n.rect(Mi,r.priceY0,999999,r.priceY1-r.priceY0),n.clip(),e.kind==="line")Lo(n,e.data,t.firstIdx,o,s,i,r,e.color,e.lineWidth??1,e.dashed===!0);else{const l=Xh(e.color,e.fillAlpha??.08);oy(n,e.upper,e.lower,t.firstIdx,o,s,i,r,l),Lo(n,e.upper,t.firstIdx,o,s,i,r,e.color,1,!1),Lo(n,e.lower,t.firstIdx,o,s,i,r,e.color,1,!1),(a=e.middle)!=null&&a.length&&Lo(n,e.middle,t.firstIdx,o,s,i,r,e.color,1,e.middleDashed!==!1)}n.restore()}function Lo(n,e,t,i,r,s,o,a,l,c){if(!e||!e.length)return;n.strokeStyle=a,n.lineWidth=l,n.setLineDash(c?[4,3]:[]),n.beginPath();let u=!1;for(let f=t;f<i;f++){const h=e[f];if(typeof h!="number"||!isFinite(h)){u&&(n.stroke(),n.beginPath(),u=!1);continue}const g=Vi(f,t,r),_=Xn(h,s,o.priceY0,o.priceY1);u?n.lineTo(g,_):(n.moveTo(g,_),u=!0)}u&&n.stroke(),n.setLineDash([])}function oy(n,e,t,i,r,s,o,a,l){if(!(e!=null&&e.length)||!(t!=null&&t.length))return;n.fillStyle=l;let c=!1,u=-1;for(let f=i;f<=r;f++){const h=e[f],g=t[f],_=f<r&&typeof h=="number"&&typeof g=="number"&&isFinite(h)&&isFinite(g);if(_&&!c&&(u=f,c=!0),!_&&c||f===r&&c){const x=_?f+1:f;n.beginPath();for(let p=u;p<x;p++){const d=Vi(p,i,s),C=Xn(e[p],o,a.priceY0,a.priceY1);p===u?n.moveTo(d,C):n.lineTo(d,C)}for(let p=x-1;p>=u;p--){const d=Vi(p,i,s),C=Xn(t[p],o,a.priceY0,a.priceY1);n.lineTo(d,C)}n.closePath(),n.fill(),c=!1}}}function Xh(n,e){const t=Math.max(0,Math.min(1,e));if(n.startsWith("#")&&n.length===7){const i=parseInt(n.slice(1,3),16),r=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return`rgba(${i},${r},${s},${t})`}return n.startsWith("rgba")?n.replace(/[\d.]+\)$/,`${t})`):n.startsWith("rgb(")?n.replace(/^rgb\(/,"rgba(").replace(/\)$/,`,${t})`):n}function ay(n,e,t,i){const r=t.filter(x=>!!x.label);if(!r.length)return;n.save(),n.font=Hi;const s=8,o=5,a=12,l=6,c=14;let u=0;for(const x of r){const p=n.measureText(x.label).width;p>u&&(u=p)}const f=s*2+a+l+u,h=o*2+c*r.length,g=Mi+4,_=i.priceY0+4;n.fillStyle=e.panelBg,n.fillRect(g,_,f,h),n.textBaseline="middle",n.textAlign="left";for(let x=0;x<r.length;x++){const p=r[x],d=_+o+c*(x+.5),C=g+s;p.kind==="line"?(n.strokeStyle=p.color,n.lineWidth=p.lineWidth??1,n.setLineDash(p.dashed?[3,3]:[]),n.beginPath(),n.moveTo(C,d),n.lineTo(C+a,d),n.stroke(),n.setLineDash([])):(n.fillStyle=Xh(p.color,p.fillAlpha??.2),n.fillRect(C,d-4,a,8),n.strokeStyle=p.color,n.lineWidth=1,n.strokeRect(C+.5,d-4+.5,a-1,7)),n.fillStyle=e.text,n.fillText(p.label,C+a+l,d)}n.restore()}function ly(n,e,t,i,r,s,o,a){const l=Math.floor((s.x-Mi)/r),c=i.firstIdx+l;if(c<0||c>=t.length)return;const u=t[c];if(!u)return;const f=u.close-u.open,h=u.open!==0?f/u.open*100:0,g=f>=0?"+":"",_=[["O",hr(u.open),void 0],["H",hr(u.high),void 0],["L",hr(u.low),void 0],["C",hr(u.close),void 0],["V",cy(u.volume),void 0],["",`${g}${h.toFixed(2)}%`,f>=0?e.candleBull:e.candleBear]];n.save(),n.font=Hi,n.textBaseline="middle",n.textAlign="left";const x=8,p=4,d=14;let C=x;for(const[D,P]of _){const F=D?`${D} ${P}`:P,S=n.measureText(F).width+12;C+=S}C+=x-12;const T=o.priceY0+4+(a>0?p*2+14*a+4:0),E=Mi+4;n.fillStyle=e.panelBg,n.fillRect(E,T,C,d+p*2);let R=E+x;for(let D=0;D<_.length;D++){const[P,F,S]=_[D];n.fillStyle=e.text,P&&(n.globalAlpha=.6,n.fillText(P+" ",R,T+p+d/2),n.globalAlpha=1,R+=n.measureText(P+" ").width),S&&(n.fillStyle=S),n.fillText(F,R,T+p+d/2),R+=n.measureText(F).width+12}n.restore()}function cy(n){return!isFinite(n)||n<=0?"0":n>=1e9?(n/1e9).toFixed(2)+"B":n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":Math.round(n).toString()}function uy(n,e,t,i,r,s,o,a,l,c){if(!i.length)return;const u=i.length>1?i[1].start-i[0].start:6e4,f=Math.max(1,u*.5),h=Math.min(i.length,r.firstIdx+r.count),g=9;let _=null;for(const F of t){let S=0,y=i.length-1,L=-1;for(;S<=y;){const $=S+y>>1,Z=i[$].start-F.timestamp;if(Math.abs(Z)<=f){L=$;break}Z<0?S=$+1:y=$-1}if(L<0||L<r.firstIdx||L>=h)continue;const N=Vi(L,r.firstIdx,a),H=Xn(F.price,s,o.priceY0,o.priceY1);if(Math.abs(l.x-N)<=g&&Math.abs(l.y-H)<=g){_={m:F,x:N,y:H};break}}if(!_)return;const x=Zc(_.m.timestamp),p=[`${_.m.kind==="entry"?"▲ ENTRY":"▼ EXIT"}`,`${x}`,`@ ${hr(_.m.price)}`];_.m.label&&p.push(_.m.label),n.save(),n.font=Hi,n.textBaseline="top",n.textAlign="left";const d=6,C=14;let T=0;for(const F of p){const S=n.measureText(F).width;S>T&&(T=S)}const E=T+d*2,R=p.length*C+d*2;let D=_.x+12;D+E>c-_r&&(D=_.x-12-E);let P=_.y-R/2;P<o.priceY0&&(P=o.priceY0),P+R>o.priceY1&&(P=o.priceY1-R),n.fillStyle=e.panelBgSolid,n.strokeStyle=_.m.kind==="entry"?e.markerEntry:e.markerExit,n.lineWidth=1,n.fillRect(D,P,E,R),n.strokeRect(D+.5,P+.5,E-1,R-1);for(let F=0;F<p.length;F++){const S=p[F];n.fillStyle=F===0?_.m.kind==="entry"?e.markerEntry:e.markerExit:e.text,n.fillText(S,D+d,P+d+F*C)}n.restore()}function fy(n,e,t,i,r){if(t.length<2)return;const s=t[1].start-t[0].start,o=dy(s);if(!o)return;n.save(),n.font=Hi,n.textBaseline="top",n.textAlign="right";const a=6,l=3,c=n.measureText(o).width,u=i-_r-a,f=r-jc+4;n.fillStyle=e.accent,n.fillRect(u-c-a,f-l,c+a*2,14+l*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(o,u,f),n.restore()}function dy(n){if(n<=0||!isFinite(n))return"";const e=1e3,t=60*e,i=60*t,r=24*i,s=7*r;return n>=s&&n%s===0?n/s+"W":n>=r&&n%r===0?n/r+"D":n>=i&&n%i===0?n/i+"h":n>=t&&n%t===0?n/t+"m":n>=e&&n%e===0?n/e+"s":Math.round(n/t)+"m"}function hy(n,e,t,i,r,s,o,a){if(!i.length)return;const l=i.length>1?i[1].start-i[0].start:6e4,c=Math.max(1,l*.5),u=Math.min(i.length,r.firstIdx+r.count),f=g=>{let _=0,x=i.length-1;for(;_<=x;){const p=_+x>>1,d=i[p].start-g;if(Math.abs(d)<=c)return p;d<0?_=p+1:x=p-1}return-1},h=7;for(const g of t){const _=f(g.timestamp);if(_<0||_<r.firstIdx||_>=u)continue;const x=Vi(_,r.firstIdx,a),p=Xn(g.price,s,o.priceY0,o.priceY1);if(p<o.priceY0||p>o.priceY1)continue;const d=g.color??(g.kind==="entry"?e.markerEntry:e.markerExit);n.fillStyle=d,n.strokeStyle=e.panelBgSolid,n.lineWidth=1,n.beginPath(),g.kind==="entry"?(n.moveTo(x,p-h),n.lineTo(x-h,p+h-1),n.lineTo(x+h,p+h-1)):(n.moveTo(x,p+h),n.lineTo(x-h,p-h+1),n.lineTo(x+h,p-h+1)),n.closePath(),n.fill(),n.stroke()}}function py(n,e,t,i,r,s=!1){const o=t.max-t.min;if(o<=0)return;const a=i.priceY1-i.priceY0,l=s?Math.max(2,Math.min(4,Math.round(a/36))):6,c=ry(o,l),u=Math.ceil(t.min/c)*c,f=s?Wh:_r;n.font=s?JS:Hi,n.fillStyle=e.text,n.strokeStyle=e.gridline,n.textBaseline="middle",n.textAlign="left",n.lineWidth=1,n.globalAlpha=.7;for(let h=u;h<=t.max;h+=c){const g=Xn(h,t,i.priceY0,i.priceY1);g<i.priceY0||g>i.priceY1||(n.beginPath(),n.moveTo(Mi,Math.round(g)+.5),n.lineTo(r-f,Math.round(g)+.5),n.stroke(),n.fillText(hr(h),r-f+3,g))}n.globalAlpha=1}function my(n,e,t,i,r,s){if(i.count<=0||!t.length)return;const a=Math.max(1,Math.floor(i.count/6));n.font=Hi,n.fillStyle=e.text,n.textBaseline="top",n.textAlign="center",n.globalAlpha=.7;const l=Math.min(t.length,i.firstIdx+i.count);for(let c=i.firstIdx;c<l;c+=a){const u=t[c];if(!u)continue;const f=Vi(c,i.firstIdx,r);n.fillText(Zc(u.start),f,s-jc+4)}n.globalAlpha=1}function gy(n,e,t,i,r,s,o,a,l){const c=Math.floor((a.x-Mi)/o),u=Math.max(0,Math.min(t.length-1,i.firstIdx+c)),f=t[u];if(!f)return;const h=Vi(u,i.firstIdx,o);n.save(),n.strokeStyle=e.accent,n.lineWidth=1,n.setLineDash([3,3]),n.globalAlpha=.6,n.beginPath(),n.moveTo(Math.round(h)+.5,s.priceY0),n.lineTo(Math.round(h)+.5,s.volumeY1||s.priceY1),n.stroke();const g=Math.max(s.priceY0,Math.min(s.priceY1,a.y));n.beginPath(),n.moveTo(Mi,Math.round(g)+.5),n.lineTo(l-_r,Math.round(g)+.5),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const _=r.max-r.min;if(_>0){const d=r.max-(g-s.priceY0)/(s.priceY1-s.priceY0)*_,C=hr(d);n.font=Hi,n.textBaseline="middle",n.textAlign="left";const T=n.measureText(C).width,E=4,R=2;n.fillStyle=e.accent,n.fillRect(l-_r+2,g-7-R,T+E*2,14+R*2),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(C,l-_r+2+E,g)}n.font=Hi,n.textBaseline="top",n.textAlign="center";const x=Zc(f.start),p=n.measureText(x).width;n.fillStyle=e.accent,n.fillRect(h-p/2-4,s.volumeY1+2,p+8,14),n.fillStyle=e.bg.startsWith("rgba(0,0,0,0)")?"#0d1520":e.bg,n.fillText(x,h,s.volumeY1+4),n.restore()}const hl=.25,pl=6,vy=`
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,_y=Wi({__name:"CathodeCandle",props:{candles:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showVolume:{type:Boolean,default:!0},volumeFraction:{default:jS},slotW:{default:8},overlays:{},markers:{},flat:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},colors:{},magnify:{type:Boolean,default:!1}},setup(n){const e=n,t=De(null),i=De(null),r={...Zt},s=De(0),o=De(0),a=De(0),l=De(1),c=De(null),u=tt(()=>Math.max(1,e.slotW*l.value));let f=null,h=!1,g,_,x,p,d;const C=`
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
`;function T(){if(!(!i.value||!t.value)){if(d=document.createElement("canvas"),e.flat){h=!0,E();return}try{f=new xa({canvas:i.value,antialias:!1,alpha:!0})}catch{h=!0}if(!h&&!f.getContext()&&(f.dispose(),f=null,h=!0),h){E();return}f.setPixelRatio(1),f.setClearColor(0,0),g=new Ma,_=new io(-1,1,1,-1,0,1),p=new Sr(d),p.minFilter=Mt,p.magFilter=Mt,x=new Sn({uniforms:{uTex:{value:p},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1},...Yc()},vertexShader:vy,fragmentShader:C,transparent:!0}),g.add(new dn(new Xi(2,2),x)),E()}}function E(){if(!t.value||!f&&!h)return;const xe=t.value.clientWidth,A=t.value.clientHeight;!xe||!A||!(d.width!==xe||d.height!==A)||(d.width=xe,d.height=A,s.value=xe,o.value=A,f?(p&&(p.dispose(),p=new Sr(d),p.minFilter=Mt,p.magFilter=Mt,x&&(x.uniforms.uTex.value=p)),f.setPixelRatio(window.devicePixelRatio||1),f.setSize(xe,A)):i.value&&(i.value.width=xe,i.value.height=A,i.value.style.width=xe+"px",i.value.style.height=A+"px"),R())}function R(){if(!(d!=null&&d.width))return;if(h){if(!i.value)return;Wf(d,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:!1,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors});const A=i.value.getContext("2d");A&&(A.clearRect(0,0,i.value.width,i.value.height),A.drawImage(d,0,0));return}if(!f||!x||!p)return;const xe=e.theme==="paper";x.uniforms.uStrength.value=e.curvature/45*.55,x.uniforms.uScanlines.value=e.scanlines&&!xe?1:0,x.uniforms.uVignette.value=xe?0:1,$c(x,e.magnify,r,d.width,d.height),Wf(d,{candles:e.candles,slotW:u.value,scrollX:a.value,theme:e.theme,glow:e.glow,showVolume:e.showVolume,volumeFraction:e.volumeFraction,hover:c.value,overlays:e.overlays,markers:e.markers,compact:e.compact,colors:e.colors}),p.needsUpdate=!0,f.render(g,_)}Xe(()=>e.theme,()=>R()),Xe(()=>e.curvature,()=>R()),Xe(()=>e.scanlines,()=>R()),Xe(()=>e.glow,()=>R()),Xe(()=>e.showVolume,()=>R()),Xe(()=>e.volumeFraction,()=>R()),Xe(()=>e.slotW,()=>R()),Xe(()=>e.candles,()=>R(),{deep:!1}),Xe(()=>e.overlays,()=>R(),{deep:!1}),Xe(()=>e.markers,()=>R(),{deep:!1}),Xe(()=>e.compact,()=>R()),Xe(()=>e.magnify,xe=>{xe||(r.x=Zt.x,r.y=Zt.y),R()}),Xe(()=>e.colors,()=>R(),{deep:!0}),Xe(()=>e.flat,()=>{console.warn("[CathodeCandle] `flat` is mount-time only; remount the component (e.g. with :key) to switch pipelines.")}),Xe(a,()=>R()),Xe(l,()=>R()),Xe(c,()=>R()),Xe(u,()=>R());let D=null,P=null,F=0;const S=Fi("cathodeResetTick",De(0));Xe(S,()=>y());function y(){cancelAnimationFrame(F),F=requestAnimationFrame(E)}function L(xe){xe.preventDefault()}function N(){f==null||f.dispose(),f=null,h=!1,T()}function H(xe){if(!i.value)return[-1,-1];const A=i.value.getBoundingClientRect();return[xe.clientX-A.left,xe.clientY-A.top]}function $(xe){var ee;const A=u.value;if(A<=0)return 0;const U=((ee=e.candles)==null?void 0:ee.length)??0,b=Math.max(1,Math.floor((s.value||1)/A)),ue=Math.max(0,U-b);return Math.max(0,Math.min(xe,ue*A))}function Z(xe){var b;if(xe.deltaX!==0||xe.shiftKey&&xe.deltaY!==0){const ue=xe.deltaX!==0?xe.deltaX:xe.deltaY;a.value=$(a.value+ue);return}if(xe.deltaY===0)return;const[A]=H(xe),U=u.value;if(A>=0&&U>0&&((b=e.candles)!=null&&b.length)){const ue=Math.max(1,Math.floor((s.value||1)/U)),ne=Math.max(0,e.candles.length-ue-Math.floor(a.value/U))+(A-8)/U,le=Math.exp(-xe.deltaY*.0015),he=Math.max(hl,Math.min(pl,l.value*le));l.value=he;const te=e.slotW*he,v=Math.max(1,Math.floor((s.value||1)/te)),m=ne-(A-8)/te,w=Math.max(0,e.candles.length-v-m);a.value=$(w*te)}else{const ue=Math.exp(-xe.deltaY*.0015);l.value=Math.max(hl,Math.min(pl,l.value*ue))}}let X=!1,K=0,k=0;function ae(xe){xe.button===0&&(X=!0,K=xe.clientX,k=a.value,c.value=null,t.value&&t.value.focus())}function J(xe){const A=Math.exp(xe*.18);l.value=Math.max(hl,Math.min(pl,l.value*A)),a.value=$(a.value)}function ge(xe){const A=u.value,U=xe.shiftKey?20:3;switch(xe.key){case"ArrowLeft":xe.preventDefault(),a.value=$(a.value+A*U);break;case"ArrowRight":xe.preventDefault(),a.value=$(a.value-A*U);break;case"ArrowUp":xe.preventDefault(),J(1);break;case"ArrowDown":xe.preventDefault(),J(-1);break;case"Home":xe.preventDefault(),a.value=$(Number.MAX_SAFE_INTEGER);break;case"End":xe.preventDefault(),a.value=0;break}}function we(xe){if(X){const A=xe.clientX-K;a.value=$(k+A);return}}function Ve(){X=!1}function re(xe){if(xe.touches.length!==1)return;const A=xe.touches[0];X=!0,K=A.clientX,k=a.value,c.value=null}function me(xe){if(!X||xe.touches.length!==1)return;xe.preventDefault();const U=xe.touches[0].clientX-K;a.value=$(k+U)}function Ee(){X=!1}function ve(xe){if(e.magnify&&i.value){const b=qc(xe,i.value);r.x=b.x,r.y=b.y,R()}if(X)return;const[A,U]=H(xe);if(A<0||U<0){c.value=null;return}c.value={x:A,y:U}}function Ne(){c.value=null,r.x=Zt.x,r.y=Zt.y,R()}Nn(()=>{document.addEventListener("mousemove",we),document.addEventListener("mouseup",Ve),Mn(()=>{var xe;T(),i.value&&(i.value.addEventListener("webglcontextlost",L),i.value.addEventListener("webglcontextrestored",N)),t.value&&(D=new ResizeObserver(()=>E()),D.observe(t.value),P=new IntersectionObserver(A=>{A.some(U=>U.isIntersecting)&&y()}),P.observe(t.value)),window.addEventListener("resize",y),(xe=window.visualViewport)==null||xe.addEventListener("resize",y)})}),qn(()=>{var xe,A,U;document.removeEventListener("mousemove",we),document.removeEventListener("mouseup",Ve),(xe=i.value)==null||xe.removeEventListener("webglcontextlost",L),(A=i.value)==null||A.removeEventListener("webglcontextrestored",N),D==null||D.disconnect(),P==null||P.disconnect(),window.removeEventListener("resize",y),(U=window.visualViewport)==null||U.removeEventListener("resize",y),cancelAnimationFrame(F),f==null||f.dispose()});const Ue=tt(()=>ea[e.theme]??ea.none),ze=tt(()=>({background:Ue.value.bg}));return(xe,A)=>(je(),xt("div",{ref_key:"wrapEl",ref:t,class:"cathode-candle-wrap",style:rn(ze.value),tabindex:"0",onKeydown:ge},[Be("canvas",{ref_key:"canvasEl",ref:i,class:"cathode-candle-canvas",onWheel:Ni(Z,["prevent"]),onMousedown:ae,onMousemove:ve,onMouseleave:Ne,onTouchstartPassive:re,onTouchmove:me,onTouchend:Ee,onTouchcancel:Ee},null,544)],36))}}),Xf=Yi(_y,[["__scopeId","data-v-8aefbc85"]]),xy=["disabled"],My=Wi({__name:"CathodeTerminal",props:{entries:{},theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},showTimestamps:{type:Boolean,default:!0},formatTs:{},wordWrap:{type:Boolean,default:!0},autoscroll:{type:Boolean,default:!0},maxLines:{default:0},prompt:{default:"→ "},disabled:{type:Boolean,default:!1},busy:{type:Boolean,default:!1},historyLimit:{default:100},magnify:{type:Boolean,default:!1}},emits:["submit"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=De(null),o=De(null),a=De(""),l=De([]),c=De(-1);let u="";function f(R){R.trim()&&(l.value.length&&l.value[l.value.length-1]===R||(l.value.push(R),l.value.length>i.historyLimit&&l.value.splice(0,l.value.length-i.historyLimit)))}function h(R){if(!i.disabled){if(R.key==="Enter"){R.preventDefault();const D=a.value;D.trim()&&f(D),c.value=-1,a.value="",r("submit",D);return}if(R.key==="ArrowUp"){if(!l.value.length)return;R.preventDefault(),c.value===-1?(u=a.value,c.value=l.value.length-1):c.value>0&&c.value--,a.value=l.value[c.value];return}if(R.key==="ArrowDown"){if(c.value===-1)return;R.preventDefault(),c.value<l.value.length-1?(c.value++,a.value=l.value[c.value]):(c.value=-1,a.value=u,u="");return}}}const g=De(!0);let _=null;function x(){_||(_=setInterval(()=>{g.value=!g.value},530))}function p(){_&&(clearInterval(_),_=null),g.value=!0}const d=tt(()=>{let R;return i.disabled?R=" ":i.busy?R="█":R=g.value?"█":" ",{level:"info",text:`${i.prompt}${a.value}${R}`}}),C=tt(()=>[...i.entries,d.value]);function T(){var R;i.disabled||(R=o.value)==null||R.focus()}Xe(()=>i.busy,(R,D)=>{D&&!R&&!i.disabled&&Mn(()=>{var P;return(P=o.value)==null?void 0:P.focus()})});function E(){var R;(R=o.value)==null||R.focus()}return e({focus:E}),Nn(()=>{x(),i.disabled||requestAnimationFrame(()=>{var R;return(R=o.value)==null?void 0:R.focus()})}),qn(()=>{p()}),(R,D)=>(je(),xt("div",{ref_key:"wrapEl",ref:s,class:"cathode-terminal-wrap",onClick:T},[St(gc,{entries:C.value,theme:n.theme,curvature:n.curvature,scanlines:n.scanlines,glow:n.glow,magnify:n.magnify,"show-timestamps":n.showTimestamps,"format-ts":n.formatTs,"word-wrap":n.wordWrap,autoscroll:n.autoscroll,"max-lines":n.maxLines},null,8,["entries","theme","curvature","scanlines","glow","magnify","show-timestamps","format-ts","word-wrap","autoscroll","max-lines"]),Bt(Be("input",{ref_key:"inputEl",ref:o,"onUpdate:modelValue":D[0]||(D[0]=P=>a.value=P),disabled:n.disabled||n.busy,class:"cathode-terminal-input-hidden",spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",type:"text","data-testid":"ct-input",onKeydown:h},null,40,xy),[[lh,a.value]])],512))}}),Yf=Yi(My,[["__scopeId","data-v-a2b39934"]]),Jc=De(0),vc=28;let _c=10,ta="cathode.layout",na=!1;const Nt=De({});function Sy(n,e="cathode.layout"){if(!na){na=!0,ta=e;try{const t=localStorage.getItem(ta);if(t){Nt.value=JSON.parse(t),$f();return}}catch{}Nt.value={...n},$f()}}function $f(){let n=10;for(const e of Object.values(Nt.value))typeof(e==null?void 0:e.zIndex)=="number"&&e.zIndex>n&&(n=e.zIndex);_c=n}function Er(){localStorage.setItem(ta,JSON.stringify(Nt.value))}function yy(n){na=!1,localStorage.removeItem(ta),Nt.value={...n},Er(),na=!0,Jc.value++}function Yh(n){_c++,Nt.value[n]&&(Nt.value[n].zIndex=_c)}function Ey(n,e){Nt.value[n].visible=e,Er()}function by(n,e){Nt.value[n].minimized=e,e&&(Nt.value[n].maximized=!1),Er()}function Ty(n,e){Nt.value[n].maximized=e,e&&(Nt.value[n].minimized=!1,Yh(n)),Er()}function wy(n,e,t){Nt.value[n].x=Math.round(e),Nt.value[n].y=Math.round(t),Er()}function Ay(n,e,t){Nt.value[n].w=Math.round(e),Nt.value[n].h=Math.round(t),Er()}function $h(){return{containers:Nt,TITLEBAR_H:vc,load:Sy,save:Er,reset:yy,bringToFront:Yh,setVisible:Ey,setMinimized:by,setMaximized:Ty,updatePos:wy,updateSize:Ay}}const Cy={class:"ws-toolbar"},Ry={key:0,class:"ws-restore-menu"},Py={key:0,class:"ws-restore-empty"},Dy=["onClick"],Ly=Wi({__name:"CathodeWorkspace",props:{storageKey:{},initialLayout:{},containerTitles:{}},setup(n){const e=n,{containers:t,load:i,reset:r,setVisible:s}=$h(),o=De(null);Ml("cathodeWorkspace",o),Ml("cathodeResetTick",Jc),Nn(()=>{if(!o.value)return;const{clientWidth:p,clientHeight:d}=o.value,C=e.initialLayout??{};i(C,e.storageKey??"cathode.layout");const T=Object.keys(t.value)[0];T&&a(T)});function a(p){var C;document.querySelectorAll(".cc").forEach(T=>T.classList.remove("cc-focused"));const d=(C=o.value)==null?void 0:C.querySelector(`#cc-${p}`);d&&d.classList.add("cc-focused")}function l(){!o.value||!e.initialLayout||r(e.initialLayout)}function c(p){const d=p.target.closest(".cc");d&&(document.querySelectorAll(".cc").forEach(C=>C.classList.remove("cc-focused")),d.classList.add("cc-focused"))}const u=De(!1),f=()=>Object.entries(t.value).filter(([,p])=>!p.visible).map(([p])=>p);function h(p){s(p,!0),u.value=!1}function g(p){if(!u.value)return;const d=p.target;!d.closest(".ws-restore-menu")&&!d.closest(".ws-btn-restore")&&(u.value=!1)}function _(p){p.key==="Escape"&&(u.value=!1)}Nn(()=>{document.addEventListener("click",g),document.addEventListener("keydown",_)}),qn(()=>{document.removeEventListener("click",g),document.removeEventListener("keydown",_)});function x(p){var d;return((d=e.containerTitles)==null?void 0:d[p])??p}return(p,d)=>(je(),xt("div",{ref_key:"workspaceEl",ref:o,class:"cathode-workspace",onMousedown:c},[yl(p.$slots,"default",{},void 0),yl(p.$slots,"overlay",{},void 0),Be("div",Cy,[n.initialLayout?(je(),xt("button",{key:0,class:"ws-btn",title:"Reset all panels to default layout",onClick:l}," ↺ Reset Layout ")):Kt("",!0),d[1]||(d[1]=Be("div",{class:"ws-sep"},null,-1)),Be("button",{class:"ws-btn ws-btn-restore",title:"Restore a closed panel",onClick:d[0]||(d[0]=C=>u.value=!u.value)}," ⊞ Restore Panel ")]),St(qm,{name:"menu"},{default:ar(()=>[u.value?(je(),xt("div",Ry,[d[3]||(d[3]=Be("div",{class:"ws-restore-title"},"Closed Panels",-1)),f().length?Kt("",!0):(je(),xt("div",Py," No closed panels ")),(je(!0),xt(qt,null,nm(f(),C=>(je(),xt("div",{key:C,class:"ws-restore-item",onClick:T=>h(C)},[d[2]||(d[2]=Be("span",{class:"ws-restore-icon"},"⊞",-1)),si(" "+_n(x(C)),1)],8,Dy))),128))])):Kt("",!0)]),_:1})],544))}}),Iy=Yi(Ly,[["__scopeId","data-v-5838d04b"]]),Uy=["id"],Ny={class:"cc-title"},Fy={key:0,class:"cc-size-badge"},Oy={class:"cc-controls"},By=["title"],ky={class:"cc-body"},zy=200,Hy=80,qf=60,Vy=Wi({__name:"CathodeContainer",props:{id:{},title:{},curvature:{},canvas:{type:Boolean}},setup(n){const e=n,{containers:t,bringToFront:i,setVisible:r,setMinimized:s,setMaximized:o,updatePos:a,updateSize:l}=$h(),c=Fi("cathodeWorkspace",De(null)),u=tt(()=>t.value[e.id]),f=tt(()=>{const J=u.value,ge=e.curvature??0;if(!J)return{};const we={"--curvature":ge};return J.maximized?{...we,left:"0px",top:"0px",width:"100%",height:"100%",zIndex:J.zIndex}:{...we,left:J.x+"px",top:J.y+"px",width:J.w+"px",height:J.minimized?vc+"px":J.h+"px",zIndex:J.zIndex,display:J.visible?"flex":"none"}});let h=!1,g=0,_=0;function x(J){var Ve;if(J.target.closest(".cc-btn")||u.value.maximized)return;i(e.id),h=!0;const ge=(Ve=c.value)==null?void 0:Ve.querySelector(`#cc-${e.id}`);if(!ge)return;const we=ge.getBoundingClientRect();g=J.clientX-we.left,_=J.clientY-we.top,document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),J.preventDefault()}function p(J){var me;if(!h||!c.value)return;const ge=c.value.getBoundingClientRect(),we=((me=u.value)==null?void 0:me.w)??300;let Ve=J.clientX-ge.left-g,re=J.clientY-ge.top-_;Ve=Math.max(qf-we,Math.min(ge.width-qf,Ve)),re=Math.max(0,Math.min(ge.height-vc,re)),a(e.id,Ve,re)}function d(){h=!1,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d)}let C=!1,T=0,E=0,R=0,D=0;const P=De("");function F(J){u.value.maximized||(i(e.id),C=!0,T=J.clientX,E=J.clientY,R=u.value.w,D=u.value.h,document.addEventListener("mousemove",S),document.addEventListener("mouseup",y),J.preventDefault(),J.stopPropagation())}function S(J){if(!C)return;const ge=Math.max(zy,R+(J.clientX-T)),we=Math.max(Hy,D+(J.clientY-E));l(e.id,ge,we),P.value=`${Math.round(ge)}×${Math.round(we)}`}function y(){C=!1,P.value="",document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y),L.value++}const L=De(0);Xe(Jc,()=>{L.value++}),qn(()=>{var J;document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y),(J=N.value)==null||J.removeEventListener("scroll",$),Z()});const N=De(null);function H(J){if(e.canvas)return[];const ge=J.children[0];return ge?Array.from(ge.children):[]}function $(){const J=N.value,ge=e.curvature??0;if(!J)return;const we=H(J);if(!we.length)return;const Ve=J.clientHeight,re=Ve/2,me=ge*.0038;we.forEach(Ee=>{if(!Ee.dataset.origFs){const ue=getComputedStyle(Ee);Ee.dataset.origFs=ue.fontSize,Ee.dataset.origLh=ue.lineHeight}if(ge===0){Ee.style.fontSize="",Ee.style.lineHeight="";return}const ve=Ee.getBoundingClientRect(),Ne=J.getBoundingClientRect(),Ue=ve.top-Ne.top+ve.height/2,ze=Math.min(1,Math.abs(Ue-re)/(Ve/2)),xe=1+me*Math.cos(ze*Math.PI/2),A=parseFloat(Ee.dataset.origFs),U=Ee.dataset.origLh,b=U==="normal"?A*1.4:parseFloat(U);isNaN(A)||(Ee.style.fontSize=`${(A*xe).toFixed(2)}px`),isNaN(b)||(Ee.style.lineHeight=`${(b*xe).toFixed(2)}px`)})}function Z(){const J=N.value;J&&H(J).forEach(ge=>{ge.style.fontSize="",ge.style.lineHeight="",delete ge.dataset.origFs,delete ge.dataset.origLh})}Xe(()=>e.curvature,J=>{(J??0)===0?Z():$()}),Nn(()=>{var J;(J=N.value)==null||J.addEventListener("scroll",$,{passive:!0}),Mn($)});function X(){s(e.id,!u.value.minimized),Mn(()=>{L.value++})}function K(){o(e.id,!u.value.maximized),Mn(()=>{L.value++})}function k(){r(e.id,!1)}function ae(){i(e.id)}return(J,ge)=>u.value&&u.value.visible?(je(),xt("div",{key:0,id:`cc-${n.id}`,class:un(["cc",{"cc-minimized":u.value.minimized,"cc-maximized":u.value.maximized,"cc-has-canvas":n.canvas}]),style:rn(f.value),onMousedown:ae},[Be("div",{class:"cc-titlebar",onMousedown:x},[ge[0]||(ge[0]=Be("span",{class:"cc-status-dot"},null,-1)),Be("span",Ny,_n(n.title),1),P.value?(je(),xt("span",Fy,_n(P.value),1)):Kt("",!0),Be("div",Oy,[Be("button",{class:"cc-btn",title:"Minimize",onClick:Ni(X,["stop"])},"─"),Be("button",{class:"cc-btn cc-btn-max",title:u.value.maximized?"Restore":"Maximize",onClick:Ni(K,["stop"])},_n(u.value.maximized?"⤡":"⤢"),9,By),Be("button",{class:"cc-btn cc-btn-close",title:"Close",onClick:Ni(k,["stop"])},"✕")])],32),Bt(Be("div",ky,[Be("div",{ref_key:"bodyEl",ref:N,class:"cc-screen",onScroll:$},[yl(J.$slots,"default",{resizeKey:L.value},void 0),ge[1]||(ge[1]=Be("div",{class:"cc-shine"},null,-1))],544)],512),[[Xr,!u.value.minimized]]),!u.value.minimized&&!u.value.maximized?(je(),xt("div",{key:0,class:"cc-resize",onMousedown:Ni(F,["stop"])},null,32)):Kt("",!0)],46,Uy)):Kt("",!0)}}),Io=Yi(Vy,[["__scopeId","data-v-d8a49f79"]]),Gy=`
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
`,Xy=100,Yy=Wi({__name:"CathodeLoader",props:{theme:{default:"none"},curvature:{default:25},scanlines:{type:Boolean,default:!0},glow:{type:Boolean,default:!0},label:{default:"BOOTING"}},setup(n){const e=n,t={none:{bg:"rgba(0,0,0,0)",text:"#33ff77",cursor:"#33ff77"},phosphor:{bg:"#060d06",text:"#33ff33",cursor:"#80ff80"},amber:{bg:"#0a0700",text:"#ffb000",cursor:"#ffd060"},paper:{bg:"rgba(0,0,0,0)",text:"#222222",cursor:"#158cba"}},i=De(null),r=De(null);let s=null,o=!1,a,l,c,u,f,h=null,g=0;function _(R){R-g>=Xy&&(d(),g=R),h=requestAnimationFrame(_)}function x(){if(!i.value||!f)return;const R=i.value.clientWidth,D=i.value.clientHeight;R<=0||D<=0||f.width===R&&f.height===D||(f.width=R,f.height=D,s&&s.setSize(R,D,!1),r.value&&(r.value.width=R,r.value.height=D,r.value.style.width=R+"px",r.value.style.height=D+"px"))}function p(){if(!(f!=null&&f.width))return;const R=f.getContext("2d");if(!R)return;const D=f.width,P=f.height,F=t[e.theme]??t.none;R.clearRect(0,0,D,P),R.fillStyle=F.bg,R.fillRect(0,0,D,P);const S=Date.now(),y=(S/500|0)%2===0,L=(S/400|0)%4;R.font=`bold ${Math.max(14,Math.min(D,P)*.06)}px monospace`,R.textAlign="center",R.textBaseline="middle",R.fillStyle=F.text,e.glow&&(R.shadowColor=F.text,R.shadowBlur=14);const N=".".repeat(L).padEnd(3," "),H=`${e.label}${N}`;if(R.fillText(H,D/2,P/2),R.shadowBlur=0,y){const $=R.measureText(H),Z=R.measureText("M").width,X=parseFloat(R.font),K=D/2+$.width/2+4,k=P/2-X/2+2;R.fillStyle=F.cursor,e.glow&&(R.shadowColor=F.cursor,R.shadowBlur=12),R.fillRect(K,k,Z*.7,X*.95),R.shadowBlur=0}}function d(){if(!f)return;if(p(),o){if(!r.value)return;const D=r.value.getContext("2d");D&&D.drawImage(f,0,0);return}if(!s||!c||!u)return;const R=e.theme==="paper";c.uniforms.uStrength.value=e.curvature/45*.55,c.uniforms.uScanlines.value=e.scanlines&&!R?1:0,c.uniforms.uVignette.value=R?0:1,u.needsUpdate=!0,s.render(a,l)}function C(){if(!(!r.value||!i.value)){f=document.createElement("canvas");try{s=new xa({canvas:r.value,antialias:!1,alpha:!0})}catch{o=!0}if(!o&&!s.getContext()&&(s.dispose(),s=null,o=!0),o){x();return}s.setPixelRatio(1),s.setClearColor(0,0),a=new Ma,l=new io(-1,1,1,-1,0,1),u=new Sr(f),u.minFilter=Mt,u.magFilter=Mt,c=new Sn({uniforms:{uTex:{value:u},uStrength:{value:0},uScanlines:{value:1},uVignette:{value:1}},vertexShader:Gy,fragmentShader:Wy,transparent:!0}),a.add(new dn(new Xi(2,2),c)),x()}}let T=null;Nn(()=>{C(),d(),h=requestAnimationFrame(_),i.value&&(T=new ResizeObserver(()=>x()),T.observe(i.value))}),qn(()=>{h!==null&&cancelAnimationFrame(h),T==null||T.disconnect(),s&&s.dispose(),u==null||u.dispose(),c==null||c.dispose()}),Xe(()=>[e.theme,e.curvature,e.scanlines,e.glow,e.label],()=>d());const E=tt(()=>({background:(t[e.theme]??t.none).bg}));return(R,D)=>(je(),xt("div",{ref_key:"wrapEl",ref:i,class:"cathode-loader-wrap",style:rn(E.value)},[Be("canvas",{ref_key:"canvasEl",ref:r,class:"cathode-loader-canvas"},null,512)],4))}}),Di=Yi(Yy,[["__scopeId","data-v-2be1f107"]]),$y={class:"demo-bar"},qy={class:"demo-tabs"},Ky={key:0},jy={key:1},Zy={key:2},Jy={class:"demo-btns"},Qy=["value"],eE={class:"tab-content"},tE={class:"tab-content"},nE={class:"tab-content"},iE={class:"tab-content"},rE=720,sE=Wi({__name:"App",setup(n){const e=De("workspace"),t=De("none"),i=tt(()=>t.value!=="paper"),r=["momentum_breakout_daily","ema_adx_daily","hh_hl_trend_follow_daily","keltner_breakout_daily","donchian_breakout_daily","hma_trend_daily","adx_psar_daily","bull_flag_breakout_long_stock_daily"],s=["BTC-USD","ETH-USD","SOL-USD","AAPL","NVDA","MSFT","TSLA","AMZN","META","GOOGL"],o=["coinbase","coinbase","coinbase","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca","alpaca"];function a(v,m){return+(Math.random()*(m-v)+v).toFixed(4)}function l(v){return v[Math.floor(Math.random()*v.length)]}function c(v){return v.toISOString().replace("T"," ").slice(0,19)}const u=Date.now(),f=["trending","ranging","volatile"],h=["NY","London","Tokyo","AH"],g=Array.from({length:240},(v,m)=>{const w=m%s.length,O=s[w],W=o[w],q=l(r),fe=u-Math.floor(Math.random()*30*24*36e5),se=Math.random()<.15,de=a(10,3e3),Ae=a(-8,22),B=+(Ae-.12).toFixed(4),ie=+(de*a(.2,2)).toFixed(2),Me=se?null:fe+Math.floor(Math.random()*15*24*36e5);return{timestamp:c(new Date(fe)),entry_timestamp:c(new Date(fe)),exit_timestamp:Me?c(new Date(Me)):"",product:O,strategy:q,exchange:W,status:se?"open":"closed",entry_price:de.toFixed(4),exit_price:se?"":a(de*.92,de*1.25).toFixed(4),pnl_pct:Ae.toFixed(4),net_pnl_pct:B.toFixed(4),size_base:a(.001,2).toFixed(6),notional:ie.toFixed(2),reason:se?"":l(["tp_hit","sl_hit","timeout","manual"]),take_profit_pct:a(10,25).toFixed(2),rsi_at_entry:a(20,80).toFixed(1),slippage_pct:(Math.random()*.08).toFixed(3),drawdown_pct:(-Math.random()*5).toFixed(2),mae_pct:(-Math.random()*3).toFixed(2),mfe_pct:(Math.random()*8).toFixed(2),hold_days:Math.floor(Math.random()*14+1),vol_score:(Math.random()*10).toFixed(1),regime:l(f),session:l(h)}}),_=v=>m=>m.value!==""&&m.value!=null&&!isNaN(Number(m.value))?Number(m.value).toFixed(v):"",x=v=>v.value!==""&&v.value!=null&&!isNaN(Number(v.value))?Number(v.value).toFixed(2)+"%":"—",p={textAlign:"right"};function d(v){var fe,se;const m=(fe=v.data)==null?void 0:fe.entry_timestamp,w=(se=v.data)==null?void 0:se.exit_timestamp;if(!m||!w)return"—";const O=new Date(w).getTime()-new Date(m).getTime();if(O<0)return"—";const W=Math.floor(O/36e5),q=Math.floor(O%36e5/6e4);return W>0?`${W}h ${q}m`:`${q}m`}const C=[{headerName:"Entry Time",width:148,sort:"desc",valueGetter:v=>v.data.entry_timestamp||v.data.timestamp||""},{headerName:"Exit Time",width:148,valueGetter:v=>v.data.exit_timestamp||""},{headerName:"Duration",width:80,valueFormatter:d,cellStyle:{...p,color:"#7a90a8"}},{headerName:"Status",width:72,filter:!0,valueGetter:v=>v.data.status??"closed",cellStyle:v=>({color:v.value==="open"?"#00bc8c":"#e74c3c"}),aggFunc:"count",aggValueFormatter:v=>`${v} rows`},{field:"product",width:105,filter:!0},{field:"exchange",width:82,filter:!0},{field:"strategy",width:220,filter:!0},{field:"entry_price",width:100,headerName:"Entry",valueFormatter:_(4),cellStyle:p},{field:"exit_price",width:100,headerName:"Exit",valueFormatter:_(4),cellStyle:p},{field:"size_base",width:88,headerName:"Size",valueFormatter:_(4),cellStyle:p},{field:"notional",width:88,headerName:"Notional",valueFormatter:_(2),cellStyle:p,aggFunc:"sum",aggValueFormatter:v=>Number(v).toFixed(2)},{field:"pnl_pct",width:80,headerName:"PnL %",valueFormatter:x,cellStyle:v=>({...p,color:Number(v.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:v=>`${Number(v).toFixed(2)}%`},{field:"net_pnl_pct",width:88,headerName:"Net PnL %",valueFormatter:x,cellStyle:v=>({...p,color:Number(v.value)>=0?"#00bc8c":"#e74c3c"}),aggFunc:"avg",aggValueFormatter:v=>`${Number(v).toFixed(2)}%`},{field:"take_profit_pct",width:72,headerName:"TP %",valueFormatter:x,cellStyle:p},{field:"rsi_at_entry",width:68,headerName:"RSI",valueFormatter:_(1),cellStyle:v=>({...p,color:Number(v.value)>65?"#e74c3c":Number(v.value)<35?"#00bc8c":"#7a90a8"}),aggFunc:"avg",aggValueFormatter:v=>Number(v).toFixed(1)},{field:"reason",width:88,filter:!0},{headerName:"Slippage %",width:72,field:"slippage_pct",cellStyle:p},{headerName:"Commission",width:88,valueGetter:v=>(Number(v.data.notional)*5e-4).toFixed(4),cellStyle:p,aggFunc:"sum",aggValueFormatter:v=>Number(v).toFixed(4)},{headerName:"Drawdown %",width:84,field:"drawdown_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:v=>`${Number(v).toFixed(2)}%`},{headerName:"MAE %",width:72,field:"mae_pct",cellStyle:{...p,color:"#e74c3c"},aggFunc:"min",aggValueFormatter:v=>`${Number(v).toFixed(2)}%`},{headerName:"MFE %",width:72,field:"mfe_pct",cellStyle:{...p,color:"#00bc8c"},aggFunc:"max",aggValueFormatter:v=>`${Number(v).toFixed(2)}%`},{headerName:"Hold Days",width:76,field:"hold_days",cellStyle:p,aggFunc:"avg",aggValueFormatter:v=>Number(v).toFixed(1)},{headerName:"Vol Score",width:76,field:"vol_score",cellStyle:p},{headerName:"Regime",width:82,field:"regime",filter:!0},{headerName:"Session",width:76,field:"session",filter:!0}],T={resizable:!0,sortable:!0},E=De(null),R=De(25),D=De(!0),P=De(!1),F=De(!1),S=De(typeof window<"u"?window.innerWidth:1200),y=tt(()=>S.value<rE);function L(){S.value=window.innerWidth}Nn(()=>window.addEventListener("resize",L)),qn(()=>window.removeEventListener("resize",L)),Xe(y,v=>{v&&e.value==="workspace"&&(e.value="grid")},{immediate:!0});const N=De(!1),H=De(""),$=De("all"),Z=De(0),X=De(!0),K=De(!1),k=De(!1);Xe(e,v=>{v==="grid"&&Z.value++});function ae(v){E.value=v.api,v.api.setGridOption("rowData",g),$.value!=="all"&&ge($.value)}function J(v){var w;const m=v.target.value;H.value=m,(w=E.value)==null||w.setGridOption("quickFilterText",m)}function ge(v){var m,w,O;$.value=v,v==="all"?(m=E.value)==null||m.setFilterModel(null):(w=E.value)==null||w.setFilterModel({status:{type:"equals",filter:v}}),(O=E.value)==null||O.onFilterChanged()}const we={trades:"Trades",chart:"Chart",log:"Log",terminal:"Terminal"};function Ve(v,m){const O=Math.round(v*.62)-12,W=O+12*2,q=v-W-12,fe=Math.round(m*.62),se=fe+12*2,de=m-se-12;return{trades:{x:12,y:12,w:O,h:fe,visible:!0,minimized:!1,maximized:!1,zIndex:1},chart:{x:W,y:12,w:q,h:fe,visible:!0,minimized:!1,maximized:!1,zIndex:2},log:{x:12,y:se,w:O,h:de,visible:!0,minimized:!1,maximized:!1,zIndex:3},terminal:{x:W,y:se,w:q,h:de,visible:!0,minimized:!1,maximized:!1,zIndex:4}}}const re=Ve(window.innerWidth,window.innerHeight-88),me=[{level:"info",text:"▲  XLM     momentum breakout     ENTRY  size 2,134.55  notional $3,140"},{level:"success",text:"✓  HIGH    ema adx               EXIT   +2.76%   pnl +$86.75"},{level:"error",text:"✕  ZEC     hh hl trend follow    EXIT   -4.00%   pnl -$120.00"},{level:"info",text:"▲  SOL     keltner breakout      ENTRY  size 1,090     notional $4,580"},{level:"success",text:"✓  AVAX    donchian breakout     EXIT   +1.12%   pnl +$23.40"},{level:"debug",text:"··  scanner pass — 142 products evaluated, 3 entries fired, 11 in cooldown"},{level:"warn",text:"⚠  rate-limit cooldown 8s on coinbase market_trades — backing off, retry in 8s"},{level:"info",text:"▲  ADA     atr trend             ENTRY  size 4,209.18  notional $2,740"},{level:"success",text:"✓  ETH     macd cross daily      EXIT   +0.83%   pnl +$41.90"},{level:"debug",text:"··  heartbeat: 23 agents alive, 4 with open positions, 0 stalled"},{level:"info",text:"▲  HBAR    rsi oversold bounce   ENTRY  size 18,420   notional $1,985"},{level:"warn",text:"⚠  spread guard: skipping FOO-USD — bid/ask 0.81% > 0.50% threshold"},{level:"success",text:"✓  PENGU   profit floor flat     EXIT   +2.53%   pnl +$248.90"},{level:"debug",text:"··  regime classified FLAT (btc 0.6%, hysteresis sticky 6/8 windows)"},{level:"info",text:"▲  LINK    bb squeeze            ENTRY  size 287       notional $4,210"},{level:"error",text:"✕  L3      macd cross daily      EXIT   -13.44%  pnl -$1,830  flagged for watchlist"},{level:"success",text:"✓  KO      bull flag breakout    EXIT   +1.94%   pnl +$189.55"},{level:"info",text:"▲  TROLL   trend tf basic        ENTRY  size 16,750   notional $750"},{level:"debug",text:'··  spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"success",text:"✓  TROLL   trend tf basic        EXIT   +3.15%   pnl +$23.70   PROFIT_FLOOR_FLAT"}];(()=>{const v=[],m=Date.now()-45e5;for(let w=0;w<140;w++){const O=me[w%me.length];v.push({ts:m+w*32e3,text:O.text,level:O.level})}return v})();const Ee=[{level:"info",text:"Scanner cycle complete — 0 candidates passed filter"},{level:"info",text:"Heartbeat OK · agents 35/35 healthy · uptime 4h 12m"},{level:"success",text:"BB_BREAKOUT entry filled · KO-USDC @ 79.68 · size 122.63 · notional $9,771.15"},{level:"warn",text:"API rate limit warning — 87/100 calls in last 60s window, backing off"},{level:"error",text:"Loop error: code: 429, message: too many requests"},{level:"debug",text:"macd.bullish=true adx.trending=true adx.bullish=true trend.up=true → MACD_TREND eligible"},{level:"info",text:"Regime classified FLAT (btc 0.6%, hysteresis sticky)"},{level:"success",text:"PROFIT_FLOOR_FLAT exit · PENGU-USDC · entry 0.009869 → 0.010183 · +2.53%"},{level:"warn",text:"Position drift: ZEC-USDC underwater 12h · holding for signal exit"},{level:"info",text:'Spec reload: macd_cross_daily — scan_whitelist now ["ETH-USD","SOL-USD"] (was wide)'},{level:"error",text:"L3-USDC × macd_cross_daily SL hit at -13.44% in 4h — flagging for watchlist"},{level:"debug",text:"Wrapping a deliberately long single-line entry to exercise word-wrap behaviour. The component should split this across multiple visual lines without breaking the surrounding theme, and continuation lines should align under the text column rather than the timestamp prefix. This is also a soft-test of monospace measurement under different canvas widths."}],ve=De([]),Ne=[{level:"info",text:"commands:"},{level:"success",text:"  help                 — this list"},{level:"success",text:"  echo <text>          — print text back"},{level:"success",text:"  time                 — ISO-8601 timestamp"},{level:"success",text:"  date                 — human-readable date"},{level:"success",text:"  whoami               — current user (faked)"},{level:"success",text:"  pwd                  — current directory (faked)"},{level:"success",text:"  uname                — fake system info"},{level:"success",text:"  ls                   — fake file listing"},{level:"success",text:"  cat <name>           — fake file contents"},{level:"success",text:"  ping <host>          — simulated latency"},{level:"success",text:"  colors               — show every log-level colour"},{level:"success",text:"  cowsay <text>        — ASCII cow"},{level:"success",text:"  joke                 — deterministic groaner"},{level:"success",text:"  motd                 — message of the day"},{level:"success",text:"  fail                 — emit a fake error"},{level:"success",text:"  clear                — wipe scrollback"}],Ue=De([{level:"info",text:"CathodeTerminal demo"},...Ne]),ze=De(!1),xe={help:()=>Ne,echo:v=>({level:"info",text:v||""}),time:()=>({level:"success",text:new Date().toISOString()}),date:()=>({level:"success",text:new Date().toString().replace(/\(.*\)$/,"").trim()}),whoami:()=>({level:"success",text:"cathode-operator"}),pwd:()=>({level:"success",text:"/home/cathode/projects/demo"}),uname:()=>[{level:"success",text:"Cathode 1.0.0 (canvas-1280x720)"},{level:"debug",text:"kernel: vue3-three.js / shader: barrel-r2 / tube: phosphor-emerald"}],ls:()=>[{level:"info",text:"README.md      ROADMAP.md      package.json"},{level:"info",text:"src/           demo/           tests/"},{level:"info",text:"dist/          node_modules/   playwright.config.ts"}],cat:v=>{const m=v.trim();return m?m==="README.md"?[{level:"info",text:"# @stratchai/cathode"},{level:"info",text:""},{level:"info",text:"CRT-styled Vue 3 component library for financial UIs."},{level:"info",text:"Barrel-distorted canvas controls — terminals from a trading floor."}]:m==="package.json"?[{level:"info",text:"{"},{level:"info",text:'  "name": "@stratchai/cathode",'},{level:"info",text:'  "version": "0.1.0",'},{level:"info",text:'  "type": "module"'},{level:"info",text:"}"}]:{level:"error",text:`cat: ${m}: no such file (try README.md or package.json)`}:{level:"error",text:"usage: cat <file>"}},ping:v=>{const m=v.trim()||"localhost",w=[{level:"info",text:`PING ${m}: 56 data bytes`}];for(let O=0;O<4;O++){const W=(12+Math.random()*18).toFixed(1);w.push({level:"success",text:`64 bytes from ${m}: icmp_seq=${O} ttl=64 time=${W} ms`})}return w},colors:()=>[{level:"info",text:"level: info    — neutral output"},{level:"success",text:"level: success — happy path"},{level:"warn",text:"level: warn    — heads-up"},{level:"error",text:"level: error   — something broke"},{level:"debug",text:"level: debug   — diagnostic chatter"}],cowsay:v=>{const m=v.trim()||"moo",w="─".repeat(Math.max(2,m.length+2));return[{level:"info",text:` ╭${w}╮`},{level:"info",text:` │ ${m} │`},{level:"info",text:` ╰${w}╯`},{level:"info",text:"         \\   ^__^"},{level:"info",text:"          \\  (oo)\\_______"},{level:"info",text:"             (__)\\       )\\/\\"},{level:"info",text:"                 ||----w |"},{level:"info",text:"                 ||     ||"}]},joke:()=>{const v=["There are 10 kinds of people: those who get binary and those who don't.","Why did the programmer quit his job? Because he didn't get arrays.",'A SQL query walks into a bar, walks up to two tables and asks: "may I JOIN you?"',"I would tell you a UDP joke, but you might not get it.","Why do Java developers wear glasses? Because they don't C#."];return{level:"info",text:v[Math.floor(Math.random()*v.length)]}},motd:()=>[{level:"success",text:"═══ Cathode CRT — message of the day ═══"},{level:"info",text:"Phosphor temperature nominal. Scanlines steady. Glow within tolerance."},{level:"debug",text:"last boot: just now · uptime: a few moments · load: 0.42"}],fail:()=>({level:"error",text:"simulated failure: nothing actually went wrong"})};function A(v){Ue.value=[...Ue.value,{level:"info",text:`→ ${v}`}];const m=v.trim();if(!m)return;if(m==="clear"){Ue.value=[];return}const w=m.indexOf(" "),O=w===-1?m:m.slice(0,w),W=w===-1?"":m.slice(w+1),q=xe[O];let fe;q?fe=q(W):fe={level:"warn",text:`unknown command: ${O} — type 'help' for the demo vocabulary`},ze.value=!0,setTimeout(()=>{if(fe!==null){const se=Array.isArray(fe)?fe:[fe];Ue.value=[...Ue.value,...se]}ze.value=!1},180)}function U(v){const m=[];let w=6e4;const O=Date.now()-v*36e5;for(let W=0;W<v;W++){const q=(Math.random()-.495)*w*.012,fe=w,se=Math.max(1,w+q),de=Math.max(fe,se)*(1+Math.random()*.005),Ae=Math.min(fe,se)*(1-Math.random()*.005),B=Math.round(20+Math.random()*80);m.push({start:O+W*36e5,open:fe,close:se,high:de,low:Ae,volume:B}),w=se}return m}const b=De(U(300));function ue(v,m){const w=new Array(v.length).fill(NaN);let O=0;for(let W=0;W<v.length;W++)O+=v[W],W>=m&&(O-=v[W-m]),W+1>=m&&(w[W]=O/m);return w}function ee(v,m){const w=new Array(v.length).fill(NaN);if(!v.length)return w;const O=2/(m+1);let W=v[0];w[0]=W;for(let q=1;q<v.length;q++)W=v[q]*O+W*(1-O),w[q]=W;for(let q=0;q<Math.min(m-1,v.length);q++)w[q]=NaN;return w}function ne(v,m=20,w=2){const O=ue(v,m),W=new Array(v.length).fill(NaN),q=new Array(v.length).fill(NaN);for(let fe=m-1;fe<v.length;fe++){let se=0;for(let Ae=fe-m+1;Ae<=fe;Ae++){const B=v[Ae]-O[fe];se+=B*B}const de=Math.sqrt(se/m);W[fe]=O[fe]+w*de,q[fe]=O[fe]-w*de}return{upper:W,middle:O,lower:q}}const le=tt(()=>{const v=b.value.map(w=>w.close),m=ne(v,20,2);return[{kind:"band",upper:m.upper,middle:m.middle,lower:m.lower,color:"#40a0f0",fillAlpha:.06,middleDashed:!0,label:"BB(20,2)"},{kind:"line",data:ee(v,10),color:"#26a69a",lineWidth:1,label:"EMA(10)"},{kind:"line",data:ee(v,50),color:"#ffd060",lineWidth:1,label:"EMA(50)"}]}),he=tt(()=>{const v=b.value;if(v.length<130)return[];const m=w=>v[w];return[{timestamp:m(v.length-120).start,price:m(v.length-120).low,kind:"entry",label:"BB_BREAKOUT_ENTRY"},{timestamp:m(v.length-100).start,price:m(v.length-100).high,kind:"exit",label:"PROFIT_FLOOR"},{timestamp:m(v.length-80).start,price:m(v.length-80).low,kind:"entry",label:"EMA_CROSS_ENTRY"},{timestamp:m(v.length-60).start,price:m(v.length-60).high,kind:"exit",label:"EMA_CROSS_EXIT"},{timestamp:m(v.length-40).start,price:m(v.length-40).low,kind:"entry",label:"ADX_PSAR_ENTRY"},{timestamp:m(v.length-20).start,price:m(v.length-20).high,kind:"exit",label:"PROFIT_FLOOR_FLAT"}]});typeof window<"u"&&(window.__cathodeDebug={getDemoMarkerCanvasCoords(){const v=b.value,m=he.value;if(!v.length||!m.length)return[];const w=document.querySelector('.tab-content:not([style*="display: none"]) canvas');if(!w)return[];const O=w.width/(window.devicePixelRatio||1),W=w.height/(window.devicePixelRatio||1),q=8,fe=56,se=8,de=22,Ae=8,B=O-q-fe,ie=Math.max(1,Math.floor(B/Ae)),Me=Math.max(0,v.length-ie);let Te=1/0,ye=-1/0;for(let be=Me;be<v.length;be++)v[be].low<Te&&(Te=v[be].low),v[be].high>ye&&(ye=v[be].high);const ke=(ye-Te)*.04;Te-=ke,ye+=ke;const Ge=se,et=se+(W-se-de-4)*(1-.18),G=[];for(const be of m){const ce=v[1].start-v[0].start;let pe=-1;for(let qe=0;qe<v.length;qe++)if(Math.abs(v[qe].start-be.timestamp)<=ce*.5){pe=qe;break}if(pe<Me||pe>=v.length)continue;const Le=q+(pe-Me+.5)*Ae,Pe=Ge+(1-(be.price-Te)/(ye-Te))*(et-Ge);G.push({x:Le,y:Pe,kind:be.kind,label:be.label||""})}return G}});function te(){const v=[],m=Date.now()-54e5;for(let w=0;w<320;w++){const O=Ee[w%Ee.length];v.push({ts:m+w*16e3,text:O.text,level:O.level})}ve.value=v}return te(),(v,m)=>(je(),xt("div",{class:un(["demo-shell",{"cathode-light":!i.value,mobile:y.value}])},[Be("div",$y,[m[25]||(m[25]=Be("span",{class:"demo-title"},"⬛ CATHODE",-1)),Be("div",qy,[y.value?Kt("",!0):(je(),xt("button",{key:0,class:un(["tab-btn",{active:e.value==="workspace"}]),onClick:m[0]||(m[0]=w=>e.value="workspace")}," Workspace ",2)),Be("button",{class:un(["tab-btn",{active:e.value==="grid"}]),onClick:m[1]||(m[1]=w=>e.value="grid")}," Grid ",2),Be("button",{class:un(["tab-btn",{active:e.value==="log"}]),onClick:m[2]||(m[2]=w=>e.value="log")}," Log ",2),Be("button",{class:un(["tab-btn",{active:e.value==="candle"}]),onClick:m[3]||(m[3]=w=>e.value="candle")}," Candle ",2),Be("button",{class:un(["tab-btn",{active:e.value==="terminal"}]),onClick:m[4]||(m[4]=w=>e.value="terminal")}," Terminal ",2)]),m[26]||(m[26]=Be("label",null,"Theme",-1)),Bt(Be("select",{"onUpdate:modelValue":m[5]||(m[5]=w=>t.value=w)},[...m[17]||(m[17]=[Be("option",{value:"none"},"Default (dark)",-1),Be("option",{value:"phosphor"},"Phosphor Green",-1),Be("option",{value:"amber"},"Amber",-1),Be("option",{value:"paper"},"Paper (light)",-1)])],512),[[mg,t.value]]),Be("label",null,"Curve "+_n(R.value),1),Bt(Be("input",{type:"range",min:"0",max:"45",step:"1","onUpdate:modelValue":m[6]||(m[6]=w=>R.value=w),style:{width:"110px"}},null,512),[[lh,R.value,void 0,{number:!0}]]),Be("label",null,[Bt(Be("input",{type:"checkbox","onUpdate:modelValue":m[7]||(m[7]=w=>D.value=w)},null,512),[[Zi,D.value]]),m[18]||(m[18]=si(" Scanlines",-1))]),Be("label",null,[Bt(Be("input",{type:"checkbox","onUpdate:modelValue":m[8]||(m[8]=w=>N.value=w)},null,512),[[Zi,N.value]]),m[19]||(m[19]=si(" Glow",-1))]),Be("label",null,[Bt(Be("input",{type:"checkbox","onUpdate:modelValue":m[9]||(m[9]=w=>P.value=w),"data-testid":"cf-magnify"},null,512),[[Zi,P.value]]),m[20]||(m[20]=si(" Magnify ",-1))]),Be("label",null,[Bt(Be("input",{type:"checkbox","onUpdate:modelValue":m[10]||(m[10]=w=>F.value=w),"data-testid":"cf-show-loaders"},null,512),[[Zi,F.value]]),m[21]||(m[21]=si(" Show loaders ",-1))]),e.value==="candle"?(je(),xt("label",Ky,[Bt(Be("input",{type:"checkbox","onUpdate:modelValue":m[11]||(m[11]=w=>X.value=w),"data-testid":"cf-show-indicators"},null,512),[[Zi,X.value]]),m[22]||(m[22]=si(" Indicators ",-1))])):Kt("",!0),e.value==="candle"?(je(),xt("label",jy,[Bt(Be("input",{type:"checkbox","onUpdate:modelValue":m[12]||(m[12]=w=>K.value=w),"data-testid":"cf-flat"},null,512),[[Zi,K.value]]),m[23]||(m[23]=si(" Flat (no GL) ",-1))])):Kt("",!0),e.value==="candle"?(je(),xt("label",Zy,[Bt(Be("input",{type:"checkbox","onUpdate:modelValue":m[13]||(m[13]=w=>k.value=w),"data-testid":"cf-compact"},null,512),[[Zi,k.value]]),m[24]||(m[24]=si(" Compact ",-1))])):Kt("",!0),m[27]||(m[27]=Be("div",{class:"demo-spacer"},null,-1)),e.value==="grid"?(je(),xt(qt,{key:3},[Be("div",Jy,[Be("button",{class:un({active:$.value==="all"}),onClick:m[14]||(m[14]=w=>ge("all"))},"All",2),Be("button",{class:un({active:$.value==="open"}),onClick:m[15]||(m[15]=w=>ge("open"))},"Open",2),Be("button",{class:un({active:$.value==="closed"}),onClick:m[16]||(m[16]=w=>ge("closed"))},"Closed",2)]),Be("input",{class:"demo-filter",placeholder:"Quick filter…",value:H.value,onInput:J},null,40,Qy)],64)):Kt("",!0)]),Bt(Be("div",eE,[F.value?(je(),At(Di,{key:0,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow"])):(je(),At(Hf,{key:Z.value,"column-defs":C,"default-col-def":T,"row-height":28,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,magnify:P.value,pagination:!0,"pagination-page-size":50,onGridReady:ae},null,8,["theme","curvature","scanlines","glow","magnify"]))],512),[[Xr,e.value==="grid"]]),Bt(Be("div",tE,[F.value?(je(),At(Di,{key:0,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow"])):(je(),At(gc,{key:1,entries:ve.value,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,magnify:P.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))],512),[[Xr,e.value==="log"]]),Bt(Be("div",nE,[F.value?(je(),At(Di,{key:0,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow"])):(je(),At(Xf,{key:`cf-${K.value}`,candles:b.value,overlays:X.value?le.value:[],markers:X.value?he.value:[],theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,flat:K.value,compact:k.value,magnify:P.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","flat","compact","magnify"]))],512),[[Xr,e.value==="candle"]]),Bt(Be("div",iE,[F.value?(je(),At(Di,{key:0,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow"])):(je(),At(Yf,{key:1,entries:Ue.value,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,magnify:P.value,busy:ze.value,prompt:"→ ",placeholder:"type a command (try: help, echo …, time)",onSubmit:A},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))],512),[[Xr,e.value==="terminal"]]),Bt(St(Iy,{"storage-key":"cathode.demo.layout","initial-layout":_d(re),"container-titles":we},{default:ar(()=>[St(Io,{id:"trades",title:"Trades",curvature:R.value,canvas:""},{default:ar(({resizeKey:w})=>[F.value?(je(),At(Di,{key:0,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,label:"LOADING TRADES"},null,8,["theme","curvature","scanlines","glow"])):(je(),At(Hf,{key:w,"column-defs":C,"default-col-def":T,"row-height":26,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,magnify:P.value,pagination:!0,"pagination-page-size":50,onGridReady:ae},null,8,["theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),St(Io,{id:"chart",title:"Chart",curvature:R.value,canvas:""},{default:ar(({resizeKey:w})=>[F.value?(je(),At(Di,{key:0,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,label:"STREAMING CANDLES"},null,8,["theme","curvature","scanlines","glow"])):(je(),At(Xf,{key:w,candles:b.value,overlays:le.value,markers:he.value,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,magnify:P.value},null,8,["candles","overlays","markers","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),St(Io,{id:"log",title:"Log",curvature:R.value,canvas:""},{default:ar(()=>[F.value?(je(),At(Di,{key:0,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,label:"OPENING LOG"},null,8,["theme","curvature","scanlines","glow"])):(je(),At(gc,{key:1,entries:ve.value,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,magnify:P.value,"word-wrap":!1},null,8,["entries","theme","curvature","scanlines","glow","magnify"]))]),_:1},8,["curvature"]),St(Io,{id:"terminal",title:"Terminal",curvature:R.value,canvas:""},{default:ar(()=>[F.value?(je(),At(Di,{key:0,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,label:"ATTACHING TTY"},null,8,["theme","curvature","scanlines","glow"])):(je(),At(Yf,{key:1,entries:Ue.value,theme:t.value,curvature:R.value,scanlines:D.value,glow:N.value,magnify:P.value,busy:ze.value,prompt:"→ ",onSubmit:A},null,8,["entries","theme","curvature","scanlines","glow","magnify","busy"]))]),_:1},8,["curvature"])]),_:1},8,["initial-layout"]),[[Xr,e.value==="workspace"]])],2))}}),oE=Yi(sE,[["__scopeId","data-v-185622a8"]]);yg(oE).mount("#app");
